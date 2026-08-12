// discord_app/utils/native/FabricUtils.tsx
import { enforcing } from "../../../discord_common/js/packages/rtn-codegen/js/NativeArchitectureProvider.tsx";
const result = require("set").fileFinishedImporting("utils/native/FabricUtils.tsx");

export const isFabric = function isFabric() {
  const obj = enforcing;
  let flag;
  if (obj != null) {
    flag = obj.isFabric();
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};