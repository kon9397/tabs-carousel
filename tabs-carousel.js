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
        console.log(this.$navContainer);
        console.log(this.$tabs);
        console.log(this.$tabWidth);
        this.tapeContainerWidth = this.getTapeWidth();
        this.setContainersSize();
        this.moveCarousel();

        console.log(this.tapeContainerWidth);
    }

    this.setContainersSize = function() {
        this.$anotherContainer.css('width', this.$tabWidth * 3);
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

    this.getTapeWidth = function () {
        var widthSum = 0;
        this.$tabWrapper.each(function(index, tab) {
            widthSum += $(tab).outerWidth();
        })
        return widthSum;
    }
}

var tabsCarousel = new TabsCarousel('.tabs-container');
tabsCarousel.init();