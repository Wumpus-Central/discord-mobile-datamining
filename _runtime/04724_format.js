// _runtime/04724_format.js
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
    if (typeof arg0.length === "number") {
      if (length > -1) {
        if (length <= closure_1) {
          let num = 0;
          let tmp11 = null;
          let tmp4 = null;
          if (0 < length) {
            do {
              let tmp12 = tmp11;
              let tmp13 = num;
              let tmp14 = arg0;
              tmp11 = arg1(tmp11, arg0[num], num, arg0);
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
      const items1 = ["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", { label: "Microsoft Edge", pattern: "Edge" }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", { label: "Samsung Internet", pattern: "SamsungBrowser" }, "SeaMonkey", { label: "Silk", pattern: "(?:Cloud9|Silk-Accelerated)" }, "Sleipnir", "SlimBrowser", { label: "SRWare Iron", pattern: "Iron" }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", { label: "Opera Mini", pattern: "OPiOS" }, "Opera", { label: "Opera", pattern: "OPR" }, "Chrome", { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" }, { label: "Firefox", pattern: "(?:Firefox|Minefield)" }, { label: "Firefox for iOS", pattern: "FxiOS" }, { label: "IE", pattern: "IEMobile" }, { label: "IE", pattern: "MSIE" }, "Safari"];
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
      closure_2 = product;
      obj = { Apple: null, Archos: null, Amazon: null, Asus: null, "Barnes & Noble": null, BlackBerry: null, Google: null, HP: null, HTC: null, LG: null, Microsoft: null, Motorola: null, Nintendo: null, Nokia: null, Samsung: null, Sony: null };
      obj[0] = { iPad: 1, iPhone: 1, iPod: 1 };
      obj[1] = {};
      obj[2] = { Kindle: 1, "Kindle Fire": 1 };
      obj[3] = { Transformer: 1 };
      obj[4] = { Nook: 1 };
      obj[5] = { PlayBook: 1 };
      obj[6] = { "Google TV": 1, Nexus: 1 };
      obj[7] = { TouchPad: 1 };
      obj[8] = {};
      obj[9] = {};
      obj[10] = { Xbox: 1, "Xbox One": 1 };
      obj[11] = { Xoom: 1 };
      obj[12] = { "Wii U": 1, Wii: 1 };
      obj[13] = { Lumia: 1 };
      obj[14] = { "Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1 };
      obj[15] = { PlayStation: 1, "PlayStation Vita": 1 };
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
      let tmp33 = tmp28;
      if (tmp28) {
        const items4 = [tmp28];
        tmp33 = items4;
      }
      let tmp34 = tmp31;
      if (tmp31) {
        tmp34 = !product;
      }
      if (tmp34) {
        const items5 = [tmp31];
        const product1 = getProduct(items5);
        closure_2 = product1;
        product = product1;
      }
      let match = /\bGoogle TV\b/.exec(product);
      let tmp37 = product;
      if (match) {
        const first = match[0];
        closure_2 = first;
        tmp37 = first;
      }
      let tmp39 = tmp37;
      if (obj8.test(tmp9)) {
        let str75 = "";
        if (tmp37) {
          str75 = `${tmp37} `;
        }
        let text = `${str75}Simulator`;
        closure_2 = text;
        tmp39 = text;
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
          str = "";
          ({ manufacturer, product } = parse(tmp9.replace(/like iPhone OS/, "")));
          closure_2 = product;
          str55 = tmp32;
          let str81 = product;
          const tmp73 = parse(tmp9.replace(/like iPhone OS/, ""));
        }
        if (!joined) {
          const items7 = ["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", qualify(text1)];
          str = "(?:Firefox|Minefield|NetFront)";
          items7[3] = "(?:Firefox|Minefield|NetFront)";
          joined = (function getVersion(items7) {
            return closure_1_9(items7, (arg0, arg1) => {
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
          })(items7);
        }
        if ("iCab" != tmp33) {
          let isMatch2 = /\bOpera\b/.test(text1);
          if (isMatch2) {
            if (obj32.test(tmp9)) {
              str10 = "Blink";
            }
            isMatch2 = str10;
            obj32 = /\bOPR\b/;
          }
          str = isMatch2;
          const obj31 = /\bOpera\b/;
        } else {
          const _parseFloat = parseFloat;
          str = "WebKit";
        }
        if (!str) {
          str = /\b(?:Midori|Nook|Safari)\b/i.test(tmp9);
          if (str) {
            str = !/^(?:Trident|EdgeHTML)$/.test(tmp33);
            const obj34 = /^(?:Trident|EdgeHTML)$/;
          }
          if (str) {
            str = "WebKit";
          }
          const obj33 = /\b(?:Midori|Nook|Safari)\b/i;
        }
        if (!str) {
          let isMatch3 = !tmp33;
          if (!tmp33) {
            isMatch3 = /\bMSIE\b/i.test(tmp9);
            const obj35 = /\bMSIE\b/i;
          }
          if (isMatch3) {
            str = "Mac OS";
            str = "Trident";
            if ("Mac OS" == str55) {
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
            const obj36 = /\bPlayStation\b(?! Vita\b)/i;
          }
          if (str) {
            str = "NetFront";
          }
        }
        let tmp83 = tmp33;
        if (str) {
          const items8 = [str];
          tmp83 = items8;
        }
        if ("IE" == text1) {
          const tmp86 = /; *(?:XBLWP|ZuneWP)(\d+)/i.exec(tmp9) || 0[1];
          str = tmp86;
          if (tmp86) {
            let text2 = text1;
            str = " Mobile";
            text1 = `${tmp29} Mobile`;
            text2 = tmp86;
            if (!obj41.test(tmp86)) {
              str = ".x";
              text2 = `${tmp86}.x`;
            }
            str = "Windows Phone ";
            str = `Windows Phone ${tmp}`;
            str = "desktop mode";
            text2 = items6.unshift("desktop mode");
            let tmp90 = tmp86;
            obj41 = /\+$/;
          }
          text2 = str;
          text2 = tmp83;
          text2 = tmp9;
          text2 = tmp90;
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
                tmp90 = System;
              }
              if (tmp17) {
                try {
                  str = "ringo/engine";
                  let version = obj.require("ringo/engine").version;
                  str = ".";
                  joined = version.join(".");
                  text1 = "RingoJS";
                  text2 = text1;
                  str = text2;
                  let items10 = tmp83;
                  text2 = tmp90;
                  if (!`RingoJS`) {
                    text1 = "Rhino";
                    str = text2;
                    items10 = tmp83;
                    text2 = tmp90;
                  }
                } catch (err) {
                  const system = tmp5.system;
                  text2 = system;
                  if (system) {
                    text2 = system.global.system == tmp5.system;
                  }
                  text2 = tmp6;
                  tmp90 = system;
                  if (text2) {
                    text1 = "Narwhal";
                    text2 = tmp6;
                    if (!tmp6) {
                      text2 = system[0].os;
                      if (!text2) {
                        text2 = null;
                      }
                    }
                    tmp90 = system;
                  }
                }
              } else {
                const _process = obj.process;
                text2 = typeof _process === "object";
                if (typeof _process === "object") {
                  text2 = !obj.process.browser;
                }
                let _process2 = tmp90;
                if (text2) {
                  _process2 = obj.process;
                }
                str = text2;
                items10 = tmp83;
                text2 = _process2;
                if (text2) {
                  if (typeof _process2.versions === "object") {
                    if (typeof _process2.versions.electron === "string") {
                      str = "Node ";
                      text2 = items6.push(`Node ${_process2.versions.node}`);
                      text1 = "Electron";
                      joined = _process2.versions.electron;
                    } else if (typeof _process2.versions.nw === "string") {
                      text2 = joined;
                      str = "Chromium ";
                      str = "Node ";
                      text2 = items6.push(`Chromium ${tmp27}`, `Node ${_process2.versions.node}`);
                      text1 = "NW.js";
                      joined = _process2.versions.nw;
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
                    joined = text2;
                    text2 = platform;
                    text2 = arch;
                    const obj43 = /[\d.]+/;
                  }
                  str = text2;
                  items10 = tmp83;
                  text2 = _process2;
                }
              }
            } else {
              const runtime = obj.runtime;
              text2 = getClassOf;
              if (getClassOf(runtime) == str2) {
                text1 = "Adobe AIR";
                str = runtime.flash.system.Capabilities.os;
                items10 = tmp83;
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
                  joined = text2;
                  items10 = tmp83;
                  text2 = tmp9;
                } else {
                  text2 = phantom;
                  if (typeof tmp19.documentMode === "number") {
                    text2 = /\bTrident\/(\d+)/i.exec(tmp9);
                    if (text2) {
                      text2 = joined;
                      const items9 = [joined, tmp19.documentMode];
                      text2 = items9;
                      text2 = +text2[1] + 4;
                      if (text2 != items9[1]) {
                        text2 = items9;
                        str = "IE ";
                        str = " mode";
                        text2 = items6.push(`IE ${tmp[1]} mode`);
                        if (tmp83) {
                          str = "";
                          tmp83[1] = "";
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
                        const obj42 = text2[1];
                      } else {
                        text2 = items9;
                        text2 = text2[0];
                      }
                      joined = text2;
                      items10 = tmp83;
                      text2 = tmp9;
                    }
                    const obj89 = /\bTrident\/(\d+)/i;
                  }
                  const documentMode = tmp19.documentMode;
                  text2 = typeof documentMode === "number";
                  if (typeof documentMode === "number") {
                    text2 = text1;
                    text2 = /^(?:Chrome|Firefox)\b/.test(text1);
                    const obj90 = /^(?:Chrome|Firefox)\b/;
                  }
                  items10 = tmp83;
                  text2 = tmp9;
                  if (text2) {
                    text2 = text1;
                    str = "masking as ";
                    text2 = joined;
                    str = " ";
                    text2 = items6.push(`masking as ${tmp29} ${tmp27}`);
                    text1 = "IE";
                    joined = "11.0";
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
          text2 = joined;
          if (joined) {
            text2 = joined;
            text2 = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(joined);
            if (!text2) {
              str = ";";
              let appMinorVersion = isMatch4;
              text2 = `${tmp9};`;
              if (isMatch4) {
                appMinorVersion = tmp11.appMinorVersion;
              }
              text2 = /(?:alpha|beta)(?: ?\d)?/i.exec(text2 + appMinorVersion);
              const obj45 = /(?:alpha|beta)(?: ?\d)?/i;
            }
            if (!text2) {
              text2 = /\bMinefield\b/i.test(tmp9) && "a";
              const obj46 = /\bMinefield\b/i;
            }
            const obj44 = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i;
          }
          text2 = null;
          if (text2) {
            str = "alpha";
            if (obj47.test(text2)) {
              str = "beta";
            }
            text2 = joined;
            text2 = globalThis;
            let _RegExp = RegExp;
            str = "\\+?$";
            str = "";
            str = "beta";
            text2 = joined.replace(RegExp(`${tmp}\\+?$`), "");
            if ("beta" === str) {
              str6 = str7;
            }
            text2 = text2 + str6;
            text2 = /\d+\+?/.exec(text2) || "";
            joined = text2 + text2;
            text2 = str;
            obj47 = /b/i;
            const obj48 = /\d+\+?/;
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
                    joined = items11[1].slice(0, -1);
                    str = "alpha";
                    const arr19 = items11[1];
                  }
                  text2 = /\bChrome\/([\d.]+)/i.exec(tmp9) || 0;
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
                          if (obj92.test(num20)) {
                            str = "";
                          }
                          obj92 = /[.+]/;
                        }
                        text2 = num20 + str;
                        str = " ";
                        items12[1] = `${tmp} ${tmp}`;
                      }
                      text2 = text1;
                      text2 = "Safari" == text1;
                      if (text2) {
                        text2 = joined;
                        text2 = !joined;
                        if (joined) {
                          const _parseInt = parseInt;
                          text2 = joined;
                          text2 = parseInt(joined) > 45;
                        }
                      }
                      arr16 = items12;
                      text2 = str;
                      if (text2) {
                        joined = text2;
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
                      let num37 = 1;
                      if (text2 >= 530) {
                        let num39 = 2;
                        if (text2 >= 532) {
                          let num41 = 3;
                          if (text2 >= 532.05) {
                            let num43 = 4;
                            if (text2 >= 533) {
                              let num45 = 5;
                              if (text2 >= 534.03) {
                                let num47 = 6;
                                if (text2 >= 534.07) {
                                  let num49 = 7;
                                  if (text2 >= 534.1) {
                                    let num51 = 8;
                                    if (text2 >= 534.13) {
                                      let num53 = 9;
                                      if (text2 >= 534.16) {
                                        let num55 = 10;
                                        if (text2 >= 534.24) {
                                          let num57 = 11;
                                          if (text2 >= 534.3) {
                                            let num59 = 12;
                                            if (text2 >= 535.01) {
                                              str = "13+";
                                              if (text2 >= 535.02) {
                                                let num62 = 15;
                                                if (text2 >= 535.07) {
                                                  let num64 = 16;
                                                  if (text2 >= 535.11) {
                                                    let num66 = 17;
                                                    if (text2 >= 535.19) {
                                                      let num68 = 18;
                                                      if (text2 >= 536.05) {
                                                        let num70 = 19;
                                                        if (text2 >= 536.1) {
                                                          let num72 = 20;
                                                          if (text2 >= 537.01) {
                                                            str = "21+";
                                                            if (text2 >= 537.11) {
                                                              let num75 = 23;
                                                              if (text2 >= 537.13) {
                                                                let num77 = 24;
                                                                if (text2 >= 537.18) {
                                                                  let num79 = 25;
                                                                  if (text2 >= 537.24) {
                                                                    let num80 = 26;
                                                                    if (text2 >= 537.36) {
                                                                      str = "Blink";
                                                                      str = "28";
                                                                      if ("Blink" != items12) {
                                                                        str = "27";
                                                                      }
                                                                      num80 = str;
                                                                    }
                                                                    num79 = num80;
                                                                  }
                                                                  num77 = num79;
                                                                }
                                                                num75 = num77;
                                                              }
                                                              str = num75;
                                                            }
                                                            num72 = str;
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
                                                str = num62;
                                              }
                                              num59 = str;
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
                      text2 = num37;
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
                                  let num35 = "8";
                                  if (text2 < 601) {
                                    num35 = 8;
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
                  const obj68 = /\bChrome\/([\d.]+)/i;
                }
                text2 = joined;
                text2 = joined != items11[1];
                if (text2) {
                  text2 = joined;
                  text2 = /\bSafari\/([\d.]+\+?)/i.exec(tmp9) || 0;
                  text2 = text2[1];
                  items11[2] = text2;
                  text2 = joined != text2;
                  const obj67 = /\bSafari\/([\d.]+\+?)/i;
                }
                str = text2;
                if (!text2) {
                  joined = null;
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
                  let _RegExp3 = RegExp;
                  str = " *";
                  str = "$";
                  str = "";
                  text2 = str.replace(RegExp(` *${tmp}$`), "");
                }
                const obj69 = /\bzbov|zvav$/;
              }
              text2 = text1;
              text2 = "Safari" == text1;
              if (text2) {
                text2 = arr16;
                if (arr16) {
                  text2 = arr16[1];
                }
                text2 = /\bChrome\b/.exec(text2);
                const obj70 = /\bChrome\b/;
              }
              if (text2) {
                str = "desktop mode";
                text2 = items6.unshift("desktop mode");
                text1 = "Chrome Mobile";
                joined = null;
                str = null;
                str = text2;
                if (obj71.test(str)) {
                  str = "iOS 4.3+";
                  str = "Apple";
                }
                text2 = str;
                obj71 = /\bOS X\b/;
              }
              text2 = joined;
              if (joined) {
                text2 = joined;
                text2 = /[\d.]+$/.exec(str);
                text2 = 0 == joined.indexOf(text2);
                const obj72 = /[\d.]+$/;
              }
              if (text2) {
                str = "/";
                str = "-";
                text2 = tmp9.indexOf(`/${tmp}-`) > -1;
              }
              if (text2) {
                text2 = trim;
                str = "";
                str = trim(str.replace(text2, ""));
              }
              text2 = arr16;
              if (arr16) {
                text2 = text1;
                text2 = !/\b(?:Avant|Nook)\b/.test(text1);
                const obj73 = /\b(?:Avant|Nook)\b/;
              }
              if (text2) {
                text2 = text1;
                text2 = /Browser|Lunascape|Maxthon/.test(text1);
                if (!text2) {
                  text2 = text1;
                  text2 = "Safari" != text1;
                  if (text2) {
                    text2 = /^iOS/.test(str);
                    const obj75 = /^iOS/;
                  }
                  if (text2) {
                    text2 = /\bSafari\b/.test(arr16[1]);
                    const obj76 = /\bSafari\b/;
                  }
                }
                if (!text2) {
                  text2 = text1;
                  text2 = /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(text1) && arr16[1];
                  const obj77 = /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/;
                }
                const obj74 = /Browser|Lunascape|Maxthon/;
              }
              if (text2) {
                text2 = arr16[arr16.length - 1];
              }
              if (text2) {
                text2 = items6.push(text2);
              }
              let arr20 = items6;
              if (items6.length) {
                str = "; ";
                str = "(";
                const items13 = [];
                str = ")";
                items13[0] = `(${arr8.join("; ")})`;
                arr20 = items13;
              }
              if (text2) {
                text2 = arr13;
              }
              if (text2) {
                text2 = arr13.indexOf(text2) < 0;
              }
              if (text2) {
                str = "on ";
                text2 = arr20.push(`on ${tmp}`);
              }
              if (arr13) {
                str = "on ";
                if (obj78.test(arr20[arr20.length - 1])) {
                  str = "";
                }
                text2 = arr20.push(str + arr13);
                obj78 = /^on /;
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
                const obj79 = / ([\d.+]+)$/;
              }
              text2 = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(text2);
              if (text2) {
                if (!obj82.test(text2)) {
                  if (text2) {
                    text2.architecture = 64;
                    str = text2.family;
                    text2 = globalThis;
                    let _RegExp4 = RegExp;
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
                        const obj84 = /\w(?:86|32)$/;
                      }
                      if (isMatch4) {
                        isMatch4 = !/\bWin64; x64\b/i.test(tmp9);
                        const obj85 = /\bWin64; x64\b/i;
                      }
                      text2 = isMatch4;
                    }
                    const obj83 = /\bWOW64\b/i;
                  }
                  if (text2) {
                    str = "32-bit";
                    text2 = arr20.unshift("32-bit");
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
                obj1.manufacturer = text2;
                text2 = text1;
                obj1.name = text1;
                obj1.prerelease = text2;
                obj1.product = arr13;
                obj1.ua = tmp9;
                if (text1) {
                  text2 = joined;
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
                  text2 = arr20.unshift(joined);
                }
                if (obj1.name) {
                  text2 = text1;
                  text2 = arr20.unshift(text1);
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
                  if (arr20.length) {
                    str = " ";
                    obj1.description = arr20.join(" ");
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
                  text2 = arr20.push(text2);
                }
                obj82 = /\bi686\b/i;
              }
              if (text2) {
                text2 = /^OS X/.test(text2.family);
                const obj86 = /^OS X/;
              }
              if (text2) {
                text2 = text1;
                text2 = "Chrome" == text1;
              }
              if (text2) {
                text2 = globalThis;
                const _parseFloat4 = parseFloat;
                text2 = joined;
                text2 = parseFloat(joined) >= 39;
              }
              if (text2) {
                text2.architecture = 64;
              }
              const obj49 = /\b(?:Android|Firefox OS)\b/;
              const obj66 = /\bAppleWebKit\/([\d.]+\+?)/i;
              const obj81 = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i;
            }
            text2 = text1;
            str = "Maxthon";
            if ("Maxthon" == text1) {
              text2 = joined;
              if (joined) {
                text2 = joined;
                str = ".x";
                joined = joined.replace(/\.[\d.]+/, ".x");
                str = text2;
                text2 = manufacturer;
                arr13 = str81;
                items12 = text2;
              }
            }
            if (obj50.test(str81)) {
              str = "Xbox 360";
              if ("Xbox 360" == str81) {
                text2 = null;
              }
              text2 = "Xbox 360" == str81;
              if (text2) {
                text2 = /\bIEMobile\b/.test(tmp9);
                const obj65 = /\bIEMobile\b/;
              }
              str = text2;
              text2 = manufacturer;
              arr13 = str81;
              items12 = text2;
              if (text2) {
                str = "mobile mode";
                text2 = items6.unshift("mobile mode");
                str = text2;
                text2 = manufacturer;
                arr13 = str81;
                items12 = text2;
              }
            } else {
              text2 = text1;
              if (obj51.test(text1)) {
                str = "Windows CE";
                if ("Windows CE" != text2) {
                  const obj91 = /Mobi/i;
                }
                text2 = text1;
                str = " Mobile";
                text1 = `${tmp29} Mobile`;
                str = text2;
                text2 = manufacturer;
                arr13 = str81;
                items12 = text2;
              } else {
                text2 = text1;
                if (`${tmp29} Mobile`) {
                  if (!str81) {
                    text2 = text1;
                    const obj52 = /Browser|Mobi/;
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
                    arr13 = str81;
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
              if (obj53.test(str81)) {
                text2 = globalThis;
                let _RegExp2 = RegExp;
                str = " *";
                str = "/([.\\d]+)";
                str = "i";
                text2 = RegExp(`${str81.replace(/ +/g, " *")}/([.\\d]+)`, "i").exec(tmp9) || 0;
                text2 = text2[1] || joined;
                if (text2) {
                  const items14 = [text2, /BB10/.test(tmp9)];
                  str = "Device Software";
                  str = manufacturer;
                  text2 = str81;
                  if (items14[1]) {
                    closure_2 = null;
                    str = "BlackBerry";
                    text2 = null;
                    str = "BlackBerry";
                  }
                  str = " ";
                  str = `${str} ${arr15[0]}`;
                  joined = null;
                  text2 = str;
                  arr13 = text2;
                  items12 = text2;
                  const obj64 = /BB10/;
                }
                let RegExpResult = RegExp(`${str81.replace(/ +/g, " *")}/([.\\d]+)`, "i");
              } else {
                const obj54 = /\bBB10\b/;
              }
              const self = this;
              text2 = forOwn;
              let name = this != forOwn && "Wii" != str81;
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
                    const obj57 = /\b(?:MSIE|Firefox)\b/i;
                  }
                  const obj56 = /Opera/;
                }
                if (!text2) {
                  text2 = text1;
                  text2 = "Firefox" == text1;
                  if (text2) {
                    text2 = /\bOS X (?:\d+\.){2,}/.test(text2);
                    const obj58 = /\bOS X (?:\d+\.){2,}/;
                  }
                }
                if (!text2) {
                  text2 = text1;
                  text2 = "IE" == text1;
                  if (text2) {
                    if (text2) {
                      text2 = !/^Win/.test(text2);
                      const obj59 = /^Win/;
                    }
                    if (text2) {
                      text2 = joined;
                      text2 = joined > 5.5;
                    }
                    if (!text2) {
                      text2 = /\bWindows XP\b/.test(text2);
                      if (text2) {
                        text2 = joined;
                        text2 = joined > 8;
                      }
                      const obj60 = /\bWindows XP\b/;
                    }
                    if (!text2) {
                      text2 = joined;
                      text2 = 8 == joined;
                      if (text2) {
                        text2 = !/\bTrident\b/.test(tmp9);
                        const obj61 = /\bTrident\b/;
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
                arr13 = str81;
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
                    const obj63 = /\bIE\b/;
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
                    if (obj62.test(`mask${tmp}`)) {
                      text2 = null;
                    }
                    if (!isMatch4) {
                      joined = null;
                    }
                    obj62 = /\bIE\b/;
                  }
                  items12 = ["Presto"];
                  text2 = items6.push(text2);
                  str = text2;
                  text2 = manufacturer;
                  arr13 = str81;
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
              obj51 = /^(?:Chrome|IE|Opera)$/;
              obj53 = /\bBlackBerry\b/;
            }
            obj50 = /\bXbox\b/i;
          }
          text1 = "Firefox Mobile";
          str = text2;
          text2 = manufacturer;
          arr13 = str81;
          items12 = text2;
          const obj37 = /; *(?:XBLWP|ZuneWP)(\d+)/i;
          const tmp85 = /; *(?:XBLWP|ZuneWP)(\d+)/i.exec(tmp9) || 0;
        }
        if (obj38.test(tmp9)) {
          text1 = "IE Mobile";
          str = "desktop mode";
          arr = items6.unshift("desktop mode");
          str = "Windows Phone 8.x";
          str = "Windows Phone 8.x";
          tmp90 = str;
          if (!joined) {
            joined = /\brv:([\d.]+)/.exec(tmp9) || 0[1];
            str = "Windows Phone 8.x";
            tmp90 = str;
            const obj40 = /\brv:([\d.]+)/;
            const tmp99 = /\brv:([\d.]+)/.exec(tmp9) || 0;
          }
        } else {
          let match1 = "IE" != text1 && "Trident" == tmp83;
          let tmp89 = str;
          if (match1) {
            match1 = /\brv:([\d.]+)/.exec(tmp9);
            tmp89 = match1;
            const obj39 = /\brv:([\d.]+)/;
          }
          str = str55;
          tmp90 = tmp89;
          if (match1) {
            if (text1) {
              str = "identifying as ";
              str = "";
              const text3 = `identifying as ${tmp29}`;
              if (joined) {
                str = " ";
                str = ` ${tmp27}`;
              }
              items6.push(text3 + str);
            }
            text1 = "IE";
            joined = tmp89[1];
            str = str55;
            tmp90 = tmp89;
          }
        }
        obj10 = /\blike iPhone OS\b/;
        obj38 = /\bWPDesktop\b/i;
      }
      if (obj11.test(tmp39)) {
        if (!text1) {
          text1 = "Safari";
        }
        const match2 = / OS ([\d_]+)/i.exec(tmp9);
        let str95 = "";
        if (match2) {
          str95 = ` ${match2[1].replace(/_/g, ".")}`;
          const str96 = match2[1];
        }
        str55 = `iOS${str95}`;
        manufacturer = tmp31;
        str81 = tmp39;
        const obj30 = / OS ([\d_]+)/i;
      } else if ("Konqueror" != text1) {
        if (tmp31) {
          if ("Google" != tmp31) {
            if (!obj13.test(text1)) {
              const obj15 = /\bVita\b/;
            } else {
              const obj14 = /\bMobile Safari\b/i;
            }
            obj13 = /Chrome/;
          }
          text1 = "Android Browser";
          let str94 = "Android";
          if (obj29.test(tmp32)) {
            str94 = tmp32;
          }
          str55 = str94;
          manufacturer = tmp31;
          str81 = tmp39;
          obj29 = /\bAndroid\b/;
        }
        if (obj16.test(tmp32)) {
          if (obj17.test(text1)) {
            const obj18 = /\bVersion\//i;
          }
          obj17 = /^Chrome/;
        }
        if ("Silk" == text1) {
          let str91 = tmp32;
          if (!obj27.test(tmp9)) {
            items6.unshift("desktop mode");
            str91 = "Android";
          }
          str55 = str91;
          manufacturer = tmp31;
          str81 = tmp39;
          if (obj28.test(tmp9)) {
            items6.unshift("accelerated");
            str55 = str91;
            manufacturer = tmp31;
            str81 = tmp39;
          }
          obj27 = /\bMobi/i;
          obj28 = /Accelerated *= *true/i;
        } else {
          text2 = text1;
          let tmp50 = match;
          if ("PaleMoon" == text1) {
            const match3 = /\bFirefox\/([\d.]+)\b/.exec(tmp9);
            tmp50 = match3;
            if (match3) {
              items6.push(`identifying as Firefox ${tmp49[1]}`);
              str55 = tmp32;
              manufacturer = tmp31;
              str81 = tmp39;
            }
            const obj19 = /\bFirefox\/([\d.]+)\b/;
          }
          if ("Firefox" == text1) {
            const match4 = /\b(Mobile|Tablet|TV)\b/i.exec(tmp9);
            tmp50 = match4;
            if (match4) {
              let str89 = tmp32;
              if (!tmp32) {
                str89 = "Firefox OS";
              }
              str55 = str89;
              manufacturer = tmp31;
              str81 = tmp39;
              if (!tmp39) {
                closure_2 = tmp67;
                str55 = str89;
                manufacturer = tmp31;
                str81 = tmp67;
              }
            }
            const obj20 = /\b(Mobile|Tablet|TV)\b/i;
          }
          if (text1) {
            const isMatch5 = /\bMinefield\b/i.test(tmp9);
            let match5 = !isMatch5;
            if (!isMatch5) {
              match5 = /\b(?:Firefox|Safari)\b/.exec(text1);
              const obj22 = /\b(?:Firefox|Safari)\b/;
            }
            tmp50 = match5;
            if (!match5) {
              if ("Electron" == text1) {
                match5 = /\bChrome\/([\d.]+)\b/.exec(tmp9) || 0[1];
                const obj23 = /\bChrome\/([\d.]+)\b/;
                const tmp59 = /\bChrome\/([\d.]+)\b/.exec(tmp9) || 0;
              }
              str55 = tmp32;
              manufacturer = tmp31;
              str81 = tmp39;
              if ("Electron" == text1) {
                items6.push(`Chromium ${tmp55}`);
                str55 = tmp32;
                manufacturer = tmp31;
                str81 = tmp39;
              }
            }
            const obj21 = /\bMinefield\b/i;
          }
          let isMatch6 = text1;
          if (text1) {
            isMatch6 = !tmp39;
          }
          if (isMatch6) {
            isMatch6 = /[\/,]|^[^(]+?\)/.test(tmp9.slice(tmp9.indexOf(`${tmp50}/`) + 8));
            const obj24 = /[\/,]|^[^(]+?\)/;
          }
          if (isMatch6) {
            text1 = null;
          }
          let tmp62 = tmp39;
          if (!tmp39) {
            tmp62 = tmp31;
          }
          if (!tmp62) {
            tmp62 = tmp32;
          }
          let tmp63 = tmp62;
          if (tmp62) {
            let isMatch7 = tmp39;
            if (!tmp39) {
              isMatch7 = tmp31;
            }
            if (!isMatch7) {
              isMatch7 = /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(tmp32);
              const obj25 = /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/;
            }
            tmp63 = isMatch7;
          }
          str55 = tmp32;
          manufacturer = tmp31;
          str81 = tmp39;
          if (tmp63) {
            if (obj26.test(tmp32)) {
              tmp62 = tmp32;
            }
            text1 = `${tmp66(tmp62)} Browser`;
            str55 = tmp32;
            manufacturer = tmp31;
            str81 = tmp39;
            obj26 = /\bAndroid\b/;
          }
        }
        obj16 = /\bAndroid\b/;
      } else {
        manufacturer = tmp31;
        str81 = tmp39;
        const obj12 = /buntu/i;
      }
      obj11 = /^iP/;
      const obj7 = /\bGoogle TV\b/;
      obj8 = /\bSimulator\b/i;
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