'use strict';var a12_0x4b4a=['decode','794391rnqppZ','9kaKzAJ','500986oUCBWU','ES256KRecoverableVerifier','fromKey','ECKey','encode','ES256K-R','default','29745PWKlkU','typ','format','RSA_ALGORITHMS','277jvJqvx','2257cDfoXC','signature','Invalid\x20signature','alg','749978uajCHS','header','SPECIAL_ALGORITHMS','ES256KRecoverableSigner','includes','./Signers','kid','RSASigner','sig','Algorithm\x20in\x20jwt\x20header\x20does\x20not\x20match\x20alg\x20in\x20signing\x20info','__esModule','./JWKUtils','key','./Verifiers','base64url','freeze','sign','OKP','549207dJECSi','Invalid\x20JWT','RSAVerifier','split','payload','ERRORS','1wJHhWJ','OKPSigner','defineProperty','parse','signed','193aJKBHv','OKP_ALGORITHMS','EC_ALGORITHMS','INVALID_JWT','ALGORITHMS','RSA','verify','Unsupported\x20algorithm','ALGORITHM_MISMATCH','RSAKey','4594HSQlYX','OKPVerifier'];var a12_0x5c19=function(_0x4ca330,_0x1679d8){_0x4ca330=_0x4ca330-0x137;var _0x4b4abe=a12_0x4b4a[_0x4ca330];return _0x4b4abe;};var a12_0xd02340=a12_0x5c19;(function(_0x46a451,_0x998c38){var _0x243309=a12_0x5c19;while(!![]){try{var _0x479249=parseInt(_0x243309(0x15b))+-parseInt(_0x243309(0x166))*parseInt(_0x243309(0x170))+-parseInt(_0x243309(0x149))+-parseInt(_0x243309(0x145))*-parseInt(_0x243309(0x144))+-parseInt(_0x243309(0x140))*parseInt(_0x243309(0x138))+parseInt(_0x243309(0x139))+-parseInt(_0x243309(0x161))*-parseInt(_0x243309(0x137));if(_0x479249===_0x998c38)break;else _0x46a451['push'](_0x46a451['shift']());}catch(_0x351ddc){_0x46a451['push'](_0x46a451['shift']());}}}(a12_0x4b4a,0x8a0c8));var __importDefault=this&&this['__importDefault']||function(_0x56fe28){var _0x55db0e=a12_0x5c19;return _0x56fe28&&_0x56fe28[_0x55db0e(0x153)]?_0x56fe28:{'default':_0x56fe28};};Object[a12_0xd02340(0x163)](exports,a12_0xd02340(0x153),{'value':!![]}),exports['verify']=exports[a12_0xd02340(0x159)]=exports['ERRORS']=void 0x0;var JWKUtils_1=require(a12_0xd02340(0x154)),base64url_1=__importDefault(require(a12_0xd02340(0x157))),globals_1=require('./globals'),Signers_1=require(a12_0xd02340(0x14e)),Verifiers_1=require(a12_0xd02340(0x156));exports[a12_0xd02340(0x160)]=Object[a12_0xd02340(0x158)]({'UNSUPPORTED_ALGORITHM':a12_0xd02340(0x16d),'ALGORITHM_MISMATCH':a12_0xd02340(0x152),'INVALID_JWT':a12_0xd02340(0x15c),'INVALID_SIGNATURE':a12_0xd02340(0x147)});function sign(_0x3f079f,_0x3ec7b0){var _0x5b285c=a12_0xd02340,_0x383a0d=base64url_1[_0x5b285c(0x13f)][_0x5b285c(0x13d)](JSON['stringify'](_0x3f079f['header']))+'.'+base64url_1['default'][_0x5b285c(0x13d)](JSON['stringify'](_0x3f079f[_0x5b285c(0x15f)])),_0xf5885d=globals_1[_0x5b285c(0x16a)][_0x3f079f[_0x5b285c(0x14a)]['alg']];if(_0xf5885d!==_0x3ec7b0[_0x5b285c(0x148)])throw new Error(exports[_0x5b285c(0x160)][_0x5b285c(0x16e)]);var _0x198dd1,_0x475ed2;if(globals_1[_0x5b285c(0x143)][_0x5b285c(0x14d)](_0xf5885d))_0x198dd1=new Signers_1[(_0x5b285c(0x150))](),_0x475ed2=JWKUtils_1[_0x5b285c(0x16f)][_0x5b285c(0x13b)]({'key':_0x3ec7b0['key'],'kid':_0x3ec7b0[_0x5b285c(0x14f)],'use':'sig','kty':_0x5b285c(0x16b),'alg':_0x3f079f['header'][_0x5b285c(0x148)],'format':_0x3ec7b0['format'],'isPrivate':!![]});else{if(globals_1[_0x5b285c(0x168)]['includes'](_0xf5885d))_0x198dd1=new Signers_1['ECSigner'](),_0x475ed2=JWKUtils_1[_0x5b285c(0x13c)][_0x5b285c(0x13b)]({'key':_0x3ec7b0['key'],'kid':_0x3ec7b0['kid'],'use':_0x5b285c(0x151),'kty':'EC','alg':_0x3f079f[_0x5b285c(0x14a)][_0x5b285c(0x148)],'format':_0x3ec7b0[_0x5b285c(0x142)],'isPrivate':!![]});else{if(globals_1['OKP_ALGORITHMS'][_0x5b285c(0x14d)](_0xf5885d))_0x198dd1=new Signers_1[(_0x5b285c(0x162))](),_0x475ed2=JWKUtils_1[_0x5b285c(0x15a)][_0x5b285c(0x13b)]({'key':_0x3ec7b0[_0x5b285c(0x155)],'kid':_0x3ec7b0[_0x5b285c(0x14f)],'use':_0x5b285c(0x151),'kty':_0x5b285c(0x15a),'alg':_0x3f079f[_0x5b285c(0x14a)]['alg'],'format':_0x3ec7b0['format'],'isPrivate':!![]});else{if(globals_1[_0x5b285c(0x14b)][_0x5b285c(0x14d)](_0xf5885d))switch(_0xf5885d){case globals_1[_0x5b285c(0x16a)][_0x5b285c(0x13e)]:{_0x198dd1=new Signers_1[(_0x5b285c(0x14c))](),_0x475ed2=_0x3ec7b0[_0x5b285c(0x155)];break;}}}}}if(_0x198dd1&&_0x475ed2){var _0x1024b8=_0x198dd1[_0x5b285c(0x159)](_0x383a0d,_0x475ed2,_0xf5885d);return _0x383a0d+'.'+base64url_1[_0x5b285c(0x13f)][_0x5b285c(0x13d)](_0x1024b8);}else throw new Error(exports['ERRORS']['UNSUPPORTED_ALGORITHM']);}exports['sign']=sign;function verify(_0x46fe1c,_0x5ce6ac){var _0x2f6cb6=a12_0xd02340,_0x435294=decodeJWT(_0x46fe1c),_0x395494=globals_1[_0x2f6cb6(0x16a)][_0x435294[_0x2f6cb6(0x14a)][_0x2f6cb6(0x148)]];if(_0x395494!==_0x5ce6ac[_0x2f6cb6(0x148)])throw new Error(exports[_0x2f6cb6(0x160)]['ALGORITHM_MISMATCH']);var _0x1a41a6,_0x5ad4cd;if(globals_1[_0x2f6cb6(0x143)][_0x2f6cb6(0x14d)](_0x395494))_0x1a41a6=new Verifiers_1[(_0x2f6cb6(0x15d))](),_0x5ad4cd=JWKUtils_1[_0x2f6cb6(0x16f)][_0x2f6cb6(0x13b)]({'key':_0x5ce6ac[_0x2f6cb6(0x155)],'kid':_0x5ce6ac['kid'],'use':_0x2f6cb6(0x151),'kty':_0x2f6cb6(0x16b),'alg':_0x435294[_0x2f6cb6(0x14a)]['alg'],'format':_0x5ce6ac['format'],'isPrivate':![]});else{if(globals_1[_0x2f6cb6(0x168)]['includes'](_0x395494))_0x1a41a6=new Verifiers_1['ECVerifier'](),_0x5ad4cd=JWKUtils_1[_0x2f6cb6(0x13c)][_0x2f6cb6(0x13b)]({'key':_0x5ce6ac[_0x2f6cb6(0x155)],'kid':_0x5ce6ac[_0x2f6cb6(0x14f)],'use':_0x2f6cb6(0x151),'kty':'EC','alg':_0x435294[_0x2f6cb6(0x14a)][_0x2f6cb6(0x148)],'format':_0x5ce6ac[_0x2f6cb6(0x142)],'isPrivate':![]});else{if(globals_1[_0x2f6cb6(0x167)][_0x2f6cb6(0x14d)](_0x395494))_0x1a41a6=new Verifiers_1[(_0x2f6cb6(0x171))](),_0x5ad4cd=JWKUtils_1['OKP'][_0x2f6cb6(0x13b)]({'key':_0x5ce6ac[_0x2f6cb6(0x155)],'kid':_0x5ce6ac[_0x2f6cb6(0x14f)],'use':_0x2f6cb6(0x151),'kty':_0x2f6cb6(0x15a),'alg':_0x435294['header']['alg'],'format':_0x5ce6ac[_0x2f6cb6(0x142)],'isPrivate':![]});else{if(globals_1[_0x2f6cb6(0x14b)][_0x2f6cb6(0x14d)](_0x395494))switch(_0x395494){case globals_1[_0x2f6cb6(0x16a)]['ES256K-R']:{_0x1a41a6=new Verifiers_1[(_0x2f6cb6(0x13a))](),_0x5ad4cd=_0x5ce6ac[_0x2f6cb6(0x155)];break;}}}}}if(_0x1a41a6&&_0x5ad4cd)return _0x1a41a6[_0x2f6cb6(0x16c)](_0x435294[_0x2f6cb6(0x165)],_0x435294[_0x2f6cb6(0x146)],_0x5ad4cd,_0x395494);else throw new Error(exports['ERRORS']['INVALID_SIGNATURE']);}exports[a12_0xd02340(0x16c)]=verify;function decodeJWT(_0x204200){var _0x4c1de3=a12_0xd02340;try{var _0x5c731b=JSON[_0x4c1de3(0x164)](base64url_1[_0x4c1de3(0x13f)][_0x4c1de3(0x172)](_0x204200[_0x4c1de3(0x15e)]('.')[0x0])),_0x27fc32=JSON[_0x4c1de3(0x164)](base64url_1[_0x4c1de3(0x13f)][_0x4c1de3(0x172)](_0x204200[_0x4c1de3(0x15e)]('.')[0x1])),_0x8fb667=base64url_1[_0x4c1de3(0x13f)]['toBuffer'](_0x204200[_0x4c1de3(0x15e)]('.')[0x2]);return{'header':{'typ':_0x5c731b[_0x4c1de3(0x141)],'alg':_0x5c731b[_0x4c1de3(0x148)],'kid':_0x5c731b[_0x4c1de3(0x14f)]},'payload':_0x27fc32,'signed':_0x204200[_0x4c1de3(0x15e)]('.')[0x0]+'.'+_0x204200[_0x4c1de3(0x15e)]('.')[0x1],'signature':_0x8fb667};}catch(_0x459c5d){throw new Error(exports[_0x4c1de3(0x160)][_0x4c1de3(0x169)]);}}