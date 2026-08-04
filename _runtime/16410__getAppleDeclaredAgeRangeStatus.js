import importDefaultResult from "module_16413";
import { Platform } from "get ActivityIndicator";
import { NitroModules } from "module_4017";

let closure_0 = arg1;
function _getAppleDeclaredAgeRangeStatus() {
  const self = this;
  const tmp = importDefaultResult(function*() {
    const ageRangeThresholdManager = v0(table[3]).ageRangeThresholdManager;
    const thresholds = ageRangeThresholdManager.getThresholds();
    yield outer1_3.requestDeclaredAgeRange(thresholds[0], thresholds[1], thresholds[2]);
    return arg1;
  });
  const _getAppleDeclaredAgeRangeStatus = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function getAndroidPlayAgeRangeStatus() {
  const self = this;
  const apply = _getAndroidPlayAgeRangeStatus.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getAndroidPlayAgeRangeStatus() {
  const self = this;
  const tmp = importDefaultResult(function*() {
    yield outer1_3.getPlayAgeRangeDeclaration();
    return arg1;
  });
  const _getAndroidPlayAgeRangeStatus = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_3 = NitroModules.createHybridObject("PlayAgeRangeDeclaration");
closure_0 = importDefaultResult((arg0) => {
  let closure_0 = arg0;
  let c3 = 0;
  let c4 = 0;
  return (function*(arg0) {
    let closure_2 = tmp5;
    let closure_1 = tmp2;
    closure_1 = yield outer1_5();
    const obj = callback(outer1_1[4]);
    return obj.getIsConsideredOlderThanAndroid(closure_1, callback);
  })();
});

export const getAppleDeclaredAgeRangeStatus = function getAppleDeclaredAgeRangeStatus() {
  const self = this;
  const apply = _getAppleDeclaredAgeRangeStatus.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { getAndroidPlayAgeRangeStatus };
export const setAgeRangeThresholds = (arg0) => {
  const ageRangeThresholdManager = callback(16411).ageRangeThresholdManager;
  const result = ageRangeThresholdManager.setAgeRangeThresholds(arg0);
};
export const getIsConsideredOlderThan = function getIsConsideredOlderThan(arg0) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const PlayAgeRangeDeclarationUserStatus = require("module_16413").PlayAgeRangeDeclarationUserStatus;
export const PlayAgeRangeDeclarationUserStatusString = require("module_16413").PlayAgeRangeDeclarationUserStatusString;