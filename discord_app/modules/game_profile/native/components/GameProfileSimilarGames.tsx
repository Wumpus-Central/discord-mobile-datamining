// discord_app/modules/game_profile/native/components/GameProfileSimilarGames.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import GameProfileActionCreatorsDefault from "../../GameProfileActionCreators.native.tsx";
import GameProfileSkeleton from "GameProfileSkeleton.tsx";
import GameProfileSkeletonCardRowDefault from "GameProfileSkeletonCardRow.tsx";
import useSimilarGamesDefault from "../../hooks/useSimilarGames.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const GameProfileSkeletonDefault = GameProfileSkeleton;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let closure_6 = fn(9269).MOBILE_GAME_PROFILE_MAX_WIDTH;
const jsx = fn(21).jsx;
let c9 = 1.34;
const PX_16 = nativeDefault.space.PX_16;
const PX_12 = nativeDefault.space.PX_12;
const createStyles = fn(4969);
let obj = {
  container: { gap: nativeDefault.space.PX_8, marginHorizontal: -1 * nativeDefault.space.PX_16 },
  header: null,
  card: null,
  spacer: null,
  listPadding: null,
  coverArtContainer: null,
  coverArt: null,
  skeletonCards: null,
  skeletonArtwork: null,
};
let obj3 = { gap: nativeDefault.space.PX_8, marginHorizontal: -1 * nativeDefault.space.PX_16 };
obj.header = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj.card = { gap: nativeDefault.space.PX_4 };
obj.spacer = { width: PX_12 };
obj.listPadding = { width: PX_16 };
let obj5 = { gap: nativeDefault.space.PX_4 };
obj.coverArtContainer = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.coverArt = { width: "100%", height: "100%" };
let obj6 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.skeletonCards = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj7 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj.skeletonArtwork = { borderRadius: nativeDefault.radii.sm };
let closure_12 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
const ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled()
  ? function Spacer() {
      const cResult = c.c(2);
      const tmp2 = closure_12();
      if (cResult[0] !== tmp2.spacer) {
        const obj2 = { style: tmp2.spacer };
        const tmp6 = <hasOwnProperty style={tmp2.spacer} />;
        cResult[0] = tmp2.spacer;
        cResult[1] = tmp6;
        let tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : function Spacer() {
      return <hasOwnProperty style={closure_12().spacer} />;
    };
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ListPadding() {
      const cResult = c.c(2);
      const tmp2 = closure_12();
      if (cResult[0] !== tmp2.listPadding) {
        const obj2 = { style: tmp2.listPadding };
        const tmp6 = <hasOwnProperty style={tmp2.listPadding} />;
        cResult[0] = tmp2.listPadding;
        cResult[1] = tmp6;
        let tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : function ListPadding() {
      return <hasOwnProperty style={closure_12().listPadding} />;
    };
ReactCompilerGating = fn(558);
let closure_15 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function SimilarGameCard(game) {
        const cResult = game(shouldOpenGameProfile[7]).c(38);
        game = game.game;
        const trackAction = game.trackAction;
        const cardWidth = game.cardWidth;
        let tmp4 = closure_12();
        const result = cardWidth * c9;
        if (cResult[0] === cardWidth) {
          if (cResult[1] === result) {
            let tmp6 = cResult[2];
          }
          if (cResult[3] !== game.id) {
            let obj2 = { gameId: game.id, source: tmp(tmp2[8]).GameProfileSources.SimilarGames };
            cResult[3] = game.id;
            cResult[4] = obj2;
            let tmp7 = obj2;
          } else {
            tmp7 = cResult[4];
          }
          const tmp9 = trackAction(tmp2[9])(tmp7);
          shouldOpenGameProfile = tmp9.shouldOpenGameProfile;
          const gameId = tmp9.gameId;
          if (cResult[5] === game.id) {
            if (cResult[6] === gameId) {
              if (cResult[7] === shouldOpenGameProfile) {
                if (cResult[8] === trackAction) {
                  let tmp10 = cResult[9];
                }
                if (cResult[10] !== cardWidth) {
                  let obj3 = { width: cardWidth };
                  cResult[10] = cardWidth;
                  cResult[11] = obj3;
                  let tmp11 = obj3;
                } else {
                  tmp11 = cResult[11];
                }
                if (cResult[12] === tmp4.card) {
                  if (cResult[13] === tmp11) {
                    let tmp12 = cResult[14];
                  }
                  if (cResult[15] !== game.name) {
                    const intl = tmp(tmp2[11]).intl;
                    let obj4 = { gameName: game.name };
                    cResult[15] = game.name;
                    cResult[16] = intl.formatToPlainString(tmp(tmp2[11]).t["8QLQB+"], obj4);
                    class A {
                      constructor() {
                        tmp2 = closure_2;
                        tmp = closure_0;
                        obj = { similarGameId: game.id };
                        tmp3 = trackAction(closure_0(closure_2[8]).GameProfileTrackActionActions.ClickSimilarGame, obj);
                        tmp4 = shouldOpenGameProfile;
                        if (shouldOpenGameProfile) {
                          tmp5 = gameId;
                          tmp6 = null;
                          tmp4 = null != gameId;
                        }
                        if (tmp4) {
                          tmp7 = closure_1;
                          obj2 = closure_1(tmp2[10]);
                          obj1 = { gameId: null, gameProfileModalChecks: null, source: null };
                          tmp8 = gameId;
                          obj1.gameId = gameId;
                          obj5 = { shouldOpenGameProfile: true, gameId: null };
                          obj5.gameId = gameId;
                          obj1.gameProfileModalChecks = obj5;
                          obj1.source = tmp(tmp2[8]).GameProfileSources.SimilarGames;
                          openGameProfileModalResult = obj2.openGameProfileModal(obj1);
                        }
                        return;
                      }
                    }
                    const formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[11]).t["8QLQB+"], obj4);
                  }
                  const _Math = Math;
                  const rounded = Math.ceil(result);
                  const _Math2 = Math;
                  const rounded1 = Math.ceil(cardWidth);
                  if (cResult[17] === tmp6) {
                    if (cResult[18] === tmp4.coverArtContainer) {
                      let tmp18 = cResult[19];
                      let tmp19 = cResult[20];
                    }
                    if (cResult[21] !== tmp4.coverArt) {
                      const obj5 = { style: tmp4.coverArt };
                      const tmp22 = jsx(tmp8(tmp2[12]), { style: tmp4.coverArt });
                      cResult[21] = tmp4.coverArt;
                      cResult[22] = tmp22;
                      let tmp20 = tmp22;
                    } else {
                      tmp20 = cResult[22];
                    }
                    if (cResult[23] === tmp4.coverArt) {
                      if (cResult[24] === tmp20) {
                        let tmp23 = cResult[25];
                      }
                      if (cResult[26] === game) {
                        if (cResult[27] === tmp18) {
                          if (cResult[28] === tmp23) {
                            if (cResult[29] === rounded) {
                              if (cResult[30] === rounded1) {
                                if (cResult[31] === tmp19) {
                                  let tmp26 = cResult[32];
                                }
                                if (cResult[33] === tmp10) {
                                  if (cResult[34] === tmp26) {
                                    if (cResult[35] === tmp12) {
                                      if (cResult[36] === tmp13) {
                                        let tmp29 = cResult[37];
                                      }
                                      return tmp29;
                                    }
                                  }
                                }
                                const obj6 = {
                                  style: tmp12,
                                  onPress: tmp10,
                                  accessibilityRole: "button",
                                  accessibilityLabel: tmp13,
                                  children: tmp26,
                                };
                                class A {
                                  constructor() {
                                    tmp2 = closure_2;
                                    tmp = closure_0;
                                    obj = { similarGameId: game.id };
                                    tmp3 = trackAction(
                                      closure_0(closure_2[8]).GameProfileTrackActionActions.ClickSimilarGame,
                                      obj,
                                    );
                                    tmp4 = shouldOpenGameProfile;
                                    if (shouldOpenGameProfile) {
                                      tmp5 = gameId;
                                      tmp6 = null;
                                      tmp4 = null != gameId;
                                    }
                                    if (tmp4) {
                                      tmp7 = closure_1;
                                      obj2 = closure_1(tmp2[10]);
                                      obj1 = { gameId: null, gameProfileModalChecks: null, source: null };
                                      tmp8 = gameId;
                                      obj1.gameId = gameId;
                                      obj5 = { shouldOpenGameProfile: true, gameId: null };
                                      obj5.gameId = gameId;
                                      obj1.gameProfileModalChecks = obj5;
                                      obj1.source = tmp(tmp2[8]).GameProfileSources.SimilarGames;
                                      openGameProfileModalResult = obj2.openGameProfileModal(obj1);
                                    }
                                    return;
                                  }
                                }
                                cResult[33] = tmp10;
                                cResult[34] = tmp26;
                                cResult[35] = tmp12;
                                cResult[36] = tmp13;
                                cResult[37] = tmp32;
                                tmp29 = tmp32;
                              }
                            }
                          }
                        }
                      }
                      const obj7 = {
                        game,
                        coverImageSize: rounded,
                        iconImageSize: rounded1,
                        coverContainerStyle: tmp19,
                        iconContainerStyle: tmp18,
                        loadingPlaceholder: null,
                      };
                      class A {
                        constructor() {
                          tmp2 = closure_2;
                          tmp = closure_0;
                          obj = { similarGameId: game.id };
                          tmp3 = trackAction(
                            closure_0(closure_2[8]).GameProfileTrackActionActions.ClickSimilarGame,
                            obj,
                          );
                          tmp4 = shouldOpenGameProfile;
                          if (shouldOpenGameProfile) {
                            tmp5 = gameId;
                            tmp6 = null;
                            tmp4 = null != gameId;
                          }
                          if (tmp4) {
                            tmp7 = closure_1;
                            obj2 = closure_1(tmp2[10]);
                            obj1 = { gameId: null, gameProfileModalChecks: null, source: null };
                            tmp8 = gameId;
                            obj1.gameId = gameId;
                            obj5 = { shouldOpenGameProfile: true, gameId: null };
                            obj5.gameId = gameId;
                            obj1.gameProfileModalChecks = obj5;
                            obj1.source = tmp(tmp2[8]).GameProfileSources.SimilarGames;
                            openGameProfileModalResult = obj2.openGameProfileModal(obj1);
                          }
                          return;
                        }
                      }
                      const tmp28 = jsx(tmp8(tmp2[13]), {
                        game,
                        coverImageSize: rounded,
                        iconImageSize: rounded1,
                        coverContainerStyle: tmp19,
                        iconContainerStyle: tmp18,
                        loadingPlaceholder: null,
                      });
                      cResult[26] = game;
                      cResult[27] = tmp18;
                      cResult[28] = tmp23;
                      cResult[29] = rounded;
                      cResult[30] = rounded1;
                      cResult[31] = tmp19;
                      cResult[32] = tmp28;
                      tmp26 = tmp28;
                    }
                    const obj8 = { style: tmp4.coverArt, children: tmp20 };
                    const tmp25 = jsx(tmp(tmp2[12]).GameProfileSkeletonContainer, {
                      style: tmp4.coverArt,
                      children: tmp20,
                    });
                    class A {
                      constructor() {
                        tmp2 = closure_2;
                        tmp = closure_0;
                        obj = { similarGameId: game.id };
                        tmp3 = trackAction(closure_0(closure_2[8]).GameProfileTrackActionActions.ClickSimilarGame, obj);
                        tmp4 = shouldOpenGameProfile;
                        if (shouldOpenGameProfile) {
                          tmp5 = gameId;
                          tmp6 = null;
                          tmp4 = null != gameId;
                        }
                        if (tmp4) {
                          tmp7 = closure_1;
                          obj2 = closure_1(tmp2[10]);
                          obj1 = { gameId: null, gameProfileModalChecks: null, source: null };
                          tmp8 = gameId;
                          obj1.gameId = gameId;
                          obj5 = { shouldOpenGameProfile: true, gameId: null };
                          obj5.gameId = gameId;
                          obj1.gameProfileModalChecks = obj5;
                          obj1.source = tmp(tmp2[8]).GameProfileSources.SimilarGames;
                          openGameProfileModalResult = obj2.openGameProfileModal(obj1);
                        }
                        return;
                      }
                    }
                    cResult[24] = tmp20;
                    cResult[25] = tmp25;
                    tmp23 = tmp25;
                  }
                  const items = [,];
                  class A {
                    constructor() {
                      tmp2 = closure_2;
                      tmp = closure_0;
                      obj = { similarGameId: game.id };
                      tmp3 = trackAction(closure_0(closure_2[8]).GameProfileTrackActionActions.ClickSimilarGame, obj);
                      tmp4 = shouldOpenGameProfile;
                      if (shouldOpenGameProfile) {
                        tmp5 = gameId;
                        tmp6 = null;
                        tmp4 = null != gameId;
                      }
                      if (tmp4) {
                        tmp7 = closure_1;
                        obj2 = closure_1(tmp2[10]);
                        obj1 = { gameId: null, gameProfileModalChecks: null, source: null };
                        tmp8 = gameId;
                        obj1.gameId = gameId;
                        obj5 = { shouldOpenGameProfile: true, gameId: null };
                        obj5.gameId = gameId;
                        obj1.gameProfileModalChecks = obj5;
                        obj1.source = tmp(tmp2[8]).GameProfileSources.SimilarGames;
                        openGameProfileModalResult = obj2.openGameProfileModal(obj1);
                      }
                      return;
                    }
                  }
                  items[1] = tmp6;
                  const items1 = [tmp4.coverArtContainer, tmp6];
                  cResult[17] = tmp6;
                  cResult[18] = tmp4.coverArtContainer;
                  cResult[19] = items1;
                  cResult[20] = items;
                  tmp19 = items;
                  tmp18 = items1;
                }
                const items2 = [tmp4.card, tmp11];
                cResult[12] = tmp4.card;
                class A {
                  constructor() {
                    tmp2 = closure_2;
                    tmp = closure_0;
                    obj = { similarGameId: game.id };
                    tmp3 = trackAction(closure_0(closure_2[8]).GameProfileTrackActionActions.ClickSimilarGame, obj);
                    tmp4 = shouldOpenGameProfile;
                    if (shouldOpenGameProfile) {
                      tmp5 = gameId;
                      tmp6 = null;
                      tmp4 = null != gameId;
                    }
                    if (tmp4) {
                      tmp7 = closure_1;
                      obj2 = closure_1(tmp2[10]);
                      obj1 = { gameId: null, gameProfileModalChecks: null, source: null };
                      tmp8 = gameId;
                      obj1.gameId = gameId;
                      obj5 = { shouldOpenGameProfile: true, gameId: null };
                      obj5.gameId = gameId;
                      obj1.gameProfileModalChecks = obj5;
                      obj1.source = tmp(tmp2[8]).GameProfileSources.SimilarGames;
                      openGameProfileModalResult = obj2.openGameProfileModal(obj1);
                    }
                    return;
                  }
                }
                cResult[14] = items2;
                tmp12 = items2;
              }
            }
          }
          class A {
            constructor() {
              tmp2 = closure_2;
              tmp = closure_0;
              obj = { similarGameId: game.id };
              tmp3 = trackAction(closure_0(closure_2[8]).GameProfileTrackActionActions.ClickSimilarGame, obj);
              tmp4 = shouldOpenGameProfile;
              if (shouldOpenGameProfile) {
                tmp5 = gameId;
                tmp6 = null;
                tmp4 = null != gameId;
              }
              if (tmp4) {
                tmp7 = closure_1;
                obj2 = closure_1(tmp2[10]);
                obj1 = { gameId: null, gameProfileModalChecks: null, source: null };
                tmp8 = gameId;
                obj1.gameId = gameId;
                obj5 = { shouldOpenGameProfile: true, gameId: null };
                obj5.gameId = gameId;
                obj1.gameProfileModalChecks = obj5;
                obj1.source = tmp(tmp2[8]).GameProfileSources.SimilarGames;
                openGameProfileModalResult = obj2.openGameProfileModal(obj1);
              }
              return;
            }
          }
          cResult[5] = game.id;
          cResult[6] = gameId;
          cResult[7] = shouldOpenGameProfile;
          cResult[8] = trackAction;
          cResult[9] = A;
          tmp10 = A;
        }
        const size = { width: cardWidth, height: result };
        cResult[0] = cardWidth;
        cResult[1] = result;
        cResult[2] = size;
        tmp6 = size;
        let obj = game(shouldOpenGameProfile[7]);
      }
    : function SimilarGameCard(game) {
        game = game.game;
        const trackAction = game.trackAction;
        const cardWidth = game.cardWidth;
        let shouldOpenGameProfile;
        const tmp = closure_12();
        const result = cardWidth * c9;
        const size = { width: cardWidth, height: result };
        let obj = { gameId: game.id, source: game(shouldOpenGameProfile[8]).GameProfileSources.SimilarGames };
        const tmp3Result = trackAction(shouldOpenGameProfile[9])(obj);
        shouldOpenGameProfile = tmp3Result.shouldOpenGameProfile;
        const gameId = tmp3Result.gameId;
        const items = [game.id, trackAction, shouldOpenGameProfile, gameId];
        let obj2 = {
          style: null,
          onPress: gameId.useCallback(() => {
            trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickSimilarGame, {
              similarGameId: game.id,
            });
            let tmp4 = shouldOpenGameProfile;
            if (shouldOpenGameProfile) {
              tmp4 = null != gameId;
            }
            if (tmp4) {
              const obj3 = { gameId, gameProfileModalChecks: null, source: null };
              const obj4 = { shouldOpenGameProfile: true, gameId };
              obj3.gameProfileModalChecks = obj4;
              obj3.source = GameProfileAnalyticUtils.GameProfileSources.SimilarGames;
              GameProfileActionCreatorsDefault.openGameProfileModal(obj3);
            }
            const obj = { similarGameId: game.id };
          }, items),
          accessibilityRole: "button",
          accessibilityLabel: null,
          children: null,
        };
        const items1 = [tmp.card, { width: cardWidth }];
        obj2.style = items1;
        const intl = game(shouldOpenGameProfile[11]).intl;
        obj2.accessibilityLabel = intl.formatToPlainString(game(shouldOpenGameProfile[11]).t["8QLQB+"], {
          gameName: game.name,
        });
        let obj4 = {
          game,
          coverImageSize: null,
          iconImageSize: null,
          coverContainerStyle: null,
          iconContainerStyle: null,
          loadingPlaceholder: null,
        };
        let obj3 = { gameName: game.name };
        const tmp3 = trackAction(shouldOpenGameProfile[9]);
        obj4.coverImageSize = Math.ceil(result);
        obj4.iconImageSize = Math.ceil(cardWidth);
        const items2 = [tmp.coverArtContainer, size];
        obj4.coverContainerStyle = items2;
        const items3 = [tmp.coverArtContainer, size];
        obj4.iconContainerStyle = items3;
        const obj5 = {
          style: tmp.coverArt,
          children: jsx(trackAction(shouldOpenGameProfile[12]), { style: tmp.coverArt }),
        };
        obj4.loadingPlaceholder = jsx(game(shouldOpenGameProfile[12]).GameProfileSkeletonContainer, {
          style: tmp.coverArt,
          children: jsx(trackAction(shouldOpenGameProfile[12]), { style: tmp.coverArt }),
        });
        obj2.children = jsx(trackAction(shouldOpenGameProfile[13]), {
          game,
          coverImageSize: null,
          iconImageSize: null,
          coverContainerStyle: null,
          iconContainerStyle: null,
          loadingPlaceholder: null,
        });
        return (
          <closure_4
            style={null}
            onPress={gameId.useCallback(() => {
              trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickSimilarGame, {
                similarGameId: game.id,
              });
              let tmp4 = shouldOpenGameProfile;
              if (shouldOpenGameProfile) {
                tmp4 = null != gameId;
              }
              if (tmp4) {
                const obj3 = { gameId, gameProfileModalChecks: null, source: null };
                const obj4 = { shouldOpenGameProfile: true, gameId };
                obj3.gameProfileModalChecks = obj4;
                obj3.source = GameProfileAnalyticUtils.GameProfileSources.SimilarGames;
                GameProfileActionCreatorsDefault.openGameProfileModal(obj3);
              }
              const obj = { similarGameId: game.id };
            }, items)}
            accessibilityRole="button"
            accessibilityLabel={null}
          >
            {null}
          </closure_4>
        );
      },
);
ReactCompilerGating = fn(558);
let closure_16 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function GameProfileSimilarGameSkeleton(arg0) {
        const cResult = c.c(12);
        ({ animationDelayMs, cardWidth } = arg0);
        const tmp4 = closure_12();
        const result = cardWidth * c9;
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
            const tmp14 = jsx(GameProfileSkeleton.GameProfileSkeletonContainer, {
              animationDelayMs,
              style: tmp7,
              children: tmp8,
            });
            cResult[8] = animationDelayMs;
            cResult[9] = tmp7;
            cResult[10] = tmp8;
            cResult[11] = tmp14;
            tmp12 = tmp14;
          }
          const obj4 = { style: null };
          const items = [tmp4.skeletonArtwork, tmp6];
          obj4.style = items;
          const tmp11 = jsx(GameProfileSkeletonDefault, { style: null });
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
      }
    : function GameProfileSimilarGameSkeleton(animationDelayMs) {
        const cardWidth = animationDelayMs.cardWidth;
        const obj = {
          animationDelayMs: animationDelayMs.animationDelayMs,
          style: { width: cardWidth },
          children: null,
        };
        const obj2 = { style: null };
        const items = [closure_12().skeletonArtwork];
        const size = { width: cardWidth, height: cardWidth * c9 };
        items[1] = size;
        obj2.style = items;
        obj.children = jsx(GameProfileSkeletonDefault, { style: null });
        return jsx(GameProfileSkeleton.GameProfileSkeletonContainer, {
          animationDelayMs: animationDelayMs.animationDelayMs,
          style: { width: cardWidth },
          children: null,
        });
      },
);
ReactCompilerGating = fn(558);
let closure_17 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function GameProfileSimilarGamesSkeleton(cardWidth) {
        const cResult = cardWidth(576).c(9);
        cardWidth = cardWidth.cardWidth;
        const tmp4 = closure_12();
        ({ container, header, skeletonCards } = tmp4);
        if (cResult[0] !== cardWidth) {
          const _Array = Array;
          const arr = Array.from({ length: 4 }, (arg0, key) => (
            <closure_16
              key={key}
              animationDelayMs={key * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS}
              cardWidth={cardWidth}
            />
          ));
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
          const obj2 = {
            style: container,
            headerStyle: header,
            showViewAllSkeleton: false,
            skeletonTitleWidth: 124,
            children: tmp8,
          };
          const tmp12 = jsx(tmp(9306).GameProfileSectionSkeleton, {
            style: container,
            headerStyle: header,
            showViewAllSkeleton: false,
            skeletonTitleWidth: 124,
            children: tmp8,
          });
          cResult[5] = tmp4.container;
          cResult[6] = tmp4.header;
          cResult[7] = tmp8;
          cResult[8] = tmp12;
          tmp10 = tmp12;
        }
        const tmp9 = jsx(GameProfileSkeletonCardRowDefault, { contentContainerStyle: skeletonCards, children: tmp5 });
        cResult[2] = tmp4.skeletonCards;
        cResult[3] = tmp5;
        cResult[4] = tmp9;
        tmp8 = tmp9;
        const obj = cardWidth(576);
        tmp = cardWidth;
      }
    : function GameProfileSimilarGamesSkeleton(cardWidth) {
        cardWidth = cardWidth.cardWidth;
        const tmp = closure_12();
        const obj = {
          style: tmp.container,
          headerStyle: tmp.header,
          showViewAllSkeleton: false,
          skeletonTitleWidth: 124,
          children: null,
        };
        const obj2 = {
          contentContainerStyle: tmp.skeletonCards,
          children: Array.from({ length: 4 }, (arg0, key) => (
            <closure_16
              key={key}
              animationDelayMs={key * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS}
              cardWidth={cardWidth}
            />
          )),
        };
        obj.children = jsx(GameProfileSkeletonCardRowDefault, {
          contentContainerStyle: tmp.skeletonCards,
          children: Array.from({ length: 4 }, (arg0, key) => (
            <closure_16
              key={key}
              animationDelayMs={key * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS}
              cardWidth={cardWidth}
            />
          )),
        });
        return jsx(cardWidth(9306).GameProfileSectionSkeleton, {
          style: tmp.container,
          headerStyle: tmp.header,
          showViewAllSkeleton: false,
          skeletonTitleWidth: 124,
          children: null,
        });
      },
);
ReactCompilerGating = fn(558);
let obj8 = { borderRadius: nativeDefault.radii.sm };
let size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSimilarGames.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GameProfileSimilarGames(trackAction) {
      const cResult = trackAction(576).c(14);
      trackAction = trackAction.trackAction;
      const tmp4 = closure_12();
      const obj = trackAction(576);
      ({ similarGames, isFetching } = useSimilarGamesDefault(trackAction.gameId));
      const result = (Math.min(useWindowDimensionsDefault().width, closure_6) - 2 * PX_16 - 2 * PX_12 - PX_12) / 3;
      importDefault = result;
      if (isFetching) {
        if (cResult[0] !== result) {
          const obj2 = { cardWidth: result };
          const tmp25 = <closure_17 cardWidth={result} />;
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
          const intl = tmp(1128).intl;
          const stringResult = intl.string(tmp(1128).t["6rLyQB"]);
          cResult[2] = stringResult;
          let tmp9 = stringResult;
        } else {
          tmp9 = cResult[2];
        }
        if (cResult[3] === result) {
          if (cResult[4] === trackAction) {
            let tmp11 = cResult[5];
          }
          const sum = result + tmp7;
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
              const obj3 = { style: container, headerStyle: header, title: tmp9, children: tmp13 };
              const tmp20 = jsx(tmp5(9306), { style: container, headerStyle: header, title: tmp9, children: tmp13 });
              cResult[10] = tmp4.container;
              cResult[11] = tmp4.header;
              cResult[12] = tmp13;
              cResult[13] = tmp20;
              tmp18 = tmp20;
            }
          }
          const obj4 = {
            horizontal: true,
            renderScrollComponent: tmp5(9284),
            data: similarGames,
            renderItem: tmp11,
            showsHorizontalScrollIndicator: false,
            ItemSeparatorComponent,
            ListHeaderComponent: ListFooterComponent,
            ListFooterComponent,
            decelerationRate: "fast",
            snapToInterval: sum,
          };
          const tmp17 = jsx(tmp(7206).FlashList, {
            horizontal: true,
            renderScrollComponent: tmp5(9284),
            data: similarGames,
            renderItem: tmp11,
            showsHorizontalScrollIndicator: false,
            ItemSeparatorComponent,
            ListHeaderComponent: ListFooterComponent,
            ListFooterComponent,
            decelerationRate: "fast",
            snapToInterval: sum,
          });
          cResult[6] = similarGames;
          cResult[7] = tmp11;
          cResult[8] = sum;
          cResult[9] = tmp17;
          tmp13 = tmp17;
        }
        const fn = function b(game) {
          return <closure_15 game={game.item} trackAction={trackAction} cardWidth={result} />;
        };
        cResult[3] = result;
        cResult[4] = trackAction;
        cResult[5] = fn;
        tmp11 = fn;
      }
      const tmp6 = useSimilarGamesDefault(trackAction.gameId);
    }
  : function GameProfileSimilarGames(trackAction) {
      trackAction = trackAction.trackAction;
      const tmp = closure_12();
      ({ similarGames, isFetching } = useSimilarGamesDefault(trackAction.gameId));
      const result = (Math.min(useWindowDimensionsDefault().width, closure_6) - 2 * PX_16 - 2 * PX_12 - PX_12) / 3;
      importDefault = result;
      if (isFetching) {
        const obj = { cardWidth: result };
        let tmp7 = <closure_17 cardWidth={result} />;
      } else {
        tmp7 = null;
        if (0 !== similarGames.length) {
          const obj3 = { style: null, headerStyle: null, title: null, children: null };
          ({ container: obj2.style, header: obj2.headerStyle } = tmp);
          const intl = trackAction(1128).intl;
          obj3.title = intl.string(trackAction(1128).t["6rLyQB"]);
          const obj5 = {
            horizontal: true,
            renderScrollComponent: tmp2(9284),
            data: similarGames,
            renderItem(game) {
              return <closure_15 game={game.item} trackAction={trackAction} cardWidth={cardWidth} />;
            },
            showsHorizontalScrollIndicator: false,
            ItemSeparatorComponent,
            ListHeaderComponent: ListFooterComponent,
            ListFooterComponent,
            decelerationRate: "fast",
            snapToInterval: result + tmp5,
          };
          obj3.children = jsx(trackAction(7206).FlashList, {
            horizontal: true,
            renderScrollComponent: tmp2(9284),
            data: similarGames,
            renderItem(game) {
              return <closure_15 game={game.item} trackAction={trackAction} cardWidth={cardWidth} />;
            },
            showsHorizontalScrollIndicator: false,
            ItemSeparatorComponent,
            ListHeaderComponent: ListFooterComponent,
            ListFooterComponent,
            decelerationRate: "fast",
            snapToInterval: result + tmp5,
          });
          tmp7 = jsx(tmp2(9306), { style: null, headerStyle: null, title: null, children: null });
          const tmp2Result = tmp2(9306);
        }
      }
      return tmp7;
    };
