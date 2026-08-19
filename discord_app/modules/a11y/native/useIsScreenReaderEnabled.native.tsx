// === Module 4721: SCREEN_READER_ENABLED_GETTER ===

// Module 4721 (SCREEN_READER_ENABLED_GETTER)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import keys from "keys" /* 644 */;

const AccessibilityInfo = get_ActivityIndicator.AccessibilityInfo;
function SCREEN_READER_ENABLED_GETTER(screenReaderEnabled) {
  return screenReaderEnabled.screenReaderEnabled;
}
let screenReaderEnabled = "screenReaderEnabled";
let closure_5 = keys.create((arg0) => {
  const _require = arg0;
  function updateScreenReaderEnabled(event) {
    const callback = event;
    callback(dependencyMap[3]).batchUpdates(() => callback((screenReaderEnabled) => {
      let tmp = screenReaderEnabled;
      if (screenReaderEnabled.screenReaderEnabled !== closure_0) {
        const Storage = callback(closure_2_1[1]).Storage;
        const result = Storage.set(closure_2_4, closure_0);
        const obj = { screenReaderEnabled: null };
        obj[0] = closure_0;
        tmp = obj;
      }
      return tmp;
    }));
  }
  let result = AccessibilityInfo.isScreenReaderEnabled();
  result.then(updateScreenReaderEnabled).catch((error) => {
    c0 = false;
    callback(dependencyMap[3]).batchUpdates(() => callback((screenReaderEnabled) => {
      let tmp = screenReaderEnabled;
      if (screenReaderEnabled.screenReaderEnabled !== closure_0) {
        const Storage = callback(closure_2_1[1]).Storage;
        const result = Storage.set(closure_2_4, closure_0);
        const obj = { screenReaderEnabled: null };
        obj[0] = closure_0;
        tmp = obj;
      }
      return tmp;
    }));
  });
  const listener = AccessibilityInfo.addEventListener("screenReaderChanged", updateScreenReaderEnabled);
  let Storage = _require(595).Storage;
  screenReaderEnabled = Storage.get(screenReaderEnabled);
  if (screenReaderEnabled == null) {
    screenReaderEnabled = false;
  }
  return { screenReaderEnabled };
});
let result = obj132.fileFinishedImporting("modules/a11y/native/useIsScreenReaderEnabled.native.tsx");

export const addScreenReaderEnabledListener = function addScreenReaderEnabledListener(arg0) {
  closure_0 = arg0;
  return lib.subscribe((screenReaderEnabled) => {
    callback(screenReaderEnabled.screenReaderEnabled);
  });
};
export const getIsScreenReaderEnabled = function getIsScreenReaderEnabled() {
  return lib.getState().screenReaderEnabled;
};
export const useIsScreenReaderEnabled = function useIsScreenReaderEnabled() {
  return lib(SCREEN_READER_ENABLED_GETTER);
};