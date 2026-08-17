// discord_app/modules/activities/utils/getEmbeddedActivitiesManager.native.tsx
import set from "../../../../_runtime/00002_set.js";
import { postMessageToWebView } from "../native/EmbeddedActivitiesNativeManager.tsx";

const result = set.fileFinishedImporting("modules/activities/utils/getEmbeddedActivitiesManager.native.tsx");

export default function getEmbeddedActivitiesManager() {
  return postMessageToWebView;
};