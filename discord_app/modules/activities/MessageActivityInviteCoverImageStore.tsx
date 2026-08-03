import { Store } from "initialize";

let c0 = new require("priv")({ max: 500 });
class MessageActivityInviteCoverImageStore extends Store {
}
MessageActivityInviteCoverImageStore.prototype["getCoverImageURL"] = function getCoverImageURL(messageId) {
  return tmp2.get(messageId.messageId);
};
MessageActivityInviteCoverImageStore.displayName = "MessageActivityInviteCoverImageStore";
const messageActivityInviteCoverImageStore = new MessageActivityInviteCoverImageStore(require("dispatcher"), {
  SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function handleSetMessageActivityInviteCoverImageURL(arg0) {
    let coverImageURL;
    let messageId;
    ({ messageId, coverImageURL } = arg0);
    if (tmp2.get(messageId) === coverImageURL) {
      return false;
    } else {
      const result = obj.set(messageId, coverImageURL);
    }
    obj = tmp2;
  }
});
let obj = {
  SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function handleSetMessageActivityInviteCoverImageURL(arg0) {
    let coverImageURL;
    let messageId;
    ({ messageId, coverImageURL } = arg0);
    if (tmp2.get(messageId) === coverImageURL) {
      return false;
    } else {
      const result = obj.set(messageId, coverImageURL);
    }
    obj = tmp2;
  }
};
const tmp2 = new require("priv")({ max: 500 });
let result = require("dispatcher").fileFinishedImporting("modules/activities/MessageActivityInviteCoverImageStore.tsx");

export default messageActivityInviteCoverImageStore;