// === Module 9530: GuildProfileGameRow ===

// Module 9530 (GuildProfileGameRow)
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 9519 */;
import stylesDefault from "styles" /* 9524 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
function GuildProfileGameRow(activityLevel) {
  ({ game, clickable } = activityLevel);
  let _require;
  let obj = { gameId: game.id, source: _require(9101).GameProfileSources.GuildProfileGames, trackEntryPointImpression: clickable };
  const tmp3Result = useOpenGameProfileModalDefault(obj);
  _require = tmp3Result;
  if (clickable) {
    clickable = null != tmp3Result;
  }
  obj = { icon: jsx(stylesDefault, { game, activityLevel: activityLevel.activityLevel }), label: game.name, arrow: clickable, onPress: null };
  let fn;
  if (clickable) {
    fn = () => callback();
  }
  obj[3] = fn;
  return jsx(_require(6291).TableRow, { icon: jsx(stylesDefault, { game, activityLevel: activityLevel.activityLevel }), label: game.name, arrow: clickable, onPress: null });
}
let closure_7 = createCacheKey.createStyles({ container: { padding: 16, paddingBottom: 48 } });
const result = require("obj132").fileFinishedImporting("modules/guild_profile/native/components/GuildProfileGamesActionSheet.tsx");

export default function GuildProfileGamesActionSheet(profile) {
  profile = profile.profile;
  let enabled;
  const id = profile.id;
  const gameActivity = profile.gameActivity;
  let obj = id(enabled[8]);
  const allGuildProfileGames = obj.useAllGuildProfileGames(profile);
  obj1 = id(enabled[9]);
  enabled = obj1.useGuildProfileGameProfilesExperiment({ location: "guild_profile_games_action_sheet" }).enabled;
  let obj2 = id(enabled[10]);
  const intl = id(enabled[11]).intl;
  let str = intl.format(id(enabled[11]).t.vuAVo7, { serverName: profile.name });
  const items = [id];
  str = str.toString();
  const callback = React.useCallback(() => {
    gameActivity(enabled[12]);
    const obj = { guildId: id };
    obj.openLazy(id(enabled[14])(enabled[13], enabled.paths), "GuildProfileActionSheet:" + id, obj);
  }, items);
  { ref: obj2.useBottomSheetRef().bottomSheetRef, scrollable: true, onDismiss: callback, startHeight: 300, children: null };
  obj = { children: null };
  obj1 = { style: callback().container, children: null };
  obj2 = { title: str, hasIcons: true, children: allGuildProfileGames.map((item, index) => <GuildProfileGameRow key={item.id} game={item} activityLevel={gameActivity[item.id]} clickable={enabled} />) };
  obj1[1] = jsx(id(enabled[17]).TableRowGroup, { title: str, hasIcons: true, children: allGuildProfileGames.map((item, index) => <GuildProfileGameRow key={item.id} game={item} activityLevel={gameActivity[item.id]} clickable={enabled} />) });
  obj[0] = <View style={callback().container}>{null}</View>;
  obj[4] = jsx(id(enabled[16]).BottomSheetScrollView, { children: null });
  return jsx(id(enabled[15]).BottomSheet, { children: null });
};