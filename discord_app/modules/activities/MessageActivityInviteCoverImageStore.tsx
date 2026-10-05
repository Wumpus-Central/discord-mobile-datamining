// discord_app/modules/activities/MessageActivityInviteCoverImageStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import LRUCacheDefault from "../../../_runtime/01444_LRUCache.js";
import size from "../../../_runtime/metro/00002__.js";

const React = new LRUCacheDefault({ max: 500 });
new LRUCacheDefault({ max: 500 });
const Store = get_initializedDefault.Store;
class MessageActivityInviteCoverImageStore extends Store {
  getCoverImageURL(messageId) {
    return closure_0.get(messageId.messageId);
  }
}
const prototype = MessageActivityInviteCoverImageStore.prototype;
MessageActivityInviteCoverImageStore.displayName = "MessageActivityInviteCoverImageStore";
const obj = {
  SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function handleSetMessageActivityInviteCoverImageURL(arg0) {
    let coverImageURL;
    let messageId;
    ({ messageId, coverImageURL } = arg0);
    if (closure_0.get(messageId) === coverImageURL) {
      return false;
    } else {
      const result = closure_0.set(messageId, coverImageURL);
    }
  },
};
const messageActivityInviteCoverImageStore = new MessageActivityInviteCoverImageStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/activities/MessageActivityInviteCoverImageStore.tsx");

export default messageActivityInviteCoverImageStore;
