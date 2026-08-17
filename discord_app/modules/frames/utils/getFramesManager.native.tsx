// discord_app/modules/frames/utils/getFramesManager.native.tsx
import set from "../../../../_runtime/00002_set.js";
import { postMessageToWebView } from "../native/FramesNativeManager.tsx";

const result = set.fileFinishedImporting("modules/frames/utils/getFramesManager.native.tsx");

export default function getFramesManager() {
  return postMessageToWebView;
};