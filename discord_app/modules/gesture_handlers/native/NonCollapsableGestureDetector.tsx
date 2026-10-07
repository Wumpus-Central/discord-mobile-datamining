// discord_app/modules/gesture_handlers/native/NonCollapsableGestureDetector.tsx
import c from "../../../../_runtime/00576_c.js";
import LegacyBaseButton from "../../../../_runtime/06147_LegacyBaseButton.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["children"];
let closure_3 = ["children"];
const View = fn(17).View;
const jsx = fn(21).jsx;
const style = { flex: 1 };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/gesture_handlers/native/NonCollapsableGestureDetector.tsx");

export const NonCollapsableGestureDetector = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const cResult = c.c(8);
      if (cResult[0] !== children) {
        children = children.children;
        const tmp8 = _objectWithoutProperties(children, closure_2);
        cResult[0] = children;
        cResult[1] = children;
        cResult[2] = tmp8;
        let tmp5 = tmp8;
        let tmp4 = children;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      if (cResult[3] !== tmp4) {
        const obj2 = { style, collapsable: false, children: tmp4 };
        const tmp13 = (
          <View style={style} collapsable={false}>
            {tmp4}
          </View>
        );
        cResult[3] = tmp4;
        cResult[4] = tmp13;
        let tmp9 = tmp13;
      } else {
        tmp9 = cResult[4];
      }
      if (cResult[5] === tmp5) {
        if (cResult[6] === tmp9) {
          let tmp14 = cResult[7];
        }
        return tmp14;
      }
      const obj3 = {};
      const merged = Object.assign(tmp5);
      obj3.children = tmp9;
      const tmp16 = jsx(LegacyBaseButton.GestureDetector, {});
      cResult[5] = tmp5;
      cResult[6] = tmp9;
      cResult[7] = tmp16;
      tmp14 = tmp16;
    }
  : (children) => {
      const obj = {};
      const merged = Object.assign(_objectWithoutProperties(children, closure_3));
      obj.children = (
        <View style={style} collapsable={false}>
          {children.children}
        </View>
      );
      return jsx(LegacyBaseButton.GestureDetector, {});
    };
