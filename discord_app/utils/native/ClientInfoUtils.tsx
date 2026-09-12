// discord_app/utils/native/ClientInfoUtils.tsx
import NativeClientInfoModuleDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeClientInfoModule.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("utils/native/ClientInfoUtils.tsx");

export const getConstants = function getConstants() {
  return NativeClientInfoModuleDefault.getConstants();
};
export const getBuildNumberLabel = function getBuildNumberLabel() {
  const items = ["0", "123456", "1234567890"];
  let str = "6411";
  if (items.includes("6411")) {
    const _HermesInternal = HermesInternal;
    str = "dev (" + "6411" + ")";
  }
  return str;
};
