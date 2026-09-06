// discord_app/lib/uploader/heicFilename.tsx
import size from "../../../_runtime/metro/00002__.js";

const set = new Set(["image/heic", "image/heif", "image/heic-sequence", "image/heif-sequence"]);
const set1 = new Set([".heic", ".heif", ".hif"]);
const re2 = /\.(heic|heif|hif)$/i;
const result = size.fileFinishedImporting("lib/uploader/heicFilename.tsx");

export const isHeicFile = function isHeicFile(type) {
  if (set.has(type.type)) {
    return true;
  } else {
    let str = "";
    if (typeof type.name === "string") {
      str = type.name;
    }
    const lastIndexOfResult = str.lastIndexOf(".");
    let hasItem = lastIndexOfResult >= 0;
    if (hasItem) {
      hasItem = set1.has(str.slice(lastIndexOfResult).toLowerCase());
      const str3 = str.slice(lastIndexOfResult);
    }
    return hasItem;
  }
};
export const heicMimeType = function heicMimeType(type) {
  if ("" !== type.type) {
    let str3 = type.type;
  } else {
    const formatted = type.name.toLowerCase();
    str3 = "image/heif";
    if (formatted.endsWith(".heic")) {
      str3 = "image/heic";
    }
  }
  return str3;
};
export const renameToJpegExtension = function renameToJpegExtension(name) {
  if (re2.test(name)) {
    let replaced = name.replace(re2, ".jpg");
  } else {
    const _HermesInternal = HermesInternal;
    replaced = "" + name + ".jpg";
  }
  return replaced;
};
