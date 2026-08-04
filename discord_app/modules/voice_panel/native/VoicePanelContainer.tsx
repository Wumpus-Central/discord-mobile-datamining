import importAllResult from "noop";
import ensureGuildLoaded from "ensureGuildLoaded";
import withEqualityFn from "withEqualityFn";
import { jsx } from "jsxProd";

const require = arg1;
function VoicePanel(arg0) {
  const _require = arg0;
  let obj = _require(589);
  const items = [ensureGuildLoaded];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const channel = outer1_4.getChannel(channelId.channelId);
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
  return jsx(importDefault(15996), {});
}
function getChannelKey(arg0) {
  return arg0;
}
function renderVoicePanel(arg0, channelId, transitionState, transitionCleanUp) {
  return <VoicePanel key={arg1} channelId={arg1} transitionState={arg2} transitionCleanUp={arg3} />;
}
let c3 = importAllResult;
const memoResult = importAllResult.memo(function VoicePanelContainer() {
  const tmp = callback((channels) => Array.from(channels.channels), require(3898) /* isIterable */.shallow);
  return jsx(require(4629) /* wrapChildrenDefault */.TransitionGroup, { items: callback((channels) => Array.from(channels.channels), require(3898) /* isIterable */.shallow), getItemKey: getChannelKey, renderItem: renderVoicePanel });
});
const result = require("withEqualityFn").fileFinishedImporting("modules/voice_panel/native/VoicePanelContainer.tsx");

export default memoResult;