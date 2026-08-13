// discord_app/lib/uploader/createCloudUploader.native.tsx
import { nativeEventEmitter } from "native/CloudUploader.tsx";
const result = require("set").fileFinishedImporting("lib/uploader/createCloudUploader.native.tsx");

export const createCloudUploader = function createCloudUploader() {
  return new nativeEventEmitter();
};