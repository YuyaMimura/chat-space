$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="Message-info" data-message-id=${message.id}>
          <div class="Message-info__top">
            <div class="Message-info__name">
              ${message.user_name}
            </div>
            <div class="Message-info__time">
              ${message.created_at}
            </div>
          </div>
            <div class="Message-info__content">
              ${message.content}
              <img class="message__image" src="${message.image}">
            </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="Message-info" data-message-id=${message.id}>
          <div class="Message-info__top">
            <div class="Message-info__name">
              ${message.user_name}
            </div>
            <div class="Message-info__time">
              ${message.created_at}
            </div>
          </div>
            <div class="Message-info__content">
              ${message.content}
            </div>
       </div>`
       return html;
    };
  }

  $('.Form').on('submit', function(e) {
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Chat-main__message-list').append(html);
      $('.Form')[0].reset();
      $('.Chat-main__message-list').animate({ scrollTop: $('.Chat-main__message-list')[0].scrollHeight});
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
    
  });
});