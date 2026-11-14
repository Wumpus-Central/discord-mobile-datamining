// === Module 1688: font ===

// Module 1688 (font)
import FONT_WEIGHT_MAPPINGS from "FONT_WEIGHT_MAPPINGS" /* 1669 */;

const items = [{ code: "(function invalidFontWeight_Pnpm_fontTs1(weight){return\"Invalid font weight value: \"+weight;})" }];
[tmp2] = items;
const obj = { invalidFontWeight: null };
function invalidFontWeight(key10009) {
  return "Invalid font weight value: " + key10009;
}
invalidFontWeight.__workletHash = 7682570210510;
invalidFontWeight.__initData = tmp2;
obj.invalidFontWeight = invalidFontWeight;
const items1 = [{ code: "(function pnpm_fontTs2(value){let[VALID_FONT_WEIGHTS,FONT_WEIGHT_MAPPINGS,ERROR_MESSAGES]=this.__closure;const stringValue=value.toString();if(VALID_FONT_WEIGHTS.has(stringValue)){return stringValue;}if(Object.prototype.hasOwnProperty.call(FONT_WEIGHT_MAPPINGS,stringValue)){return FONT_WEIGHT_MAPPINGS[stringValue];}throw new Error(\"[Reanimated] \"+ERROR_MESSAGES.invalidFontWeight(value));})" }, new Set(Object.values(FONT_WEIGHT_MAPPINGS.FONT_WEIGHT_MAPPINGS)), FONT_WEIGHT_MAPPINGS.FONT_WEIGHT_MAPPINGS, obj];
let c0;
let c1;
let c2;
[tmp4, tmp5, tmp6, tmp7] = items1;
function pnpm_fontTs2(key10009) {
  const str1 = key10009.toString();
  if (_undefined.has(str1)) {
    return str1;
  } else {
    const _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    const call = hasOwnProperty.call;
    if (typeof call === "unknown" ? hasOwnProperty(str1) : call(_undefined, str1)) {
      return _undefined[str1];
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("[Reanimated] " + _undefined2.invalidFontWeight(key10009));
      throw error;
    }
  }
}
const items2 = [tmp5, tmp6, tmp7];
pnpm_fontTs2.__closure = items2;
pnpm_fontTs2.__workletHash = 3256864803236;
pnpm_fontTs2.__initData = tmp4;

export const ERROR_MESSAGES = obj;
export const processFontWeight = pnpm_fontTs2;