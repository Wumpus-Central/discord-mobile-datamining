// discord_app/modules/activities/utils/getEmbeddedActivitiesManager.native.tsx
import set from "set" /* 2 */;
import { postMessageToWebView } from "../native/EmbeddedActivitiesNativeManager.tsx";

const result = set.fileFinishedImporting("modules/activities/utils/getEmbeddedActivitiesManager.native.tsx");

export default function getEmbeddedActivitiesManager() {
  return postMessageToWebView;
};