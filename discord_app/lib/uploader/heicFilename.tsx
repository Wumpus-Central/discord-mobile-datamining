// === Module 5062: set ===

// Module 5062 (set)
import set from "set" /* 2 */;

let set = new Set(["image/heic", "image/heif", "image/heic-sequence", "image/heif-sequence"]);
const set1 = new Set([".heic", ".heif", ".hif"]);
const re2 = /\.(heic|heif|hif)$/i;
const result = set.fileFinishedImporting("lib/uploader/heicFilename.tsx");

export const isHeicFile = function isHeicFile(type) {
  if (set.has(type.type)) {
    return true;
  } else {
    let name = type.name;
    const lastIndexOfResult = name.lastIndexOf(".");
    let hasItem = lastIndexOfResult >= 0;
    if (hasItem) {
      name = type.name;
      hasItem = set1.has(name.slice(lastIndexOfResult).toLowerCase());
      const str2 = name.slice(lastIndexOfResult);
    }
    return hasItem;
  }
};
export const heicMimeType = function heicMimeType(c7) {
  if ("" !== c7.type) {
    let str3 = c7.type;
  } else {
    const formatted = c7.name.toLowerCase();
    str3 = "image/heif";
    if (formatted.endsWith(".heic")) {
      str3 = "image/heic";
    }
    const str = c7.name;
  }
  return str3;
};
export const renameToJpegExtension = function renameToJpegExtension(name) {
  if (regex.test(name)) {
    let replaced = name.replace(regex, ".jpg");
  } else {
    const _HermesInternal = HermesInternal;
    replaced = "" + name + ".jpg";
  }
  return replaced;
};