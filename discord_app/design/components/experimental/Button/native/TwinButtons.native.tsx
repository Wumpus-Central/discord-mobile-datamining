// === Module 8986: TwinButtons ===

// Module 8986 (TwinButtons)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
let closure_6 = createCacheKey.createStyles((arg0) => {
  let str = "row";
  if (arg0) {
    str = "column";
  }
  const container = { flexDirection: str, gap: null };
  const space = ThemesDefault.space;
  container[1] = arg0 ? space.PX_8 : space.PX_12;
  return { container, button: { flex: 1 } };
});
const result = require("set").fileFinishedImporting("design/components/experimental/Button/native/TwinButtons.native.tsx");

export const TwinButtons = function TwinButtons(children) {
  let _require;
  let obj = _require(4935);
  let tmp = callback(obj.useFontScale() > 1.2);
  _require = tmp;
  obj = {
    style: tmp.container,
    children: Children.map(children.children, (type) => {
      let tmp = null;
      if (closure_1_3.isValidElement(type)) {
        tmp = null;
        if (type.type === lib(closure_1_2[6]).Button) {
          const obj = { style: null, children: null };
          obj[0] = lib.button;
          obj[1] = type;
          tmp = closure_1_5(closure_1_4, obj);
        }
      }
      return tmp;
    })
  };
  Children = React.Children;
  return <View style={tmp.container}>{Children.map(arg0.children, (type) => {
    let tmp = null;
    if (closure_1_3.isValidElement(type)) {
      tmp = null;
      if (type.type === lib(closure_1_2[6]).Button) {
        const obj = { style: null, children: null };
        obj[0] = lib.button;
        obj[1] = type;
        tmp = closure_1_5(closure_1_4, obj);
      }
    }
    return tmp;
  })}</View>;
};