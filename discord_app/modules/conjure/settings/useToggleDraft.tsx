// === Module 10773: useToggleDraft ===

// Module 10773 (useToggleDraft)
import c from "c" /* 576 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/settings/useToggleDraft.tsx");

export const useToggleDraft = ReactCompilerGating.isReactCompilerEnabled() ? (function useToggleDraft(arg0, arg1) {
  closure_0 = arg1;
  const cResult = c.c(8);
  [flag] = noop.useState(null);
  if (tmp4) {
    tmp3(null);
  }
  let tmp6 = null != flag;
  if (tmp6) {
    let flag2 = arg0;
    if (arg0 == null) {
      flag2 = false;
    }
    tmp6 = flag !== flag2;
  }
  closure_2 = tmp6;
  if (cResult[0] === tmp6) {
    if (cResult[1] === flag) {
      if (cResult[2] === arg1) {
        let tmp7 = cResult[3];
      }
      if (flag == null) {
        flag = arg0;
      }
      if (flag == null) {
        flag = false;
      }
      if (cResult[4] === tmp6) {
        if (cResult[5] === tmp7) {
          if (cResult[6] === flag) {
            let tmp8 = cResult[7];
          }
          return tmp8;
        }
      }
      const obj2 = { checked: flag, changed: tmp6, setChecked: tmp3, save: tmp7 };
      cResult[4] = tmp6;
      cResult[5] = tmp7;
      cResult[6] = flag;
      cResult[7] = obj2;
      tmp8 = obj2;
    }
  }
  const fn = function h() {
    let tmp = !closure_2;
    if (closure_2) {
      tmp = null == flag;
    }
    if (!tmp) {
      tmp = closure_0(flag);
    }
    return tmp;
  };
  cResult[0] = tmp6;
  cResult[1] = flag;
  cResult[2] = arg1;
  cResult[3] = fn;
  tmp7 = fn;
}) : (function useToggleDraft(arg0, arg1) {
  closure_0 = arg1;
  [checked, setChecked] = noop.useState(null);
  if (tmp3) {
    setChecked(null);
  }
  let changed = null != checked;
  if (changed) {
    let flag2 = arg0;
    if (arg0 == null) {
      flag2 = false;
    }
    changed = checked !== flag2;
  }
  const items = [changed, checked, arg1];
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
    checked = arg0;
  }
  if (checked == null) {
    checked = false;
  }
  return { checked, changed, setChecked, save };
});