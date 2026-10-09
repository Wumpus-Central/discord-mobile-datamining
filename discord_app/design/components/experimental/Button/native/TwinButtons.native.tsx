// discord_app/design/components/experimental/Button/native/TwinButtons.native.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import components_Button_Button from "../../../Button/native/Button.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
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
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/Button/native/TwinButtons.native.tsx");

export const TwinButtons = ReactCompilerGating.isReactCompilerEnabled()
  ? function TwinButtons(children) {
      const cResult = require("c").c(8);
      let button = children.children;
      let obj = require("c");
      const tmp2 = closure_6(require("useFontScale").useFontScale() > 1.2);
      _require = tmp2;
      if (cResult[0] === button) {
        if (cResult[1] === tmp2.button) {
          if (cResult[5] === tmp2.container) {
            if (cResult[6] === tmp4) {
              let tmp7 = cResult[7];
            }
            return tmp7;
          }
          const obj3 = { style: tmp3, children: cResult[2] };
          const tmp10 = <View style={tmp3}>{cResult[2]}</View>;
          cResult[5] = tmp2.container;
          cResult[6] = cResult[2];
          cResult[7] = tmp10;
          tmp7 = tmp10;
        }
      }
      if (cResult[3] !== tmp2.button) {
        const fn = function s(type) {
          let tmp = null;
          if (noop.isValidElement(type)) {
            tmp = null;
            if (type.type === components_Button_Button.Button) {
              const obj = { style: button.button, children: type };
              tmp = <View style={button.button}>{type}</View>;
            }
          }
          return tmp;
        };
        cResult[3] = tmp2.button;
        cResult[4] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[4];
      }
      const Children = noop.Children;
      const mapped = Children.map(button, tmp5);
      cResult[0] = button;
      button = tmp2.button;
      cResult[1] = button;
      cResult[2] = mapped;
      const obj2 = require("useFontScale");
    }
  : function TwinButtons(children) {
      _require = undefined;
      let tmp = closure_6(require("useFontScale").useFontScale() > 1.2);
      _require = tmp;
      const obj2 = { style: tmp.container, children: null };
      const Children = noop.Children;
      obj2.children = Children.map(children.children, (type) => {
        let tmp = null;
        if (noop.isValidElement(type)) {
          tmp = null;
          if (type.type === components_Button_Button.Button) {
            const obj = { style: button.button, children: type };
            tmp = <View style={button.button}>{type}</View>;
          }
        }
        return tmp;
      });
      return <View style={tmp.container}>{null}</View>;
    };
