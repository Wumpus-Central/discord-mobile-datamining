// === Module 10856: LockedRecipientField ===

// Module 10856 (LockedRecipientField)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import Text_Text from "Text/Text" /* 4556 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: null, avatar: null };
createStyles = { flexDirection: "row", alignItems: "center", marginLeft: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.avatar = { marginEnd: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkout/native/gifting/LockedRecipientField.tsx");

export default function LockedRecipientField(user) {
  user = user.user;
  const tmp = closure_6();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.avatar, user, guildId: "Array", size: native.AvatarSizes.NORMAL };
  const items = [React4(native.Avatar, obj), ];
  obj = { variant: "text-md/semibold", children: UserUtilsDefault.getName(user) };
  items[1] = React4(Text_Text.Text, obj);
  obj.children = items;
  return hasOwnProperty(View, obj);
};