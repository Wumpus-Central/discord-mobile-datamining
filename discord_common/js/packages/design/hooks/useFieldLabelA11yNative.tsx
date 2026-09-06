// === Module 4278: useFieldLabelA11yNative ===

// Module 4278 (useFieldLabelA11yNative)
import utils_getNodeText from "utils/getNodeText" /* 4266 */;
import noop from "module_19" /* 19 */;

require = fn;
const Platform = fn(17).Platform;
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/design/hooks/useFieldLabelA11yNative.tsx");

export const useFieldLabelA11yNative = function useFieldLabelA11yNative(size) {
  ({ label, accessibilityLabel } = size);
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
};