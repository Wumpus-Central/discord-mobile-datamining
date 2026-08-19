// discord_app/modules/native_on_demand/native/NativeOnDemandResourceManager.android.tsx
import initializeDefault from "../../../lib/AutomaticLifecycleManager.tsx";
import _detectH265HardwareDecode from "../../../stores/MediaEngineStore.tsx";
import getState from "../../../stores/native/AppStateStore.tsx";
import { AppStates } from "../../../Constants.tsx";

initializeDefault;
let prototype = function NativeOnDemandResourceManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  importDefault = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handlePostConnectionOpen();
    },
    APP_STATE_UPDATE() {
      return applyArgumentsResult.handleAppStateUpdate();
    }
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
  applyArgumentsResult.maybeLoadKrisp = function maybeLoadKrisp() {
    if (mode.isPastConnectionOpen) {
      if (closure_1_3.getState() === AppStates.ACTIVE) {
        const obj3 = applyArgumentsResult(dependencyMap[4]);
        let hasOnDemandResourceResult;
        if (obj3 != null) {
          hasOnDemandResourceResult = obj3.hasOnDemandResource("krisp");
        }
        if (!hasOnDemandResourceResult) {
          if (!tmp.hasFetchedKrisp) {
            tmp.hasFetchedKrisp = true;
            mode = closure_1_2.getMode();
            const autoThreshold = closure_1_2.getModeOptions().autoThreshold;
            let tmp9Result = applyArgumentsResult(dependencyMap[5]);
            tmp9Result.setMode(mode, { autoThreshold: false });
            tmp9Result = applyArgumentsResult(dependencyMap[4]);
            if (tmp9Result != null) {
              const onDemandResource = tmp9Result.fetchOnDemandResource("krisp");
              if (onDemandResource != null) {
                onDemandResource.then((result) => {
                  let obj = applyArgumentsResult(dependencyMap[4]);
                  if (obj != null) {
                    result = obj.isOnDemandResourcingAvailable();
                  }
                  if (!result) {
                    if (result) {
                      mode.hasFetchedKrisp = false;
                    }
                  }
                  obj = { autoThreshold };
                  applyArgumentsResult(dependencyMap[5]).setMode(mode, obj);
                  const tmpResult = applyArgumentsResult(dependencyMap[5]);
                });
              }
            }
          }
        }
      }
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = require("obj132").fileFinishedImporting("modules/native_on_demand/native/NativeOnDemandResourceManager.android.tsx");

export default prototype;