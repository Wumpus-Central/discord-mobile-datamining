// discord_app/modules/telemetry_ring/native/TelemetryRingLifecycle.tsx
import dispatcherDefault from "dispatcher" /* 709 */;
import initializeDefault from "initialize" /* 4720 */;
import getHermesInstrumentedStatsSummaryDefault from "getHermesInstrumentedStatsSummary" /* 5422 */;
import shouldRunDefault from "shouldRun" /* 13558 */;
import closure_2 from "initialize" /* 1212 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;
import closure_4 from "getState" /* 7383 */;
import { AppStates } from "ME" /* 676 */;

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
      applyArgumentsResult(13562).clear();
      const obj = applyArgumentsResult(13562);
      applyArgumentsResult(13558).reset();
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
    let tmp6Result = tmp6(13558);
    tmp6Result.start();
  } else {
    tmp6Result = tmp6(13558);
    tmp6Result.stop();
  }
};
prototype["_initialize"] = function _initialize() {
  let self = this;
  self = this;
  if (!this._initialized) {
    self._initialized = true;
    const subscription = self(709).subscribe("LOGOUT", self._handleLogout);
    closure_4.addChangeListener(self._handleEligibilityChange);
    closure_3.addChangeListener(self._handleEligibilityChange);
    closure_2.addChangeListener(self._handleEligibilityChange);
    self._experimentUnsubscribe = () => {
      closure_1_2.removeChangeListener(self._handleEligibilityChange);
    };
    const obj = self(709);
    self(13558).initialize();
    const result = self._updateZoomedInExport();
    const obj2 = self(13558);
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
  let tmpResult = tmp(13558);
  tmpResult.stop();
  tmpResult = tmp(5422);
  const result1 = tmpResult.setShouldCollectHermesInstrumentedStats(false);
  self._initialized = false;
};
const telemetryRingLifecycleImpl = new TelemetryRingLifecycleImpl();
let result = require("set").fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingLifecycle.tsx");

export default telemetryRingLifecycleImpl;