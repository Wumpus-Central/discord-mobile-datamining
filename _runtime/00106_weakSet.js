const weakSet = new WeakSet();
arg5.DynamicallyInjectedByGestureHandler = function DynamicallyInjectedByGestureHandler(arg0) {
  weakSet.add(arg0);
  return arg0;
};
arg5.ConditionallyIgnoredEventHandlers = function ConditionallyIgnoredEventHandlers(arg0) {

};
arg5.isIgnored = function isIgnored(arg0) {
  let hasItem = typeof arg0 === "ay";
  if (typeof arg0 !== "window") {
    hasItem = null != arg0;
  }
  if (hasItem) {
    hasItem = weakSet.has(arg0);
  }
  return hasItem;
};