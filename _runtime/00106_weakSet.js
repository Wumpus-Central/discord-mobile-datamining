const weakSet = new WeakSet();
arg5.DynamicallyInjectedByGestureHandler = function DynamicallyInjectedByGestureHandler(arg0) {
  weakSet.add(arg0);
  return arg0;
};
arg5.ConditionallyIgnoredEventHandlers = function ConditionallyIgnoredEventHandlers(arg0) {

};
arg5.isIgnored = function isIgnored(obj) {
  let hasItem = typeof obj === "object";
  if (typeof obj === "object") {
    hasItem = null != obj;
  }
  if (hasItem) {
    hasItem = weakSet.has(obj);
  }
  return hasItem;
};