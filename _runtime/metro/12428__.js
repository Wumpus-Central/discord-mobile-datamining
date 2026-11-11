// === Module 12428: ? ===

// Module 12428
function decode(str, str2) {
  let defaultChars = str2;
  if (typeof str2 !== "string") {
    defaultChars = decode.defaultChars;
  }
  let tmp2 = closure_0[defaultChars];
  if (!tmp2) {
    items = [];
    tmp[defaultChars] = items;
    let num4 = 0;
    do {
      let _String = String;
      let arr = items.push(String.fromCharCode(num4));
      num4 = num4 + 1;
    } while (num4 < 128);
    let num7 = 0;
    tmp2 = items;
    if (0 < defaultChars.length) {
      do {
        let str3 = defaultChars.charCodeAt(num7);
        let str4 = str3.toString(16);
        let text = `0${str4.toUpperCase()}`;
        items[str3] = "%" + `0${str4.toUpperCase()}`.slice(-2);
        num7 = num7 + 1;
        tmp2 = items;
        length = defaultChars.length;
      } while (num7 < length);
    }
  }
  items = tmp2;
  return str.replace(/(%[a-f0-9]{2})+/gi, (arr) => {
    let num = 0;
    let str = "";
    let str2 = "";
    if (0 < arr.length) {
      do {
        let _parseInt = parseInt;
        let sum = num + 3;
        let parsed = parseInt(arr.slice(num + 1, sum), 16);
        if (parsed < 128) {
          let text = `${items[tmp2]}`;
          let tmp13 = num;
        } else {
          if (192 === (224 & parsed)) {
            if (sum < length) {
              let _parseInt2 = parseInt;
              let parsed1 = parseInt(arr.slice(num + 4, num + 6), 16);
              if (128 === (192 & parsed1)) {
                let tmp18 = parsed << 6 & 1984 | 63 & parsed1;
                let str4 = "\uFFFD\uFFFD";
                if (tmp18 >= 128) {
                  let _String3 = String;
                  str4 = String.fromCharCode(tmp18);
                }
                text = str + str4;
                tmp13 = sum;
              }
            }
          }
          if (224 === (240 & parsed)) {
            let sum1 = num + 6;
            if (sum1 < length) {
              let _parseInt3 = parseInt;
              let parsed2 = parseInt(arr.slice(num + 4, sum1), 16);
              let _parseInt4 = parseInt;
              let parsed3 = parseInt(arr.slice(num + 7, num + 9), 16);
              if (128 === (192 & parsed2)) {
                if (128 === (192 & parsed3)) {
                  let tmp17 = parsed << 12 & 61440 | parsed2 << 6 & 4032 | 63 & parsed3;
                  let str3 = "\uFFFD\uFFFD\uFFFD";
                  if (tmp17 >= 2048) {
                    if (55296 > tmp17) {
                      let _String2 = String;
                      str3 = String.fromCharCode(tmp17);
                    } else {
                      str3 = "\uFFFD\uFFFD\uFFFD";
                    }
                  }
                  text = str + str3;
                  tmp13 = sum1;
                }
              }
            }
          }
          if (240 === (248 & parsed)) {
            let sum2 = num + 9;
            if (sum2 < length) {
              let _parseInt5 = parseInt;
              let parsed4 = parseInt(arr.slice(num + 4, num + 6), 16);
              let _parseInt6 = parseInt;
              let parsed5 = parseInt(arr.slice(num + 7, sum2), 16);
              let _parseInt7 = parseInt;
              let parsed6 = parseInt(arr.slice(num + 10, num + 12), 16);
              if (128 === (192 & parsed4)) {
                if (128 === (192 & parsed5)) {
                  if (128 === (192 & parsed6)) {
                    let tmp14 = parsed << 18 & 1835008 | parsed4 << 12 & 258048 | parsed5 << 6 & 4032 | 63 & parsed6;
                    if (tmp14 >= 65536) {
                      if (1114111 >= tmp14) {
                        let diff = tmp14 - 65536;
                        let _String = String;
                        let sum3 = str + String.fromCharCode(55296 + (diff >> 10), 56320 + (1023 & diff));
                      }
                      text = sum3;
                      tmp13 = sum2;
                    }
                    sum3 = `${str}����`;
                  }
                }
              }
            }
          }
          text = `${str}�`;
          tmp13 = num;
        }
        num = tmp13 + 3;
        str = text;
        str2 = text;
      } while (num < length);
    }
    return str2;
  });
}
function encode(str, str2, arg2) {
  let flag = arg2;
  let defaultChars = str2;
  if (typeof str2 !== "string") {
    defaultChars = encode.defaultChars;
    flag = str2;
  }
  if (undefined === flag) {
    flag = true;
  }
  let tmp2 = closure_2[defaultChars];
  if (!tmp2) {
    items = [];
    tmp[defaultChars] = items;
    let num6 = 0;
    do {
      let _String = String;
      let fromCharCodeResult = String.fromCharCode(num6);
      let obj = /^[0-9a-z]$/i;
      let push = items.push;
      if (obj.test(fromCharCodeResult)) {
        let arr = push(fromCharCodeResult);
      } else {
        let str3 = num6.toString(16);
        let text = `0${str3.toUpperCase()}`;
        let arr2 = push(`%${`0${str3.toUpperCase()}`.slice(-2)}`);
      }
      num6 = num6 + 1;
    } while (num6 < 128);
    let num7 = 0;
    tmp2 = items;
    if (0 < defaultChars.length) {
      do {
        items[defaultChars.charCodeAt(num7)] = defaultChars[num7];
        num7 = num7 + 1;
        tmp2 = items;
        length = defaultChars.length;
      } while (num7 < length);
    }
  }
  let num8 = 0;
  let str4 = "";
  let str5 = "";
  if (0 < str.length) {
    while (true) {
      let charCodeAtResult = str.charCodeAt(num8);
      if (flag) {
        if (37 === charCodeAtResult) {
          let sum = num8 + 2;
          if (sum < length2) {
            let obj2 = /^[0-9a-f]{2}$/i;
            let sum1 = num8 + 3;
            if (obj2.test(str.slice(num8 + 1, sum1))) {
              let text1 = `${str.slice(num8, tmp13)}`;
              let tmp15 = sum;
              num8 = tmp15 + 1;
              str4 = text1;
              str5 = text1;
              if (num8 >= length2) {
                break;
              }
            }
          }
        }
      }
      if (charCodeAtResult < 128) {
        text1 = str4 + tmp2[charCodeAtResult];
        tmp15 = num8;
      } else {
        if (charCodeAtResult >= 55296) {
          if (charCodeAtResult <= 57343) {
            if (charCodeAtResult >= 55296) {
              if (charCodeAtResult <= 56319) {
                let sum2 = num8 + 1;
                if (sum2 < length2) {
                  let charCodeAtResult1 = str.charCodeAt(sum2);
                  if (charCodeAtResult1 >= 56320) {
                    if (charCodeAtResult1 <= 57343) {
                      let _encodeURIComponent2 = encodeURIComponent;
                      text1 = str4 + encodeURIComponent(str[num8] + str[sum2]);
                      tmp15 = sum2;
                    }
                  }
                }
              }
            }
            text1 = `${str4}%EF%BF%BD`;
            tmp15 = num8;
          }
        }
        let _encodeURIComponent = encodeURIComponent;
        text1 = str4 + encodeURIComponent(str[num8]);
        tmp15 = num8;
      }
    }
  }
  return str5;
}
class Url {
  constructor() {
    return;
  }
  parse(arg0, arg1) {
    self = this;
    match2 = arg1;
    str = arg0.trim();
    if (!arg1) {
      str2 = "#";
      num = 1;
      if (1 === arg0.split("#").length) {
        tmp2 = re7;
        match = re7.exec(str);
        if (match) {
          self.pathname = match[1];
          if (match[2]) {
            self.search = match[2];
          }
          return self;
        }
      }
    }
    match1 = re5.exec(str);
    str3 = str;
    formatted = undefined;
    tmp6 = match1;
    if (match1) {
      str4 = match1[0];
      formatted = str4.toLowerCase();
      self.protocol = str4;
      str3 = str.substr(str4.length);
      tmp6 = str4;
    }
    if (!match2) {
      match2 = tmp6;
    }
    if (!match2) {
      match2 = str3.match(/^\/\/[^@\/]+@[^@\/]+/);
    }
    arr = str3;
    if (match2) {
      num2 = 2;
      num3 = 0;
      str5 = "//";
      tmp8 = "//" === str3.substr(0, 2);
      tmp9 = !tmp8;
      if (!tmp9) {
        tmp10 = tmp6;
        if (tmp6) {
          tmp11 = closure_12;
          tmp10 = closure_12[tmp6];
        }
        tmp9 = tmp10;
      }
      substr = str3;
      if (!tmp9) {
        substr = str3.substr(2);
        flag = true;
        self.slashes = true;
      }
      arr = substr;
      tmp7 = tmp8;
    }
    arr2 = arr;
    if (!closure_12[tmp6]) {
      if (tmp7) {
        tmp14 = closure_9;
        num4 = 0;
        num5 = -1;
        num6 = 1;
        num7 = 0;
        num8 = -1;
        num9 = -1;
        if (0 < closure_9.length) {
          do {
            arr3 = closure_9;
            index = arr.indexOf(closure_9[num7]);
            tmp16 = -1 !== index;
            tmp17 = num7;
            tmp18 = num8;
            if (tmp16) {
              tmp19 = -1 === tmp18 || index < tmp18;
              tmp16 = tmp19;
            }
            if (tmp16) {
              tmp18 = index;
            }
            num7 = num7 + 1;
            num8 = tmp18;
            num9 = tmp18;
          } while (num7 < arr3.length);
        }
        if (-1 === num9) {
          str7 = "@";
          lastIndexOfResult = arr.lastIndexOf("@");
        } else {
          str6 = "@";
          lastIndexOfResult = arr.lastIndexOf("@", num9);
        }
        substr2 = arr;
        if (-1 !== lastIndexOfResult) {
          substr1 = arr.slice(0, lastIndexOfResult);
          substr2 = arr.slice(lastIndexOfResult + 1);
          self.auth = substr1;
        }
        tmp22 = closure_8;
        num10 = 0;
        num11 = -1;
        num12 = -1;
        if (0 < closure_8.length) {
          do {
            arr5 = closure_8;
            index1 = substr2.indexOf(closure_8[num10]);
            tmp24 = -1 !== index1;
            tmp25 = num10;
            tmp26 = num11;
            if (tmp24) {
              tmp27 = -1 === tmp26 || index1 < tmp26;
              tmp24 = tmp27;
            }
            if (tmp24) {
              tmp26 = index1;
            }
            num10 = num10 + 1;
            num11 = tmp26;
            num12 = tmp26;
          } while (num10 < arr5.length);
        }
        if (-1 === num12) {
          num12 = substr2.length;
        }
        str8 = ":";
        diff = num12;
        if (":" === substr2[num12 - 1]) {
          diff = num12 - 1;
        }
        substr3 = substr2.slice(0, diff);
        substr4 = substr2.slice(diff);
        parseHostResult = self.parseHost(substr3);
        self.hostname = self.hostname || "";
        str9 = "[";
        tmp32 = "[" === self.hostname[0];
        if (tmp32) {
          str10 = "]";
          tmp32 = "]" === self.hostname[self.hostname.length - 1];
        }
        tmp33 = substr4;
        if (!tmp32) {
          str11 = self.hostname;
          parts = str11.split(/\./);
          length = parts.length;
          str12 = "";
          str13 = "x";
          num13 = 127;
          num14 = 0;
          tmp33 = substr4;
          if (0 < length) {
            while (true) {
              str14 = parts[num14];
              tmp34 = num14;
              if (str14) {
                tmp35 = re10;
                if (!str14.match(re10)) {
                  length2 = str14.length;
                  num15 = 0;
                  str15 = "";
                  str16 = "";
                  if (0 < length2) {
                    do {
                      tmp36 = num15;
                      tmp37 = str15;
                      if (str14.charCodeAt(num15) > 127) {
                        text = `x`;
                      } else {
                        text = `${str14[num15]}`;
                      }
                      num15 = num15 + 1;
                      str15 = text;
                      str16 = text;
                    } while (num15 < length2);
                  }
                  tmp39 = re10;
                  if (!str16.match(re10)) {
                    break;
                  }
                }
              }
              num14 = num14 + 1;
              tmp33 = substr4;
            }
            substr5 = parts.slice(0, num14);
            substr6 = parts.slice(num14 + 1);
            tmp40 = re11;
            match3 = str14.match(re11);
            if (match3) {
              arr1 = substr5.push(match3[1]);
              arr10 = substr6.unshift(match3[2]);
            }
            sum = substr4;
            if (substr6.length) {
              str17 = ".";
              sum = substr6.join(".") + substr4;
            }
            str18 = ".";
            self.hostname = substr5.join(".");
            tmp33 = sum;
          }
        }
        num16 = 255;
        if (self.hostname.length > 255) {
          str19 = "";
          self.hostname = "";
        }
        arr2 = tmp33;
        if (tmp32) {
          str20 = self.hostname;
          num17 = 2;
          self.hostname = str20.substr(1, self.hostname.length - 2);
          arr2 = tmp33;
        }
      } else {
        arr2 = arr;
        if (tmp6) {
          tmp13 = closure_13;
          arr2 = arr;
        }
      }
    }
    index2 = arr2.indexOf("#");
    substr7 = arr2;
    if (-1 !== index2) {
      self.hash = arr2.substr(index2);
      num18 = 0;
      substr7 = arr2.slice(0, index2);
    }
    index3 = substr7.indexOf("?");
    substr8 = substr7;
    if (-1 !== index3) {
      self.search = substr7.substr(index3);
      num19 = 0;
      substr8 = substr7.slice(0, index3);
    }
    if (substr8) {
      self.pathname = substr8;
    }
    tmp48 = closure_13[formatted] && self.hostname && !self.pathname;
    if (tmp48) {
      str21 = "";
      self.pathname = "";
    }
    return self;
  }
  parseHost(arg0) {
    self = this;
    match = re6.exec(arg0);
    substr = arg0;
    if (match) {
      str = match[0];
      str2 = ":";
      if (":" !== str) {
        num = 1;
        self.port = str.substr(1);
      }
      num2 = 0;
      substr = arg0.substr(0, arg0.length - str.length);
    }
    if (substr) {
      self.hostname = substr;
    }
    return;
  }
}
let closure_0 = {};
decode.defaultChars = ";/?:@&=+$,#";
decode.componentChars = "";
let closure_2 = {};
encode.defaultChars = ";/?:@&=+$,-_.!~*'()#";
encode.componentChars = "-_.!~*'()";
const re5 = /^([a-z0-9.+-]+:)/i;
const re6 = /:[0-9]*$/;
const re7 = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
let items = ["{", "}", "|", "\\", "^", "`"];
const items1 = ["'"];
const items2 = ["%", "/", "?", ";", "#"];
const React5 = items2.concat(items1.concat(items.concat(["<", ">", "\"", "`", " ", "\r", "\n", "\t"])));
const React6 = ["/", "?", "#"];
const re10 = /^[+a-z0-9A-Z_-]{0,63}$/;
const re11 = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
const application_id = { javascript: true, "javascript:": true };
const state = { http: true, https: true, ftp: true, gopher: true, file: true, "http:": true, "https:": true, "ftp:": true, "gopher:": true, "file:": true };

