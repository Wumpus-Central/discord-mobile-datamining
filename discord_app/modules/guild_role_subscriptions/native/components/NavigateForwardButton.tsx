// discord_app/modules/guild_role_subscriptions/native/components/NavigateForwardButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import _modDef15557 from "../../../../../_runtime/metro/15557__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4827);
const obj2 = {
  container: {
    alignItems: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
    flexDirection: "row",
    padding: 16,
  },
  text: { flexGrow: 1 },
};
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/NavigateForwardButton.tsx",
);

export default function NavigateForwardButton(arg0) {
  ({ onPress, text } = arg0);
  const tmp = closure_5();
  const obj = { style: tmp.container, onPress, children: null };
  const items = [
    React3(Text_Text.Text, {
      style: tmp.text,
      variant: "text-md/semibold",
      color: "interactive-text-active",
      children: text,
    }),
    React3(native.Icon, { source: _modDef15557 }),
  ];
  obj.children = items;
  return React4(Pressables.PressableHighlight, obj);
}
