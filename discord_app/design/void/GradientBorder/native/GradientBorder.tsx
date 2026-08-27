// discord_app/design/void/GradientBorder/native/GradientBorder.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import t from "../../../../../_runtime/04658_t.js";
import LinearGradientDefault from "../../../../../_runtime/04892_LinearGradient.js";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import ME from "../../../../Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
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
      borderRadius = require("Themes").radii.sm + 1;
    }
    merged = Object.assign(global, Object.create(null));
    tmp4 = closure_2;
    str = require("t");
    match = str.match(direction);
    withResult = match.with(closure_8.HORIZONTAL, () => closure_5);
    withResult1 = withResult.with(closure_8.VERTICAL, () => closure_6);
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
        obj[0] = tmp6;
        obj[1] = tmp7;
        items = [, ];
        items[0] = style;
        obj1 = { borderRadius: null, padding: null };
        obj1[0] = borderRadius;
        obj1[1] = borderWidth;
        items[1] = obj1;
        obj[2] = items;
        tmp12 = obj;
        tmp13 = merged;
        tmp11 = require("LinearGradient");
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
          obj5[0] = borderRadius;
          obj4[0] = obj5;
          obj4[1] = children;
          cloneElementResult = tmp9(tmp16, obj4);
        }
        obj.children = cloneElementResult;
        tmp9Result = tmp9(tmp11, obj);
      }
    }
    return tmp8;
  }
}
({ HorizontalGradient: c5, VerticalGradient: closure_6 } = ME);
let obj = { HORIZONTAL: "horizontal", VERTICAL: "vertical", DIAGONAL: "diagonal", ANTI_DIAGONAL: "anti-diagonal" };
GradientBorder.Direction = obj;
const result = require("set").fileFinishedImporting("design/void/GradientBorder/native/GradientBorder.tsx");

export default GradientBorder;