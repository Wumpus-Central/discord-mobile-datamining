// _runtime/05356_isArguments.js

export default function isArguments(callee) {
  const callResult = toString.call(callee);
  let tmp2 = "[object Arguments]" === callResult;
  if (!tmp2) {
    tmp2 =
      "[object Array]" !== callResult &&
      null !== callee &&
      typeof callee === "object" &&
      typeof callee.length === "number" &&
      callee.length >= 0 &&
      "[object Function]" === toString.call(callee.callee);
    const tmp3 =
      "[object Array]" !== callResult &&
      null !== callee &&
      typeof callee === "object" &&
      typeof callee.length === "number" &&
      callee.length >= 0 &&
      "[object Function]" === toString.call(callee.callee);
  }
  return tmp2;
}
