// discord_app/modules/game_profile/native/components/GameProfileSimilarGames.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import GameProfileActionCreatorsDefault from "../../GameProfileActionCreators.native.tsx";
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import useSimilarGamesDefault from "../../hooks/useSimilarGames.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function Spacer() {
  let obj = { style: null };
  obj = { width: PX_12 };
  obj.style = obj;
  return React5(timestampProducer, obj);
}
function ListPadding() {
  let obj = { style: null };
  obj = { width: nativeDefault.space.PX_16 };
  obj.style = obj;
  return React5(timestampProducer, obj);
}
function SimilarGameCard(game) {
  game = game.game;
  const trackAction = game.trackAction;
  const cardWidth = game.cardWidth;
  let shouldOpenGameProfile;
  const tmp = closure_13();
  const result = 1.34 * cardWidth;
  const coverURL = game.getCoverURL(Math.ceil(result));
  const size = { width: cardWidth, height: result };
  let obj = { gameId: game.id, source: game(shouldOpenGameProfile[6]).GameProfileSources.SimilarGames };
  const tmp5Result = trackAction(shouldOpenGameProfile[5])(obj);
  shouldOpenGameProfile = tmp5Result.shouldOpenGameProfile;
  const gameId = tmp5Result.gameId;
  const items = [game.id, trackAction, shouldOpenGameProfile, gameId];
  obj = {
    style: null,
    onPress: gameId.useCallback(() => {
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
    }, items),
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null,
  };
  const items1 = [tmp.card, { width: cardWidth }];
  obj.style = items1;
  const intl = game(shouldOpenGameProfile[8]).intl;
  obj.accessibilityLabel = intl.formatToPlainString(game(shouldOpenGameProfile[8]).t["8QLQB+"], {
    gameName: game.name,
  });
  if (null != coverURL) {
    const obj2 = { source: null, style: null };
    const obj3 = { uri: coverURL };
    obj2.source = obj3;
    const items2 = [tmp.coverArt, size];
    obj2.style = items2;
    let tmp8Result = tmp8(closure_4, obj2);
  } else {
    const obj4 = { style: null, children: null };
    const items3 = [tmp.coverArtFallback, size];
    obj4.style = items3;
    const obj5 = { variant: "text-xs/medium", color: "text-overlay-light", lineClamp: 3, children: game.name };
    obj4.children = tmp8(game(shouldOpenGameProfile[9]).Text, obj5);
    tmp8Result = tmp8(closure_6, obj4);
  }
  obj.children = tmp8Result;
  return closure_7(closure_5, obj);
}
function LoadingCard(cardWidth) {
  cardWidth = cardWidth.cardWidth;
  let obj = { style: { width: cardWidth }, children: null };
  obj = { style: null };
  const items = [closure_13().loadingArt];
  const size = { width: cardWidth, height: 1.34 * cardWidth };
  items[1] = size;
  obj.style = items;
  obj.children = React5(timestampProducer, obj);
  return React5(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ Image: closure_4, Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const PX_12 = nativeDefault.space.PX_12;
const data = Array.from({ length: 3 }, (arg0, arg1) => arg1);
fn(4560);
let createStyles = {
  container: null,
  header: null,
  card: null,
  coverArt: null,
  coverArtFallback: null,
  loadingArt: null,
};
createStyles = { gap: nativeDefault.space.PX_8, marginHorizontal: -1 * nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.header = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj1 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.card = { gap: nativeDefault.space.PX_4 };
let obj2 = { gap: nativeDefault.space.PX_4 };
createStyles.coverArt = { borderRadius: nativeDefault.radii.sm };
let obj3 = { borderRadius: nativeDefault.radii.sm };
createStyles.coverArtFallback = {
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  justifyContent: "center",
  alignItems: "center",
  padding: nativeDefault.space.PX_8,
};
let obj4 = {
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  justifyContent: "center",
  alignItems: "center",
  padding: nativeDefault.space.PX_8,
};
createStyles.loadingArt = {
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
let closure_13 = createStyles.createStyles(createStyles);
let size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSimilarGames.tsx");

export default function GameProfileSimilarGames(trackAction) {
  trackAction = trackAction.trackAction;
  const tmp = closure_13();
  ({ similarGames, isFetching } = useSimilarGamesDefault(trackAction.gameId));
  const result = (useWindowDimensionsDefault().width - 2 * PX_16 - 2 * PX_12 - PX_12) / 3;
  importDefault = result;
  if (isFetching) {
    let obj = { style: tmp.container, children: null };
    obj = { style: tmp.header, children: null };
    obj = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = trackAction(1114).intl;
    obj.children = intl.string(trackAction(1114).t["6rLyQB"]);
    obj.children = closure_7(trackAction(4556).Text, obj);
    const items = [closure_7(closure_6, obj)];
    const obj1 = {
      horizontal: true,
      renderScrollComponent: tmp2(8720),
      data,
      renderItem() {
        return React5(LoadingCard, { cardWidth });
      },
      showsHorizontalScrollIndicator: false,
      ItemSeparatorComponent: Spacer,
      ListHeaderComponent: ListPadding,
      ListFooterComponent: ListPadding,
    };
    items[1] = closure_7(trackAction(8874).FlashList, obj1);
    obj.children = items;
    let tmp7 = closure_8(closure_6, obj);
  } else {
    tmp7 = null;
    if (0 !== similarGames.length) {
      const obj2 = { style: tmp.container, children: null };
      const obj3 = { style: tmp.header, children: null };
      const obj4 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: null };
      const intl2 = trackAction(1114).intl;
      obj4.children = intl2.string(trackAction(1114).t["6rLyQB"]);
      obj3.children = closure_7(trackAction(4556).Text, obj4);
      const items1 = [closure_7(closure_6, obj3)];
      const obj5 = {
        horizontal: true,
        renderScrollComponent: tmp2(8720),
        data: similarGames,
        renderItem(game) {
          return React5(SimilarGameCard, { game: game.item, trackAction, cardWidth });
        },
        showsHorizontalScrollIndicator: false,
        ItemSeparatorComponent: Spacer,
        ListHeaderComponent: ListPadding,
        ListFooterComponent: ListPadding,
        decelerationRate: "fast",
        snapToInterval: result + tmp5,
      };
      items1[1] = closure_7(trackAction(8874).FlashList, obj5);
      obj2.children = items1;
      tmp7 = closure_8(closure_6, obj2);
    }
  }
  return tmp7;
}
