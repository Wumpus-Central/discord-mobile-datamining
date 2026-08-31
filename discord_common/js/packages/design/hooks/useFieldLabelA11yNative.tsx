// === Module 4176: useFieldLabelA11yNative ===

// Module 4176 (useFieldLabelA11yNative)
import closure_0 from "noop" /* 19 */;
import { Platform } from "get ActivityIndicator" /* 17 */;

const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/hooks/useFieldLabelA11yNative.tsx");

export const useFieldLabelA11yNative = function useFieldLabelA11yNative(size) {
  ({ label, accessibilityLabel } = size);
  const id = closure_0.useId();
  let tmp3;
  if (null != label) {
    tmp3 = id;
  }
  const obj = { labelId: tmp3, accessibilityLabel: null, accessibilityLabelledBy: null };
  let tmp4;
  if (null == label) {
    if (accessibilityLabel == null) {
      let tmp5;
      if (typeof label === "string") {
        tmp5 = label;
      }
      accessibilityLabel = tmp5;
    }
    tmp4 = accessibilityLabel;
  }
  obj[1] = tmp4;
  let tmp6;
  if (null != label) {
    tmp6 = id;
  }
  obj[2] = tmp6;
  return obj;
};