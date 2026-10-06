// === Module 5410: ? ===

// Module 5410
let closure_2, hasOwnProperty;

const fn = function() {
  function format(arg0) {
    const str = String(arg0);
    const replaced = str.replace(/^ +| +$/g, "");
    let sum = replaced;
    const obj = /^(?:webOS|i(?:OS|P))/;
    if (!obj.test(replaced)) {
      const _String = String;
      const str2 = String(replaced);
      const str3 = str2.charAt(0);
      const formatted = str3.toUpperCase();
      sum = formatted + str2.slice(1);
    }
    return sum;
  }
  function forOwn(obj, fn) {
    for (const key10005 in obj) {
      if (!hasOwnProperty.call(obj, key10005)) {
        continue;
      } else {
        let tmp = fn(obj[key10005], key10005, obj);
        continue;
      }
      continue;
    }
  }
  function getClassOf(arg0) {
    let sum;
    if (null == arg0) {
      const _String = String;
      const str = String(arg0);
      const str2 = str.charAt(0);
      const formatted = str2.toUpperCase();
      sum = formatted + str.slice(1);
    } else {
      const callResult = toString.call(arg0);
      sum = callResult.slice(8, -1);
    }
    return sum;
  }
  function qualify(arg0) {
    const str = String(arg0);
    return str.replace(/([ -])(?!$)/g, "$1?");
  }
  function reduce(arg0, fn) {
    let tmp4;
    if (typeof arg0.length === "number") {
      if (arg0.length > -1) {
        if (arg0.length <= closure_1) {
          let num = 0;
          let tmp11 = null;
          tmp4 = null;
          if (0 < arg0.length) {
            do {
              tmp11 = fn(tmp11, arg0[num], num, arg0);
              num = num + 1;
              tmp4 = tmp11;
            } while (num < arg0.length);
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
        let tmp15 = tmp7;
        if (!hasOwnProperty.call(arg0, tmp7)) {
          continue;
        } else {
          tmp3 = fn(tmp6, arg0[tmp7], tmp15, arg0);
          continue;
        }
        continue;
      }
    }
  }
  function trim(arg0) {
    const str = String(arg0);
    return str.replace(/^ +| +$/g, "");
  }
  let obj = { function: true, object: true };
  let tmp = obj[typeof window] && window || this;
  let closure_0 = tmp;
  let tmp2 = obj[typeof exports] && exports;
  let tmp4 = obj[typeof module] && module && !module.nodeType && module;
  let tmp5 = tmp2 && tmp4 && typeof global === "object" && global;
  let tmp7 = !tmp5;
  if (tmp5) {
    let tmp8 = tmp5.global !== tmp5 && tmp5.window !== tmp5 && tmp5.self !== tmp5;
    tmp7 = tmp8;
  }
  if (!tmp7) {
    closure_0 = tmp5;
    tmp = tmp5;
  }
  let closure_1 = Math.pow(2, 53) - 1;
  const re2 = /\bOpera/;
  let str = Object.prototype;
  hasOwnProperty = str.hasOwnProperty;
  const toString = str.toString;
  function parse(global) {
    let arch;
    let arr12;
    let isMatch;
    let items12;
    let manufacturer;
    let num20;
    let platform;
    let product;
    let str145;
    let str4;
    let tmp181;
    let tmp259;
    let tmp270;
    let tmp271;
    function getLayout(items) {
      return reduce(items, (arg0, pattern) => {
        let tmp = arg0;
        if (!tmp) {
          pattern = pattern.pattern;
          const _RegExp = RegExp;
          if (!pattern) {
            const _String = String;
            const str = String(pattern);
            pattern = str.replace(/([ -])(?!$)/g, "$1?");
          }
          const _RegExpResult = _RegExp(`\\b${pattern}\\b`, "i");
          let match = _RegExpResult.exec(closure_1_0);
          if (match) {
            match = pattern.label || pattern;
          }
          tmp = match;
        }
        return tmp;
      });
    }
    function getName(items1) {
      return reduce(items1, (arg0, pattern) => {
        let tmp = arg0;
        if (!tmp) {
          pattern = pattern.pattern;
          const _RegExp = RegExp;
          if (!pattern) {
            const _String = String;
            const str = String(pattern);
            pattern = str.replace(/([ -])(?!$)/g, "$1?");
          }
          const _RegExpResult = _RegExp(`\\b${pattern}\\b`, "i");
          let match = _RegExpResult.exec(closure_1_0);
          if (match) {
            match = pattern.label || pattern;
          }
          tmp = match;
        }
        return tmp;
      });
    }
    function getManufacturer(arg0) {
      return reduce(arg0, (arg0, arg1, arg2) => {
        let tmp = arg0;
        if (!tmp) {
          let match = arg1[closure_1_2];
          if (!match) {
            const obj = /^[a-z]+(?: +[a-z]+\b)*/i;
            match = arg1[obj.exec(obj, tmp3)];
          }
          if (!match) {
            const _RegExp = RegExp;
            const _String = String;
            const str = String(arg2);
            const RegExpResult = RegExp(`\\b${str.replace(/([ -])(?!$)/g, "$1?")}(?:\\b|\\w*\\d)`, "i");
            match = RegExpResult.exec(closure_1_0);
          }
          if (match) {
            match = arg2;
          }
          tmp = match;
        }
        return tmp;
      });
    }
    function getOS(items3) {
      return reduce(items3, (arg0, pattern) => {
        pattern = pattern.pattern;
        if (!pattern) {
          const _String = String;
          const str = String(pattern);
          pattern = str.replace(/([ -])(?!$)/g, "$1?");
        }
        let text = arg0;
        let match = !arg0;
        if (match) {
          const _RegExp = RegExp;
          const RegExpResult = RegExp(`\\b${pattern}(?:/[\\d.]+|[ \\w.]*)`, "i");
          match = RegExpResult.exec(closure_1_0);
          text = match;
        }
        let tmp6 = text;
        if (match) {
          let isMatch = pattern && tmp7;
          if (isMatch) {
            const obj2 = /^Win/i;
            isMatch = obj2.test(text);
          }
          if (isMatch) {
            const obj3 = /^Windows Phone /i;
            isMatch = !obj3.test(text);
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
          let str8 = str7;
          const tmp11 = pattern && (pattern.label || pattern);
          if (tmp11) {
            const _RegExp2 = RegExp;
            str8 = str7.replace(RegExp(pattern, "i"), tmp7);
          }
          const str11 = str8.replace(/ ce$/i, " CE");
          const str13 = str11.replace(/\bhpw/i, "web");
          const str15 = str13.replace(/\bMacintosh\b/, "Mac OS");
          const str17 = str15.replace(/_PowerPC\b/i, " OS");
          const str19 = str17.replace(/\b(OS X) [^ \d]+/i, "$1");
          const str20 = str19.replace(/\bMac (OS X)\b/, "$1");
          const str22 = str20.replace(/\/(\d)/, " $1");
          const str24 = str22.replace(/_/g, ".");
          const str26 = str24.replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "");
          const str28 = str26.replace(/\bx86\.64\b/gi, "x86_64");
          const _String3 = String;
          const str29 = str28.replace(/\b(Windows Phone) OS\b/, "$1");
          const str30 = str29.replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1");
          const str32 = String(str30.split(" on ")[0]);
          const replaced = str32.replace(/^ +| +$/g, "");
          let sum = replaced;
          const obj6 = /^(?:webOS|i(?:OS|P))/;
          if (!obj6.test(replaced)) {
            const _String4 = String;
            const str33 = String(replaced);
            const str34 = str33.charAt(0);
            const formatted = str34.toUpperCase();
            sum = formatted + str33.slice(1);
          }
          tmp6 = sum;
        }
        return tmp6;
      });
    }
    function getVersion(items7) {
      return reduce(items7, (arg0, arg1) => {
        let tmp = arg0;
        if (!tmp) {
          const _RegExp = RegExp;
          const RegExpResult = RegExp(`${arg1}(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)`, "i");
          tmp = (RegExpResult.exec(closure_1_0) || 0)[1];
          RegExpResult.exec(closure_1_0) || 0;
        }
        if (!tmp) {
          tmp = null;
        }
        return tmp;
      });
    }
    function isHostType(global, global2) {
      let str = "number";
      if (null != global) {
        str = typeof global.global;
      }
      const obj = /^(?:boolean|number|string|undefined)$/;
      let isMatch = obj.test(str);
      if (!isMatch) {
        isMatch = "object" === str && !global.global;
      }
      return !isMatch;
    }
    function toString() {
      return "null";
    }
    let c0 = global;
    let obj = c0;
    let tmp = global && typeof global === "object";
    if (tmp) {
      let str = "String";
      tmp = "String" != getClassOf(global);
    }
    let tmp3 = global;
    if (tmp) {
      c0 = null;
      obj = global;
      tmp3 = null;
    }
    const tmp5 = obj.navigator || {};
    let tmp6 = tmp5.userAgent || "";
    if (!tmp3) {
      c0 = tmp6;
      tmp3 = tmp6;
    }
    if (tmp) {
      isMatch = tmp5.likeChrome;
    } else {
      let obj2 = /\bChrome\b/;
      isMatch = obj2.test(tmp3);
      if (isMatch) {
        let obj3 = /internal|\n/i;
        isMatch = !obj3.test(toString.toString());
      }
    }
    let str2 = "ScriptBridgingProxyObject";
    if (tmp) {
      str2 = "Object";
    }
    let str3 = "Environment";
    if (tmp) {
      str3 = "Object";
    }
    if (!tmp) {
      str4 = getClassOf(obj.java);
    } else {
      str4 = "JavaPackage";
    }
    let str5 = "RuntimeObject";
    if (tmp) {
      str5 = "Object";
    }
    const obj4 = /\bJava/;
    let tmp10 = obj4.test(str4) && obj.java;
    let tmp11 = tmp10;
    if (tmp11) {
      tmp11 = getClassOf(obj.environment) == str3;
    }
    let str6 = "\u03B1";
    if (tmp10) {
      str6 = "a";
    }
    let str7 = "\u03B2";
    if (tmp10) {
      str7 = "b";
    }
    const tmp13 = obj.document || {};
    let obj5 = closure_2;
    if (tmp) {
      let prop;
      let str81;
      if (obj.operamini || obj.opera) {
        prop = tmp14["[[Class]]"];
      }
      let tmp18 = null;
      let tmp19 = null;
      if (tmp15(prop)) {
        tmp18 = tmp14;
        tmp19 = prop;
      }
      let test2Result = tmp3 == tmp6;
      function getProduct(items2) {
        return reduce(items2, (arg0, pattern) => {
          pattern = pattern.pattern;
          if (!pattern) {
            const _String = String;
            const str = String(pattern);
            pattern = str.replace(/([ -])(?!$)/g, "$1?");
          }
          let tmp2 = arg0;
          let tmp3 = !arg0;
          if (tmp3) {
            const _RegExp = RegExp;
            const RegExpResult = RegExp(`\\b${pattern} *\\d+[.\\w_]*`, "i");
            let match = RegExpResult.exec(closure_1_0);
            if (!match) {
              const _RegExp2 = RegExp;
              const RegExpResult1 = RegExp(`\\b${pattern} *\\w+-[\\w]*`, "i");
              match = RegExpResult1.exec(closure_1_0);
            }
            if (!match) {
              const _RegExp3 = RegExp;
              const RegExpResult2 = RegExp(`\\b${pattern}(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)`, "i");
              match = RegExpResult2.exec(closure_1_0);
            }
            tmp3 = match;
            tmp2 = match;
          }
          let tmp7 = tmp2;
          if (tmp3) {
            let label = tmp2;
            const _String2 = String;
            if (pattern.label) {
              const _RegExp4 = RegExp;
              label = tmp2;
              const RegExpResult3 = RegExp(pattern, "i");
              if (!RegExpResult3.test(pattern.label)) {
                label = pattern.label;
              }
            }
            const str9 = _String2(label);
            const parts = str9.split("/");
            let tmp10 = parts[1];
            if (tmp10) {
              const obj5 = /[\d.]+/;
              tmp10 = !obj5.test(parts[0]);
            }
            if (tmp10) {
              parts[0] = `${tmp9[0]} ${tmp9[1]}`;
            }
            const _RegExp5 = RegExp;
            const _RegExp6 = RegExp;
            const str12 = parts[0];
            const _RegExp7 = RegExp;
            const _String3 = String;
            const str14 = str12.replace(RegExp(pattern, "i"), pattern.label || pattern);
            const str18 = str14.replace(RegExp(`; *(?:${pattern.label || pattern}[_-])?`, "i"), " ");
            const str22 = String(str18.replace(RegExp(`(${pattern.label || pattern})[-_.]?(\\w)`, "i"), "$1 $2"));
            const replaced = str22.replace(/^ +| +$/g, "");
            let sum = replaced;
            const obj6 = /^(?:webOS|i(?:OS|P))/;
            if (!obj6.test(replaced)) {
              const _String4 = String;
              const str24 = String(replaced);
              const str25 = str24.charAt(0);
              const formatted = str25.toUpperCase();
              sum = formatted + str24.slice(1);
            }
            tmp7 = sum;
          }
          return tmp7;
        });
      }
      let joined = test2Result && tmp18 && typeof tmp18.version === "function" && tmp18.version();
      const items = [{ label: "EdgeHTML", pattern: "Edge" }, , , , , , , , ];
      let str8 = "Trident";
      items[1] = "Trident";
      items[2] = { label: "WebKit", pattern: "AppleWebKit" };
      let str9 = "iCab";
      items[3] = "iCab";
      let str10 = "Presto";
      items[4] = "Presto";
      let str11 = "NetFront";
      items[5] = "NetFront";
      let str12 = "Tasman";
      items[6] = "Tasman";
      let str13 = "KHTML";
      items[7] = "KHTML";
      let str14 = "Gecko";
      items[8] = "Gecko";
      test2Result && tmp18 && typeof tmp18.version === "function" && tmp18.version();
      const tmp23 = getLayout(items);
      const items1 = ["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", { label: "Microsoft Edge", pattern: "Edge" }];
      let str15 = "Midori";
      items1[18] = "Midori";
      items1[19] = "Nook Browser";
      let str17 = "PaleMoon";
      items1[20] = "PaleMoon";
      let str18 = "PhantomJS";
      items1[21] = "PhantomJS";
      let str19 = "Raven";
      items1[22] = "Raven";
      let str20 = "Rekonq";
      items1[23] = "Rekonq";
      items1[24] = "RockMelt";
      items1[25] = { label: "Samsung Internet", pattern: "SamsungBrowser" };
      let str22 = "SeaMonkey";
      items1[26] = "SeaMonkey";
      items1[27] = { label: "Silk", pattern: "(?:Cloud9|Silk-Accelerated)" };
      items1[28] = "Sleipnir";
      let str24 = "SlimBrowser";
      items1[29] = "SlimBrowser";
      items1[30] = { label: "SRWare Iron", pattern: "Iron" };
      let str25 = "Sunrise";
      items1[31] = "Sunrise";
      let str26 = "Swiftfox";
      items1[32] = "Swiftfox";
      items1[33] = "Waterfox";
      let str28 = "WebPositive";
      items1[34] = "WebPositive";
      let str29 = "Opera Mini";
      items1[35] = "Opera Mini";
      items1[36] = { label: "Opera Mini", pattern: "OPiOS" };
      let str30 = "Opera";
      items1[37] = "Opera";
      items1[38] = { label: "Opera", pattern: "OPR" };
      items1[39] = "Chrome";
      items1[40] = { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" };
      items1[41] = { label: "Firefox", pattern: "(?:Firefox|Minefield)" };
      items1[42] = { label: "Firefox for iOS", pattern: "FxiOS" };
      items1[43] = { label: "IE", pattern: "IEMobile" };
      items1[44] = { label: "IE", pattern: "MSIE" };
      let str32 = "Safari";
      items1[45] = "Safari";
      let text1 = getName(items1);
      const items2 = [{ label: "BlackBerry", pattern: "BB10" }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
      let str33 = "BlackBerry";
      items2[1] = "BlackBerry";
      items2[2] = { label: "Galaxy S", pattern: "GT-I9000" };
      items2[3] = { label: "Galaxy S2", pattern: "GT-I9100" };
      items2[4] = { label: "Galaxy S3", pattern: "GT-I9300" };
      items2[5] = { label: "Galaxy S4", pattern: "GT-I9500" };
      items2[6] = { label: "Galaxy S5", pattern: "SM-G900" };
      items2[7] = { label: "Galaxy S6", pattern: "SM-G920" };
      items2[8] = { label: "Galaxy S6 Edge", pattern: "SM-G925" };
      items2[9] = { label: "Galaxy S7", pattern: "SM-G930" };
      items2[10] = { label: "Galaxy S7 Edge", pattern: "SM-G935" };
      let str34 = "Google TV";
      items2[11] = "Google TV";
      items2[12] = "Lumia";
      items2[13] = "iPad";
      items2[14] = "iPod";
      items2[15] = "iPhone";
      items2[16] = "Kindle";
      items2[17] = { label: "Kindle Fire", pattern: "(?:Cloud9|Silk-Accelerated)" };
      items2[18] = "Nexus";
      items2[19] = "Nook";
      items2[20] = "PlayBook";
      items2[21] = "PlayStation Vita";
      items2[22] = "PlayStation";
      items2[23] = "TouchPad";
      items2[24] = "Transformer";
      items2[25] = { label: "Wii U", pattern: "WiiU" };
      items2[26] = "Wii";
      items2[27] = "Xbox One";
      items2[28] = { label: "Xbox 360", pattern: "Xbox" };
      items2[29] = "Xoom";
      let product1 = getProduct(items2);
      closure_2 = product1;
      let obj6 = { Apple: { iPad: 1, iPhone: 1, iPod: 1 }, Archos: {}, Amazon: { Kindle: 1, "Kindle Fire": 1 }, Asus: { Transformer: 1 }, "Barnes & Noble": { Nook: 1 }, BlackBerry: { PlayBook: 1 }, Google: { "Google TV": 1, Nexus: 1 }, HP: { TouchPad: 1 }, HTC: {}, LG: {}, Microsoft: { Xbox: 1, "Xbox One": 1 }, Motorola: { Xoom: 1 }, Nintendo: { "Wii U": 1, Wii: 1 }, Nokia: { Lumia: 1 }, Samsung: { "Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1 }, Sony: { PlayStation: 1, "PlayStation Vita": 1 } };
      const tmp26 = getManufacturer(obj6);
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
      const tmp27 = getOS(items3);
      let tmp28 = tmp23;
      if (tmp28) {
        const items4 = [tmp23];
        tmp28 = items4;
      }
      const tmp29 = tmp26 && !product1;
      if (tmp29) {
        const items5 = [tmp26];
        const product2 = getProduct(items5);
        closure_2 = product2;
        product1 = product2;
      }
      const obj7 = /\bGoogle TV\b/;
      let match = obj7.exec(product1);
      let tmp32 = product1;
      if (match) {
        const first = match[0];
        closure_2 = first;
        tmp32 = first;
      }
      let tmp34 = tmp32;
      const obj8 = /\bSimulator\b/i;
      if (obj8.test(tmp3)) {
        let str75 = "";
        if (tmp32) {
          str75 = `${tmp32} `;
        }
        let text = `${str75}Simulator`;
        closure_2 = text;
        tmp34 = text;
      }
      let isMatch1 = "Opera Mini" == text1;
      if (isMatch1) {
        const obj9 = /\bOPiOS\b/;
        isMatch1 = obj9.test(tmp3);
      }
      const items6 = [];
      if (isMatch1) {
        items6.push("running in Turbo/Uncompressed mode");
      }
      if ("IE" == text1) {
        let str101;
        let str107;
        let tmp85;
        const obj10 = /\blike iPhone OS\b/;
        if (obj10.test(tmp3)) {
          ({ manufacturer, product } = parse(tmp3.replace(/like iPhone OS/, "")));
          closure_2 = product;
          str55 = tmp27;
          str81 = product;
          parse(tmp3.replace(/like iPhone OS/, ""));
        }
        const tmp69 = joined;
        if (!tmp69) {
          const items7 = ["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", qualify(text1), "(?:Firefox|Minefield|NetFront)"];
          joined = getVersion(items7);
        }
        if ("iCab" != tmp28) {
          const obj31 = /\bOpera\b/;
          let isMatch2 = obj31.test(text1);
          if (isMatch2) {
            const obj32 = /\bOPR\b/;
            if (obj32.test(tmp3)) {
              str10 = "Blink";
            }
            isMatch2 = str10;
          }
          str101 = isMatch2;
        } else {
          const _parseFloat = parseFloat;
          str101 = "WebKit";
        }
        if (!str101) {
          const obj33 = /\b(?:Midori|Nook|Safari)\b/i;
          let str102 = obj33.test(tmp3);
          if (str102) {
            const obj34 = /^(?:Trident|EdgeHTML)$/;
            str102 = !obj34.test(tmp28);
          }
          if (str102) {
            str102 = "WebKit";
          }
          str101 = str102;
        }
        if (!str101) {
          let isMatch3 = !tmp28;
          if (isMatch3) {
            const obj35 = /\bMSIE\b/i;
            isMatch3 = obj35.test(tmp3);
          }
          if (isMatch3) {
            let str104 = "Trident";
            if ("Mac OS" == str55) {
              str104 = "Tasman";
            }
            isMatch3 = str104;
          }
          str101 = isMatch3;
        }
        if (!str101) {
          let str106 = "WebKit" == tmp28;
          if (str106) {
            const obj36 = /\bPlayStation\b(?! Vita\b)/i;
            str106 = obj36.test(text1);
          }
          if (str106) {
            str106 = "NetFront";
          }
          str101 = str106;
        }
        let tmp78 = tmp28;
        if (str101) {
          const items8 = [str101];
          tmp78 = items8;
        }
        if ("IE" == text1) {
          const obj37 = /; *(?:XBLWP|ZuneWP)(\d+)/i;
          const tmp81 = (obj37.exec(tmp3) || 0)[1];
          str101 = tmp81;
          if (str101) {
            text1 = `${tmp24} Mobile`;
            let text2 = tmp81;
            const obj41 = /\+$/;
            if (!obj41.test(tmp81)) {
              text2 = `${tmp81}.x`;
            }
            str107 = `Windows Phone ${tmp96}`;
            items6.unshift("desktop mode");
            tmp85 = tmp81;
          }
          let tmp98 = str107;
          let tmp99 = tmp78;
          let tmp100 = tmp3;
          let tmp101 = tmp85;
          if (test2Result) {
            let str118;
            let items10;
            let tmp104;
            let tmp105;
            if (isHostType(obj, "global")) {
              let tmp122 = str107;
              let tmp123 = tmp3;
              if (tmp10) {
                const System = tmp10.lang.System;
                let text4 = str107;
                const property = System.getProperty("os.arch");
                if (!str107) {
                  const text3 = `${System.getProperty("os.name")} `;
                  text4 = `${System.getProperty("os.name")} ${System.getProperty("os.version")}`;
                }
                tmp122 = text4;
                tmp123 = property;
                tmp85 = System;
              }
              if (tmp11) {
                let tmp136;
                try {
                  let version = obj.require("ringo/engine").version;
                  joined = version.join(".");
                  text1 = "RingoJS";
                  tmp136 = tmp122;
                } catch (err) {
                  const system = obj.system;
                  tmp136 = tmp122;
                  tmp85 = system;
                  const tmp137 = system && system.global.system == obj.system;
                  if (tmp137) {
                    text1 = "Narwhal";
                    let tmp138 = tmp122;
                    if (!tmp138) {
                      const os = system[0].os || null;
                      tmp138 = os;
                    }
                    tmp136 = tmp138;
                    tmp85 = system;
                  }
                }
                str118 = tmp136;
                items10 = tmp78;
                tmp104 = tmp123;
                tmp105 = tmp85;
                if (!text1) {
                  text1 = "Rhino";
                  str118 = tmp136;
                  items10 = tmp78;
                  tmp104 = tmp123;
                  tmp105 = tmp85;
                }
              } else {
                const _process = obj.process;
                let tmp127 = typeof _process === "object";
                if (typeof _process === "object") {
                  tmp127 = !obj.process.browser;
                }
                let _process2 = tmp85;
                if (tmp127) {
                  _process2 = obj.process;
                }
                str118 = tmp122;
                items10 = tmp78;
                tmp104 = tmp123;
                tmp105 = _process2;
                if (tmp127) {
                  if (typeof _process2.versions === "object") {
                    if (typeof _process2.versions.electron === "string") {
                      items6.push(`Node ${_process2.versions.node}`);
                      text1 = "Electron";
                      joined = _process2.versions.electron;
                    } else if (typeof _process2.versions.nw === "string") {
                      items6.push(`Chromium ${tmp22}`, `Node ${_process2.versions.node}`);
                      text1 = "NW.js";
                      joined = _process2.versions.nw;
                    }
                  }
                  let tmp130 = tmp122;
                  let tmp131 = tmp123;
                  if (!text1) {
                    text1 = "Node.js";
                    const obj43 = /[\d.]+/;
                    ({ arch, platform } = _process2);
                    const match1 = obj43.exec(_process2.version);
                    let first1 = null;
                    if (match1) {
                      first1 = tmp133[0];
                    }
                    joined = first1;
                    tmp130 = platform;
                    tmp131 = arch;
                  }
                  str118 = tmp130;
                  tmp104 = tmp131;
                  items10 = tmp78;
                  tmp105 = _process2;
                }
              }
            } else {
              const runtime = obj.runtime;
              if (getClassOf(runtime) == str2) {
                text1 = "Adobe AIR";
                str118 = runtime.flash.system.Capabilities.os;
                items10 = tmp78;
                tmp104 = tmp3;
                tmp105 = runtime;
              } else {
                const phantom = obj.phantom;
                if (getClassOf(phantom) == str5) {
                  text1 = "PhantomJS";
                  const text5 = tmp120 && `${tmp120.major}.${tmp120.minor}.${tmp120.patch}`;
                  joined = text5;
                  str118 = str107;
                  items10 = tmp78;
                  tmp104 = tmp3;
                  tmp105 = tmp120;
                } else {
                  let tmp284 = phantom;
                  if (typeof tmp13.documentMode === "number") {
                    const obj86 = /\bTrident\/(\d+)/i;
                    const match2 = obj86.exec(tmp3);
                    tmp284 = match2;
                    if (tmp284) {
                      let StringResult;
                      const items9 = [joined, tmp13.documentMode];
                      let sum = +match2[1] + 4;
                      if (sum != items9[1]) {
                        items6.push(`IE ${items9[1]} mode`);
                        if (tmp78) {
                          tmp78[1] = "";
                        }
                        items9[1] = sum;
                      }
                      if ("IE" == text1) {
                        let _String = String;
                        const obj42 = items9[1];
                        StringResult = String(obj42.toFixed(1));
                      } else {
                        StringResult = tmp110[0];
                      }
                      joined = StringResult;
                      str118 = str107;
                      items10 = tmp78;
                      tmp104 = tmp3;
                      tmp105 = sum;
                    }
                  }
                  const documentMode = tmp13.documentMode;
                  let isMatch4 = typeof documentMode === "number";
                  if (typeof documentMode === "number") {
                    const obj87 = /^(?:Chrome|Firefox)\b/;
                    isMatch4 = obj87.test(text1);
                  }
                  str118 = str107;
                  items10 = tmp78;
                  tmp104 = tmp3;
                  tmp105 = tmp284;
                  if (isMatch4) {
                    items6.push(`masking as ${tmp24} ${tmp22}`);
                    text1 = "IE";
                    joined = "11.0";
                    items10 = ["Trident"];
                    str118 = "Windows";
                    tmp104 = tmp3;
                    tmp105 = tmp284;
                  }
                }
              }
            }
            tmp98 = str118 && format(str118);
            tmp99 = items10;
            tmp100 = tmp104;
            tmp101 = tmp105;
            const tmp141 = str118 && format(str118);
          }
          let tmp143 = joined;
          if (tmp143) {
            const obj44 = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i;
            let match3 = obj44.exec(joined);
            if (!match3) {
              let appMinorVersion = test2Result;
              const exec2 = /(?:alpha|beta)(?: ?\d)?/i.exec;
              const text6 = `${tmp3};`;
              if (test2Result) {
                appMinorVersion = tmp5.appMinorVersion;
              }
              match3 = exec2(text6 + appMinorVersion);
            }
            if (!match3) {
              const obj45 = /\bMinefield\b/i;
              match3 = obj45.test(tmp3) && "a";
              obj45.test(tmp3) && "a";
            }
            tmp143 = match3;
            tmp101 = match3;
          }
          let tmp149 = null;
          if (tmp143) {
            let str133 = "alpha";
            const obj46 = /b/i;
            if (obj46.test(tmp101)) {
              str133 = "beta";
            }
            let _RegExp = RegExp;
            let replaced = joined.replace(RegExp(`${tmp101}\\+?$`), "");
            if ("beta" === str133) {
              str6 = str7;
            }
            const sum1 = replaced + str6;
            const obj47 = /\d+\+?/;
            joined = sum1 + (obj47.exec(tmp101) || "");
            tmp149 = str133;
            obj47.exec(tmp101) || "";
          }
          if ("Fennec" != text1) {
            if ("Firefox" == text1) {
              let str178;
              let tmp230;
              let tmp231;
              const obj65 = /\bAppleWebKit\/([\d.]+\+?)/i;
              const str163 = (obj65.exec(tmp3) || 0)[1];
              let arr15 = items12;
              let tmp202 = tmp149;
              let tmp203 = str163;
              if (tmp203) {
                let str166;
                const _parseFloat2 = parseFloat;
                const items11 = [parseFloat(str163.replace(/\.(\d)$/, ".0$1")), str163];
                if ("Safari" == text1) {
                  const arr17 = items11[1];
                  if ("+" == arr17.slice(-1)) {
                    text1 = "WebKit Nightly";
                    const arr18 = items11[1];
                    joined = arr18.slice(0, -1);
                    str166 = "alpha";
                  }
                  const obj67 = /\bChrome\/([\d.]+)/i;
                  items11[1] = (obj67.exec(tmp3) || 0)[1];
                  let tmp212 = 537.36 == items11[0] && 537.36 == items11[2];
                  obj67.exec(tmp3) || 0;
                  if (tmp212) {
                    const _parseFloat3 = parseFloat;
                    tmp212 = parseFloat(items11[1]) >= 28;
                  }
                  if (tmp212) {
                    tmp212 = "WebKit" == items12;
                  }
                  if (tmp212) {
                    items12 = ["Blink"];
                  }
                  if (test2Result) {
                    if (!isMatch) {
                      let tmp216 = num20;
                      if (items12) {
                        let str175 = ".x";
                        const tmp217 = items12[1];
                        if (typeof num20 !== "number") {
                          let str176 = "+";
                          const obj89 = /[.+]/;
                          if (obj89.test(num20)) {
                            str176 = "";
                          }
                          str175 = str176;
                        }
                        const sum2 = num20 + str175;
                        items12[1] = `${tmp217} ${tmp218}`;
                        tmp216 = sum2;
                      }
                      let tmp220 = "Safari" == text1;
                      if (tmp220) {
                        let tmp222 = !joined;
                        if (joined) {
                          const _parseInt = parseInt;
                          tmp222 = parseInt(joined) > 45;
                        }
                        tmp220 = tmp222;
                      }
                      arr15 = items12;
                      tmp202 = str166;
                      tmp203 = tmp216;
                      if (tmp220) {
                        joined = tmp216;
                        arr15 = items12;
                        tmp202 = str166;
                        tmp203 = tmp216;
                      }
                    }
                    if (items12) {
                      items12[1] = "like Chrome";
                    }
                    let tmp214 = items11[1];
                    if (!tmp214) {
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
                                              let str171 = "13+";
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
                                                            let str172 = "21+";
                                                            if (first2 >= 537.11) {
                                                              let num75 = 23;
                                                              if (first2 >= 537.13) {
                                                                let num77 = 24;
                                                                if (first2 >= 537.18) {
                                                                  let num79 = 25;
                                                                  if (first2 >= 537.24) {
                                                                    let num80 = 26;
                                                                    if (first2 >= 537.36) {
                                                                      let str174 = "28";
                                                                      if ("Blink" != items12) {
                                                                        str174 = "27";
                                                                      }
                                                                      num80 = str174;
                                                                    }
                                                                    num79 = num80;
                                                                  }
                                                                  num77 = num79;
                                                                }
                                                                num75 = num77;
                                                              }
                                                              str172 = num75;
                                                            }
                                                            num72 = str172;
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
                                                str171 = num62;
                                              }
                                              num59 = str171;
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
                      tmp214 = num37;
                    }
                    num20 = tmp214;
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
                          let str169 = "4+";
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
                            str169 = num29;
                          }
                          num26 = str169;
                        }
                        num24 = num26;
                      }
                      num22 = num24;
                    }
                    num20 = num22;
                  }
                }
                let tmp207 = joined != items11[1];
                if (tmp207) {
                  const obj66 = /\bSafari\/([\d.]+\+?)/i;
                  const tmp210 = (obj66.exec(tmp3) || 0)[1];
                  items11[2] = tmp210;
                  tmp207 = joined != tmp210;
                }
                str166 = tmp149;
                if (!tmp207) {
                  joined = null;
                  str166 = tmp149;
                }
              }
              if ("Opera" == text1) {
                const obj68 = /\bzbov|zvav$/;
                const match4 = obj68.exec(str145);
                tmp203 = match4;
                if (tmp203) {
                  const text7 = `${tmp24} `;
                  items6.unshift("desktop mode");
                  if ("zvav" == match4) {
                    text1 = `${tmp24} Mini`;
                    joined = null;
                  } else {
                    text1 = `${tmp24} Mobile`;
                  }
                  let _RegExp3 = RegExp;
                  str178 = str145.replace(RegExp(` *${tmp225}$`), "");
                  tmp230 = tmp181;
                  tmp231 = match4;
                }
                let tmp239 = joined;
                if (tmp239) {
                  const indexOf = joined.indexOf;
                  const obj70 = /[\d.]+$/;
                  const match5 = obj70.exec(str178);
                  tmp239 = 0 == indexOf(match5);
                  tmp231 = match5;
                }
                if (tmp239) {
                  tmp239 = tmp3.indexOf(`/${tmp231}-`) > -1;
                }
                let str192 = str178;
                if (tmp239) {
                  str192 = trim(str178.replace(tmp231, ""));
                }
                let tmp243 = arr15;
                if (tmp243) {
                  const obj71 = /\b(?:Avant|Nook)\b/;
                  tmp243 = !obj71.test(text1);
                }
                if (tmp243) {
                  const obj72 = /Browser|Lunascape|Maxthon/;
                  let isMatch5 = obj72.test(text1);
                  if (!isMatch5) {
                    let isMatch6 = "Safari" != text1;
                    if (isMatch6) {
                      const obj73 = /^iOS/;
                      isMatch6 = obj73.test(str192);
                    }
                    if (isMatch6) {
                      const obj74 = /\bSafari\b/;
                      isMatch6 = obj74.test(arr15[1]);
                    }
                    isMatch5 = isMatch6;
                  }
                  if (!isMatch5) {
                    const obj75 = /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/;
                    isMatch5 = obj75.test(text1) && arr15[1];
                    obj75.test(text1) && arr15[1];
                  }
                  tmp243 = isMatch5;
                }
                if (tmp243) {
                  tmp231 = arr15[arr15.length - 1];
                }
                if (tmp243) {
                  items6.push(tmp231);
                }
                let arr19 = items6;
                if (items6.length) {
                  const items13 = [`(${arr7.join("; ")})`];
                  arr19 = items13;
                }
                const tmp252 = tmp230 && arr12 && arr12.indexOf(tmp230) < 0;
                if (tmp252) {
                  arr19.push(`on ${tmp230}`);
                }
                if (arr12) {
                  const push2 = arr19.push;
                  let str198 = "on ";
                  const obj76 = /^on /;
                  if (obj76.test(arr19[arr19.length - 1])) {
                    str198 = "";
                  }
                  push2(str198 + arr12);
                }
                let tmp255 = str192;
                if (tmp255) {
                  const obj77 = / ([\d.+]+)$/;
                  const match6 = obj77.exec(str192);
                  const tmp257 = match6 && "/" == str192.charAt(str192.length - match6[0].length - 1);
                  closure_1 = tmp257;
                  let replaced1 = str192;
                  if (match6) {
                    replaced1 = str192;
                    if (!tmp257) {
                      replaced1 = str192.replace(match6[0], "");
                    }
                  }
                  const obj54 = {
                    architecture: 32,
                    family: replaced1,
                    version: tmp259,
                    toString() {
                                    const version = this.version;
                                    let str = "";
                                    let str2 = "";
                                    const family = this.family;
                                    if (version) {
                                      str2 = str;
                                      if (!closure_1) {
                                        str2 = ` ${version}`;
                                      }
                                    }
                                    const sum = family + str2;
                                    if (64 == this.architecture) {
                                      str = " 64-bit";
                                    }
                                    return sum + str;
                                  }
                  };
                  tmp259 = null;
                  if (match6) {
                    tmp259 = match6[1];
                  }
                  tmp255 = obj54;
                }
                const obj79 = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i;
                const match7 = obj79.exec(tmp100);
                if (match7) {
                  const obj80 = /\bi686\b/i;
                  if (!obj80.test(tmp100)) {
                    if (tmp255) {
                      tmp255.architecture = 64;
                      let _RegExp4 = RegExp;
                      const str201 = tmp255.family;
                      tmp255.family = str201.replace(RegExp(` *${tmp260}`), "");
                    }
                    let tmp262 = text1;
                    if (tmp262) {
                      const obj81 = /\bWOW64\b/i;
                      let isMatch7 = obj81.test(tmp3);
                      if (!isMatch7) {
                        if (test2Result) {
                          let platform2 = tmp5.cpuClass;
                          const test2 = /\w(?:86|32)$/.test;
                          if (!platform2) {
                            platform2 = tmp5.platform;
                          }
                          test2Result = test2(platform2);
                        }
                        if (test2Result) {
                          const obj82 = /\bWin64; x64\b/i;
                          test2Result = !obj82.test(tmp3);
                        }
                        isMatch7 = test2Result;
                      }
                      tmp262 = isMatch7;
                    }
                    if (tmp262) {
                      arr19.unshift("32-bit");
                    }
                  }
                  if (!tmp3) {
                    c0 = null;
                    tmp3 = null;
                  }
                  const obj78 = {
                    description: tmp3,
                    layout: arr15 && arr15[0],
                    manufacturer: tmp230,
                    name: text1,
                    prerelease: tmp202,
                    product: arr12,
                    ua: tmp3,
                    version: tmp270,
                    os: tmp271,
                    parse,
                    toString: function toStringPlatform() {
                                    return this.description || "";
                                  }
                  };
                  tmp271 = tmp255;
                  tmp270 = text1 && joined;
                  if (!tmp271) {
                    tmp271 = { architecture: null, family: null, version: null, toString };
                    const obj84 = { architecture: null, family: null, version: null, toString };
                  }
                  if (obj78.version) {
                    arr19.unshift(joined);
                  }
                  if (obj78.name) {
                    arr19.unshift(text1);
                  }
                  let tmp276 = tmp255 && text1;
                  if (tmp276) {
                    let _String2 = String;
                    const str205 = String(tmp255);
                    let tmp278 = tmp255 != str205.split(" ")[0];
                    if (!tmp278) {
                      tmp278 = tmp255 != text1.split(" ")[0] && !arr12;
                      tmp255 != text1.split(" ")[0] && !arr12;
                    }
                    tmp276 = tmp278;
                  }
                  if (tmp276) {
                    let text8;
                    const push3 = arr19.push;
                    if (arr12) {
                      text8 = `${"(" + tmp255})`;
                    } else {
                      text8 = `on ${tmp255}`;
                    }
                    push3(text8);
                  }
                  if (arr19.length) {
                    obj78.description = arr19.join(" ");
                  }
                  return obj78;
                }
                let isMatch8 = tmp255;
                if (isMatch8) {
                  const obj83 = /^OS X/;
                  isMatch8 = obj83.test(tmp255.family);
                }
                if (isMatch8) {
                  isMatch8 = "Chrome" == text1;
                }
                if (isMatch8) {
                  const _parseFloat4 = parseFloat;
                  isMatch8 = parseFloat(joined) >= 39;
                }
                if (isMatch8) {
                  tmp255.architecture = 64;
                }
              }
              let exec3Result = "Safari" == text1;
              if (exec3Result) {
                let tmp229 = arr15;
                const exec3 = /\bChrome\b/.exec;
                if (arr15) {
                  tmp229 = arr15[1];
                }
                exec3Result = exec3(tmp229);
              }
              str178 = str145;
              tmp230 = tmp181;
              tmp231 = tmp203;
              if (exec3Result) {
                items6.unshift("desktop mode");
                text1 = "Chrome Mobile";
                joined = null;
                let str180 = null;
                let str181 = tmp181;
                const obj69 = /\bOS X\b/;
                if (obj69.test(str145)) {
                  str180 = "iOS 4.3+";
                  str181 = "Apple";
                }
                str178 = str180;
                tmp230 = str181;
                tmp231 = tmp203;
              }
            }
            if ("Maxthon" == text1) {
              const tmp157 = joined;
              if (tmp157) {
                joined = joined.replace(/\.[\d.]+/, ".x");
                str145 = tmp98;
                tmp181 = manufacturer;
                arr12 = str81;
                items12 = tmp99;
              }
            }
            const obj49 = /\bXbox\b/i;
            if (obj49.test(str81)) {
              let tmp197 = tmp98;
              if ("Xbox 360" == str81) {
                tmp197 = null;
              }
              let isMatch9 = "Xbox 360" == str81;
              if (isMatch9) {
                const obj64 = /\bIEMobile\b/;
                isMatch9 = obj64.test(tmp3);
              }
              str145 = tmp197;
              tmp181 = manufacturer;
              arr12 = str81;
              items12 = tmp99;
              if (isMatch9) {
                items6.unshift("mobile mode");
                str145 = tmp197;
                tmp181 = manufacturer;
                arr12 = str81;
                items12 = tmp99;
              }
            } else {
              const obj50 = /^(?:Chrome|IE|Opera)$/;
              if (obj50.test(text1)) {
                text1 = `${tmp24} Mobile`;
                str145 = tmp98;
                tmp181 = manufacturer;
                arr12 = str81;
                items12 = tmp99;
              }
              if ("IE" == text1) {
                if (test2Result) {
                  try {
                    if (null === obj.external) {
                      items6.unshift("platform preview");
                    }
                    str145 = tmp98;
                    tmp181 = manufacturer;
                    arr12 = str81;
                    items12 = tmp99;
                  } catch (err) {
                    items6.unshift("embedded");
                    str145 = tmp98;
                    tmp181 = manufacturer;
                    arr12 = str81;
                    items12 = tmp99;
                  }
                }
              }
              const obj52 = /\bBlackBerry\b/;
              if (obj52.test(str81)) {
                let _RegExp2 = RegExp;
                let RegExpResult = RegExp(`${str81.replace(/ +/g, " *")}/([.\\d]+)`, "i");
                const tmp164 = (RegExpResult.exec(tmp3) || 0)[1] || joined;
                tmp101 = tmp164;
                if (tmp101) {
                  const items14 = [tmp164, ];
                  const obj63 = /BB10/;
                  items14[1] = obj63.test(tmp3);
                  let str154 = "Device Software";
                  let str155 = manufacturer;
                  let tmp193 = str81;
                  if (items14[1]) {
                    closure_2 = null;
                    str155 = "BlackBerry";
                    tmp193 = null;
                    str154 = "BlackBerry";
                  }
                  str145 = `${str154} ${arr14[0]}`;
                  joined = null;
                  tmp181 = str155;
                  arr12 = tmp193;
                  items12 = tmp99;
                }
              }
              const self = this;
              let name = this != forOwn && "Wii" != str81;
              if (name) {
                let tmp166 = test2Result && tmp18;
                if (!tmp166) {
                  const obj55 = /Opera/;
                  let isMatch10 = obj55.test(text1);
                  if (isMatch10) {
                    const obj56 = /\b(?:MSIE|Firefox)\b/i;
                    isMatch10 = obj56.test(tmp3);
                  }
                  tmp166 = isMatch10;
                }
                if (!tmp166) {
                  let isMatch11 = "Firefox" == text1;
                  if (isMatch11) {
                    const obj57 = /\bOS X (?:\d+\.){2,}/;
                    isMatch11 = obj57.test(tmp98);
                  }
                  tmp166 = isMatch11;
                }
                if (!tmp166) {
                  let tmp172 = "IE" == text1;
                  if (tmp172) {
                    let tmp173 = tmp98;
                    if (tmp173) {
                      const obj58 = /^Win/;
                      tmp173 = !obj58.test(tmp98);
                    }
                    if (tmp173) {
                      tmp173 = joined > 5.5;
                    }
                    if (!tmp173) {
                      const obj59 = /\bWindows XP\b/;
                      const isMatch12 = obj59.test(tmp98) && joined > 8;
                      tmp173 = isMatch12;
                    }
                    if (!tmp173) {
                      let tmp178 = 8 == joined;
                      if (tmp178) {
                        const obj60 = /\bTrident\b/;
                        tmp178 = !obj60.test(tmp3);
                      }
                      tmp173 = tmp178;
                    }
                    tmp172 = tmp173;
                  }
                  tmp166 = tmp172;
                }
                name = tmp166;
              }
              if (name) {
                const test = obj5.test;
                const callResult = parse.call(forOwn, `${tmp3.replace(obj5, "")};`);
                name = !test(callResult);
                tmp101 = callResult;
              }
              if (name) {
                name = tmp101.name;
              }
              str145 = tmp98;
              tmp181 = manufacturer;
              arr12 = str81;
              items12 = tmp99;
              if (name) {
                let text10;
                let tmp188;
                const version2 = tmp101.version;
                let str147 = "";
                const text9 = `ing as ${tmp101.name}`;
                if (version2) {
                  str147 = ` ${version2}`;
                }
                const sum3 = text9 + str147;
                if (obj5.test(text1)) {
                  const obj62 = /\bIE\b/;
                  const isMatch13 = obj62.test(sum3) && "Mac OS" == tmp98;
                  let tmp191 = tmp98;
                  if (isMatch13) {
                    tmp191 = null;
                  }
                  text10 = `identify${tmp183}`;
                  tmp188 = tmp191;
                } else {
                  let str149 = "Opera";
                  if (tmp19) {
                    str149 = format(tmp19.replace(/([a-z])([A-Z])/g, "$1 $2"));
                  }
                  const text11 = `mask${tmp183}`;
                  text1 = str149;
                  let tmp187 = tmp98;
                  const obj61 = /\bIE\b/;
                  if (obj61.test(`mask${tmp183}`)) {
                    tmp187 = null;
                  }
                  tmp188 = tmp187;
                  text10 = text11;
                  if (!test2Result) {
                    joined = null;
                    tmp188 = tmp187;
                    text10 = text11;
                  }
                }
                items12 = ["Presto"];
                items6.push(text10);
                str145 = tmp188;
                tmp181 = manufacturer;
                arr12 = str81;
              }
            }
          }
          text1 = "Firefox Mobile";
          str145 = tmp98;
          tmp181 = manufacturer;
          arr12 = str81;
          items12 = tmp99;
        }
        const obj38 = /\bWPDesktop\b/i;
        if (obj38.test(tmp3)) {
          text1 = "IE Mobile";
          items6.unshift("desktop mode");
          str107 = "Windows Phone 8.x";
          tmp85 = str101;
          if (!joined) {
            const obj40 = /\brv:([\d.]+)/;
            joined = (obj40.exec(tmp3) || 0)[1];
            str107 = "Windows Phone 8.x";
            tmp85 = str101;
            obj40.exec(tmp3) || 0;
          }
        } else {
          let match8 = "IE" != text1 && "Trident" == tmp78;
          let tmp84 = str101;
          if (match8) {
            const obj39 = /\brv:([\d.]+)/;
            match8 = obj39.exec(tmp3);
            tmp84 = match8;
          }
          str107 = str55;
          tmp85 = tmp84;
          if (match8) {
            const tmp86 = text1;
            if (tmp86) {
              let str109 = "";
              const push = items6.push;
              const text12 = `identifying as ${tmp24}`;
              if (joined) {
                str109 = ` ${tmp22}`;
              }
              push(text12 + str109);
            }
            text1 = "IE";
            joined = tmp84[1];
            str107 = str55;
            tmp85 = tmp84;
          }
        }
      }
      const obj11 = /^iP/;
      if (obj11.test(tmp34)) {
        if (!text1) {
          text1 = "Safari";
        }
        const obj30 = / OS ([\d_]+)/i;
        const match9 = obj30.exec(tmp3);
        let str94 = "";
        if (match9) {
          const str95 = match9[1];
          str94 = ` ${str95.replace(/_/g, ".")}`;
        }
        str55 = `iOS${str94}`;
        manufacturer = tmp26;
        str81 = tmp34;
      } else if ("Konqueror" != text1) {
        if (tmp26) {
          text1 = "Android Browser";
          let str93 = "Android";
          const obj29 = /\bAndroid\b/;
          if (obj29.test(tmp27)) {
            str93 = tmp27;
          }
          str55 = str93;
          manufacturer = tmp26;
          str81 = tmp34;
        }
        const obj16 = /\bAndroid\b/;
        if ("Silk" == text1) {
          let str90 = tmp27;
          const obj27 = /\bMobi/i;
          if (!obj27.test(tmp3)) {
            items6.unshift("desktop mode");
            str90 = "Android";
          }
          str55 = str90;
          manufacturer = tmp26;
          str81 = tmp34;
          const obj28 = /Accelerated *= *true/i;
          if (obj28.test(tmp3)) {
            items6.unshift("accelerated");
            str55 = str90;
            manufacturer = tmp26;
            str81 = tmp34;
          }
        } else {
          let tmp45 = match;
          if ("PaleMoon" == text1) {
            const obj19 = /\bFirefox\/([\d.]+)\b/;
            const match10 = obj19.exec(tmp3);
            tmp45 = match10;
            if (tmp45) {
              items6.push(`identifying as Firefox ${tmp44[1]}`);
              str55 = tmp27;
              manufacturer = tmp26;
              str81 = tmp34;
            }
          }
          if ("Firefox" == text1) {
            const obj20 = /\b(Mobile|Tablet|TV)\b/i;
            const match11 = obj20.exec(tmp3);
            tmp45 = match11;
            if (tmp45) {
              str55 = tmp61;
              manufacturer = tmp26;
              str81 = tmp34;
              if (!str81) {
                closure_2 = tmp62;
                str55 = tmp61;
                manufacturer = tmp26;
                str81 = tmp62;
              }
            }
          }
          const tmp48 = text1;
          if (tmp48) {
            const obj21 = /\bMinefield\b/i;
            const isMatch14 = obj21.test(tmp3);
            let match12 = !isMatch14;
            if (match12) {
              const obj22 = /\b(?:Firefox|Safari)\b/;
              match12 = obj22.exec(text1);
            }
            tmp45 = match12;
            if (!tmp45) {
              if ("Electron" == text1) {
                const obj23 = /\bChrome\/([\d.]+)\b/;
                match12 = (obj23.exec(tmp3) || 0)[1];
                obj23.exec(tmp3) || 0;
              }
              str55 = tmp27;
              manufacturer = tmp26;
              str81 = tmp34;
              if ("Electron" == text1) {
                items6.push(`Chromium ${tmp50}`);
                str55 = tmp27;
                manufacturer = tmp26;
                str81 = tmp34;
              }
            }
          }
          let isMatch15 = text1 && !tmp34;
          if (isMatch15) {
            const obj24 = /[\/,]|^[^(]+?\)/;
            isMatch15 = obj24.test(tmp3.slice(tmp3.indexOf(`${tmp45}/`) + 8));
          }
          if (isMatch15) {
            text1 = null;
          }
          let tmp57 = tmp34 || tmp26 || tmp27;
          let tmp58 = tmp57;
          if (tmp58) {
            let isMatch16 = tmp34 || tmp26;
            if (!isMatch16) {
              const obj25 = /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/;
              isMatch16 = obj25.test(tmp27);
            }
            tmp58 = isMatch16;
          }
          str55 = tmp27;
          manufacturer = tmp26;
          str81 = tmp34;
          if (tmp58) {
            const exec = /[a-z]+(?: Hat)?/i.exec;
            const obj26 = /\bAndroid\b/;
            if (obj26.test(tmp27)) {
              tmp57 = tmp27;
            }
            text1 = `${exec(tmp57)} Browser`;
            str55 = tmp27;
            manufacturer = tmp26;
            str81 = tmp34;
          }
        }
      } else {
        manufacturer = tmp26;
        str81 = tmp34;
      }
    }
    prop = getClassOf(tmp14);
  }
  const parsed = parse();
  if (typeof globalThis.define === "function") {
    const define2 = globalThis.define;
    if (typeof globalThis.define.amd === "object") {
      const define3 = globalThis.define;
      if (globalThis.define.amd) {
        tmp.platform = parsed;
        globalThis.define(() => parsed);
      }
    }
  }
  if (tmp2) {
    if (tmp4) {
      let tmp10 = parsed;
      let keys = Object.keys();
      if (keys !== undefined) {
        let tmp12 = keys[53];
        while (tmp12 !== undefined) {
          let tmp14 = tmp12;
          if (!hasOwnProperty.call(parsed, tmp12)) {
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
let callResult = fn.call(this);