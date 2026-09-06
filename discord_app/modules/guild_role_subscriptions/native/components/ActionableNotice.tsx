// discord_app/modules/guild_role_subscriptions/native/components/ActionableNotice.tsx
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4560);
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
  let obj = { style: null, children: null };
  const items = [style, tmp.container];
  obj.style = items;
  obj = { style: tmp.message, variant: "text-sm/medium", color: "text-default", children: message };
  const items1 = [React3(Text_Text.Text, obj)];
  obj = { style: tmp.actionButton, children: null };
  const obj1 = { size: "sm", onPress: onClick, disabled: null, text: null };
  if (!submitting) {
    submitting = disabled;
  }
  obj1.disabled = submitting;
  obj1.text = ctaMessage;
  obj.children = React3(components_Button_Button.Button, obj1);
  items1[1] = React3(View, obj);
  obj.children = items1;
  return React4(View, obj);
}
