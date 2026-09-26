// === Module 16868: VoicePanelContainer ===

// Module 16868 (VoicePanelContainer)
import _mod4452 from "module_4452" /* 4452 */;
import native from "native" /* 4540 */;
import VoicePanelControllerDefault from "VoicePanelController" /* 16869 */;
import VoicePanelUIDefault from "VoicePanelUI" /* 16913 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import VoicePanelStore from "VoicePanelStore" /* 5044 */;

require = fn;
function VoicePanel(arg0) {
  _require = arg0;
  const items = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(channelId.channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  });
  const obj2 = {};
  const obj = require("initialize");
  const merged = Object.assign(arg0);
  obj2.guildId = stateFromStores;
  obj2.children = noop.useMemo(() => jsx(VoicePanelUIDefault, {}), []);
  return jsx(VoicePanelControllerDefault, {});
}
function getChannelKey(arg0) {
  return arg0;
}
function renderVoicePanel(arg0, channelId, transitionState, transitionCleanUp) {
  return <VoicePanel key={channelId} channelId={channelId} transitionState={transitionState} transitionCleanUp={transitionCleanUp} />;
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelContainer.tsx");

export default noop.memo(function VoicePanelContainer() {
  const tmp = VoicePanelStore((channels) => Array.from(channels.channels), _mod4452.shallow);
  return jsx(native.TransitionGroup, { items: VoicePanelStore((channels) => Array.from(channels.channels), _mod4452.shallow), getItemKey: getChannelKey, renderItem: renderVoicePanel });
});