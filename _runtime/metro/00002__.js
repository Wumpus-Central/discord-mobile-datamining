// _runtime/metro/00002__.js
const set = new Set();

export function clear() {
  set.clear();
}
export function size() {
  return set.size;
}
export function fileFinishedImporting(arg0) {
  set.add(arg0);
}
