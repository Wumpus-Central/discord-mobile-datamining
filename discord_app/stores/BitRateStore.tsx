// === Module 4552: bitrate ===

// Module 4552 (bitrate)
import set from "set" /* 2 */;
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import DesktopSources from "DesktopSources" /* 4542 */;

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