const result = require("set").fileFinishedImporting("utils/native/FabricUtils.tsx");

export const isFabric = function isFabric() {
  const obj = importDefault(4150);
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
  let isIOSResult = require(500) /* set */.isIOS();
  if (isIOSResult) {
    const obj2 = importDefault(4150);
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