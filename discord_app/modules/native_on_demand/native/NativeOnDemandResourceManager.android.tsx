// discord_app/modules/native_on_demand/native/NativeOnDemandResourceManager.android.tsx
import AudioActionCreatorsDefault from "../../../actions/AudioActionCreators.tsx";
import NativeOnDemandResourceModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeOnDemandResourceModule.tsx";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

const AppStates = fn(1074).AppStates;
let prototype = function NativeOnDemandResourceManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  importDefault = applyArgumentsResult;
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
  applyArgumentsResult.maybeLoadKrisp = function maybeLoadKrisp() {
    if (mode.isPastConnectionOpen) {
      if (state.getState() === constants.ACTIVE) {
        const obj3 = applyArgumentsResult(dependencyMap[4]);
        let hasOnDemandResourceResult;
        if (obj3 != null) {
          hasOnDemandResourceResult = obj3.hasOnDemandResource("krisp");
        }
        if (!hasOnDemandResourceResult) {
          if (!tmp.hasFetchedKrisp) {
            tmp.hasFetchedKrisp = true;
            mode = MediaEngineStore.getMode();
            const autoThreshold = MediaEngineStore.getModeOptions().autoThreshold;
            let tmp9Result = tmp9(tmp10[5]);
            tmp9Result.setMode(mode, { autoThreshold: false });
            tmp9Result = tmp9(tmp10[4]);
            if (tmp9Result != null) {
              const onDemandResource = tmp9Result.fetchOnDemandResource("krisp");
              if (onDemandResource != null) {
                onDemandResource.then((result) => {
                  let obj = NativeOnDemandResourceModuleDefault;
                  if (obj != null) {
                    result = obj.isOnDemandResourcingAvailable();
                  }
                  if (!result) {
                    if (result) {
                      applyArgumentsResult.hasFetchedKrisp = false;
                    }
                  }
                  obj = { autoThreshold };
                  AudioActionCreatorsDefault.setMode(mode, obj);
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
class prototype extends tmp2 {}
prototype = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/native_on_demand/native/NativeOnDemandResourceManager.android.tsx");

export default prototype;
