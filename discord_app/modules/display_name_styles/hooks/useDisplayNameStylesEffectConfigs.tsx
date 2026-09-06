// === Module 10902: useDisplayNameStylesEffectConfigs ===

// Module 10902 (useDisplayNameStylesEffectConfigs)
import util from "util" /* 1114 */;
import DisplayNameFont from "DisplayNameFont" /* 1391 */;
import _modDef2786 from "module_2786" /* 2786 */;
import useDisplayNameStylesEffectDefaultColorsDefault from "useDisplayNameStylesEffectDefaultColors" /* 10903 */;
import noop from "module_19" /* 19 */;

require = fn;
const DISPLAY_NAME_STYLES_EFFECT_NAMES = {};
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1390).DisplayNameEffect.SOLID] = _modDef2786.OpWJ3f;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1390).DisplayNameEffect.GRADIENT] = _modDef2786["i9e/u1"];
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1390).DisplayNameEffect.NEON] = _modDef2786.x68b1F;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1390).DisplayNameEffect.TOON] = _modDef2786.otpeeM;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1390).DisplayNameEffect.POP] = _modDef2786.cjQOKb;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1390).DisplayNameEffect.GUMMY] = _modDef2786.x9Gtie;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1390).DisplayNameEffect.PRISM] = _modDef2786["/M7psm"];
let closure_5 = { [fn(1390).DisplayNameEffect.SOLID]: 3, [fn(1390).DisplayNameEffect.GRADIENT]: 2.5, [fn(1390).DisplayNameEffect.GLOW]: 2.5, [fn(1390).DisplayNameEffect.PRISM]: 2.5, [fn(1390).DisplayNameEffect.NEON]: 3, [fn(1390).DisplayNameEffect.TOON]: 3, [fn(1390).DisplayNameEffect.POP]: 3, [fn(1390).DisplayNameEffect.GUMMY]: 3 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEffectConfigs.tsx");

export { DISPLAY_NAME_STYLES_EFFECT_NAMES };
export const useDisplayNameStylesEffectConfig = function useDisplayNameStylesEffectConfig(effectId) {
  closure_0 = effectId;
  const tmp = useDisplayNameStylesEffectDefaultColorsDefault()[effectId];
  importDefault = tmp;
  const items = [effectId, tmp];
  return noop.useMemo(() => {
    const intl = util.intl;
    let OpWJ3f = previewStyles[closure_0];
    if (OpWJ3f == null) {
      OpWJ3f = _modDef2786.OpWJ3f;
    }
    previewStyles = { name: intl.string(OpWJ3f), defaultColors: colors, previewStyles: null, minContrastRatio: null };
    previewStyles = { fontId: DisplayNameFont.DisplayNameFont.DEFAULT, effectId: tmp3, colors };
    previewStyles.previewStyles = previewStyles;
    let num = closure_5[tmp3];
    if (num == null) {
      num = 3;
    }
    previewStyles.minContrastRatio = num;
    return previewStyles;
  }, items);
};