// === Module 1703: isSharedValue ===

// Module 1703 (isSharedValue)
function isSharedValue(iter) {
  let prop;
  if (iter != null) {
    prop = iter._isReanimatedSharedValue;
  }
  return true === prop;
}
isSharedValue.__closure = {};
isSharedValue.__workletHash = 8230330706259;
isSharedValue.__initData = { code: "function isSharedValue_Pnpm_isSharedValueTs1(value){return(value===null||value===void 0?void 0:value._isReanimatedSharedValue)===true;}" };
arg5.isSharedValue = isSharedValue;