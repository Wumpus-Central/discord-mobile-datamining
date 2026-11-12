// discord_app/modules/media/PlaintextFileMarkdownParser.tsx
import findCodedLinks from "../coded_links/findCodedLinks.tsx";
import MarkupLinkRule from "../markup/MarkupLinkRule.tsx";
import UnicodeSanitizationUtils from "../markup/UnicodeSanitizationUtils.tsx";
import _modDef12421 from "../../../_runtime/metro/12421__.js";

require = fn;
function createLinkNode(arr) {
  ({ attrs, children } = arr);
  let str = attrs.href;
  if (str == null) {
    str = "";
  }
  const punycodeLinkResult = MarkupLinkRule.punycodeLink(str);
  if ("autolink" === arr.markup) {
    if (null == punycodeLinkResult) {
      ({ attrs: attrs3, children: children3, markup: markup2 } = arr);
      if ("autolink" === markup2) {
        items = ["<"];
        items[HermesBuiltin.arraySpread(children3, 1)] = ">";
        children3 = { type: "element", tag: "span", attrs: {}, children: items };
        let element = children3;
      } else {
        let str15 = "";
        if (null != attrs3.title) {
          str15 = "";
          if ("" !== attrs3.title) {
            const _HermesInternal3 = HermesInternal;
            str15 = ' "' + attrs3.title + '"';
          }
        }
        let str18 = attrs3.href;
        if (str18 == null) {
          str18 = "";
        }
        const _HermesInternal4 = HermesInternal;
        let str21 = "[";
        const combined = "](" + str18 + str15 + ")";
        if ("image" === markup2) {
          str21 = "![";
        }
        const items1 = [str21];
        items1[HermesBuiltin.arraySpread(children3, 1)] = combined;
        element = { type: "element", tag: "span", attrs: {}, children: items1 };
      }
    } else {
      const element1 = { type: "link", href: null, title: null, children: null };
      ({ target: obj10.href, displayTarget: obj10.title } = punycodeLinkResult);
      const items2 = [punycodeLinkResult.displayTarget];
      element1.children = items2;
      return element1;
    }
  } else {
    const tmpResult = UnicodeSanitizationUtils;
    let displayTarget = UnicodeSanitizationUtils.sanitizeWhitespace(arr.text).trim();
    const str24 = UnicodeSanitizationUtils.sanitizeWhitespace(arr.text);
    let str2 = attrs.title;
    if (str2 == null) {
      str2 = "";
    }
    const tmpResult6 = UnicodeSanitizationUtils;
    let trimmed = UnicodeSanitizationUtils.sanitizeWhitespace(str2).trim();
    if (null != punycodeLinkResult) {
      if (true !== arr.hasMath) {
        if (children.length <= 0) {
          if (!re4.test(tmpResult7.sanitizeUnicodeConfusables(displayTarget))) {
            if (!re4.test(tmpResult8.sanitizeUnicodeConfusables(trimmed))) {
              if (!tmpResult9.containsCodedLink(displayTarget)) {
                if (!tmpResult10.containsCodedLink(trimmed)) {
                  if ("" === trimmed) {
                    if ("" === displayTarget) {
                      displayTarget = punycodeLinkResult.displayTarget;
                    }
                    trimmed = displayTarget;
                  }
                  const element2 = { type: "link", href: punycodeLinkResult.target, title: trimmed, children: null };
                  if (children.length <= 0) {
                    const items3 = [punycodeLinkResult.displayTarget];
                    children = items3;
                  }
                  element2.children = children;
                  return element2;
                }
                tmpResult10 = findCodedLinks;
              }
              tmpResult9 = findCodedLinks;
            }
            tmpResult8 = UnicodeSanitizationUtils;
          }
          tmpResult7 = UnicodeSanitizationUtils;
        }
      }
    }
    ({ attrs: attrs2, children: children2, markup } = arr);
    if ("autolink" === markup) {
      const items4 = ["<"];
      items4[HermesBuiltin.arraySpread(children2, 1)] = ">";
      const element3 = { type: "element", tag: "span", attrs: {}, children: items4 };
      let element4 = element3;
    } else {
      let str6 = "";
      if (null != attrs2.title) {
        str6 = "";
        if ("" !== attrs2.title) {
          const _HermesInternal = HermesInternal;
          str6 = ' "' + attrs2.title + '"';
        }
      }
      let str9 = attrs2.href;
      if (str9 == null) {
        str9 = "";
      }
      const _HermesInternal2 = HermesInternal;
      let str12 = "[";
      const combined1 = "](" + str9 + str6 + ")";
      if ("image" === markup) {
        str12 = "![";
      }
      const items5 = [str12];
      items5[HermesBuiltin.arraySpread(children2, 1)] = combined1;
      element4 = { type: "element", tag: "span", attrs: {}, children: items5 };
    }
    return element4;
  }
}
function closeMarkdownFrame(items) {
  const arr = items.pop();
  items[items.length - 1].text = items[items.length - 1].text + arr.text;
  if (true === arr.hasMath) {
    tmp2.hasMath = true;
  }
  const children = tmp2.children;
  const push = children.push;
  if (arr.hidden) {
    items = [];
    HermesBuiltin.arraySpread(arr.children, 0);
    HermesBuiltin.apply(items, children);
  } else {
    if ("a" === arr.tag) {
      let element1 = createLinkNode(arr);
    } else if (set.has(arr.tag)) {
      const element = { type: "element", tag: null, attrs: null, children: null, loose: null, align: null };
      ({ tag: obj2.tag, attrs: obj2.attrs, children: obj2.children, loose: obj2.loose, align: obj2.align } = arr);
      element1 = element;
    } else {
      element1 = { type: "element", tag: "span", attrs: {}, children: arr.children };
    }
    push(element1);
  }
}
function parseMarkdownTokens(children1, remaining) {
  items = [{ tag: "", attrs: {}, children: [], text: "", markup: "" }];
  if (0 < children1.length) {
    let num2 = 0;
    if (remaining.remaining > 0) {
      while (true) {
        remaining.remaining = remaining.remaining - 1;
        let element = children1[num2];
        let tmp = items[items.length - 1];
        if (1 !== element.nesting) {
          if (-1 !== element.nesting) {
            switch (element.type) {
              case "inline":
                let children = tmp.children;
                let push2 = children.push;
                children1 = element.children;
                if (children1 == null) {
                  children1 = [];
                }
                let items1 = [];
                let arraySpreadResult = HermesBuiltin.arraySpread(parseMarkdownTokens(children1, remaining), 0);
                let applyResult = HermesBuiltin.apply(items1, children);
                break;
              case "text":
                let children2 = tmp.children;
                let arr = children2.push(element.content);
                let sum = tmp.text + element.content;
                tmp.text = sum;
                break;
              case "text_special":
                children2 = tmp.children;
                arr = children2.push(element.content);
                sum = tmp.text + element.content;
                tmp.text = sum;
                break;
              case "code_inline":
                let children3 = tmp.children;
                let obj2 = { type: "inlineCode", content: element.content };
                let arr2 = children3.push(obj2);
                tmp.text = tmp.text + element.content;
                break;
              case "math_inline":
                let children4 = tmp.children;
                let obj3 = { type: "inlineMath", content: element.content, display: null };
                let tmp20 = "math_inline_double" === element.type;
                obj3.display = tmp20;
                let arr3 = children4.push(obj3);
                let sum1 = tmp.text + element.content;
                tmp.text = sum1;
                tmp.hasMath = true;
                break;
              case "math_inline_double":
                children4 = tmp.children;
                obj3 = { type: "inlineMath", content: element.content, display: null };
                tmp20 = "math_inline_double" === element.type;
                obj3.display = tmp20;
                arr3 = children4.push(obj3);
                sum1 = tmp.text + element.content;
                tmp.text = sum1;
                tmp.hasMath = true;
                break;
              case "fence":
                let children5 = tmp.children;
                let str4 = element.info;
                let str5 = str4.trim();
                let tmp15 = /\s+/;
                let parts = str5.split(tmp15);
                let first = parts[0];
                let tmp18;
                if ("" !== first) {
                  tmp18 = first;
                }
                let obj4 = { type: "codeBlock", language: tmp18, content: element.content };
                let arr4 = children5.push(obj4);
                break;
              case "code_block":
                children5 = tmp.children;
                str4 = element.info;
                str5 = str4.trim();
                tmp15 = /\s+/;
                parts = str5.split(tmp15);
                first = parts[0];
                tmp18 = undefined;
                if ("" !== first) {
                  tmp18 = first;
                }
                obj4 = { type: "codeBlock", language: tmp18, content: element.content };
                arr4 = children5.push(obj4);
                break;
              case "math_block":
                let children6 = tmp.children;
                let obj5 = { type: "mathBlock", content: element.content };
                let arr5 = children6.push(obj5);
                break;
              case "softbreak":
                let children7 = tmp.children;
                let arr6 = children7.push(" ");
                tmp.text = tmp.text + " ";
                break;
              case "hardbreak":
                let children8 = tmp.children;
                let arr7 = children8.push({ type: "br" });
                tmp.text = tmp.text + " ";
                break;
              case "hr":
                let children9 = tmp.children;
                let arr8 = children9.push({ type: "hr" });
                break;
              case "image":
                let content = element.content;
                let children10 = tmp.children;
                let push = children10.push;
                if (items.some((tag) => "a" === tag.tag)) {
                  let arr9 = push(content);
                  tmp.text = tmp.text + content;
                } else {
                  let str2 = element.attrGet("src");
                  if (str2 == null) {
                    str2 = "";
                  }
                  let obj6 = { href: String(str2), title: null };
                  let str3 = element.attrGet("title");
                  if (str3 == null) {
                    str3 = "";
                  }
                  let obj7 = { tag: "a", attrs: null, children: null, text: null, markup: "image" };
                  obj6.title = String(str3);
                  obj7.attrs = obj6;
                  if ("" !== content) {
                    let items2 = [content];
                    let items3 = items2;
                  } else {
                    items3 = [];
                  }
                  obj7.children = items3;
                  obj7.text = content;
                  let arr10 = push(createLinkNode(obj7));
                }
                break;
              default:
                if ("" !== element.content) {
                  let children11 = tmp.children;
                  let arr11 = children11.push(element.content);
                  tmp.text = tmp.text + element.content;
                }
            }
          } else if (items.length > 1) {
            let tmp41 = closeMarkdownFrame(items);
          }
        } else {
          let tmp3 = "p" === element.tag && !element.hidden && "li" === tmp.tag && items.length >= 2;
          if (tmp3) {
            items[items.length - 2].loose = true;
          }
          let obj = { tag: null, attrs: null, children: null, text: "", markup: null, align: null, hidden: null };
          ({ tag: obj.tag, attrs } = element);
          if (attrs == null) {
            attrs = [];
          }
          obj.attrs = Object.fromEntries(
            attrs.map((item) => {
              [tmp, tmp2] = item;
              items = [tmp, String(tmp2)];
              return items;
            }),
          );
          obj.children = [];
          obj.markup = element.markup;
          if ("th" === element.tag) {
            let str = element.attrGet("style");
            let match = null;
            if (typeof str === "string") {
              match = str.match(/text-align:\s*(left|center|right)/);
            }
            let tmp6;
            if (null != match) {
              tmp6 = match[1];
            }
            let tmp4 = tmp6;
          }
          obj.align = tmp4;
          obj.hidden = element.hidden;
          let arr12 = items.push(obj);
        }
        let sum2 = num2 + 1;
        if (sum2 >= children1.length) {
          break;
        } else {
          num2 = sum2;
          if (remaining.remaining <= 0) {
            break;
          }
        }
      }
    }
  }
  if (items.length > 1) {
    do {
      let tmp36 = closeMarkdownFrame(items);
      length = items.length;
    } while (length > 1);
  }
  if (remaining.remaining <= 0) {
    const children12 = items[0].children;
    children12.push("\u2026");
  }
  return items[0].children;
}
let closure_2 = new _modDef12421({ html: false, linkify: false, typographer: false }).use(fn(12426).dollarmathPlugin, {
  allow_space: false,
  allow_digits: false,
  allow_labels: false,
});
const set = new Set([
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "ul",
  "ol",
  "li",
  "em",
  "strong",
  "s",
  "blockquote",
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
]);
const re4 = /(?:https?|steam):\/\/[^\s<]/i;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media/PlaintextFileMarkdownParser.tsx");

export function parseMarkdownPreview(text) {
  return parseMarkdownTokens(closure_2.parse(text, {}), { remaining: 5000 });
}
