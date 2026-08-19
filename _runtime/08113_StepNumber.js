// === Module 8113: StepNumber ===

// Module 8113 (StepNumber)
import noop2 from "noop" /* 19 */;
import styles from "styles" /* 8110 */;
import module_8106 from "module_8106" /* 8106 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8106(noop2);

export const StepNumber = function StepNumber(arg0) {
  ({ i, style } = arg0);
  return <get ActivityIndicator.View style={styles.styles.stepNumber}><get ActivityIndicator.Text style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};