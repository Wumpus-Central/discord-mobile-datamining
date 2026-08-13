// discord_app/modules/bug_reporter/native/BugReportManager.tsx
import set from "set";
import get_ActivityIndicator from "get ActivityIndicator";
import refreshSourceMapCookie from "refreshSourceMapCookie";
import { InAppNotificationTypes } from "ME";
import { NativePermissionStatus } from "NativePermissionStatus";
import "initialize";

const require = arg1;
function showNotification(uri) {
  function _getAndroidScreenshot() {
    const self = this;
    const tmp = outer1_4(function*() {
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
              let closure_1 = tmp2;
              let edges;
              const CameraRollUtils = outer1_5.CameraRollUtils;
              c2 = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
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
    const _getAndroidScreenshot = tmp;
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
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let c1 = tmp3;
            let c0 = tmp2;
            c0 = undefined;
            c1 = undefined;
            dependencyMap = undefined;
            if (null != outer1_1) {
              let obj1 = { uri: null };
              obj1[0] = tmp36;
              let tmp7 = obj1;
            } else {
              obj1 = outer1_0(500);
              if (!obj1.isIOS()) {
                dependencyMap = 1;
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
            outer1_0 = tmp7;
            outer1_1 = outer1_7.BUG_REPORTER;
            dependencyMap = outer1_0(9818).getNotificationDuration(outer1_1);
            const obj5 = outer1_0(9818);
            const obj3 = { type: null, duration: null, key: null, image: null, imageUri: null, onDismiss: null, inAppNotificationId: null };
            obj3[0] = outer1_1;
            obj3[1] = dependencyMap;
            const obj6 = outer1_1(9820);
            obj3[2] = outer1_0(514).v4();
            obj3[3] = outer1_0;
            let uri;
            if (outer1_0 != null) {
              uri = outer1_0.uri;
            }
            obj3[4] = uri;
            obj3[5] = function onDismiss() {
              _undefined(table[7]).clearNotification();
            };
            const obj8 = outer1_0(514);
            obj3[6] = outer1_0(514).v4();
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
            const NativePermissionManager = outer1_5.NativePermissionManager;
            hasBugReporterAccess = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
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
const result = require("refreshSourceMapCookie").fileFinishedImporting("modules/bug_reporter/native/BugReportManager.tsx");

export default bugReportManager;