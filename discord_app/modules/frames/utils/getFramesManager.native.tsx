// discord_app/modules/frames/utils/getFramesManager.native.tsx
import set from "set" /* 2 */;
import { postMessageToWebView } from "../native/FramesNativeManager.tsx";

const result = set.fileFinishedImporting("modules/frames/utils/getFramesManager.native.tsx");

export default function getFramesManager() {
  return postMessageToWebView;
};