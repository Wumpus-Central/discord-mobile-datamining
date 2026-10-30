// === Module 9562: GameProfileSimilarGames ===

// Module 9562 (GameProfileSimilarGames)
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1492 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9300 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9320 */;
import GameProfileSkeleton from "GameProfileSkeleton" /* 9416 */;
import GameProfileSkeletonCardRowDefault from "GameProfileSkeletonCardRow" /* 9424 */;
import useSimilarGamesDefault from "useSimilarGames" /* 9563 */;
import noop from "module_19" /* 19 */;

const GameProfileSkeletonDefault = GameProfileSkeleton;

require = fn;
function Spacer() {
  return <hasOwnProperty style={closure_11().spacer} />;
}
function ListPadding() {
  return <hasOwnProperty style={closure_11().listPadding} />;
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let closure_6 = fn(9350).MOBILE_GAME_PROFILE_MAX_WIDTH;
const jsx = fn(21).jsx;
const PX_16 = nativeDefault.space.PX_16;
const PX_12 = nativeDefault.space.PX_12;
const createStyles = fn(5009);
let obj = { container: { gap: nativeDefault.space.PX_8, marginHorizontal: -1 * nativeDefault.space.PX_16 }, header: null, card: null, spacer: null, listPadding: null, coverArtContainer: null, coverArt: null, skeletonCards: null, skeletonArtwork: null };
let obj3 = { gap: nativeDefault.space.PX_8, marginHorizontal: -1 * nativeDefault.space.PX_16 };
obj.header = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj.card = { gap: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm };
obj.spacer = { width: PX_12 };
obj.listPadding = { width: PX_16 };
let obj5 = { gap: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm };
obj.coverArtContainer = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.coverArt = { width: "100%", height: "100%" };
const obj6 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.skeletonCards = { paddingHorizontal: nativeDefault.space.PX_16 };
const obj7 = { paddingHorizontal: nativeDefault.space.PX_16 };
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj.skeletonArtwork = { borderRadius: nativeDefault.radii.sm };
let closure_11 = createStyles.createStyles(obj);
let closure_14 = noop.memo(function SimilarGameCard(game) {
  game = game.game;
  const trackAction = game.trackAction;
  const cardWidth = game.cardWidth;
  let shouldOpenGameProfile;
  const tmp = closure_11();
  let obj = { gameId: game.id, source: game(shouldOpenGameProfile[7]).GameProfileSources.SimilarGames };
  const tmp2Result = trackAction(shouldOpenGameProfile[6])(obj);
  shouldOpenGameProfile = tmp2Result.shouldOpenGameProfile;
  const gameId = tmp2Result.gameId;
  const items = [game.id, trackAction, shouldOpenGameProfile, gameId];
  let obj2 = {
    style: null,
    onPress: gameId.useCallback(() => {
      trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickSimilarGame, { similarGameId: game.id });
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
    children: null
  };
  const items1 = [tmp.card, { width: cardWidth }];
  obj2.style = items1;
  const intl = game(shouldOpenGameProfile[9]).intl;
  obj2.accessibilityLabel = intl.formatToPlainString(game(shouldOpenGameProfile[9]).t["8QLQB+"], { gameName: game.name });
  let obj4 = { game, size: null, imageSize: 256, style: null, accessible: false, loadingPlaceholder: null };
  let obj3 = { gameName: game.name };
  const tmp2 = trackAction(shouldOpenGameProfile[6]);
  obj4.size = game(shouldOpenGameProfile[10]).GameCoverArtSize.SMALL;
  const items2 = [tmp.coverArtContainer, ];
  const size = { width: cardWidth, height: cardWidth / 0.75 };
  items2[1] = size;
  obj4.style = items2;
  const obj5 = { style: tmp.coverArt, children: jsx(trackAction(shouldOpenGameProfile[11]), { style: tmp.coverArt }) };
  obj4.loadingPlaceholder = jsx(game(shouldOpenGameProfile[11]).GameProfileSkeletonContainer, { style: tmp.coverArt, children: jsx(trackAction(shouldOpenGameProfile[11]), { style: tmp.coverArt }) });
  obj2.children = jsx(trackAction(shouldOpenGameProfile[10]), { game, size: null, imageSize: 256, style: null, accessible: false, loadingPlaceholder: null });
  return <closure_4 style={null} onPress={gameId.useCallback(() => {
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickSimilarGame, { similarGameId: game.id });
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
  }, items)} accessibilityRole="button" accessibilityLabel={null}>{null}</closure_4>;
});
let closure_15 = noop.memo(function GameProfileSimilarGameSkeleton(animationDelayMs) {
  const cardWidth = animationDelayMs.cardWidth;
  const obj = { animationDelayMs: animationDelayMs.animationDelayMs, style: { width: cardWidth }, children: null };
  const obj2 = { style: null };
  const items = [closure_11().skeletonArtwork, ];
  const size = { width: cardWidth, height: cardWidth / 0.75 };
  items[1] = size;
  obj2.style = items;
  obj.children = jsx(GameProfileSkeletonDefault, { style: null });
  return jsx(GameProfileSkeleton.GameProfileSkeletonContainer, { animationDelayMs: animationDelayMs.animationDelayMs, style: { width: cardWidth }, children: null });
});
let closure_16 = noop.memo(function GameProfileSimilarGamesSkeleton(cardWidth) {
  cardWidth = cardWidth.cardWidth;
  const tmp = closure_11();
  const obj = { style: tmp.container, headerStyle: tmp.header, showViewAllSkeleton: false, skeletonTitleWidth: 124, children: null };
  const obj2 = { contentContainerStyle: tmp.skeletonCards, children: Array.from({ length: 4 }, (arg0, key) => <closure_15 key={key} animationDelayMs={key * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS} cardWidth={cardWidth} />) };
  obj.children = jsx(GameProfileSkeletonCardRowDefault, { contentContainerStyle: tmp.skeletonCards, children: Array.from({ length: 4 }, (arg0, key) => <closure_15 key={key} animationDelayMs={key * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS} cardWidth={cardWidth} />) });
  return jsx(cardWidth(9415).GameProfileSectionSkeleton, { style: tmp.container, headerStyle: tmp.header, showViewAllSkeleton: false, skeletonTitleWidth: 124, children: null });
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSimilarGames.tsx");

export default function GameProfileSimilarGames(trackAction) {
  trackAction = trackAction.trackAction;
  const tmp = closure_11();
  ({ similarGames, isFetching } = useSimilarGamesDefault(trackAction.gameId));
  const result = (Math.min(useWindowDimensionsDefault().width, closure_6) - 2 * PX_16 - 2 * PX_12 - PX_12) / 3;
  importDefault = result;
  if (isFetching) {
    const obj = { cardWidth: result };
    let tmp7 = <closure_16 cardWidth={result} />;
  } else {
    tmp7 = null;
    if (0 !== similarGames.length) {
      const obj3 = { style: null, headerStyle: null, title: null, children: null };
      ({ container: obj2.style, header: obj2.headerStyle } = tmp);
      const intl = trackAction(1114).intl;
      obj3.title = intl.string(trackAction(1114).t["6rLyQB"]);
      const obj5 = {
        horizontal: true,
        renderScrollComponent: tmp2(9366),
        data: similarGames,
        renderItem(game) {
              return <closure_14 game={game.item} trackAction={trackAction} cardWidth={cardWidth} />;
            },
        showsHorizontalScrollIndicator: false,
        ItemSeparatorComponent: Spacer,
        ListHeaderComponent: ListPadding,
        ListFooterComponent: ListPadding,
        decelerationRate: "fast",
        snapToInterval: result + tmp5
      };
      obj3.children = jsx(trackAction(7288).FlashList, {
        horizontal: true,
        renderScrollComponent: tmp2(9366),
        data: similarGames,
        renderItem(game) {
              return <closure_14 game={game.item} trackAction={trackAction} cardWidth={cardWidth} />;
            },
        showsHorizontalScrollIndicator: false,
        ItemSeparatorComponent: Spacer,
        ListHeaderComponent: ListPadding,
        ListFooterComponent: ListPadding,
        decelerationRate: "fast",
        snapToInterval: result + tmp5
      });
      tmp7 = jsx(tmp2(9415), { style: null, headerStyle: null, title: null, children: null });
      const tmp2Result = tmp2(9415);
    }
  }
  return tmp7;
};