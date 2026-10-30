// === Module 8851: StepNumber ===

// Module 8851 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod8848 from "module_8848" /* 8848 */;
import module_8844 from "module_8844" /* 8844 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8844(_mod19);

export function StepNumber(arg0) {
  const obj = { style: _mod8848.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod8848.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
}