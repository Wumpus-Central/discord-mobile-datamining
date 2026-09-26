// discord_app/modules/guild_role_subscriptions/native/components/ActionableNotice.tsx
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4836);
let closure_5 = createStyles.createStyles({
  container: { flexDirection: "row", paddingVertical: 12, alignItems: "center" },
  message: { marginEnd: 27, flex: 3 },
  actionButton: { flexGrow: 0, alignSelf: "center" },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/ActionableNotice.tsx");

export default function ActionableNotice(arg0) {
  ({ submitting, disabled } = arg0);
  ({ style, message, ctaMessage, onClick } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = closure_5();
  const obj = { style: null, children: null };
  const items = [style, tmp.container];
  obj.style = items;
  const items1 = [
    React3(Text_Text.Text, { style: tmp.message, variant: "text-sm/medium", color: "text-default", children: message }),
  ];
  const obj3 = { style: tmp.actionButton, children: null };
  const obj4 = { size: "sm", onPress: onClick, disabled: null, text: null };
  if (!submitting) {
    submitting = disabled;
  }
  obj4.disabled = submitting;
  obj4.text = ctaMessage;
  obj3.children = React3(components_Button_Button.Button, obj4);
  items1[1] = React3(View, obj3);
  obj.children = items1;
  return React4(View, obj);
}
