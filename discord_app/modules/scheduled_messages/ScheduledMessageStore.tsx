// === Module 12213: ScheduledMessageStore ===

// Module 12213 (ScheduledMessageStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

function handleScheduledMessageRemovalStart(scheduledMessageId) {
  scheduledMessageId = scheduledMessageId.scheduledMessageId;
  if (set.has(scheduledMessageId)) {
    return false;
  } else {
    const _Set = Set;
    set = new Set(set);
    set.add(scheduledMessageId);
  }
}
function handleScheduledMessageRemovalSuccess(scheduledMessageId) {
  scheduledMessageId = scheduledMessageId.scheduledMessageId;
  if (!set.has(scheduledMessageId)) {
    if (null == closure_1[scheduledMessageId]) {
      return false;
    }
  }
  set = new Set(set);
  set.delete(scheduledMessageId);
  const merged = Object.assign(closure_1);
  closure_1 = {};
  delete tmp[tmp2];
}
function handleScheduledMessageRemovalFailure(scheduledMessageId) {
  scheduledMessageId = scheduledMessageId.scheduledMessageId;
  if (set.has(scheduledMessageId)) {
    const _Set = Set;
    set = new Set(set);
    set.delete(scheduledMessageId);
  } else {
    return false;
  }
}
function reset() {
  c0 = false;
  closure_1 = {};
  set = new Set();
}
let c0 = false;
let closure_1 = {};
let set = new Set();
const Store = initializeDefault.Store;
class ScheduledMessageStore extends Store {
}
const prototype = ScheduledMessageStore.prototype;
prototype["getMessagesPendingRemoval"] = function getMessagesPendingRemoval() {
  return set;
};
prototype["getScheduledMessagesForInbox"] = function getScheduledMessagesForInbox() {
  return closure_1;
};
Object.defineProperty(prototype, "loading", {
  get: function loading() {
    return c0;
  },
  set: undefined
});
ScheduledMessageStore.displayName = "scheduledMessageStore";
const scheduledMessageStore = new ScheduledMessageStore(DispatcherDefault, {
  SCHEDULED_MESSAGES_CREATE_SUCCESS: function handleScheduledMessageCreateSuccess(scheduledMessageSend) {
    scheduledMessageSend = scheduledMessageSend.scheduledMessageSend;
    const obj = {};
    const merged = Object.assign(closure_1);
    obj[scheduledMessageSend.scheduledMessageId] = scheduledMessageSend;
    closure_1 = obj;
  },
  SCHEDULED_MESSAGES_UPDATE_SUCCESS: function handleScheduledMessageUpdateSuccess(scheduledMessageSend) {
    scheduledMessageSend = scheduledMessageSend.scheduledMessageSend;
    const obj = {};
    const merged = Object.assign(closure_1);
    obj[scheduledMessageSend.scheduledMessageId] = scheduledMessageSend;
    closure_1 = obj;
  },
  SCHEDULED_MESSAGES_DELETE_START: handleScheduledMessageRemovalStart,
  SCHEDULED_MESSAGES_DELETE_SUCCESS: handleScheduledMessageRemovalSuccess,
  SCHEDULED_MESSAGES_DELETE_FAILURE: handleScheduledMessageRemovalFailure,
  SCHEDULED_MESSAGES_SEND_NOW_START: handleScheduledMessageRemovalStart,
  SCHEDULED_MESSAGES_SEND_NOW_SUCCESS: handleScheduledMessageRemovalSuccess,
  SCHEDULED_MESSAGES_SEND_NOW_FAILURE: handleScheduledMessageRemovalFailure,
  FETCH_SCHEDULED_MESSAGES: function handleFetchScheduledMessages(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      c0 = true;
    }
  },
  FETCH_SCHEDULED_MESSAGES_SUCCESS: function handleFetchScheduledMessagesSuccess(arg0) {
    closure_1 = {};
    for (const item10007 of tmp) {
      closure_1[item10007.scheduledMessageId] = item10007;
      continue;
    }
    c0 = false;
  },
  FETCH_SCHEDULED_MESSAGES_FAILURE: function handleFetchScheduledMessagesFailure(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      c0 = false;
    }
  },
  LOGOUT: reset,
  CONNECTION_OPEN: reset
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/scheduled_messages/ScheduledMessageStore.tsx");

export default scheduledMessageStore;