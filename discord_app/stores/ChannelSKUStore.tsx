// discord_app/stores/ChannelSKUStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

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
  },
};
const channelSKUStore = new ChannelSKUStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/ChannelSKUStore.tsx");

export default channelSKUStore;
