// discord_app/utils/native/FabricUtils.tsx
const result = require("set").fileFinishedImporting("utils/native/FabricUtils.tsx");

export const isFabric = function isFabric() {
  const obj = require("../../../discord_common/js/packages/rtn-codegen/js/NativeArchitectureProvider.tsx");
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
  let isIOSResult = require("../PlatformUtils.tsx") /* set */.isIOS();
  if (isIOSResult) {
    const obj2 = require("../../../discord_common/js/packages/rtn-codegen/js/NativeArchitectureProvider.tsx");
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