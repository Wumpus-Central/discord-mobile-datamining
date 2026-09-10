// === Module 15302: NavigateForwardButton ===

// Module 15302 (NavigateForwardButton)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4601 */;
import Pressables from "Pressables" /* 5173 */;
import _modDef15303 from "module_15303" /* 15303 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4605);
let createStyles = { container: null, text: null };
createStyles = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, flexDirection: "row", padding: 16 };
createStyles.container = createStyles;
createStyles.text = { flexGrow: 1 };
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/NavigateForwardButton.tsx");

export default function NavigateForwardButton(arg0) {
  ({ onPress, text } = arg0);
  const tmp = closure_5();
  let obj = { style: tmp.container, onPress, children: null };
  obj = { style: tmp.text, variant: "text-md/semibold", color: "interactive-text-active", children: text };
  const items = [React3(Text_Text.Text, obj), ];
  obj = { source: _modDef15303 };
  items[1] = React3(native.Icon, obj);
  obj.children = items;
  return React4(Pressables.PressableHighlight, obj);
};