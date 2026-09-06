// discord_app/modules/guild_role_subscriptions/native/components/NavigateForwardButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import _modDef15222 from "../../../../../_runtime/metro/15222__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4560);
let createStyles = { container: null, text: null };
createStyles = {
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  flexDirection: "row",
  padding: 16,
};
createStyles.container = createStyles;
createStyles.text = { flexGrow: 1 };
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/NavigateForwardButton.tsx",
);

export default function NavigateForwardButton(arg0) {
  ({ onPress, text } = arg0);
  const tmp = closure_5();
  let obj = { style: tmp.container, onPress, children: null };
  obj = { style: tmp.text, variant: "text-md/semibold", color: "interactive-text-active", children: text };
  const items = [React3(Text_Text.Text, obj)];
  obj = { source: _modDef15222 };
  items[1] = React3(native.Icon, obj);
  obj.children = items;
  return React4(Pressables.PressableHighlight, obj);
}
