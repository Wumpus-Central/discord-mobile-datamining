// === Module 12822: showNitroLockedToast ===

// Module 12822 (showNitroLockedToast)
import util from "util" /* 1128 */;
import _modDef3078 from "module_3078" /* 3078 */;
import ToastUtils from "ToastUtils" /* 5624 */;

require = fn;
let obj = {};
obj[fn(5993).CheckpointTrait.FACE] = _modDef3078["4IdR/H"];
obj[fn(5993).CheckpointTrait.OUTFIT] = _modDef3078.NuujPd;
obj[fn(5993).CheckpointTrait.HAT] = _modDef3078.o1Zign;
obj[fn(5993).CheckpointTrait.WEARABLE] = _modDef3078.C0CzoH;
obj[fn(5993).CheckpointTrait.AURA] = _modDef3078["+9TbTS"];
obj[fn(5993).CheckpointTrait.SHOES] = _modDef3078.sTG4TS;
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