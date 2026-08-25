// === Module 9620: DISPLAY_NAME_STYLES_EFFECT_NAMES ===

// Module 9620 (DISPLAY_NAME_STYLES_EFFECT_NAMES)
import messagesProxyDefault from "messagesProxy" /* 2695 */;
import useDisplayNameStylesEffectDefaultColorsDefault from "useDisplayNameStylesEffectDefaultColors" /* 9621 */;
import closure_3 from "noop" /* 19 */;

const require = arg1;
let obj = {};
obj[require("DisplayNameEffect").DisplayNameEffect.SOLID] = messagesProxyDefault.OpWJ3f;
obj[require("DisplayNameEffect").DisplayNameEffect.GRADIENT] = messagesProxyDefault["i9e/u1"];
obj[require("DisplayNameEffect").DisplayNameEffect.NEON] = messagesProxyDefault.x68b1F;
obj[require("DisplayNameEffect").DisplayNameEffect.TOON] = messagesProxyDefault.otpeeM;
obj[require("DisplayNameEffect").DisplayNameEffect.POP] = messagesProxyDefault.cjQOKb;
obj[require("DisplayNameEffect").DisplayNameEffect.GUMMY] = messagesProxyDefault.x9Gtie;
obj[require("DisplayNameEffect").DisplayNameEffect.PRISM] = messagesProxyDefault["/M7psm"];
let closure_5 = { [arg1(1935).DisplayNameEffect.SOLID]: 3, [arg1(1935).DisplayNameEffect.GRADIENT]: 2.5, [arg1(1935).DisplayNameEffect.GLOW]: 2.5, [arg1(1935).DisplayNameEffect.PRISM]: 2.5, [arg1(1935).DisplayNameEffect.NEON]: 3, [arg1(1935).DisplayNameEffect.TOON]: 3, [arg1(1935).DisplayNameEffect.POP]: 3, [arg1(1935).DisplayNameEffect.GUMMY]: 3 };
const result = require("set").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEffectConfigs.tsx");

export const DISPLAY_NAME_STYLES_EFFECT_NAMES = obj;
export const useDisplayNameStylesEffectConfig = function useDisplayNameStylesEffectConfig(effectId) {
  closure_0 = effectId;
  const tmp = useDisplayNameStylesEffectDefaultColorsDefault()[effectId];
  importDefault = tmp;
  const items = [effectId, tmp];
  return React.useMemo(() => {
    const intl = effectId(closure_1_2[4]).intl;
    let OpWJ3f = closure_1_4[effectId];
    if (OpWJ3f == null) {
      OpWJ3f = callback(tmp2[2]).OpWJ3f;
    }
    obj = { name: intl.string(OpWJ3f), defaultColors: callback, previewStyles: null, minContrastRatio: null };
    obj = { fontId: effectId(tmp2[5]).DisplayNameFont.DEFAULT, effectId: tmp3, colors: callback };
    obj[2] = obj;
    let num = closure_1_5[tmp3];
    if (num == null) {
      num = 3;
    }
    obj[3] = num;
    return obj;
  }, items);
};