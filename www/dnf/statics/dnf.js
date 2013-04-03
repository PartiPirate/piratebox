/**
 * Build a STRING with <article><h1>...</h1><p>MESSAGE</p></article>.
 * @param item must be an object with "message", "date"
 *        and "pseudo" attribute.
 */ 
var dnf_buildMessage = function (item) {
    var d = new Date(item.date);
    var escapedText = jQuery('<blockquote />').text(item.message).html();
    var result = '<article>'
        + '<h1>Par '
        + item.pseudo
        + ' le '
        + d.toLocaleDateString()
        + ' à '
        + d.toLocaleTimeString()
        + '</h1>'
        + '<p><cite>' + escapedText + '</cite></p>'
        + '</article>';
    return result;
};
/**
 * Ajax GET a list of message.
 * Each message is append to the list of messages (the order of the
 * message into the JSON data IS important !!!).
 *
 * You can configure the URL to GET the data with the directive
 * `MESSAGES_URL`.
 */
var dnf_loadMessages = function () {
    $.ajax({url: MESSAGES_URL, method: 'GET', dataType: 'json'})
    .done(function (data) {
        $('.messages_box').html('');
        for (var i=0; i < data.length; i++) {
    	if (MESSAGE_PREPEND) {
                $('.messages_box').prepend(dnf_buildMessage(data[i]));
	}else{
		$('.messages_box').append(dnf_buildMessage(data[i]));
	}
        }
    })
    .fail(function () {
        $('.messages_box').html('<p>Impossible de charger les messages...</p>');
    });
};

/*
 * Bind the FORM using the `SUBMIT_URL` to publish a new message.
 * When the form success, the message is displayed.
 * See also `MESSAGE_PREPEND` to configure if the new posted message
 * must be displayed ON TOP or AT THE BOTTOM of the list of messages.
 */
var dnf_init = function () {
    $('.submit_box form').submit(function (event) {
        event.preventDefault();

        if ($('#id_message').val() == '') {
            alert('Le message ne doit pas être vide !');
			return false;
        }
		
        var values = {
                      pseudo: $('#id_pseudo').val(),
                      message: $('#id_message').val(),
		  date: new Date
        };

        $.ajax({url: SUBMIT_URL, method: 'GET', data: values})
              .complete(function () {
                  $('.submit_box').html('<p>Merci pour le message !</p>');
                  if (MESSAGE_PREPEND) {
                      $('.messages_box').prepend(dnf_buildMessage(values));
                  } else {
                      $('.messages_box').append(dnf_buildMessage(values));
                  }
              });
    });

    dnf_loadMessages();
};