// discord_app/modules/markup/MarkupSubtextRule.tsx
import _mod4270 from "../../../_runtime/metro/04270__.js";
import size from "../../../_runtime/metro/00002__.js";

const _modDef4270 = _mod4270;

const re2 = /\n$/;
const re3 = /^ *-# +((?!-#)[^\n]+)(?:\n|$)/;
const result = size.fileFinishedImporting("modules/markup/MarkupSubtextRule.tsx");

export default {
  order: _modDef4270.defaultRules.heading.order,
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
      tmp4 = _mod4270.anyScopeRegex(re3)(arg0, allowSubtext, str);
    }
    return tmp;
  },
  parse(arg0, fn, arg2) {
    let obj = { content: null };
    obj = {};
    const trimmed = arg0[1].trim();
    const merged = Object.assign(arg2);
    obj.allowSubtext = false;
    obj.content = _mod4270.parseInline(fn, trimmed, obj);
    return obj;
  },
};
