// _runtime/07920_StepNumber.js
import 07913__ from "metro/07913__.js";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import { styles } from "07917_styles.js";


export const StepNumber = function StepNumber(arg0) {
  let i;
  let style;
  ({ i, style } = arg0);
  return <get ActivityIndicator.View style={styles.styles.stepNumber}><get ActivityIndicator.Text style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};