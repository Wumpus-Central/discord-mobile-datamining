// === Module 8404: StepNumber ===

// Module 8404 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod8401 from "module_8401" /* 8401 */;
import module_8397 from "module_8397" /* 8397 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8397(_mod19);

export const StepNumber = function StepNumber(arg0) {
  let obj = { style: _mod8401.styles.stepNumber, children: null };
  ({ i, index, style } = arg0);
  obj = { testID: "" + index + "th-step", style, children: i };
  obj.children = <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text>;
  return <get ActivityIndicator.View testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.View>;
};