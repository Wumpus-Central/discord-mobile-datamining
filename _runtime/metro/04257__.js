// _runtime/metro/04257__.js
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
  function reactElement(type, arg1, props) {
    const element = { $$typeof: num, type, key: null, ref: null, props: null, _owner: null };
    let tmp;
    if (null != arg1) {
      tmp = arg1;
    }
    element.key = tmp;
    element.props = props;
    return element;
  }
  function htmlTag(tr, joined, arg2, arg3) {
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
        let tmp14 = obj[tmp5];
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        let call = hasOwnProperty.call;
        let tmp6 = (typeof call === "unknown" ? hasOwnProperty(tmp5) : call(obj, tmp5)) && tmp14;
        if (!tmp6) {
          continue;
        } else if (typeof sanitizeText === "function") {
          let _String = String;
          let str3 = String(tmp5);
          let tmp8 = re15;
          if (typeof tmp7 === "function") {
            let _String2 = String;
            let text = `${" " + str3.replace(re15, (arg0) => closure_1_16[arg0])}="`;
            let str4 = String(tmp14);
            let _HermesInternal = HermesInternal;
            str = tmp4 + `${" " + str3.replace(re15, (arg0) => closure_1_16[arg0])}="` + str4.replace(tmp8, (arg0) => closure_1_16[arg0]) + "\"";
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
    if (tmp2) {
      text1 = `${tmp10 + joined + "</" + tr}>`;
    }
    return text1;
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
    return String(arg0).replace(re15, (arg0) => closure_1_16[arg0]);
  }
  const re18 = /\\([^0-9A-Za-z\s])/g;
  function unescapeUrl(str) {
    return str.replace(re18, "$1");
  }
  function parseInline(fn, formatted, inline) {
    inline.inline = true;
    inline.inline = inline.inline || false;
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
    closure_0 = arg0;
    return (arg0, fn, inTable) => {
      inTable.inline = true;
      if (typeof o === "function") {
        closure_0 = tmp;
        inTable.inTable = true;
        let arr = fn(str.trim(), inTable);
        closure_1 = arr;
        inTable.inTable = inTable.inTable;
        let items = [[]];
        closure_2 = items;
        let item = arr.forEach((type, index) => {
          if ("tableSeparator" === type.type) {
            let tmp9 = !closure_0;
            if (closure_0) {
              let tmp10 = 0 !== index;
              if (tmp10) {
                tmp10 = index !== length.length - 1;
              }
              tmp9 = tmp10;
            }
            if (tmp9) {
              let arr = items.push([]);
            }
          } else {
            let tmp4 = "text" !== type.type;
            if (!tmp4) {
              tmp4 = null != length[index + 1] && "tableSeparator" !== tmp[index + 1].type;
              const tmp3 = null != length[index + 1] && "tableSeparator" !== tmp[index + 1].type;
            }
            if (!tmp4) {
              type.content = type.content.replace(length, "");
            }
            arr = items[items.length - 1];
            arr = arr.push(type);
          }
        });
        let str3 = str2;
        if (tmp) {
          str3 = str2.replace(re0, "");
        }
        const parts = str3.trim().split("|");
        closure_0 = fn;
        closure_1 = inTable;
        closure_2 = tmp;
        const mapped = parts.map(l);
        const str5 = str3.trim();
        const parts1 = arg0[3].trim().split("\n");
        inTable.inline = false;
        obj = {
          type: "table",
          header: items,
          align: mapped,
          cells: parts1.map((item) => {
              if (typeof closure_2_6 === "function") {
                closure_0 = tmp3;
                tmp2.inTable = true;
                const tmpResult = tmp(item.trim(), tmp2);
                tmp2.inTable = tmp2.inTable;
                const items = [[]];
                item = tmpResult.forEach((type, index) => {
                  if ("tableSeparator" === type.type) {
                    let tmp9 = !closure_0;
                    if (closure_0) {
                      let tmp10 = 0 !== index;
                      if (tmp10) {
                        tmp10 = index !== length.length - 1;
                      }
                      tmp9 = tmp10;
                    }
                    if (tmp9) {
                      let arr = items.push([]);
                    }
                  } else {
                    let tmp4 = "text" !== type.type;
                    if (!tmp4) {
                      tmp4 = null != length[index + 1] && "tableSeparator" !== tmp[index + 1].type;
                      const tmp3 = null != length[index + 1] && "tableSeparator" !== tmp[index + 1].type;
                    }
                    if (!tmp4) {
                      type.content = type.content.replace(length, "");
                    }
                    arr = items[items.length - 1];
                    arr = arr.push(type);
                  }
                });
                return items;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            })
        };
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      str = arg0[1];
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
      const regex = regExp5;
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
        obj = { content: null };
        inline.inline = true;
        inline.inline = inline.inline || false;
        obj.content = fn(tmp, inline);
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    function ignoreCapture() {
      return {};
    }
    let defaultRules = { Array: null, heading: null, nptable: null, lheading: null, hr: null, codeBlock: null, fence: null, blockQuote: null, list: null, def: null, table: null, newline: null, paragraph: null, escape: null, tableSeparator: null, autolink: null, mailto: null, url: null, link: null, image: null, reflink: null, refimage: null, em: null, strong: null, u: null, del: null, inlineCode: null, br: null, text: null };
    defaultRules = {
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
          key.key = key.key;
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
    };
    defaultRules.Array = defaultRules;
    defaultRules = {
      order: 0,
      match: blockRegex(/^ *(#{1,6})([^\n]+?)#* *(?:\n *)+\n/),
      parse(level, fn, inline) {
          obj = { level: level[1].length, content: null };
          if (typeof parseInline === "function") {
            inline.inline = true;
            inline.inline = inline.inline || false;
            obj.content = fn(tmp, inline);
            return obj;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        },
      react(content, fn, key) {
          const props = { children: fn(content.content, key) };
          const text = `h${content.level}`;
          if (typeof reactElement === "function") {
            const element = { $$typeof: num, type: text, key: null, ref: null, props: null, _owner: null };
            let tmp4;
            if (null != key) {
              tmp4 = key;
            }
            element.key = tmp4;
            element.props = props;
            return element;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        },
      html(content, fn, arg2) {
          return htmlTag(`h${content.level}`, fn(content.content, arg2));
        }
    };
    defaultRules.heading = defaultRules;
    const obj1 = { order: 1, match: blockRegex(/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/), parse: tmp6, react: null, html: null };
    defaultRules.nptable = obj1;
    const obj2 = {
      order: 2,
      match: blockRegex(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/),
      parse(arg0, fn, inline) {
          num = 2;
          if ("=" === arg0[2]) {
            num = 1;
          }
          obj = { type: "heading", level: num, content: null };
          if (typeof parseInline === "function") {
            inline.inline = true;
            inline.inline = inline.inline || false;
            obj.content = fn(tmp, inline);
            return obj;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        },
      react: null,
      html: null
    };
    defaultRules.lheading = obj2;
    const obj3 = {
      order: 3,
      match: blockRegex(/^( *[-*_]){3,} *(?:\n *)+\n/),
      parse: ignoreCapture,
      react(arg0, arg1, key) {
          if (typeof reactElement === "function") {
            const element = { $$typeof: num, type: "hr", key: null, ref: null, props: null, _owner: null };
            let tmp4;
            if (null != key) {
              tmp4 = key;
            }
            element.key = tmp4;
            element.props = tmp;
            return element;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        },
      html(arg0, arg1, arg2) {
          return "<hr>";
        }
    };
    defaultRules.hr = obj3;
    const obj4 = {
      order: 4,
      match: blockRegex(/^(?:    [^\n]+\n*)+(?:\n *)+\n/),
      parse(arg0, arg1, arg2) {
          obj = { lang: "Array", content: arg0[0].replace(/^    /gm, "").replace(/\n+$/, "") };
          return obj;
        },
      react(children, arg1, key) {
          let text;
          if (children.lang) {
            text = `markdown-code-${children.lang}`;
          }
          let props = { className: text, children: children.content };
          if (typeof reactElement === "function") {
            props = { children: null };
            const element = { $$typeof: num, type: "code", key: undefined, ref: null, props, _owner: null };
            props.children = element;
            if (typeof tmp2 === "function") {
              const element1 = { $$typeof: tmp3, type: "pre", key: null, ref: null, props: null, _owner: null };
              let tmp5;
              if (null != key) {
                tmp5 = key;
              }
              element1.key = tmp5;
              element1.props = props;
              return element1;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        },
      html(lang, arg1, arg2) {
          if (lang.lang) {
            const text = `markdown-code-${lang.lang}`;
          }
          if (typeof sanitizeText === "function") {
            const _String = String;
            obj = { class: text };
            return tmp2("pre", tmp2("code", String(tmp3).replace(re15, (arg0) => closure_1_16[arg0]), obj));
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
    };
    defaultRules.codeBlock = obj4;
    const obj5 = {
      order: 5,
      match: blockRegex(/^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/),
      parse(content, arg1, arg2) {
          return { type: "codeBlock", lang: content[2] || undefined, content: content[3] };
        },
      react: null,
      html: null
    };
    defaultRules.fence = obj5;
    const obj6 = {
      order: 6,
      match: blockRegex(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/),
      parse(arg0, fn, arg2) {
          obj = { content: fn(arg0[0].replace(/^ *> ?/gm, ""), arg2) };
          return obj;
        },
      react(content, fn, key) {
          const props = { children: fn(content.content, key) };
          if (typeof reactElement === "function") {
            const element = { $$typeof: num, type: "blockquote", key: null, ref: null, props: null, _owner: null };
            let tmp3;
            if (null != key) {
              tmp3 = key;
            }
            element.key = tmp3;
            element.props = props;
            return element;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        },
      html(content, fn, arg2) {
          return htmlTag("blockquote", fn(content.content, arg2));
        }
    };
    defaultRules.blockQuote = obj6;
    const obj7 = {
      order: 7,
      match(arg0, prevCapture) {
          let str = "";
          if (null != prevCapture.prevCapture) {
            str = prevCapture.prevCapture[0];
          }
          const match = re28.exec(str);
          let match1 = null;
          if (match) {
            match1 = null;
            if (tmp2) {
              match1 = regExp2.exec(match[1] + arg0);
            }
          }
          return match1;
        },
      parse(arg0, arg1, arg2) {
          closure_0 = arg1;
          closure_1 = arg2;
          let tmp2;
          if (arg0[2].length > 1) {
            tmp2 = +arr;
          }
          let match = arg0[0].replace(closure_25, "\n").match(regExp1);
          closure_3 = false;
          const str2 = arg0[0].replace(closure_25, "\n");
          return {
            ordered: arg0[2].length > 1,
            start: tmp2,
            items: match.map((item, index) => {
              match = regExp.exec(item);
              num = 0;
              if (match) {
                num = match[0].length;
              }
              regExp = new RegExp("^ {1," + num + "}", "gm");
              const replaced = item.replace(regExp, "").replace(regExp, "");
              const diff = match.length - 1;
              let tmp5 = -1 !== replaced.indexOf("\n\n");
              if (!tmp5) {
                tmp5 = index === diff && closure_3;
                const tmp7 = index === diff && closure_3;
              }
              closure_3 = tmp5;
              closure_1._list = true;
              ({ inline, _list } = closure_1);
              if (tmp5) {
                tmp8.inline = false;
                let replaced1 = replaced.replace(re26, "\n\n");
              } else {
                tmp8.inline = true;
                replaced1 = replaced.replace(re26, "");
              }
              closure_1.inline = inline;
              closure_1._list = _list;
              return closure_0(replaced1, closure_1);
            })
          };
        },
      react(ordered, arg1, key) {
          closure_0 = arg1;
          closure_1 = key;
          let str = "ul";
          if (ordered.ordered) {
            str = "ol";
          }
          let props = { start: ordered.start, children: null };
          const items = ordered.items;
          props.children = items.map((item, index) => {
            const props = { children: closure_0(item, closure_1) };
            const text = `${index}`;
            if (typeof reactElement === "function") {
              const element = { $$typeof: num, type: "li", key: text, ref: null, props, _owner: null };
              return element;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          });
          if (typeof reactElement === "function") {
            let element = { $$typeof: num, type: str, key: null, ref: null, props: null, _owner: null };
            let tmp3;
            if (null != key) {
              tmp3 = key;
            }
            element.key = tmp3;
            element.props = props;
            return element;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        },
      html(ordered, arg1, arg2) {
          closure_0 = arg1;
          closure_1 = arg2;
          const items = ordered.items;
          const mapped = items.map((item) => htmlTag("li", closure_0(item, closure_1)));
          let str = "ul";
          const joined = mapped.join("");
          if (ordered.ordered) {
            str = "ol";
          }
          return htmlTag(str, joined, { start: ordered.start });
        }
    };
    defaultRules.list = obj7;
    const obj8 = {
      order: 8,
      match: blockRegex(/^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/),
      parse(arg0, arg1, _refs) {
          const def = arg0[1].replace(/\s+/g, " ").toLowerCase();
          const target = arg0[2];
          const title = arg0[3];
          if (tmp4) {
            const item = _refs._refs[def].forEach((item) => {
              item.target = target;
              item.title = title;
            });
          }
          _refs._defs = _refs._defs || {};
          _refs._defs[def] = { target, title };
          return { def, target, title };
        },
      react() {
          return null;
        },
      html() {
          return "";
        }
    };
    defaultRules.def = obj8;
    const obj9 = {
      order: 9,
      match: blockRegex(/^ *(\|.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/),
      parse: fnResult,
      react(arg0, arg1, key) {
          const align = arg0;
          closure_1 = arg1;
          closure_2 = key;
          ({ header, cells } = arg0);
          const mapped = header.map((item, index) => {
            const text = `${index}`;
            if (null == align.align[index]) {
              let props = {};
            } else {
              props = { textAlign: tmp3.align[index] };
            }
            props = { style: props, scope: "col", children: closure_1(item, closure_2) };
            if (typeof tmp === "function") {
              const element = { $$typeof: num, type: "th", key: text, ref: null, props, _owner: null };
              return element;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
            tmp = reactElement;
          });
          if (typeof reactElement === "function") {
            let props = { children: null };
            let element = { $$typeof: num, type: "tr", key: undefined, ref: null, props: { children: mapped }, _owner: null };
            props.children = element;
            if (typeof tmp3 === "function") {
              const element1 = { $$typeof: tmp4, type: "thead", key: "thead", ref: null, props, _owner: null };
              const items = [element1, ];
              props = { children: tmp2 };
              if (typeof tmp3 === "function") {
                props = { children: null };
                const element2 = { $$typeof: tmp4, type: "tbody", key: "tbody", ref: null, props, _owner: null };
                items[1] = element2;
                props.children = items;
                if (typeof tmp3 === "function") {
                  const element3 = { $$typeof: tmp4, type: "table", key: null, ref: null, props: null, _owner: null };
                  let tmp6;
                  if (null != key) {
                    tmp6 = key;
                  }
                  element3.key = tmp6;
                  element3.props = props;
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
        },
      html(header, arg1, arg2) {
          closure_1 = arg1;
          closure_2 = arg2;
          header = header.header;
          let mapped = header.map((item, index) => {
            let style = "";
            if (null != header.align[index]) {
              style = `${"text-align:" + closure_0.align[index]};`;
            }
            return htmlTag("th", closure_1(item, closure_2), { style, scope: "col" });
          });
          const cells = header.cells;
          const joined = mapped.join("");
          const mapped1 = cells.map((arr) => {
            const mapped = arr.map((item, index) => {
              let style = "";
              if (null != header.align[index]) {
                style = `${"text-align:" + closure_1_0.align[index]};`;
              }
              return htmlTag("td", closure_1_1(item, closure_1_2), { style });
            });
            return htmlTag("tr", mapped.join(""));
          });
          const joined1 = mapped1.join("");
          return htmlTag("table", htmlTag("thead", htmlTag("tr", joined)) + htmlTag("tbody", joined1));
        }
    };
    defaultRules.table = obj9;
    const obj10 = {
      order: 10,
      requiredFirstCharacters: ["\n"],
      match: blockRegex(/^(?:\n *)*\n/),
      parse: ignoreCapture,
      react(arg0, arg1, arg2) {
          return "\n";
        },
      html(arg0, arg1, arg2) {
          return "\n";
        }
    };
    defaultRules.newline = obj10;
    const obj11 = {
      order: 11,
      match: blockRegex(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/),
      parse: parseCaptureInline,
      react(content, fn, key) {
          const props = { className: "paragraph", children: fn(content.content, key) };
          if (typeof reactElement === "function") {
            const element = { $$typeof: num, type: "div", key: null, ref: null, props: null, _owner: null };
            let tmp3;
            if (null != key) {
              tmp3 = key;
            }
            element.key = tmp3;
            element.props = props;
            return element;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        },
      html(content, fn, arg2) {
          return htmlTag("div", fn(content.content, arg2), { class: "paragraph" });
        }
    };
    defaultRules.paragraph = obj11;
    const obj12 = {
      order: 12,
      requiredFirstCharacters: ["\\"],
      match: inlineRegex(/^\\([^0-9A-Za-z\s])/),
      parse(content, arg1, arg2) {
          return { type: "text", content: content[1] };
        },
      react: null,
      html: null
    };
    defaultRules.escape = obj12;
    const obj13 = {
      order: 13,
      match(arg0, inTable) {
          let match = null;
          if (inTable.inTable) {
            match = /^ *\| */.exec(arg0);
            obj = /^ *\| */;
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
    defaultRules.tableSeparator = obj13;
    const obj14 = {
      order: 14,
      requiredFirstCharacters: ["<"],
      match: inlineRegex(/^<([^: >]+:\/[^ >]+)>/),
      parse(content, arg1, arg2) {
          obj = { type: "link", content: null, target: content[1] };
          obj = { type: "text", content: content[1] };
          const items = [obj];
          obj.content = items;
          return obj;
        },
      react: null,
      html: null
    };
    defaultRules.autolink = obj14;
    const obj15 = {
      order: 15,
      match: inlineRegex(/^<([^ >]+@[^ >]+)>/),
      parse(content, arg1, arg2) {
          let text = tmp;
          if (!re29.test(content[1])) {
            text = `mailto:${tmp}`;
          }
          obj = { type: "link", content: null, target: text };
          const items = [{ type: "text", content: content[1] }];
          obj.content = items;
          return obj;
        },
      react: null,
      html: null
    };
    defaultRules.mailto = obj15;
    const obj16 = {
      order: 16,
      requiredFirstCharacters: ["h"],
      match: inlineRegex(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/),
      parse(content, arg1, arg2) {
          obj = { type: "link", content: null, target: content[1], title: "call" };
          obj = { type: "text", content: content[1] };
          const items = [obj];
          obj.content = items;
          return obj;
        },
      react: null,
      html: null
    };
    defaultRules.url = obj16;
    const obj17 = { order: 17, requiredFirstCharacters: ["["], match: null, parse: null, react: null, html: null };
    const _RegExp3 = RegExp;
    const regExp5 = new RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\()]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)");
    obj17.match = inlineRegex(regExp5);
    obj17.parse = function parse(arg0, fn, arg2) {
      obj = { content: fn(arg0[1], arg2), target: null, title: null };
      if (typeof unescapeUrl === "function") {
        obj.target = str.replace(re18, "$1");
        obj.title = arg0[3];
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      str = arg0[2];
    };
    obj17.react = function react(target, fn, key) {
      const props = { href: sanitizeUrl(target.target), title: target.title, children: fn(target.content, key) };
      if (typeof reactElement === "function") {
        const element = { $$typeof: num, type: "a", key: null, ref: null, props: null, _owner: null };
        let tmp3;
        if (null != key) {
          tmp3 = key;
        }
        element.key = tmp3;
        element.props = props;
        return element;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    obj17.html = function html(target, fn, arg2) {
      return htmlTag("a", fn(target.content, arg2), { href: sanitizeUrl(target.target), title: target.title });
    };
    defaultRules.link = obj17;
    const obj18 = { order: 18, match: null, parse: null, react: null, html: null };
    const _RegExp4 = RegExp;
    const regExp6 = new RegExp("^!\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\()]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)");
    obj18.match = inlineRegex(regExp6);
    obj18.parse = function parse(alt, arg1, arg2) {
      obj = { alt: alt[1], target: null, title: null };
      if (typeof unescapeUrl === "function") {
        obj.target = str.replace(re18, "$1");
        obj.title = alt[3];
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      str = alt[2];
    };
    obj18.react = function react(alt, arg1, key) {
      const props = { src: sanitizeUrl(alt.target), alt: alt.alt, title: alt.title };
      if (typeof reactElement === "function") {
        const element = { $$typeof: num, type: "img", key: null, ref: null, props: null, _owner: null };
        let tmp3;
        if (null != key) {
          tmp3 = key;
        }
        element.key = tmp3;
        element.props = props;
        return element;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    obj18.html = function html(alt, arg1, arg2) {
      return htmlTag("img", "", { src: sanitizeUrl(alt.target), alt: alt.alt, title: alt.title }, false);
    };
    defaultRules.image = obj18;
    const obj19 = { order: 19, match: null, parse: null, react: null, html: null };
    const _RegExp5 = RegExp;
    const regExp7 = new RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\s*\\[([^\\]]*)\\]");
    obj19.match = inlineRegex(regExp7);
    obj19.parse = function parse(arg0, fn, _defs) {
      obj = { type: "link", content: fn(arg0[1], _defs) };
      if (typeof parseRef === "function") {
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
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    defaultRules.reflink = obj19;
    const obj20 = { order: 20, match: null, parse: null, react: null, html: null };
    const _RegExp6 = RegExp;
    const regExp8 = new RegExp("^!\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\s*\\[([^\\]]*)\\]");
    obj20.match = inlineRegex(regExp8);
    obj20.parse = function parse(alt, arg1, _defs) {
      obj = { type: "image", alt: alt[1] };
      if (typeof parseRef === "function") {
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
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    defaultRules.refimage = obj20;
    const obj21 = { order: 21, match: null, quality: null, parse: null, react: null, html: null };
    function parserFor(rules, arg1) {
      dependencyMap = rules;
      closure_1 = arg1;
      const keys = Object.keys(rules);
      const found = keys.filter((item) => {
        if (null != dependencyMap[item]) {
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
        if (null == prop) {
          let arr = items.push(tmp3);
        } else {
          let mapped = prop.map((item) => {
            const charCodeAtResult = item.charCodeAt(0);
            if (!map.has(charCodeAtResult)) {
              const result = obj.set(charCodeAtResult, []);
            }
            value = obj.get(charCodeAtResult);
            value.push(closure_6);
          });
        }
      }
      function nestedParse(content, arg1) {
        let tmp = arg1;
        if (!arg1) {
          tmp = obj;
        }
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
          obj = { _parseDepth: sum };
          const merged = Object.assign({}, tmp, obj);
          obj = merged;
          let str3 = content;
          if (content) {
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
                      let str = dependencyMap[tmp23];
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
                let tmp48 = new.target;
                let str4 = "`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?";
                let tmp49 = new.target;
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
            let _Object = Object;
            hasOwnProperty = Object.prototype.hasOwnProperty;
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
        const str3 = str.replace(re7, "\n");
        return nestedParse(str.replace(re7, "\n").replace(re9, "").replace(re8, "    "), obj);
      }
      nestedParse.rules = rules;
      outerParse.rules = rules;
      return outerParse;
    }
    function anyScopeRegex(EMOJI_NAME_RE) {
      function match(arg0, arg1) {
        return EMOJI_NAME_RE.exec(arg0);
      }
      match.regex = EMOJI_NAME_RE;
      return match;
    }
    function preprocess(str) {
      str = str.replace(re7, "\n");
      return str.replace(re7, "\n").replace(re9, "").replace(re8, "    ");
    }
    const regExp9 = new RegExp(str8 + "|^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?)\\*(?!\\*)");
    obj21.match = inlineRegex(regExp9);
    obj21.quality = function quality(arg0) {
      return arg0[0].length + 0.2;
    };
    obj21.parse = function parse(arg0, fn, arg2) {
      return { content: fn(arg0[2] || arg0[1], arg2) };
    };
    obj21.react = function react(content, fn, key) {
      const props = { children: fn(content.content, key) };
      if (typeof reactElement === "function") {
        const element = { $$typeof: num, type: "em", key: null, ref: null, props: null, _owner: null };
        let tmp3;
        if (null != key) {
          tmp3 = key;
        }
        element.key = tmp3;
        element.props = props;
        return element;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    obj21.html = function html(content, fn, arg2) {
      return htmlTag("em", fn(content.content, arg2));
    };
    defaultRules.em = obj21;
    const obj22 = {
      order: 21,
      requiredFirstCharacters: ["*"],
      match: inlineRegex(/^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/),
      quality(arg0) {
          return arg0[0].length + 0.1;
        },
      parse: parseCaptureInline,
      react(content, fn, key) {
          const props = { children: fn(content.content, key) };
          if (typeof reactElement === "function") {
            const element = { $$typeof: num, type: "strong", key: null, ref: null, props: null, _owner: null };
            let tmp3;
            if (null != key) {
              tmp3 = key;
            }
            element.key = tmp3;
            element.props = props;
            return element;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        },
      html(content, fn, arg2) {
          return htmlTag("strong", fn(content.content, arg2));
        }
    };
    defaultRules.strong = obj22;
    const obj23 = {
      order: 21,
      requiredFirstCharacters: ["_"],
      match: inlineRegex(/^__((?:\\[\s\S]|[^\\])+?)__(?!_)/),
      quality(arg0) {
          return arg0[0].length;
        },
      parse: parseCaptureInline,
      react(content, fn, key) {
          const props = { children: fn(content.content, key) };
          if (typeof reactElement === "function") {
            const element = { $$typeof: num, type: "u", key: null, ref: null, props: null, _owner: null };
            let tmp3;
            if (null != key) {
              tmp3 = key;
            }
            element.key = tmp3;
            element.props = props;
            return element;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        },
      html(content, fn, arg2) {
          return htmlTag("u", fn(content.content, arg2));
        }
    };
    defaultRules.u = obj23;
    const obj24 = {
      order: 22,
      requiredFirstCharacters: ["~"],
      match: inlineRegex(/^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~]|\s(?!~~))+?)~~/),
      parse: parseCaptureInline,
      react(content, fn, key) {
          const props = { children: fn(content.content, key) };
          if (typeof reactElement === "function") {
            const element = { $$typeof: num, type: "del", key: null, ref: null, props: null, _owner: null };
            let tmp3;
            if (null != key) {
              tmp3 = key;
            }
            element.key = tmp3;
            element.props = props;
            return element;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        },
      html(content, fn, arg2) {
          return htmlTag("del", fn(content.content, arg2));
        }
    };
    defaultRules.del = obj24;
    const obj25 = {
      order: 23,
      requiredFirstCharacters: ["`"],
      match: inlineRegex(/^(`+)([\s\S]*?[^`])\1(?!`)/),
      parse(arg0, arg1, arg2) {
          obj = { content: arg0[2].replace(re24, "$1") };
          return obj;
        },
      react(children, arg1, key) {
          const props = { children: children.content };
          if (typeof reactElement === "function") {
            const element = { $$typeof: num, type: "code", key: null, ref: null, props: null, _owner: null };
            let tmp3;
            if (null != key) {
              tmp3 = key;
            }
            element.key = tmp3;
            element.props = props;
            return element;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        },
      html(arg0, arg1, arg2) {
          if (typeof sanitizeText === "function") {
            const _String = String;
            return tmp("code", String(tmp2).replace(re15, (arg0) => closure_1_16[arg0]));
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
    };
    defaultRules.inlineCode = obj25;
    const obj26 = {
      order: 24,
      requiredFirstCharacters: [" "],
      match: anyScopeRegex(/^ {2,}\n/),
      parse: ignoreCapture,
      react(arg0, arg1, key) {
          if (typeof reactElement === "function") {
            const element = { $$typeof: num, type: "br", key: null, ref: null, props: null, _owner: null };
            let tmp4;
            if (null != key) {
              tmp4 = key;
            }
            element.key = tmp4;
            element.props = tmp;
            return element;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        },
      html(arg0, arg1, arg2) {
          return "<br>";
        }
    };
    defaultRules.br = obj26;
    const obj27 = {
      order: 25,
      match: anyScopeRegex(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/),
      parse(content, arg1, arg2) {
          return { content: content[0] };
        },
      react(content, arg1, arg2) {
          return content.content;
        },
      html(arg0, arg1, arg2) {
          if (typeof sanitizeText === "function") {
            const _String = String;
            return String(tmp).replace(re15, (arg0) => closure_1_16[arg0]);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
    };
    defaultRules.text = obj27;
    function outputFor(Array, html, arg2) {
      let _Array = Array;
      closure_1 = html;
      closure_2 = arg2;
      if (html) {
        _Array = Array.Array;
        if (!_Array) {
          _Array = obj.Array;
        }
        if (_Array[html]) {
          closure_4 = tmp7;
          function nestedOutput(arg0, arg1) {
            const tmp = arg1;
            if (Array.isArray(arg0)) {
              let tmp6 = closure_4(arg0, nestedOutput, tmp);
            } else {
              tmp6 = _Array[arg0.type][closure_1](arg0, nestedOutput, tmp);
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
                let _Object = Object;
                hasOwnProperty = Object.prototype.hasOwnProperty;
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
            if (typeof nestedOutput === "function") {
              _Array = Array;
              if (Array.isArray(arg0)) {
                let tmp11 = closure_4(arg0, tmp5, obj);
              } else {
                tmp11 = _Array[arg0.type][closure_1](arg0, tmp5, obj);
              }
              return tmp11;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          };
        } else {
          const _Error2 = Error;
          const error = new Error("simple-markdown: outputFor: to join nodes of type `" + html + "` you must provide an `Array:` joiner rule with that type, Please see the docs for details on specifying an Array rule.");
          throw error;
        }
      } else {
        const _Error = Error;
        const error1 = new Error("simple-markdown: outputFor: `property` must be defined. if you just upgraded, you probably need to replace `outputFor` with `reactFor`");
        throw error1;
      }
    }
    const parserForResult = parserFor(defaultRules);
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
      const isMatch = re23.test(arg0);
      if (!arg1) {
        obj = {};
      }
      obj.inline = !isMatch;
      return parserForResult(arg0, obj);
    }
    const outputForResult = outputFor(defaultRules, "react");
    const outputForResult1 = outputFor(defaultRules, "html");
    function markdownToReact(arg0, arg1) {
      if (typeof defaultBlockParse === "function") {
        obj = arg1;
        if (!arg1) {
          obj = {};
        }
        obj.inline = false;
        return tmp(parserForResult(arg0, obj), arg1);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    const obj28 = {
      defaultRules,
      parserFor,
      outputFor,
      inlineRegex,
      blockRegex,
      anyScopeRegex,
      parseInline,
      parseBlock(fn, arg1, inline) {
          inline.inline = false;
          inline.inline = inline.inline || false;
          return fn(arg1 + "\n\n", inline);
        },
      markdownToReact,
      markdownToHtml(arg0, arg1) {
          if (typeof defaultBlockParse === "function") {
            obj = arg1;
            if (!arg1) {
              obj = {};
            }
            obj.inline = false;
            return tmp(parserForResult(arg0, obj), arg1);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        },
      ReactMarkdown(obj) {
          let props = {};
          for (const key10006 in arg0) {
            let tmp10 = "source" !== key10006;
            if (!tmp10) {
              if (!tmp10) {
                continue;
              } else {
                props[key10006] = arg0[key10006];
                continue;
              }
              continue;
            } else {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10006);
              } else {
                hasOwnPropertyResult = call(arg0, key10006);
              }
            }
          }
          if (typeof markdownToReact === "function") {
            if (typeof defaultBlockParse === "function") {
              props = { inline: false };
              props.children = tmp4(parserForResult(tmp3, props), undefined);
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
          obj = arg1;
          if (!arg1) {
            obj = {};
          }
          obj.inline = true;
          return parserForResult(arg0, obj);
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
          return (arg0, arg1, arg2) => closure_0[arg0.type][closure_1](arg0, arg1, arg2);
        },
      reactFor(arg0) {
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
                  let tmp5 = nestedOutput(arg0[num], obj);
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
              return closure_0(arg0, nestedOutput, obj);
            }
          }
          return nestedOutput;
        },
      htmlFor(arg0) {
          closure_0 = arg0;
          function nestedOutput(arr, arg1) {
            obj = arg1;
            if (!arg1) {
              obj = {};
            }
            if (Array.isArray(arr)) {
              const mapped = arr.map((arr) => {
                obj = closure_1_0;
                if (!closure_1_0) {
                  obj = {};
                }
                if (Array.isArray(arr)) {
                  let mapped = arr.map((arr) => {
                    obj = closure_1_0;
                    if (!closure_1_0) {
                      obj = {};
                    }
                    if (Array.isArray(arr)) {
                      let mapped = arr.map(() => { ... });
                      let joined = mapped.join("");
                    } else {
                      joined = closure_2_0(arr, closure_2_1, obj);
                    }
                    return joined;
                  });
                  let joined = mapped.join("");
                } else {
                  joined = closure_2_0(arr, closure_2_1, obj);
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
        },
      defaultParse() {
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
        },
      defaultOutput() {
          if (typeof console !== "undefined") {
            const _console = console;
            console.warn("defaultOutput is deprecated, please use `defaultReactOutput`");
          }
          const apply = outputForResult.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(null);
          } else {
            applyArgumentsResult = apply(null, arguments);
          }
          return applyArgumentsResult;
        }
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