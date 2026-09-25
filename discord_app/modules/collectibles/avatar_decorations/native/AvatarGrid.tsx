// === Module 12733: AvatarGrid ===

// Module 12733 (AvatarGrid)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4821 */;
import PresenceStore from "PresenceStore" /* 4869 */;

require = fn;
function GridAvatar(user) {
  user = user.user;
  ({ guildId, pendingAvatarSrc, pendingAvatarDecoration } = user);
  ({ size, showStatus } = user);
  const tmp = closure_7();
  const items = [PresenceStore];
  const stateFromStores = user(504).useStateFromStores(items, () => PresenceStore.getStatus(user.id));
  const obj = user(504);
  const items1 = [AccessibilityStore];
  const stateFromStores1 = user(504).useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  if (undefined === pendingAvatarDecoration) {
    pendingAvatarDecoration = user.avatarDecoration;
  }
  const obj3 = { avatarDecoration: pendingAvatarDecoration, status: null, statusStyle: null, size: null };
  let tmp6;
  if (showStatus) {
    tmp6 = stateFromStores;
  }
  obj3.status = tmp6;
  obj3.statusStyle = tmp.avatarStatusStyle;
  obj3.size = size;
  if (undefined !== pendingAvatarSrc) {
    const obj4 = { source: null };
    const tmp2Result = tmp2(7685);
    obj4.source = tmp2Result.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores1);
    const merged = Object.assign(obj3);
    let obj5 = obj4;
  } else {
    obj5 = { user, guildId };
    const merged1 = Object.assign(obj3);
  }
  return closure_5(user(1177).Avatar, obj5);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4829);
let obj2 = { avatarRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-around" }, avatarStatusStyle: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, gridContainer: { width: 108, height: 108, justifyContent: "space-around", marginLeft: 28 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/avatar_decorations/native/AvatarGrid.tsx");

export default function AvatarGrid(arg0) {
  const tmp = closure_7();
  const obj = { style: tmp.gridContainer, children: null };
  const obj2 = { style: tmp.avatarRow, children: null };
  const merged = Object.assign(arg0);
  const items = [hasOwnProperty(GridAvatar, { size: native.AvatarSizes.NORMAL }), ];
  const obj3 = { size: native.AvatarSizes.NORMAL };
  const merged1 = Object.assign(arg0);
  items[1] = hasOwnProperty(GridAvatar, { size: native.AvatarSizes.NORMAL, showStatus: true });
  obj2.children = items;
  const items1 = [timestampProducer(View, obj2), ];
  const obj5 = { style: tmp.avatarRow, children: null };
  const obj4 = { size: native.AvatarSizes.NORMAL, showStatus: true };
  const merged2 = Object.assign(arg0);
  const items2 = [hasOwnProperty(GridAvatar, { size: native.AvatarSizes.REFRESH_MEDIUM_32 }), ];
  const obj6 = { size: native.AvatarSizes.REFRESH_MEDIUM_32 };
  const merged3 = Object.assign(arg0);
  items2[1] = hasOwnProperty(GridAvatar, { size: native.AvatarSizes.REFRESH_MEDIUM_32, showStatus: true });
  obj5.children = items2;
  items1[1] = timestampProducer(View, obj5);
  obj.children = items1;
  return timestampProducer(View, obj);
};