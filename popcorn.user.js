// ==UserScript==
// @name Popcorn
// @namespace https://github.com/workmajj/popcorn
// @description Adds Hunch recommendations to Google's Movie Showtimes pages.
// @version 0.2
// ==/UserScript==

// Describes where to find data on a given page.

var site = {
    "urls": ["http://google.com/movies", "http://www.google.com/movies"],
    "path": "div.movie",
    "id_path": ["span.info", "a.fl"],
    "id_prefix": "imdb_",
    "link_match": "IMDb",
    "link_regex": "http:\\/\\/www.imdb.com\\/title\\/(tt\\d+)\\/",
    "rec_path": ["div.name"]
};

// Check if the script applies to a given page based on the URL.

var applyScript = false;
var i = 0;
while (applyScript === false) {
    if (i >= site.urls.length) { break; }
    if (location.href.indexOf(site.urls[i]) === 0) { applyScript = true; }
    i++;
}

if (applyScript) { launch(main, site); }

// Chrome doesn't support the @require header, so add jQuery manually:
// http://erikvold.com/blog/index.cfm/2010/6/14/using-jquery-with-a-user-script

function launch(callback, data) {
    var script = document.createElement('script');
    script.setAttribute('src',
        'http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js');
    script.addEventListener('load', function() {
        var script = document.createElement('script');
        script.textContent = '(' + callback.toString() + ')('
            + JSON.stringify(data) + ');';
        document.body.appendChild(script);
    }, false);
    document.body.appendChild(script);
}

function main(site) {
    
    // A Base64-encoded GIF to show while waiting for Hunch recs to load.
    
    var loadingImage = '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\
        SRlycNcWskCkApIyEAOwAAAAAAAAAAAA==';
    
    // Given an array, build up a jQuery object for some selector path.
    
    function buildPath(base, selectorList) {
        var path = base;
        for (var i = 0; i < selectorList.length; i++) {
            path = path.children(selectorList[i]);
        }
        return path;
    }
    
    // Create a set of IMDB IDs by iterating through all div.movie elements
    // and capturing IDs where present. At the same time, append a div to 
    // any movie with an ID, which will be used to display the Hunch score.
    
    var itemIds = {};
    
    $(site.path).each(function() {
        var id = false;
        var idPath = buildPath($(this), site.id_path);
        idPath.filter(function() {
            return this.innerHTML.match(site.link_match);
        }).each(function() {
            id = this.href.match(site.link_regex)[1];
        });
        if (id) {
            itemIds[id] = true;
            var recPath = buildPath($(this), site.rec_path);
            var div = '<div class="popcorn-' + id + '"></div>';
            recPath.append(div);
            var img = '<img src="data:image/gif;base64,' + loadingImage
                + '" style="float:right" />';
            recPath.children('div.popcorn-' + id).append(img);
        }
    });
    
    // Hunch API automatically calls hnAsyncInit once loaded.
    
    $.getScript('http://hunch.com/media/js/hunch-api.js');
    
    // General idea is to use IMDB IDs as aliases to fetch whichever IDs (IMDB,
    // Hunch, Freebase, etc.) Hunch uses internally. These vary depending on
    // the item's source and how long it's been on Hunch. Using these IDs, then
    // query to get customized recommendations. Choice of IDs affects results.
    
    // http://hunch.com/developers/v1/resources/console/
    
    window.hnAsyncInit = function() {
        for (id in itemIds) {
            query = {
                'auth_basic': 1,
                'result_ids': site.id_prefix + id
            };
            Hunch.api('get-results', query, getRec(id));
        }
    }
    
    function getRec(id) {
        return function(response, status) {
            if (response.results.length === 1) {
                hunchId = response.results[0].result_id;
                query = {
                    'auth_basic': 1,
                    'result_ids': hunchId
                };
                Hunch.api('get-recommendations', query,
                    displayRec(id, hunchId));
            }
        }
    }
    
    function displayRec(id, hunchId) {
        return function(response, status) {
            if (response.recommendations.length === 1) {
                rec = response.recommendations[0].stars;
                showOneRec(id, hunchId, rec.toFixed(1));
            }
        }
    }
    
    function showOneRec(id, hunchId, rec) {
        link = 'http://hunch.com/item/' + hunchId + '/';
        href = '<a href="' + link + '" target="_blank">' + rec + '</a>';
        $('div.popcorn-' + id).children('img').remove();
        $('div.popcorn-' + id).append(href);
        
        if (rec < 1)                  { background = '#FFFFFF'; } // 0%
        else if (rec >= 1 && rec < 2) { background = '#F4D9D1'; } // 20%
        else if (rec >= 2 && rec < 3) { background = '#E8B3A4'; } // 40%
        else if (rec >= 3 && rec < 4) { background = '#DD8C76'; } // 60%
        else if (rec >= 4 && rec < 5) { background = '#D16649'; } // 80%
        else                          { background = '#C6401B'; } // 100%
        
        $('div.popcorn-' + id).children('a').css({
            'background-color': background,
            'color': '#FFF',
            'float': 'right',
            'padding': '0.2em'
        });
    }
    
}
