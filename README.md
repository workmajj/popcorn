Popcorn
====================

A userscript that adds Hunch recs to Google's Movie Showtimes pages.

Contact
-------

John J. Workman ([@workmajj](https://twitter.com/workmajj))

Description
-----------

[Hunch](http://hunch.com/) is an NYC-based startup whose mission is to build a [Taste Graph](http://blog.hunch.com/?p=47384) of the Internet. By connecting users and their preferences, Hunch can accurately predict their likes and dislikes, and even recommend new things. Hunch is particularly good at overcoming the [cold-start problem](http://en.wikipedia.org/wiki/Cold_start).

Popcorn is a [userscript](http://wiki.greasespot.net/User_script) that runs as a native Chrome extension, or in Firefox under [Greasemonkey](http://www.greasespot.net/). Popcorn adds Hunch recommendations to Google's [Movie Showtimes](http://www.google.com/movies) pages by appending a score next to each title, which is Hunch's prediction of how much you'll like the film.

Installation
------------

1. You'll need to [sign up](http://hunch.com/people/create-account/) for a Hunch account in order to use Popcorn. (The more you use Hunch, the more accurate the recs will be.)

2. [Download](https://github.com/workmajj/popcorn/raw/master/popcorn.user.js) the script. If you're using Chrome, you'll be prompted to install it immediately. On Firefox you'll need to [get Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) first.

3. Navigate to [a Movie Showtimes page](http://www.google.com/movies?near=11205). You can change your location since Popcorn will add ratings to any page whose URL begins with:

        http://google.com/movies
        http://www.google.com/movies
        https://google.com/movies
        https://www.google.com/movies

4. Popcorn will ask you to log in to your Hunch account if you haven't already. Then you'll see ratings load next to each title. The ratings are color-coded, with better ratings appearing bolder. If you're interested, you can click a rating to open Hunch's page for that film.
