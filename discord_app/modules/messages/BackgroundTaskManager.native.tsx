// === Module 6045: startBackgroundTask ===

// Module 6045 (startBackgroundTask)
import closure_3 from "set";
import { NativeModules } from "get ActivityIndicator";
import set from "set";
import set from "set";

const require = arg1;
function startBackgroundTask(arg0) {
  let content;
  let title;
  let obj = require(500) /* set */;
  if (obj.isAndroid()) {
    if (null == arg0) {
      const promise = new Promise((arg0) => arg0(closure_5));
      return promise;
    } else {
      ({ title, content } = arg0);
      obj = { title: null, content: null, priority: null, type: null, usesGateway: false };
      obj[0] = title;
      obj[1] = content;
      obj[2] = tmp(6047).ServiceNotificationPriority.MEDIUM;
      obj[3] = tmp(6047).ServiceNotificationType.FILE_UPLOAD;
      return importDefault(6046).addServiceHandler(obj);
    }
  } else {
    const DCDBackgroundTaskManager = NativeModules.DCDBackgroundTaskManager;
    return DCDBackgroundTaskManager.startBackgroundTask();
  }
}
let num = -1;
if (!set.isAndroid()) {
  num = NativeModules.DCDBackgroundTaskManager.backgroundTaskIdentifierInvalid;
}
function endBackgroundTask(c7) {
  if (c7 !== num) {
    if (obj.isAndroid()) {
      importDefault(6046).removeServiceHandler(c7);
      const obj2 = importDefault(6046);
    } else {
      const DCDBackgroundTaskManager = NativeModules.DCDBackgroundTaskManager;
      DCDBackgroundTaskManager.endBackgroundTask(c7);
    }
    obj = require(500) /* set */;
  }
}
function backgroundify(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp3;
            let callback = tmp5;
            callback = c5;
            let c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_6(outer1_1);
            return obj1;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          c5 = 3;
          let obj2 = { value: null, done: true };
          obj2[0] = callback();
          return obj2;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          callback = arg1;
          c3 = 0;
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = callback().finally(() => {
            if (callback !== c5) {
              const obj = callback(tmp18[2]);
              if (obj.isAndroid()) {
                tmp3(tmp3[3]).removeServiceHandler(tmp);
                const obj2 = tmp3(tmp3[3]);
              } else {
                const DCDBackgroundTaskManager = obj.DCDBackgroundTaskManager;
                DCDBackgroundTaskManager.endBackgroundTask(tmp);
              }
            }
          });
          return obj;
        }
      } catch (tmp18) {
        let closure_2 = tmp18;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp18;
        } else {
          c4 = tmp;
        }
      }
    }
  });
}
const result = set.fileFinishedImporting("modules/messages/BackgroundTaskManager.native.tsx");

export default { backgroundTaskIdentifierInvalid: num, backgroundify, startBackgroundTask, endBackgroundTask };
export const backgroundTaskIdentifierInvalid = num;
export { startBackgroundTask };
export { endBackgroundTask };
export { backgroundify };