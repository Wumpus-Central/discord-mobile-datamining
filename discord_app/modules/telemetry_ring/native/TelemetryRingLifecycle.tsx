// discord_app/modules/telemetry_ring/native/TelemetryRingLifecycle.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import ProcessUtilsDefault from "../../../utils/ProcessUtils.native.tsx";
import ZoomedInTelemetryDefault from "channels/ZoomedInTelemetry.tsx";
import ApexExperimentStore from "../../experiments/apex/ApexExperimentStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";
import LifecycleManager from "../../../lib/LifecycleManager.tsx";

const AppStates = fn(1074).AppStates;
class TelemetryRingLifecycleImpl extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult._initialized = false;
    applyArgumentsResult._experimentUnsubscribe = null;
    applyArgumentsResult._handleEligibilityChange = function _handleEligibilityChange() {
      const result = applyArgumentsResult._updateZoomedInExport();
    };
    applyArgumentsResult._handleLogout = function _handleLogout() {
      applyArgumentsResult(1903).clear();
      const obj = applyArgumentsResult(1903);
      applyArgumentsResult(1899).reset();
    };
    return applyArgumentsResult;
  }
}
const prototype = TelemetryRingLifecycleImpl.prototype;
prototype["_updateZoomedInExport"] = function _updateZoomedInExport() {
  const state = AppStateStore.getState();
  let shouldRunResult = state === AppStates.ACTIVE;
  if (shouldRunResult) {
    shouldRunResult = ZoomedInTelemetryDefault.shouldRun();
  }
  const result = ProcessUtilsDefault.setShouldCollectHermesInstrumentedStats(shouldRunResult);
  if (state === AppStates.ACTIVE) {
    let tmp6Result = ZoomedInTelemetryDefault;
    tmp6Result.start();
  } else {
    tmp6Result = ZoomedInTelemetryDefault;
    tmp6Result.stop();
  }
};
prototype["_initialize"] = function _initialize() {
  const self = this;
  if (!this._initialized) {
    self._initialized = true;
    const subscription = self(573).subscribe("LOGOUT", self._handleLogout);
    AppStateStore.addChangeListener(self._handleEligibilityChange);
    UserStore.addChangeListener(self._handleEligibilityChange);
    ApexExperimentStore.addChangeListener(self._handleEligibilityChange);
    self._experimentUnsubscribe = () => {
      ApexExperimentStore.removeChangeListener(self._handleEligibilityChange);
    };
    const obj = self(573);
    self(1899).initialize();
    const result = self._updateZoomedInExport();
    const obj2 = self(1899);
  }
};
prototype["_terminate"] = function _terminate() {
  const self = this;
  DispatcherDefault.unsubscribe("LOGOUT", this._handleLogout);
  AppStateStore.removeChangeListener(this._handleEligibilityChange);
  UserStore.removeChangeListener(this._handleEligibilityChange);
  if (null != this._experimentUnsubscribe) {
    const result = self._experimentUnsubscribe();
    self._experimentUnsubscribe = null;
  }
  let tmpResult = ZoomedInTelemetryDefault;
  tmpResult.stop();
  tmpResult = ProcessUtilsDefault;
  const result1 = tmpResult.setShouldCollectHermesInstrumentedStats(false);
  self._initialized = false;
};
const telemetryRingLifecycleImpl = new TelemetryRingLifecycleImpl();
const size = fn(2);
let result = size.fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingLifecycle.tsx");

export default telemetryRingLifecycleImpl;
