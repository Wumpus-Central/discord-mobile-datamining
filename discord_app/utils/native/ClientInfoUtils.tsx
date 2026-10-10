// discord_app/utils/native/ClientInfoUtils.tsx
import NativeClientInfoModuleDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeClientInfoModule.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("utils/native/ClientInfoUtils.tsx");

export const getConstants = function getConstants() {
  return NativeClientInfoModuleDefault.getConstants();
};
export const getBuildNumberLabel = function getBuildNumberLabel() {
  const items = ["0", "123456", "1234567890"];
  let str = "35020400000000";
  if (items.includes("35020400000000")) {
    const _HermesInternal = HermesInternal;
    str = "dev (" + "35020400000000" + ")";
  }
  return str;
};
