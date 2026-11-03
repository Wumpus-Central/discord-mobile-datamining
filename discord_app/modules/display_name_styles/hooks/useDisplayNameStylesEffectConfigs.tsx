// discord_app/modules/display_name_styles/hooks/useDisplayNameStylesEffectConfigs.tsx
import util from "../../../intl/index.native.tsx";
import DisplayNameFont from "../../../../discord_common/js/shared/shared-constants/DisplayNameFont.tsx";
import _modDef3059 from "../intl/DisplayNameStyles.messages.js";
import useDisplayNameStylesEffectDefaultColorsDefault from "useDisplayNameStylesEffectDefaultColors.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const DISPLAY_NAME_STYLES_EFFECT_NAMES = {};
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1404).DisplayNameEffect.SOLID] = _modDef3059.OpWJ3f;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1404).DisplayNameEffect.GRADIENT] = _modDef3059["i9e/u1"];
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1404).DisplayNameEffect.NEON] = _modDef3059.x68b1F;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1404).DisplayNameEffect.TOON] = _modDef3059.otpeeM;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1404).DisplayNameEffect.POP] = _modDef3059.cjQOKb;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1404).DisplayNameEffect.GUMMY] = _modDef3059.x9Gtie;
DISPLAY_NAME_STYLES_EFFECT_NAMES[fn(1404).DisplayNameEffect.PRISM] = _modDef3059["/M7psm"];
let closure_5 = {
  [fn(1404).DisplayNameEffect.SOLID]: 3,
  [fn(1404).DisplayNameEffect.GRADIENT]: 2.5,
  [fn(1404).DisplayNameEffect.GLOW]: 2.5,
  [fn(1404).DisplayNameEffect.PRISM]: 2.5,
  [fn(1404).DisplayNameEffect.NEON]: 3,
  [fn(1404).DisplayNameEffect.TOON]: 3,
  [fn(1404).DisplayNameEffect.POP]: 3,
  [fn(1404).DisplayNameEffect.GUMMY]: 3,
};
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
      OpWJ3f = _modDef3059.OpWJ3f;
    }
    obj = {
      name: intl.string(OpWJ3f),
      defaultColors: colors,
      previewStyles: { fontId: DisplayNameFont.DisplayNameFont.DEFAULT, effectId, colors },
      minContrastRatio: null,
    };
    let num = closure_5[effectId];
    if (num == null) {
      num = 3;
    }
    obj.minContrastRatio = num;
    return obj;
  }, items);
}
