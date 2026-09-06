// discord_app/modules/premium/promotions/MarketingComponentRecord.tsx
import setDefault from "../../../utils/Durations.tsx";
import BINARY_READ_OPTIONS from "../../../utils/ProtoUtils.tsx";
import MurmurHashV3Default from "../../../../_runtime/01241_MurmurHashV3.js";
import toJSDefault from "../../../lib/Record.tsx";
import create from "../../../../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/premium_marketing_component_properties.tsx";

require = arg1;
toJSDefault;
let MarketingComponentRecord;
class MarketingComponentRecord extends tmp2 {
  constructor(arg0) {
    tmp = new MarketingComponentRecord(new.target, new.target);
    // ThrowIfThisInitialized (0x7c)
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
  const tmp13 = BINARY_READ_OPTIONS;
  const b64ToProto = tmp13.b64ToProto;
  const b64ToProtoResult = b64ToProto(create.PremiumMarketingComponentProperties, start_date.properties);
  const promotion_id = start_date.promotion_id;
  let tmp15 = date;
  if (date == null) {
    tmp15 = startDate;
  }
  let tmp16 = date1;
  if (date1 == null) {
    tmp16 = endDate;
  }
  if (typeof MarketingComponentRecord !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const tmp17 = new MarketingComponentRecord(
    str,
    tmp,
    tmp13,
    b64ToProto,
    MarketingComponentRecord,
    new.target,
    id,
    component_type,
    b64ToProtoResult,
    promotion_id,
    date,
    date1,
  );
  // ThrowIfThisInitialized (0x7c)
  tmp17.id = id;
  tmp17.componentType = component_type;
  tmp17.properties = b64ToProtoResult;
  tmp17.promotionId = promotion_id;
  tmp17.startDate = date;
  tmp17.endDate = date1;
  tmp17.effectiveStartDate = tmp15;
  tmp17.effectiveEndDate = tmp16;
  return tmp17;
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
      const result = 10000 * Math.min(1, Math.max(0, 0.2 * (diff / setDefault.Millis.HOUR)));
      const _HermesInternal = HermesInternal;
      return MurmurHashV3Default.v3("" + self.promotionId + ":" + id) % 10000 < result;
    }
  }
  return true;
};
let result = require("set").fileFinishedImporting("modules/premium/promotions/MarketingComponentRecord.tsx");

export default MarketingComponentRecord;
