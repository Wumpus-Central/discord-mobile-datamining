// discord_app/modules/user_profile/WidgetAssetUtils.tsx
import { DEFAULT_CDN_HOST } from "ME";

const result = require("set").fileFinishedImporting("modules/user_profile/WidgetAssetUtils.tsx");

export const getWidgetAssetURL = function getWidgetAssetURL(userId, fileId) {
  if (CDN_HOST == null) {
    CDN_HOST = DEFAULT_CDN_HOST;
  }
  return "https://" + CDN_HOST + "/widget-assets/" + userId + "/" + fileId;
};