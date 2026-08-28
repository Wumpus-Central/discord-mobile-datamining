// === Module 7441: DeviceState ===

// Module 7441 (DeviceState)
import set from "set" /* 2 */;
import _getDeviceState from "_getDeviceState" /* 7442 */;
import ThermalState from "ThermalState" /* 7443 */;

const result = set.fileFinishedImporting("modules/device/DeviceState.tsx");

export const DeviceState = ThermalState.DeviceState;
export const ThermalState = ThermalState.ThermalState;
export const getDeviceState = _getDeviceState.getDeviceState;
export const logDeviceState = function logDeviceState(thermalState) {
  if (null !== thermalState) {
    const logger2 = _getDeviceState.logger;
    logger2.info("Device State Information:");
    const logger3 = _getDeviceState.logger;
    const _HermesInternal = HermesInternal;
    logger3.info("- Thermal State: " + thermalState.thermalState);
    const logger4 = _getDeviceState.logger;
    const _HermesInternal2 = HermesInternal;
    logger4.info("- Battery Level: " + 100 * thermalState.batteryLevel + "%");
    const logger5 = _getDeviceState.logger;
    let str6 = "Disabled";
    if (thermalState.isLowPowerMode) {
      str6 = "Enabled";
    }
    logger5.info(`- Low Power Mode: ${str6}`);
  } else {
    const logger = _getDeviceState.logger;
    logger.info("Device state not available");
  }
};