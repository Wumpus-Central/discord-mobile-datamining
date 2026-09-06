// === Module 5562: ? ===

// Module 5562
exports.exports.parse = (arg0) => {
  let obj = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i;
  const match = obj.exec(arg0);
  if (match) {
    match.shift();
    let items = [];
    let arr = null;
    if (match[2]) {
      const parts = match[2].split("-");
      arr = parts.shift();
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
        let arr3 = parts2.shift();
        if (1 === arr3.length) {
          let items4 = items3;
          let tmp11 = arr3;
          if (tmp5) {
            obj = { singleton: tmp5, extension: items3 };
            let arr4 = items2.push(obj);
            items4 = [];
            tmp11 = arr3;
          }
        } else {
          let arr5 = items3.push(arr3);
          items4 = items3;
          tmp11 = tmp5;
        }
        items3 = items4;
        tmp5 = tmp11;
        tmp6 = items4;
        tmp7 = tmp11;
      }
      obj = { singleton: tmp7, extension: tmp6 };
      items2.push(obj);
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
    const obj1 = { language: null, script: null, region: null, variant: null, extension: null, privateuse: null };
    const obj2 = { language: arr, extlang: items };
    obj1.language = obj2;
    obj1.script = match[3] || null;
    const obj3 = { langtag: null, privateuse: null, grandfathered: null };
    obj1.region = match[4] || null;
    obj1.variant = items1;
    obj1.extension = items2;
    obj1.privateuse = items5;
    obj3.langtag = obj1;
    obj3.privateuse = items6;
    const obj4 = { irregular: match[0] || null, regular: match[1] || null };
    obj3.grandfathered = obj4;
    return obj3;
  } else {
    return null;
  }
};