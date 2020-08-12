(function ($) {
	'use strict';

	var defaultOptions = {  
			start_html: '<a href="',
			mid_html: '" target="_blank" class="btn btn-primary ',
			last_html: '">',
			end_html: '</a><br/>'  
	};

	$.extend(true, $.trumbowyg, {
			// Add our plugin to Trumbowyg registred plugins
			plugins: {
					linkbtn: {
							init: function(trumbowyg) {
									// Fill current Trumbowyg instance with linkbtn plugin default options
									trumbowyg.o.plugins.linkbtn = $.extend(true, {},
											defaultOptions,
											trumbowyg.o.plugins.linkbtn || {}
									);
									var btnDef = {
										text: 'link',
										fn: function () {
											trumbowyg.saveRange();
											var $modal = trumbowyg.openModalInsert('Links',
												{
													link_name: {
														label: 'Link name',
														type: 'text',
														required: true,
													},
													url: {
														label: 'Url',
														type: 'text',
														required: true,
													},
													class: {
														lable: 'class',
														type: 'text',
														required: true,
													}
												},
												//callback
												function (data) {
													var url = data.url;
													var link_name = data.link_name;
													var class_name = data.class;
													var html = trumbowyg.o.plugins.linkbtn.start_html + url +
															trumbowyg.o.plugins.linkbtn.mid_html + class_name +
															trumbowyg.o.plugins.linkbtn.last_html + link_name + trumbowyg.o.plugins.linkbtn.end_html;
													var pos = $('#cursor_position').val();
													var text = trumbowyg.html();
													var status = $(".trumbowyg-box").hasClass('trumbowyg-editor-hidden');
													if (!status) {
															trumbowyg.execCmd('insertHTML',html);
													}
													if (status) {
															var str = text.split("");
															str.splice(pos, 0, html);
															text = str.join("");
															trumbowyg.html(text);
													}
													setTimeout(function () {
															trumbowyg.closeModal();
													}, 250);
												}
										);
									},
									class: 'trumbowyg-not-disable',
									ico: "link"
								};
								// Add btn defintion
								trumbowyg.addBtnDef('linkbtn', btnDef);
							},
							tagHandler: function(element, trumbowyg) {
									return [];
							},
							destroy: function() {
							},
					}
			}
	})
})(jQuery);
