// === Module 5777: useIsScreenReaderEnabled ===

// Module 5777 (useIsScreenReaderEnabled)
import react_native from "react-native" /* 17 */;
import module_570 from "module_570" /* 570 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const AccessibilityInfo = react_native.AccessibilityInfo;
function SCREEN_READER_ENABLED_GETTER(screenReaderEnabled) {
  return screenReaderEnabled.screenReaderEnabled;
}
let screenReaderEnabled = "screenReaderEnabled";
let closure_5 = module_570.create((arg0) => {
  _require = arg0;
  function updateScreenReaderEnabled(event) {
    closure_0 = event;
    const obj = closure_0(dependencyMap[3]);
    obj.batchUpdates(() => _false((screenReaderEnabled) => {
      let tmp = screenReaderEnabled;
      if (screenReaderEnabled.screenReaderEnabled !== _false) {
        const Storage = closure_0(dependencyMap[1]).Storage;
        const result = Storage.set(screenReaderEnabled, _false);
        tmp = { screenReaderEnabled: _false };
        const obj = { screenReaderEnabled: _false };
      }
      return tmp;
    }));
  }
  let result = AccessibilityInfo.isScreenReaderEnabled();
  const nextPromise = result.then(updateScreenReaderEnabled);
  nextPromise.catch(() => {
    let c0 = false;
    let obj = _false(dependencyMap[3]);
    obj.batchUpdates(() => _false((screenReaderEnabled) => {
      let tmp = screenReaderEnabled;
      if (screenReaderEnabled.screenReaderEnabled !== _false) {
        const Storage = closure_0(dependencyMap[1]).Storage;
        const result = Storage.set(screenReaderEnabled, _false);
        tmp = { screenReaderEnabled: _false };
        const obj = { screenReaderEnabled: _false };
      }
      return tmp;
    }));
  });
  const listener = AccessibilityInfo.addEventListener("screenReaderChanged", updateScreenReaderEnabled);
  let Storage = require("Storage").Storage;
  screenReaderEnabled = Storage.get(screenReaderEnabled);
  if (screenReaderEnabled == null) {
    screenReaderEnabled = false;
  }
  return { screenReaderEnabled };
});
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/a11y/native/useIsScreenReaderEnabled.native.tsx");

export const addScreenReaderEnabledListener = function addScreenReaderEnabledListener(arg0) {
  let closure_0 = arg0;
  return closure_5.subscribe((screenReaderEnabled) => {
    closure_0(screenReaderEnabled.screenReaderEnabled);
  });
};
export const getIsScreenReaderEnabled = function getIsScreenReaderEnabled() {
  return closure_5.getState().screenReaderEnabled;
};
export const useIsScreenReaderEnabled = () => closure_5(SCREEN_READER_ENABLED_GETTER);