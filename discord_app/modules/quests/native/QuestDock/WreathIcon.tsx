// discord_app/modules/quests/native/QuestDock/WreathIcon.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import BaseIconImage from "../../../../design/components/Icon/native/BaseIconImage.tsx";
import _mod14922 from "../../../../../_runtime/metro/14922__.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["style", "color"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/WreathIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(9);
      if (cResult[0] !== arg0) {
        ({ style, color } = arg0);
        const tmp8 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = tmp8;
        cResult[2] = style;
        cResult[3] = color;
        let INTERACTIVE_TEXT_DEFAULT = color;
        let tmp5 = style;
        let tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        INTERACTIVE_TEXT_DEFAULT = cResult[3];
      }
      if (undefined === INTERACTIVE_TEXT_DEFAULT) {
        INTERACTIVE_TEXT_DEFAULT = nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT;
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = _mod14922;
        cResult[4] = tmpResult;
        let tmp10 = tmpResult;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] === INTERACTIVE_TEXT_DEFAULT) {
        if (cResult[6] === tmp4) {
          if (cResult[7] === tmp5) {
            let tmp12 = cResult[8];
          }
          return tmp12;
        }
      }
      const merged = Object.assign(tmp4);
      const tmp14 = jsx(BaseIconImage.BaseIconImage, { source: tmp10, color: INTERACTIVE_TEXT_DEFAULT, style: tmp5 });
      cResult[5] = INTERACTIVE_TEXT_DEFAULT;
      cResult[6] = tmp4;
      cResult[7] = tmp5;
      cResult[8] = tmp14;
      tmp12 = tmp14;
      const obj2 = { source: tmp10, color: INTERACTIVE_TEXT_DEFAULT, style: tmp5 };
    }
  : (color) => {
      let INTERACTIVE_TEXT_DEFAULT = color.color;
      if (INTERACTIVE_TEXT_DEFAULT === undefined) {
        INTERACTIVE_TEXT_DEFAULT = nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT;
      }
      const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
      const merged1 = Object.assign(merged);
      return jsx(BaseIconImage.BaseIconImage, {
        source: _mod14922,
        color: INTERACTIVE_TEXT_DEFAULT,
        style: color.style,
      });
    };
