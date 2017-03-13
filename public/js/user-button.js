$('.user-list-button').click(function() {
  // var messages = $('.messages');
  var userList = $('.user-list');

  if (userList.hasClass('active')) {
      userList.removeClass('active');
  } else {
  userList.addClass('active');
  }
});
