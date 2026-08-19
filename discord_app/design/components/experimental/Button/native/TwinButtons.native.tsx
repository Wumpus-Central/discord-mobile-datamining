// discord_app/design/components/experimental/Button/native/TwinButtons.native.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../Styles/native/createStyles.tsx";
import { getFontScale } from "../../../../../modules/screen/native/useFontScale.tsx";

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
  let obj = getFontScale;
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