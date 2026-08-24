// discord_app/modules/notifications/native/InAppMessageSoundsStore.tsx
import set from "../../../../_runtime/00002_set.js";
import Storage2 from "../../../../discord_common/js/packages/storage/Storage.tsx";
import isIterable from "../../../../_runtime/04009_isIterable.js";
import identity from "../../../../_runtime/00700_identity.js";

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