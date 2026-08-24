// === Module 6812: safelyPartiallyDecodeURIComponent ===

// Module 6812 (safelyPartiallyDecodeURIComponent)
import set from "set" /* 2 */;
import isDiscordProxiedAssetUrlDefault from "isDiscordProxiedAssetUrl" /* 1487 */;

function safelyPartiallyDecodeURIComponent(hash) {
  let substr;
  const result = isDiscordProxiedAssetUrlDefault.safeDecodeURIComponent(hash);
  if (null == result) {
    return hash;
  } else {
    let str3 = "";
    let str = result;
    let str2 = hash;
    let str4 = "";
    if (hash.length > 0) {
      do {
        let codePointAtResult = str2.codePointAt(0);
        let codePointAtResult1 = str.codePointAt(0);
        let tmp4 = str;
        let tmp5 = str2;
        let tmp6 = str3;
        if (codePointAtResult !== codePointAtResult1) {
          let _String2 = String;
          let fromCodePointResult = String.fromCodePoint(codePointAtResult1);
          let _encodeURIComponent = encodeURIComponent;
          let encodeURIComponentResult = encodeURIComponent(fromCodePointResult);
          let num = 3;
          if (encodeURIComponentResult !== fromCodePointResult) {
            num = encodeURIComponentResult.length;
          }
          if (codePointAtResult1 >= 0) {
            if (codePointAtResult1 < 128) {
              let tmp19 = table;
              let tmp10 = 1 !== table[codePointAtResult1];
              let tmp20 = fromCodePointResult;
              if (tmp10) {
                tmp20 = encodeURIComponentResult;
              }
              let sum = str3 + tmp20;
              substr = str2.substring(num);
              let substr1 = str.substring(fromCodePointResult.length);
            }
          }
          tmp10 = 8206 === codePointAtResult1 || 8207 === codePointAtResult1 || 8234 === codePointAtResult1 || 8235 === codePointAtResult1 || 8236 === codePointAtResult1 || 8237 === codePointAtResult1 || 8238 === codePointAtResult1 || 1564 === codePointAtResult1 || 8294 === codePointAtResult1 || 8295 === codePointAtResult1 || 8296 === codePointAtResult1 || 8297 === codePointAtResult1 || 128271 === codePointAtResult1 || 128272 === codePointAtResult1 || 128274 === codePointAtResult1 || 128275 === codePointAtResult1 || 133 === codePointAtResult1 || 160 === codePointAtResult1 || 5760 === codePointAtResult1 || 8192 === codePointAtResult1 || 8193 === codePointAtResult1 || 8194 === codePointAtResult1 || 8195 === codePointAtResult1 || 8196 === codePointAtResult1 || 8197 === codePointAtResult1 || 8198 === codePointAtResult1 || 8199 === codePointAtResult1 || 8200 === codePointAtResult1 || 8201 === codePointAtResult1 || 8202 === codePointAtResult1 || 8232 === codePointAtResult1 || 8233 === codePointAtResult1 || 8239 === codePointAtResult1 || 8287 === codePointAtResult1 || 12288 === codePointAtResult1 || 10240 === codePointAtResult1 || 173 === codePointAtResult1 || 847 === codePointAtResult1;
          if (!tmp10) {
            let tmp11 = codePointAtResult1 >= 1536 && codePointAtResult1 <= 1541;
            tmp10 = tmp11;
          }
          if (!tmp10) {
            tmp10 = 1757 === codePointAtResult1;
          }
          if (!tmp10) {
            tmp10 = 1807 === codePointAtResult1;
          }
          if (!tmp10) {
            tmp10 = 2274 === codePointAtResult1;
          }
          if (!tmp10) {
            tmp10 = 4447 === codePointAtResult1;
          }
          if (!tmp10) {
            tmp10 = 4448 === codePointAtResult1;
          }
          if (!tmp10) {
            tmp10 = 6068 === codePointAtResult1;
          }
          if (!tmp10) {
            tmp10 = 6069 === codePointAtResult1;
          }
          if (!tmp10) {
            tmp10 = 6155 === codePointAtResult1;
          }
          if (!tmp10) {
            tmp10 = 6156 === codePointAtResult1;
          }
          if (!tmp10) {
            tmp10 = 6157 === codePointAtResult1;
          }
          if (!tmp10) {
            tmp10 = 6158 === codePointAtResult1;
          }
          if (!tmp10) {
            tmp10 = 8203 === codePointAtResult1;
          }
          if (!tmp10) {
            tmp10 = 8204 === codePointAtResult1;
          }
          if (!tmp10) {
            tmp10 = 8205 === codePointAtResult1;
          }
          if (!tmp10) {
            tmp10 = 8288 === codePointAtResult1;
          }
          if (!tmp10) {
            tmp10 = 8289 === codePointAtResult1;
          }
          if (!tmp10) {
            tmp10 = 8290 === codePointAtResult1;
          }
          if (!tmp10) {
            tmp10 = 8291 === codePointAtResult1;
          }
          if (!tmp10) {
            tmp10 = 8292 === codePointAtResult1;
          }
          if (!tmp10) {
            tmp10 = 8293 === codePointAtResult1;
          }
          if (!tmp10) {
            let tmp12 = codePointAtResult1 >= 8298 && codePointAtResult1 <= 8303;
            tmp10 = tmp12;
          }
          if (!tmp10) {
            tmp10 = 12644 === codePointAtResult1;
          }
          if (!tmp10) {
            let tmp13 = codePointAtResult1 >= 65520 && codePointAtResult1 <= 65528;
            tmp10 = tmp13;
          }
          if (!tmp10) {
            let tmp14 = codePointAtResult1 >= 65024 && codePointAtResult1 <= 65039;
            tmp10 = tmp14;
          }
          if (!tmp10) {
            tmp10 = 65279 === codePointAtResult1;
          }
          if (!tmp10) {
            tmp10 = 65440 === codePointAtResult1;
          }
          if (!tmp10) {
            tmp10 = 65529 === codePointAtResult1;
          }
          if (!tmp10) {
            tmp10 = 65530 === codePointAtResult1;
          }
          if (!tmp10) {
            tmp10 = 65531 === codePointAtResult1;
          }
          if (!tmp10) {
            tmp10 = 69821 === codePointAtResult1;
          }
          if (!tmp10) {
            tmp10 = 69837 === codePointAtResult1;
          }
          if (!tmp10) {
            let tmp15 = codePointAtResult1 >= 78896 && codePointAtResult1 <= 78904;
            tmp10 = tmp15;
          }
          if (!tmp10) {
            let tmp16 = codePointAtResult1 >= 113824 && codePointAtResult1 <= 113827;
            tmp10 = tmp16;
          }
          if (!tmp10) {
            let tmp17 = codePointAtResult1 >= 119155 && codePointAtResult1 <= 119162;
            tmp10 = tmp17;
          }
          if (!tmp10) {
            let tmp18 = codePointAtResult1 >= 917504 && codePointAtResult1 <= 921599;
            tmp10 = tmp18;
          }
        } else {
          let _String = String;
          let fromCodePointResult1 = String.fromCodePoint(codePointAtResult);
          sum = str3 + fromCodePointResult1;
          let substr2 = str2.substring(fromCodePointResult1.length);
          substr1 = str.substring(fromCodePointResult1.length);
          substr = substr2;
        }
        str = substr1;
        str2 = substr;
        str3 = sum;
        str4 = sum;
      } while (substr.length > 0);
    }
    return str4;
  }
  const obj = isDiscordProxiedAssetUrlDefault;
}
const items = ["\u034F", "\u17B4", "\u17B5", "\u1160", "\u3164", "\uFFA0"];
const regExp = new RegExp("" + /(?:[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F])|\u2028|\u2029|[\0-\t\x0B-\x1F\x7F-\x9F]|[\xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/g.source + "|" + items.join("|"), "gu");
const regExp1 = new RegExp("" + /(?:[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F])|\u2028|\u2029|[\0-\x08\x0B-\x1F\x7F-\x9F]|[\xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/g.source + "|" + items.join("|"), "gu");
let obj = { character: "h", matcher: null };
const items1 = ["H", "\u04BB", "\u0570", "\u13C2", "\u210E", "\u{1D421}", "\u{1D489}", "\u{1D4BD}", "\u{1D4F1}", "\u{1D525}", "\u{1D559}", "\u{1D58D}", "\u{1D5C1}", "\u{1D5F5}", "\u{1D629}", "\u{1D65D}", "\u{1D691}", "\uFF48"];
const regExp2 = new RegExp(items1.join("|"), "gu");
obj[1] = regExp2;
const items2 = [obj, , , , , ];
obj = { character: "t", matcher: null };
const items3 = ["T", "\u{1D42D}", "\u{1D461}", "\u{1D495}", "\u{1D4C9}", "\u{1D4FD}", "\u{1D531}", "\u{1D565}", "\u{1D599}", "\u{1D5CD}", "\u{1D601}", "\u{1D635}", "\u{1D669}", "\u{1D69D}"];
const regExp3 = new RegExp(items3.join("|"), "gu");
obj[1] = regExp3;
items2[1] = obj;
obj = { character: "p", matcher: null };
const items4 = ["P", "\u03C1", "\u03F1", "\u0440", "\u2374", "\u2CA3", "\u{1D429}", "\u{1D45D}", "\u{1D491}", "\u{1D4C5}", "\u{1D4F9}", "\u{1D52D}", "\u{1D561}", "\u{1D595}", "\u{1D5C9}", "\u{1D5FD}", "\u{1D631}", "\u{1D665}", "\u{1D699}", "\u{1D6D2}", "\u{1D6E0}", "\u{1D70C}", "\u{1D71A}", "\u{1D746}", "\u{1D754}", "\u{1D780}", "\u{1D78E}", "\u{1D7BA}", "\u{1D7C8}", "\uFF50", "\u048F"];
const regExp4 = new RegExp(items4.join("|"), "gu");
obj[1] = regExp4;
items2[2] = obj;
const obj1 = { character: "s", matcher: null };
const items5 = ["S", "\u01BD", "\u0455", "\uA731", "\uABAA", "\u{10448}", "\u{118C1}", "\u{1D42C}", "\u{1D460}", "\u{1D494}", "\u{1D4C8}", "\u{1D4FC}", "\u{1D530}", "\u{1D564}", "\u{1D598}", "\u{1D5CC}", "\u{1D600}", "\u{1D634}", "\u{1D668}", "\u{1D69C}", "\uFF53"];
const regExp5 = new RegExp(items5.join("|"), "gu");
obj1[1] = regExp5;
items2[3] = obj1;
const obj2 = { character: ":", matcher: null };
const items6 = ["\u02D0", "\u02F8", "\u0589", "\u05C3", "\u0703", "\u0704", "\u0903", "\u0A83", "\u16EC", "\u1803", "\u1809", "\u205A", "\u2236", "\uA4FD", "\uA789", "\uFE30", "\uFF1A", ";", "\u037E"];
const regExp6 = new RegExp(items6.join("|"), "gu");
obj2[1] = regExp6;
items2[4] = obj2;
const obj3 = { character: "/", matcher: null };
const items7 = ["\u1735", "\u2041", "\u2044", "\u2215", "\u2571", "\u27CB", "\u29F8", "\u2CC6", "\u2F03", "\u3033", "\u30CE", "\u31D3", "\u4E3F", "\u{1D23A}"];
const regExp7 = new RegExp(items7.join("|"), "gu");
obj3[1] = regExp7;
items2[5] = obj3;
let closure_5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0];
let result = set.fileFinishedImporting("modules/markup/UnicodeSanitizationUtils.tsx");

export const BLANK_CHARACTERS_TO_SANITIZE_REGEX = regExp;
export const BLANK_CHARACTERS_TO_SANITIZE_REGEX_EXCLUDING_TABS = regExp1;
export const sanitizeWhitespace = function sanitizeWhitespace(url) {
  return url.replace(regExp, "");
};
export const sanitizeWhitespaceExcludingTabs = function sanitizeWhitespaceExcludingTabs(str) {
  return str.replace(regExp1, "");
};
export const UNICODE_CONFUSABLES_FOR_URL_DETECTION = items2;
export const sanitizeUnicodeConfusables = function sanitizeUnicodeConfusables(sanitizeWhitespaceResult) {
  closure_0 = sanitizeWhitespaceResult;
  const item = items2.forEach((matcher) => {

  });
  return closure_0;
};
export const safelyMakeUrlHumanReadable = function safelyMakeUrlHumanReadable(origin) {
  let startsWithResult = "null" === origin.origin;
  if (startsWithResult) {
    const pathname = origin.pathname;
    startsWithResult = pathname.startsWith("//");
  }
  if (startsWithResult) {
    let protocol = origin.protocol;
  } else {
    let str3 = "";
    if ("" !== origin.username) {
      str3 = `${origin.username}`;
    }
    let text = str3;
    if ("" !== origin.password) {
      text = `${str3}:${origin.password}`;
    }
    let text1 = text;
    if ("" !== text) {
      text1 = `${tmp2}@`;
    }
    let str8 = "";
    if ("//" === str6.substr(origin.protocol.length, 2)) {
      str8 = "//";
    }
    const _HermesInternal = HermesInternal;
    protocol = "" + origin.protocol + str8 + text1 + origin.host;
    str6 = origin.href;
  }
  const sum = protocol + safelyPartiallyDecodeURIComponent(origin.pathname);
  const sum1 = sum + safelyPartiallyDecodeURIComponent(origin.search);
  return sum1 + safelyPartiallyDecodeURIComponent(origin.hash);
};