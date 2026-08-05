// discord_app/modules/device/getMediaPerformanceClass.android.tsx
const result = require("set").fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return require(4265) /* DCDDeviceManager */.getDeviceMediaPerformanceClass();
};