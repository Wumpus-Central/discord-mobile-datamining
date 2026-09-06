// discord_app/modules/voice_panel/native/VoicePanelContainer.tsx
import _mod4184 from "../../../../_runtime/metro/04184__.js";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import VoicePanelControllerDefault from "VoicePanelController.tsx";
import VoicePanelUIDefault from "VoicePanelUI.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import VoicePanelStore from "../VoicePanelStore.tsx";

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
  const tmp = VoicePanelStore((channels) => Array.from(channels.channels), _mod4184.shallow);
  return jsx(native.TransitionGroup, {
    items: VoicePanelStore((channels) => Array.from(channels.channels), _mod4184.shallow),
    getItemKey: getChannelKey,
    renderItem: renderVoicePanel,
  });
});
