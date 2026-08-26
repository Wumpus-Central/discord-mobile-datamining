// === Module 12485: GuildProfileGameRow ===

// Module 12485 (GuildProfileGameRow)
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 9488 */;
import stylesDefault from "styles" /* 12480 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
function GuildProfileGameRow(activityLevel) {
  const game = activityLevel.game;
  let _require;
  let obj = { gameId: game.id, source: _require(9499).GameProfileSources.GuildProfileGames, trackEntryPointImpression: true };
  const tmpResult = useOpenGameProfileModalDefault(obj);
  _require = tmpResult;
  obj = { icon: jsx(stylesDefault, { game, activityLevel: activityLevel.activityLevel }), label: game.name, arrow: tmp3, onPress: null };
  let fn;
  if (null != tmpResult) {
    fn = () => callback();
  }
  obj[3] = fn;
  return jsx(_require(5546).TableRow, { icon: jsx(stylesDefault, { game, activityLevel: activityLevel.activityLevel }), label: game.name, arrow: tmp3, onPress: null });
}
let closure_7 = createCacheKey.createStyles({ container: { padding: 16, paddingBottom: 48 } });
const result = require("set").fileFinishedImporting("modules/guild_profile/native/components/GuildProfileGamesActionSheet.tsx");

export default function GuildProfileGamesActionSheet(profile) {
  profile = profile.profile;
  let id;
  let gameActivity;
  id = profile.id;
  gameActivity = profile.gameActivity;
  let obj = id(12484);
  const allGuildProfileGames = obj.useAllGuildProfileGames(profile);
  obj1 = id(7613);
  const intl = id(1236).intl;
  let str = intl.format(id(1236).t.vuAVo7, { serverName: profile.name });
  const items = [id];
  str = str.toString();
  const callback = React.useCallback(() => {
    let obj = gameActivity(closure_1_2[11]);
    obj = { guildId: id };
    obj.openLazy(id(closure_1_2[13])(closure_1_2[12], closure_1_2.paths), "GuildProfileActionSheet:" + id, obj);
  }, items);
  obj = { ref: obj1.useBottomSheetRef().bottomSheetRef, scrollable: true, onDismiss: callback, startHeight: 300, children: null };
  obj = { children: null };
  obj1 = { style: callback().container, children: null };
  const tmp = callback();
  obj1[1] = jsx(id(5939).TableRowGroup, { title: str, hasIcons: true, children: allGuildProfileGames.map((game) => closure_1_5(closure_1_6, { game, activityLevel: gameActivity[game.id] }, game.id)) });
  obj[0] = <View style={callback().container}>{null}</View>;
  obj[4] = jsx(id(5571).BottomSheetScrollView, { children: null });
  return jsx(id(5569).BottomSheet, { children: null });
};