// discord_app/modules/device/DeviceState.tsx
import device_DeviceState from "native/DeviceState.tsx";
import constants_DeviceState from "constants/DeviceState.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/device/DeviceState.tsx");

export const DeviceState = constants_DeviceState.DeviceState;
export const ThermalState = constants_DeviceState.ThermalState;
export const getDeviceState = device_DeviceState.getDeviceState;
export const logDeviceState = function logDeviceState(thermalState) {
  if (null !== thermalState) {
    const logger2 = device_DeviceState.logger;
    logger2.info("Device State Information:");
    const logger3 = device_DeviceState.logger;
    const _HermesInternal = HermesInternal;
    logger3.info("- Thermal State: " + thermalState.thermalState);
    const logger4 = device_DeviceState.logger;
    const _HermesInternal2 = HermesInternal;
    logger4.info("- Battery Level: " + 100 * thermalState.batteryLevel + "%");
    const logger5 = device_DeviceState.logger;
    let str6 = "Disabled";
    if (thermalState.isLowPowerMode) {
      str6 = "Enabled";
    }
    logger5.info(`- Low Power Mode: ${str6}`);
  } else {
    const logger = device_DeviceState.logger;
    logger.info("Device state not available");
  }
};
