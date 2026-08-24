// discord_app/modules/explicit_media_redaction/ExplicitMediaFalsePositiveActionCreators.tsx
import set from "../../../_runtime/00002_set.js";
import dispatcherDefault from "../../Dispatcher.tsx";

function disableFalsePositiveButton(channelId, messageId) {
  let obj = dispatcherDefault;
  obj = { type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT", messageId, channelId };
  obj.dispatch(obj);
}
const result = set.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaFalsePositiveActionCreators.tsx");

export default { disableFalsePositiveButton };
export { disableFalsePositiveButton };