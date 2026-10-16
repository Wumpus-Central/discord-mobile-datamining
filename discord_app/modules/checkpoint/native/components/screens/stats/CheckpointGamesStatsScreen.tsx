// === Module 12690: CheckpointGamesStatsScreen ===

// Module 12690 (CheckpointGamesStatsScreen)
import _mod17 from "module_17" /* 17 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1417 */;
import _modDef3123 from "module_3123" /* 3123 */;
import FastImageDefault from "FastImage" /* 5091 */;
import GameControllerIcon from "GameControllerIcon" /* 9449 */;
import CheckpointTextDefault from "CheckpointText" /* 12676 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 12678 */;
import NumberAnimationDefault from "NumberAnimation" /* 12682 */;
import CheckpointRankTagDefault from "CheckpointRankTag" /* 12687 */;
import GameStore from "GameStore" /* 2022 */;
import CheckpointStore from "CheckpointStore" /* 12654 */;
import CheckpointConstants from "CheckpointConstants" /* 5499 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5153 */;
import "ReactCompilerGating";
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = { container: { width: "100%", flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 }, title: null, titleText: null, number: null, games: null, game: null, cover: null, coverImage: null, unknownCover: null, rank: null, gameText: null, gameName: null, gameSessions: null };
let obj2 = { width: "100%", flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
obj.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.titleText = { flexShrink: 1 };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.number = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let obj4 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj.games = { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_16, rowGap: nativeDefault.space.PX_12 };
let obj5 = { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_16, rowGap: nativeDefault.space.PX_12 };
obj.game = { width: "30%", gap: nativeDefault.space.PX_8 };
obj.cover = { width: "87.5%", aspectRatio: 0.75 };
obj.coverImage = { width: "100%", height: "100%", borderWidth: 1, borderColor: CHECKPOINT_PRIMARY };
let obj6 = { width: "30%", gap: nativeDefault.space.PX_8 };
obj.unknownCover = { backgroundColor: nativeDefault.colors.BLACK, alignItems: "center", justifyContent: "center" };
obj.rank = { position: "absolute", bottom: 0, left: 0 };
let obj7 = { backgroundColor: nativeDefault.colors.BLACK, alignItems: "center", justifyContent: "center" };
obj.gameText = { gap: nativeDefault.space.PX_4 };
obj.gameName = { color: CheckpointConstants.CHECKPOINT_WHITE };
obj.gameSessions = { fontSize: 14, lineHeight: 18 };
let closure_9 = createStyles.createStyles(obj);
let obj8 = { gap: nativeDefault.space.PX_4 };
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameCard(arg0) {
  const cResult = id(576).c(43);
  ({ game, rank, numSessions } = arg0);
  id = game.id;
  ({ name, iconHash, coverImageHash } = game);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id) {
    const fn = function l() {
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
        if (cResult[8] === name) {
          if (cResult[9] === numSessions) {
            if (cResult[10] === rank) {
              let tmp12 = cResult[11];
              let tmp13 = cResult[12];
              let flag = cResult[13];
              let tmp14 = cResult[14];
            }
            if (cResult[15] === unknownCover) {
              if (cResult[16] === tmp4.coverImage) {
                if (cResult[17] === tmp4.unknownCover) {
                  if (cResult[19] === rank) {
                    if (cResult[20] === tmp4.rank) {
                      let tmp28 = cResult[21];
                    }
                    if (cResult[22] === tmp4.cover) {
                      if (cResult[23] === tmp19) {
                        if (cResult[24] === tmp28) {
                          let tmp32 = cResult[25];
                        }
                        if (cResult[26] === name) {
                          if (cResult[27] === tmp4.gameName) {
                            let tmp36 = cResult[28];
                          }
                          if (cResult[29] === tmp13) {
                            if (cResult[30] === tmp4.gameSessions) {
                              let tmp39 = cResult[31];
                            }
                            if (cResult[32] === tmp4.gameText) {
                              if (cResult[33] === tmp36) {
                                if (cResult[34] === tmp39) {
                                  let tmp43 = cResult[35];
                                }
                                if (cResult[36] === tmp12) {
                                  if (cResult[37] === tmp4.game) {
                                    if (cResult[38] === tmp43) {
                                      if (cResult[39] === flag) {
                                        if (cResult[40] === tmp14) {
                                          if (cResult[41] === tmp32) {
                                            let tmp47 = cResult[42];
                                          }
                                          return tmp47;
                                        }
                                      }
                                    }
                                  }
                                }
                                const obj2 = { accessible: flag, accessibilityLabel: tmp14, style: tmp4.game, children: null };
                                const items1 = [tmp32, tmp43];
                                obj2.children = items1;
                                const tmp49 = closure_8(tmp12, obj2);
                                cResult[36] = tmp12;
                                cResult[37] = tmp4.game;
                                cResult[38] = tmp43;
                                cResult[39] = flag;
                                cResult[40] = tmp14;
                                cResult[41] = tmp32;
                                cResult[42] = tmp49;
                                tmp47 = tmp49;
                              }
                            }
                            const obj4 = { style: tmp4.gameText, children: null };
                            const items2 = [tmp36, tmp39];
                            obj4.children = items2;
                            const tmp46 = closure_8(View, obj4);
                            cResult[32] = tmp4.gameText;
                            cResult[33] = tmp36;
                            cResult[34] = tmp39;
                            cResult[35] = tmp46;
                            tmp43 = tmp46;
                          }
                          const obj5 = { variant: "experimental/mono-md/bold", style: tmp4.gameSessions, children: tmp13 };
                          const tmp42 = closure_7(CheckpointTextDefault, obj5);
                          cResult[29] = tmp13;
                          cResult[30] = tmp4.gameSessions;
                          cResult[31] = tmp42;
                          tmp39 = tmp42;
                        }
                        const obj6 = { variant: "text-md/semibold", style: tmp4.gameName, lineClamp: 2, children: name };
                        const tmp38 = closure_7(tmp(5149).Text, obj6);
                        cResult[26] = name;
                        cResult[27] = tmp4.gameName;
                        cResult[28] = tmp38;
                        tmp36 = tmp38;
                      }
                    }
                    const obj7 = { style: tmp4.cover, children: null };
                    const items3 = [tmp19, tmp28];
                    obj7.children = items3;
                    const tmp35 = closure_8(View, obj7);
                    cResult[22] = tmp4.cover;
                    cResult[23] = tmp19;
                    cResult[24] = tmp28;
                    cResult[25] = tmp35;
                    tmp32 = tmp35;
                  }
                  const obj9 = { rank, style: tmp4.rank };
                  const tmp31 = closure_7(CheckpointRankTagDefault, obj9);
                  cResult[19] = rank;
                  cResult[20] = tmp4.rank;
                  cResult[21] = tmp31;
                  tmp28 = tmp31;
                }
              }
            }
            if (null != unknownCover) {
              const obj10 = { source: null, style: null, resizeMode: "cover" };
              const tmp26 = FastImageDefault;
              obj10.source = AvatarUtilsDefault.makeSource(unknownCover);
              obj10.style = tmp4.coverImage;
              let tmp23 = closure_7(tmp26, obj10);
            } else {
              const obj11 = { style: null, children: null };
              const items4 = [, ];
              ({ coverImage: arr2[0], unknownCover: arr2[1] } = tmp4);
              obj11.style = items4;
              obj11.children = closure_7(tmp(7908).UnknownGameIcon, { size: "lg" });
              tmp23 = closure_7(View, obj11);
            }
            cResult[15] = unknownCover;
            ({ coverImage: tmp3[16], unknownCover } = tmp4);
            cResult[17] = unknownCover;
            cResult[18] = tmp23;
          }
        }
        const _Math = Math;
        const rounded = Math.round(numSessions);
        const intl = tmp(1128).intl;
        const obj12 = { gameName: name, rank, numSessions: rounded };
        const formatToPlainStringResult = intl.formatToPlainString(_modDef3123.mqdLhl, obj12);
        cResult[8] = name;
        cResult[9] = numSessions;
        cResult[10] = rank;
        cResult[11] = View;
        cResult[12] = rounded;
        cResult[13] = true;
        cResult[14] = formatToPlainStringResult;
        tmp14 = formatToPlainStringResult;
        flag = true;
        tmp13 = rounded;
        tmp12 = View;
      }
    }
  }
  let applicationIconURL = stateFromStores;
  if (stateFromStores == null) {
    const obj13 = { id, icon: null, fallbackAvatar: false };
    let tmp11 = coverImageHash;
    if (coverImageHash == null) {
      tmp11 = iconHash;
    }
    obj13.icon = tmp11;
    applicationIconURL = AvatarUtilsDefault.getApplicationIconURL(obj13);
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
  ({ name, coverImageHash } = game);
  const rank = game.rank;
  const tmp = closure_9();
  const items = [GameStore];
  let stateFromStores = id(504).useStateFromStores(items, () => GameStore.getCoverImageUrl(id));
  if (stateFromStores == null) {
    const obj3 = { id, icon: null, fallbackAvatar: false };
    if (coverImageHash == null) {
      coverImageHash = game.iconHash;
    }
    obj3.icon = coverImageHash;
    stateFromStores = AvatarUtilsDefault.getApplicationIconURL(obj3);
  }
  const rounded = Math.round(game.numSessions);
  const obj4 = { accessible: true, accessibilityLabel: null, style: null, children: null };
  const intl = tmp2(1128).intl;
  obj4.accessibilityLabel = intl.formatToPlainString(_modDef3123.mqdLhl, { gameName: name, rank, numSessions: rounded });
  obj4.style = tmp.game;
  const obj5 = { style: tmp.cover, children: null };
  if (null != stateFromStores) {
    const obj6 = { source: null, style: null, resizeMode: "cover" };
    const tmp9Result = FastImageDefault;
    obj6.source = AvatarUtilsDefault.makeSource(stateFromStores);
    obj6.style = tmp.coverImage;
    let tmp11 = closure_7(tmp9Result, obj6);
    let tmp10 = closure_7;
    const tmp9Result2 = AvatarUtilsDefault;
  } else {
    tmp10 = closure_7;
    const obj7 = { style: null, children: null };
    const items1 = [, ];
    ({ coverImage: arr2[0], unknownCover: arr2[1] } = tmp);
    obj7.style = items1;
    obj7.children = closure_7(tmp2(7908).UnknownGameIcon, { size: "lg" });
    tmp11 = closure_7(View, obj7);
  }
  const items2 = [tmp11, tmp10(CheckpointRankTagDefault, { rank, style: tmp.rank })];
  obj5.children = items2;
  const items3 = [closure_8(View, obj5), ];
  const obj9 = { style: tmp.gameText, children: null };
  const items4 = [tmp10(id(5149).Text, { variant: "text-md/semibold", style: tmp.gameName, lineClamp: 2, children: name }), tmp10(CheckpointTextDefault, { variant: "experimental/mono-md/bold", style: tmp.gameSessions, children: rounded })];
  obj9.children = items4;
  items3[1] = closure_8(View, obj9);
  obj4.children = items3;
  return closure_8(View, obj4);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointGamesStatsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointGamesStatsScreen() {
  const cResult = c.c(51);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function o() {
      stats = stats.stats;
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
  const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
  let totalGamesPlayed;
  if (stateFromStores != null) {
    totalGamesPlayed = stateFromStores.totalGamesPlayed;
  }
  if (cResult[2] !== totalGamesPlayed) {
    let num3;
    if (stateFromStores != null) {
      num3 = stateFromStores.totalGamesPlayed;
    }
    if (num3 == null) {
      num3 = 0;
    }
    const rounded = Math.round(num3);
    let totalGamesPlayed1;
    if (stateFromStores != null) {
      totalGamesPlayed1 = stateFromStores.totalGamesPlayed;
    }
    cResult[2] = totalGamesPlayed1;
    cResult[3] = rounded;
    let tmp10 = rounded;
  } else {
    tmp10 = cResult[3];
  }
  let games;
  if (stateFromStores != null) {
    games = stateFromStores.games;
  }
  if (cResult[4] !== games) {
    let games1;
    if (stateFromStores != null) {
      games1 = stateFromStores.games;
    }
    if (games1 == null) {
      games1 = [];
    }
    let games2;
    if (stateFromStores != null) {
      games2 = stateFromStores.games;
    }
    cResult[4] = games2;
    cResult[5] = games1;
    let arr2 = games1;
  } else {
    arr2 = cResult[5];
  }
  if (cResult[6] === tmp10) {
    if (cResult[7] === tmp4.container) {
      if (cResult[8] === tmp4.title) {
        if (cResult[9] === tmp4.titleText) {
          const _HermesInternal = HermesInternal;
          const combined = "" + cResult[14] + " " + cResult[15];
          if (cResult[20] !== tmp10) {
            const obj2 = { end: tmp10 };
            const tmp34 = React5(NumberAnimationDefault, obj2);
            cResult[20] = tmp10;
            cResult[21] = tmp34;
            let tmp31 = tmp34;
          } else {
            tmp31 = cResult[21];
          }
          if (cResult[22] === cResult[10]) {
            if (cResult[23] === tmp4.number) {
              if (cResult[24] === tmp31) {
                if (cResult[25] === tmp19) {
                  if (cResult[26] === combined) {
                    let tmp35 = cResult[27];
                  }
                  if (cResult[28] !== tmp10) {
                    const intl2 = util.intl;
                    const obj3 = { numGames: tmp10 };
                    const formatResult = intl2.format(_modDef3123.aJMJ6b, obj3);
                    cResult[28] = tmp10;
                    cResult[29] = formatResult;
                    let tmp38 = formatResult;
                  } else {
                    tmp38 = cResult[29];
                  }
                  if (cResult[30] !== tmp38) {
                    const obj4 = { variant: "heading-lg/medium", children: tmp38 };
                    const tmp44 = React5(CheckpointTextDefault, obj4);
                    cResult[30] = tmp38;
                    cResult[31] = tmp44;
                    let tmp41 = tmp44;
                  } else {
                    tmp41 = cResult[31];
                  }
                  if (cResult[32] === tmp16) {
                    if (cResult[33] === tmp35) {
                      if (cResult[34] === tmp41) {
                        if (cResult[35] === tmp20) {
                          let tmp45 = cResult[36];
                        }
                        if (cResult[37] !== arr2) {
                          const _Symbol = Symbol;
                          if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                            class F {
                              constructor(arg0, arg1) {
                                game = arg0.game;
                                obj = { game, rank: arg1 + 1, numSessions: arg0.numSessions };
                                return closure_1_7(closure_1_10, obj, game.id);
                              }
                            }
                            cResult[39] = F;
                          } else {
                            class F {
                              constructor(arg0, arg1) {
                                game = arg0.game;
                                obj = { game, rank: arg1 + 1, numSessions: arg0.numSessions };
                                return closure_1_7(closure_1_10, obj, game.id);
                              }
                            }
                          }
                          const mapped = arr2.map(F);
                          cResult[37] = arr2;
                          cResult[38] = mapped;
                        } else {
                          class F {
                            constructor(arg0, arg1) {
                              game = arg0.game;
                              obj = { game, rank: arg1 + 1, numSessions: arg0.numSessions };
                              return closure_1_7(closure_1_10, obj, game.id);
                            }
                          }
                          if (cResult[40] === tmp4.games) {
                            class F {
                              constructor(arg0, arg1) {
                                game = arg0.game;
                                obj = { game, rank: arg1 + 1, numSessions: arg0.numSessions };
                                return closure_1_7(closure_1_10, obj, game.id);
                              }
                            }
                            if (cResult[43] === tmp17) {
                              class F {
                                constructor(arg0, arg1) {
                                  game = arg0.game;
                                  obj = { game, rank: arg1 + 1, numSessions: arg0.numSessions };
                                  return closure_1_7(closure_1_10, obj, game.id);
                                }
                              }
                            }
                            const obj5 = { style: tmp21, children: null };
                            const items1 = [tmp45, tmp53];
                            obj5.children = items1;
                            const tmp59 = closure_1_8(tmp17, obj5);
                            cResult[43] = tmp17;
                            cResult[44] = tmp45;
                            cResult[45] = tmp53;
                            cResult[46] = tmp21;
                            cResult[47] = tmp59;
                          }
                          const obj6 = { style: tmp48, children: tmp49 };
                          const tmp56 = React5(View, obj6);
                          cResult[40] = tmp4.games;
                          cResult[41] = tmp49;
                          cResult[42] = tmp56;
                        }
                      }
                    }
                  }
                  const obj7 = { children: null };
                  const items2 = [tmp20, tmp35, tmp41];
                  obj7.children = items2;
                  const tmp47 = closure_1_8(tmp16, obj7);
                  cResult[32] = tmp16;
                  cResult[33] = tmp35;
                  cResult[34] = tmp41;
                  cResult[35] = tmp20;
                  cResult[36] = tmp47;
                  tmp45 = tmp47;
                }
              }
            }
          }
          const obj8 = { accessible: cResult[16], accessibilityLabel: combined, style: tmp4.number, children: tmp31 };
          const tmp37 = React5(cResult[10], obj8);
          cResult[22] = cResult[10];
          cResult[23] = tmp4.number;
          cResult[24] = tmp31;
          cResult[25] = cResult[16];
          cResult[26] = combined;
          cResult[27] = tmp37;
          tmp35 = tmp37;
        }
      }
    }
  }
  const intl = util.intl;
  let tmp22 = importDefault;
  titleText = intl.string(_modDef3123.HM2fjf);
  const tmpResult = initialize;
  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor(arg0, arg1) {
        game = arg0.game;
        obj = { game, rank: arg1 + 1, numSessions: arg0.numSessions };
        return closure_1_7(closure_1_10, obj, game.id);
      }
    }
    const obj9 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
    const tmp27 = React5(GameControllerIcon.GameControllerIcon, obj9);
    cResult[19] = tmp27;
    const tmp25 = tmp27;
  } else {
    class F {
      constructor(arg0, arg1) {
        game = arg0.game;
        obj = { game, rank: arg1 + 1, numSessions: arg0.numSessions };
        return closure_1_7(closure_1_10, obj, game.id);
      }
    }
  }
  const obj10 = { style: tmp4.title, children: null };
  const items3 = [tmp25, ];
  tmp22 = CheckpointTextDefault;
  const tmp23 = CheckpointScreenDefault;
  items3[1] = React5(tmp22, { variant: "heading-md/extrabold", style: tmp4.titleText, children: titleText.toLocaleUpperCase() });
  obj10.children = items3;
  const obj11 = { variant: "heading-md/extrabold", style: tmp4.titleText, children: titleText.toLocaleUpperCase() };
  const tmp28 = closure_1_8(View, obj10);
  cResult[6] = tmp10;
  cResult[7] = tmp4.container;
  ({ title: tmp3[8], titleText } = tmp4);
  cResult[9] = titleText;
  cResult[10] = View;
  cResult[11] = View;
  cResult[12] = View;
  cResult[13] = tmp23;
  cResult[14] = tmp10;
  cResult[15] = titleText.toLocaleLowerCase();
  cResult[16] = true;
  cResult[17] = tmp28;
  cResult[18] = tmp4.container;
  const toLocaleLowerCaseResult = titleText.toLocaleLowerCase();
}) : (function CheckpointGamesStatsScreen() {
  const tmp = closure_9();
  const items = [CheckpointStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    stats = stats.stats;
    let games;
    if (stats != null) {
      games = stats.games;
    }
    return games;
  });
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.totalGamesPlayed;
  }
  if (num == null) {
    num = 0;
  }
  const rounded = Math.round(num);
  let games;
  if (stateFromStores != null) {
    games = stateFromStores.games;
  }
  if (games == null) {
    games = [];
  }
  const intl = util.intl;
  const stringResult = intl.string(_modDef3123.HM2fjf);
  const obj2 = { children: null };
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { children: null };
  const obj5 = { style: tmp.title, children: null };
  const items1 = [React5(GameControllerIcon.GameControllerIcon, { size: "refresh_sm", color: CHECKPOINT_PRIMARY }), ];
  const obj7 = { variant: "heading-md/extrabold", style: tmp.titleText, children: null };
  const obj6 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
  const tmp6 = CheckpointScreenDefault;
  obj7.children = stringResult.toLocaleUpperCase();
  items1[1] = React5(CheckpointTextDefault, obj7);
  obj5.children = items1;
  const items2 = [closure_1_8(View, obj5), , ];
  items2[1] = React5(View, { accessible: true, accessibilityLabel: "" + rounded + " " + stringResult.toLocaleLowerCase(), style: tmp.number, children: React5(NumberAnimationDefault, { end: rounded }) });
  const obj9 = { variant: "heading-lg/medium", children: null };
  const obj8 = { accessible: true, accessibilityLabel: "" + rounded + " " + stringResult.toLocaleLowerCase(), style: tmp.number, children: React5(NumberAnimationDefault, { end: rounded }) };
  const intl2 = util.intl;
  obj9.children = intl2.format(_modDef3123.aJMJ6b, { numGames: rounded });
  items2[2] = React5(CheckpointTextDefault, obj9);
  obj4.children = items2;
  const items3 = [closure_1_8(View, obj4), ];
  items3[1] = React5(View, {
    style: tmp.games,
    children: games.map((game, index) => {
      game = game.game;
      return closure_1_7(closure_1_10, { game, rank: index + 1, numSessions: game.numSessions }, game.id);
    })
  });
  obj3.children = items3;
  obj2.children = closure_1_8(View, obj3);
  return React5(tmp6, obj2);
});