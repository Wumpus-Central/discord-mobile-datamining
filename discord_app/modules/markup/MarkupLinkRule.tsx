// === Module 5001: MarkupLinkRule ===

// Module 5001 (MarkupLinkRule)
import URLUtilsDefault from "URLUtils" /* 1365 */;
import privDefault from "priv" /* 1437 */;
import _modDef4257 from "module_4257" /* 4257 */;
import findCodedLinks from "findCodedLinks" /* 4543 */;
import MarkupTypes from "MarkupTypes" /* 4996 */;
import UnicodeSanitizationUtils from "UnicodeSanitizationUtils" /* 5002 */;
import errorDefault from "error" /* 5003 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
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
      if (items.includes(tmp3.type)) {
        if (tmp3.type === MarkupTypes.AST_KEY.INLINE_CODE) {
          items2 = [];
          let arraySpreadResult = HermesBuiltin.arraySpread(items, HermesBuiltin.arraySpread(items, 0));
          if (null == validateContentTypes(tmp3.validationChildContent, items2)) {
            iter.return();
            return null;
          }
        }
        let _Array = Array;
        if (Array.isArray(tmp3.content)) {
          if (null == validateContentTypes(tmp3.content, items)) {
            iter.return();
            return null;
          }
        }
        continue;
      }
    }
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
    if (MarkupTypes.AST_KEY.TEXT !== type) {
      if (tmp3(4996).AST_KEY.INLINE_CODE !== type) {
        if (tmp3(4996).AST_KEY.CUSTOM_EMOJI === type) {
          str = `${tmp2.name}`;
        } else if (tmp3(4996).AST_KEY.EMOJI === type) {
          str = `${tmp2.name}${tmp2.surrogate}`;
        } else if (tmp3(4996).AST_KEY.LINE_BREAK === type) {
          str = `${tmp2.name}${tmp2.surrogate}
  `;
        } else {
          if (tmp3(4996).AST_KEY.STRONG !== type) {
            if (tmp3(4996).AST_KEY.ITALICS !== type) {
              if (tmp3(4996).AST_KEY.UNDERLINE !== type) {
                if (tmp3(4996).AST_KEY.STRIKETHROUGH !== type) {
                  if (tmp3(4996).AST_KEY.SPOILER !== type) {
                    if (tmp3(4996).AST_KEY.TIMESTAMP === type) {
                      str = `${tmp2.name}${tmp2.surrogate}
  <timestamp>`;
                    } else {
                      if (tmp3(4996).AST_KEY.BLOCK_QUOTE !== type) {
                        if (tmp3(4996).AST_KEY.LIST !== type) {
                          if (tmp3(4996).AST_KEY.HEADING !== type) {
                            if (tmp3(4996).AST_KEY.SUBTEXT !== type) {
                              let tmp3Result = tmp3(1369);
                              let assertNeverResult = tmp3Result.assertNever(tmp2.type);
                            }
                          }
                        }
                      }
                      let _HermesInternal = HermesInternal;
                      str = str + "<" + tmp2.type + "Content>";
                    }
                  }
                }
              }
            }
          }
          str = str + getRawText(tmp2.content);
        }
      }
      continue;
    }
  }
  return str;
}
function isSuspiciousUrl(url) {
  let obj = findCodedLinks;
  if (obj.isSuspiciousCodedLink(url)) {
    return true;
  } else {
    value = closure_4.get(url);
    if (null == value) {
      let tmpResult = tmp(5002);
      const sanitizeWhitespaceResult = tmpResult.sanitizeWhitespace(url);
      obj = { whitespaceSanitized: sanitizeWhitespaceResult, fullySanitized: null };
      tmpResult = tmp(5002);
      obj.fullySanitized = tmpResult.sanitizeUnicodeConfusables(sanitizeWhitespaceResult);
      const result = obj2.set(url, obj);
      value = obj;
    }
    if (value.whitespaceSanitized !== url) {
      return true;
    } else {
      const toURLSafeResult = URLUtilsDefault.toURLSafe(url);
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
            tmp8 = tmp9(1365).safeDecodeURIComponent(parts[2]) !== parts[2];
            const tmp9Result = tmp9(1365);
          }
          tmp7 = tmp8;
        }
        return tmp7;
      }
      tmp9 = importDefault;
    }
    obj2 = closure_4;
  }
}
function punycodeLink(url) {
  try {
    if (isSuspiciousUrl(url)) {
      const _Error3 = Error;
      const _JSON = JSON;
      const error = new Error("Rejected due to suspicious characters in URL: " + JSON.stringify(url));
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
        obj = { target: UnicodeSanitizationUtils.safelyMakeUrlHumanReadable(tmp9), displayTarget: null };
        obj.displayTarget = UnicodeSanitizationUtils.safelyMakeUrlHumanReadable(tmp9);
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
let items1 = [fn(4996).AST_KEY.TEXT, fn(4996).AST_KEY.UNDERLINE, fn(4996).AST_KEY.STRONG, fn(4996).AST_KEY.ITALICS, fn(4996).AST_KEY.STRIKETHROUGH, fn(4996).AST_KEY.INLINE_CODE, fn(4996).AST_KEY.SPOILER, fn(4996).AST_KEY.LINE_BREAK, fn(4996).AST_KEY.TIMESTAMP];
let items2 = [...items1, fn(4996).AST_KEY.EMOJI, fn(4996).AST_KEY.CUSTOM_EMOJI];
let items3 = [fn(4996).AST_KEY.LIST, fn(4996).AST_KEY.HEADING, fn(4996).AST_KEY.BLOCK_QUOTE, fn(4996).AST_KEY.SUBTEXT];
const items4 = [fn(4996).AST_KEY.TEXT];
const items5 = [fn(4996).AST_KEY.UNDERLINE, fn(4996).AST_KEY.STRONG, fn(4996).AST_KEY.ITALICS, fn(4996).AST_KEY.STRIKETHROUGH, fn(4996).AST_KEY.INLINE_CODE, fn(4996).AST_KEY.SPOILER, fn(4996).AST_KEY.LINE_BREAK, fn(4996).AST_KEY.TIMESTAMP, fn(4996).AST_KEY.EMOJI, fn(4996).AST_KEY.CUSTOM_EMOJI, fn(4996).AST_KEY.LIST, fn(4996).AST_KEY.HEADING, fn(4996).AST_KEY.BLOCK_QUOTE, fn(4996).AST_KEY.SUBTEXT];
let obj = {};
let merged = Object.assign(_modDef4257.defaultRules.link);
obj.match = function match(arr, allowLinks, arg2) {
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
      return _modDef4257.defaultRules.link.match(arr, allowLinks, arg2);
    }
  } else {
    return null;
  }
};
obj.parse = function parse(arg0, rules, allowEmojiLinks) {
  [tmp2, tmp3, tmp4, tmp5] = _slicedToArray(arg0, 4);
  if (isSuspiciousUrl(tmp4)) {
    let obj = { type: MarkupTypes.AST_KEY.TEXT, content: tmp2 };
    return obj;
  } else {
    obj = closure_4;
    value = closure_4.get(tmp4);
    if (null == value) {
      let obj1 = UnicodeSanitizationUtils;
      const sanitizeWhitespaceResult = obj1.sanitizeWhitespace(tmp4);
      obj = { whitespaceSanitized: sanitizeWhitespaceResult, fullySanitized: null };
      let obj3 = UnicodeSanitizationUtils;
      obj.fullySanitized = obj3.sanitizeUnicodeConfusables(sanitizeWhitespaceResult);
      const result = obj.set(tmp4, obj);
      value = obj;
    }
    value = obj.get(tmp3);
    if (null == value) {
      let obj4 = UnicodeSanitizationUtils;
      const sanitizeWhitespaceResult1 = obj4.sanitizeWhitespace(tmp3);
      obj1 = { whitespaceSanitized: sanitizeWhitespaceResult1, fullySanitized: null };
      let obj6 = UnicodeSanitizationUtils;
      obj1.fullySanitized = obj6.sanitizeUnicodeConfusables(sanitizeWhitespaceResult1);
      const result1 = obj.set(tmp3, obj1);
      value = obj1;
    }
    let str = "";
    if (null != tmp5) {
      str = tmp5;
    }
    let value1 = obj.get(str);
    if (null == value1) {
      let obj7 = UnicodeSanitizationUtils;
      const sanitizeWhitespaceResult2 = obj7.sanitizeWhitespace(str);
      const obj2 = { whitespaceSanitized: sanitizeWhitespaceResult2, fullySanitized: null };
      let obj9 = UnicodeSanitizationUtils;
      obj2.fullySanitized = obj9.sanitizeUnicodeConfusables(sanitizeWhitespaceResult2);
      const result2 = obj.set(str, obj2);
      value1 = obj2;
    }
    const trimmed = str3.trim();
    if (0 !== str2.trim().length) {
      if (0 !== trimmed.length) {
        const tmp48 = punycodeLink(_modDef4257.unescapeUrl(tmp4));
        if (null != tmp48) {
          if (tmp46(4543)(tmp5).length <= 0) {
            obj3 = {};
            const merged = Object.assign(allowEmojiLinks);
            obj3.allowEscape = false;
            obj3.parseInlineCodeChildContent = true;
            const tmp23 = allowEmojiLinks.allowEmojiLinks ? items2 : items1;
            items = [];
            HermesBuiltin.arraySpread(items3, HermesBuiltin.arraySpread(tmp23, 0));
            items1 = [];
            HermesBuiltin.arraySpread(items5, HermesBuiltin.arraySpread(items4, 0));
            items2 = [MarkupTypes.AST_KEY.EMOJI];
            const tmp38 = validateContentTypes(rules(str3, obj3), items, items2);
            if (null != tmp38) {
              if (null != validateContentTypes(rules(value1.fullySanitized, obj3), items1)) {
                const str4 = getRawText(tmp38);
                if (0 === str4.trim().length) {
                  obj4 = { type: tmp37(4996).AST_KEY.TEXT, content: tmp2 };
                  return obj4;
                } else if (tmp46(4543)(str4).length > 0) {
                  const obj5 = { type: tmp37(4996).AST_KEY.TEXT, content: tmp2 };
                  return obj5;
                } else {
                  if (str4 !== str3) {
                    if (tmp46(4543)(str3).length > 0) {
                      obj6 = { type: tmp37(4996).AST_KEY.TEXT, content: tmp2 };
                      return obj6;
                    } else {
                      items3 = [];
                      const tmp54 = rules(str4, obj3);
                      items3[HermesBuiltin.arraySpread(items, 0)] = tmp37(4996).AST_KEY.EMOJI;
                      if (null == validateContentTypes(tmp54, items3)) {
                        obj7 = { type: tmp37(4996).AST_KEY.TEXT, content: tmp2 };
                        return obj7;
                      }
                      const arraySpreadResult1 = HermesBuiltin.arraySpread(items, 0);
                    }
                  }
                  tmp46(12);
                  const tmp46Result = tmp46(4257);
                  const obj8 = { content: tmp46Result.parserFor(tmp46Result.pick(rules.rules, tmp23))(value.whitespaceSanitized, obj3), target: tmp48.target, title: value1.whitespaceSanitized };
                  return obj8;
                }
              }
            }
            obj9 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp2 };
            return obj9;
          }
        }
        const obj10 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp2 };
        return obj10;
      }
    }
    const obj11 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp2 };
    return obj11;
  }
  const tmp = _slicedToArray(arg0, 4);
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/markup/MarkupLinkRule.tsx");

export default obj;
export const ALLOWED_PROTOCOLS = items;
export { isSuspiciousUrl };
export { punycodeLink };