// discord_app/modules/guild_role_subscriptions/native/components/FormDropdown.tsx
import LockIcon from "../../../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import TouchableHitBoxDefault from "../../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import ChevronSmallDownIcon2 from "../../../../design/components/Icon/native/redesign/generated/ChevronSmallDownIcon.tsx";
import FormStylesDefault from "FormStyles.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5009);
const styles = createStyles.createStyles({
  container: { alignItems: "center", flexDirection: "row" },
  content: { marginStart: 8, flexGrow: 1 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormDropdown.tsx");

export default function FormDropdown(arg0) {
  ({ disabled, label } = arg0);
  ({ leading, onPress, placeholder } = arg0);
  const tmp = styles();
  if (disabled) {
    let ChevronSmallDownIcon = LockIcon.LockIcon;
    let tmp7 = require;
  } else {
    ChevronSmallDownIcon = ChevronSmallDownIcon2.ChevronSmallDownIcon;
    tmp7 = require;
  }
  const tmp4 = FormStylesDefault();
  const obj = { style: null, accessibilityRole: "spinbutton", disabled, onPress: null, children: null };
  const items = [tmp.container, tmp4.dropdownInput];
  obj.style = items;
  let tmp11;
  const tmp5Result = React3(ChevronSmallDownIcon, { size: "md" });
  if (!disabled) {
    tmp11 = onPress;
  }
  obj.onPress = tmp11;
  const items1 = [leading, ,];
  const obj2 = { style: tmp.content, variant: "text-md/medium", color: null, children: null };
  let str = "text-muted";
  if (null != label) {
    str = "text-default";
  }
  obj2.color = str;
  if (label == null) {
    label = placeholder;
  }
  obj2.children = label;
  items1[1] = React3(tmp7(5619).Text, obj2);
  items1[2] = tmp5Result;
  obj.children = items1;
  return React4(TouchableHitBoxDefault, obj);
}
export const useFormDropdownStyles = styles;
