// _runtime/08215_StepNumber.js
import noop2 from "00019_noop.js";
import styles from "08212_styles.js";
import 08208__ from "metro/08208__.js";
import closure_2 from "00017_get_ActivityIndicator.js";
import closure_3 from "react/00021_jsxProd.js";

const noop = module_8208(noop2);

export const StepNumber = function StepNumber(arg0) {
  ({ i, style } = arg0);
  return <RN.View style={styles.styles.stepNumber}><RN.Text style={style}>{i}</RN.Text></RN.View>;
};