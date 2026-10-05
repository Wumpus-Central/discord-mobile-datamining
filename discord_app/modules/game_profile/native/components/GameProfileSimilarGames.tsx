// === Module 8540: GameProfileSimilarGames ===

// Module 8540 (GameProfileSimilarGames)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8319 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8325 */;
import GameProfileConstants from "GameProfileConstants" /* 8358 */;
import defaultMVCPConfig from "defaultMVCPConfig" /* 8371 */;
import GameProfileHorizontalScrollViewDefault from "GameProfileHorizontalScrollView" /* 8372 */;
import GameProfileSkeleton from "GameProfileSkeleton" /* 8386 */;
import GameProfileSectionDefault from "GameProfileSection" /* 8388 */;
import GameProfileSkeletonCardRowDefault from "GameProfileSkeletonCardRow" /* 8405 */;
import SimilarGamesConstants from "SimilarGamesConstants" /* 8415 */;
import useSimilarGamesDefault from "useSimilarGames" /* 8541 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const GameProfileSkeletonDefault = GameProfileSkeleton;
let dependencyMap, importDefault, obj1, openGameProfileModalResult;

let c10;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ Image: hasOwnProperty, Pressable: metroRequire, View: metroImportDefault } = react_native);
let closure_8 = GameProfileConstants.MOBILE_GAME_PROFILE_MAX_WIDTH;
const set = SimilarGamesConstants.SIMILAR_GAMES_BLOCKED_GAME_IDS;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const PX_12 = nativeDefault.space.PX_12;
let c13 = 1.34;
const PX_16 = nativeDefault.space.PX_16;
const PX_122 = nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, card: obj4, spacer: { width: PX_12 }, listPadding: { width: PX_16 }, coverArtContainer: obj5, coverArt: { width: "100%", height: "100%" }, coverArtPlaceholder: { position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }, coverArtFallback: obj6, skeletonCards: obj7, skeletonArtwork: obj8 };
obj2 = { gap: nativeDefault.space.PX_8, marginHorizontal: -1 * nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { gap: nativeDefault.space.PX_4 };
obj5 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj6 = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, justifyContent: "center", alignItems: "center", padding: nativeDefault.space.PX_8 };
obj7 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj8 = { borderRadius: nativeDefault.radii.sm };
let closure_16 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_16();
  if (cResult[0] !== tmp2.spacer) {
    const obj2 = { style: tmp2.spacer };
    const tmp6 = authStore(metroImportDefault, obj2);
    cResult[0] = tmp2.spacer;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  const obj = { style: closure_16().spacer };
  return authStore(metroImportDefault, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_16();
  if (cResult[0] !== tmp2.listPadding) {
    const obj2 = { style: tmp2.listPadding };
    const tmp6 = authStore(metroImportDefault, obj2);
    cResult[0] = tmp2.listPadding;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  const obj = { style: closure_16().listPadding };
  return authStore(metroImportDefault, obj);
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((game) => {
  let closure_2;
  let closure_3;
  let items2;
  let obj10;
  let obj6;
  let obj8;
  let shouldOpenGameProfile;
  let obj = game(576);
  const cResult = obj.c(37);
  game = game.game;
  const trackAction = game.trackAction;
  const cardWidth = game.cardWidth;
  let tmp4 = closure_16();
  const result = cardWidth * c13;
  if (cResult[0] === cardWidth) {
    let tmp6;
    if (cResult[1] === result) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === result) {
      let tmp8;
      let tmp16;
      if (cResult[4] === game) {
        tmp8 = cResult[5];
      }
      dependencyMap = tmp8;
      const tmp13 = _slicedToArray(shouldOpenGameProfile.useState(undefined), 2);
      _slicedToArray = tmp13[1];
      if (cResult[6] !== game.id) {
        let obj2 = { gameId: game.id, source: tmp(8319).GameProfileSources.SimilarGames };
        cResult[6] = game.id;
        cResult[7] = obj2;
        tmp16 = obj2;
      } else {
        tmp16 = cResult[7];
      }
      const tmp18 = trackAction(8321)(tmp16);
      shouldOpenGameProfile = tmp18.shouldOpenGameProfile;
      const gameId = tmp18.gameId;
      const tmp17 = trackAction;
      if (cResult[8] === game.id) {
        if (cResult[9] === gameId) {
          if (cResult[10] === shouldOpenGameProfile) {
            if (cResult[13] !== tmp8) {
              class O {
                constructor() {
                  tmp = closure_3(closure_2);
                  return;
                }
              }
              cResult[13] = tmp8;
              cResult[14] = O;
            } else {
              class O {
                constructor() {
                  tmp = closure_3(closure_2);
                  return;
                }
              }
            }
            if (cResult[15] !== cardWidth) {
              class O {
                constructor() {
                  tmp = closure_3(closure_2);
                  return;
                }
              }
              tmp22[0] = cardWidth;
              cResult[15] = cardWidth;
              cResult[16] = tmp22;
            } else {
              class O {
                constructor() {
                  tmp = closure_3(closure_2);
                  return;
                }
              }
            }
            if (cResult[17] === tmp4.card) {
              let tmp29Result;
              class O {
                constructor() {
                  tmp = closure_3(closure_2);
                  return;
                }
              }
              if (cResult[20] !== game.name) {
                class O {
                  constructor() {
                    tmp = closure_3(closure_2);
                    return;
                  }
                }
                const obj4 = { gameName: game.name };
                cResult[20] = game.name;
                cResult[21] = obj3.formatToPlainString(game(1126).t["8QLQB+"], obj4);
                const formatToPlainStringResult = obj3.formatToPlainString(game(1126).t["8QLQB+"], obj4);
              } else {
                class O {
                  constructor() {
                    tmp = closure_3(closure_2);
                    return;
                  }
                }
              }
              if (cResult[22] === tmp6) {
                class O {
                  constructor() {
                    tmp = closure_3(closure_2);
                    return;
                  }
                }
              }
              if (null != tmp8) {
                class O {
                  constructor() {
                    tmp = closure_3(closure_2);
                    return;
                  }
                }
                const items = [tmp4.coverArtContainer, tmp6];
                tmp31[0] = items;
                let tmp32 = tmp15;
                if (null != tmp8 && tmp13[0] !== tmp8) {
                  class O {
                    constructor() {
                      tmp = closure_3(closure_2);
                      return;
                    }
                  }
                  const obj5 = { style: tmp4.coverArtPlaceholder, children: closure_10(tmp17(8386), obj6) };
                  const GameProfileSkeletonContainer = tmp(8386).GameProfileSkeletonContainer;
                  obj6 = { style: tmp4.coverArt };
                  tmp32 = closure_10(GameProfileSkeletonContainer, obj5);
                }
                const items1 = [tmp32, ];
                const obj7 = { source: obj8, style: null, onLoadEnd: O };
                obj8 = { uri: tmp8 };
                class T {
                  constructor() {
                    tmp2 = closure_2;
                    tmp = closure_0;
                    tmp3 = trackAction(closure_0(closure_2[10]).GameProfileTrackActionActions.ClickSimilarGame, game.id);
                    tmp4 = shouldOpenGameProfile;
                    if (tmp4) {
                      tmp5 = gameId;
                      tmp6 = null;
                      tmp4 = null != gameId;
                    }
                    if (tmp4) {
                      tmp7 = closure_1;
                      tmp8 = closure_1(tmp2[12]);
                      obj = { gameId: null, gameProfileModalChecks: null, source: null };
                      tmp9 = gameId;
                      obj.gameId = gameId;
                      obj1 = { shouldOpenGameProfile: true, gameId: null };
                      obj1.gameId = gameId;
                      obj.gameProfileModalChecks = obj1;
                      openGameProfileModal = tmp8.openGameProfileModal;
                      obj.source = tmp(tmp2[10]).GameProfileSources.SimilarGames;
                      openGameProfileModalResult = openGameProfileModal(obj);
                    }
                    return;
                  }
                }
                items1[1] = closure_10(gameId, obj7);
                tmp31[1] = items1;
                tmp29Result = closure_11(closure_7, tmp31);
              } else {
                class O {
                  constructor() {
                    tmp = closure_3(closure_2);
                    return;
                  }
                }
                const obj9 = { style: items2, children: closure_10(game(4886).Text, obj10) };
                items2 = [tmp4.coverArtFallback, tmp6];
                obj10 = { variant: "text-xs/medium", color: "text-overlay-light", lineClamp: 3, children: game.name };
                tmp29Result = closure_10(closure_7, obj9);
              }
              cResult[22] = tmp6;
              cResult[23] = tmp8;
              cResult[24] = game.name;
              cResult[25] = O;
              cResult[26] = null != tmp8 && tmp13[0] !== tmp8;
              cResult[27] = tmp4.coverArt;
              class T {
                constructor() {
                  tmp2 = closure_2;
                  tmp = closure_0;
                  tmp3 = trackAction(closure_0(closure_2[10]).GameProfileTrackActionActions.ClickSimilarGame, game.id);
                  tmp4 = shouldOpenGameProfile;
                  if (tmp4) {
                    tmp5 = gameId;
                    tmp6 = null;
                    tmp4 = null != gameId;
                  }
                  if (tmp4) {
                    tmp7 = closure_1;
                    tmp8 = closure_1(tmp2[12]);
                    obj = { gameId: null, gameProfileModalChecks: null, source: null };
                    tmp9 = gameId;
                    obj.gameId = gameId;
                    obj1 = { shouldOpenGameProfile: true, gameId: null };
                    obj1.gameId = gameId;
                    obj.gameProfileModalChecks = obj1;
                    openGameProfileModal = tmp8.openGameProfileModal;
                    obj.source = tmp(tmp2[10]).GameProfileSources.SimilarGames;
                    openGameProfileModalResult = openGameProfileModal(obj);
                  }
                  return;
                }
              }
              cResult[29] = tmp4.coverArtFallback;
              cResult[30] = tmp4.coverArtPlaceholder;
              cResult[31] = tmp29Result;
            }
            const items3 = [tmp4.card, tmp22];
            cResult[17] = tmp4.card;
            cResult[18] = tmp22;
            cResult[19] = items3;
          }
        }
      }
      class T {
        constructor() {
          tmp2 = closure_2;
          tmp = closure_0;
          tmp3 = trackAction(closure_0(closure_2[10]).GameProfileTrackActionActions.ClickSimilarGame, game.id);
          tmp4 = shouldOpenGameProfile;
          if (tmp4) {
            tmp5 = gameId;
            tmp6 = null;
            tmp4 = null != gameId;
          }
          if (tmp4) {
            tmp7 = closure_1;
            tmp8 = closure_1(tmp2[12]);
            obj = { gameId: null, gameProfileModalChecks: null, source: null };
            tmp9 = gameId;
            obj.gameId = gameId;
            obj1 = { shouldOpenGameProfile: true, gameId: null };
            obj1.gameId = gameId;
            obj.gameProfileModalChecks = obj1;
            openGameProfileModal = tmp8.openGameProfileModal;
            obj.source = tmp(tmp2[10]).GameProfileSources.SimilarGames;
            openGameProfileModalResult = openGameProfileModal(obj);
          }
          return;
        }
      }
      cResult[8] = game.id;
      cResult[9] = gameId;
      cResult[10] = shouldOpenGameProfile;
      cResult[11] = trackAction;
      cResult[12] = T;
    }
    const _Math = Math;
    const coverURL = game.getCoverURL(Math.ceil(result));
    cResult[3] = result;
    cResult[4] = game;
    cResult[5] = coverURL;
    tmp8 = coverURL;
  }
  tmp7[0] = cardWidth;
  tmp7[1] = result;
  cResult[0] = cardWidth;
  cResult[1] = result;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : ((game) => {
  let closure_3;
  let first;
  let intl;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj10;
  let obj3;
  let obj6;
  let obj8;
  let tmp13Result1;
  game = game.game;
  const trackAction = game.trackAction;
  const cardWidth = game.cardWidth;
  _slicedToArray = undefined;
  let shouldOpenGameProfile;
  const tmp = closure_16();
  const result = cardWidth * c13;
  size = { width: cardWidth, height: result };
  const coverURL = game.getCoverURL(Math.ceil(result));
  [first, _slicedToArray] = shouldOpenGameProfile.useState(undefined);
  let obj = { gameId: game.id, source: game(coverURL[10]).GameProfileSources.SimilarGames };
  const tmp8 = trackAction(coverURL[11]);
  const tmp8Result = tmp8(obj);
  shouldOpenGameProfile = tmp8Result.shouldOpenGameProfile;
  const gameId = tmp8Result.gameId;
  const items = [game.id, trackAction, shouldOpenGameProfile, gameId];
  const items1 = [coverURL];
  const callback = shouldOpenGameProfile.useCallback(() => {
    let obj2;
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickSimilarGame, game.id);
    const tmp4 = shouldOpenGameProfile && null != gameId;
    if (tmp4) {
      const obj = { gameId, gameProfileModalChecks: obj2, source: GameProfileAnalyticUtils.GameProfileSources.SimilarGames };
      obj2 = { shouldOpenGameProfile: true, gameId };
      const openGameProfileModal = GameProfileActionCreatorsDefault.openGameProfileModal;
      GameProfileActionCreatorsDefault;
      openGameProfileModal(obj);
    }
  }, items);
  let obj2 = { style: items2, onPress: callback, accessibilityRole: "button", accessibilityLabel: intl.formatToPlainString(game(coverURL[13]).t["8QLQB+"], obj3), children: tmp13Result1 };
  items2 = [tmp.card, { width: cardWidth }];
  const callback1 = shouldOpenGameProfile.useCallback(() => {
    closure_3(coverURL);
  }, items1);
  intl = game(coverURL[13]).intl;
  obj3 = { gameName: game.name };
  const tmp6 = trackAction;
  if (null != coverURL) {
    const obj4 = { style: items3, children: items4 };
    items3 = [tmp.coverArtContainer, size];
    let tmp13Result = null != coverURL && first !== coverURL;
    if (tmp13Result) {
      const obj5 = { style: tmp.coverArtPlaceholder, children: closure_10(tmp6(coverURL[14]), obj6) };
      const GameProfileSkeletonContainer = tmp9(tmp7[14]).GameProfileSkeletonContainer;
      obj6 = { style: tmp.coverArt };
      tmp13Result = closure_10(GameProfileSkeletonContainer, obj5);
    }
    items4 = [tmp13Result, ];
    const obj7 = { source: obj8, style: tmp.coverArt, onLoadEnd: callback1 };
    obj8 = { uri: coverURL };
    items4[1] = closure_10(gameId, obj7);
    tmp13Result1 = closure_11(closure_7, obj4);
  } else {
    const obj9 = { style: items5, children: closure_10(game(coverURL[15]).Text, obj10) };
    items5 = [tmp.coverArtFallback, size];
    obj10 = { variant: "text-xs/medium", color: "text-overlay-light", lineClamp: 3, children: game.name };
    tmp13Result1 = closure_10(closure_7, obj9);
  }
  return closure_10(closure_6, obj2);
}));
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = memo2(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let animationDelayMs;
  let cardWidth;
  let items;
  const obj = react2;
  const cResult = obj.c(12);
  ({ animationDelayMs, cardWidth } = arg0);
  const tmp4 = closure_16();
  const result = cardWidth * c13;
  if (cResult[0] === cardWidth) {
    let tmp6;
    let tmp7;
    if (cResult[1] === result) {
      tmp6 = cResult[2];
    }
    if (cResult[3] !== cardWidth) {
      const obj2 = { width: cardWidth };
      cResult[3] = cardWidth;
      cResult[4] = obj2;
      tmp7 = obj2;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] === tmp6) {
      let tmp8;
      if (cResult[6] === tmp4.skeletonArtwork) {
        tmp8 = cResult[7];
      }
      if (cResult[8] === animationDelayMs) {
        if (cResult[9] === tmp7) {
          let tmp12;
          if (cResult[10] === tmp8) {
            tmp12 = cResult[11];
          }
          return tmp12;
        }
      }
      const obj3 = { animationDelayMs, style: tmp7, children: tmp8 };
      const tmp14 = authStore(GameProfileSkeleton.GameProfileSkeletonContainer, obj3);
      cResult[8] = animationDelayMs;
      cResult[9] = tmp7;
      cResult[10] = tmp8;
      cResult[11] = tmp14;
      tmp12 = tmp14;
    }
    const obj4 = { style: items };
    items = [tmp4.skeletonArtwork, tmp6];
    const tmp11 = authStore(GameProfileSkeletonDefault, obj4);
    cResult[5] = tmp6;
    cResult[6] = tmp4.skeletonArtwork;
    cResult[7] = tmp11;
    tmp8 = tmp11;
  }
  size = { width: cardWidth, height: result };
  cResult[0] = cardWidth;
  cResult[1] = result;
  cResult[2] = size;
  tmp6 = size;
}) : ((cardWidth) => {
  let items;
  let obj2;
  cardWidth = cardWidth.cardWidth;
  const animationDelayMs = cardWidth.animationDelayMs;
  const obj = { animationDelayMs, style: { width: cardWidth }, children: authStore(GameProfileSkeletonDefault, obj2) };
  const tmp = closure_16();
  const GameProfileSkeletonContainer = GameProfileSkeleton.GameProfileSkeletonContainer;
  obj2 = { style: items };
  items = [tmp.skeletonArtwork, ];
  size = { width: cardWidth, height: cardWidth * c13 };
  items[1] = size;
  return authStore(GameProfileSkeletonContainer, obj);
}));
const memo3 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = memo3(ReactCompilerGating.isReactCompilerEnabled() ? ((cardWidth) => {
  let container;
  let header;
  let skeletonCards;
  let tmp5;
  let obj = cardWidth(576);
  const cResult = obj.c(9);
  const tmp = cardWidth;
  cardWidth = cardWidth.cardWidth;
  const tmp4 = closure_16();
  ({ container, header, skeletonCards } = tmp4);
  if (cResult[0] !== cardWidth) {
    const _Array = Array;
    const arr = Array.from({ length: 4 }, (arg0, arg1) => {
      const obj = { animationDelayMs: arg1 * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS, cardWidth };
      return authStore(closure_20, obj, arg1);
    });
    cResult[0] = cardWidth;
    cResult[1] = arr;
    tmp5 = arr;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.skeletonCards) {
    let tmp8;
    if (cResult[3] === tmp5) {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp4.container) {
      if (cResult[6] === tmp4.header) {
        let tmp10;
        if (cResult[7] === tmp8) {
          tmp10 = cResult[8];
        }
        return tmp10;
      }
    }
    const obj2 = { style: container, headerStyle: header, showViewAllSkeleton: false, skeletonTitleWidth: 124, children: tmp8 };
    const tmp12 = closure_10(tmp(8388).GameProfileSectionSkeleton, obj2);
    cResult[5] = tmp4.container;
    cResult[6] = tmp4.header;
    cResult[7] = tmp8;
    cResult[8] = tmp12;
    tmp10 = tmp12;
  }
  const tmp9 = closure_10(GameProfileSkeletonCardRowDefault, { contentContainerStyle: skeletonCards, children: tmp5 });
  cResult[2] = tmp4.skeletonCards;
  cResult[3] = tmp5;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : ((cardWidth) => {
  let obj2;
  let tmp2;
  cardWidth = cardWidth.cardWidth;
  const tmp = closure_16();
  let obj = { style: tmp.container, headerStyle: tmp.header, showViewAllSkeleton: false, skeletonTitleWidth: 124, children: closure_10(tmp2, obj2) };
  const GameProfileSectionSkeleton = cardWidth(8388).GameProfileSectionSkeleton;
  obj2 = {
    contentContainerStyle: tmp.skeletonCards,
    children: Array.from({ length: 4 }, (arg0, arg1) => {
      const obj = { animationDelayMs: arg1 * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS, cardWidth };
      return authStore(closure_20, obj, arg1);
    })
  };
  tmp2 = GameProfileSkeletonCardRowDefault;
  return closure_10(GameProfileSectionSkeleton, obj);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let container;
  let gameId;
  let header;
  let isFetching;
  let similarGames;
  let trackAction;
  let obj = trackAction(576);
  const cResult = obj.c(14);
  ({ gameId, trackAction } = arg0);
  const tmp4 = closure_16();
  ({ similarGames, isFetching } = useSimilarGamesDefault(gameId));
  useSimilarGamesDefault(gameId);
  const result = (Math.min(useWindowDimensionsDefault().width, closure_8) - 2 * PX_16 - 2 * PX_12 - PX_122) / 3;
  importDefault = result;
  if (set.has(gameId)) {
    return null;
  } else if (isFetching) {
    let tmp22;
    if (cResult[0] !== result) {
      const obj2 = { cardWidth: result };
      const tmp25 = closure_10(closure_21, obj2);
      cResult[0] = result;
      cResult[1] = tmp25;
      tmp22 = tmp25;
    } else {
      tmp22 = cResult[1];
    }
    return tmp22;
  } else if (0 === similarGames.length) {
    return null;
  } else {
    let tmp9;
    const _Symbol = Symbol;
    ({ container, header } = tmp4);
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = trackAction(1126).intl;
      const stringResult = intl.string(trackAction(1126).t["6rLyQB"]);
      cResult[2] = stringResult;
      tmp9 = stringResult;
    } else {
      tmp9 = cResult[2];
    }
    if (cResult[3] === result) {
      let tmp11;
      if (cResult[4] === trackAction) {
        tmp11 = cResult[5];
      }
      const sum = result + PX_12;
      if (cResult[6] === similarGames) {
        if (cResult[7] === tmp11) {
          let tmp13;
          if (cResult[8] === sum) {
            tmp13 = cResult[9];
          }
          if (cResult[10] === tmp4.container) {
            if (cResult[11] === tmp4.header) {
              let tmp18;
              if (cResult[12] === tmp13) {
                tmp18 = cResult[13];
              }
              return tmp18;
            }
          }
          const obj3 = { style: container, headerStyle: header, title: tmp9, children: null };
          class L {
            constructor(arg0) {
              obj = { game: arg0.item, trackAction, cardWidth: closure_1 };
              return jsx(closure_19, obj);
            }
          }
          const tmp20 = closure_10(GameProfileSectionDefault, obj3);
          cResult[10] = tmp4.container;
          cResult[11] = tmp4.header;
          cResult[12] = tmp13;
          cResult[13] = tmp20;
          tmp18 = tmp20;
        }
      }
      const obj4 = { horizontal: true, renderScrollComponent: GameProfileHorizontalScrollViewDefault, data: null, renderItem: tmp11, showsHorizontalScrollIndicator: false, ItemSeparatorComponent, ListHeaderComponent: ListFooterComponent, ListFooterComponent, decelerationRate: "fast", snapToInterval: sum };
      const FlashList = trackAction(8371).FlashList;
      class L {
        constructor(arg0) {
          obj = { game: arg0.item, trackAction, cardWidth: closure_1 };
          return jsx(closure_19, obj);
        }
      }
      const tmp17 = closure_10(FlashList, obj4);
      cResult[6] = similarGames;
      cResult[7] = tmp11;
      cResult[8] = sum;
      cResult[9] = tmp17;
      tmp13 = tmp17;
    }
    class L {
      constructor(arg0) {
        obj = { game: arg0.item, trackAction, cardWidth: closure_1 };
        return jsx(closure_19, obj);
      }
    }
    cResult[3] = result;
    cResult[4] = trackAction;
    cResult[5] = L;
    tmp11 = L;
  }
}) : ((arg0) => {
  let FlashList;
  let cardWidth;
  let gameId;
  let intl;
  let isFetching;
  let obj5;
  let require;
  let similarGames;
  let trackAction;
  ({ gameId, trackAction: require } = arg0);
  const tmp = closure_16();
  ({ similarGames, isFetching } = useSimilarGamesDefault(gameId));
  useSimilarGamesDefault(gameId);
  const result = (Math.min(useWindowDimensionsDefault().width, closure_8) - 2 * PX_16 - 2 * PX_12 - PX_122) / 3;
  importDefault = result;
  let tmp7 = null;
  if (!set.has(gameId)) {
    let tmp8;
    if (isFetching) {
      let obj = { cardWidth: result };
      tmp8 = closure_10(closure_21, obj);
    } else {
      tmp8 = null;
      if (0 !== similarGames.length) {
        ({ container: obj2.style, header: obj2.headerStyle } = tmp);
        const obj3 = { style: null, headerStyle: null, title: intl.string(intl2.t["6rLyQB"]), children: closure_10(FlashList, obj5) };
        const tmp2Result = GameProfileSectionDefault;
        intl = intl2.intl;
        obj5 = {
          horizontal: true,
          renderScrollComponent: GameProfileHorizontalScrollViewDefault,
          data: similarGames,
          renderItem(game) {
                  const obj = { game: game.item, trackAction: require, cardWidth };
                  return authStore(closure_19, obj);
                },
          showsHorizontalScrollIndicator: false,
          ItemSeparatorComponent,
          ListHeaderComponent: ListFooterComponent,
          ListFooterComponent,
          decelerationRate: "fast",
          snapToInterval: result + PX_12
        };
        FlashList = defaultMVCPConfig.FlashList;
        tmp8 = closure_10(tmp2Result, obj3);
      }
    }
    tmp7 = tmp8;
  }
  return tmp7;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSimilarGames.tsx");

export default tmp6;