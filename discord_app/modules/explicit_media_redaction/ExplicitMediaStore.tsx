// discord_app/modules/explicit_media_redaction/ExplicitMediaStore.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let closure_6, closure_7;

let closure_3 = 14 * DurationsDefault.Millis.DAY;
let closure_4 = Object.freeze([]);
let closure_5;
const metroRequire = {};
const metroImportDefault = {};
const Store = get_initializedDefault.Store;
class ExplicitMediaStore extends Store {
  getFpMessageInfo(messageId) {
    return closure_6[messageId];
  }
  getChannelFpInfo(id) {
    let tmp = closure_7[id];
    if (tmp == null) {
      tmp = closure_4;
    }
    return tmp;
  }
  canSubmitFpReport(messageId) {
    let tmp2 = null != tmp;
    if (tmp2) {
      let tmp3 = !tmp.reportSubmit;
      if (tmp3) {
        const obj = SnowflakeUtilsDefault;
        tmp3 = obj.age(tmp.messageId) < closure_3;
      }
      tmp2 = tmp3;
    }
    return tmp2;
  }
}
Object.defineProperty(ExplicitMediaStore.prototype, "validContentScanVersion", {
  get: function validContentScanVersion() {
    let num = closure_5;
    const obj = require("SensitiveContentSelfHarmExperiment");
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
  },
  set: undefined,
});
ExplicitMediaStore.displayName = "FalsePositiveStore";
let obj = {
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
    let channelId;
    let messageId;
    ({ messageId, channelId } = attachments);
    const obj = { messageId, channelId, attachments: attachments.attachments, reportSubmit: false };
    let tmp2 = closure_7[channelId];
    if (tmp2 == null) {
      tmp2 = closure_4;
    }
    const items = [];
    items[HermesBuiltin.arraySpread(items, tmp2, 0)] = obj;
    closure_7[channelId] = items;
    closure_6[messageId] = obj;
  },
  MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: function handleFalsePositiveSubmit(messageId) {
    messageId = messageId.messageId;
    const channelId = messageId.channelId;
    if (null != closure_7[channelId]) {
      closure_7[channelId] = closure_7[channelId].map((messageId) => {
        let tmp = messageId;
        if (messageId.messageId === messageId) {
          const obj = { reportSubmit: true };
          const merged = Object.assign(messageId);
          tmp = obj;
        }
        return tmp;
      });
      let obj = { reportSubmit: true };
      let merged = Object.assign(closure_6[messageId]);
      closure_6[messageId] = obj;
    }
  },
};
const explicitMediaStore = new ExplicitMediaStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaStore.tsx");

export default explicitMediaStore;
