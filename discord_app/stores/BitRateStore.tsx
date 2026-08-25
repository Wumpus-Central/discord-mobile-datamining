// === Module 4452: bitrate ===

// Module 4452 (bitrate)
import set from "set" /* 2 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import DesktopSources from "DesktopSources" /* 4444 */;

const DEFAULT_VOICE_BITRATE = DesktopSources.DEFAULT_VOICE_BITRATE;
const Store = initializeDefault.Store;
class BitRateStore extends Store {
}
Object.defineProperty(BitRateStore.prototype, "bitrate", {
  get: function bitrate() {
    return DEFAULT_VOICE_BITRATE;
  },
  set: undefined
});
BitRateStore.displayName = "BitRateStore";
const bitRateStore = new BitRateStore(dispatcherDefault, {
  SET_CHANNEL_BITRATE: function handleSetChannelBitrate(bitrate) {
    bitrate = bitrate.bitrate;
  }
});
const result = set.fileFinishedImporting("stores/BitRateStore.tsx");

export default bitRateStore;