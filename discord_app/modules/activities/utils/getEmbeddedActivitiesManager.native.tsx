// discord_app/modules/activities/utils/getEmbeddedActivitiesManager.native.tsx
import { postMessageToWebView } from "../native/EmbeddedActivitiesNativeManager.tsx";
const result = require("set").fileFinishedImporting("modules/activities/utils/getEmbeddedActivitiesManager.native.tsx");

export default function getEmbeddedActivitiesManager() {
  return postMessageToWebView;
};