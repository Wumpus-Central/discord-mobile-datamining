// === Module 5252: imageFilename ===

// Module 5252 (imageFilename)
import size from "module_2" /* 2 */;

const set = new Set(["image/heic", "image/heif", "image/heic-sequence", "image/heif-sequence"]);
const set1 = new Set([".heic", ".heif", ".hif"]);
const re2 = /\.(heic|heif|hif)$/i;
const set2 = new Set(["image/jxr", "image/vnd.ms-photo"]);
const set3 = new Set([".jxr", ".wdp", ".hdp"]);
const re5 = /\.(jxr|wdp|hdp)$/i;
const result = size.fileFinishedImporting("lib/uploader/imageFilename.tsx");

export const isHeicFile = function isHeicFile(type) {
  if (set.has(type.type)) {
    return true;
  } else {
    let str = "";
    if (typeof type.name === "string") {
      str = type.name;
    }
    const lastIndexOfResult = str.lastIndexOf(".");
    let formatted = null;
    if (lastIndexOfResult >= 0) {
      formatted = str.slice(lastIndexOfResult).toLowerCase();
      const str3 = str.slice(lastIndexOfResult);
    }
    let hasItem = null != formatted;
    if (hasItem) {
      hasItem = set1.has(formatted);
    }
    return hasItem;
  }
};
export const isJxrFile = function isJxrFile(file) {
  if (set2.has(file.type)) {
    return true;
  } else {
    let str = "";
    if (typeof file.name === "string") {
      str = file.name;
    }
    const lastIndexOfResult = str.lastIndexOf(".");
    let formatted = null;
    if (lastIndexOfResult >= 0) {
      formatted = str.slice(lastIndexOfResult).toLowerCase();
      const str3 = str.slice(lastIndexOfResult);
    }
    let hasItem = null != formatted;
    if (hasItem) {
      hasItem = set3.has(formatted);
    }
    return hasItem;
  }
};
export const heicMimeType = function heicMimeType(type) {
  let str = "";
  if ("" !== type.type) {
    let str3 = type.type;
  } else {
    if (typeof type.name === "string") {
      str = type.name;
    }
    const formatted = str.toLowerCase();
    str3 = "image/heif";
    if (formatted.endsWith(".heic")) {
      str3 = "image/heic";
    }
  }
  return str3;
};
export const jxrMimeType = function jxrMimeType(type) {
  let str = "image/jxr";
  if ("" !== type.type) {
    str = type.type;
  }
  return str;
};
export const renameToJpegExtension = function renameToJpegExtension(name) {
  if (re2.test(name)) {
    let replaced = name.replace(re2, ".jpg");
  } else if (re5.test(name)) {
    replaced = name.replace(re5, ".jpg");
  } else {
    const _HermesInternal = HermesInternal;
    replaced = "" + name + ".jpg";
  }
  return replaced;
};