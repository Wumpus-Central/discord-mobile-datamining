// === Module 13390: CheckpointGamesStatsScreen ===

// Module 13390 (CheckpointGamesStatsScreen)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef3319 from "module_3319" /* 3319 */;
import CheckpointScreen from "CheckpointScreen" /* 13136 */;
import CheckpointTextDefault from "CheckpointText" /* 13137 */;
import CheckpointApngPlayerDefault from "CheckpointApngPlayer" /* 13139 */;
import _modDef13346 from "module_13346" /* 13346 */;
import _modDef13347 from "module_13347" /* 13347 */;
import useIsCheckpointWide from "useIsCheckpointWide" /* 13350 */;
import CheckpointCountUpStatNumberDefault from "CheckpointCountUpStatNumber" /* 13372 */;
import CheckpointNumberUtils from "CheckpointNumberUtils" /* 13373 */;
import CheckpointDisplayTextDefault from "CheckpointDisplayText" /* 13379 */;
import CheckpointRankTagDefault from "CheckpointRankTag" /* 13381 */;
import CheckpointGameCard from "CheckpointGameCard" /* 13391 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import CheckpointStore from "CheckpointStore" /* 13119 */;
import CheckpointConstants from "CheckpointConstants" /* 6375 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5310 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const useIsCheckpointWideDefault = useIsCheckpointWide;

function UserGames(gameStats) {
  gameStats = gameStats.gameStats;
  const tmp = closure_10();
  _require = tmp;
  importDefault = useIsCheckpointWideDefault();
  let num;
  if (gameStats != null) {
    num = gameStats.totalGamesPlayed;
  }
  if (num == null) {
    num = 0;
  }
  let rounded = Math.round(num);
  let prop;
  if (gameStats != null) {
    prop = gameStats.totalGamesPlayedPercentile;
  }
  const checkpointTopPercent = require("CheckpointStatsUtils").getCheckpointTopPercent(prop);
  let games;
  if (gameStats != null) {
    games = gameStats.games;
  }
  if (games == null) {
    games = [];
  }
  let intl = tmp5(1113).intl;
  let obj = require("CheckpointStatsUtils");
  let formatToPlainStringResult;
  if (null != checkpointTopPercent) {
    const intl2 = tmp5(1113).intl;
    const obj2 = { percent: checkpointTopPercent };
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(3319).VjXwW9, obj2);
  }
  let obj3 = { containerStyle: tmp.container, header: null, children: null };
  const obj4 = { style: tmp.title, children: null };
  items = [closure_8(require("GameControllerIcon").GameControllerIcon, { size: "refresh_sm", color }), ];
  const obj6 = { isStepHeading: true, variant: "heading-sm/semibold", style: tmp.titleText, children: null };
  let obj5 = { size: "refresh_sm", color };
  const stringResult = intl.string(_modDef3319.HM2fjf);
  obj6.children = stringResult.toLocaleUpperCase();
  items[1] = closure_8(CheckpointTextDefault, obj6);
  obj4.children = items;
  let items1 = [closure_9(closure_4, obj4), , ];
  const obj7 = { accessible: true, accessibilityLabel: null, style: null, children: null };
  const tmp2Result = CheckpointTextDefault;
  obj7.accessibilityLabel = require("CheckpointNumberUtils").formatCheckpointStatAccessibilityLabel("games", rounded);
  obj7.style = tmp.number;
  obj7.children = closure_8(CheckpointCountUpStatNumberDefault, { end: rounded });
  items1[1] = closure_8(closure_4, obj7);
  const obj8 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: null };
  const tmp5Result = require("CheckpointNumberUtils");
  if (null != checkpointTopPercent) {
    const intl4 = tmp5(1113).intl;
    const obj9 = {
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          return closure_1_8(closure_1(dependencyMap[14]), { children }, arg1);
        }
    };
    let formatResult = intl4.format(tmp2(3319)["hc0/yJ"], obj9);
  } else {
    const intl3 = tmp5(1113).intl;
    const obj10 = { numGames: rounded };
    formatResult = intl3.format(tmp2(3319).aJMJ6b, obj10);
  }
  const obj11 = { children: null };
  obj8.children = formatResult;
  items1[2] = closure_8(CheckpointTextDefault, obj8);
  obj11.children = items1;
  obj3.header = closure_9(closure_4, obj11);
  obj3.children = games.map((game, index) => {
    game = game.game;
    const sum = index + 1;
    const rounded = Math.round(game.numSessions);
    const obj = { accessible: true, accessibilityLabel: null, style: null, children: null };
    const intl = util.intl;
    obj.accessibilityLabel = intl.formatToPlainString(_modDef3319.mqdLhl, { gameName: game.name, rank: sum, numSessions: rounded });
    items = [game.game, ];
    let wideCover = closure_1;
    let wideGame = closure_1;
    if (closure_1) {
      wideGame = tmp8.wideGame;
    }
    items[1] = wideGame;
    obj.style = items;
    const obj3 = { game, style: null, children: null };
    const items1 = [game.cover, ];
    if (wideCover) {
      wideCover = tmp8.wideCover;
    }
    items1[1] = wideCover;
    obj3.style = items1;
    obj3.children = React5(CheckpointRankTagDefault, { rank: sum, style: game.rank });
    const items2 = [React5(CheckpointGameCard.CheckpointGameCard, obj3), ];
    const obj5 = { name: game.name, label: CheckpointNumberUtils.formatCheckpointStatNumber(rounded), textAlignment: "left" };
    items2[1] = React5(CheckpointGameCard.CheckpointGameCardDescription, obj5);
    obj.children = items2;
    return React6(React4, obj, game.id);
  });
  return closure_8(GamesLayout, obj3);
}
function GlobalGames(gameStats) {
  gameStats = gameStats.gameStats;
  const tmp = closure_10();
  importDefault = tmp;
  dependencyMap = useIsCheckpointWideDefault();
  let obj = { containerStyle: null, global: true, header: null, children: null };
  items = [, ];
  ({ container: arr[0], globalContainer: arr[1] } = tmp);
  obj.containerStyle = items;
  let obj2 = { style: tmp.header, children: null };
  let obj3 = { style: tmp.globalHeading, children: null };
  let obj4 = { animatedUri: _modDef13346, staticUri: _modDef13347, style: tmp.globe };
  let items1 = [closure_8(CheckpointApngPlayerDefault, obj4), ];
  const obj5 = { isStepHeading: true, children: null };
  let intl = gameStats(1113).intl;
  const tmp3 = CheckpointDisplayTextDefault;
  obj5.children = intl.string(_modDef3319.qbCgI7).toLocaleUpperCase();
  items1[1] = closure_8(tmp3, obj5);
  obj3.children = items1;
  let items2 = [closure_9(closure_4, obj3), ];
  const obj6 = { variant: "heading-lg/medium", children: null };
  let stringResult = intl.string(_modDef3319.qbCgI7);
  const intl2 = gameStats(1113).intl;
  obj6.children = intl2.string(_modDef3319["0oDeiM"]);
  items2[1] = closure_8(CheckpointTextDefault, obj6);
  obj2.children = items2;
  obj.header = closure_9(closure_4, obj2);
  obj.children = closure_6.map((list) => {
    list = list.list;
    const first = gameStats[list][0];
    if (null == first) {
      return null;
    } else {
      const intl = util.intl;
      const stringResult = intl.string(tmp);
      const obj2 = { name: first.name, label: stringResult.toLocaleUpperCase(), textAlignment: null };
      let str = "center";
      if (closure_2) {
        str = "left";
      }
      obj2.textAlignment = str;
      const tmp11Result = React5(CheckpointGameCard.CheckpointGameCardDescription, obj2);
      const obj = { accessible: true, accessibilityLabel: null, style: null, children: null };
      const _HermesInternal = HermesInternal;
      obj.accessibilityLabel = "" + first.name + ", " + stringResult;
      items = [globalGame.globalGame, ];
      let wideGlobalGame = closure_2;
      if (closure_2) {
        wideGlobalGame = globalGame.wideGlobalGame;
      }
      items[1] = wideGlobalGame;
      obj.style = items;
      const obj3 = { game: first, style: null };
      const items1 = [globalGame.globalCover, ];
      let wideGlobalCover = closure_2;
      if (closure_2) {
        wideGlobalCover = globalGame.wideGlobalCover;
      }
      items1[1] = wideGlobalCover;
      obj3.style = items1;
      const items2 = [React5(CheckpointGameCard.CheckpointGameCard, obj3), ];
      let tmp11Result2 = tmp11Result;
      if (closure_2) {
        const obj4 = { style: globalGame.wideGlobalDescription, children: tmp11Result };
        tmp11Result2 = React5(React4, obj4);
      }
      items2[1] = tmp11Result2;
      obj.children = items2;
      return React6(React4, obj, list);
    }
  });
  return closure_8(GamesLayout, obj);
}
function GamesLayout(containerStyle) {
  ({ header, children, global: _global } = containerStyle);
  if (_global === undefined) {
    _global = false;
  }
  const tmp = closure_10();
  CheckpointScreen;
  const tmp5 = _global ? tmp.globalGames : tmp.games;
  const obj = { style: null, children: null };
  if (tmp2) {
    items = [tmp.wideContainer, ];
    const obj2 = { height: tmp4 };
    items[1] = obj2;
    obj.style = items;
    const obj3 = { style: tmp.wideHeader, children: header };
    const items1 = [React5(React4, obj3), ];
    const obj4 = { style: null, contentContainerStyle: null, showsVerticalScrollIndicator: false, nestedScrollEnabled: true, children: null };
    ({ wideGamesScroll: obj5.style, wideGamesContent: obj5.contentContainerStyle } = tmp);
    const items2 = [tmp5, tmp.wideGames, ];
    if (_global) {
      _global = tmp.wideGlobalGames;
    }
    const obj6 = { style: null, children: null };
    items2[2] = _global;
    obj6.style = items2;
    obj6.children = children;
    obj4.children = React5(React4, obj6);
    items1[1] = React5(React3, obj4);
    obj.children = items1;
    let tmp9 = obj;
  } else {
    obj.style = containerStyle.containerStyle;
    const items3 = [header, ];
    const obj11 = { style: tmp5, children };
    items3[1] = React5(React4, obj11);
    obj.children = items3;
    tmp9 = obj;
  }
  return React6(React4, tmp9);
}
({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
({ CHECKPOINT_GLOBAL_GAME_CATEGORIES: closure_6, CHECKPOINT_PRIMARY: metroImportDefault, CHECKPOINT_NAV_HEIGHT } = CheckpointConstants);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let obj = { container: { width: "100%", flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 }, globalContainer: null, header: null, globalHeading: null, globe: null, title: null, titleText: null, number: null, games: null, game: null, cover: null, rank: null, globalGames: null, globalGame: null, globalCover: null, wideContainer: null, wideHeader: null, wideGamesScroll: null, wideGamesContent: null, wideGames: null, wideGame: null, wideGlobalGames: null, wideGlobalGame: null, wideGlobalCover: null, wideGlobalDescription: null, wideCover: null };
let obj2 = { width: "100%", flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
obj.globalContainer = { gap: nativeDefault.space.PX_32 };
let obj3 = { gap: nativeDefault.space.PX_32 };
obj.header = { gap: nativeDefault.space.PX_12 };
let obj4 = { gap: nativeDefault.space.PX_12 };
obj.globalHeading = { alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
obj.globe = { width: 75, height: 56 };
let obj5 = { alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
obj.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.titleText = { flexShrink: 1 };
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.number = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let obj7 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj.games = { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_16, rowGap: nativeDefault.space.PX_12 };
let obj8 = { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_16, rowGap: nativeDefault.space.PX_12 };
obj.game = { width: "30%", gap: nativeDefault.space.PX_8 };
obj.cover = { width: "87.5%" };
obj.rank = { position: "absolute", bottom: 0, left: 0 };
let obj9 = { width: "30%", gap: nativeDefault.space.PX_8 };
obj.globalGames = { flexDirection: "row", flexWrap: "wrap", rowGap: nativeDefault.space.PX_24 };
let obj10 = { flexDirection: "row", flexWrap: "wrap", rowGap: nativeDefault.space.PX_24 };
obj.globalGame = { width: "50%", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj.globalCover = { width: 96 };
let obj11 = { width: "50%", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj.wideContainer = { width: "100%", maxWidth: useIsCheckpointWide.CHECKPOINT_WIDE_MAX_WIDTH, alignSelf: "center", flexDirection: "row", justifyContent: "center", alignItems: "center", columnGap: 76 };
obj.wideHeader = { width: 268, flexShrink: 1 };
obj.wideGamesScroll = { flex: 1, minWidth: 74, maxWidth: 334, alignSelf: "stretch", marginVertical: CHECKPOINT_NAV_HEIGHT };
obj.wideGamesContent = { flexGrow: 1, justifyContent: "center" };
const obj12 = { width: "100%", maxWidth: useIsCheckpointWide.CHECKPOINT_WIDE_MAX_WIDTH, alignSelf: "center", flexDirection: "row", justifyContent: "center", alignItems: "center", columnGap: 76 };
obj.wideGames = { columnGap: nativeDefault.space.PX_24, rowGap: nativeDefault.space.PX_16 };
obj.wideGame = { width: 74 };
obj.wideGlobalGames = { columnGap: 0 };
const obj13 = { columnGap: nativeDefault.space.PX_24, rowGap: nativeDefault.space.PX_16 };
obj.wideGlobalGame = { width: "50%", flexDirection: "row", paddingRight: nativeDefault.space.PX_12 };
const obj14 = { width: "50%", flexDirection: "row", paddingRight: nativeDefault.space.PX_12 };
obj.wideGlobalCover = { width: nativeDefault.space.PX_48 };
obj.wideGlobalDescription = { flex: 1 };
obj.wideCover = { width: "100%" };
let closure_10 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointGamesStatsScreen.tsx");

export default function CheckpointGamesStatsScreen() {
  const tmp = useIsCheckpointWideDefault();
  items = [CheckpointStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    const stats = CheckpointStore.stats;
    let games;
    if (stats != null) {
      games = stats.games;
    }
    return games;
  });
  const items1 = [CheckpointStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => require("CheckpointStatsUtils").hasCheckpointGames(CheckpointStore.stats));
  const items2 = [CheckpointStore];
  const stateFromStores2 = initialize.useStateFromStores(items2, () => {
    const globalStats = CheckpointStore.globalStats;
    let games;
    if (globalStats != null) {
      games = globalStats.games;
    }
    return games;
  });
  const obj4 = { centered: tmp, children: null };
  if (!stateFromStores1) {
    if (null != stateFromStores2) {
      const obj5 = { gameStats: stateFromStores2 };
      let tmp5Result = React5(GlobalGames, obj5);
    }
    obj4.children = tmp5Result;
    return React5(tmp6, obj4);
  }
  tmp5Result = React5(UserGames, { gameStats: stateFromStores });
};