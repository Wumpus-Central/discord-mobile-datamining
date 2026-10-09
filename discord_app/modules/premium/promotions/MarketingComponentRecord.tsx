// === Module 9103: MarketingComponentRecord ===

// Module 9103 (MarketingComponentRecord)
import DurationsDefault from "Durations" /* 1102 */;
import ProtoUtils from "ProtoUtils" /* 1247 */;
import MurmurHashV3Default from "MurmurHashV3" /* 1264 */;
import premium_marketing_component_properties from "premium_marketing_component_properties" /* 9104 */;
import Record from "Record" /* 1405 */;

require = fn;
let closure_3 = { month: "long", day: "numeric", year: "numeric" };
let MarketingComponentRecord;
class MarketingComponentRecord extends tmp2 {
  constructor(arg0) {
    tmp = new MarketingComponentRecord(new.target, new.target);
    ({ id: tmp.id, componentType: tmp.componentType, properties: tmp.properties, promotionId: tmp.promotionId, startDate: tmp.startDate, endDate: tmp.endDate, effectiveStartDate: tmp.effectiveStartDate, effectiveEndDate: tmp.effectiveEndDate, promotionEndDate: tmp.promotionEndDate } = global);
    return tmp;
  }
}
const prototype = MarketingComponentRecord.prototype;
MarketingComponentRecord["createFromServer"] = function createFromServer(start_date, startDate) {
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
  const obj = ProtoUtils;
  const b64ToProtoResult = obj.b64ToProto(premium_marketing_component_properties.PremiumMarketingComponentProperties, start_date.properties);
  const promotion_id = start_date.promotion_id;
  let tmp15 = date;
  if (date == null) {
    tmp15 = startDate;
  }
  let tmp16 = date1;
  if (date1 == null) {
    tmp16 = endDate;
  }
  if (typeof MarketingComponentRecord === "function") {
    const tmp20 = new MarketingComponentRecord(tmp4, tmp, obj, MarketingComponentRecord, new.target, id, component_type, b64ToProtoResult, promotion_id, date, date1, tmp15, tmp16);
    tmp20.id = id;
    tmp20.componentType = component_type;
    tmp20.properties = b64ToProtoResult;
    tmp20.promotionId = promotion_id;
    tmp20.startDate = date;
    tmp20.endDate = date1;
    tmp20.effectiveStartDate = tmp15;
    tmp20.effectiveEndDate = tmp16;
    tmp20.promotionEndDate = endDate;
    return tmp20;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
prototype["getFormatVariableValues"] = function getFormatVariableValues(arg0) {
  const self = this;
  if (null == this.promotionEndDate) {
    let obj = {};
  } else {
    const promotionEndDate2 = self.promotionEndDate;
    const _Date = Date;
    const date = new Date();
    const time = promotionEndDate2.getTime();
    const diff = time - date.getTime();
    let num = 0;
    if (diff > 0) {
      const _Math = Math;
      num = Math.ceil(diff / DurationsDefault.Millis.DAY);
    }
    obj = { days_left: num, promotion_end_date: null };
    const promotionEndDate = self.promotionEndDate;
    obj.promotion_end_date = promotionEndDate.toLocaleDateString(arg0, closure_3);
  }
  return obj;
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
      const result = 10000 * Math.min(1, Math.max(0, 0.2 * (diff / DurationsDefault.Millis.HOUR)));
      const _HermesInternal = HermesInternal;
      return MurmurHashV3Default.v3("" + self.promotionId + ":" + id) % 10000 < result;
    }
  }
  return true;
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/promotions/MarketingComponentRecord.tsx");

export default MarketingComponentRecord;