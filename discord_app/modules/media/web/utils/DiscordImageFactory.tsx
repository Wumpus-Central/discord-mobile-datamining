// discord_app/modules/media/web/utils/DiscordImageFactory.tsx
import detectFile from "../../../../../_runtime/05490_detectFile.js";
import DiscordImagePng2 from "DiscordImagePng.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/media/web/utils/DiscordImageFactory.tsx");
const prototype = function DiscordImageFactory() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["create"] = function create(byteLength) {
  const uint8Array = new Uint8Array(byteLength, 0, Math.min(64, byteLength.byteLength));
  const detectFileResult = detectFile.detectFile(uint8Array);
  let mimeType;
  if (detectFileResult != null) {
    mimeType = detectFileResult.mimeType;
  }
  let obj2 = null;
  if ("image/png" === mimeType) {
    const DiscordImagePng = DiscordImagePng2.DiscordImagePng;
    obj2 = DiscordImagePng.create(byteLength);
  }
  return obj2;
};

export const DiscordImageFactory = prototype;
