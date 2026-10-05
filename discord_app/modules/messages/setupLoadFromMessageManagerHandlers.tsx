// === Module 17559: setupLoadFromMessageManagerHandlers ===

// Module 17559 (setupLoadFromMessageManagerHandlers)
import DurationsDefault from "Durations" /* 1102 */;
import ChannelSectionStore from "ChannelSectionStore" /* 6783 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import size from "module_2" /* 2 */;

let map, map1, set;

let closure_2 = 5 * DurationsDefault.Millis.SECOND;
let result = size.fileFinishedImporting("modules/messages/setupLoadFromMessageManagerHandlers.tsx");

export default function setupLoadFromMessageManagerHandlers(actions, arg1) {
  const currentSidebarChannelId = arg1;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      set.add(channelId);
      const value = map1.get(channelId);
      if (null != value) {
        const _clearTimeout = clearTimeout;
        clearTimeout(value);
        map1.delete(channelId);
      }
      const value2 = map.get(channelId);
      if (null != value2) {
        map.delete(channelId);
        if (set.has(channelId)) {
          if (onBeforeBatch != null) {
            tmp5();
          }
          const item = value2.forEach((item) => channel_id(item));
        }
      }
    }
  }
  function handleMessage(message) {
    let channel_id;
    let id;
    message = message.message;
    ({ id, channel_id } = message);
    if (null != id) {
      if (null != channel_id) {
        if (set.has(channel_id)) {
          const channelId = onBeforeBatch.getChannelId();
          let tmp3 = null != channelId;
          if (tmp3) {
            tmp3 = channelId === channel_id || currentSidebarChannelId.getCurrentSidebarChannelId(channelId) === channel_id;
            const tmp4 = channelId === channel_id || currentSidebarChannelId.getCurrentSidebarChannelId(channelId) === channel_id;
          }
          if (tmp3) {
            if (onBeforeBatch != null) {
              tmp14();
            }
            channel_id(message);
          } else {
            let value = map.get(channel_id);
            const obj = map;
            if (null == value) {
              const _Map = Map;
              const self = this;
              const self2 = this;
              map = new Map();
              const result = obj.set(channel_id, map);
              value = map;
            }
            const result1 = value.set(id, message);
            if (!map1.has(channel_id)) {
              const _Math = Math;
              const _Math2 = Math;
              const _setTimeout = setTimeout;
              const result2 = map1.set(channel_id, setTimeout(() => {
                map1.delete(channel_id);
                const value = map1.get(channel_id);
                if (null != value) {
                  const _clearTimeout = clearTimeout;
                  clearTimeout(value);
                  map1.delete(channel_id);
                }
                const value2 = map.get(channel_id);
                if (null != value2) {
                  map.delete(channel_id);
                  if (set.has(channel_id)) {
                    if (onBeforeBatch != null) {
                      tmp9();
                    }
                    const item = value2.forEach((item) => channel_id(item));
                  }
                }
              }, Math.floor(Math.random() * set)));
            }
          }
        }
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
      const hasItem = null != channel_id.channel_id && set.has(channel_id.channel_id);
      if (hasItem) {
        currentSidebarChannelId(channel_id);
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
        const item = arr.forEach((item) => closure_1_0(item));
      });
    });
  }
  const onBeforeBatch = obj.onBeforeBatch;
  set = new Set();
  map = new Map();
  map1 = new Map();
  const obj2 = {
    POST_CONNECTION_OPEN() {
      set.clear();
      const item = map1.forEach((item) => clearTimeout(item));
      map1.clear();
      map.clear();
    },
    MESSAGE_CREATE: { callback: handleMessage, autoSubscribe: false },
    MESSAGE_UPDATE: handleMessage,
    LOAD_MESSAGES_SUCCESS: handleLoadMessages,
    LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
    LOAD_RECENT_MENTIONS_SUCCESS(messages) {
      messages = messages.messages;
      if (onBeforeBatch != null) {
        tmp();
      }
      const item = messages.forEach((item) => currentSidebarChannelId(item));
    },
    LOAD_PINNED_MESSAGES_SUCCESS(pins) {
      pins = pins.pins;
      if (onBeforeBatch != null) {
        tmp();
      }
      const item = pins.forEach((message) => currentSidebarChannelId(message.message));
    },
    SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
    CHANNEL_SELECT: { callback: handleChannelSelect, autoSubscribe: false },
    SIDEBAR_VIEW_CHANNEL: { callback: handleChannelSelect, autoSubscribe: false }
  };
  const merged = Object.assign(actions.actions);
  actions.actions = obj2;
};