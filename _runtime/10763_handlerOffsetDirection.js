// _runtime/10763_handlerOffsetDirection.js
const items = [
  {
    code: '(function handlerOffsetDirection_Pnpm_handleroffsetDirectionTs1(handlerOffset,fixedDirection){if(fixedDirection==="negative")return-1;if(fixedDirection==="positive")return 1;if(handlerOffset.value===0)return-1;return Math.sign(handlerOffset.value);})',
  },
];
[tmp2] = items;
function handlerOffsetDirection(c4, c6) {
  let num = -1;
  let num2 = -1;
  if ("negative" !== c6) {
    let num3 = 1;
    if ("positive" !== c6) {
      if (0 !== c4.value) {
        const _Math = Math;
        num = Math.sign(c4.value);
      }
      num3 = num;
    }
    num2 = num3;
  }
  return num2;
}
handlerOffsetDirection.__workletHash = 6692803344618;
handlerOffsetDirection.__initData = tmp2;

export { handlerOffsetDirection };
