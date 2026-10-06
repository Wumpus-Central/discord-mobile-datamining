// === Module 5816: MarkupListRule ===

// Module 5816 (MarkupListRule)
import _modDef38 from "module_38" /* 38 */;
import _modDef1936 from "module_1936" /* 1936 */;
import size from "module_2" /* 2 */;

let _listLevel, closure_4, dependencyMap, importDefault;

const re2 = /\n{2,}$/;
const re3 = /(?:^|\n)( *)$/;
let regExp = new RegExp("^" + "(%INDENT_CAPTURE_PATTERN%)((?:[*-]|\\d+\\.)) +".replace("%INDENT_CAPTURE_PATTERN%", " *"));
const re5 = / *\n$/;
let regExp1 = new RegExp("^( *)((?:[*-]|\\d+\\.)) [\\s\\S]+?(?:\\n(?! )(?!\\1(?:[*-]|\\d+\\.) )|$)");
const regExp2 = new RegExp("^\\n" + "^( *)((?:[*-]|\\d+\\.)) [\\s\\S]+?(?:\\n(?! )(?!\\1(?:[*-]|\\d+\\.) )|$)".slice(1));
const re8 = /^\n/;
const re9 = /\n *$/;
let closure_10 = "\n".charCodeAt(0);
const re11 = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/;
let obj = {
  requiredFirstCharacters: "\n *-0123456789".split(""),
  match(str, allowList) {
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
          if (!re9.test(str3)) {
            match = regExp2.exec(str);
          }
        }
        return match;
      } else {
        str = "";
        if (null != allowList.prevCapture) {
          str = allowList.prevCapture[0];
        }
        const match1 = re3.exec(str);
        let match2 = null;
        if (null != match1) {
          match2 = null;
          if (!re11.test(match1[0])) {
            match2 = regExp1.exec(str);
          }
        }
        return match2;
      }
    } else {
      return null;
    }
  },
  parse(arg0, arg1, arg2) {
    let closure_0;
    importDefault = arg1;
    dependencyMap = arg2;
    let tmp = arr.length > 1;
    let bound;
    if (tmp) {
      const _Math = Math;
      const _Math2 = Math;
      let num = 1000000000;
      bound = Math.min(1000000000, Math.max(1, +arr));
    }
    let str = arg0[0];
    const isMatch = regex.test(arg0[0]);
    const str2 = str.replace(regex, "");
    const str3 = str2.replace(regExp1, "\n");
    const match = regExp.exec(str3);
    let num2 = 0;
    if (null != match) {
      num2 = match[0].length;
    }
    let num3 = 0;
    if (null != match) {
      num3 = match[1].length;
    }
    regExp = new RegExp("(%INDENT_CAPTURE_PATTERN%)((?:[*-]|\\d+\\.)) +[^\\n]*(?:\\n(?!%INDENT_CAPTURE_PATTERN%(?:[*-]|\\d+\\.) )[^\\n]*)*(\n|$)".replaceAll("%INDENT_CAPTURE_PATTERN%", " {" + num3 + "," + num3 + 1 + "}"), "gm");
    regExp1 = new RegExp("^ {1," + num2 + "}", "gm");
    const match1 = str3.match(regExp);
    _modDef38(null != match1, "markup list items can not be parsed.");
    regExp = false;
    let obj = {
      ordered: tmp,
      start: bound,
      items: match1.map((item, index) => {
        let _list;
        let inline;
        let replaced1;
        let str = item.replace(regExp, "");
        const replaced = str.replace(regExp1, "");
        const diff = match1.length - 1;
        let tmp2 = -1 !== replaced.indexOf("\n\n");
        if (!tmp2) {
          tmp2 = index === diff && closure_4;
        }
        closure_4 = tmp2;
        _listLevel = _listLevel._listLevel;
        _listLevel._list = true;
        let num = _listLevel;
        ({ inline, _list } = _listLevel);
        if (_listLevel == null) {
          num = 0;
        }
        _listLevel._listLevel = num + 1;
        if (tmp2) {
          _listLevel.inline = false;
          replaced1 = replaced.replace(re5, "\n\n");
        } else {
          _listLevel.inline = true;
          replaced1 = replaced.replace(re5, "");
        }
        const obj = { allowHeading: false };
        const merged = Object.assign(tmp5);
        _listLevel.inline = inline;
        _listLevel._list = _list;
        _listLevel._listLevel = _listLevel;
        const arr2 = closure_0(replaced1, obj);
        return arr2.map((type) => {
          const tmp = "text" === type.type && null != type.content;
          if (tmp) {
            const str = type.content;
            type.content = str.replace(/\n+\s*$/, "");
          }
          return type;
        });
      }),
      consumedLeadingNewline: isMatch
    };
    return obj;
  }
};
let merged = Object.assign(_modDef1936.defaultRules.list);
const result = size.fileFinishedImporting("modules/markup/MarkupListRule.tsx");

export default obj;