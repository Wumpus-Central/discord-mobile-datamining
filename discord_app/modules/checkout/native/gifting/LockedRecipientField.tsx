// === Module 11104: LockedRecipientField ===

// Module 11104 (LockedRecipientField)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import UserUtilsDefault from "UserUtils" /* 4566 */;
import Text_Text from "Text/Text" /* 4718 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4722);
let obj2 = { container: { flexDirection: "row", alignItems: "center", marginLeft: nativeDefault.space.PX_16 }, avatar: null };
let obj3 = { flexDirection: "row", alignItems: "center", marginLeft: nativeDefault.space.PX_16 };
obj2.avatar = { marginEnd: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkout/native/gifting/LockedRecipientField.tsx");

export default function LockedRecipientField(user) {
  user = user.user;
  const tmp = closure_6();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.avatar, user, guildId: "Array", size: native.AvatarSizes.NORMAL };
  const items = [React4(native.Avatar, obj2), ];
  const obj3 = { variant: "text-md/semibold", children: UserUtilsDefault.getName(user) };
  items[1] = React4(Text_Text.Text, obj3);
  obj.children = items;
  return hasOwnProperty(View, obj);
};