// discord_app/modules/icymi/ICYMIUnreadStateStore.tsx
import { DeviceSettingsStore } from "initialize";
import { MessageEmbedTypes } from "ICYMITypes.tsx";

const require = arg1;
let closure_2 = 7 * require("set").Millis.DAY;
let closure_3 = { readIdToTimestampMap: {} };
class ICYMIUnreadStateStore extends DeviceSettingsStore {
}
const prototype = ICYMIUnreadStateStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let tmp = arg0;
  if (null == arg0) {
    let obj = { readIdToTimestampMap: null };
    obj[0] = {};
    const _Date = Date;
    let closure_0 = Date.now() - closure_2;
    const _Object = Object;
    const keys = Object.keys(obj.readIdToTimestampMap);
    const found = keys.filter((arg0) => obj.readIdToTimestampMap[arg0] < closure_0);
    tmp = found[Symbol.iterator]();
  }
  obj = { readIdToTimestampMap: tmp.readIdToTimestampMap };
};
prototype["getReadTimestamp"] = function getReadTimestamp(id) {
  return closure_3.readIdToTimestampMap[id];
};
prototype["getState"] = function getState() {
  return closure_3;
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return closure_3;
};
ICYMIUnreadStateStore.displayName = "ICYMIUnreadStateStore";
ICYMIUnreadStateStore.persistKey = "ICYMIUnreadStateStore";
const iCYMIUnreadStateStore = new ICYMIUnreadStateStore(require("dispatcher"), {
  ICYMI_ACK_ITEMS: function handleTabAck(arg0) {
    let items;
    let require;
    ({ items, override: require } = arg0);
    const item = items.forEach((id) => {
      let tmp = null != id;
      if (tmp) {
        tmp = null == outer1_3.readIdToTimestampMap[id.id] || closure_0;
        const tmp3 = null == outer1_3.readIdToTimestampMap[id.id] || closure_0;
      }
      if (tmp) {
        outer1_3.readIdToTimestampMap[id.id] = id.timestamp;
      }
    });
  },
  LOAD_ICYMI_DEHYDRATED: function handleLoadDehydrated(arg0) {
    const iter = arg0.items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let tmp3 = require;
      let tmp4 = dependencyMap;
      if (nextResult.type === MessageEmbedTypes.ICYMIItemTypes.MESSAGE) {
        let tmp11 = closure_3;
        let tmp12 = nextResult;
        let result = null != closure_3.readIdToTimestampMap[tmp2.id];
        if (!result) {
          let tmp5 = nextResult;
          let message_context = tmp2.data.message_context;
          let prop;
          if (message_context != null) {
            prop = message_context.external_content_application_id;
          }
          result = null != prop;
        }
        if (!result) {
          let tmp3Result = tmp3(8806);
          let tmp8 = nextResult;
          result = tmp3Result.isItemUnreadInChannel(tmp2.data.channel_id, tmp2.data.message_id);
        }
        if (!result) {
          let tmp9 = closure_3;
          let tmp10 = nextResult;
          closure_3.readIdToTimestampMap[tmp2.id] = 0;
        }
      }
      continue;
    }
  },
  CLEAR_ICYMI_READ_STATES: function handleClearReadStates() {
    closure_3.readIdToTimestampMap = {};
  }
});
let result = require("generateHydrationId").fileFinishedImporting("modules/icymi/ICYMIUnreadStateStore.tsx");

export default iCYMIUnreadStateStore;