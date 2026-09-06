// === Module 10903: useDisplayNameStylesEffectDefaultColors ===

// Module 10903 (useDisplayNameStylesEffectDefaultColors)
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1390 */;
import useToken from "useToken" /* 4262 */;
import noop from "module_19" /* 19 */;

require = fn;
const DisplayNameStylesConstants = fn(1389);
({ DISPLAY_NAME_STYLES_GRADIENT_PRESETS: closure_4, DISPLAY_NAME_STYLES_GUMMY_PRESETS: hasOwnProperty, DISPLAY_NAME_STYLES_PRISM_PRESETS: metroRequire } = DisplayNameStylesConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEffectDefaultColors.native.tsx");

export default function useDisplayNameStylesEffectDefaultColors() {
  let obj = utils_ColorUtils;
  const hex2intResult = obj.hex2int(useToken.useToken(nativeDefault.colors.TEXT_DEFAULT));
  require = hex2intResult;
  let items = [hex2intResult];
  return noop.useMemo(() => {
    const obj = { [closure_2_0(closure_2_2[5]).DisplayNameEffect.SOLID]: items };
    items = [hex2intResult];
    const items1 = [];
    HermesBuiltin.arraySpread(19.colors, 0);
    obj[DisplayNameEffect.DisplayNameEffect.GRADIENT] = items1;
    const items2 = [];
    HermesBuiltin.arraySpread(19.colors, 0);
    obj[DisplayNameEffect.DisplayNameEffect.GLOW] = items2;
    const items3 = [];
    HermesBuiltin.arraySpread(hasOwnProperty[0], 0);
    obj[DisplayNameEffect.DisplayNameEffect.GUMMY] = items3;
    const items4 = [];
    HermesBuiltin.arraySpread(timestampProducer[0], 0);
    obj[DisplayNameEffect.DisplayNameEffect.PRISM] = items4;
    obj[DisplayNameEffect.DisplayNameEffect.TOON] = [15999128];
    obj[DisplayNameEffect.DisplayNameEffect.NEON] = [6888941];
    obj[DisplayNameEffect.DisplayNameEffect.POP] = [1036166];
    const items5 = [hex2intResult];
    obj[DisplayNameEffect.DisplayNameEffect.TEST_1] = items5;
    const items6 = [hex2intResult];
    obj[DisplayNameEffect.DisplayNameEffect.TEST_2] = items6;
    const items7 = [hex2intResult];
    obj[DisplayNameEffect.DisplayNameEffect.TEST_3] = items7;
    const items8 = [hex2intResult];
    obj[DisplayNameEffect.DisplayNameEffect.TEST_4] = items8;
    return obj;
  }, items);
};