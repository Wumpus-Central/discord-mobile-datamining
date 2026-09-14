// discord_app/modules/device/constants/DeviceState.tsx
import size from "../../../../_runtime/metro/00002__.js";

const obj = { NOMINAL: "NOMINAL", FAIR: "FAIR", SERIOUS: "SERIOUS", CRITICAL: "CRITICAL", UNKNOWN: "UNKNOWN" };
const result = size.fileFinishedImporting("modules/device/constants/DeviceState.tsx");

export const ThermalState = obj;
export const DEFAULT_DEVICE_STATE = { thermalState: obj.UNKNOWN, batteryLevel: 1, isLowPowerMode: false };
