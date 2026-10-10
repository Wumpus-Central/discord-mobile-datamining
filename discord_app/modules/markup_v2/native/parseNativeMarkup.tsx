// === Module 8147: parseNativeMarkup ===

// Module 8147 (parseNativeMarkup)
import _mod8148 from "module_8148" /* 8148 */;
import transformNativeMarkupNode from "transformNativeMarkupNode" /* 8151 */;
import apply from "module_12" /* 12 */;

require = fn;
let closure_2 = apply.once(() => _mod8148.parse);
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