// === Module 5171: set ===

// Module 5171 (set)
import set from "set" /* 2 */;

let set = new Set(["image/heic", "image/heif", "image/heic-sequence", "image/heif-sequence"]);
const set1 = new Set([".heic", ".heif", ".hif"]);
const re2 = /\.(heic|heif|hif)$/i;
const result = set.fileFinishedImporting("lib/uploader/heicFilename.tsx");

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
export const heicMimeType = function heicMimeType(file) {
  if ("" !== file.type) {
    let str3 = file.type;
  } else {
    const formatted = file.name.toLowerCase();
    str3 = "image/heif";
    if (formatted.endsWith(".heic")) {
      str3 = "image/heic";
    }
    const str = file.name;
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