// === Module 5352: DiscordImageFactory ===

// Module 5352 (DiscordImageFactory)
import detectFile from "detectFile" /* 5353 */;
import DiscordImagePng2 from "DiscordImagePng" /* 5380 */;
import size from "module_2" /* 2 */;

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