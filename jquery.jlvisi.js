<!-- 
/* 
    jlVisi - A jQuery plugin
    ==================================================================
    ©2011 JasonLau.biz - Version 1.0.0
    ==================================================================
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
    
*/

(function($){
 	$.fn.extend({ 
 		jlvisi: function(options) {
			var defaults = {
             delimitor : ',',
		     hide_indicator : '!',
             show_indicator : '*'      
			}
				
			var option =  $.extend(defaults, options);
            var obj = $(this);

    		return this.each(function() {
              var tags = $(this).attr('rel').split(option.delimitor);   
                for(var i in tags){
                    var h = tags[i].split(option.hide_indicator);
                    if(h[1]) $(h[1]).hide();
                    var s = tags[i].split(option.show_indicator);
                    if(s[1]) $(s[1]).show();
                }
              
                
    		});
    	}
	});
	
})(jQuery);
 -->