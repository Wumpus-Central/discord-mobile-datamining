// === Module 8025: ICYMIUnreadStateStore ===

// Module 8025 (ICYMIUnreadStateStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import ICYMITypes from "ICYMITypes" /* 8024 */;
import isItemUnreadInChannel from "isItemUnreadInChannel" /* 8026 */;
import size from "module_2" /* 2 */;

let closure_2 = 7 * DurationsDefault.Millis.DAY;
const _false = { readIdToTimestampMap: {} };
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class ICYMIUnreadStateStore extends DeviceSettingsStore {
  initialize(readIdToTimestampMap) {
    if (null != readIdToTimestampMap) {
      readIdToTimestampMap = { readIdToTimestampMap: {} };
      const _Date = Date;
      let closure_0 = Date.now() - closure_2;
      const _Object = Object;
      const keys = Object.keys(readIdToTimestampMap.readIdToTimestampMap);
      const found = keys.filter((item) => readIdToTimestampMap.readIdToTimestampMap[item] < closure_0);
      for (const item10025 of found) {
        delete readIdToTimestampMap.readIdToTimestampMap[item10025];
        continue;
      }
    }
  }
  getReadTimestamp(id) {
    return closure_3.readIdToTimestampMap[id];
  }
  getState() {
    return closure_3;
  }
  getUserAgnosticState() {
    return closure_3;
  }
}
const prototype = ICYMIUnreadStateStore.prototype;
ICYMIUnreadStateStore.displayName = "ICYMIUnreadStateStore";
ICYMIUnreadStateStore.persistKey = "ICYMIUnreadStateStore";
const obj = {
  ICYMI_ACK_ITEMS: function handleTabAck(arg0) {
    let items;
    ({ items, override: require } = arg0);
    const item = items.forEach((id) => {
      let tmp = null != id;
      if (tmp) {
        tmp = null == closure_3.readIdToTimestampMap[id.id] || require;
      }
      if (tmp) {
        closure_3.readIdToTimestampMap[id.id] = id.timestamp;
      }
    });
  },
  LOAD_ICYMI_DEHYDRATED: function handleLoadDehydrated(arg0) {
    const iter = arg0.items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      if (nextResult.type === ICYMITypes.ICYMIItemTypes.MESSAGE) {
        let result = null != closure_3.readIdToTimestampMap[tmp2.id];
        if (!result) {
          let message_context = tmp2.data.message_context;
          let prop;
          if (message_context != null) {
            prop = message_context.external_content_application_id;
          }
          result = null != prop;
        }
        if (!result) {
          let tmp3Result = isItemUnreadInChannel;
          result = tmp3Result.isItemUnreadInChannel(tmp2.data.channel_id, tmp2.data.message_id);
        }
        if (!result) {
          closure_3.readIdToTimestampMap[tmp2.id] = 0;
        }
      }
      continue;
    }
  },
  CLEAR_ICYMI_READ_STATES: function handleClearReadStates() {
    closure_3.readIdToTimestampMap = {};
  }
};
const iCYMIUnreadStateStore = new ICYMIUnreadStateStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/icymi/ICYMIUnreadStateStore.tsx");

export default iCYMIUnreadStateStore;