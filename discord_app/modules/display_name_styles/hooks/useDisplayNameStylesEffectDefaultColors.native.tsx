// === Module 9458: useDisplayNameStylesEffectDefaultColors ===

// Module 9458 (useDisplayNameStylesEffectDefaultColors)
import int2hslRaw from "int2hslRaw" /* 688 */;
import ThemesDefault from "Themes" /* 712 */;
import map from "map" /* 4097 */;
import closure_3 from "noop" /* 19 */;
import items3 from "items3" /* 1934 */;

require = arg1;
({ DISPLAY_NAME_STYLES_GRADIENT_PRESETS: c4, DISPLAY_NAME_STYLES_GUMMY_PRESETS: c5, DISPLAY_NAME_STYLES_PRISM_PRESETS: closure_6 } = items3);
const result = require("set").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEffectDefaultColors.native.tsx");

export default function useDisplayNameStylesEffectDefaultColors() {
  let obj = int2hslRaw;
  const hex2intResult = obj.hex2int(map.useToken(ThemesDefault.colors.TEXT_DEFAULT));
  require = hex2intResult;
  let items = [hex2intResult];
  return React.useMemo(() => {
    const obj = { [closure_1_0(closure_1_2[5]).DisplayNameEffect.SOLID]: items };
    items = [closure_0];
    const items1 = [];
    HermesBuiltin.arraySpread(closure_1_4[0].colors, 0);
    obj[hex2intResult(closure_1_2[5]).DisplayNameEffect.GRADIENT] = items1;
    const items2 = [];
    HermesBuiltin.arraySpread(closure_1_4[0].colors, 0);
    obj[hex2intResult(closure_1_2[5]).DisplayNameEffect.GLOW] = items2;
    const items3 = [];
    HermesBuiltin.arraySpread(closure_1_5[0], 0);
    obj[hex2intResult(closure_1_2[5]).DisplayNameEffect.GUMMY] = items3;
    const items4 = [];
    HermesBuiltin.arraySpread(closure_1_6[0], 0);
    obj[hex2intResult(closure_1_2[5]).DisplayNameEffect.PRISM] = items4;
    obj[hex2intResult(closure_1_2[5]).DisplayNameEffect.TOON] = [15999128];
    obj[hex2intResult(closure_1_2[5]).DisplayNameEffect.NEON] = [6888941];
    obj[hex2intResult(closure_1_2[5]).DisplayNameEffect.POP] = [1036166];
    const items5 = [closure_0];
    obj[hex2intResult(closure_1_2[5]).DisplayNameEffect.TEST_1] = items5;
    const items6 = [closure_0];
    obj[hex2intResult(closure_1_2[5]).DisplayNameEffect.TEST_2] = items6;
    const items7 = [closure_0];
    obj[hex2intResult(closure_1_2[5]).DisplayNameEffect.TEST_3] = items7;
    const items8 = [closure_0];
    obj[hex2intResult(closure_1_2[5]).DisplayNameEffect.TEST_4] = items8;
    return obj;
  }, items);
};