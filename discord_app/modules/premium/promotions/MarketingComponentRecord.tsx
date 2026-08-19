// === Module 7630: createFromServer ===

// Module 7630 (createFromServer)
import setDefault from "set" /* 687 */;
import MurmurHashV3Default from "MurmurHashV3" /* 1217 */;
import toJSDefault from "toJS" /* 1931 */;

const require = arg1;
toJSDefault;
let MarketingComponentRecord;
class MarketingComponentRecord extends tmp2 {
  constructor(arg0) {
    tmp = new MarketingComponentRecord(new.target, new.target);
    // ThrowIfThisInitialized (0x7c)
    ({ id: tmp.id, componentType: tmp.componentType, properties: tmp.properties, promotionId: tmp.promotionId, startDate: tmp.startDate, endDate: tmp.endDate, effectiveStartDate: tmp.effectiveStartDate, effectiveEndDate: tmp.effectiveEndDate } = global);
    return tmp;
  }
}
const prototype = MarketingComponentRecord.prototype;
MarketingComponentRecord["createFromServer"] = function createFromServer(start_date, startDate) {
  let str = "utf-8";
  const obj = { ignoreBOM: true };
  const textDecoder = new TextDecoder("utf-8", obj);
  let date = null;
  if (null != start_date.start_date) {
    const _Date = Date;
    date = new Date(start_date.start_date);
  }
  let date1 = null;
  if (null != start_date.end_date) {
    const _Date2 = Date;
    date1 = new Date(start_date.end_date);
  }
  startDate = undefined;
  if (startDate != null) {
    startDate = startDate.startDate;
  }
  if (startDate == null) {
    startDate = null;
  }
  let endDate;
  if (startDate != null) {
    endDate = startDate.endDate;
  }
  if (endDate == null) {
    endDate = null;
  }
  ({ id, component_type } = start_date);
  const PremiumMarketingComponentProperties = textDecoder(7631).PremiumMarketingComponentProperties;
  const fromBinary = PremiumMarketingComponentProperties.fromBinary;
  const obj2 = textDecoder(1307);
  function readerFactory(buf) {
    const binaryReader = new textDecoder(closure_1_2[2]).BinaryReader(buf, textDecoder);
    return binaryReader;
  }
  const fromBinaryResult = fromBinary(obj2.base64decode(start_date.properties), { readUnknownField: true, readerFactory });
  const promotion_id = start_date.promotion_id;
  let tmp12 = date;
  if (date == null) {
    tmp12 = startDate;
  }
  let tmp13 = date1;
  if (date1 == null) {
    tmp13 = endDate;
  }
  if (typeof MarketingComponentRecord !== "function") {
    str = "Trying to call a non-function";
    HermesBuiltin.throwTypeError();
  }
  const tmp14 = new MarketingComponentRecord(str, obj, obj2, readerFactory, PremiumMarketingComponentProperties, fromBinary, MarketingComponentRecord, new.target, id, component_type, fromBinaryResult, promotion_id);
  // ThrowIfThisInitialized (0x7c)
  tmp14.id = id;
  tmp14.componentType = component_type;
  tmp14.properties = fromBinaryResult;
  tmp14.promotionId = promotion_id;
  tmp14.startDate = date;
  tmp14.endDate = date1;
  tmp14.effectiveStartDate = tmp12;
  tmp14.effectiveEndDate = tmp13;
  return tmp14;
};
Object.defineProperty(prototype, "isTimed", {
  get: function isTimed() {
    return null != this.startDate || null != this.endDate;
  },
  set: undefined
});
prototype["isIncludedInRollout"] = function isIncludedInRollout(id, date) {
  const self = this;
  if (this.isTimed) {
    if (null != self.effectiveStartDate) {
      const effectiveStartDate = self.effectiveStartDate;
      const time = date.getTime();
      const diff = time - effectiveStartDate.getTime();
      const _Math = Math;
      const _Math2 = Math;
      const result = 10000 * Math.min(1, Math.max(0, 0.2 * (diff / setDefault.Millis.HOUR)));
      const _HermesInternal = HermesInternal;
      return MurmurHashV3Default.v3("" + self.promotionId + ":" + id) % 10000 < result;
    }
  }
  return true;
};
let result = require("set").fileFinishedImporting("modules/premium/promotions/MarketingComponentRecord.tsx");

export default MarketingComponentRecord;