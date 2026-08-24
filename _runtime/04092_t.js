// === Module 4092: t ===

// Module 4092 (t)
let fn = function t() {
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
    num = Symbol.for("react.transitional.element");
  }
  if (!num) {
    num = 60103;
  }
  function reactElement(type) {
    obj = { $$typeof: num, type, key: null, ref: null, props: null, _owner: null };
    let tmp;
    if (null != arg1) {
      tmp = arg1;
    }
    obj[2] = tmp;
    obj[4] = arg2;
    return obj;
  }
  function htmlTag(blockquote, joined, arg2, arg3) {
    obj = arg2;
    if (!arg2) {
      obj = {};
    }
    let str = "";
    let str2 = "";
    const keys = Object.keys();
    if (keys !== undefined) {
      str2 = str;
      while (keys[tmp] !== undefined) {
        let tmp14 = tmp5;
        let tmp15 = obj[tmp5];
        let _Object = Object;
        let call = hasOwnProperty.call;
        let tmp6 = (typeof call === "unknown" ? hasOwnProperty(tmp5) : call(obj, tmp5)) && tmp15;
        if (!tmp6) {
          continue;
        } else {
          let tmp7 = sanitizeText;
          if (typeof sanitizeText !== "function") {
            let str6 = "Trying to call a non-function";
            let throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          let _String = String;
          let str3 = String(tmp5);
          let tmp8 = closure_15;
          let text = ` ${str3.replace(closure_15, (arg0) => table[arg0])}`;
          if (typeof tmp7 !== "function") {
            let str7 = "Trying to call a non-function";
            let throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
          }
          let _String2 = String;
          let text1 = `${tmp9}="`;
          let str4 = String(tmp15);
          let _HermesInternal = HermesInternal;
          str = tmp4 + `${tmp9}="` + str4.replace(tmp8, (arg0) => table[arg0]) + "\"";
          continue;
        }
        continue;
      }
    }
    const combined = `<${blockquote}` + str2 + ">";
    let text2 = combined;
    if (tmp2) {
      text2 = `${tmp11 + joined + "</" + blockquote}>`;
    }
    return text2;
  }
  closure_13 = {};
  function sanitizeUrl(arg0) {
    if (null == arg0) {
      return null;
    } else {
      try {
        const _URL = URL;
        const uRL = new URL(arg0, "https://localhost");
        const protocol = uRL.protocol;
        if (0 !== protocol.indexOf("javascript:")) {
          if (0 !== arr2.indexOf("vbscript:")) {
            if (0 !== arr2.indexOf("data:")) {
              return arg0;
            }
          }
        }
        return null;
      } catch (err) {
        return tmp;
      }
    }
  }
  const re15 = /[<>&"']/g;
  closure_16 = { "<": "&lt;", ">": "&gt;", "&": "&amp;", "\"": "&quot;", "'": "&#x27;", "/": "&#x2F;", "`": "&#96;" };
  function sanitizeText(arg0) {
    return String(arg0).replace(closure_15, (arg0) => table[arg0]);
  }
  const re18 = /\\([^0-9A-Za-z\s])/g;
  function unescapeUrl(str) {
    return str.replace(closure_18, "$1");
  }
  function parseInline(arg0, formatted, inline) {
    inline.inline = true;
    inline.inline = inline.inline || false;
    return arg0(formatted, inline);
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
    if (!regex.test(arg0)) {
      let str2 = "center";
      if (!regex2.test(arg0)) {
        let str3 = null;
        if (regex3.test(arg0)) {
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
    closure_0 = arg0;
    return (arg0, arg1, inTable) => {
      inTable.inline = true;
      if (typeof closure_1_6 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      closure_0 = tmp;
      inTable.inTable = true;
      let arr = arg1(arg0[1].trim(), inTable);
      closure_1 = arr;
      inTable.inTable = inTable.inTable;
      let items = [[]];
      closure_2 = items;
      let item = arr.forEach((type) => {
        if ("tableSeparator" === type.type) {
          let tmp9 = !closure_0;
          if (closure_0) {
            let tmp10 = 0 !== arg1;
            if (tmp10) {
              tmp10 = arg1 !== length.length - 1;
            }
            tmp9 = tmp10;
          }
          if (tmp9) {
            let arr = items.push([]);
          }
        } else {
          let tmp4 = "text" !== type.type;
          if (!tmp4) {
            tmp4 = null != length[arg1 + 1] && "tableSeparator" !== tmp[arg1 + 1].type;
            const tmp3 = null != length[arg1 + 1] && "tableSeparator" !== tmp[arg1 + 1].type;
          }
          if (!tmp4) {
            type.content = type.content.replace(length, "");
            const str = type.content;
          }
          arr = items[items.length - 1];
          arr = arr.push(type);
        }
      });
      let str3 = str2;
      if (closure_0) {
        str3 = str2.replace(closure_0, "");
      }
      const parts = str3.trim().split("|");
      closure_0 = arg1;
      closure_1 = inTable;
      closure_2 = tmp;
      const mapped = parts.map(closure_1_5);
      let str = arg0[1];
      const str5 = str3.trim();
      const str6 = arg0[3];
      const parts1 = arg0[3].trim().split("\n");
      inTable.inline = false;
      const str7 = arg0[3].trim();
      return {
        type: "table",
        header: items,
        align: mapped,
        cells: parts1.map((str) => {
          if (typeof closure_1_6 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          closure_0 = items;
          closure_1.inTable = true;
          const tmpResult = closure_0(str.trim(), closure_1);
          closure_1 = tmpResult;
          closure_1.inTable = closure_1.inTable;
          items = [[]];
          const item = tmpResult.forEach((type) => {
            if ("tableSeparator" === type.type) {
              let tmp9 = !closure_0;
              if (closure_0) {
                let tmp10 = 0 !== arg1;
                if (tmp10) {
                  tmp10 = arg1 !== length.length - 1;
                }
                tmp9 = tmp10;
              }
              if (tmp9) {
                let arr = items.push([]);
              }
            } else {
              let tmp4 = "text" !== type.type;
              if (!tmp4) {
                tmp4 = null != length[arg1 + 1] && "tableSeparator" !== tmp[arg1 + 1].type;
                const tmp3 = null != length[arg1 + 1] && "tableSeparator" !== tmp[arg1 + 1].type;
              }
              if (!tmp4) {
                type.content = type.content.replace(length, "");
                const str = type.content;
              }
              arr = items[items.length - 1];
              arr = arr.push(type);
            }
          });
          return items;
        })
      };
    };
  };
  const re29 = /mailto:/i;
  function parseRef(arg0, arg1, arg2) {

  }
  try {
    const _RegExp = RegExp;
    const regExp3 = new RegExp("(?<=a)");
    const _RegExp2 = RegExp;
    const regExp4 = new RegExp("(?<!a)");
    function inlineRegex(regExp5) {
      closure_0 = regExp5;
      function match(arg0, inline) {
        let match = null;
        if (inline.inline) {
          match = regex.exec(arg0);
        }
        return match;
      }
      match.regex = regExp5;
      return match;
    }
    function blockRegex(regex) {
      closure_0 = regex;
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
    function parseCaptureInline(arg0, arg1, inline) {
      if (typeof parseInline !== "function") {
        HermesBuiltin.throwTypeError();
      }
      inline.inline = true;
      inline.inline = inline.inline || false;
      return { content: arg1(arg0[1], inline) };
    }
    function ignoreCapture() {
      return {};
    }
    let obj = { Array: null, heading: null, nptable: null, lheading: null, hr: null, codeBlock: null, fence: null, blockQuote: null, list: null, def: null, table: null, newline: null, paragraph: null, escape: null, tableSeparator: null, autolink: null, mailto: null, url: null, link: null, image: null, reflink: null, refimage: null, em: null, strong: null, u: null, del: null, inlineCode: null, br: null, text: null };
    obj = { react: null, html: null };
    obj[0] = function react(arg0, arg1, key) {
      const items = [];
      num = 0;
      let num2 = 0;
      if (0 < arg0.length) {
        do {
          key.key = "" + num;
          let tmp = arg0[num];
          let tmp2 = num2;
          let tmp3 = num;
          let tmp4 = tmp;
          let tmp5 = num;
          if ("text" === tmp.type) {
            obj = { type: "text", content: null };
            obj[1] = tmp.content;
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
          let arr = items.push(arg1(tmp4, key));
          num = tmp5 + 1;
          num2 = num2 + 1;
        } while (num < arg0.length);
      }
      key.key = key.key;
      return items;
    };
    obj[1] = function html(arg0, arg1, arg2) {
      num = 0;
      let str = "";
      let str2 = "";
      if (0 < arg0.length) {
        do {
          let tmp = arg0[num];
          let tmp2 = num;
          let tmp3 = str;
          let tmp4 = tmp;
          let tmp5 = num;
          if ("text" === tmp.type) {
            obj = { type: "text", content: null };
            obj[1] = tmp.content;
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
          str = str + arg1(tmp4, arg2);
          num = tmp5 + 1;
          str2 = str;
        } while (num < arg0.length);
      }
      return str2;
    };
    obj[0] = obj;
    obj = { order: null, match: null, parse: null, react: null, html: null };
    obj[0] = 0;
    obj[1] = blockRegex(/^ *(#{1,6})([^\n]+?)#* *(?:\n *)+\n/);
    obj[2] = function parse(level, arg1, inline) {
      obj = { level: level[1].length, content: null };
      const trimmed = level[2].trim();
      if (typeof parseInline !== "function") {
        HermesBuiltin.throwTypeError();
      }
      inline.inline = true;
      inline.inline = inline.inline || false;
      obj[1] = arg1(trimmed, inline);
      return obj;
    };
    obj[3] = function react(content, arg1, key) {
      obj = { children: arg1(content.content, key) };
      const text = `h${content.level}`;
      if (typeof reactElement !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = { $$typeof: num, type: text, key: null, ref: null, props: null, _owner: null };
      let tmp2;
      if (null != key.key) {
        tmp2 = key;
      }
      obj[2] = tmp2;
      obj[4] = obj;
      return obj;
    };
    obj[4] = function html(content) {
      return htmlTag(`h${content.level}`, arg1(content.content, arg2));
    };
    obj[1] = obj;
    obj1 = { order: null, match: null, parse: null, react: null, html: null };
    obj1[0] = 1;
    obj1[1] = blockRegex(/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/);
    obj1[2] = tmp6;
    obj[2] = obj1;
    const obj2 = { order: null, match: null, parse: null, react: null, html: null };
    obj2[0] = 2;
    obj2[1] = blockRegex(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/);
    obj2[2] = function parse(arg0, arg1, arg2) {
      num = 2;
      if ("=" === global[2]) {
        num = 1;
      }
      obj = { type: "heading", level: num, content: null };
      if (typeof parseInline !== "function") {
        HermesBuiltin.throwTypeError();
      }
      module.inline = true;
      module.inline = module.inline || false;
      obj[2] = require(global[1], module);
      return obj;
    };
    obj[3] = obj2;
    const obj3 = { order: null, match: null, parse: null, react: null, html: null };
    obj3[0] = 3;
    obj3[1] = blockRegex(/^( *[-*_]){3,} *(?:\n *)+\n/);
    obj3[2] = ignoreCapture;
    obj3[3] = function react(arg0, arg1, key) {
      if (typeof reactElement !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = { $$typeof: num, type: "hr", key: null, ref: null, props: null, _owner: null };
      let tmp2;
      if (null != key.key) {
        tmp2 = key;
      }
      obj[2] = tmp2;
      obj[4] = closure_13;
      return obj;
    };
    obj3[4] = function html(arg0, arg1, arg2) {
      return "<hr>";
    };
    obj[4] = obj3;
    const obj4 = { order: null, match: null, parse: null, react: null, html: null };
    obj4[0] = 4;
    obj4[1] = blockRegex(/^(?:    [^\n]+\n*)+(?:\n *)+\n/);
    obj4[2] = function parse(arg0, arg1, arg2) {
      obj = { lang: "Array", content: 0 };
      obj[1] = arg0[0].replace(/^    /gm, "").replace(/\n+$/, "");
      return obj;
    };
    obj4[3] = function react(children, arg1, key) {
      let text;
      if (children.lang) {
        text = `markdown-code-${children.lang}`;
      }
      obj = { className: text, children: children.content };
      if (typeof reactElement !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = { $$typeof: num, type: "code", key: undefined, ref: null, props: obj, _owner: null };
      if (typeof reactElement !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = { $$typeof: num, type: "pre", key: null, ref: null, props: null, _owner: null };
      let tmp4;
      if (null != key.key) {
        tmp4 = key;
      }
      obj[2] = tmp4;
      obj[4] = { children: obj };
      return obj;
    };
    obj4[4] = function html(lang) {
      let _class;
      if (lang.lang) {
        _class = `markdown-code-${lang.lang}`;
      }
      if (typeof sanitizeText !== "function") {
        HermesBuiltin.throwTypeError();
      }
      return htmlTag("pre", htmlTag("code", String(lang.content).replace(closure_15, (arg0) => table[arg0]), { class: _class }));
    };
    obj[5] = obj4;
    const obj5 = { order: null, match: null, parse: null, react: null, html: null };
    obj5[0] = 5;
    obj5[1] = blockRegex(/^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/);
    obj5[2] = function parse(content) {
      return { type: "codeBlock", lang: content[2] || undefined, content: content[3] };
    };
    obj[6] = obj5;
    const obj6 = { order: null, match: null, parse: null, react: null, html: null };
    obj6[0] = 6;
    obj6[1] = blockRegex(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/);
    obj6[2] = function parse(arg0, arg1, arg2) {
      return { content: arg1(str.replace(/^ *> ?/gm, ""), arg2) };
    };
    obj6[3] = function react(content, arg1, key) {
      obj = { children: arg1(content.content, key) };
      if (typeof reactElement !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = { $$typeof: num, type: "blockquote", key: null, ref: null, props: null, _owner: null };
      let tmp;
      if (null != key.key) {
        tmp = key;
      }
      obj[2] = tmp;
      obj[4] = obj;
      return obj;
    };
    obj6[4] = function html(content) {
      return htmlTag("blockquote", arg1(content.content, arg2));
    };
    obj[7] = obj6;
    const obj7 = { order: null, match: null, parse: null, react: null, html: null };
    obj7[0] = 7;
    obj7[1] = function match(arg0, prevCapture) {
      let str = "";
      if (null != prevCapture.prevCapture) {
        str = prevCapture.prevCapture[0];
      }
      const match = regex5.exec(str);
      let match1 = null;
      if (match) {
        match1 = null;
        if (tmp2) {
          match1 = regExp2.exec(match[1] + arg0);
        }
      }
      return match1;
    };
    obj7[2] = function parse(arg0, arg1, arg2) {
      closure_0 = arg1;
      closure_1 = arg2;
      let tmp2;
      if (arg0[2].length > 1) {
        tmp2 = +arr;
      }
      let match = arg0[0].replace(closure_25, "\n").match(regExp1);
      c3 = false;
      const str = arg0[0];
      const str2 = arg0[0].replace(closure_25, "\n");
      return {
        ordered: arg0[2].length > 1,
        start: tmp2,
        items: match.map((str) => {
          match = closure_1_21.exec(str);
          num = 0;
          if (match) {
            num = match[0].length;
          }
          regExp = new RegExp("^ {1," + num + "}", "gm");
          const replaced = str.replace(regExp, "").replace(closure_1_21, "");
          const diff = match.length - 1;
          let tmp5 = -1 !== replaced.indexOf("\n\n");
          if (!tmp5) {
            tmp5 = arg1 === diff && closure_3;
            const tmp7 = arg1 === diff && closure_3;
          }
          closure_3 = tmp5;
          closure_1._list = true;
          ({ inline, _list } = closure_1);
          if (tmp5) {
            tmp8.inline = false;
            let replaced1 = replaced.replace(closure_1_26, "\n\n");
          } else {
            tmp8.inline = true;
            replaced1 = replaced.replace(closure_1_26, "");
          }
          closure_1.inline = inline;
          closure_1._list = _list;
          return callback(replaced1, closure_1);
        })
      };
    };
    obj7[3] = function react(ordered, arg1, key) {
      closure_0 = arg1;
      closure_1 = key;
      let str = "ul";
      if (ordered.ordered) {
        str = "ol";
      }
      obj = {
        start: ordered.start,
        children: items.map((arg0, arg1) => {
          obj = { children: callback(arg0, closure_1) };
          const text = `${arg1}`;
          if (typeof closure_1_11 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          obj = { $$typeof: closure_1_10, type: "li", key: text, ref: null, props: obj, _owner: null };
          return obj;
        })
      };
      items = ordered.items;
      if (typeof reactElement !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = { $$typeof: num, type: str, key: null, ref: null, props: null, _owner: null };
      let tmp;
      if (null != key.key) {
        tmp = key;
      }
      obj[2] = tmp;
      obj[4] = obj;
      return obj;
    };
    obj7[4] = function html(items) {
      closure_0 = arg1;
      closure_1 = arg2;
      items = items.items;
      const mapped = items.map((arg0) => closure_1_12("li", callback(arg0, closure_1)));
      let str = "ul";
      const joined = mapped.join("");
      if (items.ordered) {
        str = "ol";
      }
      return htmlTag(str, joined, { start: items.start });
    };
    obj[8] = obj7;
    const obj8 = { order: null, match: null, parse: null, react: null, html: null };
    obj8[0] = 8;
    obj8[1] = blockRegex(/^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/);
    obj8[2] = function parse(arg0, arg1, _refs) {
      const def = arg0[1].replace(/\s+/g, " ").toLowerCase();
      const target = arg0[2];
      const title = arg0[3];
      if (tmp4) {
        const item = _refs._refs[def].forEach((arg0) => {
          arg0.target = target;
          arg0.title = title;
        });
        const arr = _refs._refs[def];
      }
      _refs._defs = _refs._defs || {};
      _refs._defs[def] = { target, title };
      return { def, target, title };
    };
    obj8[3] = function react() {
      return null;
    };
    obj8[4] = function html() {
      return "";
    };
    obj[9] = obj8;
    const obj9 = { order: null, match: null, parse: null, react: null, html: null };
    obj9[0] = 9;
    obj9[1] = blockRegex(/^ *(\|.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/);
    obj9[2] = fnResult;
    obj9[3] = function react(arg0, arg1, key) {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_2 = key;
      ({ header, cells } = arg0);
      const mapped = header.map((arg0, arg1) => {
        const text = `${arg1}`;
        if (null == align.align[arg1]) {
          obj = {};
        } else {
          obj = { textAlign: null };
          obj[0] = tmp3.align[arg1];
        }
        obj = { style: obj, scope: "col", children: callback(arg0, closure_2) };
        if (typeof closure_1_11 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        obj = { $$typeof: closure_1_10, type: "th", key: text, ref: null, props: obj, _owner: null };
        return obj;
      });
      const mapped1 = cells.map((arr) => {
        obj = {
          children: arr.map((arg0, arg1) => {
            const text = `${arg1}`;
            if (null == align.align[arg1]) {
              obj = {};
            } else {
              obj = { textAlign: null };
              obj[0] = tmp3.align[arg1];
            }
            obj = { style: obj, children: callback(arg0, closure_2) };
            if (typeof closure_1_11 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            obj = { $$typeof: closure_1_10, type: "td", key: text, ref: null, props: obj, _owner: null };
            return obj;
          })
        };
        let text = `${arg1}`;
        if (typeof closure_1_11 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        obj = { $$typeof: closure_1_10, type: "tr", key: text, ref: null, props: obj, _owner: null };
        return obj;
      });
      if (typeof reactElement !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = { $$typeof: num, type: "tr", key: undefined, ref: null, props: { children: mapped }, _owner: null };
      if (typeof reactElement !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const items = [{ $$typeof: num, type: "thead", key: "thead", ref: null, props: { children: obj }, _owner: null }, ];
      if (typeof reactElement !== "function") {
        HermesBuiltin.throwTypeError();
      }
      items[1] = { $$typeof: num, type: "tbody", key: "tbody", ref: null, props: { children: mapped1 }, _owner: null };
      if (typeof reactElement !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = { $$typeof: tmp4, type: "table", key: null, ref: null, props: null, _owner: null };
      let tmp5;
      if (null != key.key) {
        tmp5 = key;
      }
      obj[2] = tmp5;
      obj[4] = { children: items };
      return obj;
    };
    obj9[4] = function html(header) {
      closure_0 = header;
      closure_1 = arg1;
      closure_2 = arg2;
      header = header.header;
      let mapped = header.map((arg0, arg1) => {
        let style = "";
        if (null != header.align[arg1]) {
          style = `${"text-align:" + closure_0.align[arg1]};`;
        }
        return closure_1_12("th", callback(arg0, closure_2), { style, scope: "col" });
      });
      const cells = header.cells;
      const joined = mapped.join("");
      const mapped1 = cells.map((arr) => {
        const mapped = arr.map((arg0, arg1) => {
          let style = "";
          if (null != closure_0.align[arg1]) {
            style = `${"text-align:" + closure_0.align[arg1]};`;
          }
          return closure_1_12("td", callback(arg0, closure_2), { style });
        });
        return closure_1_12("tr", mapped.join(""));
      });
      const joined1 = mapped1.join("");
      return htmlTag("table", htmlTag("thead", htmlTag("tr", joined)) + htmlTag("tbody", joined1));
    };
    obj[10] = obj9;
    const obj10 = { order: null, requiredFirstCharacters: null, match: null, parse: null, react: null, html: null };
    obj10[0] = 10;
    obj10[1] = ["\n"];
    obj10[2] = blockRegex(/^(?:\n *)*\n/);
    obj10[3] = ignoreCapture;
    obj10[4] = function react(arg0, arg1, arg2) {
      return "\n";
    };
    obj10[5] = function html(arg0, arg1, arg2) {
      return "\n";
    };
    obj[11] = obj10;
    const obj11 = { order: null, match: null, parse: null, react: null, html: null };
    obj11[0] = 11;
    obj11[1] = blockRegex(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/);
    obj11[2] = parseCaptureInline;
    obj11[3] = function react(content, arg1, key) {
      obj = { className: "paragraph", children: arg1(content.content, key) };
      if (typeof reactElement !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = { $$typeof: num, type: "div", key: null, ref: null, props: null, _owner: null };
      let tmp;
      if (null != key.key) {
        tmp = key;
      }
      obj[2] = tmp;
      obj[4] = obj;
      return obj;
    };
    obj11[4] = function html(content) {
      return htmlTag("div", arg1(content.content, arg2), { class: "paragraph" });
    };
    obj[12] = obj11;
    const obj12 = { order: null, requiredFirstCharacters: null, match: null, parse: null, react: null, html: null };
    obj12[0] = 12;
    obj12[1] = ["\\"];
    obj12[2] = inlineRegex(/^\\([^0-9A-Za-z\s])/);
    obj12[3] = function parse(content) {
      return { type: "text", content: content[1] };
    };
    obj[13] = obj12;
    const obj13 = { order: null, match: null, parse: null, react: null, html: null };
    obj13[0] = 13;
    obj13[1] = function match(arg0, inTable) {
      let match = null;
      if (inTable.inTable) {
        match = /^ *\| */.exec(arg0);
        obj = /^ *\| */;
      }
      return match;
    };
    obj13[2] = function parse() {
      return { type: "tableSeparator" };
    };
    obj13[3] = function react() {
      return " | ";
    };
    obj13[4] = function html() {
      return " &vert; ";
    };
    obj[14] = obj13;
    const obj14 = { order: null, requiredFirstCharacters: null, match: null, parse: null, react: null, html: null };
    obj14[0] = 14;
    obj14[1] = ["<"];
    obj14[2] = inlineRegex(/^<([^: >]+:\/[^ >]+)>/);
    obj14[3] = function parse(content) {
      obj = { type: "link", content: items, target: content[1] };
      obj = { type: "text", content: content[1] };
      items = [obj];
      return obj;
    };
    obj[15] = obj14;
    const obj15 = { order: null, match: null, parse: null, react: null, html: null };
    obj15[0] = 15;
    obj15[1] = inlineRegex(/^<([^ >]+@[^ >]+)>/);
    obj15[2] = function parse(content) {
      let target = tmp;
      if (!regex6.test(content[1])) {
        target = `mailto:${tmp}`;
      }
      content = [{ type: "text", content: content[1] }];
      return { type: "link", content, target };
    };
    obj[16] = obj15;
    const obj16 = { order: null, requiredFirstCharacters: null, match: null, parse: null, react: null, html: null };
    obj16[0] = 16;
    obj16[1] = ["h"];
    obj16[2] = inlineRegex(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/);
    obj16[3] = function parse(content) {
      obj = { type: "link", content: items, target: content[1], title: "call" };
      obj = { type: "text", content: content[1] };
      items = [obj];
      return obj;
    };
    obj[17] = obj16;
    const obj17 = { order: null, requiredFirstCharacters: null, match: null, parse: null, react: null, html: null };
    obj17[0] = 17;
    obj17[1] = ["["];
    const _RegExp3 = RegExp;
    const regExp5 = new RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\()]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)");
    obj17[2] = inlineRegex(regExp5);
    obj17[3] = function parse(arg0, arg1, arg2) {
      obj = { content: arg1(arg0[1], arg2), target: null, title: null };
      if (typeof unescapeUrl !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj[1] = arg0[2].replace(closure_18, "$1");
      obj[2] = arg0[3];
      return obj;
    };
    obj17[4] = function react(target, arg1, key) {
      obj = { href: sanitizeUrl(target.target), title: target.title, children: arg1(target.content, key) };
      if (typeof reactElement !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = { $$typeof: num, type: "a", key: null, ref: null, props: null, _owner: null };
      let tmp;
      if (null != key.key) {
        tmp = key;
      }
      obj[2] = tmp;
      obj[4] = obj;
      return obj;
    };
    obj17[5] = function html(target) {
      return htmlTag("a", arg1(target.content, arg2), { href: sanitizeUrl(target.target), title: target.title });
    };
    obj[18] = obj17;
    const obj18 = { order: null, match: null, parse: null, react: null, html: null };
    obj18[0] = 18;
    const _RegExp4 = RegExp;
    const regExp6 = new RegExp("^!\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\()]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)");
    obj18[1] = inlineRegex(regExp6);
    obj18[2] = function parse(alt) {
      obj = { alt: alt[1], target: null, title: null };
      if (typeof unescapeUrl !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj[1] = alt[2].replace(closure_18, "$1");
      obj[2] = alt[3];
      return obj;
    };
    obj18[3] = function react(alt, arg1, key) {
      obj = { src: sanitizeUrl(alt.target), alt: alt.alt, title: alt.title };
      if (typeof reactElement !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = { $$typeof: num, type: "img", key: null, ref: null, props: null, _owner: null };
      let tmp;
      if (null != key.key) {
        tmp = key;
      }
      obj[2] = tmp;
      obj[4] = obj;
      return obj;
    };
    obj18[4] = function html(alt) {
      return htmlTag("img", "", { src: sanitizeUrl(alt.target), alt: alt.alt, title: alt.title }, false);
    };
    obj[19] = obj18;
    const obj19 = { order: null, match: null, parse: null, react: null, html: null };
    obj19[0] = 19;
    const _RegExp5 = RegExp;
    const regExp7 = new RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\s*\\[([^\\]]*)\\]");
    obj19[1] = inlineRegex(regExp7);
    obj19[2] = function parse(arg0, arg1, _defs) {
      obj = { type: "link", content: arg1(arg0[1], _defs) };
      if (typeof parseRef !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const formatted = arg0[2] || arg0[1].replace(/\s+/g, " ").toLowerCase();
      if (_defs._defs) {
        if (_defs._defs[formatted]) {
          ({ target: obj.target, title: obj.title } = _defs._defs[formatted]);
        }
      }
      _defs._refs = _defs._refs || {};
      let items = _defs._refs[formatted];
      if (!items) {
        items = [];
      }
      _defs._refs[formatted] = items;
      _defs._refs[formatted].push(obj);
      return obj;
    };
    obj[20] = obj19;
    const obj20 = { order: null, match: null, parse: null, react: null, html: null };
    obj20[0] = 20;
    const _RegExp6 = RegExp;
    const regExp8 = new RegExp("^!\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\s*\\[([^\\]]*)\\]");
    obj20[1] = inlineRegex(regExp8);
    obj20[2] = function parse(alt, arg1, _defs) {
      obj = { type: "image", alt: alt[1] };
      if (typeof parseRef !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const formatted = alt[2] || alt[1].replace(/\s+/g, " ").toLowerCase();
      if (_defs._defs) {
        if (_defs._defs[formatted]) {
          ({ target: obj.target, title: obj.title } = _defs._defs[formatted]);
        }
      }
      _defs._refs = _defs._refs || {};
      let items = _defs._refs[formatted];
      if (!items) {
        items = [];
      }
      _defs._refs[formatted] = items;
      _defs._refs[formatted].push(obj);
      return obj;
    };
    obj[21] = obj20;
    const obj21 = { order: null, match: null, quality: null, parse: null, react: null, html: null };
    obj21[0] = 21;
    function parserFor(rules) {
      closure_0 = rules;
      closure_1 = arg1;
      const keys = Object.keys(rules);
      const found = keys.filter((arg0) => {
        if (null != dependencyMap[arg0]) {
          if (null != str.match) {
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
              const text = `simple-markdown: Invalid order for rule \`${arg0}`;
              console.warn(`${`simple-markdown: Invalid order for rule \`${arg0}`}\`: ${String(order)}`);
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
          let num2 = 1;
          if (tmp.quality) {
            num2 = 0;
          }
          let num3 = 1;
          if (tmp2.quality) {
            num3 = 0;
          }
          if (num2 !== num3) {
            let num4 = num2 - num3;
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
      const map = new Map();
      let items = [];
      for (let num = 0; num < found.length; num = num + 1) {
        let tmp3 = found[num];
        closure_6 = tmp3;
        let prop = rules[tmp3].requiredFirstCharacters;
        let tmp4 = num;
        if (null == prop) {
          let arr = items.push(tmp3);
        } else {
          let mapped = prop.map((str) => {
            const charCodeAtResult = str.charCodeAt(0);
            if (!map.has(charCodeAtResult)) {
              const result = obj.set(charCodeAtResult, []);
            }
            const value = obj.get(charCodeAtResult);
            value.push(closure_6);
          });
        }
      }
      function nestedParse(arg0, arg1) {
        let tmp = arg1;
        if (!arg1) {
          tmp = merged;
        }
        merged = tmp;
        num = tmp._parseDepth;
        if (num == null) {
          num = 0;
        }
        items = [];
        const sum = num + 1;
        if (sum > 1000) {
          if (arg0) {
            obj = { type: "text", content: null };
            obj[1] = arg0;
            items.push(obj);
          }
          return items;
        } else {
          const _Object = Object;
          obj = { _parseDepth: null };
          obj[0] = sum;
          merged = Object.assign({}, tmp, obj);
          let str3 = arg0;
          if (arg0) {
            while (true) {
              let tmp3 = map;
              let items1 = [map.get(str3.charCodeAt(0)), ];
              let tmp4 = items;
              items1[1] = items;
              let tmp5 = str3;
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
                  let tmp12 = num2;
                  let tmp13 = num3;
                  let tmp14 = num4;
                  let tmp15 = tmp6;
                  let tmp16 = tmp7;
                  let tmp17 = tmp8;
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
                      let tmp24 = dependencyMap;
                      let str = dependencyMap[tmp23];
                      let order = str.order;
                      let tmp25 = num6;
                      let tmp26 = tmp39;
                      let tmp27 = tmp40;
                      let tmp28 = tmp41;
                      let tmp29 = tmp42;
                      let tmp30 = tmp43;
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
                        let tmp32 = str2;
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
                let tmp48 = new.target;
                let str4 = "`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?";
                let tmp49 = new.target;
                error = new Error("`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?");
                let tmp51 = error;
                throw error;
              } else {
                let tmp44 = nestedParse;
                let parsed = tmp10.parse(tmp9, nestedParse, merged);
                let _Array = Array;
                if (Array.isArray(parsed)) {
                  let _Array2 = Array;
                  let applyResult = push.apply(items, parsed);
                } else {
                  if (null == parsed.type) {
                    parsed.type = tmp11;
                  }
                  let arr = items.push(parsed);
                }
                merged.prevCapture = tmp9;
                str3 = str3.substring(merged.prevCapture[0].length);
              }
            }
            const _Error2 = Error;
            const error1 = new Error("Could not find a matching rule for the below content. The rule with highest `order` should always match content provided to it. Check the definition of `match` for '" + found[found.length - 1] + "'. It seems to not match the following source:\n" + str3);
            throw error1;
          }
          return items;
        }
      }
      function outerParse(arg0, arg1) {
        obj = arg1;
        if (!arg1) {
          obj = {};
        }
        if (null != closure_1) {
          for (const key10006 in tmp) {
            let tmp6 = key10006;
            let _Object = Object;
            let call = hasOwnProperty.call;
            if (typeof call === "unknown") {
              let hasOwnPropertyResult = hasOwnProperty(key10006);
            } else {
              hasOwnPropertyResult = call(tmp, key10006);
            }
            if (!hasOwnPropertyResult) {
              continue;
            } else {
              obj[key10006] = tmp[key10006];
              continue;
            }
            continue;
          }
        }
        let disableAutoBlockNewlines = obj.inline;
        if (!disableAutoBlockNewlines) {
          disableAutoBlockNewlines = obj.disableAutoBlockNewlines;
        }
        let str = arg0;
        if (!disableAutoBlockNewlines) {
          str = `${arg0}

        `;
        }
        obj.prevCapture = null;
        const str3 = str.replace(nestedParse, "\n");
        return nestedParse(str.replace(nestedParse, "\n").replace(closure_1_9, "").replace(closure_1_8, "    "), obj);
      }
      nestedParse.rules = rules;
      outerParse.rules = rules;
      return outerParse;
    }
    function anyScopeRegex(MARKDOWN_SPOILER_REGEXP) {
      closure_0 = MARKDOWN_SPOILER_REGEXP;
      function match(arg0, arg1) {
        return MARKDOWN_SPOILER_REGEXP.exec(arg0);
      }
      match.regex = MARKDOWN_SPOILER_REGEXP;
      return match;
    }
    function preprocess(str) {
      str = str.replace(closure_7, "\n");
      return str.replace(closure_7, "\n").replace(closure_9, "").replace(closure_8, "    ");
    }
    const regExp9 = new RegExp(str8 + "|^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?)\\*(?!\\*)");
    obj21[1] = inlineRegex(regExp9);
    obj21[2] = function quality(arg0) {
      return arg0[0].length + 0.2;
    };
    obj21[3] = function parse(arg0, arg1, arg2) {
      return { content: arg1(arg0[2] || arg0[1], arg2) };
    };
    obj21[4] = function react(content, arg1, key) {
      obj = { children: arg1(content.content, key) };
      if (typeof reactElement !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = { $$typeof: num, type: "em", key: null, ref: null, props: null, _owner: null };
      let tmp;
      if (null != key.key) {
        tmp = key;
      }
      obj[2] = tmp;
      obj[4] = obj;
      return obj;
    };
    obj21[5] = function html(content) {
      return htmlTag("em", arg1(content.content, arg2));
    };
    obj[22] = obj21;
    const obj22 = { order: null, requiredFirstCharacters: null, match: null, quality: null, parse: null, react: null, html: null };
    obj22[0] = 21;
    obj22[1] = ["*"];
    obj22[2] = inlineRegex(/^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/);
    obj22[3] = function quality(arg0) {
      return arg0[0].length + 0.1;
    };
    obj22[4] = parseCaptureInline;
    obj22[5] = function react(content, arg1, key) {
      obj = { children: arg1(content.content, key) };
      if (typeof reactElement !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = { $$typeof: num, type: "strong", key: null, ref: null, props: null, _owner: null };
      let tmp;
      if (null != key.key) {
        tmp = key;
      }
      obj[2] = tmp;
      obj[4] = obj;
      return obj;
    };
    obj22[6] = function html(content) {
      return htmlTag("strong", arg1(content.content, arg2));
    };
    obj[23] = obj22;
    const obj23 = { order: null, requiredFirstCharacters: null, match: null, quality: null, parse: null, react: null, html: null };
    obj23[0] = 21;
    obj23[1] = ["_"];
    obj23[2] = inlineRegex(/^__((?:\\[\s\S]|[^\\])+?)__(?!_)/);
    obj23[3] = function quality(arg0) {
      return arg0[0].length;
    };
    obj23[4] = parseCaptureInline;
    obj23[5] = function react(content, arg1, key) {
      obj = { children: arg1(content.content, key) };
      if (typeof reactElement !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = { $$typeof: num, type: "u", key: null, ref: null, props: null, _owner: null };
      let tmp;
      if (null != key.key) {
        tmp = key;
      }
      obj[2] = tmp;
      obj[4] = obj;
      return obj;
    };
    obj23[6] = function html(content) {
      return htmlTag("u", arg1(content.content, arg2));
    };
    obj[24] = obj23;
    const obj24 = { order: null, requiredFirstCharacters: null, match: null, parse: null, react: null, html: null };
    obj24[0] = 22;
    obj24[1] = ["~"];
    obj24[2] = inlineRegex(/^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~]|\s(?!~~))+?)~~/);
    obj24[3] = parseCaptureInline;
    obj24[4] = function react(content, arg1, key) {
      obj = { children: arg1(content.content, key) };
      if (typeof reactElement !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = { $$typeof: num, type: "del", key: null, ref: null, props: null, _owner: null };
      let tmp;
      if (null != key.key) {
        tmp = key;
      }
      obj[2] = tmp;
      obj[4] = obj;
      return obj;
    };
    obj24[5] = function html(content) {
      return htmlTag("del", arg1(content.content, arg2));
    };
    obj[25] = obj24;
    const obj25 = { order: null, requiredFirstCharacters: null, match: null, parse: null, react: null, html: null };
    obj25[0] = 23;
    obj25[1] = ["`"];
    obj25[2] = inlineRegex(/^(`+)([\s\S]*?[^`])\1(?!`)/);
    obj25[3] = function parse(arg0, arg1, arg2) {
      return { content: str.replace(closure_24, "$1") };
    };
    obj25[4] = function react(children, arg1, key) {
      obj = { children: children.content };
      if (typeof reactElement !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = { $$typeof: num, type: "code", key: null, ref: null, props: null, _owner: null };
      let tmp;
      if (null != key.key) {
        tmp = key;
      }
      obj[2] = tmp;
      obj[4] = obj;
      return obj;
    };
    obj25[5] = function html(content) {
      if (typeof sanitizeText !== "function") {
        HermesBuiltin.throwTypeError();
      }
      return htmlTag("code", String(content.content).replace(closure_15, (arg0) => table[arg0]));
    };
    obj[26] = obj25;
    const obj26 = { order: null, requiredFirstCharacters: null, match: null, parse: null, react: null, html: null };
    obj26[0] = 24;
    obj26[1] = [" "];
    obj26[2] = anyScopeRegex(/^ {2,}\n/);
    obj26[3] = ignoreCapture;
    obj26[4] = function react(arg0, arg1, key) {
      if (typeof reactElement !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = { $$typeof: num, type: "br", key: null, ref: null, props: null, _owner: null };
      let tmp2;
      if (null != key.key) {
        tmp2 = key;
      }
      obj[2] = tmp2;
      obj[4] = closure_13;
      return obj;
    };
    obj26[5] = function html(arg0, arg1, arg2) {
      return "<br>";
    };
    obj[27] = obj26;
    const obj27 = { order: null, match: null, parse: null, react: null, html: null };
    obj27[0] = 25;
    obj27[1] = anyScopeRegex(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/);
    obj27[2] = function parse(content) {
      return { content: content[0] };
    };
    obj27[3] = function react(content) {
      return content.content;
    };
    obj27[4] = function html(content) {
      if (typeof sanitizeText !== "function") {
        HermesBuiltin.throwTypeError();
      }
      return String(content.content).replace(closure_15, (arg0) => table[arg0]);
    };
    obj[28] = obj27;
    function outputFor(Array, html) {
      closure_0 = Array;
      closure_1 = html;
      closure_2 = arg2;
      if (html) {
        let _Array = Array.Array;
        if (!_Array) {
          _Array = obj.Array;
        }
        if (_Array[html]) {
          closure_4 = tmp7;
          function nestedOutput(arg0, arg1) {
            let tmp = arg1;
            if (!arg1) {
              tmp = closure_3;
            }
            closure_3 = tmp;
            if (Array.isArray(arg0)) {
              let tmp6 = callback(arg0, nestedOutput, tmp);
            } else {
              tmp6 = _Array[arg0.type][closure_1](arg0, nestedOutput, tmp);
              const tmp3 = _Array[arg0.type];
            }
            return tmp6;
          }
          return (arg0, arg1) => {
            obj = arg1;
            if (!arg1) {
              obj = {};
            }
            if (null != closure_2) {
              for (const key10006 in tmp) {
                let tmp11 = key10006;
                let _Object = Object;
                let call = hasOwnProperty.call;
                if (typeof call === "unknown") {
                  let hasOwnPropertyResult = hasOwnProperty(key10006);
                } else {
                  hasOwnPropertyResult = call(tmp, key10006);
                }
                if (!hasOwnPropertyResult) {
                  continue;
                } else {
                  obj[key10006] = tmp[key10006];
                  continue;
                }
                continue;
              }
            }
            if (typeof nestedOutput !== "function") {
              HermesBuiltin.throwTypeError();
            }
            if (Array.isArray(arg0)) {
              let tmp9 = callback(arg0, tmp5, obj);
            } else {
              tmp9 = _Array[arg0.type][closure_1](arg0, tmp5, obj);
              const tmp7 = _Array[arg0.type];
            }
            return tmp9;
          };
        } else {
          const _Error2 = Error;
          error = new Error("simple-markdown: outputFor: to join nodes of type `" + html + "` you must provide an `Array:` joiner rule with that type, Please see the docs for details on specifying an Array rule.");
          throw error;
        }
      } else {
        const _Error = Error;
        const error1 = new Error("simple-markdown: outputFor: `property` must be defined. if you just upgraded, you probably need to replace `outputFor` with `reactFor`");
        throw error1;
      }
    }
    const parserForResult = parserFor(obj);
    function defaultBlockParse(arg0, arg1) {
      obj = arg1;
      if (!arg1) {
        obj = {};
      }
      obj.inline = false;
      return parserForResult(arg0, obj);
    }
    function defaultImplicitParse(arg0, arg1) {
      obj = arg1;
      const isMatch = regex4.test(arg0);
      if (!arg1) {
        obj = {};
      }
      obj.inline = !isMatch;
      return parserForResult(arg0, obj);
    }
    const outputForResult = outputFor(obj, "react");
    const outputForResult1 = outputFor(obj, "html");
    function markdownToReact(arg0, arg1) {
      if (typeof defaultBlockParse !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = arg1;
      if (!arg1) {
        obj = {};
      }
      obj.inline = false;
      return closure_35(parserForResult(arg0, obj), arg1);
    }
    const obj28 = { defaultRules: null, parserFor: null, outputFor: null, inlineRegex: null, blockRegex: null, anyScopeRegex: null, parseInline: null, parseBlock: null, markdownToReact: null, markdownToHtml: null, ReactMarkdown: null, defaultBlockParse: null, defaultInlineParse: null, defaultImplicitParse: null, defaultReactOutput: null, defaultHtmlOutput: null, preprocess: null, sanitizeText: null, sanitizeUrl: null, unescapeUrl: null, htmlTag: null, reactElement: null, defaultRawParse: null, ruleOutput: null, reactFor: null, htmlFor: null, defaultParse: null, defaultOutput: null };
    obj28[0] = obj;
    obj28[1] = parserFor;
    obj28[2] = outputFor;
    obj28[3] = inlineRegex;
    obj28[4] = blockRegex;
    obj28[5] = anyScopeRegex;
    obj28[6] = parseInline;
    obj28[7] = function parseBlock(arg0, arg1, inline) {
      inline.inline = false;
      inline.inline = inline.inline || false;
      return arg0(arg1 + "\n\n", inline);
    };
    obj28[8] = markdownToReact;
    obj28[9] = function markdownToHtml(arg0, arg1) {
      if (typeof defaultBlockParse !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = arg1;
      if (!arg1) {
        obj = {};
      }
      obj.inline = false;
      return outputForResult1(parserForResult(arg0, obj), arg1);
    };
    obj28[10] = function ReactMarkdown(obj) {
      obj = {};
      for (const key10006 in arg0) {
        let tmp4 = key10006;
        let tmp5 = "source" !== key10006;
        if (!tmp5) {
          if (!tmp5) {
            continue;
          } else {
            obj[key10006] = arg0[key10006];
            continue;
          }
          continue;
        } else {
          let _Object = Object;
          let call = hasOwnProperty.call;
          if (typeof call === "unknown") {
            let hasOwnPropertyResult = hasOwnProperty(key10006);
          } else {
            hasOwnPropertyResult = call(arg0, key10006);
          }
          let tmp2 = hasOwnPropertyResult;
        }
      }
      if (typeof markdownToReact !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (typeof defaultBlockParse !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj.children = closure_35(parserForResult(obj.source, { inline: false }), undefined);
      if (typeof reactElement !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = { $$typeof: num, type: "div", key: undefined, ref: null, props: obj, _owner: null };
      return obj;
    };
    obj28[11] = defaultBlockParse;
    obj28[12] = function defaultInlineParse(arg0, arg1) {
      obj = arg1;
      if (!arg1) {
        obj = {};
      }
      obj.inline = true;
      return parserForResult(arg0, obj);
    };
    obj28[13] = defaultImplicitParse;
    obj28[14] = outputForResult;
    obj28[15] = outputForResult1;
    obj28[16] = preprocess;
    obj28[17] = sanitizeText;
    obj28[18] = sanitizeUrl;
    obj28[19] = unescapeUrl;
    obj28[20] = htmlTag;
    obj28[21] = reactElement;
    obj28[22] = parserForResult;
    obj28[23] = function ruleOutput(rules, react) {
      closure_0 = rules;
      let tmp = react;
      closure_1 = react;
      if (!react) {
        const _console = console;
        tmp = typeof console === "undefined";
      }
      if (!tmp) {
        const _console2 = console;
        console.warn("simple-markdown ruleOutput should take 'react' or 'html' as the second argument.");
      }
      return (arg0, arg1, arg2) => table[arg0.type][closure_1](arg0, arg1, arg2);
    };
    obj28[24] = function reactFor(arg0) {
      closure_0 = arg0;
      function nestedOutput(arg0, arg1) {
        obj = arg1;
        if (!arg1) {
          obj = {};
        }
        if (Array.isArray(arg0)) {
          const items = [];
          num = 0;
          let tmp3 = null;
          if (0 < arg0.length) {
            while (true) {
              obj.key = "" + num;
              let tmp4 = nestedOutput;
              let tmp5 = nestedOutput(arg0[num], obj);
              let tmp6 = num;
              let tmp7 = tmp3;
              if (typeof tmp5 === "string") {
                if (typeof tmp3 === "string") {
                  let sum = tmp3 + tmp5;
                  items[items.length - 1] = sum;
                  let tmp9 = sum;
                  num = num + 1;
                  tmp3 = tmp9;
                  if (num >= arg0.length) {
                    break;
                  }
                }
              }
              let arr = items.push(tmp5);
              tmp9 = tmp5;
            }
          }
          obj.key = obj.key;
          return items;
        } else {
          return callback(arg0, nestedOutput, obj);
        }
      }
      return nestedOutput;
    };
    obj28[25] = function htmlFor(arg0) {
      closure_0 = arg0;
      function nestedOutput(arr) {
        obj = arg1;
        obj = arg1;
        if (!arg1) {
          obj = {};
        }
        if (Array.isArray(arr)) {
          const mapped = arr.map((arr) => {
            if (!obj) {
              obj = {};
            }
            if (Array.isArray(arr)) {
              let mapped = arr.map((arr) => {
                if (!obj) {
                  obj = {};
                }
                if (Array.isArray(arr)) {
                  let mapped = arr.map(() => { ... });
                  let joined = mapped.join("");
                } else {
                  joined = closure_1_0(arr, closure_1_1, obj);
                }
                return joined;
              });
              let joined = mapped.join("");
            } else {
              joined = closure_1_0(arr, closure_1_1, obj);
            }
            return joined;
          });
          let joined = mapped.join("");
        } else {
          joined = obj(arr, nestedOutput, obj);
        }
        return joined;
      }
      return nestedOutput;
    };
    obj28[26] = function defaultParse() {
      if (typeof console !== "undefined") {
        const _console = console;
        console.warn("defaultParse is deprecated, please use `defaultImplicitParse`");
      }
      const apply = defaultImplicitParse.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(null);
      } else {
        applyArgumentsResult = apply(null, arguments);
      }
      return applyArgumentsResult;
    };
    obj28[27] = function defaultOutput() {
      if (typeof console !== "undefined") {
        const _console = console;
        console.warn("defaultOutput is deprecated, please use `defaultReactOutput`");
      }
      const apply = closure_35.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(null);
      } else {
        applyArgumentsResult = apply(null, arguments);
      }
      return applyArgumentsResult;
    };
    return obj28;
  } catch (err) {
  }
};
if (typeof exports === "object") {
  if (undefined !== module) {
    module.exports = fn();
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(fn);
  }
}
this.SimpleMarkdown = fn();