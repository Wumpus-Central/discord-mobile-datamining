// === Module 6104: getFpMessageInfo ===

// Module 6104 (getFpMessageInfo)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import initializeDefault from "initialize" /* 589 */;
import setDefault from "set" /* 687 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const require = arg1;
let closure_3 = 14 * setDefault.Millis.DAY;
let closure_4 = Object.freeze([]);
let c5;
let closure_6 = {};
let closure_7 = {};
const Store = initializeDefault.Store;
class ExplicitMediaStore extends Store {
}
const prototype = ExplicitMediaStore.prototype;
prototype["getFpMessageInfo"] = function getFpMessageInfo(closure_0) {
  return dependencyMap[closure_0];
};
prototype["getChannelFpInfo"] = function getChannelFpInfo(memo1) {
  let tmp = dependencyMap2[memo1];
  if (tmp == null) {
    tmp = closure_4;
  }
  return tmp;
};
prototype["canSubmitFpReport"] = function canSubmitFpReport(closure_1) {
  let tmp2 = null != tmp;
  if (tmp2) {
    const reportSubmit = tmp.reportSubmit;
    let tmp3 = !reportSubmit;
    if (!reportSubmit) {
      tmp3 = DISCORD_EPOCHDefault.age(tmp.messageId) < closure_3;
      const obj = DISCORD_EPOCHDefault;
    }
    tmp2 = tmp3;
  }
  return tmp2;
};
Object.defineProperty(prototype, "validContentScanVersion", {
  get: function validContentScanVersion() {
    let num = c5;
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
    obj = require(6105) /* apexExperiment */;
  },
  set: undefined
});
ExplicitMediaStore.displayName = "FalsePositiveStore";
const explicitMediaStore = new ExplicitMediaStore(dispatcherDefault, {
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
  }
});
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaStore.tsx");

export default explicitMediaStore;