// _runtime/00134_COMPOSED_PATH_KEY.js
const SymbolResult = Symbol("composedPath");
const SymbolResult1 = Symbol("currentTarget");
const SymbolResult2 = Symbol("eventPhase");
const SymbolResult3 = Symbol("inPassiveListenerFlag");
const SymbolResult4 = Symbol("isTrusted");
const SymbolResult5 = Symbol("stopPropagationFlag");
const SymbolResult6 = Symbol("stopPropagationFlag");
const SymbolResult7 = Symbol("target");
const SymbolResult8 = Symbol("eventInitTimestamp");

export const COMPOSED_PATH_KEY = SymbolResult;
export const CURRENT_TARGET_KEY = SymbolResult1;
export const EVENT_PHASE_KEY = SymbolResult2;
export const IN_PASSIVE_LISTENER_FLAG_KEY = SymbolResult3;
export const IS_TRUSTED_KEY = SymbolResult4;
export const STOP_IMMEDIATE_PROPAGATION_FLAG_KEY = SymbolResult5;
export const STOP_PROPAGATION_FLAG_KEY = SymbolResult6;
export const TARGET_KEY = SymbolResult7;
export const EVENT_INIT_TIMESTAMP_KEY = SymbolResult8;
export const getCurrentTarget = function getCurrentTarget(arg0) {
  return arg0[SymbolResult1];
};
export const setCurrentTarget = function setCurrentTarget(arg0, arg1) {
  arg0[SymbolResult1] = arg1;
};
export const getComposedPath = function getComposedPath(arg0) {
  return arg0[SymbolResult];
};
export const setComposedPath = function setComposedPath(bubbles, arr) {
  bubbles[SymbolResult] = arr;
};
export const getEventPhase = function getEventPhase(arg0) {
  return arg0[SymbolResult2];
};
export const setEventPhase = function setEventPhase(arg0, arg1) {
  arg0[SymbolResult2] = arg1;
};
export const getInPassiveListenerFlag = function getInPassiveListenerFlag(self) {
  return self[SymbolResult3];
};
export const setInPassiveListenerFlag = function setInPassiveListenerFlag(arg0, arg1) {
  arg0[SymbolResult3] = arg1;
};
export const getIsTrusted = function getIsTrusted(arg0) {
  return arg0[SymbolResult4];
};
export const setIsTrusted = function setIsTrusted(defaultPrevented, arg1) {
  defaultPrevented[SymbolResult4] = arg1;
};
export const getStopImmediatePropagationFlag = function getStopImmediatePropagationFlag(arg0) {
  return arg0[SymbolResult5];
};
export const setStopImmediatePropagationFlag = function setStopImmediatePropagationFlag(bubbles, arg1) {
  bubbles[SymbolResult5] = arg1;
};
export const getStopPropagationFlag = function getStopPropagationFlag(bubbles) {
  return bubbles[SymbolResult6];
};
export const setStopPropagationFlag = function setStopPropagationFlag(bubbles, arg1) {
  bubbles[SymbolResult6] = arg1;
};
export const getTarget = function getTarget(arg0) {
  return arg0[SymbolResult7];
};
export const setTarget = function setTarget(bubbles, self) {
  bubbles[SymbolResult7] = self;
};
export const setEventInitTimeStamp = function setEventInitTimeStamp(arg0, timeStamp) {
  if (typeof timeStamp === "number") {
    arg0[SymbolResult8] = timeStamp;
  }
};
