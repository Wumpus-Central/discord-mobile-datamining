// === Module 7264: BackgroundTaskManager ===

// Module 7264 (BackgroundTaskManager)
import react_native from "react-native" /* 17 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 7265 */;
import ForegroundServiceManagerTypes from "ForegroundServiceManagerTypes" /* 7267 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import size from "module_2" /* 2 */;

let c4, c5;

function startBackgroundTask(arg0) {
  let content;
  let title;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    if (null == arg0) {
      const self = this;
      const self2 = this;
      const promise = new Promise((fn) => fn(num));
      return promise;
    } else {
      ({ title, content } = arg0);
      const obj2 = { title, content, priority: ForegroundServiceManagerTypes.ServiceNotificationPriority.MEDIUM, type: ForegroundServiceManagerTypes.ServiceNotificationType.FILE_UPLOAD, usesGateway: false };
      const addServiceHandler = ForegroundServiceManagerDefault.addServiceHandler;
      return addServiceHandler(obj2);
    }
  } else {
    const DCDBackgroundTaskManager = NativeModules.DCDBackgroundTaskManager;
    return DCDBackgroundTaskManager.startBackgroundTask();
  }
}
const NativeModules = react_native.NativeModules;
let num = -1;
if (!PlatformUtils.isAndroid()) {
  num = NativeModules.DCDBackgroundTaskManager.backgroundTaskIdentifierInvalid;
}
function endBackgroundTask(value) {
  if (value !== num) {
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      const obj2 = ForegroundServiceManagerDefault;
      obj2.removeServiceHandler(value);
    } else {
      const DCDBackgroundTaskManager = NativeModules.DCDBackgroundTaskManager;
      DCDBackgroundTaskManager.endBackgroundTask(value);
    }
  }
}
function backgroundify(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return _asyncToGenerator(async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let cleanupPromise;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp;
            closure_0 = c5;
            c3 = 1;
            cleanupPromise = startBackgroundTask(closure_1);
            c4 = 2;
            c5 = 1;
            const obj4 = { value: cleanupPromise, done: false };
            return obj4;
          }
        } else if (1 === tmp4) {
          c3 = 0;
          cleanupPromise = closure_129_0();
          c5 = 3;
          const obj5 = { value: cleanupPromise, done: true };
          return obj5;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_0 = value;
          c3 = 0;
          const promise = closure_129_0();
          cleanupPromise = promise.finally(() => {
            if (closure_1_0 !== c5) {
              const obj = cleanupPromise(closure_2[2]);
              if (obj.isAndroid()) {
                const obj2 = closure_1(closure_2[3]);
                obj2.removeServiceHandler(closure_1_0);
              } else {
                const DCDBackgroundTaskManager = c4.DCDBackgroundTaskManager;
                DCDBackgroundTaskManager.endBackgroundTask(closure_1_0);
              }
            }
          });
          c5 = 3;
          let obj = { value: cleanupPromise, done: true };
          return obj;
        }
      } catch (tmp15) {
        let closure_2 = tmp15;
        if (0 === c3) {
          c5 = 3;
          throw tmp15;
        } else {
          c4 = 1;
        }
      }
    }
  });
}
const result = size.fileFinishedImporting("modules/messages/BackgroundTaskManager.native.tsx");

export default { backgroundTaskIdentifierInvalid: num, backgroundify, startBackgroundTask, endBackgroundTask };
export const backgroundTaskIdentifierInvalid = num;
export { startBackgroundTask };
export { endBackgroundTask };
export { backgroundify };