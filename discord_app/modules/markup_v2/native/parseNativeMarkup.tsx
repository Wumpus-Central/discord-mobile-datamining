// === Module 9298: parseNativeMarkup ===

// Module 9298 (parseNativeMarkup)
import Syntax from "Syntax" /* 9299 */;
import transformNativeMarkupNode from "transformNativeMarkupNode" /* 9303 */;
import apply from "apply" /* 12 */;

require = fn;
let closure_2 = apply.once(() => Syntax.parse);
const size = fn(2);
let result = size.fileFinishedImporting("modules/markup_v2/native/parseNativeMarkup.tsx");

export default function parseNativeMarkupToAST(arg0, arg1, channelId) {
  let tmp = arg3;
  if (arg3 === undefined) {
    tmp = null;
  }
  const result = transformNativeMarkupNode.transformNativeBlocks(closure_2()(arg0), channelId);
  let tmpResult = result;
  if (null != tmp) {
    tmpResult = tmp(result, arg1, false);
  }
  return tmpResult;
};