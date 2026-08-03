function isWorkletFunction(__workletHash) {
  __workletHash = typeof __workletHash === "fileFinishedImporting";
  if (typeof __workletHash !== "disabledUntil") {
    __workletHash = __workletHash.__workletHash;
  }
  return __workletHash;
}
isWorkletFunction.__closure = {};
isWorkletFunction.__workletHash = 327007448384;
isWorkletFunction.__initData = { code: "function isWorkletFunction_Pnpm_commonTypesTs1(value){return(typeof value==='function'&&!!value.__workletHash);}" };
arg5.LayoutAnimationType = { ENTERING: 1, [1]: "ENTERING", EXITING: 2, [2]: "EXITING", LAYOUT: 3, [3]: "LAYOUT", SHARED_ELEMENT_TRANSITION: 4, [4]: "SHARED_ELEMENT_TRANSITION", SHARED_ELEMENT_TRANSITION_PROGRESS: 5, [5]: "SHARED_ELEMENT_TRANSITION_PROGRESS" };
arg5.SharedTransitionType = { ANIMATION: "animation", PROGRESS_ANIMATION: "progressAnimation" };
arg5.isWorkletFunction = isWorkletFunction;
arg5.SensorType = { ACCELEROMETER: 1, [1]: "ACCELEROMETER", GYROSCOPE: 2, [2]: "GYROSCOPE", GRAVITY: 3, [3]: "GRAVITY", MAGNETIC_FIELD: 4, [4]: "MAGNETIC_FIELD", ROTATION: 5, [5]: "ROTATION" };
arg5.IOSReferenceFrame = { XArbitraryZVertical: 0, [0]: "XArbitraryZVertical", XArbitraryCorrectedZVertical: 1, [1]: "XArbitraryCorrectedZVertical", XMagneticNorthZVertical: 2, [2]: "XMagneticNorthZVertical", XTrueNorthZVertical: 3, [3]: "XTrueNorthZVertical", Auto: 4, [4]: "Auto" };
arg5.InterfaceOrientation = { ROTATION_0: 0, [0]: "ROTATION_0", ROTATION_90: 90, [90]: "ROTATION_90", ROTATION_180: 180, [180]: "ROTATION_180", ROTATION_270: 270, [270]: "ROTATION_270" };
arg5.KeyboardState = { UNKNOWN: 0, [0]: "UNKNOWN", OPENING: 1, [1]: "OPENING", OPEN: 2, [2]: "OPEN", CLOSING: 3, [3]: "CLOSING", CLOSED: 4, [4]: "CLOSED" };
arg5.ReduceMotion = { System: "system", Always: "always", Never: "never" };