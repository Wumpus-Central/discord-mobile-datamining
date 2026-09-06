// discord_app/design/void/GradientBorder/native/GradientBorder.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod4745 from "module_4745" /* 4745 */;
import LinearGradientDefault from "../../../../../_runtime/04987_LinearGradient.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
class GradientBorder {
  constructor(arg0) {
    ({ children, borderWidth } = global);
    ({ direction, style } = global);
    if (borderWidth === undefined) {
      borderWidth = 1;
    }
    borderRadius = global.borderRadius;
    if (borderRadius === undefined) {
      tmp = closure_1;
      tmp2 = closure_2;
      num = 1;
      borderRadius = closure_1(closure_2[5]).radii.sm + 1;
    }
    merged = Object.assign(
      global,
      Object.assign({ children: 0, direction: 0, style: 0, borderWidth: 0, borderRadius: 0 }),
    );
    tmp4 = closure_2;
    str = closure_0(closure_2[4]);
    match = str.match(direction);
    withResult = match.with(closure_8.HORIZONTAL, () => closure_1_5);
    withResult1 = withResult.with(closure_8.VERTICAL, () => closure_1_6);
    withResult2 = withResult1.with(closure_8.DIAGONAL, () => ({ START: { x: 0, y: 0 }, END: { x: 1, y: 1 } }));
    withResult3 = withResult2.with(closure_8.ANTI_DIAGONAL, () => ({ START: { x: 0, y: 1 }, END: { x: 1, y: 0 } }));
    exhaustiveResult = withResult3.exhaustive();
    tmp8 = null;
    if (null != children) {
      obj6 = closure_3;
      tmp8 = null;
      if (closure_3.isValidElement(children)) {
        tmp9 = jsx;
        tmp10 = closure_1;
        obj = { start: null, end: null, style: null };
        obj.start = tmp6;
        obj.end = tmp7;
        items = [,];
        items[0] = style;
        obj1 = { borderRadius: null, padding: null };
        obj1.borderRadius = borderRadius;
        obj1.padding = borderWidth;
        items[1] = obj1;
        obj.style = items;
        tmp12 = obj;
        tmp13 = merged;
        tmp11 = closure_1(tmp4[6]);
        merged1 = Object.assign(merged);
        cloneElementResult = null;
        if (null != children) {
          cloneElementResult = null;
          if (obj6.isValidElement(children)) {
            tmp16 = View;
            if (children.type === View) {
              Children = obj6.Children;
              onlyResult = Children.only(children);
              obj2 = {};
              tmp18 = obj2;
              merged2 = Object.assign(onlyResult.props);
              obj3 = {};
              tmp20 = obj3;
              merged3 = Object.assign(onlyResult.props.style);
              obj3.borderRadius = borderRadius - borderWidth;
              str2 = "hidden";
              obj3.overflow = "hidden";
              obj2.style = obj3;
              cloneElementResult = obj6.cloneElement(onlyResult, obj2);
            }
          }
          obj4 = { style: null, children: null };
          obj5 = { borderRadius: null };
          borderRadius = borderRadius - borderWidth;
          obj5.borderRadius = borderRadius;
          obj4.style = obj5;
          obj4.children = children;
          cloneElementResult = tmp9(tmp16, obj4);
        }
        obj.children = cloneElementResult;
        tmp9Result = tmp9(tmp11, obj);
      }
    }
    return tmp8;
  }
}
const View = fn(17).View;
const Constants = fn(1074);
({ HorizontalGradient: hasOwnProperty, VerticalGradient: metroRequire } = Constants);
const jsx = fn(21).jsx;
const Direction = {
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical",
  DIAGONAL: "diagonal",
  ANTI_DIAGONAL: "anti-diagonal",
};
GradientBorder.Direction = Direction;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/GradientBorder/native/GradientBorder.tsx");

export default GradientBorder;
