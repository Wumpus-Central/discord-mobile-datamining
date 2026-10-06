// discord_app/modules/notifications/native/InAppMessageSoundsStore.tsx
import Storage2 from "../../../../discord_common/js/packages/storage/Storage.tsx";
import react from "../../../../_runtime/00576_react.js";
import _slicedToArray from "../../../../_runtime/metro/04498__slicedToArray.js";
import 01254__ from "../../../../_runtime/metro/01254__.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const InAppMessageSoundsEnabled = "InAppMessageSoundsEnabled";
let closure_3 = module_1254.createWithEqualityFn(() => {
  const Storage = Storage2.Storage;
  let isEnabled = Storage.get(InAppMessageSoundsEnabled);
  if (isEnabled == null) {
    isEnabled = true;
  }
  return { isEnabled };
});
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(isEnabled) {
      return isEnabled.isEnabled;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_3(first, _slicedToArray.shallow);
}) : (() => closure_3((isEnabled) => isEnabled.isEnabled, _slicedToArray.shallow));
let result = size.fileFinishedImporting("modules/notifications/native/InAppMessageSoundsStore.tsx");

export const isInAppMessageSoundsEnabled = function isInAppMessageSoundsEnabled() {
  return closure_3.getState().isEnabled;
};
export const setInAppMessageSoundsEnabled = function setInAppMessageSoundsEnabled(isEnabled) {
  const Storage = Storage2.Storage;
  const result = Storage.set(InAppMessageSoundsEnabled, isEnabled);
  const obj = { isEnabled };
  closure_3.setState(obj);
};
export const useInAppMessageSoundsEnabled = tmp2;