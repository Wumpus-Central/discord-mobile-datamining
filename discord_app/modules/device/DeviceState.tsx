// discord_app/modules/device/DeviceState.tsx
const result = require("ThermalState").fileFinishedImporting("modules/device/DeviceState.tsx");

export const DeviceState = require("ThermalState").DeviceState;
export const ThermalState = require("ThermalState").ThermalState;
export const getDeviceState = require("_getDeviceState").getDeviceState;
export const logDeviceState = function logDeviceState(thermalState) {
  if (null !== thermalState) {
    const logger2 = require("native/DeviceState.tsx") /* _getDeviceState */.logger;
    logger2.info("Device State Information:");
    const logger3 = require("native/DeviceState.tsx") /* _getDeviceState */.logger;
    const _HermesInternal = HermesInternal;
    logger3.info("- Thermal State: " + thermalState.thermalState);
    const logger4 = require("native/DeviceState.tsx") /* _getDeviceState */.logger;
    const _HermesInternal2 = HermesInternal;
    logger4.info("- Battery Level: " + 100 * thermalState.batteryLevel + "%");
    const logger5 = require("native/DeviceState.tsx") /* _getDeviceState */.logger;
    let str6 = "Disabled";
    if (thermalState.isLowPowerMode) {
      str6 = "Enabled";
    }
    logger5.info(`- Low Power Mode: ${str6}`);
  } else {
    const logger = require("native/DeviceState.tsx") /* _getDeviceState */.logger;
    logger.info("Device state not available");
  }
};