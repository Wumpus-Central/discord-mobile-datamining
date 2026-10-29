// === Module 8549: parseNativeMarkup ===

// Module 8549 (parseNativeMarkup)
import Syntax from "Syntax" /* 8550 */;
import transformNativeMarkupNode from "transformNativeMarkupNode" /* 8554 */;
import apply from "module_12" /* 12 */;

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