// === Module 7597: ConversationVisibilityStore ===

// Module 7597 (ConversationVisibilityStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

const highlightingEnabled = true;
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class ConversationVisibilityStore extends DeviceSettingsStore {
}
const prototype = ConversationVisibilityStore.prototype;
prototype["initialize"] = function initialize(highlightingEnabled) {
  let flag;
  if (highlightingEnabled != null) {
    flag = highlightingEnabled.highlightingEnabled;
  }
  if (flag == null) {
    flag = true;
  }
  closure_0 = flag;
};
prototype["isHighlightingEnabled"] = function isHighlightingEnabled() {
  return closure_0;
};
prototype["getState"] = function getState() {
  return { highlightingEnabled };
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return { highlightingEnabled };
};
ConversationVisibilityStore.displayName = "ConversationVisibilityStore";
ConversationVisibilityStore.persistKey = "ConversationVisibilityStore";
const conversationVisibilityStore = new ConversationVisibilityStore(DispatcherDefault, {
  CONVERSATIONS_TOGGLE_HIGHLIGHTING: function handleToggleHighlighting() {
    closure_0 = !closure_0;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/ConversationVisibilityStore.tsx");

export default conversationVisibilityStore;