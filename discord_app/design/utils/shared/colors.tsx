// discord_app/design/utils/shared/colors.tsx
import set from "../../../../_runtime/00002_set.js";
import nDefault from "../../../../_runtime/00686_n.js";

const result = set.fileFinishedImporting("design/utils/shared/colors.tsx");

export const flattenColorOverOpaqueBackground = function flattenColorOverOpaqueBackground(token, context) {
  const obj = nDefault(token);
  const tmp = importDefault;
  const rgbaResult = obj.rgba();
  const rgbaResult1 = nDefault(context).rgba();
  if (1 !== rgbaResult1[3]) {
    const _Error = Error;
    error = new Error("Expected solid cutout background color to be opaque");
    throw error;
  } else {
    const diff = 1 - tmp10;
    const _Math = Math;
    const _Math2 = Math;
    const rounded = Math.round(rgbaResult[0] * tmp10 + rgbaResult1[0] * diff);
    const _Math3 = Math;
    const rounded1 = Math.round(rgbaResult[1] * tmp10 + rgbaResult1[1] * diff);
    const rounded2 = Math.round(rgbaResult[2] * tmp10 + rgbaResult1[2] * diff);
    const tmpResult = nDefault;
    return nDefault.rgb(rounded, rounded1, rounded2).hex();
  }
  const obj2 = nDefault(context);
};
