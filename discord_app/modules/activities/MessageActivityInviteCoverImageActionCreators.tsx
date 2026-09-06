// === Module 13239: MessageActivityInviteCoverImageActionCreators ===

// Module 13239 (MessageActivityInviteCoverImageActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/MessageActivityInviteCoverImageActionCreators.tsx");

export const setCoverImageURL = function setCoverImageURL(arg0) {
  ({ messageId, coverImageURL } = arg0);
  DispatcherDefault.dispatch({ type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL", messageId, coverImageURL });
};