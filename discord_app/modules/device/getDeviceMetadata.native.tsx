// discord_app/modules/device/getDeviceMetadata.native.tsx
import TTIAnalyticsUtils from "../tti_analytics/native/TTIAnalyticsUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  return TTIAnalyticsUtils.getDeviceMetadata();
}
