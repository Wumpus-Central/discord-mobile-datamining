// discord_app/modules/premium/promotions/MarketingComponentRecord.tsx
import DurationsDefault from "../../../utils/Durations.tsx";
import ProtoUtils from "../../../utils/ProtoUtils.tsx";
import MurmurHashV3Default from "../../../../_runtime/01241_MurmurHashV3.js";
import premium_marketing_component_properties from "../../../../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/premium_marketing_component_properties.tsx";
import Record from "../../../lib/Record.tsx";

require = fn;
let MarketingComponentRecord;
class MarketingComponentRecord extends tmp2 {
  constructor(arg0) {
    tmp = new MarketingComponentRecord(new.target, new.target);
    ({
      id: tmp.id,
      componentType: tmp.componentType,
      properties: tmp.properties,
      promotionId: tmp.promotionId,
      startDate: tmp.startDate,
      endDate: tmp.endDate,
      effectiveStartDate: tmp.effectiveStartDate,
      effectiveEndDate: tmp.effectiveEndDate,
    } = global);
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
  const tmp14 = ProtoUtils;
  const b64ToProto = tmp14.b64ToProto;
  const b64ToProtoResult = b64ToProto(
    premium_marketing_component_properties.PremiumMarketingComponentProperties,
    start_date.properties,
  );
  const promotion_id = start_date.promotion_id;
  let tmp16 = date;
  if (date == null) {
    tmp16 = startDate;
  }
  let tmp17 = date1;
  if (date1 == null) {
    tmp17 = endDate;
  }
  if (typeof MarketingComponentRecord === "function") {
    const tmp21 = new MarketingComponentRecord(
      tmp4,
      tmp,
      tmp14,
      b64ToProto,
      tmp13,
      new.target,
      id,
      component_type,
      b64ToProtoResult,
      promotion_id,
      date,
      date1,
    );
    tmp21.id = id;
    tmp21.componentType = component_type;
    tmp21.properties = b64ToProtoResult;
    tmp21.promotionId = promotion_id;
    tmp21.startDate = date;
    tmp21.endDate = date1;
    tmp21.effectiveStartDate = tmp16;
    tmp21.effectiveEndDate = tmp17;
    return tmp21;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
Object.defineProperty(prototype, "isTimed", {
  get: function isTimed() {
    return null != this.startDate || null != this.endDate;
  },
  set: undefined,
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
