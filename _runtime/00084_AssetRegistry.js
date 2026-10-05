// _runtime/00084_AssetRegistry.js
let closure_0 = [];
const obj = {
  registerAsset(arg0) {
    return closure_0.push(arg0);
  },
  getAssetByID(value2) {
    return closure_0[value2 - 1];
  },
};

export default obj;
