// discord_app/modules/activities/MessageActivityInviteCoverImageActionCreators.tsx
import { dispatcher } from "../../Dispatcher.tsx";
const result = require("set").fileFinishedImporting("modules/activities/MessageActivityInviteCoverImageActionCreators.tsx");

export const setCoverImageURL = function setCoverImageURL(arg0) {
  let coverImageURL;
  let messageId;
  ({ messageId, coverImageURL } = arg0);
  dispatcher.dispatch({ type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL", messageId, coverImageURL });
};