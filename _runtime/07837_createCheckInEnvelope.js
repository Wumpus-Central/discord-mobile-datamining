// === Module 7837: createCheckInEnvelope ===

// Module 7837 (createCheckInEnvelope)
import addNonEnumerableProperty from "addNonEnumerableProperty" /* 7782 */;
import forEachEnvelopeItem from "forEachEnvelopeItem" /* 7820 */;
import dsnFromString from "dsnFromString" /* 7823 */;

require = arg1;
const dependencyMap = arg6;
arg5.createCheckInEnvelope = function createCheckInEnvelope(arg0, arg1, sdk) {
  let obj = { sent_at: new Date().toISOString() };
  if (sdk) {
    sdk = sdk.sdk;
  }
  if (sdk) {
    obj = { name: null, version: null };
    obj[0] = sdk.sdk.name;
    obj[1] = sdk.sdk.version;
    obj.sdk = obj;
  }
  let tmp = arg3;
  if (arg3) {
    tmp = arg4;
  }
  if (tmp) {
    obj.dsn = dsnFromString.dsnToString(arg4);
    const obj4 = dsnFromString;
  }
  if (arg1) {
    obj.trace = addNonEnumerableProperty.dropUndefinedKeys(arg1);
    const obj5 = addNonEnumerableProperty;
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return forEachEnvelopeItem.createEnvelope(obj, items1);
};