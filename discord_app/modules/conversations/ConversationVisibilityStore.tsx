// === Module 7104: ConversationVisibilityStore ===

// Module 7104 (ConversationVisibilityStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let flag = true;
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class ConversationVisibilityStore extends DeviceSettingsStore {
  initialize(highlightingEnabled) {
    flag = undefined;
    if (highlightingEnabled != null) {
      flag = highlightingEnabled.highlightingEnabled;
    }
    if (flag == null) {
      flag = true;
    }
  }
  isHighlightingEnabled() {
    return flag;
  }
  getState() {
    return { highlightingEnabled: flag };
  }
  getUserAgnosticState() {
    return { highlightingEnabled: flag };
  }
}
const prototype = ConversationVisibilityStore.prototype;
ConversationVisibilityStore.displayName = "ConversationVisibilityStore";
ConversationVisibilityStore.persistKey = "ConversationVisibilityStore";
const obj = {
  CONVERSATIONS_TOGGLE_HIGHLIGHTING: function handleToggleHighlighting() {

  }
};
const conversationVisibilityStore = new ConversationVisibilityStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/conversations/ConversationVisibilityStore.tsx");

export default conversationVisibilityStore;