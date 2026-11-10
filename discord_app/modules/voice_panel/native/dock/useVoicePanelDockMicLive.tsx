// === Module 19639: useVoicePanelDockMicLive ===

// Module 19639 (useVoicePanelDockMicLive)
import timing_timing from "timing/timing" /* 5372 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4991 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/useVoicePanelDockMicLive.tsx");

export default function useVoicePanelDockMicLive(arg0) {
  _require = arg0;
  items = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(closure_0));
  let obj = require("initialize");
  mute = require("VoiceActionUtils").createMuteHandler(mute(sharedValue[4])(stateFromStores)).mute;
  const obj2 = require("VoiceActionUtils");
  let num = 1;
  if (mute) {
    num = 0;
  }
  sharedValue = require("module_1652").useSharedValue(num);
  const items1 = [mute, sharedValue];
  const effect = noop.useEffect(() => {
    let num = 1;
    if (mute) {
      num = 0;
    }
    const result = sharedValue.set(timing_timing.withTiming(num, { duration: 200 }));
  }, items1);
  return sharedValue;
};