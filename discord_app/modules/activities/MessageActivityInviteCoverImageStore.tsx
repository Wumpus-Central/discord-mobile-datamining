// === Module 13138: getCoverImageURL ===

// Module 13138 (getCoverImageURL)
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import privDefault from "priv" /* 1400 */;

let closure_0 = new privDefault({ max: 500 });
const Store = initializeDefault.Store;
class MessageActivityInviteCoverImageStore extends Store {
}
MessageActivityInviteCoverImageStore.prototype["getCoverImageURL"] = function getCoverImageURL(messageId) {
  return store.get(messageId.messageId);
};
MessageActivityInviteCoverImageStore.displayName = "MessageActivityInviteCoverImageStore";
const messageActivityInviteCoverImageStore = new MessageActivityInviteCoverImageStore(dispatcherDefault, {
  SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function handleSetMessageActivityInviteCoverImageURL(arg0) {
    ({ messageId, coverImageURL } = arg0);
    if (store.get(messageId) === coverImageURL) {
      return false;
    } else {
      const result = obj.set(messageId, coverImageURL);
    }
    obj = store;
  }
});
let obj = {
  SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function handleSetMessageActivityInviteCoverImageURL(arg0) {
    ({ messageId, coverImageURL } = arg0);
    if (store.get(messageId) === coverImageURL) {
      return false;
    } else {
      const result = obj.set(messageId, coverImageURL);
    }
    obj = store;
  }
};
const tmp2 = new privDefault({ max: 500 });
let result = require("set").fileFinishedImporting("modules/activities/MessageActivityInviteCoverImageStore.tsx");

export default messageActivityInviteCoverImageStore;