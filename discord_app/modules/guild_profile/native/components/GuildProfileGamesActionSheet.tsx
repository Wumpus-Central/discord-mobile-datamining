// === Module 9291: GuildProfileGamesActionSheet ===

// Module 9291 (GuildProfileGamesActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import TableRow from "TableRow" /* 5656 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8766 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8777 */;
import components_GameIconDefault from "components/GameIcon" /* 9286 */;
import noop from "module_19" /* 19 */;

require = fn;
function GuildProfileGameRow(activityLevel) {
  const game = activityLevel.game;
  let obj = { gameId: game.id, source: GameProfileAnalyticUtils.GameProfileSources.GuildProfileGames, trackEntryPointImpression: true };
  const tmpResult = useOpenGameProfileModalDefault(obj);
  closure_0 = tmpResult;
  obj = { icon: jsx(components_GameIconDefault, { game, activityLevel: activityLevel.activityLevel }), label: game.name, arrow: tmp3, onPress: null };
  let fn;
  if (null != tmpResult) {
    fn = () => closure_0();
  }
  obj.onPress = fn;
  return jsx(TableRow.TableRow, { icon: jsx(components_GameIconDefault, { game, activityLevel: activityLevel.activityLevel }), label: game.name, arrow: tmp3, onPress: null });
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4606);
let closure_7 = createStyles.createStyles({ container: { padding: 16, paddingBottom: 48 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileGamesActionSheet.tsx");

export default function GuildProfileGamesActionSheet(profile) {
  profile = profile.profile;
  const id = profile.id;
  const gameActivity = profile.gameActivity;
  let obj = id(9290);
  const allGuildProfileGames = obj.useAllGuildProfileGames(profile);
  let obj1 = id(8255);
  const intl = id(1114).intl;
  let str = intl.format(id(1114).t.vuAVo7, { serverName: profile.name });
  const items = [id];
  str = str.toString();
  const callback = noop.useCallback(() => {
    const obj = { guildId: id };
    obj.openLazy(asyncRequireImpl(9275, dependencyMap.paths), "GuildProfileActionSheet:" + id, obj);
  }, items);
  obj = { ref: obj1.useBottomSheetRef().bottomSheetRef, scrollable: true, onDismiss: callback, startHeight: 300, children: null };
  obj = { children: null };
  obj1 = { style: closure_7().container, children: null };
  const tmp = closure_7();
  obj1.children = jsx(id(5738).TableRowGroup, { title: str, hasIcons: true, children: allGuildProfileGames.map((game) => <GuildProfileGameRow key={game.id} game={game} activityLevel={gameActivity[game.id]} />) });
  obj.children = <View style={closure_7().container}>{null}</View>;
  obj.children = jsx(id(6698).BottomSheetScrollView, { children: null });
  return jsx(id(7223).BottomSheet, { children: null });
};