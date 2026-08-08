// discord_app/modules/voice_panel/native/prejoin/VoicePanelGamesSection.tsx
import { jsx } from "jsxProd";
import importAllResult from "noop";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { GameProfileEmbedAction } from "../../../game_profile/GameProfileAnalyticUtils.tsx";
import { useOpenGameProfileModal } from "../../../game_profile/hooks/useOpenGameProfileModal.tsx";
import { importDefaultResult1 } from "../../../games/hooks/useGame.tsx";
import { useIsVoiceChannelGamesExperimentEnabled } from "../../experiments/VoiceChannelGamesExperiment.tsx";
import { useVoiceChannelGames } from "../hooks/useVoiceChannelGames.tsx";
import { VoiceBadges } from "../shared/FormComponents.tsx";

const require = arg1;
function GameRow(gameId) {
  gameId = gameId.gameId;
  let _require;
  let obj = _importDefaultResult1;
  const data = obj.useGame(gameId).data;
  obj = { gameId, source: null };
  obj[1] = _GameProfileEmbedAction.GameProfileSources.VoiceChannelGames;
  const tmp4Result = useOpenGameProfileModal(obj);
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
    const tmp7 = jsx(tmp3(9251), { game: null, size: 32, fallback: "placeholder" });
    if (null == tmp4Result) {
      const obj1 = { icon: null, label: null, disabled: true };
      obj1[0] = tmp7;
      obj1[1] = name;
      let obj2 = obj1;
    } else {
      obj2 = { icon: null, label: null, arrow: true, onPress: null, accessibilityRole: "button", accessibilityLabel: null };
      obj2[0] = tmp7;
      obj2[1] = name;
      obj2[3] = function onPress() {
        return _undefined();
      };
      const intl2 = tmp(1236).intl;
      const obj3 = { gameName: null };
      obj3[0] = name;
      obj2[5] = intl2.formatToPlainString(tmp(1236).t["9sZWVp"], obj3);
    }
    return jsx(tmp(5374).TableRow, obj2);
  }
  tmp3 = importDefault;
  const tmp4 = useOpenGameProfileModal;
}
const memoResult = require("noop").memo(function VoicePanelGamesSection(arg0) {
  let guildId;
  let members;
  ({ members, guildId } = arg0);
  const tmp2 = useIsVoiceChannelGamesExperimentEnabled("voice_pre_join_games_section");
  const arr = useVoiceChannelGames(members, guildId, tmp2);
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
const result = require("importDefaultResult1").fileFinishedImporting("modules/voice_panel/native/prejoin/VoicePanelGamesSection.tsx");

export default memoResult;