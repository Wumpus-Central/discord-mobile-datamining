// discord_app/modules/explicit_media_redaction/ExplicitMediaFalsePositiveActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

function disableFalsePositiveButton(channelId, messageId) {
  const obj = { type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT", messageId, channelId };
  obj.dispatch(obj);
}
const result = size.fileFinishedImporting(
  "modules/explicit_media_redaction/ExplicitMediaFalsePositiveActionCreators.tsx",
);

export default { disableFalsePositiveButton };
export { disableFalsePositiveButton };
