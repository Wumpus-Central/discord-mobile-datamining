// === Module 7960: StepNumber ===

// Module 7960 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod7957 from "module_7957" /* 7957 */;
import module_7953 from "module_7953" /* 7953 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_7953(_mod19);

export const StepNumber = function StepNumber(arg0) {
  const obj = { style: _mod7957.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod7957.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};