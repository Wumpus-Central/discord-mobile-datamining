// === Module 16342: prototype ===

// Module 16342 (prototype)
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import getState from "getState";
import { AppStates } from "ME";
import "initialize";

let prototype = function NativeOnDemandResourceManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const importDefault = applyArgumentsResult;
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
      if (outer1_3.getState() === outer1_4.ACTIVE) {
        const obj3 = applyArgumentsResult(outer1_1[4]);
        let hasOnDemandResourceResult;
        if (obj3 != null) {
          hasOnDemandResourceResult = obj3.hasOnDemandResource("krisp");
        }
        if (!hasOnDemandResourceResult) {
          if (!tmp.hasFetchedKrisp) {
            tmp.hasFetchedKrisp = true;
            mode = outer1_2.getMode();
            const autoThreshold = outer1_2.getModeOptions().autoThreshold;
            let tmp9Result = tmp9(tmp10[5]);
            tmp9Result.setMode(mode, { autoThreshold: false });
            tmp9Result = tmp9(tmp10[4]);
            if (tmp9Result != null) {
              const onDemandResource = tmp9Result.fetchOnDemandResource("krisp");
              if (onDemandResource != null) {
                onDemandResource.then((arg0) => {
                  let obj = applyArgumentsResult(outer2_1[4]);
                  if (obj != null) {
                    const result = obj.isOnDemandResourcingAvailable();
                  }
                  if (!arg0) {
                    if (result) {
                      mode.hasFetchedKrisp = false;
                    }
                  }
                  obj = { autoThreshold };
                  applyArgumentsResult(outer2_1[5]).setMode(mode, obj);
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
let result = require("ME").fileFinishedImporting("modules/native_on_demand/native/NativeOnDemandResourceManager.android.tsx");

export default prototype;