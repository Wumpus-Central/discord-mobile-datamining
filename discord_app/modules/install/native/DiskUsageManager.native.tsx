// === Module 15413: DiskUsageManager ===

// Module 15413 (DiskUsageManager)
import LoggerDefault from "Logger" /* 3 */;
import Storage3 from "Storage" /* 510 */;
import react_native from "react-native" /* 1354 */;
import BackgroundTaskManagerDefault from "BackgroundTaskManager" /* 7264 */;
import react_nativeDefault from "react-native" /* 15414 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6620 */;
import size_mod from "module_2" /* 2 */;

let c2, c3, c5, c6, closure_3;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function isStable() {
  const _default = react_native.default;
  return "stable" === _default.getConstants().ReleaseChannel;
}
function measureAndReportInstallSize() {
  return obj(...arguments);
}
let obj = function _measureAndReportInstallSize() {
  obj = _asyncToGenerator(async () => {
    let obj5;
    let obj8;
    let tmp12;
    if (c6 === 2) {
      c6 = 3;
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
      let c4;
      try {
        let caches_directory_bytes;
        let closure_1;
        let metricKitSize;
        let timeToMeasure;
        let report;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            let closure_2 = tmp;
            caches_directory_bytes = undefined;
            closure_1 = undefined;
            size = undefined;
            metricKitSize = undefined;
            timeToMeasure = undefined;
            report = undefined;
            c5 = 1;
            c6 = 1;
            const obj7 = { value: obj8.startBackgroundTask(), done: false };
            obj8 = BackgroundTaskManagerDefault;
            return obj7;
          }
        } else {
          if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              caches_directory_bytes = value;
              const obj14 = closure_130_0(closure_130_2[7]);
              if (obj14.isIOS()) {
                if (caches_directory_bytes === closure_130_1(closure_130_2[6]).backgroundTaskIdentifierInvalid) {
                  closure_130_8.warn("Skipping install size measurement due to background task restrictions.");
                }
              }
              c4 = 2;
              c5 = 4;
              c6 = 1;
              const obj10 = { value: obj5.calculateSize(), done: false };
              obj5 = closure_130_1(closure_130_2[8]);
              return obj10;
            }
          } else if (2 === c5) {
            c4 = 0;
            const obj4 = closure_130_1(closure_130_2[6]);
            obj4.endBackgroundTask(caches_directory_bytes);
            throw closure_3;
          } else {
            if (3 === c5) {
              c4 = 1;
              let closure_6 = closure_3;
              closure_130_8.error("Failed to measure install size:", closure_6);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              obj = closure_130_1(closure_130_2[6]);
              obj.endBackgroundTask(caches_directory_bytes);
              c6 = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else {
              closure_1 = value;
              size = closure_1.size;
              metricKitSize = closure_1.metricKitSize;
              timeToMeasure = closure_1.timeToMeasure;
              report = closure_1.report;
              closure_130_8.info("calculateInstallSize:", size, metricKitSize, timeToMeasure, report);
              const obj12 = { caches_directory_bytes, measurement_time_ms: timeToMeasure, report: tmp12 };
              const track = closure_130_1(closure_130_2[9]).track;
              const APP_DISK_USAGE_UPDATED = closure_130_5.APP_DISK_USAGE_UPDATED;
              const tmp77 = closure_130_1(closure_130_2[9]);
              const obj13 = closure_130_0(closure_130_2[10]);
              const merged = Object.assign(obj13.getDeviceMetadata());
              caches_directory_bytes = metricKitSize;
              if (metricKitSize == null) {
                caches_directory_bytes = size;
              }
              tmp12 = undefined;
              if (!closure_130_9()) {
                tmp12 = report;
              }
              track(APP_DISK_USAGE_UPDATED, obj12);
              c4 = 1;
            }
            c4 = 0;
            const obj3 = closure_130_1(closure_130_2[6]);
            obj3.endBackgroundTask(caches_directory_bytes);
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp55) {
        closure_3 = tmp55;
        if (0 === c4) {
          c6 = 3;
          throw tmp55;
        } else if (1 === tmp57) {
          c5 = 2;
        } else {
          c5 = 3;
        }
      }
    }
  });
  return obj(...arguments);
};
({ AnalyticEvents: hasOwnProperty, AppStates: metroRequire, DebugLogCategory: metroImportDefault } = Constants);
const tmp3 = new LoggerDefault("DiskUsageManager");
const metroImportAll = tmp3;
class DiskUsageManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = {
      APP_STATE_UPDATE(arg0) {
        applyArgumentsResult.handleAppStateUpdate(arg0);
      }
    };
    return applyArgumentsResult;
  }
  clearCaches() {
    obj = react_nativeDefault;
    obj.clearCaches();
  }
  calculateSize() {
    obj = react_nativeDefault;
    return obj.calculateSize();
  }
  uploadStorageDiagnostics() {
    return (async function() {
      let closure_0;
      let obj5;
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
          let tmp;
          let obj7;
          let body;
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
              let closure_1 = tmp4;
              tmp = undefined;
              obj7 = undefined;
              body = undefined;
              c2 = 1;
              c3 = 1;
              const obj4 = { value: obj5.collectStorageDiagnostics(), done: false };
              obj5 = react_nativeDefault;
              return obj4;
            }
          } else if (1 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              tmp = value;
              obj7 = { type: "client" };
              const merged = Object.assign(closure_129_1(closure_129_2[12])());
              const obj8 = { category: closure_129_7.IOS_APP, filename: "storage_inventory.jsonl", body: "" + JSON.stringify(obj7) + "\n" + tmp.contents };
              const _JSON = JSON;
              const _HermesInternal = HermesInternal;
              const tmp28 = closure_129_1(closure_129_2[13]);
              c2 = 2;
              c3 = 1;
              const obj9 = { value: tmp28(obj8), done: false };
              return obj9;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            body = value;
            body = body.body;
            let id;
            if (body != null) {
              id = body.id;
            }
            if (typeof id !== "string") {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error("Storage diagnostics upload returned no ID");
              throw error;
            } else {
              c3 = 3;
              obj = { value: tmp.complete, done: true };
              return obj;
            }
          }
        } catch (tmp14) {
          c3 = 3;
          throw tmp14;
        }
      }
    })();
  }
  handleAppStateUpdate(state) {
    if (state.state === metroRequire.BACKGROUND) {
      let num;
      const currentUser = UserStore.getCurrentUser();
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      if (isStaffResult) {
        num = 1;
      } else {
        react_native.default;
        num = 0.05;
      }
      let num2 = 86400000;
      const _default2 = react_native.default;
      if ("stable" === _default2.getConstants().ReleaseChannel) {
        num2 = 604800000;
      }
      const _Date = Date;
      const self = this;
      const self2 = this;
      const date = new Date();
      const Storage = Storage3.Storage;
      const value = Storage.get("lastInstallSizeAnalyzerRunDateKey");
      if (null != value) {
        const _Date2 = Date;
        const self3 = this;
        const self4 = this;
        const date1 = new Date(value);
        const time = date.getTime();
        if (time - date1.getTime() < num2) {
          closure_8.verbose("Install size analysis was executed too recently, skipping execution.");
        }
      }
      const _Math = Math;
      if (Math.random() < num) {
        measureAndReportInstallSize();
      } else {
        closure_8.verbose("Did not fall into the sampling rate for install size measurement.");
      }
      const Storage2 = Storage3.Storage;
      const result = Storage2.set("lastInstallSizeAnalyzerRunDateKey", date.toISOString());
    }
  }
}
const prototype = DiskUsageManager.prototype;
const diskUsageManager = new DiskUsageManager();
let size = size_mod;
let result = size.fileFinishedImporting("modules/install/native/DiskUsageManager.native.tsx");

export default diskUsageManager;