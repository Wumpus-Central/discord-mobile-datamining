// === Module 17814: AutomodRemovedContentManager ===

// Module 17814 (AutomodRemovedContentManager)
import AutomodRemovedContentActionCreators from "AutomodRemovedContentActionCreators" /* 17815 */;
import MessageStore from "MessageStore" /* 5047 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2096 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7449 */;

require = fn;
function handleAutomodContentDeleted(message) {
  message = message.message;
  if (null == message.thread) {
    if (null != message) {
      if (null != MessageStore.getAutomodRemovalNotice(message.id)) {
        if (message.channel_id !== SelectedChannelStore.getCurrentlySelectedChannelId()) {
          const result = AutomodRemovedContentActionCreators.showRemovedMessageToast(tmp, message.channel_id);
        }
      }
    }
  }
  const result1 = AutomodRemovedContentActionCreators.openRemovedContentModal(message);
}
const prototype = function AutomodRemovedContentManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { AUTO_MODERATION_CONTENT_DELETED: handleAutomodContentDeleted };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_automod/AutomodRemovedContentManager.tsx");

export default prototype1;