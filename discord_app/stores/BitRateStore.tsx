// discord_app/stores/BitRateStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import Constants from "../../discord_common/js/packages/media-engine/Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

let bitrate = Constants.DEFAULT_VOICE_BITRATE;
const Store = initializeDefault.Store;
class BitRateStore extends Store {}
Object.defineProperty(BitRateStore.prototype, "bitrate", {
  get: function bitrate() {
    return bitrate;
  },
  set: undefined,
});
BitRateStore.displayName = "BitRateStore";
const bitRateStore = new BitRateStore(DispatcherDefault, {
  SET_CHANNEL_BITRATE: function handleSetChannelBitrate(bitrate) {
    bitrate = bitrate.bitrate;
  },
});
const result = size.fileFinishedImporting("stores/BitRateStore.tsx");

export default bitRateStore;
