// discord_app/modules/voice_panel/native/VoicePanelContainer.tsx
import isIterable from "../../../../_runtime/04106_isIterable.js";
import ManaContext from "../../../../discord_common/js/packages/design/native.tsx";
import VoicePanelControllerDefault from "VoicePanelController.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import closure_4 from "../../../stores/ChannelStore.tsx";
import closure_5 from "../VoicePanelStore.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

require = arg1;
function VoicePanel(arg0) {
  const _require = arg0;
  let obj = initialize;
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const channel = closure_1_4.getChannel(channelId.channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  });
  obj = {};
  const merged = Object.assign(arg0);
  obj.guildId = stateFromStores;
  obj.children = importAllResult.useMemo(() => callback2(callback(table[6]), {}), []);
  return jsx(VoicePanelControllerDefault, {});
}
function getChannelKey(arg0) {
  return arg0;
}
function renderVoicePanel(arg0, channelId, transitionState, transitionCleanUp) {
  return <VoicePanel key={arg1} channelId={arg1} transitionState={arg2} transitionCleanUp={arg3} />;
}
let c3 = importAllResult;
const memoResult = importAllResult.memo(function VoicePanelContainer() {
  const tmp = callback((channels) => Array.from(channels.channels), isIterable.shallow);
  return jsx(ManaContext.TransitionGroup, {
    items: callback((channels) => Array.from(channels.channels), isIterable.shallow),
    getItemKey: getChannelKey,
    renderItem: renderVoicePanel,
  });
});
const result = require("set").fileFinishedImporting("modules/voice_panel/native/VoicePanelContainer.tsx");

export default memoResult;
