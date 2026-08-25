// === Module 8148: StepNumber ===

// Module 8148 (StepNumber)
import noop2 from "noop" /* 19 */;
import styles from "styles" /* 8145 */;
import module_8141 from "module_8141" /* 8141 */;
import closure_2 from "get ActivityIndicator" /* 17 */;
import closure_3 from "jsxProd" /* 21 */;

const noop = module_8141(noop2);

export const StepNumber = function StepNumber(arg0) {
  ({ i, style } = arg0);
  return <RN.View style={styles.styles.stepNumber}><RN.Text style={style}>{i}</RN.Text></RN.View>;
};