// === Module 1235: telemetry_ring/TelemetryRingLifecycle ===

// Module 1235 (telemetry_ring/TelemetryRingLifecycle)
import DispatcherDefault from "Dispatcher" /* 573 */;
import ProcessUtilsDefault from "ProcessUtils" /* 1359 */;
import ZoomedInTelemetryDefault from "ZoomedInTelemetry" /* 1899 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1236 */;
import UserStore from "UserStore" /* 1371 */;
import AppStateStore from "AppStateStore" /* 1895 */;
import LifecycleManager from "LifecycleManager" /* 1898 */;

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
    let tmp6Result = tmp6(1899);
    tmp6Result.start();
  } else {
    tmp6Result = tmp6(1899);
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
  let tmpResult = tmp(1899);
  tmpResult.stop();
  tmpResult = tmp(1359);
  const result1 = tmpResult.setShouldCollectHermesInstrumentedStats(false);
  self._initialized = false;
};
const telemetryRingLifecycleImpl = new TelemetryRingLifecycleImpl();
const size = fn(2);
let result = size.fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingLifecycle.tsx");

export default telemetryRingLifecycleImpl;