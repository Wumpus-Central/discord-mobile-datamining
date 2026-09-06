// discord_app/modules/device/constants/DeviceState.tsx
import size from "../../../../_runtime/metro/00002__.js";

let obj = { NOMINAL: "NOMINAL", FAIR: "FAIR", SERIOUS: "SERIOUS", CRITICAL: "CRITICAL", UNKNOWN: "UNKNOWN" };
obj = { thermalState: obj.UNKNOWN, batteryLevel: 1, isLowPowerMode: false };
const result = size.fileFinishedImporting("modules/device/constants/DeviceState.tsx");

export const ThermalState = obj;
export const DEFAULT_DEVICE_STATE = obj;
