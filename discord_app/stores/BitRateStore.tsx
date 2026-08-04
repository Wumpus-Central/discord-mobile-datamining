// discord_app/stores/BitRateStore.tsx
import { DEFAULT_VOICE_BITRATE } from "DesktopSources";
import { Store } from "initialize";

class BitRateStore extends Store {
}
Object.defineProperty(BitRateStore.prototype, "bitrate", {
  get: function bitrate() {
    return DEFAULT_VOICE_BITRATE;
  },
  set: undefined
});
BitRateStore.displayName = "BitRateStore";
const bitRateStore = new BitRateStore(require("dispatcher"), {
  SET_CHANNEL_BITRATE: function handleSetChannelBitrate(bitrate) {
    bitrate = bitrate.bitrate;
  }
});
const result = require("dispatcher").fileFinishedImporting("stores/BitRateStore.tsx");

export default bitRateStore;