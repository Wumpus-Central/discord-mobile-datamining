// === Module 8775: StepNumber ===

// Module 8775 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod8772 from "module_8772" /* 8772 */;
import module_8768 from "module_8768" /* 8768 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8768(_mod19);

export const StepNumber = function StepNumber(arg0) {
  const obj = { style: _mod8772.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod8772.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};