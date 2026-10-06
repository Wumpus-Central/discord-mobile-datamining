// === Module 13034: AvatarGrid ===

// Module 13034 (AvatarGrid)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import PresenceStore from "PresenceStore" /* 4936 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let user;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { avatarRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-around" }, avatarStatusStyle: obj2, gridContainer: { width: 108, height: 108, justifyContent: "space-around", marginLeft: 28 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_7 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let first;
  let guildId;
  let pendingAvatarDecoration;
  let pendingAvatarSrc;
  let tmp10;
  let tmp7;
  let tmp9;
  let useReducedMotion;
  const obj = user(576);
  const cResult = obj.c(22);
  user = user.user;
  ({ guildId, size, pendingAvatarSrc, pendingAvatarDecoration } = user);
  const showStatus = user.showStatus;
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PresenceStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    const fn = function v() {
      return PresenceStore.getStatus(user.id);
    };
    cResult[1] = user.id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = user(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AccessibilityStore];
    class E {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[3] = items1;
    cResult[4] = E;
    tmp10 = E;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  const tmpResult3 = user(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp10);
  if (undefined === pendingAvatarDecoration) {
    pendingAvatarDecoration = user.avatarDecoration;
  }
  let tmp13;
  if (showStatus) {
    tmp13 = stateFromStores;
  }
  if (cResult[5] === size) {
    if (cResult[6] === tmp4.avatarStatusStyle) {
      if (cResult[7] === pendingAvatarDecoration) {
        let tmp14;
        let tmp15;
        if (cResult[8] === tmp13) {
          tmp14 = cResult[9];
        }
        if (undefined !== pendingAvatarSrc) {
          if (cResult[10] === guildId) {
            if (cResult[11] === pendingAvatarSrc) {
              if (cResult[12] === stateFromStores1) {
                let tmp21;
                if (cResult[13] === user) {
                  tmp21 = cResult[14];
                }
                if (cResult[15] === tmp14) {
                  let tmp27;
                  if (cResult[16] === tmp21) {
                    tmp27 = cResult[17];
                  }
                  tmp15 = tmp27;
                }
                class E {
                  constructor() {
                    return useReducedMotion.useReducedMotion;
                  }
                }
                tmp29[0] = tmp21;
                const Avatar2 = tmp(1188).Avatar;
                const merged = Object.assign(tmp14);
                const tmp33 = closure_5(Avatar2, tmp29);
                cResult[15] = tmp14;
                cResult[16] = tmp21;
                cResult[17] = tmp33;
                tmp27 = tmp33;
              }
            }
          }
          const tmpResult4 = user(7930);
          class E {
            constructor() {
              return useReducedMotion.useReducedMotion;
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
                tmp15 = cResult[21];
              }
            }
          }
          const obj2 = { user: null, guildId };
          class E {
            constructor() {
              return useReducedMotion.useReducedMotion;
            }
          }
          const Avatar = tmp(1188).Avatar;
          const merged1 = Object.assign(tmp14);
          const tmp20 = closure_5(Avatar, obj2);
          cResult[18] = guildId;
          cResult[19] = tmp14;
          cResult[20] = user;
          cResult[21] = tmp20;
          tmp15 = tmp20;
        }
        return tmp15;
      }
    }
  }
  const obj3 = { avatarDecoration: pendingAvatarDecoration, status: tmp13, statusStyle: tmp4.avatarStatusStyle, size };
  cResult[5] = size;
  cResult[6] = tmp4.avatarStatusStyle;
  cResult[7] = pendingAvatarDecoration;
  cResult[8] = tmp13;
  cResult[9] = obj3;
  tmp14 = obj3;
}) : ((user) => {
  let guildId;
  let obj5;
  let pendingAvatarDecoration;
  let pendingAvatarSrc;
  let showStatus;
  let tmp2Result;
  let tmp6;
  let useReducedMotion;
  user = user.user;
  ({ guildId, pendingAvatarSrc, pendingAvatarDecoration } = user);
  ({ size, showStatus } = user);
  const items = [PresenceStore];
  const tmp = closure_7();
  const obj = user(504);
  const stateFromStores = obj.useStateFromStores(items, () => PresenceStore.getStatus(user.id));
  const items1 = [AccessibilityStore];
  const obj2 = user(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  if (undefined === pendingAvatarDecoration) {
    pendingAvatarDecoration = user.avatarDecoration;
  }
  const obj3 = { avatarDecoration: pendingAvatarDecoration, status: tmp6, statusStyle: tmp.avatarStatusStyle, size };
  tmp6 = undefined;
  if (showStatus) {
    tmp6 = stateFromStores;
  }
  const Avatar = tmp2(1188).Avatar;
  if (undefined !== pendingAvatarSrc) {
    const obj4 = { source: tmp2Result.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores1) };
    tmp2Result = user(7930);
    const merged = Object.assign(obj3);
    obj5 = obj4;
  } else {
    obj5 = { user, guildId };
    const merged1 = Object.assign(obj3);
  }
  return closure_5(Avatar, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let items1;
  let items2;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(18);
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
    tmp6 = tmp16;
    tmp5 = tmp12;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  if (cResult[3] === tmp4.avatarRow) {
    if (cResult[4] === tmp5) {
      let tmp17;
      let tmp20;
      let tmp19;
      if (cResult[5] === tmp6) {
        tmp17 = cResult[6];
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
        tmp20 = tmp30;
        tmp19 = tmp26;
      } else {
        tmp19 = cResult[8];
        tmp20 = cResult[9];
      }
      if (cResult[10] === tmp4.avatarRow) {
        if (cResult[11] === tmp19) {
          let tmp31;
          if (cResult[12] === tmp20) {
            tmp31 = cResult[13];
          }
          if (cResult[14] === tmp4.gridContainer) {
            if (cResult[15] === tmp17) {
              let tmp35;
              if (cResult[16] === tmp31) {
                tmp35 = cResult[17];
              }
              return tmp35;
            }
          }
          const obj6 = { style: tmp4.gridContainer, children: items };
          items = [tmp17, tmp31];
          const tmp38 = metroRequire(View, obj6);
          cResult[14] = tmp4.gridContainer;
          cResult[15] = tmp17;
          cResult[16] = tmp31;
          cResult[17] = tmp38;
          tmp35 = tmp38;
        }
      }
      const obj7 = { style: tmp4.avatarRow, children: items1 };
      items1 = [tmp19, tmp20];
      const tmp34 = metroRequire(View, obj7);
      cResult[10] = tmp4.avatarRow;
      cResult[11] = tmp19;
      cResult[12] = tmp20;
      cResult[13] = tmp34;
      tmp31 = tmp34;
    }
  }
  const obj8 = { style: tmp4.avatarRow, children: items2 };
  items2 = [tmp5, tmp6];
  const tmp18 = metroRequire(View, obj8);
  cResult[3] = tmp4.avatarRow;
  cResult[4] = tmp5;
  cResult[5] = tmp6;
  cResult[6] = tmp18;
  tmp17 = tmp18;
}) : ((arg0) => {
  let items;
  let items1;
  let items2;
  const tmp = closure_7();
  const obj = { style: tmp.gridContainer, children: items1 };
  const obj2 = { style: tmp.avatarRow, children: items };
  const obj3 = { size: native.AvatarSizes.NORMAL };
  const merged = Object.assign(arg0);
  items = [hasOwnProperty(closure_8, obj3), ];
  const obj4 = { size: native.AvatarSizes.NORMAL, showStatus: true };
  const merged1 = Object.assign(arg0);
  items[1] = hasOwnProperty(closure_8, obj4);
  items1 = [metroRequire(View, obj2), ];
  const obj5 = { style: tmp.avatarRow, children: items2 };
  const obj6 = { size: native.AvatarSizes.REFRESH_MEDIUM_32 };
  const merged2 = Object.assign(arg0);
  items2 = [hasOwnProperty(closure_8, obj6), ];
  const obj7 = { size: native.AvatarSizes.REFRESH_MEDIUM_32, showStatus: true };
  const merged3 = Object.assign(arg0);
  items2[1] = hasOwnProperty(closure_8, obj7);
  items1[1] = metroRequire(View, obj5);
  return metroRequire(View, obj);
});
const result = size.fileFinishedImporting("modules/collectibles/avatar_decorations/native/AvatarGrid.tsx");

export default tmp4;