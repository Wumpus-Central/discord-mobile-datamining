// === Module 1950: fromServer ===

// Module 1950 (fromServer)
import toJSDefault from "toJS" /* 1932 */;

toJSDefault;
let prototype;
prototype = function BaseCollectiblesItemRecord(skuId) {
  const tmp = new prototype(new.target);
  // ThrowIfThisInitialized (0x7c)
  tmp.skuId = skuId.skuId;
  return tmp;
}.prototype;
class prototype extends tmp2 {
}
prototype["fromServer"] = function fromServer(sku_id) {
  let obj = Object.create(null);
  const merged = Object.assign(sku_id, obj);
  obj = {};
  let str = obj;
  const merged1 = Object.assign(merged);
  obj.skuId = sku_id.sku_id;
  if (typeof prototype !== "function") {
    str = "Trying to call a non-function";
    HermesBuiltin.throwTypeError();
  }
  const tmp4 = new prototype(str, merged, obj);
  // ThrowIfThisInitialized (0x7c)
  tmp4.skuId = obj.skuId;
  return tmp4;
};
const result = require("set").fileFinishedImporting("modules/collectibles/records/BaseCollectiblesItemRecord.tsx");

export default prototype;