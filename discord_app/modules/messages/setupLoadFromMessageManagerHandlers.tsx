// === Module 16635: setupLoadFromMessageManagerHandlers ===

// Module 16635 (setupLoadFromMessageManagerHandlers)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/messages/setupLoadFromMessageManagerHandlers.tsx");

export default function setupLoadFromMessageManagerHandlers(actions) {
  closure_0 = arg1;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  function handleMessage(message) {
    message = message.message;
    let hasItem = null != message.channel_id;
    if (hasItem) {
      hasItem = set.has(message.channel_id);
    }
    if (hasItem) {
      if (onBeforeBatch != null) {
        tmp3();
      }
      let hasItem1 = null != message.channel_id;
      if (hasItem1) {
        hasItem1 = set.has(message.channel_id);
      }
      if (hasItem1) {
        callback(message);
      }
    }
  }
  function handleLoadMessages(messages) {
    messages = messages.messages;
    set.add(messages.channelId);
    if (onBeforeBatch != null) {
      tmp2();
    }
    const item = messages.forEach((item, index) => {
      let hasItem = null != item.channel_id;
      if (hasItem) {
        hasItem = set.has(item.channel_id);
      }
      if (hasItem) {
        callback(item);
      }
    });
  }
  function handleSearchMessagesSuccess(data) {
    data = data.data;
    if (onBeforeBatch != null) {
      tmp();
    }
    let item = data.forEach((item, index) => {
      const messages = item.messages;
      item = messages.forEach((item, index) => {
        item = item.forEach((item, index) => callback(item));
      });
    });
  }
  const onBeforeBatch = obj.onBeforeBatch;
  const set = new Set();
  obj = {};
  const merged = Object.assign(actions.actions);
  obj.POST_CONNECTION_OPEN = function POST_CONNECTION_OPEN() {
    set.clear();
  };
  obj.MESSAGE_CREATE = { callback: handleMessage, autoSubscribe: false };
  obj.MESSAGE_UPDATE = handleMessage;
  obj.LOAD_MESSAGES_SUCCESS = handleLoadMessages;
  obj.LOAD_MESSAGES_AROUND_SUCCESS = handleLoadMessages;
  obj.LOAD_RECENT_MENTIONS_SUCCESS = function LOAD_RECENT_MENTIONS_SUCCESS(messages) {
    messages = messages.messages;
    if (onBeforeBatch != null) {
      tmp();
    }
    const item = messages.forEach((item, index) => callback(item));
  };
  obj.LOAD_PINNED_MESSAGES_SUCCESS = function LOAD_PINNED_MESSAGES_SUCCESS(pins) {
    pins = pins.pins;
    if (onBeforeBatch != null) {
      tmp();
    }
    const item = pins.forEach((item, index) => callback(item.message));
  };
  obj.SEARCH_MESSAGES_SUCCESS = handleSearchMessagesSuccess;
  obj.MOD_VIEW_SEARCH_MESSAGES_SUCCESS = handleSearchMessagesSuccess;
  obj.CHANNEL_SELECT = {
    callback(channelId) {
      channelId = channelId.channelId;
      if (null != channelId) {
        set.add(channelId);
      }
    },
    autoSubscribe: false
  };
  actions.actions = obj;
};