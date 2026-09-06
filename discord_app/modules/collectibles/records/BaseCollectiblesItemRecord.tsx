// discord_app/modules/collectibles/records/BaseCollectiblesItemRecord.tsx
import Record from "../../../lib/Record.tsx";

const prototype = function BaseCollectiblesItemRecord(skuId) {
  const tmp = new prototype(new.target);
  tmp.skuId = skuId.skuId;
  return tmp;
}.prototype;
class prototype extends tmp2 {}
prototype["fromServer"] = function fromServer(sku_id) {
  const merged = Object.assign({ sku_id: 0 });
  const merged1 = Object.assign(sku_id, merged);
  const obj = {};
  const merged2 = Object.assign(merged1);
  obj.skuId = sku_id.sku_id;
  if (typeof prototype === "function") {
    const tmp7 = new prototype(obj, merged1, merged);
    tmp7.skuId = obj.skuId;
    return tmp7;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/records/BaseCollectiblesItemRecord.tsx");

export default prototype;
