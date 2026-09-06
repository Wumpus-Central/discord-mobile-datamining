// _runtime/00106_weakSet.js
const weakSet = new WeakSet();

export const DynamicallyInjectedByGestureHandler = function DynamicallyInjectedByGestureHandler(arg0) {
  weakSet.add(arg0);
  return arg0;
};
export function ConditionallyIgnoredEventHandlers(arg0) {}
export const isIgnored = function isIgnored(obj) {
  let hasItem = typeof obj === "object";
  if (typeof obj === "object") {
    hasItem = null != obj;
  }
  if (hasItem) {
    hasItem = weakSet.has(obj);
  }
  return hasItem;
};
