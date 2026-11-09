// discord_app/modules/native_on_demand/native/NativeOnDemandResourceManager.android.tsx
import AudioActionCreatorsDefault from "../../../actions/AudioActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

let require = fn;
const AppStates = fn(1072).AppStates;
const prototype = function NativeOnDemandResourceManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handlePostConnectionOpen();
    },
    APP_STATE_UPDATE() {
      return applyArgumentsResult.handleAppStateUpdate();
    },
  };
  applyArgumentsResult.isPastConnectionOpen = false;
  applyArgumentsResult.hasFetchedKrisp = false;
  applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
    applyArgumentsResult.isPastConnectionOpen = true;
    applyArgumentsResult.maybeLoadKrisp();
  };
  applyArgumentsResult.handleAppStateUpdate = function handleAppStateUpdate() {
    applyArgumentsResult.maybeLoadKrisp();
  };
  closure_129_0 = applyArgumentsResult;
  applyArgumentsResult.maybeLoadKrisp = asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj6 = { value, done: true };
        return obj6;
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
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            if (applyArgumentsResult.isPastConnectionOpen) {
              if (state.getState() === constants.ACTIVE) {
                const obj10 = tmp2(19941);
                let hasOnDemandResourceResult;
                if (obj10 != null) {
                  hasOnDemandResourceResult = obj10.hasOnDemandResource("krisp");
                }
                if (hasOnDemandResourceResult) {
                  applyArgumentsResult.restoreAutoThreshold();
                } else if (!applyArgumentsResult.hasFetchedKrisp) {
                  applyArgumentsResult.hasFetchedKrisp = true;
                  if (modeOptions.getModeOptions().autoThreshold) {
                    const Storage = tmp5(510).Storage;
                    const result = Storage.set(constants2.RESTORE_AUTO_THRESHOLD_KEY, true);
                    tmp2(6047).setMode(modeOptions.getMode(), { autoThreshold: false });
                    const obj4 = tmp2(6047);
                  }
                  const obj5 = tmp2(19941);
                  let onDemandResource;
                  if (obj5 != null) {
                    onDemandResource = obj5.fetchOnDemandResource("krisp");
                  }
                  dependencyMap = 1;
                  c3 = 1;
                  const obj8 = { value: onDemandResource, done: false };
                  return obj8;
                }
              }
            }
            c3 = 3;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_128_0 = value;
          let result1;
          const obj9 = tmp2(19941);
          if (obj9 != null) {
            result1 = obj9.isOnDemandResourcingAvailable();
          }
          closure_128_1 = result1;
          if (!closure_128_0) {
            if (closure_128_1) {
              closure_129_0.hasFetchedKrisp = false;
            }
          }
        }
        closure_129_0.restoreAutoThreshold();
      } catch (tmp30) {
        c3 = tmp;
        throw tmp30;
      }
    }
  });
  applyArgumentsResult.restoreAutoThreshold = function restoreAutoThreshold() {
    const Storage = applyArgumentsResult(dependencyMap[6]).Storage;
    if (true === Storage.get(constants.RESTORE_AUTO_THRESHOLD_KEY)) {
      const Storage2 = applyArgumentsResult(dependencyMap[6]).Storage;
      Storage2.remove(constants.RESTORE_AUTO_THRESHOLD_KEY);
      if (!modeOptions.getModeOptions().autoThreshold) {
        AudioActionCreatorsDefault.setMode(modeOptions.getMode(), { autoThreshold: true });
      }
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
prototype.RESTORE_AUTO_THRESHOLD_KEY = "KrispOnDemandRestoreAutoThreshold";
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/native_on_demand/native/NativeOnDemandResourceManager.android.tsx");

export default prototype1;
