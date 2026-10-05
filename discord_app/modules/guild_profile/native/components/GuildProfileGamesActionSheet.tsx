// === Module 9410: GuildProfileGamesActionSheet ===

// Module 9410 (GuildProfileGamesActionSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import TableRow2 from "TableRow" /* 5993 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8319 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8320 */;
import components_GameIconDefault from "components/GameIcon" /* 9405 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import createStyles from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

let BottomSheet;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let activityLevel;
  let game;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(13);
  ({ game, activityLevel } = arg0);
  if (cResult[0] !== game.id) {
    const obj2 = { gameId: game.id, source: GameProfileAnalyticUtils.GameProfileSources.GuildProfileGames, trackEntryPointImpression: true };
    cResult[0] = game.id;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmp6 = useOpenGameProfileModalDefault(tmp4);
  let closure_0 = tmp6;
  if (cResult[2] === activityLevel) {
    let tmp8;
    if (cResult[3] === game) {
      tmp8 = cResult[4];
    }
    if (cResult[5] === null != tmp6) {
      let tmp10;
      if (cResult[6] === tmp6) {
        tmp10 = cResult[7];
      }
      if (cResult[8] === null != tmp6) {
        if (cResult[9] === game.name) {
          if (cResult[10] === tmp8) {
            let tmp11;
            if (cResult[11] === tmp10) {
              tmp11 = cResult[12];
            }
            return tmp11;
          }
        }
      }
      const tmp13 = jsx(TableRow2.TableRow, { icon: tmp8, label: game.name, arrow: null != tmp6, onPress: tmp10 });
      cResult[8] = null != tmp6;
      cResult[9] = game.name;
      cResult[10] = tmp8;
      cResult[11] = tmp10;
      cResult[12] = tmp13;
      tmp11 = tmp13;
    }
    let fn;
    if (null != tmp6) {
      fn = () => closure_0();
    }
    cResult[5] = null != tmp6;
    cResult[6] = tmp6;
    cResult[7] = fn;
    tmp10 = fn;
  }
  const tmp9 = jsx(components_GameIconDefault, { game, activityLevel });
  cResult[2] = activityLevel;
  cResult[3] = game;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : ((game) => {
  game = game.game;
  const activityLevel = game.activityLevel;
  const obj = { gameId: game.id, source: GameProfileAnalyticUtils.GameProfileSources.GuildProfileGames, trackEntryPointImpression: true };
  const tmp = useOpenGameProfileModalDefault;
  const tmpResult = tmp(obj);
  let closure_0 = tmpResult;
  const TableRow = TableRow2.TableRow;
  let fn;
  if (null != tmpResult) {
    fn = () => closure_0();
  }
  return <TableRow icon={null} label={game.name} arrow={null != tmpResult} onPress={fn} />;
});
let closure_7 = createStyles.createStyles({ container: { padding: 16, paddingBottom: 48 } });
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileGamesActionSheet.tsx");

export default function GuildProfileGamesActionSheet(profile) {
  profile = profile.profile;
  const id = profile.id;
  const gameActivity = profile.gameActivity;
  const tmp = closure_7();
  let obj = id(9409);
  const allGuildProfileGames = obj.useAllGuildProfileGames(profile);
  const obj2 = id(7841);
  const bottomSheetRef = obj2.useBottomSheetRef().bottomSheetRef;
  const name = profile.name;
  const intl = id(1126).intl;
  const items = [id];
  const str = intl.format(id(1126).t.vuAVo7, { serverName: name });
  const str1 = str.toString();
  const callback = react.useCallback(() => {
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    const obj = { guildId: id };
    const tmp2 = asyncRequire(9396, dependencyMap.paths);
    openLazy(tmp2, "GuildProfileActionSheet:" + id, obj);
  }, items);
  BottomSheet = id(6645).BottomSheet;
  const BottomSheetScrollView = id(6112).BottomSheetScrollView;
  ({ title: str1, hasIcons: true, children: allGuildProfileGames.map((game) => <closure_6 key={game.id} game={game} activityLevel={gameActivity[game.id]} />) });
  const TableRowGroup = id(6074).TableRowGroup;
  return <BottomSheet ref={bottomSheetRef} scrollable onDismiss={callback} startHeight={300}>{null}</BottomSheet>;
};