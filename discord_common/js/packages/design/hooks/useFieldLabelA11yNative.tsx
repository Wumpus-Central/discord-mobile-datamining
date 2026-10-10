// === Module 4833: useFieldLabelA11yNative ===

// Module 4833 (useFieldLabelA11yNative)
import c from "c" /* 576 */;
import utils_getNodeText from "utils/getNodeText" /* 4822 */;
import noop from "module_19" /* 19 */;

require = fn;
const Platform = fn(17).Platform;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/design/hooks/useFieldLabelA11yNative.tsx");

export const useFieldLabelA11yNative = ReactCompilerGating.isReactCompilerEnabled() ? (function useFieldLabelA11yNative(arg0) {
  const cResult = c.c(8);
  ({ label, accessibilityLabel } = arg0);
  const id = noop.useId();
  let tmp6 = tmp5;
  if (null != label) {
    tmp6 = null == accessibilityLabel;
  }
  if (cResult[0] === accessibilityLabel) {
    if (cResult[1] === label) {
      if (cResult[2] === tmp6) {
        let tmp8 = cResult[3];
      }
      let tmp11;
      if (tmp6) {
        tmp11 = id;
      }
      if (cResult[4] === tmp7) {
        if (cResult[5] === tmp8) {
          if (cResult[6] === tmp11) {
            let tmp12 = cResult[7];
          }
          return tmp12;
        }
      }
      const obj2 = { labelId: tmp7, accessibilityLabel: tmp8, accessibilityLabelledBy: tmp11 };
      cResult[4] = tmp7;
      cResult[5] = tmp8;
      cResult[6] = tmp11;
      cResult[7] = obj2;
      tmp12 = obj2;
    }
  }
  let tmp9;
  if (!tmp6) {
    let nodeText = accessibilityLabel;
    if (accessibilityLabel == null) {
      nodeText = utils_getNodeText.getNodeText(label);
      const tmpResult = utils_getNodeText;
    }
    tmp9 = nodeText;
  }
  cResult[0] = accessibilityLabel;
  cResult[1] = label;
  cResult[2] = tmp6;
  cResult[3] = tmp9;
  tmp8 = tmp9;
}) : (function useFieldLabelA11yNative(arg0) {
  ({ label, accessibilityLabel } = arg0);
  const id = noop.useId();
  let tmp3 = tmp2;
  if (null != label) {
    tmp3 = null == accessibilityLabel;
  }
  let tmp4;
  if (null != label) {
    tmp4 = id;
  }
  const obj = { labelId: tmp4, accessibilityLabel: null, accessibilityLabelledBy: null };
  let tmp5;
  if (!tmp3) {
    if (accessibilityLabel == null) {
      accessibilityLabel = utils_getNodeText.getNodeText(label);
    }
    tmp5 = accessibilityLabel;
  }
  obj.accessibilityLabel = tmp5;
  let tmp8;
  if (tmp3) {
    tmp8 = id;
  }
  obj.accessibilityLabelledBy = tmp8;
  return obj;
});