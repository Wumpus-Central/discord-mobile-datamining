// discord_app/modules/checkpoint/native/components/screens/stats/CheckpointGamesStatsScreen.tsx
import _mod17 from "../../../../../../../_runtime/metro/00017__.js";
import initialize from "../../../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../intl/index.native.tsx";
import _modDef3248 from "../../../../Checkpoint2026.messages.js";
import CheckpointTextDefault from "../../CheckpointText.tsx";
import CheckpointApngPlayerDefault from "../../CheckpointApngPlayer.tsx";
import _modDef13884 from "../../../../../../../discord_assets/assets/checkpoint/voice-globe.png.js";
import _modDef13885 from "../../../../../../../discord_assets/assets/checkpoint/voice-globe-static.png.js";
import CheckpointCountUpStatNumberDefault from "../../CheckpointCountUpStatNumber.tsx";
import CheckpointEmphasisDefault from "../../CheckpointEmphasis.tsx";
import CheckpointDisplayTextDefault from "../../CheckpointDisplayText.tsx";
import CheckpointRankTagDefault from "../../CheckpointRankTag.tsx";
import CheckpointGameCard from "CheckpointGameCard.tsx";
import CheckpointStore from "../../../../CheckpointStore.tsx";
import CheckpointConstants from "../../../../CheckpointConstants.tsx";
import jsxProd from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

