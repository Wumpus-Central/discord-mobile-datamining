// === Module 13555: ChannelSKUStore ===

// Module 13555 (ChannelSKUStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let closure_0;

const React = {};
const Store = get_initializedDefault.Store;
class ChannelSKUStore extends Store {
  getSkuIdForChannel(arg0) {
    return closure_0[arg0];
  }
}
const prototype = ChannelSKUStore.prototype;
ChannelSKUStore.displayName = "ChannelSKUStore";
const obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_0 = {};
  },
  STORE_LISTING_FETCH_SUCCESS: function handleStoreListingFetchSuccess(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      closure_0[channelId] = tmp.sku.id;
    }
  }
};
const channelSKUStore = new ChannelSKUStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/ChannelSKUStore.tsx");

export default channelSKUStore;