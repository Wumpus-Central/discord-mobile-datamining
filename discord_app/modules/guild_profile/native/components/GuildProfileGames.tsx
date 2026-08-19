// === Module 9518: ClickableGameIcon ===

// Module 9518 (ClickableGameIcon)
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4734 */;
import useGuildProfileGamesDefault from "useGuildProfileGames" /* 9528 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function ClickableGameIcon(game) {
  game = game.game;
  ({ enabled, onPressFallback } = game);
  enabled = undefined;
  ({ style, activityLevel } = game);
  const obj = { gameId: game.id, source: game(9101).GameProfileSources.GuildProfileGames, trackEntryPointImpression: enabled };
  const tmp3Result = onPressFallback(9519)(obj);
  dependencyMap = tmp3Result;
  if (enabled) {
    enabled = null != tmp3Result;
  }
  const items = [enabled, tmp3Result, onPressFallback, game];
  if (enabled) {
    const onPress = enabled.useCallback(() => {
      if (enabled) {
        callback();
      } else if (onPressFallback != null) {
        tmp(game);
      }
    }, items);
  }
  return callback(onPressFallback(9524), { style, game, activityLevel, onPress });
}
function FavoriteGame(game) {
  game = game.game;
  ({ activityLevel, clickable } = game);
  { style: createCacheKey().favoriteGame, children: null };
  const items = [callback(ClickableGameIcon, { game, activityLevel, enabled: clickable }), ];
  const obj = { variant: "text-sm/medium", color: "text-subtle", children: game.name };
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
}
function GuildProfileGamesContent(profile) {
  profile = profile.profile;
  ({ gamesToDisplay, lastGameToDisplay } = profile);
  const remainingGames = profile.remainingGames;
  closure_6 = undefined;
  createCacheKey = undefined;
  let tmp = createCacheKey();
  const React = tmp;
  const gameActivity = profile.gameActivity;
  let obj = profile(remainingGames[10]);
  const enabled = obj.useGuildProfileGameProfilesExperiment({ location: "guild_profile_games" }).enabled;
  let iconURL;
  if (lastGameToDisplay != null) {
    iconURL = lastGameToDisplay.getIconURL(24);
  }
  closure_6 = tmp5;
  let items = [lastGameToDisplay, null != iconURL, remainingGames, gameActivity, tmp, enabled];
  const memo = React.useMemo(() => {
    let tmp = lastGameToDisplay;
    let tmp2 = null;
    if (null != lastGameToDisplay) {
      if (!callback) {
        tmp2 = null;
      } else if (0 === remainingGames.length) {
        let obj = { game: null, activityLevel: null, enabled: null };
        obj[0] = tmp;
        tmp = gameActivity[tmp.id];
        obj[1] = tmp;
        obj[2] = enabled;
        let tmp9 = enabled(ClickableGameIcon, obj);
      } else {
        obj = { style: null, children: null };
        obj[0] = closure_3.lastItem;
        obj = { style: null, game: null, activityLevel: null };
        obj[0] = closure_3.lastItemImage;
        obj[1] = tmp;
        obj[2] = gameActivity[tmp.id];
        const items = [enabled(lastGameToDisplay(remainingGames[7]), obj), , ];
        obj1 = { style: null };
        obj1[0] = closure_3.lastItemOverlay;
        items[1] = enabled(gameActivity, obj1);
        const obj2 = { style: null, children: null };
        obj2[0] = closure_3.lastItemText;
        const obj3 = { variant: "text-xs/medium", color: "text-overlay-light", children: null };
        const _HermesInternal = HermesInternal;
        obj3[2] = "+" + arr.length;
        obj2[1] = enabled(profile(remainingGames[8]).Text, obj3);
        items[2] = enabled(gameActivity, obj2);
        obj[1] = items;
        tmp9 = callback(gameActivity, obj);
      }
    }
    return tmp2;
  }, items);
  createCacheKey = React.useCallback((content) => {
    lastGameToDisplay(remainingGames[11]);
    const obj = { key: "profile-game-" + content.id, content: content.name };
    obj.open(obj);
  }, []);
  [][0] = profile;
  if (1 === gamesToDisplay.length) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { game: null, activityLevel: null, clickable: null };
    obj[0] = gamesToDisplay[0];
    obj[1] = gameActivity[gamesToDisplay[0].id];
    obj[2] = enabled;
    obj[1] = enabled(FavoriteGame, obj);
    let tmp14Result = enabled(gameActivity, obj);
  } else if (tmp7) {
    obj1 = { style: null, onPress: null, children: null };
    obj1[0] = tmp.container;
    obj1[1] = tmp8;
    const items1 = [gamesToDisplay.map((item, index) => enabled(lastGameToDisplay(remainingGames[7]), { game: item, activityLevel: gameActivity[item.id] }, item.id)), memo];
    obj1[2] = items1;
    tmp14Result = tmp14(profile(remainingGames[15]).PressableHighlight, obj1);
  } else {
    let obj2 = { style: null, children: null };
    obj2[0] = tmp.container;
    const items2 = [gamesToDisplay.map((item, index) => enabled(ClickableGameIcon, { game: item, activityLevel: gameActivity[item.id], enabled, onPressFallback: closure_7 }, item.id)), memo];
    obj2[1] = items2;
    tmp14Result = tmp14(gameActivity, obj2);
  }
  return tmp14Result;
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let createCacheKey = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_SCRIM, borderRadius: ThemesDefault.radii.xs };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { position: "absolute" };
createCacheKey[5] = { display: "flex", justifyContent: "center", alignItems: "center", width: 32, height: 32 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_profile/native/components/GuildProfileGames.tsx");

export default function GuildProfileGames(profile) {
  profile = profile.profile;
  const gamesToDisplay = useGuildProfileGamesDefault(profile).gamesToDisplay;
  let tmp4 = null;
  if (null != gamesToDisplay) {
    tmp4 = null;
    if (0 !== gamesToDisplay.length) {
      const obj = { profile: null, gamesToDisplay: null, lastGameToDisplay: null, remainingGames: null };
      obj[0] = profile;
      obj[1] = gamesToDisplay;
      obj[2] = tmp2;
      obj[3] = tmp3;
      tmp4 = callback(GuildProfileGamesContent, obj);
    }
  }
  return tmp4;
};
export const useStyles = createCacheKey;