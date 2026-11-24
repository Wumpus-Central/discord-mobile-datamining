// === Module 15885: ProfileEditNitroSubLabel ===

// Module 15885 (ProfileEditNitroSubLabel)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5508 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9496 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4917);
const obj2 = { container: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 }, text: { flexShrink: 1 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/ProfileEditNitroSubLabel.tsx");

export default function ProfileEditNitroSubLabel(children) {
  const tmp = closure_6();
  const obj = { style: tmp.container, children: null };
  items = [React4(NitroWheelIcon.NitroWheelIcon, { size: "xxs", color: nativeDefault.colors.TEXT_SUBTLE }), React4(Text_Text.Text, { style: tmp.text, variant: "body-xs/normal", color: "text-subtle", children: children.text })];
  obj.children = items;
  return hasOwnProperty(View, obj);
};