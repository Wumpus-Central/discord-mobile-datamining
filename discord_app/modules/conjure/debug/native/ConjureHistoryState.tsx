// === Module 12979: ConjureHistoryState ===

// Module 12979 (ConjureHistoryState)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import Text_Text from "Text/Text" /* 5619 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5009);
let obj2 = { placeholder: { alignItems: "center", gap: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_24 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureHistoryState.tsx");

export function ConjureHistoryPlaceholder(state) {
  ({ emptyTitle, emptyBody } = state);
  const obj = { style: closure_6().placeholder, accessibilityRole: null, children: null };
  let str;
  if ("failed" === state.state.status) {
    str = "alert";
  }
  obj.accessibilityRole = str;
  if ("failed" === state.state.status) {
    const intl = util.intl;
    emptyTitle = intl.string(_modDef3865.h1SE6R);
  }
  const items = [React4(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: emptyTitle }), ];
  if ("failed" === state.state.status) {
    const intl2 = util.intl;
    emptyBody = intl2.string(_modDef3865["8SErdg"]);
  }
  items[1] = React4(Text_Text.Text, { variant: "text-xs/normal", color: "text-muted", children: emptyBody });
  obj.children = items;
  return hasOwnProperty(View, obj);
}
export function ConjureHistoryNotice(state) {
  state = state.state;
  if (!state.hasRows) {
    return null;
  } else if ("failed" === state.status) {
    const obj2 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const intl2 = util.intl;
    obj2.children = intl2.string(_modDef3865.h1SE6R);
    let tmp = React4(Text_Text.Text, obj2);
  } else if (state.truncated) {
    const obj = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl = util.intl;
    obj.children = intl.string(_modDef3865.V7Ri8H);
    tmp = React4(Text_Text.Text, obj);
  }
}