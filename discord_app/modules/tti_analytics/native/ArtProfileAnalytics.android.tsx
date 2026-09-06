// discord_app/modules/tti_analytics/native/ArtProfileAnalytics.android.tsx
import Timers from "../../../../discord_common/js/packages/timers/Timers.tsx";
import NativeTTIModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeTTIModule.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_7 = async function _trackAndroidArtProfileSnapshotAsync(arg0) {
  if (c5 === 2) {
    c5 = 3;
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
          closure_3 = tmp2;
          closure_2 = tmp5;
          closure_130_0 = closure_0;
          closure_130_1 = closure_1;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          closure_130_6 = undefined;
          const javaBaselineProfileCompilationStatus = NativeTTIModuleDefault.getJavaBaselineProfileCompilationStatus();
          const catchPromise = javaBaselineProfileCompilationStatus.catch(() => closure_1_6);
          const items = [catchPromise, Timers.timeoutPromise(10000).then(() => closure_1_6)];
          const items1 = [Promise.race(items)];
          const timeoutPromiseResult = Timers.timeoutPromise(10000);
          items1[1] = NativeTTIModuleDefault.getAndroidArtProfileTelemetry();
          c4 = 1;
          c5 = 1;
          const obj1 = { value: Promise.all(items1), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_130_2 = value;
        closure_130_3 = closure_131_3(closure_130_2, 2);
        closure_130_4 = closure_130_3[0];
        closure_130_5 = closure_130_3[1];
        const obj2 = {};
        const merged = Object.assign(closure_130_1);
        obj2.load_id = closure_130_0;
        obj2.java_baseline_profile_compilation_status = closure_130_4;
        obj2.package_update_age_ms = closure_130_5.packageUpdateAgeMs;
        obj2.launch_index_since_package_update = closure_130_5.launchIndexSincePackageUpdate;
        obj2.changed_since_previous_observation = closure_130_5.changedSincePreviousObservation;
        obj2.reference_profile_metadata_status = closure_130_5.referenceProfileMetadataStatus;
        obj2.reference_profile_size_bytes = closure_130_5.referenceProfileSizeBytes;
        obj2.reference_profile_last_modified_ms = closure_130_5.referenceProfileLastModifiedMs;
        obj2.current_profile_metadata_status = closure_130_5.currentProfileMetadataStatus;
        obj2.current_profile_size_bytes = closure_130_5.currentProfileSizeBytes;
        obj2.current_profile_last_modified_ms = closure_130_5.currentProfileLastModifiedMs;
        closure_130_6 = obj2;
        closure_131_1(closure_131_2[5]).track(closure_131_5.ANDROID_ART_PROFILE_SNAPSHOT, closure_130_6, {
          logEventProperties: true,
        });
        c5 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp6) {
      c5 = tmp;
      throw tmp6;
    }
  }
};
const AnalyticEvents = fn(1074).AnalyticEvents;
const UNKNOWN_STATUS = "UNKNOWN_STATUS";
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/ArtProfileAnalytics.android.tsx");

export const trackAndroidArtProfileSnapshot = function trackAndroidArtProfileSnapshot(arg0, arg1) {
  (function trackAndroidArtProfileSnapshotAsync() {
    const self = this;
    const apply = closure_1_7.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(arg0, arg1).catch(() => {});
};
