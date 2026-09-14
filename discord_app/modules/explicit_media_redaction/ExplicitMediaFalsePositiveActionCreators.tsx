// discord_app/modules/explicit_media_redaction/ExplicitMediaFalsePositiveActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

function disableFalsePositiveButton(channelId, messageId) {
  DispatcherDefault.dispatch({ type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT", messageId, channelId });
}
const result = size.fileFinishedImporting(
  "modules/explicit_media_redaction/ExplicitMediaFalsePositiveActionCreators.tsx",
);

export default { disableFalsePositiveButton };
export { disableFalsePositiveButton };
