// discord_app/modules/html_parser/HTMLParserLinkUtils.tsx
import MarkupLinkRule2 from "../markup/MarkupLinkRule.tsx";
import UnicodeSanitizationUtils from "../markup/UnicodeSanitizationUtils.tsx";
import HTMLParserRunUtils from "HTMLParserRunUtils.tsx";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import t from "../../../_runtime/metro/02067__.js";

const require = globalThis.__r;
const MarkupLinkRuleDefault = MarkupLinkRule2;

require = fn;
function parseAllowedURL(unescapeUrlResult, flag) {
  try {
    const _URL = URL;
    const uRL = new URL(unescapeUrlResult);
    if ("http:" !== uRL.protocol) {
      if ("https:" !== tmp7.protocol) {
        if (!flag) {
          if ("mailto:" === tmp7.protocol) {
            const _Array = Array;
            const searchParams = tmp7.searchParams;
            let tmp14;
            if (arr.every((item) => set.has(item.toLowerCase()))) {
              tmp14 = uRL;
            }
            let tmp11 = tmp14;
            arr = Array.from(searchParams.keys());
          }
        }
      }
      return tmp11;
    }
    tmp11 = uRL;
  } catch (err) {
    return tmp;
  }
}
function getLink(arr3) {
  if (flag === undefined) {
    flag = false;
  }
  let tmp;
  if (null != arr3) {
    const tmp3 = parseAllowedURL(arr3, flag);
    let href;
    if (tmp3 != null) {
      href = tmp3.href;
    }
    tmp = href;
  }
  return tmp;
}
function normalizeLabelForComparison(text) {
  const str = UnicodeSanitizationUtils.sanitizeWhitespace(text);
  const normalizer = str.replace(gesture, "");
  return UnicodeSanitizationUtils.sanitizeUnicodeConfusables(normalizer.normalize("NFKC"));
}
function hasMisleadingURLLabel(str, href) {
  _require = str;
  importDefault = href;
  if (0 === str.trim().length) {
    return true;
  } else {
    if (
      obj4.some((url) => {
        url = url.url;
        let tmp2;
        if (null != url) {
          const tmp4 = parseAllowedURL(url, true);
          href = undefined;
          if (tmp4 != null) {
            href = tmp4.href;
          }
          tmp2 = href;
        }
        let tmp6 = tmp2 === closure_1;
        if (!tmp6) {
          const startsWithResult = url.startsWith("http://");
          let hasItem = !startsWithResult;
          if (startsWithResult) {
            hasItem = str.includes(url);
          }
          let tmp9 = !hasItem;
          if (!hasItem) {
            const _HermesInternal = HermesInternal;
            const combined = "https://" + url.slice(7);
            let tmp12;
            if (null != combined) {
              const tmp14 = parseAllowedURL(combined, true);
              let href1;
              if (tmp14 != null) {
                href1 = tmp14.href;
              }
              tmp12 = href1;
            }
            tmp9 = tmp12 === closure_1;
          }
          tmp6 = tmp9;
        }
        return !tmp6;
      })
    ) {
      return true;
    } else {
      const normalizer = str.replace(closure_10, "$1://");
      const _Array = Array;
      const arr = Array.from(normalizer.matchAll(closure_13), (arg0) => {
        [tmp] = arg0;
        return tmp;
      });
      const str3 = normalizer.normalize("NFKD");
      const normalizer2 = str3.replace(closure_14, "");
      const obj = require("UnicodeSanitizationUtils");
      const str6 = require("UnicodeSanitizationUtils").sanitizeUnicodeConfusables(normalizer2.normalize("NFKC"));
      let match = require("UnicodeSanitizationUtils")
        .sanitizeUnicodeConfusables(normalizer2.normalize("NFKC"))
        .replace(closure_10, "$1://")
        .match(closure_13);
      if (match == null) {
        match = [];
      }
      if (match.length > arr.length) {
        return true;
      } else if (
        arr.some((item) => {
          let tmp;
          if (null != item) {
            const tmp3 = parseAllowedURL(item, true);
            href = undefined;
            if (tmp3 != null) {
              href = tmp3.href;
            }
            tmp = href;
          }
          return tmp !== closure_1;
        })
      ) {
        return true;
      } else {
        const _Array2 = Array;
        const replaced = str.replace(closure_13, " ");
        const arr2 = Array.from(replaced.matchAll(closure_11), (arg0) => {
          [, tmp] = arg0;
          return tmp;
        });
        if (0 === arr2.length) {
          return false;
        } else if (href.startsWith("mailto:")) {
          const _URL = URL;
          const uRL = new URL(href);
          const str10 = tmp15(tmp16[4]).safeDecodeURIComponent(uRL.pathname);
          let formatted;
          if (str10 != null) {
            formatted = str10.toLowerCase();
          }
          const tmp15Result = tmp15(tmp16[4]);
          return null == formatted || arr2.some((item) => item.toLowerCase() !== formatted);
        } else {
          return true;
        }
      }
      const str7 = require("UnicodeSanitizationUtils")
        .sanitizeUnicodeConfusables(normalizer2.normalize("NFKC"))
        .replace(closure_10, "$1://");
    }
    obj4 = require("findCodedLinks")(str);
    tmp15 = importDefault;
  }
}
function trimUnmatchedParenthesis(nextResult) {
  let diff = nextResult.length - 1;
  if (0 <= diff) {
    let num2 = 0;
    if (")" === nextResult[diff]) {
      const index = nextResult.indexOf("(", num2);
      while (-1 !== index) {
        let diff1 = diff - 1;
        if (0 <= diff1) {
          diff = diff1;
          num2 = tmp4;
        }
      }
      return nextResult.slice(0, -1);
    }
  }
  return nextResult;
}
function withoutLink(items) {
  return Object.assign(items, Object.assign({ link: 0 }));
}
function appendParsedNode(arr, content, text) {
  if (Array.isArray(content)) {
    const tmp12 = content[Symbol.iterator]();
    while (tmp12 !== undefined) {
      let tmp17 = appendParsedNode(arr, tmp14, text);
      continue;
    }
  } else {
    if ("text" === content.type) {
      if (typeof content.content === "string") {
        const obj2 = {};
        const merged = Object.assign(text);
        obj2.text = content.content;
        arr = arr.push(obj2);
      }
    }
    let tmp = "link" !== content.type;
    if (tmp) {
      tmp = "url" !== content.type;
    }
    if (!tmp) {
      const obj = {};
      const merged1 = Object.assign(text);
      obj.link = content.target;
      obj.rawURL = "url" === content.type;
      appendParsedNode(arr, content.content, obj);
    }
  }
}
function appendTextLinks(items, text, allowLinks) {
  text = text.text;
  let hasItem1 = allowLinks;
  const hasItem = text.includes("[");
  if (allowLinks) {
    const text2 = text.text;
    hasItem1 = text2.includes("](");
  }
  if (!hasItem1) {
    const obj = { inline: true, allowLinks };
    appendParsedNode(items, closure_22(text.text, obj), text);
  }
  items.push(text);
}
function mayContainLink(link, arr, arg2) {
  if (null != link.link) {
    let tmp = "" !== link.link;
  } else {
    tmp = arg2;
    if (arg2) {
      let isMatch = regex2.test(arr);
      if (!isMatch) {
        isMatch = arr.includes("](");
      }
      tmp = isMatch;
    }
  }
  return tmp;
}
function validateSplitURLs(items) {
  if (items.some((link) => null != link.link)) {
    const arr = (function getComparisonLabels(arr) {
      let mapped = arr.map((text) => {
        const parts = text.text.split(closure_1_16);
        const mapped = parts.map(closure_1_19);
        return mapped.join(" ");
      });
      let num = 0;
      if (0 < arr.length) {
        while (true) {
          let tmp = arr[num];
          let link = tmp;
          if (null != tmp.link) {
            if (true !== tmp.rawURL) {
              let sum = num + 1;
              let tmp3 = sum;
              if (sum < arr.length) {
                tmp3 = sum;
                if (true !== arr[sum].rawURL) {
                  let tmp4 = sum;
                  tmp3 = sum;
                  if (arr[sum].link === tmp.link) {
                    let sum1 = tmp4 + 1;
                    tmp3 = sum1;
                    while (sum1 < arr.length) {
                      tmp3 = sum1;
                      if (true === arr[sum1].rawURL) {
                        break;
                      } else {
                        tmp4 = sum1;
                        tmp3 = sum1;
                        if (arr[sum1].link !== tmp.link) {
                          break;
                        }
                      }
                    }
                  }
                }
              }
              let substr = mapped.slice(num, tmp3);
              let joined = substr.join("");
              let _Array = Array;
              let arr2 = Array.from(joined.matchAll(closure_13));
              let sum2 = tmp3;
              if (
                arr2.some((item) => {
                  [arr] = item;
                  let diff = arr.length - 1;
                  let substr = arr;
                  if (0 <= diff) {
                    let num2 = 0;
                    substr = arr;
                    if (")" === arr[diff]) {
                      const index = arr.indexOf("(", num2);
                      while (-1 !== index) {
                        let diff1 = diff - 1;
                        substr = arr;
                        if (0 <= diff1) {
                          diff = diff1;
                          num2 = tmp5;
                          substr = arr;
                        }
                      }
                      substr = arr.slice(0, -1);
                    }
                  }
                  let tmp7;
                  if (null != substr) {
                    const tmp9 = parseAllowedURL(substr, true);
                    let href;
                    if (tmp9 != null) {
                      href = tmp9.href;
                    }
                    tmp7 = href;
                  }
                  return tmp7 === link.link;
                })
              ) {
                let diff = tmp3 - 1;
                mapped[diff] = `${arr[tmp9]} `;
                sum2 = tmp3;
              }
            }
            num = sum2;
            if (sum2 >= arr.length) {
              break;
            }
          }
          sum2 = num + 1;
        }
      }
      return mapped;
    })(items);
    c0 = 0;
    let mapped = arr.map((item) => {
      const sum = c0 + item.length;
      c0 = sum;
      return sum;
    });
    items = [];
    HermesBuiltin.arraySpread(items, 0);
    let num3 = 0;
    let joined = arr.join("");
    const matchAllResult = joined.matchAll(closure_13);
    const iter = matchAllResult[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp12 = nextResult;
      let arr3 = trimUnmatchedParenthesis(nextResult[0]);
      if (mapped[num3] <= nextResult.index) {
        do {
          let sum = num3 + 1;
          num3 = sum;
          tmp17 = mapped[sum];
          index = tmp12.index;
        } while (tmp17 <= index);
      }
      let sum1 = tmp12.index + arr3.length;
      let tmp23 = num3;
      if (mapped[num3] < sum1) {
        do {
          let sum2 = tmp23 + 1;
          tmp23 = sum2;
          tmp26 = mapped[sum2];
        } while (tmp26 < sum1);
      }
      if (num3 !== tmp23) {
        let tmp32 = getLink(arr3, true);
        let tmp34 = num3;
        if (num3 <= tmp23) {
          do {
            let tmp37 = null != tmp32;
            if (tmp37) {
              tmp37 = items[tmp34].link === tmp32;
            }
            if (!tmp37) {
              items[tmp34] = withoutLink(items[tmp34]);
            }
            sum3 = tmp34 + 1;
            tmp34 = sum3;
          } while (sum3 <= tmp23);
        }
      }
      continue;
    }
    return items;
  } else {
    return items;
  }
}
let closure_3 = ["rawURL"];
const HTMLParserConstants = fn(10284);
({
  ALLOWED_MAILTO_HEADERS: hasOwnProperty,
  BIDI_CONTROL_CHARACTERS: closure_6,
  BIDI_CONTROL_CHARACTERS_GLOBAL: metroImportDefault,
  BIDI_PARAGRAPH_SEPARATOR: closure_8,
  BIDI_PARAGRAPH_SEPARATORS: closure_9,
  BROKEN_URL_SCHEME_IN_LABEL: closure_10,
  EMAIL_IN_LABEL: closure_11,
  HTTP_URL_SCHEME: closure_12,
  URL_IN_LABEL: map1,
  URL_LABEL_IGNORABLE_CHARACTERS: closure_14,
  URL_MATCH: closure_15,
  URL_TEXT_BOUNDARY: closure_16,
} = HTMLParserConstants);
let obj = { text: t.defaultRules.text, link: null, url: null };
let obj2 = {};
const MarkupLinkRule = Object.assign(MarkupLinkRuleDefault);
obj2.match = function match(arg0, arg1, arg2) {
  const match = MarkupLinkRuleDefault.match(arg0, arg1, arg2);
  let tmp4 = null;
  if (null != match) {
    tmp4 = null;
    if (!regex.test(match[0])) {
      const unescapeUrlResult = t.unescapeUrl(match[2]);
      let tmp7;
      if (null != unescapeUrlResult) {
        const tmp9 = parseAllowedURL(unescapeUrlResult, false);
        let href;
        if (tmp9 != null) {
          href = tmp9.href;
        }
        tmp7 = href;
      }
      let tmp11 = null;
      if (null != tmp7) {
        tmp11 = match;
      }
      tmp4 = tmp11;
      const tmpResult = t;
    }
  }
  return tmp4;
};
obj2.parse = function parse(content, arg1, arg2) {
  const unescapeUrlResult = t.unescapeUrl(content[2]);
  let tmp4;
  if (null != unescapeUrlResult) {
    const tmp6 = parseAllowedURL(unescapeUrlResult, false);
    let href;
    if (tmp6 != null) {
      href = tmp6.href;
    }
    tmp4 = href;
  }
  if (null != tmp4) {
    const str = UnicodeSanitizationUtils.sanitizeWhitespace(content[1]);
    const normalizer = str.replace(gesture, "");
    if (!hasMisleadingURLLabel(obj5.sanitizeUnicodeConfusables(normalizer.normalize("NFKC")), tmp4)) {
      let parsed = MarkupLinkRuleDefault.parse(content, arg1, arg2);
      const tmpResult = MarkupLinkRuleDefault;
    }
    return parsed;
  }
  parsed = { type: "text", content: content[0] };
  const obj2 = { type: "text", content: content[0] };
};
obj.link = obj2;
obj.url = {
  order: t.defaultRules.url.order,
  requiredFirstCharacters: ["h", "H"],
  match(arg0) {
    const match = regex3.exec(arg0);
    if (null == match) {
      return match;
    } else {
      let diff = arr.length - 1;
      let substr = arr;
      if (0 <= diff) {
        let num2 = 0;
        substr = arr;
        if (")" === arr[diff]) {
          const index = arr.indexOf("(", num2);
          while (-1 !== index) {
            let diff1 = diff - 1;
            substr = arr;
            if (0 <= diff1) {
              diff = diff1;
              num2 = tmp5;
              substr = arr;
            }
            break;
          }
        }
        substr = arr.slice(0, -1);
      }
      match[1] = substr;
      match[0] = substr;
    }
  },
  parse(arg0) {
    const searchResult = arg0[1].search(closure_1_16);
    let str = arr;
    if (-1 !== searchResult) {
      str = arr.slice(0, searchResult);
    }
    const user = parseAllowedURL(str, true);
    if (null == user) {
      const obj = { type: "text", content: arr };
      return obj;
    } else {
      const punycodeLinkResult = MarkupLinkRule2.punycodeLink(str);
      let displayTarget;
      if (punycodeLinkResult != null) {
        displayTarget = punycodeLinkResult.displayTarget;
      }
      if (null == displayTarget) {
        const obj2 = { type: "text", content: arr };
        return obj2;
      } else {
        const _URL = URL;
        const uRL = new URL(displayTarget);
        if ("" === user.username) {
          if ("" === user.password) {
            const formatted = str.toLowerCase();
            const _HermesInternal = HermesInternal;
            let tmp3 = str;
          }
          const obj3 = { type: "url", content: null, target: null };
          const obj4 = { type: "text", content: tmp3 };
          items = [obj4];
          obj3.content = items;
          obj3.target = user.href;
          const substr = arr.slice(str.length);
          let tmp5 = obj3;
          if ("" !== substr) {
            const items1 = [obj3];
            const obj5 = { type: "text", content: substr };
            items1[1] = obj5;
            tmp5 = items1;
          }
          return tmp5;
        }
        tmp3 = displayTarget;
      }
    }
  },
};
let closure_22 = t.parserFor(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/html_parser/HTMLParserLinkUtils.tsx");

export { getLink };
export function addTextLinks(items1) {
  if (flag === undefined) {
    flag = true;
  }
  ({ marked, rawURLsOnly } = (function markInvalidAnchors(arg0) {
    const marked = [...arg0];
    const rawURLsOnly = new Set();
    let num = 0;
    if (0 < arg0.length) {
      while (true) {
        let tmp = arg0[num];
        let sum3 = num;
        if (null != tmp.link) {
          if ("" !== tmp.link) {
            let sum = sum3 + 1;
            let tmp5 = sum;
            if (sum < arg0.length) {
              let tmp6 = sum;
              tmp5 = sum;
              if (arg0[sum].link === tmp.link) {
                let sum1 = tmp6 + 1;
                tmp5 = sum1;
                while (sum1 < arg0.length) {
                  tmp6 = sum1;
                  tmp5 = sum1;
                  if (arg0[sum1].link !== tmp.link) {
                    break;
                  }
                }
              }
            }
            let sum2 = sum3;
            let str = "";
            let str2 = "";
            if (sum3 < tmp5) {
              do {
                str = `${arg0[tmp8].text}`;
                sum2 = sum2 + 1;
                str2 = str;
              } while (sum2 < tmp5);
            }
            let obj2 = require("UnicodeSanitizationUtils");
            let str3 = obj2.sanitizeWhitespace(str2);
            let obj3 = require("UnicodeSanitizationUtils");
            let normalizer = str3.replace(closure_1_14, "");
            let str4 = obj3.sanitizeUnicodeConfusables(normalizer.normalize("NFKC"));
            let trimmed = str4.trim();
            let str5 = "";
            if (0 !== trimmed.length) {
              let link1;
              if (!hasMisleadingURLLabel(trimmed, tmp.link)) {
                link1 = tmp.link;
              }
              str5 = link1;
            }
            let sum4 = tmp5;
            if (str5 !== tmp.link) {
              sum4 = tmp5;
              if (sum3 < tmp5) {
                do {
                  let tmp14 = arg0[sum3];
                  let link = tmp14.link;
                  let obj = {};
                  let merged = Object.assign(tmp14, Object.assign({ link: 0 }));
                  let tmp18 = merged;
                  if (null != str5) {
                    let obj4 = {};
                    let merged1 = Object.assign(merged);
                    obj4.link = str5;
                    tmp18 = obj4;
                  }
                  marked[sum3] = tmp18;
                  if (null == str5) {
                    let addResult = rawURLsOnly.add(sum3);
                  }
                  sum3 = sum3 + 1;
                  sum4 = tmp5;
                } while (sum3 < tmp5);
              }
            }
            num = sum4;
            if (sum4 >= arg0.length) {
              break;
            }
          }
        }
        sum4 = sum3 + 1;
      }
    }
    return { marked, rawURLsOnly };
  })(
    (function stripBidiAroundLinks(arr, flag) {
      closure_0 = arr;
      closure_1 = flag;
      if (arr.some((text) => regex.test(text.text))) {
        c2 = 0;
        let mapped = arr.map((text) => {
          const parts = text.text.split(closure_2_9);
          return parts.map((text) => {
            if (regex2.test(text)) {
              paragraph = paragraph + 1;
            }
            return { text, paragraph };
          });
        });
        const _Set = Set;
        const set = new Set();
        const item = mapped.forEach((item, index) => {
          const iter = item[Symbol.iterator]();
          while (iter !== undefined) {
            ({ text, paragraph } = nextResult);
            let replaced = text.replace(closure_2_7, "");
            let tmp5 = "" !== replaced;
            if (tmp5) {
              tmp5 = mayContainLink(closure_0[index], tmp4, closure_1);
            }
            if (tmp5) {
              let addResult = set.add(paragraph);
            }
            continue;
          }
          nextResult = iter.next();
        });
        return arr.map((item, index) => {
          const obj = {};
          const merged = Object.assign(item);
          mapped = mapped[index].map((text) => {
            let replaced = str;
            if (set.has(text.paragraph)) {
              replaced = str.replace(closure_2_7, "");
            }
            return replaced;
          });
          obj.text = mapped.join("");
          return obj;
        });
      } else {
        return arr;
      }
    })(items1, flag),
  ));
  items = [];
  for (let num = 0; num < marked.length; num = num + 1) {
    let tmp2 = marked[num];
    if ("" === tmp2.link) {
      let arr = items.push(withoutLink(tmp2));
    } else {
      if (null == tmp2.link) {
        if (flag) {
          let tmp6 = appendTextLinks(items, tmp2, !rawURLsOnly.has(num));
        }
      }
      let arr2 = items.push(tmp2);
    }
  }
  items1 = [];
  let tmp = (function markInvalidAnchors(arg0) {
    const marked = [...arg0];
    const rawURLsOnly = new Set();
    let num = 0;
    if (0 < arg0.length) {
      while (true) {
        let tmp = arg0[num];
        let sum3 = num;
        if (null != tmp.link) {
          if ("" !== tmp.link) {
            let sum = sum3 + 1;
            let tmp5 = sum;
            if (sum < arg0.length) {
              let tmp6 = sum;
              tmp5 = sum;
              if (arg0[sum].link === tmp.link) {
                let sum1 = tmp6 + 1;
                tmp5 = sum1;
                while (sum1 < arg0.length) {
                  tmp6 = sum1;
                  tmp5 = sum1;
                  if (arg0[sum1].link !== tmp.link) {
                    break;
                  }
                }
              }
            }
            let sum2 = sum3;
            let str = "";
            let str2 = "";
            if (sum3 < tmp5) {
              do {
                str = `${arg0[tmp8].text}`;
                sum2 = sum2 + 1;
                str2 = str;
              } while (sum2 < tmp5);
            }
            let obj2 = require("UnicodeSanitizationUtils");
            let str3 = obj2.sanitizeWhitespace(str2);
            let obj3 = require("UnicodeSanitizationUtils");
            let normalizer = str3.replace(closure_1_14, "");
            let str4 = obj3.sanitizeUnicodeConfusables(normalizer.normalize("NFKC"));
            let trimmed = str4.trim();
            let str5 = "";
            if (0 !== trimmed.length) {
              let link1;
              if (!hasMisleadingURLLabel(trimmed, tmp.link)) {
                link1 = tmp.link;
              }
              str5 = link1;
            }
            let sum4 = tmp5;
            if (str5 !== tmp.link) {
              sum4 = tmp5;
              if (sum3 < tmp5) {
                do {
                  let tmp14 = arg0[sum3];
                  let link = tmp14.link;
                  let obj = {};
                  let merged = Object.assign(tmp14, Object.assign({ link: 0 }));
                  let tmp18 = merged;
                  if (null != str5) {
                    let obj4 = {};
                    let merged1 = Object.assign(merged);
                    obj4.link = str5;
                    tmp18 = obj4;
                  }
                  marked[sum3] = tmp18;
                  if (null == str5) {
                    let addResult = rawURLsOnly.add(sum3);
                  }
                  sum3 = sum3 + 1;
                  sum4 = tmp5;
                } while (sum3 < tmp5);
              }
            }
            num = sum4;
            if (sum4 >= arg0.length) {
              break;
            }
          }
        }
        sum4 = sum3 + 1;
      }
    }
    return { marked, rawURLsOnly };
  })(
    (function stripBidiAroundLinks(arr, flag) {
      closure_0 = arr;
      closure_1 = flag;
      if (arr.some((text) => regex.test(text.text))) {
        c2 = 0;
        let mapped = arr.map((text) => {
          const parts = text.text.split(closure_2_9);
          return parts.map((text) => {
            if (regex2.test(text)) {
              paragraph = paragraph + 1;
            }
            return { text, paragraph };
          });
        });
        const _Set = Set;
        const set = new Set();
        const item = mapped.forEach((item, index) => {
          const iter = item[Symbol.iterator]();
          while (iter !== undefined) {
            ({ text, paragraph } = nextResult);
            let replaced = text.replace(closure_2_7, "");
            let tmp5 = "" !== replaced;
            if (tmp5) {
              tmp5 = mayContainLink(closure_0[index], tmp4, closure_1);
            }
            if (tmp5) {
              let addResult = set.add(paragraph);
            }
            continue;
          }
          nextResult = iter.next();
        });
        return arr.map((item, index) => {
          const obj = {};
          const merged = Object.assign(item);
          mapped = mapped[index].map((text) => {
            let replaced = str;
            if (set.has(text.paragraph)) {
              replaced = str.replace(closure_2_7, "");
            }
            return replaced;
          });
          obj.text = mapped.join("");
          return obj;
        });
      } else {
        return arr;
      }
    })(items1, flag),
  );
  for (const item10040 of tmp9) {
    let rawURL = item10040.rawURL;
    let tmp12 = _objectWithoutProperties(item10040, closure_3);
    let obj = HTMLParserRunUtils;
    let mergeRunResult = obj.mergeRun(items1, tmp12.text, tmp12);
    continue;
  }
  return items1;
}
