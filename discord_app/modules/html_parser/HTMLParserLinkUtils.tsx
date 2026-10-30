// discord_app/modules/html_parser/HTMLParserLinkUtils.tsx
import MarkupLinkRuleDefault from "../markup/MarkupLinkRule.tsx";
import HTMLParserRunUtils from "HTMLParserRunUtils.tsx";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import t from "../../../_runtime/metro/01944__.js";

require = fn;
function getLink(href, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (null != href) {
    try {
      const _URL = URL;
      const uRL = new URL(href);
      if ("http:" !== uRL.protocol) {
        return tmp7.href;
      }
    } catch (err) {
      return tmp;
    }
  }
}
function appendParsedNode(items1, content, bold, target) {
  if (Array.isArray(content)) {
    const iter = content[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp18 = appendParsedNode(items1, nextResult, bold, target);
      continue;
    }
  } else {
    if ("text" === content.type) {
      if (typeof content.content === "string") {
        let tmp4 = bold;
        if (null != target) {
          const obj2 = {};
          const merged = Object.assign(bold);
          obj2.link = target;
          tmp4 = obj2;
        }
        HTMLParserRunUtils.mergeRun(items1, content.content, tmp4);
      }
    }
    if ("link" === content.type) {
      appendParsedNode(items1, content.content, bold, content.target);
    }
  }
}
let closure_3 = ["link"];
let closure_4 = ["link"];
const HTMLParserConstants = fn(9385);
({
  ASCII_CONTROL_CHARACTERS: metroRequire,
  HTTP_URL_SCHEME: closure_7,
  URL_AT_RUN_END: closure_8,
  URL_CONTINUATION_AT_RUN_START: closure_9,
  URL_IN_LABEL: c10,
  URL_MATCH: closure_11,
} = HTMLParserConstants);
let obj = { text: t.defaultRules.text, link: null, url: null };
let obj2 = {};
const MarkupLinkRule = Object.assign(MarkupLinkRuleDefault);
obj2.match = function match(arg0, arg1, arg2) {
  const match = MarkupLinkRuleDefault.match(arg0, arg1, arg2);
  let tmp4 = null;
  if (null != match) {
    tmp4 = null;
    if (null != getLink(tmpResult.unescapeUrl(match[2]))) {
      tmp4 = match;
    }
    tmpResult = t;
  }
  return tmp4;
};
obj2.parse = function parse(content, arg1, arg2) {
  const tmp3 = getLink(t.unescapeUrl(content[2]));
  if (null != tmp3) {
    _require = tmp3;
    const obj4 = require("UnicodeSanitizationUtils");
    const sanitizeWhitespaceResult = require("UnicodeSanitizationUtils").sanitizeWhitespace(content[1]);
    const result = require("UnicodeSanitizationUtils").sanitizeUnicodeConfusables(sanitizeWhitespaceResult);
    const _Array = Array;
    const obj5 = require("UnicodeSanitizationUtils");
    if (
      !arr.some((item) => {
        [tmp] = item;
        return getLink(tmp, true) !== link;
      })
    ) {
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
    const match = regex4.exec(arg0);
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
    const searchResult = arg0[1].search(timestampProducer);
    let substr = arr;
    if (-1 !== searchResult) {
      substr = arr.slice(0, searchResult);
    }
    const tmp2 = getLink(substr, true);
    if (null == tmp2) {
      const obj2 = { type: "text", content: arr };
      return obj2;
    } else {
      const obj = { type: "link", content: null, target: null };
      const obj3 = { type: "text", content: substr };
      const items = [obj3];
      obj.content = items;
      obj.target = tmp2;
      const substr1 = arr.slice(substr.length);
      let tmp4 = obj;
      if ("" !== substr1) {
        const items1 = [obj];
        const obj4 = { type: "text", content: substr1 };
        items1[1] = obj4;
        tmp4 = items1;
      }
      return tmp4;
    }
  },
};
let closure_13 = t.parserFor(obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/html_parser/HTMLParserLinkUtils.tsx");

export { getLink };
export function addTextLinks(items1) {
  const items = [...items1];
  const set = new Set();
  let num = 0;
  if (0 < items1.length) {
    while (true) {
      let tmp = items1[num];
      let sum3 = num;
      if (null != tmp.link) {
        if ("" !== tmp.link) {
          let sum = sum3 + 1;
          let tmp5 = sum;
          if (sum < items1.length) {
            let tmp6 = sum;
            tmp5 = sum;
            if (items1[sum].link === tmp.link) {
              let sum1 = tmp6 + 1;
              tmp5 = sum1;
              while (sum1 < items1.length) {
                tmp6 = sum1;
                tmp5 = sum1;
                if (items1[sum1].link !== tmp.link) {
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
              str = `${items1[tmp8].text}`;
              sum2 = sum2 + 1;
              str2 = str;
            } while (sum2 < tmp5);
          }
          let tmp9 = link;
          let obj2 = link(6033);
          let str3 = obj2.sanitizeWhitespace(str2);
          let trimmed = str3.trim();
          let str4 = "";
          if (0 !== trimmed.length) {
            link = tmp.link;
            let tmp9Result = tmp9(6033);
            let result = tmp9Result.sanitizeUnicodeConfusables(trimmed);
            let _Array = Array;
            let arr = Array.from(result.matchAll(closure_10));
            let link1;
            if (
              !arr.some((item) => {
                [tmp] = item;
                return getLink(tmp, true) !== link;
              })
            ) {
              link1 = tmp.link;
            }
            str4 = link1;
          }
          let sum4 = tmp5;
          if (str4 !== tmp.link) {
            sum4 = tmp5;
            if (sum3 < tmp5) {
              do {
                let tmp13 = items1[sum3];
                link = tmp13.link;
                let tmp16 = _objectWithoutProperties(tmp13, closure_3);
                let tmp18 = tmp16;
                if (null != str4) {
                  let obj = {};
                  let merged = Object.assign(tmp16);
                  obj.link = str4;
                  tmp18 = obj;
                }
                items[sum3] = tmp18;
                if (null == str4) {
                  let addResult = set.add(sum3);
                }
                sum3 = sum3 + 1;
                sum4 = tmp5;
              } while (sum3 < tmp5);
            }
          }
          num = sum4;
          if (sum4 >= items1.length) {
            break;
          }
        }
      }
      sum4 = sum3 + 1;
    }
  }
  items1 = [];
  let num2 = 0;
  let flag = false;
  if (0 < items.length) {
    do {
      let tmp23 = items[num2];
      if (null != tmp23.link) {
        if ("" === tmp23.link) {
          let link2 = tmp23.link;
          let tmp48 = _objectWithoutProperties(tmp23, closure_4);
          let obj11 = link(9410);
          let mergeRunResult = obj11.mergeRun(items1, tmp23.text, tmp48);
          let flag2 = false;
        } else {
          let obj10 = link(9410);
          let mergeRunResult1 = obj10.mergeRun(items1, tmp23.text, tmp23);
          flag2 = false;
        }
      } else {
        let tmp52 = items[num2 + 1];
        let isMatch = null != tmp52 && null == tmp52.link;
        if (isMatch) {
          let text = tmp23.text;
          isMatch = !text.includes("](");
        }
        if (isMatch) {
          isMatch = regex2.test(tmp23.text);
        }
        if (isMatch) {
          isMatch = regex3.test(tmp52.text);
        }
        if (!flag) {
          if (!isMatch) {
            let hasItem = set.has(num2);
            let tmp30 = !hasItem;
            let text2 = tmp23.text;
            let hasItem2 = tmp30;
            let hasItem1 = text2.includes("[");
            if (!hasItem) {
              let text3 = tmp23.text;
              hasItem2 = text3.includes("](");
            }
            if (!hasItem2) {
              let obj3 = { inline: true, allowLinks: tmp30 };
              let tmp39 = appendParsedNode(items1, closure_13(tmp23.text, obj3), tmp23);
              flag2 = isMatch;
            }
            let obj7 = link(9410);
            let mergeRunResult2 = obj7.mergeRun(items1, tmp23.text, tmp23);
            flag2 = isMatch;
          }
        }
        let obj9 = link(9410);
        let mergeRunResult3 = obj9.mergeRun(items1, tmp23.text, tmp23);
        flag2 = isMatch;
      }
      num2 = num2 + 1;
      flag = flag2;
    } while (num2 < items.length);
  }
  return items1;
}
