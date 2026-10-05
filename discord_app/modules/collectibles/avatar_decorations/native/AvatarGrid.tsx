// === Module 13015: AvatarGrid ===

// Module 13015 (AvatarGrid)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import PresenceStore from "PresenceStore" /* 4930 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let obj2 = { avatarRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-around" }, avatarStatusStyle: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, gridContainer: { width: 108, height: 108, justifyContent: "space-around", marginLeft: 28 } };
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let tmp2 = dependencyMap;
  const cResult = user(576).c(22);
  user = user.user;
  ({ guildId, size, pendingAvatarSrc, pendingAvatarDecoration } = user);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PresenceStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    const fn = function v() {
      return PresenceStore.getStatus(user.id);
    };
    cResult[1] = user.id;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = user(576);
  const stateFromStores = user(504).useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AccessibilityStore];
    class E {
      constructor() {
        return closure_1_3.useReducedMotion;
      }
    }
    cResult[3] = items1;
    cResult[4] = E;
    let tmp10 = E;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  const tmpResult = user(504);
  const stateFromStores1 = user(504).useStateFromStores(tmp9, tmp10);
  if (undefined === pendingAvatarDecoration) {
    pendingAvatarDecoration = user.avatarDecoration;
  }
  let tmp13;
  if (user.showStatus) {
    tmp13 = stateFromStores;
  }
  if (cResult[5] === size) {
    if (cResult[6] === tmp4.avatarStatusStyle) {
      if (cResult[7] === pendingAvatarDecoration) {
        if (cResult[8] === tmp13) {
          let tmp14 = cResult[9];
        }
        if (undefined !== pendingAvatarSrc) {
          if (cResult[10] === guildId) {
            if (cResult[11] === pendingAvatarSrc) {
              if (cResult[12] === stateFromStores1) {
                if (cResult[13] === user) {
                  let tmp21 = cResult[14];
                }
                if (cResult[15] === tmp14) {
                }
                class E {
                  constructor() {
                    return closure_1_3.useReducedMotion;
                  }
                }
                const obj2 = { source: tmp21 };
                const merged = Object.assign(tmp14);
                tmp2 = closure_5(tmp, obj2);
                cResult[15] = tmp14;
                cResult[16] = tmp21;
                cResult[17] = tmp2;
              }
            }
          }
          const tmpResult4 = tmp(7919);
          class E {
            constructor() {
              return closure_1_3.useReducedMotion;
            }
          }
          const avatarSource = tmpResult4.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores1);
          cResult[10] = guildId;
          cResult[11] = pendingAvatarSrc;
          cResult[12] = stateFromStores1;
          cResult[13] = user;
          cResult[14] = avatarSource;
          tmp21 = avatarSource;
        } else {
          if (cResult[18] === guildId) {
            if (cResult[19] === tmp14) {
              if (cResult[20] === user) {
                let tmp15 = cResult[21];
              }
              return tmp15;
            }
          }
          const obj3 = { user: null, guildId: null };
          class E {
            constructor() {
              return closure_1_3.useReducedMotion;
            }
          }
          obj3.guildId = guildId;
          const merged1 = Object.assign(tmp14);
          const tmp20 = closure_5(tmp(1188).Avatar, obj3);
          cResult[18] = guildId;
          cResult[19] = tmp14;
          cResult[20] = user;
          cResult[21] = tmp20;
          tmp15 = tmp20;
        }
      }
    }
  }
  const obj4 = { avatarDecoration: pendingAvatarDecoration, status: tmp13, statusStyle: tmp4.avatarStatusStyle, size };
  cResult[5] = size;
  cResult[6] = tmp4.avatarStatusStyle;
  cResult[7] = pendingAvatarDecoration;
  cResult[8] = tmp13;
  cResult[9] = obj4;
  tmp14 = obj4;
  const tmpResult3 = user(504);
}) : ((user) => {
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
    const tmp2Result = tmp2(7919);
    obj4.source = tmp2Result.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores1);
    const merged = Object.assign(obj3);
    let obj5 = obj4;
  } else {
    obj5 = { user, guildId };
    const merged1 = Object.assign(obj3);
  }
  return closure_5(user(1188).Avatar, obj5);
});
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/avatar_decorations/native/AvatarGrid.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(18);
  const tmp4 = closure_7();
  if (cResult[0] !== arg0) {
    const obj2 = { size: native.AvatarSizes.NORMAL };
    const merged = Object.assign(arg0);
    const tmp12 = hasOwnProperty(closure_8, obj2);
    const obj3 = { size: native.AvatarSizes.NORMAL, showStatus: true };
    const merged1 = Object.assign(arg0);
    const tmp16 = hasOwnProperty(closure_8, obj3);
    cResult[0] = arg0;
    cResult[1] = tmp12;
    cResult[2] = tmp16;
    let tmp6 = tmp16;
    let tmp5 = tmp12;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  if (cResult[3] === tmp4.avatarRow) {
    if (cResult[4] === tmp5) {
      if (cResult[5] === tmp6) {
        let tmp17 = cResult[6];
      }
      if (cResult[7] !== arg0) {
        const obj4 = { size: native.AvatarSizes.REFRESH_MEDIUM_32 };
        const merged2 = Object.assign(arg0);
        const tmp26 = hasOwnProperty(closure_8, obj4);
        const obj5 = { size: native.AvatarSizes.REFRESH_MEDIUM_32, showStatus: true };
        const merged3 = Object.assign(arg0);
        const tmp30 = hasOwnProperty(closure_8, obj5);
        cResult[7] = arg0;
        cResult[8] = tmp26;
        cResult[9] = tmp30;
        let tmp20 = tmp30;
        let tmp19 = tmp26;
      } else {
        tmp19 = cResult[8];
        tmp20 = cResult[9];
      }
      if (cResult[10] === tmp4.avatarRow) {
        if (cResult[11] === tmp19) {
          if (cResult[12] === tmp20) {
            let tmp31 = cResult[13];
          }
          if (cResult[14] === tmp4.gridContainer) {
            if (cResult[15] === tmp17) {
              if (cResult[16] === tmp31) {
                let tmp35 = cResult[17];
              }
              return tmp35;
            }
          }
          const obj6 = { style: tmp4.gridContainer, children: null };
          const items = [tmp17, tmp31];
          obj6.children = items;
          const tmp38 = timestampProducer(View, obj6);
          cResult[14] = tmp4.gridContainer;
          cResult[15] = tmp17;
          cResult[16] = tmp31;
          cResult[17] = tmp38;
          tmp35 = tmp38;
        }
      }
      const obj7 = { style: tmp4.avatarRow, children: null };
      const items1 = [tmp19, tmp20];
      obj7.children = items1;
      const tmp34 = timestampProducer(View, obj7);
      cResult[10] = tmp4.avatarRow;
      cResult[11] = tmp19;
      cResult[12] = tmp20;
      cResult[13] = tmp34;
      tmp31 = tmp34;
    }
  }
  const obj8 = { style: tmp4.avatarRow, children: null };
  const items2 = [tmp5, tmp6];
  obj8.children = items2;
  const tmp18 = timestampProducer(View, obj8);
  cResult[3] = tmp4.avatarRow;
  cResult[4] = tmp5;
  cResult[5] = tmp6;
  cResult[6] = tmp18;
  tmp17 = tmp18;
}) : ((arg0) => {
  const tmp = closure_7();
  const obj = { style: tmp.gridContainer, children: null };
  const obj2 = { style: tmp.avatarRow, children: null };
  const merged = Object.assign(arg0);
  const items = [hasOwnProperty(closure_8, { size: native.AvatarSizes.NORMAL }), ];
  const obj3 = { size: native.AvatarSizes.NORMAL };
  const merged1 = Object.assign(arg0);
  items[1] = hasOwnProperty(closure_8, { size: native.AvatarSizes.NORMAL, showStatus: true });
  obj2.children = items;
  const items1 = [timestampProducer(View, obj2), ];
  const obj5 = { style: tmp.avatarRow, children: null };
  const obj4 = { size: native.AvatarSizes.NORMAL, showStatus: true };
  const merged2 = Object.assign(arg0);
  const items2 = [hasOwnProperty(closure_8, { size: native.AvatarSizes.REFRESH_MEDIUM_32 }), ];
  const obj6 = { size: native.AvatarSizes.REFRESH_MEDIUM_32 };
  const merged3 = Object.assign(arg0);
  items2[1] = hasOwnProperty(closure_8, { size: native.AvatarSizes.REFRESH_MEDIUM_32, showStatus: true });
  obj5.children = items2;
  items1[1] = timestampProducer(View, obj5);
  obj.children = items1;
  return timestampProducer(View, obj);
});