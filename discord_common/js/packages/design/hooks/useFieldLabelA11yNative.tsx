// === Module 4595: useFieldLabelA11yNative ===

// Module 4595 (useFieldLabelA11yNative)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import react3 from "react" /* 4584 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Platform = react_native.Platform;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityLabel;
  let label;
  const obj = react2;
  const cResult = obj.c(8);
  ({ label, accessibilityLabel } = arg0);
  const id = react.useId();
  if (cResult[0] === accessibilityLabel) {
    if (cResult[1] === label) {
      let tmp8;
      if (cResult[2] === (null != label && null == accessibilityLabel)) {
        tmp8 = cResult[3];
      }
      let tmp11;
      if (null != label && null == accessibilityLabel) {
        tmp11 = id;
      }
      if (cResult[4] === tmp7) {
        if (cResult[5] === tmp8) {
          let tmp12;
          if (cResult[6] === tmp11) {
            tmp12 = cResult[7];
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
  if (!(null != label && null == accessibilityLabel)) {
    let nodeText = accessibilityLabel;
    if (accessibilityLabel == null) {
      const tmpResult = react3;
      nodeText = tmpResult.getNodeText(label);
    }
    tmp9 = nodeText;
  }
  cResult[0] = accessibilityLabel;
  cResult[1] = label;
  cResult[2] = null != label && null == accessibilityLabel;
  cResult[3] = tmp9;
  tmp8 = tmp9;
}) : ((arg0) => {
  let accessibilityLabel;
  let label;
  let tmp5;
  let tmp8;
  ({ label, accessibilityLabel } = arg0);
  const id = react.useId();
  let tmp4;
  if (null != label) {
    tmp4 = id;
  }
  const obj = { labelId: tmp4, accessibilityLabel: tmp5, accessibilityLabelledBy: tmp8 };
  tmp5 = undefined;
  if (!(null != label && null == accessibilityLabel)) {
    if (accessibilityLabel == null) {
      const obj2 = react3;
      accessibilityLabel = obj2.getNodeText(label);
    }
    tmp5 = accessibilityLabel;
  }
  tmp8 = undefined;
  if (null != label && null == accessibilityLabel) {
    tmp8 = id;
  }
  return obj;
});
const result = size.fileFinishedImporting("../discord_common/js/packages/design/hooks/useFieldLabelA11yNative.tsx");

export const useFieldLabelA11yNative = tmp2;