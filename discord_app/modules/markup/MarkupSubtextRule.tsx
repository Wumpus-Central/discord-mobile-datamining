// discord_app/modules/markup/MarkupSubtextRule.tsx
import _mod2069 from "../../../_runtime/metro/02069__.js";
import size from "../../../_runtime/metro/00002__.js";

const _modDef2069 = _mod2069;

const re2 = /\n$/;
const re3 = /^ *-# +((?!-#)[^\n]+)(?:\n|$)/;
const result = size.fileFinishedImporting("modules/markup/MarkupSubtextRule.tsx");

export default {
  order: _modDef2069.defaultRules.heading.order,
  requiredFirstCharacters: ["-"],
  match(arg0, allowSubtext, str) {
    let tmp = null;
    if (false !== allowSubtext.allowSubtext) {
      if (null != str) {
        if ("" !== "") {
          let tmp4 = null;
        }
        tmp = tmp4;
      }
      tmp4 = _mod2069.anyScopeRegex(re3)(arg0, allowSubtext, str);
    }
    return tmp;
  },
  parse(arg0, arg1, arg2) {
    const obj = { content: null };
    const obj3 = {};
    const trimmed = arg0[1].trim();
    const merged = Object.assign(arg2);
    obj3.allowSubtext = false;
    obj.content = _mod2069.parseInline(arg1, trimmed, obj3);
    return obj;
  },
};
