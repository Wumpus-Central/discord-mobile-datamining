// discord_app/modules/voice_panel/native/prejoin/VoicePanelGamesSection.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import VoiceBadges from "../shared/FormComponents.tsx";
import useIsVoiceChannelGamesExperimentEnabledDefault from "../../experiments/VoiceChannelGamesExperiment.tsx";
import _modDef9467 from "../../../games/native/GameActivityIcon.tsx";
import useOpenGameProfileModalDefault from "../../../game_profile/hooks/useOpenGameProfileModal.tsx";
import useVoiceChannelGamesDefault from "../hooks/useVoiceChannelGames.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { importDefaultResult1 } from "../../../games/hooks/useGame.tsx";

require = arg1;
function GameRow(gameId) {
  gameId = gameId.gameId;
  let _require;
  let obj = importDefaultResult1;
  const data = obj.useGame(gameId).data;
  obj = { gameId, source: require("../../../game_profile/GameProfileAnalyticUtils.tsx").GameProfileSources.VoiceChannelGames };
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
    const tmp7 = jsx(_modDef9467, { game: null, size: 32, fallback: "placeholder" });
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
    return jsx(tmp(5546).TableRow, obj2);
  }
  const tmp3 = importDefault;
  const tmp4 = useOpenGameProfileModalDefault;
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
      obj[2] = arr.map((gameId) => callback(closure_4, { gameId }, gameId));
      tmp3 = jsx(VoiceBadges.VoicePanelFormSection, { title: null, hasIcons: true, children: null });
    }
  }
  return tmp3;
});
const result = require("set").fileFinishedImporting("modules/voice_panel/native/prejoin/VoicePanelGamesSection.tsx");

export default memoResult;