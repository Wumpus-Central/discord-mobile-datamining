import { postMessageToWebView } from "../native/FramesNativeManager.tsx";
// discord_app/modules/frames/utils/getFramesManager.native.tsx
const result = require("set").fileFinishedImporting("modules/frames/utils/getFramesManager.native.tsx");

export default function getFramesManager() {
  return postMessageToWebView;
};