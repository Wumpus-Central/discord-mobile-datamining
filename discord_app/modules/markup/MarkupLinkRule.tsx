// discord_app/modules/markup/MarkupLinkRule.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import URLUtilsDefault from "../../utils/URLUtils.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import privDefault from "../../../_runtime/01438_priv.js";
import _modDef2075 from "../../../_runtime/metro/02075__.js";
import findCodedLinks from "../coded_links/findCodedLinks.tsx";
import MarkupTypes from "MarkupTypes.tsx";
import UnicodeSanitizationUtils from "UnicodeSanitizationUtils.tsx";
import errorDefault from "../../../_runtime/05172_error.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";

const findCodedLinksDefault = findCodedLinks;

require = fn;
function validateContentTypes(content, items) {
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
  if (obj.isSuspiciousCodedLink(url)) {
    return true;
  } else {
    value = closure_4.get(url);
    if (null == value) {
      const sanitizeWhitespaceResult = UnicodeSanitizationUtils.sanitizeWhitespace(url);
      const obj3 = { whitespaceSanitized: sanitizeWhitespaceResult, fullySanitized: null };
      const tmpResult = UnicodeSanitizationUtils;
      obj3.fullySanitized = UnicodeSanitizationUtils.sanitizeUnicodeConfusables(sanitizeWhitespaceResult);
      const result = closure_4.set(url, obj3);
      value = obj3;
      const tmpResult2 = UnicodeSanitizationUtils;
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
            tmp8 = URLUtilsDefault.safeDecodeURIComponent(parts[2]) !== parts[2];
            const tmp9Result = URLUtilsDefault;
          }
          tmp7 = tmp8;
        }
        return tmp7;
      }
    }
  }
  obj = findCodedLinks;
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
        tmp9.hostname = errorDefault.toASCII(tmp9.hostname.toLowerCase());
        tmp9.username = "";
        tmp9.password = "";
        const obj3 = { target: UnicodeSanitizationUtils.safelyMakeUrlHumanReadable(tmp9), displayTarget: null };
        obj3.displayTarget = UnicodeSanitizationUtils.safelyMakeUrlHumanReadable(tmp9);
        return obj3;
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
let items1 = [
  fn(5165).AST_KEY.TEXT,
  fn(5165).AST_KEY.UNDERLINE,
  fn(5165).AST_KEY.STRONG,
  fn(5165).AST_KEY.ITALICS,
  fn(5165).AST_KEY.STRIKETHROUGH,
  fn(5165).AST_KEY.INLINE_CODE,
  fn(5165).AST_KEY.SPOILER,
  fn(5165).AST_KEY.LINE_BREAK,
  fn(5165).AST_KEY.TIMESTAMP,
];
let items2 = [...items1, fn(5165).AST_KEY.EMOJI, fn(5165).AST_KEY.CUSTOM_EMOJI];
let items3 = [fn(5165).AST_KEY.LIST, fn(5165).AST_KEY.HEADING, fn(5165).AST_KEY.BLOCK_QUOTE, fn(5165).AST_KEY.SUBTEXT];
const items4 = [fn(5165).AST_KEY.TEXT];
const items5 = [
  fn(5165).AST_KEY.UNDERLINE,
  fn(5165).AST_KEY.STRONG,
  fn(5165).AST_KEY.ITALICS,
  fn(5165).AST_KEY.STRIKETHROUGH,
  fn(5165).AST_KEY.INLINE_CODE,
  fn(5165).AST_KEY.SPOILER,
  fn(5165).AST_KEY.LINE_BREAK,
  fn(5165).AST_KEY.TIMESTAMP,
  fn(5165).AST_KEY.EMOJI,
  fn(5165).AST_KEY.CUSTOM_EMOJI,
  fn(5165).AST_KEY.LIST,
  fn(5165).AST_KEY.HEADING,
  fn(5165).AST_KEY.BLOCK_QUOTE,
  fn(5165).AST_KEY.SUBTEXT,
];
let obj = {};
let merged = Object.assign(_modDef2075.defaultRules.link);
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
      return _modDef2075.defaultRules.link.match(arr, allowLinks, arg2);
    }
  } else {
    return null;
  }
};
obj.parse = function parse(arg0, rules, allowEmojiLinks) {
  [tmp2, tmp3, tmp4, tmp5] = arg0;
  if (isSuspiciousUrl(tmp4)) {
    const obj3 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp2 };
    return obj3;
  } else {
    value = closure_4.get(tmp4);
    if (null == value) {
      const sanitizeWhitespaceResult = UnicodeSanitizationUtils.sanitizeWhitespace(tmp4);
      const obj6 = { whitespaceSanitized: sanitizeWhitespaceResult, fullySanitized: null };
      obj6.fullySanitized = UnicodeSanitizationUtils.sanitizeUnicodeConfusables(sanitizeWhitespaceResult);
      const result = closure_4.set(tmp4, obj6);
      value = obj6;
    }
    let value3 = closure_4.get(tmp3);
    if (null == value3) {
      const sanitizeWhitespaceResult1 = UnicodeSanitizationUtils.sanitizeWhitespace(tmp3);
      const obj9 = { whitespaceSanitized: sanitizeWhitespaceResult1, fullySanitized: null };
      obj9.fullySanitized = UnicodeSanitizationUtils.sanitizeUnicodeConfusables(sanitizeWhitespaceResult1);
      const result1 = closure_4.set(tmp3, obj9);
      value3 = obj9;
    }
    let str = "";
    if (null != tmp5) {
      str = tmp5;
    }
    let value4 = closure_4.get(str);
    if (null == value4) {
      const sanitizeWhitespaceResult2 = UnicodeSanitizationUtils.sanitizeWhitespace(str);
      const obj11 = { whitespaceSanitized: sanitizeWhitespaceResult2, fullySanitized: null };
      obj11.fullySanitized = UnicodeSanitizationUtils.sanitizeUnicodeConfusables(sanitizeWhitespaceResult2);
      const result2 = closure_4.set(str, obj11);
      value4 = obj11;
    }
    const trimmed = str3.trim();
    if (0 !== str2.trim().length) {
      if (0 !== trimmed.length) {
        const tmp48 = punycodeLink(_modDef2075.unescapeUrl(tmp4));
        if (null != tmp48) {
          if (findCodedLinksDefault(tmp5).length <= 0) {
            const obj12 = {};
            const merged = Object.assign(allowEmojiLinks);
            obj12.allowEscape = false;
            obj12.parseInlineCodeChildContent = true;
            const tmp23 = allowEmojiLinks.allowEmojiLinks ? items2 : items1;
            items = [];
            HermesBuiltin.arraySpread(items3, HermesBuiltin.arraySpread(tmp23, 0));
            items1 = [];
            HermesBuiltin.arraySpread(items5, HermesBuiltin.arraySpread(items4, 0));
            items2 = [MarkupTypes.AST_KEY.EMOJI];
            const tmp38 = validateContentTypes(rules(str3, obj12), items, items2);
            if (null != tmp38) {
              if (null != validateContentTypes(rules(value4.fullySanitized, obj12), items1)) {
                const str4 = getRawText(tmp38);
                if (0 === str4.trim().length) {
                  const obj13 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp2 };
                  return obj13;
                } else if (findCodedLinksDefault(str4).length > 0) {
                  const obj14 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp2 };
                  return obj14;
                } else {
                  if (str4 !== str3) {
                    if (findCodedLinksDefault(str3).length > 0) {
                      const obj15 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp2 };
                      return obj15;
                    } else {
                      items3 = [];
                      const tmp54 = rules(str4, obj12);
                      items3[HermesBuiltin.arraySpread(items, 0)] = MarkupTypes.AST_KEY.EMOJI;
                      if (null == validateContentTypes(tmp54, items3)) {
                        const obj16 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp2 };
                        return obj16;
                      }
                      const arraySpreadResult4 = HermesBuiltin.arraySpread(items, 0);
                    }
                  }
                  const tmp46Result = _modDef12;
                  const pickResult = _modDef12.pick(rules.rules, tmp23);
                  const obj17 = {
                    content: _modDef2075.parserFor(pickResult)(value3.whitespaceSanitized, obj12),
                    target: tmp48.target,
                    title: value4.whitespaceSanitized,
                  };
                  return obj17;
                }
              }
            }
            const obj18 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp2 };
            return obj18;
          }
        }
        const obj19 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp2 };
        return obj19;
      }
    }
    const obj20 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp2 };
    return obj20;
  }
  const tmp = _slicedToArray(arg0, 4);
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/markup/MarkupLinkRule.tsx");

export default obj;
export const ALLOWED_PROTOCOLS = items;
export { isSuspiciousUrl };
export { punycodeLink };
