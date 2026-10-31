// discord_app/modules/checkpoint/native/components/screens/stats/CheckpointGamesStatsScreen.tsx
import _mod17 from "../../../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../../../../utils/AvatarUtils.tsx";
import _modDef3092 from "../../../../Checkpoint2026.messages.js";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import CheckpointTextDefault from "../../CheckpointText.tsx";
import CheckpointEmphasisDefault from "../../CheckpointEmphasis.tsx";
import CheckpointRankTagDefault from "../../CheckpointRankTag.tsx";
import GameStore from "../../../../../games/GameStore.tsx";
import CheckpointStore from "../../../../CheckpointStore.tsx";
import CheckpointConstants from "../../../../CheckpointConstants.tsx";
import jsxProd from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const CheckpointApngPlayerDefault = items9(13629);
const _modDef13630 = items9(13630);
const _modDef13631 = items9(13631);
const CheckpointCountUpStatNumberDefault = items9(13637);
const CheckpointDisplayTextDefault = items9(13643);
function GameCard(game) {
  game = game.game;
  const id = game.id;
  let coverImageHash = game.coverImageHash;
  const rank = game.rank;
  ({ name, iconHash } = game);
  ({ label, accessibilityLabel } = game);
  const tmp = closure_10();
  const items = [GameStore];
  let stateFromStores = id(504).useStateFromStores(items, () => GameStore.getCoverImageUrl(id, { size: 480 }));
  if (stateFromStores == null) {
    const obj3 = { id, icon: null, fallbackAvatar: false };
    if (coverImageHash == null) {
      coverImageHash = iconHash;
    }
    obj3.icon = coverImageHash;
    stateFromStores = AvatarUtilsDefault.getApplicationIconURL(obj3);
  }
  const obj4 = { accessible: true, accessibilityLabel, style: tmp.game, children: null };
  const obj5 = { style: tmp.cover, children: null };
  if (null != stateFromStores) {
    const obj6 = { source: null, style: null, resizeMode: "cover" };
    const tmp13 = FastImageDefault;
    obj6.source = AvatarUtilsDefault.makeSource(stateFromStores);
    obj6.style = tmp.coverImage;
    let tmp10 = closure_8(tmp13, obj6);
    let tmp9 = closure_8;
  } else {
    const obj7 = { style: null, children: null };
    const items1 = [,];
    ({ coverImage: arr2[0], unknownCover: arr2[1] } = tmp);
    obj7.style = items1;
    obj7.children = closure_8(tmp2(8143).UnknownGameIcon, { size: "lg" });
    tmp9 = closure_8;
    tmp10 = closure_8(View, obj7);
  }
  const items2 = [tmp10];
  let tmp9Result = null != rank;
  if (tmp9Result) {
    const obj9 = { rank, style: tmp.rank };
    tmp9Result = tmp9(CheckpointRankTagDefault, obj9);
  }
  items2[1] = tmp9Result;
  obj5.children = items2;
  const items3 = [closure_9(View, obj5)];
  const obj10 = { style: tmp.gameText, children: null };
  const items4 = [
    tmp9(id(5624).Text, { variant: "text-md/semibold", style: tmp.gameName, lineClamp: 2, children: name }),
    tmp9(CheckpointTextDefault, { variant: "experimental/mono-md/bold", style: tmp.gameLabel, children: label }),
  ];
  obj10.children = items4;
  items3[1] = closure_9(View, obj10);
  obj4.children = items3;
  return closure_9(View, obj4);
}
const View = _mod17.View;
({ CHECKPOINT_GLOBAL_GAME_CATEGORIES: metroRequire, CHECKPOINT_PRIMARY } = CheckpointConstants);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
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
  coverImage: null,
  unknownCover: null,
  rank: null,
  gameText: null,
  gameName: null,
  gameLabel: null,
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
obj.cover = { width: "87.5%", aspectRatio: 0.75 };
obj.coverImage = { width: "100%", height: "100%", borderWidth: 1, borderColor: CHECKPOINT_PRIMARY };
let obj9 = { width: "30%", gap: nativeDefault.space.PX_8 };
obj.unknownCover = { backgroundColor: nativeDefault.colors.BLACK, alignItems: "center", justifyContent: "center" };
obj.rank = { position: "absolute", bottom: 0, left: 0 };
let obj10 = { backgroundColor: nativeDefault.colors.BLACK, alignItems: "center", justifyContent: "center" };
obj.gameText = { gap: nativeDefault.space.PX_4 };
obj.gameName = { color: CheckpointConstants.CHECKPOINT_WHITE };
obj.gameLabel = { fontSize: 14, lineHeight: 18 };
let closure_10 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting(
  "modules/checkpoint/native/components/screens/stats/CheckpointGamesStatsScreen.tsx",
);