function UserGames(gameStats) {
  gameStats = gameStats.gameStats;
  const tmp = closure_9();
  _require = tmp;
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
  let intl = tmp3(1113).intl;
  const stringResult = intl.string(_modDef3248.HM2fjf);
  let formatToPlainStringResult;
  if (null != checkpointTopPercent) {
    const intl2 = tmp3(1113).intl;
    const obj2 = { percent: checkpointTopPercent };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3248.VjXwW9, obj2);
  }
  let obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.title, children: null };
  items = [closure_7(require("GameControllerIcon").GameControllerIcon, { size: "refresh_sm", color })];
  const obj6 = { isStepHeading: true, variant: "heading-sm/semibold", style: tmp.titleText, children: null };
  let obj = require("CheckpointStatsUtils");
  const obj5 = { size: "refresh_sm", color };
  obj6.children = stringResult.toLocaleUpperCase();
  items[1] = closure_7(CheckpointTextDefault, obj6);
  obj4.children = items;
  const items1 = [closure_8(View, obj4), ,];
  const tmp7Result = CheckpointTextDefault;
  items1[1] = closure_7(View, {
    accessible: true,
    accessibilityLabel: "" + rounded + " " + stringResult.toLocaleLowerCase(),
    style: tmp.number,
    children: closure_7(CheckpointCountUpStatNumberDefault, { end: rounded }),
  });
  const obj8 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: null };
  const obj7 = {
    accessible: true,
    accessibilityLabel: "" + rounded + " " + stringResult.toLocaleLowerCase(),
    style: tmp.number,
    children: closure_7(CheckpointCountUpStatNumberDefault, { end: rounded }),
  };
  if (null != checkpointTopPercent) {
    const intl4 = tmp3(1113).intl;
    const obj9 = {
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
        return closure_1_7(CheckpointEmphasisDefault, { children }, arg1);
      },
    };
    let formatResult = intl4.format(_modDef3248["hc0/yJ"], obj9);
  } else {
    const intl3 = tmp3(1113).intl;
    const obj10 = { numGames: rounded };
    formatResult = intl3.format(_modDef3248.aJMJ6b, obj10);
  }
  const obj11 = { children: null };
  obj8.children = formatResult;
  items1[2] = closure_7(CheckpointTextDefault, obj8);
  obj11.children = items1;
  const items2 = [closure_8(View, obj11)];
  const tmp7Result2 = CheckpointTextDefault;
  items2[1] = closure_7(View, {
    style: tmp.games,
    children: games.map((game, index) => {
      game = game.game;
      const sum = index + 1;
      const rounded = Math.round(game.numSessions);
      const obj = { accessible: true, accessibilityLabel: null, style: null, children: null };
      const intl = util.intl;
      obj.accessibilityLabel = intl.formatToPlainString(_modDef3248.mqdLhl, {
        gameName: game.name,
        rank: sum,
        numSessions: rounded,
      });
      obj.style = closure_0.game;
      const obj3 = {
        game,
        style: closure_0.cover,
        children: metroImportDefault(CheckpointRankTagDefault, { rank: sum, style: closure_0.rank }),
      };
      items = [
        metroImportDefault(CheckpointGameCard.CheckpointGameCard, obj3),
        metroImportDefault(CheckpointGameCard.CheckpointGameCardDescription, {
          name: game.name,
          label: rounded,
          textAlignment: "left",
        }),
      ];
      obj.children = items;
      return React5(View, obj, game.id);
    }),
  });
  obj3.children = items2;
  return closure_8(View, obj3);
}
function GlobalGames(gameStats) {
  gameStats = gameStats.gameStats;
  const tmp = closure_9();
  importDefault = tmp;
  let obj = { style: null, children: null };
  items = [,];
  ({ container: arr[0], globalContainer: arr[1] } = tmp);
  obj.style = items;
  let obj2 = { style: tmp.header, children: null };
  let obj3 = { style: tmp.globalHeading, children: null };
  const obj4 = { animatedUri: _modDef13884, staticUri: _modDef13885, style: tmp.globe };
  const items1 = [closure_7(CheckpointApngPlayerDefault, obj4)];
  const obj5 = { isStepHeading: true, children: null };
  let intl = gameStats(1113).intl;
  const tmp3 = CheckpointDisplayTextDefault;
  obj5.children = intl.string(_modDef3248.qbCgI7).toLocaleUpperCase();
  items1[1] = closure_7(tmp3, obj5);
  obj3.children = items1;
  const items2 = [closure_8(View, obj3)];
  const obj6 = { variant: "heading-lg/medium", children: null };
  let stringResult = intl.string(_modDef3248.qbCgI7);
  const intl2 = gameStats(1113).intl;
  obj6.children = intl2.string(_modDef3248["0oDeiM"]);
  items2[1] = closure_7(CheckpointTextDefault, obj6);
  obj2.children = items2;
  const items3 = [closure_8(View, obj2)];
  items3[1] = closure_7(View, {
    style: tmp.globalGames,
    children: closure_5.map((list) => {
      list = list.list;
      const first = gameStats[list][0];
      if (null == first) {
        return null;
      } else {
        const intl = util.intl;
        const stringResult = intl.string(tmp);
        const obj = { accessible: true, accessibilityLabel: null, style: null, children: null };
        const _HermesInternal = HermesInternal;
        obj.accessibilityLabel = "" + first.name + ", " + stringResult;
        obj.style = closure_1.globalGame;
        const obj2 = { game: first, style: closure_1.globalCover };
        items = [metroImportDefault(CheckpointGameCard.CheckpointGameCard, obj2)];
        const obj3 = { name: first.name, label: stringResult.toLocaleUpperCase(), textAlignment: "center" };
        items[1] = metroImportDefault(CheckpointGameCard.CheckpointGameCardDescription, obj3);
        obj.children = items;
        return React5(View, obj, list);
      }
    }),
  });
  obj.children = items3;
  return closure_8(View, obj);
}
const View = _mod17.View;
({ CHECKPOINT_GLOBAL_GAME_CATEGORIES: hasOwnProperty, CHECKPOINT_PRIMARY: closure_6 } = CheckpointConstants);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
let obj = {
  container: {
    width: "100%",
    flexGrow: 1,
    justifyContent: "center",
    gap: nativeDefault.space.PX_40,
    paddingBottom: nativeDefault.space.PX_64,
  },
  globalContainer: null,
  header: null,
  globalHeading: null,
  globe: null,
  title: null,
  titleText: null,
  number: null,
  games: null,
  game: null,
  cover: null,
  rank: null,
  globalGames: null,
  globalGame: null,
  globalCover: null,
};
let obj2 = {
  width: "100%",
  flexGrow: 1,
  justifyContent: "center",
  gap: nativeDefault.space.PX_40,
  paddingBottom: nativeDefault.space.PX_64,
};
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
obj.games = {
  flexDirection: "row",
  flexWrap: "wrap",
  columnGap: nativeDefault.space.PX_16,
  rowGap: nativeDefault.space.PX_12,
};
let obj8 = {
  flexDirection: "row",
  flexWrap: "wrap",
  columnGap: nativeDefault.space.PX_16,
  rowGap: nativeDefault.space.PX_12,
};
obj.game = { width: "30%", gap: nativeDefault.space.PX_8 };
obj.cover = { width: "87.5%" };
obj.rank = { position: "absolute", bottom: 0, left: 0 };
let obj9 = { width: "30%", gap: nativeDefault.space.PX_8 };
obj.globalGames = { flexDirection: "row", flexWrap: "wrap", rowGap: nativeDefault.space.PX_24 };
let obj10 = { flexDirection: "row", flexWrap: "wrap", rowGap: nativeDefault.space.PX_24 };
obj.globalGame = { width: "50%", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj.globalCover = { width: 96 };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting(
  "modules/checkpoint/native/components/screens/stats/CheckpointGamesStatsScreen.tsx",
);

export default function CheckpointGamesStatsScreen() {
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
  const stateFromStores1 = initialize.useStateFromStores(items1, () =>
    require("CheckpointStatsUtils").hasCheckpointGames(CheckpointStore.stats),
  );
  const items2 = [CheckpointStore];
  const stateFromStores2 = initialize.useStateFromStores(items2, () => {
    const globalStats = CheckpointStore.globalStats;
    let games;
    if (globalStats != null) {
      games = globalStats.games;
    }
    return games;
  });
  if (!stateFromStores1) {
    if (null != stateFromStores2) {
      const obj4 = { gameStats: stateFromStores2 };
      let tmp4Result = metroImportDefault(GlobalGames, obj4);
    }
    const obj5 = { children: tmp4Result };
    return metroImportDefault(tmp5, obj5);
  }
  tmp4Result = metroImportDefault(UserGames, { gameStats: stateFromStores });
}
