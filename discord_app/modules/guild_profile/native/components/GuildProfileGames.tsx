// === Module 9195: GuildProfileGames ===

// Module 9195 (GuildProfileGames)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8675 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8686 */;
import components_GameIconDefault from "components/GameIcon" /* 9196 */;
import noop from "module_19" /* 19 */;

require = fn;
function ClickableGameIcon(game) {
  game = game.game;
  const onPressFallback = game.onPressFallback;
  ({ style, activityLevel } = game);
  const obj = { gameId: game.id, source: GameProfileAnalyticUtils.GameProfileSources.GuildProfileGames, trackEntryPointImpression: true };
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
  let obj = { style: createStyles().favoriteGame, children: null };
  const items = [hasOwnProperty(ClickableGameIcon, { game, activityLevel: activityLevel.activityLevel }), ];
  obj = { variant: "text-sm/medium", color: "text-subtle", children: game.name };
  items[1] = hasOwnProperty(Text_Text.Text, obj);
  obj.children = items;
  return timestampProducer(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: { display: "flex", flexDirection: "row", gap: 8 }, favoriteGame: { display: "flex", flexDirection: "row", alignItems: "center", gap: 8 }, lastItem: { position: "relative", width: 32, height: 32 }, lastItemOverlay: null, lastItemImage: null, lastItemText: null };
const rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, borderRadius: nativeDefault.radii.xs };
createStyles.lastItemOverlay = rect;
createStyles.lastItemImage = { position: "absolute" };
createStyles.lastItemText = { display: "flex", justifyContent: "center", alignItems: "center", width: 32, height: 32 };
createStyles = createStyles.createStyles(createStyles);
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
  let tmp3 = createStyles();
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
        let obj = { game: tmp, activityLevel: null };
        tmp = gameActivity[tmp.id];
        obj.activityLevel = tmp;
        let tmp8 = hasOwnProperty(ClickableGameIcon, obj);
      } else {
        obj = { style: closure_3.lastItem, children: null };
        obj = { style: closure_3.lastItemImage, game: tmp, activityLevel: gameActivity[tmp.id] };
        const items = [hasOwnProperty(components_GameIconDefault, obj), , ];
        const obj1 = { style: closure_3.lastItemOverlay };
        items[1] = hasOwnProperty(View, obj1);
        const obj2 = { style: closure_3.lastItemText, children: null };
        const obj3 = { variant: "text-xs/medium", color: "text-overlay-light", children: null };
        const _HermesInternal = HermesInternal;
        obj3.children = "+" + arr.length;
        obj2.children = hasOwnProperty(Text_Text.Text, obj3);
        items[2] = hasOwnProperty(View, obj2);
        obj.children = items;
        tmp8 = timestampProducer(View, obj);
      }
    }
    return tmp2;
  }, items);
  onPressFallback = noop.useCallback((content) => {
    lastGameToDisplay(remainingGames[10]);
    const obj = { key: "profile-game-" + content.id, content: content.name };
    obj.open(obj);
  }, []);
  [][0] = profile;
  let tmp9 = null;
  if (null != gamesToDisplay) {
    tmp9 = null;
    if (0 !== gamesToDisplay.length) {
      if (1 === gamesToDisplay.length) {
        let obj = { style: tmp3.container, children: null };
        tmp3 = FavoriteGame;
        obj = { game: gamesToDisplay[0], activityLevel: null };
        gamesToDisplay = gameActivity[gamesToDisplay[0].id];
        obj.activityLevel = gamesToDisplay;
        obj.children = closure_5(FavoriteGame, obj);
        let tmp16Result = closure_5(gameActivity, obj);
      } else if (tmp7) {
        let obj1 = { style: tmp3.container, onPress: tmp8, children: null };
        const items1 = [gamesToDisplay.map((game) => hasOwnProperty(components_GameIconDefault, { game, activityLevel: gameActivity[game.id] }, game.id)), memo];
        obj1.children = items1;
        tmp16Result = tmp16(profile(remainingGames[14]).PressableHighlight, obj1);
      } else {
        obj = { style: tmp3.container, children: null };
        const items2 = [gamesToDisplay.map((game) => hasOwnProperty(ClickableGameIcon, { game, activityLevel: gameActivity[game.id], onPressFallback }, game.id)), memo];
        obj.children = items2;
        tmp16Result = tmp16(gameActivity, obj);
      }
    }
  }
  return tmp9;
};
export const useStyles = createStyles;