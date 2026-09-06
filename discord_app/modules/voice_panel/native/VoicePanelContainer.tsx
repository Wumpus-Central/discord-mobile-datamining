// === Module 17048: VoicePanelContainer ===

// Module 17048 (VoicePanelContainer)
import _mod4184 from "module_4184" /* 4184 */;
import native from "native" /* 4271 */;
import VoicePanelControllerDefault from "VoicePanelController" /* 17049 */;
import VoicePanelUIDefault from "VoicePanelUI" /* 17093 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import VoicePanelStore from "VoicePanelStore" /* 4768 */;

require = fn;
function VoicePanel(arg0) {
  _require = arg0;
  let obj = require("initialize");
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(channelId.channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  });
  obj = {};
  const merged = Object.assign(arg0);
  obj.guildId = stateFromStores;
  obj.children = noop.useMemo(() => jsx(VoicePanelUIDefault, {}), []);
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
  const tmp = VoicePanelStore((channels) => Array.from(channels.channels), _mod4184.shallow);
  return jsx(native.TransitionGroup, { items: VoicePanelStore((channels) => Array.from(channels.channels), _mod4184.shallow), getItemKey: getChannelKey, renderItem: renderVoicePanel });
});