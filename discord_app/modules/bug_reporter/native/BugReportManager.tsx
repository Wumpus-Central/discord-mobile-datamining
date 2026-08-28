// discord_app/modules/bug_reporter/native/BugReportManager.tsx
import initializeDefault from "../../../lib/AutomaticLifecycleManager.tsx";
import closure_4 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../stores/DeveloperOptionsStore.tsx";
import { InAppNotificationTypes } from "../../../Constants.tsx";
import { NativePermissionStatus } from "../../native_permissions/NativePermissionConstants.tsx";

const require = arg1;
function showNotification(uri) {
  function _getAndroidScreenshot() {
    const self = this;
    const tmp = closure_1_4(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp2;
              let edges;
              const CameraRollUtils = closure_1_5.CameraRollUtils;
              c2 = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = CameraRollUtils.getPhotos({ first: 1, assetType: "photos" });
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            edges = arg1;
            if (arg1 == null) {
              edges = {};
            }
            edges = edges.edges;
            if (null != edges) {
              if (edges.length > 0) {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = edges[0].node.image;
                return obj;
              }
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp14) {
          c3 = tmp;
          throw tmp14;
        }
      }
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
  uri = undefined;
  if (uri != null) {
    uri = uri.uri;
  }
  const timerId = setTimeout(callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp5 === 3) {
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c1 = tmp3;
            c0 = tmp2;
            c0 = undefined;
            c1 = undefined;
            c2 = undefined;
            if (null != BUG_REPORTER) {
              obj1 = { uri: null };
              obj1[0] = tmp36;
              let tmp7 = obj1;
            } else {
              obj1 = obj1(500);
              if (!obj1.isIOS()) {
                c2 = 1;
                c3 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = (function getAndroidScreenshot() {
                  const self = this;
                  const apply = c0.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })();
                return obj2;
              }
            }
            obj1 = tmp7;
            BUG_REPORTER = closure_1_7.BUG_REPORTER;
            dependencyMap = obj1(10115).getNotificationDuration(BUG_REPORTER);
            const obj5 = obj1(10115);
            const obj3 = { type: null, duration: null, key: null, image: null, imageUri: null, onDismiss: null, inAppNotificationId: null };
            obj3[0] = BUG_REPORTER;
            obj3[1] = dependencyMap;
            const obj6 = BUG_REPORTER(10117);
            obj3[2] = obj1(514).v4();
            obj3[3] = obj1;
            uri = undefined;
            if (obj1 != null) {
              uri = obj1.uri;
            }
            obj3[4] = uri;
            obj3[5] = function onDismiss() {
              _undefined(table[7]).clearNotification();
            };
            const obj8 = obj1(514);
            obj3[6] = obj1(514).v4();
            obj6.enqueueNotification(obj3);
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else {
          tmp7 = arg1;
          if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        }
      } catch (tmp30) {
        c3 = tmp;
        throw tmp30;
      }
    }
  }), 1200);
}
const NativeModules = get_ActivityIndicator.NativeModules;
const nativeEventEmitter = new get_ActivityIndicator.NativeEventEmitter(NativeModules.ScreenshotHelper);
initializeDefault;
class BugReportManager extends tmp4 {
}
const prototype = BugReportManager.prototype;
prototype["_initialize"] = function _initialize() {
  const bugReporter = this.initBugReporter();
};
prototype["_terminate"] = function _terminate() {
  if (c3 != null) {
    c3.remove();
  }
  c3 = undefined;
};
prototype["initBugReporter"] = function initBugReporter() {
  return callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
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
        c3 = 2;
        if (0 === hasBugReporterAccess) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let isBugReporterEnabled = 0;
            let callback = tmp2;
            callback = undefined;
            isBugReporterEnabled = undefined;
            hasBugReporterAccess = undefined;
            c3 = undefined;
            const NativePermissionManager = closure_1_5.NativePermissionManager;
            hasBugReporterAccess = 1;
            c3 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = NativePermissionManager.hasPhotoAuthorization();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          callback = arg1 === constants.AUTHORIZED;
          isBugReporterEnabled = isBugReporterEnabled.isBugReporterEnabled;
          hasBugReporterAccess = isBugReporterEnabled(hasBugReporterAccess[10]).getConfig({ location: "native-BugReportManager" }).hasBugReporterAccess;
          const obj5 = isBugReporterEnabled(hasBugReporterAccess[10]);
          let isIOSResult = callback(hasBugReporterAccess[5]).isIOS();
          if (!isIOSResult) {
            isIOSResult = callback;
          }
          c3 = isIOSResult;
          let tmp9 = hasBugReporterAccess;
          if (hasBugReporterAccess) {
            tmp9 = isBugReporterEnabled;
          }
          if (tmp9) {
            tmp9 = c3;
          }
          if (tmp9) {
            (function addScreenshotEvent() {
              if (null == closure_3) {
                closure_3 = closure_9.addListener("screenshotTaken", closure_10);
              }
            })();
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp12) {
        c3 = tmp;
        throw tmp12;
      }
    }
  })();
};
const bugReportManager = new BugReportManager();
const result = require("set").fileFinishedImporting("modules/bug_reporter/native/BugReportManager.tsx");

export default bugReportManager;