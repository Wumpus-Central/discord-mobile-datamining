// === Module 10398: MarketingComponentRecord ===

// Module 10398 (MarketingComponentRecord)
import DurationsDefault from "Durations" /* 1102 */;
import ProtoUtils from "ProtoUtils" /* 1234 */;
import _modDef1251 from "module_1251" /* 1251 */;
import premium_marketing_component_properties from "premium_marketing_component_properties" /* 10399 */;
import Record from "Record" /* 1392 */;
import size from "module_2" /* 2 */;

let startDate;

class MarketingComponentRecord extends Record {
  constructor(arg0) {
    const tmp = new MarketingComponentRecord(new.target, this);
    ({ id: tmp.id, componentType: tmp.componentType, properties: tmp.properties, promotionId: tmp.promotionId, startDate: tmp.startDate, endDate: tmp.endDate, effectiveStartDate: tmp.effectiveStartDate, effectiveEndDate: tmp.effectiveEndDate } = arg0);
    return tmp;
  }
  static createFromServer(start_date, startDate) {
    let component_type;
    let id;
    let date = null;
    if (null != start_date.start_date) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date(start_date.start_date);
    }
    let date1 = null;
    if (null != start_date.end_date) {
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
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
    const tmp10 = ProtoUtils;
    const b64ToProto = tmp10.b64ToProto;
    const b64ToProtoResult = b64ToProto(premium_marketing_component_properties.PremiumMarketingComponentProperties, start_date.properties);
    const promotion_id = start_date.promotion_id;
    let tmp12 = date;
    if (date == null) {
      tmp12 = startDate;
    }
    let tmp13 = date1;
    if (date1 == null) {
      tmp13 = endDate;
    }
    if (typeof MarketingComponentRecord === "function") {
      const self5 = this;
      const self6 = this;
      const tmp15 = new MarketingComponentRecord(tmp4, tmp, tmp10, b64ToProto, MarketingComponentRecord, this, id, component_type, b64ToProtoResult, promotion_id, date, date1);
      tmp15.id = id;
      tmp15.componentType = component_type;
      tmp15.properties = b64ToProtoResult;
      tmp15.promotionId = promotion_id;
      tmp15.startDate = date;
      tmp15.endDate = date1;
      tmp15.effectiveStartDate = tmp12;
      tmp15.effectiveEndDate = tmp13;
      return tmp15;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  isIncludedInRollout(id, date) {
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
        const obj = _modDef1251;
        return obj.v3("" + self.promotionId + ":" + id) % 10000 < result;
      }
    }
    return true;
  }
}
Object.defineProperty(MarketingComponentRecord.prototype, "isTimed", {
  get: function isTimed() {
    return null != this.startDate || null != this.endDate;
  },
  set: undefined
});
let result = size.fileFinishedImporting("modules/premium/promotions/MarketingComponentRecord.tsx");

export default MarketingComponentRecord;