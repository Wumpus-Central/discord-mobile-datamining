// discord_app/modules/guild_profile/native/components/GuildProfileGames.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01980_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useOpenGameProfileModalDefault from "../../../game_profile/hooks/useOpenGameProfileModal.tsx";
import GameProfileAnalyticUtils from "../../../game_profile/GameProfileAnalyticUtils.tsx";
import components_GameIconDefault from "GameIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function ClickableGameIcon(game) {
  game = game.game;
  const onPressFallback = game.onPressFallback;
  ({ style, activityLevel } = game);
  const obj = {
    gameId: game.id,
    source: GameProfileAnalyticUtils.GameProfileSources.GuildProfileGames,
    trackEntryPointImpression: true,
  };
  const tmp3Result = useOpenGameProfileModalDefault(obj);
  closure_2 = tmp3Result;
  closure_3 = tmp5;
  const items = [null != tmp3Result, tmp3Result, onPressFallback, game];
  if (null != tmp3Result) {
    const onPress = noop.useCallback(() => {
      if (closure_3) {
        closure_2();
      } else if (onPressFallback != null) {
        tmp(game);
      }
    }, items);
  }
  return hasOwnProperty(components_GameIconDefault, { style, game, activityLevel, onPress });
}
function FavoriteGame(activityLevel) {
  const game = activityLevel.game;
  const obj = { style: styles().favoriteGame, children: null };
  const items = [
    hasOwnProperty(ClickableGameIcon, { game, activityLevel: activityLevel.activityLevel }),
    hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", children: game.name }),
  ];
  obj.children = items;
  return timestampProducer(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  container: { display: "flex", flexDirection: "row", gap: 8 },
  favoriteGame: { display: "flex", flexDirection: "row", alignItems: "center", gap: 8 },
  lastItem: { position: "relative", width: 32, height: 32 },
  lastItemOverlay: null,
  lastItemImage: null,
  lastItemText: null,
};
const rect = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM,
  borderRadius: nativeDefault.radii.xs,
};
obj2.lastItemOverlay = rect;
obj2.lastItemImage = { position: "absolute" };
obj2.lastItemText = { display: "flex", justifyContent: "center", alignItems: "center", width: 32, height: 32 };
const styles = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileGames.tsx");

export default function GuildProfileGames(profile) {
  profile = profile.profile;
  lastGameToDisplay = undefined;
  let remainingGames;
  closure_5 = undefined;
  let onPressFallback;
  let tmp2 = lastGameToDisplay(remainingGames[9])(profile);
  ({ gamesToDisplay, lastGameToDisplay } = tmp2);
  remainingGames = tmp2.remainingGames;
  let tmp3 = styles();
  noop = tmp3;
  const gameActivity = profile.gameActivity;
  let iconURL;
  if (lastGameToDisplay != null) {
    iconURL = lastGameToDisplay.getIconURL(24);
  }
  closure_5 = tmp5;
  let items = [lastGameToDisplay, null != iconURL, remainingGames, gameActivity, tmp3];
  const memo = noop.useMemo(() => {
    let tmp = lastGameToDisplay;
    let tmp2 = null;
    if (null != lastGameToDisplay) {
      if (!closure_5) {
        tmp2 = null;
      } else if (0 === remainingGames.length) {
        const obj = { game: tmp, activityLevel: null };
        tmp = gameActivity[tmp.id];
        obj.activityLevel = tmp;
        let tmp8 = hasOwnProperty(ClickableGameIcon, obj);
      } else {
        const obj2 = { style: closure_3.lastItem, children: null };
        const obj3 = { style: closure_3.lastItemImage, game: tmp, activityLevel: gameActivity[tmp.id] };
        const items = [hasOwnProperty(components_GameIconDefault, obj3), ,];
        const obj4 = { style: closure_3.lastItemOverlay };
        items[1] = hasOwnProperty(View, obj4);
        const obj5 = { style: closure_3.lastItemText, children: null };
        const obj6 = { variant: "text-xs/medium", color: "text-overlay-light", children: null };
        const _HermesInternal = HermesInternal;
        obj6.children = "+" + arr.length;
        obj5.children = hasOwnProperty(Text_Text.Text, obj6);
        items[2] = hasOwnProperty(View, obj5);
        obj2.children = items;
        tmp8 = timestampProducer(View, obj2);
      }
    }
    return tmp2;
  }, items);
  onPressFallback = noop.useCallback((content) => {
    const obj = lastGameToDisplay(remainingGames[10]);
    obj.open({ key: "profile-game-" + content.id, content: content.name });
  }, []);
  [][0] = profile;
  let tmp9 = null;
  if (null != gamesToDisplay) {
    tmp9 = null;
    if (0 !== gamesToDisplay.length) {
      if (1 === gamesToDisplay.length) {
        let obj2 = { style: tmp3.container, children: null };
        tmp3 = FavoriteGame;
        let obj3 = { game: gamesToDisplay[0], activityLevel: null };
        gamesToDisplay = gameActivity[gamesToDisplay[0].id];
        obj3.activityLevel = gamesToDisplay;
        obj2.children = closure_5(FavoriteGame, obj3);
        let tmp16Result = closure_5(gameActivity, obj2);
      } else if (tmp7) {
        let obj4 = { style: tmp3.container, onPress: tmp8, children: null };
        const items1 = [
          gamesToDisplay.map((game) =>
            hasOwnProperty(components_GameIconDefault, { game, activityLevel: gameActivity[game.id] }, game.id),
          ),
          memo,
        ];
        obj4.children = items1;
        tmp16Result = tmp16(profile(remainingGames[14]).PressableHighlight, obj4);
      } else {
        let obj = { style: tmp3.container, children: null };
        const items2 = [
          gamesToDisplay.map((game) =>
            hasOwnProperty(ClickableGameIcon, { game, activityLevel: gameActivity[game.id], onPressFallback }, game.id),
          ),
          memo,
        ];
        obj.children = items2;
        tmp16Result = tmp16(gameActivity, obj);
      }
    }
  }
  return tmp9;
}
export const useStyles = styles;
