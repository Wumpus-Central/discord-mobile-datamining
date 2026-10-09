// === Module 10235: useDisplayNameStylesEffectDefaultColors ===

// Module 10235 (useDisplayNameStylesEffectDefaultColors)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1409 */;
import useToken from "useToken" /* 4779 */;
import noop from "module_19" /* 19 */;

require = fn;
const DisplayNameStylesConstants = fn(1408);
({ DISPLAY_NAME_STYLES_GRADIENT_PRESETS: closure_4, DISPLAY_NAME_STYLES_GUMMY_PRESETS: hasOwnProperty, DISPLAY_NAME_STYLES_PRISM_PRESETS: metroRequire } = DisplayNameStylesConstants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEffectDefaultColors.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useDisplayNameStylesEffectDefaultColors() {
  const cResult = c.c(25);
  const token = useToken.useToken(nativeDefault.colors.TEXT_DEFAULT);
  if (cResult[0] !== token) {
    const hex2intResult = utils_ColorUtils.hex2int(token);
    cResult[0] = token;
    cResult[1] = hex2intResult;
    let tmp5 = hex2intResult;
    const tmpResult = utils_ColorUtils;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp5) {
    const items = [tmp5];
    cResult[2] = tmp5;
    cResult[3] = items;
    let tmp7 = items;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [];
    HermesBuiltin.arraySpread(19.colors, 0);
    cResult[4] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [];
    HermesBuiltin.arraySpread(19.colors, 0);
    cResult[5] = items2;
    let tmp12 = items2;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [];
    HermesBuiltin.arraySpread(19, 0);
    cResult[6] = items3;
    let tmp16 = items3;
  } else {
    tmp16 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [];
    HermesBuiltin.arraySpread(19, 0);
    cResult[7] = items4;
    let tmp20 = items4;
  } else {
    tmp20 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items5 = [15999128];
    cResult[8] = items5;
    let tmp24 = items5;
  } else {
    tmp24 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const items6 = [6888941];
    cResult[9] = items6;
    let tmp25 = items6;
  } else {
    tmp25 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const items7 = [1036166];
    cResult[10] = items7;
    let tmp26 = items7;
  } else {
    tmp26 = cResult[10];
  }
  if (cResult[11] !== tmp5) {
    const items8 = [tmp5];
    cResult[11] = tmp5;
    cResult[12] = items8;
    let tmp27 = items8;
  } else {
    tmp27 = cResult[12];
  }
  if (cResult[13] !== tmp5) {
    const items9 = [tmp5];
    cResult[13] = tmp5;
    cResult[14] = items9;
    let tmp28 = items9;
  } else {
    tmp28 = cResult[14];
  }
  if (cResult[15] !== tmp5) {
    const items10 = [tmp5];
    cResult[15] = tmp5;
    cResult[16] = items10;
    let tmp29 = items10;
  } else {
    tmp29 = cResult[16];
  }
  if (cResult[17] !== tmp5) {
    const items11 = [tmp5];
    cResult[17] = tmp5;
    cResult[18] = items11;
    let tmp30 = items11;
  } else {
    tmp30 = cResult[18];
  }
  if (cResult[19] === tmp27) {
    if (cResult[20] === tmp28) {
      if (cResult[21] === tmp29) {
        if (cResult[22] === tmp30) {
          if (cResult[23] === tmp7) {
            let tmp31 = cResult[24];
          }
          return tmp31;
        }
      }
    }
  }
  const obj3 = {};
  obj3[DisplayNameEffect.DisplayNameEffect.SOLID] = tmp7;
  obj3[DisplayNameEffect.DisplayNameEffect.GRADIENT] = tmp8;
  obj3[DisplayNameEffect.DisplayNameEffect.GLOW] = tmp12;
  obj3[DisplayNameEffect.DisplayNameEffect.GUMMY] = tmp16;
  obj3[DisplayNameEffect.DisplayNameEffect.PRISM] = tmp20;
  obj3[DisplayNameEffect.DisplayNameEffect.TOON] = tmp24;
  obj3[DisplayNameEffect.DisplayNameEffect.NEON] = tmp25;
  obj3[DisplayNameEffect.DisplayNameEffect.POP] = tmp26;
  obj3[DisplayNameEffect.DisplayNameEffect.TEST_1] = tmp27;
  obj3[DisplayNameEffect.DisplayNameEffect.TEST_2] = tmp28;
  obj3[DisplayNameEffect.DisplayNameEffect.TEST_3] = tmp29;
  obj3[DisplayNameEffect.DisplayNameEffect.TEST_4] = tmp30;
  cResult[19] = tmp27;
  cResult[20] = tmp28;
  cResult[21] = tmp29;
  cResult[22] = tmp30;
  cResult[23] = tmp7;
  cResult[24] = obj3;
  tmp31 = obj3;
}) : (function useDisplayNameStylesEffectDefaultColors() {
  let obj = utils_ColorUtils;
  const hex2intResult = obj.hex2int(useToken.useToken(nativeDefault.colors.TEXT_DEFAULT));
  require = hex2intResult;
  let items = [hex2intResult];
  return noop.useMemo(() => {
    const obj = { [closure_2_0(closure_2_2[7]).DisplayNameEffect.SOLID]: items };
    items = [hex2intResult];
    const items1 = [];
    HermesBuiltin.arraySpread(19.colors, 0);
    obj[DisplayNameEffect.DisplayNameEffect.GRADIENT] = items1;
    const items2 = [];
    HermesBuiltin.arraySpread(19.colors, 0);
    obj[DisplayNameEffect.DisplayNameEffect.GLOW] = items2;
    const items3 = [];
    HermesBuiltin.arraySpread(19, 0);
    obj[DisplayNameEffect.DisplayNameEffect.GUMMY] = items3;
    const items4 = [];
    HermesBuiltin.arraySpread(19, 0);
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
});