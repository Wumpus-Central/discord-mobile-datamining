// discord_app/modules/icymi/ICYMIUnreadStateStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import obj132Default from "../../utils/Durations.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import MessageEmbedTypes from "ICYMITypes.tsx";
import generateHydrationId from "ICYMIUtils.tsx";

require = fn;
let closure_2 = 7 * obj132Default.Millis.DAY;
let closure_3 = { readIdToTimestampMap: {} };
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class ICYMIUnreadStateStore extends DeviceSettingsStore {
}
const prototype = ICYMIUnreadStateStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let tmp = arg0;
  if (null == arg0) {
    let obj = { readIdToTimestampMap: null };
    obj[0] = {};
    const _Date = Date;
    closure_0 = Date.now() - closure_2;
    const _Object = Object;
    const keys = Object.keys(obj.readIdToTimestampMap);
    const found = keys.filter((item, index) => obj.readIdToTimestampMap[item] < closure_0);
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
const iCYMIUnreadStateStore = new ICYMIUnreadStateStore(dispatcherDefault, {
  ICYMI_ACK_ITEMS: function handleTabAck(arg0) {
    ({ items, override: require } = arg0);
    const item = items.forEach((item, index) => {
      let tmp = null != item;
      if (tmp) {
        tmp = null == closure_1_3.readIdToTimestampMap[item.id] || closure_0;
      }
      if (tmp) {
        closure_1_3.readIdToTimestampMap[item.id] = item.timestamp;
      }
    });
  },
  LOAD_ICYMI_DEHYDRATED: function handleLoadDehydrated(arg0) {
    const iter = arg0.items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      if (nextResult.type === MessageEmbedTypes.ICYMIItemTypes.MESSAGE) {
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
          let tmp3Result = generateHydrationId;
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
});
let result = require("obj132").fileFinishedImporting("modules/icymi/ICYMIUnreadStateStore.tsx");

export default iCYMIUnreadStateStore;