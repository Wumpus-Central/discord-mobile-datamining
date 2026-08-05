import { Storage } from "../../../../discord_common/js/packages/storage/Storage.tsx";
// discord_app/modules/a11y/native/useIsScreenReaderEnabled.native.tsx
import { AccessibilityInfo } from "get ActivityIndicator";
import keys from "keys";

function SCREEN_READER_ENABLED_GETTER(screenReaderEnabled) {
  return screenReaderEnabled.screenReaderEnabled;
}
let screenReaderEnabled = "screenReaderEnabled";
let closure_5 = keys.create((arg0) => {
  const _require = arg0;
  function updateScreenReaderEnabled(arg0) {
    const callback = arg0;
    callback(outer1_1[3]).batchUpdates(() => callback((screenReaderEnabled) => {
      let tmp = screenReaderEnabled;
      if (screenReaderEnabled.screenReaderEnabled !== closure_0) {
        const Storage = callback(outer2_1[1]).Storage;
        const result = Storage.set(outer2_4, tmp2);
        const obj = { screenReaderEnabled: null };
        obj[0] = tmp2;
        tmp = obj;
      }
      return tmp;
    }));
  }
  let result = AccessibilityInfo.isScreenReaderEnabled();
  result.then(updateScreenReaderEnabled).catch(() => {
    let c0 = false;
    callback(outer1_1[3]).batchUpdates(() => callback((screenReaderEnabled) => {
      let tmp = screenReaderEnabled;
      if (screenReaderEnabled.screenReaderEnabled !== closure_0) {
        const Storage = callback(outer2_1[1]).Storage;
        const result = Storage.set(outer2_4, tmp2);
        const obj = { screenReaderEnabled: null };
        obj[0] = tmp2;
        tmp = obj;
      }
      return tmp;
    }));
  });
  const listener = AccessibilityInfo.addEventListener("screenReaderChanged", updateScreenReaderEnabled);
  let Storage = _Storage.Storage;
  screenReaderEnabled = Storage.get(screenReaderEnabled);
  if (screenReaderEnabled == null) {
    screenReaderEnabled = false;
  }
  return { screenReaderEnabled };
});
let result = require("keys").fileFinishedImporting("modules/a11y/native/useIsScreenReaderEnabled.native.tsx");

export const addScreenReaderEnabledListener = function addScreenReaderEnabledListener(arg0) {
  let closure_0 = arg0;
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