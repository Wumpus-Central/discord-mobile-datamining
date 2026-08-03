import noop from "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_6 = createCacheKey.createStyles((arg0) => {
  let str = "row";
  if (arg0) {
    str = "column";
  }
  const container = { flexDirection: str, gap: null };
  const space = importDefault(712).space;
  container[1] = arg0 ? space.PX_8 : space.PX_12;
  return { container, button: { flex: 1 } };
});
const result = require("jsxProd").fileFinishedImporting("design/components/experimental/Button/native/TwinButtons.native.tsx");

export const TwinButtons = function TwinButtons(children) {
  let _require;
  let obj = _require(4610);
  let tmp = callback(obj.useFontScale() > 1.2);
  _require = tmp;
  obj = {
    style: tmp.container,
    children: Children.map(children.children, (type) => {
      let tmp = null;
      if (outer1_3.isValidElement(type)) {
        tmp = null;
        if (type.type === _undefined(outer1_2[6]).Button) {
          const obj = { style: null, children: null };
          obj[0] = _undefined.button;
          obj[1] = type;
          tmp = outer1_5(outer1_4, obj);
        }
      }
      return tmp;
    })
  };
  Children = React.Children;
  return <View style={tmp.container}>{Children.map(arg0.children, (type) => {
    let tmp = null;
    if (outer1_3.isValidElement(type)) {
      tmp = null;
      if (type.type === _undefined(outer1_2[6]).Button) {
        const obj = { style: null, children: null };
        obj[0] = _undefined.button;
        obj[1] = type;
        tmp = outer1_5(outer1_4, obj);
      }
    }
    return tmp;
  })}</View>;
};