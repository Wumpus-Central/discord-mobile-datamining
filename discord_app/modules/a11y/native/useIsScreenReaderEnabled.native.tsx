// === Module 4915: SCREEN_READER_ENABLED_GETTER ===

// Module 4915 (SCREEN_READER_ENABLED_GETTER)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import keys from "keys" /* 641 */;

const AccessibilityInfo = get_ActivityIndicator.AccessibilityInfo;
function SCREEN_READER_ENABLED_GETTER(screenReaderEnabled) {
  return screenReaderEnabled.screenReaderEnabled;
}
let screenReaderEnabled = "screenReaderEnabled";
let closure_5 = keys.create((arg0) => {
  const _require = arg0;
  function updateScreenReaderEnabled(arg0) {
    const callback = arg0;
    callback(closure_1_1[3]).batchUpdates(() => callback((screenReaderEnabled) => {
      let tmp = screenReaderEnabled;
      if (screenReaderEnabled.screenReaderEnabled !== closure_0) {
        const Storage = callback(closure_2_1[1]).Storage;
        const result = Storage.set(closure_2_4, tmp2);
        const obj = { screenReaderEnabled: null };
        obj[0] = tmp2;
        tmp = obj;
      }
      return tmp;
    }));
  }
  let result = AccessibilityInfo.isScreenReaderEnabled();
  result.then(updateScreenReaderEnabled).catch(() => {
    c0 = false;
    callback(closure_1_1[3]).batchUpdates(() => callback((screenReaderEnabled) => {
      let tmp = screenReaderEnabled;
      if (screenReaderEnabled.screenReaderEnabled !== closure_0) {
        const Storage = callback(closure_2_1[1]).Storage;
        const result = Storage.set(closure_2_4, tmp2);
        const obj = { screenReaderEnabled: null };
        obj[0] = tmp2;
        tmp = obj;
      }
      return tmp;
    }));
  });
  const listener = AccessibilityInfo.addEventListener("screenReaderChanged", updateScreenReaderEnabled);
  let Storage = _require(592).Storage;
  screenReaderEnabled = Storage.get(screenReaderEnabled);
  if (screenReaderEnabled == null) {
    screenReaderEnabled = false;
  }
  return { screenReaderEnabled };
});
let result = set.fileFinishedImporting("modules/a11y/native/useIsScreenReaderEnabled.native.tsx");

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