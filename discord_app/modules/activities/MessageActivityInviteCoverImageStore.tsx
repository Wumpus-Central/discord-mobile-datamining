// === Module 13238: MessageActivityInviteCoverImageStore ===

// Module 13238 (MessageActivityInviteCoverImageStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import privDefault from "priv" /* 1437 */;

let closure_0 = new privDefault({ max: 500 });
const Store = initializeDefault.Store;
class MessageActivityInviteCoverImageStore extends Store {
}
MessageActivityInviteCoverImageStore.prototype["getCoverImageURL"] = function getCoverImageURL(messageId) {
  return closure_0.get(messageId.messageId);
};
MessageActivityInviteCoverImageStore.displayName = "MessageActivityInviteCoverImageStore";
const messageActivityInviteCoverImageStore = new MessageActivityInviteCoverImageStore(DispatcherDefault, {
  SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function handleSetMessageActivityInviteCoverImageURL(arg0) {
    ({ messageId, coverImageURL } = arg0);
    if (closure_0.get(messageId) === coverImageURL) {
      return false;
    } else {
      const result = obj.set(messageId, coverImageURL);
    }
    obj = closure_0;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/MessageActivityInviteCoverImageStore.tsx");

export default messageActivityInviteCoverImageStore;