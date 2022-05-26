var tabContent = [
    {
        title: 'Just title 1',
        text: 'Tab 1 tab 1 tab 1'
    },
    {
        title: 'Just title 2',
        text: 'Tab 2 tab 2 tab 2'
    },
    {
        title: 'Just title 1',
        text: 'Tab 3 tab 3 tab 3'
    },
    {
        title: 'Just title 1',
        text: 'Tab 4 tab 4 tab 4'
    },
    {
        title: 'Just title 5',
        text: 'Tab 5 tab 5 tab 5'
    },
    {
        title: 'Just title 6',
        text: 'Tab 6 tab 6 tab 6'
    },
    {
        title: 'Just title 7',
        text: 'Tab 7 tab 7 tab 7'
    },
    {
        title: 'Just title 8',
        text: 'Tab 8 tab 8 tab 8'
    },
/*    {
        title: 'Just title 9',
        text: 'Tab 9 tab 9 tab 9'
    },*/
]

function generateTabs(data) {
    var $tabsSelector = $('.tabs');
    var $contentsSelector = $('.tab-contents');

    for(var i = 0; i < data.length; i++) {
        $tabsSelector.append('<div class="tab-wrapper">' +
            '<div data-tab="#tab-text' + i + '" class="tab">Tab ' + (i + 1) + '</div>' +
            '</div>');

        $contentsSelector.append('<div id="tab-text' + i + '" class="tab-content">' +
            '<h2>Tab' + (i + 1) +'</h2>' +
            '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto at, blanditiis distinctio eaque et ex explicabo illo impedit itaque libero quas quia quidem quos rem repudiandae vel, veniam voluptatem!</p>' +
            '</div>\n')
    }
}
generateTabs(tabContent);

$('.tab').click(function() {
    var currentTab = $(this).attr('data-tab');

    $('.tab-content').removeClass('active');
    $('.tab-content' + currentTab).addClass('active');
});

