// _runtime/01341_format.js
let self = this;
const global = arg0;
const module = arg4;
const exports = arg5;
const fn = function () {
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
  function forOwn(obj, fn) {
    for (const key10005 in arg0) {
      let call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let callResult = hasOwnProperty(key10005);
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
    }
    return sum;
  }
  function qualify(arg0) {
    return String(arg0).replace(/([ -])(?!$)/g, "$1?");
  }
  function reduce(height, fn) {
    let num = 0;
    if (height) {
      num = height.length;
    }
    if (typeof num === "number") {
      if (num > -1) {
        if (num <= closure_1) {
          let tmp11 = null;
          let num3 = 0;
          let tmp4 = null;
          if (0 < num) {
            do {
              tmp11 = fn(tmp11, height[num3], num3, height);
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
        let call = hasOwnProperty.call;
        let tmp15 = tmp7;
        if (!(typeof call === "unknown" ? hasOwnProperty(tmp7) : call(height, tmp7))) {
          continue;
        } else {
          tmp3 = fn(tmp6, height[tmp7], tmp15, height);
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
  let tmp = (obj[typeof window] && window) || this;
  closure_0 = tmp;
  let tmp4 = obj[typeof module] && module && !module.nodeType && module;
  let tmp5 = tmp2;
  if (obj[typeof exports] && exports) {
    tmp5 = tmp4;
  }
  if (tmp5) {
    tmp5 = typeof global === "object";
  }
  if (tmp5) {
    tmp5 = global;
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
  const re2 = /\bOpera/;
  hasOwnProperty = str.hasOwnProperty;
  const toString = str.toString;
  function parse(global) {
    c0 = global;
    let obj = c0;
    let tmp7 = global;
    if (global) {
      tmp7 = typeof global === "object";
    }
    if (tmp7) {
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
      let obj1 = /\bChrome\b/;
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
        let prop = tmp20["[[Class]]"];
      }
      let tmp24 = null;
      let tmp25 = null;
      if (tmp21(prop)) {
        tmp24 = tmp20;
        tmp25 = prop;
      }
      let isMatch9 = tmp9 == tmp12;
      let versionResult = isMatch9;
      if (isMatch9) {
        versionResult = tmp24;
      }
      if (versionResult) {
        versionResult = typeof tmp24.version === "function";
      }
      if (versionResult) {
        versionResult = tmp24.version();
      }
      function getProduct(items2) {
        return reduce(items2, (arg0, pattern) => {
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
            let match = RegExp(`\\b${pattern} *\\d+[.\\w_]*`, "i").exec(closure_1_0);
            if (!match) {
              const _RegExp2 = RegExp;
              match = RegExp(`\\b${pattern} *\\w+-[\\w]*`, "i").exec(closure_1_0);
              const RegExpResult1 = RegExp(`\\b${pattern} *\\w+-[\\w]*`, "i");
            }
            if (!match) {
              const _RegExp3 = RegExp;
              match = RegExp(`\\b${pattern}(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)`, "i").exec(closure_1_0);
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
            const str9 = String(label);
            const _RegExp6 = RegExp;
            const str14 = parts[0].replace(RegExp(pattern, "i"), pattern.label || pattern);
            const _RegExp7 = RegExp;
            const _String2 = String;
            const str18 = parts[0]
              .replace(RegExp(pattern, "i"), pattern.label || pattern)
              .replace(RegExp(`; *(?:${pattern.label || pattern}[_-])?`, "i"), " ");
            const replaced = String(
              parts[0]
                .replace(RegExp(pattern, "i"), pattern.label || pattern)
                .replace(RegExp(`; *(?:${pattern.label || pattern}[_-])?`, "i"), " ")
                .replace(RegExp(`(${pattern.label || pattern})[-_.]?(\\w)`, "i"), "$1 $2"),
            ).replace(/^ +| +$/g, "");
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
            const str22 = String(
              parts[0]
                .replace(RegExp(pattern, "i"), pattern.label || pattern)
                .replace(RegExp(`; *(?:${pattern.label || pattern}[_-])?`, "i"), " ")
                .replace(RegExp(`(${pattern.label || pattern})[-_.]?(\\w)`, "i"), "$1 $2"),
            );
          }
          return tmp7;
        });
      }
      let version = versionResult;
      const items = [
        { label: "EdgeHTML", pattern: "Edge" },
        "Trident",
        { label: "WebKit", pattern: "AppleWebKit" },
        "iCab",
        ,
        ,
        ,
        ,
      ];
      let str10 = "Presto";
      items[4] = "Presto";
      items[5] = "NetFront";
      items[6] = "Tasman";
      items[7] = "KHTML";
      items[8] = "Gecko";
      const tmp29 = (function getLayout(items) {
        return reduce(items, (arg0, pattern) => {
          let tmp = arg0;
          if (!arg0) {
            pattern = pattern.pattern;
            if (!pattern) {
              const _String = String;
              pattern = String(pattern).replace(/([ -])(?!$)/g, "$1?");
              const str = String(pattern);
            }
            let match = RegExp(`\\b${pattern}\\b`, "i").exec(closure_1_0);
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
      const items1 = [
        "Adobe AIR",
        "Arora",
        "Avant Browser",
        "Breach",
        "Camino",
        "Electron",
        "Epiphany",
        "Fennec",
        "Flock",
        "Galeon",
        "GreenBrowser",
        "iCab",
        "Iceweasel",
        "K-Meleon",
        "Konqueror",
        "Lunascape",
        "Maxthon",
        { label: "Microsoft Edge", pattern: "(?:Edge|Edg|EdgA|EdgiOS)" },
        "Midori",
        "Nook Browser",
        "PaleMoon",
        "PhantomJS",
        "Raven",
        "Rekonq",
        "RockMelt",
        { label: "Samsung Internet", pattern: "SamsungBrowser" },
        "SeaMonkey",
        { label: "Silk", pattern: "(?:Cloud9|Silk-Accelerated)" },
        "Sleipnir",
        "SlimBrowser",
        { label: "SRWare Iron", pattern: "Iron" },
        "Sunrise",
        "Swiftfox",
        "Vivaldi",
        "Waterfox",
        "WebPositive",
        { label: "Yandex Browser", pattern: "YaBrowser" },
        { label: "UC Browser", pattern: "UCBrowser" },
        "Opera Mini",
        { label: "Opera Mini", pattern: "OPiOS" },
        "Opera",
        { label: "Opera", pattern: "OPR" },
        "Chromium",
        "Chrome",
        { label: "Chrome", pattern: "(?:HeadlessChrome)" },
        { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" },
        { label: "Firefox", pattern: "(?:Firefox|Minefield)" },
        { label: "Firefox for iOS", pattern: "FxiOS" },
        { label: "IE", pattern: "IEMobile" },
        { label: "IE", pattern: "MSIE" },
        "Safari",
      ];
      let text1 = (function getName(items1) {
        return reduce(items1, (arg0, pattern) => {
          let tmp = arg0;
          if (!arg0) {
            pattern = pattern.pattern;
            if (!pattern) {
              const _String = String;
              pattern = String(pattern).replace(/([ -])(?!$)/g, "$1?");
              const str = String(pattern);
            }
            let match = RegExp(`\\b${pattern}\\b`, "i").exec(closure_1_0);
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
      const items2 = [
        { label: "BlackBerry", pattern: "BB10" },
        "BlackBerry",
        { label: "Galaxy S", pattern: "GT-I9000" },
        { label: "Galaxy S2", pattern: "GT-I9100" },
        { label: "Galaxy S3", pattern: "GT-I9300" },
        { label: "Galaxy S4", pattern: "GT-I9500" },
        { label: "Galaxy S5", pattern: "SM-G900" },
        { label: "Galaxy S6", pattern: "SM-G920" },
        { label: "Galaxy S6 Edge", pattern: "SM-G925" },
        { label: "Galaxy S7", pattern: "SM-G930" },
        { label: "Galaxy S7 Edge", pattern: "SM-G935" },
        "Google TV",
        "Lumia",
        "iPad",
        "iPod",
        "iPhone",
        "Kindle",
        { label: "Kindle Fire", pattern: "(?:Cloud9|Silk-Accelerated)" },
        "Nexus",
        "Nook",
        "PlayBook",
        "PlayStation Vita",
        "PlayStation",
        "TouchPad",
        "Transformer",
        { label: "Wii U", pattern: "WiiU" },
        "Wii",
        "Xbox One",
        { label: "Xbox 360", pattern: "Xbox" },
        "Xoom",
      ];
      product = getProduct(items2);
      let replaced3 = product;
      obj = {
        Apple: { iPad: 1, iPhone: 1, iPod: 1 },
        Alcatel: {},
        Archos: {},
        Amazon: { Kindle: 1, "Kindle Fire": 1 },
        Asus: { Transformer: 1 },
        "Barnes & Noble": { Nook: 1 },
        BlackBerry: { PlayBook: 1 },
        Google: { "Google TV": 1, Nexus: 1 },
        HP: { TouchPad: 1 },
        HTC: {},
        Huawei: {},
        Lenovo: {},
        LG: {},
        Microsoft: { Xbox: 1, "Xbox One": 1 },
        Motorola: { Xoom: 1 },
        Nintendo: { "Wii U": 1, Wii: 1 },
        Nokia: { Lumia: 1 },
        Oppo: {},
        Samsung: { "Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1 },
        Sony: { PlayStation: 1, "PlayStation Vita": 1 },
        Xiaomi: { Mi: 1, Redmi: 1 },
      };
      const tmp32 = (function getManufacturer(global) {
        return reduce(global, (arg0, arg1, arg2) => {
          let tmp = arg0;
          if (!arg0) {
            let match = arg1[replaced3];
            if (!match) {
              const obj = /^[a-z]+(?: +[a-z]+\b)*/i;
              match = arg1[obj.exec(obj, tmp3)];
            }
            if (!match) {
              const _RegExp = RegExp;
              const _String = String;
              const str = String(arg2);
              match = RegExp(`\\b${String(arg2).replace(/([ -])(?!$)/g, "$1?")}(?:\\b|\\w*\\d)`, "i").exec(closure_1_0);
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
      const items3 = [
        "Windows Phone",
        "KaiOS",
        "Android",
        "CentOS",
        { label: "Chrome OS", pattern: "CrOS" },
        "Debian",
        { label: "DragonFly BSD", pattern: "DragonFly" },
        "Fedora",
        "FreeBSD",
        "Gentoo",
        "Haiku",
      ];
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
      const tmp33 = (function getOS(items3) {
        return reduce(items3, (arg0, pattern) => {
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
            match = RegExp(`\\b${pattern}(?:/[\\d.]+|[ \\w.]*)`, "i").exec(closure_1_0);
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
            const obj = {
              "10.0": "10",
              6.4: "10 Technical Preview",
              6.3: "8.1",
              6.2: "8",
              6.1: "Server 2008 R2 / 7",
              "6.0": "Server 2008 / Vista",
              5.2: "Server 2003 / XP 64-bit",
              5.1: "XP",
              5.01: "2000 SP1",
              "5.0": "2000",
              "4.0": "NT",
              "4.90": "ME",
            };
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
            const str15 = str8
              .replace(/ ce$/i, " CE")
              .replace(/\bhpw/i, "web")
              .replace(/\bMacintosh\b/, "Mac OS");
            const str17 = str8
              .replace(/ ce$/i, " CE")
              .replace(/\bhpw/i, "web")
              .replace(/\bMacintosh\b/, "Mac OS")
              .replace(/_PowerPC\b/i, " OS");
            const str19 = str8
              .replace(/ ce$/i, " CE")
              .replace(/\bhpw/i, "web")
              .replace(/\bMacintosh\b/, "Mac OS")
              .replace(/_PowerPC\b/i, " OS")
              .replace(/\b(OS X) [^ \d]+/i, "$1");
            const str20 = str8
              .replace(/ ce$/i, " CE")
              .replace(/\bhpw/i, "web")
              .replace(/\bMacintosh\b/, "Mac OS")
              .replace(/_PowerPC\b/i, " OS")
              .replace(/\b(OS X) [^ \d]+/i, "$1")
              .replace(/\bMac (OS X)\b/, "$1");
            const str22 = str8
              .replace(/ ce$/i, " CE")
              .replace(/\bhpw/i, "web")
              .replace(/\bMacintosh\b/, "Mac OS")
              .replace(/_PowerPC\b/i, " OS")
              .replace(/\b(OS X) [^ \d]+/i, "$1")
              .replace(/\bMac (OS X)\b/, "$1")
              .replace(/\/(\d)/, " $1");
            const str24 = str8
              .replace(/ ce$/i, " CE")
              .replace(/\bhpw/i, "web")
              .replace(/\bMacintosh\b/, "Mac OS")
              .replace(/_PowerPC\b/i, " OS")
              .replace(/\b(OS X) [^ \d]+/i, "$1")
              .replace(/\bMac (OS X)\b/, "$1")
              .replace(/\/(\d)/, " $1")
              .replace(/_/g, ".");
            const str26 = str8
              .replace(/ ce$/i, " CE")
              .replace(/\bhpw/i, "web")
              .replace(/\bMacintosh\b/, "Mac OS")
              .replace(/_PowerPC\b/i, " OS")
              .replace(/\b(OS X) [^ \d]+/i, "$1")
              .replace(/\bMac (OS X)\b/, "$1")
              .replace(/\/(\d)/, " $1")
              .replace(/_/g, ".")
              .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "");
            const str28 = str8
              .replace(/ ce$/i, " CE")
              .replace(/\bhpw/i, "web")
              .replace(/\bMacintosh\b/, "Mac OS")
              .replace(/_PowerPC\b/i, " OS")
              .replace(/\b(OS X) [^ \d]+/i, "$1")
              .replace(/\bMac (OS X)\b/, "$1")
              .replace(/\/(\d)/, " $1")
              .replace(/_/g, ".")
              .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "")
              .replace(/\bx86\.64\b/gi, "x86_64");
            const str29 = str8
              .replace(/ ce$/i, " CE")
              .replace(/\bhpw/i, "web")
              .replace(/\bMacintosh\b/, "Mac OS")
              .replace(/_PowerPC\b/i, " OS")
              .replace(/\b(OS X) [^ \d]+/i, "$1")
              .replace(/\bMac (OS X)\b/, "$1")
              .replace(/\/(\d)/, " $1")
              .replace(/_/g, ".")
              .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "")
              .replace(/\bx86\.64\b/gi, "x86_64")
              .replace(/\b(Windows Phone) OS\b/, "$1");
            const _String3 = String;
            const str30 = str8
              .replace(/ ce$/i, " CE")
              .replace(/\bhpw/i, "web")
              .replace(/\bMacintosh\b/, "Mac OS")
              .replace(/_PowerPC\b/i, " OS")
              .replace(/\b(OS X) [^ \d]+/i, "$1")
              .replace(/\bMac (OS X)\b/, "$1")
              .replace(/\/(\d)/, " $1")
              .replace(/_/g, ".")
              .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "")
              .replace(/\bx86\.64\b/gi, "x86_64")
              .replace(/\b(Windows Phone) OS\b/, "$1")
              .replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1");
            const replaced = String(
              str8
                .replace(/ ce$/i, " CE")
                .replace(/\bhpw/i, "web")
                .replace(/\bMacintosh\b/, "Mac OS")
                .replace(/_PowerPC\b/i, " OS")
                .replace(/\b(OS X) [^ \d]+/i, "$1")
                .replace(/\bMac (OS X)\b/, "$1")
                .replace(/\/(\d)/, " $1")
                .replace(/_/g, ".")
                .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "")
                .replace(/\bx86\.64\b/gi, "x86_64")
                .replace(/\b(Windows Phone) OS\b/, "$1")
                .replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1")
                .split(" on ")[0],
            ).replace(/^ +| +$/g, "");
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
            const str32 = String(
              str8
                .replace(/ ce$/i, " CE")
                .replace(/\bhpw/i, "web")
                .replace(/\bMacintosh\b/, "Mac OS")
                .replace(/_PowerPC\b/i, " OS")
                .replace(/\b(OS X) [^ \d]+/i, "$1")
                .replace(/\bMac (OS X)\b/, "$1")
                .replace(/\/(\d)/, " $1")
                .replace(/_/g, ".")
                .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "")
                .replace(/\bx86\.64\b/gi, "x86_64")
                .replace(/\b(Windows Phone) OS\b/, "$1")
                .replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1")
                .split(" on ")[0],
            );
          }
          return tmp6;
        });
      })(items3);
      let tmp34 = tmp29;
      if (tmp29) {
        const items4 = [tmp29];
        tmp34 = items4;
      }
      let match = /\bAndroid\b/.test(tmp33) && !product;
      if (match) {
        match = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(tmp9);
        const obj8 = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i;
        const tmp36 = match;
      }
      let str77 = product;
      if (match) {
        const tmp38 = trim(tmp36[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null;
        replaced3 = tmp38;
        str77 = tmp38;
        const str78 = trim(tmp36[1]);
      }
      if (tmp32) {
        if (!str77) {
          const items5 = [tmp32];
          let product1 = getProduct(items5);
          replaced3 = product1;
        }
        const match1 = /\bGoogle TV\b/.exec(product1);
        let tmp45 = product1;
        if (match1) {
          const first = match1[0];
          replaced3 = first;
          tmp45 = first;
        }
        let tmp47 = tmp45;
        if (obj10.test(tmp9)) {
          let str87 = "";
          if (tmp45) {
            str87 = `${tmp45} `;
          }
          let text = `${str87}Simulator`;
          replaced3 = text;
          tmp47 = text;
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
            ({ manufacturer, product } = parse(tmp9.replace(/like iPhone OS/, "")));
            replaced3 = product;
            str57 = tmp33;
            let str93 = product;
            const tmp83 = parse(tmp9.replace(/like iPhone OS/, ""));
          }
          function getVersion(Chrome) {
            return reduce(Chrome, (arg0, arg1) => {
              let tmp = arg0;
              if (!arg0) {
                const _RegExp = RegExp;
                const RegExpResult = RegExp(`${arg1}(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)`, "i");
                tmp =
                  RegExp(`${arg1}(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)`, "i").exec(closure_1_0) ||
                  (0)[1];
                const tmp5 =
                  RegExp(`${arg1}(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)`, "i").exec(closure_1_0) || 0;
              }
              if (!tmp) {
                tmp = null;
              }
              return tmp;
            });
          }
          if (!version) {
            const items7 = [
              "(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)",
              "Version",
              qualify(text1),
              "(?:Firefox|Minefield|NetFront)",
            ];
            version = getVersion(items7);
          }
          if ("iCab" != tmp34) {
            let isMatch2 = /\bOpera\b/.test(text1);
            if (isMatch2) {
              if (obj35.test(tmp9)) {
                str10 = "Blink";
              }
              isMatch2 = str10;
              obj35 = /\bOPR\b/;
            }
            let str115 = isMatch2;
            const obj34 = /\bOpera\b/;
          } else {
            const _parseFloat = parseFloat;
            str115 = "WebKit";
          }
          if (!str115) {
            let str116 = /\b(?:Midori|Nook|Safari)\b/i.test(tmp9);
            if (str116) {
              str116 = !/^(?:Trident|EdgeHTML)$/.test(tmp34);
              const obj37 = /^(?:Trident|EdgeHTML)$/;
            }
            if (str116) {
              str116 = "WebKit";
            }
            str115 = str116;
            const obj36 = /\b(?:Midori|Nook|Safari)\b/i;
          }
          if (!str115) {
            let isMatch3 = !tmp34;
            if (!tmp34) {
              isMatch3 = /\bMSIE\b/i.test(tmp9);
              const obj38 = /\bMSIE\b/i;
            }
            if (isMatch3) {
              let str118 = "Trident";
              if ("Mac OS" == str57) {
                str118 = "Tasman";
              }
              isMatch3 = str118;
            }
            str115 = isMatch3;
          }
          if (!str115) {
            let str120 = "WebKit" == tmp34;
            if (str120) {
              str120 = /\bPlayStation\b(?! Vita\b)/i.test(text1);
              const obj39 = /\bPlayStation\b(?! Vita\b)/i;
            }
            if (str120) {
              str120 = "NetFront";
            }
            str115 = str120;
          }
          let tmp93 = tmp34;
          if (str115) {
            const items8 = [str115];
            tmp93 = items8;
          }
          if ("IE" == text1) {
            const tmp96 = /; *(?:XBLWP|ZuneWP)(\d+)/i.exec(tmp9) || (0)[1];
            str115 = tmp96;
            if (tmp96) {
              text1 = `${tmp30} Mobile`;
              let text2 = tmp96;
              if (!obj44.test(tmp96)) {
                text2 = `${tmp96}.x`;
              }
              let str121 = `Windows Phone ${tmp111}`;
              arr = items6.unshift("desktop mode");
              let tmp100 = tmp96;
              obj44 = /\+$/;
            }
            let tmp113 = str121;
            let tmp114 = tmp93;
            let tmp115 = tmp9;
            let tmp116 = tmp100;
            if (isMatch9) {
              if (
                (function isHostType(global, global) {
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
                })(obj, "global")
              ) {
                let tmp137 = str121;
                let tmp138 = tmp9;
                if (tmp16) {
                  const System = tmp16.lang.System;
                  let text4 = str121;
                  const property = System.getProperty("os.arch");
                  if (!str121) {
                    const text3 = `${System.getProperty("os.name")} `;
                    text4 = `${System.getProperty("os.name")} ${System.getProperty("os.version")}`;
                  }
                  tmp137 = text4;
                  tmp138 = property;
                  tmp100 = System;
                }
                if (tmp17) {
                  try {
                    version = obj.require("ringo/engine").version;
                    version = version.join(".");
                    text1 = "RingoJS";
                    let tmp151 = tmp137;
                    let str132 = tmp151;
                    let items10 = tmp93;
                    let tmp119 = tmp138;
                    let tmp120 = tmp100;
                    if (!`RingoJS`) {
                      text1 = "Rhino";
                      str132 = tmp151;
                      items10 = tmp93;
                      tmp119 = tmp138;
                      tmp120 = tmp100;
                    }
                  } catch (err) {
                    const system = tmp5.system;
                    let tmp152 = system;
                    if (system) {
                      tmp152 = system.global.system == tmp5.system;
                    }
                    tmp151 = tmp6;
                    tmp100 = system;
                    if (tmp152) {
                      text1 = "Narwhal";
                      let tmp153 = tmp6;
                      if (!tmp6) {
                        let os = system[0].os;
                        if (!os) {
                          os = null;
                        }
                        tmp153 = os;
                      }
                      tmp151 = tmp153;
                      tmp100 = system;
                    }
                  }
                } else {
                  const _process = obj.process;
                  let tmp142 = typeof _process === "object";
                  if (typeof _process === "object") {
                    tmp142 = !obj.process.browser;
                  }
                  let _process2 = tmp100;
                  if (tmp142) {
                    _process2 = obj.process;
                  }
                  str132 = tmp137;
                  items10 = tmp93;
                  tmp119 = tmp138;
                  tmp120 = _process2;
                  if (tmp142) {
                    if (typeof _process2.versions === "object") {
                      if (typeof _process2.versions.electron === "string") {
                        items6.push(`Node ${_process2.versions.node}`);
                        text1 = "Electron";
                        version = _process2.versions.electron;
                      } else if (typeof _process2.versions.nw === "string") {
                        items6.push(`Chromium ${tmp28}`, `Node ${_process2.versions.node}`);
                        text1 = "NW.js";
                        version = _process2.versions.nw;
                      }
                    }
                    let tmp145 = tmp137;
                    let tmp146 = tmp138;
                    if (!text1) {
                      text1 = "Node.js";
                      ({ arch, platform } = _process2);
                      const match2 = /[\d.]+/.exec(_process2.version);
                      let first1 = null;
                      if (match2) {
                        first1 = tmp148[0];
                      }
                      version = first1;
                      tmp145 = platform;
                      tmp146 = arch;
                      const obj46 = /[\d.]+/;
                    }
                    str132 = tmp145;
                    tmp119 = tmp146;
                    items10 = tmp93;
                    tmp120 = _process2;
                  }
                }
              } else {
                const runtime = obj.runtime;
                if (getClassOf(runtime) == str2) {
                  text1 = "Adobe AIR";
                  str132 = runtime.flash.system.Capabilities.os;
                  items10 = tmp93;
                  tmp119 = tmp9;
                  tmp120 = runtime;
                } else {
                  const phantom = obj.phantom;
                  if (getClassOf(phantom) == str5) {
                    text1 = "PhantomJS";
                    let text5 = tmp135;
                    if (phantom.version || null) {
                      text5 = `${tmp135.major}.${tmp135.minor}.${tmp135.patch}`;
                    }
                    version = text5;
                    str132 = str121;
                    items10 = tmp93;
                    tmp119 = tmp9;
                    tmp120 = tmp135;
                  } else {
                    let tmp313 = phantom;
                    if (typeof tmp19.documentMode === "number") {
                      const match3 = /\bTrident\/(\d+)/i.exec(tmp9);
                      tmp313 = match3;
                      if (match3) {
                        const items9 = [version, tmp19.documentMode];
                        let sum = +match3[1] + 4;
                        if (sum != items9[1]) {
                          items6.push(`IE ${tmp125[1]} mode`);
                          if (tmp93) {
                            tmp93[1] = "";
                          }
                          tmp125[1] = sum;
                        }
                        if ("IE" == text1) {
                          let _String = String;
                          let StringResult = String(tmp125[1].toFixed(1));
                        } else {
                          StringResult = tmp125[0];
                        }
                        version = StringResult;
                        str132 = str121;
                        items10 = tmp93;
                        tmp119 = tmp9;
                        tmp120 = sum;
                      }
                      const obj95 = /\bTrident\/(\d+)/i;
                    }
                    const documentMode = tmp19.documentMode;
                    let isMatch4 = typeof documentMode === "number";
                    if (typeof documentMode === "number") {
                      isMatch4 = /^(?:Chrome|Firefox)\b/.test(text1);
                      const obj96 = /^(?:Chrome|Firefox)\b/;
                    }
                    str132 = str121;
                    items10 = tmp93;
                    tmp119 = tmp9;
                    tmp120 = tmp313;
                    if (isMatch4) {
                      items6.push(`masking as ${tmp30} ${tmp28}`);
                      text1 = "IE";
                      version = "11.0";
                      items10 = ["Trident"];
                      str132 = "Windows";
                      tmp119 = tmp9;
                      tmp120 = tmp313;
                    }
                  }
                }
              }
              let tmp156 = str132;
              if (str132) {
                tmp156 = format(str132);
              }
              tmp113 = tmp156;
              tmp114 = items10;
              tmp115 = tmp119;
              tmp116 = tmp120;
            }
            let tmp158 = version;
            if (version) {
              let match4 = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version);
              if (!match4) {
                let appMinorVersion = isMatch9;
                const text6 = `${tmp9};`;
                if (isMatch9) {
                  appMinorVersion = tmp11.appMinorVersion;
                }
                match4 = /(?:alpha|beta)(?: ?\d)?/i.exec(text6 + appMinorVersion);
                const obj48 = /(?:alpha|beta)(?: ?\d)?/i;
              }
              if (!match4) {
                match4 = /\bMinefield\b/i.test(tmp9) && "a";
                const obj49 = /\bMinefield\b/i;
                const tmp162 = /\bMinefield\b/i.test(tmp9) && "a";
              }
              tmp158 = match4;
              tmp116 = match4;
              const obj47 = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i;
            }
            let tmp163 = null;
            if (tmp158) {
              let str147 = "alpha";
              if (obj50.test(tmp116)) {
                str147 = "beta";
              }
              let _RegExp3 = RegExp;
              let replaced = version.replace(RegExp(`${tmp116}\\+?$`), "");
              if ("beta" === str147) {
                str6 = str7;
              }
              const sum1 = replaced + str6;
              version = sum1 + (/\d+\+?/.exec(tmp116) || "");
              tmp163 = str147;
              obj50 = /b/i;
              const obj51 = /\d+\+?/;
              const tmp168 = /\d+\+?/.exec(tmp116) || "";
            }
            if ("Fennec" != text1) {
              if ("Firefox" == text1) {
                const str177 = /\bAppleWebKit\/([\d.]+\+?)/i.exec(tmp9) || (0)[1];
                let arr15 = items12;
                let tmp219 = tmp163;
                let tmp220 = str177;
                if (str177) {
                  const _parseFloat2 = parseFloat;
                  const items11 = [parseFloat(str177.replace(/\.(\d)$/, ".0$1")), str177];
                  if ("Safari" == text1) {
                    let arr17 = items11[1];
                    if ("+" == arr17.slice(-1)) {
                      text1 = "WebKit Nightly";
                      let arr18 = items11[1];
                      version = arr18.slice(0, -1);
                      let str180 = "alpha";
                    }
                    items11[1] = /\b(?:Headless)?Chrome\/([\d.]+)/i.exec(tmp9) || (0)[1];
                    let tmp229 = 537.36 == items11[0] && 537.36 == items11[2];
                    if (tmp229) {
                      const _parseFloat3 = parseFloat;
                      tmp229 = parseFloat(items11[1]) >= 28;
                    }
                    if (tmp229) {
                      tmp229 = "WebKit" == items12;
                    }
                    if (tmp229) {
                      items12 = ["Blink"];
                    }
                    if (isMatch9) {
                      if (!isMatch) {
                        let tmp233 = num20;
                        if (items12) {
                          let str189 = ".x";
                          if (typeof num20 !== "number") {
                            let str190 = "+";
                            if (obj98.test(num20)) {
                              str190 = "";
                            }
                            str189 = str190;
                            obj98 = /[.+]/;
                          }
                          const sum2 = num20 + str189;
                          items12[1] = `${tmp234} ${tmp235}`;
                          tmp233 = sum2;
                        }
                        if ("Safari" != text1) {
                          let isMatch5 = "Chrome" == text1;
                          if (isMatch5) {
                            isMatch5 = /\bHeadlessChrome/i.test(tmp9);
                            const obj72 = /\bHeadlessChrome/i;
                          }
                          arr15 = items12;
                          tmp219 = str180;
                          tmp220 = tmp233;
                          if (isMatch5) {
                            items6.unshift("headless");
                            arr15 = items12;
                            tmp219 = str180;
                            tmp220 = tmp233;
                          }
                        } else {
                          if (version) {
                            const _parseInt = parseInt;
                          }
                          version = tmp233;
                          arr15 = items12;
                          tmp219 = str180;
                          tmp220 = tmp233;
                        }
                      }
                      if (items12) {
                        items12[1] = "like Chrome";
                      }
                      let tmp231 = items11[1];
                      if (!tmp231) {
                        const first2 = items11[0];
                        let num45 = 1;
                        if (first2 >= 530) {
                          let num47 = 2;
                          if (first2 >= 532) {
                            let num49 = 3;
                            if (first2 >= 532.05) {
                              let num51 = 4;
                              if (first2 >= 533) {
                                let num53 = 5;
                                if (first2 >= 534.03) {
                                  let num55 = 6;
                                  if (first2 >= 534.07) {
                                    let num57 = 7;
                                    if (first2 >= 534.1) {
                                      let num59 = 8;
                                      if (first2 >= 534.13) {
                                        let num61 = 9;
                                        if (first2 >= 534.16) {
                                          let num63 = 10;
                                          if (first2 >= 534.24) {
                                            let num65 = 11;
                                            if (first2 >= 534.3) {
                                              let num67 = 12;
                                              if (first2 >= 535.01) {
                                                let str185 = "13+";
                                                if (first2 >= 535.02) {
                                                  let num70 = 15;
                                                  if (first2 >= 535.07) {
                                                    let num72 = 16;
                                                    if (first2 >= 535.11) {
                                                      let num74 = 17;
                                                      if (first2 >= 535.19) {
                                                        let num76 = 18;
                                                        if (first2 >= 536.05) {
                                                          let num78 = 19;
                                                          if (first2 >= 536.1) {
                                                            let num80 = 20;
                                                            if (first2 >= 537.01) {
                                                              let str186 = "21+";
                                                              if (first2 >= 537.11) {
                                                                let num83 = 23;
                                                                if (first2 >= 537.13) {
                                                                  let num85 = 24;
                                                                  if (first2 >= 537.18) {
                                                                    let num87 = 25;
                                                                    if (first2 >= 537.24) {
                                                                      let num88 = 26;
                                                                      if (first2 >= 537.36) {
                                                                        let str188 = "28";
                                                                        if ("Blink" != items12) {
                                                                          str188 = "27";
                                                                        }
                                                                        num88 = str188;
                                                                      }
                                                                      num87 = num88;
                                                                    }
                                                                    num85 = num87;
                                                                  }
                                                                  num83 = num85;
                                                                }
                                                                str186 = num83;
                                                              }
                                                              num80 = str186;
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
                                                  str185 = num70;
                                                }
                                                num67 = str185;
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
                        tmp231 = num45;
                      }
                      num20 = tmp231;
                    }
                    if (items12) {
                      items12[1] = "like Safari";
                    }
                    const first3 = items11[0];
                    num20 = 1;
                    if (first3 >= 400) {
                      let num22 = 2;
                      if (first3 >= 500) {
                        let num24 = 3;
                        if (first3 >= 526) {
                          let num26 = 4;
                          if (first3 >= 533) {
                            let str183 = "4+";
                            if (first3 >= 534) {
                              let num29 = 5;
                              if (first3 >= 535) {
                                let num31 = 6;
                                if (first3 >= 537) {
                                  let num33 = 7;
                                  if (first3 >= 538) {
                                    let num35 = 8;
                                    if (first3 >= 601) {
                                      let num37 = 9;
                                      if (first3 >= 602) {
                                        let num39 = 10;
                                        if (first3 >= 604) {
                                          let num41 = 11;
                                          if (first3 >= 606) {
                                            let num43 = "12";
                                            if (first3 < 608) {
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
                              str183 = num29;
                            }
                            num26 = str183;
                          }
                          num24 = num26;
                        }
                        num22 = num24;
                      }
                      num20 = num22;
                    }
                    const obj71 = /\b(?:Headless)?Chrome\/([\d.]+)/i;
                    const tmp228 = /\b(?:Headless)?Chrome\/([\d.]+)/i.exec(tmp9) || 0;
                  }
                  let tmp224 = version != items11[1];
                  if (tmp224) {
                    const tmp227 = /\bSafari\/([\d.]+\+?)/i.exec(tmp9) || (0)[1];
                    items11[2] = tmp227;
                    tmp224 = version != tmp227;
                    const obj70 = /\bSafari\/([\d.]+\+?)/i;
                    const tmp226 = /\bSafari\/([\d.]+\+?)/i.exec(tmp9) || 0;
                  }
                  str180 = tmp163;
                  if (!tmp224) {
                    version = null;
                    str180 = tmp163;
                  }
                }
                if ("Opera" == text1) {
                  const match5 = /\bzbov|zvav$/.exec(str159);
                  tmp220 = match5;
                  if (match5) {
                    let text7 = `${tmp30} `;
                    items6.unshift("desktop mode");
                    if ("zvav" == match5) {
                      text7 = `${tmp30} Mini`;
                    } else {
                      text7 = `${tmp30} MiniMobile`;
                    }
                    let _RegExp5 = RegExp;
                    const replaced1 = str159.replace(RegExp(` *${tmp243}$`), "");
                  }
                  const obj73 = /\bzbov|zvav$/;
                }
                if ("Safari" == text1) {
                  let tmp245 = arr15;
                  if (arr15) {
                    tmp245 = arr15[1];
                  }
                  if (obj74.exec(tmp245)) {
                    items6.unshift("desktop mode");
                    text1 = "Chrome Mobile";
                    version = null;
                    let str193 = null;
                    let str194 = tmp198;
                    let tmp249 = tmp220;
                    if (obj76.test(str159)) {
                      str193 = "iOS 4.3+";
                      str194 = "Apple";
                      tmp249 = tmp220;
                    }
                    obj76 = /\bOS X\b/;
                  }
                  let tmp261 = version;
                  if (version) {
                    const match6 = /[\d.]+$/.exec(str193);
                    tmp261 = 0 == version.indexOf(match6);
                    tmp249 = match6;
                    const obj77 = /[\d.]+$/;
                  }
                  if (tmp261) {
                    tmp261 = tmp9.indexOf(`/${tmp249}-`) > -1;
                  }
                  let arr19 = str193;
                  if (tmp261) {
                    arr19 = trim(str193.replace(tmp249, ""));
                  }
                  let tmp265 = arr19;
                  if (arr19) {
                    tmp265 = -1 != arr19.indexOf(text1);
                  }
                  if (tmp265) {
                    let _RegExp6 = RegExp;
                    tmp265 = !RegExp(`${tmp30} OS`).test(arr19);
                    let RegExpResult = RegExp(`${tmp30} OS`);
                  }
                  let str208 = arr19;
                  if (tmp265) {
                    let _RegExp7 = RegExp;
                    str208 = arr19.replace(RegExp(` *${qualify(tmp30)} *`), "");
                  }
                  let tmp272 = arr15;
                  if (arr15) {
                    tmp272 = !/\b(?:Avant|Nook)\b/.test(text1);
                    const obj79 = /\b(?:Avant|Nook)\b/;
                  }
                  if (tmp272) {
                    let isMatch6 = /Browser|Lunascape|Maxthon/.test(text1);
                    if (!isMatch6) {
                      let isMatch7 = "Safari" != text1;
                      if (isMatch7) {
                        isMatch7 = /^iOS/.test(str208);
                        const obj81 = /^iOS/;
                      }
                      if (isMatch7) {
                        isMatch7 = /\bSafari\b/.test(arr15[1]);
                        const obj82 = /\bSafari\b/;
                      }
                      isMatch6 = isMatch7;
                    }
                    if (!isMatch6) {
                      isMatch6 =
                        /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(
                          text1,
                        ) && arr15[1];
                      const obj83 =
                        /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/;
                      const tmp279 =
                        /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(
                          text1,
                        ) && arr15[1];
                    }
                    tmp272 = isMatch6;
                    const obj80 = /Browser|Lunascape|Maxthon/;
                  }
                  if (tmp272) {
                    tmp249 = arr15[arr15.length - 1];
                  }
                  if (tmp272) {
                    const arr8 = items6.push(tmp249);
                  }
                  let arr20 = items6;
                  if (items6.length) {
                    const items13 = [`(${arr8.join("; ")})`];
                    arr20 = items13;
                  }
                  let tmp281 = str194;
                  if (str194) {
                    tmp281 = arr12;
                  }
                  if (tmp281) {
                    tmp281 = arr12.indexOf(str194) < 0;
                  }
                  if (tmp281) {
                    arr20.push(`on ${str194}`);
                  }
                  if (arr12) {
                    let str215 = "on ";
                    if (obj84.test(arr20[arr20.length - 1])) {
                      str215 = "";
                    }
                    arr20.push(str215 + arr12);
                    obj84 = /^on /;
                  }
                  let text8 = str208;
                  if (str208) {
                    const match7 = / ([\d.+]+)$/.exec(str208);
                    let tmp286 = match7;
                    if (match7) {
                      tmp286 = "/" == str208.charAt(str208.length - match7[0].length - 1);
                    }
                    closure_1 = tmp286;
                    let replaced2 = str208;
                    if (match7) {
                      replaced2 = str208;
                      if (!tmp286) {
                        replaced2 = str208.replace(match7[0], "");
                      }
                    }
                    obj = { architecture: 32, family: replaced2, version: null, toString: null };
                    let tmp288 = null;
                    if (match7) {
                      tmp288 = match7[1];
                    }
                    obj.version = tmp288;
                    obj.toString = function toString() {
                      const version = this.version;
                      let str = "";
                      let str2 = "";
                      if (version) {
                        str2 = str;
                        if (!closure_1) {
                          str2 = ` ${version}`;
                        }
                      }
                      const sum = this.family + str2;
                      if (64 == this.architecture) {
                        str = " 64-bit";
                      }
                      return sum + str;
                    };
                    text8 = obj;
                    const obj85 = / ([\d.+]+)$/;
                  }
                  const match8 = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(tmp115);
                  if (match8) {
                    if (!obj88.test(tmp115)) {
                      if (text8) {
                        text8.architecture = 64;
                        const _RegExp8 = RegExp;
                        text8.family = text8.family.replace(RegExp(` *${tmp289}`), "");
                      }
                      let tmp291 = text1;
                      if (text1) {
                        let isMatch8 = /\bWOW64\b/i.test(tmp9);
                        if (!isMatch8) {
                          if (isMatch9) {
                            let platform2 = tmp11.cpuClass;
                            if (!platform2) {
                              platform2 = tmp11.platform;
                            }
                            isMatch9 = /\w(?:86|32)$/.test(platform2);
                            const obj90 = /\w(?:86|32)$/;
                          }
                          if (isMatch9) {
                            isMatch9 = !/\bWin64; x64\b/i.test(tmp9);
                            const obj91 = /\bWin64; x64\b/i;
                          }
                          isMatch8 = isMatch9;
                        }
                        tmp291 = isMatch8;
                        const obj89 = /\bWOW64\b/i;
                      }
                      if (tmp291) {
                        arr20.unshift("32-bit");
                      }
                    }
                    if (!tmp9) {
                      c0 = null;
                      tmp9 = null;
                    }
                    obj1 = { description: tmp9 };
                    let first4 = arr15;
                    if (arr15) {
                      first4 = arr15[0];
                    }
                    obj1.layout = first4;
                    obj1.manufacturer = str194;
                    let tmp299 = text1;
                    obj1.name = text1;
                    obj1.prerelease = tmp219;
                    obj1.product = arr12;
                    obj1.ua = tmp9;
                    if (text1) {
                      tmp299 = version;
                    }
                    obj1.version = tmp299;
                    let tmp300 = text8;
                    if (!text8) {
                      obj2 = {
                        architecture: null,
                        family: null,
                        version: null,
                        toString() {
                          return "null";
                        },
                      };
                      tmp300 = obj2;
                    }
                    obj1.os = tmp300;
                    obj1.parse = parse;
                    obj1.toString = function toStringPlatform() {
                      return this.description || "";
                    };
                    if (obj1.version) {
                      arr12 = arr20.unshift(version);
                    }
                    if (obj1.name) {
                      arr20.unshift(text1);
                    }
                    let tmp305 = text8;
                    if (text8) {
                      tmp305 = text1;
                    }
                    if (tmp305) {
                      let _String2 = String;
                      let tmp307 = text8 != String(text8).split(" ")[0];
                      if (!tmp307) {
                        tmp307 = text8 != text1.split(" ")[0] && !arr12;
                        const tmp309 = text8 != text1.split(" ")[0] && !arr12;
                      }
                      tmp305 = tmp307;
                      const str222 = String(text8);
                    }
                    if (!tmp305) {
                      if (arr20.length) {
                        obj1.description = arr20.join(" ");
                      }
                      return obj1;
                    } else {
                      if (arr12) {
                        text8 = `(${tmp284}`;
                        let text9 = `(${tmp284})`;
                      } else {
                        text9 = `on ${`(${tmp284}`}`;
                      }
                      arr20.push(text9);
                    }
                    obj88 = /\bi686\b/i;
                  }
                  let isMatch10 = text8;
                  if (text8) {
                    isMatch10 = /^OS X/.test(text8.family);
                    const obj92 = /^OS X/;
                  }
                  if (isMatch10) {
                    isMatch10 = "Chrome" == text1;
                  }
                  if (isMatch10) {
                    const _parseFloat4 = parseFloat;
                    isMatch10 = parseFloat(version) >= 39;
                  }
                  if (isMatch10) {
                    text8.architecture = 64;
                  }
                  obj74 = /\bChrome\b/;
                  const obj87 = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i;
                }
                let isMatch11 = /\bSRWare Iron\b/.test(text1);
                if (isMatch11) {
                  isMatch11 = !version;
                }
                str193 = str159;
                str194 = tmp198;
                tmp249 = tmp220;
                if (isMatch11) {
                  version = getVersion("Chrome");
                  str193 = str159;
                  str194 = tmp198;
                  tmp249 = tmp220;
                }
                const obj69 = /\bAppleWebKit\/([\d.]+\+?)/i;
                const obj75 = /\bSRWare Iron\b/;
                const tmp218 = /\bAppleWebKit\/([\d.]+\+?)/i.exec(tmp9) || 0;
              }
              if ("Maxthon" == text1) {
                if (version) {
                  version = version.replace(/\.[\d.]+/, ".x");
                  str159 = tmp113;
                  tmp198 = manufacturer;
                  arr12 = str93;
                  items12 = tmp114;
                }
              }
              if (obj53.test(str93)) {
                let tmp214 = tmp113;
                if ("Xbox 360" == str93) {
                  tmp214 = null;
                }
                let isMatch12 = "Xbox 360" == str93;
                if (isMatch12) {
                  isMatch12 = /\bIEMobile\b/.test(tmp9);
                  const obj68 = /\bIEMobile\b/;
                }
                str159 = tmp214;
                tmp198 = manufacturer;
                arr12 = str93;
                items12 = tmp114;
                if (isMatch12) {
                  arr15 = items6.unshift("mobile mode");
                  str159 = tmp214;
                  tmp198 = manufacturer;
                  arr12 = str93;
                  items12 = tmp114;
                }
              } else {
                if (obj54.test(text1)) {
                  text1 = `${tmp30} Mobile`;
                  str159 = tmp113;
                  tmp198 = manufacturer;
                  arr12 = str93;
                  items12 = tmp114;
                }
                if ("IE" == text1) {
                  if (isMatch9) {
                    try {
                      if (null === obj.external) {
                        items6.unshift("platform preview");
                      }
                      str159 = tmp113;
                      tmp198 = manufacturer;
                      arr12 = str93;
                      items12 = tmp114;
                    } catch (err) {
                      arr17 = arr.unshift("embedded");
                      str159 = tmp4;
                      tmp198 = tmp3;
                      arr12 = tmp2;
                      items12 = tmp;
                    }
                  }
                }
                if (obj56.test(str93)) {
                  let _RegExp4 = RegExp;
                  let RegExpResult1 = RegExp(`${str93.replace(/ +/g, " *")}/([.\\d]+)`, "i");
                  const tmp178 = RegExp(`${str93.replace(/ +/g, " *")}/([.\\d]+)`, "i").exec(tmp9) || (0)[1] || version;
                  tmp116 = tmp178;
                  if (tmp178) {
                    const items14 = [tmp178, /BB10/.test(tmp9)];
                    let str168 = "Device Software";
                    let str169 = manufacturer;
                    let tmp210 = str93;
                    if (items14[1]) {
                      replaced3 = null;
                      str169 = "BlackBerry";
                      tmp210 = null;
                      str168 = "BlackBerry";
                    }
                    str159 = `${str168} ${arr15[0]}`;
                    version = null;
                    tmp198 = str169;
                    arr12 = tmp210;
                    items12 = tmp114;
                    const obj67 = /BB10/;
                  }
                  const tmp177 = RegExp(`${str93.replace(/ +/g, " *")}/([.\\d]+)`, "i").exec(tmp9) || 0;
                }
                const self = this;
                let name = this != forOwn && "Wii" != str93;
                if (name) {
                  let tmp180 = isMatch9;
                  if (isMatch9) {
                    tmp180 = tmp24;
                  }
                  if (!tmp180) {
                    let isMatch13 = /Opera/.test(text1);
                    if (isMatch13) {
                      isMatch13 = /\b(?:MSIE|Firefox)\b/i.test(tmp9);
                      const obj60 = /\b(?:MSIE|Firefox)\b/i;
                    }
                    tmp180 = isMatch13;
                    const obj59 = /Opera/;
                  }
                  if (!tmp180) {
                    let isMatch14 = "Firefox" == text1;
                    if (isMatch14) {
                      isMatch14 = /\bOS X (?:\d+\.){2,}/.test(tmp113);
                      const obj61 = /\bOS X (?:\d+\.){2,}/;
                    }
                    tmp180 = isMatch14;
                  }
                  if (!tmp180) {
                    let tmp186 = "IE" == text1;
                    if (tmp186) {
                      let tmp187 = tmp113;
                      if (tmp113) {
                        tmp187 = !/^Win/.test(tmp113);
                        const obj62 = /^Win/;
                      }
                      if (tmp187) {
                        tmp187 = version > 5.5;
                      }
                      if (!tmp187) {
                        let isMatch15 = /\bWindows XP\b/.test(tmp113);
                        if (isMatch15) {
                          isMatch15 = version > 8;
                        }
                        tmp187 = isMatch15;
                        const obj63 = /\bWindows XP\b/;
                      }
                      if (!tmp187) {
                        let tmp192 = 8 == version;
                        if (tmp192) {
                          tmp192 = !/\bTrident\b/.test(tmp9);
                          const obj64 = /\bTrident\b/;
                        }
                        tmp187 = tmp192;
                      }
                      tmp186 = tmp187;
                    }
                    tmp180 = tmp186;
                  }
                  name = tmp180;
                }
                if (!name) {
                  if (name) {
                    name = tmp116.name;
                  }
                  str159 = tmp113;
                  tmp198 = manufacturer;
                  arr12 = str93;
                  items12 = tmp114;
                  if (name) {
                    const version2 = tmp116.version;
                    let str161 = "";
                    const text10 = `ing as ${tmp116.name}`;
                    if (version2) {
                      str161 = ` ${version2}`;
                    }
                    const sum3 = text10 + str161;
                    if (obj5.test(text1)) {
                      let isMatch16 = /\bIE\b/.test(sum3);
                      if (isMatch16) {
                        isMatch16 = "Mac OS" == tmp113;
                      }
                      let tmp208 = tmp113;
                      if (isMatch16) {
                        tmp208 = null;
                      }
                      let text11 = `identify${tmp200}`;
                      let tmp205 = tmp208;
                      const obj66 = /\bIE\b/;
                    } else {
                      let str163 = "Opera";
                      if (tmp25) {
                        str163 = format(tmp25.replace(/([a-z])([A-Z])/g, "$1 $2"));
                      }
                      const text12 = `mask${tmp200}`;
                      text1 = str163;
                      let tmp204 = tmp113;
                      if (obj65.test(`mask${tmp200}`)) {
                        tmp204 = null;
                      }
                      tmp205 = tmp204;
                      text11 = text12;
                      if (!isMatch9) {
                        version = null;
                        tmp205 = tmp204;
                        text11 = text12;
                      }
                      obj65 = /\bIE\b/;
                    }
                    items12 = ["Presto"];
                    arr18 = items6.push(text11);
                    str159 = tmp205;
                    tmp198 = manufacturer;
                    arr12 = str93;
                  }
                } else {
                  let test = obj5.test;
                  const call = parse.call;
                  const text13 = `${tmp9.replace(obj5, "")};`;
                  const tmp195 =
                    typeof call === "unknown"
                      ? parse(`${tmp9.replace(obj5, "")};`)
                      : call(forOwn, `${tmp9.replace(obj5, "")};`);
                  test = test(tmp195);
                }
                obj54 = /^(?:Chrome|IE|Opera)$/;
                obj56 = /\bBlackBerry\b/;
              }
              obj53 = /\bXbox\b/i;
            }
            text1 = "Firefox Mobile";
            str159 = tmp113;
            tmp198 = manufacturer;
            arr12 = str93;
            items12 = tmp114;
            const obj40 = /; *(?:XBLWP|ZuneWP)(\d+)/i;
            const tmp95 = /; *(?:XBLWP|ZuneWP)(\d+)/i.exec(tmp9) || 0;
          }
          if (obj41.test(tmp9)) {
            text1 = "IE Mobile";
            arr19 = items6.unshift("desktop mode");
            str121 = "Windows Phone 8.x";
            tmp100 = str115;
            if (!version) {
              version = /\brv:([\d.]+)/.exec(tmp9) || (0)[1];
              str121 = "Windows Phone 8.x";
              tmp100 = str115;
              const obj43 = /\brv:([\d.]+)/;
              const tmp109 = /\brv:([\d.]+)/.exec(tmp9) || 0;
            }
          } else {
            let match9 = "IE" != text1 && "Trident" == tmp93;
            let tmp99 = str115;
            if (match9) {
              match9 = /\brv:([\d.]+)/.exec(tmp9);
              tmp99 = match9;
              const obj42 = /\brv:([\d.]+)/;
            }
            str121 = str57;
            tmp100 = tmp99;
            if (match9) {
              if (text1) {
                let str123 = "";
                const text14 = `identifying as ${tmp30}`;
                if (version) {
                  str123 = ` ${tmp28}`;
                }
                arr20 = items6.push(text14 + str123);
              }
              text1 = "IE";
              version = tmp99[1];
              str121 = str57;
              tmp100 = tmp99;
            }
          }
          obj12 = /\blike iPhone OS\b/;
          obj41 = /\bWPDesktop\b/i;
        }
        if (obj13.test(tmp47)) {
          if (!text1) {
            text1 = "Safari";
          }
          const match10 = / OS ([\d_]+)/i.exec(tmp9);
          let str108 = "";
          if (match10) {
            str108 = ` ${match10[1].replace(/_/g, ".")}`;
          }
          str57 = `iOS${str108}`;
          manufacturer = tmp32;
          str93 = tmp47;
          const obj33 = / OS ([\d_]+)/i;
        } else if ("Konqueror" != text1) {
          if (tmp32) {
            if ("Google" != tmp32) {
              const obj15 = /Chrome/;
            }
            text1 = "Android Browser";
            let str107 = "Android";
            if (obj32.test(tmp33)) {
              str107 = tmp33;
            }
            str57 = str107;
            manufacturer = tmp32;
            str93 = tmp47;
            obj32 = /\bAndroid\b/;
          }
          if (obj18.test(tmp33)) {
            const obj19 = /^Chrome/;
          }
          if ("Silk" == text1) {
            let str104 = tmp33;
            if (!obj30.test(tmp9)) {
              items6.unshift("desktop mode");
              str104 = "Android";
            }
            str57 = str104;
            manufacturer = tmp32;
            str93 = tmp47;
            if (obj31.test(tmp9)) {
              items6.unshift("accelerated");
              str57 = str104;
              manufacturer = tmp32;
              str93 = tmp47;
            }
            obj30 = /\bMobi/i;
            obj31 = /Accelerated *= *true/i;
          } else {
            if ("UC Browser" == text1) {
              if (obj21.test(tmp9)) {
                items6.push("speed mode");
                str57 = tmp33;
                manufacturer = tmp32;
                str93 = tmp47;
              }
              obj21 = /\bUCWEB\b/;
            }
            let tmp58 = match1;
            if ("PaleMoon" == text1) {
              const match11 = /\bFirefox\/([\d.]+)\b/.exec(tmp9);
              tmp58 = match11;
              if (match11) {
                items6.push(`identifying as Firefox ${tmp59[1]}`);
                str57 = tmp33;
                manufacturer = tmp32;
                str93 = tmp47;
              }
              const obj22 = /\bFirefox\/([\d.]+)\b/;
            }
            if ("Firefox" == text1) {
              const match12 = /\b(Mobile|Tablet|TV)\b/i.exec(tmp9);
              tmp58 = match12;
              if (match12) {
                let str101 = tmp33;
                if (!tmp33) {
                  str101 = "Firefox OS";
                }
                str57 = str101;
                manufacturer = tmp32;
                str93 = tmp47;
                if (!tmp47) {
                  replaced3 = tmp76;
                  str57 = str101;
                  manufacturer = tmp32;
                  str93 = tmp76;
                }
              }
              const obj23 = /\b(Mobile|Tablet|TV)\b/i;
            }
            if (text1) {
              const isMatch17 = /\bMinefield\b/i.test(tmp9);
              let match13 = !isMatch17;
              if (!isMatch17) {
                match13 = /\b(?:Firefox|Safari)\b/.exec(text1);
                const obj25 = /\b(?:Firefox|Safari)\b/;
              }
              tmp58 = match13;
              if (!match13) {
                if ("Electron" == text1) {
                  match13 = /\bChrome\/([\d.]+)\b/.exec(tmp9) || (0)[1];
                  const obj26 = /\bChrome\/([\d.]+)\b/;
                  const tmp68 = /\bChrome\/([\d.]+)\b/.exec(tmp9) || 0;
                }
                str57 = tmp33;
                manufacturer = tmp32;
                str93 = tmp47;
                if ("Electron" == text1) {
                  items6.push(`Chromium ${tmp64}`);
                  str57 = tmp33;
                  manufacturer = tmp32;
                  str93 = tmp47;
                }
              }
              const obj24 = /\bMinefield\b/i;
            }
            let isMatch18 = text1;
            if (text1) {
              isMatch18 = !tmp47;
            }
            if (isMatch18) {
              isMatch18 = /[\/,]|^[^(]+?\)/.test(tmp9.slice(tmp9.indexOf(`${tmp58}/`) + 8));
              const obj27 = /[\/,]|^[^(]+?\)/;
            }
            if (isMatch18) {
              text1 = null;
            }
            let tmp71 = tmp47;
            if (!tmp47) {
              tmp71 = tmp32;
            }
            if (!tmp71) {
              tmp71 = tmp33;
            }
            let tmp72 = tmp71;
            if (tmp71) {
              let isMatch19 = tmp47;
              if (!tmp47) {
                isMatch19 = tmp32;
              }
              if (!isMatch19) {
                isMatch19 = /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(tmp33);
                const obj28 = /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/;
              }
              tmp72 = isMatch19;
            }
            str57 = tmp33;
            manufacturer = tmp32;
            str93 = tmp47;
            if (tmp72) {
              if (obj29.test(tmp33)) {
                tmp71 = tmp33;
              }
              text1 = `${tmp75(tmp71)} Browser`;
              str57 = tmp33;
              manufacturer = tmp32;
              str93 = tmp47;
              obj29 = /\bAndroid\b/;
            }
          }
          obj18 = /\bAndroid\b/;
        } else {
          manufacturer = tmp32;
          str93 = tmp47;
        }
        obj10 = /\bSimulator\b/i;
        obj13 = /^iP/;
        const obj9 = /\bGoogle TV\b/;
      }
      let tmp40 = tmp32;
      if (tmp32) {
        tmp40 = str77;
      }
      product1 = str77;
      if (tmp40) {
        let _RegExp = RegExp;
        let _RegExp2 = RegExp;
        replaced3 = str77
          .replace(RegExp(`^(${qualify(tmp32)})[-_.\\s]`, "i"), `${tmp32} `)
          .replace(RegExp(`^(${qualify(tmp32)})[-_.]?(\\w)`, "i"), `${tmp32} $2`);
        product1 = replaced3;
        const str84 = str77.replace(RegExp(`^(${qualify(tmp32)})[-_.\\s]`, "i"), `${tmp32} `);
      }
      const obj7 = /\bAndroid\b/;
    }
    prop = getClassOf(tmp20);
    const obj4 = /\bJava/;
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
  if (obj[typeof exports] && exports) {
    if (tmp4) {
      let keys = Object.keys();
      if (keys !== undefined) {
        while (keys[53] !== undefined) {
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
