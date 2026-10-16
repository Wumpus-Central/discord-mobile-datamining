// === Module 12708: showNitroLockedToast ===

// Module 12708 (showNitroLockedToast)
import util from "util" /* 1128 */;
import _modDef3123 from "module_3123" /* 3123 */;
import ToastUtils from "ToastUtils" /* 4867 */;

require = fn;
let obj = {};
obj[fn(5524).CheckpointTrait.FACE] = _modDef3123["4IdR/H"];
obj[fn(5524).CheckpointTrait.OUTFIT] = _modDef3123.NuujPd;
obj[fn(5524).CheckpointTrait.HAT] = _modDef3123.o1Zign;
obj[fn(5524).CheckpointTrait.WEARABLE] = _modDef3123.C0CzoH;
obj[fn(5524).CheckpointTrait.AURA] = _modDef3123["+9TbTS"];
obj[fn(5524).CheckpointTrait.SHOES] = _modDef3123.sTG4TS;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(arg0) {
  let stringResult;
  if (null != obj[arg0]) {
    const intl = util.intl;
    stringResult = intl.string(tmp);
  }
  if (null != stringResult) {
    obj = ToastUtils;
    obj.presentError(stringResult);
  }
};
export const getNitroLockedMessage = function getNitroLockedMessage(nextBlockedTrait) {
  let stringResult;
  if (null != obj[nextBlockedTrait]) {
    const intl = util.intl;
    stringResult = intl.string(tmp);
  }
  return stringResult;
};