import { enforcing } from "../../../discord_common/js/packages/rtn-codegen/js/NativeArchitectureProvider.tsx";
import { set } from "../PlatformUtils.tsx";
// discord_app/utils/native/FabricUtils.tsx
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
export const isIosFabric = function isIosFabric() {
  let isIOSResult = set /* set */.isIOS();
  if (isIOSResult) {
    const obj2 = enforcing;
    let flag;
    if (obj2 != null) {
      flag = obj2.isFabric();
    }
    if (flag == null) {
      flag = false;
    }
    isIOSResult = flag;
  }
  return isIOSResult;
};
export const isBridgeless = true === global.RN$Bridgeless;