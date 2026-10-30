// === Module 10755: useDisplayNameStylesEffectConfigs ===

// Module 10755 (useDisplayNameStylesEffectConfigs)
import util from "util" /* 1114 */;
import DisplayNameFont from "DisplayNameFont" /* 1404 */;
import _modDef2931 from "module_2931" /* 2931 */;
import useDisplayNameStylesEffectDefaultColorsDefault from "useDisplayNameStylesEffectDefaultColors" /* 10756 */;
import noop from "module_19" /* 19 */;

require = fn;
const DISPLAY_NAME_STYLES_EFFECT_NAMES = {};
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1403).DisplayNameEffect.SOLID] = _modDef2931.OpWJ3f;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1403).DisplayNameEffect.GRADIENT] = _modDef2931["i9e/u1"];
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1403).DisplayNameEffect.NEON] = _modDef2931.x68b1F;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1403).DisplayNameEffect.TOON] = _modDef2931.otpeeM;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1403).DisplayNameEffect.POP] = _modDef2931.cjQOKb;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1403).DisplayNameEffect.GUMMY] = _modDef2931.x9Gtie;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1403).DisplayNameEffect.PRISM] = _modDef2931["/M7psm"];
let closure_5 = { [fn(1403).DisplayNameEffect.SOLID]: 3, [fn(1403).DisplayNameEffect.GRADIENT]: 2.5, [fn(1403).DisplayNameEffect.GLOW]: 2.5, [fn(1403).DisplayNameEffect.PRISM]: 2.5, [fn(1403).DisplayNameEffect.NEON]: 3, [fn(1403).DisplayNameEffect.TOON]: 3, [fn(1403).DisplayNameEffect.POP]: 3, [fn(1403).DisplayNameEffect.GUMMY]: 3 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEffectConfigs.tsx");

export { DISPLAY_NAME_STYLES_EFFECT_NAMES };
export function useDisplayNameStylesEffectConfig(effectId) {
  const tmp = useDisplayNameStylesEffectDefaultColorsDefault()[effectId];
  importDefault = tmp;
  const items = [effectId, tmp];
  return noop.useMemo(() => {
    const intl = util.intl;
    let OpWJ3f = obj[effectId];
    if (OpWJ3f == null) {
      OpWJ3f = _modDef2931.OpWJ3f;
    }
    obj = { name: intl.string(OpWJ3f), defaultColors: colors, previewStyles: { fontId: DisplayNameFont.DisplayNameFont.DEFAULT, effectId, colors }, minContrastRatio: null };
    let num = closure_5[effectId];
    if (num == null) {
      num = 3;
    }
    obj.minContrastRatio = num;
    return obj;
  }, items);
}