// discord_app/modules/activities/MessageActivityInviteCoverImageStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import privDefault from "../../../_runtime/01405_priv.js";

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
      const result = store.set(messageId, coverImageURL);
    }
  }
});
const tmp2 = new privDefault({ max: 500 });
let result = require("obj132").fileFinishedImporting("modules/activities/MessageActivityInviteCoverImageStore.tsx");

export default messageActivityInviteCoverImageStore;