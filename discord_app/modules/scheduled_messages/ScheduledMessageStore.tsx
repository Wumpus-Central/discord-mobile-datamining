// === Module 11716: handleScheduledMessageRemovalStart ===

// Module 11716 (handleScheduledMessageRemovalStart)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import set from "set" /* 2 */;

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
    if (null == obj[scheduledMessageId]) {
      return false;
    }
  }
  set = new Set(set);
  set.delete(scheduledMessageId);
  obj = {};
  const merged = Object.assign(obj);
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
const scheduledMessageStore = new ScheduledMessageStore(dispatcherDefault, {
  SCHEDULED_MESSAGES_CREATE_SUCCESS: function handleScheduledMessageCreateSuccess(scheduledMessageSend) {
    scheduledMessageSend = scheduledMessageSend.scheduledMessageSend;
    const obj = {};
    const merged = Object.assign(obj);
    obj[scheduledMessageSend.scheduledMessageId] = scheduledMessageSend;
  },
  SCHEDULED_MESSAGES_UPDATE_SUCCESS: function handleScheduledMessageUpdateSuccess(scheduledMessageSend) {
    scheduledMessageSend = scheduledMessageSend.scheduledMessageSend;
    const obj = {};
    const merged = Object.assign(obj);
    obj[scheduledMessageSend.scheduledMessageId] = scheduledMessageSend;
  },
  SCHEDULED_MESSAGES_DELETE_START: handleScheduledMessageRemovalStart,
  SCHEDULED_MESSAGES_DELETE_SUCCESS: handleScheduledMessageRemovalSuccess,
  SCHEDULED_MESSAGES_DELETE_FAILURE: handleScheduledMessageRemovalFailure,
  SCHEDULED_MESSAGES_SEND_NOW_START: handleScheduledMessageRemovalStart,
  SCHEDULED_MESSAGES_SEND_NOW_SUCCESS: handleScheduledMessageRemovalSuccess,
  SCHEDULED_MESSAGES_SEND_NOW_FAILURE: handleScheduledMessageRemovalFailure,
  FETCH_SCHEDULED_MESSAGES: function handleFetchScheduledMessages(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError();
    } else {
      c0 = true;
    }
  },
  FETCH_SCHEDULED_MESSAGES_SUCCESS: function handleFetchScheduledMessagesSuccess(arg0) {
    closure_1 = {};
    for (const item10007 of tmp) {
      let tmp2 = closure_1;
      closure_1[item10007.scheduledMessageId] = item10007;
      continue;
    }
    c0 = false;
  },
  FETCH_SCHEDULED_MESSAGES_FAILURE: function handleFetchScheduledMessagesFailure(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError();
    } else {
      c0 = false;
    }
  },
  LOGOUT: reset,
  CONNECTION_OPEN: reset
});
const result = set.fileFinishedImporting("modules/scheduled_messages/ScheduledMessageStore.tsx");

export default scheduledMessageStore;