// === Module 9355: GuildProfileGamesActionSheet ===

// Module 9355 (GuildProfileGamesActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import TableRow from "TableRow" /* 5693 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8822 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8833 */;
import components_GameIconDefault from "components/GameIcon" /* 9350 */;
import noop from "module_19" /* 19 */;

require = fn;
function GuildProfileGameRow(activityLevel) {
  const game = activityLevel.game;
  const obj = { gameId: game.id, source: GameProfileAnalyticUtils.GameProfileSources.GuildProfileGames, trackEntryPointImpression: true };
  const tmpResult = useOpenGameProfileModalDefault(obj);
  closure_0 = tmpResult;
  const obj2 = { icon: jsx(components_GameIconDefault, { game, activityLevel: activityLevel.activityLevel }), label: game.name, arrow: null != tmpResult, onPress: null };
  let fn;
  if (null != tmpResult) {
    fn = () => closure_0();
  }
  obj2.onPress = fn;
  return jsx(TableRow.TableRow, { icon: jsx(components_GameIconDefault, { game, activityLevel: activityLevel.activityLevel }), label: game.name, arrow: null != tmpResult, onPress: null });
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4640);
let closure_7 = createStyles.createStyles({ container: { padding: 16, paddingBottom: 48 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileGamesActionSheet.tsx");

export default function GuildProfileGamesActionSheet(profile) {
  profile = profile.profile;
  const id = profile.id;
  const gameActivity = profile.gameActivity;
  const tmp = closure_7();
  const allGuildProfileGames = id(9354).useAllGuildProfileGames(profile);
  let obj = id(9354);
  const intl = id(1115).intl;
  const obj2 = id(8318);
  const items = [id];
  const str = intl.format(id(1115).t.vuAVo7, { serverName: profile.name });
  const callback = noop.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequireImpl(9339, dependencyMap.paths), "GuildProfileActionSheet:" + id, { guildId: id });
  }, items);
  const obj3 = { ref: obj2.useBottomSheetRef().bottomSheetRef, scrollable: true, onDismiss: callback, startHeight: 300, children: null };
  const obj4 = { children: null };
  const obj5 = { style: tmp.container, children: null };
  const str1 = intl.format(id(1115).t.vuAVo7, { serverName: profile.name }).toString();
  obj5.children = jsx(id(5775).TableRowGroup, { title: intl.format(id(1115).t.vuAVo7, { serverName: profile.name }).toString(), hasIcons: true, children: allGuildProfileGames.map((game) => <GuildProfileGameRow key={game.id} game={game} activityLevel={gameActivity[game.id]} />) });
  obj4.children = <View style={tmp.container}>{null}</View>;
  obj3.children = jsx(id(6738).BottomSheetScrollView, { children: null });
  return jsx(id(7264).BottomSheet, { ref: obj2.useBottomSheetRef().bottomSheetRef, scrollable: true, onDismiss: callback, startHeight: 300, children: null });
};