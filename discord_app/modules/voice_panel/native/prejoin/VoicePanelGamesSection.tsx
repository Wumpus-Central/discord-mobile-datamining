// === Module 17161: VoicePanelGamesSection ===

// Module 17161 (VoicePanelGamesSection)
import util from "util" /* 1114 */;
import TableRow from "TableRow" /* 5605 */;
import useGame from "useGame" /* 7309 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8675 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8686 */;
import FormComponents from "FormComponents" /* 9118 */;
import VoiceChannelGamesExperimentDefault from "VoiceChannelGamesExperiment" /* 9178 */;
import GameActivityIconDefault from "GameActivityIcon" /* 9183 */;
import useVoiceChannelGamesDefault from "useVoiceChannelGames" /* 17162 */;
import noop from "module_19" /* 19 */;

require = fn;
function GameRow(gameId) {
  gameId = gameId.gameId;
  let obj = useGame;
  const data = obj.useGame(gameId).data;
  obj = { gameId, source: GameProfileAnalyticUtils.GameProfileSources.VoiceChannelGames };
  const tmp4Result = useOpenGameProfileModalDefault(obj);
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
    obj = { game: data, size: 32, fallback: "placeholder" };
    const tmp7 = jsx(GameActivityIconDefault, { game: data, size: 32, fallback: "placeholder" });
    if (null == tmp4Result) {
      const obj1 = { icon: tmp7, label: name, disabled: true };
      let obj2 = obj1;
    } else {
      obj2 = {
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
      const obj3 = { gameName: name };
      obj2.accessibilityLabel = intl2.formatToPlainString(util.t["9sZWVp"], obj3);
    }
    return jsx(TableRow.TableRow, obj2);
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