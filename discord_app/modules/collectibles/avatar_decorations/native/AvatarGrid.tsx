// === Module 13176: AvatarGrid ===

// Module 13176 (AvatarGrid)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import PresenceStore from "PresenceStore" /* 4600 */;

require = fn;
function GridAvatar(user) {
  user = user.user;
  ({ guildId, pendingAvatarSrc, pendingAvatarDecoration } = user);
  ({ size, showStatus } = user);
  let obj = user(504);
  const items = [PresenceStore];
  const stateFromStores = obj.useStateFromStores(items, () => PresenceStore.getStatus(user.id));
  let obj1 = user(504);
  const items1 = [AccessibilityStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  if (undefined === pendingAvatarDecoration) {
    pendingAvatarDecoration = user.avatarDecoration;
  }
  obj = { avatarDecoration: pendingAvatarDecoration, status: null, statusStyle: null, size: null };
  let tmp6;
  if (showStatus) {
    tmp6 = stateFromStores;
  }
  obj.status = tmp6;
  obj.statusStyle = closure_7().avatarStatusStyle;
  obj.size = size;
  if (undefined !== pendingAvatarSrc) {
    obj = { source: null };
    const tmp2Result = tmp2(8247);
    obj.source = tmp2Result.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores1);
    const merged = Object.assign(obj);
    obj1 = obj;
  } else {
    obj1 = { user, guildId };
    const merged1 = Object.assign(obj);
  }
  return closure_5(user(1178).Avatar, obj1);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { avatarRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-around" }, avatarStatusStyle: null, gridContainer: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.avatarStatusStyle = createStyles;
createStyles.gridContainer = { width: 108, height: 108, justifyContent: "space-around", marginLeft: 28 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/avatar_decorations/native/AvatarGrid.tsx");

export default function AvatarGrid(arg0) {
  const tmp = closure_7();
  let obj = { style: tmp.gridContainer, children: null };
  obj = { style: tmp.avatarRow, children: null };
  obj = { size: native.AvatarSizes.NORMAL };
  const merged = Object.assign(arg0);
  const items = [hasOwnProperty(GridAvatar, obj), ];
  const merged1 = Object.assign(arg0);
  items[1] = hasOwnProperty(GridAvatar, { size: native.AvatarSizes.NORMAL, showStatus: true });
  obj.children = items;
  const items1 = [timestampProducer(View, obj), ];
  const obj2 = { style: tmp.avatarRow, children: null };
  const obj1 = { size: native.AvatarSizes.NORMAL, showStatus: true };
  const merged2 = Object.assign(arg0);
  const items2 = [hasOwnProperty(GridAvatar, { size: native.AvatarSizes.REFRESH_MEDIUM_32 }), ];
  const obj3 = { size: native.AvatarSizes.REFRESH_MEDIUM_32 };
  const merged3 = Object.assign(arg0);
  items2[1] = hasOwnProperty(GridAvatar, { size: native.AvatarSizes.REFRESH_MEDIUM_32, showStatus: true });
  obj2.children = items2;
  items1[1] = timestampProducer(View, obj2);
  obj.children = items1;
  return timestampProducer(View, obj);
};