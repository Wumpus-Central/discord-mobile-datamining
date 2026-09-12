// === Module 9004: GameProfileSimilarGames ===

// Module 9004 (GameProfileSimilarGames)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8803 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8809 */;
import GameProfileSkeleton from "GameProfileSkeleton" /* 8860 */;
import GameProfileSkeletonCardRowDefault from "GameProfileSkeletonCardRow" /* 8877 */;
import _mod9003 from "module_9003" /* 9003 */;
import useSimilarGamesDefault from "useSimilarGames" /* 9005 */;
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
let closure_8 = fn(8837).MOBILE_GAME_PROFILE_MAX_WIDTH;
fn(8887).SIMILAR_GAMES_BLOCKED_GAME_IDS;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const PX_12 = nativeDefault.space.PX_12;
fn(4636);
let obj = { container: null, header: null, card: null, spacer: null, listPadding: null, coverArtContainer: null, coverArt: null, coverArtPlaceholder: null, coverArtFallback: null, skeletonCards: null, skeletonArtwork: null };
obj = { gap: nativeDefault.space.PX_8, marginHorizontal: -1 * nativeDefault.space.PX_16 };
obj.container = obj;
const createStyles = { paddingHorizontal: nativeDefault.space.PX_16 };
obj.header = createStyles;
obj.card = { gap: nativeDefault.space.PX_4 };
obj.spacer = { width: PX_12 };
obj.listPadding = { width: PX_16 };
let obj2 = { gap: nativeDefault.space.PX_4 };
obj.coverArtContainer = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.coverArt = { width: "100%", height: "100%" };
obj.coverArtPlaceholder = { position: "absolute", top: 0, right: 0, bottom: 0, left: 0 };
let obj3 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.coverArtFallback = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, justifyContent: "center", alignItems: "center", padding: nativeDefault.space.PX_8 };
let obj4 = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, justifyContent: "center", alignItems: "center", padding: nativeDefault.space.PX_8 };
obj.skeletonCards = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj5 = { paddingHorizontal: nativeDefault.space.PX_16 };
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
      let obj = { gameId, gameProfileModalChecks: null, source: null };
      obj = { shouldOpenGameProfile: true, gameId };
      obj.gameProfileModalChecks = obj;
      obj.source = GameProfileAnalyticUtils.GameProfileSources.SimilarGames;
      obj.openGameProfileModal(obj);
    }
  }, items);
  obj = { style: null, onPress: callback, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const items2 = [tmp.card, { width: cardWidth }];
  obj.style = items2;
  const callback1 = shouldOpenGameProfile.useCallback(() => {
    closure_3(coverURL);
  }, items1);
  const intl = game(coverURL[11]).intl;
  obj.accessibilityLabel = intl.formatToPlainString(game(coverURL[11]).t["8QLQB+"], { gameName: game.name });
  if (null != coverURL) {
    const obj2 = { style: null, children: null };
    const items3 = [tmp.coverArtContainer, size];
    obj2.style = items3;
    let tmp12Result = null != coverURL;
    if (tmp12Result) {
      tmp12Result = tmp4[0] !== coverURL;
    }
    if (tmp12Result) {
      const obj3 = { style: tmp.coverArtPlaceholder, children: null };
      const obj4 = { style: tmp.coverArt };
      obj3.children = closure_10(trackAction(tmp6[12]), obj4);
      tmp12Result = closure_10(tmp8(tmp6[12]).GameProfileSkeletonContainer, obj3);
    }
    const items4 = [tmp12Result, ];
    const obj5 = { source: null, style: null, onLoadEnd: null };
    const obj6 = { uri: coverURL };
    obj5.source = obj6;
    obj5.style = tmp.coverArt;
    obj5.onLoadEnd = callback1;
    items4[1] = closure_10(gameId, obj5);
    obj2.children = items4;
    tmp12Result = closure_11(closure_7, obj2);
  } else {
    const obj7 = { style: null, children: null };
    const items5 = [tmp.coverArtFallback, size];
    obj7.style = items5;
    const obj8 = { variant: "text-xs/medium", color: "text-overlay-light", lineClamp: 3, children: game.name };
    obj7.children = closure_10(tmp8(tmp6[13]).Text, obj8);
    tmp12Result = closure_10(closure_7, obj7);
  }
  obj.children = tmp12Result;
  return closure_10(closure_6, obj);
});
let closure_19 = noop.memo((animationDelayMs) => {
  const cardWidth = animationDelayMs.cardWidth;
  let obj = { animationDelayMs: animationDelayMs.animationDelayMs, style: { width: cardWidth }, children: null };
  obj = { style: null };
  const items = [closure_15().skeletonArtwork, ];
  const size = { width: cardWidth, height: 1.34 * cardWidth };
  items[1] = size;
  obj.style = items;
  obj.children = closure_1_10(GameProfileSkeletonDefault, obj);
  return closure_1_10(GameProfileSkeleton.GameProfileSkeletonContainer, obj);
});
let closure_20 = noop.memo((cardWidth) => {
  cardWidth = cardWidth.cardWidth;
  const tmp = closure_15();
  let obj = { style: tmp.container, headerStyle: tmp.header, showViewAllSkeleton: false, skeletonTitleWidth: 124, children: null };
  obj = { contentContainerStyle: tmp.skeletonCards, children: Array.from({ length: 4 }, (arg0, arg1) => closure_2_10(closure_19, { animationDelayMs: arg1 * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS, cardWidth }, arg1)) };
  obj.children = closure_10(GameProfileSkeletonCardRowDefault, obj);
  return closure_10(cardWidth(8859).GameProfileSectionSkeleton, obj);
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
    let obj = { cardWidth: result };
    let tmp7 = closure_10(closure_20, obj);
  } else if (0 !== similarGames.length) {
    obj = { style: null, headerStyle: null, title: null, children: null };
    ({ container: obj2.style, header: obj2.headerStyle } = tmp);
    const intl = util.intl;
    obj.title = intl.string(util.t["6rLyQB"]);
    obj = {
      horizontal: true,
      renderScrollComponent: tmp2(8845),
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
    obj.children = closure_10(_mod9003.FlashList, obj);
    tmp7 = closure_10(tmp2(8859), obj);
    const tmp2Result = tmp2(8859);
  }
  const tmp4 = useSimilarGamesDefault(gameId);
};