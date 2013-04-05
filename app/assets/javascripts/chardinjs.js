// Generated by CoffeeScript 1.6.1
(function(){var e=[].slice;(function(t,n){var r;return r=function(){function e(e){var r=this;this.$el=t(e),t(n).resize(function(){return r.refresh()})}return e.prototype.start=function(){var e,t,n,r;if(this._overlay_visible())return!1;this._add_overlay_layer(),r=this.$el.find("*[data-intro]");for(t=0,n=r.length;t<n;t++)e=r[t],this._show_element(e);return this.$el.trigger("chardinJs:start")},e.prototype.toggle=function(){return this._overlay_visible()?this.stop():this.start()},e.prototype.refresh=function(){var e,t,n,r,i;if(this._overlay_visible()){r=this.$el.find("*[data-intro]"),i=[];for(t=0,n=r.length;t<n;t++)e=r[t],i.push(this._position_helper_layer(e));return i}return this},e.prototype.stop=function(){return this.$el.find(".chardinjs-overlay").fadeOut(function(){return this.remove()}),this.$el.find(".chardinjs-helper-layer").remove(),this.$el.find(".chardinjs-show-element").removeClass("chardinjs-show-element"),n.removeEventListener?n.removeEventListener("keydown",this._onKeyDown,!0):document.detachEvent&&document.detachEvent("onkeydown",this._onKeyDown),this.$el.trigger("chardinJs:stop")},e.prototype._overlay_visible=function(){return this.$el.find(".chardinjs-overlay").length!==0},e.prototype._add_overlay_layer=function(){var e,t,n,r=this;return this._overlay_visible()?!1:(t=document.createElement("div"),n="",t.className="chardinjs-overlay",this.$el.prop("tagName")==="BODY"?(n+="top: 0;bottom: 0; left: 0;right: 0;position: fixed;",t.setAttribute("style",n)):(e=this._get_offset(),e&&(n+="width: "+e.width+"px; height:"+e.height+"px; top:"+e.top+"px;left: "+e.left+"px;",t.setAttribute("style",n))),this.$el.get()[0].appendChild(t),t.onclick=function(){return r.stop()},setTimeout(function(){return n+="opacity: .8;",t.setAttribute("style",n)},10))},e.prototype._get_position=function(e){return e.getAttribute("data-position")||"bottom"},e.prototype._place_tooltip=function(e){var n,r,i,s,o,u,a;u=t(e).data("tooltip_layer"),a=this._get_offset(u),u.style.top=null,u.style.right=null,u.style.bottom=null,u.style.left=null;switch(this._get_position(e)){case"top":case"bottom":i=this._get_offset(e),o=i.width,r=t(u).width(),u.style.left=""+(o/2-a.width/2)+"px";break;case"left":case"right":i=this._get_offset(e),s=i.height,n=t(u).height(),u.style.top=""+(s/2-a.height/2)+"px"}switch(this._get_position(e)){case"left":return u.style.left="-"+(a.width-34)+"px";case"right":return u.style.right="-"+(a.width-34)+"px";case"bottom":return u.style.bottom="-"+a.height+"px";case"top":return u.style.top="-"+a.height+"px"}},e.prototype._position_helper_layer=function(e){var n,r;return r=t(e).data("helper_layer"),n=this._get_offset(e),r.setAttribute("style","width: "+n.width+"px; height:"+n.height+"px; top:"+n.top+"px; left: "+n.left+"px;")},e.prototype._show_element=function(e){var n,r,i,s;r=this._get_offset(e),i=document.createElement("div"),s=document.createElement("div"),t(e).data("helper_layer",i).data("tooltip_layer",s),e.id&&i.setAttribute("data-id",e.id),i.className="chardinjs-helper-layer chardinjs-"+this._get_position(e),this._position_helper_layer(e),this.$el.get()[0].appendChild(i),s.className="chardinjs-tooltip chardinjs-"+this._get_position(e),s.innerHTML="<div class='chardinjs-tooltiptext'>"+e.getAttribute("data-intro")+"</div>",i.appendChild(s),this._place_tooltip(e),e.className+=" chardinjs-show-element",n="",e.currentStyle?n=e.currentStyle.position:document.defaultView&&document.defaultView.getComputedStyle&&(n=document.defaultView.getComputedStyle(e,null).getPropertyValue("position")),n=n.toLowerCase();if(n!=="absolute"&&n!=="relative")return e.className+=" chardinjs-relative-position"},e.prototype._get_offset=function(e){var t,n,r;t={width:e.offsetWidth,height:e.offsetHeight},n=0,r=0;while(e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop))n+=e.offsetLeft,r+=e.offsetTop,e=e.offsetParent;return t.top=r,t.left=n,t},e}(),t.fn.extend({chardinJs:function(){var n,i,s,o;return o=arguments[0],i=2<=arguments.length?e.call(arguments,1):[],n=t(this[0]),s=n.data("chardinJs"),s||n.data("chardinJs",s=new r(this,o)),typeof o=="string"&&s[o].apply(s,i),s}})})(window.jQuery,window)}).call(this);