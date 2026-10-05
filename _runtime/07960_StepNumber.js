// === Module 7960: StepNumber ===

// Module 7960 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 7957 */;
import module_7953 from "module_7953" /* 7953 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

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