// === Module 17663: VoicePanelContainer ===

// Module 17663 (VoicePanelContainer)
import c from "c" /* 576 */;
import _mod4692 from "module_4692" /* 4692 */;
import native from "native" /* 4788 */;
import VoicePanelUIDefault from "VoicePanelUI" /* 17664 */;
import VoicePanelControllerDefault from "VoicePanelController" /* 17826 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import VoicePanelStore from "VoicePanelStore" /* 6081 */;

require = fn;
function getChannelKey(arg0) {
  return arg0;
}
function renderVoicePanel(arg0, channelId, transitionState, transitionCleanUp) {
  return <closure_7 key={channelId} channelId={channelId} transitionState={transitionState} transitionCleanUp={transitionCleanUp} />;
}
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanel(channelId) {
  _require = channelId;
  const cResult = require("c").c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId.channelId) {
    const fn = function c() {
      const channel = ChannelStore.getChannel(channelId.channelId);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      return guild_id;
    };
    cResult[1] = channelId.channelId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = jsx(VoicePanelUIDefault, {});
    cResult[3] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === channelId) {
      let tmp12 = cResult[6];
    }
    return tmp12;
  }
  const obj2 = {};
  const tmpResult = require("initialize");
  const merged = Object.assign(channelId);
  obj2.guildId = stateFromStores;
  obj2.children = tmp8;
  const tmp15 = jsx(VoicePanelControllerDefault, {});
  cResult[4] = stateFromStores;
  cResult[5] = channelId;
  cResult[6] = tmp15;
  tmp12 = tmp15;
}) : (function VoicePanel(arg0) {
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
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelContainer.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelContainer() {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(channels) {
      return Array.from(channels.channels);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp5 = VoicePanelStore(first, _mod4692.shallow);
  if (cResult[1] !== tmp5) {
    const obj2 = { items: tmp5, getItemKey: getChannelKey, renderItem: renderVoicePanel };
    const tmp10 = jsx(native.TransitionGroup, { items: tmp5, getItemKey: getChannelKey, renderItem: renderVoicePanel });
    cResult[1] = tmp5;
    cResult[2] = tmp10;
    let tmp6 = tmp10;
  } else {
    tmp6 = cResult[2];
  }
  return tmp6;
}) : (function VoicePanelContainer() {
  const tmp = VoicePanelStore((channels) => Array.from(channels.channels), _mod4692.shallow);
  return jsx(native.TransitionGroup, { items: VoicePanelStore((channels) => Array.from(channels.channels), _mod4692.shallow), getItemKey: getChannelKey, renderItem: renderVoicePanel });
}));