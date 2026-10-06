// === Module 7971: StepNumber ===

// Module 7971 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 7968 */;
import module_7964 from "module_7964" /* 7964 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_7964(react2);

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