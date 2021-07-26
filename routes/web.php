<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // return view('welcome');
    return view('raihan.admin');
});

Auth::routes();

Route::get('/index', [HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/index', [HomeController::class, 'index'])->name('home');

// Route::get('/home', function ()
// {
//     return view('pages.index');
// });

Route::get('/home', [PostController::class, 'show']);

Route::resource('post', PostController::class);
Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');
