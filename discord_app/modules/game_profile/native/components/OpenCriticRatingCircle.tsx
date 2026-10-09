// === Module 8924: OpenCriticRatingCircle ===

// Module 8924 (OpenCriticRatingCircle)
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import inlineStyles from "inlineStyles" /* 7559 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;

const jsx = jsxProd.jsx;
let result = size.fileFinishedImporting("modules/game_profile/native/components/OpenCriticRatingCircle.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function OpenCriticRatingCircle(rating) {
  const cResult = c.c(10);
  ({ strokeColor, size } = rating);
  const result = size / 2;
  const result1 = (size - 4) / 2;
  const result2 = 2 * Math.PI * result1;
  const diff = 1 - Math.min(Math.max(rating.rating, 0), 100) / 100;
  const result3 = result2 * diff;
  const combined = "rotate(" + 360 * diff / 2 + " " + result + " " + result + ")";
  if (cResult[0] === result) {
    if (cResult[1] === result2) {
      if (cResult[2] === result1) {
        if (cResult[3] === strokeColor) {
          if (cResult[4] === result3) {
            if (cResult[5] === combined) {
              let tmp10 = cResult[6];
            }
            if (cResult[7] === size) {
              if (cResult[8] === tmp10) {
                let tmp12 = cResult[9];
              }
              return tmp12;
            }
            const size1 = { width: size, height: size, children: tmp10 };
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
  const tmp11 = jsx(inlineStyles.Circle, { transform: combined, cx: result, cy: result, r: result1, stroke: strokeColor, strokeWidth: 2, fill: "none", strokeDasharray: result2, strokeDashoffset: result3 });
  cResult[0] = result;
  cResult[1] = result2;
  cResult[2] = result1;
  cResult[3] = strokeColor;
  cResult[4] = result3;
  cResult[5] = combined;
  cResult[6] = tmp11;
  tmp10 = tmp11;
}) : (function OpenCriticRatingCircle(size) {
  size = size.size;
  const result = size / 2;
  const result1 = (size - 4) / 2;
  const result2 = 2 * Math.PI * result1;
  const result3 = Math.min(Math.max(size.rating, 0), 100) / 100;
  const size1 = { width: size, height: size, children: null };
  const obj = { transform: null, cx: result, cy: result, r: result1, stroke: size.strokeColor, strokeWidth: 2, fill: "none", strokeDasharray: result2, strokeDashoffset: null };
  const diff = 1 - result3;
  obj.transform = "rotate(" + 360 * diff / 2 + " " + result + " " + result + ")";
  obj.strokeDashoffset = result2 * diff;
  size1.children = jsx(inlineStyles.Circle, { transform: null, cx: result, cy: result, r: result1, stroke: size.strokeColor, strokeWidth: 2, fill: "none", strokeDasharray: result2, strokeDashoffset: null });
  return jsx(inlineStylesDefault, { width: size, height: size, children: null });
});