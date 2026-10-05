// _runtime/metro/01351__.js
let hasOwnProperty;

const fn = function () {
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
    let num = 0;
    if (arg0) {
      num = arg0.length;
    }
    if (typeof num === "number") {
      if (num > -1) {
        if (num <= closure_1) {
          let tmp11 = null;
          let num3 = 0;
          tmp4 = null;
          if (0 < num) {
            do {
              tmp11 = fn(tmp11, arg0[num3], num3, arg0);
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
  let tmp = (obj[typeof window] && window) || this;
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
    let replaced2;
    let str158;
    let str4;
    let tmp190;
    let tmp277;
    let tmp288;
    let tmp289;
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
          let match = arg1[replaced2];
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
    let obj5 = replaced2;
    if (tmp) {
      let prop;
      let tmp30;
      let product2;
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
      let version1 = test2Result && tmp18 && typeof tmp18.version === "function" && tmp18.version();
      const items = [{ label: "EdgeHTML", pattern: "Edge" }, , , , , , , ,];
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
      ];
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
      items1[33] = "Vivaldi";
      let str28 = "Waterfox";
      items1[34] = "Waterfox";
      let str29 = "WebPositive";
      items1[35] = "WebPositive";
      items1[36] = { label: "Yandex Browser", pattern: "YaBrowser" };
      items1[37] = { label: "UC Browser", pattern: "UCBrowser" };
      let str30 = "Opera Mini";
      items1[38] = "Opera Mini";
      items1[39] = { label: "Opera Mini", pattern: "OPiOS" };
      items1[40] = "Opera";
      items1[41] = { label: "Opera", pattern: "OPR" };
      let str32 = "Chromium";
      items1[42] = "Chromium";
      let str33 = "Chrome";
      items1[43] = "Chrome";
      items1[44] = { label: "Chrome", pattern: "(?:HeadlessChrome)" };
      items1[45] = { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" };
      items1[46] = { label: "Firefox", pattern: "(?:Firefox|Minefield)" };
      items1[47] = { label: "Firefox for iOS", pattern: "FxiOS" };
      items1[48] = { label: "IE", pattern: "IEMobile" };
      items1[49] = { label: "IE", pattern: "MSIE" };
      let str34 = "Safari";
      items1[50] = "Safari";
      let text1 = getName(items1);
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
      const product1 = getProduct(items2);
      replaced2 = product1;
      let obj6 = {
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
      const tmp26 = getManufacturer(obj6);
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
      const tmp27 = getOS(items3);
      let tmp28 = tmp23;
      if (tmp28) {
        const items4 = [tmp23];
        tmp28 = items4;
      }
      const obj7 = /\bAndroid\b/;
      let match = obj7.test(tmp27) && !product1;
      if (match) {
        const obj8 = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i;
        match = obj8.exec(tmp3);
        tmp30 = match;
      }
      let str77 = product1;
      if (match) {
        const str78 = trim(tmp30[1]);
        const tmp32 = str78.replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null;
        replaced2 = tmp32;
        str77 = tmp32;
      }
      if (tmp26) {
        let str93;
        if (!str77) {
          const items5 = [tmp26];
          product2 = getProduct(items5);
          replaced2 = product2;
        }
        const obj9 = /\bGoogle TV\b/;
        const match1 = obj9.exec(product2);
        let tmp39 = product2;
        if (match1) {
          const first = match1[0];
          replaced2 = first;
          tmp39 = first;
        }
        let tmp41 = tmp39;
        const obj10 = /\bSimulator\b/i;
        if (obj10.test(tmp3)) {
          let str87 = "";
          if (tmp39) {
            str87 = `${tmp39} `;
          }
          let text = `${str87}Simulator`;
          replaced2 = text;
          tmp41 = text;
        }
        let isMatch1 = "Opera Mini" == text1;
        if (isMatch1) {
          const obj11 = /\bOPiOS\b/;
          isMatch1 = obj11.test(tmp3);
        }
        const items6 = [];
        if (isMatch1) {
          items6.push("running in Turbo/Uncompressed mode");
        }
        if ("IE" == text1) {
          let str114;
          let str120;
          let tmp94;
          const obj12 = /\blike iPhone OS\b/;
          if (obj12.test(tmp3)) {
            ({ manufacturer, product } = parse(tmp3.replace(/like iPhone OS/, "")));
            replaced2 = product;
            str57 = tmp27;
            str93 = product;
            parse(tmp3.replace(/like iPhone OS/, ""));
          }
          function getVersion(Chrome) {
            return reduce(Chrome, (arg0, arg1) => {
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
          const tmp78 = version1;
          if (!tmp78) {
            const items7 = [
              "(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)",
              "Version",
              qualify(text1),
              "(?:Firefox|Minefield|NetFront)",
            ];
            version1 = getVersion(items7);
          }
          if ("iCab" != tmp28) {
            const obj34 = /\bOpera\b/;
            let isMatch2 = obj34.test(text1);
            if (isMatch2) {
              const obj35 = /\bOPR\b/;
              if (obj35.test(tmp3)) {
                str10 = "Blink";
              }
              isMatch2 = str10;
            }
            str114 = isMatch2;
          } else {
            const _parseFloat = parseFloat;
            str114 = "WebKit";
          }
          if (!str114) {
            const obj36 = /\b(?:Midori|Nook|Safari)\b/i;
            let str115 = obj36.test(tmp3);
            if (str115) {
              const obj37 = /^(?:Trident|EdgeHTML)$/;
              str115 = !obj37.test(tmp28);
            }
            if (str115) {
              str115 = "WebKit";
            }
            str114 = str115;
          }
          if (!str114) {
            let isMatch3 = !tmp28;
            if (isMatch3) {
              const obj38 = /\bMSIE\b/i;
              isMatch3 = obj38.test(tmp3);
            }
            if (isMatch3) {
              let str117 = "Trident";
              if ("Mac OS" == str57) {
                str117 = "Tasman";
              }
              isMatch3 = str117;
            }
            str114 = isMatch3;
          }
          if (!str114) {
            let str119 = "WebKit" == tmp28;
            if (str119) {
              const obj39 = /\bPlayStation\b(?! Vita\b)/i;
              str119 = obj39.test(text1);
            }
            if (str119) {
              str119 = "NetFront";
            }
            str114 = str119;
          }
          let tmp87 = tmp28;
          if (str114) {
            const items8 = [str114];
            tmp87 = items8;
          }
          if ("IE" == text1) {
            const obj40 = /; *(?:XBLWP|ZuneWP)(\d+)/i;
            const tmp90 = (obj40.exec(tmp3) || 0)[1];
            str114 = tmp90;
            if (str114) {
              text1 = `${tmp24} Mobile`;
              let text2 = tmp90;
              const obj44 = /\+$/;
              if (!obj44.test(tmp90)) {
                text2 = `${tmp90}.x`;
              }
              str120 = `Windows Phone ${tmp105}`;
              items6.unshift("desktop mode");
              tmp94 = tmp90;
            }
            let tmp107 = str120;
            let tmp108 = tmp87;
            let tmp109 = tmp3;
            let tmp110 = tmp94;
            if (test2Result) {
              let str131;
              let items10;
              let tmp113;
              let tmp114;
              if (isHostType(obj, "global")) {
                let tmp131 = str120;
                let tmp132 = tmp3;
                if (tmp10) {
                  const System = tmp10.lang.System;
                  let text4 = str120;
                  const property = System.getProperty("os.arch");
                  if (!str120) {
                    const text3 = `${System.getProperty("os.name")} `;
                    text4 = `${System.getProperty("os.name")} ${System.getProperty("os.version")}`;
                  }
                  tmp131 = text4;
                  tmp132 = property;
                  tmp94 = System;
                }
                if (tmp11) {
                  let tmp145;
                  try {
                    let version = obj.require("ringo/engine").version;
                    version1 = version.join(".");
                    text1 = "RingoJS";
                    tmp145 = tmp131;
                  } catch (err) {
                    const system = obj.system;
                    tmp145 = tmp131;
                    tmp94 = system;
                    const tmp146 = system && system.global.system == obj.system;
                    if (tmp146) {
                      text1 = "Narwhal";
                      let tmp147 = tmp131;
                      if (!tmp147) {
                        const os = system[0].os || null;
                        tmp147 = os;
                      }
                      tmp145 = tmp147;
                      tmp94 = system;
                    }
                  }
                  str131 = tmp145;
                  items10 = tmp87;
                  tmp113 = tmp132;
                  tmp114 = tmp94;
                  if (!text1) {
                    text1 = "Rhino";
                    str131 = tmp145;
                    items10 = tmp87;
                    tmp113 = tmp132;
                    tmp114 = tmp94;
                  }
                } else {
                  const _process = obj.process;
                  let tmp136 = typeof _process === "object";
                  if (typeof _process === "object") {
                    tmp136 = !obj.process.browser;
                  }
                  let _process2 = tmp94;
                  if (tmp136) {
                    _process2 = obj.process;
                  }
                  str131 = tmp131;
                  items10 = tmp87;
                  tmp113 = tmp132;
                  tmp114 = _process2;
                  if (tmp136) {
                    if (typeof _process2.versions === "object") {
                      if (typeof _process2.versions.electron === "string") {
                        items6.push(`Node ${_process2.versions.node}`);
                        text1 = "Electron";
                        version1 = _process2.versions.electron;
                      } else if (typeof _process2.versions.nw === "string") {
                        items6.push(`Chromium ${tmp22}`, `Node ${_process2.versions.node}`);
                        text1 = "NW.js";
                        version1 = _process2.versions.nw;
                      }
                    }
                    let tmp139 = tmp131;
                    let tmp140 = tmp132;
                    if (!text1) {
                      text1 = "Node.js";
                      const obj46 = /[\d.]+/;
                      ({ arch, platform } = _process2);
                      const match2 = obj46.exec(_process2.version);
                      let first1 = null;
                      if (match2) {
                        first1 = tmp142[0];
                      }
                      version1 = first1;
                      tmp139 = platform;
                      tmp140 = arch;
                    }
                    str131 = tmp139;
                    tmp113 = tmp140;
                    items10 = tmp87;
                    tmp114 = _process2;
                  }
                }
              } else {
                const runtime = obj.runtime;
                if (getClassOf(runtime) == str2) {
                  text1 = "Adobe AIR";
                  str131 = runtime.flash.system.Capabilities.os;
                  items10 = tmp87;
                  tmp113 = tmp3;
                  tmp114 = runtime;
                } else {
                  const phantom = obj.phantom;
                  if (getClassOf(phantom) == str5) {
                    text1 = "PhantomJS";
                    const text5 = tmp129 && `${tmp129.major}.${tmp129.minor}.${tmp129.patch}`;
                    version1 = text5;
                    str131 = str120;
                    items10 = tmp87;
                    tmp113 = tmp3;
                    tmp114 = tmp129;
                  } else {
                    let tmp302 = phantom;
                    if (typeof tmp13.documentMode === "number") {
                      const obj92 = /\bTrident\/(\d+)/i;
                      const match3 = obj92.exec(tmp3);
                      tmp302 = match3;
                      if (tmp302) {
                        let StringResult;
                        const items9 = [version1, tmp13.documentMode];
                        let sum = +match3[1] + 4;
                        if (sum != items9[1]) {
                          items6.push(`IE ${items9[1]} mode`);
                          if (tmp87) {
                            tmp87[1] = "";
                          }
                          items9[1] = sum;
                        }
                        if ("IE" == text1) {
                          let _String = String;
                          const obj45 = items9[1];
                          StringResult = String(obj45.toFixed(1));
                        } else {
                          StringResult = tmp119[0];
                        }
                        version1 = StringResult;
                        str131 = str120;
                        items10 = tmp87;
                        tmp113 = tmp3;
                        tmp114 = sum;
                      }
                    }
                    const documentMode = tmp13.documentMode;
                    let isMatch4 = typeof documentMode === "number";
                    if (typeof documentMode === "number") {
                      const obj93 = /^(?:Chrome|Firefox)\b/;
                      isMatch4 = obj93.test(text1);
                    }
                    str131 = str120;
                    items10 = tmp87;
                    tmp113 = tmp3;
                    tmp114 = tmp302;
                    if (isMatch4) {
                      items6.push(`masking as ${tmp24} ${tmp22}`);
                      text1 = "IE";
                      version1 = "11.0";
                      items10 = ["Trident"];
                      str131 = "Windows";
                      tmp113 = tmp3;
                      tmp114 = tmp302;
                    }
                  }
                }
              }
              tmp107 = str131 && format(str131);
              tmp108 = items10;
              tmp109 = tmp113;
              tmp110 = tmp114;
              const tmp150 = str131 && format(str131);
            }
            let tmp152 = version1;
            if (tmp152) {
              const obj47 = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i;
              let match4 = obj47.exec(version1);
              if (!match4) {
                let appMinorVersion = test2Result;
                const exec2 = /(?:alpha|beta)(?: ?\d)?/i.exec;
                const text6 = `${tmp3};`;
                if (test2Result) {
                  appMinorVersion = tmp5.appMinorVersion;
                }
                match4 = exec2(text6 + appMinorVersion);
              }
              if (!match4) {
                const obj48 = /\bMinefield\b/i;
                match4 = obj48.test(tmp3) && "a";
                obj48.test(tmp3) && "a";
              }
              tmp152 = match4;
              tmp110 = match4;
            }
            let tmp158 = null;
            if (tmp152) {
              let str146 = "alpha";
              const obj49 = /b/i;
              if (obj49.test(tmp110)) {
                str146 = "beta";
              }
              let _RegExp3 = RegExp;
              let replaced = version1.replace(RegExp(`${tmp110}\\+?$`), "");
              if ("beta" === str146) {
                str6 = str7;
              }
              const sum1 = replaced + str6;
              const obj50 = /\d+\+?/;
              version1 = sum1 + (obj50.exec(tmp110) || "");
              tmp158 = str146;
              obj50.exec(tmp110) || "";
            }
            if ("Fennec" != text1) {
              if ("Firefox" == text1) {
                let str192;
                let str193;
                let tmp242;
                const obj68 = /\bAppleWebKit\/([\d.]+\+?)/i;
                const str176 = (obj68.exec(tmp3) || 0)[1];
                let arr15 = items12;
                let tmp211 = tmp158;
                let tmp212 = str176;
                if (tmp212) {
                  let str179;
                  const _parseFloat2 = parseFloat;
                  const items11 = [parseFloat(str176.replace(/\.(\d)$/, ".0$1")), str176];
                  if ("Safari" == text1) {
                    const arr17 = items11[1];
                    if ("+" == arr17.slice(-1)) {
                      text1 = "WebKit Nightly";
                      const arr18 = items11[1];
                      version1 = arr18.slice(0, -1);
                      str179 = "alpha";
                    }
                    const obj70 = /\b(?:Headless)?Chrome\/([\d.]+)/i;
                    items11[1] = (obj70.exec(tmp3) || 0)[1];
                    let tmp221 = 537.36 == items11[0] && 537.36 == items11[2];
                    obj70.exec(tmp3) || 0;
                    if (tmp221) {
                      const _parseFloat3 = parseFloat;
                      tmp221 = parseFloat(items11[1]) >= 28;
                    }
                    if (tmp221) {
                      tmp221 = "WebKit" == items12;
                    }
                    if (tmp221) {
                      items12 = ["Blink"];
                    }
                    if (test2Result) {
                      if (!isMatch) {
                        let tmp225 = num20;
                        if (items12) {
                          let str188 = ".x";
                          const tmp226 = items12[1];
                          if (typeof num20 !== "number") {
                            let str189 = "+";
                            const obj95 = /[.+]/;
                            if (obj95.test(num20)) {
                              str189 = "";
                            }
                            str188 = str189;
                          }
                          const sum2 = num20 + str188;
                          items12[1] = `${tmp226} ${tmp227}`;
                          tmp225 = sum2;
                        }
                        if ("Safari" != text1) {
                          let isMatch5 = "Chrome" == text1;
                          if (isMatch5) {
                            const obj71 = /\bHeadlessChrome/i;
                            isMatch5 = obj71.test(tmp3);
                          }
                          arr15 = items12;
                          tmp211 = str179;
                          tmp212 = tmp225;
                          if (isMatch5) {
                            items6.unshift("headless");
                            arr15 = items12;
                            tmp211 = str179;
                            tmp212 = tmp225;
                          }
                        } else {
                          const tmp229 = version1;
                          if (tmp229) {
                            const _parseInt = parseInt;
                          }
                          version1 = tmp225;
                          arr15 = items12;
                          tmp211 = str179;
                          tmp212 = tmp225;
                        }
                      }
                      if (items12) {
                        items12[1] = "like Chrome";
                      }
                      let tmp223 = items11[1];
                      if (!tmp223) {
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
                                                let str184 = "13+";
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
                                                              let str185 = "21+";
                                                              if (first2 >= 537.11) {
                                                                let num83 = 23;
                                                                if (first2 >= 537.13) {
                                                                  let num85 = 24;
                                                                  if (first2 >= 537.18) {
                                                                    let num87 = 25;
                                                                    if (first2 >= 537.24) {
                                                                      let num88 = 26;
                                                                      if (first2 >= 537.36) {
                                                                        let str187 = "28";
                                                                        if ("Blink" != items12) {
                                                                          str187 = "27";
                                                                        }
                                                                        num88 = str187;
                                                                      }
                                                                      num87 = num88;
                                                                    }
                                                                    num85 = num87;
                                                                  }
                                                                  num83 = num85;
                                                                }
                                                                str185 = num83;
                                                              }
                                                              num80 = str185;
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
                                                  str184 = num70;
                                                }
                                                num67 = str184;
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
                        tmp223 = num45;
                      }
                      num20 = tmp223;
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
                            let str182 = "4+";
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
                              str182 = num29;
                            }
                            num26 = str182;
                          }
                          num24 = num26;
                        }
                        num22 = num24;
                      }
                      num20 = num22;
                    }
                  }
                  let tmp216 = version1 != items11[1];
                  if (tmp216) {
                    const obj69 = /\bSafari\/([\d.]+\+?)/i;
                    const tmp219 = (obj69.exec(tmp3) || 0)[1];
                    items11[2] = tmp219;
                    tmp216 = version1 != tmp219;
                  }
                  str179 = tmp158;
                  if (!tmp216) {
                    version1 = null;
                    str179 = tmp158;
                  }
                }
                if ("Opera" == text1) {
                  const obj72 = /\bzbov|zvav$/;
                  const match5 = obj72.exec(str158);
                  tmp212 = match5;
                  if (tmp212) {
                    const text7 = `${tmp24} `;
                    items6.unshift("desktop mode");
                    if ("zvav" == match5) {
                      text1 = `${tmp24} Mini`;
                      version1 = null;
                    } else {
                      text1 = `${tmp24} Mobile`;
                    }
                    let _RegExp5 = RegExp;
                    str192 = str158.replace(RegExp(` *${tmp235}$`), "");
                    str193 = tmp190;
                    tmp242 = match5;
                  }
                  let tmp250 = version1;
                  if (tmp250) {
                    const indexOf = version1.indexOf;
                    const obj75 = /[\d.]+$/;
                    const match6 = obj75.exec(str192);
                    tmp250 = 0 == indexOf(match6);
                    tmp242 = match6;
                  }
                  if (tmp250) {
                    tmp250 = tmp3.indexOf(`/${tmp242}-`) > -1;
                  }
                  let arr19 = str192;
                  if (tmp250) {
                    arr19 = trim(str192.replace(tmp242, ""));
                  }
                  let tmp254 = arr19 && -1 != arr19.indexOf(text1);
                  if (tmp254) {
                    let _RegExp6 = RegExp;
                    let RegExpResult = RegExp(`${tmp24} OS`);
                    tmp254 = !RegExpResult.test(arr19);
                  }
                  let str207 = arr19;
                  if (tmp254) {
                    let _RegExp7 = RegExp;
                    str207 = arr19.replace(RegExp(` *${qualify(tmp24)} *`), "");
                  }
                  let tmp261 = arr15;
                  if (tmp261) {
                    const obj77 = /\b(?:Avant|Nook)\b/;
                    tmp261 = !obj77.test(text1);
                  }
                  if (tmp261) {
                    const obj78 = /Browser|Lunascape|Maxthon/;
                    let isMatch6 = obj78.test(text1);
                    if (!isMatch6) {
                      let isMatch7 = "Safari" != text1;
                      if (isMatch7) {
                        const obj79 = /^iOS/;
                        isMatch7 = obj79.test(str207);
                      }
                      if (isMatch7) {
                        const obj80 = /\bSafari\b/;
                        isMatch7 = obj80.test(arr15[1]);
                      }
                      isMatch6 = isMatch7;
                    }
                    if (!isMatch6) {
                      const obj81 =
                        /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/;
                      isMatch6 = obj81.test(text1) && arr15[1];
                      obj81.test(text1) && arr15[1];
                    }
                    tmp261 = isMatch6;
                  }
                  if (tmp261) {
                    tmp242 = arr15[arr15.length - 1];
                  }
                  if (tmp261) {
                    items6.push(tmp242);
                  }
                  let arr20 = items6;
                  if (items6.length) {
                    const items13 = [`(${arr7.join("; ")})`];
                    arr20 = items13;
                  }
                  const tmp270 = str193 && arr12 && arr12.indexOf(str193) < 0;
                  if (tmp270) {
                    arr20.push(`on ${str193}`);
                  }
                  if (arr12) {
                    const push2 = arr20.push;
                    let str214 = "on ";
                    const obj82 = /^on /;
                    if (obj82.test(arr20[arr20.length - 1])) {
                      str214 = "";
                    }
                    push2(str214 + arr12);
                  }
                  let tmp273 = str207;
                  if (tmp273) {
                    const obj83 = / ([\d.+]+)$/;
                    const match7 = obj83.exec(str207);
                    const tmp275 = match7 && "/" == str207.charAt(str207.length - match7[0].length - 1);
                    closure_1 = tmp275;
                    let replaced1 = str207;
                    if (match7) {
                      replaced1 = str207;
                      if (!tmp275) {
                        replaced1 = str207.replace(match7[0], "");
                      }
                    }
                    const obj57 = {
                      architecture: 32,
                      family: replaced1,
                      version: tmp277,
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
                      },
                    };
                    tmp277 = null;
                    if (match7) {
                      tmp277 = match7[1];
                    }
                    tmp273 = obj57;
                  }
                  const obj85 = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i;
                  const match8 = obj85.exec(tmp109);
                  if (match8) {
                    const obj86 = /\bi686\b/i;
                    if (!obj86.test(tmp109)) {
                      if (tmp273) {
                        tmp273.architecture = 64;
                        const _RegExp8 = RegExp;
                        const str217 = tmp273.family;
                        tmp273.family = str217.replace(RegExp(` *${tmp278}`), "");
                      }
                      let tmp280 = text1;
                      if (tmp280) {
                        const obj87 = /\bWOW64\b/i;
                        let isMatch8 = obj87.test(tmp3);
                        if (!isMatch8) {
                          if (test2Result) {
                            let platform2 = tmp5.cpuClass;
                            const test2 = /\w(?:86|32)$/.test;
                            if (!platform2) {
                              platform2 = tmp5.platform;
                            }
                            test2Result = test2(platform2);
                          }
                          if (test2Result) {
                            const obj88 = /\bWin64; x64\b/i;
                            test2Result = !obj88.test(tmp3);
                          }
                          isMatch8 = test2Result;
                        }
                        tmp280 = isMatch8;
                      }
                      if (tmp280) {
                        arr20.unshift("32-bit");
                      }
                    }
                    if (!tmp3) {
                      c0 = null;
                      tmp3 = null;
                    }
                    const obj76 = {
                      description: tmp3,
                      layout: arr15 && arr15[0],
                      manufacturer: str193,
                      name: text1,
                      prerelease: tmp211,
                      product: arr12,
                      ua: tmp3,
                      version: tmp288,
                      os: tmp289,
                      parse,
                      toString: function toStringPlatform() {
                        return this.description || "";
                      },
                    };
                    tmp289 = tmp273;
                    tmp288 = text1 && version1;
                    if (!tmp289) {
                      tmp289 = { architecture: null, family: null, version: null, toString };
                      const obj84 = { architecture: null, family: null, version: null, toString };
                    }
                    if (obj76.version) {
                      arr20.unshift(version1);
                    }
                    if (obj76.name) {
                      arr20.unshift(text1);
                    }
                    let tmp294 = tmp273 && text1;
                    if (tmp294) {
                      let _String2 = String;
                      const str221 = String(tmp273);
                      let tmp296 = tmp273 != str221.split(" ")[0];
                      if (!tmp296) {
                        tmp296 = tmp273 != text1.split(" ")[0] && !arr12;
                        tmp273 != text1.split(" ")[0] && !arr12;
                      }
                      tmp294 = tmp296;
                    }
                    if (tmp294) {
                      let text8;
                      const push3 = arr20.push;
                      if (arr12) {
                        text8 = `${"(" + tmp273})`;
                      } else {
                        text8 = `on ${tmp273}`;
                      }
                      push3(text8);
                    }
                    if (arr20.length) {
                      obj76.description = arr20.join(" ");
                    }
                    return obj76;
                  }
                  let isMatch9 = tmp273;
                  if (isMatch9) {
                    const obj89 = /^OS X/;
                    isMatch9 = obj89.test(tmp273.family);
                  }
                  if (isMatch9) {
                    isMatch9 = "Chrome" == text1;
                  }
                  if (isMatch9) {
                    const _parseFloat4 = parseFloat;
                    isMatch9 = parseFloat(version1) >= 39;
                  }
                  if (isMatch9) {
                    tmp273.architecture = 64;
                  }
                }
                if ("Safari" == text1) {
                  let tmp238 = arr15;
                  const exec3 = /\bChrome\b/.exec;
                  if (arr15) {
                    tmp238 = arr15[1];
                  }
                  if (exec3(tmp238)) {
                    items6.unshift("desktop mode");
                    text1 = "Chrome Mobile";
                    version1 = null;
                    str192 = null;
                    str193 = tmp190;
                    tmp242 = tmp212;
                    const obj74 = /\bOS X\b/;
                    if (obj74.test(str158)) {
                      str192 = "iOS 4.3+";
                      str193 = "Apple";
                      tmp242 = tmp212;
                    }
                  }
                }
                const obj73 = /\bSRWare Iron\b/;
                const isMatch10 = obj73.test(text1) && !version1;
                str192 = str158;
                str193 = tmp190;
                tmp242 = tmp212;
                if (isMatch10) {
                  version1 = getVersion("Chrome");
                  str192 = str158;
                  str193 = tmp190;
                  tmp242 = tmp212;
                }
              }
              if ("Maxthon" == text1) {
                const tmp166 = version1;
                if (tmp166) {
                  version1 = version1.replace(/\.[\d.]+/, ".x");
                  str158 = tmp107;
                  tmp190 = manufacturer;
                  arr12 = str93;
                  items12 = tmp108;
                }
              }
              const obj52 = /\bXbox\b/i;
              if (obj52.test(str93)) {
                let tmp206 = tmp107;
                if ("Xbox 360" == str93) {
                  tmp206 = null;
                }
                let isMatch11 = "Xbox 360" == str93;
                if (isMatch11) {
                  const obj67 = /\bIEMobile\b/;
                  isMatch11 = obj67.test(tmp3);
                }
                str158 = tmp206;
                tmp190 = manufacturer;
                arr12 = str93;
                items12 = tmp108;
                if (isMatch11) {
                  items6.unshift("mobile mode");
                  str158 = tmp206;
                  tmp190 = manufacturer;
                  arr12 = str93;
                  items12 = tmp108;
                }
              } else {
                const obj53 = /^(?:Chrome|IE|Opera)$/;
                if (obj53.test(text1)) {
                  text1 = `${tmp24} Mobile`;
                  str158 = tmp107;
                  tmp190 = manufacturer;
                  arr12 = str93;
                  items12 = tmp108;
                }
                if ("IE" == text1) {
                  if (test2Result) {
                    try {
                      if (null === obj.external) {
                        items6.unshift("platform preview");
                      }
                      str158 = tmp107;
                      tmp190 = manufacturer;
                      arr12 = str93;
                      items12 = tmp108;
                    } catch (err) {
                      items6.unshift("embedded");
                      str158 = tmp107;
                      tmp190 = manufacturer;
                      arr12 = str93;
                      items12 = tmp108;
                    }
                  }
                }
                const obj55 = /\bBlackBerry\b/;
                if (obj55.test(str93)) {
                  let _RegExp4 = RegExp;
                  let RegExpResult1 = RegExp(`${str93.replace(/ +/g, " *")}/([.\\d]+)`, "i");
                  const tmp173 = (RegExpResult1.exec(tmp3) || 0)[1] || version1;
                  tmp110 = tmp173;
                  if (tmp110) {
                    const items14 = [tmp173];
                    const obj66 = /BB10/;
                    items14[1] = obj66.test(tmp3);
                    let str167 = "Device Software";
                    let str168 = manufacturer;
                    let tmp202 = str93;
                    if (items14[1]) {
                      replaced2 = null;
                      str168 = "BlackBerry";
                      tmp202 = null;
                      str167 = "BlackBerry";
                    }
                    str158 = `${str167} ${arr14[0]}`;
                    version1 = null;
                    tmp190 = str168;
                    arr12 = tmp202;
                    items12 = tmp108;
                  }
                }
                const self = this;
                let name = this != forOwn && "Wii" != str93;
                if (name) {
                  let tmp175 = test2Result && tmp18;
                  if (!tmp175) {
                    const obj58 = /Opera/;
                    let isMatch12 = obj58.test(text1);
                    if (isMatch12) {
                      const obj59 = /\b(?:MSIE|Firefox)\b/i;
                      isMatch12 = obj59.test(tmp3);
                    }
                    tmp175 = isMatch12;
                  }
                  if (!tmp175) {
                    let isMatch13 = "Firefox" == text1;
                    if (isMatch13) {
                      const obj60 = /\bOS X (?:\d+\.){2,}/;
                      isMatch13 = obj60.test(tmp107);
                    }
                    tmp175 = isMatch13;
                  }
                  if (!tmp175) {
                    let tmp181 = "IE" == text1;
                    if (tmp181) {
                      let tmp182 = tmp107;
                      if (tmp182) {
                        const obj61 = /^Win/;
                        tmp182 = !obj61.test(tmp107);
                      }
                      if (tmp182) {
                        tmp182 = version1 > 5.5;
                      }
                      if (!tmp182) {
                        const obj62 = /\bWindows XP\b/;
                        const isMatch14 = obj62.test(tmp107) && version1 > 8;
                        tmp182 = isMatch14;
                      }
                      if (!tmp182) {
                        let tmp187 = 8 == version1;
                        if (tmp187) {
                          const obj63 = /\bTrident\b/;
                          tmp187 = !obj63.test(tmp3);
                        }
                        tmp182 = tmp187;
                      }
                      tmp181 = tmp182;
                    }
                    tmp175 = tmp181;
                  }
                  name = tmp175;
                }
                if (name) {
                  const test = obj5.test;
                  const callResult = parse.call(forOwn, `${tmp3.replace(obj5, "")};`);
                  name = !test(callResult);
                  tmp110 = callResult;
                }
                if (name) {
                  name = tmp110.name;
                }
                str158 = tmp107;
                tmp190 = manufacturer;
                arr12 = str93;
                items12 = tmp108;
                if (name) {
                  let text10;
                  let tmp197;
                  const version2 = tmp110.version;
                  let str160 = "";
                  const text9 = `ing as ${tmp110.name}`;
                  if (version2) {
                    str160 = ` ${version2}`;
                  }
                  const sum3 = text9 + str160;
                  if (obj5.test(text1)) {
                    const obj65 = /\bIE\b/;
                    const isMatch15 = obj65.test(sum3) && "Mac OS" == tmp107;
                    let tmp200 = tmp107;
                    if (isMatch15) {
                      tmp200 = null;
                    }
                    text10 = `identify${tmp192}`;
                    tmp197 = tmp200;
                  } else {
                    let str162 = "Opera";
                    if (tmp19) {
                      str162 = format(tmp19.replace(/([a-z])([A-Z])/g, "$1 $2"));
                    }
                    const text11 = `mask${tmp192}`;
                    text1 = str162;
                    let tmp196 = tmp107;
                    const obj64 = /\bIE\b/;
                    if (obj64.test(`mask${tmp192}`)) {
                      tmp196 = null;
                    }
                    tmp197 = tmp196;
                    text10 = text11;
                    if (!test2Result) {
                      version1 = null;
                      tmp197 = tmp196;
                      text10 = text11;
                    }
                  }
                  items12 = ["Presto"];
                  items6.push(text10);
                  str158 = tmp197;
                  tmp190 = manufacturer;
                  arr12 = str93;
                }
              }
            }
            text1 = "Firefox Mobile";
            str158 = tmp107;
            tmp190 = manufacturer;
            arr12 = str93;
            items12 = tmp108;
          }
          const obj41 = /\bWPDesktop\b/i;
          if (obj41.test(tmp3)) {
            text1 = "IE Mobile";
            items6.unshift("desktop mode");
            str120 = "Windows Phone 8.x";
            tmp94 = str114;
            if (!version1) {
              const obj43 = /\brv:([\d.]+)/;
              version1 = (obj43.exec(tmp3) || 0)[1];
              str120 = "Windows Phone 8.x";
              tmp94 = str114;
              obj43.exec(tmp3) || 0;
            }
          } else {
            let match9 = "IE" != text1 && "Trident" == tmp87;
            let tmp93 = str114;
            if (match9) {
              const obj42 = /\brv:([\d.]+)/;
              match9 = obj42.exec(tmp3);
              tmp93 = match9;
            }
            str120 = str57;
            tmp94 = tmp93;
            if (match9) {
              const tmp95 = text1;
              if (tmp95) {
                let str122 = "";
                const push = items6.push;
                const text12 = `identifying as ${tmp24}`;
                if (version1) {
                  str122 = ` ${tmp22}`;
                }
                push(text12 + str122);
              }
              text1 = "IE";
              version1 = tmp93[1];
              str120 = str57;
              tmp94 = tmp93;
            }
          }
        }
        const obj13 = /^iP/;
        if (obj13.test(tmp41)) {
          if (!text1) {
            text1 = "Safari";
          }
          const obj33 = / OS ([\d_]+)/i;
          const match10 = obj33.exec(tmp3);
          let str107 = "";
          if (match10) {
            const str108 = match10[1];
            str107 = ` ${str108.replace(/_/g, ".")}`;
          }
          str57 = `iOS${str107}`;
          manufacturer = tmp26;
          str93 = tmp41;
        } else if ("Konqueror" != text1) {
          if (tmp26) {
            text1 = "Android Browser";
            let str106 = "Android";
            const obj32 = /\bAndroid\b/;
            if (obj32.test(tmp27)) {
              str106 = tmp27;
            }
            str57 = str106;
            manufacturer = tmp26;
            str93 = tmp41;
          }
          const obj18 = /\bAndroid\b/;
          if ("Silk" == text1) {
            let str103 = tmp27;
            const obj30 = /\bMobi/i;
            if (!obj30.test(tmp3)) {
              items6.unshift("desktop mode");
              str103 = "Android";
            }
            str57 = str103;
            manufacturer = tmp26;
            str93 = tmp41;
            const obj31 = /Accelerated *= *true/i;
            if (obj31.test(tmp3)) {
              items6.unshift("accelerated");
              str57 = str103;
              manufacturer = tmp26;
              str93 = tmp41;
            }
          } else {
            if ("UC Browser" == text1) {
              const obj21 = /\bUCWEB\b/;
              if (obj21.test(tmp3)) {
                items6.push("speed mode");
                str57 = tmp27;
                manufacturer = tmp26;
                str93 = tmp41;
              }
            }
            let tmp52 = match1;
            if ("PaleMoon" == text1) {
              const obj22 = /\bFirefox\/([\d.]+)\b/;
              const match11 = obj22.exec(tmp3);
              tmp52 = match11;
              if (tmp52) {
                items6.push(`identifying as Firefox ${tmp53[1]}`);
                str57 = tmp27;
                manufacturer = tmp26;
                str93 = tmp41;
              }
            }
            if ("Firefox" == text1) {
              const obj23 = /\b(Mobile|Tablet|TV)\b/i;
              const match12 = obj23.exec(tmp3);
              tmp52 = match12;
              if (tmp52) {
                str57 = tmp69;
                manufacturer = tmp26;
                str93 = tmp41;
                if (!str93) {
                  replaced2 = tmp70;
                  str57 = tmp69;
                  manufacturer = tmp26;
                  str93 = tmp70;
                }
              }
            }
            const tmp56 = text1;
            if (tmp56) {
              const obj24 = /\bMinefield\b/i;
              const isMatch16 = obj24.test(tmp3);
              let match13 = !isMatch16;
              if (match13) {
                const obj25 = /\b(?:Firefox|Safari)\b/;
                match13 = obj25.exec(text1);
              }
              tmp52 = match13;
              if (!tmp52) {
                if ("Electron" == text1) {
                  const obj26 = /\bChrome\/([\d.]+)\b/;
                  match13 = (obj26.exec(tmp3) || 0)[1];
                  obj26.exec(tmp3) || 0;
                }
                str57 = tmp27;
                manufacturer = tmp26;
                str93 = tmp41;
                if ("Electron" == text1) {
                  items6.push(`Chromium ${tmp58}`);
                  str57 = tmp27;
                  manufacturer = tmp26;
                  str93 = tmp41;
                }
              }
            }
            let isMatch17 = text1 && !tmp41;
            if (isMatch17) {
              const obj27 = /[\/,]|^[^(]+?\)/;
              isMatch17 = obj27.test(tmp3.slice(tmp3.indexOf(`${tmp52}/`) + 8));
            }
            if (isMatch17) {
              text1 = null;
            }
            let tmp65 = tmp41 || tmp26 || tmp27;
            let tmp66 = tmp65;
            if (tmp66) {
              let isMatch18 = tmp41 || tmp26;
              if (!isMatch18) {
                const obj28 = /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/;
                isMatch18 = obj28.test(tmp27);
              }
              tmp66 = isMatch18;
            }
            str57 = tmp27;
            manufacturer = tmp26;
            str93 = tmp41;
            if (tmp66) {
              const exec = /[a-z]+(?: Hat)?/i.exec;
              const obj29 = /\bAndroid\b/;
              if (obj29.test(tmp27)) {
                tmp65 = tmp27;
              }
              text1 = `${exec(tmp65)} Browser`;
              str57 = tmp27;
              manufacturer = tmp26;
              str93 = tmp41;
            }
          }
        } else {
          manufacturer = tmp26;
          str93 = tmp41;
        }
      }
      product2 = str77;
      const tmp34 = tmp26 && str77;
      if (tmp34) {
        let _RegExp = RegExp;
        let _RegExp2 = RegExp;
        const str84 = str77.replace(RegExp(`^(${qualify(tmp26)})[-_.\\s]`, "i"), `${tmp26} `);
        replaced2 = str84.replace(RegExp(`^(${qualify(tmp26)})[-_.]?(\\w)`, "i"), `${tmp26} $2`);
        product2 = replaced2;
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
