// discord_app/modules/checkpoint/native/showNitroLockedToast.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3088 from "../Checkpoint2026.messages.js";
import ToastUtils from "../../toast/native/ToastUtils.tsx";

require = fn;
let obj = {};
obj[fn(6024).CheckpointTrait.FACE] = _modDef3088["4IdR/H"];
obj[fn(6024).CheckpointTrait.OUTFIT] = _modDef3088.NuujPd;
obj[fn(6024).CheckpointTrait.HAT] = _modDef3088.o1Zign;
obj[fn(6024).CheckpointTrait.WEARABLE] = _modDef3088.C0CzoH;
obj[fn(6024).CheckpointTrait.AURA] = _modDef3088["+9TbTS"];
obj[fn(6024).CheckpointTrait.SHOES] = _modDef3088.sTG4TS;
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
}
export const getNitroLockedMessage = function getNitroLockedMessage(nextBlockedTrait) {
  let stringResult;
  if (null != obj[nextBlockedTrait]) {
    const intl = util.intl;
    stringResult = intl.string(tmp);
  }
  return stringResult;
};
