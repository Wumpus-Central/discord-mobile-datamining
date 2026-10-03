// === Module 1245: telemetry_ring/TelemetryRingLifecycle ===

// Module 1245 (telemetry_ring/TelemetryRingLifecycle)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ProcessUtilsDefault from "ProcessUtils" /* 1363 */;
import ZoomedInTelemetryDefault from "ZoomedInTelemetry" /* 1990 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import UserStore from "UserStore" /* 1377 */;
import AppStateStore from "AppStateStore" /* 1986 */;
import LifecycleManager from "LifecycleManager" /* 1989 */;

const AppStates = fn(1085).AppStates;
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
      applyArgumentsResult(1994).clear();
      const obj = applyArgumentsResult(1994);
      applyArgumentsResult(1990).reset();
    };
    return applyArgumentsResult;
  }
}
const prototype = TelemetryRingLifecycleImpl.prototype;
prototype["_updateZoomedInExport"] = function _updateZoomedInExport() {
  state = AppStateStore.getState();
  let shouldRunResult = state === AppStates.ACTIVE;
  if (shouldRunResult) {
    shouldRunResult = ZoomedInTelemetryDefault.shouldRun();
  }
  const result = ProcessUtilsDefault.setShouldCollectHermesInstrumentedStats(shouldRunResult);
  if (state === AppStates.ACTIVE) {
    ZoomedInTelemetryDefault.start();
    const tmp6Result = ZoomedInTelemetryDefault;
  } else {
    ZoomedInTelemetryDefault.stop();
    const tmp6Result2 = ZoomedInTelemetryDefault;
  }
};
prototype["_initialize"] = function _initialize() {
  const self = this;
  if (!this._initialized) {
    self._initialized = true;
    const subscription = self(584).subscribe("LOGOUT", self._handleLogout);
    AppStateStore.addChangeListener(self._handleEligibilityChange);
    UserStore.addChangeListener(self._handleEligibilityChange);
    ApexExperimentStore.addChangeListener(self._handleEligibilityChange);
    self._experimentUnsubscribe = () => {
      ApexExperimentStore.removeChangeListener(self._handleEligibilityChange);
    };
    const obj = self(584);
    self(1990).initialize();
    const result = self._updateZoomedInExport();
    const obj2 = self(1990);
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
  ZoomedInTelemetryDefault.stop();
  const tmpResult = ZoomedInTelemetryDefault;
  const result1 = ProcessUtilsDefault.setShouldCollectHermesInstrumentedStats(false);
  self._initialized = false;
  const tmpResult2 = ProcessUtilsDefault;
};
const telemetryRingLifecycleImpl = new TelemetryRingLifecycleImpl();
const size = fn(2);
let result = size.fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingLifecycle.tsx");

export default telemetryRingLifecycleImpl;