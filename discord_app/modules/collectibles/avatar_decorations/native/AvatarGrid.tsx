// discord_app/modules/collectibles/avatar_decorations/native/AvatarGrid.tsx
import "noop";
import { View } from "get ActivityIndicator";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import sortActivity from "sortActivity";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Button } from "../../../../design/void/native.tsx";

let c5;
let closure_6;
const require = arg1;
function GridAvatar(user) {
  let guildId;
  let pendingAvatarDecoration;
  let pendingAvatarSrc;
  let showStatus;
  let size;
  user = user.user;
  ({ guildId, pendingAvatarSrc, pendingAvatarDecoration } = user);
  ({ size, showStatus } = user);
  let obj = user(589);
  const items = [sortActivity];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getStatus(user.id));
  let obj1 = user(589);
  const items1 = [maybeApplyNoTextColorForLightCustomTheme];
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
  obj[2] = createCacheKey().avatarStatusStyle;
  obj[3] = size;
  if (undefined !== pendingAvatarSrc) {
    obj = { source: null };
    const tmp2Result = tmp2(8351);
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
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { avatarRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-around" }, avatarStatusStyle: null, gridContainer: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: 108, height: 108, justifyContent: "space-around", marginLeft: 28 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/collectibles/avatar_decorations/native/AvatarGrid.tsx");

export default function AvatarGrid(arg0) {
  const tmp = createCacheKey();
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
  const obj1 = { size: Button.AvatarSizes.NORMAL, showStatus: true };
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