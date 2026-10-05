// === Module 13079: MessageActivityInviteCoverImageStore ===

// Module 13079 (MessageActivityInviteCoverImageStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import LRUCacheDefault from "LRUCache" /* 1444 */;
import size from "module_2" /* 2 */;

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
  }
};
const messageActivityInviteCoverImageStore = new MessageActivityInviteCoverImageStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/activities/MessageActivityInviteCoverImageStore.tsx");

export default messageActivityInviteCoverImageStore;