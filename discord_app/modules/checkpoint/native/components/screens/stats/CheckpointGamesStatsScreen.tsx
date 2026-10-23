// === Module 12948: CheckpointGamesStatsScreen ===

// Module 12948 (CheckpointGamesStatsScreen)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1417 */;
import _modDef3088 from "module_3088" /* 3088 */;
import FastImageDefault from "FastImage" /* 5655 */;
import CheckpointTextDefault from "CheckpointText" /* 12911 */;
import CheckpointCountUpStatNumberDefault from "CheckpointCountUpStatNumber" /* 12920 */;
import _modDef12921 from "module_12921" /* 12921 */;
import CheckpointRankTagDefault from "CheckpointRankTag" /* 12928 */;
import GameStore from "GameStore" /* 2022 */;
import CheckpointStore from "CheckpointStore" /* 12893 */;
import CheckpointConstants from "CheckpointConstants" /* 6001 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4969 */;
import "ReactCompilerGating";
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const CheckpointScreenDefault = tmp34(12913);
const CheckpointApngPlayerDefault = tmp34(12916);
const CheckpointDisplayTextDefault = tmp34(12926);
const View = _mod17.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let items = [{ list: "gamesByPlayers", label: _modDef3088.b4s18j }, , , , ];
let obj = { list: "gamesByPlayers", label: _modDef3088.b4s18j };
items[1] = { list: "newGamesByPlayers", label: _modDef3088.DcxpNj };
let obj2 = { list: "newGamesByPlayers", label: _modDef3088.DcxpNj };
items[2] = { list: "indieGamesByPlayers", label: _modDef3088.OAUTki };
let obj3 = { list: "indieGamesByPlayers", label: _modDef3088.OAUTki };
items[3] = { list: "gamesByCoplayUsers", label: _modDef3088.ioC4Qg };
let obj4 = { list: "gamesByCoplayUsers", label: _modDef3088.ioC4Qg };
items[4] = { list: "gamesByStreamWatchMinutes", label: _modDef3088.M1L00s };
let obj6 = { container: null, globalContainer: null, header: null, globalHeading: null, globe: null, title: null, titleText: null, number: null, games: null, game: null, cover: null, coverImage: null, unknownCover: null, rank: null, gameText: null, gameName: null, gameLabel: null };
let obj5 = { list: "gamesByStreamWatchMinutes", label: _modDef3088.M1L00s };
obj6.container = { width: "100%", flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
let obj7 = { width: "100%", flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
obj6.globalContainer = { gap: nativeDefault.space.PX_32 };
let obj8 = { gap: nativeDefault.space.PX_32 };
obj6.header = { gap: nativeDefault.space.PX_12 };
let obj9 = { gap: nativeDefault.space.PX_12 };
obj6.globalHeading = { alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
obj6.globe = { width: 75, height: 56 };
let obj10 = { alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
obj6.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj6.titleText = { flexShrink: 1 };
let obj11 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj6.number = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let obj12 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj6.games = { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_16, rowGap: nativeDefault.space.PX_12 };
let obj13 = { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_16, rowGap: nativeDefault.space.PX_12 };
obj6.game = { width: "30%", gap: nativeDefault.space.PX_8 };
obj6.cover = { width: "87.5%", aspectRatio: 0.75 };
obj6.coverImage = { width: "100%", height: "100%", borderWidth: 1, borderColor: CHECKPOINT_PRIMARY };
let obj14 = { width: "30%", gap: nativeDefault.space.PX_8 };
obj6.unknownCover = { backgroundColor: nativeDefault.colors.BLACK, alignItems: "center", justifyContent: "center" };
obj6.rank = { position: "absolute", bottom: 0, left: 0 };
let obj15 = { backgroundColor: nativeDefault.colors.BLACK, alignItems: "center", justifyContent: "center" };
obj6.gameText = { gap: nativeDefault.space.PX_4 };
obj6.gameName = { color: CheckpointConstants.CHECKPOINT_WHITE };
obj6.gameLabel = { fontSize: 14, lineHeight: 18 };
let closure_10 = createStyles.createStyles(obj6);
let obj16 = { gap: nativeDefault.space.PX_4 };
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameCard(arg0) {
  const cResult = id(576).c(34);
  ({ game, rank, label, accessibilityLabel } = arg0);
  id = game.id;
  ({ name, iconHash, coverImageHash } = game);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [GameStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id) {
    const fn = function o() {
      return GameStore.getCoverImageUrl(id);
    };
    cResult[1] = id;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = id(576);
  const stateFromStores = id(504).useStateFromStores(first, tmp7);
  if (cResult[3] === coverImageHash) {
    if (cResult[4] === stateFromStores) {
      if (cResult[5] === iconHash) {
        if (cResult[6] === id) {
          unknownCover = cResult[7];
        }
        if (cResult[8] === unknownCover) {
          if (cResult[9] === tmp4.coverImage) {
            if (cResult[10] === tmp4.unknownCover) {
              if (cResult[12] === rank) {
                if (cResult[13] === tmp4.rank) {
                  let tmp21 = cResult[14];
                }
                if (cResult[15] === tmp4.cover) {
                  if (cResult[16] === tmp12) {
                    if (cResult[17] === tmp21) {
                      let tmp26 = cResult[18];
                    }
                    if (cResult[19] === name) {
                      if (cResult[20] === tmp4.gameName) {
                        let tmp30 = cResult[21];
                      }
                      if (cResult[22] === label) {
                        if (cResult[23] === tmp4.gameLabel) {
                          let tmp33 = cResult[24];
                        }
                        if (cResult[25] === tmp4.gameText) {
                          if (cResult[26] === tmp30) {
                            if (cResult[27] === tmp33) {
                              let tmp37 = cResult[28];
                            }
                            if (cResult[29] === accessibilityLabel) {
                              if (cResult[30] === tmp4.game) {
                                if (cResult[31] === tmp37) {
                                  if (cResult[32] === tmp26) {
                                    let tmp41 = cResult[33];
                                  }
                                  return tmp41;
                                }
                              }
                            }
                            const obj2 = { accessible: true, accessibilityLabel, style: tmp4.game, children: null };
                            const items1 = [tmp26, tmp37];
                            obj2.children = items1;
                            const tmp44 = closure_8(View, obj2);
                            cResult[29] = accessibilityLabel;
                            cResult[30] = tmp4.game;
                            cResult[31] = tmp37;
                            cResult[32] = tmp26;
                            cResult[33] = tmp44;
                            tmp41 = tmp44;
                          }
                        }
                        const obj4 = { style: tmp4.gameText, children: null };
                        const items2 = [tmp30, tmp33];
                        obj4.children = items2;
                        const tmp40 = closure_8(View, obj4);
                        cResult[25] = tmp4.gameText;
                        cResult[26] = tmp30;
                        cResult[27] = tmp33;
                        cResult[28] = tmp40;
                        tmp37 = tmp40;
                      }
                      const obj5 = { variant: "experimental/mono-md/bold", style: tmp4.gameLabel, children: label };
                      const tmp36 = closure_7(CheckpointTextDefault, obj5);
                      cResult[22] = label;
                      cResult[23] = tmp4.gameLabel;
                      cResult[24] = tmp36;
                      tmp33 = tmp36;
                    }
                    const obj6 = { variant: "text-md/semibold", style: tmp4.gameName, lineClamp: 2, children: name };
                    const tmp32 = closure_7(tmp(5220).Text, obj6);
                    cResult[19] = name;
                    cResult[20] = tmp4.gameName;
                    cResult[21] = tmp32;
                    tmp30 = tmp32;
                  }
                }
                const obj8 = { style: tmp4.cover, children: null };
                const items3 = [tmp12, tmp21];
                obj8.children = items3;
                const tmp29 = closure_8(View, obj8);
                cResult[15] = tmp4.cover;
                cResult[16] = tmp12;
                cResult[17] = tmp21;
                cResult[18] = tmp29;
                tmp26 = tmp29;
              }
              let tmp23 = null != rank;
              if (tmp23) {
                const obj9 = { rank, style: tmp4.rank };
                tmp23 = closure_7(CheckpointRankTagDefault, obj9);
              }
              cResult[12] = rank;
              cResult[13] = tmp4.rank;
              cResult[14] = tmp23;
              tmp21 = tmp23;
            }
          }
        }
        if (null != unknownCover) {
          const obj10 = { source: null, style: null, resizeMode: "cover" };
          const tmp19 = FastImageDefault;
          obj10.source = AvatarUtilsDefault.makeSource(unknownCover);
          obj10.style = tmp4.coverImage;
          let tmp16 = closure_7(tmp19, obj10);
        } else {
          const obj11 = { style: null, children: null };
          const items4 = [, ];
          ({ coverImage: arr2[0], unknownCover: arr2[1] } = tmp4);
          obj11.style = items4;
          obj11.children = closure_7(tmp(8059).UnknownGameIcon, { size: "lg" });
          tmp16 = closure_7(View, obj11);
        }
        cResult[8] = unknownCover;
        ({ coverImage: tmp3[9], unknownCover } = tmp4);
        cResult[10] = unknownCover;
        cResult[11] = tmp16;
      }
    }
  }
  let applicationIconURL = stateFromStores;
  if (stateFromStores == null) {
    const obj12 = { id, icon: null, fallbackAvatar: false };
    let tmp11 = coverImageHash;
    if (coverImageHash == null) {
      tmp11 = iconHash;
    }
    obj12.icon = tmp11;
    applicationIconURL = AvatarUtilsDefault.getApplicationIconURL(obj12);
  }
  cResult[3] = coverImageHash;
  cResult[4] = stateFromStores;
  cResult[5] = iconHash;
  cResult[6] = id;
  cResult[7] = applicationIconURL;
  unknownCover = applicationIconURL;
  const tmpResult = id(504);
}) : (function GameCard(game) {
  game = game.game;
  const id = game.id;
  let coverImageHash = game.coverImageHash;
  const rank = game.rank;
  ({ name, iconHash } = game);
  ({ label, accessibilityLabel } = game);
  const tmp = closure_10();
  items = [GameStore];
  let stateFromStores = id(504).useStateFromStores(items, () => GameStore.getCoverImageUrl(id));
  if (stateFromStores == null) {
    const obj3 = { id, icon: null, fallbackAvatar: false };
    if (coverImageHash == null) {
      coverImageHash = iconHash;
    }
    obj3.icon = coverImageHash;
    stateFromStores = AvatarUtilsDefault.getApplicationIconURL(obj3);
  }
  const obj4 = { accessible: true, accessibilityLabel, style: tmp.game, children: null };
  const obj5 = { style: tmp.cover, children: null };
  if (null != stateFromStores) {
    const obj6 = { source: null, style: null, resizeMode: "cover" };
    const tmp13 = FastImageDefault;
    obj6.source = AvatarUtilsDefault.makeSource(stateFromStores);
    obj6.style = tmp.coverImage;
    let tmp10 = closure_7(tmp13, obj6);
    let tmp9 = closure_7;
  } else {
    const obj7 = { style: null, children: null };
    const items1 = [, ];
    ({ coverImage: arr2[0], unknownCover: arr2[1] } = tmp);
    obj7.style = items1;
    obj7.children = closure_7(tmp2(8059).UnknownGameIcon, { size: "lg" });
    tmp9 = closure_7;
    tmp10 = closure_7(View, obj7);
  }
  const items2 = [tmp10, ];
  let tmp9Result = null != rank;
  if (tmp9Result) {
    const obj9 = { rank, style: tmp.rank };
    tmp9Result = tmp9(CheckpointRankTagDefault, obj9);
  }
  items2[1] = tmp9Result;
  obj5.children = items2;
  const items3 = [closure_8(View, obj5), ];
  const obj10 = { style: tmp.gameText, children: null };
  const items4 = [tmp9(id(5220).Text, { variant: "text-md/semibold", style: tmp.gameName, lineClamp: 2, children: name }), tmp9(CheckpointTextDefault, { variant: "experimental/mono-md/bold", style: tmp.gameLabel, children: label })];
  obj10.children = items4;
  items3[1] = closure_8(View, obj10);
  obj4.children = items3;
  return closure_8(View, obj4);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointGamesStatsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointGamesStatsScreen() {
  const cResult = stateFromStores1(576).c(86);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [CheckpointStore];
    const fn = function s() {
      const stats = CheckpointStore.stats;
      let games;
      if (stats != null) {
        games = stats.games;
      }
      return games;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = stateFromStores1(576);
  const stateFromStores = stateFromStores1(504).useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [CheckpointStore];
    class S {
      constructor() {
        globalStats = closure_1_5.globalStats;
        games = undefined;
        if (globalStats != null) {
          games = globalStats.games;
        }
        return games;
      }
    }
    cResult[2] = items1;
    cResult[3] = S;
    let tmp10 = S;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = stateFromStores1(504);
  stateFromStores1 = stateFromStores1(504).useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [CheckpointStore];
    class S {
      constructor() {
        globalStats = closure_1_5.globalStats;
        games = undefined;
        if (globalStats != null) {
          games = globalStats.games;
        }
        return games;
      }
    }
    cResult[4] = items2;
    cResult[5] = tmp16;
    let tmp14 = tmp16;
    let tmp13 = items2;
  } else {
    tmp13 = cResult[4];
    tmp14 = cResult[5];
  }
  const tmpResult3 = stateFromStores1(504);
  const stateFromStores2 = stateFromStores1(504).useStateFromStores(tmp13, tmp14);
  let totalGamesPlayed;
  if (stateFromStores != null) {
    totalGamesPlayed = stateFromStores.totalGamesPlayed;
  }
  if (cResult[6] !== totalGamesPlayed) {
    let num7;
    class S {
      constructor() {
        globalStats = closure_1_5.globalStats;
        games = undefined;
        if (globalStats != null) {
          games = globalStats.games;
        }
        return games;
      }
    }
    if (num7 == null) {
      num7 = 0;
    }
    let rounded = Math.round(num7);
    let totalGamesPlayed1;
    if (stateFromStores != null) {
      totalGamesPlayed1 = stateFromStores.totalGamesPlayed;
    }
    cResult[6] = totalGamesPlayed1;
    cResult[7] = rounded;
    let tmp19 = rounded;
  } else {
    tmp19 = cResult[7];
  }
  let games1;
  if (stateFromStores != null) {
    games1 = stateFromStores.games;
  }
  if (cResult[8] !== games1) {
    let games2;
    if (stateFromStores != null) {
      games2 = stateFromStores.games;
    }
    if (games2 == null) {
      games2 = [];
    }
    class S {
      constructor() {
        globalStats = closure_1_5.globalStats;
        games = undefined;
        if (globalStats != null) {
          games = globalStats.games;
        }
        return games;
      }
    }
    if (stateFromStores != null) {
      let games = stateFromStores.games;
    }
    cResult[8] = games;
    cResult[9] = games2;
  }
  if (cResult[10] === stateFromStores1) {
    if (cResult[11] === stateFromStores2) {
      if (cResult[12] === tmp19) {
        if (cResult[13] === tmp4.container) {
          if (cResult[14] === tmp4.games) {
            if (cResult[15] === tmp4.globalContainer) {
              if (cResult[16] === tmp4.globalHeading) {
                if (cResult[17] === tmp4.globe) {
                  if (cResult[18] === tmp4.header) {
                    if (cResult[19] === tmp4.title) {
                      if (cResult[20] === tmp4.titleText) {
                        class S {
                          constructor() {
                            globalStats = closure_1_5.globalStats;
                            games = undefined;
                            if (globalStats != null) {
                              games = globalStats.games;
                            }
                            return games;
                          }
                        }
                        const _Symbol3 = Symbol;
                        if (cResult[28] !== Symbol.for("react.early_return_sentinel")) {
                          return tmp30;
                        } else {
                          let _HermesInternal = HermesInternal;
                          class S {
                            constructor() {
                              globalStats = closure_1_5.globalStats;
                              games = undefined;
                              if (globalStats != null) {
                                games = globalStats.games;
                              }
                              return games;
                            }
                          }
                          if (cResult[55] !== tmp19) {
                            class S {
                              constructor() {
                                globalStats = closure_1_5.globalStats;
                                games = undefined;
                                if (globalStats != null) {
                                  games = globalStats.games;
                                }
                                return games;
                              }
                            }
                            const tmp73 = closure_7(CheckpointCountUpStatNumberDefault, { end: null });
                            cResult[55] = tmp19;
                            cResult[56] = tmp73;
                            let tmp70 = tmp73;
                            const obj2 = { end: null };
                          } else {
                            tmp70 = cResult[56];
                          }
                          if (cResult[57] === tmp24) {
                            if (cResult[58] === tmp4.number) {
                              if (cResult[59] === tmp27) {
                                if (cResult[60] === tmp88) {
                                  if (cResult[61] === tmp70) {
                                    let tmp74 = cResult[62];
                                  }
                                  if (cResult[63] !== tmp19) {
                                    const intl2 = tmp(1128).intl;
                                    class S {
                                      constructor() {
                                        globalStats = closure_1_5.globalStats;
                                        games = undefined;
                                        if (globalStats != null) {
                                          games = globalStats.games;
                                        }
                                        return games;
                                      }
                                    }
                                    tmp79[0] = tmp19;
                                    const formatResult = intl2.format(_modDef3088.aJMJ6b, tmp79);
                                    cResult[63] = tmp19;
                                    cResult[64] = formatResult;
                                    let tmp77 = formatResult;
                                  } else {
                                    tmp77 = cResult[64];
                                  }
                                  if (cResult[65] !== tmp77) {
                                    class S {
                                      constructor() {
                                        globalStats = closure_1_5.globalStats;
                                        games = undefined;
                                        if (globalStats != null) {
                                          games = globalStats.games;
                                        }
                                        return games;
                                      }
                                    }
                                    const tmp84 = closure_7(CheckpointTextDefault, { variant: "heading-lg/medium", children: null });
                                    cResult[65] = tmp77;
                                    cResult[66] = tmp84;
                                    let tmp81 = tmp84;
                                    const obj3 = { variant: "heading-lg/medium", children: null };
                                  } else {
                                    tmp81 = cResult[66];
                                  }
                                  class S {
                                    constructor() {
                                      globalStats = closure_1_5.globalStats;
                                      games = undefined;
                                      if (globalStats != null) {
                                        games = globalStats.games;
                                      }
                                      return games;
                                    }
                                  }
                                  const obj4 = { children: null };
                                  const items3 = [tmp28, tmp74, tmp81];
                                  obj4.children = items3;
                                  const tmp87 = closure_8(tmp25, obj4);
                                  cResult[67] = tmp25;
                                  cResult[68] = tmp28;
                                  cResult[69] = tmp74;
                                  cResult[70] = tmp81;
                                  cResult[71] = tmp87;
                                }
                              }
                            }
                          }
                          const obj5 = { accessible: tmp27, accessibilityLabel: tmp88, style: tmp4.number, children: tmp70 };
                          const tmp76 = closure_7(tmp24, obj5);
                          cResult[57] = tmp24;
                          cResult[58] = tmp4.number;
                          cResult[59] = tmp27;
                          cResult[60] = tmp88;
                          cResult[61] = tmp70;
                          cResult[62] = tmp76;
                          tmp74 = tmp76;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  Symbol.for("react.early_return_sentinel");
  let intl = tmp(1128).intl;
  let tmp34 = importDefault;
  let stringResult = intl.string(_modDef3088.HM2fjf);
  if (!stateFromStores2) {
    if (null != stateFromStores1) {
      if (cResult[31] === tmp4.container) {
        if (cResult[34] !== tmp4.globe) {
          const obj6 = { uri: null, style: null };
          class S {
            constructor() {
              globalStats = closure_1_5.globalStats;
              games = undefined;
              if (globalStats != null) {
                games = globalStats.games;
              }
              return games;
            }
          }
          obj6.style = tmp4.globe;
          const tmp39 = closure_7(CheckpointApngPlayerDefault, obj6);
          cResult[34] = tmp4.globe;
          cResult[35] = tmp39;
          let tmp36 = tmp39;
          const tmp34Result = CheckpointApngPlayerDefault;
        } else {
          tmp36 = cResult[35];
        }
        const _Symbol = Symbol;
        class S {
          constructor() {
            globalStats = closure_1_5.globalStats;
            games = undefined;
            if (globalStats != null) {
              games = globalStats.games;
            }
            return games;
          }
        }
        if (tmp40 === Symbol.for("react.memo_cache_sentinel")) {
          const obj7 = { children: null };
          class S {
            constructor() {
              globalStats = closure_1_5.globalStats;
              games = undefined;
              if (globalStats != null) {
                games = globalStats.games;
              }
              return games;
            }
          }
          const tmp34Result3 = CheckpointDisplayTextDefault;
          obj7.children = obj8.string(_modDef3088.qbCgI7).toLocaleUpperCase();
          const tmp44 = closure_7(tmp34Result3, obj7);
          cResult[36] = tmp44;
          let tmp41 = tmp44;
          const stringResult1 = obj8.string(_modDef3088.qbCgI7);
        } else {
          tmp41 = cResult[36];
        }
        if (cResult[37] === tmp4.globalHeading) {
          if (cResult[38] === tmp36) {
            if (cResult[39] === tmp41) {
              let tmp45 = cResult[40];
            }
            const _Symbol2 = Symbol;
            class S {
              constructor() {
                globalStats = closure_1_5.globalStats;
                games = undefined;
                if (globalStats != null) {
                  games = globalStats.games;
                }
                return games;
              }
            }
            if (cResult[42] === tmp4.header) {
              if (cResult[45] !== stateFromStores1) {
                const mapped = items.map((list) => {
                  list = list.list;
                  const first = stateFromStores1[list][0];
                  if (null == first) {
                    return null;
                  } else {
                    const intl = util.intl;
                    const stringResult = intl.string(tmp);
                    const obj = { game: first, label: stringResult.toLocaleUpperCase(), accessibilityLabel: null };
                    const _HermesInternal = HermesInternal;
                    obj.accessibilityLabel = "" + first.name + ", " + stringResult;
                    return React5(closure_11, obj, list);
                  }
                });
                class S {
                  constructor() {
                    globalStats = closure_1_5.globalStats;
                    games = undefined;
                    if (globalStats != null) {
                      games = globalStats.games;
                    }
                    return games;
                  }
                }
                cResult[46] = mapped;
                let tmp55 = mapped;
              } else {
                tmp55 = cResult[46];
              }
              class S {
                constructor() {
                  globalStats = closure_1_5.globalStats;
                  games = undefined;
                  if (globalStats != null) {
                    games = globalStats.games;
                  }
                  return games;
                }
              }
              const obj9 = { style: tmp4.games, children: tmp55 };
              const tmp61 = closure_7(View, obj9);
              cResult[47] = tmp4.games;
              cResult[48] = tmp55;
              cResult[49] = tmp61;
            }
            const obj10 = { style: tmp4.header, children: null };
            const items4 = [tmp45, tmp50];
            obj10.children = items4;
            const tmp54 = closure_8(View, obj10);
            cResult[42] = tmp4.header;
            cResult[43] = tmp45;
            cResult[44] = tmp54;
          }
        }
        const obj11 = { style: tmp4.globalHeading, children: null };
        const items5 = [tmp36, tmp41];
        obj11.children = items5;
        const tmp48 = closure_8(View, obj11);
        cResult[37] = tmp4.globalHeading;
        cResult[38] = tmp36;
        cResult[39] = tmp41;
        cResult[40] = tmp48;
        tmp45 = tmp48;
      }
      const items6 = [tmp4.container, ];
      class S {
        constructor() {
          globalStats = closure_1_5.globalStats;
          games = undefined;
          if (globalStats != null) {
            games = globalStats.games;
          }
          return games;
        }
      }
      cResult[31] = tmp4.container;
      cResult[32] = tmp4.globalContainer;
      cResult[33] = items6;
    }
  }
  CheckpointScreenDefault;
  const container = tmp4.container;
  if (cResult[54] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        globalStats = closure_1_5.globalStats;
        games = undefined;
        if (globalStats != null) {
          games = globalStats.games;
        }
        return games;
      }
    }
    const tmp67 = closure_7(tmp(9592).GameControllerIcon, { size: "refresh_sm", color: null });
    cResult[54] = tmp67;
    let tmp64 = tmp67;
    const obj12 = { size: "refresh_sm", color: null };
  } else {
    tmp64 = cResult[54];
  }
  const obj13 = { style: tmp4.title, children: null };
  const items7 = [tmp64, ];
  tmp34 = CheckpointTextDefault;
  const tmpResult4 = stateFromStores1(504);
  items7[1] = closure_7(tmp34, { variant: "heading-md/extrabold", style: tmp4.titleText, children: stringResult.toLocaleUpperCase() });
  obj13.children = items7;
  closure_8(View, obj13);
  stringResult.toLocaleLowerCase();
  const obj14 = { variant: "heading-md/extrabold", style: tmp4.titleText, children: stringResult.toLocaleUpperCase() };
}) : (function CheckpointGamesStatsScreen() {
  const tmp = closure_10();
  items = [CheckpointStore];
  const stateFromStores = stateFromStores1(504).useStateFromStores(items, () => {
    const stats = CheckpointStore.stats;
    let games;
    if (stats != null) {
      games = stats.games;
    }
    return games;
  });
  let obj = stateFromStores1(504);
  const items1 = [CheckpointStore];
  stateFromStores1 = stateFromStores1(504).useStateFromStores(items1, () => {
    const globalStats = CheckpointStore.globalStats;
    let games;
    if (globalStats != null) {
      games = globalStats.games;
    }
    return games;
  });
  const obj2 = stateFromStores1(504);
  const items2 = [CheckpointStore];
  let num;
  const stateFromStores2 = stateFromStores1(504).useStateFromStores(items2, () => stateFromStores1(12896).hasCheckpointGames(CheckpointStore.stats));
  if (stateFromStores != null) {
    num = stateFromStores.totalGamesPlayed;
  }
  if (num == null) {
    num = 0;
  }
  let rounded = Math.round(num);
  let games;
  if (stateFromStores != null) {
    games = stateFromStores.games;
  }
  if (games == null) {
    games = [];
  }
  let intl = tmp2(1128).intl;
  let stringResult = intl.string(_modDef3088.HM2fjf);
  if (!stateFromStores2) {
    if (null != stateFromStores1) {
      let obj4 = { children: null };
      const obj5 = { style: null, children: null };
      const items3 = [, ];
      ({ container: arr8[0], globalContainer: arr8[1] } = tmp);
      obj5.style = items3;
      const obj6 = { style: tmp.header, children: null };
      const obj7 = { style: tmp.globalHeading, children: null };
      const obj8 = { uri: _modDef12921, style: tmp.globe };
      const items4 = [closure_7(CheckpointApngPlayerDefault, obj8), ];
      const obj9 = { children: null };
      const tmp8Result = CheckpointApngPlayerDefault;
      const intl3 = tmp2(1128).intl;
      const tmp8Result5 = CheckpointDisplayTextDefault;
      obj9.children = intl3.string(_modDef3088.qbCgI7).toLocaleUpperCase();
      items4[1] = closure_7(tmp8Result5, obj9);
      obj7.children = items4;
      const items5 = [closure_8(View, obj7), ];
      const obj10 = { variant: "heading-lg/medium", children: null };
      const stringResult1 = intl3.string(_modDef3088.qbCgI7);
      const intl4 = tmp2(1128).intl;
      obj10.children = intl4.string(_modDef3088["0oDeiM"]);
      items5[1] = closure_7(CheckpointTextDefault, obj10);
      obj6.children = items5;
      const items6 = [closure_8(View, obj6), ];
      const obj11 = {
        style: tmp.games,
        children: items.map((list) => {
              list = list.list;
              const first = stateFromStores1[list][0];
              if (null == first) {
                return null;
              } else {
                const intl = util.intl;
                const stringResult = intl.string(tmp);
                const obj = { game: first, label: stringResult.toLocaleUpperCase(), accessibilityLabel: null };
                const _HermesInternal = HermesInternal;
                obj.accessibilityLabel = "" + first.name + ", " + stringResult;
                return React5(closure_11, obj, list);
              }
            })
      };
      items6[1] = closure_7(View, obj11);
      obj5.children = items6;
      obj4.children = closure_8(View, obj5);
      const tmp8Result6 = CheckpointTextDefault;
    }
    return closure_7(tmp10, obj4);
  }
  const obj12 = { children: null };
  const obj13 = { style: tmp.container, children: null };
  const obj14 = { children: null };
  const obj15 = { style: tmp.title, children: null };
  const items7 = [closure_7(stateFromStores1(9592).GameControllerIcon, { size: "refresh_sm", color: CHECKPOINT_PRIMARY }), ];
  const obj17 = { variant: "heading-md/extrabold", style: tmp.titleText, children: null };
  const obj16 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
  const obj3 = stateFromStores1(504);
  obj17.children = stringResult.toLocaleUpperCase();
  items7[1] = closure_7(CheckpointTextDefault, obj17);
  obj15.children = items7;
  const items8 = [closure_8(View, obj15), , ];
  const tmp8Result7 = CheckpointTextDefault;
  items8[1] = closure_7(View, { accessible: true, accessibilityLabel: "" + rounded + " " + stringResult.toLocaleLowerCase(), style: tmp.number, children: closure_7(CheckpointCountUpStatNumberDefault, { end: rounded }) });
  const obj19 = { variant: "heading-lg/medium", children: null };
  const obj18 = { accessible: true, accessibilityLabel: "" + rounded + " " + stringResult.toLocaleLowerCase(), style: tmp.number, children: closure_7(CheckpointCountUpStatNumberDefault, { end: rounded }) };
  const intl2 = tmp2(1128).intl;
  obj19.children = intl2.format(_modDef3088.aJMJ6b, { numGames: rounded });
  items8[2] = closure_7(CheckpointTextDefault, obj19);
  obj14.children = items8;
  const items9 = [closure_8(View, obj14), ];
  const tmp8Result8 = CheckpointTextDefault;
  items9[1] = closure_7(View, {
    style: tmp.games,
    children: games.map((game, index) => {
      game = game.game;
      const sum = index + 1;
      const rounded = Math.round(game.numSessions);
      const obj = { game, rank: sum, label: rounded, accessibilityLabel: null };
      const intl = stateFromStores1(1128).intl;
      obj.accessibilityLabel = intl.formatToPlainString(_modDef3088.mqdLhl, { gameName: game.name, rank: sum, numSessions: rounded });
      return closure_1_7(closure_1_11, obj, game.id);
    })
  });
  obj13.children = items9;
  obj12.children = closure_8(View, obj13);
  obj4 = obj12;
  const obj20 = {
    style: tmp.games,
    children: games.map((game, index) => {
      game = game.game;
      const sum = index + 1;
      const rounded = Math.round(game.numSessions);
      const obj = { game, rank: sum, label: rounded, accessibilityLabel: null };
      const intl = stateFromStores1(1128).intl;
      obj.accessibilityLabel = intl.formatToPlainString(_modDef3088.mqdLhl, { gameName: game.name, rank: sum, numSessions: rounded });
      return closure_1_7(closure_1_11, obj, game.id);
    })
  };
});