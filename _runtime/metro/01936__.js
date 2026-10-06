// === Module 1936: ? ===

// Module 1936
let hasOwnProperty, map;

let fn = function t() {
  let _RegExp31;
  let anyScopeRegex;
  let obj15;
  let obj19;
  let obj2;
  let obj20;
  let obj21;
  let obj22;
  let obj23;
  let obj3;
  let obj9;
  let regExp5;
  let regExp6;
  let regExp7;
  let regExp8;
  let tmp9;
  function parse(arg0, fn, inline) {
    num = 2;
    if ("=" === arg0[2]) {
      num = 1;
    }
    obj = { type: "heading", level: num, content: null };
    if (typeof parseInline === "function") {
      const tmp3 = inline.inline || false;
      inline.inline = true;
      inline.inline = tmp3;
      obj.content = fn(tmp, inline);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  function react(arg0, arg1, key) {
    let tmp4;
    if (typeof reactElement === "function") {
      const element = { $$typeof: num, type: "hr", key: tmp4, ref: null, props: tmp, _owner: null };
      tmp4 = undefined;
      if (null != key.key) {
        tmp4 = key;
      }
      return element;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  function html(arg0, arg1, arg2) {
    return "<hr>";
  }
  const parse2 = function parse(arg0, arg1, arg2) {
    let str2;
    obj = { lang: "Array", content: str2.replace(/\n+$/, "") };
    const str = arg0[0];
    str2 = str.replace(/^    /gm, "");
    return obj;
  };
  const react2 = function react(children, arg1, key) {
    let element;
    let tmp5;
    let text;
    if (children.lang) {
      text = `markdown-code-${children.lang}`;
    }
    const props = { className: text, children: children.content };
    if (typeof reactElement === "function") {
      const obj2 = { children: element };
      element = { $$typeof: num, type: "code", key: undefined, ref: null, props, _owner: null };
      if (typeof tmp2 === "function") {
        const element1 = { $$typeof: tmp3, type: "pre", key: tmp5, ref: null, props: obj2, _owner: null };
        tmp5 = undefined;
        if (null != key.key) {
          tmp5 = key;
        }
        return element1;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const html2 = function html(lang, arg1, arg2) {
    let text;
    if (lang.lang) {
      text = `markdown-code-${lang.lang}`;
    }
    if (typeof sanitizeText === "function") {
      const _String = String;
      obj = { class: text };
      const str2 = String(tmp3);
      return htmlTag("pre", htmlTag("code", str2.replace(re15, f135731), obj));
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const parse3 = function parse(content, arg1, arg2) {
    return { type: "codeBlock", lang: content[2] || undefined, content: content[3] };
  };
  const parse4 = function parse(arg0, fn, arg2) {
    obj = { content: fn(str.replace(/^ *> ?/gm, ""), arg2) };
    return obj;
  };
  const react3 = function react(content, fn, key) {
    let tmp3;
    const props = { children: fn(content.content, key) };
    if (typeof reactElement === "function") {
      const element = { $$typeof: num, type: "blockquote", key: tmp3, ref: null, props, _owner: null };
      tmp3 = undefined;
      if (null != key.key) {
        tmp3 = key;
      }
      return element;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const html3 = function html(content, fn, arg2) {
    return htmlTag("blockquote", fn(content.content, arg2));
  };
  const parse5 = function parse(arg0, arg1, _refs) {
    const str = arg0[1];
    const str2 = str.replace(/\s+/g, " ");
    const def = str2.toLowerCase();
    const target = arg0[2];
    const title = arg0[3];
    const tmp4 = _refs._refs && _refs._refs[def];
    if (tmp4) {
      const arr = _refs._refs[def];
      const item = arr.forEach((item) => {
        item.target = target;
        item.title = title;
      });
    }
    _refs._defs = _refs._defs || {};
    _refs._defs[def] = { target, title };
    return { def, target, title };
  };
  const react4 = function react() {
    return null;
  };
  const html4 = function html() {
    return "";
  };
  const react5 = function react(arg0, arg1, key) {
    let _typeof;
    let cells;
    let element;
    let header;
    let tmp6;
    const align = arg0;
    let closure_1 = arg1;
    let closure_2 = key;
    ({ header, cells } = arg0);
    const mapped = header.map((item, index) => {
      let style;
      const text = `${index}`;
      if (null == align.align[index]) {
        style = {};
      } else {
        style = { textAlign: tmp3.align[index] };
      }
      const obj2 = { style, scope: "col", children: closure_1(item, key) };
      if (typeof reactElement === "function") {
        const element = { $$typeof: num, type: "th", key: text, ref: null, props: obj2, _owner: null };
        return element;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    });
    key = key.key;
    if (typeof reactElement === "function") {
      let props = { children: element };
      element = { $$typeof: num, type: "tr", key: undefined, ref: null, props: { children: mapped }, _owner: null };
      if (typeof reactElement === "function") {
        const element1 = { $$typeof: num, type: "thead", key: "thead", ref: null, props, _owner: null };
        const str = "thead";
        const items = [element1, ];
        let obj2 = { children: tmp2 };
        if (typeof reactElement === "function") {
          const element2 = { $$typeof: num, type: "tbody", key: "tbody", ref: null, props: obj2, _owner: null };
          const obj3 = { children: items };
          items[1] = element2;
          if (typeof reactElement === "function") {
            const element3 = { $$typeof: num, type: "table", key: tmp6, ref: null, props: obj3, _owner: null };
            tmp6 = undefined;
            if (null != key) {
              tmp6 = key;
            }
            return element3;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const html5 = function html(header, arg1, arg2) {
    let closure_1 = arg1;
    let closure_2 = arg2;
    header = header.header;
    let mapped = header.map((item, index) => {
      let style = "";
      const tmp2 = closure_1(item, closure_2);
      if (null != header.align[index]) {
        style = `${"text-align:" + closure_0.align[index]};`;
      }
      return htmlTag("th", tmp2, { style, scope: "col" });
    });
    const cells = header.cells;
    const joined = mapped.join("");
    const mapped1 = cells.map((arr) => {
      let align;
      const mapped = arr.map((item, index) => {
        let style = "";
        const tmp2 = closure_1_1(item, closure_1_2);
        if (null != header.align[index]) {
          style = `${"text-align:" + closure_1_0.align[index]};`;
        }
        return htmlTag("td", tmp2, { style });
      });
      return htmlTag("tr", mapped.join(""));
    });
    const joined1 = mapped1.join("");
    const tmp3 = htmlTag("thead", htmlTag("tr", joined));
    return htmlTag("table", tmp3 + htmlTag("tbody", joined1));
  };
  const react6 = function react(arg0, arg1, arg2) {
    return "\n";
  };
  const html6 = function html(arg0, arg1, arg2) {
    return "\n";
  };
  const react7 = function react(content, fn, key) {
    let tmp3;
    const props = { className: "paragraph", children: fn(content.content, key) };
    if (typeof reactElement === "function") {
      const element = { $$typeof: num, type: "div", key: tmp3, ref: null, props, _owner: null };
      tmp3 = undefined;
      if (null != key.key) {
        tmp3 = key;
      }
      return element;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const html7 = function html(content, fn, arg2) {
    return htmlTag("div", fn(content.content, arg2), { class: "paragraph" });
  };
  const parse6 = function parse(content, arg1, arg2) {
    return { type: "text", content: content[1] };
  };
  const parse7 = function parse(content, arg1, arg2) {
    let items;
    obj = { type: "link", content: items, target: content[1] };
    items = [];
    const obj2 = { type: "text", content: content[1] };
    items[0] = obj2;
    return obj;
  };
  const parse8 = function parse(arg0, arg1, arg2) {
    let items;
    let text = tmp2;
    const tmp = arg0[1];
    if (!re29.test(arg0[1])) {
      text = `mailto:${tmp2}`;
    }
    obj = { type: "link", content: items, target: text };
    items = [{ type: "text", content: tmp }];
    return obj;
  };
  const parse9 = function parse(content, arg1, arg2) {
    let items;
    obj = { type: "link", content: items, target: content[1], title: "unicodeVersion" };
    items = [];
    const obj2 = { type: "text", content: content[1] };
    items[0] = obj2;
    return obj;
  };
  function quality(arg0) {
    return arg0[0].length + 0.1;
  }
  const react8 = function react(content, fn, key) {
    let tmp3;
    const props = { children: fn(content.content, key) };
    if (typeof reactElement === "function") {
      const element = { $$typeof: num, type: "strong", key: tmp3, ref: null, props, _owner: null };
      tmp3 = undefined;
      if (null != key.key) {
        tmp3 = key;
      }
      return element;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const html8 = function html(content, fn, arg2) {
    return htmlTag("strong", fn(content.content, arg2));
  };
  const quality2 = function quality(arg0) {
    return arg0[0].length;
  };
  const react9 = function react(content, fn, key) {
    let tmp3;
    const props = { children: fn(content.content, key) };
    if (typeof reactElement === "function") {
      const element = { $$typeof: num, type: "u", key: tmp3, ref: null, props, _owner: null };
      tmp3 = undefined;
      if (null != key.key) {
        tmp3 = key;
      }
      return element;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const html9 = function html(content, fn, arg2) {
    return htmlTag("u", fn(content.content, arg2));
  };
  const react10 = function react(content, fn, key) {
    let tmp3;
    const props = { children: fn(content.content, key) };
    if (typeof reactElement === "function") {
      const element = { $$typeof: num, type: "del", key: tmp3, ref: null, props, _owner: null };
      tmp3 = undefined;
      if (null != key.key) {
        tmp3 = key;
      }
      return element;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const html10 = function html(content, fn, arg2) {
    return htmlTag("del", fn(content.content, arg2));
  };
  const parse10 = function parse(arg0, arg1, arg2) {
    obj = { content: str.replace(re24, "$1") };
    return obj;
  };
  const react11 = function react(children, arg1, key) {
    let tmp3;
    const props = { children: children.content };
    if (typeof reactElement === "function") {
      const element = { $$typeof: num, type: "code", key: tmp3, ref: null, props, _owner: null };
      tmp3 = undefined;
      if (null != key.key) {
        tmp3 = key;
      }
      return element;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const html11 = function html(arg0, arg1, arg2) {
    if (typeof sanitizeText === "function") {
      const _String = String;
      const str = String(tmp2);
      return tmp("code", str.replace(re15, f135731));
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const react12 = function react(arg0, arg1, key) {
    let tmp4;
    if (typeof reactElement === "function") {
      const element = { $$typeof: num, type: "br", key: tmp4, ref: null, props: tmp, _owner: null };
      tmp4 = undefined;
      if (null != key.key) {
        tmp4 = key;
      }
      return element;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const html12 = function html(arg0, arg1, arg2) {
    return "<br>";
  };
  const parse11 = function parse(content, arg1, arg2) {
    return { content: content[0] };
  };
  const react13 = function react(content, arg1, arg2) {
    return content.content;
  };
  const html13 = function html(arg0, arg1, arg2) {
    if (typeof sanitizeText === "function") {
      const _String = String;
      const str = String(tmp);
      return str.replace(re15, f135731);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const f135731 = (arg0) => closure_1_16[arg0];
  const re7 = /\r\n?/g;
  const re8 = /\t/g;
  const re9 = /\f/g;
  let num = typeof Symbol === "function";
  if (typeof Symbol === "function") {
    const _Symbol2 = Symbol;
    num = Symbol.for;
  }
  if (num) {
    const _Symbol = Symbol;
    let str = "react.transitional.element";
    num = Symbol.for("react.transitional.element");
  }
  if (!num) {
    num = 60103;
  }
  function reactElement(type, arg1, props) {
    let tmp;
    const element = { $$typeof: num, type, key: tmp, ref: null, props, _owner: null };
    tmp = undefined;
    if (null != arg1) {
      tmp = arg1;
    }
    return element;
  }
  function htmlTag(tr, joined, arg2, arg3) {
    const tmp2 = arg2 || {};
    let str = "";
    let str2 = "";
    const tmp3 = undefined === arg3 || arg3;
    const keys = Object.keys();
    if (keys !== undefined) {
      str2 = str;
      while (keys[tmp] !== undefined) {
        let tmp15 = tmp2[tmp6];
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        let tmp7 = hasOwnProperty.call(tmp2, tmp6) && tmp15;
        if (!tmp7) {
          continue;
        } else if (typeof sanitizeText === "function") {
          let _String = String;
          let str3 = String(tmp6);
          if (typeof tmp8 === "function") {
            let _String2 = String;
            let text = `${" " + str3.replace(re15, f135731)}="`;
            let str4 = String(tmp15);
            let _HermesInternal = HermesInternal;
            str = tmp5 + `${" " + str3.replace(re15, f135731)}="` + str4.replace(re15, f135731) + "\"";
            continue;
          } else {
            let str7 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          let str6 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
        continue;
      }
    }
    const combined = `<${tr}` + str2 + ">";
    let text1 = combined;
    if (tmp3) {
      text1 = `${tmp11 + joined + "</" + tr}>`;
    }
    return text1;
  }
  let closure_13 = {};
  function sanitizeUrl(arg0) {
    if (null == arg0) {
      return null;
    } else {
      try {
        const _URL = URL;
        const self = this;
        const self2 = this;
        const uRL = new URL(arg0, "https://localhost");
        const protocol = uRL.protocol;
        if (0 !== protocol.indexOf("javascript:")) {
          if (0 !== protocol.indexOf("vbscript:")) {
            if (0 !== protocol.indexOf("data:")) {
              return arg0;
            }
          }
        }
        return null;
      } catch (err) {
        return null;
      }
    }
  }
  const re15 = /[<>&"']/g;
  let closure_16 = { "<": "&lt;", ">": "&gt;", "&": "&amp;", "\"": "&quot;", "'": "&#x27;", "/": "&#x2F;", "`": "&#96;" };
  function sanitizeText(arg0) {
    const str = String(arg0);
    return str.replace(re15, f135731);
  }
  const re18 = /\\([^0-9A-Za-z\s])/g;
  function unescapeUrl(str) {
    return str.replace(re18, "$1");
  }
  function parseInline(fn, formatted, inline) {
    const tmp = inline.inline || false;
    inline.inline = true;
    inline.inline = tmp;
    return fn(formatted, inline);
  }
  let regExp = new RegExp("^( *)((?:[*+-]|\\d+\\.)) +");
  const regExp1 = new RegExp("( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\n|$)", "gm");
  let tmp3 = /\n{2,}$/;
  const re23 = tmp3;
  const re24 = /^ (?= *`)|(` *) $/g;
  const re25 = tmp3;
  const re26 = / *\n+$/;
  const regExp2 = new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) )\\n*|\\s*\n*$)");
  const re28 = /(?:^|\n)( *)$/;
  const re0 = /^ *\| *| *\| *$/g;
  const re1 = / *$/;
  const re2 = /^ *-+: *$/;
  const re3 = /^ *:-+: *$/;
  const re4 = /^ *:-+ *$/;
  function l(arg0) {
    let str = "right";
    if (!re2.test(arg0)) {
      let str2 = "center";
      if (!re3.test(arg0)) {
        let str3 = null;
        if (re4.test(arg0)) {
          str3 = "left";
        }
        str2 = str3;
      }
      str = str2;
    }
    return str;
  }
  function o(arg0, arg1, arg2, arg3) {

  }
  const fn = function i(arg0) {
    let closure_0 = arg0;
    return (arg0, fn, inTable) => {
      inTable.inline = true;
      let str = arg0[1];
      const tmp = closure_0;
      if (typeof o === "function") {
        const tmp2 = fn;
        closure_0 = tmp;
        inTable.inTable = true;
        inTable = inTable.inTable;
        let arr = fn(str.trim(), inTable);
        inTable.inTable = inTable;
        let items = [[]];
        let item = arr.forEach((type, index) => {
          if ("tableSeparator" === type.type) {
            let tmp9 = !closure_0;
            if (closure_0) {
              tmp9 = 0 !== index && index !== length.length - 1;
              const tmp10 = 0 !== index && index !== length.length - 1;
            }
            if (tmp9) {
              items.push([]);
            }
          } else {
            let tmp4 = "text" !== type.type;
            if (!tmp4) {
              tmp4 = null != length[index + 1] && "tableSeparator" !== tmp[index + 1].type;
            }
            if (!tmp4) {
              const str = type.content;
              type.content = str.replace(closure_2_1, "");
            }
            const arr = items[items.length - 1];
            arr.push(type);
          }
        });
        let str3 = str2;
        if (tmp) {
          str3 = str2.replace(re0, "");
        }
        const str5 = str3.trim();
        const parts = str5.split("|");
        closure_0 = fn;
        let closure_1 = inTable;
        let closure_2 = tmp;
        const str7 = arg0[3];
        const mapped = parts.map(l);
        const str8 = str7.trim();
        const parts1 = str8.split("\n");
        inTable.inline = false;
        obj = {
          type: "table",
          header: items,
          align: mapped,
          cells: parts1.map((item) => {
              if (typeof closure_2_6 === "function") {
                let tmp4 = item;
                closure_0 = tmp3;
                closure_1.inTable = true;
                const inTable = tmp2.inTable;
                const tmpResult = tmp(item.trim(), closure_1);
                closure_1 = tmpResult;
                closure_1.inTable = inTable;
                const items = [[]];
                item = tmpResult.forEach((type, index) => {
                  if ("tableSeparator" === type.type) {
                    let tmp9 = !closure_0;
                    if (closure_0) {
                      tmp9 = 0 !== index && index !== length.length - 1;
                      const tmp10 = 0 !== index && index !== length.length - 1;
                    }
                    if (tmp9) {
                      items.push([]);
                    }
                  } else {
                    let tmp4 = "text" !== type.type;
                    if (!tmp4) {
                      tmp4 = null != length[index + 1] && "tableSeparator" !== tmp[index + 1].type;
                    }
                    if (!tmp4) {
                      const str = type.content;
                      type.content = str.replace(closure_2_1, "");
                    }
                    const arr = items[items.length - 1];
                    arr.push(type);
                  }
                });
                return items;
              } else {
                let str = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            })
        };
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
  };
  const re29 = /mailto:/i;
  function parseRef(arg0, arg1, arg2) {

  }
  let flag = false;
  const fnResult = fn(true);
  const fnResult1 = fn(false);
  try {
    const _RegExp = RegExp;
    let self = this;
    let str2 = "(?<=a)";
    const regExp3 = new RegExp("(?<=a)");
    const _RegExp2 = RegExp;
    let self2 = this;
    let str3 = "(?<!a)";
    const regExp4 = new RegExp("(?<!a)");
    flag = false;
  } catch (err) {
  }
  function inlineRegex(_RegExp31) {
    const regex = _RegExp31;
    function match(arg0, inline) {
      let match = null;
      if (inline.inline) {
        match = regex.exec(arg0);
      }
      return match;
    }
    match.regex = _RegExp31;
    return match;
  }
  function blockRegex(regex) {
    function match(arg0, inline) {
      let match = null;
      if (!inline.inline) {
        match = regex.exec(arg0);
      }
      return match;
    }
    match.regex = regex;
    return match;
  }
  function parseCaptureInline(arg0, fn, inline) {
    if (typeof parseInline === "function") {
      const tmp3 = inline.inline || false;
      inline.inline = true;
      inline.inline = tmp3;
      obj = { content: fn(tmp, inline) };
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  function ignoreCapture() {
    return {};
  }
  const defaultRules = {
    Array: {
      react(arg0, fn, key) {
        const items = [];
        num = 0;
        let num2 = 0;
        if (0 < arg0.length) {
          do {
            key.key = "" + num;
            let tmp = arg0[num];
            let tmp4 = tmp;
            let tmp5 = num;
            if ("text" === tmp.type) {
              obj = { type: "text", content: tmp.content };
              let sum = num + 1;
              tmp4 = obj;
              tmp5 = num;
              if (sum < arg0.length) {
                let tmp6 = num;
                tmp4 = obj;
                tmp5 = num;
                if ("text" === arg0[sum].type) {
                  let sum1 = tmp6 + 1;
                  obj.content = obj.content + arg0[sum1].content;
                  let sum2 = sum1 + 1;
                  tmp4 = obj;
                  tmp5 = sum1;
                  while (sum2 < arg0.length) {
                    tmp6 = sum1;
                    tmp4 = obj;
                    tmp5 = sum1;
                    if ("text" !== arg0[sum2].type) {
                      break;
                    }
                  }
                }
              }
            }
            let arr = items.push(fn(tmp4, key));
            num = tmp5 + 1;
            num2 = num2 + 1;
          } while (num < arg0.length);
        }
        key.key.key = key.key;
        return items;
      },
      html(arg0, fn, arg2) {
        num = 0;
        let str = "";
        let str2 = "";
        if (0 < arg0.length) {
          do {
            let tmp = arg0[num];
            let tmp4 = tmp;
            let tmp5 = num;
            if ("text" === tmp.type) {
              obj = { type: "text", content: tmp.content };
              let sum = num + 1;
              tmp4 = obj;
              tmp5 = num;
              if (sum < arg0.length) {
                let tmp6 = num;
                tmp4 = obj;
                tmp5 = num;
                if ("text" === arg0[sum].type) {
                  let sum1 = tmp6 + 1;
                  obj.content = obj.content + arg0[sum1].content;
                  let sum2 = sum1 + 1;
                  tmp4 = obj;
                  tmp5 = sum1;
                  while (sum2 < arg0.length) {
                    tmp6 = sum1;
                    tmp4 = obj;
                    tmp5 = sum1;
                    if ("text" !== arg0[sum2].type) {
                      break;
                    }
                  }
                }
              }
            }
            str = str + fn(tmp4, arg2);
            num = tmp5 + 1;
            str2 = str;
          } while (num < arg0.length);
        }
        return str2;
      }
    },
    heading: obj2,
    nptable: obj3,
    lheading: { order: 2, match: blockRegex(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/), parse, react: null, html: null },
    hr: { order: 3, match: blockRegex(/^( *[-*_]){3,} *(?:\n *)+\n/), parse: ignoreCapture, react, html },
    codeBlock: { order: 4, match: blockRegex(/^(?:    [^\n]+\n*)+(?:\n *)+\n/), parse: parse2, react: react2, html: html2 },
    fence: { order: 5, match: blockRegex(/^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/), parse: parse3, react: null, html: null },
    blockQuote: { order: 6, match: blockRegex(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/), parse: parse4, react: react3, html: html3 },
    list: obj9,
    def: { order: 8, match: blockRegex(/^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/), parse: parse5, react: react4, html: html4 },
    table: { order: 9, match: blockRegex(tmp9), parse: fnResult, react: react5, html: html5 },
    newline: { order: 10, requiredFirstCharacters: ["\n"], match: blockRegex(/^(?:\n *)*\n/), parse: ignoreCapture, react: react6, html: html6 },
    paragraph: { order: 11, match: blockRegex(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/), parse: parseCaptureInline, react: react7, html: html7 },
    escape: { order: 12, requiredFirstCharacters: ["\\"], match: inlineRegex(/^\\([^0-9A-Za-z\s])/), parse: parse6, react: null, html: null },
    tableSeparator: obj15,
    autolink: { order: 14, requiredFirstCharacters: ["<"], match: inlineRegex(/^<([^: >]+:\/[^ >]+)>/), parse: parse7, react: null, html: null },
    mailto: { order: 15, match: inlineRegex(/^<([^ >]+@[^ >]+)>/), parse: parse8, react: null, html: null },
    url: { order: 16, requiredFirstCharacters: ["h"], match: inlineRegex(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/), parse: parse9, react: null, html: null },
    link: obj19,
    image: obj20,
    reflink: obj21,
    refimage: obj22,
    em: obj23,
    strong: { order: 21, requiredFirstCharacters: ["*"], match: inlineRegex(/^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/), quality, parse: parseCaptureInline, react: react8, html: html8 },
    u: { order: 21, requiredFirstCharacters: ["_"], match: inlineRegex(/^__((?:\\[\s\S]|[^\\])+?)__(?!_)/), quality: quality2, parse: parseCaptureInline, react: react9, html: html9 },
    del: { order: 22, requiredFirstCharacters: ["~"], match: inlineRegex(/^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~]|\s(?!~~))+?)~~/), parse: parseCaptureInline, react: react10, html: html10 },
    inlineCode: { order: 23, requiredFirstCharacters: ["`"], match: inlineRegex(/^(`+)([\s\S]*?[^`])\1(?!`)/), parse: parse10, react: react11, html: html11 },
    br: { order: 24, requiredFirstCharacters: [" "], match: anyScopeRegex(/^ {2,}\n/), parse: ignoreCapture, react: react12, html: html12 },
    text: { order: 25, match: anyScopeRegex(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/), parse: parse11, react: react13, html: html13 }
  };
  obj2 = {
    order: 0,
    match: blockRegex(/^ *(#{1,6})([^\n]+?)#* *(?:\n *)+\n/),
    parse(level, fn, inline) {
      obj = { level: level[1].length, content: null };
      if (typeof parseInline === "function") {
        const tmp3 = inline.inline || false;
        inline.inline = true;
        inline.inline = tmp3;
        obj.content = fn(tmp, inline);
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    },
    react(content, fn, key) {
      let tmp4;
      const props = { children: fn(content.content, key) };
      const text = `h${content.level}`;
      if (typeof reactElement === "function") {
        const element = { $$typeof: num, type: text, key: tmp4, ref: null, props, _owner: null };
        tmp4 = undefined;
        if (null != key.key) {
          tmp4 = key;
        }
        return element;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    },
    html(content, fn, arg2) {
      return htmlTag(`h${content.level}`, fn(content.content, arg2));
    }
  };
  tmp9 = /^ *(\|.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/;
  let tmp10 = /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/;
  obj3 = { order: 1, match: blockRegex(tmp10), parse: fnResult1, react: null, html: null };
  ({ order: 2, match: blockRegex(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/), parse, react: null, html: null });
  ({ order: 3, match: blockRegex(/^( *[-*_]){3,} *(?:\n *)+\n/), parse: ignoreCapture, react, html });
  ({ order: 4, match: blockRegex(/^(?:    [^\n]+\n*)+(?:\n *)+\n/), parse: parse2, react: react2, html: html2 });
  ({ order: 5, match: blockRegex(/^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/), parse: parse3, react: null, html: null });
  obj9 = {
    order: 7,
    match(arg0, prevCapture) {
      let str = "";
      if (null != prevCapture.prevCapture) {
        str = prevCapture.prevCapture[0];
      }
      const match = re28.exec(str);
      let match1 = null;
      const tmp2 = prevCapture._list || !prevCapture.inline;
      if (match) {
        match1 = null;
        if (tmp2) {
          match1 = regExp2.exec(match[1] + arg0);
        }
      }
      return match1;
    },
    parse(arg0, arg1, arg2) {
      let closure_0 = arg1;
      let closure_1 = arg2;
      let tmp = arr.length > 1;
      let tmp2;
      if (tmp) {
        tmp2 = +arr;
      }
      let str = arg0[0];
      const str2 = str.replace(closure_25, "\n");
      let match = str2.match(regExp1);
      let closure_3 = false;
      obj = {
        ordered: tmp,
        start: tmp2,
        items: match.map((item, index) => {
          let _list;
          let inline;
          let replaced1;
          match = regExp.exec(item);
          num = 0;
          const tmp = regExp;
          if (match) {
            num = match[0].length;
          }
          regExp = new RegExp("^ {1," + num + "}", "gm");
          const str = item.replace(regExp, "");
          const replaced = str.replace(tmp, "");
          const diff = match.length - 1;
          let tmp5 = -1 !== replaced.indexOf("\n\n");
          if (!tmp5) {
            tmp5 = index === diff && closure_3;
          }
          closure_3 = tmp5;
          closure_1._list = true;
          ({ inline, _list } = closure_1);
          if (tmp5) {
            closure_1.inline = false;
            replaced1 = replaced.replace(re26, "\n\n");
          } else {
            closure_1.inline = true;
            replaced1 = replaced.replace(re26, "");
          }
          closure_1.inline = inline;
          closure_1._list = _list;
          return closure_0(replaced1, closure_1);
        })
      };
      return obj;
    },
    react(ordered, arg1, key) {
      let items;
      let tmp3;
      let closure_0 = arg1;
      let closure_1 = key;
      let str = "ul";
      if (ordered.ordered) {
        str = "ol";
      }
      key = key.key;
      let props = {
        start: ordered.start,
        children: items.map((item, index) => {
          const props = { children: closure_0(item, key) };
          const text = `${index}`;
          if (typeof reactElement === "function") {
            const element = { $$typeof: num, type: "li", key: text, ref: null, props, _owner: null };
            return element;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        })
      };
      items = ordered.items;
      if (typeof reactElement === "function") {
        let element = { $$typeof: num, type: str, key: tmp3, ref: null, props, _owner: null };
        tmp3 = undefined;
        if (null != key) {
          tmp3 = key;
        }
        return element;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    },
    html(ordered, arg1, arg2) {
      let closure_0 = arg1;
      let closure_1 = arg2;
      const items = ordered.items;
      const mapped = items.map((item) => htmlTag("li", closure_0(item, closure_1)));
      let str = "ul";
      const joined = mapped.join("");
      if (ordered.ordered) {
        str = "ol";
      }
      obj = { start: ordered.start };
      return htmlTag(str, joined, obj);
    }
  };
  ({ order: 6, match: blockRegex(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/), parse: parse4, react: react3, html: html3 });
  ({ order: 8, match: blockRegex(/^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/), parse: parse5, react: react4, html: html4 });
  ({ order: 9, match: blockRegex(tmp9), parse: fnResult, react: react5, html: html5 });
  ({ order: 10, requiredFirstCharacters: ["\n"], match: blockRegex(/^(?:\n *)*\n/), parse: ignoreCapture, react: react6, html: html6 });
  ({ order: 11, match: blockRegex(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/), parse: parseCaptureInline, react: react7, html: html7 });
  obj15 = {
    order: 13,
    match(arg0, inTable) {
      let match = null;
      if (inTable.inTable) {
        obj = /^ *\| */;
        match = obj.exec(arg0);
      }
      return match;
    },
    parse() {
      return { type: "tableSeparator" };
    },
    react() {
      return " | ";
    },
    html() {
      return " &vert; ";
    }
  };
  ({ order: 12, requiredFirstCharacters: ["\\"], match: inlineRegex(/^\\([^0-9A-Za-z\s])/), parse: parse6, react: null, html: null });
  ({ order: 14, requiredFirstCharacters: ["<"], match: inlineRegex(/^<([^: >]+:\/[^ >]+)>/), parse: parse7, react: null, html: null });
  ({ order: 15, match: inlineRegex(/^<([^ >]+@[^ >]+)>/), parse: parse8, react: null, html: null });
  obj19 = {
    order: 17,
    requiredFirstCharacters: ["["],
    match: inlineRegex(regExp5),
    parse(arg0, fn, arg2) {
      obj = { content: fn(arg0[1], arg2), target: null, title: null };
      const str = arg0[2];
      if (typeof unescapeUrl === "function") {
        obj.target = str.replace(re18, "$1");
        obj.title = arg0[3];
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    },
    react(target, fn, key) {
      let tmp3;
      const props = { href: sanitizeUrl(target.target), title: target.title, children: fn(target.content, key) };
      if (typeof reactElement === "function") {
        const element = { $$typeof: num, type: "a", key: tmp3, ref: null, props, _owner: null };
        tmp3 = undefined;
        if (null != key.key) {
          tmp3 = key;
        }
        return element;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    },
    html(target, fn, arg2) {
      obj = { href: sanitizeUrl(target.target), title: target.title };
      return htmlTag("a", fn(target.content, arg2), obj);
    }
  };
  ({ order: 16, requiredFirstCharacters: ["h"], match: inlineRegex(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/), parse: parse9, react: null, html: null });
  regExp5 = new RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\()]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)");
  obj20 = {
    order: 18,
    match: inlineRegex(regExp6),
    parse(alt, arg1, arg2) {
      obj = { alt: alt[1], target: null, title: null };
      const str = alt[2];
      if (typeof unescapeUrl === "function") {
        obj.target = str.replace(re18, "$1");
        obj.title = alt[3];
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    },
    react(alt, arg1, key) {
      let tmp3;
      const props = { src: sanitizeUrl(alt.target), alt: alt.alt, title: alt.title };
      if (typeof reactElement === "function") {
        const element = { $$typeof: num, type: "img", key: tmp3, ref: null, props, _owner: null };
        tmp3 = undefined;
        if (null != key.key) {
          tmp3 = key;
        }
        return element;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    },
    html(alt, arg1, arg2) {
      obj = { src: sanitizeUrl(alt.target), alt: alt.alt, title: alt.title };
      return htmlTag("img", "", obj, false);
    }
  };
  regExp6 = new RegExp("^!\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\()]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)");
  obj21 = {
    order: 19,
    match: inlineRegex(regExp7),
    parse(arg0, fn, _defs) {
      obj = { type: "link", content: fn(arg0[1], _defs) };
      if (typeof parseRef === "function") {
        const str = arg0[2] || arg0[1];
        const str3 = str.replace(/\s+/g, " ");
        const formatted = str3.toLowerCase();
        if (_defs._defs) {
          if (_defs._defs[formatted]) {
            ({ target: obj.target, title: obj.title } = _defs._defs[formatted]);
          }
        }
        _defs._refs = _defs._refs || {};
        let items = _defs._refs[formatted];
        const _refs = _defs._refs;
        if (!items) {
          items = [];
        }
        _refs[formatted] = items;
        const arr2 = _defs._refs[formatted];
        arr2.push(obj);
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    },
    react: null,
    html: null
  };
  regExp7 = new RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\s*\\[([^\\]]*)\\]");
  obj22 = {
    order: 20,
    match: inlineRegex(regExp8),
    parse(alt, arg1, _defs) {
      obj = { type: "image", alt: alt[1] };
      if (typeof parseRef === "function") {
        const str = alt[2] || alt[1];
        const str3 = str.replace(/\s+/g, " ");
        const formatted = str3.toLowerCase();
        if (_defs._defs) {
          if (_defs._defs[formatted]) {
            ({ target: obj.target, title: obj.title } = _defs._defs[formatted]);
          }
        }
        _defs._refs = _defs._refs || {};
        let items = _defs._refs[formatted];
        const _refs = _defs._refs;
        if (!items) {
          items = [];
        }
        _refs[formatted] = items;
        const arr2 = _defs._refs[formatted];
        arr2.push(obj);
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    },
    react: null,
    html: null
  };
  regExp8 = new RegExp("^!\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\s*\\[([^\\]]*)\\]");
  let str4 = "^\\b_((?:__|\\\\[\\s\\S]|[^\\\\_])+?)_\\b";
  const _RegExp3 = RegExp;
  obj23 = {
    order: 21,
    match: inlineRegex(_RegExp31),
    quality(arg0) {
      return arg0[0].length + 0.2;
    },
    parse(arg0, fn, arg2) {
      const tmp = arg0[2] || arg0[1];
      obj = { content: fn(tmp, arg2) };
      return obj;
    },
    react(content, fn, key) {
      let tmp3;
      const props = { children: fn(content.content, key) };
      if (typeof reactElement === "function") {
        const element = { $$typeof: num, type: "em", key: tmp3, ref: null, props, _owner: null };
        tmp3 = undefined;
        if (null != key.key) {
          tmp3 = key;
        }
        return element;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    },
    html(content, fn, arg2) {
      return htmlTag("em", fn(content.content, arg2));
    }
  };
  if (flag) {
    str4 = "^\\b_((?:_[_(]|\\\\[\\s\\S]|(?<!_)\\B_\\B|[^\\\\_])+?)_(?![(])\\b";
  }
  function parserFor(rules2, arg1) {
    let closure_1 = arg1;
    const keys = Object.keys(rules2);
    const found = keys.filter((item) => {
      if (null != rules2[item]) {
        if (null != rules2[item].match) {
          const order = str.order;
          let isFiniteResult = typeof order === "number";
          if (typeof order === "number") {
            const _isFinite = isFinite;
            isFiniteResult = isFinite(order);
          }
          if (!isFiniteResult) {
            const _console = console;
            isFiniteResult = typeof console === "undefined";
          }
          if (!isFiniteResult) {
            const _console2 = console;
            const _String = String;
            const text = `simple-markdown: Invalid order for rule \`${item}`;
            console.warn(`${`simple-markdown: Invalid order for rule \`${item}`}\`: ${String(order)}`);
          }
          return true;
        }
      }
      return false;
    });
    const sorted = found.sort((arg0, arg1) => {
      const order = tmp.order;
      const order2 = tmp2.order;
      if (order !== order2) {
        return order - order2;
      } else {
        let num4;
        let num2 = 1;
        if (rules2[arg0].quality) {
          num2 = 0;
        }
        let num3 = 1;
        if (rules2[arg1].quality) {
          num3 = 0;
        }
        if (num2 !== num3) {
          num4 = num2 - num3;
        } else {
          num4 = -1;
          if (arg0 >= arg1) {
            let num5 = 0;
            if (arg0 > arg1) {
              num5 = 1;
            }
            num4 = num5;
          }
        }
        return num4;
      }
    });
    map = new Map();
    let items = [];
    for (let num = 0; num < found.length; num = num + 1) {
      let tmp3 = found[num];
      let closure_6 = tmp3;
      let prop = rules2[tmp3].requiredFirstCharacters;
      let tmp4 = num;
      if (null == prop) {
        let arr = items.push(tmp3);
      } else {
        let mapped = prop.map((item) => {
          const charCodeAtResult = item.charCodeAt(0);
          if (!map.has(charCodeAtResult)) {
            const result = map.set(charCodeAtResult, []);
          }
          const value = map.get(charCodeAtResult);
          value.push(closure_6);
        });
      }
    }
    function nestedParse(content, arg1) {
      obj = tmp;
      num = tmp._parseDepth;
      if (num == null) {
        num = 0;
      }
      items = [];
      const sum = num + 1;
      if (sum > 1000) {
        if (content) {
          obj = { type: "text", content };
          items.push(obj);
        }
        return items;
      } else {
        const _Object = Object;
        const obj2 = { _parseDepth: sum };
        const merged = Object.assign({}, tmp, obj2);
        obj = merged;
        let str3 = content;
        if (str3) {
          while (true) {
            let items1 = [map.get(str3.charCodeAt(0)), ];
            items1[1] = items;
            let num2 = 0;
            let num3 = 100000;
            let num4 = -100000;
            let tmp6 = null;
            let tmp7 = null;
            let tmp8 = null;
            let tmp9 = null;
            let tmp10 = null;
            let tmp11 = null;
            if (0 < items1.length) {
              do {
                let arr3 = items1[num2];
                let tmp18 = num3;
                let tmp19 = num4;
                let tmp20 = tmp6;
                let tmp21 = tmp7;
                let tmp22 = tmp8;
                if (null != arr3) {
                  let num6 = 0;
                  let tmp39 = num3;
                  let tmp40 = num4;
                  let tmp41 = tmp6;
                  let tmp42 = tmp7;
                  let tmp43 = tmp8;
                  tmp18 = num3;
                  tmp19 = num4;
                  tmp20 = tmp6;
                  tmp21 = tmp7;
                  tmp22 = tmp8;
                  if (0 < arr3.length) {
                    let tmp23 = arr3[num6];
                    let str = rules2[tmp23];
                    let order = str.order;
                    tmp19 = tmp40;
                    tmp20 = tmp41;
                    tmp21 = tmp42;
                    tmp22 = tmp43;
                    tmp18 = tmp39;
                    while (order <= tmp39) {
                      let str2 = "";
                      if (null != merged.prevCapture) {
                        str2 = merged.prevCapture[0];
                      }
                      let match = str.match(str3, merged, str2);
                      let tmp33 = tmp39;
                      let tmp34 = tmp40;
                      let tmp35 = tmp41;
                      let tmp36 = tmp42;
                      let tmp37 = tmp43;
                      if (match) {
                        let num5 = 0;
                        if (str.quality) {
                          num5 = str.quality(match, merged, str2);
                        }
                        let tmp38 = order < tmp39 || num5 > tmp40;
                        tmp33 = tmp39;
                        tmp34 = tmp40;
                        tmp35 = tmp41;
                        tmp36 = tmp42;
                        tmp37 = tmp43;
                        if (tmp38) {
                          tmp33 = order;
                          tmp34 = num5;
                          tmp35 = match;
                          tmp36 = str;
                          tmp37 = tmp23;
                        }
                      }
                      num6 = num6 + 1;
                      tmp39 = tmp33;
                      tmp40 = tmp34;
                      tmp41 = tmp35;
                      tmp42 = tmp36;
                      tmp43 = tmp37;
                      tmp18 = tmp33;
                      tmp19 = tmp34;
                      tmp20 = tmp35;
                      tmp21 = tmp36;
                      tmp22 = tmp37;
                      if (num6 >= arr3.length) {
                        break;
                      }
                    }
                  }
                }
                num2 = num2 + 1;
                num3 = tmp18;
                num4 = tmp19;
                tmp6 = tmp20;
                tmp7 = tmp21;
                tmp8 = tmp22;
                tmp9 = tmp20;
                tmp10 = tmp21;
                tmp11 = tmp22;
              } while (num2 < items1.length);
            }
            if (null == tmp10) {
              break;
            } else if (null == tmp9) {
              break;
            } else if (tmp9.index) {
              let _Error = Error;
              let self = this;
              let str4 = "`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?";
              let self2 = this;
              let error = new Error("`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?");
              throw error;
            } else {
              let parsed = tmp10.parse(tmp9, nestedParse, merged);
              let _Array = Array;
              if (Array.isArray(parsed)) {
                let _Array2 = Array;
                let applyResult = push.apply(items, parsed);
              } else {
                if (null == parsed.type) {
                  parsed.type = tmp11;
                }
                let arr2 = items.push(parsed);
              }
              merged.prevCapture = tmp9;
              str3 = str3.substring(merged.prevCapture[0].length);
            }
          }
          const _Error2 = Error;
          const self3 = this;
          const self4 = this;
          const error1 = new Error("Could not find a matching rule for the below content. The rule with highest `order` should always match content provided to it. Check the definition of `match` for '" + found[found.length - 1] + "'. It seems to not match the following source:\n" + str3);
          throw error1;
        }
        return items;
      }
    }
    function outerParse(arg0, arg1) {
      obj = arg1 || {};
      if (null != closure_1) {
        for (const key10006 in closure_1) {
          let _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          if (!hasOwnProperty.call(closure_1, key10006)) {
            continue;
          } else {
            obj[key10006] = closure_1[key10006];
            continue;
          }
          continue;
        }
      }
      const disableAutoBlockNewlines = obj.inline || obj.disableAutoBlockNewlines;
      let str = arg0;
      if (!disableAutoBlockNewlines) {
        str = `${arg0}

      `;
      }
      obj.prevCapture = null;
      const str3 = str.replace(re7, "\n");
      const str4 = str3.replace(re9, "");
      return nestedParse(str4.replace(re8, "    "), obj);
    }
    nestedParse.rules = rules2;
    outerParse.rules = rules2;
    return outerParse;
  }
  anyScopeRegex = function anyScopeRegex(EMOJI_NAME_RE) {
    function match(arg0, arg1) {
      return EMOJI_NAME_RE.exec(arg0);
    }
    match.regex = EMOJI_NAME_RE;
    return match;
  };
  function preprocess(str) {
    str = str.replace(re7, "\n");
    const str2 = str.replace(re9, "");
    return str2.replace(re8, "    ");
  }
  _RegExp31 = new _RegExp3(str4 + "|^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?)\\*(?!\\*)");
  ({ order: 21, requiredFirstCharacters: ["*"], match: inlineRegex(/^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/), quality, parse: parseCaptureInline, react: react8, html: html8 });
  ({ order: 21, requiredFirstCharacters: ["_"], match: inlineRegex(/^__((?:\\[\s\S]|[^\\])+?)__(?!_)/), quality: quality2, parse: parseCaptureInline, react: react9, html: html9 });
  ({ order: 22, requiredFirstCharacters: ["~"], match: inlineRegex(/^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~]|\s(?!~~))+?)~~/), parse: parseCaptureInline, react: react10, html: html10 });
  ({ order: 23, requiredFirstCharacters: ["`"], match: inlineRegex(/^(`+)([\s\S]*?[^`])\1(?!`)/), parse: parse10, react: react11, html: html11 });
  ({ order: 24, requiredFirstCharacters: [" "], match: anyScopeRegex(/^ {2,}\n/), parse: ignoreCapture, react: react12, html: html12 });
  function outputFor(Array, html, arg2) {
    let closure_0 = Array;
    let closure_1 = html;
    let closure_2 = arg2;
    if (html) {
      let _Array = Array.Array || obj.Array;
      if (_Array[html]) {
        let closure_4 = tmp5;
        function nestedOutput(arg0, arg1) {
          let tmp6;
          obj = arg1 || obj;
          if (Array.isArray(arg0)) {
            tmp6 = closure_4(arg0, nestedOutput, tmp);
          } else {
            const tmp3 = closure_0[arg0.type];
            tmp6 = tmp3[closure_1](arg0, nestedOutput, tmp);
          }
          return tmp6;
        }
        return (arg0, arg1) => {
          obj = arg1 || {};
          if (null != closure_2) {
            for (const key10006 in closure_2) {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              if (!hasOwnProperty.call(closure_2, key10006)) {
                continue;
              } else {
                obj[key10006] = closure_2[key10006];
                continue;
              }
              continue;
            }
          }
          if (typeof nestedOutput === "function") {
            let tmp10;
            const _Array = Array;
            if (Array.isArray(arg0)) {
              tmp10 = closure_4(arg0, nestedOutput, obj);
            } else {
              const tmp8 = closure_0[arg0.type];
              tmp10 = tmp8[closure_1](arg0, nestedOutput, obj);
            }
            return tmp10;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        };
      } else {
        let tmp6 = globalThis;
        const _Error2 = Error;
        const self3 = this;
        const self4 = this;
        const error = new Error("simple-markdown: outputFor: to join nodes of type `" + html + "` you must provide an `Array:` joiner rule with that type, Please see the docs for details on specifying an Array rule.");
        let tmp8 = error;
        throw error;
      }
    } else {
      const tmp = globalThis;
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error1 = new Error("simple-markdown: outputFor: `property` must be defined. if you just upgraded, you probably need to replace `outputFor` with `reactFor`");
      let tmp3 = error1;
      throw error1;
    }
  }
  ({ order: 25, match: anyScopeRegex(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/), parse: parse11, react: react13, html: html13 });
  const parserForResult = parserFor(defaultRules);
  function defaultBlockParse(arg0, arg1) {
    const tmp = arg1 || {};
    tmp.inline = false;
    return parserForResult(arg0, tmp);
  }
  function defaultImplicitParse(arg0, arg1) {
    obj = arg1;
    const isMatch = re23.test(arg0);
    if (!arg1) {
      obj = {};
    }
    obj.inline = !isMatch;
    return parserForResult(arg0, obj);
  }
  const outputForResult = outputFor(defaultRules, "react");
  function markdownToReact(arg0, arg1) {
    if (typeof defaultBlockParse === "function") {
      const tmp3 = arg1 || {};
      tmp3.inline = false;
      return tmp(parserForResult(arg0, tmp3), arg1);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  const outputForResult1 = outputFor(defaultRules, "html");
  return {
    defaultRules,
    parserFor,
    outputFor,
    inlineRegex,
    blockRegex,
    anyScopeRegex,
    parseInline,
    parseBlock(fn, arg1, inline) {
      const tmp = inline.inline || false;
      inline.inline = false;
      inline.inline = tmp;
      return fn(arg1 + "\n\n", inline);
    },
    markdownToReact,
    markdownToHtml(arg0, arg1) {
      if (typeof defaultBlockParse === "function") {
        const tmp3 = arg1 || {};
        tmp3.inline = false;
        return tmp(parserForResult(arg0, tmp3), arg1);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    },
    ReactMarkdown(obj) {
      const props = {};
      for (const key10006 in obj) {
        let callResult = "source" !== key10006;
        if (callResult) {
          let _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          callResult = hasOwnProperty.call(obj, key10006);
        }
        if (!callResult) {
          continue;
        } else {
          props[key10006] = obj[key10006];
          continue;
        }
        continue;
      }
      if (typeof markdownToReact === "function") {
        if (typeof defaultBlockParse === "function") {
          const obj2 = { inline: false };
          props.children = tmp3(parserForResult(tmp2, obj2), undefined);
          if (typeof reactElement === "function") {
            const element = { $$typeof: num, type: "div", key: undefined, ref: null, props, _owner: null };
            return element;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    },
    defaultBlockParse,
    defaultInlineParse(arg0, arg1) {
      const tmp = arg1 || {};
      tmp.inline = true;
      return parserForResult(arg0, tmp);
    },
    defaultImplicitParse,
    defaultReactOutput: outputForResult,
    defaultHtmlOutput: outputForResult1,
    preprocess,
    sanitizeText,
    sanitizeUrl,
    unescapeUrl,
    htmlTag,
    reactElement,
    defaultRawParse: parserForResult,
    ruleOutput(rules, react) {
      let tmp = react;
      let closure_1 = react;
      if (!closure_1) {
        const _console = console;
        tmp = typeof console === "undefined";
      }
      if (!tmp) {
        const _console2 = console;
        console.warn("simple-markdown ruleOutput should take 'react' or 'html' as the second argument.");
      }
      return (arg0, arg1, arg2) => {
        const tmp = rules[arg0.type];
        return tmp[react](arg0, arg1, arg2);
      };
    },
    reactFor(arg0) {
      let closure_0 = arg0;
      function nestedOutput(arg0, arg1) {
        const tmp = arg1 || {};
        if (Array.isArray(arg0)) {
          const items = [];
          num = 0;
          let tmp4 = null;
          const key = tmp.key;
          if (0 < arg0.length) {
            while (true) {
              tmp.key = "" + num;
              let tmp6 = nestedOutput(arg0[num], tmp);
              if (typeof tmp6 === "string") {
                if (typeof tmp4 === "string") {
                  let sum = tmp4 + tmp6;
                  items[items.length - 1] = sum;
                  let tmp10 = sum;
                  num = num + 1;
                  tmp4 = tmp10;
                  if (num >= arg0.length) {
                    break;
                  }
                }
              }
              let arr = items.push(tmp6);
              tmp10 = tmp6;
            }
          }
          tmp.key = key;
          return items;
        } else {
          return closure_0(arg0, nestedOutput, tmp);
        }
      }
      return nestedOutput;
    },
    htmlFor(arg0) {
      let closure_0 = arg0;
      function nestedOutput(arr, arg1) {
        let joined;
        const f150514 = (arr) => {
          let joined;
          if (!obj) {
            obj = {};
          }
          if (Array.isArray(arr)) {
            const mapped = arr.map(f150514);
            joined = mapped.join("");
          } else {
            joined = closure_0(arr, nestedOutput, obj);
          }
          return joined;
        };
        obj = arg1 || {};
        if (Array.isArray(arr)) {
          let mapped = arr.map(f150514);
          joined = mapped.join("");
        } else {
          joined = obj(arr, nestedOutput, obj);
        }
        return joined;
      }
      return nestedOutput;
    },
    defaultParse() {
      if (typeof console !== "undefined") {
        const _console = console;
        console.warn("defaultParse is deprecated, please use `defaultImplicitParse`");
      }
      return defaultImplicitParse(...arguments);
    },
    defaultOutput() {
      if (typeof console !== "undefined") {
        const _console = console;
        console.warn("defaultOutput is deprecated, please use `defaultReactOutput`");
      }
      return outputForResult(...arguments);
    }
  };
};
if (typeof exports === "object") {
  if (undefined !== module) {
    module.exports = fn();
  }
}
if (typeof globalThis.define === "function") {
  const define2 = globalThis.define;
  if (globalThis.define.amd) {
    globalThis.define(fn);
  }
}
this.SimpleMarkdown = fn();