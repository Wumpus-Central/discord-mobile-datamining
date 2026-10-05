// _runtime/07960_StepNumber.js
import react2 from "00019_react.js";
import styles from "07957_styles.js";
import 07953__ from "metro/07953__.js";
import react_native from "00017_react-native.js";
import Fragment from "react/00021_Fragment.js";

const react = module_7953(react2);

export const StepNumber = function StepNumber(arg0) {
  let i;
  let index;
  let style;
  ({ i, index, style } = arg0);
  const jsx = Fragment.jsx;
  const View = react_native.View;
  ({ testID: "" + index + "th-step", style, children: i });
  return <View style={styles.styles.stepNumber}>{null}</View>;
};