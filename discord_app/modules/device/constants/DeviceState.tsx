// === Module 7165: constants/DeviceState ===

// Module 7165 (constants/DeviceState)
import size from "module_2" /* 2 */;

const obj = { NOMINAL: "NOMINAL", FAIR: "FAIR", SERIOUS: "SERIOUS", CRITICAL: "CRITICAL", UNKNOWN: "UNKNOWN" };
const result = size.fileFinishedImporting("modules/device/constants/DeviceState.tsx");

export const ThermalState = obj;
export const DEFAULT_DEVICE_STATE = { thermalState: obj.UNKNOWN, batteryLevel: 1, isLowPowerMode: false };