// _runtime/05594_isFabricInstalled.js
const global = arg0;
arg5.isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};