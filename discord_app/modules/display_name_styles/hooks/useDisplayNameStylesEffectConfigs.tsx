// === Module 11245: useDisplayNameStylesEffectConfigs ===

// Module 11245 (useDisplayNameStylesEffectConfigs)
import util from "util" /* 1115 */;
import DisplayNameFont from "DisplayNameFont" /* 1392 */;
import _modDef2874 from "module_2874" /* 2874 */;
import useDisplayNameStylesEffectDefaultColorsDefault from "useDisplayNameStylesEffectDefaultColors" /* 11246 */;
import noop from "module_19" /* 19 */;

require = fn;
const DISPLAY_NAME_STYLES_EFFECT_NAMES = {};
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1391).DisplayNameEffect.SOLID] = _modDef2874.OpWJ3f;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1391).DisplayNameEffect.GRADIENT] = _modDef2874["i9e/u1"];
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1391).DisplayNameEffect.NEON] = _modDef2874.x68b1F;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1391).DisplayNameEffect.TOON] = _modDef2874.otpeeM;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1391).DisplayNameEffect.POP] = _modDef2874.cjQOKb;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1391).DisplayNameEffect.GUMMY] = _modDef2874.x9Gtie;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1391).DisplayNameEffect.PRISM] = _modDef2874["/M7psm"];
let closure_5 = { [fn(1391).DisplayNameEffect.SOLID]: 3, [fn(1391).DisplayNameEffect.GRADIENT]: 2.5, [fn(1391).DisplayNameEffect.GLOW]: 2.5, [fn(1391).DisplayNameEffect.PRISM]: 2.5, [fn(1391).DisplayNameEffect.NEON]: 3, [fn(1391).DisplayNameEffect.TOON]: 3, [fn(1391).DisplayNameEffect.POP]: 3, [fn(1391).DisplayNameEffect.GUMMY]: 3 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEffectConfigs.tsx");

export { DISPLAY_NAME_STYLES_EFFECT_NAMES };
export const useDisplayNameStylesEffectConfig = function useDisplayNameStylesEffectConfig(effectId) {
  const tmp = useDisplayNameStylesEffectDefaultColorsDefault()[effectId];
  importDefault = tmp;
  const items = [effectId, tmp];
  return noop.useMemo(() => {
    const intl = util.intl;
    let OpWJ3f = obj[effectId];
    if (OpWJ3f == null) {
      OpWJ3f = _modDef2874.OpWJ3f;
    }
    obj = { name: intl.string(OpWJ3f), defaultColors: colors, previewStyles: { fontId: DisplayNameFont.DisplayNameFont.DEFAULT, effectId, colors }, minContrastRatio: null };
    let num = closure_5[effectId];
    if (num == null) {
      num = 3;
    }
    obj.minContrastRatio = num;
    return obj;
  }, items);
};