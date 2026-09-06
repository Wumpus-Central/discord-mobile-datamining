// === Module 7676: _trackAndroidArtProfileSnapshotAsync ===

// Module 7676 (_trackAndroidArtProfileSnapshotAsync)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import { AnalyticEvents } from "ME" /* 1074 */;

const require = arg1;
function _trackAndroidArtProfileSnapshotAsync() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
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
          c5 = 2;
          if (0 === closure_4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp2;
              let table = tmp5;
              table = undefined;
              dependencyMap = undefined;
              closure_4 = undefined;
              c5 = undefined;
              let obj2;
              const javaBaselineProfileCompilationStatus = callback2(closure_1_2[3]).getJavaBaselineProfileCompilationStatus();
              const obj7 = callback2(closure_1_2[3]);
              const catchPromise = javaBaselineProfileCompilationStatus.catch(() => obj2);
              const obj8 = callback(closure_1_2[4]);
              const items = [catchPromise, callback(closure_1_2[4]).timeoutPromise(10000).then(() => obj2)];
              const items1 = [Promise.race(items), ];
              const timeoutPromiseResult = callback(closure_1_2[4]).timeoutPromise(10000);
              items1[1] = callback2(closure_1_2[3]).getAndroidArtProfileTelemetry();
              closure_4 = 1;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = Promise.all(items1);
              return obj1;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            table = arg1;
            dependencyMap = dependencyMap(table, 2);
            closure_4 = 32;
            c5 = 5;
            obj2 = {};
            const merged = Object.assign(callback2);
            obj2.load_id = callback;
            obj2.java_baseline_profile_compilation_status = closure_4;
            obj2.package_update_age_ms = c5.packageUpdateAgeMs;
            obj2.launch_index_since_package_update = c5.launchIndexSincePackageUpdate;
            obj2.changed_since_previous_observation = c5.changedSincePreviousObservation;
            obj2.reference_profile_metadata_status = c5.referenceProfileMetadataStatus;
            obj2.reference_profile_size_bytes = c5.referenceProfileSizeBytes;
            obj2.reference_profile_last_modified_ms = c5.referenceProfileLastModifiedMs;
            obj2.current_profile_metadata_status = c5.currentProfileMetadataStatus;
            obj2.current_profile_size_bytes = c5.currentProfileSizeBytes;
            obj2.current_profile_last_modified_ms = c5.currentProfileLastModifiedMs;
            callback2(table[5]).track(c5.ANDROID_ART_PROFILE_SNAPSHOT, obj2, { logEventProperties: true });
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp6) {
          c5 = tmp;
          throw tmp6;
        }
      }
    })();
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const UNKNOWN_STATUS = "UNKNOWN_STATUS";
const result = require("set").fileFinishedImporting("modules/tti_analytics/native/ArtProfileAnalytics.android.tsx");

export const trackAndroidArtProfileSnapshot = function trackAndroidArtProfileSnapshot(closure_16, arg1) {
  (function trackAndroidArtProfileSnapshotAsync(closure_16, arg1) {
    const self = this;
    const apply = closure_7.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(closure_16, arg1).catch(() => {

  });
};