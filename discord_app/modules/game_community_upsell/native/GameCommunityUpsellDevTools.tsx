// discord_app/modules/game_community_upsell/native/GameCommunityUpsellDevTools.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import LocalAppDetectionStore from "../../local_app_detection/native/LocalAppDetectionStore.tsx";
import MobileGameCommunitiesStore from "MobileGameCommunitiesStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, scrollView: { flex: 1 }, section: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.section = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = stateFromStores(576).c(73);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocalAppDetectionStore];
    const fn = function s() {
      return LocalAppDetectionStore.getUserAgnosticState();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = stateFromStores(576);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [MobileGameCommunitiesStore];
    class T {
      constructor() {
        obj = { guildsCount: closure_1_7.getPresentableUpsellGuilds().length, dismissedCount: closure_1_7.getDismissedGuildIds().size, lastFetchedAt: closure_1_7.getLastFetchedAt() };
        return obj;
      }
    }
    cResult[2] = items1;
    cResult[3] = T;
    let tmp10 = T;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = stateFromStores(504);
  const stateFromStoresObject = stateFromStores(504).useStateFromStoresObject(tmp9, tmp10);
  let str = stateFromStoresObject.lastFetchedAt;
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === str) {
      if (cResult[6] === tmp4.container) {
        if (cResult[7] === tmp4.scrollView) {
          if (cResult[8] === tmp4.section) {
            class T {
              constructor() {
                obj = { guildsCount: closure_1_7.getPresentableUpsellGuilds().length, dismissedCount: closure_1_7.getDismissedGuildIds().size, lastFetchedAt: closure_1_7.getLastFetchedAt() };
                return obj;
              }
            }
            dependencyMap = tmp18;
            if (cResult[24] === cResult[9]) {
              if (cResult[25] === tmp19) {
                if (cResult[26] === tmp20) {
                  if (cResult[27] === tmp21) {
                    let tmp33 = cResult[28];
                  }
                  if (cResult[29] === tmp15) {
                    if (cResult[30] === tmp33) {
                      if (cResult[31] === tmp22) {
                        let tmp36 = cResult[32];
                      }
                      const _String = String;
                      class T {
                        constructor() {
                          obj = { guildsCount: closure_1_7.getPresentableUpsellGuilds().length, dismissedCount: closure_1_7.getDismissedGuildIds().size, lastFetchedAt: closure_1_7.getLastFetchedAt() };
                          return obj;
                        }
                      }
                      if (cResult[33] !== tmp40) {
                        { label: "Presentable Guilds", subLabel: null, disabled: true }.subLabel = tmp40;
                        class T {
                          constructor() {
                            obj = { guildsCount: closure_1_7.getPresentableUpsellGuilds().length, dismissedCount: closure_1_7.getDismissedGuildIds().size, lastFetchedAt: closure_1_7.getLastFetchedAt() };
                            return obj;
                          }
                        }
                        cResult[33] = tmp40;
                        cResult[34] = tmp43;
                        let tmp41 = tmp43;
                        const obj2 = { label: "Presentable Guilds", subLabel: null, disabled: true };
                      } else {
                        tmp41 = cResult[34];
                      }
                      const _String2 = String;
                      const StringResult = String(tmp13);
                      if (cResult[35] !== StringResult) {
                        { label: "Dismissed Guilds", subLabel: null, disabled: true }.subLabel = StringResult;
                        class T {
                          constructor() {
                            obj = { guildsCount: closure_1_7.getPresentableUpsellGuilds().length, dismissedCount: closure_1_7.getDismissedGuildIds().size, lastFetchedAt: closure_1_7.getLastFetchedAt() };
                            return obj;
                          }
                        }
                        cResult[35] = StringResult;
                        cResult[36] = tmp47;
                        let tmp45 = tmp47;
                        const obj3 = { label: "Dismissed Guilds", subLabel: null, disabled: true };
                      } else {
                        tmp45 = cResult[36];
                      }
                      if (cResult[37] !== tmp17) {
                        { label: "Last Fetched", subLabel: null, disabled: true }.subLabel = tmp17;
                        class T {
                          constructor() {
                            obj = { guildsCount: closure_1_7.getPresentableUpsellGuilds().length, dismissedCount: closure_1_7.getDismissedGuildIds().size, lastFetchedAt: closure_1_7.getLastFetchedAt() };
                            return obj;
                          }
                        }
                        cResult[37] = tmp17;
                        cResult[38] = tmp50;
                        let tmp48 = tmp50;
                        const obj4 = { label: "Last Fetched", subLabel: null, disabled: true };
                      } else {
                        tmp48 = cResult[38];
                      }
                      if (cResult[39] === tmp41) {
                        if (cResult[40] === tmp45) {
                          if (cResult[41] === tmp48) {
                            let tmp51 = cResult[42];
                          }
                          if (cResult[43] === tmp4.section) {
                            if (cResult[44] === tmp51) {
                              let tmp54 = cResult[45];
                            }
                            const _Symbol = Symbol;
                            class T {
                              constructor() {
                                obj = { guildsCount: closure_1_7.getPresentableUpsellGuilds().length, dismissedCount: closure_1_7.getDismissedGuildIds().size, lastFetchedAt: closure_1_7.getLastFetchedAt() };
                                return obj;
                              }
                            }
                            if (cResult[48] !== tmp18) {
                              const obj5 = { label: "Refresh Upsell Guilds", subLabel: "Redects games and suggested guilds", onPress: tmp18, icon: null, trailing: null };
                              class T {
                                constructor() {
                                  obj = { guildsCount: closure_1_7.getPresentableUpsellGuilds().length, dismissedCount: closure_1_7.getDismissedGuildIds().size, lastFetchedAt: closure_1_7.getLastFetchedAt() };
                                  return obj;
                                }
                              }
                              obj5.trailing = tmp58;
                              const tmp61 = closure_8(tmp(5993).TableRow, obj5);
                              cResult[48] = tmp18;
                              cResult[49] = tmp61;
                              let tmp59 = tmp61;
                            } else {
                              tmp59 = cResult[49];
                            }
                            if (cResult[50] !== tmp18) {
                              class Z {
                                constructor() {
                                  result = closure_7.DEV_clearDismissedGuilds();
                                  tmp2 = closure_1();
                                  return;
                                }
                              }
                              cResult[50] = tmp18;
                              class T {
                                constructor() {
                                  obj = { guildsCount: closure_1_7.getPresentableUpsellGuilds().length, dismissedCount: closure_1_7.getDismissedGuildIds().size, lastFetchedAt: closure_1_7.getLastFetchedAt() };
                                  return obj;
                                }
                              }
                              cResult[51] = Z;
                            } else {
                              class Z {
                                constructor() {
                                  result = closure_7.DEV_clearDismissedGuilds();
                                  tmp2 = closure_1();
                                  return;
                                }
                              }
                            }
                            const _Symbol2 = Symbol;
                            if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
                              class Z {
                                constructor() {
                                  result = closure_7.DEV_clearDismissedGuilds();
                                  tmp2 = closure_1();
                                  return;
                                }
                              }
                              const tmp65 = closure_8(tmp(14778).RefreshIcon, {});
                              const tmp66 = closure_8(tmp(6000).TableRowArrow, {});
                              class T {
                                constructor() {
                                  obj = { guildsCount: closure_1_7.getPresentableUpsellGuilds().length, dismissedCount: closure_1_7.getDismissedGuildIds().size, lastFetchedAt: closure_1_7.getLastFetchedAt() };
                                  return obj;
                                }
                              }
                              cResult[52] = tmp65;
                              cResult[53] = tmp66;
                              let tmp64 = tmp66;
                            } else {
                              class Z {
                                constructor() {
                                  result = closure_7.DEV_clearDismissedGuilds();
                                  tmp2 = closure_1();
                                  return;
                                }
                              }
                              tmp64 = cResult[53];
                            }
                            if (cResult[54] !== Z) {
                              class Z {
                                constructor() {
                                  result = closure_7.DEV_clearDismissedGuilds();
                                  tmp2 = closure_1();
                                  return;
                                }
                              }
                              const obj6 = { label: "Clear Dismissed Guilds", subLabel: "Reset dismissed guild IDs so all guilds show again", onPress: Z, icon: null, trailing: null };
                              class T {
                                constructor() {
                                  obj = { guildsCount: closure_1_7.getPresentableUpsellGuilds().length, dismissedCount: closure_1_7.getDismissedGuildIds().size, lastFetchedAt: closure_1_7.getLastFetchedAt() };
                                  return obj;
                                }
                              }
                              obj6.trailing = tmp64;
                              const tmp68 = closure_8(tmp(5993).TableRow, obj6);
                              cResult[54] = Z;
                              cResult[55] = tmp68;
                            } else {
                              class Z {
                                constructor() {
                                  result = closure_7.DEV_clearDismissedGuilds();
                                  tmp2 = closure_1();
                                  return;
                                }
                              }
                            }
                            const _Symbol3 = Symbol;
                            if (cResult[56] === Symbol.for("react.memo_cache_sentinel")) {
                              class Z {
                                constructor() {
                                  result = closure_7.DEV_clearDismissedGuilds();
                                  tmp2 = closure_1();
                                  return;
                                }
                              }
                              const obj7 = {
                                label: "Clear All Store State",
                                subLabel: "Reset all MobileGameCommunitiesStore state (guilds, dismissed, fetch cache)",
                                onPress() {
                                                              MobileGameCommunitiesStore.DEV_clearState();
                                                            },
                                icon: null,
                                trailing: null
                              };
                              class T {
                                constructor() {
                                  obj = { guildsCount: closure_1_7.getPresentableUpsellGuilds().length, dismissedCount: closure_1_7.getDismissedGuildIds().size, lastFetchedAt: closure_1_7.getLastFetchedAt() };
                                  return obj;
                                }
                              }
                              obj7.icon = closure_8(tmp(14778).RefreshIcon, {});
                              obj7.trailing = closure_8(tmp(6000).TableRowArrow, {});
                              const tmp71 = closure_8(tmp70, obj7);
                              cResult[56] = tmp71;
                              const tmp69 = tmp71;
                            } else {
                              class Z {
                                constructor() {
                                  result = closure_7.DEV_clearDismissedGuilds();
                                  tmp2 = closure_1();
                                  return;
                                }
                              }
                            }
                            if (cResult[57] === tmp59) {
                              class Z {
                                constructor() {
                                  result = closure_7.DEV_clearDismissedGuilds();
                                  tmp2 = closure_1();
                                  return;
                                }
                              }
                              if (cResult[60] === tmp4.section) {
                                class Z {
                                  constructor() {
                                    result = closure_7.DEV_clearDismissedGuilds();
                                    tmp2 = closure_1();
                                    return;
                                  }
                                }
                                if (cResult[63] === tmp16) {
                                  class Z {
                                    constructor() {
                                      result = closure_7.DEV_clearDismissedGuilds();
                                      tmp2 = closure_1();
                                      return;
                                    }
                                  }
                                }
                                class T {
                                  constructor() {
                                    obj = { guildsCount: closure_1_7.getPresentableUpsellGuilds().length, dismissedCount: closure_1_7.getDismissedGuildIds().size, lastFetchedAt: closure_1_7.getLastFetchedAt() };
                                    return obj;
                                  }
                                }
                                tmp80[0] = tmp23;
                                const items2 = [tmp36, tmp54, tmp75];
                                tmp80[1] = items2;
                                const tmp81 = closure_9(tmp16, tmp80);
                                cResult[63] = tmp16;
                                cResult[64] = tmp36;
                                cResult[65] = tmp54;
                                cResult[66] = tmp75;
                                cResult[67] = tmp23;
                                cResult[68] = tmp81;
                              }
                              class T {
                                constructor() {
                                  obj = { guildsCount: closure_1_7.getPresentableUpsellGuilds().length, dismissedCount: closure_1_7.getDismissedGuildIds().size, lastFetchedAt: closure_1_7.getLastFetchedAt() };
                                  return obj;
                                }
                              }
                              const obj8 = { style: tmp4.section, children: tmp72 };
                              const tmp77 = closure_8(closure_4, obj8);
                              cResult[60] = tmp4.section;
                              cResult[61] = tmp72;
                              cResult[62] = tmp77;
                            }
                            const obj9 = { title: "Actions", hasIcons: true, children: null };
                            const items3 = [tmp59, tmp67, tmp69];
                            obj9.children = items3;
                            const tmp74 = closure_9(tmp(6074).TableRowGroup, obj9);
                            cResult[57] = tmp59;
                            cResult[58] = tmp67;
                            cResult[59] = tmp74;
                          }
                          class T {
                            constructor() {
                              obj = { guildsCount: closure_1_7.getPresentableUpsellGuilds().length, dismissedCount: closure_1_7.getDismissedGuildIds().size, lastFetchedAt: closure_1_7.getLastFetchedAt() };
                              return obj;
                            }
                          }
                          const obj10 = { style: tmp4.section, children: tmp51 };
                          const tmp56 = closure_8(closure_4, obj10);
                          cResult[43] = tmp4.section;
                          cResult[44] = tmp51;
                          cResult[45] = tmp56;
                          tmp54 = tmp56;
                        }
                      }
                      const obj11 = { title: "Store State", hasIcons: false, children: null };
                      const items4 = [tmp41, tmp45, tmp48];
                      obj11.children = items4;
                      const tmp53 = closure_9(tmp(6074).TableRowGroup, obj11);
                      cResult[39] = tmp41;
                      cResult[40] = tmp45;
                      cResult[41] = tmp48;
                      cResult[42] = tmp53;
                      tmp51 = tmp53;
                    }
                  }
                  class T {
                    constructor() {
                      obj = { guildsCount: closure_1_7.getPresentableUpsellGuilds().length, dismissedCount: closure_1_7.getDismissedGuildIds().size, lastFetchedAt: closure_1_7.getLastFetchedAt() };
                      return obj;
                    }
                  }
                  tmp38[0] = tmp22;
                  tmp38[1] = tmp33;
                  const tmp39 = closure_8(tmp15, tmp38);
                  cResult[29] = tmp15;
                  cResult[30] = tmp33;
                  cResult[31] = tmp22;
                  cResult[32] = tmp39;
                  tmp36 = tmp39;
                }
              }
            }
            const obj12 = { title: cResult[15], hasIcons: cResult[16], children: cResult[17] };
            const tmp35 = closure_8(cResult[9], obj12);
            cResult[24] = cResult[9];
            cResult[25] = cResult[15];
            cResult[26] = cResult[16];
            cResult[27] = cResult[17];
            cResult[28] = tmp35;
            tmp33 = tmp35;
          }
        }
      }
    }
  }
  const entries = Object.entries(tmp(15451).DETECTABLE_GAME_TO_APPLICATION_ID_MAP);
  const mapped = entries.map((item) => {
    const tmp = _slicedToArray(item, 2);
    const first = tmp[0];
    const obj = { detectableAppName: first, gameId: tmp[1], detected: null, lastScannedAt: null };
    let flag;
    if (stateFromStores.apps[first] != null) {
      flag = tmp3.detected;
    }
    if (flag == null) {
      flag = false;
    }
    obj.detected = flag;
    let lastScannedAt;
    if (stateFromStores.apps[first] != null) {
      lastScannedAt = tmp3.lastScannedAt;
    }
    obj.lastScannedAt = lastScannedAt;
    return obj;
  });
  if (cResult[21] !== str) {
    class Z {
      constructor() {
        result = closure_7.DEV_clearDismissedGuilds();
        tmp2 = closure_1();
        return;
      }
    }
    let str2 = "Never";
    if (str > 0) {
      class Z {
        constructor() {
          result = closure_7.DEV_clearDismissedGuilds();
          tmp2 = closure_1();
          return;
        }
      }
      class T {
        constructor() {
          obj = { guildsCount: closure_1_7.getPresentableUpsellGuilds().length, dismissedCount: closure_1_7.getDismissedGuildIds().size, lastFetchedAt: closure_1_7.getLastFetchedAt() };
          return obj;
        }
      }
      let date = new Date(str);
      let _HermesInternal = HermesInternal;
      str2 = "" + date.toLocaleTimeString();
    }
    class T {
      constructor() {
        obj = { guildsCount: closure_1_7.getPresentableUpsellGuilds().length, dismissedCount: closure_1_7.getDismissedGuildIds().size, lastFetchedAt: closure_1_7.getLastFetchedAt() };
        return obj;
      }
    }
    cResult[21] = str;
    cResult[22] = str2;
    const tmp25 = str2;
  } else {
    class Z {
      constructor() {
        result = closure_7.DEV_clearDismissedGuilds();
        tmp2 = closure_1();
        return;
      }
    }
  }
  if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
    class Z {
      constructor() {
        result = closure_7.DEV_clearDismissedGuilds();
        tmp2 = closure_1();
        return;
      }
    }
    cResult[23] = B;
    class T {
      constructor() {
        obj = { guildsCount: closure_1_7.getPresentableUpsellGuilds().length, dismissedCount: closure_1_7.getDismissedGuildIds().size, lastFetchedAt: closure_1_7.getLastFetchedAt() };
        return obj;
      }
    }
  } else {
    class Z {
      constructor() {
        result = closure_7.DEV_clearDismissedGuilds();
        tmp2 = closure_1();
        return;
      }
    }
  }
  dependencyMap = tmp29;
  ({ scrollView, section } = tmp4);
  if (0 === mapped.length) {
    class Z {
      constructor() {
        result = closure_7.DEV_clearDismissedGuilds();
        tmp2 = closure_1();
        return;
      }
    }
    const tmp32 = closure_8(tmp(5993).TableRow, { label: "No games configured", subLabel: "MULTI_GUILD_GAME_CONFIGS is empty", disabled: true });
  } else {
    class Z {
      constructor() {
        result = closure_7.DEV_clearDismissedGuilds();
        tmp2 = closure_1();
        return;
      }
    }
  }
  cResult[4] = stateFromStores;
  cResult[5] = str;
  cResult[6] = tmp4.container;
  cResult[7] = tmp4.scrollView;
  cResult[8] = tmp4.section;
  cResult[9] = stateFromStores(6074).TableRowGroup;
  cResult[10] = closure_4;
  cResult[11] = closure_5;
  cResult[12] = closure_4;
  cResult[13] = tmp25;
  cResult[14] = tmp29;
  str = "Detected Apps";
  cResult[15] = "Detected Apps";
  cResult[16] = false;
  cResult[17] = tmp32;
  cResult[18] = section;
  cResult[19] = scrollView;
  cResult[20] = tmp4.container;
  const tmpResult2 = stateFromStores(504);
}) : (() => {
  const tmp = closure_10();
  const items = [LocalAppDetectionStore];
  _require = require("initialize").useStateFromStores(items, () => LocalAppDetectionStore.getUserAgnosticState());
  let obj = require("initialize");
  const items1 = [MobileGameCommunitiesStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items1, () => ({ guildsCount: MobileGameCommunitiesStore.getPresentableUpsellGuilds().length, dismissedCount: MobileGameCommunitiesStore.getDismissedGuildIds().size, lastFetchedAt: MobileGameCommunitiesStore.getLastFetchedAt() }));
  const lastFetchedAt = stateFromStoresObject.lastFetchedAt;
  ({ guildsCount, dismissedCount } = stateFromStoresObject);
  const entries = Object.entries(require("GameCommunityConfig").DETECTABLE_GAME_TO_APPLICATION_ID_MAP);
  const mapped = entries.map((item) => {
    [tmp, tmp2] = item;
    const obj = { detectableAppName: tmp, gameId: tmp2, detected: null, lastScannedAt: null };
    let flag;
    if (closure_0.apps[tmp] != null) {
      flag = tmp3.detected;
    }
    if (flag == null) {
      flag = false;
    }
    obj.detected = flag;
    let lastScannedAt;
    if (closure_0.apps[tmp] != null) {
      lastScannedAt = tmp3.lastScannedAt;
    }
    obj.lastScannedAt = lastScannedAt;
    return obj;
  });
  let str = "Never";
  if (lastFetchedAt > 0) {
    let _Date = Date;
    let date = new Date(lastFetchedAt);
    let _HermesInternal = HermesInternal;
    str = "" + date.toLocaleTimeString();
  }
  onPress = noop.useCallback(() => {
    LocalAppDetectionStore.DEV_resetState();
    MobileGameCommunitiesStore.DEV_clearFetchCache();
    closure_0(callback[12]).detectLocalApps(closure_0(callback[13]).ALL_DETECTABLE_APP_NAMES);
  }, []);
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.scrollView, children: null };
  const obj5 = { style: tmp.section, children: null };
  if (0 === mapped.length) {
    let mapped1 = closure_8(tmp2(tmp3[15]).TableRow, { label: "No games configured", subLabel: "MULTI_GUILD_GAME_CONFIGS is empty", disabled: true });
  } else {
    mapped1 = mapped.map((detectableAppName) => {
      const obj = { label: detectableAppName.detectableAppName, subLabel: null, disabled: true };
      let str = "Not detected";
      if (detectableAppName.detected) {
        str = "Detected";
      }
      let str2 = "";
      if (null != detectableAppName.lastScannedAt) {
        const _Date = Date;
        const date = new Date(detectableAppName.lastScannedAt);
        const _HermesInternal = HermesInternal;
        str2 = " (scanned " + date.toLocaleTimeString() + ")";
      }
      obj.subLabel = "Game ID: " + detectableAppName.gameId + " \u2014 " + str + str2;
      return closure_1_8(closure_0(callback[15]).TableRow, obj, detectableAppName.detectableAppName);
    });
  }
  obj5.children = closure_8(require("TableRowGroup").TableRowGroup, { title: "Detected Apps", hasIcons: false, children: mapped1 });
  const items2 = [closure_8(closure_4, obj5), , ];
  const obj6 = { style: tmp.section, children: null };
  const obj7 = { title: "Store State", hasIcons: false, children: null };
  const obj2 = require("initialize");
  const items3 = [closure_8(require("TableRow").TableRow, { label: "Presentable Guilds", subLabel: String(guildsCount), disabled: true }), , ];
  const obj8 = { label: "Presentable Guilds", subLabel: String(guildsCount), disabled: true };
  items3[1] = closure_8(require("TableRow").TableRow, { label: "Dismissed Guilds", subLabel: String(dismissedCount), disabled: true });
  items3[2] = closure_8(require("TableRow").TableRow, { label: "Last Fetched", subLabel: str, disabled: true });
  obj7.children = items3;
  obj6.children = closure_9(require("TableRowGroup").TableRowGroup, obj7);
  items2[1] = closure_8(closure_4, obj6);
  const obj10 = { style: tmp.section, children: null };
  const obj11 = { title: "Actions", hasIcons: true, children: null };
  const obj9 = { label: "Dismissed Guilds", subLabel: String(dismissedCount), disabled: true };
  const items4 = [closure_8(require("TableRow").TableRow, { label: "Refresh Upsell Guilds", subLabel: "Redects games and suggested guilds", onPress, icon: closure_8(require("RefreshIcon").RefreshIcon, {}), trailing: closure_8(require("TableRowArrow").TableRowArrow, {}) }), , ];
  const obj12 = { label: "Refresh Upsell Guilds", subLabel: "Redects games and suggested guilds", onPress, icon: closure_8(require("RefreshIcon").RefreshIcon, {}), trailing: closure_8(require("TableRowArrow").TableRowArrow, {}) };
  items4[1] = closure_8(require("TableRow").TableRow, {
    label: "Clear Dismissed Guilds",
    subLabel: "Reset dismissed guild IDs so all guilds show again",
    onPress() {
      const result = MobileGameCommunitiesStore.DEV_clearDismissedGuilds();
      callback();
    },
    icon: closure_8(require("RefreshIcon").RefreshIcon, {}),
    trailing: closure_8(require("TableRowArrow").TableRowArrow, {})
  });
  const obj13 = {
    label: "Clear Dismissed Guilds",
    subLabel: "Reset dismissed guild IDs so all guilds show again",
    onPress() {
      const result = MobileGameCommunitiesStore.DEV_clearDismissedGuilds();
      callback();
    },
    icon: closure_8(require("RefreshIcon").RefreshIcon, {}),
    trailing: closure_8(require("TableRowArrow").TableRowArrow, {})
  };
  items4[2] = closure_8(require("TableRow").TableRow, {
    label: "Clear All Store State",
    subLabel: "Reset all MobileGameCommunitiesStore state (guilds, dismissed, fetch cache)",
    onPress() {
      MobileGameCommunitiesStore.DEV_clearState();
    },
    icon: closure_8(require("RefreshIcon").RefreshIcon, {}),
    trailing: closure_8(require("TableRowArrow").TableRowArrow, {})
  });
  obj11.children = items4;
  obj10.children = closure_9(require("TableRowGroup").TableRowGroup, obj11);
  items2[2] = closure_8(closure_4, obj10);
  obj4.children = items2;
  obj3.children = closure_9(closure_5, obj4);
  return closure_8(closure_4, obj3);
});
ReactCompilerGating = fn(558);
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_community_upsell/native/GameCommunityUpsellDevTools.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp5 = closure_1_8(closure_11, {});
    cResult[0] = tmp5;
    let first = tmp5;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => closure_1_8(closure_11, {}));