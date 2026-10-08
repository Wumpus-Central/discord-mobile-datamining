// === Module 8849: GuildProfileGames ===

// Module 8849 (GuildProfileGames)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import Text_Text from "Text/Text" /* 5086 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8850 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8851 */;
import components_GameIconDefault from "components/GameIcon" /* 9083 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { display: "flex", flexDirection: "row", gap: 8 }, favoriteGame: { display: "flex", flexDirection: "row", alignItems: "center", gap: 8 }, lastItem: { position: "relative", width: 32, height: 32 }, lastItemOverlay: null, lastItemImage: null, lastItemText: null };
const rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, borderRadius: nativeDefault.radii.xs };
obj2.lastItemOverlay = rect;
obj2.lastItemImage = { position: "absolute" };
obj2.lastItemText = { display: "flex", justifyContent: "center", alignItems: "center", width: 32, height: 32 };
const styles = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ClickableGameIcon(arg0) {
  const cResult = c.c(12);
  ({ style, game } = arg0);
  ({ activityLevel, onPressFallback } = arg0);
  if (cResult[0] !== game.id) {
    const obj2 = { gameId: game.id, source: GameProfileAnalyticUtils.GameProfileSources.GuildProfileGames, trackEntryPointImpression: true };
    cResult[0] = game.id;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmp6 = useOpenGameProfileModalDefault(tmp4);
  closure_2 = tmp6;
  closure_3 = tmp7;
  if (cResult[2] === null != tmp6) {
    if (cResult[3] === game) {
      if (cResult[4] === onPressFallback) {
        if (cResult[7] === activityLevel) {
          if (cResult[8] === game) {
            if (cResult[9] === tmp9) {
              if (cResult[10] === style) {
                let tmp10 = cResult[11];
              }
              return tmp10;
            }
          }
        }
        const obj3 = { style, game, activityLevel, onPress: tmp9 };
        const tmp12 = hasOwnProperty(components_GameIconDefault, obj3);
        cResult[7] = activityLevel;
        cResult[8] = game;
        cResult[9] = tmp9;
        cResult[10] = style;
        cResult[11] = tmp12;
        tmp10 = tmp12;
      }
    }
  }
  const fn = function y() {
    if (closure_3) {
      closure_2();
    } else if (onPressFallback != null) {
      tmp(game);
    }
  };
  cResult[2] = null != tmp6;
  cResult[3] = game;
  cResult[4] = onPressFallback;
  cResult[5] = tmp6;
  cResult[6] = fn;
}) : (function ClickableGameIcon(game) {
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
});
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function FavoriteGame(arg0) {
  const cResult = c.c(9);
  ({ game, activityLevel } = arg0);
  const tmp4 = styles();
  if (cResult[0] === activityLevel) {
    if (cResult[1] === game) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] !== game.name) {
      const obj2 = { variant: "text-sm/medium", color: "text-subtle", children: game.name };
      const tmp9 = hasOwnProperty(Text_Text.Text, obj2);
      cResult[3] = game.name;
      cResult[4] = tmp9;
      let tmp7 = tmp9;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] === tmp4.favoriteGame) {
      if (cResult[6] === tmp5) {
        if (cResult[7] === tmp7) {
          let tmp10 = cResult[8];
        }
        return tmp10;
      }
    }
    const obj3 = { style: tmp4.favoriteGame, children: null };
    const items = [tmp5, tmp7];
    obj3.children = items;
    const tmp13 = timestampProducer(View, obj3);
    cResult[5] = tmp4.favoriteGame;
    cResult[6] = tmp5;
    cResult[7] = tmp7;
    cResult[8] = tmp13;
    tmp10 = tmp13;
  }
  const tmp6 = hasOwnProperty(closure_8, { game, activityLevel });
  cResult[0] = activityLevel;
  cResult[1] = game;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function FavoriteGame(activityLevel) {
  const game = activityLevel.game;
  const obj = { style: styles().favoriteGame, children: null };
  const items = [hasOwnProperty(closure_8, { game, activityLevel: activityLevel.activityLevel }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", children: game.name })];
  obj.children = items;
  return timestampProducer(View, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileGames.tsx");

export default function GuildProfileGames(profile) {
  profile = profile.profile;
  lastGameToDisplay = undefined;
  let remainingGames;
  closure_5 = undefined;
  let onPressFallback;
  let tmp2 = lastGameToDisplay(remainingGames[11])(profile);
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
        let tmp8 = hasOwnProperty(closure_8, obj);
      } else {
        const obj2 = { style: closure_3.lastItem, children: null };
        const obj3 = { style: closure_3.lastItemImage, game: tmp, activityLevel: gameActivity[tmp.id] };
        const items = [hasOwnProperty(components_GameIconDefault, obj3), , ];
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
    const obj = lastGameToDisplay(remainingGames[12]);
    obj.open({ key: "profile-game-" + content.id, content: content.name });
  }, []);
  [][0] = profile;
  let tmp9 = null;
  if (null != gamesToDisplay) {
    tmp9 = null;
    if (0 !== gamesToDisplay.length) {
      if (1 === gamesToDisplay.length) {
        let obj2 = { style: tmp3.container, children: null };
        tmp3 = closure_9;
        let obj3 = { game: gamesToDisplay[0], activityLevel: null };
        gamesToDisplay = gameActivity[gamesToDisplay[0].id];
        obj3.activityLevel = gamesToDisplay;
        obj2.children = closure_5(closure_9, obj3);
        let tmp16Result = closure_5(gameActivity, obj2);
      } else if (tmp7) {
        let obj4 = { style: tmp3.container, onPress: tmp8, children: null };
        const items1 = [gamesToDisplay.map((game) => hasOwnProperty(components_GameIconDefault, { game, activityLevel: gameActivity[game.id] }, game.id)), memo];
        obj4.children = items1;
        tmp16Result = tmp16(profile(remainingGames[16]).PressableHighlight, obj4);
      } else {
        let obj = { style: tmp3.container, children: null };
        const items2 = [gamesToDisplay.map((game) => hasOwnProperty(closure_8, { game, activityLevel: gameActivity[game.id], onPressFallback }, game.id)), memo];
        obj.children = items2;
        tmp16Result = tmp16(gameActivity, obj);
      }
    }
  }
  return tmp9;
};
export const useStyles = styles;