// discord_app/modules/notifications/native/InAppMessageSoundsStore.tsx
import identity from "identity";
import { isIterable } from "../../../../_runtime/03898_isIterable.js";
import { Storage } from "../../../../discord_common/js/packages/storage/Storage.tsx";

const InAppMessageSoundsEnabled = "InAppMessageSoundsEnabled";
let closure_3 = identity.createWithEqualityFn(() => {
  const Storage = Storage /* Storage */.Storage;
  let isEnabled = Storage.get(InAppMessageSoundsEnabled);
  if (isEnabled == null) {
    isEnabled = true;
  }
  return { isEnabled };
});
let result = require("isIterable").fileFinishedImporting("modules/notifications/native/InAppMessageSoundsStore.tsx");

export const isInAppMessageSoundsEnabled = function isInAppMessageSoundsEnabled() {
  return store.getState().isEnabled;
};
export const setInAppMessageSoundsEnabled = function setInAppMessageSoundsEnabled(isEnabled) {
  const Storage = Storage /* Storage */.Storage;
  const result = Storage.set(InAppMessageSoundsEnabled, isEnabled);
  store.setState({ isEnabled });
};
export const useInAppMessageSoundsEnabled = function useInAppMessageSoundsEnabled() {
  return store((isEnabled) => isEnabled.isEnabled, isIterable /* isIterable */.shallow);
};