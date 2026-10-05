// discord_app/modules/intelligence_layer/search/native/components/SmartSearchBottomFade.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import _modDef683 from "../../../../../../_runtime/metro/00683__.js";
import Constants from "../../../../../Constants.tsx";
import LinearGradientDefault from "../../../../../../_runtime/05605_LinearGradient.js";
import useSearchHostSurface from "../useSearchHostSurface.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const VerticalGradient = Constants.VerticalGradient;
const jsx = Fragment.jsx;
const locations = [0, 0.8];
let closure_7 = createStyles.createStyles((height) => {
  let rect;
  const obj = { fade: rect };
  rect = { position: "absolute", left: 0, right: 0, bottom: 0, height };
  return obj;
});
let memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (height) => {
        let tmp5;
        const obj = react2;
        const cResult = obj.c(8);
        const tmp3 = closure_7(height.height);
        const obj2 = useSearchHostSurface;
        const searchHostSurfaceColor = obj2.useSearchHostSurfaceColor();
        if (cResult[0] !== searchHostSurfaceColor) {
          const obj3 = _modDef683(searchHostSurfaceColor);
          const alphaResult = obj3.alpha(0);
          const hexResult = alphaResult.hex();
          cResult[0] = searchHostSurfaceColor;
          cResult[1] = hexResult;
          tmp5 = hexResult;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] === searchHostSurfaceColor) {
          let tmp8;
          if (cResult[3] === tmp5) {
            tmp8 = cResult[4];
          }
          if (cResult[5] === tmp8) {
            let tmp9;
            if (cResult[6] === tmp3.fade) {
              tmp9 = cResult[7];
            }
            return tmp9;
          }
          ({ START: obj5.start, END: obj5.end } = VerticalGradient);
          const tmp14 = jsx(LinearGradientDefault, {
            pointerEvents: "none",
            style: tmp3.fade,
            start: null,
            end: null,
            colors: tmp8,
            locations,
          });
          cResult[5] = tmp8;
          cResult[6] = tmp3.fade;
          cResult[7] = tmp14;
          tmp9 = tmp14;
        }
        const items = [tmp5, searchHostSurfaceColor];
        cResult[2] = searchHostSurfaceColor;
        cResult[3] = tmp5;
        cResult[4] = items;
        tmp8 = items;
      }
    : (height) => {
        let searchHostSurfaceColor;
        const tmp = closure_7(height.height);
        let obj = searchHostSurfaceColor(16866);
        searchHostSurfaceColor = obj.useSearchHostSurfaceColor();
        let items = [searchHostSurfaceColor];
        const memo = react.useMemo(() => {
          const items = [,];
          const obj = _modDef683(searchHostSurfaceColor);
          const alphaResult = obj.alpha(0);
          items[0] = alphaResult.hex();
          items[1] = searchHostSurfaceColor;
          return items;
        }, items);
        return jsx(LinearGradientDefault, {
          pointerEvents: "none",
          style: tmp.fade,
          start: VerticalGradient.START,
          end: VerticalGradient.END,
          colors: memo,
          locations,
        });
      },
);
const result = size.fileFinishedImporting(
  "modules/intelligence_layer/search/native/components/SmartSearchBottomFade.tsx",
);

export default memoResult;
