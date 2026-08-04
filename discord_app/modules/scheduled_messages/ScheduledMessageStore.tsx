// discord_app/modules/scheduled_messages/ScheduledMessageStore.tsx
import { Store } from "initialize";
import set from "set";

function reset() {
  let closure_3 = {};
}
let c0 = false;
let closure_1 = {};
let set = new Set();
let closure_3 = {};
class ScheduledMessageStore extends Store {
}
const prototype = ScheduledMessageStore.prototype;
prototype["getMessagesPendingDeletion"] = function getMessagesPendingDeletion() {
  return set;
};
prototype["getScheduledMessagesForInbox"] = function getScheduledMessagesForInbox() {
  return closure_1;
};
prototype["getPendingScheduledMessage"] = function getPendingScheduledMessage(arg0) {
  return table[arg0];
};
Object.defineProperty(prototype, "loading", {
  get: function loading() {
    return c0;
  },
  set: undefined
});
ScheduledMessageStore.displayName = "scheduledMessageStore";
const scheduledMessageStore = new ScheduledMessageStore(require("dispatcher"), {
  SCHEDULED_MESSAGES_CREATE_SUCCESS: function handleScheduledMessageCreateSuccess(arg0) {
    let channelId;
    let scheduledMessageSend;
    ({ channelId, scheduledMessageSend } = arg0);
    let obj = {};
    const merged = Object.assign(obj);
    obj[scheduledMessageSend.scheduledMessageId] = scheduledMessageSend;
    obj = {};
    const merged1 = Object.assign(obj);
    delete tmp[tmp2];
  },
  SCHEDULED_MESSAGES_UPDATE_SUCCESS: function handleScheduledMessageUpdateSuccess(scheduledMessageSend) {
    scheduledMessageSend = scheduledMessageSend.scheduledMessageSend;
    const obj = {};
    const merged = Object.assign(obj);
    obj[scheduledMessageSend.scheduledMessageId] = scheduledMessageSend;
  },
  SCHEDULED_MESSAGES_DELETE_START: function handleScheduledMessageDeleteStart(scheduledMessageId) {
    scheduledMessageId = scheduledMessageId.scheduledMessageId;
    if (set.has(scheduledMessageId)) {
      return false;
    } else {
      const _Set = Set;
      set = new Set(set);
      set.add(scheduledMessageId);
    }
  },
  SCHEDULED_MESSAGES_DELETE_SUCCESS: function handleScheduledMessageDeleteSuccess(scheduledMessageId) {
    scheduledMessageId = scheduledMessageId.scheduledMessageId;
    if (set.has(scheduledMessageId)) {
      const _Set = Set;
      set = new Set(set);
      set.delete(scheduledMessageId);
      const obj = {};
      const merged = Object.assign(obj);
      delete tmp[tmp2];
    } else {
      return false;
    }
  },
  SCHEDULED_MESSAGES_DELETE_FAILURE: function handleScheduledMessageDeleteFailure(scheduledMessageId) {
    scheduledMessageId = scheduledMessageId.scheduledMessageId;
    if (set.has(scheduledMessageId)) {
      const _Set = Set;
      set = new Set(set);
      set.delete(scheduledMessageId);
    } else {
      return false;
    }
  },
  FETCH_SCHEDULED_MESSAGES: function handleFetchScheduledMessages(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError();
    } else {
      let c0 = true;
    }
  },
  FETCH_SCHEDULED_MESSAGES_SUCCESS: function handleFetchScheduledMessagesSuccess(arg0) {
    let closure_1 = {};
    for (const item10007 of tmp) {
      let tmp2 = closure_1;
      closure_1[item10007.scheduledMessageId] = item10007;
      continue;
    }
    let c0 = false;
  },
  FETCH_SCHEDULED_MESSAGES_FAILURE: function handleFetchScheduledMessagesFailure(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError();
    } else {
      let c0 = false;
    }
  },
  CREATE_PENDING_SCHEDULED_MESSAGE: function handleCreatePendingScheduledMessage(channelId) {
    channelId = channelId.channelId;
    const obj = {};
    const merged = Object.assign(obj);
    obj[channelId] = { channelId, scheduledTimestamp: channelId.scheduledTimestamp };
  },
  DELETE_PENDING_SCHEDULED_MESSAGE: function handleDeletePendingScheduledMessage(arg0) {
    const obj = {};
    const merged = Object.assign(obj);
    delete tmp[tmp2];
  },
  LOGOUT: reset,
  CONNECTION_OPEN: reset
});
const result = set.fileFinishedImporting("modules/scheduled_messages/ScheduledMessageStore.tsx");

export default scheduledMessageStore;