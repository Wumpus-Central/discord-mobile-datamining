// discord_app/modules/voice_panel/native/VoicePanelContainer.tsx
import isIterable from "../../../../_runtime/04006_isIterable.js";
import wrapChildrenDefault from "../../../design/components/TransitionGroup/TransitionGroup.tsx";
import VoicePanelControllerDefault from "VoicePanelController.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import withEqualityFn from "../VoicePanelStore.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

require = fn;
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
  return <VoicePanel key={channelId} channelId={channelId} transitionState={transitionState} transitionCleanUp={transitionCleanUp} />;
}
let c3 = importAllResult;
const memoResult = importAllResult.memo(function VoicePanelContainer() {
  const tmp = callback((channels) => Array.from(channels.channels), isIterable.shallow);
  return jsx(wrapChildrenDefault.TransitionGroup, { items: callback((channels) => Array.from(channels.channels), isIterable.shallow), getItemKey: getChannelKey, renderItem: renderVoicePanel });
});
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/VoicePanelContainer.tsx");

export default memoResult;