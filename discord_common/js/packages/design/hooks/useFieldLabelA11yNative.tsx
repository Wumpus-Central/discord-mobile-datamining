// discord_common/js/packages/design/hooks/useFieldLabelA11yNative.tsx
import getNodeText from "../utils/getNodeText.tsx";
import closure_2 from "../../../../../_runtime/00019_noop.js";
import { Platform } from "../../../../../_runtime/00017_get_ActivityIndicator.js";

require = arg1;
const result = require("set").fileFinishedImporting(
  "../discord_common/js/packages/design/hooks/useFieldLabelA11yNative.tsx",
);

export const useFieldLabelA11yNative = function useFieldLabelA11yNative(size) {
  ({ label, accessibilityLabel } = size);
  const id = closure_2.useId();
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
      accessibilityLabel = getNodeText.getNodeText(label);
      const obj2 = getNodeText;
    }
    tmp5 = accessibilityLabel;
  }
  obj[1] = tmp5;
  let tmp8;
  if (tmp3) {
    tmp8 = id;
  }
  obj[2] = tmp8;
  return obj;
};
