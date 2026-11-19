// discord_app/modules/user_profile/native/UserProfileCardTitle.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c2, View: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(4792);
let obj2 = {
  title: { flexDirection: "row", alignItems: "center", flexShrink: 1, minWidth: 0, gap: nativeDefault.space.PX_4 },
  text: { flexShrink: 1, minWidth: 0 },
};
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileCardTitle.tsx");

export default function UserProfileCardTitle(arg0) {
  ({ title, onPress } = arg0);
  ({ leadingIcon, trailingIcon } = arg0);
  const tmp = closure_7();
  items = [leadingIcon, ,];
  const obj = {
    style: tmp.text,
    accessibilityRole: null,
    variant: "body-sm/medium",
    color: "text-strong",
    lineClamp: 1,
    children: null,
  };
  let str;
  if (null == onPress) {
    str = "header";
  }
  const obj2 = { children: null };
  obj.accessibilityRole = str;
  obj.children = title;
  items[1] = React4(Text_Text.Text, obj);
  items[2] = trailingIcon;
  obj2.children = items;
  const tmp2Result = timestampProducer(hasOwnProperty, obj2);
  if (null != onPress) {
    const obj3 = {
      style: tmp.title,
      onPress,
      accessibilityRole: "button",
      accessibilityLabel: title,
      children: tmp2Result,
    };
    let tmp4Result = React4(React2, obj3);
  } else {
    const obj4 = { style: tmp.title, children: tmp2Result };
    tmp4Result = React4(React3, obj4);
  }
  return tmp4Result;
}
