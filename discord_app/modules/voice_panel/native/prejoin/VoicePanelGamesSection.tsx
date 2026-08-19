// === Module 16375: GameRow ===

// Module 16375 (GameRow)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 9519 */;
import VoiceBadges from "VoiceBadges" /* 9676 */;
import useIsVoiceChannelGamesExperimentEnabledDefault from "useIsVoiceChannelGamesExperimentEnabled" /* 9731 */;
import _modDef9744 from "module_9744" /* 9744 */;
import useVoiceChannelGamesDefault from "useVoiceChannelGames" /* 16376 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = fn;
function GameRow(gameId) {
  gameId = gameId.gameId;
  let _require;
  let obj = _require(5378);
  const data = obj.useGame(gameId).data;
  obj = { gameId, source: _require(9101).GameProfileSources.VoiceChannelGames };
  const tmp4Result = useOpenGameProfileModalDefault(obj);
  _require = tmp4Result;
  if (null == data) {
    return null;
  } else {
    if ("" !== data.name) {
      let name = data.name;
    } else {
      const intl = tmp(1236).intl;
      name = intl.string(tmp(1236).t.GIWFlF);
    }
    obj = { game: null, size: 32, fallback: "placeholder" };
    obj[0] = data;
    const tmp7 = jsx(_modDef9744, { game: null, size: 32, fallback: "placeholder" });
    if (null == tmp4Result) {
      obj1 = { icon: null, label: null, disabled: true };
      obj1[0] = tmp7;
      obj1[1] = name;
      let obj2 = obj1;
    } else {
      obj2 = { icon: null, label: null, arrow: true, onPress: null, accessibilityRole: "button", accessibilityLabel: null };
      obj2[0] = tmp7;
      obj2[1] = name;
      obj2[3] = function onPress() {
        return callback();
      };
      const intl2 = tmp(1236).intl;
      const obj3 = { gameName: null };
      obj3[0] = name;
      obj2[5] = intl2.formatToPlainString(tmp(1236).t["9sZWVp"], obj3);
    }
    return jsx(tmp(6291).TableRow, obj2);
  }
}
const memoResult = importAllResult.memo(function VoicePanelGamesSection(arg0) {
  ({ members, guildId } = arg0);
  const tmp2 = useIsVoiceChannelGamesExperimentEnabledDefault("voice_pre_join_games_section");
  const arr = useVoiceChannelGamesDefault(members, guildId, tmp2);
  let tmp3 = null;
  if (tmp2) {
    tmp3 = null;
    if (0 !== arr.length) {
      const obj = { title: null, hasIcons: true, children: null };
      const intl = getSystemLocale.intl;
      obj[0] = intl.string(getSystemLocale.t.crRMpG);
      obj[2] = arr.map((item, index) => callback(closure_4, { gameId: item }, item));
      tmp3 = jsx(VoiceBadges.VoicePanelFormSection, { title: null, hasIcons: true, children: null });
    }
  }
  return tmp3;
});
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/prejoin/VoicePanelGamesSection.tsx");

export default memoResult;