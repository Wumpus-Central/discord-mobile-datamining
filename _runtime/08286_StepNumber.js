// === Module 8286: StepNumber ===

// Module 8286 (StepNumber)
import noop2 from "noop" /* 19 */;
import styles from "styles" /* 8283 */;
import module_8279 from "module_8279" /* 8279 */;
import closure_2 from "get ActivityIndicator" /* 17 */;
import closure_3 from "jsxProd" /* 21 */;

const noop = module_8279(noop2);

export const StepNumber = function StepNumber(arg0) {
  let obj = { style: styles.styles.stepNumber, children: null };
  ({ i, index, style } = arg0);
  obj = { testID: "" + index + "th-step", style, children: i };
  obj[1] = <RN.Text testID={"" + index + "th-step"} style={style}>{i}</RN.Text>;
  return <RN.View testID={"" + index + "th-step"} style={style}>{i}</RN.View>;
};