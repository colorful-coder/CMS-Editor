<?php

use Illuminate\Support\Facades\Route;

Route::redirect('/', '/summernote');
Route::resource('/summernote', 'SummernoteController');
Route::resource('/trumbowyg', 'TrumbowygController');

Route::get('/test', function() {
	return view('trumbowyg.test');
});