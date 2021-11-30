'use strict';

var response = require('./res');
var connection = require('./koneksi');
const conn = require('./koneksi');

exports.index = function(req, res){
    response.ok("Aplikasi REST API ku berjalan!", res)
};

//menampilkan data 
exports.tampilsemuadata =  function(req, res){
    connection.query('SELECT * FROM ina219', function(error, rows, fields){
        if (error){
            connection.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data berdasarkan id
exports.tampilberdasarkanid = function(req, res){
    let id=req.params.id;
    connection.query('SELECT * FROM ina219 WHERE id = ?', [id],
        function(error, rows, fields){
            if (error){
                connection.log(error);
            }else{
                response.ok(rows, res)
            }}
    );
}

//menambahkan data 
exports.tambahdata=function(req, res){
    var current = req.body.current;
    var voltage = req.body.voltage;

    connection.query('INSERT INTO ina219 (current, voltage) VALUES (?,?)',
    [current, voltage],
    function(error, rows, fields){
        if (error){
            connection.log(error);
        }else{
            response.ok("berhasil menambahkan data", res)
        }
    });
};