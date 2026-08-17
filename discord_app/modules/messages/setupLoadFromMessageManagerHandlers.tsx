// discord_app/modules/messages/setupLoadFromMessageManagerHandlers.tsx
import set2 from "set" /* 2 */;

const result = set2.fileFinishedImporting("modules/messages/setupLoadFromMessageManagerHandlers.tsx");

export default function setupLoadFromMessageManagerHandlers(actions) {
  closure_0 = arg1;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let onBeforeBatch;
  let set;
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
    const item = messages.forEach((channel_id) => {
      let hasItem = null != channel_id.channel_id;
      if (hasItem) {
        hasItem = set.has(channel_id.channel_id);
      }
      if (hasItem) {
        callback(channel_id);
      }
    });
  }
  function handleSearchMessagesSuccess(data) {
    data = data.data;
    if (onBeforeBatch != null) {
      tmp();
    }
    let item = data.forEach((messages) => {
      messages = messages.messages;
      let item = messages.forEach((arr) => {
        const item = arr.forEach((arg0) => callback(arg0));
      });
    });
  }
  onBeforeBatch = obj.onBeforeBatch;
  set = new Set();
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
    const item = messages.forEach((arg0) => callback(arg0));
  };
  obj.LOAD_PINNED_MESSAGES_SUCCESS = function LOAD_PINNED_MESSAGES_SUCCESS(pins) {
    pins = pins.pins;
    if (onBeforeBatch != null) {
      tmp();
    }
    const item = pins.forEach((message) => callback(message.message));
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