/*!
 * zero-matter v0.0.1
 * https://emanuelpessoa.github.io/zero-matter
 *
 * Licensed MIT © Emanuel Pessoa
 */
(function(window, document, undefined) {
    
    'use strict';

    var ZeroMatter = function (element) {
        
        var self = this;

        if (typeof element === 'string') {
            
            self.element = document.querySelectorAll(element);
        
        } else {
        
            self.element = ((typeof element.length !== 'undefined') && element.length > 0) ? element[0] : element;
        
        };

        self.init();
        
    };
    
    ZeroMatter.prototype = {
        
        init: function () {
            
            var self = this;
            
            self.changeListener = self.onChangeScroll.bind(self);
            
            window.addEventListener("scroll", self.changeListener);
               
        },
        
        onChangeScroll: function () {
            
            this.fadeElement(this.element)
        
        },
         
        fadeElement: function () {

            var self = this;
            
            self.element.forEach(function (item, i) {
                    
                if (window.pageYOffset >= (self.element[i].getBoundingClientRect().top + window.pageYOffset) ) {
                
                    self.element[i].classList.contains("zmfadeIn") ? self.element[i].classList.remove('zmfadeIn') && self.element[i].classList.add('zmfadeOut') : self.element[i].classList.add('zmfadeOut');       
                
                } else {
                
                    self.element[i].classList.contains("zmfadeOut") ? self.element[i].classList.add('zmfadeIn') && self.element[i].classList.remove('zmfadeOut') : self.element[i].classList.add('zmfadeIn');   
                
                };
            })

        }    
        
    };    
    if (typeof module === 'object' && typeof module.exports === 'object') {
    
        module.exports = exports = ZeroMatter;
    
    } else if (typeof window === 'object') {
        
        window.ZeroMatter = ZeroMatter;
    
    }

})(window, document);
