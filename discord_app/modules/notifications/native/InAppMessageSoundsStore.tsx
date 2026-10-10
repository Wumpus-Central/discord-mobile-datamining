// discord_app/modules/notifications/native/InAppMessageSoundsStore.tsx
import Storage2 from "../../../../discord_common/js/packages/storage/Storage.tsx";
import c from "../../../../_runtime/00576_c.js";
import _mod4733 from "../../../../_runtime/metro/04733__.js";
import identity from "../../../../_runtime/metro/01267__.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
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
export const useInAppMessageSoundsEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? function useInAppMessageSoundsEnabled() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n(isEnabled) {
          return isEnabled.isEnabled;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      return closure_3(first, _mod4733.shallow);
    }
  : function useInAppMessageSoundsEnabled() {
      return closure_3((isEnabled) => isEnabled.isEnabled, _mod4733.shallow);
    };
