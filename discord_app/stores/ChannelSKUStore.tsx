// discord_app/stores/ChannelSKUStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";

let closure_0 = {};
const Store = initializeDefault.Store;
class ChannelSKUStore extends Store {}
ChannelSKUStore.prototype["getSkuIdForChannel"] = function getSkuIdForChannel(arg0) {
  return closure_0[arg0];
};
ChannelSKUStore.displayName = "ChannelSKUStore";
const channelSKUStore = new ChannelSKUStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_0 = {};
  },
  STORE_LISTING_FETCH_SUCCESS: function handleStoreListingFetchSuccess(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      closure_0[channelId] = tmp.sku.id;
    }
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/ChannelSKUStore.tsx");

export default channelSKUStore;
