// discord_app/modules/parent_tools/native/FamilyCenterAvatarPair.tsx
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4636);
let obj2 = {
  avatars: {
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderRadius: nativeDefault.radii.round,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
  },
  icon: { height: 24, width: 24, marginHorizontal: 16 },
};
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterAvatarPair.tsx");

export default function FamilyCenterAvatarPair(otherUser) {
  otherUser = otherUser.otherUser;
  ({ iconSrc, iconStyles } = otherUser);
  const tmp = closure_6();
  const items = [UserStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => currentUser.getCurrentUser());
  let tmp5 = null;
  if (undefined !== stateFromStores) {
    tmp5 = null;
    if (undefined !== otherUser) {
      const obj2 = { style: tmp.avatars, children: null };
      const obj3 = {
        size: native.AvatarSizes.LARGE_48,
        user: stateFromStores,
        guildId: "Array",
        avatarDecoration: stateFromStores.avatarDecoration,
      };
      const items1 = [React4(native.Avatar, obj3), ,];
      const obj4 = { style: null, size: null, source: null };
      const items2 = [tmp.icon, iconStyles];
      obj4.style = items2;
      obj4.size = native.Icon.Sizes.EXTRA_SMALL;
      obj4.source = iconSrc;
      items1[1] = React4(native.Icon, obj4);
      const obj5 = {
        size: native.AvatarSizes.LARGE_48,
        user: otherUser,
        guildId: "Array",
        avatarDecoration: otherUser.avatarDecoration,
      };
      items1[2] = React4(native.Avatar, obj5);
      obj2.children = items1;
      tmp5 = hasOwnProperty(View, obj2);
    }
  }
  return tmp5;
}
