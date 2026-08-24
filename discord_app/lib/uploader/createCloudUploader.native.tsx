// discord_app/lib/uploader/createCloudUploader.native.tsx
import set from "../../../_runtime/00002_set.js";
import nativeEventEmitterDefault from "native/CloudUploader.tsx";

const result = set.fileFinishedImporting("lib/uploader/createCloudUploader.native.tsx");

export const createCloudUploader = function createCloudUploader() {
  return new nativeEventEmitterDefault();
};