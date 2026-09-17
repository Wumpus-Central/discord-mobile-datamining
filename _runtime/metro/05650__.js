// _runtime/metro/05650__.js
exports.exports.parse = (arg0) => {
  const match =
    /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(
      arg0,
    );
  if (match) {
    match.shift();
    let items = [];
    let arr2 = null;
    if (match[2]) {
      const parts = match[2].split("-");
      arr2 = parts.shift();
      items = parts;
    }
    let items1 = [];
    if (match[5]) {
      const parts1 = match[5].split("-");
      parts1.shift();
      items1 = parts1;
    }
    const items2 = [];
    if (match[6]) {
      const parts2 = match[6].split("-");
      parts2.shift();
      let items3 = [];
      let tmp6 = items3;
      let tmp7;
      while (parts2.length) {
        let arr5 = parts2.shift();
        if (1 === arr5.length) {
          let items4 = items3;
          let tmp11 = arr5;
          if (tmp5) {
            let obj2 = { singleton: tmp5, extension: items3 };
            let arr6 = items2.push(obj2);
            items4 = [];
            tmp11 = arr5;
          }
        } else {
          let arr7 = items3.push(arr5);
          items4 = items3;
          tmp11 = tmp5;
        }
        items3 = items4;
        tmp5 = tmp11;
        tmp6 = items4;
        tmp7 = tmp11;
      }
      const obj3 = { singleton: tmp7, extension: tmp6 };
      items2.push(obj3);
    }
    let items5 = [];
    if (match[7]) {
      const parts3 = match[7].split("-");
      parts3.shift();
      parts3.shift();
      items5 = parts3;
    }
    let items6 = [];
    if (match[8]) {
      const parts4 = match[8].split("-");
      parts4.shift();
      items6 = parts4;
    }
    const obj4 = { language: null, script: null, region: null, variant: null, extension: null, privateuse: null };
    const obj5 = { language: arr2, extlang: items };
    obj4.language = obj5;
    obj4.script = match[3] || null;
    const obj6 = { langtag: null, privateuse: null, grandfathered: null };
    obj4.region = match[4] || null;
    obj4.variant = items1;
    obj4.extension = items2;
    obj4.privateuse = items5;
    obj6.langtag = obj4;
    obj6.privateuse = items6;
    const obj7 = { irregular: match[0] || null, regular: match[1] || null };
    obj6.grandfathered = obj7;
    return obj6;
  } else {
    return null;
  }
  const obj =
    /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i;
};
