// === Module 10911: useDisplayNameStylesEffectConfigs ===

// Module 10911 (useDisplayNameStylesEffectConfigs)
import util from "util" /* 1113 */;
import DisplayNameFont from "DisplayNameFont" /* 1395 */;
import _modDef3056 from "module_3056" /* 3056 */;
import useDisplayNameStylesEffectDefaultColorsDefault from "useDisplayNameStylesEffectDefaultColors" /* 10912 */;
import noop from "module_19" /* 19 */;

require = fn;
const DISPLAY_NAME_STYLES_EFFECT_NAMES = {};
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1396).DisplayNameEffect.SOLID] = _modDef3056.OpWJ3f;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1396).DisplayNameEffect.GRADIENT] = _modDef3056["i9e/u1"];
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1396).DisplayNameEffect.NEON] = _modDef3056.x68b1F;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1396).DisplayNameEffect.TOON] = _modDef3056.otpeeM;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1396).DisplayNameEffect.POP] = _modDef3056.cjQOKb;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1396).DisplayNameEffect.GUMMY] = _modDef3056.x9Gtie;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1396).DisplayNameEffect.PRISM] = _modDef3056["/M7psm"];
let closure_5 = { [fn(1396).DisplayNameEffect.SOLID]: 3, [fn(1396).DisplayNameEffect.GRADIENT]: 2.5, [fn(1396).DisplayNameEffect.GLOW]: 2.5, [fn(1396).DisplayNameEffect.PRISM]: 2.5, [fn(1396).DisplayNameEffect.NEON]: 3, [fn(1396).DisplayNameEffect.TOON]: 3, [fn(1396).DisplayNameEffect.POP]: 3, [fn(1396).DisplayNameEffect.GUMMY]: 3 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEffectConfigs.tsx");

export { DISPLAY_NAME_STYLES_EFFECT_NAMES };
export function useDisplayNameStylesEffectConfig(effectId) {
  const tmp = useDisplayNameStylesEffectDefaultColorsDefault()[effectId];
  importDefault = tmp;
  items = [effectId, tmp];
  return noop.useMemo(() => {
    const intl = util.intl;
    let OpWJ3f = obj[effectId];
    if (OpWJ3f == null) {
      OpWJ3f = _modDef3056.OpWJ3f;
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