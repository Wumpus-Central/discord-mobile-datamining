// === Module 13015: StepNumber ===

// Module 13015 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod13012 from "module_13012" /* 13012 */;
import module_13008 from "module_13008" /* 13008 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_13008(_mod19);

export function StepNumber(arg0) {
  const obj = { style: _mod13012.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod13012.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
}