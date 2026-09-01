// discord_app/modules/headless_tasks/android/DirectReply.tsx
import timestampDefault from "../../debug/Logger.tsx";
import closure_2 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import { NativeModules } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { MessageSendLocation } from "../../messages/MessageConstants.tsx";

let closure_5 = new timestampDefault("DirectReply");
let tmp = new timestampDefault("DirectReply");
let result = require("set").fileFinishedImporting("modules/headless_tasks/android/DirectReply.tsx");

export default (arg0) => {
  closure_0 = arg0;
  return new Promise((arg0) => {
    const lib = arg0;
    closure_1_5.log("Executing DirectReply");
    let PushNotificationAndroid = closure_1_3.PushNotificationAndroid;
    let result = PushNotificationAndroid.markNotificationAsDirectReply(lib.channelId);
    lib(closure_1_1[4]).awaitStorage(() => {
      function _sendMessage() {
        const self = this;
        const tmp = closure_3_2((arg0) => {
          closure_0 = arg0;
          c3 = 0;
          c4 = 0;
          return (/* F123117 */ function*() { ... })();
        });
        closure_0 = tmp;
        const apply = tmp.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      closure_2_5.log("Storage loaded");
      (function sendMessage(closure_0) {
        const self = this;
        const apply = _sendMessage.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(closure_0);
    });
  });
};