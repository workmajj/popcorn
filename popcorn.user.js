// Chrome uses the @match header; Firefox uses @include. Chrome will process
// @include, but incorrectly warn about the script accessing too wide a scope.
// Setting the headers up as below solves this and satisfies both browsers.

// ==UserScript==
// @name Popcorn
// @namespace https://github.com/workmajj/popcorn
// @description Adds Hunch recs to Google's Movie Showtimes pages.
// @match http://google.com/movies*
// @match http://www.google.com/movies*
// @match https://google.com/movies*
// @match https://www.google.com/movies*
// @include http://google.com/movies*
// @include http://www.google.com/movies*
// @include https://google.com/movies*
// @include https://www.google.com/movies*
// @version 0.1
// ==/UserScript==

function main() {
    
    // A Base64-encoded GIF to show while waiting for Hunch recs to load.
    
    loadingImage = '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';
    
    // Create a set of IMDB IDs by iterating through all div.movie elements and
    // capturing IDs where present. At the same time, append a div to any movie
    // with an ID, which will be used later to display the film's Hunch score.
    
    imdbIds = {};
    
    $('div.movie').each(function() {
        imdbId = false;
        $(this).children('span.info').children('a.fl').filter(function() {
            return this.innerHTML.match(/IMDb/);
        }).each(function() {
            // e.g. http://www.imdb.com/title/tt0169173/
            imdbId = this.href.match(/http:\/\/www.imdb.com\/title\/(tt\d+)\//)[1];
        });
        if (imdbId) {
            imdbIds[imdbId] = true;
            div = '<div class="rec-' + imdbId + '"></div>';
            $(this).children('div.name').append(div);
            img = '<img src="data:image/gif;base64,' + loadingImage + '" style="float:right" />';
            $(this).children('div.name').children('div.rec-' + imdbId).append(img);
        }
    });
    
    // Hunch API automatically calls hnAsyncInit once loaded.
    
    $.getScript('http://hunch.com/media/js/hunch-api.js');
    
    // General idea is to use IMDB IDs as aliases to fetch whichever IDs (IMDB,
    // Hunch, Freebase, etc.) Hunch uses internally. These vary depending on
    // the item's source and how long it's been on Hunch. Using these IDs, then
    // query to get customized recommendations. Choice of IDs affects results:
    // http://hunch.com/forums/hunch-api/calling-get-recommendations-with-aliases-vs-/
    
    window.hnAsyncInit = function() {
        for (imdbId in imdbIds) {
            query = {
                'auth_basic': 1,
                'result_ids': 'imdb_' + imdbId
            };
            // http://hunch.com/developers/v1/resources/console/#get-results
            Hunch.api('get-results', query, getRecs(imdbId));
        }
    }
    
    function getRecs(imdbId) {
        return function(response, status) {
            if (response.results.length === 1) {
                hunchId = response.results[0].result_id;
                query = {
                    'auth_basic': 1,
                    'result_ids': hunchId
                };
                // http://hunch.com/developers/v1/resources/console/#get-recommendations
                Hunch.api('get-recommendations', query, displayRecs(imdbId, hunchId));
            }
        }
    }
    
    function displayRecs(imdbId, hunchId) {
        return function(response, status) {
            if (response.recommendations.length === 1) {
                rec = response.recommendations[0].stars;
                showOneRec(imdbId, hunchId, rec.toFixed(1));
            }
        }
    }
    
    function showOneRec(imdbId, hunchId, rec) {
        link = 'http://hunch.com/item/' + hunchId + '/';
        href = '<a href="' + link + '" target="_blank">' + rec + '</a>';
        $('div.rec-' + imdbId).children('img').remove();
        $('div.rec-' + imdbId).append(href);
        
        if (rec < 1)                  { background = '#FFFFFF'; } // 0%
        else if (rec >= 1 && rec < 2) { background = '#F4D9D1'; } // 20%
        else if (rec >= 2 && rec < 3) { background = '#E8B3A4'; } // 40%
        else if (rec >= 3 && rec < 4) { background = '#DD8C76'; } // 60%
        else if (rec >= 4 && rec < 5) { background = '#D16649'; } // 80%
        else                          { background = '#C6401B'; } // 100%
        
        $('div.rec-' + imdbId).children('a').css({
            'background-color': background,
            'color': '#FFF',
            'float': 'right',
            'padding': '0.2em'
        });
    }
    
}

// Chrome doesn't support the @require header yet, so add jQuery manually:
// http://erikvold.com/blog/index.cfm/2010/6/14/using-jquery-with-a-user-script

function addJQuery(callback) {
    var script = document.createElement('script');
    script.setAttribute('src', 'http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js');
    script.addEventListener('load', function() {
        var script = document.createElement('script');
        script.textContent = '(' + callback.toString() + ')();';
        document.body.appendChild(script);
    }, false);
    document.body.appendChild(script);
}

addJQuery(main);
