// discord_app/modules/frames/utils/getFramesManager.native.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import { postMessageToWebView } from "../native/FramesNativeManager.tsx";

const result = obj132.fileFinishedImporting("modules/frames/utils/getFramesManager.native.tsx");

export default function getFramesManager() {
  return postMessageToWebView;
};