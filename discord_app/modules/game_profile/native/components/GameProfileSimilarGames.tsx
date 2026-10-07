// === Module 8573: GameProfileSimilarGames ===

// Module 8573 (GameProfileSimilarGames)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8352 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8358 */;
import _mod8404 from "module_8404" /* 8404 */;
import GameProfileSkeleton from "GameProfileSkeleton" /* 8419 */;
import GameProfileSkeletonCardRowDefault from "GameProfileSkeletonCardRow" /* 8438 */;
import useSimilarGamesDefault from "useSimilarGames" /* 8574 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const GameProfileSkeletonDefault = GameProfileSkeleton;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, Pressable: metroRequire, View: closure_7 } = get_ActivityIndicator);
let closure_8 = fn(8391).MOBILE_GAME_PROFILE_MAX_WIDTH;
fn(8448).SIMILAR_GAMES_BLOCKED_GAME_IDS;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let c13 = 1.34;
const PX_16 = nativeDefault.space.PX_16;
const PX_12 = nativeDefault.space.PX_12;
const createStyles = fn(4896);
let obj = { container: { gap: nativeDefault.space.PX_8, marginHorizontal: -1 * nativeDefault.space.PX_16 }, header: null, card: null, spacer: null, listPadding: null, coverArtContainer: null, coverArt: null, coverArtPlaceholder: null, coverArtFallback: null, skeletonCards: null, skeletonArtwork: null };
let obj3 = { gap: nativeDefault.space.PX_8, marginHorizontal: -1 * nativeDefault.space.PX_16 };
obj.header = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj.card = { gap: nativeDefault.space.PX_4 };
obj.spacer = { width: PX_12 };
obj.listPadding = { width: PX_16 };
let obj5 = { gap: nativeDefault.space.PX_4 };
obj.coverArtContainer = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.coverArt = { width: "100%", height: "100%" };
obj.coverArtPlaceholder = { position: "absolute", top: 0, right: 0, bottom: 0, left: 0 };
let obj6 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.coverArtFallback = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, justifyContent: "center", alignItems: "center", padding: nativeDefault.space.PX_8 };
let obj7 = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, justifyContent: "center", alignItems: "center", padding: nativeDefault.space.PX_8 };
obj.skeletonCards = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj8 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj.skeletonArtwork = { borderRadius: nativeDefault.radii.sm };
let closure_16 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
const ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const tmp2 = closure_16();
  if (cResult[0] !== tmp2.spacer) {
    const obj2 = { style: tmp2.spacer };
    const tmp6 = v65535(React5, obj2);
    cResult[0] = tmp2.spacer;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => v65535(React5, { style: closure_16().spacer }));
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const tmp2 = closure_16();
  if (cResult[0] !== tmp2.listPadding) {
    const obj2 = { style: tmp2.listPadding };
    const tmp6 = v65535(React5, obj2);
    cResult[0] = tmp2.listPadding;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => v65535(React5, { style: closure_16().listPadding }));
ReactCompilerGating = fn(558);
let closure_19 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((game) => {
  let tmp = name;
  const cResult = name(576).c(37);
  name = game.game;
  const trackAction = game.trackAction;
  const cardWidth = game.cardWidth;
  let coverArtPlaceholder = closure_16();
  const result = cardWidth * c13;
  if (cResult[0] === cardWidth) {
    if (cResult[1] === result) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === result) {
      if (cResult[4] === name) {
        let tmp7 = cResult[5];
      }
      dependencyMap = tmp7;
      [, _slicedToArray] = shouldOpenGameProfile.useState(undefined);
      if (cResult[6] !== name.id) {
        let obj2 = { gameId: name.id, source: tmp(8352).GameProfileSources.SimilarGames };
        cResult[6] = name.id;
        cResult[7] = obj2;
        let tmp15 = obj2;
      } else {
        tmp15 = cResult[7];
      }
      let tmp16 = trackAction;
      const tmp17 = trackAction(8354)(tmp15);
      shouldOpenGameProfile = tmp17.shouldOpenGameProfile;
      const gameId = tmp17.gameId;
      if (cResult[8] === name.id) {
        if (cResult[9] === gameId) {
          if (cResult[10] === shouldOpenGameProfile) {
            if (cResult[13] !== tmp7) {
              class O {
                constructor() {
                  tmp = closure_3(closure_2);
                  return;
                }
              }
              cResult[13] = tmp7;
              cResult[14] = O;
              coverArtFallback = O;
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
              tmp20[0] = cardWidth;
              cResult[15] = cardWidth;
              cResult[16] = tmp20;
            } else {
              class O {
                constructor() {
                  tmp = closure_3(closure_2);
                  return;
                }
              }
            }
            if (cResult[17] === coverArtPlaceholder.card) {
              class O {
                constructor() {
                  tmp = closure_3(closure_2);
                  return;
                }
              }
              if (cResult[20] !== name.name) {
                class O {
                  constructor() {
                    tmp = closure_3(closure_2);
                    return;
                  }
                }
                const obj4 = { gameName: name.name };
                const formatToPlainStringResult = obj3.formatToPlainString(tmp(1126).t["8QLQB+"], obj4);
                cResult[20] = name.name;
                cResult[21] = formatToPlainStringResult;
              } else {
                class O {
                  constructor() {
                    tmp = closure_3(closure_2);
                    return;
                  }
                }
              }
              if (cResult[22] === tmp5) {
                class O {
                  constructor() {
                    tmp = closure_3(closure_2);
                    return;
                  }
                }
              }
              if (null != tmp7) {
                class O {
                  constructor() {
                    tmp = closure_3(closure_2);
                    return;
                  }
                }
                const items = [coverArtPlaceholder.coverArtContainer, tmp5];
                tmp28[0] = items;
                let tmp29 = tmp14;
                if (tmp14) {
                  class O {
                    constructor() {
                      tmp = closure_3(closure_2);
                      return;
                    }
                  }
                  const obj5 = { style: coverArtPlaceholder.coverArtPlaceholder, children: null };
                  tmp16 = tmp16(8419);
                  const obj6 = { style: coverArtPlaceholder.coverArt };
                  obj5.children = closure_10(tmp16, obj6);
                  tmp29 = closure_10(tmp(8419).GameProfileSkeletonContainer, obj5);
                }
                const items1 = [tmp29, ];
                tmp = gameId;
                const obj7 = { source: null, style: null, onLoadEnd: null };
                const obj8 = { uri: tmp7 };
                obj7.source = obj8;
                class T {
                  constructor() {
                    tmp2 = closure_2;
                    tmp = closure_0;
                    tmp3 = trackAction(closure_0(closure_2[10]).GameProfileTrackActionActions.ClickSimilarGame, game.id);
                    tmp4 = shouldOpenGameProfile;
                    if (shouldOpenGameProfile) {
                      tmp5 = gameId;
                      tmp6 = null;
                      tmp4 = null != gameId;
                    }
                    if (tmp4) {
                      tmp7 = closure_1;
                      obj = closure_1(tmp2[12]);
                      obj1 = { gameId: null, gameProfileModalChecks: null, source: null };
                      tmp8 = gameId;
                      obj1.gameId = gameId;
                      obj4 = { shouldOpenGameProfile: true, gameId: null };
                      obj4.gameId = gameId;
                      obj1.gameProfileModalChecks = obj4;
                      obj1.source = tmp(tmp2[10]).GameProfileSources.SimilarGames;
                      openGameProfileModalResult = obj.openGameProfileModal(obj1);
                    }
                    return;
                  }
                }
                obj7.style = tmp2;
                obj7.onLoadEnd = coverArtFallback;
                items1[1] = closure_10(gameId, obj7);
                tmp28[1] = items1;
                let tmp26Result = closure_11(closure_7, tmp28);
              } else {
                class O {
                  constructor() {
                    tmp = closure_3(closure_2);
                    return;
                  }
                }
                const obj9 = { style: null, children: null };
                const items2 = [coverArtPlaceholder.coverArtFallback, tmp5];
                obj9.style = items2;
                const obj10 = { variant: "text-xs/medium", color: "text-overlay-light", lineClamp: 3, children: name.name };
                obj9.children = closure_10(tmp(4892).Text, obj10);
                tmp26Result = closure_10(closure_7, obj9);
              }
              cResult[22] = tmp5;
              cResult[23] = tmp7;
              name = name.name;
              cResult[24] = name;
              cResult[25] = coverArtFallback;
              cResult[26] = tmp14;
              cResult[27] = coverArtPlaceholder.coverArt;
              class T {
                constructor() {
                  tmp2 = closure_2;
                  tmp = closure_0;
                  tmp3 = trackAction(closure_0(closure_2[10]).GameProfileTrackActionActions.ClickSimilarGame, game.id);
                  tmp4 = shouldOpenGameProfile;
                  if (shouldOpenGameProfile) {
                    tmp5 = gameId;
                    tmp6 = null;
                    tmp4 = null != gameId;
                  }
                  if (tmp4) {
                    tmp7 = closure_1;
                    obj = closure_1(tmp2[12]);
                    obj1 = { gameId: null, gameProfileModalChecks: null, source: null };
                    tmp8 = gameId;
                    obj1.gameId = gameId;
                    obj4 = { shouldOpenGameProfile: true, gameId: null };
                    obj4.gameId = gameId;
                    obj1.gameProfileModalChecks = obj4;
                    obj1.source = tmp(tmp2[10]).GameProfileSources.SimilarGames;
                    openGameProfileModalResult = obj.openGameProfileModal(obj1);
                  }
                  return;
                }
              }
              ({ coverArtContainer: tmp3[28], coverArtFallback } = coverArtPlaceholder);
              cResult[29] = coverArtFallback;
              coverArtPlaceholder = coverArtPlaceholder.coverArtPlaceholder;
              cResult[30] = coverArtPlaceholder;
              cResult[31] = tmp26Result;
            }
            const items3 = [coverArtPlaceholder.card, tmp20];
            cResult[17] = coverArtPlaceholder.card;
            cResult[18] = tmp20;
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
          if (shouldOpenGameProfile) {
            tmp5 = gameId;
            tmp6 = null;
            tmp4 = null != gameId;
          }
          if (tmp4) {
            tmp7 = closure_1;
            obj = closure_1(tmp2[12]);
            obj1 = { gameId: null, gameProfileModalChecks: null, source: null };
            tmp8 = gameId;
            obj1.gameId = gameId;
            obj4 = { shouldOpenGameProfile: true, gameId: null };
            obj4.gameId = gameId;
            obj1.gameProfileModalChecks = obj4;
            obj1.source = tmp(tmp2[10]).GameProfileSources.SimilarGames;
            openGameProfileModalResult = obj.openGameProfileModal(obj1);
          }
          return;
        }
      }
      cResult[8] = name.id;
      cResult[9] = gameId;
      cResult[10] = shouldOpenGameProfile;
      cResult[11] = trackAction;
      cResult[12] = T;
    }
    const _Math = Math;
    const coverURL = name.getCoverURL(Math.ceil(result));
    cResult[3] = result;
    cResult[4] = name;
    cResult[5] = coverURL;
    tmp7 = coverURL;
  }
  tmp6[0] = cardWidth;
  tmp6[1] = result;
  cResult[0] = cardWidth;
  cResult[1] = result;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  let obj = name(576);
  tmp2 = dependencyMap;
}) : ((game) => {
  game = game.game;
  const trackAction = game.trackAction;
  const cardWidth = game.cardWidth;
  _slicedToArray = undefined;
  let shouldOpenGameProfile;
  const tmp = closure_16();
  const result = cardWidth * c13;
  const size = { width: cardWidth, height: result };
  const coverURL = game.getCoverURL(Math.ceil(result));
  let tmp4 = _slicedToArray(shouldOpenGameProfile.useState(undefined), 2);
  _slicedToArray = tmp4[1];
  let obj = { gameId: game.id, source: game(coverURL[10]).GameProfileSources.SimilarGames };
  const tmp7Result = trackAction(coverURL[11])(obj);
  shouldOpenGameProfile = tmp7Result.shouldOpenGameProfile;
  const gameId = tmp7Result.gameId;
  const items = [game.id, trackAction, shouldOpenGameProfile, gameId];
  const items1 = [coverURL];
  const callback = shouldOpenGameProfile.useCallback(() => {
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickSimilarGame, game.id);
    let tmp4 = shouldOpenGameProfile;
    if (shouldOpenGameProfile) {
      tmp4 = null != gameId;
    }
    if (tmp4) {
      const obj2 = { gameId, gameProfileModalChecks: null, source: null };
      const obj3 = { shouldOpenGameProfile: true, gameId };
      obj2.gameProfileModalChecks = obj3;
      obj2.source = GameProfileAnalyticUtils.GameProfileSources.SimilarGames;
      GameProfileActionCreatorsDefault.openGameProfileModal(obj2);
    }
  }, items);
  let obj2 = { style: null, onPress: callback, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const items2 = [tmp.card, { width: cardWidth }];
  obj2.style = items2;
  const callback1 = shouldOpenGameProfile.useCallback(() => {
    closure_3(coverURL);
  }, items1);
  const intl = game(coverURL[13]).intl;
  obj2.accessibilityLabel = intl.formatToPlainString(game(coverURL[13]).t["8QLQB+"], { gameName: game.name });
  if (null != coverURL) {
    const obj4 = { style: null, children: null };
    const items3 = [tmp.coverArtContainer, size];
    obj4.style = items3;
    let tmp12Result = null != coverURL;
    if (tmp12Result) {
      tmp12Result = tmp4[0] !== coverURL;
    }
    if (tmp12Result) {
      const obj5 = { style: tmp.coverArtPlaceholder, children: null };
      const obj6 = { style: tmp.coverArt };
      obj5.children = closure_10(trackAction(tmp6[14]), obj6);
      tmp12Result = closure_10(tmp8(tmp6[14]).GameProfileSkeletonContainer, obj5);
    }
    const items4 = [tmp12Result, ];
    const obj7 = { source: null, style: null, onLoadEnd: null };
    const obj8 = { uri: coverURL };
    obj7.source = obj8;
    obj7.style = tmp.coverArt;
    obj7.onLoadEnd = callback1;
    items4[1] = closure_10(gameId, obj7);
    obj4.children = items4;
    let tmp12Result1 = closure_11(closure_7, obj4);
  } else {
    const obj9 = { style: null, children: null };
    const items5 = [tmp.coverArtFallback, size];
    obj9.style = items5;
    const obj10 = { variant: "text-xs/medium", color: "text-overlay-light", lineClamp: 3, children: game.name };
    obj9.children = closure_10(tmp8(tmp6[15]).Text, obj10);
    tmp12Result1 = closure_10(closure_7, obj9);
  }
  obj2.children = tmp12Result1;
  return closure_10(closure_6, obj2);
}));
ReactCompilerGating = fn(558);
let closure_20 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(12);
  ({ animationDelayMs, cardWidth } = arg0);
  const tmp4 = closure_16();
  const result = cardWidth * c13;
  if (cResult[0] === cardWidth) {
    if (cResult[1] === result) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] !== cardWidth) {
      const obj2 = { width: cardWidth };
      cResult[3] = cardWidth;
      cResult[4] = obj2;
      let tmp7 = obj2;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] === tmp6) {
      if (cResult[6] === tmp4.skeletonArtwork) {
        let tmp8 = cResult[7];
      }
      if (cResult[8] === animationDelayMs) {
        if (cResult[9] === tmp7) {
          if (cResult[10] === tmp8) {
            let tmp12 = cResult[11];
          }
          return tmp12;
        }
      }
      const obj3 = { animationDelayMs, style: tmp7, children: tmp8 };
      const tmp14 = v65535(GameProfileSkeleton.GameProfileSkeletonContainer, obj3);
      cResult[8] = animationDelayMs;
      cResult[9] = tmp7;
      cResult[10] = tmp8;
      cResult[11] = tmp14;
      tmp12 = tmp14;
    }
    const obj4 = { style: null };
    const items = [tmp4.skeletonArtwork, tmp6];
    obj4.style = items;
    const tmp11 = v65535(GameProfileSkeletonDefault, obj4);
    cResult[5] = tmp6;
    cResult[6] = tmp4.skeletonArtwork;
    cResult[7] = tmp11;
    tmp8 = tmp11;
  }
  const size = { width: cardWidth, height: result };
  cResult[0] = cardWidth;
  cResult[1] = result;
  cResult[2] = size;
  tmp6 = size;
}) : ((animationDelayMs) => {
  const cardWidth = animationDelayMs.cardWidth;
  const obj = { animationDelayMs: animationDelayMs.animationDelayMs, style: { width: cardWidth }, children: null };
  const obj2 = { style: null };
  const items = [closure_16().skeletonArtwork, ];
  const size = { width: cardWidth, height: cardWidth * c13 };
  items[1] = size;
  obj2.style = items;
  obj.children = v65535(GameProfileSkeletonDefault, obj2);
  return v65535(GameProfileSkeleton.GameProfileSkeletonContainer, obj);
}));
ReactCompilerGating = fn(558);
let closure_21 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((cardWidth) => {
  const cResult = cardWidth(576).c(9);
  cardWidth = cardWidth.cardWidth;
  const tmp4 = closure_16();
  ({ container, header, skeletonCards } = tmp4);
  if (cResult[0] !== cardWidth) {
    const _Array = Array;
    const arr = Array.from({ length: 4 }, (arg0, arg1) => v65535(closure_20, { animationDelayMs: arg1 * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS, cardWidth }, arg1));
    cResult[0] = cardWidth;
    cResult[1] = arr;
    let tmp5 = arr;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.skeletonCards) {
    if (cResult[3] === tmp5) {
      let tmp8 = cResult[4];
    }
    if (cResult[5] === tmp4.container) {
      if (cResult[6] === tmp4.header) {
        if (cResult[7] === tmp8) {
          let tmp10 = cResult[8];
        }
        return tmp10;
      }
    }
    const obj2 = { style: container, headerStyle: header, showViewAllSkeleton: false, skeletonTitleWidth: 124, children: tmp8 };
    const tmp12 = closure_10(tmp(8421).GameProfileSectionSkeleton, obj2);
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
  const obj = cardWidth(576);
  tmp = cardWidth;
}) : ((cardWidth) => {
  cardWidth = cardWidth.cardWidth;
  const tmp = closure_16();
  const obj = { style: tmp.container, headerStyle: tmp.header, showViewAllSkeleton: false, skeletonTitleWidth: 124, children: null };
  const obj2 = { contentContainerStyle: tmp.skeletonCards, children: Array.from({ length: 4 }, (arg0, arg1) => v65535(closure_20, { animationDelayMs: arg1 * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS, cardWidth }, arg1)) };
  obj.children = closure_10(GameProfileSkeletonCardRowDefault, obj2);
  return closure_10(cardWidth(8421).GameProfileSectionSkeleton, obj);
}));
ReactCompilerGating = fn(558);
let obj9 = { borderRadius: nativeDefault.radii.sm };
let size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSimilarGames.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = trackAction(576).c(14);
  ({ gameId, trackAction } = arg0);
  const tmp4 = closure_16();
  const obj = trackAction(576);
  ({ similarGames, isFetching } = useSimilarGamesDefault(gameId));
  const result = (Math.min(useWindowDimensionsDefault().width, closure_8) - 2 * PX_16 - 2 * PX_12 - PX_12) / 3;
  importDefault = result;
  if (set.has(gameId)) {
    return null;
  } else if (isFetching) {
    if (cResult[0] !== result) {
      const obj2 = { cardWidth: result };
      const tmp25 = closure_10(closure_21, obj2);
      cResult[0] = result;
      cResult[1] = tmp25;
      let tmp22 = tmp25;
    } else {
      tmp22 = cResult[1];
    }
    return tmp22;
  } else if (0 === similarGames.length) {
    return null;
  } else {
    const _Symbol = Symbol;
    ({ container, header } = tmp4);
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = trackAction(1126).intl;
      const stringResult = intl.string(trackAction(1126).t["6rLyQB"]);
      cResult[2] = stringResult;
      let tmp9 = stringResult;
    } else {
      tmp9 = cResult[2];
    }
    if (cResult[3] === result) {
      if (cResult[4] === trackAction) {
        let tmp11 = cResult[5];
      }
      const sum = result + PX_12;
      if (cResult[6] === similarGames) {
        if (cResult[7] === tmp11) {
          if (cResult[8] === sum) {
            let tmp13 = cResult[9];
          }
          if (cResult[10] === tmp4.container) {
            if (cResult[11] === tmp4.header) {
              if (cResult[12] === tmp13) {
                let tmp18 = cResult[13];
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
          const tmp20 = closure_10(tmp5(8421), obj3);
          cResult[10] = tmp4.container;
          cResult[11] = tmp4.header;
          cResult[12] = tmp13;
          cResult[13] = tmp20;
          tmp18 = tmp20;
        }
      }
      const obj4 = { horizontal: true, renderScrollComponent: tmp5(8405), data: null, renderItem: null, showsHorizontalScrollIndicator: false, ItemSeparatorComponent: null, ListHeaderComponent: null, ListFooterComponent: null, decelerationRate: "fast", snapToInterval: null };
      class L {
        constructor(arg0) {
          obj = { game: arg0.item, trackAction, cardWidth: closure_1 };
          return jsx(closure_19, obj);
        }
      }
      obj4.renderItem = tmp11;
      obj4.ItemSeparatorComponent = ItemSeparatorComponent;
      obj4.ListHeaderComponent = ListFooterComponent;
      obj4.ListFooterComponent = ListFooterComponent;
      obj4.snapToInterval = sum;
      const tmp17 = closure_10(trackAction(8404).FlashList, obj4);
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
  const tmp6 = useSimilarGamesDefault(gameId);
}) : ((arg0) => {
  ({ gameId, trackAction: require } = arg0);
  const tmp = closure_16();
  ({ similarGames, isFetching } = useSimilarGamesDefault(gameId));
  const result = (Math.min(useWindowDimensionsDefault().width, closure_8) - 2 * PX_16 - 2 * PX_12 - PX_12) / 3;
  importDefault = result;
  if (set.has(gameId)) {
    return null;
  } else if (isFetching) {
    const obj = { cardWidth: result };
    let tmp7 = closure_10(closure_21, obj);
  } else if (0 !== similarGames.length) {
    const obj3 = { style: null, headerStyle: null, title: null, children: null };
    ({ container: obj2.style, header: obj2.headerStyle } = tmp);
    const intl = util.intl;
    obj3.title = intl.string(util.t["6rLyQB"]);
    const obj5 = {
      horizontal: true,
      renderScrollComponent: tmp2(8405),
      data: similarGames,
      renderItem(game) {
          return v65535(closure_19, { game: game.item, trackAction, cardWidth });
        },
      showsHorizontalScrollIndicator: false,
      ItemSeparatorComponent,
      ListHeaderComponent: ListFooterComponent,
      ListFooterComponent,
      decelerationRate: "fast",
      snapToInterval: result + PX_12
    };
    obj3.children = closure_10(_mod8404.FlashList, obj5);
    tmp7 = closure_10(tmp2(8421), obj3);
    const tmp2Result = tmp2(8421);
  }
  const tmp4 = useSimilarGamesDefault(gameId);
});