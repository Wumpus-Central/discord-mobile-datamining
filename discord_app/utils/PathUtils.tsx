// discord_app/utils/PathUtils.tsx
const result = require("set").fileFinishedImporting("utils/PathUtils.tsx");

export const pathJoin = function pathJoin(closure_1, closure_13) {
  const items = [...arguments];
  let str = "/";
  if (obj.isWindows()) {
    str = "\\";
  }
  const found = items.filter((arg0) => arg0.length > 0);
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