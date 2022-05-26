$('.tab').click(function() {
    var currentTab = $(this).attr('data-tab');

    $('.tab-content').removeClass('active');
    $('.tab-content' + currentTab).addClass('active');
})