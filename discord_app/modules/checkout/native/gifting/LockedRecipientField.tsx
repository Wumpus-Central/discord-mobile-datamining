// discord_app/modules/checkout/native/gifting/LockedRecipientField.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import UserUtilsDefault from "../../../../utils/UserUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
  const items = [React4(native.Avatar, obj)];
  obj = { variant: "text-md/semibold", children: UserUtilsDefault.getName(user) };
  items[1] = React4(Text_Text.Text, obj);
  obj.children = items;
  return hasOwnProperty(View, obj);
}
