// === Module 10858: StepNumber ===

// Module 10858 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod10855 from "module_10855" /* 10855 */;
import module_10851 from "module_10851" /* 10851 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_10851(_mod19);

export function StepNumber(arg0) {
  const obj = { style: _mod10855.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod10855.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
}