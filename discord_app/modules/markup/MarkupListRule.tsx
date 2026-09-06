// discord_app/modules/markup/MarkupListRule.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import _modDef4257 from "../../../_runtime/metro/04257__.js";

const re2 = /\n{2,}$/;
const re3 = /(?:^|\n)( *)$/;
let regExp = new RegExp(
  "^" + "(%INDENT_CAPTURE_PATTERN%)((?:[*-]|\\d+\\.)) +".replace("%INDENT_CAPTURE_PATTERN%", " *"),
);
const re5 = / *\n$/;
let regExp1 = new RegExp("^( *)((?:[*-]|\\d+\\.)) [\\s\\S]+?(?:\\n(?! )(?!\\1(?:[*-]|\\d+\\.) )|$)");
const regExp2 = new RegExp(
  "^\\n" + "^( *)((?:[*-]|\\d+\\.)) [\\s\\S]+?(?:\\n(?! )(?!\\1(?:[*-]|\\d+\\.) )|$)".slice(1),
);
const re8 = /^\n/;
const re9 = /\n *$/;
let closure_10 = "\n".charCodeAt(0);
const re11 = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/;
let obj = {};
let merged = Object.assign(_modDef4257.defaultRules.list);
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
};
obj.parse = function parse(arg0, arg1, arg2) {
  importDefault = arg1;
  dependencyMap = arg2;
  let bound;
  if (arg0[2].length > 1) {
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.min(1000000000, Math.max(1, +arr));
  }
  const isMatch = regex2.test(arg0[0]);
  const str3 = arg0[0].replace(regex2, "").replace(regExp1, "\n");
  const match = regex.exec(str3);
  let num2 = 0;
  if (null != match) {
    num2 = match[0].length;
  }
  let num3 = 0;
  if (null != match) {
    num3 = match[1].length;
  }
  const regExp = new RegExp(
    "(%INDENT_CAPTURE_PATTERN%)((?:[*-]|\\d+\\.)) +[^\\n]*(?:\\n(?!%INDENT_CAPTURE_PATTERN%(?:[*-]|\\d+\\.) )[^\\n]*)*(\n|$)".replaceAll(
      "%INDENT_CAPTURE_PATTERN%",
      " {" + num3 + "," + num3 + 1 + "}",
    ),
    "gm",
  );
  regExp1 = new RegExp("^ {1," + num2 + "}", "gm");
  const match1 = str3.match(regExp);
  _modDef38(null != match1, "markup list items can not be parsed.");
  regex = false;
  const str2 = arg0[0].replace(regex2, "");
  return {
    ordered: arg0[2].length > 1,
    start: bound,
    items: match1.map((item, index) => {
      const replaced = item.replace(regExp, "").replace(regExp1, "");
      const diff = match1.length - 1;
      let tmp2 = -1 !== replaced.indexOf("\n\n");
      if (!tmp2) {
        tmp2 = index === diff && closure_4;
        const tmp4 = index === diff && closure_4;
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
        tmp5.inline = false;
        let replaced1 = replaced.replace(re5, "\n\n");
      } else {
        tmp5.inline = true;
        replaced1 = replaced.replace(re5, "");
      }
      const obj = {};
      const merged = Object.assign(tmp5);
      obj.allowHeading = false;
      let str = item.replace(regExp, "");
      _listLevel.inline = inline;
      _listLevel._list = _list;
      _listLevel._listLevel = _listLevel;
      return closure_0(replaced1, obj).map((type) => {
        let tmp = "text" === type.type;
        if (tmp) {
          tmp = null != type.content;
        }
        if (tmp) {
          type.content = type.content.replace(/\n+\s*$/, "");
        }
        return type;
      });
    }),
    consumedLeadingNewline: isMatch,
  };
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupListRule.tsx");

export default obj;
