// discord_app/modules/messages/setupLoadFromMessageManagerHandlers.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import ChannelSectionStore from "../../stores/ChannelSectionStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";

let closure_2 = 5 * DurationsDefault.Millis.SECOND;
const size = fn(2);
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
      value = map1.get(channelId);
      if (null != value) {
        const _clearTimeout = clearTimeout;
        clearTimeout(value);
        map1.delete(channelId);
      }
      value = map.get(channelId);
      if (null != value) {
        map.delete(channelId);
        if (set.has(channelId)) {
          if (onBeforeBatch != null) {
            tmp5();
          }
          const item = value.forEach((item) => channel_id(item));
        }
      }
    }
  }
  function handleMessage(message) {
    message = message.message;
    ({ id, channel_id } = message);
    if (null != id) {
      if (null != channel_id) {
        if (set.has(channel_id)) {
          const channelId = onBeforeBatch.getChannelId();
          let tmp3 = null != channelId;
          if (tmp3) {
            let tmp4 = channelId === channel_id;
            if (!tmp4) {
              tmp4 = currentSidebarChannelId.getCurrentSidebarChannelId(channelId) === channel_id;
            }
            tmp3 = tmp4;
          }
          if (tmp3) {
            if (onBeforeBatch != null) {
              tmp16();
            }
            channel_id(message);
          } else {
            value = map.get(channel_id);
            if (null == value) {
              const _Map = Map;
              map = new Map();
              const result = obj.set(channel_id, map);
              value = map;
            }
            const result1 = value.set(id, message);
            if (!map1.has(channel_id)) {
              const _Math = Math;
              const _Math2 = Math;
              const _setTimeout = setTimeout;
              const result2 = map1.set(
                channel_id,
                setTimeout(
                  () => {
                    map1.delete(channel_id);
                    value = map1.get(channel_id);
                    if (null != value) {
                      const _clearTimeout = clearTimeout;
                      clearTimeout(value);
                      map1.delete(channel_id);
                    }
                    value = map.get(channel_id);
                    if (null != value) {
                      map.delete(channel_id);
                      if (set.has(channel_id)) {
                        if (onBeforeBatch != null) {
                          tmp9();
                        }
                        const item = value.forEach((item) => channel_id(item));
                      }
                    }
                  },
                  Math.floor(Math.random() * set),
                ),
              );
            }
            obj = map;
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
      let hasItem = null != channel_id.channel_id;
      if (hasItem) {
        hasItem = set.has(channel_id.channel_id);
      }
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
  const set = new Set();
  let map = new Map();
  map1 = new Map();
  obj = {};
  const merged = Object.assign(actions.actions);
  obj.POST_CONNECTION_OPEN = function POST_CONNECTION_OPEN() {
    set.clear();
    const item = map1.forEach((item) => clearTimeout(item));
    map1.clear();
    map.clear();
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
    const item = messages.forEach((item) => currentSidebarChannelId(item));
  };
  obj.LOAD_PINNED_MESSAGES_SUCCESS = function LOAD_PINNED_MESSAGES_SUCCESS(pins) {
    pins = pins.pins;
    if (onBeforeBatch != null) {
      tmp();
    }
    const item = pins.forEach((message) => currentSidebarChannelId(message.message));
  };
  obj.SEARCH_MESSAGES_SUCCESS = handleSearchMessagesSuccess;
  obj.MOD_VIEW_SEARCH_MESSAGES_SUCCESS = handleSearchMessagesSuccess;
  obj.CHANNEL_SELECT = { callback: handleChannelSelect, autoSubscribe: false };
  obj.SIDEBAR_VIEW_CHANNEL = { callback: handleChannelSelect, autoSubscribe: false };
  actions.actions = obj;
}
