const swipe = document.querySelectorAll('.swipe__item');
        for(item of swipe) {
            item.addEventListener('click', function() {
                if(this.classList.contains('active')) {
                    this.classList.remove('active');
                } else {
                    for(el of swipe) {
                        el.classList.remove('active');
                    }
                    this.classList.add('active');
                }
            })
        }