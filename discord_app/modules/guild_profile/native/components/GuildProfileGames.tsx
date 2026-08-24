// discord_app/modules/guild_profile/native/components/GuildProfileGames.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import useGuildProfileGamesDefault from "../../hooks/useGuildProfileGames.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function ClickableGameIcon(game) {
  game = game.game;
  ({ enabled, onPressFallback } = game);
  dependencyMap = undefined;
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
  let obj = { style: createCacheKey().favoriteGame, children: null };
  const items = [callback(ClickableGameIcon, { game, activityLevel, enabled: clickable }), ];
  obj = { variant: "text-sm/medium", color: "text-subtle", children: game.name };
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
}
function GuildProfileGamesContent(profile) {
  profile = profile.profile;
  ({ gamesToDisplay, lastGameToDisplay } = profile);
  const remainingGames = profile.remainingGames;
  let React;
  let gameActivity;
  let enabled;
  closure_6 = undefined;
  createCacheKey = undefined;
  let tmp = createCacheKey();
  React = tmp;
  gameActivity = profile.gameActivity;
  let obj = profile(remainingGames[10]);
  enabled = obj.useGuildProfileGameProfilesExperiment({ location: "guild_profile_games" }).enabled;
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
        let tmp9 = enabled(closure_1_8, obj);
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
    let obj = lastGameToDisplay(remainingGames[11]);
    obj = { key: "profile-game-" + content.id, content: content.name };
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
    const items1 = [gamesToDisplay.map((game) => enabled(lastGameToDisplay(remainingGames[7]), { game, activityLevel: gameActivity[game.id] }, game.id)), memo];
    obj1[2] = items1;
    tmp14Result = tmp14(profile(remainingGames[15]).PressableHighlight, obj1);
  } else {
    let obj2 = { style: null, children: null };
    obj2[0] = tmp.container;
    const items2 = [gamesToDisplay.map((game) => enabled(closure_1_8, { game, activityLevel: gameActivity[game.id], enabled, onPressFallback: closure_7 }, game.id)), memo];
    obj2[1] = items2;
    tmp14Result = tmp14(gameActivity, obj2);
  }
  return tmp14Result;
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