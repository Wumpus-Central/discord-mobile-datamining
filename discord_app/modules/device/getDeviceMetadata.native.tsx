// discord_app/modules/device/getDeviceMetadata.native.tsx
const result = require("set").fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  return require("../tti_analytics/native/TTIAnalyticsUtils.tsx") /* getDeviceMetadata */.getDeviceMetadata();
};