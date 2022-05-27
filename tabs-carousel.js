function TabsCarousel(selector) {
    this.$selector = $(selector);
    this.$navContainer = this.$selector.find('.nav-container');
    this.$anotherContainer = this.$selector.find('.another-container');

    this.$tabs = this.$selector.find('.tab');
    this.$tabsTape = this.$selector.find('.tabs');
    this.$tabWrapper = this.$selector.find('.tab-wrapper');
    this.$tabWidth = this.$tabWrapper.outerWidth();
    this.tapeContainerWidth = 0;
    this.$arrowLeft = this.$selector.find('.arrow.arrow-left');
    this.$arrowRight = this.$selector.find('.arrow.arrow-right');
    this.rightValue = 0;

    this.init = function() {
        this.tapeContainerWidth = this.getTapeWidth();
        this.setContainersSize();
        this.moveCarousel();
        this.checkDisableArrow();
        this.selectTab();

        if(localStorage.getItem('tab-id')) {
            var selectedId = localStorage.getItem('tab-id');
            $('#'+selectedId).addClass('selected');
            this.$tabsTape.css('right', $('#'+selectedId).position().left) ;
        }
    }

    this.setContainersSize = function() {
        if(this.$tabWrapper.length >= 3) {
            this.$anotherContainer.css('width', this.$tabWidth * 3);
        } else {
            this.$anotherContainer.css('width', this.$tabWidth * this.$tabWrapper.length);
        }

        this.$navContainer.css('width', this.tapeContainerWidth);
    }

    this.moveCarousel = function() {
        var self = this;

        this.$arrowLeft.click(function() {

            self.rightValue -= self.$tabWidth;
            if(self.rightValue >= 0) {
                self.$tabsTape.css('right', self.rightValue);
            } else {
                self.rightValue = 0;
            }

        })

        this.$arrowRight.click(function() {
            self.rightValue += self.$tabWidth;
            if(self.rightValue <= (self.tapeContainerWidth - self.$tabWidth * 3)) {
                self.$tabsTape.css('right', self.rightValue);
            } else {
                self.rightValue = self.tapeContainerWidth - self.$tabWidth * 3;
                self.$tabsTape.css('right', self.tapeContainerWidth - self.$tabWidth * 3)
            }

        })
    }

    this.selectTab = function() {
        var self = this;
        this.$tabWrapper.click(function() {
            self.$tabs.removeClass('selected');
            $(this).find('.tab').addClass('selected');
            localStorage.setItem('tab-id', $(this).attr('id'));
        })
    }

    this.getTapeWidth = function () {
        var widthSum = 0;
        this.$tabWrapper.each(function(index, tab) {
            widthSum += $(tab).outerWidth();
        })
        return widthSum;
    }

    this.checkDisableArrow = function() {
        if(this.$tabWrapper.length <= 3) {
            this.$arrowLeft.hide();
            this.$arrowRight.hide();
        }
    }
}

var tabsCarousel = new TabsCarousel('.tabs-container');
tabsCarousel.init();