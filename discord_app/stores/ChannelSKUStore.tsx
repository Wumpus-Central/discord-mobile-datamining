import { Store } from "initialize";

let closure_0 = {};
class ChannelSKUStore extends Store {
}
ChannelSKUStore.prototype["getSkuIdForChannel"] = function getSkuIdForChannel(arg0) {
  return table[arg0];
};
ChannelSKUStore.displayName = "ChannelSKUStore";
const channelSKUStore = new ChannelSKUStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_0 = {};
  },
  STORE_LISTING_FETCH_SUCCESS: function handleStoreListingFetchSuccess(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      closure_0[channelId] = tmp.sku.id;
    }
  }
});
const result = require("set").fileFinishedImporting("stores/ChannelSKUStore.tsx");

export default channelSKUStore;