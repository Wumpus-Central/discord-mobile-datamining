// === Module 8813: TwinButtons ===

// Module 8813 (TwinButtons)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
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
const result = require("obj132").fileFinishedImporting("design/components/experimental/Button/native/TwinButtons.native.tsx");

export const TwinButtons = function TwinButtons(children) {
  let _require;
  let obj = _require(4751);
  let tmp = callback(obj.useFontScale() > 1.2);
  _require = tmp;
  obj = {
    style: tmp.container,
    children: Children.map(children.children, (type) => {
      let tmp = null;
      if (closure_1_3.isValidElement(type)) {
        tmp = null;
        if (type.type === lib(dependencyMap[6]).Button) {
          const obj = { style: null, children: null };
          obj[0] = lib.button;
          obj[1] = type;
          tmp = <View style={null}>{null}</View>;
        }
      }
      return tmp;
    })
  };
  Children = React.Children;
  return <View style={tmp.container}>{Children.map(children.children, (type) => {
    let tmp = null;
    if (closure_1_3.isValidElement(type)) {
      tmp = null;
      if (type.type === lib(dependencyMap[6]).Button) {
        const obj = { style: null, children: null };
        obj[0] = lib.button;
        obj[1] = type;
        tmp = <View style={null}>{null}</View>;
      }
    }
    return tmp;
  })}</View>;
};