// discord_app/modules/checkpoint/native/components/CheckpointText.tsx
import c from "../../../../../_runtime/00576_c.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import CheckpointStepHeaderRefContextDefault from "CheckpointStepHeaderRefContext.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["children", "style", "isStepHeading"];
const jsx = fn(21).jsx;
let closure_7 = { color: fn(6054).CHECKPOINT_PRIMARY };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointText.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointText(arg0) {
      const cResult = c.c(13);
      if (cResult[0] !== arg0) {
        ({ children, style, isStepHeading } = arg0);
        const tmp10 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = children;
        cResult[2] = tmp10;
        cResult[3] = style;
        cResult[4] = isStepHeading;
        let tmp7 = isStepHeading;
        let tmp6 = style;
        let tmp5 = tmp10;
        let tmp4 = children;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
      }
      let str = "header";
      const context = noop.useContext(CheckpointStepHeaderRefContextDefault);
      if (!(undefined !== tmp7 && tmp7)) {
        str = tmp5.accessibilityRole;
      }
      let tmp13;
      if (undefined !== tmp7 && tmp7) {
        tmp13 = context;
      }
      if (cResult[5] !== tmp6) {
        const items = [closure_7, tmp6];
        cResult[5] = tmp6;
        cResult[6] = items;
        let tmp14 = items;
      } else {
        tmp14 = cResult[6];
      }
      if (cResult[7] === tmp4) {
        if (cResult[8] === tmp5) {
          if (cResult[9] === str) {
            if (cResult[10] === tmp13) {
              if (cResult[11] === tmp14) {
                let tmp16 = cResult[12];
              }
              return tmp16;
            }
          }
        }
      }
      const obj2 = {};
      const merged = Object.assign(tmp5);
      obj2.accessibilityRole = str;
      obj2.ref = tmp13;
      obj2.style = tmp14;
      obj2.children = tmp4;
      const tmp18 = jsx(Text_Text.Text, {});
      cResult[7] = tmp4;
      cResult[8] = tmp5;
      cResult[9] = str;
      cResult[10] = tmp13;
      cResult[11] = tmp14;
      cResult[12] = tmp18;
      tmp16 = tmp18;
    }
  : function CheckpointText(isStepHeading) {
      let flag = isStepHeading.isStepHeading;
      ({ children, style } = isStepHeading);
      if (flag === undefined) {
        flag = false;
      }
      const merged = Object.assign(isStepHeading, Object.assign({ children: 0, style: 0, isStepHeading: 0 }));
      const context = noop.useContext(CheckpointStepHeaderRefContextDefault);
      const obj = {};
      const merged1 = Object.assign(merged);
      let str = "header";
      if (!flag) {
        str = merged.accessibilityRole;
      }
      obj.accessibilityRole = str;
      let tmp5;
      if (flag) {
        tmp5 = context;
      }
      obj.ref = tmp5;
      const items = [closure_7, style];
      obj.style = items;
      obj.children = children;
      return jsx(Text_Text.Text, {});
    };
