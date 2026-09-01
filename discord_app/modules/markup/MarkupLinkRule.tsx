// === Module 4954: validateContentTypes ===

// Module 4954 (validateContentTypes)
import privDefault from "priv" /* 1401 */;
import isDiscordProxiedAssetUrlDefault from "isDiscordProxiedAssetUrl" /* 1486 */;
import tDefault from "t" /* 4192 */;
import getPathsFromURL from "getPathsFromURL" /* 4461 */;
import AST_KEY from "AST_KEY" /* 4949 */;
import safelyPartiallyDecodeURIComponent from "safelyPartiallyDecodeURIComponent" /* 4955 */;
import errorDefault from "error" /* 4956 */;
import closure_3 from "_slicedToArray" /* 32 */;

require = arg1;
function validateContentTypes(content, items, items2) {
  items = items2;
  if (items2 === undefined) {
    items = [];
  }
  let tmp = content;
  if (!Array.isArray(content)) {
    items1 = [content];
    tmp = items1;
  }
  const iter = tmp[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if (undefined !== nextResult) {
      let tmp20 = nextResult;
      if (items.includes(tmp3.type)) {
        let tmp4 = nextResult;
        let tmp5 = require;
        let tmp6 = dependencyMap;
        if (tmp3.type === AST_KEY.AST_KEY.INLINE_CODE) {
          items2 = [];
          let tmp7 = items2;
          let tmp8 = items;
          let num = 0;
          let tmp9 = items2;
          let tmp10 = items;
          let arraySpreadResult = HermesBuiltin.arraySpread(items, HermesBuiltin.arraySpread(items, 0));
          let tmp12 = validateContentTypes;
          let tmp13 = nextResult;
          if (null == validateContentTypes(tmp3.validationChildContent, items2)) {
            let tmp18 = iter;
            iter.return();
            return null;
          }
        }
        let _Array = Array;
        let tmp14 = nextResult;
        if (Array.isArray(tmp3.content)) {
          let tmp15 = validateContentTypes;
          let tmp16 = nextResult;
          if (null == validateContentTypes(tmp3.content, items)) {
            let tmp17 = iter;
            iter.return();
            return null;
          }
        }
        continue;
      }
    }
    let tmp19 = iter;
    iter.return();
    return null;
  }
  return tmp;
}
function getRawText(content) {
  let str = "";
  const iter = content[Symbol.iterator]();
  const nextResult = iter.next();
  for (; iter !== undefined; str = str + tmp2.content) {
    tmp2 = nextResult;
    let type = nextResult.type;
    let tmp3 = require;
    let tmp4 = dependencyMap;
    if (AST_KEY.AST_KEY.TEXT !== type) {
      if (tmp3(4949).AST_KEY.INLINE_CODE !== type) {
        if (tmp3(4949).AST_KEY.CUSTOM_EMOJI === type) {
          let tmp16 = str;
          let tmp17 = nextResult;
          str = `${tmp2.name}`;
        } else if (tmp3(4949).AST_KEY.EMOJI === type) {
          let tmp14 = str;
          let tmp15 = nextResult;
          str = `${tmp2.name}${tmp2.surrogate}`;
        } else if (tmp3(4949).AST_KEY.LINE_BREAK === type) {
          let tmp13 = str;
          str = `${tmp2.name}${tmp2.surrogate}
  `;
        } else {
          if (tmp3(4949).AST_KEY.STRONG !== type) {
            if (tmp3(4949).AST_KEY.ITALICS !== type) {
              if (tmp3(4949).AST_KEY.UNDERLINE !== type) {
                if (tmp3(4949).AST_KEY.STRIKETHROUGH !== type) {
                  if (tmp3(4949).AST_KEY.SPOILER !== type) {
                    if (tmp3(4949).AST_KEY.TIMESTAMP === type) {
                      let tmp9 = str;
                      str = `${tmp2.name}${tmp2.surrogate}
  <timestamp>`;
                    } else {
                      if (tmp3(4949).AST_KEY.BLOCK_QUOTE !== type) {
                        if (tmp3(4949).AST_KEY.LIST !== type) {
                          if (tmp3(4949).AST_KEY.HEADING !== type) {
                            if (tmp3(4949).AST_KEY.SUBTEXT !== type) {
                              let tmp3Result = tmp3(1471);
                              let tmp5 = nextResult;
                              let assertNeverResult = tmp3Result.assertNever(tmp2.type);
                            }
                          }
                        }
                      }
                      let tmp7 = str;
                      let tmp8 = nextResult;
                      let _HermesInternal = HermesInternal;
                      str = str + "<" + tmp2.type + "Content>";
                    }
                  }
                }
              }
            }
          }
          let tmp10 = str;
          let tmp11 = getRawText;
          let tmp12 = nextResult;
          str = str + getRawText(tmp2.content);
        }
      }
      continue;
    }
    let tmp18 = str;
    let tmp19 = nextResult;
  }
  return str;
}
function isSuspiciousUrl(url) {
  let obj = getPathsFromURL;
  if (obj.isSuspiciousCodedLink(url)) {
    return true;
  } else {
    let value = store.get(url);
    if (null == value) {
      let tmpResult = tmp(4955);
      const sanitizeWhitespaceResult = tmpResult.sanitizeWhitespace(url);
      obj = { whitespaceSanitized: null, fullySanitized: null };
      obj[0] = sanitizeWhitespaceResult;
      tmpResult = tmp(4955);
      obj[1] = tmpResult.sanitizeUnicodeConfusables(sanitizeWhitespaceResult);
      const result = obj2.set(url, obj);
      value = obj;
    }
    if (value.whitespaceSanitized !== url) {
      return true;
    } else {
      const toURLSafeResult = isDiscordProxiedAssetUrlDefault.toURLSafe(url);
      if (null == toURLSafeResult) {
        return true;
      } else {
        if ("http:" !== toURLSafeResult.protocol) {
          if ("https:" !== toURLSafeResult.protocol) {
            return false;
          }
        }
        const parts = url.split("/");
        let tmp7 = parts.length < 3;
        if (!tmp7) {
          let tmp8 = "" !== parts[1];
          if (!tmp8) {
            tmp8 = tmp9(1486).safeDecodeURIComponent(parts[2]) !== parts[2];
            const tmp9Result = tmp9(1486);
          }
          tmp7 = tmp8;
        }
        return tmp7;
      }
      const obj7 = isDiscordProxiedAssetUrlDefault;
      tmp9 = importDefault;
    }
    obj2 = store;
  }
}
function punycodeLink(url) {
  try {
    if (isSuspiciousUrl(url)) {
      const _Error3 = Error;
      const _JSON = JSON;
      error = new Error("Rejected due to suspicious characters in URL: " + JSON.stringify(url));
      throw error;
    } else {
      const _URL = URL;
      const uRL = new URL(url);
      let str = uRL.protocol;
      if (str == null) {
        str = "";
      }
      if (items.includes(str.toLowerCase())) {
        if ("http:" === tmp11) {
          const _Error2 = Error;
          const error1 = new Error("no hostname");
          throw error1;
        }
        let obj = errorDefault;
        tmp9.hostname = obj.toASCII(tmp9.hostname.toLowerCase());
        tmp9.username = "";
        tmp9.password = "";
        obj = { target: null, displayTarget: null };
        obj[0] = safelyPartiallyDecodeURIComponent.safelyMakeUrlHumanReadable(tmp9);
        const obj2 = safelyPartiallyDecodeURIComponent;
        const str6 = tmp9.hostname;
        obj[1] = safelyPartiallyDecodeURIComponent.safelyMakeUrlHumanReadable(tmp9);
        return obj;
      } else {
        const _Error = Error;
        const error2 = new Error("Provided protocol is not allowed: " + tmp11);
        throw error2;
      }
    }
  } catch (err) {
    return null;
  }
}
let closure_4 = new privDefault({ max: 50 });
let items = ["http:", "https:", "discord:", "tel:", "sms:", "mailto:"];
let items1 = [require("AST_KEY").AST_KEY.TEXT, require("AST_KEY").AST_KEY.UNDERLINE, require("AST_KEY").AST_KEY.STRONG, require("AST_KEY").AST_KEY.ITALICS, require("AST_KEY").AST_KEY.STRIKETHROUGH, require("AST_KEY").AST_KEY.INLINE_CODE, require("AST_KEY").AST_KEY.SPOILER, require("AST_KEY").AST_KEY.LINE_BREAK, require("AST_KEY").AST_KEY.TIMESTAMP];
let items2 = [...items1, require("AST_KEY").AST_KEY.EMOJI, require("AST_KEY").AST_KEY.CUSTOM_EMOJI];
let items3 = [require("AST_KEY").AST_KEY.LIST, require("AST_KEY").AST_KEY.HEADING, require("AST_KEY").AST_KEY.BLOCK_QUOTE, require("AST_KEY").AST_KEY.SUBTEXT];
const items4 = [require("AST_KEY").AST_KEY.TEXT];
const items5 = [require("AST_KEY").AST_KEY.UNDERLINE, require("AST_KEY").AST_KEY.STRONG, require("AST_KEY").AST_KEY.ITALICS, require("AST_KEY").AST_KEY.STRIKETHROUGH, require("AST_KEY").AST_KEY.INLINE_CODE, require("AST_KEY").AST_KEY.SPOILER, require("AST_KEY").AST_KEY.LINE_BREAK, require("AST_KEY").AST_KEY.TIMESTAMP, require("AST_KEY").AST_KEY.EMOJI, require("AST_KEY").AST_KEY.CUSTOM_EMOJI, require("AST_KEY").AST_KEY.LIST, require("AST_KEY").AST_KEY.HEADING, require("AST_KEY").AST_KEY.BLOCK_QUOTE, require("AST_KEY").AST_KEY.SUBTEXT];
let obj = {};
let merged = Object.assign(tDefault.defaultRules.link);
obj.match = function match(arr, allowLinks) {
  if (allowLinks.allowLinks) {
    if (-1 === arr.indexOf("](")) {
      return null;
    } else {
      let num4 = 0;
      let num7 = 0;
      let num5 = 0;
      let num6 = 0;
      if (0 < arr.length) {
        while (true) {
          let tmp3 = arr[num4];
          let tmp4 = num4;
          let tmp5 = num7;
          let tmp6 = num5;
          let tmp7 = num6;
          let num2 = 0;
          if (2 <= num6) {
            num2 = num7 + 1;
            if (100 < num2) {
              break;
            }
          }
          let num3 = 0;
          let tmp8 = num6;
          if (")" !== tmp3) {
            if ("[" === tmp3) {
              let sum = num6 + 1;
              if (10 < sum) {
                let tmp14 = null;
                return null;
              }
            } else if ("]" === tmp3) {
              sum = num6;
              if (0 < num6) {
                sum = num6 - 1;
              }
            } else {
              sum = num6;
              num3 = num5;
              tmp8 = num6;
            }
            num3 = num5 + 1;
            tmp8 = sum;
            if (200 < num3) {
              let tmp13 = null;
              return null;
            }
          }
          num4 = num4 + 1;
          num5 = num3;
          num6 = tmp8;
          num7 = num2;
        }
        return null;
      }
      return tDefault.defaultRules.link.match(arr, allowLinks, arg2);
    }
  } else {
    return null;
  }
};
obj.parse = function parse(arg0, rules, allowEmojiLinks) {
  [tmp2, tmp3, tmp4, tmp5] = callback(arg0, 4);
  if (isSuspiciousUrl(tmp4)) {
    let obj = { type: null, content: null };
    obj[0] = AST_KEY.AST_KEY.TEXT;
    obj[1] = tmp2;
    return obj;
  } else {
    obj = store;
    let value = store.get(tmp4);
    if (null == value) {
      obj1 = safelyPartiallyDecodeURIComponent;
      const sanitizeWhitespaceResult = obj1.sanitizeWhitespace(tmp4);
      obj = { whitespaceSanitized: null, fullySanitized: null };
      obj[0] = sanitizeWhitespaceResult;
      let obj3 = safelyPartiallyDecodeURIComponent;
      obj[1] = obj3.sanitizeUnicodeConfusables(sanitizeWhitespaceResult);
      const result = obj.set(tmp4, obj);
      value = obj;
    }
    value = obj.get(tmp3);
    if (null == value) {
      let obj4 = safelyPartiallyDecodeURIComponent;
      const sanitizeWhitespaceResult1 = obj4.sanitizeWhitespace(tmp3);
      obj1 = { whitespaceSanitized: null, fullySanitized: null };
      obj1[0] = sanitizeWhitespaceResult1;
      let obj6 = safelyPartiallyDecodeURIComponent;
      obj1[1] = obj6.sanitizeUnicodeConfusables(sanitizeWhitespaceResult1);
      const result1 = obj.set(tmp3, obj1);
      value = obj1;
    }
    let str = "";
    if (null != tmp5) {
      str = tmp5;
    }
    let value1 = obj.get(str);
    if (null == value1) {
      let obj7 = safelyPartiallyDecodeURIComponent;
      const sanitizeWhitespaceResult2 = obj7.sanitizeWhitespace(str);
      const obj2 = { whitespaceSanitized: null, fullySanitized: null };
      obj2[0] = sanitizeWhitespaceResult2;
      let obj9 = safelyPartiallyDecodeURIComponent;
      obj2[1] = obj9.sanitizeUnicodeConfusables(sanitizeWhitespaceResult2);
      const result2 = obj.set(str, obj2);
      value1 = obj2;
    }
    const trimmed = str3.trim();
    if (0 !== str2.trim().length) {
      if (0 !== trimmed.length) {
        const tmp48 = punycodeLink(tDefault.unescapeUrl(tmp4));
        if (null != tmp48) {
          if (tmp46(4461)(tmp5).length <= 0) {
            obj3 = {};
            const merged = Object.assign(allowEmojiLinks);
            obj3.allowEscape = false;
            obj3.parseInlineCodeChildContent = true;
            const tmp23 = allowEmojiLinks.allowEmojiLinks ? items2 : items1;
            items = [];
            HermesBuiltin.arraySpread(items3, HermesBuiltin.arraySpread(tmp23, 0));
            items1 = [];
            HermesBuiltin.arraySpread(items5, HermesBuiltin.arraySpread(items4, 0));
            items2 = [AST_KEY.AST_KEY.EMOJI];
            const tmp38 = validateContentTypes(rules(str3, obj3), items, items2);
            if (null != tmp38) {
              if (null != validateContentTypes(rules(value1.fullySanitized, obj3), items1)) {
                const str4 = getRawText(tmp38);
                if (0 === str4.trim().length) {
                  obj4 = { type: null, content: null };
                  obj4[0] = tmp37(4949).AST_KEY.TEXT;
                  obj4[1] = tmp2;
                  return obj4;
                } else if (tmp46(4461)(str4).length > 0) {
                  const obj5 = { type: null, content: null };
                  obj5[0] = tmp37(4949).AST_KEY.TEXT;
                  obj5[1] = tmp2;
                  return obj5;
                } else {
                  if (str4 !== str3) {
                    if (tmp46(4461)(str3).length > 0) {
                      obj6 = { type: null, content: null };
                      obj6[0] = tmp37(4949).AST_KEY.TEXT;
                      obj6[1] = tmp2;
                      return obj6;
                    } else {
                      items3 = [];
                      const tmp54 = rules(str4, obj3);
                      items3[HermesBuiltin.arraySpread(items, 0)] = tmp37(4949).AST_KEY.EMOJI;
                      if (null == validateContentTypes(tmp54, items3)) {
                        obj7 = { type: null, content: null };
                        obj7[0] = tmp37(4949).AST_KEY.TEXT;
                        obj7[1] = tmp2;
                        return obj7;
                      }
                      const arraySpreadResult1 = HermesBuiltin.arraySpread(items, 0);
                    }
                  }
                  let tmp46Result = tmp46(12);
                  tmp46Result = tmp46(4192);
                  const obj8 = { content: null, target: null, title: null };
                  obj8[0] = tmp46Result.parserFor(tmp46Result.pick(rules.rules, tmp23))(value.whitespaceSanitized, obj3);
                  obj8[1] = tmp48.target;
                  obj8[2] = value1.whitespaceSanitized;
                  return obj8;
                }
              }
            }
            obj9 = { type: null, content: null };
            obj9[0] = AST_KEY.AST_KEY.TEXT;
            obj9[1] = tmp2;
            return obj9;
          }
        }
        const obj10 = { type: null, content: null };
        obj10[0] = AST_KEY.AST_KEY.TEXT;
        obj10[1] = tmp2;
        return obj10;
      }
    }
    const obj11 = { type: null, content: null };
    obj11[0] = AST_KEY.AST_KEY.TEXT;
    obj11[1] = tmp2;
    return obj11;
  }
  const tmp = callback(arg0, 4);
};
let tmp2 = new privDefault({ max: 50 });
let result = require("set").fileFinishedImporting("modules/markup/MarkupLinkRule.tsx");

export default obj;
export const ALLOWED_PROTOCOLS = items;
export { isSuspiciousUrl };
export { punycodeLink };