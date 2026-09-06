// === Module 759: ? ===

// Module 759
import _mod702 from "module_702" /* 702 */;
import forEachEnvelopeItem from "forEachEnvelopeItem" /* 729 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const createCheckInEnvelope = function createCheckInEnvelope(arg0, trace, sdk, arg3, url) {
  let obj = { sent_at: new Date().toISOString() };
  sdk = undefined;
  if (sdk != null) {
    sdk = sdk.sdk;
  }
  if (sdk) {
    obj = { name: sdk.sdk.name, version: sdk.sdk.version };
    obj.sdk = obj;
  }
  let tmp2 = arg3;
  if (arg3) {
    tmp2 = url;
  }
  if (tmp2) {
    obj.dsn = _mod702.dsnToString(url);
  }
  if (trace) {
    obj.trace = trace;
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return forEachEnvelopeItem.createEnvelope(obj, items1);
};