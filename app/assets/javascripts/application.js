// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
if (jQuery.webshims && window.Modernizr) {
    webshims.setOptions('mediaelement', {
        replaceUI: 'auto'
    });
    webshims.setOptions('track', {
        override: 'auto'
    });
    webshims.polyfill('mediaelement track');
}


//add some cues to the display
jQuery(function ($) {
    //add a subtitle track to a video
    var track = $('video').addTextTrack('subtitles', 'just a test', 'en');
    //make it visible
    track.mode = 'showing';

    // add some cues to show the text
    track.addCue(new VTTCue(0.5, 5, "My first Cue"));
    track.addCue(new VTTCue(5.1, 9.5, "My <u>underlined</u> Cue"));
    track.addCue(new VTTCue(9.9, 36, "My <c.customstyle>custom classname</c> Cue"));

    //bind a cuechange-listener
    $(track).on('cuechange', function () {
        if (window.console) {
            var activeCues = $.prop(this, 'activeCues');
            console.log(activeCues && activeCues[0] || 'exit');
        }
    });
});