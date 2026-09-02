// === Module 891: createCheckInEnvelope ===

// Module 891 (createCheckInEnvelope)
import dsnFromString from "dsnFromString" /* 834 */;
import forEachEnvelopeItem from "forEachEnvelopeItem" /* 861 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.createCheckInEnvelope = function createCheckInEnvelope(arg0, trace, sdk) {
  let obj = { sent_at: new Date().toISOString() };
  sdk = undefined;
  if (sdk != null) {
    sdk = sdk.sdk;
  }
  if (sdk) {
    obj = { name: null, version: null };
    obj[0] = sdk.sdk.name;
    obj[1] = sdk.sdk.version;
    obj.sdk = obj;
  }
  let tmp2 = arg3;
  if (arg3) {
    tmp2 = arg4;
  }
  if (tmp2) {
    obj.dsn = dsnFromString.dsnToString(arg4);
    const obj4 = dsnFromString;
  }
  if (trace) {
    obj.trace = trace;
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return forEachEnvelopeItem.createEnvelope(obj, items1);
};