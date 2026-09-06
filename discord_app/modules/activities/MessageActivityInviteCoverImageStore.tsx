// discord_app/modules/activities/MessageActivityInviteCoverImageStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import privDefault from "../../../_runtime/01437_priv.js";

let closure_0 = new privDefault({ max: 500 });
const Store = initializeDefault.Store;
class MessageActivityInviteCoverImageStore extends Store {}
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
      const result = closure_0.set(messageId, coverImageURL);
    }
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/MessageActivityInviteCoverImageStore.tsx");

export default messageActivityInviteCoverImageStore;
