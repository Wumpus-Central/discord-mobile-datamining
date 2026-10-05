// === Module 5790: MarkupLinkRule ===

// Module 5790 (MarkupLinkRule)
import _modDef12 from "module_12" /* 12 */;
import URLUtilsDefault from "URLUtils" /* 1371 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import LRUCacheDefault from "LRUCache" /* 1444 */;
import _modDef1936 from "module_1936" /* 1936 */;
import findCodedLinks from "findCodedLinks" /* 4870 */;
import MarkupTypes from "MarkupTypes" /* 5785 */;
import UnicodeSanitizationUtils from "UnicodeSanitizationUtils" /* 5791 */;
import _modDef5792 from "module_5792" /* 5792 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const findCodedLinksDefault = findCodedLinks;

function validateContentTypes(content, items) {
  items = items2;
  if (items2 === undefined) {
    items = [];
  }
  let tmp2 = content;
  if (!Array.isArray(content)) {
    items1 = [content];
    tmp2 = items1;
  }
  const iter = tmp2[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    if (undefined !== nextResult) {
      if (items.includes(tmp4.type)) {
        if (tmp4.type === MarkupTypes.AST_KEY.INLINE_CODE) {
          items2 = [];
          let arraySpreadResult = HermesBuiltin.arraySpread(items2, items, HermesBuiltin.arraySpread(items2, items, 0));
          if (null == validateContentTypes(tmp4.validationChildContent, items2)) {
            iter.return();
            return null;
          }
        }
        let _Array = Array;
        if (Array.isArray(tmp4.content)) {
          if (null == validateContentTypes(tmp4.content, items)) {
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
  return tmp2;
}
function getRawText(content) {
  let tmp2;
  let str = "";
  const iter = content[Symbol.iterator]();
  const nextResult = iter.next();
  for (; iter !== undefined; str = str + tmp2.content) {
    tmp2 = nextResult;
    let type = nextResult.type;
    if (MarkupTypes.AST_KEY.TEXT !== type) {
      if (MarkupTypes.AST_KEY.INLINE_CODE !== type) {
        if (MarkupTypes.AST_KEY.CUSTOM_EMOJI === type) {
          str = `${tmp2.name}`;
        } else if (MarkupTypes.AST_KEY.EMOJI === type) {
          str = `${tmp2.name}${tmp2.surrogate}`;
        } else if (MarkupTypes.AST_KEY.LINE_BREAK === type) {
          str = `${tmp2.name}${tmp2.surrogate}
  `;
        } else {
          if (MarkupTypes.AST_KEY.STRONG !== type) {
            if (MarkupTypes.AST_KEY.ITALICS !== type) {
              if (MarkupTypes.AST_KEY.UNDERLINE !== type) {
                if (MarkupTypes.AST_KEY.STRIKETHROUGH !== type) {
                  if (MarkupTypes.AST_KEY.SPOILER !== type) {
                    if (MarkupTypes.AST_KEY.TIMESTAMP === type) {
                      str = `${tmp2.name}${tmp2.surrogate}
  <timestamp>`;
                    } else {
                      if (MarkupTypes.AST_KEY.BLOCK_QUOTE !== type) {
                        if (MarkupTypes.AST_KEY.LIST !== type) {
                          if (MarkupTypes.AST_KEY.HEADING !== type) {
                            if (MarkupTypes.AST_KEY.SUBTEXT !== type) {
                              let tmp3Result = GlobalUtils;
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
  let tmpResult2;
  const obj = findCodedLinks;
  if (obj.isSuspiciousCodedLink(url)) {
    return true;
  } else {
    let value = closure_4.get(url);
    if (null == value) {
      const tmpResult = UnicodeSanitizationUtils;
      const sanitizeWhitespaceResult = tmpResult.sanitizeWhitespace(url);
      const obj3 = { whitespaceSanitized: sanitizeWhitespaceResult, fullySanitized: tmpResult2.sanitizeUnicodeConfusables(sanitizeWhitespaceResult) };
      tmpResult2 = UnicodeSanitizationUtils;
      const result = closure_4.set(url, obj3);
      value = obj3;
    }
    if (value.whitespaceSanitized !== url) {
      return true;
    } else {
      const obj7 = URLUtilsDefault;
      const toURLSafeResult = obj7.toURLSafe(url);
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
            const tmp9Result = URLUtilsDefault;
            tmp8 = tmp9Result.safeDecodeURIComponent(parts[2]) !== parts[2];
          }
          tmp7 = tmp8;
        }
        return tmp7;
      }
    }
  }
}
function punycodeLink(url) {
  let obj2;
  let obj4;
  try {
    if (isSuspiciousUrl(url)) {
      const _Error3 = Error;
      const _JSON = JSON;
      const self7 = this;
      const self8 = this;
      const error = new Error("Rejected due to suspicious characters in URL: " + JSON.stringify(url));
      throw error;
    } else {
      const _URL = URL;
      const self = this;
      const self2 = this;
      const uRL = new URL(url);
      if (items.includes((uRL.protocol ?? "").toLowerCase())) {
        if ("http:" === (uRL.protocol ?? "")) {
          const _Error2 = Error;
          const self5 = this;
          const self6 = this;
          const error1 = new Error("no hostname");
          throw error1;
        }
        const obj = _modDef5792;
        const str6 = uRL.hostname;
        uRL.hostname = obj.toASCII(str6.toLowerCase());
        uRL.username = "";
        uRL.password = "";
        const obj3 = { target: obj2.safelyMakeUrlHumanReadable(uRL), displayTarget: obj4.safelyMakeUrlHumanReadable(uRL) };
        obj2 = UnicodeSanitizationUtils;
        obj4 = UnicodeSanitizationUtils;
        return obj3;
      } else {
        const _Error = Error;
        const self3 = this;
        const self4 = this;
        const error2 = new Error("Provided protocol is not allowed: " + tmp9);
        throw error2;
      }
    }
  } catch (err) {
    return null;
  }
}
let tmp2 = new LRUCacheDefault({ max: 50 });
let closure_4 = tmp2;
let items = ["http:", "https:", "discord:", "tel:", "sms:", "mailto:"];
let items1 = [MarkupTypes.AST_KEY.TEXT, MarkupTypes.AST_KEY.UNDERLINE, MarkupTypes.AST_KEY.STRONG, MarkupTypes.AST_KEY.ITALICS, MarkupTypes.AST_KEY.STRIKETHROUGH, MarkupTypes.AST_KEY.INLINE_CODE, MarkupTypes.AST_KEY.SPOILER, MarkupTypes.AST_KEY.LINE_BREAK, MarkupTypes.AST_KEY.TIMESTAMP];
let items2 = [...items1, MarkupTypes.AST_KEY.EMOJI, MarkupTypes.AST_KEY.CUSTOM_EMOJI];
let items3 = [MarkupTypes.AST_KEY.LIST, MarkupTypes.AST_KEY.HEADING, MarkupTypes.AST_KEY.BLOCK_QUOTE, MarkupTypes.AST_KEY.SUBTEXT];
const items4 = [MarkupTypes.AST_KEY.TEXT];
const items5 = [MarkupTypes.AST_KEY.UNDERLINE, MarkupTypes.AST_KEY.STRONG, MarkupTypes.AST_KEY.ITALICS, MarkupTypes.AST_KEY.STRIKETHROUGH, MarkupTypes.AST_KEY.INLINE_CODE, MarkupTypes.AST_KEY.SPOILER, MarkupTypes.AST_KEY.LINE_BREAK, MarkupTypes.AST_KEY.TIMESTAMP, MarkupTypes.AST_KEY.EMOJI, MarkupTypes.AST_KEY.CUSTOM_EMOJI, MarkupTypes.AST_KEY.LIST, MarkupTypes.AST_KEY.HEADING, MarkupTypes.AST_KEY.BLOCK_QUOTE, MarkupTypes.AST_KEY.SUBTEXT];
let obj = {
  match(arr, allowLinks, arg2) {
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
              let sum;
              if ("[" === tmp3) {
                sum = num6 + 1;
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
        const str2 = _modDef1936.defaultRules.link;
        return str2.match(arr, allowLinks, arg2);
      }
    } else {
      return null;
    }
  },
  parse(arg0, rules, allowEmojiLinks) {
    let obj10;
    let obj4;
    let obj7;
    let tmp3;
    let tmp4;
    let tmp5;
    let tmp50Result2;
    let tmp6;
    [tmp3, tmp4, tmp5, tmp6] = arg0;
    _slicedToArray(arg0, 4);
    if (isSuspiciousUrl(tmp5)) {
      const obj3 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp3 };
      return obj3;
    } else {
      let value = closure_4.get(tmp5);
      if (null == value) {
        const obj2 = UnicodeSanitizationUtils;
        const sanitizeWhitespaceResult = obj2.sanitizeWhitespace(tmp5);
        const obj6 = { whitespaceSanitized: sanitizeWhitespaceResult, fullySanitized: obj4.sanitizeUnicodeConfusables(sanitizeWhitespaceResult) };
        obj4 = UnicodeSanitizationUtils;
        const result = closure_4.set(tmp5, obj6);
        value = obj6;
      }
      let value3 = closure_4.get(tmp4);
      if (null == value3) {
        const obj5 = UnicodeSanitizationUtils;
        const sanitizeWhitespaceResult1 = obj5.sanitizeWhitespace(tmp4);
        const obj9 = { whitespaceSanitized: sanitizeWhitespaceResult1, fullySanitized: obj7.sanitizeUnicodeConfusables(sanitizeWhitespaceResult1) };
        obj7 = UnicodeSanitizationUtils;
        const result1 = closure_4.set(tmp4, obj9);
        value3 = obj9;
      }
      let str = "";
      if (null != tmp6) {
        str = tmp6;
      }
      let value4 = closure_4.get(str);
      if (null == value4) {
        const obj8 = UnicodeSanitizationUtils;
        const sanitizeWhitespaceResult2 = obj8.sanitizeWhitespace(str);
        const obj11 = { whitespaceSanitized: sanitizeWhitespaceResult2, fullySanitized: obj10.sanitizeUnicodeConfusables(sanitizeWhitespaceResult2) };
        obj10 = UnicodeSanitizationUtils;
        const result2 = closure_4.set(str, obj11);
        value4 = obj11;
      }
      const fullySanitized = value4.fullySanitized;
      const str2 = value.whitespaceSanitized;
      const trimmed = str3.trim();
      if (0 !== str2.trim().length) {
        if (0 !== trimmed.length) {
          const obj23 = _modDef1936;
          const tmp52 = punycodeLink(obj23.unescapeUrl(tmp5));
          if (null != tmp52) {
            const obj24 = findCodedLinks;
            if (!obj24.containsCodedLink(tmp6)) {
              const obj12 = { allowEscape: false, parseInlineCodeChildContent: true };
              const merged = Object.assign(allowEmojiLinks);
              const tmp28 = allowEmojiLinks.allowEmojiLinks ? items2 : items1;
              items = [];
              HermesBuiltin.arraySpread(items, items3, HermesBuiltin.arraySpread(items, tmp28, 0));
              items1 = [];
              HermesBuiltin.arraySpread(items1, items5, HermesBuiltin.arraySpread(items1, items4, 0));
              items2 = [];
              const tmp41 = rules(value3.fullySanitized, obj12);
              items2[0] = MarkupTypes.AST_KEY.EMOJI;
              const tmp42 = validateContentTypes(tmp41, items, items2);
              if (null != tmp42) {
                if (null != validateContentTypes(rules(fullySanitized, obj12), items1)) {
                  const str4 = getRawText(tmp42);
                  if (0 === str4.trim().length) {
                    const obj13 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp3 };
                    return obj13;
                  } else if (findCodedLinksDefault(str4).length > 0) {
                    const obj14 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp3 };
                    return obj14;
                  } else {
                    if (str4 !== value3.fullySanitized) {
                      if (findCodedLinksDefault(value3.fullySanitized).length > 0) {
                        const obj15 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp3 };
                        return obj15;
                      } else {
                        items3 = [];
                        const tmp55 = rules(str4, obj12);
                        const arraySpreadResult4 = HermesBuiltin.arraySpread(items3, items, 0);
                        items3[arraySpreadResult4] = MarkupTypes.AST_KEY.EMOJI;
                        if (null == validateContentTypes(tmp55, items3)) {
                          const obj16 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp3 };
                          return obj16;
                        }
                      }
                    }
                    const tmp50Result = _modDef12;
                    const pickResult = tmp50Result.pick(rules.rules, tmp28);
                    const obj17 = { content: tmp50Result2.parserFor(pickResult)(value3.whitespaceSanitized, obj12), target: tmp52.target, title: value4.whitespaceSanitized };
                    tmp50Result2 = _modDef1936;
                    return obj17;
                  }
                }
              }
              const obj18 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp3 };
              return obj18;
            }
          }
          const obj19 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp3 };
          return obj19;
        }
      }
      const obj20 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp3 };
      return obj20;
    }
  }
};
let merged = Object.assign(_modDef1936.defaultRules.link);
let result = size.fileFinishedImporting("modules/markup/MarkupLinkRule.tsx");

export default obj;
export const ALLOWED_PROTOCOLS = items;
export { isSuspiciousUrl };
export { punycodeLink };