// === Module 10630: ActionButton ===

// Module 10630 (ActionButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ButtonHooks from "ButtonHooks" /* 5601 */;
import IconButton2 from "IconButton" /* 7575 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let IconComponent;

const View = react_native.View;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((IconComponent) => {
  const obj = react2;
  const cResult = obj.c(11);
  IconComponent = IconComponent.IconComponent;
  let str = "tertiary";
  if ("positive" === IconComponent.type) {
    str = "active";
  }
  const tmpResult = ButtonHooks;
  const color = tmpResult.useButtonTextColorStyles(str).color;
  if (cResult[0] === IconComponent) {
    let tmp4;
    if (cResult[1] === color) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === IconComponent.accessibilityLabel) {
      if (cResult[4] === IconComponent.onPress) {
        if (cResult[5] === tmp4) {
          let tmp6;
          if (cResult[6] === str) {
            tmp6 = cResult[7];
          }
          if (cResult[8] === IconComponent.styles) {
            let tmp9;
            if (cResult[9] === tmp6) {
              tmp9 = cResult[10];
            }
            return tmp9;
          }
          const tmp12 = <View style={IconComponent.styles}>{tmp6}</View>;
          cResult[8] = IconComponent.styles;
          cResult[9] = tmp6;
          cResult[10] = tmp12;
          tmp9 = tmp12;
        }
      }
    }
    ({ onPress: obj3.onPress, accessibilityLabel: obj3.accessibilityLabel } = IconComponent);
    const tmp8 = jsx(IconButton2.IconButton, { icon: tmp4, onPress: null, accessibilityLabel: null, variant: str, size: "sm" });
    cResult[3] = IconComponent.accessibilityLabel;
    cResult[4] = IconComponent.onPress;
    cResult[5] = tmp4;
    cResult[6] = str;
    cResult[7] = tmp8;
    tmp6 = tmp8;
  }
  const tmp5 = <IconComponent color={color} size="sm" />;
  cResult[0] = IconComponent;
  cResult[1] = color;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : ((IconComponent) => {
  let str = "tertiary";
  IconComponent = IconComponent.IconComponent;
  if ("positive" === IconComponent.type) {
    str = "active";
  }
  const obj = ButtonHooks;
  const color = obj.useButtonTextColorStyles(str).color;
  const IconButton = IconButton2.IconButton;
  ({ onPress: obj3.onPress, accessibilityLabel: obj3.accessibilityLabel } = IconComponent);
  return <View style={IconComponent.styles}>{null}</View>;
});
const result = size.fileFinishedImporting("components_native/common/ActionButton.tsx");

export default tmp3;