// discord_app/modules/parent_tools/native/FamilyCenterAvatarPair.tsx
import "noop";
import { View } from "get ActivityIndicator";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { defaultAreStatesEqual } from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { avatars: null, icon: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.round, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 24, width: 24, marginHorizontal: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/parent_tools/native/FamilyCenterAvatarPair.tsx");

export default function FamilyCenterAvatarPair(otherUser) {
  let iconSrc;
  let iconStyles;
  otherUser = otherUser.otherUser;
  ({ iconSrc, iconStyles } = otherUser);
  const tmp = createCacheKey();
  let obj = defaultAreStatesEqual;
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let tmp5 = null;
  if (undefined !== stateFromStores) {
    tmp5 = null;
    if (undefined !== otherUser) {
      obj = { style: null, children: null };
      obj[0] = tmp.avatars;
      obj = { size: null, user: null, guildId: "Array", avatarDecoration: "\u{1F9DB}\u{1F3FE}" };
      obj[0] = tmp2(1297).AvatarSizes.LARGE_48;
      obj[1] = stateFromStores;
      obj[3] = stateFromStores.avatarDecoration;
      const items1 = [callback(tmp2(1297).Avatar, obj), , ];
      const obj1 = { style: null, size: null, source: null };
      const items2 = [tmp.icon, iconStyles];
      obj1[0] = items2;
      obj1[1] = tmp2(1297).Icon.Sizes.EXTRA_SMALL;
      obj1[2] = iconSrc;
      items1[1] = callback(tmp2(1297).Icon, obj1);
      const obj2 = { size: null, user: null, guildId: "Array", avatarDecoration: "\u{1F9DB}\u{1F3FE}" };
      obj2[0] = tmp2(1297).AvatarSizes.LARGE_48;
      obj2[1] = otherUser;
      obj2[3] = otherUser.avatarDecoration;
      items1[2] = callback(tmp2(1297).Avatar, obj2);
      obj[1] = items1;
      tmp5 = callback2(View, obj);
    }
  }
  return tmp5;
};