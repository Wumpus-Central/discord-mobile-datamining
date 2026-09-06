// _runtime/metro/01661__.js
function isWorkletFunction(onUpdate) {
  let __workletHash = typeof onUpdate === "function";
  if (typeof onUpdate === "function") {
    __workletHash = onUpdate.__workletHash;
  }
  return __workletHash;
}
isWorkletFunction.__closure = {};
isWorkletFunction.__workletHash = 327007448384;
isWorkletFunction.__initData = {
  code: "function isWorkletFunction_Pnpm_commonTypesTs1(value){return(typeof value==='function'&&!!value.__workletHash);}",
};

export const LayoutAnimationType = {
  ENTERING: 1,
  [1]: "ENTERING",
  EXITING: 2,
  [2]: "EXITING",
  LAYOUT: 3,
  [3]: "LAYOUT",
  SHARED_ELEMENT_TRANSITION: 4,
  [4]: "SHARED_ELEMENT_TRANSITION",
  SHARED_ELEMENT_TRANSITION_PROGRESS: 5,
  [5]: "SHARED_ELEMENT_TRANSITION_PROGRESS",
};
export const SharedTransitionType = { ANIMATION: "animation", PROGRESS_ANIMATION: "progressAnimation" };
export { isWorkletFunction };
export const SensorType = {
  ACCELEROMETER: 1,
  [1]: "ACCELEROMETER",
  GYROSCOPE: 2,
  [2]: "GYROSCOPE",
  GRAVITY: 3,
  [3]: "GRAVITY",
  MAGNETIC_FIELD: 4,
  [4]: "MAGNETIC_FIELD",
  ROTATION: 5,
  [5]: "ROTATION",
};
export const IOSReferenceFrame = {
  XArbitraryZVertical: 0,
  [0]: "XArbitraryZVertical",
  XArbitraryCorrectedZVertical: 1,
  [1]: "XArbitraryCorrectedZVertical",
  XMagneticNorthZVertical: 2,
  [2]: "XMagneticNorthZVertical",
  XTrueNorthZVertical: 3,
  [3]: "XTrueNorthZVertical",
  Auto: 4,
  [4]: "Auto",
};
export const InterfaceOrientation = {
  ROTATION_0: 0,
  [0]: "ROTATION_0",
  ROTATION_90: 90,
  [90]: "ROTATION_90",
  ROTATION_180: 180,
  [180]: "ROTATION_180",
  ROTATION_270: 270,
  [270]: "ROTATION_270",
};
export const KeyboardState = {
  UNKNOWN: 0,
  [0]: "UNKNOWN",
  OPENING: 1,
  [1]: "OPENING",
  OPEN: 2,
  [2]: "OPEN",
  CLOSING: 3,
  [3]: "CLOSING",
  CLOSED: 4,
  [4]: "CLOSED",
};
export const ReduceMotion = { System: "system", Always: "always", Never: "never" };
