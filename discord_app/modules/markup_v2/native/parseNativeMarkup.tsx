// discord_app/modules/markup_v2/native/parseNativeMarkup.tsx
import _mod8122 from "../../../../_runtime/metro/08122__.js";
import transformNativeMarkupNode from "transformNativeMarkupNode.tsx";
import apply from "../../../../_runtime/metro/00012__.js";

require = fn;
let closure_2 = apply.once(() => _mod8122.parse);
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
}
