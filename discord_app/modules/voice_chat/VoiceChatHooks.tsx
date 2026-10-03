// === Module 9054: VoiceChatHooks ===

// Module 9054 (VoiceChatHooks)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;

const require = fn;
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VoiceStateStore, AuthenticationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      return VoiceStateStore.isInChannel(closure_0, AuthenticationStore.getId());
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [VoiceStateStore, AuthenticationStore];
  return require("initialize").useStateFromStores(items, () => VoiceStateStore.isInChannel(closure_0, AuthenticationStore.getId()));
});
let closure_4 = tmp3;
fn = (channel) => {
  let id;
  if (channel != null) {
    id = channel.id;
  }
  return closure_4(id);
};
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/voice_chat/VoiceChatHooks.tsx");

export const useIsConnectedToVoiceChannel = fn;
export const useIsConnectedToVoiceChannelForId = tmp3;