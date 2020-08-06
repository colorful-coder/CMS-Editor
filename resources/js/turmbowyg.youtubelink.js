(function ($) {
  'use strict';

  var defaultOptions = {
    proxy: 'https://noembed.com/embed?nowrap=on',
    urlFiled: 'url',
    data: [],
    defaultUrl: 'https://youtube/',
    success: undefined,
    error: undefined
  };


  $.extend(true, $.trumbowyg, {
      // Add our plugin to Trumbowyg registred plugins
      plugins: {
          youtubelink: {
              init: function(trumbowyg) {
                  // Fill current Trumbowyg instance with youtubelink plugin default options
                  trumbowyg.o.plugins.youtubelink = $.extend(true, {},
                      defaultOptions,
                      trumbowyg.o.plugins.youtubelink || {}
                  );
                  var btnDef = {
                    text: 'Youtube',
                    fn: function () {
                      trumbowyg.saveRange();
                      var $modal = trumbowyg.openModalInsert('Youtube link',
                        {
                          videoId: {
                            label: 'Video ID',
                            type: 'text',
                            required: true,
                          }
                        },
                        // callback
                        function (data) {
                          var url =  trumbowyg.o.plugins.youtubelink.defaultUrl + data.videoId
                          var pos = $('#cursor_position').val();
                          var text = trumbowyg.html();
                          var status = $(".trumbowyg-box").hasClass('trumbowyg-editor-hidden');

                          $.ajax({
                              url: trumbowyg.o.plugins.youtubelink.proxy,
                              type: 'GET',
                              data: {
                                url: url
                              },
                              cache: false,
                              dataType: 'json',
                              success: function (data) {
                                if (data.html) {
                                      if(!status) {
                                        trumbowyg.execCmd('insertHTML', data.html);
                                      }
                                      if(status) {
                                        var str = text.split("");
                                        str.splice(pos, 0, data.html);
                                        text = str.join("");
                                        trumbowyg.html(text);
                                      }
                                      setTimeout(function () {
                                          trumbowyg.closeModal();
                                      }, 250);
                                  } else {
                                      trumbowyg.addErrorOnModalField(
                                          $('input[type=text]', $modal),
                                          data.error
                                      );
                                  }
                              },
                              error: function (error) {
                                  trumbowyg.addErrorOnModalField(
                                      $('input[type=text]', $modal),
                                      trumbowyg.lang.noembedError
                                  );
                              }
                          });
                        }
                    );
                  },
                  class: 'trumbowyg-not-disable',
                  hasIcon: false
                };
                // Add btn defintion
                trumbowyg.addBtnDef('youtubelink', btnDef);

              },
              tagHandler: function(element, trumbowyg) {
                  return [];
              },
              destroy: function() {
              }
          }
      }
  })
})(jQuery);
