// === Module 4883: ? ===

// Module 4883
let self = this;
const global = arg0;
const module = arg4;
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
    if (typeof height.length === "number") {
      if (length > -1) {
        if (length <= closure_1) {
          let num = 0;
          let tmp11 = null;
          let tmp4 = null;
          if (0 < length) {
            do {
              tmp11 = fn(tmp11, height[num], num, height);
              num = num + 1;
              tmp4 = tmp11;
            } while (num < length);
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
  let tmp = obj[typeof window] && window || this;
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
      let isMatch8 = tmp9 == tmp12;
      let versionResult = isMatch8;
      if (isMatch8) {
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
            const str18 = parts[0].replace(RegExp(pattern, "i"), pattern.label || pattern).replace(RegExp(`; *(?:${pattern.label || pattern}[_-])?`, "i"), " ");
            const replaced = String(parts[0].replace(RegExp(pattern, "i"), pattern.label || pattern).replace(RegExp(`; *(?:${pattern.label || pattern}[_-])?`, "i"), " ").replace(RegExp(`(${pattern.label || pattern})[-_.]?(\\w)`, "i"), "$1 $2")).replace(/^ +| +$/g, "");
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
      let joined = versionResult;
      const items = [{ label: "EdgeHTML", pattern: "Edge" }, "Trident", { label: "WebKit", pattern: "AppleWebKit" }, "iCab", , , , , ];
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
      const items1 = ["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", { label: "Microsoft Edge", pattern: "Edge" }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", { label: "Samsung Internet", pattern: "SamsungBrowser" }, "SeaMonkey", { label: "Silk", pattern: "(?:Cloud9|Silk-Accelerated)" }, "Sleipnir", "SlimBrowser", { label: "SRWare Iron", pattern: "Iron" }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", { label: "Opera Mini", pattern: "OPiOS" }, "Opera", { label: "Opera", pattern: "OPR" }, "Chrome", { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" }, { label: "Firefox", pattern: "(?:Firefox|Minefield)" }, { label: "Firefox for iOS", pattern: "FxiOS" }, { label: "IE", pattern: "IEMobile" }, { label: "IE", pattern: "MSIE" }, "Safari"];
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
      const items2 = [{ label: "BlackBerry", pattern: "BB10" }, "BlackBerry", { label: "Galaxy S", pattern: "GT-I9000" }, { label: "Galaxy S2", pattern: "GT-I9100" }, { label: "Galaxy S3", pattern: "GT-I9300" }, { label: "Galaxy S4", pattern: "GT-I9500" }, { label: "Galaxy S5", pattern: "SM-G900" }, { label: "Galaxy S6", pattern: "SM-G920" }, { label: "Galaxy S6 Edge", pattern: "SM-G925" }, { label: "Galaxy S7", pattern: "SM-G930" }, { label: "Galaxy S7 Edge", pattern: "SM-G935" }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", { label: "Kindle Fire", pattern: "(?:Cloud9|Silk-Accelerated)" }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", { label: "Wii U", pattern: "WiiU" }, "Wii", "Xbox One", { label: "Xbox 360", pattern: "Xbox" }, "Xoom"];
      product = getProduct(items2);
      closure_2 = product;
      obj = { Apple: { iPad: 1, iPhone: 1, iPod: 1 }, Archos: {}, Amazon: { Kindle: 1, "Kindle Fire": 1 }, Asus: { Transformer: 1 }, "Barnes & Noble": { Nook: 1 }, BlackBerry: { PlayBook: 1 }, Google: { "Google TV": 1, Nexus: 1 }, HP: { TouchPad: 1 }, HTC: {}, LG: {}, Microsoft: { Xbox: 1, "Xbox One": 1 }, Motorola: { Xoom: 1 }, Nintendo: { "Wii U": 1, Wii: 1 }, Nokia: { Lumia: 1 }, Samsung: { "Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1 }, Sony: { PlayStation: 1, "PlayStation Vita": 1 } };
      const tmp32 = (function getManufacturer(global) {
        return reduce(global, (arg0, arg1, arg2) => {
          let tmp = arg0;
          if (!arg0) {
            let match = arg1[closure_1_2];
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
      const items3 = ["Windows Phone", "Android", "CentOS", { label: "Chrome OS", pattern: "CrOS" }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku"];
      let str55 = "Kubuntu";
      items3[9] = "Kubuntu";
      items3[10] = "Linux Mint";
      items3[11] = "OpenBSD";
      items3[12] = "Red Hat";
      items3[13] = "SuSE";
      items3[14] = "Ubuntu";
      items3[15] = "Xubuntu";
      items3[16] = "Cygwin";
      items3[17] = "Symbian OS";
      items3[18] = "hpwOS";
      items3[19] = "webOS ";
      items3[20] = "webOS";
      items3[21] = "Tablet OS";
      items3[22] = "Tizen";
      items3[23] = "Linux";
      items3[24] = "Mac OS X";
      items3[25] = "Macintosh";
      items3[26] = "Mac";
      items3[27] = "Windows 98;";
      items3[28] = "Windows ";
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
            const replaced = String(str8.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0]).replace(/^ +| +$/g, "");
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
      let tmp34 = tmp29;
      if (tmp29) {
        const items4 = [tmp29];
        tmp34 = items4;
      }
      let tmp35 = tmp32;
      if (tmp32) {
        tmp35 = !product;
      }
      if (tmp35) {
        const items5 = [tmp32];
        const product1 = getProduct(items5);
        closure_2 = product1;
        product = product1;
      }
      let match = /\bGoogle TV\b/.exec(product);
      let tmp38 = product;
      if (match) {
        const first = match[0];
        closure_2 = first;
        tmp38 = first;
      }
      let tmp40 = tmp38;
      if (obj8.test(tmp9)) {
        let str75 = "";
        if (tmp38) {
          str75 = `${tmp38} `;
        }
        let text = `${str75}Simulator`;
        closure_2 = text;
        tmp40 = text;
      }
      let isMatch1 = "Opera Mini" == text1;
      if (isMatch1) {
        isMatch1 = /\bOPiOS\b/.test(tmp9);
        const obj9 = /\bOPiOS\b/;
      }
      const items6 = [];
      if (isMatch1) {
        let arr = items6.push("running in Turbo/Uncompressed mode");
      }
      if ("IE" == text1) {
        if (obj10.test(tmp9)) {
          ({ manufacturer, product } = parse(tmp9.replace(/like iPhone OS/, "")));
          closure_2 = product;
          str55 = tmp33;
          let str81 = product;
          const tmp74 = parse(tmp9.replace(/like iPhone OS/, ""));
        }
        if (!joined) {
          const items7 = ["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", qualify(text1), "(?:Firefox|Minefield|NetFront)"];
          joined = (function getVersion(items7) {
            return reduce(items7, (arg0, arg1) => {
              let tmp = arg0;
              if (!arg0) {
                const _RegExp = RegExp;
                const RegExpResult = RegExp(`${arg1}(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)`, "i");
                tmp = RegExp(`${arg1}(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)`, "i").exec(closure_1_0) || 0[1];
                const tmp5 = RegExp(`${arg1}(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)`, "i").exec(closure_1_0) || 0;
              }
              if (!tmp) {
                tmp = null;
              }
              return tmp;
            });
          })(items7);
        }
        if ("iCab" != tmp34) {
          let isMatch2 = /\bOpera\b/.test(text1);
          if (isMatch2) {
            if (obj32.test(tmp9)) {
              str10 = "Blink";
            }
            isMatch2 = str10;
            obj32 = /\bOPR\b/;
          }
          let str102 = isMatch2;
          const obj31 = /\bOpera\b/;
        } else {
          const _parseFloat = parseFloat;
          str102 = "WebKit";
        }
        if (!str102) {
          let str103 = /\b(?:Midori|Nook|Safari)\b/i.test(tmp9);
          if (str103) {
            str103 = !/^(?:Trident|EdgeHTML)$/.test(tmp34);
            const obj34 = /^(?:Trident|EdgeHTML)$/;
          }
          if (str103) {
            str103 = "WebKit";
          }
          str102 = str103;
          const obj33 = /\b(?:Midori|Nook|Safari)\b/i;
        }
        if (!str102) {
          let isMatch3 = !tmp34;
          if (!tmp34) {
            isMatch3 = /\bMSIE\b/i.test(tmp9);
            const obj35 = /\bMSIE\b/i;
          }
          if (isMatch3) {
            let str105 = "Trident";
            if ("Mac OS" == str55) {
              str105 = "Tasman";
            }
            isMatch3 = str105;
          }
          str102 = isMatch3;
        }
        if (!str102) {
          let str107 = "WebKit" == tmp34;
          if (str107) {
            str107 = /\bPlayStation\b(?! Vita\b)/i.test(text1);
            const obj36 = /\bPlayStation\b(?! Vita\b)/i;
          }
          if (str107) {
            str107 = "NetFront";
          }
          str102 = str107;
        }
        let tmp84 = tmp34;
        if (str102) {
          const items8 = [str102];
          tmp84 = items8;
        }
        if ("IE" == text1) {
          const tmp87 = /; *(?:XBLWP|ZuneWP)(\d+)/i.exec(tmp9) || 0[1];
          str102 = tmp87;
          if (tmp87) {
            text1 = `${tmp30} Mobile`;
            let text2 = tmp87;
            if (!obj41.test(tmp87)) {
              text2 = `${tmp87}.x`;
            }
            let str108 = `Windows Phone ${tmp102}`;
            arr = items6.unshift("desktop mode");
            let tmp91 = tmp87;
            obj41 = /\+$/;
          }
          let tmp104 = str108;
          let tmp105 = tmp84;
          let tmp106 = tmp9;
          let tmp107 = tmp91;
          if (isMatch8) {
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
              let tmp128 = str108;
              let tmp129 = tmp9;
              if (tmp16) {
                const System = tmp16.lang.System;
                let text4 = str108;
                const property = System.getProperty("os.arch");
                if (!str108) {
                  const text3 = `${System.getProperty("os.name")} `;
                  text4 = `${System.getProperty("os.name")} ${System.getProperty("os.version")}`;
                }
                tmp128 = text4;
                tmp129 = property;
                tmp91 = System;
              }
              if (tmp17) {
                try {
                  let version = obj.require("ringo/engine").version;
                  joined = version.join(".");
                  text1 = "RingoJS";
                  let tmp142 = tmp128;
                  let str119 = tmp142;
                  let items10 = tmp84;
                  let tmp110 = tmp129;
                  let tmp111 = tmp91;
                  if (!`RingoJS`) {
                    text1 = "Rhino";
                    str119 = tmp142;
                    items10 = tmp84;
                    tmp110 = tmp129;
                    tmp111 = tmp91;
                  }
                } catch (err) {
                  const system = tmp5.system;
                  let tmp143 = system;
                  if (system) {
                    tmp143 = system.global.system == tmp5.system;
                  }
                  tmp142 = tmp6;
                  tmp91 = system;
                  if (tmp143) {
                    text1 = "Narwhal";
                    let tmp144 = tmp6;
                    if (!tmp6) {
                      let os = system[0].os;
                      if (!os) {
                        os = null;
                      }
                      tmp144 = os;
                    }
                    tmp142 = tmp144;
                    tmp91 = system;
                  }
                }
              } else {
                const _process = obj.process;
                let tmp133 = typeof _process === "object";
                if (typeof _process === "object") {
                  tmp133 = !obj.process.browser;
                }
                let _process2 = tmp91;
                if (tmp133) {
                  _process2 = obj.process;
                }
                str119 = tmp128;
                items10 = tmp84;
                tmp110 = tmp129;
                tmp111 = _process2;
                if (tmp133) {
                  if (typeof _process2.versions === "object") {
                    if (typeof _process2.versions.electron === "string") {
                      items6.push(`Node ${_process2.versions.node}`);
                      text1 = "Electron";
                      joined = _process2.versions.electron;
                    } else if (typeof _process2.versions.nw === "string") {
                      items6.push(`Chromium ${tmp28}`, `Node ${_process2.versions.node}`);
                      text1 = "NW.js";
                      joined = _process2.versions.nw;
                    }
                  }
                  let tmp136 = tmp128;
                  let tmp137 = tmp129;
                  if (!text1) {
                    text1 = "Node.js";
                    ({ arch, platform } = _process2);
                    const match1 = /[\d.]+/.exec(_process2.version);
                    let first1 = null;
                    if (match1) {
                      first1 = tmp139[0];
                    }
                    joined = first1;
                    tmp136 = platform;
                    tmp137 = arch;
                    const obj43 = /[\d.]+/;
                  }
                  str119 = tmp136;
                  tmp110 = tmp137;
                  items10 = tmp84;
                  tmp111 = _process2;
                }
              }
            } else {
              const runtime = obj.runtime;
              if (getClassOf(runtime) == str2) {
                text1 = "Adobe AIR";
                str119 = runtime.flash.system.Capabilities.os;
                items10 = tmp84;
                tmp110 = tmp9;
                tmp111 = runtime;
              } else {
                const phantom = obj.phantom;
                if (getClassOf(phantom) == str5) {
                  text1 = "PhantomJS";
                  let text5 = tmp126;
                  if (phantom.version || null) {
                    text5 = `${tmp126.major}.${tmp126.minor}.${tmp126.patch}`;
                  }
                  joined = text5;
                  str119 = str108;
                  items10 = tmp84;
                  tmp110 = tmp9;
                  tmp111 = tmp126;
                } else {
                  let tmp295 = phantom;
                  if (typeof tmp19.documentMode === "number") {
                    const match2 = /\bTrident\/(\d+)/i.exec(tmp9);
                    tmp295 = match2;
                    if (match2) {
                      const items9 = [joined, tmp19.documentMode];
                      let sum = +match2[1] + 4;
                      if (sum != items9[1]) {
                        items6.push(`IE ${tmp116[1]} mode`);
                        if (tmp84) {
                          tmp84[1] = "";
                        }
                        tmp116[1] = sum;
                      }
                      if ("IE" == text1) {
                        let _String = String;
                        let StringResult = String(tmp116[1].toFixed(1));
                      } else {
                        StringResult = tmp116[0];
                      }
                      joined = StringResult;
                      str119 = str108;
                      items10 = tmp84;
                      tmp110 = tmp9;
                      tmp111 = sum;
                    }
                    const obj89 = /\bTrident\/(\d+)/i;
                  }
                  const documentMode = tmp19.documentMode;
                  let isMatch4 = typeof documentMode === "number";
                  if (typeof documentMode === "number") {
                    isMatch4 = /^(?:Chrome|Firefox)\b/.test(text1);
                    const obj90 = /^(?:Chrome|Firefox)\b/;
                  }
                  str119 = str108;
                  items10 = tmp84;
                  tmp110 = tmp9;
                  tmp111 = tmp295;
                  if (isMatch4) {
                    items6.push(`masking as ${tmp30} ${tmp28}`);
                    text1 = "IE";
                    joined = "11.0";
                    items10 = ["Trident"];
                    str119 = "Windows";
                    tmp110 = tmp9;
                    tmp111 = tmp295;
                  }
                }
              }
            }
            let tmp147 = str119;
            if (str119) {
              tmp147 = format(str119);
            }
            tmp104 = tmp147;
            tmp105 = items10;
            tmp106 = tmp110;
            tmp107 = tmp111;
          }
          let tmp149 = joined;
          if (joined) {
            let match3 = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(joined);
            if (!match3) {
              let appMinorVersion = isMatch8;
              const text6 = `${tmp9};`;
              if (isMatch8) {
                appMinorVersion = tmp11.appMinorVersion;
              }
              match3 = /(?:alpha|beta)(?: ?\d)?/i.exec(text6 + appMinorVersion);
              const obj45 = /(?:alpha|beta)(?: ?\d)?/i;
            }
            if (!match3) {
              match3 = /\bMinefield\b/i.test(tmp9) && "a";
              const obj46 = /\bMinefield\b/i;
              const tmp153 = /\bMinefield\b/i.test(tmp9) && "a";
            }
            tmp149 = match3;
            tmp107 = match3;
            const obj44 = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i;
          }
          let tmp154 = null;
          if (tmp149) {
            let str134 = "alpha";
            if (obj47.test(tmp107)) {
              str134 = "beta";
            }
            let _RegExp = RegExp;
            let replaced = joined.replace(RegExp(`${tmp107}\\+?$`), "");
            if ("beta" === str134) {
              str6 = str7;
            }
            const sum1 = replaced + str6;
            joined = sum1 + (/\d+\+?/.exec(tmp107) || "");
            tmp154 = str134;
            obj47 = /b/i;
            const obj48 = /\d+\+?/;
            const tmp159 = /\d+\+?/.exec(tmp107) || "";
          }
          if ("Fennec" != text1) {
            if ("Firefox" == text1) {
              const str164 = /\bAppleWebKit\/([\d.]+\+?)/i.exec(tmp9) || 0[1];
              let arr15 = items12;
              let tmp210 = tmp154;
              let tmp211 = str164;
              if (str164) {
                const _parseFloat2 = parseFloat;
                const items11 = [parseFloat(str164.replace(/\.(\d)$/, ".0$1")), str164];
                if ("Safari" == text1) {
                  let arr17 = items11[1];
                  if ("+" == arr17.slice(-1)) {
                    text1 = "WebKit Nightly";
                    let arr18 = items11[1];
                    joined = arr18.slice(0, -1);
                    let str167 = "alpha";
                  }
                  items11[1] = /\bChrome\/([\d.]+)/i.exec(tmp9) || 0[1];
                  let tmp220 = 537.36 == items11[0] && 537.36 == items11[2];
                  if (tmp220) {
                    const _parseFloat3 = parseFloat;
                    tmp220 = parseFloat(items11[1]) >= 28;
                  }
                  if (tmp220) {
                    tmp220 = "WebKit" == items12;
                  }
                  if (tmp220) {
                    items12 = ["Blink"];
                  }
                  if (isMatch8) {
                    if (!isMatch) {
                      let tmp224 = num20;
                      if (items12) {
                        let str176 = ".x";
                        if (typeof num20 !== "number") {
                          let str177 = "+";
                          if (obj92.test(num20)) {
                            str177 = "";
                          }
                          str176 = str177;
                          obj92 = /[.+]/;
                        }
                        const sum2 = num20 + str176;
                        items12[1] = `${tmp225} ${tmp226}`;
                        tmp224 = sum2;
                      }
                      let tmp228 = "Safari" == text1;
                      if (tmp228) {
                        let tmp230 = !joined;
                        if (joined) {
                          const _parseInt = parseInt;
                          tmp230 = parseInt(joined) > 45;
                        }
                        tmp228 = tmp230;
                      }
                      arr15 = items12;
                      tmp210 = str167;
                      tmp211 = tmp224;
                      if (tmp228) {
                        joined = tmp224;
                        arr15 = items12;
                        tmp210 = str167;
                        tmp211 = tmp224;
                      }
                    }
                    if (items12) {
                      items12[1] = "like Chrome";
                    }
                    let tmp222 = items11[1];
                    if (!tmp222) {
                      const first2 = items11[0];
                      let num37 = 1;
                      if (first2 >= 530) {
                        let num39 = 2;
                        if (first2 >= 532) {
                          let num41 = 3;
                          if (first2 >= 532.05) {
                            let num43 = 4;
                            if (first2 >= 533) {
                              let num45 = 5;
                              if (first2 >= 534.03) {
                                let num47 = 6;
                                if (first2 >= 534.07) {
                                  let num49 = 7;
                                  if (first2 >= 534.1) {
                                    let num51 = 8;
                                    if (first2 >= 534.13) {
                                      let num53 = 9;
                                      if (first2 >= 534.16) {
                                        let num55 = 10;
                                        if (first2 >= 534.24) {
                                          let num57 = 11;
                                          if (first2 >= 534.3) {
                                            let num59 = 12;
                                            if (first2 >= 535.01) {
                                              let str172 = "13+";
                                              if (first2 >= 535.02) {
                                                let num62 = 15;
                                                if (first2 >= 535.07) {
                                                  let num64 = 16;
                                                  if (first2 >= 535.11) {
                                                    let num66 = 17;
                                                    if (first2 >= 535.19) {
                                                      let num68 = 18;
                                                      if (first2 >= 536.05) {
                                                        let num70 = 19;
                                                        if (first2 >= 536.1) {
                                                          let num72 = 20;
                                                          if (first2 >= 537.01) {
                                                            let str173 = "21+";
                                                            if (first2 >= 537.11) {
                                                              let num75 = 23;
                                                              if (first2 >= 537.13) {
                                                                let num77 = 24;
                                                                if (first2 >= 537.18) {
                                                                  let num79 = 25;
                                                                  if (first2 >= 537.24) {
                                                                    let num80 = 26;
                                                                    if (first2 >= 537.36) {
                                                                      let str175 = "28";
                                                                      if ("Blink" != items12) {
                                                                        str175 = "27";
                                                                      }
                                                                      num80 = str175;
                                                                    }
                                                                    num79 = num80;
                                                                  }
                                                                  num77 = num79;
                                                                }
                                                                num75 = num77;
                                                              }
                                                              str173 = num75;
                                                            }
                                                            num72 = str173;
                                                          }
                                                          num70 = num72;
                                                        }
                                                        num68 = num70;
                                                      }
                                                      num66 = num68;
                                                    }
                                                    num64 = num66;
                                                  }
                                                  num62 = num64;
                                                }
                                                str172 = num62;
                                              }
                                              num59 = str172;
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
                              num43 = num45;
                            }
                            num41 = num43;
                          }
                          num39 = num41;
                        }
                        num37 = num39;
                      }
                      tmp222 = num37;
                    }
                    num20 = tmp222;
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
                          let str170 = "4+";
                          if (first3 >= 534) {
                            let num29 = 5;
                            if (first3 >= 535) {
                              let num31 = 6;
                              if (first3 >= 537) {
                                let num33 = 7;
                                if (first3 >= 538) {
                                  let num35 = "8";
                                  if (first3 < 601) {
                                    num35 = 8;
                                  }
                                  num33 = num35;
                                }
                                num31 = num33;
                              }
                              num29 = num31;
                            }
                            str170 = num29;
                          }
                          num26 = str170;
                        }
                        num24 = num26;
                      }
                      num22 = num24;
                    }
                    num20 = num22;
                  }
                  const obj68 = /\bChrome\/([\d.]+)/i;
                  const tmp219 = /\bChrome\/([\d.]+)/i.exec(tmp9) || 0;
                }
                let tmp215 = joined != items11[1];
                if (tmp215) {
                  const tmp218 = /\bSafari\/([\d.]+\+?)/i.exec(tmp9) || 0[1];
                  items11[2] = tmp218;
                  tmp215 = joined != tmp218;
                  const obj67 = /\bSafari\/([\d.]+\+?)/i;
                  const tmp217 = /\bSafari\/([\d.]+\+?)/i.exec(tmp9) || 0;
                }
                str167 = tmp154;
                if (!tmp215) {
                  joined = null;
                  str167 = tmp154;
                }
              }
              if ("Opera" == text1) {
                const match4 = /\bzbov|zvav$/.exec(str146);
                tmp211 = match4;
                if (match4) {
                  let text7 = `${tmp30} `;
                  items6.unshift("desktop mode");
                  if ("zvav" == match4) {
                    text7 = `${tmp30} Mini`;
                  } else {
                    text7 = `${tmp30} MiniMobile`;
                  }
                  let _RegExp3 = RegExp;
                  const replaced1 = str146.replace(RegExp(` *${tmp233}$`), "");
                }
                const obj69 = /\bzbov|zvav$/;
              }
              let match5 = "Safari" == text1;
              if (match5) {
                let tmp236 = arr15;
                if (arr15) {
                  tmp236 = arr15[1];
                }
                match5 = /\bChrome\b/.exec(tmp236);
                const obj70 = /\bChrome\b/;
              }
              let str179 = str146;
              let tmp237 = tmp189;
              let tmp238 = tmp211;
              if (match5) {
                items6.unshift("desktop mode");
                text1 = "Chrome Mobile";
                joined = null;
                let str181 = null;
                let str182 = tmp189;
                if (obj71.test(str146)) {
                  str181 = "iOS 4.3+";
                  str182 = "Apple";
                }
                str179 = str181;
                tmp237 = str182;
                tmp238 = tmp211;
                obj71 = /\bOS X\b/;
              }
              let tmp250 = joined;
              if (joined) {
                const match6 = /[\d.]+$/.exec(str179);
                tmp250 = 0 == joined.indexOf(match6);
                tmp238 = match6;
                const obj72 = /[\d.]+$/;
              }
              if (tmp250) {
                tmp250 = tmp9.indexOf(`/${tmp238}-`) > -1;
              }
              let str193 = str179;
              if (tmp250) {
                str193 = trim(str179.replace(tmp238, ""));
              }
              let tmp254 = arr15;
              if (arr15) {
                tmp254 = !/\b(?:Avant|Nook)\b/.test(text1);
                const obj73 = /\b(?:Avant|Nook)\b/;
              }
              if (tmp254) {
                let isMatch5 = /Browser|Lunascape|Maxthon/.test(text1);
                if (!isMatch5) {
                  let isMatch6 = "Safari" != text1;
                  if (isMatch6) {
                    isMatch6 = /^iOS/.test(str193);
                    const obj75 = /^iOS/;
                  }
                  if (isMatch6) {
                    isMatch6 = /\bSafari\b/.test(arr15[1]);
                    const obj76 = /\bSafari\b/;
                  }
                  isMatch5 = isMatch6;
                }
                if (!isMatch5) {
                  isMatch5 = /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(text1) && arr15[1];
                  const obj77 = /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/;
                  const tmp261 = /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(text1) && arr15[1];
                }
                tmp254 = isMatch5;
                const obj74 = /Browser|Lunascape|Maxthon/;
              }
              if (tmp254) {
                tmp238 = arr15[arr15.length - 1];
              }
              if (tmp254) {
                items6.push(tmp238);
              }
              let arr19 = items6;
              if (items6.length) {
                const items13 = [`(${arr8.join("; ")})`];
                arr19 = items13;
              }
              let tmp263 = tmp237;
              if (tmp237) {
                tmp263 = arr12;
              }
              if (tmp263) {
                tmp263 = arr12.indexOf(tmp237) < 0;
              }
              if (tmp263) {
                arr8 = arr19.push(`on ${tmp237}`);
              }
              if (arr12) {
                let str199 = "on ";
                if (obj78.test(arr19[arr19.length - 1])) {
                  str199 = "";
                }
                arr19.push(str199 + arr12);
                obj78 = /^on /;
              }
              let text8 = str193;
              if (str193) {
                const match7 = / ([\d.+]+)$/.exec(str193);
                let tmp268 = match7;
                if (match7) {
                  tmp268 = "/" == str193.charAt(str193.length - match7[0].length - 1);
                }
                closure_1 = tmp268;
                let replaced2 = str193;
                if (match7) {
                  replaced2 = str193;
                  if (!tmp268) {
                    replaced2 = str193.replace(match7[0], "");
                  }
                }
                obj = { architecture: 32, family: replaced2, version: null, toString: null };
                let tmp270 = null;
                if (match7) {
                  tmp270 = match7[1];
                }
                obj.version = tmp270;
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
                const obj79 = / ([\d.+]+)$/;
              }
              const match8 = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(tmp106);
              if (match8) {
                if (!obj82.test(tmp106)) {
                  if (text8) {
                    text8.architecture = 64;
                    let _RegExp4 = RegExp;
                    text8.family = text8.family.replace(RegExp(` *${tmp271}`), "");
                  }
                  let tmp273 = text1;
                  if (text1) {
                    let isMatch7 = /\bWOW64\b/i.test(tmp9);
                    if (!isMatch7) {
                      if (isMatch8) {
                        let platform2 = tmp11.cpuClass;
                        if (!platform2) {
                          platform2 = tmp11.platform;
                        }
                        isMatch8 = /\w(?:86|32)$/.test(platform2);
                        const obj84 = /\w(?:86|32)$/;
                      }
                      if (isMatch8) {
                        isMatch8 = !/\bWin64; x64\b/i.test(tmp9);
                        const obj85 = /\bWin64; x64\b/i;
                      }
                      isMatch7 = isMatch8;
                    }
                    tmp273 = isMatch7;
                    const obj83 = /\bWOW64\b/i;
                  }
                  if (tmp273) {
                    arr19.unshift("32-bit");
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
                obj1.manufacturer = tmp237;
                let tmp281 = text1;
                obj1.name = text1;
                obj1.prerelease = tmp210;
                obj1.product = arr12;
                obj1.ua = tmp9;
                if (text1) {
                  tmp281 = joined;
                }
                obj1.version = tmp281;
                let tmp282 = text8;
                if (!text8) {
                  obj2 = {
                    architecture: null,
                    family: null,
                    version: null,
                    toString() {
                                    return "null";
                                  }
                  };
                  tmp282 = obj2;
                }
                obj1.os = tmp282;
                obj1.parse = parse;
                obj1.toString = function toStringPlatform() {
                  return this.description || "";
                };
                if (obj1.version) {
                  arr19.unshift(joined);
                }
                if (obj1.name) {
                  arr12 = arr19.unshift(text1);
                }
                let tmp287 = text8;
                if (text8) {
                  tmp287 = text1;
                }
                if (tmp287) {
                  let _String2 = String;
                  let tmp289 = text8 != String(text8).split(" ")[0];
                  if (!tmp289) {
                    tmp289 = text8 != text1.split(" ")[0] && !arr12;
                    const tmp291 = text8 != text1.split(" ")[0] && !arr12;
                  }
                  tmp287 = tmp289;
                  const str206 = String(text8);
                }
                if (!tmp287) {
                  if (arr19.length) {
                    obj1.description = arr19.join(" ");
                  }
                  return obj1;
                } else {
                  if (arr12) {
                    text8 = `(${tmp266}`;
                    let text9 = `(${tmp266})`;
                  } else {
                    text9 = `on ${`(${tmp266}`}`;
                  }
                  arr19.push(text9);
                }
                obj82 = /\bi686\b/i;
              }
              let isMatch9 = text8;
              if (text8) {
                isMatch9 = /^OS X/.test(text8.family);
                const obj86 = /^OS X/;
              }
              if (isMatch9) {
                isMatch9 = "Chrome" == text1;
              }
              if (isMatch9) {
                const _parseFloat4 = parseFloat;
                isMatch9 = parseFloat(joined) >= 39;
              }
              if (isMatch9) {
                text8.architecture = 64;
              }
              const obj66 = /\bAppleWebKit\/([\d.]+\+?)/i;
              const obj81 = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i;
              const tmp209 = /\bAppleWebKit\/([\d.]+\+?)/i.exec(tmp9) || 0;
            }
            if ("Maxthon" == text1) {
              if (joined) {
                joined = joined.replace(/\.[\d.]+/, ".x");
                str146 = tmp104;
                tmp189 = manufacturer;
                arr12 = str81;
                items12 = tmp105;
              }
            }
            if (obj50.test(str81)) {
              let tmp205 = tmp104;
              if ("Xbox 360" == str81) {
                tmp205 = null;
              }
              let isMatch10 = "Xbox 360" == str81;
              if (isMatch10) {
                isMatch10 = /\bIEMobile\b/.test(tmp9);
                const obj65 = /\bIEMobile\b/;
              }
              str146 = tmp205;
              tmp189 = manufacturer;
              arr12 = str81;
              items12 = tmp105;
              if (isMatch10) {
                items6.unshift("mobile mode");
                str146 = tmp205;
                tmp189 = manufacturer;
                arr12 = str81;
                items12 = tmp105;
              }
            } else {
              if (obj51.test(text1)) {
                text1 = `${tmp30} Mobile`;
                str146 = tmp104;
                tmp189 = manufacturer;
                arr12 = str81;
                items12 = tmp105;
              }
              if ("IE" == text1) {
                if (isMatch8) {
                  try {
                    if (null === obj.external) {
                      arr15 = items6.unshift("platform preview");
                    }
                    str146 = tmp104;
                    tmp189 = manufacturer;
                    arr12 = str81;
                    items12 = tmp105;
                  } catch (err) {
                    arr.unshift("embedded");
                    str146 = tmp4;
                    tmp189 = tmp3;
                    arr12 = tmp2;
                    items12 = tmp;
                  }
                }
              }
              if (obj53.test(str81)) {
                let _RegExp2 = RegExp;
                let RegExpResult = RegExp(`${str81.replace(/ +/g, " *")}/([.\\d]+)`, "i");
                const tmp169 = RegExp(`${str81.replace(/ +/g, " *")}/([.\\d]+)`, "i").exec(tmp9) || 0[1] || joined;
                tmp107 = tmp169;
                if (tmp169) {
                  const items14 = [tmp169, /BB10/.test(tmp9)];
                  let str155 = "Device Software";
                  let str156 = manufacturer;
                  let tmp201 = str81;
                  if (items14[1]) {
                    closure_2 = null;
                    str156 = "BlackBerry";
                    tmp201 = null;
                    str155 = "BlackBerry";
                  }
                  str146 = `${str155} ${arr15[0]}`;
                  joined = null;
                  tmp189 = str156;
                  arr12 = tmp201;
                  items12 = tmp105;
                  const obj64 = /BB10/;
                }
                const tmp168 = RegExp(`${str81.replace(/ +/g, " *")}/([.\\d]+)`, "i").exec(tmp9) || 0;
              }
              const self = this;
              let name = this != forOwn && "Wii" != str81;
              if (name) {
                let tmp171 = isMatch8;
                if (isMatch8) {
                  tmp171 = tmp24;
                }
                if (!tmp171) {
                  let isMatch11 = /Opera/.test(text1);
                  if (isMatch11) {
                    isMatch11 = /\b(?:MSIE|Firefox)\b/i.test(tmp9);
                    const obj57 = /\b(?:MSIE|Firefox)\b/i;
                  }
                  tmp171 = isMatch11;
                  const obj56 = /Opera/;
                }
                if (!tmp171) {
                  let isMatch12 = "Firefox" == text1;
                  if (isMatch12) {
                    isMatch12 = /\bOS X (?:\d+\.){2,}/.test(tmp104);
                    const obj58 = /\bOS X (?:\d+\.){2,}/;
                  }
                  tmp171 = isMatch12;
                }
                if (!tmp171) {
                  let tmp177 = "IE" == text1;
                  if (tmp177) {
                    let tmp178 = tmp104;
                    if (tmp104) {
                      tmp178 = !/^Win/.test(tmp104);
                      const obj59 = /^Win/;
                    }
                    if (tmp178) {
                      tmp178 = joined > 5.5;
                    }
                    if (!tmp178) {
                      let isMatch13 = /\bWindows XP\b/.test(tmp104);
                      if (isMatch13) {
                        isMatch13 = joined > 8;
                      }
                      tmp178 = isMatch13;
                      const obj60 = /\bWindows XP\b/;
                    }
                    if (!tmp178) {
                      let tmp183 = 8 == joined;
                      if (tmp183) {
                        tmp183 = !/\bTrident\b/.test(tmp9);
                        const obj61 = /\bTrident\b/;
                      }
                      tmp178 = tmp183;
                    }
                    tmp177 = tmp178;
                  }
                  tmp171 = tmp177;
                }
                name = tmp171;
              }
              if (!name) {
                if (name) {
                  name = tmp107.name;
                }
                str146 = tmp104;
                tmp189 = manufacturer;
                arr12 = str81;
                items12 = tmp105;
                if (name) {
                  const version2 = tmp107.version;
                  let str148 = "";
                  const text10 = `ing as ${tmp107.name}`;
                  if (version2) {
                    str148 = ` ${version2}`;
                  }
                  const sum3 = text10 + str148;
                  if (obj5.test(text1)) {
                    let isMatch14 = /\bIE\b/.test(sum3);
                    if (isMatch14) {
                      isMatch14 = "Mac OS" == tmp104;
                    }
                    let tmp199 = tmp104;
                    if (isMatch14) {
                      tmp199 = null;
                    }
                    let text11 = `identify${tmp191}`;
                    let tmp196 = tmp199;
                    const obj63 = /\bIE\b/;
                  } else {
                    let str150 = "Opera";
                    if (tmp25) {
                      str150 = format(tmp25.replace(/([a-z])([A-Z])/g, "$1 $2"));
                    }
                    const text12 = `mask${tmp191}`;
                    text1 = str150;
                    let tmp195 = tmp104;
                    if (obj62.test(`mask${tmp191}`)) {
                      tmp195 = null;
                    }
                    tmp196 = tmp195;
                    text11 = text12;
                    if (!isMatch8) {
                      joined = null;
                      tmp196 = tmp195;
                      text11 = text12;
                    }
                    obj62 = /\bIE\b/;
                  }
                  items12 = ["Presto"];
                  arr17 = items6.push(text11);
                  str146 = tmp196;
                  tmp189 = manufacturer;
                  arr12 = str81;
                }
              } else {
                let test = obj5.test;
                const call = parse.call;
                const text13 = `${tmp9.replace(obj5, "")};`;
                const tmp186 = typeof call === "unknown" ? parse(`${tmp9.replace(obj5, "")};`) : call(forOwn, `${tmp9.replace(obj5, "")};`);
                test = test(tmp186);
              }
              obj51 = /^(?:Chrome|IE|Opera)$/;
              obj53 = /\bBlackBerry\b/;
            }
            obj50 = /\bXbox\b/i;
          }
          text1 = "Firefox Mobile";
          str146 = tmp104;
          tmp189 = manufacturer;
          arr12 = str81;
          items12 = tmp105;
          const obj37 = /; *(?:XBLWP|ZuneWP)(\d+)/i;
          const tmp86 = /; *(?:XBLWP|ZuneWP)(\d+)/i.exec(tmp9) || 0;
        }
        if (obj38.test(tmp9)) {
          text1 = "IE Mobile";
          arr18 = items6.unshift("desktop mode");
          str108 = "Windows Phone 8.x";
          tmp91 = str102;
          if (!joined) {
            joined = /\brv:([\d.]+)/.exec(tmp9) || 0[1];
            str108 = "Windows Phone 8.x";
            tmp91 = str102;
            const obj40 = /\brv:([\d.]+)/;
            const tmp100 = /\brv:([\d.]+)/.exec(tmp9) || 0;
          }
        } else {
          let match9 = "IE" != text1 && "Trident" == tmp84;
          let tmp90 = str102;
          if (match9) {
            match9 = /\brv:([\d.]+)/.exec(tmp9);
            tmp90 = match9;
            const obj39 = /\brv:([\d.]+)/;
          }
          str108 = str55;
          tmp91 = tmp90;
          if (match9) {
            if (text1) {
              let str110 = "";
              const text14 = `identifying as ${tmp30}`;
              if (joined) {
                str110 = ` ${tmp28}`;
              }
              arr19 = items6.push(text14 + str110);
            }
            text1 = "IE";
            joined = tmp90[1];
            str108 = str55;
            tmp91 = tmp90;
          }
        }
        obj10 = /\blike iPhone OS\b/;
        obj38 = /\bWPDesktop\b/i;
      }
      if (obj11.test(tmp40)) {
        if (!text1) {
          text1 = "Safari";
        }
        const match10 = / OS ([\d_]+)/i.exec(tmp9);
        let str95 = "";
        if (match10) {
          str95 = ` ${match10[1].replace(/_/g, ".")}`;
        }
        str55 = `iOS${str95}`;
        manufacturer = tmp32;
        str81 = tmp40;
        const obj30 = / OS ([\d_]+)/i;
      } else if ("Konqueror" != text1) {
        if (tmp32) {
          if ("Google" != tmp32) {
            const obj13 = /Chrome/;
          }
          text1 = "Android Browser";
          let str94 = "Android";
          if (obj29.test(tmp33)) {
            str94 = tmp33;
          }
          str55 = str94;
          manufacturer = tmp32;
          str81 = tmp40;
          obj29 = /\bAndroid\b/;
        }
        if (obj16.test(tmp33)) {
          const obj17 = /^Chrome/;
        }
        if ("Silk" == text1) {
          let str91 = tmp33;
          if (!obj27.test(tmp9)) {
            items6.unshift("desktop mode");
            str91 = "Android";
          }
          str55 = str91;
          manufacturer = tmp32;
          str81 = tmp40;
          if (obj28.test(tmp9)) {
            items6.unshift("accelerated");
            str55 = str91;
            manufacturer = tmp32;
            str81 = tmp40;
          }
          obj27 = /\bMobi/i;
          obj28 = /Accelerated *= *true/i;
        } else {
          let tmp51 = match;
          if ("PaleMoon" == text1) {
            const match11 = /\bFirefox\/([\d.]+)\b/.exec(tmp9);
            tmp51 = match11;
            if (match11) {
              items6.push(`identifying as Firefox ${tmp50[1]}`);
              str55 = tmp33;
              manufacturer = tmp32;
              str81 = tmp40;
            }
            const obj19 = /\bFirefox\/([\d.]+)\b/;
          }
          if ("Firefox" == text1) {
            const match12 = /\b(Mobile|Tablet|TV)\b/i.exec(tmp9);
            tmp51 = match12;
            if (match12) {
              let str89 = tmp33;
              if (!tmp33) {
                str89 = "Firefox OS";
              }
              str55 = str89;
              manufacturer = tmp32;
              str81 = tmp40;
              if (!tmp40) {
                closure_2 = tmp68;
                str55 = str89;
                manufacturer = tmp32;
                str81 = tmp68;
              }
            }
            const obj20 = /\b(Mobile|Tablet|TV)\b/i;
          }
          if (text1) {
            const isMatch15 = /\bMinefield\b/i.test(tmp9);
            let match13 = !isMatch15;
            if (!isMatch15) {
              match13 = /\b(?:Firefox|Safari)\b/.exec(text1);
              const obj22 = /\b(?:Firefox|Safari)\b/;
            }
            tmp51 = match13;
            if (!match13) {
              if ("Electron" == text1) {
                match13 = /\bChrome\/([\d.]+)\b/.exec(tmp9) || 0[1];
                const obj23 = /\bChrome\/([\d.]+)\b/;
                const tmp60 = /\bChrome\/([\d.]+)\b/.exec(tmp9) || 0;
              }
              str55 = tmp33;
              manufacturer = tmp32;
              str81 = tmp40;
              if ("Electron" == text1) {
                items6.push(`Chromium ${tmp56}`);
                str55 = tmp33;
                manufacturer = tmp32;
                str81 = tmp40;
              }
            }
            const obj21 = /\bMinefield\b/i;
          }
          let isMatch16 = text1;
          if (text1) {
            isMatch16 = !tmp40;
          }
          if (isMatch16) {
            isMatch16 = /[\/,]|^[^(]+?\)/.test(tmp9.slice(tmp9.indexOf(`${tmp51}/`) + 8));
            const obj24 = /[\/,]|^[^(]+?\)/;
          }
          if (isMatch16) {
            text1 = null;
          }
          let tmp63 = tmp40;
          if (!tmp40) {
            tmp63 = tmp32;
          }
          if (!tmp63) {
            tmp63 = tmp33;
          }
          let tmp64 = tmp63;
          if (tmp63) {
            let isMatch17 = tmp40;
            if (!tmp40) {
              isMatch17 = tmp32;
            }
            if (!isMatch17) {
              isMatch17 = /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(tmp33);
              const obj25 = /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/;
            }
            tmp64 = isMatch17;
          }
          str55 = tmp33;
          manufacturer = tmp32;
          str81 = tmp40;
          if (tmp64) {
            if (obj26.test(tmp33)) {
              tmp63 = tmp33;
            }
            text1 = `${tmp67(tmp63)} Browser`;
            str55 = tmp33;
            manufacturer = tmp32;
            str81 = tmp40;
            obj26 = /\bAndroid\b/;
          }
        }
        obj16 = /\bAndroid\b/;
      } else {
        manufacturer = tmp32;
        str81 = tmp40;
      }
      obj11 = /^iP/;
      const obj7 = /\bGoogle TV\b/;
      obj8 = /\bSimulator\b/i;
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