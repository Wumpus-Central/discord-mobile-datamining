// _runtime/metro/00002__.js
const set = new Set();

export const clear = function clear() {
  set.clear();
};
export const size = function size() {
  return set.size;
};
export const fileFinishedImporting = function fileFinishedImporting(arg0) {
  set.add(arg0);
};
