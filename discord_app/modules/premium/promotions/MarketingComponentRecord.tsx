// discord_app/modules/premium/promotions/MarketingComponentRecord.tsx
import "toJS";

const require = arg1;
let MarketingComponentRecord;
class MarketingComponentRecord extends tmp2 {
  constructor(arg0) {
    tmp = new MarketingComponentRecord(new.target, new.target);
    // ThrowIfThisInitialized (0x7c)
    ({ id: tmp.id, componentType: tmp.componentType, properties: tmp.properties, promotionId: tmp.promotionId, startDate: tmp.startDate, endDate: tmp.endDate, effectiveStartDate: tmp.effectiveStartDate, effectiveEndDate: tmp.effectiveEndDate } = global);
    return tmp;
  }
}
MarketingComponentRecord["createFromServer"] = function createFromServer(start_date, start_date2) {
  let component_type;
  let id;
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
  start_date = undefined;
  if (start_date2 != null) {
    start_date = start_date2.start_date;
  }
  let date2 = null;
  if (null != start_date) {
    const _Date3 = Date;
    date2 = new Date(start_date2.start_date);
  }
  let end_date;
  if (start_date2 != null) {
    end_date = start_date2.end_date;
  }
  let date3 = null;
  if (null != end_date) {
    const _Date4 = Date;
    date3 = new Date(start_date2.end_date);
  }
  ({ id, component_type } = start_date);
  const PremiumMarketingComponentProperties = textDecoder(7388).PremiumMarketingComponentProperties;
  const fromBinary = PremiumMarketingComponentProperties.fromBinary;
  const obj2 = textDecoder(1307);
  function readerFactory(buf) {
    const binaryReader = new textDecoder(outer1_1[2]).BinaryReader(buf, textDecoder);
    return binaryReader;
  }
  const fromBinaryResult = fromBinary(obj2.base64decode(start_date.properties), { readUnknownField: true, readerFactory });
  const promotion_id = start_date.promotion_id;
  let tmp18 = date;
  if (date == null) {
    tmp18 = date2;
  }
  let tmp19 = date1;
  if (date1 == null) {
    tmp19 = date3;
  }
  if (typeof MarketingComponentRecord !== "function") {
    str = "Trying to call a non-function";
    HermesBuiltin.throwTypeError();
  }
  const tmp20 = new MarketingComponentRecord(str, obj, obj2, readerFactory, PremiumMarketingComponentProperties, fromBinary, MarketingComponentRecord, new.target, id, component_type, fromBinaryResult, promotion_id);
  // ThrowIfThisInitialized (0x7c)
  tmp20.id = id;
  tmp20.componentType = component_type;
  tmp20.properties = fromBinaryResult;
  tmp20.promotionId = promotion_id;
  tmp20.startDate = date;
  tmp20.endDate = date1;
  tmp20.effectiveStartDate = tmp18;
  tmp20.effectiveEndDate = tmp19;
  return tmp20;
};
Object.defineProperty(MarketingComponentRecord.prototype, "isTimed", {
  get: function isTimed() {
    return null != this.startDate || null != this.endDate;
  },
  set: undefined
});
const result = require("module_1307").fileFinishedImporting("modules/premium/promotions/MarketingComponentRecord.tsx");

export default MarketingComponentRecord;