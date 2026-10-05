// === Module 10636: useDisplayNameStylesEffectConfigs ===

// Module 10636 (useDisplayNameStylesEffectConfigs)
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1396 */;
import DisplayNameFont from "DisplayNameFont" /* 1397 */;
import _modDef2883 from "module_2883" /* 2883 */;
import useDisplayNameStylesEffectDefaultColorsDefault from "useDisplayNameStylesEffectDefaultColors" /* 10637 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

const DISPLAY_NAME_STYLES_EFFECT_NAMES = {};
DISPLAY_NAME_STYLES_EFFECT_NAMES[DisplayNameEffect.DisplayNameEffect.SOLID] = _modDef2883.OpWJ3f;
DISPLAY_NAME_STYLES_EFFECT_NAMES[DisplayNameEffect.DisplayNameEffect.GRADIENT] = _modDef2883["i9e/u1"];
DISPLAY_NAME_STYLES_EFFECT_NAMES[DisplayNameEffect.DisplayNameEffect.NEON] = _modDef2883.x68b1F;
DISPLAY_NAME_STYLES_EFFECT_NAMES[DisplayNameEffect.DisplayNameEffect.TOON] = _modDef2883.otpeeM;
DISPLAY_NAME_STYLES_EFFECT_NAMES[DisplayNameEffect.DisplayNameEffect.POP] = _modDef2883.cjQOKb;
DISPLAY_NAME_STYLES_EFFECT_NAMES[DisplayNameEffect.DisplayNameEffect.GUMMY] = _modDef2883.x9Gtie;
DISPLAY_NAME_STYLES_EFFECT_NAMES[DisplayNameEffect.DisplayNameEffect.PRISM] = _modDef2883["/M7psm"];
let closure_5 = { [DisplayNameEffect.DisplayNameEffect.SOLID]: 3, [DisplayNameEffect.DisplayNameEffect.GRADIENT]: 2.5, [DisplayNameEffect.DisplayNameEffect.GLOW]: 2.5, [DisplayNameEffect.DisplayNameEffect.PRISM]: 2.5, [DisplayNameEffect.DisplayNameEffect.NEON]: 3, [DisplayNameEffect.DisplayNameEffect.TOON]: 3, [DisplayNameEffect.DisplayNameEffect.POP]: 3, [DisplayNameEffect.DisplayNameEffect.GUMMY]: 3 };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((effectId) => {
  let tmp6;
  const obj = react2;
  const cResult = obj.c(10);
  const tmp5 = useDisplayNameStylesEffectDefaultColorsDefault()[effectId];
  if (cResult[0] !== effectId) {
    const intl = intl2.intl;
    let OpWJ3f = obj[effectId];
    const string = intl.string;
    if (OpWJ3f == null) {
      OpWJ3f = _modDef2883.OpWJ3f;
    }
    const stringResult = string(OpWJ3f);
    cResult[0] = effectId;
    cResult[1] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp5) {
    let tmp10;
    if (cResult[3] === effectId) {
      tmp10 = cResult[4];
    }
    let num3 = closure_5[effectId];
    if (num3 == null) {
      num3 = 3;
    }
    if (cResult[5] === tmp5) {
      if (cResult[6] === tmp6) {
        if (cResult[7] === tmp10) {
          let tmp13;
          if (cResult[8] === num3) {
            tmp13 = cResult[9];
          }
          return tmp13;
        }
      }
    }
    const obj2 = { name: tmp6, defaultColors: tmp5, previewStyles: tmp10, minContrastRatio: num3 };
    cResult[5] = tmp5;
    cResult[6] = tmp6;
    cResult[7] = tmp10;
    cResult[8] = num3;
    cResult[9] = obj2;
    tmp13 = obj2;
  }
  const obj3 = { fontId: DisplayNameFont.DisplayNameFont.DEFAULT, effectId, colors: tmp5 };
  cResult[2] = tmp5;
  cResult[3] = effectId;
  cResult[4] = obj3;
  tmp10 = obj3;
}) : ((effectId) => {
  let closure_1;
  const tmp = useDisplayNameStylesEffectDefaultColorsDefault()[effectId];
  importDefault = tmp;
  const items = [effectId, tmp];
  return react.useMemo(() => {
    let num;
    let obj;
    const intl = intl2.intl;
    let OpWJ3f = obj[effectId];
    const string = intl.string;
    if (OpWJ3f == null) {
      OpWJ3f = _modDef2883.OpWJ3f;
    }
    obj = { name: string(OpWJ3f), defaultColors: colors, previewStyles: { fontId: DisplayNameFont.DisplayNameFont.DEFAULT, effectId, colors }, minContrastRatio: num };
    num = closure_5[effectId];
    ({ fontId: DisplayNameFont.DisplayNameFont.DEFAULT, effectId, colors });
    if (num == null) {
      num = 3;
    }
    return obj;
  }, items);
});
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEffectConfigs.tsx");

export { DISPLAY_NAME_STYLES_EFFECT_NAMES };
export const useDisplayNameStylesEffectConfig = tmp2;