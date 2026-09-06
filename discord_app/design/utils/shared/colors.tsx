// discord_app/design/utils/shared/colors.tsx
import _modDef672 from "../../../../_runtime/metro/00672__.js";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("design/utils/shared/colors.tsx");

export const flattenColorOverOpaqueBackground = function flattenColorOverOpaqueBackground(token, context) {
  const obj = _modDef672(token);
  const rgbaResult = obj.rgba();
  const rgbaResult1 = _modDef672(context).rgba();
  if (1 !== rgbaResult1[3]) {
    const _Error = Error;
    const error = new Error("Expected solid cutout background color to be opaque");
    throw error;
  } else {
    const diff = 1 - tmp10;
    const _Math = Math;
    const _Math2 = Math;
    const rounded = Math.round(rgbaResult[0] * tmp10 + rgbaResult1[0] * diff);
    const _Math3 = Math;
    const rounded1 = Math.round(rgbaResult[1] * tmp10 + rgbaResult1[1] * diff);
    const rounded2 = Math.round(rgbaResult[2] * tmp10 + rgbaResult1[2] * diff);
    const tmpResult = _modDef672;
    return _modDef672.rgb(rounded, rounded1, rounded2).hex();
  }
  const obj2 = _modDef672(context);
};
