// discord_app/modules/game_profile/native/components/OpenCriticRatingCircle.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import inlineStyles from "../../../../../_runtime/08453_inlineStyles.js";
import size from "../../../../../_runtime/metro/00002__.js";

const inlineStylesDefault = inlineStyles;

const jsx = jsxProd.jsx;
let result = size.fileFinishedImporting("modules/game_profile/native/components/OpenCriticRatingCircle.tsx");

export default function OpenCriticRatingCircle(size) {
  size = size.size;
  const result = size / 2;
  const result1 = (size - 4) / 2;
  const result2 = 2 * Math.PI * result1;
  const result3 = Math.min(Math.max(size.rating, 0), 100) / 100;
  size = { width: size, height: size, children: null };
  const obj = {
    transform: null,
    cx: result,
    cy: result,
    r: result1,
    stroke: size.strokeColor,
    strokeWidth: 2,
    fill: "none",
    strokeDasharray: result2,
    strokeDashoffset: null,
  };
  const diff = 1 - result3;
  obj.transform = "rotate(" + (360 * diff) / 2 + " " + result + " " + result + ")";
  obj.strokeDashoffset = result2 * diff;
  size.children = jsx(inlineStyles.Circle, {
    transform: null,
    cx: result,
    cy: result,
    r: result1,
    stroke: size.strokeColor,
    strokeWidth: 2,
    fill: "none",
    strokeDasharray: result2,
    strokeDashoffset: null,
  });
  return jsx(inlineStylesDefault, { width: size, height: size, children: null });
}
