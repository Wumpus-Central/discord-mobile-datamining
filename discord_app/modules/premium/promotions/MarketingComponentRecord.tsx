// === Module 9558: MarketingComponentRecord ===

// Module 9558 (MarketingComponentRecord)
import DurationsDefault from "Durations" /* 1089 */;
import ProtoUtils from "ProtoUtils" /* 1234 */;
import MurmurHashV3Default from "MurmurHashV3" /* 1251 */;
import MarketingSurfaceTypeUtils from "MarketingSurfaceTypeUtils" /* 9559 */;
import premium_marketing_component_properties from "premium_marketing_component_properties" /* 9561 */;
import constants from "constants" /* 9602 */;
import Record from "Record" /* 1405 */;

require = fn;
let MarketingComponentRecord;
class MarketingComponentRecord extends tmp2 {
  constructor(arg0) {
    tmp = new MarketingComponentRecord(new.target, new.target);
    ({ id: tmp.id, componentType: tmp.componentType, properties: tmp.properties, promotionId: tmp.promotionId, startDate: tmp.startDate, endDate: tmp.endDate, effectiveStartDate: tmp.effectiveStartDate, effectiveEndDate: tmp.effectiveEndDate, promotionEndDate: tmp.promotionEndDate, promotionPriority: tmp.promotionPriority } = global);
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
  const id = start_date.id;
  const result = MarketingSurfaceTypeUtils.classifyMarketingSurfaceType(start_date.component_type);
  const obj2 = ProtoUtils;
  const b64ToProtoResult = obj2.b64ToProto(premium_marketing_component_properties.PremiumMarketingComponentProperties, start_date.properties);
  const promotion_id = start_date.promotion_id;
  let tmp18 = date;
  if (date == null) {
    tmp18 = startDate;
  }
  let tmp19 = date1;
  if (date1 == null) {
    tmp19 = endDate;
  }
  let priority;
  if (startDate != null) {
    priority = startDate.priority;
  }
  if (priority == null) {
    priority = constants.FALLBACK_PROMOTION_PRIORITY;
  }
  if (typeof MarketingComponentRecord === "function") {
    const tmp24 = new MarketingComponentRecord(tmp4, tmp, obj2, startDate, require, MarketingComponentRecord, new.target, id, result, b64ToProtoResult, promotion_id, date, date1, tmp18);
    tmp24.id = id;
    tmp24.componentType = result;
    tmp24.properties = b64ToProtoResult;
    tmp24.promotionId = promotion_id;
    tmp24.startDate = date;
    tmp24.endDate = date1;
    tmp24.effectiveStartDate = tmp18;
    tmp24.effectiveEndDate = tmp19;
    tmp24.promotionEndDate = endDate;
    tmp24.promotionPriority = priority;
    return tmp24;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
Object.defineProperty(prototype, "surface", {
  get: function surface() {
    const properties = this.properties.properties;
    const oneofKind = properties.oneofKind;
    let tmp = null;
    if (null != oneofKind) {
      let tmp2 = properties[oneofKind];
      if (tmp2 == null) {
        tmp2 = null;
      }
      tmp = tmp2;
    }
    return tmp;
  },
  set: undefined
});
prototype["getFormatVariableValues"] = function getFormatVariableValues(currentLocale) {
  const self = this;
  if (null == this.promotionEndDate) {
    return {};
  } else {
    const _Date = Date;
    const date = new Date();
    const promotionEndDate3 = self.promotionEndDate;
    const time = promotionEndDate3.getTime();
    const diff = time - date.getTime();
    let num = 0;
    if (diff > 0) {
      const _Math = Math;
      num = Math.ceil(diff / DurationsDefault.Millis.DAY);
    }
    const obj = { days_left: num, promotion_end_date: null };
    ({ promotionEndDate, promotionEndDate: promotionEndDate2 } = self);
    const fullYear = promotionEndDate2.getFullYear();
    const date1 = { month: "long", day: "numeric", year: "numeric" };
    obj.promotion_end_date = promotionEndDate.toLocaleDateString(currentLocale, date1);
    return obj;
  }
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