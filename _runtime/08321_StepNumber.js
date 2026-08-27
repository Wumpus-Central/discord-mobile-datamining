// === Module 8321: StepNumber ===

// Module 8321 (StepNumber)
import noop2 from "noop" /* 19 */;
import styles from "styles" /* 8318 */;
import module_8314 from "module_8314" /* 8314 */;
import closure_2 from "get ActivityIndicator" /* 17 */;
import closure_3 from "jsxProd" /* 21 */;

const noop = module_8314(noop2);

export const StepNumber = function StepNumber(arg0) {
  ({ i, style } = arg0);
  return <RN.View style={styles.styles.stepNumber}><RN.Text style={style}>{i}</RN.Text></RN.View>;
};