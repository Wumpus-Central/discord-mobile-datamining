// discord_app/modules/game_profile/native/components/OpenCriticRatingCircle.tsx
import set from "../../../../../_runtime/00002_set.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import inlineStyles from "../../../../../_runtime/08241_inlineStyles.js";
import inlineStylesDefault from "../../../../../_runtime/08241_inlineStyles.js";

const jsx = jsxProd.jsx;
let result = set.fileFinishedImporting("modules/game_profile/native/components/OpenCriticRatingCircle.tsx");

export default function OpenCriticRatingCircle(size) {
  size = size.size;
  const result = size / 2;
  const result1 = (size - 4) / 2;
  const result2 = 2 * Math.PI * result1;
  const result3 = Math.min(Math.max(size.rating, 0), 100) / 100;
  let obj = { width: size, height: size, children: null };
  obj = { transform: "rotate(" + 360 * diff / 2 + " " + result + " " + result + ")", cx: result, cy: result, r: result1, stroke: size.strokeColor, strokeWidth: 2, fill: "none", strokeDasharray: result2, strokeDashoffset: result2 * diff };
  diff = 1 - result3;
  obj[2] = jsx(inlineStyles.Circle, { transform: "rotate(" + 360 * diff / 2 + " " + result + " " + result + ")", cx: result, cy: result, r: result1, stroke: size.strokeColor, strokeWidth: 2, fill: "none", strokeDasharray: result2, strokeDashoffset: result2 * diff });
  return jsx(inlineStylesDefault, { transform: "rotate(" + 360 * diff / 2 + " " + result + " " + result + ")", cx: result, cy: result, r: result1, stroke: size.strokeColor, strokeWidth: 2, fill: "none", strokeDasharray: result2, strokeDashoffset: result2 * diff });
};