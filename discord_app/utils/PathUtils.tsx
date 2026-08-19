// discord_app/utils/PathUtils.tsx
import obj132 from "../../_runtime/00002_obj132.js";

const result = obj132.fileFinishedImporting("utils/PathUtils.tsx");

export const pathJoin = function pathJoin(closure_1, closure_15) {
  const items = [...arguments];
  let str = "/";
  if (obj.isWindows()) {
    str = "\\";
  }
  const found = items.filter((item, index) => item.length > 0);
  return found.join(str);
};
export const pathBasename = function pathBasename(str) {
  let arr = str;
  const parts = str.split(/[/\\]/);
  if ("" !== parts[parts.length - 1]) {
    arr = parts[parts.length - 1];
  }
  let substr = arr;
  if (tmp) {
    substr = arr.slice(0, -arg1.length);
  }
  return substr;
};
export const pathFilenameWithoutExt = function pathFilenameWithoutExt(str) {
  let arr = str;
  const parts = str.split(/[/\\]/);
  if ("" !== parts[parts.length - 1]) {
    arr = parts[parts.length - 1];
  }
  const lastIndexOfResult = arr.lastIndexOf(".");
  let substr = arr;
  if (lastIndexOfResult > 0) {
    substr = arr.slice(0, lastIndexOfResult);
  }
  return substr;
};