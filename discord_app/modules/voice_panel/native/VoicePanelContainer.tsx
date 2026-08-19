// === Module 16270: VoicePanel ===

// Module 16270 (VoicePanel)
import isIterable from "isIterable" /* 4006 */;
import wrapChildrenDefault from "wrapChildrenDefault" /* 4668 */;
import VoicePanelControllerDefault from "VoicePanelController" /* 16271 */;
import importAllResult from "noop" /* 19 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import withEqualityFn from "withEqualityFn" /* 8664 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
function VoicePanel(arg0) {
  const _require = arg0;
  let obj = _require(589);
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