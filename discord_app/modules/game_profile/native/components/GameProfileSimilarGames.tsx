import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { useWindowDimensions } from "../../../screen/useWindowDimensions.native.tsx";
import { useSimilarGames } from "../../hooks/useSimilarGames.tsx";
// discord_app/modules/game_profile/native/components/GameProfileSimilarGames.tsx
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function Spacer() {
  const style = { width: PX_12 };
  return callback(closure_6, { style });
}
function ListPadding() {
  let obj = { style: null };
  obj = { width: Themes.space.PX_16 };
  obj[0] = obj;
  return callback(closure_6, obj);
}
function SimilarGameCard(game) {
  game = game.game;
  const trackAction = game.trackAction;
  const cardWidth = game.cardWidth;
  let shouldOpenGameProfile;
  let gameId;
  const tmp = createCacheKey();
  const result = 1.34 * cardWidth;
  const coverURL = game.getCoverURL(Math.ceil(result));
  let obj = { width: cardWidth, height: result };
  obj = { gameId: game.id, source: null };
  obj[1] = game(shouldOpenGameProfile[6]).GameProfileSources.SimilarGames;
  const tmp5Result = trackAction(shouldOpenGameProfile[5])(obj);
  shouldOpenGameProfile = tmp5Result.shouldOpenGameProfile;
  gameId = tmp5Result.gameId;
  const items = [game.id, trackAction, shouldOpenGameProfile, gameId];
  obj = {
    style: items1,
    onPress: gameId.useCallback(() => {
      trackAction(game(shouldOpenGameProfile[6]).GameProfileTrackActionActions.ClickSimilarGame, game.id);
      let tmp4 = shouldOpenGameProfile;
      if (shouldOpenGameProfile) {
        tmp4 = null != gameId;
      }
      if (tmp4) {
        let obj = trackAction(tmp2[7]);
        obj = { gameId: null, gameProfileModalChecks: null, source: null };
        obj[0] = gameId;
        obj = { shouldOpenGameProfile: true, gameId: null };
        obj[1] = gameId;
        obj[1] = obj;
        obj[2] = game(tmp2[6]).GameProfileSources.SimilarGames;
        obj.openGameProfileModal(obj);
      }
    }, items),
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null
  };
  items1 = [tmp.card, { width: cardWidth }];
  const intl = game(shouldOpenGameProfile[8]).intl;
  obj[3] = intl.formatToPlainString(game(shouldOpenGameProfile[8]).t["8QLQB+"], { gameName: game.name });
  if (null != coverURL) {
    const obj2 = { source: null, style: null };
    const obj3 = { uri: null };
    obj3[0] = coverURL;
    obj2[0] = obj3;
    const items2 = [tmp.coverArt, obj];
    obj2[1] = items2;
    let tmp8Result = tmp8(closure_4, obj2);
  } else {
    const obj4 = { style: null, children: null };
    const items3 = [tmp.coverArtFallback, obj];
    obj4[0] = items3;
    const obj5 = { variant: "text-xs/medium", color: "text-overlay-light", lineClamp: 3, children: null };
    obj5[3] = game.name;
    obj4[1] = tmp8(game(shouldOpenGameProfile[9]).Text, obj5);
    tmp8Result = tmp8(closure_6, obj4);
  }
  obj[4] = tmp8Result;
  return closure_7(closure_5, obj);
}
function LoadingCard(cardWidth) {
  cardWidth = cardWidth.cardWidth;
  let obj = { style: { width: cardWidth }, children: null };
  obj = { style: null };
  const items = [createCacheKey().loadingArt, ];
  obj = { width: cardWidth, height: 1.34 * cardWidth };
  items[1] = obj;
  obj[0] = items;
  obj[1] = callback(closure_6, obj);
  return callback(closure_6, obj);
}
({ Image: c4, Pressable: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let PX_12 = require("Themes").space.PX_12;
const PX_16 = require("Themes").space.PX_16;
PX_12 = require("Themes").space.PX_12;
createCacheKey = { container: null, header: null, card: null, coverArt: null, coverArtFallback: null, loadingArt: null };
createCacheKey = { gap: require("Themes").space.PX_8, marginHorizontal: -1 * require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: require("Themes").space.PX_16 };
let obj1 = { paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[2] = { gap: require("Themes").space.PX_4 };
let obj2 = { gap: require("Themes").space.PX_4 };
createCacheKey[3] = { borderRadius: require("Themes").radii.sm };
let obj3 = { borderRadius: require("Themes").radii.sm };
createCacheKey[4] = { borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, justifyContent: "center", alignItems: "center", padding: require("Themes").space.PX_8 };
let obj4 = { borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, justifyContent: "center", alignItems: "center", padding: require("Themes").space.PX_8 };
createCacheKey[5] = { borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj5 = { borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
let result = require("jsxProd").fileFinishedImporting("modules/game_profile/native/components/GameProfileSimilarGames.tsx");

export default function GameProfileSimilarGames(trackAction) {
  let dense;
  let enabled;
  trackAction = trackAction.trackAction;
  let importDefault;
  const tmp = createCacheKey();
  const GameProfileSimilarGamesMobileExperiment = trackAction(9226).GameProfileSimilarGamesMobileExperiment;
  const config = GameProfileSimilarGamesMobileExperiment.useConfig({ location: "GameProfileSimilarGames" });
  ({ enabled, dense } = config);
  const tmp6 = useSimilarGames(trackAction.gameId, enabled);
  const similarGames = tmp6.similarGames;
  let num = 3;
  if (dense) {
    num = 4;
  }
  const result = (useWindowDimensions().width - 2 * PX_16 - (num - 1) * PX_12 - PX_12) / num;
  importDefault = result;
  if (tmp6.isFetching) {
    let obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { style: null, children: null };
    obj[0] = tmp.header;
    obj = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp2(1236).intl;
    obj[2] = intl.string(tmp2(1236).t["6rLyQB"]);
    obj[1] = callback(tmp2(4281).Text, obj);
    const items = [callback(closure_6, obj), ];
    const obj1 = { horizontal: true, data: null, renderItem: null, showsHorizontalScrollIndicator: false, ItemSeparatorComponent: null, ListHeaderComponent: null, ListFooterComponent: null };
    obj1[1] = tmp9;
    obj1[2] = function renderItem() {
      return outer1_7(outer1_16, { cardWidth: c1 });
    };
    obj1[4] = Spacer;
    obj1[5] = ListPadding;
    obj1[6] = ListPadding;
    items[1] = callback(tmp2(7666).FlashList, obj1);
    obj[1] = items;
    let tmp10 = callback2(closure_6, obj);
  } else {
    tmp10 = null;
    if (0 !== similarGames.length) {
      const obj2 = { style: null, children: null };
      obj2[0] = tmp.container;
      const obj3 = { style: null, children: null };
      obj3[0] = tmp.header;
      const obj4 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: null };
      const intl2 = tmp2(1236).intl;
      obj4[2] = intl2.string(tmp2(1236).t["6rLyQB"]);
      obj3[1] = callback(tmp2(4281).Text, obj4);
      const items1 = [callback(closure_6, obj3), ];
      const obj5 = { horizontal: true, data: null, renderItem: null, showsHorizontalScrollIndicator: false, ItemSeparatorComponent: null, ListHeaderComponent: null, ListFooterComponent: null, decelerationRate: "fast", snapToInterval: null };
      obj5[1] = similarGames;
      obj5[2] = function renderItem(game) {
        return outer1_7(outer1_15, { game: game.item, trackAction, cardWidth: c1 });
      };
      obj5[4] = Spacer;
      obj5[5] = ListPadding;
      obj5[6] = ListPadding;
      obj5[8] = result + PX_12;
      items1[1] = callback(tmp2(7666).FlashList, obj5);
      obj2[1] = items1;
      tmp10 = callback2(closure_6, obj2);
    }
  }
  return tmp10;
};