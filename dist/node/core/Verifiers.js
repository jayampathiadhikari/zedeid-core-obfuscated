'use strict';var a20_0x3364=['ES256K','hasOwnProperty','from','ERRORS','eddsa','ES512','RSA-SHA512','KEY_FORMATS','INVALID_ALGORITHM','29DYicEO','apply','HEX','522861QdwBbK','toString','update','RSA-SHA256','RS384','string','PKCS8_PEM','sha512','hex','Verifier','__esModule','RS256','verify','PS256','slice','createVerify','elliptic','ALGORITHMS','ES256KRecoverableVerifier','crypto','1165937RFhvsk','createHash','constructor','OKPVerifier','p384','INVALID_SIGNATURE','recoverPubKey','saltLength','encode','RS512','create','Invalid\x20signature','padding','digest','./globals','p256','p512','1QumzRw','ECVerifier','1114EdRVVf','617848CrsEFJ','ed25519','exportKey','RSA-SHA384','prototype','777672TYBJgK','PS384','1408571TePQWh','1083KqVyPW','Invalid\x20algorithm','ethereum-public-key-to-address','Not\x20a\x20private\x20key','constants','RSA_PSS_SALTLEN_DIGEST','sha256','keyFromPublic','ES384','RSA_PKCS1_PSS_PADDING','defineProperty','61384ppjOGJ','secp256k1'];var a20_0x760c=function(_0x3ea078,_0x2c7b78){_0x3ea078=_0x3ea078-0xb0;var _0x336459=a20_0x3364[_0x3ea078];return _0x336459;};var a20_0x310a0a=a20_0x760c;(function(_0x4c8139,_0x524895){var _0x750eca=a20_0x760c;while(!![]){try{var _0x39ff18=-parseInt(_0x750eca(0xec))*-parseInt(_0x750eca(0xe3))+-parseInt(_0x750eca(0xeb))+-parseInt(_0x750eca(0xbc))+parseInt(_0x750eca(0xd0))*parseInt(_0x750eca(0xe1))+-parseInt(_0x750eca(0xe9))+-parseInt(_0x750eca(0xe4))+-parseInt(_0x750eca(0xf7))*-parseInt(_0x750eca(0xb9));if(_0x39ff18===_0x524895)break;else _0x4c8139['push'](_0x4c8139['shift']());}catch(_0x251609){_0x4c8139['push'](_0x4c8139['shift']());}}}(a20_0x3364,0xc98ef));var __extends=this&&this['__extends']||function(){var _0x3cba12=function(_0x43cee1,_0x2b8607){return _0x3cba12=Object['setPrototypeOf']||{'__proto__':[]}instanceof Array&&function(_0x288f29,_0x4489f0){_0x288f29['__proto__']=_0x4489f0;}||function(_0x346d8a,_0x453f7){var _0x31a667=a20_0x760c;for(var _0x33b9b2 in _0x453f7)if(_0x453f7[_0x31a667(0xb1)](_0x33b9b2))_0x346d8a[_0x33b9b2]=_0x453f7[_0x33b9b2];},_0x3cba12(_0x43cee1,_0x2b8607);};return function(_0x2a5379,_0x2f1ada){var _0x164bef=a20_0x760c;_0x3cba12(_0x2a5379,_0x2f1ada);function _0x3a6db7(){var _0x27d021=a20_0x760c;this[_0x27d021(0xd2)]=_0x2a5379;}_0x2a5379['prototype']=_0x2f1ada===null?Object[_0x164bef(0xda)](_0x2f1ada):(_0x3a6db7[_0x164bef(0xe8)]=_0x2f1ada[_0x164bef(0xe8)],new _0x3a6db7());};}();Object[a20_0x310a0a(0xf6)](exports,a20_0x310a0a(0xc6),{'value':!![]}),exports[a20_0x310a0a(0xce)]=exports[a20_0x310a0a(0xd3)]=exports['ECVerifier']=exports['RSAVerifier']=exports[a20_0x310a0a(0xc5)]=exports[a20_0x310a0a(0xb3)]=void 0x0;var globals_1=require(a20_0x310a0a(0xde)),crypto_1=require(a20_0x310a0a(0xcf)),elliptic_1=require(a20_0x310a0a(0xcc)),publicKeyToAddress=require(a20_0x310a0a(0xee));exports[a20_0x310a0a(0xb3)]=Object['freeze']({'NO_PRIVATE_KEY':a20_0x310a0a(0xef),'INVALID_ALGORITHM':a20_0x310a0a(0xed),'INVALID_SIGNATURE':a20_0x310a0a(0xdb)});var Verifier=function(){function _0x1df375(){}return _0x1df375;}();exports[a20_0x310a0a(0xc5)]=Verifier;var RSAVerifier=function(_0x1a27d5){var _0x473ba7=a20_0x310a0a;__extends(_0x4e6b44,_0x1a27d5);function _0x4e6b44(){var _0x3cc13a=a20_0x760c;return _0x1a27d5!==null&&_0x1a27d5[_0x3cc13a(0xba)](this,arguments)||this;}return _0x4e6b44['prototype'][_0x473ba7(0xc8)]=function(_0x2c7527,_0x59cfdf,_0x386347,_0x4a5954){var _0xddbcfc=_0x473ba7;try{var _0x5598c0=void 0x0,_0x4c0006={'key':_0x386347['exportKey'](globals_1[_0xddbcfc(0xb7)][_0xddbcfc(0xc2)])};switch(_0x4a5954){case globals_1[_0xddbcfc(0xcd)][_0xddbcfc(0xc7)]:_0x5598c0=crypto_1['createVerify'](_0xddbcfc(0xbf));break;case globals_1[_0xddbcfc(0xcd)][_0xddbcfc(0xc0)]:_0x5598c0=crypto_1[_0xddbcfc(0xcb)]('RSA-SHA384');break;case globals_1[_0xddbcfc(0xcd)][_0xddbcfc(0xd9)]:_0x5598c0=crypto_1[_0xddbcfc(0xcb)](_0xddbcfc(0xb6));break;case globals_1[_0xddbcfc(0xcd)][_0xddbcfc(0xc9)]:{_0x5598c0=crypto_1[_0xddbcfc(0xcb)](_0xddbcfc(0xbf)),_0x4c0006[_0xddbcfc(0xdc)]=crypto_1[_0xddbcfc(0xf0)][_0xddbcfc(0xf5)],_0x4c0006[_0xddbcfc(0xd7)]=crypto_1[_0xddbcfc(0xf0)][_0xddbcfc(0xf1)];break;}case globals_1['ALGORITHMS'][_0xddbcfc(0xea)]:{_0x5598c0=crypto_1[_0xddbcfc(0xcb)](_0xddbcfc(0xe7)),_0x4c0006[_0xddbcfc(0xdc)]=crypto_1[_0xddbcfc(0xf0)][_0xddbcfc(0xf5)],_0x4c0006[_0xddbcfc(0xd7)]=crypto_1['constants']['RSA_PSS_SALTLEN_DIGEST'];break;}case globals_1[_0xddbcfc(0xcd)]['PS512']:{_0x5598c0=crypto_1[_0xddbcfc(0xcb)](_0xddbcfc(0xb6)),_0x4c0006['padding']=crypto_1[_0xddbcfc(0xf0)][_0xddbcfc(0xf5)],_0x4c0006[_0xddbcfc(0xd7)]=crypto_1[_0xddbcfc(0xf0)][_0xddbcfc(0xf1)];break;}default:throw new Error(exports[_0xddbcfc(0xb3)][_0xddbcfc(0xb8)]);}return _0x5598c0['update'](_0x2c7527)[_0xddbcfc(0xc8)](_0x4c0006,_0x59cfdf);}catch(_0x2967e3){throw new Error(exports[_0xddbcfc(0xb3)][_0xddbcfc(0xd5)]);}},_0x4e6b44;}(Verifier);exports['RSAVerifier']=RSAVerifier;var ECVerifier=function(_0x115eca){var _0x2d3a46=a20_0x310a0a;__extends(_0x1dda7f,_0x115eca);function _0x1dda7f(){var _0x3be186=a20_0x760c;return _0x115eca!==null&&_0x115eca[_0x3be186(0xba)](this,arguments)||this;}return _0x1dda7f['prototype'][_0x2d3a46(0xc8)]=function(_0x4035ef,_0x251fdb,_0x40dfcf,_0x5bcdce){var _0x1b849a=_0x2d3a46;try{var _0x28946b=void 0x0,_0x3155c7=void 0x0;switch(_0x5bcdce){case globals_1[_0x1b849a(0xcd)]['ES256']:{_0x28946b=crypto_1['createHash'](_0x1b849a(0xf2)),_0x3155c7=new elliptic_1['ec'](_0x1b849a(0xdf));break;}case globals_1[_0x1b849a(0xcd)][_0x1b849a(0xf4)]:{_0x28946b=crypto_1[_0x1b849a(0xd1)]('sha384'),_0x3155c7=new elliptic_1['ec'](_0x1b849a(0xd4));break;}case globals_1[_0x1b849a(0xcd)][_0x1b849a(0xb5)]:{_0x28946b=crypto_1[_0x1b849a(0xd1)](_0x1b849a(0xc3)),_0x3155c7=new elliptic_1['ec'](_0x1b849a(0xe0));break;}case globals_1[_0x1b849a(0xcd)][_0x1b849a(0xb0)]:{_0x28946b=crypto_1[_0x1b849a(0xd1)]('sha256'),_0x3155c7=new elliptic_1['ec']('secp256k1');break;}case globals_1[_0x1b849a(0xcd)]['EdDSA']:{_0x28946b=crypto_1[_0x1b849a(0xd1)](_0x1b849a(0xf2)),_0x3155c7=new elliptic_1['ec'](_0x1b849a(0xe5));break;}default:throw new Error(exports['ERRORS'][_0x1b849a(0xb8)]);}var _0xb0176=_0x28946b['update'](_0x4035ef)[_0x1b849a(0xdd)]();if(_0x251fdb['length']!==0x40)throw new Error(exports[_0x1b849a(0xb3)][_0x1b849a(0xd5)]);var _0x16cfb7={'r':_0x251fdb[_0x1b849a(0xca)](0x0,0x20)[_0x1b849a(0xbd)]('hex'),'s':_0x251fdb[_0x1b849a(0xca)](0x20,0x40)['toString'](_0x1b849a(0xc4))},_0x20f836=_0x3155c7[_0x1b849a(0xf3)](_0x40dfcf[_0x1b849a(0xe6)](globals_1[_0x1b849a(0xb7)][_0x1b849a(0xbb)]),_0x1b849a(0xc4));return _0x20f836[_0x1b849a(0xc8)](_0xb0176,_0x16cfb7);}catch(_0x565308){throw new Error(exports[_0x1b849a(0xb3)][_0x1b849a(0xd5)]);}},_0x1dda7f;}(Verifier);exports[a20_0x310a0a(0xe2)]=ECVerifier;var OKPVerifier=function(_0x804c71){var _0x491408=a20_0x310a0a;__extends(_0x14968e,_0x804c71);function _0x14968e(){var _0x26b19f=a20_0x760c;return _0x804c71!==null&&_0x804c71[_0x26b19f(0xba)](this,arguments)||this;}return _0x14968e['prototype'][_0x491408(0xc8)]=function(_0x48a12c,_0x1d6aff,_0x37b9cd,_0x5b258b){var _0x27adf9=_0x491408;try{var _0x465b8e=void 0x0;switch(_0x5b258b){case globals_1[_0x27adf9(0xcd)]['EdDSA']:{_0x465b8e=new elliptic_1[(_0x27adf9(0xb4))](_0x27adf9(0xe5));break;}default:throw new Error(exports[_0x27adf9(0xb3)][_0x27adf9(0xb8)]);}var _0x5905b3=_0x465b8e[_0x27adf9(0xf3)](_0x37b9cd[_0x27adf9(0xe6)](globals_1[_0x27adf9(0xb7)][_0x27adf9(0xbb)]));return _0x5905b3['verify'](Buffer[_0x27adf9(0xb2)](_0x48a12c),_0x1d6aff['toString'](_0x27adf9(0xc4)));}catch(_0x4f995a){throw new Error(exports[_0x27adf9(0xb3)][_0x27adf9(0xd5)]);}},_0x14968e;}(Verifier);exports[a20_0x310a0a(0xd3)]=OKPVerifier;var ES256KRecoverableVerifier=function(_0x5dbaa7){var _0x7f1264=a20_0x310a0a;__extends(_0x3f4cf9,_0x5dbaa7);function _0x3f4cf9(){var _0xde5752=a20_0x760c;return _0x5dbaa7!==null&&_0x5dbaa7[_0xde5752(0xba)](this,arguments)||this;}return _0x3f4cf9[_0x7f1264(0xe8)]['verify']=function(_0x2762d3,_0xd2bfe3,_0x1f30d8){var _0x51d263=_0x7f1264,_0x247c50;typeof _0x1f30d8===_0x51d263(0xc1)?_0x247c50=_0x1f30d8:_0x247c50=_0x1f30d8[_0x51d263(0xe6)](globals_1[_0x51d263(0xb7)]['HEX']);var _0x44d2f0=crypto_1[_0x51d263(0xd1)](_0x51d263(0xf2)),_0x237f93=new elliptic_1['ec'](_0x51d263(0xf8)),_0x18e4de=_0x44d2f0[_0x51d263(0xbe)](_0x2762d3)['digest']();if(_0xd2bfe3['length']!==0x41)throw new Error(exports[_0x51d263(0xb3)][_0x51d263(0xd5)]);var _0x5d4c3c={'r':_0xd2bfe3['slice'](0x0,0x20)[_0x51d263(0xbd)]('hex'),'s':_0xd2bfe3[_0x51d263(0xca)](0x20,0x40)[_0x51d263(0xbd)](_0x51d263(0xc4))},_0xf9ef7b=_0x237f93[_0x51d263(0xd6)](_0x18e4de,_0x5d4c3c,_0xd2bfe3[0x40]);return _0xf9ef7b['encode'](_0x51d263(0xc4))===_0x247c50||_0xf9ef7b[_0x51d263(0xd8)](_0x51d263(0xc4),!![])===_0x247c50||publicKeyToAddress(_0xf9ef7b[_0x51d263(0xd8)](_0x51d263(0xc4)))===_0x247c50;},_0x3f4cf9;}(Verifier);exports[a20_0x310a0a(0xce)]=ES256KRecoverableVerifier;