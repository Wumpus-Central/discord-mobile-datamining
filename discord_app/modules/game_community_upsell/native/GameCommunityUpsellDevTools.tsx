// === Module 15465: GameCommunityUpsellDevTools ===

// Module 15465 (GameCommunityUpsellDevTools)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocalAppDetectionStore from "LocalAppDetectionStore" /* 13540 */;
import MobileGameCommunitiesStore from "MobileGameCommunitiesStore" /* 15466 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let obj3;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, scrollView: { flex: 1 }, section: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function() {
  let closure_1;
  let items3;
  let items4;
  let scrollView;
  let section;
  let stateFromStores;
  let tmp10;
  let tmp28;
  let tmp5;
  let tmp6;
  let tmp9;
  let tmp = stateFromStores;
  let obj = stateFromStores(576);
  const cResult = obj.c(73);
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
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [MobileGameCommunitiesStore];
    class T {
      constructor() {
        const obj = { guildsCount: MobileGameCommunitiesStore.getPresentableUpsellGuilds().length, dismissedCount: MobileGameCommunitiesStore.getDismissedGuildIds().size, lastFetchedAt: MobileGameCommunitiesStore.getLastFetchedAt() };
        return obj;
      }
    }
    cResult[2] = items1;
    cResult[3] = T;
    tmp10 = T;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult2 = tmp(504);
  const stateFromStoresObject = tmpResult2.useStateFromStoresObject(tmp9, tmp10);
  const lastFetchedAt = stateFromStoresObject.lastFetchedAt;
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === lastFetchedAt) {
      if (cResult[6] === tmp4.container) {
        if (cResult[7] === tmp4.scrollView) {
          let tmp14;
          let tmp15;
          let tmp16;
          let tmp17;
          let str;
          let flag;
          let tmp19;
          let tmp20;
          let tmp21;
          if (cResult[8] === tmp4.section) {
            tmp14 = cResult[9];
            tmp15 = cResult[10];
            tmp16 = cResult[11];
            class T {
              constructor() {
                const obj = { guildsCount: MobileGameCommunitiesStore.getPresentableUpsellGuilds().length, dismissedCount: MobileGameCommunitiesStore.getDismissedGuildIds().size, lastFetchedAt: MobileGameCommunitiesStore.getLastFetchedAt() };
                return obj;
              }
            }
            tmp17 = cResult[13];
            dependencyMap = cResult[14];
            str = cResult[15];
            flag = cResult[16];
            tmp19 = cResult[17];
            tmp20 = cResult[18];
            tmp21 = cResult[19];
          }
          if (cResult[24] === tmp14) {
            if (cResult[25] === str) {
              if (cResult[26] === flag) {
                let tmp29;
                if (cResult[27] === tmp19) {
                  tmp29 = cResult[28];
                }
                if (cResult[29] === tmp15) {
                  if (cResult[30] === tmp29) {
                    let tmp33;
                    let tmp38;
                    let tmp42;
                    let tmp45;
                    if (cResult[31] === tmp20) {
                      tmp33 = cResult[32];
                    }
                    const _String = String;
                    const section2 = tmp4.section;
                    class T {
                      constructor() {
                        const obj = { guildsCount: MobileGameCommunitiesStore.getPresentableUpsellGuilds().length, dismissedCount: MobileGameCommunitiesStore.getDismissedGuildIds().size, lastFetchedAt: MobileGameCommunitiesStore.getLastFetchedAt() };
                        return obj;
                      }
                    }
                    if (cResult[33] !== tmp37) {
                      class T {
                        constructor() {
                          const obj = { guildsCount: MobileGameCommunitiesStore.getPresentableUpsellGuilds().length, dismissedCount: MobileGameCommunitiesStore.getDismissedGuildIds().size, lastFetchedAt: MobileGameCommunitiesStore.getLastFetchedAt() };
                          return obj;
                        }
                      }
                      cResult[33] = tmp37;
                      cResult[34] = tmp40;
                      tmp38 = tmp40;
                    } else {
                      tmp38 = cResult[34];
                    }
                    const _String2 = String;
                    const StringResult = String(tmp13);
                    if (cResult[35] !== StringResult) {
                      class T {
                        constructor() {
                          const obj = { guildsCount: MobileGameCommunitiesStore.getPresentableUpsellGuilds().length, dismissedCount: MobileGameCommunitiesStore.getDismissedGuildIds().size, lastFetchedAt: MobileGameCommunitiesStore.getLastFetchedAt() };
                          return obj;
                        }
                      }
                      cResult[35] = StringResult;
                      cResult[36] = tmp44;
                      tmp42 = tmp44;
                    } else {
                      tmp42 = cResult[36];
                    }
                    if (cResult[37] !== tmp17) {
                      class T {
                        constructor() {
                          const obj = { guildsCount: MobileGameCommunitiesStore.getPresentableUpsellGuilds().length, dismissedCount: MobileGameCommunitiesStore.getDismissedGuildIds().size, lastFetchedAt: MobileGameCommunitiesStore.getLastFetchedAt() };
                          return obj;
                        }
                      }
                      cResult[37] = tmp17;
                      cResult[38] = tmp47;
                      tmp45 = tmp47;
                    } else {
                      tmp45 = cResult[38];
                    }
                    if (cResult[39] === tmp38) {
                      if (cResult[40] === tmp42) {
                        let tmp48;
                        if (cResult[41] === tmp45) {
                          tmp48 = cResult[42];
                        }
                        if (cResult[43] === tmp4.section) {
                          let tmp51;
                          let tmp56;
                          let tmp61;
                          let tmp66;
                          if (cResult[44] === tmp48) {
                            tmp51 = cResult[45];
                          }
                          const _Symbol = Symbol;
                          class T {
                            constructor() {
                              const obj = { guildsCount: MobileGameCommunitiesStore.getPresentableUpsellGuilds().length, dismissedCount: MobileGameCommunitiesStore.getDismissedGuildIds().size, lastFetchedAt: MobileGameCommunitiesStore.getLastFetchedAt() };
                              return obj;
                            }
                          }
                          if (cResult[48] !== tmp25) {
                            const obj5 = { label: "Refresh Upsell Guilds", subLabel: "Redects games and suggested guilds", onPress: tmp25, icon: null, trailing: tmp55 };
                            class T {
                              constructor() {
                                const obj = { guildsCount: MobileGameCommunitiesStore.getPresentableUpsellGuilds().length, dismissedCount: MobileGameCommunitiesStore.getDismissedGuildIds().size, lastFetchedAt: MobileGameCommunitiesStore.getLastFetchedAt() };
                                return obj;
                              }
                            }
                            const tmp58 = closure_8(tmp(6000).TableRow, obj5);
                            cResult[48] = tmp25;
                            cResult[49] = tmp58;
                            tmp56 = tmp58;
                          } else {
                            tmp56 = cResult[49];
                          }
                          if (cResult[50] !== tmp25) {
                            class Z {
                              constructor() {
                                const result = MobileGameCommunitiesStore.DEV_clearDismissedGuilds();
                                dependencyMap();
                              }
                            }
                            cResult[50] = tmp25;
                            class T {
                              constructor() {
                                const obj = { guildsCount: MobileGameCommunitiesStore.getPresentableUpsellGuilds().length, dismissedCount: MobileGameCommunitiesStore.getDismissedGuildIds().size, lastFetchedAt: MobileGameCommunitiesStore.getLastFetchedAt() };
                                return obj;
                              }
                            }
                            cResult[51] = Z;
                          } else {
                            class Z {
                              constructor() {
                                const result = MobileGameCommunitiesStore.DEV_clearDismissedGuilds();
                                dependencyMap();
                              }
                            }
                          }
                          const _Symbol2 = Symbol;
                          if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
                            class Z {
                              constructor() {
                                const result = MobileGameCommunitiesStore.DEV_clearDismissedGuilds();
                                dependencyMap();
                              }
                            }
                            const tmp62 = closure_8(tmp(14794).RefreshIcon, {});
                            const tmp63 = closure_8(tmp(6007).TableRowArrow, {});
                            class T {
                              constructor() {
                                const obj = { guildsCount: MobileGameCommunitiesStore.getPresentableUpsellGuilds().length, dismissedCount: MobileGameCommunitiesStore.getDismissedGuildIds().size, lastFetchedAt: MobileGameCommunitiesStore.getLastFetchedAt() };
                                return obj;
                              }
                            }
                            cResult[52] = tmp62;
                            cResult[53] = tmp63;
                            tmp61 = tmp63;
                          } else {
                            class Z {
                              constructor() {
                                const result = MobileGameCommunitiesStore.DEV_clearDismissedGuilds();
                                dependencyMap();
                              }
                            }
                            tmp61 = cResult[53];
                          }
                          if (cResult[54] !== Z) {
                            class Z {
                              constructor() {
                                const result = MobileGameCommunitiesStore.DEV_clearDismissedGuilds();
                                dependencyMap();
                              }
                            }
                            const obj6 = { label: "Clear Dismissed Guilds", subLabel: "Reset dismissed guild IDs so all guilds show again", onPress: Z, icon: null, trailing: tmp61 };
                            class T {
                              constructor() {
                                const obj = { guildsCount: MobileGameCommunitiesStore.getPresentableUpsellGuilds().length, dismissedCount: MobileGameCommunitiesStore.getDismissedGuildIds().size, lastFetchedAt: MobileGameCommunitiesStore.getLastFetchedAt() };
                                return obj;
                              }
                            }
                            cResult[54] = Z;
                            cResult[55] = closure_8(tmp(6000).TableRow, obj6);
                            const tmp65 = closure_8(tmp(6000).TableRow, obj6);
                          } else {
                            class Z {
                              constructor() {
                                const result = MobileGameCommunitiesStore.DEV_clearDismissedGuilds();
                                dependencyMap();
                              }
                            }
                          }
                          const _Symbol3 = Symbol;
                          if (cResult[56] === Symbol.for("react.memo_cache_sentinel")) {
                            class Z {
                              constructor() {
                                const result = MobileGameCommunitiesStore.DEV_clearDismissedGuilds();
                                dependencyMap();
                              }
                            }
                            const obj7 = {
                              label: "Clear All Store State",
                              subLabel: "Reset all MobileGameCommunitiesStore state (guilds, dismissed, fetch cache)",
                              onPress() {
                                                          MobileGameCommunitiesStore.DEV_clearState();
                                                        },
                              icon: closure_8(tmp(14794).RefreshIcon, {}),
                              trailing: closure_8(tmp(6007).TableRowArrow, {})
                            };
                            class T {
                              constructor() {
                                const obj = { guildsCount: MobileGameCommunitiesStore.getPresentableUpsellGuilds().length, dismissedCount: MobileGameCommunitiesStore.getDismissedGuildIds().size, lastFetchedAt: MobileGameCommunitiesStore.getLastFetchedAt() };
                                return obj;
                              }
                            }
                            const tmp68 = closure_8(tmp67, obj7);
                            cResult[56] = tmp68;
                            tmp66 = tmp68;
                          } else {
                            class Z {
                              constructor() {
                                const result = MobileGameCommunitiesStore.DEV_clearDismissedGuilds();
                                dependencyMap();
                              }
                            }
                          }
                          if (cResult[57] === tmp56) {
                            class Z {
                              constructor() {
                                const result = MobileGameCommunitiesStore.DEV_clearDismissedGuilds();
                                dependencyMap();
                              }
                            }
                            if (cResult[60] === tmp4.section) {
                              class Z {
                                constructor() {
                                  const result = MobileGameCommunitiesStore.DEV_clearDismissedGuilds();
                                  dependencyMap();
                                }
                              }
                              if (cResult[63] === tmp16) {
                                class Z {
                                  constructor() {
                                    const result = MobileGameCommunitiesStore.DEV_clearDismissedGuilds();
                                    dependencyMap();
                                  }
                                }
                              }
                              class T {
                                constructor() {
                                  const obj = { guildsCount: MobileGameCommunitiesStore.getPresentableUpsellGuilds().length, dismissedCount: MobileGameCommunitiesStore.getDismissedGuildIds().size, lastFetchedAt: MobileGameCommunitiesStore.getLastFetchedAt() };
                                  return obj;
                                }
                              }
                              tmp77[0] = tmp21;
                              const items2 = [tmp33, tmp51, tmp72];
                              tmp77[1] = items2;
                              cResult[63] = tmp16;
                              cResult[64] = tmp33;
                              cResult[65] = tmp51;
                              cResult[66] = tmp72;
                              cResult[67] = tmp21;
                              cResult[68] = closure_9(tmp16, tmp77);
                              const tmp78 = closure_9(tmp16, tmp77);
                            }
                            class T {
                              constructor() {
                                const obj = { guildsCount: MobileGameCommunitiesStore.getPresentableUpsellGuilds().length, dismissedCount: MobileGameCommunitiesStore.getDismissedGuildIds().size, lastFetchedAt: MobileGameCommunitiesStore.getLastFetchedAt() };
                                return obj;
                              }
                            }
                            const obj8 = { style: tmp4.section, children: tmp69 };
                            cResult[60] = tmp4.section;
                            cResult[61] = tmp69;
                            cResult[62] = closure_8(closure_4, obj8);
                            const tmp74 = closure_8(closure_4, obj8);
                          }
                          const obj9 = { title: "Actions", hasIcons: true, children: items3 };
                          items3 = [tmp56, tmp64, tmp66];
                          cResult[57] = tmp56;
                          cResult[58] = tmp64;
                          cResult[59] = closure_9(tmp(6081).TableRowGroup, obj9);
                          const tmp71 = closure_9(tmp(6081).TableRowGroup, obj9);
                        }
                        class T {
                          constructor() {
                            const obj = { guildsCount: MobileGameCommunitiesStore.getPresentableUpsellGuilds().length, dismissedCount: MobileGameCommunitiesStore.getDismissedGuildIds().size, lastFetchedAt: MobileGameCommunitiesStore.getLastFetchedAt() };
                            return obj;
                          }
                        }
                        const obj10 = { style: section2, children: tmp48 };
                        const tmp53 = closure_8(closure_4, obj10);
                        cResult[43] = tmp4.section;
                        cResult[44] = tmp48;
                        cResult[45] = tmp53;
                        tmp51 = tmp53;
                      }
                    }
                    const obj11 = { title: "Store State", hasIcons: false, children: items4 };
                    items4 = [tmp38, tmp42, tmp45];
                    const tmp50 = closure_9(tmp(6081).TableRowGroup, obj11);
                    cResult[39] = tmp38;
                    cResult[40] = tmp42;
                    cResult[41] = tmp45;
                    cResult[42] = tmp50;
                    tmp48 = tmp50;
                  }
                }
                class T {
                  constructor() {
                    const obj = { guildsCount: MobileGameCommunitiesStore.getPresentableUpsellGuilds().length, dismissedCount: MobileGameCommunitiesStore.getDismissedGuildIds().size, lastFetchedAt: MobileGameCommunitiesStore.getLastFetchedAt() };
                    return obj;
                  }
                }
                tmp35[0] = tmp20;
                tmp35[1] = tmp29;
                const tmp36 = closure_8(tmp15, tmp35);
                cResult[29] = tmp15;
                cResult[30] = tmp29;
                cResult[31] = tmp20;
                cResult[32] = tmp36;
                tmp33 = tmp36;
              }
            }
          }
          class T {
            constructor() {
              const obj = { guildsCount: MobileGameCommunitiesStore.getPresentableUpsellGuilds().length, dismissedCount: MobileGameCommunitiesStore.getDismissedGuildIds().size, lastFetchedAt: MobileGameCommunitiesStore.getLastFetchedAt() };
              return obj;
            }
          }
          tmp31[0] = str;
          tmp31[1] = flag;
          tmp31[2] = tmp19;
          const tmp32 = closure_8(tmp14, tmp31);
          cResult[24] = tmp14;
          cResult[25] = str;
          cResult[26] = flag;
          cResult[27] = tmp19;
          cResult[28] = tmp32;
          tmp29 = tmp32;
        }
      }
    }
  }
  const entries = Object.entries(tmp(15467).DETECTABLE_GAME_TO_APPLICATION_ID_MAP);
  const mapped = entries.map((item) => {
    let flag;
    let lastScannedAt;
    const tmp = _slicedToArray(item, 2);
    const first = tmp[0];
    const obj = { detectableAppName: first, gameId: tmp[1], detected: flag, lastScannedAt };
    flag = undefined;
    if (stateFromStores.apps[first] != null) {
      flag = tmp3.detected;
    }
    if (flag == null) {
      flag = false;
    }
    lastScannedAt = undefined;
    if (stateFromStores.apps[first] != null) {
      lastScannedAt = tmp3.lastScannedAt;
    }
    return obj;
  });
  if (cResult[21] !== lastFetchedAt) {
    class Z {
      constructor() {
        const result = MobileGameCommunitiesStore.DEV_clearDismissedGuilds();
        dependencyMap();
      }
    }
    let str2 = "Never";
    if (lastFetchedAt > 0) {
      class Z {
        constructor() {
          const result = MobileGameCommunitiesStore.DEV_clearDismissedGuilds();
          dependencyMap();
        }
      }
      let self = this;
      let self2 = this;
      class T {
        constructor() {
          const obj = { guildsCount: MobileGameCommunitiesStore.getPresentableUpsellGuilds().length, dismissedCount: MobileGameCommunitiesStore.getDismissedGuildIds().size, lastFetchedAt: MobileGameCommunitiesStore.getLastFetchedAt() };
          return obj;
        }
      }
      let date = new Date(lastFetchedAt);
      let _HermesInternal = HermesInternal;
      str2 = "" + date.toLocaleTimeString();
    }
    class T {
      constructor() {
        const obj = { guildsCount: MobileGameCommunitiesStore.getPresentableUpsellGuilds().length, dismissedCount: MobileGameCommunitiesStore.getDismissedGuildIds().size, lastFetchedAt: MobileGameCommunitiesStore.getLastFetchedAt() };
        return obj;
      }
    }
    cResult[21] = lastFetchedAt;
    cResult[22] = str2;
  } else {
    class Z {
      constructor() {
        const result = MobileGameCommunitiesStore.DEV_clearDismissedGuilds();
        dependencyMap();
      }
    }
  }
  if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
    class Z {
      constructor() {
        const result = MobileGameCommunitiesStore.DEV_clearDismissedGuilds();
        dependencyMap();
      }
    }
    cResult[23] = B;
    class T {
      constructor() {
        const obj = { guildsCount: MobileGameCommunitiesStore.getPresentableUpsellGuilds().length, dismissedCount: MobileGameCommunitiesStore.getDismissedGuildIds().size, lastFetchedAt: MobileGameCommunitiesStore.getLastFetchedAt() };
        return obj;
      }
    }
  } else {
    class Z {
      constructor() {
        const result = MobileGameCommunitiesStore.DEV_clearDismissedGuilds();
        dependencyMap();
      }
    }
  }
  dependencyMap = tmp25;
  const container = tmp4.container;
  ({ scrollView, section } = tmp4);
  const TableRowGroup = tmp(6081).TableRowGroup;
  if (0 === mapped.length) {
    class Z {
      constructor() {
        const result = MobileGameCommunitiesStore.DEV_clearDismissedGuilds();
        dependencyMap();
      }
    }
    tmp28 = closure_8(tmp(6000).TableRow, { label: "No games configured", subLabel: "MULTI_GUILD_GAME_CONFIGS is empty", disabled: true });
  } else {
    class Z {
      constructor() {
        const result = MobileGameCommunitiesStore.DEV_clearDismissedGuilds();
        dependencyMap();
      }
    }
  }
  cResult[4] = stateFromStores;
  cResult[5] = lastFetchedAt;
  cResult[6] = tmp4.container;
  cResult[7] = tmp4.scrollView;
  cResult[8] = tmp4.section;
  cResult[9] = TableRowGroup;
  cResult[10] = closure_4;
  cResult[11] = closure_5;
  cResult[12] = closure_4;
  cResult[13] = tmp23;
  cResult[14] = tmp25;
  cResult[15] = "Detected Apps";
  cResult[16] = false;
  cResult[17] = tmp28;
  cResult[18] = section;
  cResult[19] = scrollView;
  cResult[20] = container;
  tmp19 = tmp28;
  tmp21 = scrollView;
  tmp20 = section;
  flag = false;
  str = "Detected Apps";
  tmp17 = tmp23;
  tmp16 = closure_5;
  tmp15 = closure_4;
  tmp14 = TableRowGroup;
}) : (function() {
  let TableRowGroup;
  let TableRowGroup2;
  let TableRowGroup3;
  let closure_0;
  let dismissedCount;
  let guildsCount;
  let items2;
  let items3;
  let items4;
  let mapped1;
  let obj11;
  let obj4;
  let obj7;
  let onPress;
  const tmp = closure_10();
  const tmp2 = _require;
  const tmp3 = onPress;
  let obj = require("get initialized");
  const items = [LocalAppDetectionStore];
  _require = obj.useStateFromStores(items, () => LocalAppDetectionStore.getUserAgnosticState());
  const items1 = [MobileGameCommunitiesStore];
  const obj2 = require("get initialized");
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const obj = { guildsCount: MobileGameCommunitiesStore.getPresentableUpsellGuilds().length, dismissedCount: MobileGameCommunitiesStore.getDismissedGuildIds().size, lastFetchedAt: MobileGameCommunitiesStore.getLastFetchedAt() };
    return obj;
  });
  const lastFetchedAt = stateFromStoresObject.lastFetchedAt;
  ({ guildsCount, dismissedCount } = stateFromStoresObject);
  const entries = Object.entries(require("GameCommunityConfig").DETECTABLE_GAME_TO_APPLICATION_ID_MAP);
  const mapped = entries.map((item) => {
    let flag;
    let lastScannedAt;
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    const obj = { detectableAppName: tmp, gameId: tmp2, detected: flag, lastScannedAt };
    flag = undefined;
    if (closure_0.apps[tmp] != null) {
      flag = tmp3.detected;
    }
    if (flag == null) {
      flag = false;
    }
    lastScannedAt = undefined;
    if (closure_0.apps[tmp] != null) {
      lastScannedAt = tmp3.lastScannedAt;
    }
    return obj;
  });
  let str = "Never";
  if (lastFetchedAt > 0) {
    let _Date = Date;
    let self = this;
    let self2 = this;
    let date = new Date(lastFetchedAt);
    let _HermesInternal = HermesInternal;
    let str2 = "";
    str = "" + date.toLocaleTimeString();
  }
  onPress = react.useCallback(() => {
    LocalAppDetectionStore.DEV_resetState();
    MobileGameCommunitiesStore.DEV_clearFetchCache();
    const obj = closure_0(callback[12]);
    obj.detectLocalApps(closure_0(callback[13]).ALL_DETECTABLE_APP_NAMES);
  }, []);
  const obj3 = { style: tmp.container, children: closure_9(closure_5, obj4) };
  obj4 = { style: tmp.scrollView, children: items2 };
  const obj5 = { style: tmp.section, children: closure_8(TableRowGroup, { title: "Detected Apps", hasIcons: false, children: mapped1 }) };
  TableRowGroup = tmp2(tmp3[14]).TableRowGroup;
  if (0 === mapped.length) {
    mapped1 = closure_8(tmp2(tmp3[15]).TableRow, { label: "No games configured", subLabel: "MULTI_GUILD_GAME_CONFIGS is empty", disabled: true });
  } else {
    mapped1 = mapped.map(function(detectableAppName) {
      let gameId;
      let str;
      let str2;
      const obj = { label: detectableAppName.detectableAppName, subLabel: "Game ID: " + gameId + " \u2014 " + str + str2, disabled: true };
      gameId = detectableAppName.gameId;
      str = "Not detected";
      const TableRow = closure_0(callback[15]).TableRow;
      if (detectableAppName.detected) {
        str = "Detected";
      }
      str2 = "";
      if (null != detectableAppName.lastScannedAt) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const _HermesInternal = HermesInternal;
        const date = new Date(detectableAppName.lastScannedAt);
        str2 = " (scanned " + date.toLocaleTimeString() + ")";
      }
      return closure_1_8(TableRow, obj, detectableAppName.detectableAppName);
    });
  }
  items2 = [closure_8(closure_4, obj5), , ];
  const obj6 = { style: tmp.section, children: closure_9(TableRowGroup2, obj7) };
  obj7 = { title: "Store State", hasIcons: false, children: items3 };
  TableRowGroup2 = tmp2(tmp3[14]).TableRowGroup;
  const obj8 = { label: "Presentable Guilds", subLabel: String(guildsCount), disabled: true };
  let TableRow = tmp2(tmp3[15]).TableRow;
  items3 = [closure_8(TableRow, obj8), , ];
  const obj9 = { label: "Dismissed Guilds", subLabel: String(dismissedCount), disabled: true };
  const TableRow2 = tmp2(tmp3[15]).TableRow;
  items3[1] = closure_8(TableRow2, obj9);
  items3[2] = closure_8(tmp2(tmp3[15]).TableRow, { label: "Last Fetched", subLabel: str, disabled: true });
  items2[1] = closure_8(closure_4, obj6);
  const obj10 = { style: tmp.section, children: closure_9(TableRowGroup3, obj11) };
  obj11 = { title: "Actions", hasIcons: true, children: items4 };
  TableRowGroup3 = tmp2(tmp3[14]).TableRowGroup;
  const obj12 = { label: "Refresh Upsell Guilds", subLabel: "Redects games and suggested guilds", onPress, icon: closure_8(tmp2(tmp3[16]).RefreshIcon, {}), trailing: closure_8(tmp2(tmp3[17]).TableRowArrow, {}) };
  const TableRow3 = tmp2(tmp3[15]).TableRow;
  items4 = [closure_8(TableRow3, obj12), , ];
  const obj13 = {
    label: "Clear Dismissed Guilds",
    subLabel: "Reset dismissed guild IDs so all guilds show again",
    onPress() {
      const result = MobileGameCommunitiesStore.DEV_clearDismissedGuilds();
      callback();
    },
    icon: closure_8(tmp2(tmp3[16]).RefreshIcon, {}),
    trailing: closure_8(tmp2(tmp3[17]).TableRowArrow, {})
  };
  const TableRow4 = tmp2(tmp3[15]).TableRow;
  items4[1] = closure_8(TableRow4, obj13);
  const obj14 = {
    label: "Clear All Store State",
    subLabel: "Reset all MobileGameCommunitiesStore state (guilds, dismissed, fetch cache)",
    onPress() {
      MobileGameCommunitiesStore.DEV_clearState();
    },
    icon: closure_8(tmp2(tmp3[16]).RefreshIcon, {}),
    trailing: closure_8(tmp2(tmp3[17]).TableRowArrow, {})
  };
  const TableRow5 = tmp2(tmp3[15]).TableRow;
  items4[2] = closure_8(TableRow5, obj14);
  items2[2] = closure_8(closure_4, obj10);
  return closure_8(closure_4, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp5 = metroImportAll(closure_11, {});
    cResult[0] = tmp5;
    first = tmp5;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => metroImportAll(closure_11, {}));
let result = size.fileFinishedImporting("modules/game_community_upsell/native/GameCommunityUpsellDevTools.tsx");

export default tmp5;