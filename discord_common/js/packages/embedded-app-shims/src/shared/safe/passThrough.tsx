// discord_common/js/packages/embedded-app-shims/src/shared/safe/passThrough.tsx
import size from "../../../../../../../_runtime/metro/00002__.js";

function passThrough(arg0) {
  return arg0;
}
const result = size.fileFinishedImporting(
  "../discord_common/js/packages/embedded-app-shims/src/shared/safe/passThrough.tsx",
);

export function protectPrototype() {
  return passThrough;
}
export function protectWindow() {
  return passThrough;
}
export const protectStatics = function protectStatics(Math) {
  return globalThis[Math];
};
export const protectConstructors = function protectConstructors() {
  return globalThis;
};
export function asIterable(items) {
  return items;
}
