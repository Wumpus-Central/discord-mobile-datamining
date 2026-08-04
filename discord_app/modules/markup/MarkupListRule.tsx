// discord_app/modules/markup/MarkupListRule.tsx
import closure_10 from "t";

const re2 = /\n{2,}$/;
const re3 = /(?:^|\n)( *)$/;
let regExp = new RegExp("^" + "(%INDENT_CAPTURE_PATTERN%)((?:[*-]|\\d+\\.)) +".replace("%INDENT_CAPTURE_PATTERN%", " *"));
const re5 = / *\n$/;
let regExp1 = new RegExp("^( *)((?:[*-]|\\d+\\.)) [\\s\\S]+?(?:\\n(?! )(?!\\1(?:[*-]|\\d+\\.) )|$)");
const regExp2 = new RegExp("^\\n" + require("module_38"));
const re8 = /^\n/;
const re9 = /\n *$/;
const re11 = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/;
let obj = {};
let merged = Object.assign(require("t").defaultRules.list);
obj.requiredFirstCharacters = "\n *-0123456789".split("");
obj.match = function match(str, allowList) {
  if (allowList.allowList) {
    if (allowList._listLevel >= 11) {
      return null;
    } else if (str.charCodeAt(0) === closure_10) {
      let str3 = "";
      if (null != allowList.prevCapture) {
        str3 = allowList.prevCapture[0];
      }
      let match = null;
      if ("" !== str3) {
        match = null;
        if (!regex3.test(str3)) {
          match = regExp2.exec(str);
        }
      }
      return match;
    } else {
      str = "";
      if (null != allowList.prevCapture) {
        str = allowList.prevCapture[0];
      }
      const match1 = regex.exec(str);
      let match2 = null;
      if (null != match1) {
        match2 = null;
        if (!regex4.test(match1[0])) {
          match2 = regExp1.exec(str);
        }
      }
      return match2;
    }
  } else {
    return null;
  }
};
obj.parse = function parse(arg0, arg1, arg2) {
  const importDefault = arg1;
  const dependencyMap = arg2;
  let bound;
  if (arg0[2].length > 1) {
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.min(1000000000, Math.max(1, +arr));
  }
  const str3 = arg0[0].replace(closure_8, "").replace(regExp1, "\n");
  const match = regex2.exec(str3);
  let num2 = 0;
  if (null != match) {
    num2 = match[0].length;
  }
  let num3 = 0;
  if (null != match) {
    num3 = match[1].length;
  }
  const regExp = new RegExp("(%INDENT_CAPTURE_PATTERN%)((?:[*-]|\\d+\\.)) +[^\\n]*(?:\\n(?!%INDENT_CAPTURE_PATTERN%(?:[*-]|\\d+\\.) )[^\\n]*)*(\n|$)".replaceAll("%INDENT_CAPTURE_PATTERN%", " {" + num3 + "," + num3 + 1 + "}"), "gm");
  regExp1 = new RegExp("^ {1," + num2 + "}", "gm");
  const match1 = str3.match(regExp);
  importDefault(38)(null != match1, "markup list items can not be parsed.");
  regex2 = false;
  let str = arg0[0];
  const str2 = arg0[0].replace(closure_8, "");
  return {
    ordered: arg0[2].length > 1,
    start: bound,
    items: match1.map((str) => {
      let _list;
      let inline;
      const replaced = str.replace(c4, "").replace(regExp1, "");
      const diff = match1.length - 1;
      let tmp2 = -1 !== replaced.indexOf("\n\n");
      if (!tmp2) {
        tmp2 = arg1 === diff && c4;
        const tmp4 = arg1 === diff && c4;
      }
      c4 = tmp2;
      _listLevel = _listLevel._listLevel;
      _listLevel._list = true;
      let num = _listLevel;
      ({ inline, _list } = _listLevel);
      if (_listLevel == null) {
        num = 0;
      }
      _listLevel._listLevel = num + 1;
      if (tmp2) {
        tmp5.inline = false;
        let replaced1 = replaced.replace(outer1_5, "\n\n");
      } else {
        tmp5.inline = true;
        replaced1 = replaced.replace(outer1_5, "");
      }
      const obj = {};
      const merged = Object.assign(tmp5);
      obj.allowHeading = false;
      str = str.replace(c4, "");
      _listLevel.inline = inline;
      _listLevel._list = _list;
      _listLevel._listLevel = _listLevel;
      return callback(replaced1, obj).map((type) => {
        let tmp = "text" === type.type;
        if (tmp) {
          tmp = null != type.content;
        }
        if (tmp) {
          type.content = type.content.replace(/\n+\s*$/, "");
          const str = type.content;
        }
        return type;
      });
    })
  };
};
const result = require("set").fileFinishedImporting("modules/markup/MarkupListRule.tsx");

export default obj;