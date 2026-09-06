// === Module 7755: BackgroundTaskManager ===

// Module 7755 (BackgroundTaskManager)
import PlatformUtils2 from "PlatformUtils" /* 1115 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 7756 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
function startBackgroundTask(arg0) {
  let obj = PlatformUtils2;
  if (obj.isAndroid()) {
    if (null == arg0) {
      const promise = new Promise((fn) => fn(num));
      return promise;
    } else {
      ({ title, content } = arg0);
      obj = { title, content, priority: tmp(7758).ServiceNotificationPriority.MEDIUM, type: tmp(7758).ServiceNotificationType.FILE_UPLOAD, usesGateway: false };
      return ForegroundServiceManagerDefault.addServiceHandler(obj);
    }
  } else {
    const DCDBackgroundTaskManager = NativeModules.DCDBackgroundTaskManager;
    return DCDBackgroundTaskManager.startBackgroundTask();
  }
}
const NativeModules = fn(17).NativeModules;
const PlatformUtils = fn(1115);
let num = -1;
if (!PlatformUtils.isAndroid()) {
  num = NativeModules.DCDBackgroundTaskManager.backgroundTaskIdentifierInvalid;
}
function endBackgroundTask(arg0) {
  if (arg0 !== num) {
    if (obj.isAndroid()) {
      ForegroundServiceManagerDefault.removeServiceHandler(arg0);
    } else {
      const DCDBackgroundTaskManager = NativeModules.DCDBackgroundTaskManager;
      DCDBackgroundTaskManager.endBackgroundTask(arg0);
    }
    obj = PlatformUtils2;
  }
}
function backgroundify(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return asyncGeneratorStep(async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp3;
            closure_0 = tmp5;
            closure_128_0 = c5;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj1 = { value: startBackgroundTask(closure_1), done: false };
            return obj1;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          c5 = 3;
          let obj2 = { value: closure_129_0(), done: true };
          return obj2;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_128_0 = value;
          c3 = 0;
          c5 = 3;
          obj = {
            value: closure_129_0().finally(() => {
                    if (closure_1_0 !== c5) {
                      if (obj.isAndroid()) {
                        closure_1(tmp3[3]).removeServiceHandler(tmp);
                        const obj2 = closure_1(tmp3[3]);
                      } else {
                        const DCDBackgroundTaskManager = c4.DCDBackgroundTaskManager;
                        DCDBackgroundTaskManager.endBackgroundTask(tmp);
                      }
                      obj = closure_0(closure_2[2]);
                      tmp3 = closure_2;
                    }
                  }),
            done: true
          };
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/BackgroundTaskManager.native.tsx");

export default { backgroundTaskIdentifierInvalid: num, backgroundify, startBackgroundTask, endBackgroundTask };
export const backgroundTaskIdentifierInvalid = num;
export { startBackgroundTask };
export { endBackgroundTask };
export { backgroundify };