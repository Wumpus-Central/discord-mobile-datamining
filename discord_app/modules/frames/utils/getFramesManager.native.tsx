// discord_app/modules/frames/utils/getFramesManager.native.tsx
import { postMessageToWebView } from "../native/FramesNativeManager.tsx";
const result = require("set").fileFinishedImporting("modules/frames/utils/getFramesManager.native.tsx");

export default function getFramesManager() {
  return postMessageToWebView;
};