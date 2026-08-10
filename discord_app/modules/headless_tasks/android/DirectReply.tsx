// discord_app/modules/headless_tasks/android/DirectReply.tsx
import trackInvite from "trackInvite";
import { NativeModules } from "get ActivityIndicator";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";

let c5 = new require("timestamp")("DirectReply");
let tmp = new require("timestamp")("DirectReply");
let result = require("MESSAGE_GROUP_SPACING").fileFinishedImporting("modules/headless_tasks/android/DirectReply.tsx");

export default (arg0) => {
  let closure_0 = arg0;
  return new Promise((arg0) => {
    const lib = arg0;
    outer1_5.log("Executing DirectReply");
    let PushNotificationAndroid = outer1_3.PushNotificationAndroid;
    let result = PushNotificationAndroid.markNotificationAsDirectReply(lib.channelId);
    lib(outer1_1[4]).awaitStorage(() => {
      function _sendMessage() {
        const self = this;
        const tmp = outer3_2((arg0) => {
          let closure_0 = arg0;
          let c3 = 0;
          let c4 = 0;
          return (/* F120252 */ function*() { ... })();
        });
        const _sendMessage = tmp;
        const apply = tmp.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      outer2_5.log("Storage loaded");
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