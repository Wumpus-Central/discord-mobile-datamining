// _runtime/01687_others.js
const items = [
  {
    code: '(function unsupportedAspectRatio_Pnpm_othersTs1(ratio){return"Unsupported aspect ratio: "+ratio+". Expected a number or a string in \\"a/b\\" format.";})',
  },
];
[tmp2] = items;
const obj = { unsupportedAspectRatio: null };
function unsupportedAspectRatio(arg0) {
  return "Unsupported aspect ratio: " + arg0 + '. Expected a number or a string in "a/b" format.';
}
unsupportedAspectRatio.__workletHash = 11909462569591;
unsupportedAspectRatio.__initData = tmp2;
obj.unsupportedAspectRatio = unsupportedAspectRatio;
const items1 = [
  {
    code: "(function pnpm_othersTs2(value){let[ERROR_MESSAGES]=this.__closure;if(typeof value==='number'||!isNaN(+value)){return+value;}else if(typeof value==='string'){const parts=value.split('/');if(parts.length===2){const numerator=parseFloat(parts[0]);const denominator=parseFloat(parts[1]);if(!isNaN(numerator)&&!isNaN(denominator)&&denominator!==0){return numerator/denominator;}}}throw new Error(\"[Reanimated] \"+ERROR_MESSAGES.unsupportedAspectRatio(value));})",
  },
  obj,
];
let c0;
[tmp3, tmp4] = items1;
function pnpm_othersTs2(num) {
  if (typeof num !== "number") {
    const _isNaN3 = isNaN;
    if (isNaN(+num)) {
      if (typeof num === "string") {
        const parts = num.split("/");
        if (2 === parts.length) {
          const _parseFloat = parseFloat;
          const parsed = parseFloat(parts[0]);
          const _parseFloat2 = parseFloat;
          const parsed1 = parseFloat(parts[1]);
          const _isNaN = isNaN;
          if (!isNaN(parsed)) {
            const _isNaN2 = isNaN;
            if (!isNaN(parsed1)) {
              if (0 !== parsed1) {
                return parsed / parsed1;
              }
            }
          }
        }
      }
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("[Reanimated] " + _undefined.unsupportedAspectRatio(num));
      throw error;
    }
  }
  return +num;
}
const items2 = [tmp4];
pnpm_othersTs2.__closure = items2;
pnpm_othersTs2.__workletHash = 15312592088284;
pnpm_othersTs2.__initData = tmp3;
const items3 = [{ code: "(function pnpm_othersTs3(value){return{rowGap:value,columnGap:value};})" }];
[tmp5] = items3;
function pnpm_othersTs3(rowGap) {
  return { rowGap, columnGap: rowGap };
}
pnpm_othersTs3.__workletHash = 11698905069776;
pnpm_othersTs3.__initData = tmp5;

export const ERROR_MESSAGES = obj;
export const processAspectRatio = pnpm_othersTs2;
export const processGap = pnpm_othersTs3;
