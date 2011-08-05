Popcorn
=======

Adds Hunch recommendations to Google's Movie Showtimes pages.

Contact
-------

John J. Workman ([@workmajj](https://twitter.com/workmajj))

Description
-----------

[Hunch](http://hunch.com/) is an NYC-based startup whose mission is to build a [Taste Graph](http://blog.hunch.com/?p=47384) of the Internet. By connecting users and their preferences, Hunch can accurately predict their likes and dislikes, and even recommend new things. Hunch is particularly good at overcoming the [cold-start problem](http://en.wikipedia.org/wiki/Cold_start).

Popcorn is a [userscript](http://wiki.greasespot.net/User_script) that runs as a native Chrome extension, or in Firefox under [Greasemonkey](http://www.greasespot.net/). Popcorn adds Hunch recommendations to Google's [Movie Showtimes](http://www.google.com/movies) pages by appending a score next to each title, which is Hunch's prediction of how much you'll like the film.

Installation & Usage
--------------------

1. You'll need to [sign up](http://hunch.com/people/create-account/) for a Hunch account in order to use Popcorn. (The more you use Hunch, the more accurate the recs will be.)

2. [Download](https://github.com/workmajj/popcorn/raw/master/popcorn.user.js) the script. If you're using Chrome, you'll be prompted to install it immediately. On Firefox you'll need to [get Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) first.

3. Navigate to [a Movie Showtimes page](http://www.google.com/movies?near=11205). You can change your location since Popcorn will add ratings to any page whose URL begins with:

        http://google.com/movies
        http://www.google.com/movies
        https://google.com/movies
        https://www.google.com/movies

4. Popcorn will ask you to log in to your Hunch account if you haven't already. (Note that credentials are sent in the clear using basic auth.)

5. Now you'll see ratings load next to each title. The ratings are color-coded, with better ratings appearing bolder.

6. If you're interested, you can click a rating to open Hunch's page for that film in a new window/tab.

[License](http://en.wikipedia.org/wiki/BSD_licenses#3-clause_license_.28.22New_BSD_License.22_or_.22Modified_BSD_License.22.29)
-------

Copyright (c) 2011, John J. Workman. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

* The names of its contributors may not be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDERS OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
