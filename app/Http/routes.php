<?php

Route::get('wins', function () {
    $jeffrey = collect(['name' => 'Jeffrey', 'wins' => 140]);
    $taylor = collect(['name' => 'Taylor', 'wins' => 80]);

    return view('welcome', compact('jeffrey', 'taylor'));
});
