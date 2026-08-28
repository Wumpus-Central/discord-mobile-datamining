// === Module 8335: StepNumber ===

// Module 8335 (StepNumber)
import noop2 from "noop" /* 19 */;
import styles from "styles" /* 8332 */;
import module_8328 from "module_8328" /* 8328 */;
import closure_2 from "get ActivityIndicator" /* 17 */;
import closure_3 from "jsxProd" /* 21 */;

const noop = module_8328(noop2);

export const StepNumber = function StepNumber(arg0) {
  ({ i, style } = arg0);
  return <RN.View style={styles.styles.stepNumber}><RN.Text style={style}>{i}</RN.Text></RN.View>;
};