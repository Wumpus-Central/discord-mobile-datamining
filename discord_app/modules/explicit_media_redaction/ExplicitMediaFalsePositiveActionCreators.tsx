// === Module 8407: disableFalsePositiveButton ===

// Module 8407 (disableFalsePositiveButton)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 706 */;

function disableFalsePositiveButton(channelId, messageId) {
  let obj = dispatcherDefault;
  obj = { type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT", messageId, channelId };
  obj.dispatch(obj);
}
const result = set.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaFalsePositiveActionCreators.tsx");

export default { disableFalsePositiveButton };
export { disableFalsePositiveButton };