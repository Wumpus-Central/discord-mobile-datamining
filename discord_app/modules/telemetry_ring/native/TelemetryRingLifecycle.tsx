// discord_app/modules/telemetry_ring/native/TelemetryRingLifecycle.tsx
import dispatcherDefault from "../../../Dispatcher.tsx";
import initializeDefault from "../../../lib/LifecycleManager.tsx";
import getHermesInstrumentedStatsSummaryDefault from "../../../utils/ProcessUtils.native.tsx";
import shouldRunDefault from "channels/ZoomedInTelemetry.tsx";
import closure_2 from "../../experiments/apex/ApexExperimentStore.tsx";
import closure_3 from "../../../stores/UserStore.tsx";
import closure_4 from "../../../stores/native/AppStateStore.tsx";
import { AppStates } from "../../../Constants.tsx";

initializeDefault;
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
      applyArgumentsResult(14080).clear();
      const obj = applyArgumentsResult(14080);
      applyArgumentsResult(14076).reset();
    };
    return applyArgumentsResult;
  }
}
const prototype = TelemetryRingLifecycleImpl.prototype;
prototype["_updateZoomedInExport"] = function _updateZoomedInExport() {
  const state = closure_4.getState();
  let shouldRunResult = state === AppStates.ACTIVE;
  if (shouldRunResult) {
    shouldRunResult = shouldRunDefault.shouldRun();
    const obj = shouldRunDefault;
  }
  const result = getHermesInstrumentedStatsSummaryDefault.setShouldCollectHermesInstrumentedStats(shouldRunResult);
  if (state === AppStates.ACTIVE) {
    let tmp6Result = tmp6(14076);
    tmp6Result.start();
  } else {
    tmp6Result = tmp6(14076);
    tmp6Result.stop();
  }
};
prototype["_initialize"] = function _initialize() {
  let self = this;
  self = this;
  if (!this._initialized) {
    self._initialized = true;
    const subscription = self(706).subscribe("LOGOUT", self._handleLogout);
    closure_4.addChangeListener(self._handleEligibilityChange);
    closure_3.addChangeListener(self._handleEligibilityChange);
    closure_2.addChangeListener(self._handleEligibilityChange);
    self._experimentUnsubscribe = () => {
      closure_1_2.removeChangeListener(self._handleEligibilityChange);
    };
    const obj = self(706);
    self(14076).initialize();
    const result = self._updateZoomedInExport();
    const obj2 = self(14076);
  }
};
prototype["_terminate"] = function _terminate() {
  const self = this;
  dispatcherDefault.unsubscribe("LOGOUT", this._handleLogout);
  closure_4.removeChangeListener(this._handleEligibilityChange);
  closure_3.removeChangeListener(this._handleEligibilityChange);
  if (null != this._experimentUnsubscribe) {
    const result = self._experimentUnsubscribe();
    self._experimentUnsubscribe = null;
  }
  let tmpResult = tmp(14076);
  tmpResult.stop();
  tmpResult = tmp(7429);
  const result1 = tmpResult.setShouldCollectHermesInstrumentedStats(false);
  self._initialized = false;
};
const telemetryRingLifecycleImpl = new TelemetryRingLifecycleImpl();
let result = require("set").fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingLifecycle.tsx");

export default telemetryRingLifecycleImpl;
