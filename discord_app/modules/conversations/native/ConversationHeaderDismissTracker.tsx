// === Module 11037: ConversationHeaderDismissTracker ===

// Module 11037 (ConversationHeaderDismissTracker)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conversations/native/ConversationHeaderDismissTracker.tsx");
class ConversationHeaderDismissTracker {
  constructor() {
    merged = Object.assign({ state: null });
    merged[0] = { kind: "idle" };
    return merged;
  }
}
const prototype = ConversationHeaderDismissTracker.prototype;
prototype["handleScrollPosition"] = function handleScrollPosition(conversationId) {
  const self = this;
  ({ rows, startMessageId, firstVisibleMessageRowIndex, lastVisibleMessageRowIndex } = conversationId);
  this.reconcile(conversationId.conversationId);
  if ("idle" !== this.state.kind) {
    if (null != startMessageId) {
      if (null != firstVisibleMessageRowIndex) {
        if (null != lastVisibleMessageRowIndex) {
          const findIndexResult = rows.findIndex((message) => {
            message = message.message;
            let id;
            if (message != null) {
              id = message.id;
            }
            return id === startMessageId;
          });
          if ("waiting" === self.state.kind) {
            if (tmp3) {
              const obj = { kind: "armed", conversationId: self.state.conversationId };
              self.state = obj;
            }
            return null;
          } else if (tmp3) {
            return null;
          } else {
            self.state = { kind: "idle" };
            return self.state.conversationId;
          }
        }
      }
      return null;
    }
  }
  return null;
};
prototype["reconcile"] = function reconcile(conversationId) {
  const self = this;
  if (null != conversationId) {
    if (!tmp) {
      const obj = { kind: "waiting", conversationId };
      self.state = obj;
    }
    tmp = "idle" !== self.state.kind && self.state.conversationId === conversationId;
  } else {
    self.state = { kind: "idle" };
  }
};

export default ConversationHeaderDismissTracker;