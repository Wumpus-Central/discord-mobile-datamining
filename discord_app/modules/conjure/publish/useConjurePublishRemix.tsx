// === Module 18414: useConjurePublishRemix ===

// Module 18414 (useConjurePublishRemix)
import useConjureSharingModeDefault from "useConjureSharingMode" /* 18415 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishRemix.tsx");

export default function useConjurePublishRemix(arg0) {
  const tmp = useConjureSharingModeDefault(arg0);
  [value, obj.setValue] = noop.useState(null);
  const mode = tmp.mode;
  let canChange = tmp.canChange;
  const changeMode = tmp.changeMode;
  items = [value, mode, canChange, changeMode];
  const obj = { options: tmp.options, value: null, setValue: null, canChange: null, save: null };
  const callback = noop.useCallback(() => {
    if (null != first) {
      if (first !== mode) {
        if (canChange) {
          let resolved = changeMode(first);
        }
        return resolved;
      }
    }
    resolved = Promise.resolve(true);
  }, items);
  if (value == null) {
    value = mode;
  }
  obj.value = value;
  if (canChange) {
    canChange = !tmp.changing;
  }
  obj.canChange = canChange;
  obj.save = callback;
  return obj;
};