<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductRating extends Model
{
    protected $hidden = [
        'created_at', 'updated_at'
    ];

    protected $appends = [
        'product_name'
    ];

    public function product()
    {
        return $this->belongsTo('App\Product');
    }

    function getProductNameAttribute()
    {
        return $this->product->name;
    }
}
