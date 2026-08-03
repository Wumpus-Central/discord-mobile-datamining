// === Module 8701: useDisplayNameStylesEffectDefaultColors ===

// Module 8701 (useDisplayNameStylesEffectDefaultColors)
import noop from "noop";
import items3 from "items3";

let c4;
let c5;
let closure_6;
let require = arg1;
({ DISPLAY_NAME_STYLES_GRADIENT_PRESETS: c4, DISPLAY_NAME_STYLES_GUMMY_PRESETS: c5, DISPLAY_NAME_STYLES_PRISM_PRESETS: closure_6 } = items3);
const result = require("int2hslRaw").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEffectDefaultColors.native.tsx");

export default function useDisplayNameStylesEffectDefaultColors() {
  let obj = require(688) /* int2hslRaw */;
  const hex2intResult = obj.hex2int(require(3959) /* map */.useToken(importDefault(712).colors.TEXT_DEFAULT));
  require = hex2intResult;
  let items = [hex2intResult];
  return React.useMemo(() => {
    const obj = { [outer1_0(outer1_2[5]).DisplayNameEffect.SOLID]: items };
    items = [closure_0];
    const items1 = [];
    HermesBuiltin.arraySpread(outer1_4[0].colors, 0);
    obj[hex2intResult(outer1_2[5]).DisplayNameEffect.GRADIENT] = items1;
    const items2 = [];
    HermesBuiltin.arraySpread(outer1_4[0].colors, 0);
    obj[hex2intResult(outer1_2[5]).DisplayNameEffect.GLOW] = items2;
    const items3 = [];
    HermesBuiltin.arraySpread(outer1_5[0], 0);
    obj[hex2intResult(outer1_2[5]).DisplayNameEffect.GUMMY] = items3;
    const items4 = [];
    HermesBuiltin.arraySpread(outer1_6[0], 0);
    obj[hex2intResult(outer1_2[5]).DisplayNameEffect.PRISM] = items4;
    obj[hex2intResult(outer1_2[5]).DisplayNameEffect.TOON] = [15999128];
    obj[hex2intResult(outer1_2[5]).DisplayNameEffect.NEON] = [6888941];
    obj[hex2intResult(outer1_2[5]).DisplayNameEffect.POP] = [1036166];
    const items5 = [closure_0];
    obj[hex2intResult(outer1_2[5]).DisplayNameEffect.TEST_1] = items5;
    const items6 = [closure_0];
    obj[hex2intResult(outer1_2[5]).DisplayNameEffect.TEST_2] = items6;
    const items7 = [closure_0];
    obj[hex2intResult(outer1_2[5]).DisplayNameEffect.TEST_3] = items7;
    const items8 = [closure_0];
    obj[hex2intResult(outer1_2[5]).DisplayNameEffect.TEST_4] = items8;
    return obj;
  }, items);
};