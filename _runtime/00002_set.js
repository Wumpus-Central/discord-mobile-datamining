// _runtime/00002_set.js
const set = new Set();
arg5.clear = function clear() {
  set.clear();
};
arg5.size = function size() {
  return set.size;
};
arg5.fileFinishedImporting = function fileFinishedImporting(arg0) {
  set.add(arg0);
};
