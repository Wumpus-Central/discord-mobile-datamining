// === Module 1341: format ===

// Module 1341 (format)
let self = this;
const global = arg0;
const dependencyMap = arg4;
const exports = arg5;
const fn = function() {
  function format(arg0) {
    const replaced = String(arg0).replace(/^ +| +$/g, "");
    let sum = replaced;
    if (!obj.test(replaced)) {
      const _String = String;
      const str2 = String(replaced);
      const formatted = str2.charAt(0).toUpperCase();
      sum = formatted + str2.slice(1);
      const str3 = str2.charAt(0);
    }
    return sum;
  }
  function forOwn(obj) {
    for (const key10005 in arg0) {
      let tmp3 = key10005;
      let tmp4 = hasOwnProperty;
      let call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let callResult = tmp4(key10005);
      } else {
        callResult = call(arg0, key10005);
      }
      if (!callResult) {
        continue;
      } else {
        let tmp2 = arg1(arg0[key10005], key10005, arg0);
        continue;
      }
      continue;
    }
  }
  function getClassOf(arg0) {
    if (null == arg0) {
      const _String = String;
      const str = String(arg0);
      const formatted = str.charAt(0).toUpperCase();
      let sum = formatted + str.slice(1);
      const str2 = str.charAt(0);
    } else {
      const call = toString.call;
      sum = typeof call === "unknown" ? toString() : call(arg0).slice(8, -1);
      const arr = typeof call === "unknown" ? toString() : call(arg0);
      const tmp = toString;
    }
    return sum;
  }
  function qualify(arg0) {
    return String(arg0).replace(/([ -])(?!$)/g, "$1?");
  }
  function reduce(arg0, arg1) {
    let num = 0;
    if (arg0) {
      num = arg0.length;
    }
    if (typeof num === "number") {
      if (num > -1) {
        if (num <= closure_1) {
          let tmp11 = null;
          let num3 = 0;
          let tmp4 = null;
          if (0 < num) {
            do {
              let tmp12 = tmp11;
              let tmp13 = num3;
              let tmp14 = arg0;
              tmp11 = arg1(tmp11, arg0[num3], num3, arg0);
              num3 = num3 + 1;
              tmp4 = tmp11;
            } while (num3 < num);
          }
        }
        return tmp4;
      }
    }
    let tmp3 = null;
    tmp4 = null;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp4 = tmp3;
      while (keys[tmp] !== undefined) {
        let tmp16 = hasOwnProperty;
        let call = hasOwnProperty.call;
        let tmp15 = tmp7;
        if (!(typeof call === "unknown" ? tmp16(tmp7) : call(arg0, tmp7))) {
          continue;
        } else {
          let tmp8 = tmp6;
          let tmp9 = tmp7;
          let tmp10 = arg0;
          tmp3 = arg1(tmp6, arg0[tmp7], tmp15, arg0);
          continue;
        }
        continue;
      }
    }
  }
  function trim(arg0) {
    return String(arg0).replace(/^ +| +$/g, "");
  }
  let obj = { function: true, object: true };
  let tmp = obj[typeof window] && window || this;
  closure_0 = tmp;
  let tmp4 = obj[typeof closure_1] && closure_1 && !closure_1.nodeType && closure_1;
  let tmp5 = tmp2;
  if (obj[typeof re2] && re2) {
    tmp5 = tmp4;
  }
  if (tmp5) {
    tmp5 = typeof closure_0 === "object";
  }
  if (tmp5) {
    tmp5 = closure_0;
  }
  let tmp7 = !tmp5;
  if (tmp5) {
    tmp7 = tmp5.global !== tmp5 && tmp5.window !== tmp5 && tmp5.self !== tmp5;
    let tmp8 = tmp5.global !== tmp5 && tmp5.window !== tmp5 && tmp5.self !== tmp5;
  }
  if (!tmp7) {
    closure_0 = tmp5;
    tmp = tmp5;
  }
  closure_1 = Math.pow(2, 53) - 1;
  re2 = /\bOpera/;
  const hasOwnProperty = str.hasOwnProperty;
  const toString = str.toString;
  function parse(global) {
    c0 = global;
    let obj = c0;
    let tmp7 = global;
    if (global) {
      tmp7 = typeof global === "object";
    }
    if (tmp7) {
      let str = "String";
      tmp7 = "String" != getClassOf(global);
    }
    let tmp9 = global;
    if (tmp7) {
      c0 = null;
      obj = global;
      tmp9 = null;
    }
    let tmp11 = obj.navigator || {};
    if (!tmp9) {
      c0 = tmp12;
      tmp9 = tmp12;
    }
    if (tmp7) {
      let isMatch = tmp11.likeChrome;
    } else {
      obj1 = /\bChrome\b/;
      isMatch = obj1.test(tmp9);
      if (isMatch) {
        let obj2 = /internal|\n/i;
        isMatch = !obj2.test(toString.toString());
      }
    }
    let str2 = "ScriptBridgingProxyObject";
    if (tmp7) {
      str2 = "Object";
    }
    let str3 = "Environment";
    if (tmp7) {
      str3 = "Object";
    }
    if (!tmp7) {
      let str4 = getClassOf(obj.java);
    } else {
      str4 = "JavaPackage";
    }
    let str5 = "RuntimeObject";
    if (tmp7) {
      str5 = "Object";
    }
    const tmp16 = /\bJava/.test(str4) && obj.java;
    let tmp17 = tmp16;
    if (tmp16) {
      tmp17 = getClassOf(obj.environment) == str3;
    }
    let str6 = "\u03B1";
    if (tmp16) {
      str6 = "a";
    }
    let str7 = "\u03B2";
    if (tmp16) {
      str7 = "b";
    }
    const tmp19 = obj.document || {};
    if (tmp7) {
      if (tmp20) {
        __Class__ = tmp20["[[Class]]"];
      }
      let tmp23 = null;
      let tmp24 = null;
      if (tmp21(__Class__)) {
        tmp23 = tmp20;
        tmp24 = __Class__;
      }
      let isMatch4 = tmp9 == tmp12;
      let versionResult = isMatch4;
      if (isMatch4) {
        versionResult = tmp23;
      }
      if (versionResult) {
        versionResult = typeof tmp23.version === "function";
      }
      if (versionResult) {
        versionResult = tmp23.version();
      }
      function getProduct(items2) {
        return closure_1_9(items2, (arg0, pattern) => {
          pattern = pattern.pattern;
          if (!pattern) {
            const _String = String;
            pattern = String(pattern).replace(/([ -])(?!$)/g, "$1?");
            const str = String(pattern);
          }
          let tmp2 = arg0;
          let tmp3 = !arg0;
          if (!arg0) {
            const _RegExp = RegExp;
            let match = RegExp(`\\b${pattern} *\\d+[.\\w_]*`, "i").exec(closure_0);
            if (!match) {
              const _RegExp2 = RegExp;
              match = RegExp(`\\b${pattern} *\\w+-[\\w]*`, "i").exec(tmp5);
              const RegExpResult1 = RegExp(`\\b${pattern} *\\w+-[\\w]*`, "i");
            }
            if (!match) {
              const _RegExp3 = RegExp;
              match = RegExp(`\\b${pattern}(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)`, "i").exec(tmp5);
              const RegExpResult2 = RegExp(`\\b${pattern}(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)`, "i");
            }
            tmp3 = match;
            tmp2 = match;
            const RegExpResult = RegExp(`\\b${pattern} *\\d+[.\\w_]*`, "i");
          }
          let tmp7 = tmp2;
          if (tmp3) {
            let label = tmp2;
            if (pattern.label) {
              const _RegExp4 = RegExp;
              label = tmp2;
              if (!RegExpResult3.test(pattern.label)) {
                label = pattern.label;
              }
              RegExpResult3 = RegExp(pattern, "i");
            }
            const parts = String(label).split("/");
            let tmp10 = parts[1];
            if (tmp10) {
              tmp10 = !/[\d.]+/.test(parts[0]);
              const obj5 = /[\d.]+/;
            }
            if (tmp10) {
              parts[0] = `${tmp9[0]} ${tmp9[1]}`;
            }
            const _RegExp5 = RegExp;
            const str12 = parts[0];
            const str9 = String(label);
            const _RegExp6 = RegExp;
            const str14 = parts[0].replace(RegExp(pattern, "i"), pattern.label || pattern);
            const _RegExp7 = RegExp;
            const _String2 = String;
            const str18 = parts[0].replace(RegExp(pattern, "i"), pattern.label || pattern).replace(RegExp(`; *(?:${pattern.label || pattern}[_-])?`, "i"), " ");
            replaced = String(parts[0].replace(RegExp(pattern, "i"), pattern.label || pattern).replace(RegExp(`; *(?:${pattern.label || pattern}[_-])?`, "i"), " ").replace(RegExp(`(${pattern.label || pattern})[-_.]?(\\w)`, "i"), "$1 $2")).replace(/^ +| +$/g, "");
            let sum = replaced;
            if (!obj6.test(replaced)) {
              const _String3 = String;
              const str24 = String(replaced);
              const formatted = str24.charAt(0).toUpperCase();
              sum = formatted + str24.slice(1);
              const str25 = str24.charAt(0);
            }
            tmp7 = sum;
            obj6 = /^(?:webOS|i(?:OS|P))/;
            const str22 = String(parts[0].replace(RegExp(pattern, "i"), pattern.label || pattern).replace(RegExp(`; *(?:${pattern.label || pattern}[_-])?`, "i"), " ").replace(RegExp(`(${pattern.label || pattern})[-_.]?(\\w)`, "i"), "$1 $2"));
          }
          return tmp7;
        });
      }
      let version = versionResult;
      const items = [{ label: "EdgeHTML", pattern: "Edge" }, "Trident", { label: "WebKit", pattern: "AppleWebKit" }, "iCab", , , , , ];
      let str10 = "Presto";
      items[4] = "Presto";
      items[5] = "NetFront";
      items[6] = "Tasman";
      items[7] = "KHTML";
      items[8] = "Gecko";
      const tmp28 = (function getLayout(items) {
        return closure_1_9(items, (arg0, pattern) => {
          let tmp = arg0;
          if (!arg0) {
            pattern = pattern.pattern;
            if (!pattern) {
              const _String = String;
              pattern = String(pattern).replace(/([ -])(?!$)/g, "$1?");
              const str = String(pattern);
            }
            let match = RegExp(`\\b${pattern}\\b`, "i").exec(closure_0);
            if (match) {
              match = pattern.label || pattern;
              const tmp6 = pattern.label || pattern;
            }
            tmp = match;
            const RegExpResult = RegExp(`\\b${pattern}\\b`, "i");
          }
          return tmp;
        });
      })(items);
      const items1 = ["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", { label: "Microsoft Edge", pattern: "(?:Edge|Edg|EdgA|EdgiOS)" }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", { label: "Samsung Internet", pattern: "SamsungBrowser" }, "SeaMonkey", { label: "Silk", pattern: "(?:Cloud9|Silk-Accelerated)" }, "Sleipnir", "SlimBrowser", { label: "SRWare Iron", pattern: "Iron" }, "Sunrise", "Swiftfox", "Vivaldi", "Waterfox", "WebPositive", { label: "Yandex Browser", pattern: "YaBrowser" }, { label: "UC Browser", pattern: "UCBrowser" }, "Opera Mini", { label: "Opera Mini", pattern: "OPiOS" }, "Opera", { label: "Opera", pattern: "OPR" }, "Chromium", "Chrome", { label: "Chrome", pattern: "(?:HeadlessChrome)" }, { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" }, { label: "Firefox", pattern: "(?:Firefox|Minefield)" }, { label: "Firefox for iOS", pattern: "FxiOS" }, { label: "IE", pattern: "IEMobile" }, { label: "IE", pattern: "MSIE" }, "Safari"];
      let text1 = (function getName(items1) {
        return closure_1_9(items1, (arg0, pattern) => {
          let tmp = arg0;
          if (!arg0) {
            pattern = pattern.pattern;
            if (!pattern) {
              const _String = String;
              pattern = String(pattern).replace(/([ -])(?!$)/g, "$1?");
              const str = String(pattern);
            }
            let match = RegExp(`\\b${pattern}\\b`, "i").exec(closure_0);
            if (match) {
              match = pattern.label || pattern;
              const tmp6 = pattern.label || pattern;
            }
            tmp = match;
            const RegExpResult = RegExp(`\\b${pattern}\\b`, "i");
          }
          return tmp;
        });
      })(items1);
      const items2 = [{ label: "BlackBerry", pattern: "BB10" }, "BlackBerry", { label: "Galaxy S", pattern: "GT-I9000" }, { label: "Galaxy S2", pattern: "GT-I9100" }, { label: "Galaxy S3", pattern: "GT-I9300" }, { label: "Galaxy S4", pattern: "GT-I9500" }, { label: "Galaxy S5", pattern: "SM-G900" }, { label: "Galaxy S6", pattern: "SM-G920" }, { label: "Galaxy S6 Edge", pattern: "SM-G925" }, { label: "Galaxy S7", pattern: "SM-G930" }, { label: "Galaxy S7 Edge", pattern: "SM-G935" }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", { label: "Kindle Fire", pattern: "(?:Cloud9|Silk-Accelerated)" }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", { label: "Wii U", pattern: "WiiU" }, "Wii", "Xbox One", { label: "Xbox 360", pattern: "Xbox" }, "Xoom"];
      product = getProduct(items2);
      let replaced = product;
      obj = { Apple: null, Alcatel: null, Archos: null, Amazon: null, Asus: null, "Barnes & Noble": null, BlackBerry: null, Google: null, HP: null, HTC: null, Huawei: null, Lenovo: null, LG: null, Microsoft: null, Motorola: null, Nintendo: null, Nokia: null, Oppo: null, Samsung: null, Sony: null, Xiaomi: null };
      obj[0] = { iPad: 1, iPhone: 1, iPod: 1 };
      obj[1] = {};
      obj[2] = {};
      obj[3] = { Kindle: 1, "Kindle Fire": 1 };
      obj[4] = { Transformer: 1 };
      obj[5] = { Nook: 1 };
      obj[6] = { PlayBook: 1 };
      obj[7] = { "Google TV": 1, Nexus: 1 };
      obj[8] = { TouchPad: 1 };
      obj[9] = {};
      obj[10] = {};
      obj[11] = {};
      obj[12] = {};
      obj[13] = { Xbox: 1, "Xbox One": 1 };
      obj[14] = { Xoom: 1 };
      obj[15] = { "Wii U": 1, Wii: 1 };
      obj[16] = { Lumia: 1 };
      obj[17] = {};
      obj[18] = { "Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1 };
      obj[19] = { PlayStation: 1, "PlayStation Vita": 1 };
      obj[20] = { Mi: 1, Redmi: 1 };
      const tmp31 = (function getManufacturer(global) {
        return closure_1_9(global, (arg0, arg1, arg2) => {
          let tmp = arg0;
          if (!arg0) {
            let match = arg1[closure_2];
            if (!match) {
              const obj = /^[a-z]+(?: +[a-z]+\b)*/i;
              match = arg1[obj.exec(obj, tmp3)];
            }
            if (!match) {
              const _RegExp = RegExp;
              const _String = String;
              const str = String(arg2);
              match = RegExp(`\\b${String(arg2).replace(/([ -])(?!$)/g, "$1?")}(?:\\b|\\w*\\d)`, "i").exec(closure_0);
              const RegExpResult = RegExp(`\\b${String(arg2).replace(/([ -])(?!$)/g, "$1?")}(?:\\b|\\w*\\d)`, "i");
            }
            if (match) {
              match = arg2;
            }
            tmp = match;
          }
          return tmp;
        });
      })(obj);
      const items3 = ["Windows Phone", "KaiOS", "Android", "CentOS", { label: "Chrome OS", pattern: "CrOS" }, "Debian", { label: "DragonFly BSD", pattern: "DragonFly" }, "Fedora", "FreeBSD", "Gentoo", "Haiku"];
      let str57 = "Kubuntu";
      items3[11] = "Kubuntu";
      items3[12] = "Linux Mint";
      items3[13] = "OpenBSD";
      items3[14] = "Red Hat";
      items3[15] = "SuSE";
      items3[16] = "Ubuntu";
      items3[17] = "Xubuntu";
      items3[18] = "Cygwin";
      items3[19] = "Symbian OS";
      items3[20] = "hpwOS";
      items3[21] = "webOS ";
      items3[22] = "webOS";
      items3[23] = "Tablet OS";
      items3[24] = "Tizen";
      items3[25] = "Linux";
      items3[26] = "Mac OS X";
      items3[27] = "Macintosh";
      items3[28] = "Mac";
      items3[29] = "Windows 98;";
      items3[30] = "Windows ";
      const tmp32 = (function getOS(items3) {
        return closure_1_9(items3, (arg0, pattern) => {
          pattern = pattern.pattern;
          if (!pattern) {
            const _String = String;
            pattern = String(pattern).replace(/([ -])(?!$)/g, "$1?");
            const str = String(pattern);
          }
          let text = arg0;
          let match = !arg0;
          if (!arg0) {
            const _RegExp = RegExp;
            match = RegExp(`\\b${pattern}(?:/[\\d.]+|[ \\w.]*)`, "i").exec(closure_0);
            text = match;
            const RegExpResult = RegExp(`\\b${pattern}(?:/[\\d.]+|[ \\w.]*)`, "i");
          }
          let tmp6 = text;
          if (match) {
            let isMatch = pattern;
            if (pattern) {
              isMatch = tmp7;
            }
            if (isMatch) {
              isMatch = /^Win/i.test(text);
              const obj2 = /^Win/i;
            }
            if (isMatch) {
              isMatch = !/^Windows Phone /i.test(text);
              const obj3 = /^Windows Phone /i;
            }
            const obj = { "10.0": "10", "6.4": "10 Technical Preview", "6.3": "8.1", "6.2": "8", "6.1": "Server 2008 R2 / 7", "6.0": "Server 2008 / Vista", "5.2": "Server 2003 / XP 64-bit", "5.1": "XP", "5.01": "2000 SP1", "5.0": "2000", "4.0": "NT", "4.90": "ME" };
            let tmp9 = obj;
            if (isMatch) {
              const obj5 = /[\d.]+$/;
              tmp9 = obj[obj5.exec(obj5, text)];
            }
            if (isMatch) {
              text = `Windows ${tmp9}`;
            }
            const _String2 = String;
            const str7 = String(text);
            let tmp11 = pattern;
            if (pattern) {
              tmp11 = tmp7;
            }
            let str8 = str7;
            if (tmp11) {
              const _RegExp2 = RegExp;
              str8 = str7.replace(RegExp(pattern, "i"), tmp7);
            }
            const str11 = str8.replace(/ ce$/i, " CE");
            const str13 = str8.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web");
            const str15 = str8.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS");
            const str17 = str8.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS");
            const str19 = str8.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1");
            const str20 = str8.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1");
            const str22 = str8.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1");
            const str24 = str8.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".");
            const str26 = str8.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "");
            const str28 = str8.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64");
            const str29 = str8.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1");
            const _String3 = String;
            const str30 = str8.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1");
            replaced = String(str8.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0]).replace(/^ +| +$/g, "");
            let sum = replaced;
            if (!obj6.test(replaced)) {
              const _String4 = String;
              const str33 = String(replaced);
              const formatted = str33.charAt(0).toUpperCase();
              sum = formatted + str33.slice(1);
              const str34 = str33.charAt(0);
            }
            tmp6 = sum;
            obj6 = /^(?:webOS|i(?:OS|P))/;
            const str32 = String(str8.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0]);
          }
          return tmp6;
        });
      })(items3);
      let tmp33 = tmp28;
      if (tmp28) {
        const items4 = [tmp28];
        tmp33 = items4;
      }
      let match = /\bAndroid\b/.test(tmp32) && !product;
      if (match) {
        match = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(tmp9);
        const obj8 = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i;
        const tmp35 = match;
      }
      let str77 = product;
      if (match) {
        const tmp37 = trim(tmp35[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null;
        replaced = tmp37;
        str77 = tmp37;
        const str78 = trim(tmp35[1]);
      }
      if (tmp31) {
        if (!str77) {
          const items5 = [tmp31];
          let product1 = getProduct(items5);
          replaced = product1;
        }
        const match1 = /\bGoogle TV\b/.exec(product1);
        let tmp44 = product1;
        if (match1) {
          const first = match1[0];
          replaced = first;
          tmp44 = first;
        }
        let tmp46 = tmp44;
        if (obj10.test(tmp9)) {
          let str87 = "";
          if (tmp44) {
            str87 = `${tmp44} `;
          }
          let text = `${str87}Simulator`;
          replaced = text;
          tmp46 = text;
        }
        let isMatch1 = "Opera Mini" == text1;
        if (isMatch1) {
          isMatch1 = /\bOPiOS\b/.test(tmp9);
          const obj11 = /\bOPiOS\b/;
        }
        const items6 = [];
        if (isMatch1) {
          let arr = items6.push("running in Turbo/Uncompressed mode");
        }
        if ("IE" == text1) {
          if (obj12.test(tmp9)) {
            str = "";
            ({ manufacturer, product } = parse(tmp9.replace(/like iPhone OS/, "")));
            replaced = product;
            str57 = tmp32;
            let str93 = product;
            const tmp82 = parse(tmp9.replace(/like iPhone OS/, ""));
          }
          function getVersion(Chrome) {
            return closure_1_9(Chrome, (arg0, arg1) => {
              let tmp = arg0;
              if (!arg0) {
                const _RegExp = RegExp;
                const RegExpResult = RegExp(`${arg1}(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)`, "i");
                tmp = RegExp(`${arg1}(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)`, "i").exec(closure_0) || 0[1];
                const tmp5 = RegExp(`${arg1}(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)`, "i").exec(closure_0) || 0;
              }
              if (!tmp) {
                tmp = null;
              }
              return tmp;
            });
          }
          if (!version) {
            const items7 = ["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)", "Version", qualify(text1)];
            str = "(?:Firefox|Minefield|NetFront)";
            items7[3] = "(?:Firefox|Minefield|NetFront)";
            version = getVersion(items7);
          }
          if ("iCab" != tmp33) {
            let isMatch2 = /\bOpera\b/.test(text1);
            if (isMatch2) {
              if (obj35.test(tmp9)) {
                str10 = "Blink";
              }
              isMatch2 = str10;
              obj35 = /\bOPR\b/;
            }
            str = isMatch2;
            const obj34 = /\bOpera\b/;
          } else {
            const _parseFloat = parseFloat;
            str = "WebKit";
          }
          if (!str) {
            str = /\b(?:Midori|Nook|Safari)\b/i.test(tmp9);
            if (str) {
              str = !/^(?:Trident|EdgeHTML)$/.test(tmp33);
              const obj37 = /^(?:Trident|EdgeHTML)$/;
            }
            if (str) {
              str = "WebKit";
            }
            const obj36 = /\b(?:Midori|Nook|Safari)\b/i;
          }
          if (!str) {
            let isMatch3 = !tmp33;
            if (!tmp33) {
              isMatch3 = /\bMSIE\b/i.test(tmp9);
              const obj38 = /\bMSIE\b/i;
            }
            if (isMatch3) {
              str = "Mac OS";
              str = "Trident";
              if ("Mac OS" == str57) {
                str = "Tasman";
              }
              isMatch3 = str;
            }
            str = isMatch3;
          }
          if (!str) {
            str = "WebKit";
            str = "WebKit" == tmp33;
            if (str) {
              str = /\bPlayStation\b(?! Vita\b)/i.test(text1);
              const obj39 = /\bPlayStation\b(?! Vita\b)/i;
            }
            if (str) {
              str = "NetFront";
            }
          }
          let tmp92 = tmp33;
          if (str) {
            const items8 = [str];
            tmp92 = items8;
          }
          if ("IE" == text1) {
            const tmp95 = /; *(?:XBLWP|ZuneWP)(\d+)/i.exec(tmp9) || 0[1];
            str = tmp95;
            if (tmp95) {
              let text2 = text1;
              str = " Mobile";
              text1 = `${tmp29} Mobile`;
              text2 = tmp95;
              if (!obj44.test(tmp95)) {
                str = ".x";
                text2 = `${tmp95}.x`;
              }
              str = "Windows Phone ";
              str = `Windows Phone ${tmp}`;
              str = "desktop mode";
              text2 = items6.unshift("desktop mode");
              let tmp99 = tmp95;
              obj44 = /\+$/;
            }
            text2 = str;
            text2 = tmp92;
            text2 = tmp9;
            text2 = tmp99;
            if (isMatch4) {
              str = "global";
              if ((function isHostType(global, global) {
                let str = "number";
                if (null != global) {
                  str = typeof global.global;
                }
                let isMatch = /^(?:boolean|number|string|undefined)$/.test(str);
                if (!isMatch) {
                  isMatch = "object" === str && !global.global;
                  const tmp2 = "object" === str && !global.global;
                }
                return !isMatch;
              })(obj, "global")) {
                text2 = str;
                text2 = tmp9;
                if (tmp16) {
                  const System = tmp16.lang.System;
                  str = "os.arch";
                  text2 = str;
                  text2 = System.getProperty("os.arch");
                  if (!str) {
                    str = "os.name";
                    str = " ";
                    str = "os.version";
                    text2 = `${System.getProperty("os.name")} `;
                    text2 = `${System.getProperty("os.name")} ${System.getProperty("os.version")}`;
                  }
                  tmp99 = System;
                }
                if (tmp17) {
                  try {
                    str = "ringo/engine";
                    version = obj.require("ringo/engine").version;
                    str = ".";
                    version = version.join(".");
                    text1 = "RingoJS";
                    text2 = text1;
                    str = text2;
                    let items10 = tmp92;
                    text2 = tmp99;
                    if (!`RingoJS`) {
                      text1 = "Rhino";
                      str = text2;
                      items10 = tmp92;
                      text2 = tmp99;
                    }
                  } catch (err) {
                    const system = tmp5.system;
                    text2 = system;
                    if (system) {
                      text2 = system.global.system == tmp5.system;
                    }
                    text2 = tmp6;
                    tmp99 = system;
                    if (text2) {
                      text1 = "Narwhal";
                      text2 = tmp6;
                      if (!tmp6) {
                        text2 = system[0].os;
                        if (!text2) {
                          text2 = null;
                        }
                      }
                      tmp99 = system;
                    }
                  }
                } else {
                  const _process = obj.process;
                  text2 = typeof _process === "object";
                  if (typeof _process === "object") {
                    text2 = !obj.process.browser;
                  }
                  let _process2 = tmp99;
                  if (text2) {
                    _process2 = obj.process;
                  }
                  str = text2;
                  items10 = tmp92;
                  text2 = _process2;
                  if (text2) {
                    if (typeof _process2.versions === "object") {
                      if (typeof _process2.versions.electron === "string") {
                        str = "Node ";
                        text2 = items6.push(`Node ${_process2.versions.node}`);
                        text1 = "Electron";
                        version = _process2.versions.electron;
                      } else if (typeof _process2.versions.nw === "string") {
                        text2 = version;
                        str = "Chromium ";
                        str = "Node ";
                        text2 = items6.push(`Chromium ${tmp27}`, `Node ${_process2.versions.node}`);
                        text1 = "NW.js";
                        version = _process2.versions.nw;
                      }
                    }
                    text2 = text1;
                    if (!text1) {
                      text1 = "Node.js";
                      ({ arch, platform } = _process2);
                      text2 = /[\d.]+/.exec(_process2.version);
                      text2 = null;
                      if (text2) {
                        text2 = text2[0];
                      }
                      version = text2;
                      text2 = platform;
                      text2 = arch;
                      const obj46 = /[\d.]+/;
                    }
                    str = text2;
                    items10 = tmp92;
                    text2 = _process2;
                  }
                }
              } else {
                const runtime = obj.runtime;
                text2 = getClassOf;
                if (getClassOf(runtime) == str2) {
                  text1 = "Adobe AIR";
                  str = runtime.flash.system.Capabilities.os;
                  items10 = tmp92;
                  text2 = tmp9;
                  text2 = runtime;
                } else {
                  const phantom = obj.phantom;
                  if (text2(phantom) == str5) {
                    text1 = "PhantomJS";
                    text2 = phantom.version || null;
                    if (text2) {
                      str = ".";
                      text2 = `${tmp.major}.${tmp.minor}.${tmp.patch}`;
                    }
                    version = text2;
                    items10 = tmp92;
                    text2 = tmp9;
                  } else {
                    text2 = phantom;
                    if (typeof tmp19.documentMode === "number") {
                      text2 = /\bTrident\/(\d+)/i.exec(tmp9);
                      if (text2) {
                        text2 = version;
                        const items9 = [version, tmp19.documentMode];
                        text2 = items9;
                        text2 = +text2[1] + 4;
                        if (text2 != items9[1]) {
                          text2 = items9;
                          str = "IE ";
                          str = " mode";
                          text2 = items6.push(`IE ${tmp[1]} mode`);
                          if (tmp92) {
                            str = "";
                            tmp92[1] = "";
                          }
                          text2 = items9;
                          text2[1] = text2;
                        }
                        text2 = text1;
                        if ("IE" == text1) {
                          text2 = globalThis;
                          let _String = String;
                          text2 = items9;
                          text2 = String(text2[1].toFixed(1));
                          const obj45 = text2[1];
                        } else {
                          text2 = items9;
                          text2 = text2[0];
                        }
                        version = text2;
                        items10 = tmp92;
                        text2 = tmp9;
                      }
                      const obj95 = /\bTrident\/(\d+)/i;
                    }
                    const documentMode = tmp19.documentMode;
                    text2 = typeof documentMode === "number";
                    if (typeof documentMode === "number") {
                      text2 = text1;
                      text2 = /^(?:Chrome|Firefox)\b/.test(text1);
                      const obj96 = /^(?:Chrome|Firefox)\b/;
                    }
                    items10 = tmp92;
                    text2 = tmp9;
                    if (text2) {
                      text2 = text1;
                      str = "masking as ";
                      text2 = version;
                      str = " ";
                      text2 = items6.push(`masking as ${tmp29} ${tmp27}`);
                      text1 = "IE";
                      version = "11.0";
                      items10 = ["Trident"];
                      str = "Windows";
                      text2 = tmp9;
                    }
                  }
                }
              }
              text2 = str;
              if (str) {
                text2 = format;
                text2 = format(str);
              }
              text2 = items10;
            }
            text2 = version;
            if (version) {
              text2 = version;
              text2 = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version);
              if (!text2) {
                str = ";";
                let appMinorVersion = isMatch4;
                text2 = `${tmp9};`;
                if (isMatch4) {
                  appMinorVersion = tmp11.appMinorVersion;
                }
                text2 = /(?:alpha|beta)(?: ?\d)?/i.exec(text2 + appMinorVersion);
                const obj48 = /(?:alpha|beta)(?: ?\d)?/i;
              }
              if (!text2) {
                text2 = /\bMinefield\b/i.test(tmp9) && "a";
                const obj49 = /\bMinefield\b/i;
              }
              const obj47 = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i;
            }
            text2 = null;
            if (text2) {
              str = "alpha";
              if (obj50.test(text2)) {
                str = "beta";
              }
              text2 = version;
              text2 = globalThis;
              let _RegExp3 = RegExp;
              str = "\\+?$";
              str = "";
              str = "beta";
              text2 = version.replace(RegExp(`${tmp}\\+?$`), "");
              if ("beta" === str) {
                str6 = str7;
              }
              text2 = text2 + str6;
              text2 = /\d+\+?/.exec(text2) || "";
              version = text2 + text2;
              text2 = str;
              obj50 = /b/i;
              const obj51 = /\d+\+?/;
            }
            text2 = text1;
            str = "Fennec";
            if ("Fennec" != text1) {
              text2 = text1;
              str = "Firefox";
              if ("Firefox" == text1) {
                text2 = /\bAppleWebKit\/([\d.]+\+?)/i.exec(tmp9) || 0;
                str = text2[1];
                let arr16 = items12;
                text2 = str;
                if (str) {
                  text2 = globalThis;
                  const _parseFloat2 = parseFloat;
                  str = ".0$1";
                  const items11 = [parseFloat(str.replace(/\.(\d)$/, ".0$1")), str];
                  text2 = text1;
                  if ("Safari" == text1) {
                    str = "+";
                    if ("+" == arr18.slice(-1)) {
                      text1 = "WebKit Nightly";
                      version = items11[1].slice(0, -1);
                      str = "alpha";
                      const arr19 = items11[1];
                    }
                    text2 = /\b(?:Headless)?Chrome\/([\d.]+)/i.exec(tmp9) || 0;
                    items11[1] = text2[1];
                    text2 = 537.36 == items11[0] && 537.36 == items11[2];
                    if (text2) {
                      const _parseFloat3 = parseFloat;
                      text2 = parseFloat(items11[1]) >= 28;
                    }
                    if (text2) {
                      str = "WebKit";
                      text2 = "WebKit" == items12;
                    }
                    if (text2) {
                      items12 = ["Blink"];
                    }
                    if (isMatch4) {
                      if (!isMatch) {
                        text2 = num20;
                        if (items12) {
                          str = ".x";
                          if (typeof num20 !== "number") {
                            str = "+";
                            if (obj98.test(num20)) {
                              str = "";
                            }
                            obj98 = /[.+]/;
                          }
                          text2 = num20 + str;
                          str = " ";
                          items12[1] = `${tmp} ${tmp}`;
                        }
                        text2 = text1;
                        if ("Safari" != text1) {
                          text2 = text1;
                          text2 = "Chrome" == text1;
                          if (text2) {
                            text2 = /\bHeadlessChrome/i.test(tmp9);
                            const obj72 = /\bHeadlessChrome/i;
                          }
                          arr16 = items12;
                          text2 = str;
                          if (text2) {
                            str = "headless";
                            text2 = items6.unshift("headless");
                            arr16 = items12;
                            text2 = str;
                          }
                        } else {
                          text2 = version;
                          if (version) {
                            const _parseInt = parseInt;
                            text2 = version;
                          }
                          version = text2;
                          arr16 = items12;
                          text2 = str;
                        }
                      }
                      if (items12) {
                        str = "like Chrome";
                        items12[1] = "like Chrome";
                      }
                      text2 = items11[1];
                      if (!text2) {
                        text2 = items11[0];
                        let num45 = 1;
                        if (text2 >= 530) {
                          let num47 = 2;
                          if (text2 >= 532) {
                            let num49 = 3;
                            if (text2 >= 532.05) {
                              let num51 = 4;
                              if (text2 >= 533) {
                                let num53 = 5;
                                if (text2 >= 534.03) {
                                  let num55 = 6;
                                  if (text2 >= 534.07) {
                                    let num57 = 7;
                                    if (text2 >= 534.1) {
                                      let num59 = 8;
                                      if (text2 >= 534.13) {
                                        let num61 = 9;
                                        if (text2 >= 534.16) {
                                          let num63 = 10;
                                          if (text2 >= 534.24) {
                                            let num65 = 11;
                                            if (text2 >= 534.3) {
                                              let num67 = 12;
                                              if (text2 >= 535.01) {
                                                str = "13+";
                                                if (text2 >= 535.02) {
                                                  let num70 = 15;
                                                  if (text2 >= 535.07) {
                                                    let num72 = 16;
                                                    if (text2 >= 535.11) {
                                                      let num74 = 17;
                                                      if (text2 >= 535.19) {
                                                        let num76 = 18;
                                                        if (text2 >= 536.05) {
                                                          let num78 = 19;
                                                          if (text2 >= 536.1) {
                                                            let num80 = 20;
                                                            if (text2 >= 537.01) {
                                                              str = "21+";
                                                              if (text2 >= 537.11) {
                                                                let num83 = 23;
                                                                if (text2 >= 537.13) {
                                                                  let num85 = 24;
                                                                  if (text2 >= 537.18) {
                                                                    let num87 = 25;
                                                                    if (text2 >= 537.24) {
                                                                      let num88 = 26;
                                                                      if (text2 >= 537.36) {
                                                                        str = "Blink";
                                                                        str = "28";
                                                                        if ("Blink" != items12) {
                                                                          str = "27";
                                                                        }
                                                                        num88 = str;
                                                                      }
                                                                      num87 = num88;
                                                                    }
                                                                    num85 = num87;
                                                                  }
                                                                  num83 = num85;
                                                                }
                                                                str = num83;
                                                              }
                                                              num80 = str;
                                                            }
                                                            num78 = num80;
                                                          }
                                                          num76 = num78;
                                                        }
                                                        num74 = num76;
                                                      }
                                                      num72 = num74;
                                                    }
                                                    num70 = num72;
                                                  }
                                                  str = num70;
                                                }
                                                num67 = str;
                                              }
                                              num65 = num67;
                                            }
                                            num63 = num65;
                                          }
                                          num61 = num63;
                                        }
                                        num59 = num61;
                                      }
                                      num57 = num59;
                                    }
                                    num55 = num57;
                                  }
                                  num53 = num55;
                                }
                                num51 = num53;
                              }
                              num49 = num51;
                            }
                            num47 = num49;
                          }
                          num45 = num47;
                        }
                        text2 = num45;
                      }
                      num20 = text2;
                    }
                    if (items12) {
                      str = "like Safari";
                      items12[1] = "like Safari";
                    }
                    text2 = items11[0];
                    num20 = 1;
                    if (text2 >= 400) {
                      let num22 = 2;
                      if (text2 >= 500) {
                        let num24 = 3;
                        if (text2 >= 526) {
                          let num26 = 4;
                          if (text2 >= 533) {
                            str = "4+";
                            if (text2 >= 534) {
                              let num29 = 5;
                              if (text2 >= 535) {
                                let num31 = 6;
                                if (text2 >= 537) {
                                  let num33 = 7;
                                  if (text2 >= 538) {
                                    let num35 = 8;
                                    if (text2 >= 601) {
                                      let num37 = 9;
                                      if (text2 >= 602) {
                                        let num39 = 10;
                                        if (text2 >= 604) {
                                          let num41 = 11;
                                          if (text2 >= 606) {
                                            let num43 = "12";
                                            if (text2 < 608) {
                                              num43 = 12;
                                            }
                                            num41 = num43;
                                          }
                                          num39 = num41;
                                        }
                                        num37 = num39;
                                      }
                                      num35 = num37;
                                    }
                                    num33 = num35;
                                  }
                                  num31 = num33;
                                }
                                num29 = num31;
                              }
                              str = num29;
                            }
                            num26 = str;
                          }
                          num24 = num26;
                        }
                        num22 = num24;
                      }
                      num20 = num22;
                    }
                    arr18 = items11[1];
                    const obj71 = /\b(?:Headless)?Chrome\/([\d.]+)/i;
                  }
                  text2 = version;
                  text2 = version != items11[1];
                  if (text2) {
                    text2 = version;
                    text2 = /\bSafari\/([\d.]+\+?)/i.exec(tmp9) || 0;
                    text2 = text2[1];
                    items11[2] = text2;
                    text2 = version != text2;
                    const obj70 = /\bSafari\/([\d.]+\+?)/i;
                  }
                  str = text2;
                  if (!text2) {
                    version = null;
                    str = text2;
                  }
                }
                text2 = text1;
                if ("Opera" == text1) {
                  text2 = /\bzbov|zvav$/.exec(str);
                  if (text2) {
                    text2 = text1;
                    str = " ";
                    text2 = `${tmp29} `;
                    str = "desktop mode";
                    text2 = items6.unshift("desktop mode");
                    str = "zvav";
                    if ("zvav" == text2) {
                      str = "Mini";
                      text2 = `${tmp29} Mini`;
                      text2 = null;
                    } else {
                      str = "Mobile";
                      text2 = `${tmp29} MiniMobile`;
                    }
                    text2 = globalThis;
                    let _RegExp5 = RegExp;
                    str = " *";
                    str = "$";
                    str = "";
                    text2 = str.replace(RegExp(` *${tmp}$`), "");
                  }
                  const obj73 = /\bzbov|zvav$/;
                }
                text2 = text1;
                if ("Safari" == text1) {
                  text2 = arr16;
                  if (arr16) {
                    text2 = arr16[1];
                  }
                  if (obj74.exec(text2)) {
                    str = "desktop mode";
                    text2 = items6.unshift("desktop mode");
                    text1 = "Chrome Mobile";
                    version = null;
                    str = null;
                    str = text2;
                    if (obj76.test(str)) {
                      str = "iOS 4.3+";
                      str = "Apple";
                    }
                    obj76 = /\bOS X\b/;
                  }
                  text2 = version;
                  if (version) {
                    text2 = version;
                    text2 = /[\d.]+$/.exec(str);
                    text2 = 0 == version.indexOf(text2);
                    const obj77 = /[\d.]+$/;
                  }
                  if (text2) {
                    str = "/";
                    str = "-";
                    text2 = tmp9.indexOf(`/${tmp}-`) > -1;
                  }
                  let arr20 = str;
                  if (text2) {
                    text2 = trim;
                    str = "";
                    arr20 = trim(str.replace(text2, ""));
                  }
                  text2 = arr20;
                  if (arr20) {
                    text2 = text1;
                    text2 = -1 != arr20.indexOf(text1);
                  }
                  if (text2) {
                    text2 = globalThis;
                    let _RegExp6 = RegExp;
                    text2 = text1;
                    str = " OS";
                    text2 = !RegExp(`${tmp29} OS`).test(arr20);
                    let RegExpResult = RegExp(`${tmp29} OS`);
                  }
                  str = arr20;
                  if (text2) {
                    text2 = globalThis;
                    let _RegExp7 = RegExp;
                    text2 = qualify;
                    text2 = text1;
                    str = " *";
                    str = "";
                    str = arr20.replace(RegExp(` *${qualify(tmp29)} *`), "");
                  }
                  text2 = arr16;
                  if (arr16) {
                    text2 = text1;
                    text2 = !/\b(?:Avant|Nook)\b/.test(text1);
                    const obj79 = /\b(?:Avant|Nook)\b/;
                  }
                  if (text2) {
                    text2 = text1;
                    text2 = /Browser|Lunascape|Maxthon/.test(text1);
                    if (!text2) {
                      text2 = text1;
                      text2 = "Safari" != text1;
                      if (text2) {
                        text2 = /^iOS/.test(str);
                        const obj81 = /^iOS/;
                      }
                      if (text2) {
                        text2 = /\bSafari\b/.test(arr16[1]);
                        const obj82 = /\bSafari\b/;
                      }
                    }
                    if (!text2) {
                      text2 = text1;
                      text2 = /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(text1) && arr16[1];
                      const obj83 = /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/;
                    }
                    const obj80 = /Browser|Lunascape|Maxthon/;
                  }
                  if (text2) {
                    text2 = arr16[arr16.length - 1];
                  }
                  if (text2) {
                    text2 = items6.push(text2);
                  }
                  let arr21 = items6;
                  if (items6.length) {
                    str = "; ";
                    str = "(";
                    const items13 = [];
                    str = ")";
                    items13[0] = `(${arr8.join("; ")})`;
                    arr21 = items13;
                  }
                  text2 = str;
                  if (str) {
                    text2 = arr13;
                  }
                  if (text2) {
                    text2 = arr13.indexOf(str) < 0;
                  }
                  if (text2) {
                    str = "on ";
                    text2 = arr21.push(`on ${str}`);
                  }
                  if (arr13) {
                    str = "on ";
                    if (obj84.test(arr21[arr21.length - 1])) {
                      str = "";
                    }
                    text2 = arr21.push(str + arr13);
                    obj84 = /^on /;
                  }
                  text2 = str;
                  if (str) {
                    text2 = / ([\d.+]+)$/.exec(str);
                    if (text2) {
                      str = "/";
                      text2 = "/" == str.charAt(str.length - text2[0].length - 1);
                    }
                    text2 = str;
                    if (text2) {
                      text2 = str;
                      if (!text2) {
                        str = "";
                        text2 = str.replace(text2[0], "");
                      }
                    }
                    obj = { architecture: 32, family: null, version: null, toString: null };
                    obj[1] = text2;
                    text2 = null;
                    if (text2) {
                      text2 = text2[1];
                    }
                    obj[2] = text2;
                    obj[3] = function toString() {
                      const version = this.version;
                      let str = "";
                      let str2 = "";
                      if (version) {
                        str2 = str;
                        if (!text2) {
                          str2 = ` ${version}`;
                        }
                      }
                      const sum = this.family + str2;
                      if (64 == this.architecture) {
                        str = " 64-bit";
                      }
                      return sum + str;
                    };
                    text2 = obj;
                    const obj85 = / ([\d.+]+)$/;
                  }
                  text2 = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(text2);
                  if (text2) {
                    if (!obj88.test(text2)) {
                      if (text2) {
                        text2.architecture = 64;
                        str = text2.family;
                        text2 = globalThis;
                        const _RegExp8 = RegExp;
                        str = " *";
                        str = "";
                        text2.family = str.replace(RegExp(` *${tmp}`), "");
                      }
                      text2 = text1;
                      if (text1) {
                        text2 = /\bWOW64\b/i.test(tmp9);
                        if (!text2) {
                          if (isMatch4) {
                            let platform2 = tmp11.cpuClass;
                            if (!platform2) {
                              platform2 = tmp11.platform;
                            }
                            isMatch4 = /\w(?:86|32)$/.test(platform2);
                            const obj90 = /\w(?:86|32)$/;
                          }
                          if (isMatch4) {
                            isMatch4 = !/\bWin64; x64\b/i.test(tmp9);
                            const obj91 = /\bWin64; x64\b/i;
                          }
                          text2 = isMatch4;
                        }
                        const obj89 = /\bWOW64\b/i;
                      }
                      if (text2) {
                        str = "32-bit";
                        text2 = arr21.unshift("32-bit");
                      }
                    }
                    if (!tmp9) {
                      c0 = null;
                      tmp9 = null;
                    }
                    obj1 = { description: tmp9 };
                    text2 = arr16;
                    if (arr16) {
                      text2 = arr16[0];
                    }
                    obj1.layout = text2;
                    obj1.manufacturer = str;
                    text2 = text1;
                    obj1.name = text1;
                    obj1.prerelease = text2;
                    obj1.product = arr13;
                    obj1.ua = tmp9;
                    if (text1) {
                      text2 = version;
                    }
                    obj1.version = text2;
                    if (!text2) {
                      obj2 = { architecture: null, family: null, version: null, toString: null };
                      obj2[3] = function toString() {
                        return "null";
                      };
                      text2 = obj2;
                    }
                    obj1.os = text2;
                    text2 = parse;
                    obj1.parse = parse;
                    obj1.toString = function toStringPlatform() {
                      return this.description || "";
                    };
                    if (obj1.version) {
                      text2 = arr21.unshift(version);
                    }
                    if (obj1.name) {
                      text2 = text1;
                      text2 = arr21.unshift(text1);
                    }
                    if (text2) {
                      text2 = text1;
                    }
                    if (text2) {
                      text2 = globalThis;
                      let _String2 = String;
                      str = String(text2);
                      str = " ";
                      text2 = text2 != str.split(" ")[0];
                      if (!text2) {
                        text2 = text1;
                        text2 = text2 != text1.split(" ")[0] && !arr13;
                      }
                    }
                    if (!text2) {
                      if (arr21.length) {
                        str = " ";
                        obj1.description = arr21.join(" ");
                      }
                      return obj1;
                    } else {
                      if (arr13) {
                        str = "(";
                        text2 = `(${tmp}`;
                        str = ")";
                        text2 = `(${tmp})`;
                      } else {
                        str = "on ";
                        text2 = `on ${`(${tmp}`}`;
                      }
                      text2 = arr21.push(text2);
                    }
                    obj88 = /\bi686\b/i;
                  }
                  if (text2) {
                    text2 = /^OS X/.test(text2.family);
                    const obj92 = /^OS X/;
                  }
                  if (text2) {
                    text2 = text1;
                    text2 = "Chrome" == text1;
                  }
                  if (text2) {
                    text2 = globalThis;
                    const _parseFloat4 = parseFloat;
                    text2 = version;
                    text2 = parseFloat(version) >= 39;
                  }
                  if (text2) {
                    text2.architecture = 64;
                  }
                  obj74 = /\bChrome\b/;
                  const obj87 = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i;
                }
                text2 = text1;
                text2 = /\bSRWare Iron\b/.test(text1);
                if (text2) {
                  text2 = version;
                  text2 = !version;
                }
                str = text2;
                if (text2) {
                  version = getVersion("Chrome");
                  str = text2;
                }
                const obj52 = /\b(?:Android|Firefox OS|KaiOS)\b/;
                const obj69 = /\bAppleWebKit\/([\d.]+\+?)/i;
                const obj75 = /\bSRWare Iron\b/;
              }
              text2 = text1;
              str = "Maxthon";
              if ("Maxthon" == text1) {
                text2 = version;
                if (version) {
                  text2 = version;
                  str = ".x";
                  version = version.replace(/\.[\d.]+/, ".x");
                  str = text2;
                  text2 = manufacturer;
                  arr13 = str93;
                  items12 = text2;
                }
              }
              if (obj53.test(str93)) {
                str = "Xbox 360";
                if ("Xbox 360" == str93) {
                  text2 = null;
                }
                text2 = "Xbox 360" == str93;
                if (text2) {
                  text2 = /\bIEMobile\b/.test(tmp9);
                  const obj68 = /\bIEMobile\b/;
                }
                str = text2;
                text2 = manufacturer;
                arr13 = str93;
                items12 = text2;
                if (text2) {
                  str = "mobile mode";
                  text2 = items6.unshift("mobile mode");
                  str = text2;
                  text2 = manufacturer;
                  arr13 = str93;
                  items12 = text2;
                }
              } else {
                text2 = text1;
                if (obj54.test(text1)) {
                  str = "Windows CE";
                  if ("Windows CE" != text2) {
                    const obj97 = /Mobi/i;
                  }
                  text2 = text1;
                  str = " Mobile";
                  text1 = `${tmp29} Mobile`;
                  str = text2;
                  text2 = manufacturer;
                  arr13 = str93;
                  items12 = text2;
                } else {
                  text2 = text1;
                  if (`${tmp29} Mobile`) {
                    if (!str93) {
                      text2 = text1;
                      const obj55 = /Browser|Mobi/;
                    }
                  }
                }
                text2 = text1;
                if ("IE" == text1) {
                  if (isMatch4) {
                    try {
                      if (null === obj.external) {
                        str = "platform preview";
                        text2 = items6.unshift("platform preview");
                      }
                      str = text2;
                      text2 = manufacturer;
                      arr13 = str93;
                      items12 = text2;
                    } catch (err) {
                      str = "embedded";
                      text2 = arr.unshift("embedded");
                      str = tmp4;
                      text2 = tmp3;
                      arr13 = tmp2;
                      items12 = text2;
                    }
                  }
                }
                if (obj56.test(str93)) {
                  text2 = globalThis;
                  let _RegExp4 = RegExp;
                  str = " *";
                  str = "/([.\\d]+)";
                  str = "i";
                  text2 = RegExp(`${str93.replace(/ +/g, " *")}/([.\\d]+)`, "i").exec(tmp9) || 0;
                  text2 = text2[1] || version;
                  if (text2) {
                    const items14 = [text2, /BB10/.test(tmp9)];
                    str = "Device Software";
                    str = manufacturer;
                    text2 = str93;
                    if (items14[1]) {
                      replaced = null;
                      str = "BlackBerry";
                      text2 = null;
                      str = "BlackBerry";
                    }
                    str = " ";
                    str = `${str} ${arr15[0]}`;
                    version = null;
                    text2 = str;
                    arr13 = text2;
                    items12 = text2;
                    const obj67 = /BB10/;
                  }
                  let RegExpResult1 = RegExp(`${str93.replace(/ +/g, " *")}/([.\\d]+)`, "i");
                } else {
                  const obj57 = /\bBB10\b/;
                }
                const self = this;
                text2 = forOwn;
                let name = this != forOwn && "Wii" != str93;
                if (name) {
                  text2 = isMatch4;
                  if (isMatch4) {
                    text2 = tmp23;
                  }
                  if (!text2) {
                    text2 = text1;
                    text2 = /Opera/.test(text1);
                    if (text2) {
                      text2 = /\b(?:MSIE|Firefox)\b/i.test(tmp9);
                      const obj60 = /\b(?:MSIE|Firefox)\b/i;
                    }
                    const obj59 = /Opera/;
                  }
                  if (!text2) {
                    text2 = text1;
                    text2 = "Firefox" == text1;
                    if (text2) {
                      text2 = /\bOS X (?:\d+\.){2,}/.test(text2);
                      const obj61 = /\bOS X (?:\d+\.){2,}/;
                    }
                  }
                  if (!text2) {
                    text2 = text1;
                    text2 = "IE" == text1;
                    if (text2) {
                      if (text2) {
                        text2 = !/^Win/.test(text2);
                        const obj62 = /^Win/;
                      }
                      if (text2) {
                        text2 = version;
                        text2 = version > 5.5;
                      }
                      if (!text2) {
                        text2 = /\bWindows XP\b/.test(text2);
                        if (text2) {
                          text2 = version;
                          text2 = version > 8;
                        }
                        const obj63 = /\bWindows XP\b/;
                      }
                      if (!text2) {
                        text2 = version;
                        text2 = 8 == version;
                        if (text2) {
                          text2 = !/\bTrident\b/.test(tmp9);
                          const obj64 = /\bTrident\b/;
                        }
                      }
                    }
                  }
                  name = text2;
                }
                if (!name) {
                  if (name) {
                    name = text2.name;
                  }
                  str = text2;
                  text2 = manufacturer;
                  arr13 = str93;
                  items12 = text2;
                  if (name) {
                    str = "ing as ";
                    const version2 = text2.version;
                    str = "";
                    text2 = `ing as ${tmp.name}`;
                    if (version2) {
                      str = " ";
                      str = ` ${version2}`;
                    }
                    text2 = text2 + str;
                    text2 = text1;
                    if (obj5.test(text1)) {
                      text2 = /\bIE\b/.test(text2);
                      if (text2) {
                        str = "Mac OS";
                        text2 = "Mac OS" == text2;
                      }
                      if (text2) {
                        text2 = null;
                      }
                      str = "identify";
                      text2 = `identify${tmp}`;
                      const obj66 = /\bIE\b/;
                    } else {
                      str = "Opera";
                      if (tmp24) {
                        text2 = format;
                        str = "$1 $2";
                        str = format(tmp24.replace(/([a-z])([A-Z])/g, "$1 $2"));
                      }
                      str = "mask";
                      text2 = `mask${tmp}`;
                      text1 = str;
                      if (obj65.test(`mask${tmp}`)) {
                        text2 = null;
                      }
                      if (!isMatch4) {
                        version = null;
                      }
                      obj65 = /\bIE\b/;
                    }
                    items12 = ["Presto"];
                    text2 = items6.push(text2);
                    str = text2;
                    text2 = manufacturer;
                    arr13 = str93;
                  }
                } else {
                  let test = obj5.test;
                  text2 = parse;
                  const call = parse.call;
                  str = "";
                  str = ";";
                  text2 = `${tmp9.replace(obj5, "")};`;
                  text2 = typeof call === "unknown" ? text2(`${tmp9.replace(obj5, "")};`) : call(text2, `${tmp9.replace(obj5, "")};`);
                  test = test(text2);
                  text2 = !test;
                }
                obj54 = /^(?:Chrome|IE|Opera)$/;
                obj56 = /\bBlackBerry\b/;
              }
              obj53 = /\bXbox\b/i;
            }
            text1 = "Firefox Mobile";
            str = text2;
            text2 = manufacturer;
            arr13 = str93;
            items12 = text2;
            const obj40 = /; *(?:XBLWP|ZuneWP)(\d+)/i;
            const tmp94 = /; *(?:XBLWP|ZuneWP)(\d+)/i.exec(tmp9) || 0;
          }
          if (obj41.test(tmp9)) {
            text1 = "IE Mobile";
            str = "desktop mode";
            text2 = items6.unshift("desktop mode");
            text2 = version;
            str = "Windows Phone 8.x";
            str = "Windows Phone 8.x";
            tmp99 = str;
            if (!version) {
              text2 = /\brv:([\d.]+)/.exec(tmp9) || 0;
              version = text2[1];
              str = "Windows Phone 8.x";
              tmp99 = str;
              const obj43 = /\brv:([\d.]+)/;
            }
          } else {
            let match2 = "IE" != text1 && "Trident" == tmp92;
            let tmp98 = str;
            if (match2) {
              match2 = /\brv:([\d.]+)/.exec(tmp9);
              tmp98 = match2;
              const obj42 = /\brv:([\d.]+)/;
            }
            str = str57;
            tmp99 = tmp98;
            if (match2) {
              text2 = text1;
              if (text1) {
                text2 = text1;
                str = "identifying as ";
                text2 = version;
                str = "";
                text2 = `identifying as ${tmp29}`;
                if (version) {
                  text2 = version;
                  str = " ";
                  str = ` ${tmp27}`;
                }
                text2 = items6.push(text2 + str);
              }
              text1 = "IE";
              version = tmp98[1];
              str = str57;
              tmp99 = tmp98;
            }
          }
          obj12 = /\blike iPhone OS\b/;
          obj41 = /\bWPDesktop\b/i;
        }
        if (obj13.test(tmp46)) {
          if (!text1) {
            text1 = "Safari";
          }
          const match3 = / OS ([\d_]+)/i.exec(tmp9);
          str = "";
          if (match3) {
            str = match3[1];
            str = ".";
            str = " ";
            str = ` ${str.replace(/_/g, ".")}`;
          }
          str = "iOS";
          str57 = `iOS${str}`;
          manufacturer = tmp31;
          str93 = tmp46;
          const obj33 = / OS ([\d_]+)/i;
        } else if ("Konqueror" != text1) {
          if (tmp31) {
            if ("Google" != tmp31) {
              if (!obj15.test(text1)) {
                const obj17 = /\bVita\b/;
              } else {
                const obj16 = /\bMobile Safari\b/i;
              }
              obj15 = /Chrome/;
            }
            text1 = "Android Browser";
            str = "Android";
            if (obj32.test(tmp32)) {
              str = tmp32;
            }
            str57 = str;
            manufacturer = tmp31;
            str93 = tmp46;
            obj32 = /\bAndroid\b/;
          }
          if (obj18.test(tmp32)) {
            if (obj19.test(text1)) {
              const obj20 = /\bVersion\//i;
            }
            obj19 = /^Chrome/;
          }
          if ("Silk" == text1) {
            str = tmp32;
            if (!obj30.test(tmp9)) {
              str = "desktop mode";
              arr = items6.unshift("desktop mode");
              str = "Android";
            }
            str57 = str;
            manufacturer = tmp31;
            str93 = tmp46;
            if (obj31.test(tmp9)) {
              str = "accelerated";
              items6.unshift("accelerated");
              str57 = str;
              manufacturer = tmp31;
              str93 = tmp46;
            }
            obj30 = /\bMobi/i;
            obj31 = /Accelerated *= *true/i;
          } else {
            text2 = text1;
            str = "UC Browser";
            if ("UC Browser" == text1) {
              if (obj21.test(tmp9)) {
                str = "speed mode";
                items6.push("speed mode");
                str57 = tmp32;
                manufacturer = tmp31;
                str93 = tmp46;
              }
              obj21 = /\bUCWEB\b/;
            }
            let tmp57 = match1;
            if ("PaleMoon" == text1) {
              const match4 = /\bFirefox\/([\d.]+)\b/.exec(tmp9);
              tmp57 = match4;
              if (match4) {
                str = "identifying as Firefox ";
                items6.push(`identifying as Firefox ${tmp58[1]}`);
                str57 = tmp32;
                manufacturer = tmp31;
                str93 = tmp46;
              }
              const obj22 = /\bFirefox\/([\d.]+)\b/;
            }
            if ("Firefox" == text1) {
              const match5 = /\b(Mobile|Tablet|TV)\b/i.exec(tmp9);
              tmp57 = match5;
              if (match5) {
                str = tmp32;
                if (!tmp32) {
                  str = "Firefox OS";
                }
                str57 = str;
                manufacturer = tmp31;
                str93 = tmp46;
                if (!tmp46) {
                  replaced = tmp75;
                  str57 = str;
                  manufacturer = tmp31;
                  str93 = tmp75;
                }
              }
              const obj23 = /\b(Mobile|Tablet|TV)\b/i;
            }
            if (text1) {
              const isMatch5 = /\bMinefield\b/i.test(tmp9);
              let match6 = !isMatch5;
              if (!isMatch5) {
                match6 = /\b(?:Firefox|Safari)\b/.exec(text1);
                const obj25 = /\b(?:Firefox|Safari)\b/;
              }
              tmp57 = match6;
              if (!match6) {
                if ("Electron" == text1) {
                  match6 = /\bChrome\/([\d.]+)\b/.exec(tmp9) || 0[1];
                  const obj26 = /\bChrome\/([\d.]+)\b/;
                  const tmp67 = /\bChrome\/([\d.]+)\b/.exec(tmp9) || 0;
                }
                str57 = tmp32;
                manufacturer = tmp31;
                str93 = tmp46;
                if ("Electron" == text1) {
                  items6.push(`Chromium ${tmp63}`);
                  str57 = tmp32;
                  manufacturer = tmp31;
                  str93 = tmp46;
                }
              }
              const obj24 = /\bMinefield\b/i;
            }
            let isMatch6 = text1;
            if (text1) {
              isMatch6 = !tmp46;
            }
            if (isMatch6) {
              isMatch6 = /[\/,]|^[^(]+?\)/.test(tmp9.slice(tmp9.indexOf(`${tmp57}/`) + 8));
              const obj27 = /[\/,]|^[^(]+?\)/;
            }
            if (isMatch6) {
              text1 = null;
            }
            let tmp70 = tmp46;
            if (!tmp46) {
              tmp70 = tmp31;
            }
            if (!tmp70) {
              tmp70 = tmp32;
            }
            let tmp71 = tmp70;
            if (tmp70) {
              let isMatch7 = tmp46;
              if (!tmp46) {
                isMatch7 = tmp31;
              }
              if (!isMatch7) {
                isMatch7 = /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(tmp32);
                const obj28 = /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/;
              }
              tmp71 = isMatch7;
            }
            str57 = tmp32;
            manufacturer = tmp31;
            str93 = tmp46;
            if (tmp71) {
              if (obj29.test(tmp32)) {
                tmp70 = tmp32;
              }
              str = " Browser";
              text1 = `${tmp74(tmp70)} Browser`;
              str57 = tmp32;
              manufacturer = tmp31;
              str93 = tmp46;
              obj29 = /\bAndroid\b/;
            }
          }
          obj18 = /\bAndroid\b/;
        } else {
          manufacturer = tmp31;
          str93 = tmp46;
          const obj14 = /^Linux\b/i;
        }
        obj10 = /\bSimulator\b/i;
        obj13 = /^iP/;
        const obj9 = /\bGoogle TV\b/;
      }
      let tmp39 = tmp31;
      if (tmp31) {
        tmp39 = str77;
      }
      product1 = str77;
      if (tmp39) {
        let _RegExp = RegExp;
        let _RegExp2 = RegExp;
        replaced = str77.replace(RegExp(`^(${qualify(tmp31)})[-_.\\s]`, "i"), `${tmp31} `).replace(RegExp(`^(${qualify(tmp31)})[-_.]?(\\w)`, "i"), `${tmp31} $2`);
        product1 = replaced;
        const str84 = str77.replace(RegExp(`^(${qualify(tmp31)})[-_.\\s]`, "i"), `${tmp31} `);
      }
      const obj7 = /\bAndroid\b/;
    }
    __Class__ = getClassOf(tmp20);
  }
  const parsed = parse();
  if (typeof globalThis.define === "function") {
    if (typeof globalThis.define.amd === "object") {
      if (globalThis.define.amd) {
        tmp.platform = parsed;
        globalThis.define(() => parsed);
      }
    }
  }
  if (obj[typeof re2] && re2) {
    if (tmp4) {
      let keys = Object.keys();
      if (keys !== undefined) {
        while (keys[53] !== undefined) {
          let tmp14 = tmp12;
          let call = hasOwnProperty.call;
          if (!(typeof call === "unknown" ? hasOwnProperty(tmp12) : call(parsed, tmp12))) {
            continue;
          } else {
            tmp2[tmp12] = parsed[tmp12];
            continue;
          }
          continue;
        }
      }
    }
  }
  tmp.platform = parsed;
};
let call = fn.call;
if (typeof call === "unknown") {
  fn();
} else {
  call(self);
}