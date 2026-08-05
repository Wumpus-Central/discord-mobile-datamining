// discord_app/modules/explicit_media_redaction/ExplicitMediaFalsePositiveActionCreators.tsx
function disableFalsePositiveButton(channelId, messageId) {
  let obj = require("../../Dispatcher.tsx");
  obj = { type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT", messageId, channelId };
  obj.dispatch(obj);
}
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaFalsePositiveActionCreators.tsx");

export default { disableFalsePositiveButton };
export { disableFalsePositiveButton };