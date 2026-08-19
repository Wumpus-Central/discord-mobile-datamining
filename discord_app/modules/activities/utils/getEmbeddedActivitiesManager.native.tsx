// discord_app/modules/activities/utils/getEmbeddedActivitiesManager.native.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import { postMessageToWebView } from "../native/EmbeddedActivitiesNativeManager.tsx";

const result = obj132.fileFinishedImporting("modules/activities/utils/getEmbeddedActivitiesManager.native.tsx");

export default function getEmbeddedActivitiesManager() {
  return postMessageToWebView;
};