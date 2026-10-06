// === Module 18177: DirectReply ===

// Module 18177 (DirectReply)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import MessageConstants from "MessageConstants" /* 4889 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c3, c4;

const NativeModules = react_native.NativeModules;
const MessageSendLocation = MessageConstants.MessageSendLocation;
let tmp = new LoggerDefault("DirectReply");
let closure_5 = tmp;
let result = size.fileFinishedImporting("modules/headless_tasks/android/DirectReply.tsx");

export default (arg0) => {
  let logger;
  let closure_0 = arg0;
  const promise = new Promise((arg0) => {
    closure_0 = arg0;
    const logResult = logger.log("Executing DirectReply");
    let PushNotificationAndroid = NativeModules.PushNotificationAndroid;
    let result = PushNotificationAndroid.markNotificationAsDirectReply(closure_0.channelId);
    let obj = closure_0(dependencyMap[4]);
    obj.awaitStorage(() => {
      function sendMessage(arg0) {
        return obj(...arguments);
      }
      let obj = function _sendMessage() {
        obj = _asyncToGenerator(async (arg0) => {
          let closure_1;
          closure_0 = arg0;
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let tmp;
              c4 = 2;
              if (0 === c3) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  let closure_2 = tmp4;
                  tmp = undefined;
                  const obj6 = obj(closure_3_1[5]);
                  const obj4 = { content: closure_0.channelReplyText, tts: false, invalidEmojis: [], validNonShortcutEmojis: [] };
                  const obj5 = { eagerDispatch: false, location: constants.PUSH_NOTIFICATION };
                  c3 = 1;
                  c4 = 1;
                  const obj7 = { value: obj6.sendMessage(closure_0.channelId, obj4, false, obj5), done: false };
                  return obj7;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                tmp = value;
                logger.log("Sent message, ok:", tmp.ok);
                if (tmp.ok) {
                  const PushNotificationAndroid = closure_3_3.PushNotificationAndroid;
                  const _JSON = JSON;
                  obj = {};
                  const handleDirectReplySuccess = PushNotificationAndroid.handleDirectReplySuccess;
                  const merged = Object.assign(tmp.body);
                  const merged1 = Object.assign(closure_0);
                  const result = handleDirectReplySuccess(stringify(obj));
                }
                closure_0(true);
                c4 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp19) {
              c4 = 3;
              throw tmp19;
            }
          }
        });
        return obj(...arguments);
      };
      logger.log("Storage loaded");
      sendMessage(closure_0);
    });
  });
  return promise;
};