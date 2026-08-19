// === Module 7499: ThermalState ===

// Module 7499 (ThermalState)
import obj132 from "obj132" /* 2 */;

let obj = { NOMINAL: "NOMINAL", FAIR: "FAIR", SERIOUS: "SERIOUS", CRITICAL: "CRITICAL", UNKNOWN: "UNKNOWN" };
obj = { thermalState: obj.UNKNOWN, batteryLevel: 1, isLowPowerMode: false };
const result = obj132.fileFinishedImporting("modules/device/constants/DeviceState.tsx");

export const ThermalState = obj;
export const DEFAULT_DEVICE_STATE = obj;