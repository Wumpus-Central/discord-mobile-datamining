// === Module 14922: FamilyCenterAvatarPair ===

// Module 14922 (FamilyCenterAvatarPair)
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { avatars: null, icon: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 8 };
createStyles.avatars = createStyles;
createStyles.icon = { height: 24, width: 24, marginHorizontal: 16 };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterAvatarPair.tsx");

export default function FamilyCenterAvatarPair(otherUser) {
  otherUser = otherUser.otherUser;
  ({ iconSrc, iconStyles } = otherUser);
  const tmp = closure_6();
  let obj = useStateFromStores;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let tmp5 = null;
  if (undefined !== stateFromStores) {
    tmp5 = null;
    if (undefined !== otherUser) {
      obj = { style: tmp.avatars, children: null };
      obj = { size: tmp2(1178).AvatarSizes.LARGE_48, user: stateFromStores, guildId: "Array", avatarDecoration: stateFromStores.avatarDecoration };
      const items1 = [React4(tmp2(1178).Avatar, obj), , ];
      const obj1 = { style: null, size: null, source: null };
      const items2 = [tmp.icon, iconStyles];
      obj1.style = items2;
      obj1.size = tmp2(1178).Icon.Sizes.EXTRA_SMALL;
      obj1.source = iconSrc;
      items1[1] = React4(tmp2(1178).Icon, obj1);
      const obj2 = { size: tmp2(1178).AvatarSizes.LARGE_48, user: otherUser, guildId: "Array", avatarDecoration: otherUser.avatarDecoration };
      items1[2] = React4(tmp2(1178).Avatar, obj2);
      obj.children = items1;
      tmp5 = hasOwnProperty(View, obj);
    }
  }
  return tmp5;
};