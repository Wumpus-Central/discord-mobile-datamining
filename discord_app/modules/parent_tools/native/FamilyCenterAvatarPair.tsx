// === Module 14477: FamilyCenterAvatarPair ===

// Module 14477 (FamilyCenterAvatarPair)
import noopAll from "noop" /* 19 */;
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 647 */;
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { avatars: null, icon: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.round, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 24, width: 24, marginHorizontal: 16 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterAvatarPair.tsx");

export default function FamilyCenterAvatarPair(otherUser) {
  otherUser = otherUser.otherUser;
  ({ iconSrc, iconStyles } = otherUser);
  const tmp = callback3();
  let obj = defaultAreStatesEqual;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let tmp5 = null;
  if (undefined !== stateFromStores) {
    tmp5 = null;
    if (undefined !== otherUser) {
      obj = { style: null, children: null };
      obj[0] = tmp.avatars;
      obj = { size: null, user: null, guildId: "Array", avatarDecoration: true };
      obj[0] = tmp2(1297).AvatarSizes.LARGE_48;
      obj[1] = stateFromStores;
      obj[3] = stateFromStores.avatarDecoration;
      const items1 = [callback(tmp2(1297).Avatar, obj), , ];
      obj1 = { style: null, size: null, source: null };
      const items2 = [tmp.icon, iconStyles];
      obj1[0] = items2;
      obj1[1] = tmp2(1297).Icon.Sizes.EXTRA_SMALL;
      obj1[2] = iconSrc;
      items1[1] = callback(tmp2(1297).Icon, obj1);
      const obj2 = { size: null, user: null, guildId: "Array", avatarDecoration: true };
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