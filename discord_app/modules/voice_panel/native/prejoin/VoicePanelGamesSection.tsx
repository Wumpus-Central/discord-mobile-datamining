// === Module 17366: VoicePanelGamesSection ===

// Module 17366 (VoicePanelGamesSection)
import util from "util" /* 1115 */;
import TableRow from "TableRow" /* 5691 */;
import useGame from "useGame" /* 7419 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8810 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8821 */;
import FormComponents from "FormComponents" /* 9261 */;
import VoiceChannelGamesExperimentDefault from "VoiceChannelGamesExperiment" /* 9321 */;
import GameActivityIconDefault from "GameActivityIcon" /* 9326 */;
import useVoiceChannelGamesDefault from "useVoiceChannelGames" /* 17367 */;
import noop from "module_19" /* 19 */;

require = fn;
function GameRow(gameId) {
  gameId = gameId.gameId;
  const data = useGame.useGame(gameId).data;
  const obj2 = { gameId, source: null };
  obj2.source = GameProfileAnalyticUtils.GameProfileSources.VoiceChannelGames;
  const tmp4Result = useOpenGameProfileModalDefault(obj2);
  closure_0 = tmp4Result;
  if (null == data) {
    return null;
  } else {
    if ("" !== data.name) {
      let name = data.name;
    } else {
      const intl = util.intl;
      name = intl.string(util.t.GIWFlF);
    }
    const obj3 = { game: data, size: 32, fallback: "placeholder" };
    const tmp7 = jsx(GameActivityIconDefault, { game: data, size: 32, fallback: "placeholder" });
    if (null == tmp4Result) {
      const obj4 = { icon: tmp7, label: name, disabled: true };
      let obj5 = obj4;
    } else {
      obj5 = {
        icon: tmp7,
        label: name,
        arrow: true,
        onPress() {
              return closure_0();
            },
        accessibilityRole: "button",
        accessibilityLabel: null
      };
      const intl2 = util.intl;
      const obj6 = { gameName: name };
      obj5.accessibilityLabel = intl2.formatToPlainString(util.t["9sZWVp"], obj6);
    }
    return jsx(TableRow.TableRow, obj5);
  }
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/prejoin/VoicePanelGamesSection.tsx");

export default noop.memo(function VoicePanelGamesSection(arg0) {
  ({ members, guildId } = arg0);
  const tmp2 = VoiceChannelGamesExperimentDefault("voice_pre_join_games_section");
  const arr = useVoiceChannelGamesDefault(members, guildId, tmp2);
  let tmp3 = null;
  if (tmp2) {
    tmp3 = null;
    if (0 !== arr.length) {
      const obj = { title: null, hasIcons: true, children: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.crRMpG);
      obj.children = arr.map((gameId) => <GameRow key={gameId} gameId={gameId} />);
      tmp3 = jsx(FormComponents.VoicePanelFormSection, { title: null, hasIcons: true, children: null });
    }
  }
  return tmp3;
});