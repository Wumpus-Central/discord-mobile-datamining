// === Module 19381: passThrough ===

// Module 19381 (passThrough)
import size from "module_2" /* 2 */;

function passThrough(arg0) {
  return arg0;
}
const result = size.fileFinishedImporting("../discord_common/js/packages/embedded-app-shims/src/shared/safe/passThrough.tsx");

export function protectPrototype() {
  return passThrough;
}
export function protectWindow() {
  return passThrough;
}
export function protectStatics(Math) {
  return globalThis[Math];
}
export function protectConstructors() {
  return globalThis;
}
export function asIterable(items) {
  return items;
}