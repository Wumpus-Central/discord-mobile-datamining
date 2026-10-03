// === Module 15035: NavigateForwardButton ===

// Module 15035 (NavigateForwardButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4886 */;
import Pressables from "Pressables" /* 5909 */;
import _modDef15036 from "module_15036" /* 15036 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, flexDirection: "row", padding: 16 }, text: { flexGrow: 1 } };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, flexDirection: "row", padding: 16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/NavigateForwardButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(8);
  ({ onPress, text } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] === tmp4.text) {
    if (cResult[1] === text) {
      let tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { source: _modDef15036 };
      const tmp11 = React3(native.Icon, obj2);
      cResult[3] = tmp11;
      let tmp8 = tmp11;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] === onPress) {
      if (cResult[5] === tmp4.container) {
        if (cResult[6] === tmp5) {
          let tmp12 = cResult[7];
        }
        return tmp12;
      }
    }
    const obj3 = { style: tmp4.container, onPress, children: null };
    const items = [tmp5, tmp8];
    obj3.children = items;
    const tmp14 = React4(Pressables.PressableHighlight, obj3);
    cResult[4] = onPress;
    cResult[5] = tmp4.container;
    cResult[6] = tmp5;
    cResult[7] = tmp14;
    tmp12 = tmp14;
  }
  const tmp6 = React3(Text_Text.Text, { style: tmp4.text, variant: "text-md/semibold", color: "interactive-text-active", children: text });
  cResult[0] = tmp4.text;
  cResult[1] = text;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj4 = { style: tmp4.text, variant: "text-md/semibold", color: "interactive-text-active", children: text };
}) : ((arg0) => {
  ({ onPress, text } = arg0);
  const tmp = closure_5();
  const obj = { style: tmp.container, onPress, children: null };
  const items = [React3(Text_Text.Text, { style: tmp.text, variant: "text-md/semibold", color: "interactive-text-active", children: text }), React3(native.Icon, { source: _modDef15036 })];
  obj.children = items;
  return React4(Pressables.PressableHighlight, obj);
});