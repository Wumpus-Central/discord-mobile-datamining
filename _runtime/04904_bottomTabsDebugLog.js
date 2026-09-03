// _runtime/04904_bottomTabsDebugLog.js
let c0 = false;
arg5.bottomTabsDebugLog = function bottomTabsDebugLog(arg0) {
  const items = [...arguments];
  if (c0) {
    const _console = console;
    const items1 = [];
    HermesBuiltin.arraySpread(items, 0);
    const _console2 = console;
    HermesBuiltin.apply(items1, console);
  }
};
arg5.internalEnableDetailedBottomTabsLogging = function internalEnableDetailedBottomTabsLogging() {
  c0 = true;
};
