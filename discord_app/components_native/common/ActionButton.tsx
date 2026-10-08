// === Module 10243: ActionButton ===

// Module 10243 (ActionButton)
import c from "c" /* 576 */;
import ButtonHooks from "ButtonHooks" /* 5381 */;
import IconButton from "IconButton" /* 8106 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/ActionButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ActionButton(IconComponent) {
  const cResult = c.c(11);
  IconComponent = IconComponent.IconComponent;
  let str = "tertiary";
  if ("positive" === IconComponent.type) {
    str = "active";
  }
  const color = ButtonHooks.useButtonTextColorStyles(str).color;
  if (cResult[0] === IconComponent) {
    if (cResult[1] === color) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === IconComponent.accessibilityLabel) {
      if (cResult[4] === IconComponent.onPress) {
        if (cResult[5] === tmp4) {
          if (cResult[6] === str) {
            let tmp6 = cResult[7];
          }
          if (cResult[8] === IconComponent.styles) {
            if (cResult[9] === tmp6) {
              let tmp9 = cResult[10];
            }
            return tmp9;
          }
          const obj2 = { style: IconComponent.styles, children: tmp6 };
          const tmp12 = <View style={IconComponent.styles}>{tmp6}</View>;
          cResult[8] = IconComponent.styles;
          cResult[9] = tmp6;
          cResult[10] = tmp12;
          tmp9 = tmp12;
        }
      }
    }
    const obj4 = { icon: tmp4, onPress: null, accessibilityLabel: null, variant: null, size: "sm" };
    ({ onPress: obj3.onPress, accessibilityLabel: obj3.accessibilityLabel } = IconComponent);
    obj4.variant = str;
    const tmp8 = jsx(IconButton.IconButton, { icon: tmp4, onPress: null, accessibilityLabel: null, variant: null, size: "sm" });
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
  const tmpResult = ButtonHooks;
}) : (function ActionButton(style) {
  let str = "tertiary";
  if ("positive" === style.type) {
    str = "active";
  }
  const obj2 = { style: style.styles, children: null };
  ({ onPress: obj3.onPress, accessibilityLabel: obj3.accessibilityLabel } = style);
  obj2.children = jsx(IconButton.IconButton, { icon: <style.IconComponent color={ButtonHooks.useButtonTextColorStyles(str).color} size="sm" />, onPress: null, accessibilityLabel: null, variant: str, size: "sm" });
  return <View style={style.styles}>{null}</View>;
});