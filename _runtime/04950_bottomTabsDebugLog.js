// _runtime/04950_bottomTabsDebugLog.js
let c0 = false;

export const bottomTabsDebugLog = function bottomTabsDebugLog() {
  const items = [...arguments];
  if (c0) {
    const _console = console;
    const items1 = [];
    HermesBuiltin.arraySpread(items, 0);
    const _console2 = console;
    HermesBuiltin.apply(items1, console);
  }
};
export function internalEnableDetailedBottomTabsLogging() {
  c0 = true;
}
