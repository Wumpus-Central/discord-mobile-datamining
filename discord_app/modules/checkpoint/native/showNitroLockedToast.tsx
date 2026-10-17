// === Module 12773: showNitroLockedToast ===

// Module 12773 (showNitroLockedToast)
import util from "util" /* 1128 */;
import _modDef3141 from "module_3141" /* 3141 */;
import ToastUtils from "ToastUtils" /* 4903 */;

require = fn;
let obj = {};
obj[fn(5561).CheckpointTrait.FACE] = _modDef3141["4IdR/H"];
obj[fn(5561).CheckpointTrait.OUTFIT] = _modDef3141.NuujPd;
obj[fn(5561).CheckpointTrait.HAT] = _modDef3141.o1Zign;
obj[fn(5561).CheckpointTrait.WEARABLE] = _modDef3141.C0CzoH;
obj[fn(5561).CheckpointTrait.AURA] = _modDef3141["+9TbTS"];
obj[fn(5561).CheckpointTrait.SHOES] = _modDef3141.sTG4TS;
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