export { decode };
export { encode };
export function format(protocol) {
  let str = "";
  const text = `${protocol.protocol || ""}`;
  if (protocol.slashes) {
    str = "//";
  }
  let str2 = "";
  if (protocol.auth) {
    str2 = `${protocol.auth}@`;
  }
  const combined = text + str + str2;
  if (protocol.hostname) {
    const hostname = protocol.hostname;
    if (-1 !== hostname.indexOf(":")) {
      const _HermesInternal = HermesInternal;
      let combined1 = combined + `[${protocol.hostname}` + "]";
    }
    let str7 = "";
    if (protocol.port) {
      str7 = `:${protocol.port}`;
    }
    let str9 = protocol.search;
    const sum = combined1 + str7 + (protocol.pathname || "");
    if (!str9) {
      str9 = "";
    }
    let str10 = protocol.hash;
    const sum1 = sum + str9;
    if (!str10) {
      str10 = "";
    }
    return sum1 + str10;
  }
  combined1 = combined + (protocol.hostname || "");
}
export const parse = function urlParse(arg0, arg1) {
  if (arg0) {
    if (arg0 instanceof Url) {
      return arg0;
    }
  }
  Object.create(Url.prototype);
  const url = { protocol: null, slashes: null, auth: null, port: null, hostname: null, hash: null, search: null, pathname: null };
  const parsed = url.parse(arg0, arg1);
  return url;
};