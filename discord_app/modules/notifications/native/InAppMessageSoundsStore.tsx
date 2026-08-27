// === Module 10107: isInAppMessageSoundsEnabled ===

// Module 10107 (isInAppMessageSoundsEnabled)
import set from "set" /* 2 */;
import Storage2 from "Storage" /* 595 */;
import isIterable from "isIterable" /* 4074 */;
import identity from "identity" /* 700 */;

const InAppMessageSoundsEnabled = "InAppMessageSoundsEnabled";
let closure_3 = identity.createWithEqualityFn(() => {
  const Storage = Storage2.Storage;
  let isEnabled = Storage.get(InAppMessageSoundsEnabled);
  if (isEnabled == null) {
    isEnabled = true;
  }
  return { isEnabled };
});
let result = set.fileFinishedImporting("modules/notifications/native/InAppMessageSoundsStore.tsx");

export const isInAppMessageSoundsEnabled = function isInAppMessageSoundsEnabled() {
  return store.getState().isEnabled;
};
export const setInAppMessageSoundsEnabled = function setInAppMessageSoundsEnabled(isEnabled) {
  const Storage = Storage2.Storage;
  const result = Storage.set(InAppMessageSoundsEnabled, isEnabled);
  store.setState({ isEnabled });
};
export const useInAppMessageSoundsEnabled = function useInAppMessageSoundsEnabled() {
  return store((isEnabled) => isEnabled.isEnabled, isIterable.shallow);
};