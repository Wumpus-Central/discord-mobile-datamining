// === Module 10649: useDisplayNameStylesEffectConfigs ===

// Module 10649 (useDisplayNameStylesEffectConfigs)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import DisplayNameFont from "DisplayNameFont" /* 1397 */;
import _modDef2911 from "module_2911" /* 2911 */;
import useDisplayNameStylesEffectDefaultColorsDefault from "useDisplayNameStylesEffectDefaultColors" /* 10650 */;
import noop from "module_19" /* 19 */;

require = fn;
const DISPLAY_NAME_STYLES_EFFECT_NAMES = {};
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1396).DisplayNameEffect.SOLID] = _modDef2911.OpWJ3f;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1396).DisplayNameEffect.GRADIENT] = _modDef2911["i9e/u1"];
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1396).DisplayNameEffect.NEON] = _modDef2911.x68b1F;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1396).DisplayNameEffect.TOON] = _modDef2911.otpeeM;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1396).DisplayNameEffect.POP] = _modDef2911.cjQOKb;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1396).DisplayNameEffect.GUMMY] = _modDef2911.x9Gtie;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1396).DisplayNameEffect.PRISM] = _modDef2911["/M7psm"];
let closure_5 = { [fn(1396).DisplayNameEffect.SOLID]: 3, [fn(1396).DisplayNameEffect.GRADIENT]: 2.5, [fn(1396).DisplayNameEffect.GLOW]: 2.5, [fn(1396).DisplayNameEffect.PRISM]: 2.5, [fn(1396).DisplayNameEffect.NEON]: 3, [fn(1396).DisplayNameEffect.TOON]: 3, [fn(1396).DisplayNameEffect.POP]: 3, [fn(1396).DisplayNameEffect.GUMMY]: 3 };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEffectConfigs.tsx");

export { DISPLAY_NAME_STYLES_EFFECT_NAMES };
export const useDisplayNameStylesEffectConfig = ReactCompilerGating.isReactCompilerEnabled() ? ((effectId) => {
  const obj = c;
  const cResult = obj.c(10);
  const tmp5 = useDisplayNameStylesEffectDefaultColorsDefault()[effectId];
  if (cResult[0] !== effectId) {
    const intl = util.intl;
    let OpWJ3f = obj[effectId];
    if (OpWJ3f == null) {
      OpWJ3f = _modDef2911.OpWJ3f;
    }
    const stringResult = intl.string(OpWJ3f);
    cResult[0] = effectId;
    cResult[1] = stringResult;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp5) {
    if (cResult[3] === effectId) {
      let tmp10 = cResult[4];
    }
    let num3 = closure_5[effectId];
    if (num3 == null) {
      num3 = 3;
    }
    if (cResult[5] === tmp5) {
      if (cResult[6] === tmp6) {
        if (cResult[7] === tmp10) {
          if (cResult[8] === num3) {
            let tmp13 = cResult[9];
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
  const tmp = useDisplayNameStylesEffectDefaultColorsDefault()[effectId];
  importDefault = tmp;
  const items = [effectId, tmp];
  return noop.useMemo(() => {
    const intl = util.intl;
    let OpWJ3f = obj[effectId];
    if (OpWJ3f == null) {
      OpWJ3f = _modDef2911.OpWJ3f;
    }
    obj = { name: intl.string(OpWJ3f), defaultColors: colors, previewStyles: { fontId: DisplayNameFont.DisplayNameFont.DEFAULT, effectId, colors }, minContrastRatio: null };
    let num = closure_5[effectId];
    if (num == null) {
      num = 3;
    }
    obj.minContrastRatio = num;
    return obj;
  }, items);
});