// === Module 9033: GameProfileSimilarGames ===

// Module 9033 (GameProfileSimilarGames)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1478 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8827 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8833 */;
import _mod8873 from "module_8873" /* 8873 */;
import GameProfileSkeleton from "GameProfileSkeleton" /* 8889 */;
import GameProfileSkeletonCardRowDefault from "GameProfileSkeletonCardRow" /* 8907 */;
import useSimilarGamesDefault from "useSimilarGames" /* 9034 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const GameProfileSkeletonDefault = GameProfileSkeleton;

require = fn;
function Spacer() {
  return closure_1_10(React5, { style: closure_15().spacer });
}
function ListPadding() {
  return closure_1_10(React5, { style: closure_15().listPadding });
}
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, Pressable: metroRequire, View: closure_7 } = get_ActivityIndicator);
let closure_8 = fn(8861).MOBILE_GAME_PROFILE_MAX_WIDTH;
fn(8917).SIMILAR_GAMES_BLOCKED_GAME_IDS;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const PX_12 = nativeDefault.space.PX_12;
const createStyles = fn(4640);
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
let closure_15 = createStyles.createStyles(obj);
let closure_18 = noop.memo((game) => {
  game = game.game;
  const trackAction = game.trackAction;
  const cardWidth = game.cardWidth;
  _slicedToArray = undefined;
  let shouldOpenGameProfile;
  const tmp = closure_15();
  const result = 1.34 * cardWidth;
  const size = { width: cardWidth, height: result };
  const coverURL = game.getCoverURL(Math.ceil(result));
  let tmp4 = _slicedToArray(shouldOpenGameProfile.useState(undefined), 2);
  _slicedToArray = tmp4[1];
  let obj = { gameId: game.id, source: game(coverURL[9]).GameProfileSources.SimilarGames };
  const tmp7Result = trackAction(coverURL[8])(obj);
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
  const intl = game(coverURL[11]).intl;
  obj2.accessibilityLabel = intl.formatToPlainString(game(coverURL[11]).t["8QLQB+"], { gameName: game.name });
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
      obj5.children = closure_10(trackAction(tmp6[12]), obj6);
      tmp12Result = closure_10(tmp8(tmp6[12]).GameProfileSkeletonContainer, obj5);
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
    obj9.children = closure_10(tmp8(tmp6[13]).Text, obj10);
    tmp12Result1 = closure_10(closure_7, obj9);
  }
  obj2.children = tmp12Result1;
  return closure_10(closure_6, obj2);
});
let closure_19 = noop.memo((animationDelayMs) => {
  const cardWidth = animationDelayMs.cardWidth;
  const obj = { animationDelayMs: animationDelayMs.animationDelayMs, style: { width: cardWidth }, children: null };
  const obj2 = { style: null };
  const items = [closure_15().skeletonArtwork, ];
  const size = { width: cardWidth, height: 1.34 * cardWidth };
  items[1] = size;
  obj2.style = items;
  obj.children = closure_1_10(GameProfileSkeletonDefault, obj2);
  return closure_1_10(GameProfileSkeleton.GameProfileSkeletonContainer, obj);
});
let closure_20 = noop.memo((cardWidth) => {
  cardWidth = cardWidth.cardWidth;
  const tmp = closure_15();
  const obj = { style: tmp.container, headerStyle: tmp.header, showViewAllSkeleton: false, skeletonTitleWidth: 124, children: null };
  const obj2 = { contentContainerStyle: tmp.skeletonCards, children: Array.from({ length: 4 }, (arg0, arg1) => closure_2_10(closure_19, { animationDelayMs: arg1 * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS, cardWidth }, arg1)) };
  obj.children = closure_10(GameProfileSkeletonCardRowDefault, obj2);
  return closure_10(cardWidth(8888).GameProfileSectionSkeleton, obj);
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSimilarGames.tsx");

export default function GameProfileSimilarGames(arg0) {
  ({ gameId, trackAction: require } = arg0);
  const tmp = closure_15();
  ({ similarGames, isFetching } = useSimilarGamesDefault(gameId));
  const result = (Math.min(useWindowDimensionsDefault().width, closure_8) - 2 * PX_16 - 2 * PX_12 - PX_12) / 3;
  importDefault = result;
  if (set.has(gameId)) {
    return null;
  } else if (isFetching) {
    const obj = { cardWidth: result };
    let tmp7 = closure_10(closure_20, obj);
  } else if (0 !== similarGames.length) {
    const obj3 = { style: null, headerStyle: null, title: null, children: null };
    ({ container: obj2.style, header: obj2.headerStyle } = tmp);
    const intl = util.intl;
    obj3.title = intl.string(util.t["6rLyQB"]);
    const obj5 = {
      horizontal: true,
      renderScrollComponent: tmp2(8874),
      data: similarGames,
      renderItem(game) {
          return closure_2_10(closure_18, { game: game.item, trackAction, cardWidth });
        },
      showsHorizontalScrollIndicator: false,
      ItemSeparatorComponent: Spacer,
      ListHeaderComponent: ListPadding,
      ListFooterComponent: ListPadding,
      decelerationRate: "fast",
      snapToInterval: result + PX_12
    };
    obj3.children = closure_10(_mod8873.FlashList, obj5);
    tmp7 = closure_10(tmp2(8888), obj3);
    const tmp2Result = tmp2(8888);
  }
  const tmp4 = useSimilarGamesDefault(gameId);
};