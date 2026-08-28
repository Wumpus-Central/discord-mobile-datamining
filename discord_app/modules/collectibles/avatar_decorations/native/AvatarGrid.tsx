// discord_app/modules/collectibles/avatar_decorations/native/AvatarGrid.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../design/void/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_3 from "../../../a11y/AccessibilityStore.tsx";
import closure_4 from "../../../../stores/PresenceStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function GridAvatar(user) {
  user = user.user;
  ({ guildId, pendingAvatarSrc, pendingAvatarDecoration } = user);
  ({ size, showStatus } = user);
  let obj = user(589);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getStatus(user.id));
  obj1 = user(589);
  const items1 = [closure_3];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  if (undefined === pendingAvatarDecoration) {
    pendingAvatarDecoration = user.avatarDecoration;
  }
  obj = { avatarDecoration: pendingAvatarDecoration, status: null, statusStyle: null, size: null };
  let tmp6;
  if (showStatus) {
    tmp6 = stateFromStores;
  }
  obj[1] = tmp6;
  obj[2] = callback3().avatarStatusStyle;
  obj[3] = size;
  if (undefined !== pendingAvatarSrc) {
    obj = { source: null };
    const tmp2Result = tmp2(8055);
    obj[0] = tmp2Result.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores1);
    const merged = Object.assign(obj);
    obj1 = obj;
  } else {
    obj1 = { user: null, guildId: null };
    obj1[0] = user;
    obj1[1] = guildId;
    const merged1 = Object.assign(obj);
  }
  return closure_5(user(1297).Avatar, obj1);
}
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { avatarRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-around" }, avatarStatusStyle: null, gridContainer: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: 108, height: 108, justifyContent: "space-around", marginLeft: 28 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/collectibles/avatar_decorations/native/AvatarGrid.tsx");

export default function AvatarGrid(arg0) {
  const tmp = callback3();
  let obj = { style: tmp.gridContainer, children: null };
  obj = { style: tmp.avatarRow, children: null };
  obj = { size: Button.AvatarSizes.NORMAL };
  const merged = Object.assign(arg0);
  const items = [callback(GridAvatar, obj), ];
  const merged1 = Object.assign(arg0);
  items[1] = callback(GridAvatar, { size: Button.AvatarSizes.NORMAL, showStatus: true });
  obj[1] = items;
  const items1 = [callback2(View, obj), ];
  const obj2 = { style: tmp.avatarRow, children: null };
  obj1 = { size: Button.AvatarSizes.NORMAL, showStatus: true };
  const merged2 = Object.assign(arg0);
  const items2 = [callback(GridAvatar, { size: Button.AvatarSizes.REFRESH_MEDIUM_32 }), ];
  const obj3 = { size: Button.AvatarSizes.REFRESH_MEDIUM_32 };
  const merged3 = Object.assign(arg0);
  items2[1] = callback(GridAvatar, { size: Button.AvatarSizes.REFRESH_MEDIUM_32, showStatus: true });
  obj2[1] = items2;
  items1[1] = callback2(View, obj2);
  obj[1] = items1;
  return callback2(View, obj);
};