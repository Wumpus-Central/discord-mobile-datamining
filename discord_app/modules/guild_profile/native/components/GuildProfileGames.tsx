// === Module 8959: ClickableGameIcon ===

// Module 8959 (ClickableGameIcon)
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4442 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
function ClickableGameIcon(game) {
  game = game.game;
  const onPressFallback = game.onPressFallback;
  dependencyMap = undefined;
  let React;
  ({ style, activityLevel } = game);
  const obj = { gameId: game.id, source: game(8753).GameProfileSources.GuildProfileGames, trackEntryPointImpression: true };
  const tmp3Result = onPressFallback(8742)(obj);
  dependencyMap = tmp3Result;
  React = tmp5;
  const items = [null != tmp3Result, tmp3Result, onPressFallback, game];
  if (null != tmp3Result) {
    const onPress = React.useCallback(() => {
      if (closure_3) {
        callback();
      } else if (onPressFallback != null) {
        tmp(game);
      }
    }, items);
  }
  return callback(onPressFallback(8960), { style, game, activityLevel, onPress });
}
function FavoriteGame(activityLevel) {
  const game = activityLevel.game;
  let obj = { style: createCacheKey().favoriteGame, children: null };
  const items = [callback(ClickableGameIcon, { game, activityLevel: activityLevel.activityLevel }), ];
  obj = { variant: "text-sm/medium", color: "text-subtle", children: game.name };
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: { display: "flex", flexDirection: "row", gap: 8 }, favoriteGame: { display: "flex", flexDirection: "row", alignItems: "center", gap: 8 }, lastItem: { position: "relative", width: 32, height: 32 }, lastItemOverlay: null, lastItemImage: null, lastItemText: null };
createCacheKey = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_SCRIM, borderRadius: ThemesDefault.radii.xs };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { position: "absolute" };
createCacheKey[5] = { display: "flex", justifyContent: "center", alignItems: "center", width: 32, height: 32 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_profile/native/components/GuildProfileGames.tsx");

export default function GuildProfileGames(profile) {
  profile = profile.profile;
  lastGameToDisplay = undefined;
  let remainingGames;
  let React;
  let gameActivity;
  let callback;
  closure_6 = undefined;
  let tmp2 = lastGameToDisplay(remainingGames[9])(profile);
  ({ gamesToDisplay, lastGameToDisplay } = tmp2);
  remainingGames = tmp2.remainingGames;
  let tmp3 = createCacheKey();
  React = tmp3;
  gameActivity = profile.gameActivity;
  let iconURL;
  if (lastGameToDisplay != null) {
    iconURL = lastGameToDisplay.getIconURL(24);
  }
  callback = tmp5;
  let items = [lastGameToDisplay, null != iconURL, remainingGames, gameActivity, tmp3];
  const memo = React.useMemo(() => {
    let tmp = lastGameToDisplay;
    let tmp2 = null;
    if (null != lastGameToDisplay) {
      if (!callback) {
        tmp2 = null;
      } else if (0 === remainingGames.length) {
        let obj = { game: null, activityLevel: null };
        obj[0] = tmp;
        tmp = gameActivity[tmp.id];
        obj[1] = tmp;
        let tmp8 = callback(closure_1_8, obj);
      } else {
        obj = { style: null, children: null };
        obj[0] = closure_3.lastItem;
        obj = { style: null, game: null, activityLevel: null };
        obj[0] = closure_3.lastItemImage;
        obj[1] = tmp;
        obj[2] = gameActivity[tmp.id];
        const items = [callback(lastGameToDisplay(remainingGames[7]), obj), , ];
        obj1 = { style: null };
        obj1[0] = closure_3.lastItemOverlay;
        items[1] = callback(gameActivity, obj1);
        const obj2 = { style: null, children: null };
        obj2[0] = closure_3.lastItemText;
        const obj3 = { variant: "text-xs/medium", color: "text-overlay-light", children: null };
        const _HermesInternal = HermesInternal;
        obj3[2] = "+" + arr.length;
        obj2[1] = callback(profile(remainingGames[8]).Text, obj3);
        items[2] = callback(gameActivity, obj2);
        obj[1] = items;
        tmp8 = callback2(gameActivity, obj);
      }
    }
    return tmp2;
  }, items);
  closure_6 = React.useCallback((content) => {
    let obj = lastGameToDisplay(remainingGames[10]);
    obj = { key: "profile-game-" + content.id, content: content.name };
    obj.open(obj);
  }, []);
  [][0] = profile;
  let tmp9 = null;
  if (null != gamesToDisplay) {
    tmp9 = null;
    if (0 !== gamesToDisplay.length) {
      if (1 === gamesToDisplay.length) {
        let obj = { style: null, children: null };
        obj[0] = tmp3.container;
        tmp3 = FavoriteGame;
        obj = { game: null, activityLevel: null };
        obj[0] = gamesToDisplay[0];
        gamesToDisplay = gameActivity[gamesToDisplay[0].id];
        obj[1] = gamesToDisplay;
        obj[1] = callback(FavoriteGame, obj);
        let tmp16Result = callback(gameActivity, obj);
      } else if (tmp7) {
        obj1 = { style: null, onPress: null, children: null };
        obj1[0] = tmp3.container;
        obj1[1] = tmp8;
        const items1 = [gamesToDisplay.map((game) => callback(lastGameToDisplay(remainingGames[7]), { game, activityLevel: gameActivity[game.id] }, game.id)), memo];
        obj1[2] = items1;
        tmp16Result = tmp16(profile(remainingGames[14]).PressableHighlight, obj1);
      } else {
        obj = { style: null, children: null };
        obj[0] = tmp3.container;
        const items2 = [gamesToDisplay.map((game) => callback(closure_1_8, { game, activityLevel: gameActivity[game.id], onPressFallback: closure_6 }, game.id)), memo];
        obj[1] = items2;
        tmp16Result = tmp16(gameActivity, obj);
      }
    }
  }
  return tmp9;
};
export const useStyles = createCacheKey;