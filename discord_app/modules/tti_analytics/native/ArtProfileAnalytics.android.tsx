// discord_app/modules/tti_analytics/native/ArtProfileAnalytics.android.tsx
import Constants from "../../../Constants.tsx";
import Timers from "../../../../discord_common/js/packages/timers/Timers.tsx";
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeTTIModule.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../_runtime/metro/00002__.js";

let closure_2, closure_3, java_baseline_profile_compilation_status;

let obj = function _trackAndroidArtProfileSnapshotAsync() {
  obj = _asyncToGenerator(async (load_id, arg1) => {
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_5;
          let obj5;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_2 = undefined;
              closure_3 = undefined;
              java_baseline_profile_compilation_status = undefined;
              closure_5 = undefined;
              obj5 = undefined;
              const obj7 = react_nativeDefault;
              const javaBaselineProfileCompilationStatus = obj7.getJavaBaselineProfileCompilationStatus();
              const catchPromise = javaBaselineProfileCompilationStatus.catch(() => closure_1_6);
              const items = [catchPromise];
              const obj8 = Timers;
              const timeoutPromiseResult = obj8.timeoutPromise(10000);
              items[1] = timeoutPromiseResult.then(() => closure_1_6);
              const items1 = [Promise.race(items)];
              const obj9 = react_nativeDefault;
              items1[1] = obj9.getAndroidArtProfileTelemetry();
              c4 = 1;
              c5 = 1;
              const obj4 = { value: all(items1), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            closure_2 = value;
            closure_3 = closure_131_3(closure_2, 2);
            java_baseline_profile_compilation_status = closure_3[0];
            closure_5 = closure_3[1];
            obj5 = {
              load_id,
              java_baseline_profile_compilation_status,
              package_update_age_ms: closure_5.packageUpdateAgeMs,
              launch_index_since_package_update: closure_5.launchIndexSincePackageUpdate,
              changed_since_previous_observation: closure_5.changedSincePreviousObservation,
              reference_profile_metadata_status: closure_5.referenceProfileMetadataStatus,
              reference_profile_size_bytes: closure_5.referenceProfileSizeBytes,
              reference_profile_last_modified_ms: closure_5.referenceProfileLastModifiedMs,
              current_profile_metadata_status: closure_5.currentProfileMetadataStatus,
              current_profile_size_bytes: closure_5.currentProfileSizeBytes,
              current_profile_last_modified_ms: closure_5.currentProfileLastModifiedMs,
            };
            const merged = Object.assign(closure_1);
            const obj6 = closure_131_1(closure_131_2[5]);
            obj6.track(closure_131_5.ANDROID_ART_PROFILE_SNAPSHOT, obj5, { logEventProperties: true });
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp5) {
          c5 = 3;
          throw tmp5;
        }
      }
    })();
  });
  return obj(...arguments);
};
const AnalyticEvents = Constants.AnalyticEvents;
const UNKNOWN_STATUS = "UNKNOWN_STATUS";
const result = size.fileFinishedImporting("modules/tti_analytics/native/ArtProfileAnalytics.android.tsx");

export const trackAndroidArtProfileSnapshot = function trackAndroidArtProfileSnapshot(load_id, arg1) {
  function trackAndroidArtProfileSnapshotAsync() {
    return obj(...arguments);
  }
  const promise = trackAndroidArtProfileSnapshotAsync(load_id, arg1);
  promise.catch(() => {});
};
