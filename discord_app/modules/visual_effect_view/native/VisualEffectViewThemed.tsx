// discord_app/modules/visual_effect_view/native/VisualEffectViewThemed.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import shared from "../../../design/shared.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import VisualEffectViewDefault from "VisualEffectView.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const forwardRefResult = react.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        const obj = react2;
        const cResult = obj.c(4);
        let str = "dark";
        const tmp4 = useThemeDefault();
        const obj2 = shared;
        if (obj2.isThemeLight(tmp4)) {
          str = "light";
        }
        if (cResult[0] === str) {
          if (cResult[1] === arg0) {
            let tmp5;
            if (cResult[2] === ref) {
              tmp5 = cResult[3];
            }
            return tmp5;
          }
        }
        VisualEffectViewDefault;
        const merged = Object.assign(arg0);
        const tmp8 = <tmp3Result ref={ref} blurTheme={str} />;
        cResult[0] = str;
        cResult[1] = arg0;
        cResult[2] = ref;
        cResult[3] = tmp8;
        tmp5 = tmp8;
      }
    : (arg0, ref) => {
        let str = "dark";
        const tmp3 = useThemeDefault();
        const obj = shared;
        if (obj.isThemeLight(tmp3)) {
          str = "light";
        }
        VisualEffectViewDefault;
        const merged = Object.assign(arg0);
        return <tmpResult ref={ref} blurTheme={str} />;
      },
);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewThemed.tsx");

export default forwardRefResult;
