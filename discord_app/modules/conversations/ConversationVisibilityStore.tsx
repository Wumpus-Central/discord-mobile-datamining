// === Module 6953: initialize ===

// Module 6953 (initialize)
import { DeviceSettingsStore } from "initialize";

let c0 = true;
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
};
prototype["isHighlightingEnabled"] = function isHighlightingEnabled() {
  return c0;
};
prototype["getState"] = function getState() {
  return { highlightingEnabled: c0 };
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return { highlightingEnabled: c0 };
};
ConversationVisibilityStore.displayName = "ConversationVisibilityStore";
ConversationVisibilityStore.persistKey = "ConversationVisibilityStore";
const conversationVisibilityStore = new ConversationVisibilityStore(require("dispatcher"), {
  CONVERSATIONS_TOGGLE_HIGHLIGHTING: function handleToggleHighlighting() {
    closure_0 = !closure_0;
  }
});
const result = require("set").fileFinishedImporting("modules/conversations/ConversationVisibilityStore.tsx");

export default conversationVisibilityStore;