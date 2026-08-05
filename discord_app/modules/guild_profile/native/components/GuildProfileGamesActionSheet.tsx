// discord_app/modules/guild_profile/native/components/GuildProfileGamesActionSheet.tsx
import noop from "noop";
import { View } from "TableRowGroupTitle";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
function GuildProfileGameRow(activityLevel) {
  let clickable;
  let game;
  ({ game, clickable } = activityLevel);
  let _require;
  let obj = { gameId: game.id, source: null, trackEntryPointImpression: null };
  obj[1] = _require(9200).GameProfileSources.GuildProfileGames;
  obj[2] = clickable;
  const tmp3Result = importDefault(9189)(obj);
  _require = tmp3Result;
  if (clickable) {
    clickable = null != tmp3Result;
  }
  obj = { icon: null, label: null, arrow: null, onPress: null };
  obj[0] = jsx(importDefault(12111), { game, activityLevel: activityLevel.activityLevel });
  obj[1] = game.name;
  obj[2] = clickable;
  let fn;
  if (clickable) {
    fn = () => _undefined();
  }
  obj[3] = fn;
  return jsx(_require(5315).TableRow, { icon: null, label: null, arrow: null, onPress: null });
}
let closure_7 = createCacheKey.createStyles({ container: { padding: 16, paddingBottom: 48 } });
const result = require("jsxProd").fileFinishedImporting("modules/guild_profile/native/components/GuildProfileGamesActionSheet.tsx");

export default function GuildProfileGamesActionSheet(profile) {
  profile = profile.profile;
  let id;
  let gameActivity;
  let enabled;
  id = profile.id;
  gameActivity = profile.gameActivity;
  let obj = id(enabled[8]);
  const allGuildProfileGames = obj.useAllGuildProfileGames(profile);
  let obj1 = id(enabled[9]);
  enabled = obj1.useGuildProfileGameProfilesExperiment({ location: "guild_profile_games_action_sheet" }).enabled;
  let obj2 = id(enabled[10]);
  const intl = id(enabled[11]).intl;
  let str = intl.format(id(enabled[11]).t.vuAVo7, { serverName: profile.name });
  const items = [id];
  str = str.toString();
  const callback = React.useCallback(() => {
    let obj = gameActivity(enabled[12]);
    obj = { guildId: id };
    obj.openLazy(id(enabled[14])(enabled[13], enabled.paths), "GuildProfileActionSheet:" + id, obj);
  }, items);
  obj = { ref: obj2.useBottomSheetRef().bottomSheetRef, scrollable: true, onDismiss: callback, startHeight: 300, children: null };
  obj = { children: null };
  obj1 = { style: callback().container, children: null };
  obj2 = { title: str, hasIcons: true, children: null };
  obj2[2] = allGuildProfileGames.map((game) => outer1_5(outer1_6, { game, activityLevel: gameActivity[game.id], clickable: enabled }, game.id));
  obj1[1] = jsx(id(enabled[17]).TableRowGroup, { title: str, hasIcons: true, children: null });
  obj[0] = <View style={callback().container}>{null}</View>;
  obj[4] = jsx(id(enabled[16]).BottomSheetScrollView, { children: null });
  return jsx(id(enabled[15]).BottomSheet, { children: null });
};