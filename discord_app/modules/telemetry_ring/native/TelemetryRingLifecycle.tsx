// discord_app/modules/telemetry_ring/native/TelemetryRingLifecycle.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import Constants from "../../../Constants.tsx";
import ProcessUtilsDefault from "../../../utils/ProcessUtils.native.tsx";
import ZoomedInTelemetryDefault from "channels/ZoomedInTelemetry.tsx";
import TelemetryRingNativeDefault from "TelemetryRingNative.android.tsx";
import ApexExperimentStore from "../../experiments/apex/ApexExperimentStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";
import LifecycleManager from "../../../lib/LifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let importDefault;

const AppStates = Constants.AppStates;
class TelemetryRingLifecycleImpl extends LifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    importDefault = applyArgumentsResult;
    applyArgumentsResult._initialized = false;
    applyArgumentsResult._experimentUnsubscribe = null;
    applyArgumentsResult._handleEligibilityChange = function _handleEligibilityChange() {
      const result = importDefault._updateZoomedInExport();
    };
    applyArgumentsResult._handleLogout = function _handleLogout() {
      const obj = TelemetryRingNativeDefault;
      obj.clear();
      const obj2 = ZoomedInTelemetryDefault;
      obj2.reset();
    };
    return applyArgumentsResult;
  }
  _updateZoomedInExport() {
    const state = AppStateStore.getState();
    let shouldRunResult = state === AppStates.ACTIVE;
    if (shouldRunResult) {
      const obj = ZoomedInTelemetryDefault;
      shouldRunResult = obj.shouldRun();
    }
    const obj2 = ProcessUtilsDefault;
    const result = obj2.setShouldCollectHermesInstrumentedStats(shouldRunResult);
    if (state === AppStates.ACTIVE) {
      const tmp6Result = ZoomedInTelemetryDefault;
      tmp6Result.start();
    } else {
      const tmp6Result2 = ZoomedInTelemetryDefault;
      tmp6Result2.stop();
    }
  }
  _initialize() {
    const self = this;
    if (!this._initialized) {
      self._initialized = true;
      const obj = self(584);
      const subscription = obj.subscribe("LOGOUT", self._handleLogout);
      AppStateStore.addChangeListener(self._handleEligibilityChange);
      UserStore.addChangeListener(self._handleEligibilityChange);
      ApexExperimentStore.addChangeListener(self._handleEligibilityChange);
      self._experimentUnsubscribe = () => {
        ApexExperimentStore.removeChangeListener(self._handleEligibilityChange);
      };
      const obj2 = self(1990);
      obj2.initialize();
      const result = self._updateZoomedInExport();
    }
  }
  _terminate() {
    const self = this;
    const obj = DispatcherDefault;
    obj.unsubscribe("LOGOUT", this._handleLogout);
    AppStateStore.removeChangeListener(this._handleEligibilityChange);
    UserStore.removeChangeListener(this._handleEligibilityChange);
    if (null != this._experimentUnsubscribe) {
      const result = self._experimentUnsubscribe();
      self._experimentUnsubscribe = null;
    }
    const tmpResult = ZoomedInTelemetryDefault;
    tmpResult.stop();
    const tmpResult2 = ProcessUtilsDefault;
    const result1 = tmpResult2.setShouldCollectHermesInstrumentedStats(false);
    self._initialized = false;
  }
}
const prototype = TelemetryRingLifecycleImpl.prototype;
const telemetryRingLifecycleImpl = new TelemetryRingLifecycleImpl();
let result = size.fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingLifecycle.tsx");

export default telemetryRingLifecycleImpl;
