// discord_app/modules/markup/MarkupLinkRule.tsx
import applyDefault from "../../../_runtime/00012_apply.js";
import isDiscordFrontendDevelopment from "../../utils/GlobalUtils.tsx";
import privDefault from "../../../_runtime/01405_priv.js";
import isDiscordProxiedAssetUrlDefault from "../../utils/URLUtils.tsx";
import tDefault from "../../../_runtime/04092_t.js";
import trimTrailingPunctuation from "../coded_links/findCodedLinks.tsx";
import AST_KEY from "MarkupTypes.tsx";
import safelyPartiallyDecodeURIComponent from "UnicodeSanitizationUtils.tsx";
import errorDefault from "../../../_runtime/06813_error.js";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";

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
        if (tmp3.type === AST_KEY.AST_KEY.INLINE_CODE) {
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
    if (AST_KEY.AST_KEY.TEXT !== type) {
      if (AST_KEY.AST_KEY.INLINE_CODE !== type) {
        if (AST_KEY.AST_KEY.CUSTOM_EMOJI === type) {
          str = `${tmp2.name}`;
        } else if (AST_KEY.AST_KEY.EMOJI === type) {
          str = `${tmp2.name}${tmp2.surrogate}`;
        } else if (AST_KEY.AST_KEY.LINE_BREAK === type) {
          str = `${tmp2.name}${tmp2.surrogate}
  `;
        } else {
          if (AST_KEY.AST_KEY.STRONG !== type) {
            if (AST_KEY.AST_KEY.ITALICS !== type) {
              if (AST_KEY.AST_KEY.UNDERLINE !== type) {
                if (AST_KEY.AST_KEY.STRIKETHROUGH !== type) {
                  if (AST_KEY.AST_KEY.SPOILER !== type) {
                    if (AST_KEY.AST_KEY.TIMESTAMP === type) {
                      str = `${tmp2.name}${tmp2.surrogate}
  <timestamp>`;
                    } else {
                      if (AST_KEY.AST_KEY.BLOCK_QUOTE !== type) {
                        if (AST_KEY.AST_KEY.LIST !== type) {
                          if (AST_KEY.AST_KEY.HEADING !== type) {
                            if (AST_KEY.AST_KEY.SUBTEXT !== type) {
                              let tmp3Result = isDiscordFrontendDevelopment;
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
  let obj = trimTrailingPunctuation;
  if (obj.isSuspiciousCodedLink(url)) {
    return true;
  } else {
    let value = store.get(url);
    if (null == value) {
      let tmpResult = safelyPartiallyDecodeURIComponent;
      const sanitizeWhitespaceResult = tmpResult.sanitizeWhitespace(url);
      obj = { whitespaceSanitized: null, fullySanitized: null };
      obj[0] = sanitizeWhitespaceResult;
      tmpResult = safelyPartiallyDecodeURIComponent;
      obj[1] = tmpResult.sanitizeUnicodeConfusables(sanitizeWhitespaceResult);
      const result = store.set(url, obj);
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
            tmp8 = isDiscordProxiedAssetUrlDefault.safeDecodeURIComponent(parts[2]) !== parts[2];
            const tmp9Result = isDiscordProxiedAssetUrlDefault;
          }
          tmp7 = tmp8;
        }
        return tmp7;
      }
    }
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
const items3 = [require("AST_KEY").AST_KEY.LIST, require("AST_KEY").AST_KEY.HEADING, require("AST_KEY").AST_KEY.BLOCK_QUOTE, require("AST_KEY").AST_KEY.SUBTEXT];
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
      obj2[1] = safelyPartiallyDecodeURIComponent.sanitizeUnicodeConfusables(sanitizeWhitespaceResult2);
      const result2 = obj.set(str, obj2);
      value1 = obj2;
    }
    const trimmed = str3.trim();
    if (0 !== str2.trim().length) {
      if (0 !== trimmed.length) {
        const tmp53 = punycodeLink(tDefault.unescapeUrl(tmp4));
        if (null != tmp53) {
          if (!tmp23) {
            obj3 = {};
            const merged = Object.assign(allowEmojiLinks);
            obj3.allowEscape = false;
            obj3.parseInlineCodeChildContent = true;
            const tmp28 = allowEmojiLinks.allowEmojiLinks ? items2 : items1;
            items = [];
            HermesBuiltin.arraySpread(items3, HermesBuiltin.arraySpread(tmp28, 0));
            items1 = [];
            HermesBuiltin.arraySpread(items5, HermesBuiltin.arraySpread(items4, 0));
            items2 = [AST_KEY.AST_KEY.EMOJI];
            const tmp43 = validateContentTypes(rules(str3, obj3), items, items2);
            if (null != tmp43) {
              if (null != validateContentTypes(rules(value1.fullySanitized, obj3), items1)) {
                if (0 === str4.trim().length) {
                  obj4 = { type: null, content: null };
                  obj4[0] = AST_KEY.AST_KEY.TEXT;
                  obj4[1] = tmp2;
                  return obj4;
                } else {
                  const tmp51Result = tDefault;
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
            obj6[0] = AST_KEY.AST_KEY.TEXT;
            obj6[1] = tmp2;
            return obj6;
          }
        }
        obj7 = { type: null, content: null };
        obj7[0] = AST_KEY.AST_KEY.TEXT;
        obj7[1] = tmp2;
        return obj7;
      }
    }
    const obj8 = { type: null, content: null };
    obj8[0] = AST_KEY.AST_KEY.TEXT;
    obj8[1] = tmp2;
    return obj8;
  }
  const tmp = callback(arg0, 4);
};
let tmp2 = new privDefault({ max: 50 });
let result = require("obj132").fileFinishedImporting("modules/markup/MarkupLinkRule.tsx");

export default obj;
export const ALLOWED_PROTOCOLS = items;
export { isSuspiciousUrl };
export { punycodeLink };