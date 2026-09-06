// discord_app/modules/explicit_media_redaction/ExplicitMediaStore.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";

const require = fn;
let closure_3 = 14 * DurationsDefault.Millis.DAY;
let closure_4 = Object.freeze([]);
let closure_5;
const dependencyMap = {};
const dependencyMap2 = {};
const Store = initializeDefault.Store;
class ExplicitMediaStore extends Store {}
const prototype = ExplicitMediaStore.prototype;
prototype["getFpMessageInfo"] = function getFpMessageInfo(messageId) {
  return dependencyMap[messageId];
};
prototype["getChannelFpInfo"] = function getChannelFpInfo(id) {
  let tmp = dependencyMap2[id];
  if (tmp == null) {
    tmp = closure_4;
  }
  return tmp;
};
prototype["canSubmitFpReport"] = function canSubmitFpReport(messageId) {
  let tmp2 = null != tmp;
  if (tmp2) {
    const reportSubmit = tmp.reportSubmit;
    let tmp3 = !reportSubmit;
    if (!reportSubmit) {
      tmp3 = SnowflakeUtilsDefault.age(tmp.messageId) < closure_3;
    }
    tmp2 = tmp3;
  }
  return tmp2;
};
Object.defineProperty(prototype, "validContentScanVersion", {
  get: function validContentScanVersion() {
    let num = closure_5;
    if (obj.isSensitiveContentSelfHarmEnabled("ExplicitMediaStore.validContentScanVersion")) {
      if (num == null) {
        num = 5;
      }
      return num;
    } else {
      let num2 = num;
      if (num == null) {
        num2 = 4;
      }
      const _Math = Math;
      return Math.min(num2, 4);
    }
    obj = require("SensitiveContentSelfHarmExperiment");
  },
  set: undefined,
});
ExplicitMediaStore.displayName = "FalsePositiveStore";
const explicitMediaStore = new ExplicitMediaStore(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    closure_6 = {};
    closure_7 = {};
  },
  CONNECTION_OPEN: function handleConnectionOpen(explicitContentScanVersion) {
    closure_5 = explicitContentScanVersion.explicitContentScanVersion;
    closure_6 = {};
    closure_7 = {};
  },
  MESSAGE_EXPLICIT_CONTENT_FP_CREATE: function handleFalsePositiveCreate(attachments) {
    ({ messageId, channelId } = attachments);
    const obj = { messageId, channelId, attachments: attachments.attachments, reportSubmit: false };
    let tmp = dependencyMap2[channelId];
    if (tmp == null) {
      tmp = closure_4;
    }
    const items = [];
    items[HermesBuiltin.arraySpread(tmp, 0)] = obj;
    dependencyMap2[channelId] = items;
    closure_6[messageId] = obj;
  },
  MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: function handleFalsePositiveSubmit(messageId) {
    messageId = messageId.messageId;
    const channelId = messageId.channelId;
    if (null != dependencyMap2[channelId]) {
      dependencyMap2[channelId] = arr.map((messageId) => {
        let tmp = messageId;
        if (messageId.messageId === messageId) {
          const obj = {};
          const merged = Object.assign(messageId);
          obj.reportSubmit = true;
          tmp = obj;
        }
        return tmp;
      });
      let obj = {};
      let merged = Object.assign(dependencyMap[messageId]);
      obj.reportSubmit = true;
      dependencyMap[messageId] = obj;
    }
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaStore.tsx");

export default explicitMediaStore;
