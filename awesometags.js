/* awesome-tags */
$(document).ready(function(){ 
  //Irony
  $("body").find("irony").addClass('irony');

  //Awesome
  $("body").find("awesome").addClass('awesome');

  //Pony
  $("body").find("pony").addClass('pony').lettering();

  //Magic-Pony
  $("body").find("magic-pony").addClass('magic-pony').lettering();

  //Brilliant
  $("body").find("brilliant").addClass('brilliant');

  //Clunky
  $('body').find('clunky').addClass('clunky').lettering();
});
 
 
/*
* Lettering.JS 0.6.1
*
* Copyright 2010, Dave Rupert http://daverupert.com
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Thanks to Paul Irish - http://paulirish.com - for the feedback.
*
* Date: Mon Sep 20 17:14:00 2010 -0600
*/
(function($){function injector(t,splitter,klass,after){var a=t.text().split(splitter),inject='';if(a.length){$(a).each(function(i,item){inject+='<span class="'+klass+(i+1)+'">'+item+'</span>'+after;});t.empty().append(inject);}}
var methods={init:function(){return this.each(function(){injector($(this),'','char','');});},words:function(){return this.each(function(){injector($(this),' ','word',' ');});},lines:function(){return this.each(function(){var r="eefec303079ad17405c889e092e105b0";injector($(this).children("br").replaceWith(r).end(),r,'line','');});}};$.fn.lettering=function(method){if(method&&methods[method]){return methods[method].apply(this,[].slice.call(arguments,1));}else if(method==='letters'||!method){return methods.init.apply(this,[].slice.call(arguments,0));}
$.error('Method '+method+' does not exist on jQuery.lettering');return this;};})(jQuery);

  