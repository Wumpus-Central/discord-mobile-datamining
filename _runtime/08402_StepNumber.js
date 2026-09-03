// _runtime/08402_StepNumber.js
import noop2 from "00019_noop.js";
import styles from "08399_styles.js";
import 08395__ from "metro/08395__.js";
import closure_2 from "00017_get_ActivityIndicator.js";
import closure_3 from "react/00021_jsxProd.js";

const noop = module_8395(noop2);

export const StepNumber = function StepNumber(arg0) {
  let obj = { style: styles.styles.stepNumber, children: null };
  ({ i, index, style } = arg0);
  obj = { testID: "" + index + "th-step", style, children: i };
  obj[1] = <RN.Text testID={"" + index + "th-step"} style={style}>{i}</RN.Text>;
  return <RN.View testID={"" + index + "th-step"} style={style}>{i}</RN.View>;
};