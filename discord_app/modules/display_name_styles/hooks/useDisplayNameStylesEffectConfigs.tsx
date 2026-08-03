import noop from "noop";

const require = arg1;
let obj = {};
obj[require("DisplayNameEffect").DisplayNameEffect.SOLID] = require("messagesProxy").OpWJ3f;
obj[require("DisplayNameEffect").DisplayNameEffect.GRADIENT] = require("messagesProxy")["i9e/u1"];
obj[require("DisplayNameEffect").DisplayNameEffect.NEON] = require("messagesProxy").x68b1F;
obj[require("DisplayNameEffect").DisplayNameEffect.TOON] = require("messagesProxy").otpeeM;
obj[require("DisplayNameEffect").DisplayNameEffect.POP] = require("messagesProxy").cjQOKb;
obj[require("DisplayNameEffect").DisplayNameEffect.GUMMY] = require("messagesProxy").x9Gtie;
obj[require("DisplayNameEffect").DisplayNameEffect.PRISM] = require("messagesProxy")["/M7psm"];
let closure_5 = { [arg1(1887).DisplayNameEffect.SOLID]: 3, [arg1(1887).DisplayNameEffect.GRADIENT]: 2.5, [arg1(1887).DisplayNameEffect.GLOW]: 2.5, [arg1(1887).DisplayNameEffect.PRISM]: 2.5, [arg1(1887).DisplayNameEffect.NEON]: 3, [arg1(1887).DisplayNameEffect.TOON]: 3, [arg1(1887).DisplayNameEffect.POP]: 3, [arg1(1887).DisplayNameEffect.GUMMY]: 3 };
const result = require("messagesProxy").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEffectConfigs.tsx");

export const DISPLAY_NAME_STYLES_EFFECT_NAMES = obj;
export const useDisplayNameStylesEffectConfig = function useDisplayNameStylesEffectConfig(effectId) {
  let closure_0 = effectId;
  const tmp = importDefault(8396)()[effectId];
  importDefault = tmp;
  const items = [effectId, tmp];
  return React.useMemo(() => {
    const intl = effectId(outer1_2[4]).intl;
    let OpWJ3f = outer1_4[effectId];
    if (OpWJ3f == null) {
      OpWJ3f = tmp(tmp2[2]).OpWJ3f;
    }
    let obj = { name: intl.string(OpWJ3f), defaultColors: tmp, previewStyles: null, minContrastRatio: null };
    obj = { fontId: tmp(tmp2[5]).DisplayNameFont.DEFAULT, effectId: tmp3, colors: tmp };
    obj[2] = obj;
    let num = outer1_5[tmp3];
    if (num == null) {
      num = 3;
    }
    obj[3] = num;
    return obj;
  }, items);
};