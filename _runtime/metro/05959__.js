// _runtime/metro/05959__.js
module.exports.parse = (arg0) => {
  let obj7;
  let tmp5;
  const obj =
    /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i;
  const match = obj.exec(arg0);
  if (match) {
    match.shift();
    let items = [];
    if (match[2]) {
      const str = match[2];
      const parts = str.split("-");
      const arr2 = parts.shift();
      items = parts;
    }
    let items1 = [];
    if (match[5]) {
      const str3 = match[5];
      const parts1 = str3.split("-");
      parts1.shift();
      items1 = parts1;
    }
    const items2 = [];
    if (match[6]) {
      const str5 = match[6];
      const parts2 = str5.split("-");
      parts2.shift();
      let items3 = [];
      let tmp6 = items3;
      let tmp7;
      while (parts2.length) {
        let items4;
        let tmp11;
        let arr5 = parts2.shift();
        if (1 === arr5.length) {
          items4 = items3;
          tmp11 = arr5;
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
      const str7 = match[7];
      const parts3 = str7.split("-");
      parts3.shift();
      parts3.shift();
      items5 = parts3;
    }
    let items6 = [];
    if (match[8]) {
      const str9 = match[8];
      const parts4 = str9.split("-");
      parts4.shift();
      items6 = parts4;
    }
    const obj4 = {
      language: obj5,
      script: match[3] || null,
      region: tmp17,
      variant: items1,
      extension: items2,
      privateuse: items5,
    };
    const obj6 = { langtag: obj4, privateuse: items6, grandfathered: obj7 };
    obj7 = { irregular: tmp18, regular: match[1] || null };
    return obj6;
  } else {
    return null;
  }
};
