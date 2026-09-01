// === Module 17008: prototype ===

// Module 17008 (prototype)
import initializeDefault from "initialize" /* 5486 */;
import closure_2 from "_detectH265HardwareDecode" /* 4529 */;
import closure_3 from "getState" /* 7157 */;
import { AppStates } from "ME" /* 676 */;

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
      if (closure_1_3.getState() === closure_1_4.ACTIVE) {
        const obj3 = applyArgumentsResult(closure_1_1[4]);
        let hasOnDemandResourceResult;
        if (obj3 != null) {
          hasOnDemandResourceResult = obj3.hasOnDemandResource("krisp");
        }
        if (!hasOnDemandResourceResult) {
          if (!tmp.hasFetchedKrisp) {
            tmp.hasFetchedKrisp = true;
            mode = closure_1_2.getMode();
            const autoThreshold = closure_1_2.getModeOptions().autoThreshold;
            let tmp9Result = tmp9(tmp10[5]);
            tmp9Result.setMode(mode, { autoThreshold: false });
            tmp9Result = tmp9(tmp10[4]);
            if (tmp9Result != null) {
              const onDemandResource = tmp9Result.fetchOnDemandResource("krisp");
              if (onDemandResource != null) {
                onDemandResource.then((arg0) => {
                  let obj = applyArgumentsResult(closure_2_1[4]);
                  if (obj != null) {
                    const result = obj.isOnDemandResourcingAvailable();
                  }
                  if (!arg0) {
                    if (result) {
                      mode.hasFetchedKrisp = false;
                    }
                  }
                  obj = { autoThreshold };
                  applyArgumentsResult(closure_2_1[5]).setMode(mode, obj);
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
let result = require("set").fileFinishedImporting("modules/native_on_demand/native/NativeOnDemandResourceManager.android.tsx");

export default prototype;