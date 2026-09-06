// === Module 17938: DirectReply ===

// Module 17938 (DirectReply)
import LoggerDefault from "Logger" /* 3 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const NativeModules = fn(17).NativeModules;
const MessageSendLocation = fn(4553).MessageSendLocation;
let closure_5 = new LoggerDefault("DirectReply");
const size = fn(2);
let result = size.fileFinishedImporting("modules/headless_tasks/android/DirectReply.tsx");

export default (arg0) => {
  closure_0 = arg0;
  return new Promise((arg0) => {
    closure_0 = arg0;
    logger.log("Executing DirectReply");
    let PushNotificationAndroid = NativeModules.PushNotificationAndroid;
    let result = PushNotificationAndroid.markNotificationAsDirectReply(closure_0.channelId);
    closure_0(dependencyMap[4]).awaitStorage(() => {
      closure_0 = async function _sendMessage(arg0, value) {
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj = { value, done: true };
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_2 = tmp5;
                closure_1 = tmp2;
                closure_129_0 = closure_0;
                closure_129_1 = undefined;
                const obj6 = closure_0(dependencyMap[5]);
                const obj1 = { content: closure_0.channelReplyText, tts: false, invalidEmojis: [], validNonShortcutEmojis: [] };
                const obj2 = { eagerDispatch: false, location: constants.PUSH_NOTIFICATION };
                c3 = 1;
                c4 = 1;
                const obj3 = { value: obj6.sendMessage(closure_0.channelId, obj1, false, obj2), done: false };
                return obj3;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_129_1 = value;
              logger.log("Sent message, ok:", closure_129_1.ok);
              if (closure_129_1.ok) {
                const PushNotificationAndroid = NativeModules.PushNotificationAndroid;
                const _JSON = JSON;
                obj = {};
                const merged = Object.assign(closure_129_1.body);
                const merged1 = Object.assign(closure_129_0);
                const result = PushNotificationAndroid.handleDirectReplySuccess(JSON.stringify(obj));
              }
              closure_0(true);
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp20) {
            c4 = tmp;
            throw tmp20;
          }
        }
      };
      logger.log("Storage loaded");
      (function sendMessage(arg0) {
        const self = this;
        const apply = closure_0.apply;
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