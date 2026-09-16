// discord_app/modules/voice_panel/native/VoicePanelContainer.tsx
import _mod4260 from "../../../../_runtime/metro/04260__.js";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import VoicePanelControllerDefault from "VoicePanelController.tsx";
import VoicePanelUIDefault from "VoicePanelUI.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import VoicePanelStore from "../VoicePanelStore.tsx";

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
  return (
    <VoicePanel
      key={channelId}
      channelId={channelId}
      transitionState={transitionState}
      transitionCleanUp={transitionCleanUp}
    />
  );
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelContainer.tsx");

export default noop.memo(function VoicePanelContainer() {
  const tmp = VoicePanelStore((channels) => Array.from(channels.channels), _mod4260.shallow);
  return jsx(native.TransitionGroup, {
    items: VoicePanelStore((channels) => Array.from(channels.channels), _mod4260.shallow),
    getItemKey: getChannelKey,
    renderItem: renderVoicePanel,
  });
});
