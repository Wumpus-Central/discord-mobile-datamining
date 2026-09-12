// === Module 8214: reviveBigInts ===

// Module 8214 (reviveBigInts)
function reviveBigInts(arg0, $bigint) {
  let BigIntResult = $bigint;
  if (typeof $bigint === "object") {
    BigIntResult = $bigint;
    if (null !== $bigint) {
      BigIntResult = $bigint;
      if ("$bigint" in $bigint) {
        const _BigInt = BigInt;
        BigIntResult = BigInt($bigint.$bigint);
      }
    }
  }
  return BigIntResult;
}
function replaceBigInts(arg0, arg1) {
  let tmp = arg1;
  if (typeof arg1 === "bigint") {
    const obj = { $bigint: arg1.toString() };
    tmp = obj;
  }
  return tmp;
}

export const decodeAstJson = function decodeAstJson(arg0) {
  return JSON.parse(arg0, reviveBigInts);
};
export const encodeAstJson = function encodeAstJson(arg0) {
  return JSON.stringify(arg0, replaceBigInts);
};