// discord_app/modules/conversations/ConversationVisibilityStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  CONVERSATIONS_TOGGLE_HIGHLIGHTING: function handleToggleHighlighting() {},
};
const conversationVisibilityStore = new ConversationVisibilityStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/conversations/ConversationVisibilityStore.tsx");

export default conversationVisibilityStore;
