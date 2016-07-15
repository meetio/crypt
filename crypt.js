var CryptoJS = require("crypto-js");
var CryptoJSAesJson = require('cryptojs-aes');

var crypt_encoding = CryptoJS.enc.Utf8;
var crypt_format = CryptoJSAesJson;

exports.decrypt = function(encrypted_msg, encryption_key) {
	return JSON.parse(CryptoJS.AES.decrypt(encrypted_msg, encryption_key, { format: crypt_format }).toString(crypt_encoding));
}
