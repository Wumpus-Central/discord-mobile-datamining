// === Module 13621: getSkuIdForChannel ===

// Module 13621 (getSkuIdForChannel)
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;

let closure_0 = {};
const Store = initializeDefault.Store;
class ChannelSKUStore extends Store {
}
ChannelSKUStore.prototype["getSkuIdForChannel"] = function getSkuIdForChannel(arg0) {
  return table[arg0];
};
ChannelSKUStore.displayName = "ChannelSKUStore";
const channelSKUStore = new ChannelSKUStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_0 = {};
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