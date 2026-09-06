// === Module 8904: TwinButtons ===

// Module 8904 (TwinButtons)
import nativeDefault from "native" /* 576 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles((arg0) => {
  let str = "row";
  if (arg0) {
    str = "column";
  }
  const container = { flexDirection: str, gap: null };
  const space = nativeDefault.space;
  container.gap = arg0 ? space.PX_8 : space.PX_12;
  return { container, button: { flex: 1 } };
});
const size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/Button/native/TwinButtons.native.tsx");

export const TwinButtons = function TwinButtons(children) {
  _require = undefined;
  let obj = require("useFontScale");
  let tmp = closure_6(obj.useFontScale() > 1.2);
  _require = tmp;
  obj = { style: tmp.container, children: null };
  const Children = noop.Children;
  obj.children = Children.map(children.children, (type) => {
    let tmp = null;
    if (noop.isValidElement(type)) {
      tmp = null;
      if (type.type === components_Button_Button.Button) {
        const obj = { style: button.button, children: type };
        tmp = <View style={button.button}>{arg0}</View>;
      }
    }
    return tmp;
  });
  return <View style={tmp.container}>{null}</View>;
};