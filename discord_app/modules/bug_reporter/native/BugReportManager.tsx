// discord_app/modules/bug_reporter/native/BugReportManager.tsx
import Constants from "../../../Constants.tsx";
import NativePermissionConstants from "../../native_permissions/NativePermissionConstants.tsx";
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativePermissionManagerModule.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import DeveloperOptionsStore from "../../../stores/DeveloperOptionsStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c2, c3, closure_3;

function showNotification(uri) {
  let obj = function _getAndroidScreenshot() {
    obj = _asyncToGenerator(async () => {
      let CameraRollUtils;
      if (c3 === 2) {
        c3 = 3;
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
          let edges;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_1 = tmp;
              edges = undefined;
              CameraRollUtils = CameraRollUtils.CameraRollUtils;
              c2 = 1;
              c3 = 1;
              const obj4 = { value: CameraRollUtils.getPhotos({ first: 1, assetType: "photos" }), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            edges = value;
            if (value == null) {
              edges = {};
            }
            edges = edges.edges;
            if (null != edges) {
              if (edges.length > 0) {
                c3 = 3;
                obj = { value: edges[0].node.image, done: true };
                return obj;
              }
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp13) {
          c3 = 3;
          throw tmp13;
        }
      }
    });
    return obj(...arguments);
  };
  uri = undefined;
  if (uri != null) {
    uri = uri.uri;
  }
  const timerId = setTimeout(
    _asyncToGenerator(async () => {
      let closure_0;
      let closure_1;
      let duration;
      let obj7;
      let obj8;
      function getAndroidScreenshot() {
        return closure_1_0(...arguments);
      }
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp6;
          c3 = 2;
          if (0 === duration) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let obj6;
              let BUG_REPORTER;
              duration = undefined;
              if (null != uri) {
                obj6 = { uri: tmp34 };
                tmp6 = obj6;
              } else {
                const obj2 = tmp(duration[5]);
                if (!obj2.isIOS()) {
                  duration = 1;
                  c3 = 1;
                  const obj9 = { value: getAndroidScreenshot(), done: false };
                  return obj9;
                }
              }
              obj6 = tmp6;
              BUG_REPORTER = constants.BUG_REPORTER;
              const obj5 = tmp(duration[6]);
              duration = obj5.getNotificationDuration(BUG_REPORTER);
              const obj10 = {
                type: BUG_REPORTER,
                duration,
                key: obj7.v4(),
                image: obj6,
                imageUri: uri,
                onDismiss() {
                  obj = closure_1_1(duration[7]);
                  obj.clearNotification();
                },
                inAppNotificationId: obj8.v4(),
              };
              const enqueueNotification = tmp2(duration[7]).enqueueNotification;
              const tmp17 = tmp2(duration[7]);
              obj7 = tmp(duration[8]);
              uri = undefined;
              if (obj6 != null) {
                uri = obj6.uri;
              }
              obj8 = tmp(duration[8]);
              enqueueNotification(obj10);
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else {
            tmp6 = value;
            if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            }
          }
        } catch (tmp30) {
          c3 = 3;
          throw tmp30;
        }
      }
    }),
    1200,
  );
}
const NativeModules = react_native.NativeModules;
const NativeEventEmitter = react_native.NativeEventEmitter;
const InAppNotificationTypes = Constants.InAppNotificationTypes;
const NativePermissionStatus = NativePermissionConstants.NativePermissionStatus;
const nativeEventEmitter = new NativeEventEmitter(NativeModules.ScreenshotHelper);
class BugReportManager extends AutomaticLifecycleManager {
  _initialize() {
    const bugReporter = this.initBugReporter();
  }
  _terminate() {
    const obj = c3;
    if (c3 != null) {
      obj.remove();
    }
    c3 = undefined;
  }
  initBugReporter() {
    return (async () => {
      let obj2;
      function addScreenshotEvent() {
        if (null == closure_3) {
          closure_3 = closure_1_9.addListener("screenshotTaken", closure_1_10);
        }
      }
      if (c3 === 2) {
        c3 = 3;
        const str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_0;
          let isBugReporterEnabled;
          let hasBugReporterAccess;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let c1 = 0;
              closure_0 = undefined;
              isBugReporterEnabled = undefined;
              hasBugReporterAccess = undefined;
              c2 = 1;
              c3 = 1;
              const obj5 = { value: obj2.hasPhotoAuthorization(), done: false };
              obj2 = react_nativeDefault;
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_0 = value === closure_129_8.AUTHORIZED;
            isBugReporterEnabled = closure_129_6.isBugReporterEnabled;
            const obj6 = closure_129_1(closure_129_2[11]);
            hasBugReporterAccess = obj6.getConfig({ location: "native-BugReportManager" }).hasBugReporterAccess;
            const obj7 = closure_129_0(closure_129_2[5]);
            const isIOSResult = obj7.isIOS() || closure_0;
            c3 = isIOSResult;
            const tmp8 = hasBugReporterAccess && isBugReporterEnabled && c3;
            if (tmp8) {
              addScreenshotEvent();
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp12) {
          c3 = 3;
          throw tmp12;
        }
      }
    })();
  }
}
const prototype = BugReportManager.prototype;
const bugReportManager = new BugReportManager();
const result = size.fileFinishedImporting("modules/bug_reporter/native/BugReportManager.tsx");

export default bugReportManager;
