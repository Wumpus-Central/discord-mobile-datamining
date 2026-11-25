// === Module 10588: InAppMessageSoundsStore ===

// Module 10588 (InAppMessageSoundsStore)
import Storage2 from "Storage" /* 510 */;
import _mod4927 from "module_4927" /* 4927 */;
import identity from "module_1257" /* 1257 */;
import size from "module_2" /* 2 */;

const InAppMessageSoundsEnabled = "InAppMessageSoundsEnabled";
let closure_3 = identity.createWithEqualityFn(() => {
  const Storage = Storage2.Storage;
  let isEnabled = Storage.get(InAppMessageSoundsEnabled);
  if (isEnabled == null) {
    isEnabled = true;
  }
  return { isEnabled };
});
let result = size.fileFinishedImporting("modules/notifications/native/InAppMessageSoundsStore.tsx");

export function isInAppMessageSoundsEnabled() {
  return closure_3.getState().isEnabled;
}
export function setInAppMessageSoundsEnabled(isEnabled) {
  const Storage = Storage2.Storage;
  const result = Storage.set(InAppMessageSoundsEnabled, isEnabled);
  closure_3.setState({ isEnabled });
}
export function useInAppMessageSoundsEnabled() {
  return closure_3((isEnabled) => isEnabled.isEnabled, _mod4927.shallow);
}