// === Module 9404: GuildProfileGames ===

// Module 9404 (GuildProfileGames)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8319 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8320 */;
import components_GameIconDefault from "components/GameIcon" /* 9405 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let rect;
let react = react_mod;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: { display: "flex", flexDirection: "row", gap: 8 }, favoriteGame: { display: "flex", flexDirection: "row", alignItems: "center", gap: 8 }, lastItem: { position: "relative", width: 32, height: 32 }, lastItemOverlay: rect, lastItemImage: { position: "absolute" }, lastItemText: { display: "flex", justifyContent: "center", alignItems: "center", width: 32, height: 32 } };
rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, borderRadius: nativeDefault.radii.xs };
const styles = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let activityLevel;
  let game;
  let onPressFallback;
  let style;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(12);
  ({ style, game } = arg0);
  ({ activityLevel, onPressFallback } = arg0);
  if (cResult[0] !== game.id) {
    const obj2 = { gameId: game.id, source: GameProfileAnalyticUtils.GameProfileSources.GuildProfileGames, trackEntryPointImpression: true };
    cResult[0] = game.id;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmp6 = useOpenGameProfileModalDefault(tmp4);
  let closure_2 = tmp6;
  let closure_3 = tmp7;
  if (cResult[2] === null != tmp6) {
    if (cResult[3] === game) {
      if (cResult[4] === onPressFallback) {
        if (cResult[7] === activityLevel) {
          if (cResult[8] === game) {
            if (cResult[9] === tmp9) {
              let tmp10;
              if (cResult[10] === style) {
                tmp10 = cResult[11];
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
      tmp2(game);
    }
  };
  cResult[2] = null != tmp6;
  cResult[3] = game;
  cResult[4] = onPressFallback;
  cResult[5] = tmp6;
  cResult[6] = fn;
}) : ((game) => {
  let activityLevel;
  let onPress;
  let style;
  game = game.game;
  const onPressFallback = game.onPressFallback;
  ({ style, activityLevel } = game);
  const obj = { gameId: game.id, source: GameProfileAnalyticUtils.GameProfileSources.GuildProfileGames, trackEntryPointImpression: true };
  const tmp3 = useOpenGameProfileModalDefault;
  const tmp3Result = tmp3(obj);
  let closure_2 = tmp3Result;
  let closure_3 = tmp5;
  const items = [null != tmp3Result, tmp3Result, onPressFallback, game];
  if (null != tmp3Result) {
    onPress = react.useCallback(() => {
      if (closure_3) {
        closure_2();
      } else if (onPressFallback != null) {
        tmp2(game);
      }
    }, items);
  }
  return hasOwnProperty(components_GameIconDefault, { style, game, activityLevel, onPress });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let activityLevel;
  let game;
  let items;
  const obj = react2;
  const cResult = obj.c(9);
  ({ game, activityLevel } = arg0);
  const tmp4 = styles();
  if (cResult[0] === activityLevel) {
    let tmp5;
    let tmp7;
    if (cResult[1] === game) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== game.name) {
      const obj2 = { variant: "text-sm/medium", color: "text-subtle", children: game.name };
      const tmp9 = hasOwnProperty(Text_Text.Text, obj2);
      cResult[3] = game.name;
      cResult[4] = tmp9;
      tmp7 = tmp9;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] === tmp4.favoriteGame) {
      if (cResult[6] === tmp5) {
        let tmp10;
        if (cResult[7] === tmp7) {
          tmp10 = cResult[8];
        }
        return tmp10;
      }
    }
    const obj3 = { style: tmp4.favoriteGame, children: items };
    items = [tmp5, tmp7];
    const tmp13 = metroRequire(View, obj3);
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
}) : ((game) => {
  let items;
  game = game.game;
  const activityLevel = game.activityLevel;
  const obj = { style: styles().favoriteGame, children: items };
  items = [hasOwnProperty(closure_8, { game, activityLevel }), ];
  const obj2 = { variant: "text-sm/medium", color: "text-subtle", children: game.name };
  items[1] = hasOwnProperty(Text_Text.Text, obj2);
  return metroRequire(View, obj);
});
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileGames.tsx");

export default function GuildProfileGames(profile) {
  let closure_3;
  let gamesToDisplay;
  let items1;
  let items2;
  let lastGameToDisplay;
  let obj3;
  let tmp8;
  profile = profile.profile;
  lastGameToDisplay = undefined;
  let remainingGames;
  let closure_5;
  let onPressFallback;
  let tmp2 = lastGameToDisplay(remainingGames[11])(profile);
  ({ gamesToDisplay, lastGameToDisplay } = tmp2);
  const tmp = remainingGames;
  remainingGames = tmp2.remainingGames;
  const tmp3 = styles();
  react = tmp3;
  const gameActivity = profile.gameActivity;
  let iconURL;
  if (lastGameToDisplay != null) {
    iconURL = lastGameToDisplay.getIconURL(24);
  }
  closure_5 = tmp5;
  let items = [lastGameToDisplay, null != iconURL, remainingGames, gameActivity, tmp3];
  const memo = react.useMemo(() => {
    let Text;
    let items;
    let obj6;
    let tmp2 = null;
    if (null != lastGameToDisplay) {
      let tmp4 = null;
      if (hasOwnProperty) {
        let tmp8;
        if (0 === remainingGames.length) {
          const obj = { game: lastGameToDisplay, activityLevel: gameActivity[lastGameToDisplay.id] };
          tmp8 = hasOwnProperty(closure_8, obj);
        } else {
          const obj2 = { style: closure_3.lastItem, children: items };
          const obj3 = { style: closure_3.lastItemImage, game: lastGameToDisplay, activityLevel: gameActivity[lastGameToDisplay.id] };
          items = [hasOwnProperty(components_GameIconDefault, obj3), , ];
          const obj4 = { style: closure_3.lastItemOverlay };
          items[1] = hasOwnProperty(View, obj4);
          const obj5 = { style: closure_3.lastItemText, children: hasOwnProperty(Text, obj6) };
          const _HermesInternal = HermesInternal;
          obj6 = { variant: "text-xs/medium", color: "text-overlay-light", children: "+" + arr.length };
          Text = Text_Text.Text;
          items[2] = hasOwnProperty(View, obj5);
          tmp8 = metroRequire(View, obj2);
        }
        tmp4 = tmp8;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  }, items);
  onPressFallback = react.useCallback((content) => {
    const obj = lastGameToDisplay(remainingGames[12]);
    const obj2 = { key: "profile-game-" + content.id, content: content.name };
    obj.open(obj2);
  }, []);
  [][0] = profile;
  let tmp9 = null;
  const tmp7 = remainingGames.length > 0;
  if (null != gamesToDisplay) {
    tmp9 = null;
    if (0 !== gamesToDisplay.length) {
      let tmp16Result;
      if (1 === gamesToDisplay.length) {
        let obj2 = { style: tmp3.container, children: closure_5(closure_9, obj3) };
        obj3 = { game: gamesToDisplay[0], activityLevel: gameActivity[gamesToDisplay[0].id] };
        tmp16Result = closure_5(gameActivity, obj2);
      } else if (tmp7) {
        let obj4 = { style: tmp3.container, onPress: tmp8, children: items1 };
        const PressableHighlight = profile(tmp[16]).PressableHighlight;
        items1 = [
          gamesToDisplay.map((game) => {
                  const obj = { game, activityLevel: gameActivity[game.id] };
                  return hasOwnProperty(components_GameIconDefault, obj, game.id);
                }),
          memo
        ];
        tmp16Result = tmp16(PressableHighlight, obj4);
      } else {
        let obj = { style: tmp3.container, children: items2 };
        items2 = [
          gamesToDisplay.map((game) => {
                  const obj = { game, activityLevel: gameActivity[game.id], onPressFallback };
                  return hasOwnProperty(closure_8, obj, game.id);
                }),
          memo
        ];
        tmp16Result = tmp16(gameActivity, obj);
      }
      tmp9 = tmp16Result;
    }
  }
  return tmp9;
};
export const useStyles = styles;