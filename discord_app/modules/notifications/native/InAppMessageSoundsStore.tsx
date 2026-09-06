// discord_app/modules/notifications/native/InAppMessageSoundsStore.tsx
import Storage2 from "../../../../discord_common/js/packages/storage/Storage.tsx";
import _mod4184 from "../../../../_runtime/metro/04184__.js";
import identity from "../../../../_runtime/metro/01244__.js";
import size from "../../../../_runtime/metro/00002__.js";

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

export const isInAppMessageSoundsEnabled = function isInAppMessageSoundsEnabled() {
  return closure_3.getState().isEnabled;
};
export const setInAppMessageSoundsEnabled = function setInAppMessageSoundsEnabled(isEnabled) {
  const Storage = Storage2.Storage;
  const result = Storage.set(InAppMessageSoundsEnabled, isEnabled);
  closure_3.setState({ isEnabled });
};
export const useInAppMessageSoundsEnabled = function useInAppMessageSoundsEnabled() {
  return closure_3((isEnabled) => isEnabled.isEnabled, _mod4184.shallow);
};
