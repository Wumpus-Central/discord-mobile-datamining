// discord_app/modules/media/web/utils/DiscordImageFactory.tsx
import detectFile from "../../../../../_runtime/05183_detectFile.js";
import DiscordImagePng2 from "DiscordImagePng.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/media/web/utils/DiscordImageFactory.tsx");
const prototype = function DiscordImageFactory() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["create"] = function create(byteLength) {
  const uint8Array = new Uint8Array(byteLength, 0, Math.min(64, byteLength.byteLength));
  let obj = detectFile;
  const detectFileResult = obj.detectFile(uint8Array);
  let mimeType;
  if (detectFileResult != null) {
    mimeType = detectFileResult.mimeType;
  }
  obj = null;
  if ("image/png" === mimeType) {
    const DiscordImagePng = DiscordImagePng2.DiscordImagePng;
    obj = DiscordImagePng.create(byteLength);
  }
  return obj;
};

export const DiscordImageFactory = prototype;
