// discord_app/modules/a11y/native/useIsScreenReaderEnabled.native.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import 00560__ from "../../../../_runtime/metro/00560__.js";
import size from "../../../../_runtime/metro/00002__.js";

const AccessibilityInfo = _mod17.AccessibilityInfo;
function SCREEN_READER_ENABLED_GETTER(screenReaderEnabled) {
  return screenReaderEnabled.screenReaderEnabled;
}
let screenReaderEnabled = "screenReaderEnabled";
let closure_5 = module_560.create((arg0) => {
  _require = arg0;
  function updateScreenReaderEnabled(event) {
    closure_0 = event;
    closure_0(1249).batchUpdates(() => screenReaderEnabled((screenReaderEnabled) => {
      let tmp = screenReaderEnabled;
      if (screenReaderEnabled.screenReaderEnabled !== screenReaderEnabled) {
        const Storage = screenReaderEnabled(510).Storage;
        const result = Storage.set(screenReaderEnabled, screenReaderEnabled);
        const obj = { screenReaderEnabled };
        tmp = obj;
      }
      return tmp;
    }));
  }
  let result = AccessibilityInfo.isScreenReaderEnabled();
  result.then(updateScreenReaderEnabled).catch(() => {
    c0 = false;
    closure_0(1249).batchUpdates(() => screenReaderEnabled((screenReaderEnabled) => {
      let tmp = screenReaderEnabled;
      if (screenReaderEnabled.screenReaderEnabled !== screenReaderEnabled) {
        const Storage = screenReaderEnabled(510).Storage;
        const result = Storage.set(screenReaderEnabled, screenReaderEnabled);
        const obj = { screenReaderEnabled };
        tmp = obj;
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
let result = size.fileFinishedImporting("modules/a11y/native/useIsScreenReaderEnabled.native.tsx");

export const addScreenReaderEnabledListener = function addScreenReaderEnabledListener(arg0) {
  closure_0 = arg0;
  return closure_5.subscribe((screenReaderEnabled) => {
    closure_0(screenReaderEnabled.screenReaderEnabled);
  });
};
export const getIsScreenReaderEnabled = function getIsScreenReaderEnabled() {
  return closure_5.getState().screenReaderEnabled;
};
export const useIsScreenReaderEnabled = function useIsScreenReaderEnabled() {
  return closure_5(SCREEN_READER_ENABLED_GETTER);
};