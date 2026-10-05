// discord_app/design/void/GradientBorder/native/GradientBorder.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import merged5 from "../../../../../_runtime/05075_merged5.js";
import LinearGradientDefault from "../../../../../_runtime/05605_LinearGradient.js";
import react from "../../../../../_runtime/00019_react.js";
import Constants from "../../../../Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
class GradientBorder {
  constructor(borderRadius) {
    let borderWidth;
    let children;
    let direction;
    let obj7;
    let style;
    ({ children, borderWidth } = borderRadius);
    ({ direction, style } = borderRadius);
    if (borderWidth === undefined) {
      borderWidth = 1;
    }
    borderRadius = borderRadius.borderRadius;
    if (borderRadius === undefined) {
      borderRadius = nativeDefault.radii.sm + 1;
    }
    const merged = Object.assign(
      borderRadius,
      Object.assign({ children: 0, direction: 0, style: 0, borderWidth: 0, borderRadius: 0 }),
    );
    const str = merged5;
    const match = str.match(direction);
    const withResult = match.with(obj.HORIZONTAL, () => closure_1_5);
    const withResult1 = withResult.with(obj.VERTICAL, () => closure_1_6);
    const withResult2 = withResult1.with(obj.DIAGONAL, () => ({ START: { x: 0, y: 0 }, END: { x: 1, y: 1 } }));
    const withResult3 = withResult2.with(obj.ANTI_DIAGONAL, () => ({ START: { x: 0, y: 1 }, END: { x: 1, y: 0 } }));
    withResult3.exhaustive();
    let tmp9Result2 = null;
    if (null != children) {
      tmp9Result2 = null;
      if (react.isValidElement(children)) {
        const items = [style];
        const obj2 = { borderRadius, padding: borderWidth };
        items[1] = obj2;
        LinearGradientDefault;
        const merged1 = Object.assign(merged);
        let cloneElementResult = null;
        if (null != children) {
          cloneElementResult = null;
          if (react.isValidElement(children)) {
            if (children.type !== View) {
              cloneElementResult = <tmp16 style={{ borderRadius: borderRadius - borderWidth }}>{children}</tmp16>;
              const obj4 = { borderRadius: borderRadius - borderWidth };
            } else {
              const Children = react.Children;
              const onlyResult = Children.only(children);
              const cloneElement = react.cloneElement;
              const obj5 = { style: obj7 };
              const merged2 = Object.assign(onlyResult.props);
              obj7 = { borderRadius: borderRadius - borderWidth, overflow: "hidden" };
              const merged3 = Object.assign(onlyResult.props.style);
              cloneElementResult = cloneElement(onlyResult, obj5);
            }
          }
        }
        tmp9Result2 = (
          <tmp11 start={tmp6} end={tmp7} style={items}>
            {cloneElementResult}
          </tmp11>
        );
      }
    }
    return tmp9Result2;
  }
}
const View = react_native.View;
({ HorizontalGradient: hasOwnProperty, VerticalGradient: metroRequire } = Constants);
const jsx = Fragment.jsx;
const Direction = {
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical",
  DIAGONAL: "diagonal",
  ANTI_DIAGONAL: "anti-diagonal",
};
GradientBorder.Direction = Direction;
const result = size.fileFinishedImporting("design/void/GradientBorder/native/GradientBorder.tsx");

export default GradientBorder;
