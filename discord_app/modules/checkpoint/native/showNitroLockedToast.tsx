// === Module 12676: showNitroLockedToast ===

// Module 12676 (showNitroLockedToast)
import util from "util" /* 1126 */;
import _modDef3120 from "module_3120" /* 3120 */;
import ToastUtils from "ToastUtils" /* 4864 */;

require = fn;
let obj = {};
obj[fn(5521).CheckpointTrait.FACE] = _modDef3120["4IdR/H"];
obj[fn(5521).CheckpointTrait.OUTFIT] = _modDef3120.NuujPd;
obj[fn(5521).CheckpointTrait.HAT] = _modDef3120.o1Zign;
obj[fn(5521).CheckpointTrait.WEARABLE] = _modDef3120.C0CzoH;
obj[fn(5521).CheckpointTrait.AURA] = _modDef3120["+9TbTS"];
obj[fn(5521).CheckpointTrait.SHOES] = _modDef3120.sTG4TS;
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