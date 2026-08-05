import { t } from "../../../_runtime/03984_t.js";
import { error } from "../../../_runtime/04722_error.js";
import { isDiscordProxiedAssetUrl } from "../../utils/URLUtils.tsx";
import { getPathsFromURL } from "../coded_links/findCodedLinks.tsx";
import { AST_KEY } from "MarkupTypes.tsx";
import { safelyPartiallyDecodeURIComponent } from "UnicodeSanitizationUtils.tsx";
// discord_app/modules/markup/MarkupLinkRule.tsx
import _slicedToArray from "_slicedToArray";

const require = arg1;
function validateContentTypes(content, items, items2) {
  items = items2;
  if (items2 === undefined) {
    items = [];
  }
  let tmp = content;
  if (!Array.isArray(content)) {
    const items1 = [content];
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
        if (tmp3.type === AST_KEY /* AST_KEY */.AST_KEY.INLINE_CODE) {
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
    if (AST_KEY /* AST_KEY */.AST_KEY.TEXT !== type) {
      if (tmp3(4715).AST_KEY.INLINE_CODE !== type) {
        if (tmp3(4715).AST_KEY.CUSTOM_EMOJI === type) {
          let tmp16 = str;
          let tmp17 = nextResult;
          str = `${tmp2.name}`;
        } else if (tmp3(4715).AST_KEY.EMOJI === type) {
          let tmp14 = str;
          let tmp15 = nextResult;
          str = `${tmp2.name}${tmp2.surrogate}`;
        } else if (tmp3(4715).AST_KEY.LINE_BREAK === type) {
          let tmp13 = str;
          str = `${tmp2.name}${tmp2.surrogate}
  `;
        } else {
          if (tmp3(4715).AST_KEY.STRONG !== type) {
            if (tmp3(4715).AST_KEY.ITALICS !== type) {
              if (tmp3(4715).AST_KEY.UNDERLINE !== type) {
                if (tmp3(4715).AST_KEY.STRIKETHROUGH !== type) {
                  if (tmp3(4715).AST_KEY.SPOILER !== type) {
                    if (tmp3(4715).AST_KEY.TIMESTAMP === type) {
                      let tmp9 = str;
                      str = `${tmp2.name}${tmp2.surrogate}
  <timestamp>`;
                    } else {
                      if (tmp3(4715).AST_KEY.BLOCK_QUOTE !== type) {
                        if (tmp3(4715).AST_KEY.LIST !== type) {
                          if (tmp3(4715).AST_KEY.HEADING !== type) {
                            if (tmp3(4715).AST_KEY.SUBTEXT !== type) {
                              let tmp3Result = tmp3(1351);
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
  let obj = getPathsFromURL /* getPathsFromURL */;
  if (obj.isSuspiciousCodedLink(url)) {
    return true;
  } else {
    let value = tmp2.get(url);
    if (null == value) {
      let tmpResult = tmp(4721);
      const sanitizeWhitespaceResult = tmpResult.sanitizeWhitespace(url);
      obj = { whitespaceSanitized: null, fullySanitized: null };
      obj[0] = sanitizeWhitespaceResult;
      tmpResult = tmp(4721);
      obj[1] = tmpResult.sanitizeUnicodeConfusables(sanitizeWhitespaceResult);
      const result = obj2.set(url, obj);
      value = obj;
    }
    if (value.whitespaceSanitized !== url) {
      return true;
    } else {
      const toURLSafeResult = isDiscordProxiedAssetUrl.toURLSafe(url);
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
            tmp8 = tmp9(1467).safeDecodeURIComponent(parts[2]) !== parts[2];
            const tmp9Result = tmp9(1467);
          }
          tmp7 = tmp8;
        }
        return tmp7;
      }
      const obj7 = isDiscordProxiedAssetUrl;
      tmp9 = importDefault;
    }
    obj2 = tmp2;
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
        let obj = error;
        tmp9.hostname = obj.toASCII(tmp9.hostname.toLowerCase());
        tmp9.username = "";
        tmp9.password = "";
        obj = { target: null, displayTarget: null };
        obj[0] = safelyPartiallyDecodeURIComponent /* safelyPartiallyDecodeURIComponent */.safelyMakeUrlHumanReadable(tmp9);
        const obj2 = safelyPartiallyDecodeURIComponent /* safelyPartiallyDecodeURIComponent */;
        const str6 = tmp9.hostname;
        obj[1] = safelyPartiallyDecodeURIComponent /* safelyPartiallyDecodeURIComponent */.safelyMakeUrlHumanReadable(tmp9);
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
let c4 = new require("priv")({ max: 50 });
let items = ["http:", "https:", "discord:", "tel:", "sms:", "mailto:"];
let items1 = [require("AST_KEY").AST_KEY.TEXT, require("AST_KEY").AST_KEY.UNDERLINE, require("AST_KEY").AST_KEY.STRONG, require("AST_KEY").AST_KEY.ITALICS, require("AST_KEY").AST_KEY.STRIKETHROUGH, require("AST_KEY").AST_KEY.INLINE_CODE, require("AST_KEY").AST_KEY.SPOILER, require("AST_KEY").AST_KEY.LINE_BREAK, require("AST_KEY").AST_KEY.TIMESTAMP];
let items2 = [...items1, require("AST_KEY").AST_KEY.EMOJI, require("AST_KEY").AST_KEY.CUSTOM_EMOJI];
const items3 = [require("AST_KEY").AST_KEY.LIST, require("AST_KEY").AST_KEY.HEADING, require("AST_KEY").AST_KEY.BLOCK_QUOTE, require("AST_KEY").AST_KEY.SUBTEXT];
const items4 = [require("AST_KEY").AST_KEY.TEXT];
const items5 = [require("AST_KEY").AST_KEY.UNDERLINE, require("AST_KEY").AST_KEY.STRONG, require("AST_KEY").AST_KEY.ITALICS, require("AST_KEY").AST_KEY.STRIKETHROUGH, require("AST_KEY").AST_KEY.INLINE_CODE, require("AST_KEY").AST_KEY.SPOILER, require("AST_KEY").AST_KEY.LINE_BREAK, require("AST_KEY").AST_KEY.TIMESTAMP, require("AST_KEY").AST_KEY.EMOJI, require("AST_KEY").AST_KEY.CUSTOM_EMOJI, require("AST_KEY").AST_KEY.LIST, require("AST_KEY").AST_KEY.HEADING, require("AST_KEY").AST_KEY.BLOCK_QUOTE, require("AST_KEY").AST_KEY.SUBTEXT];
let obj = {};
let merged = Object.assign(require("t").defaultRules.link);
obj.match = function match(arr, allowLinks) {
  if (allowLinks.allowLinks) {
    if (-1 === arr.indexOf("](")) {
      return null;
    } else {
      let num3 = 0;
      let num4 = 0;
      let num5 = 0;
      if (0 < arr.length) {
        while (true) {
          let tmp3 = arr[num3];
          let tmp4 = num3;
          let tmp5 = num4;
          let tmp6 = num5;
          let num2 = 0;
          let tmp7 = num5;
          if (")" !== tmp3) {
            if ("[" === tmp3) {
              let sum = num5 + 1;
              if (10 < sum) {
                break;
              }
            } else if ("]" === tmp3) {
              sum = num5;
              if (0 < num5) {
                sum = num5 - 1;
              }
            } else {
              sum = num5;
              num2 = num4;
              tmp7 = num5;
            }
            num2 = num4 + 1;
            tmp7 = sum;
            if (200 < num2) {
              let tmp12 = null;
              return null;
            }
          }
          num3 = num3 + 1;
          num4 = num2;
          num5 = tmp7;
        }
        return null;
      }
      return t.defaultRules.link.match(arr, allowLinks, arg2);
    }
  } else {
    return null;
  }
};
obj.parse = function parse(arg0, rules, allowEmojiLinks) {
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  [tmp2, tmp3, tmp4, tmp5] = callback(arg0, 4);
  if (isSuspiciousUrl(tmp4)) {
    let obj = { type: null, content: null };
    obj[0] = AST_KEY /* AST_KEY */.AST_KEY.TEXT;
    obj[1] = tmp2;
    return obj;
  } else {
    obj = tmp2;
    let value = tmp2.get(tmp4);
    if (null == value) {
      let obj1 = safelyPartiallyDecodeURIComponent /* safelyPartiallyDecodeURIComponent */;
      const sanitizeWhitespaceResult = obj1.sanitizeWhitespace(tmp4);
      obj = { whitespaceSanitized: null, fullySanitized: null };
      obj[0] = sanitizeWhitespaceResult;
      let obj3 = safelyPartiallyDecodeURIComponent /* safelyPartiallyDecodeURIComponent */;
      obj[1] = obj3.sanitizeUnicodeConfusables(sanitizeWhitespaceResult);
      const result = obj.set(tmp4, obj);
      value = obj;
    }
    value = obj.get(tmp3);
    if (null == value) {
      let obj4 = safelyPartiallyDecodeURIComponent /* safelyPartiallyDecodeURIComponent */;
      const sanitizeWhitespaceResult1 = obj4.sanitizeWhitespace(tmp3);
      obj1 = { whitespaceSanitized: null, fullySanitized: null };
      obj1[0] = sanitizeWhitespaceResult1;
      let obj6 = safelyPartiallyDecodeURIComponent /* safelyPartiallyDecodeURIComponent */;
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
      let obj7 = safelyPartiallyDecodeURIComponent /* safelyPartiallyDecodeURIComponent */;
      const sanitizeWhitespaceResult2 = obj7.sanitizeWhitespace(str);
      const obj2 = { whitespaceSanitized: null, fullySanitized: null };
      obj2[0] = sanitizeWhitespaceResult2;
      obj2[1] = safelyPartiallyDecodeURIComponent /* safelyPartiallyDecodeURIComponent */.sanitizeUnicodeConfusables(sanitizeWhitespaceResult2);
      const result2 = obj.set(str, obj2);
      value1 = obj2;
      const obj10 = safelyPartiallyDecodeURIComponent /* safelyPartiallyDecodeURIComponent */;
    }
    const trimmed = str3.trim();
    if (0 !== str2.trim().length) {
      if (0 !== trimmed.length) {
        const tmp53 = punycodeLink(t.unescapeUrl(tmp4));
        const obj20 = t;
        if (null != tmp53) {
          if (!tmp23) {
            obj3 = {};
            const merged = Object.assign(allowEmojiLinks);
            obj3.allowEscape = false;
            obj3.parseInlineCodeChildContent = true;
            const tmp28 = allowEmojiLinks.allowEmojiLinks ? items2 : items1;
            const items = [];
            HermesBuiltin.arraySpread(items3, HermesBuiltin.arraySpread(tmp28, 0));
            items1 = [];
            HermesBuiltin.arraySpread(items5, HermesBuiltin.arraySpread(items4, 0));
            items2 = [AST_KEY /* AST_KEY */.AST_KEY.EMOJI];
            const tmp43 = validateContentTypes(rules(str3, obj3), items, items2);
            if (null != tmp43) {
              if (null != validateContentTypes(rules(value1.fullySanitized, obj3), items1)) {
                if (0 === str4.trim().length) {
                  obj4 = { type: null, content: null };
                  obj4[0] = tmp42(4715).AST_KEY.TEXT;
                  obj4[1] = tmp2;
                  return obj4;
                } else {
                  let tmp51Result = tmp51(12);
                  tmp51Result = tmp51(3984);
                  const obj5 = { content: null, target: null, title: null };
                  obj5[0] = tmp51Result.parserFor(tmp51Result.pick(rules.rules, tmp28))(value.whitespaceSanitized, obj3);
                  obj5[1] = tmp53.target;
                  obj5[2] = value1.whitespaceSanitized;
                  return obj5;
                }
                str4 = getRawText(tmp43);
              }
            }
            obj6 = { type: null, content: null };
            obj6[0] = AST_KEY /* AST_KEY */.AST_KEY.TEXT;
            obj6[1] = tmp2;
            return obj6;
          }
        }
        obj7 = { type: null, content: null };
        obj7[0] = AST_KEY /* AST_KEY */.AST_KEY.TEXT;
        obj7[1] = tmp2;
        return obj7;
      }
    }
    const obj8 = { type: null, content: null };
    obj8[0] = AST_KEY /* AST_KEY */.AST_KEY.TEXT;
    obj8[1] = tmp2;
    return obj8;
  }
  const tmp = callback(arg0, 4);
};
let tmp2 = new require("priv")({ max: 50 });
let result = require("safelyPartiallyDecodeURIComponent").fileFinishedImporting("modules/markup/MarkupLinkRule.tsx");

export default obj;
export const ALLOWED_PROTOCOLS = items;
export { isSuspiciousUrl };
export { punycodeLink };