export default function CheckpointGamesStatsScreen() {
  let map = closure_10();
  let intl = stateFromStores1;
  let obj = dependencyMap;
  const items = [CheckpointStore];
  const stateFromStores = stateFromStores1(504).useStateFromStores(items, () => {
    const stats = CheckpointStore.stats;
    let games;
    if (stats != null) {
      games = stats.games;
    }
    return games;
  });
  const obj2 = stateFromStores1(504);
  const items1 = [CheckpointStore];
  stateFromStores1 = stateFromStores1(504).useStateFromStores(items1, () => {
    const globalStats = CheckpointStore.globalStats;
    let games;
    if (globalStats != null) {
      games = globalStats.games;
    }
    return games;
  });
  const obj3 = stateFromStores1(504);
  const items2 = [CheckpointStore];
  let num;
  const stateFromStores2 = stateFromStores1(504).useStateFromStores(items2, () =>
    stateFromStores1(6437).hasCheckpointGames(CheckpointStore.stats),
  );
  if (stateFromStores != null) {
    num = stateFromStores.totalGamesPlayed;
  }
  if (num == null) {
    num = 0;
  }
  let rounded = Math.round(num);
  const obj4 = stateFromStores1(504);
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.totalGamesPlayedPercentile;
  }
  let percentHook = intl(6437).getCheckpointTopPercent(prop);
  let games;
  if (stateFromStores != null) {
    games = stateFromStores.games;
  }
  if (games == null) {
    games = [];
  }
  const intl2 = intl(1113).intl;
  let items9 = importDefault;
  let stringResult = intl2.string(_modDef3092.HM2fjf);
  let formatToPlainStringResult;
  if (null != percentHook) {
    const intl3 = intl(1113).intl;
    const obj5 = { percent: percentHook };
    formatToPlainStringResult = intl3.formatToPlainString(_modDef3092.VjXwW9, obj5);
  }
  if (!stateFromStores2) {
    if (null != stateFromStores1) {
      const obj6 = { children: null };
      const obj7 = { style: null, children: null };
      const items3 = [,];
      ({ container: arr8[0], globalContainer: arr8[1] } = map);
      obj7.style = items3;
      const obj8 = { style: map.header, children: null };
      const obj9 = { style: map.globalHeading, children: null };
      const obj10 = { animatedUri: _modDef13630, staticUri: _modDef13631, style: map.globe };
      const items4 = [closure_8(CheckpointApngPlayerDefault, obj10)];
      const obj11 = { isStepHeading: true, children: null };
      const items9Result = CheckpointApngPlayerDefault;
      const intl5 = intl(1113).intl;
      const items9Result1 = CheckpointDisplayTextDefault;
      obj11.children = intl5.string(_modDef3092.qbCgI7).toLocaleUpperCase();
      items4[1] = closure_8(items9Result1, obj11);
      obj9.children = items4;
      const items5 = [closure_9(View, obj9)];
      const obj12 = { variant: "heading-lg/medium", children: null };
      const stringResult1 = intl5.string(_modDef3092.qbCgI7);
      const intl6 = intl(1113).intl;
      obj12.children = intl6.string(_modDef3092["0oDeiM"]);
      items5[1] = closure_8(CheckpointTextDefault, obj12);
      obj8.children = items5;
      const items6 = [closure_9(View, obj8)];
      const obj13 = {
        style: map.games,
        children: closure_6.map((list) => {
          list = list.list;
          const first = stateFromStores1[list][0];
          if (null == first) {
            return null;
          } else {
            const intl = util.intl;
            const stringResult = intl.string(tmp);
            const obj = { game: first, label: stringResult.toLocaleUpperCase(), accessibilityLabel: null };
            const _HermesInternal = HermesInternal;
            obj.accessibilityLabel = "" + first.name + ", " + stringResult;
            return React6(GameCard, obj, list);
          }
        }),
      };
      items6[1] = closure_8(View, obj13);
      obj7.children = items6;
      obj6.children = closure_9(View, obj7);
      return closure_8(tmp8, obj6);
    }
  }
  let obj14 = { style: map.container, children: null };
  const obj15 = { style: map.title, children: null };
  const items7 = [closure_8(intl(9727).GameControllerIcon, { size: "refresh_sm", color: CHECKPOINT_PRIMARY })];
  const obj17 = { isStepHeading: true, variant: "heading-md/extrabold", style: map.titleText, children: null };
  const intlResult = intl(6437);
  const obj16 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
  obj17.children = stringResult.toLocaleUpperCase();
  items7[1] = closure_8(CheckpointTextDefault, obj17);
  obj15.children = items7;
  let items8 = [closure_9(View, obj15), ,];
  const items9Result3 = CheckpointTextDefault;
  items8[1] = closure_8(View, {
    accessible: true,
    accessibilityLabel: "" + rounded + " " + stringResult.toLocaleLowerCase(),
    style: map.number,
    children: closure_8(CheckpointCountUpStatNumberDefault, { end: rounded }),
  });
  let obj19 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: null };
  const obj18 = {
    accessible: true,
    accessibilityLabel: "" + rounded + " " + stringResult.toLocaleLowerCase(),
    style: map.number,
    children: closure_8(CheckpointCountUpStatNumberDefault, { end: rounded }),
  };
  if (null != percentHook) {
    intl = intl(1113).intl;
    const obj20 = { percent: percentHook, percentHook: null };
    percentHook = function percentHook(children, arg1) {
      return closure_1_8(CheckpointEmphasisDefault, { children }, arg1);
    };
    obj20.percentHook = percentHook;
    let formatResult = intl.format(_modDef3092["hc0/yJ"], obj20);
  } else {
    const intl4 = intl(1113).intl;
    const obj21 = { numGames: rounded };
    formatResult = intl4.format(_modDef3092.aJMJ6b, obj21);
  }
  obj = { children: null };
  const obj22 = { children: null };
  obj19.children = formatResult;
  obj19 = closure_8(CheckpointTextDefault, obj19);
  items8[2] = obj19;
  obj22.children = items8;
  items9 = [closure_9(View, obj22)];
  const obj23 = { style: map.games, children: null };
  map = games.map;
  obj23.children = map((game, arg1) => {
    game = game.game;
    const sum = arg1 + 1;
    const rounded = Math.round(game.numSessions);
    const obj = { game, rank: sum, label: rounded, accessibilityLabel: null };
    const intl = stateFromStores1(1113).intl;
    obj.accessibilityLabel = intl.formatToPlainString(_modDef3092.mqdLhl, {
      gameName: game.name,
      rank: sum,
      numSessions: rounded,
    });
    return closure_1_8(GameCard, obj, game.id);
  });
  items8 = closure_8(View, obj23);
  items9[1] = items8;
  obj14.children = items9;
  obj14 = closure_9(View, obj14);
  obj.children = obj14;
  const items9Result4 = CheckpointTextDefault;
}
