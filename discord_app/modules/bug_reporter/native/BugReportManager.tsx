// === Module 10214: BugReportManager ===

// Module 10214 (BugReportManager)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1347 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

const require = fn;
function showNotification(uri) {
  closure_0 = async function _getAndroidScreenshot() {
    if (c3 === 2) {
      c3 = 3;
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp2;
            let edges2;
            CameraRollUtils = CameraRollUtils.CameraRollUtils;
            c2 = 1;
            c3 = 1;
            const obj1 = { value: CameraRollUtils.getPhotos({ first: 1, assetType: "photos" }), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          let edges = value;
          if (value == null) {
            edges = {};
          }
          edges2 = edges.edges;
          if (null != edges2) {
            if (edges2.length > 0) {
              c3 = 3;
              obj = { value: edges2[0].node.image, done: true };
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
  };
  uri = undefined;
  if (uri != null) {
    uri = uri.uri;
  }
  const timerId = setTimeout(asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
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
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = undefined;
            let BUG_REPORTER;
            let notificationDuration;
            if (null != uri) {
              let obj1 = { uri: tmp35 };
              let tmp7 = obj1;
            } else {
              obj1 = tmp2(1115);
              if (!obj1.isIOS()) {
                dependencyMap = 1;
                c3 = 1;
                const obj2 = {
                  value: (function getAndroidScreenshot() {
                                const self = this;
                                const apply = closure_1_0.apply;
                                if (typeof apply === "unknown") {
                                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                } else {
                                  applyArgumentsResult = apply(self, arguments);
                                }
                                return applyArgumentsResult;
                              })(),
                  done: false
                };
                return obj2;
              }
            }
            closure_128_0 = tmp7;
            BUG_REPORTER = constants.BUG_REPORTER;
            notificationDuration = tmp2(10094).getNotificationDuration(BUG_REPORTER);
            const obj5 = tmp2(10094);
            const obj3 = { type: BUG_REPORTER, duration: notificationDuration, key: null, image: null, imageUri: null, onDismiss: null, inAppNotificationId: null };
            const obj6 = tmp3(10096);
            obj3.key = tmp2(1256).v4();
            obj3.image = closure_128_0;
            uri = undefined;
            if (closure_128_0 != null) {
              uri = closure_128_0.uri;
            }
            obj3.imageUri = uri;
            obj3.onDismiss = function onDismiss() {
              closure_1_1(dependencyMap[7]).clearNotification();
            };
            const obj8 = tmp2(1256);
            obj3.inAppNotificationId = tmp2(1256).v4();
            obj6.enqueueNotification(obj3);
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else {
          tmp7 = value;
          if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
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
get_ActivityIndicator = fn(17);
const NativeModules = get_ActivityIndicator.NativeModules;
const InAppNotificationTypes = fn(1074).InAppNotificationTypes;
const NativePermissionStatus = fn(4770).NativePermissionStatus;
const nativeEventEmitter = new get_ActivityIndicator.NativeEventEmitter(NativeModules.ScreenshotHelper);
class BugReportManager extends tmp4 {
}
const prototype = BugReportManager.prototype;
prototype["_initialize"] = function _initialize() {
  const bugReporter = this.initBugReporter();
};
prototype["_terminate"] = function _terminate() {
  if (_undefined != null) {
    _undefined.remove();
  }
  _undefined = undefined;
};
prototype["initBugReporter"] = function initBugReporter() {
  return (async () => {
    if (c3 === 2) {
      c3 = 3;
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c1 = 0;
            closure_0 = tmp2;
            closure_128_0 = undefined;
            let isBugReporterEnabled;
            let hasBugReporterAccess;
            closure_128_3 = undefined;
            const NativePermissionManager = NativeModules.NativePermissionManager;
            c2 = 1;
            c3 = 1;
            const obj1 = { value: NativePermissionManager.hasPhotoAuthorization(), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_128_0 = value === closure_129_8.AUTHORIZED;
          isBugReporterEnabled = closure_129_6.isBugReporterEnabled;
          hasBugReporterAccess = closure_129_1(closure_129_2[10]).getConfig({ location: "native-BugReportManager" }).hasBugReporterAccess;
          const obj5 = closure_129_1(closure_129_2[10]);
          let isIOSResult = closure_129_0(closure_129_2[5]).isIOS();
          if (!isIOSResult) {
            isIOSResult = closure_128_0;
          }
          closure_128_3 = isIOSResult;
          let tmp9 = hasBugReporterAccess;
          if (hasBugReporterAccess) {
            tmp9 = isBugReporterEnabled;
          }
          if (tmp9) {
            tmp9 = closure_128_3;
          }
          if (tmp9) {
            (function addScreenshotEvent() {
              if (null == closure_3) {
                closure_3 = closure_1_9.addListener("screenshotTaken", closure_1_10);
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/bug_reporter/native/BugReportManager.tsx");

export default bugReportManager;