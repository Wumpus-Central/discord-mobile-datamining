// === Module 7433: startBackgroundTask ===

// Module 7433 (startBackgroundTask)
import set2 from "set" /* 500 */;
import initializeDefault from "initialize" /* 7434 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;
import set from "set" /* 500 */;

require = arg1;
function startBackgroundTask(arg0) {
  let obj = set2;
  if (obj.isAndroid()) {
    if (null == arg0) {
      const promise = new Promise((arg0) => arg0(closure_5));
      return promise;
    } else {
      ({ title, content } = arg0);
      obj = { title: null, content: null, priority: null, type: null, usesGateway: false };
      obj[0] = title;
      obj[1] = content;
      obj[2] = tmp(7435).ServiceNotificationPriority.MEDIUM;
      obj[3] = tmp(7435).ServiceNotificationType.FILE_UPLOAD;
      return initializeDefault.addServiceHandler(obj);
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
      initializeDefault.removeServiceHandler(c7);
      const obj2 = initializeDefault;
    } else {
      const DCDBackgroundTaskManager = NativeModules.DCDBackgroundTaskManager;
      DCDBackgroundTaskManager.endBackgroundTask(c7);
    }
    obj = set2;
  }
}
function backgroundify(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
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
            closure_1 = tmp3;
            let callback = tmp5;
            callback = c5;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_6(closure_1_1);
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
        closure_2 = tmp18;
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