// discord_app/modules/game_profile/native/components/OpenCriticRatingCircle.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react from "../../../../../_runtime/00576_react.js";
import inlineStyles from "../../../../../_runtime/08136_inlineStyles.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const inlineStylesDefault = inlineStyles;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (rating) => {
      let strokeColor;
      const obj = react;
      const cResult = obj.c(10);
      ({ strokeColor, size } = rating);
      const result = size / 2;
      const result1 = (size - 4) / 2;
      const result2 = 2 * Math.PI * result1;
      const diff = 1 - Math.min(Math.max(rating.rating, 0), 100) / 100;
      const result3 = result2 * diff;
      const combined = "rotate(" + (360 * diff) / 2 + " " + result + " " + result + ")";
      if (cResult[0] === result) {
        if (cResult[1] === result2) {
          if (cResult[2] === result1) {
            if (cResult[3] === strokeColor) {
              if (cResult[4] === result3) {
                let tmp10;
                if (cResult[5] === combined) {
                  tmp10 = cResult[6];
                }
                if (cResult[7] === size) {
                  let tmp12;
                  if (cResult[8] === tmp10) {
                    tmp12 = cResult[9];
                  }
                  return tmp12;
                }
                const tmp15 = jsx(inlineStylesDefault, { width: size, height: size, children: tmp10 });
                cResult[7] = size;
                cResult[8] = tmp10;
                cResult[9] = tmp15;
                tmp12 = tmp15;
              }
            }
          }
        }
      }
      const tmp11 = jsx(inlineStyles.Circle, {
        transform: combined,
        cx: result,
        cy: result,
        r: result1,
        stroke: strokeColor,
        strokeWidth: 2,
        fill: "none",
        strokeDasharray: result2,
        strokeDashoffset: result3,
      });
      cResult[0] = result;
      cResult[1] = result2;
      cResult[2] = result1;
      cResult[3] = strokeColor;
      cResult[4] = result3;
      cResult[5] = combined;
      cResult[6] = tmp11;
      tmp10 = tmp11;
    }
  : (size) => {
      let diff;
      size = size.size;
      const result = size / 2;
      const result1 = (size - 4) / 2;
      const result2 = 2 * Math.PI * result1;
      const strokeColor = size.strokeColor;
      const result3 = Math.min(Math.max(size.rating, 0), 100) / 100;
      ({
        transform: "rotate(" + (360 * diff) / 2 + " " + result + " " + result + ")",
        cx: result,
        cy: result,
        r: result1,
        stroke: strokeColor,
        strokeWidth: 2,
        fill: "none",
        strokeDasharray: result2,
        strokeDashoffset: result2 * diff,
      });
      diff = 1 - result3;
      inlineStylesDefault;
      const Circle = inlineStyles.Circle;
      return (
        <tmp5 width={size} height={size}>
          {null}
        </tmp5>
      );
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/game_profile/native/components/OpenCriticRatingCircle.tsx");

export default tmp2;
