// === Module 12908: showNitroLockedToast ===

// Module 12908 (showNitroLockedToast)
import util from "util" /* 1128 */;
import _modDef3088 from "module_3088" /* 3088 */;
import ToastUtils from "ToastUtils" /* 5644 */;

require = fn;
let obj = {};
obj[fn(6018).CheckpointTrait.FACE] = _modDef3088["4IdR/H"];
obj[fn(6018).CheckpointTrait.OUTFIT] = _modDef3088.NuujPd;
obj[fn(6018).CheckpointTrait.HAT] = _modDef3088.o1Zign;
obj[fn(6018).CheckpointTrait.WEARABLE] = _modDef3088.C0CzoH;
obj[fn(6018).CheckpointTrait.AURA] = _modDef3088["+9TbTS"];
obj[fn(6018).CheckpointTrait.SHOES] = _modDef3088.sTG4TS;
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