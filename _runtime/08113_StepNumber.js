// _runtime/08113_StepNumber.js
import noop2 from "noop" /* 19 */;
import styles from "styles" /* 8110 */;
import 08106__ from "metro/08106__.js" /* 8106 */;
import closure_2 from "get ActivityIndicator" /* 17 */;
import closure_3 from "jsxProd" /* 21 */;

const noop = module_8106(noop2);

export const StepNumber = function StepNumber(arg0) {
  ({ i, style } = arg0);
  return <RN.View style={styles.styles.stepNumber}><RN.Text style={style}>{i}</RN.Text></RN.View>;
};