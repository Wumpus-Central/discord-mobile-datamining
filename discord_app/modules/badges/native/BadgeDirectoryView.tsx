// discord_app/modules/badges/native/BadgeDirectoryView.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import BadgeDirectoryActionCreators from "../BadgeDirectoryActionCreators.tsx";
import BadgeUtils from "../BadgeUtils.tsx";
import openBadgeDetailsSheet from "openBadgeDetailsSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ProfileCustomizationNavigationStore from "../../profile_customization/ProfileCustomizationNavigationStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import BadgeDirectoryStore from "../BadgeDirectoryStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const UserSettingsSections = fn(1085).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  content: null,
  centered: null,
  section: null,
  grid: null,
  tile: null,
  badgeIndicator: null,
  footer: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.content = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_24,
  gap: nativeDefault.space.PX_48,
};
let obj4 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_24,
  gap: nativeDefault.space.PX_48,
};
obj2.centered = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_16,
  padding: nativeDefault.space.PX_32,
};
let obj5 = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_16,
  padding: nativeDefault.space.PX_32,
};
obj2.section = { gap: nativeDefault.space.PX_16 };
const obj6 = { gap: nativeDefault.space.PX_16 };
obj2.grid = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_12 };
let obj7 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_12 };
obj2.tile = {
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
let size = {
  position: "absolute",
  top: nativeDefault.space.PX_6,
  right: nativeDefault.space.PX_6,
  width: 8,
  height: 8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND,
};
obj2.badgeIndicator = size;
let obj8 = {
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.footer = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
function useTileSize() {}
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BadgeSection(badgeIndicatorIds) {
      const cResult = tileSize(badgeIndicatorIds[11]).c(15);
      ({ title, badges, tileSize } = badgeIndicatorIds);
      ({ emptyText, onPressBadge: tile } = badgeIndicatorIds);
      badgeIndicatorIds = badgeIndicatorIds.badgeIndicatorIds;
      let section = closure_12();
      if (0 === badges.length) {
        if (null == emptyText) {
          return null;
        }
      }
      if (cResult[0] !== title) {
        const obj2 = { variant: "text-md/medium", color: "text-strong", children: title };
        const tmp7 = closure_10(tileSize(tmp2[12]).Text, obj2);
        cResult[0] = title;
        cResult[1] = tmp7;
        let tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === badgeIndicatorIds) {
        if (cResult[3] === badges) {
          if (cResult[4] === emptyText) {
            if (cResult[5] === tile) {
              if (cResult[6] === section.badgeIndicator) {
                if (cResult[7] === section.grid) {
                  if (cResult[8] === section.tile) {
                    if (cResult[9] === tileSize) {
                      if (cResult[11] === section.section) {
                        if (cResult[12] === tmp5) {
                        }
                      }
                      let obj3 = { style: section.section, children: null };
                      let items = [tmp5, cResult[10]];
                      obj3.children = items;
                      const tmp16 = closure_11(closure_5, obj3);
                      section = section.section;
                      cResult[11] = section;
                      cResult[12] = tmp5;
                      cResult[13] = cResult[10];
                      cResult[14] = tmp16;
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (badges.length > 0) {
        const obj4 = {
          style: section.grid,
          children: badges.map((badge) => {
            tileSize = badge;
            let hasItem = badgeIndicatorIds.has(badge.badge_id);
            const obj = { style: null, accessibilityLabel: null, onPress: null, children: null };
            const items = [section.tile];
            const size = { width: tileSize, height: tileSize };
            items[1] = size;
            obj.style = items;
            const name = badge.name;
            if (hasItem) {
              const intl = tmp3(badgeIndicatorIds[14]).intl;
              const _HermesInternal = HermesInternal;
              let combined = "" + name + ", " + intl.string(tmp3(badgeIndicatorIds[14]).t.y2b7CA);
            } else {
              combined = name;
            }
            obj.accessibilityLabel = combined;
            obj.onPress = function onPress() {
              return tile(closure_0);
            };
            const items1 = [closure_1_10(tile(badgeIndicatorIds[15]), { badge, size: 44 })];
            if (hasItem) {
              const obj3 = { style: section.badgeIndicator, "aria-hidden": true };
              hasItem = closure_1_10(closure_1_5, obj3);
            }
            items1[1] = hasItem;
            obj.children = items1;
            return closure_1_11(tileSize(badgeIndicatorIds[13]).PressableScale, obj, badge.badge_id);
          }),
        };
        let tmp10 = closure_10(closure_5, obj4);
      } else {
        const obj5 = { variant: "text-md/medium", color: "text-muted", children: emptyText };
        tmp10 = closure_10(tileSize(tmp2[12]).Text, obj5);
      }
      cResult[2] = badgeIndicatorIds;
      cResult[3] = badges;
      cResult[4] = emptyText;
      cResult[5] = tile;
      cResult[6] = section.badgeIndicator;
      ({ grid: tmp3[7], tile } = section);
      cResult[8] = tile;
      cResult[9] = tileSize;
      cResult[10] = tmp10;
      let obj = tileSize(badgeIndicatorIds[11]);
    }
  : function BadgeSection(children) {
      ({
        badges,
        tileSize: require,
        emptyText,
        onPressBadge: importDefault,
        badgeIndicatorIds: dependencyMap,
      } = children);
      let map = closure_12();
      if (0 === badges.length) {
        if (null == emptyText) {
          return null;
        }
      }
      let obj = { style: map.section, children: null };
      let items = [
        closure_10(Text_Text.Text, { variant: "text-md/medium", color: "text-strong", children: children.title }),
      ];
      if (badges.length > 0) {
        const obj2 = { style: map.grid, children: null };
        map = badges.map;
        obj2.children = map((badge) => {
          const height = badge;
          let hasItem = set.has(badge.badge_id);
          const obj = { style: null, accessibilityLabel: null, onPress: null, children: null };
          const items = [map.tile];
          const size = { width: height, height };
          items[1] = size;
          obj.style = items;
          const name = badge.name;
          if (hasItem) {
            const intl = require("util").intl;
            const _HermesInternal = HermesInternal;
            let combined = "" + name + ", " + intl.string(require("util").t.y2b7CA);
          } else {
            combined = name;
          }
          obj.accessibilityLabel = combined;
          obj.onPress = function onPress() {
            return importDefault(closure_0);
          };
          const items1 = [closure_1_10(require("BadgeCatalogIcon"), { badge, size: 44 })];
          if (hasItem) {
            const obj3 = { style: map.badgeIndicator, "aria-hidden": true };
            hasItem = closure_1_10(closure_1_5, obj3);
          }
          items1[1] = hasItem;
          obj.children = items1;
          return closure_1_11(require("native").PressableScale, obj, badge.badge_id);
        });
        let tmp4Result = closure_10(closure_5, obj2);
      } else {
        let obj3 = { variant: "text-md/medium", color: "text-muted", children: emptyText };
        tmp4Result = closure_10(Text_Text.Text, obj3);
      }
      items[1] = tmp4Result;
      obj.children = items;
      closure_11(closure_5, obj);
    };
ReactCompilerGating = fn(558);
let obj9 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
size = fn(2);
let result1 = size.fileFinishedImporting("modules/badges/native/BadgeDirectoryView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function BadgeDirectoryView(arg0) {
      const cResult = targetUsername(576).c(80);
      ({ targetUserId, targetUsername } = arg0);
      const tmp4 = closure_12();
      if (typeof useTileSize === "function") {
        const diff = stateFromStores(1496)().width - 2 * stateFromStores(587).space.PX_16;
        let result = 3 * stateFromStores(587).space.PX_12;
        const sum = stateFromStores(1630)().bottom + stateFromStores(587).space.PX_16;
        if (cResult[0] !== sum) {
          let obj2 = { paddingBottom: sum };
          cResult[0] = sum;
          cResult[1] = obj2;
          let tmp9 = obj2;
        } else {
          tmp9 = cResult[1];
        }
        if (cResult[2] === tmp4.footer) {
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const items = [UserStore];
            class U {
              constructor() {
                currentUser = closure_1_7.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            cResult[5] = items;
            cResult[6] = U;
            let tmp13 = U;
            let tmp12 = items;
          } else {
            tmp12 = cResult[5];
            tmp13 = cResult[6];
          }
          stateFromStores = targetUsername(504).useStateFromStores(tmp12, tmp13);
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
                currentUser = closure_1_7.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            cResult[7] = items1;
            let tmp19 = items1;
          } else {
            tmp19 = cResult[7];
          }
          if (cResult[8] !== tmp18) {
            const fn = function z() {
              if (null != targetUserId) {
                let badges = BadgeDirectoryStore.getBadges(tmp);
              } else {
                badges = [];
              }
              return badges;
            };
            const items2 = [tmp18];
            class U {
              constructor() {
                currentUser = closure_1_7.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            cResult[8] = tmp18;
            cResult[9] = fn;
            cResult[10] = items2;
            let tmp22 = items2;
            let tmp21 = fn;
          } else {
            tmp21 = cResult[9];
            tmp22 = cResult[10];
          }
          const tmpResult = targetUsername(504);
          const stateFromStoresArray = targetUsername(504).useStateFromStoresArray(tmp19, tmp21, tmp22);
          const _Symbol3 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const items3 = [BadgeDirectoryStore];
            class U {
              constructor() {
                currentUser = closure_1_7.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            cResult[11] = items3;
            let tmp24 = items3;
          } else {
            tmp24 = cResult[11];
          }
          if (cResult[12] !== tmp18) {
            class L {
              constructor() {
                hasCatalogForResult = null != targetUserId;
                if (hasCatalogForResult) {
                  tmp3 = closure_8;
                  hasCatalogForResult = closure_8.hasCatalogFor(tmp);
                }
                return hasCatalogForResult;
              }
            }
            const items4 = [tmp18];
            class U {
              constructor() {
                currentUser = closure_1_7.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            cResult[12] = tmp18;
            cResult[13] = L;
            cResult[14] = items4;
            let tmp27 = items4;
          } else {
            class L {
              constructor() {
                hasCatalogForResult = null != targetUserId;
                if (hasCatalogForResult) {
                  tmp3 = closure_8;
                  hasCatalogForResult = closure_8.hasCatalogFor(tmp);
                }
                return hasCatalogForResult;
              }
            }
            tmp27 = cResult[14];
          }
          const tmpResult5 = targetUsername(504);
          const stateFromStores1 = targetUsername(504).useStateFromStores(tmp24, L, tmp27);
          const _Symbol4 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            class L {
              constructor() {
                hasCatalogForResult = null != targetUserId;
                if (hasCatalogForResult) {
                  tmp3 = closure_8;
                  hasCatalogForResult = closure_8.hasCatalogFor(tmp);
                }
                return hasCatalogForResult;
              }
            }
            const items5 = [BadgeDirectoryStore];
            class U {
              constructor() {
                currentUser = closure_1_7.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            cResult[15] = items5;
            const tmp29 = items5;
          } else {
            class L {
              constructor() {
                hasCatalogForResult = null != targetUserId;
                if (hasCatalogForResult) {
                  tmp3 = closure_8;
                  hasCatalogForResult = closure_8.hasCatalogFor(tmp);
                }
                return hasCatalogForResult;
              }
            }
          }
          if (cResult[16] !== tmp18) {
            class L {
              constructor() {
                hasCatalogForResult = null != targetUserId;
                if (hasCatalogForResult) {
                  tmp3 = closure_8;
                  hasCatalogForResult = closure_8.hasCatalogFor(tmp);
                }
                return hasCatalogForResult;
              }
            }
            const items6 = [tmp18];
            class U {
              constructor() {
                currentUser = closure_1_7.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            cResult[16] = tmp18;
            cResult[17] = tmp32;
            cResult[18] = items6;
            let tmp31 = items6;
          } else {
            class L {
              constructor() {
                hasCatalogForResult = null != targetUserId;
                if (hasCatalogForResult) {
                  tmp3 = closure_8;
                  hasCatalogForResult = closure_8.hasCatalogFor(tmp);
                }
                return hasCatalogForResult;
              }
            }
            tmp31 = cResult[18];
          }
          const tmpResult6 = targetUsername(504);
          const stateFromStores2 = targetUsername(504).useStateFromStores(tmp29, tmp32, tmp31);
          if (cResult[19] !== tmp18) {
            class G {
              constructor() {
                tmp = targetUserId;
                if (null != targetUserId) {
                  obj = closure_8;
                  tmp2 = closure_8.hasCatalogFor(tmp) && !obj.isCatalogStaleFor(tmp);
                  if (!tmp2) {
                    tmp3 = closure_0;
                    tmp4 = closure_2;
                    obj2 = closure_0(closure_2[18]);
                    badgeDirectory = obj2.fetchBadgeDirectory(tmp);
                  }
                }
                return;
              }
            }
            const items7 = [tmp18];
            class U {
              constructor() {
                currentUser = closure_1_7.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            cResult[19] = tmp18;
            cResult[20] = G;
            cResult[21] = items7;
            let tmp35 = items7;
          } else {
            class G {
              constructor() {
                tmp = targetUserId;
                if (null != targetUserId) {
                  obj = closure_8;
                  tmp2 = closure_8.hasCatalogFor(tmp) && !obj.isCatalogStaleFor(tmp);
                  if (!tmp2) {
                    tmp3 = closure_0;
                    tmp4 = closure_2;
                    obj2 = closure_0(closure_2[18]);
                    badgeDirectory = obj2.fetchBadgeDirectory(tmp);
                  }
                }
                return;
              }
            }
            tmp35 = cResult[21];
          }
          const effect = targetUserId.useEffect(G, tmp35);
          if (cResult[22] === stateFromStores) {
            class G {
              constructor() {
                tmp = targetUserId;
                if (null != targetUserId) {
                  obj = closure_8;
                  tmp2 = closure_8.hasCatalogFor(tmp) && !obj.isCatalogStaleFor(tmp);
                  if (!tmp2) {
                    tmp3 = closure_0;
                    tmp4 = closure_2;
                    obj2 = closure_0(closure_2[18]);
                    badgeDirectory = obj2.fetchBadgeDirectory(tmp);
                  }
                }
                return;
              }
            }
            const effect1 = obj7.useEffect(Q, tmp38);
            if (cResult[26] !== stateFromStoresArray) {
              class G {
                constructor() {
                  tmp = targetUserId;
                  if (null != targetUserId) {
                    obj = closure_8;
                    tmp2 = closure_8.hasCatalogFor(tmp) && !obj.isCatalogStaleFor(tmp);
                    if (!tmp2) {
                      tmp3 = closure_0;
                      tmp4 = closure_2;
                      obj2 = closure_0(closure_2[18]);
                      badgeDirectory = obj2.fetchBadgeDirectory(tmp);
                    }
                  }
                  return;
                }
              }
              const directoryBadges = obj8.getDirectoryBadges(stateFromStoresArray);
              class U {
                constructor() {
                  currentUser = closure_1_7.getCurrentUser();
                  id = undefined;
                  if (currentUser != null) {
                    id = currentUser.id;
                  }
                  return id;
                }
              }
              cResult[27] = directoryBadges;
              const tmp40 = directoryBadges;
            } else {
              class G {
                constructor() {
                  tmp = targetUserId;
                  if (null != targetUserId) {
                    obj = closure_8;
                    tmp2 = closure_8.hasCatalogFor(tmp) && !obj.isCatalogStaleFor(tmp);
                    if (!tmp2) {
                      tmp3 = closure_0;
                      tmp4 = closure_2;
                      obj2 = closure_0(closure_2[18]);
                      badgeDirectory = obj2.fetchBadgeDirectory(tmp);
                    }
                  }
                  return;
                }
              }
            }
            class U {
              constructor() {
                currentUser = closure_1_7.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            const owned = tmp40.owned;
            if (cResult[28] === stateFromStoresArray) {
              class G {
                constructor() {
                  tmp = targetUserId;
                  if (null != targetUserId) {
                    obj = closure_8;
                    tmp2 = closure_8.hasCatalogFor(tmp) && !obj.isCatalogStaleFor(tmp);
                    if (!tmp2) {
                      tmp3 = closure_0;
                      tmp4 = closure_2;
                      obj2 = closure_0(closure_2[18]);
                      badgeDirectory = obj2.fetchBadgeDirectory(tmp);
                    }
                  }
                  return;
                }
              }
              const badgeIndicatorIds = targetUsername(10554).useBadgeDirectoryBadgeIndicators(tmp43).badgeIndicatorIds;
              class U {
                constructor() {
                  currentUser = closure_1_7.getCurrentUser();
                  id = undefined;
                  if (currentUser != null) {
                    id = currentUser.id;
                  }
                  return id;
                }
              }
              if (!tmp17) {
                class G {
                  constructor() {
                    tmp = targetUserId;
                    if (null != targetUserId) {
                      obj = closure_8;
                      tmp2 = closure_8.hasCatalogFor(tmp) && !obj.isCatalogStaleFor(tmp);
                      if (!tmp2) {
                        tmp3 = closure_0;
                        tmp4 = closure_2;
                        obj2 = closure_0(closure_2[18]);
                        badgeDirectory = obj2.fetchBadgeDirectory(tmp);
                      }
                    }
                    return;
                  }
                }
                let stringResult = obj11.string(targetUsername(1126).t.UqnlQF);
                class U {
                  constructor() {
                    currentUser = closure_1_7.getCurrentUser();
                    id = undefined;
                    if (currentUser != null) {
                      id = currentUser.id;
                    }
                    return id;
                  }
                }
                cResult[31] = tmp17;
                cResult[32] = targetUsername;
                cResult[33] = stringResult;
              } else {
                class G {
                  constructor() {
                    tmp = targetUserId;
                    if (null != targetUserId) {
                      obj = closure_8;
                      tmp2 = closure_8.hasCatalogFor(tmp) && !obj.isCatalogStaleFor(tmp);
                      if (!tmp2) {
                        tmp3 = closure_0;
                        tmp4 = closure_2;
                        obj2 = closure_0(closure_2[18]);
                        badgeDirectory = obj2.fetchBadgeDirectory(tmp);
                      }
                    }
                    return;
                  }
                }
              }
              const intl = targetUsername(1126).intl;
              const obj3 = { username: targetUsername };
              stringResult = intl.formatToPlainString(targetUsername(1126).t.EIcwoe, obj3);
              const tmpResult8 = targetUsername(10554);
            }
            const obj4 = { badges: stateFromStoresArray, enabled: !tmp17 };
            cResult[28] = stateFromStoresArray;
            cResult[29] = !tmp17;
            cResult[30] = obj4;
            tmp43 = obj4;
          }
          class Q {
            constructor() {
              tmp = closure_2;
              if (closure_2) {
                tmp2 = closure_1;
                tmp3 = null;
                tmp = null != closure_1;
              }
              if (tmp) {
                tmp4 = closure_8;
                tmp5 = closure_1;
                if (!closure_8.hasCatalogFor(closure_1)) {
                  tmp6 = closure_0;
                  tmp7 = closure_2;
                  obj = closure_0(closure_2[18]);
                  badgeDirectory = obj.fetchBadgeDirectory(tmp5);
                }
              }
              return;
            }
          }
          const items8 = [stateFromStores, null != targetUserId && targetUserId !== stateFromStores];
          cResult[22] = stateFromStores;
          cResult[23] = null != targetUserId && targetUserId !== stateFromStores;
          cResult[24] = Q;
          cResult[25] = items8;
          obj7 = targetUserId;
          tmp38 = items8;
          const tmpResult7 = targetUsername(504);
        }
        const items9 = [tmp4.footer, tmp9];
        cResult[2] = tmp4.footer;
        cResult[3] = tmp9;
        cResult[4] = items9;
      } else {
        class G {
          constructor() {
            tmp = targetUserId;
            if (null != targetUserId) {
              obj = closure_8;
              tmp2 = closure_8.hasCatalogFor(tmp) && !obj.isCatalogStaleFor(tmp);
              if (!tmp2) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj2 = closure_0(closure_2[18]);
                badgeDirectory = obj2.fetchBadgeDirectory(tmp);
              }
            }
            return;
          }
        }
        throw new TypeError("Trying to call a non-function");
      }
      let obj = targetUsername(576);
    }
  : function BadgeDirectoryView(arg0) {
      ({ targetUserId, targetUsername } = arg0);
      let stateFromStores;
      dependencyMap = undefined;
      targetUserId = undefined;
      let stateFromStoresArray;
      let tmp = closure_12();
      if (typeof useTileSize === "function") {
        let stringResult1 = dependencyMap;
        const diff = stateFromStores(1496)().width - 2 * stateFromStores(587).space.PX_16;
        let result = 3 * stateFromStores(587).space.PX_12;
        let items = [tmp.footer];
        let obj = { paddingBottom: stateFromStores(1630)().bottom + stateFromStores(587).space.PX_16 };
        items[1] = obj;
        const items1 = [UserStore];
        stateFromStores = targetUsername(504).useStateFromStores(items1, () => {
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
        let obj2 = targetUsername(504);
        const items2 = [BadgeDirectoryStore];
        const items3 = [tmp11];
        stateFromStoresArray = targetUsername(504).useStateFromStoresArray(
          items2,
          () => {
            if (null != targetUserId) {
              let badges = BadgeDirectoryStore.getBadges(tmp);
            } else {
              badges = [];
            }
            return badges;
          },
          items3,
        );
        const tmp6Result = targetUsername(504);
        const items4 = [BadgeDirectoryStore];
        const items5 = [tmp11];
        const stateFromStores1 = targetUsername(504).useStateFromStores(
          items4,
          () => {
            let hasCatalogForResult = null != targetUserId;
            if (hasCatalogForResult) {
              hasCatalogForResult = BadgeDirectoryStore.hasCatalogFor(tmp);
            }
            return hasCatalogForResult;
          },
          items5,
        );
        const tmp6Result4 = targetUsername(504);
        const items6 = [BadgeDirectoryStore];
        const items7 = [tmp11];
        const items8 = [tmp11];
        const stateFromStores2 = targetUsername(504).useStateFromStores(
          items6,
          () => BadgeDirectoryStore.hasCatalogFetchErrorFor(targetUserId),
          items7,
        );
        const effect = targetUserId.useEffect(() => {
          if (null != targetUserId) {
            if (!tmp2) {
              const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(targetUserId);
            }
            tmp2 =
              BadgeDirectoryStore.hasCatalogFor(targetUserId) && !BadgeDirectoryStore.isCatalogStaleFor(targetUserId);
          }
        }, items8);
        const items9 = [stateFromStores, null != targetUserId && targetUserId !== stateFromStores];
        const effect1 = targetUserId.useEffect(() => {
          let tmp = closure_2;
          if (closure_2) {
            tmp = null != stateFromStores;
          }
          if (tmp) {
            if (!BadgeDirectoryStore.hasCatalogFor(stateFromStores)) {
              const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(stateFromStores);
            }
          }
        }, items9);
        const items10 = [stateFromStoresArray];
        const memo = targetUserId.useMemo(() => BadgeUtils.getDirectoryBadges(stateFromStoresArray), items10);
        ({ owned, earnable } = memo);
        const tmp6Result5 = targetUsername(504);
        const obj3 = { badges: stateFromStoresArray, enabled: null };
        let tmp33Result = !tmp10;
        obj3.enabled = tmp33Result;
        const badgeIndicatorIds = targetUsername(10554).useBadgeDirectoryBadgeIndicators(obj3).badgeIndicatorIds;
        if (null != targetUserId && targetUserId !== stateFromStores) {
          if (null != targetUsername) {
            const intl2 = targetUsername(1126).intl;
            const obj4 = { username: targetUsername };
            let formatToPlainStringResult = intl2.formatToPlainString(targetUsername(1126).t.EIcwoe, obj4);
          }
          const items11 = [tmp11];
          const callback = obj6.useCallback(() => {
            if (null != targetUserId) {
              const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(tmp, { isRetry: true });
            }
          }, items11);
          const items12 = [tmp11, tmp10, targetUsername];
          const callback1 = obj6.useCallback(() => {
            const result = targetUsername(isViewingOtherUser[21]).closeBadgeDirectoryScreen();
            state.setState({ pendingCustomizeBadgesSheet: true });
            const obj = targetUsername(isViewingOtherUser[21]);
            targetUsername(isViewingOtherUser[22]).openUserSettings({ screen: constants.PROFILE_CUSTOMIZATION });
          }, []);
          const callback2 = obj6.useCallback((badge_id) => {
            if (null != targetUserId) {
              const obj2 = { badgeId: badge_id.badge_id, displayedUserId: tmp, isViewingOtherUser, targetUsername };
              const result = openBadgeDetailsSheet.openBadgeDetailsSheet(obj2);
            }
          }, items12);
          let string = obj6.useCallback(() => {
            const result = targetUsername(isViewingOtherUser[21]).closeBadgeDirectoryScreen();
            const obj = targetUsername(isViewingOtherUser[21]);
            const result1 = targetUsername(isViewingOtherUser[21]).openBadgeDirectoryScreen();
          }, []);
          if (!stateFromStores1) {
            if (stateFromStores2) {
              const obj5 = { style: tmp.centered, children: null };
              const obj7 = { variant: "text-md/semibold", children: null };
              const intl3 = targetUsername(1126).intl;
              obj7.children = intl3.string(targetUsername(1126).t.iufib1);
              const items13 = [closure_10(targetUsername(5086).Text, obj7), ,];
              const obj8 = { variant: "text-md/normal", color: "text-subtle", children: null };
              const intl4 = targetUsername(1126).intl;
              obj8.children = intl4.string(targetUsername(1126).t.eAn6z2);
              items13[1] = closure_10(targetUsername(5086).Text, obj8);
              const obj9 = { variant: "secondary", size: "sm", onPress: callback, text: null };
              const intl5 = targetUsername(1126).intl;
              obj9.text = intl5.string(targetUsername(1126).t["7NqTJn"]);
              items13[2] = closure_10(targetUsername(5375).Button, obj9);
              obj5.children = items13;
              return closure_11(closure_5, obj5);
            }
          }
          if (!stateFromStores1) {
            const obj10 = { style: tmp.centered, children: closure_10(targetUsername(6158).ActivityIndicator, {}) };
            closure_10(closure_5, obj10);
          }
          let result1 = (diff - result) / 4;
          const obj11 = { style: tmp.container, children: null };
          const obj12 = { alwaysBounceVertical: false, contentContainerStyle: tmp.content, children: null };
          const obj13 = {
            title: formatToPlainStringResult,
            badges: owned,
            tileSize: result1,
            emptyText: null,
            onPressBadge: null,
            badgeIndicatorIds: null,
          };
          let stringResult;
          if (!tmp10) {
            const intl6 = targetUsername(1126).intl;
            stringResult = intl6.string(targetUsername(1126).t.Qno0jg);
          }
          obj13.emptyText = stringResult;
          obj13.onPressBadge = callback2;
          obj13.badgeIndicatorIds = badgeIndicatorIds;
          const items14 = [closure_10(closure_14, obj13)];
          if (!tmp10) {
            const obj14 = { title: null, badges: null, tileSize: null, onPressBadge: null, badgeIndicatorIds: null };
            const intl7 = targetUsername(1126).intl;
            obj14.title = intl7.string(targetUsername(1126).t["0YzU//"]);
            obj14.badges = earnable;
            obj14.tileSize = result1;
            obj14.onPressBadge = callback2;
            obj14.badgeIndicatorIds = badgeIndicatorIds;
            tmp33Result = closure_10(closure_14, obj14);
          }
          items14[1] = tmp33Result;
          obj12.children = items14;
          const items15 = [closure_11(stateFromStoresArray, obj12)];
          if (tmp10) {
            const obj15 = { style: items, children: null };
            const obj16 = { variant: "secondary", onPress: string, text: null };
            const intl9 = targetUsername(1126).intl;
            string = intl9.string;
            stringResult1 = string(targetUsername(1126).t.msyp90);
            obj16.text = stringResult1;
            items = closure_10(targetUsername(5375).Button, obj16);
            obj15.children = items;
            let tmp33Result2 = closure_10(closure_5, obj15);
          } else {
            tmp33Result2 = owned.length > 0;
            if (tmp33Result2) {
              const obj17 = { style: items, children: null };
              const obj18 = { variant: "secondary", onPress: callback1, text: null };
              const intl8 = targetUsername(1126).intl;
              obj18.text = intl8.string(targetUsername(1126).t["6CLLyH"]);
              obj17.children = closure_10(targetUsername(5375).Button, obj18);
              tmp33Result2 = closure_10(closure_5, obj17);
            }
          }
          items15[1] = tmp33Result2;
          obj11.children = items15;
          closure_11(closure_5, obj11);
        }
        const intl = targetUsername(1126).intl;
        formatToPlainStringResult = intl.string(targetUsername(1126).t.UqnlQF);
        const tmp6Result6 = targetUsername(10554);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
