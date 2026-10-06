// discord_app/modules/markup_v2/native/parseNativeMarkup.tsx
import _mod7789 from "../../../../_runtime/metro/07789__.js";
import transformNativeMarkupNode from "transformNativeMarkupNode.tsx";
import 00012__ from "../../../../_runtime/metro/00012__.js";
import size from "../../../../_runtime/metro/00002__.js";

let closure_2 = module_12.once(() => _mod7789.parse);
let result = size.fileFinishedImporting("modules/markup_v2/native/parseNativeMarkup.tsx");

export default function parseNativeMarkupToAST(arg0, arg1, channelId) {
  let tmp = arg3;
  if (arg3 === undefined) {
    tmp = null;
  }
  const obj = transformNativeMarkupNode;
  const result = obj.transformNativeBlocks(closure_2()(arg0), channelId);
  let tmpResult = result;
  if (null != tmp) {
    tmpResult = tmp(result, arg1, false);
  }
  return tmpResult;
};