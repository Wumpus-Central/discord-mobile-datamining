// === Module 17565: NativeOnDemandResourceManager ===

// Module 17565 (NativeOnDemandResourceManager)
import Constants from "Constants" /* 1085 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9306 */;
import react_nativeDefault from "react-native" /* 17566 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import AppStateStore from "AppStateStore" /* 1986 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
import size from "module_2" /* 2 */;

let importDefault;

const AppStates = Constants.AppStates;
class NativeOnDemandResourceManager extends AutomaticLifecycleManager {
  constructor() {
    let state;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    importDefault = applyArgumentsResult;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
        return importDefault.handlePostConnectionOpen();
      },
      APP_STATE_UPDATE() {
        return importDefault.handleAppStateUpdate();
      }
    };
    applyArgumentsResult.isPastConnectionOpen = false;
    applyArgumentsResult.hasFetchedKrisp = false;
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      importDefault.isPastConnectionOpen = true;
      importDefault.maybeLoadKrisp();
    };
    applyArgumentsResult.handleAppStateUpdate = function handleAppStateUpdate() {
      importDefault.maybeLoadKrisp();
    };
    applyArgumentsResult.maybeLoadKrisp = function maybeLoadKrisp() {
      let mode;
      if (mode.isPastConnectionOpen) {
        if (state.getState() === constants.ACTIVE) {
          const obj3 = react_nativeDefault;
          let hasOnDemandResourceResult;
          if (obj3 != null) {
            hasOnDemandResourceResult = obj3.hasOnDemandResource("krisp");
          }
          if (!hasOnDemandResourceResult) {
            if (!mode.hasFetchedKrisp) {
              mode.hasFetchedKrisp = true;
              mode = MediaEngineStore.getMode();
              const autoThreshold = MediaEngineStore.getModeOptions().autoThreshold;
              const tmp9Result = AudioActionCreatorsDefault;
              tmp9Result.setMode(mode, { autoThreshold: false });
              const tmp9Result2 = react_nativeDefault;
              if (tmp9Result2 != null) {
                const onDemandResource = tmp9Result2.fetchOnDemandResource("krisp");
                if (onDemandResource != null) {
                  onDemandResource.then((result) => {
                    const obj = react_nativeDefault;
                    if (obj != null) {
                      result = obj.isOnDemandResourcingAvailable();
                    }
                    const tmp4 = result;
                    if (!tmp4) {
                      if (result) {
                        importDefault.hasFetchedKrisp = false;
                      }
                    }
                    const obj2 = { autoThreshold };
                    const tmpResult = AudioActionCreatorsDefault;
                    tmpResult.setMode(mode, obj2);
                  });
                }
              }
            }
          }
        }
      }
    };
    return applyArgumentsResult;
  }
}
const nativeOnDemandResourceManager = new NativeOnDemandResourceManager();
let result = size.fileFinishedImporting("modules/native_on_demand/native/NativeOnDemandResourceManager.android.tsx");

export default nativeOnDemandResourceManager;