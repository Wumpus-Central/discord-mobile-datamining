// _runtime/08321_StepNumber.js
import noop2 from "00019_noop.js";
import styles from "08318_styles.js";
import 08314__ from "metro/08314__.js";
import closure_2 from "00017_get_ActivityIndicator.js";
import closure_3 from "react/00021_jsxProd.js";

const noop = module_8314(noop2);

export const StepNumber = function StepNumber(arg0) {
  ({ i, style } = arg0);
  return <RN.View style={styles.styles.stepNumber}><RN.Text style={style}>{i}</RN.Text></RN.View>;
};