// === Module 10637: useDisplayNameStylesEffectDefaultColors ===

// Module 10637 (useDisplayNameStylesEffectDefaultColors)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1396 */;
import useToken from "useToken" /* 4580 */;
import react from "react" /* 19 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1395 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ DISPLAY_NAME_STYLES_GRADIENT_PRESETS: closure_4, DISPLAY_NAME_STYLES_GUMMY_PRESETS: hasOwnProperty, DISPLAY_NAME_STYLES_PRISM_PRESETS: metroRequire } = DisplayNameStylesConstants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp13;
  let tmp17;
  let tmp21;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp6;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(25);
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.TEXT_DEFAULT);
  if (cResult[0] !== token) {
    const tmp2Result = utils_ColorUtils;
    const hex2intResult = tmp2Result.hex2int(token);
    cResult[0] = token;
    cResult[1] = hex2intResult;
    tmp6 = hex2intResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== tmp6) {
    const items = [tmp6];
    cResult[2] = tmp6;
    cResult[3] = items;
    tmp8 = items;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [];
    HermesBuiltin.arraySpread(items1, React3[0].colors, 0);
    cResult[4] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [];
    HermesBuiltin.arraySpread(items2, React3[0].colors, 0);
    cResult[5] = items2;
    tmp13 = items2;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [];
    HermesBuiltin.arraySpread(items3, hasOwnProperty[0], 0);
    cResult[6] = items3;
    tmp17 = items3;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [];
    HermesBuiltin.arraySpread(items4, metroRequire[0], 0);
    cResult[7] = items4;
    tmp21 = items4;
  } else {
    tmp21 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items5 = [15999128];
    cResult[8] = items5;
    tmp25 = items5;
  } else {
    tmp25 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const items6 = [6888941];
    cResult[9] = items6;
    tmp26 = items6;
  } else {
    tmp26 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const items7 = [1036166];
    cResult[10] = items7;
    tmp27 = items7;
  } else {
    tmp27 = cResult[10];
  }
  if (cResult[11] !== tmp6) {
    const items8 = [tmp6];
    cResult[11] = tmp6;
    cResult[12] = items8;
    tmp28 = items8;
  } else {
    tmp28 = cResult[12];
  }
  if (cResult[13] !== tmp6) {
    const items9 = [tmp6];
    cResult[13] = tmp6;
    cResult[14] = items9;
    tmp29 = items9;
  } else {
    tmp29 = cResult[14];
  }
  if (cResult[15] !== tmp6) {
    const items10 = [tmp6];
    cResult[15] = tmp6;
    cResult[16] = items10;
    tmp30 = items10;
  } else {
    tmp30 = cResult[16];
  }
  if (cResult[17] !== tmp6) {
    const items11 = [tmp6];
    cResult[17] = tmp6;
    cResult[18] = items11;
    tmp31 = items11;
  } else {
    tmp31 = cResult[18];
  }
  if (cResult[19] === tmp28) {
    if (cResult[20] === tmp29) {
      if (cResult[21] === tmp30) {
        if (cResult[22] === tmp31) {
          let tmp32;
          if (cResult[23] === tmp8) {
            tmp32 = cResult[24];
          }
          return tmp32;
        }
      }
    }
  }
  const obj3 = {};
  obj3[DisplayNameEffect.DisplayNameEffect.SOLID] = tmp8;
  obj3[DisplayNameEffect.DisplayNameEffect.GRADIENT] = tmp9;
  obj3[DisplayNameEffect.DisplayNameEffect.GLOW] = tmp13;
  obj3[DisplayNameEffect.DisplayNameEffect.GUMMY] = tmp17;
  obj3[DisplayNameEffect.DisplayNameEffect.PRISM] = tmp21;
  obj3[DisplayNameEffect.DisplayNameEffect.TOON] = tmp25;
  obj3[DisplayNameEffect.DisplayNameEffect.NEON] = tmp26;
  obj3[DisplayNameEffect.DisplayNameEffect.POP] = tmp27;
  obj3[DisplayNameEffect.DisplayNameEffect.TEST_1] = tmp28;
  obj3[DisplayNameEffect.DisplayNameEffect.TEST_2] = tmp29;
  obj3[DisplayNameEffect.DisplayNameEffect.TEST_3] = tmp30;
  obj3[DisplayNameEffect.DisplayNameEffect.TEST_4] = tmp31;
  cResult[19] = tmp28;
  cResult[20] = tmp29;
  cResult[21] = tmp30;
  cResult[22] = tmp31;
  cResult[23] = tmp8;
  cResult[24] = obj3;
  tmp32 = obj3;
}) : (() => {
  const hex2int = utils_ColorUtils.hex2int;
  utils_ColorUtils;
  let obj = useToken;
  const hex2intResult = hex2int(obj.useToken(nativeDefault.colors.TEXT_DEFAULT));
  require = hex2intResult;
  let items = [hex2intResult];
  return react.useMemo(() => {
    let items;
    const obj = { [closure_2_0(closure_2_2[7]).DisplayNameEffect.SOLID]: items };
    items = [require];
    const items1 = [];
    const GRADIENT = DisplayNameEffect.DisplayNameEffect.GRADIENT;
    HermesBuiltin.arraySpread(items1, React3[0].colors, 0);
    obj[GRADIENT] = items1;
    const items2 = [];
    const GLOW = DisplayNameEffect.DisplayNameEffect.GLOW;
    HermesBuiltin.arraySpread(items2, React3[0].colors, 0);
    obj[GLOW] = items2;
    const items3 = [];
    const GUMMY = DisplayNameEffect.DisplayNameEffect.GUMMY;
    HermesBuiltin.arraySpread(items3, hasOwnProperty[0], 0);
    obj[GUMMY] = items3;
    const items4 = [];
    const PRISM = DisplayNameEffect.DisplayNameEffect.PRISM;
    HermesBuiltin.arraySpread(items4, metroRequire[0], 0);
    obj[PRISM] = items4;
    obj[DisplayNameEffect.DisplayNameEffect.TOON] = [15999128];
    obj[DisplayNameEffect.DisplayNameEffect.NEON] = [6888941];
    obj[DisplayNameEffect.DisplayNameEffect.POP] = [1036166];
    const items5 = [require];
    obj[DisplayNameEffect.DisplayNameEffect.TEST_1] = items5;
    const items6 = [require];
    obj[DisplayNameEffect.DisplayNameEffect.TEST_2] = items6;
    const items7 = [require];
    obj[DisplayNameEffect.DisplayNameEffect.TEST_3] = items7;
    const items8 = [require];
    obj[DisplayNameEffect.DisplayNameEffect.TEST_4] = items8;
    return obj;
  }, items);
});
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEffectDefaultColors.native.tsx");

export default tmp3;