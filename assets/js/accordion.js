var swipe = document.getElementsByClassName('accordion__item');
        var i;
        for (i = 0; i < swipe.length; i++) {
            swipe[i].addEventListener('click', function() {
                this.classList.toggle('active');
                var accordion__info = thus.nextElementSibling;
                if (accordion__info.style.maxHeight) {
                    accordion__info.style.maxHeight == null;
                } else {
                    accordion__info.style.maxHeight = swipe__info.scrollHeight + 'rem';
                }
            });
        }