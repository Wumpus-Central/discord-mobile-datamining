// discord_app/modules/checkpoint/native/showNitroLockedToast.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3115 from "../Checkpoint2026.messages.js";
import ToastUtils from "../../toast/native/ToastUtils.tsx";

require = fn;
let obj = {};
obj[fn(5457).CheckpointTrait.FACE] = _modDef3115["4IdR/H"];
obj[fn(5457).CheckpointTrait.OUTFIT] = _modDef3115.NuujPd;
obj[fn(5457).CheckpointTrait.HAT] = _modDef3115.o1Zign;
obj[fn(5457).CheckpointTrait.WEARABLE] = _modDef3115.C0CzoH;
obj[fn(5457).CheckpointTrait.AURA] = _modDef3115["+9TbTS"];
obj[fn(5457).CheckpointTrait.SHOES] = _modDef3115.sTG4TS;
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
