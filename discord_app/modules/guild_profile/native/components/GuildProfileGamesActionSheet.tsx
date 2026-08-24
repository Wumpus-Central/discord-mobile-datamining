// discord_app/modules/guild_profile/native/components/GuildProfileGamesActionSheet.tsx
import useOpenGameProfileModalDefault from "../../../game_profile/hooks/useOpenGameProfileModal.tsx";
import stylesDefault from "GameIcon.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function GuildProfileGameRow(activityLevel) {
  ({ game, clickable } = activityLevel);
  let _require;
  let obj = { gameId: game.id, source: require("../../../game_profile/GameProfileAnalyticUtils.tsx").GameProfileSources.GuildProfileGames, trackEntryPointImpression: clickable };
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
  return jsx(require("../../../../design/components/TableRow/native/TableRow.native.tsx").TableRow, { icon: jsx(stylesDefault, { game, activityLevel: activityLevel.activityLevel }), label: game.name, arrow: clickable, onPress: null });
}
let closure_7 = createCacheKey.createStyles({ container: { padding: 16, paddingBottom: 48 } });
const result = require("set").fileFinishedImporting("modules/guild_profile/native/components/GuildProfileGamesActionSheet.tsx");

export default function GuildProfileGamesActionSheet(profile) {
  profile = profile.profile;
  let id;
  let gameActivity;
  let enabled;
  id = profile.id;
  gameActivity = profile.gameActivity;
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
    let obj = gameActivity(enabled[12]);
    obj = { guildId: id };
    obj.openLazy(id(enabled[14])(enabled[13], enabled.paths), "GuildProfileActionSheet:" + id, obj);
  }, items);
  obj = { ref: obj2.useBottomSheetRef().bottomSheetRef, scrollable: true, onDismiss: callback, startHeight: 300, children: null };
  obj = { children: null };
  obj1 = { style: callback().container, children: null };
  obj2 = { title: str, hasIcons: true, children: allGuildProfileGames.map((game) => closure_1_5(closure_1_6, { game, activityLevel: gameActivity[game.id], clickable: enabled }, game.id)) };
  obj1[1] = jsx(id(enabled[17]).TableRowGroup, { title: str, hasIcons: true, children: allGuildProfileGames.map((game) => closure_1_5(closure_1_6, { game, activityLevel: gameActivity[game.id], clickable: enabled }, game.id)) });
  obj[0] = <View style={callback().container}>{null}</View>;
  obj[4] = jsx(id(enabled[16]).BottomSheetScrollView, { children: null });
  return jsx(id(enabled[15]).BottomSheet, { children: null });
};