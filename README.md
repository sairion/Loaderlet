##Loaderlet v0.1
===

Loaderlet is a simple(and messy) javascript library loader for develop/test use.

Currently available libraries:

jQuery
Zepto
Backbone
Underscore
Mordernizr
D3
Raphael
EaselJS

Use it by putting this address into bookmark:

```
javascript:(function(){if(!lodrlt){var a=document.createElement("script");a.setAttribute("charset","UTF-8");a.setAttribute("src","https://raw.github.com/sairion/Loaderlet/master/src/loaderlet_v0_01_min.js?"+99999999*Math.random());document.body.appendChild(a)}else lodrlt()})(window);
```
(or you can get draggable link in src/testpage.html)

You can use Loaderlet by pushing the bookmarklet or calling the function like:

```
lodrlt();
```

Type the number of the library you want to use on the prompt, and that's all about it.

Should work nice on Webkit browsers, not sure about others though.

Any questions and suggestions will be gratefully accepted:

jayaugustlee at google mail service.

Want chatter?
Find me in #design channel in irc.ozinger.org