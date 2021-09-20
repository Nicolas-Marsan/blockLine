var express = require('express');

let allController = {
    home: function(req,res){
     return   res.render('index.ejs');

    }
    
};

module.exports = allController;