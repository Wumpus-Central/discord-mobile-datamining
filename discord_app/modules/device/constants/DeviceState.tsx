// === Module 7255: constants/DeviceState ===

// Module 7255 (constants/DeviceState)
import size from "module_2" /* 2 */;

const obj = { NOMINAL: "NOMINAL", FAIR: "FAIR", SERIOUS: "SERIOUS", CRITICAL: "CRITICAL", UNKNOWN: "UNKNOWN" };
const obj2 = { thermalState: obj.UNKNOWN, batteryLevel: 1, isLowPowerMode: false };
const result = size.fileFinishedImporting("modules/device/constants/DeviceState.tsx");

export const ThermalState = obj;
export const DEFAULT_DEVICE_STATE = obj2;