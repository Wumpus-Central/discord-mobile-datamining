// === Module 16018: showNitroLockedToast ===

// Module 16018 (showNitroLockedToast)
import util from "util" /* 1126 */;
import _modDef3118 from "module_3118" /* 3118 */;
import ToastUtils from "ToastUtils" /* 4808 */;

require = fn;
let obj = {};
obj[fn(5461).CheckpointTrait.FACE] = _modDef3118["4IdR/H"];
obj[fn(5461).CheckpointTrait.OUTFIT] = _modDef3118.NuujPd;
obj[fn(5461).CheckpointTrait.HAT] = _modDef3118.o1Zign;
obj[fn(5461).CheckpointTrait.WEARABLE] = _modDef3118.C0CzoH;
obj[fn(5461).CheckpointTrait.AURA] = _modDef3118["+9TbTS"];
obj[fn(5461).CheckpointTrait.SHOES] = _modDef3118.sTG4TS;
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