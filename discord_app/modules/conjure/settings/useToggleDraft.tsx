// === Module 10896: useToggleDraft ===

// Module 10896 (useToggleDraft)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/settings/useToggleDraft.tsx");

export function useToggleDraft(stateFromStores, callback) {
  closure_0 = callback;
  [checked, setChecked] = noop.useState(null);
  if (tmp3) {
    setChecked(null);
  }
  let changed = null != checked;
  if (changed) {
    let flag2 = stateFromStores;
    if (stateFromStores == null) {
      flag2 = false;
    }
    changed = checked !== flag2;
  }
  const items = [changed, checked, callback];
  const save = noop.useCallback(() => {
    let tmp = !changed;
    if (changed) {
      tmp = null == checked;
    }
    if (!tmp) {
      tmp = closure_0(checked);
    }
    return tmp;
  }, items);
  if (checked == null) {
    checked = stateFromStores;
  }
  if (checked == null) {
    checked = false;
  }
  return { checked, changed, setChecked, save };
}