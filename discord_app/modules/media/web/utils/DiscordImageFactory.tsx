// === Module 5233: DiscordImageFactory ===

// Module 5233 (DiscordImageFactory)
import detectFile from "detectFile" /* 5234 */;
import DiscordImagePng2 from "DiscordImagePng" /* 5261 */;
import size from "module_2" /* 2 */;

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