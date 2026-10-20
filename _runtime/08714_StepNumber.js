// === Module 8714: StepNumber ===

// Module 8714 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod8711 from "module_8711" /* 8711 */;
import module_8707 from "module_8707" /* 8707 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8707(_mod19);

export const StepNumber = function StepNumber(arg0) {
  const obj = { style: _mod8711.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod8711.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};