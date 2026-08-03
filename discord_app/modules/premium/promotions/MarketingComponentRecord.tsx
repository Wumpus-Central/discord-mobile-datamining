// === Module 6268: createFromServer ===

// Module 6268 (createFromServer)
import "toJS";

const require = arg1;
let prototype;
prototype = function MarketingComponentRecord(arg0) {
  const tmp = new prototype(new.target, new.target);
  // ThrowIfThisInitialized (0x7c)
  ({ id: tmp.id, componentType: tmp.componentType, properties: tmp.properties, promotionId: tmp.promotionId } = arg0);
  return tmp;
}.prototype;
class prototype extends tmp2 {
}
prototype["createFromServer"] = function createFromServer(properties) {
  let component_type;
  let id;
  let str = "utf-8";
  const obj = { ignoreBOM: true };
  const textDecoder = new TextDecoder("utf-8", obj);
  ({ id, component_type } = properties);
  const PremiumMarketingComponentProperties = textDecoder(6269).PremiumMarketingComponentProperties;
  const fromBinary = PremiumMarketingComponentProperties.fromBinary;
  const obj2 = textDecoder(1307);
  function readerFactory(buf) {
    const binaryReader = new textDecoder(outer1_1[2]).BinaryReader(buf, textDecoder);
    return binaryReader;
  }
  if (typeof prototype !== "fileFinishedImporting") {
    str = "Trying to call a non-function";
    HermesBuiltin.throwTypeError();
  }
  const tmp3 = new prototype(str, obj, obj2, readerFactory, PremiumMarketingComponentProperties, fromBinary);
  // ThrowIfThisInitialized (0x7c)
  tmp3.id = id;
  tmp3.componentType = component_type;
  tmp3.properties = fromBinary(obj2.base64decode(properties.properties), { readUnknownField: true, readerFactory });
  tmp3.promotionId = properties.promotion_id;
  return tmp3;
};
const result = require("module_1307").fileFinishedImporting("modules/premium/promotions/MarketingComponentRecord.tsx");

export default prototype;