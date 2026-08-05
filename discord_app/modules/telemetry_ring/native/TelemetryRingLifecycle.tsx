// discord_app/modules/telemetry_ring/native/TelemetryRingLifecycle.tsx
import initialize from "initialize";
import mergeGuildAvatar from "mergeGuildAvatar";
import getState from "getState";
import { AppStates } from "ME";
import "initialize";

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
      applyArgumentsResult(13366).clear();
      const obj = applyArgumentsResult(13366);
      applyArgumentsResult(13362).reset();
    };
    return applyArgumentsResult;
  }
}
const prototype = TelemetryRingLifecycleImpl.prototype;
prototype["_updateZoomedInExport"] = function _updateZoomedInExport() {
  const state = getState.getState();
  let shouldRunResult = state === AppStates.ACTIVE;
  if (shouldRunResult) {
    shouldRunResult = importDefault(13362).shouldRun();
    const obj = importDefault(13362);
  }
  const result = importDefault(7055).setShouldCollectHermesInstrumentedStats(shouldRunResult);
  if (state === AppStates.ACTIVE) {
    let tmp6Result = tmp6(13362);
    tmp6Result.start();
  } else {
    tmp6Result = tmp6(13362);
    tmp6Result.stop();
  }
};
prototype["_initialize"] = function _initialize() {
  let self = this;
  self = this;
  if (!this._initialized) {
    self._initialized = true;
    const subscription = self(709).subscribe("LOGOUT", self._handleLogout);
    getState.addChangeListener(self._handleEligibilityChange);
    mergeGuildAvatar.addChangeListener(self._handleEligibilityChange);
    initialize.addChangeListener(self._handleEligibilityChange);
    self._experimentUnsubscribe = () => {
      outer1_2.removeChangeListener(self._handleEligibilityChange);
    };
    const obj = self(709);
    self(13362).initialize();
    const result = self._updateZoomedInExport();
    const obj2 = self(13362);
  }
};
prototype["_terminate"] = function _terminate() {
  const self = this;
  importDefault(709).unsubscribe("LOGOUT", this._handleLogout);
  getState.removeChangeListener(this._handleEligibilityChange);
  mergeGuildAvatar.removeChangeListener(this._handleEligibilityChange);
  if (null != this._experimentUnsubscribe) {
    const result = self._experimentUnsubscribe();
    self._experimentUnsubscribe = null;
  }
  let tmpResult = tmp(13362);
  tmpResult.stop();
  tmpResult = tmp(7055);
  const result1 = tmpResult.setShouldCollectHermesInstrumentedStats(false);
  self._initialized = false;
};
const telemetryRingLifecycleImpl = new TelemetryRingLifecycleImpl();
let result = require("getState").fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingLifecycle.tsx");

export default telemetryRingLifecycleImpl;