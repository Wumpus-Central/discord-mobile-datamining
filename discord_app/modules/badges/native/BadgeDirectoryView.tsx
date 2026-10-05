// === Module 10888: BadgeDirectoryView ===

// Module 10888 (BadgeDirectoryView)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import Text_Text from "Text/Text" /* 4886 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 7868 */;
import BadgeCatalogIconDefault from "BadgeCatalogIcon" /* 10881 */;
import BadgeUtils from "BadgeUtils" /* 10889 */;
import openBadgeDetailsSheet from "openBadgeDetailsSheet" /* 10892 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9417 */;
import UserStore from "UserStore" /* 1377 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7863 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let currentUser, dependencyMap;

let c10;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let size;
let unpackModuleId;
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, content: obj3, centered: obj4, section: obj5, grid: obj6, tile: obj7, badgeIndicator: size, footer: obj8 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_48 };
obj4 = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_32 };
obj5 = { gap: nativeDefault.space.PX_16 };
obj6 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_12 };
obj7 = { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
size = { position: "absolute", top: nativeDefault.space.PX_6, right: nativeDefault.space.PX_6, width: 8, height: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND };
obj8 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
const f56050 = () => {

};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((badgeIndicatorIds) => {
  let badges;
  let emptyText;
  let items;
  let onPressBadge;
  let tileSize;
  let title;
  let tmp5;
  let obj = tileSize(badgeIndicatorIds[11]);
  const cResult = obj.c(15);
  ({ title, badges, tileSize } = badgeIndicatorIds);
  ({ emptyText, onPressBadge } = badgeIndicatorIds);
  badgeIndicatorIds = badgeIndicatorIds.badgeIndicatorIds;
  const tmp4 = closure_12();
  const tile = tmp4;
  if (0 !== badges.length) {
    let tmp6;
    let tmp11;
    if (cResult[0] !== title) {
      let obj2 = { variant: "text-md/medium", color: "text-strong", children: title };
      const tmp8 = closure_10(tileSize(badgeIndicatorIds[12]).Text, obj2);
      cResult[0] = title;
      cResult[1] = tmp8;
      tmp6 = tmp8;
    } else {
      tmp6 = cResult[1];
    }
    if (cResult[2] === badgeIndicatorIds) {
      if (cResult[3] === badges) {
        if (cResult[4] === emptyText) {
          if (cResult[5] === onPressBadge) {
            if (cResult[6] === tmp4.badgeIndicator) {
              if (cResult[7] === tmp4.grid) {
                if (cResult[8] === tmp4.tile) {
                  let tmp9;
                  if (cResult[9] === tileSize) {
                    tmp9 = cResult[10];
                  }
                  if (cResult[11] === tmp4.section) {
                    if (cResult[12] === tmp6) {
                      let tmp14;
                      if (cResult[13] === tmp9) {
                        tmp14 = cResult[14];
                      }
                      tmp5 = tmp14;
                    }
                  }
                  let obj3 = { style: tmp4.section, children: items };
                  items = [tmp6, tmp9];
                  const tmp17 = closure_11(closure_5, obj3);
                  cResult[11] = tmp4.section;
                  cResult[12] = tmp6;
                  cResult[13] = tmp9;
                  cResult[14] = tmp17;
                  tmp14 = tmp17;
                }
              }
            }
          }
        }
      }
    }
    if (badges.length > 0) {
      const obj4 = {
        style: tmp4.grid,
        children: badges.map((badge) => {
              let combined;
              let items;
              let items1;
              tileSize = badge;
              let hasItem = badgeIndicatorIds.has(badge.badge_id);
              const obj = {
                style: items,
                accessibilityLabel: combined,
                onPress() {
                  return onPressBadge(badge);
                },
                children: items1
              };
              items = [tile.tile, ];
              size = { width: tileSize, height: tileSize };
              items[1] = size;
              const name = badge.name;
              const PressableScale = tileSize(badgeIndicatorIds[13]).PressableScale;
              if (hasItem) {
                const intl = tmp3(badgeIndicatorIds[14]).intl;
                const _HermesInternal = HermesInternal;
                combined = "" + name + ", " + intl.string(tmp3(badgeIndicatorIds[14]).t.y2b7CA);
              } else {
                combined = name;
              }
              items1 = [, ];
              const obj2 = { badge, size: 44 };
              items1[0] = closure_1_10(onPressBadge(badgeIndicatorIds[15]), obj2);
              if (hasItem) {
                const obj3 = { style: tile.badgeIndicator, "aria-hidden": true };
                hasItem = closure_1_10(closure_1_5, obj3);
              }
              items1[1] = hasItem;
              return closure_1_11(PressableScale, obj, badge.badge_id);
            })
      };
      tmp11 = closure_10(closure_5, obj4);
    } else {
      const obj5 = { variant: "text-md/medium", color: "text-muted", children: emptyText };
      tmp11 = closure_10(tileSize(tmp2[12]).Text, obj5);
    }
    cResult[2] = badgeIndicatorIds;
    cResult[3] = badges;
    cResult[4] = emptyText;
    cResult[5] = onPressBadge;
    cResult[6] = tmp4.badgeIndicator;
    cResult[7] = tmp4.grid;
    cResult[8] = tmp4.tile;
    cResult[9] = tileSize;
    cResult[10] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp5 = null;
  }
  return tmp5;
}) : ((title) => {
  let badges;
  let emptyText;
  let items;
  let require;
  let tmp3Result;
  ({ badges, tileSize: require, emptyText, onPressBadge: importDefault, badgeIndicatorIds: dependencyMap } = title);
  title = title.title;
  const tmp = closure_12();
  const tile = tmp;
  if (0 !== badges.length) {
    let tmp5Result;
    let obj = { style: tmp.section, children: items };
    let obj2 = { variant: "text-md/medium", color: "text-strong", children: title };
    items = [closure_10(Text_Text.Text, obj2), ];
    if (badges.length > 0) {
      let obj3 = {
        style: tmp.grid,
        children: badges.map((badge) => {
              let combined;
              let items;
              let items1;
              const height = badge;
              let hasItem = dependencyMap.has(badge.badge_id);
              const obj = {
                style: items,
                accessibilityLabel: combined,
                onPress() {
                  return importDefault(badge);
                },
                children: items1
              };
              items = [tile.tile, ];
              size = { width: height, height };
              items[1] = size;
              const name = badge.name;
              const PressableScale = require("native").PressableScale;
              if (hasItem) {
                const intl = require("intl").intl;
                const _HermesInternal = HermesInternal;
                combined = "" + name + ", " + intl.string(require("intl").t.y2b7CA);
              } else {
                combined = name;
              }
              items1 = [, ];
              const obj2 = { badge, size: 44 };
              items1[0] = closure_1_10(BadgeCatalogIconDefault, obj2);
              if (hasItem) {
                const obj3 = { style: tile.badgeIndicator, "aria-hidden": true };
                hasItem = closure_1_10(closure_1_5, obj3);
              }
              items1[1] = hasItem;
              return closure_1_11(PressableScale, obj, badge.badge_id);
            })
      };
      tmp5Result = closure_10(closure_5, obj3);
    } else {
      const obj4 = { variant: "text-md/medium", color: "text-muted", children: emptyText };
      tmp5Result = closure_10(Text_Text.Text, obj4);
    }
    items[1] = tmp5Result;
    tmp3Result = closure_11(closure_5, obj);
  } else {
    tmp3Result = null;
  }
  return tmp3Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let isViewingOtherUser;
  let state;
  let stateFromStores;
  let stringResult;
  let targetUserId;
  let targetUsername;
  let tmp37;
  let tmp42;
  let tmp2 = dependencyMap;
  let obj = targetUsername(576);
  const cResult = obj.c(80);
  ({ targetUserId, targetUsername } = arg0);
  const tmp4 = closure_12();
  if (typeof f56050 === "function") {
    let tmp9;
    const diff = stateFromStores(1484)().width - 2 * stateFromStores(587).space.PX_16;
    let result = 3 * stateFromStores(587).space.PX_12;
    const sum = stateFromStores(1618)().bottom + stateFromStores(587).space.PX_16;
    if (cResult[0] !== sum) {
      let obj2 = { paddingBottom: sum };
      cResult[0] = sum;
      cResult[1] = obj2;
      tmp9 = obj2;
    } else {
      tmp9 = cResult[1];
    }
    if (cResult[2] === tmp4.footer) {
      let tmp13;
      let tmp12;
      let tmp19;
      let tmp22;
      let tmp21;
      let tmp24;
      let tmp27;
      let tmp29;
      let tmp31;
      let tmp34;
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        class U {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let id;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[5] = items;
        cResult[6] = U;
        tmp13 = U;
        tmp12 = items;
      } else {
        tmp12 = cResult[5];
        tmp13 = cResult[6];
      }
      const tmpResult = targetUsername(504);
      stateFromStores = tmpResult.useStateFromStores(tmp12, tmp13);
      dependencyMap = tmp17;
      let tmp18 = stateFromStores;
      if (null != targetUserId && targetUserId !== stateFromStores) {
        tmp18 = targetUserId;
      }
      targetUserId = tmp18;
      const _Symbol2 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [BadgeDirectoryStore];
        class U {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let id;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[7] = items1;
        tmp19 = items1;
      } else {
        tmp19 = cResult[7];
      }
      if (cResult[8] !== tmp18) {
        const fn = function w() {
          let badges;
          if (null != targetUserId) {
            badges = BadgeDirectoryStore.getBadges(tmp);
          } else {
            badges = [];
          }
          return badges;
        };
        const items2 = [tmp18];
        class U {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let id;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[8] = tmp18;
        cResult[9] = fn;
        cResult[10] = items2;
        tmp22 = items2;
        tmp21 = fn;
      } else {
        tmp21 = cResult[9];
        tmp22 = cResult[10];
      }
      const tmpResult5 = targetUsername(504);
      const stateFromStoresArray = tmpResult5.useStateFromStoresArray(tmp19, tmp21, tmp22);
      const _Symbol3 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [BadgeDirectoryStore];
        class U {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let id;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[11] = items3;
        tmp24 = items3;
      } else {
        tmp24 = cResult[11];
      }
      if (cResult[12] !== tmp18) {
        class L {
          constructor() {
            const hasCatalogForResult = null != targetUserId && BadgeDirectoryStore.hasCatalogFor(tmp);
            return hasCatalogForResult;
          }
        }
        const items4 = [tmp18];
        class U {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let id;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[12] = tmp18;
        cResult[13] = L;
        cResult[14] = items4;
        tmp27 = items4;
      } else {
        class L {
          constructor() {
            const hasCatalogForResult = null != targetUserId && BadgeDirectoryStore.hasCatalogFor(tmp);
            return hasCatalogForResult;
          }
        }
        tmp27 = cResult[14];
      }
      const tmpResult6 = targetUsername(504);
      const stateFromStores1 = tmpResult6.useStateFromStores(tmp24, L, tmp27);
      const _Symbol4 = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            const hasCatalogForResult = null != targetUserId && BadgeDirectoryStore.hasCatalogFor(tmp);
            return hasCatalogForResult;
          }
        }
        const items5 = [BadgeDirectoryStore];
        class U {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let id;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[15] = items5;
        tmp29 = items5;
      } else {
        class L {
          constructor() {
            const hasCatalogForResult = null != targetUserId && BadgeDirectoryStore.hasCatalogFor(tmp);
            return hasCatalogForResult;
          }
        }
      }
      if (cResult[16] !== tmp18) {
        class V {
          constructor() {
            return BadgeDirectoryStore.hasCatalogFetchErrorFor(targetUserId);
          }
        }
        const items6 = [tmp18];
        class U {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let id;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[16] = tmp18;
        cResult[17] = V;
        cResult[18] = items6;
        tmp31 = items6;
      } else {
        class V {
          constructor() {
            return BadgeDirectoryStore.hasCatalogFetchErrorFor(targetUserId);
          }
        }
        tmp31 = cResult[18];
      }
      const tmpResult7 = targetUsername(504);
      const stateFromStores2 = tmpResult7.useStateFromStores(tmp29, V, tmp31);
      if (cResult[19] !== tmp18) {
        class G {
          constructor() {
            if (null != targetUserId) {
              const tmp2 = BadgeDirectoryStore.hasCatalogFor(targetUserId) && !BadgeDirectoryStore.isCatalogStaleFor(targetUserId);
              if (!tmp2) {
                const obj2 = BadgeDirectoryActionCreators;
                const badgeDirectory = obj2.fetchBadgeDirectory(targetUserId);
              }
            }
          }
        }
        const items7 = [tmp18];
        class U {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let id;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[19] = tmp18;
        cResult[20] = G;
        cResult[21] = items7;
        tmp34 = items7;
      } else {
        class G {
          constructor() {
            if (null != targetUserId) {
              const tmp2 = BadgeDirectoryStore.hasCatalogFor(targetUserId) && !BadgeDirectoryStore.isCatalogStaleFor(targetUserId);
              if (!tmp2) {
                const obj2 = BadgeDirectoryActionCreators;
                const badgeDirectory = obj2.fetchBadgeDirectory(targetUserId);
              }
            }
          }
        }
        tmp34 = cResult[21];
      }
      const effect = targetUserId.useEffect(G, tmp34);
      const obj7 = targetUserId;
      if (cResult[22] === stateFromStores) {
        let tmp39;
        class G {
          constructor() {
            if (null != targetUserId) {
              const tmp2 = BadgeDirectoryStore.hasCatalogFor(targetUserId) && !BadgeDirectoryStore.isCatalogStaleFor(targetUserId);
              if (!tmp2) {
                const obj2 = BadgeDirectoryActionCreators;
                const badgeDirectory = obj2.fetchBadgeDirectory(targetUserId);
              }
            }
          }
        }
        const effect1 = obj7.useEffect(Q, tmp37);
        if (cResult[26] !== stateFromStoresArray) {
          class G {
            constructor() {
              if (null != targetUserId) {
                const tmp2 = BadgeDirectoryStore.hasCatalogFor(targetUserId) && !BadgeDirectoryStore.isCatalogStaleFor(targetUserId);
                if (!tmp2) {
                  const obj2 = BadgeDirectoryActionCreators;
                  const badgeDirectory = obj2.fetchBadgeDirectory(targetUserId);
                }
              }
            }
          }
          const directoryBadges = obj8.getDirectoryBadges(stateFromStoresArray);
          class U {
            constructor() {
              currentUser = currentUser.getCurrentUser();
              let id;
              if (currentUser != null) {
                id = currentUser.id;
              }
              return id;
            }
          }
          cResult[27] = directoryBadges;
          tmp39 = directoryBadges;
        } else {
          class G {
            constructor() {
              if (null != targetUserId) {
                const tmp2 = BadgeDirectoryStore.hasCatalogFor(targetUserId) && !BadgeDirectoryStore.isCatalogStaleFor(targetUserId);
                if (!tmp2) {
                  const obj2 = BadgeDirectoryActionCreators;
                  const badgeDirectory = obj2.fetchBadgeDirectory(targetUserId);
                }
              }
            }
          }
        }
        class U {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let id;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        const owned = tmp39.owned;
        if (cResult[28] === stateFromStoresArray) {
          class G {
            constructor() {
              if (null != targetUserId) {
                const tmp2 = BadgeDirectoryStore.hasCatalogFor(targetUserId) && !BadgeDirectoryStore.isCatalogStaleFor(targetUserId);
                if (!tmp2) {
                  const obj2 = BadgeDirectoryActionCreators;
                  const badgeDirectory = obj2.fetchBadgeDirectory(targetUserId);
                }
              }
            }
          }
          const tmpResult8 = targetUsername(10890);
          const badgeIndicatorIds = tmpResult8.useBadgeDirectoryBadgeIndicators(tmp42).badgeIndicatorIds;
          class U {
            constructor() {
              currentUser = currentUser.getCurrentUser();
              let id;
              if (currentUser != null) {
                id = currentUser.id;
              }
              return id;
            }
          }
          if (null != targetUserId && targetUserId !== stateFromStores) {
            class G {
              constructor() {
                if (null != targetUserId) {
                  const tmp2 = BadgeDirectoryStore.hasCatalogFor(targetUserId) && !BadgeDirectoryStore.isCatalogStaleFor(targetUserId);
                  if (!tmp2) {
                    const obj2 = BadgeDirectoryActionCreators;
                    const badgeDirectory = obj2.fetchBadgeDirectory(targetUserId);
                  }
                }
              }
            }
            cResult[31] = null != targetUserId && targetUserId !== stateFromStores;
            class U {
              constructor() {
                currentUser = currentUser.getCurrentUser();
                let id;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            cResult[32] = targetUsername;
            cResult[33] = stringResult;
          }
          const intl = targetUsername(1126).intl;
          stringResult = intl.string(targetUsername(1126).t.UqnlQF);
        }
        let obj3 = { badges: stateFromStoresArray, enabled: !(null != targetUserId && targetUserId !== stateFromStores) };
        cResult[28] = stateFromStoresArray;
        cResult[29] = !(null != targetUserId && targetUserId !== stateFromStores);
        cResult[30] = obj3;
        tmp42 = obj3;
      }
      class Q {
        constructor() {
          const tmp = isViewingOtherUser && null != stateFromStores;
          if (tmp) {
            if (!BadgeDirectoryStore.hasCatalogFor(stateFromStores)) {
              const obj = BadgeDirectoryActionCreators;
              const badgeDirectory = obj.fetchBadgeDirectory(stateFromStores);
            }
          }
        }
      }
      const items8 = [stateFromStores, null != targetUserId && targetUserId !== stateFromStores];
      cResult[22] = stateFromStores;
      cResult[23] = null != targetUserId && targetUserId !== stateFromStores;
      cResult[24] = Q;
      cResult[25] = items8;
      tmp37 = items8;
    }
    const items9 = [tmp4.footer, tmp9];
    cResult[2] = tmp4.footer;
    cResult[3] = tmp9;
    cResult[4] = items9;
  } else {
    class G {
      constructor() {
        if (null != targetUserId) {
          const tmp2 = BadgeDirectoryStore.hasCatalogFor(targetUserId) && !BadgeDirectoryStore.isCatalogStaleFor(targetUserId);
          if (!tmp2) {
            const obj2 = BadgeDirectoryActionCreators;
            const badgeDirectory = obj2.fetchBadgeDirectory(targetUserId);
          }
        }
      }
    }
    throw new TypeError("Trying to call a non-function");
  }
}) : ((arg0) => {
  let Button2;
  let Button3;
  let earnable;
  let intl3;
  let intl4;
  let intl5;
  let intl7;
  let intl8;
  let intl9;
  let isViewingOtherUser;
  let items13;
  let items14;
  let items15;
  let obj15;
  let obj17;
  let owned;
  let state;
  let stringResult;
  let targetUserId;
  let targetUsername;
  let tmp36Result;
  ({ targetUserId, targetUsername } = arg0);
  let stateFromStores;
  dependencyMap = undefined;
  targetUserId = undefined;
  let stateFromStoresArray;
  let tmp = closure_12();
  if (typeof f56050 === "function") {
    let tmp2 = stateFromStores;
    const diff = stateFromStores(1484)().width - 2 * stateFromStores(587).space.PX_16;
    let result = 3 * stateFromStores(587).space.PX_12;
    const items = [tmp.footer, ];
    let obj = { paddingBottom: stateFromStores(1618)().bottom + stateFromStores(587).space.PX_16 };
    items[1] = obj;
    let obj2 = targetUsername(504);
    const items1 = [UserStore];
    stateFromStores = obj2.useStateFromStores(items1, () => {
      currentUser = currentUser.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      return id;
    });
    dependencyMap = tmp10;
    let tmp11 = stateFromStores;
    if (null != targetUserId && targetUserId !== stateFromStores) {
      tmp11 = targetUserId;
    }
    targetUserId = tmp11;
    const items2 = [BadgeDirectoryStore];
    const items3 = [tmp11];
    const tmp6Result = targetUsername(504);
    stateFromStoresArray = tmp6Result.useStateFromStoresArray(items2, () => {
      let badges;
      if (null != targetUserId) {
        badges = BadgeDirectoryStore.getBadges(tmp);
      } else {
        badges = [];
      }
      return badges;
    }, items3);
    const items4 = [BadgeDirectoryStore];
    const items5 = [tmp11];
    const tmp6Result4 = targetUsername(504);
    const stateFromStores1 = tmp6Result4.useStateFromStores(items4, () => {
      const hasCatalogForResult = null != targetUserId && BadgeDirectoryStore.hasCatalogFor(tmp);
      return hasCatalogForResult;
    }, items5);
    const items6 = [BadgeDirectoryStore];
    const items7 = [tmp11];
    const items8 = [tmp11];
    const tmp6Result5 = targetUsername(504);
    const stateFromStores2 = tmp6Result5.useStateFromStores(items6, () => BadgeDirectoryStore.hasCatalogFetchErrorFor(targetUserId), items7);
    const effect = targetUserId.useEffect(() => {
      if (null != targetUserId) {
        const tmp2 = BadgeDirectoryStore.hasCatalogFor(targetUserId) && !BadgeDirectoryStore.isCatalogStaleFor(targetUserId);
        if (!tmp2) {
          const obj2 = BadgeDirectoryActionCreators;
          const badgeDirectory = obj2.fetchBadgeDirectory(targetUserId);
        }
      }
    }, items8);
    const items9 = [stateFromStores, null != targetUserId && targetUserId !== stateFromStores];
    const effect1 = targetUserId.useEffect(() => {
      const tmp = isViewingOtherUser && null != stateFromStores;
      if (tmp) {
        if (!BadgeDirectoryStore.hasCatalogFor(stateFromStores)) {
          const obj = BadgeDirectoryActionCreators;
          const badgeDirectory = obj.fetchBadgeDirectory(stateFromStores);
        }
      }
    }, items9);
    const items10 = [stateFromStoresArray];
    const memo = targetUserId.useMemo(() => {
      const obj = BadgeUtils;
      return obj.getDirectoryBadges(stateFromStoresArray);
    }, items10);
    ({ owned, earnable } = memo);
    let obj3 = { badges: stateFromStoresArray, enabled: tmp36Result };
    tmp36Result = !tmp10;
    const tmp6Result6 = targetUsername(10890);
    const badgeIndicatorIds = tmp6Result6.useBadgeDirectoryBadgeIndicators(obj3).badgeIndicatorIds;
    if (null != targetUserId && targetUserId !== stateFromStores) {
      let formatToPlainStringResult;
      let tmp33Result;
      if (null != targetUsername) {
        const intl2 = targetUsername(1126).intl;
        const obj4 = { username: targetUsername };
        formatToPlainStringResult = intl2.formatToPlainString(targetUsername(1126).t.EIcwoe, obj4);
      }
      const items11 = [tmp11];
      const callback = obj6.useCallback(() => {
        if (null != targetUserId) {
          const obj = BadgeDirectoryActionCreators;
          const badgeDirectory = obj.fetchBadgeDirectory(tmp, { isRetry: true });
        }
      }, items11);
      const items12 = [tmp11, null != targetUserId && targetUserId !== stateFromStores, targetUsername];
      const callback1 = obj6.useCallback(() => {
        const obj = targetUsername(isViewingOtherUser[21]);
        const result = obj.closeBadgeDirectoryScreen();
        state.setState({ pendingCustomizeBadgesSheet: true });
        const obj2 = targetUsername(isViewingOtherUser[22]);
        const obj3 = { screen: constants.PROFILE_CUSTOMIZATION };
        obj2.openUserSettings(obj3);
      }, []);
      const callback2 = obj6.useCallback((badge_id) => {
        if (null != targetUserId) {
          const obj2 = { badgeId: badge_id.badge_id, displayedUserId: tmp, isViewingOtherUser, targetUsername };
          const obj = openBadgeDetailsSheet;
          const result = obj.openBadgeDetailsSheet(obj2);
        }
      }, items12);
      const callback3 = obj6.useCallback(() => {
        const obj = targetUsername(isViewingOtherUser[21]);
        const result = obj.closeBadgeDirectoryScreen();
        const obj2 = targetUsername(isViewingOtherUser[21]);
        const result1 = obj2.openBadgeDirectoryScreen();
      }, []);
      if (!stateFromStores1) {
        let tmp28;
        if (stateFromStores2) {
          const obj5 = { style: tmp.centered, children: items13 };
          const obj7 = { variant: "text-md/semibold", children: intl3.string(targetUsername(1126).t.iufib1) };
          const Text = targetUsername(4886).Text;
          intl3 = targetUsername(1126).intl;
          items13 = [closure_10(Text, obj7), , ];
          const obj8 = { variant: "text-md/normal", color: "text-subtle", children: intl4.string(targetUsername(1126).t.eAn6z2) };
          const Text2 = targetUsername(4886).Text;
          intl4 = targetUsername(1126).intl;
          items13[1] = closure_10(Text2, obj8);
          const obj9 = { variant: "secondary", size: "sm", onPress: callback, text: intl5.string(targetUsername(1126).t["7NqTJn"]) };
          const Button = targetUsername(5594).Button;
          intl5 = targetUsername(1126).intl;
          items13[2] = closure_10(Button, obj9);
          tmp28 = closure_11(closure_5, obj5);
        }
        return tmp28;
      }
      if (stateFromStores1) {
        let tmp36Result2;
        let result1 = (diff - result) / 4;
        const obj12 = { title: formatToPlainStringResult, badges: owned, tileSize: result1, emptyText: stringResult, onPressBadge: callback2, badgeIndicatorIds };
        stringResult = undefined;
        const obj10 = { style: tmp.container, children: items15 };
        const obj11 = { alwaysBounceVertical: false, contentContainerStyle: tmp.content, children: items14 };
        const tmp35 = stateFromStoresArray;
        if (!(null != targetUserId && targetUserId !== stateFromStores)) {
          const intl6 = targetUsername(1126).intl;
          stringResult = intl6.string(targetUsername(1126).t.Qno0jg);
        }
        items14 = [closure_10(closure_14, obj12), ];
        if (!(null != targetUserId && targetUserId !== stateFromStores)) {
          const obj13 = { title: intl7.string(targetUsername(1126).t["0YzU//"]), badges: earnable, tileSize: result1, onPressBadge: callback2, badgeIndicatorIds };
          intl7 = targetUsername(1126).intl;
          tmp36Result = closure_10(closure_14, obj13);
        }
        items14[1] = tmp36Result;
        items15 = [closure_11(tmp35, obj11), ];
        if (null != targetUserId && targetUserId !== stateFromStores) {
          const obj14 = { style: items, children: closure_10(Button3, obj15) };
          obj15 = { variant: "secondary", onPress: callback3, text: intl9.string(targetUsername(1126).t.msyp90) };
          Button3 = targetUsername(5594).Button;
          intl9 = targetUsername(1126).intl;
          tmp36Result2 = closure_10(closure_5, obj14);
        } else {
          tmp36Result2 = owned.length > 0;
          if (tmp36Result2) {
            const obj16 = { style: items, children: closure_10(Button2, obj17) };
            obj17 = { variant: "secondary", onPress: callback1, text: intl8.string(targetUsername(1126).t["6CLLyH"]) };
            Button2 = targetUsername(5594).Button;
            intl8 = targetUsername(1126).intl;
            tmp36Result2 = closure_10(closure_5, obj16);
          }
        }
        items15[1] = tmp36Result2;
        tmp33Result = closure_11(closure_5, obj10);
      } else {
        const obj18 = { style: tmp.centered, children: closure_10(targetUsername(5968).ActivityIndicator, {}) };
        tmp33Result = closure_10(closure_5, obj18);
      }
      tmp28 = tmp33Result;
    }
    const intl = targetUsername(1126).intl;
    formatToPlainStringResult = intl.string(targetUsername(1126).t.UqnlQF);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
size = size_mod;
let result1 = size.fileFinishedImporting("modules/badges/native/BadgeDirectoryView.tsx");

export default tmp6;