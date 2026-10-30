// === Module 758: ? ===

// Module 758
import _mod701 from "module_701" /* 701 */;
import forEachEnvelopeItem from "forEachEnvelopeItem" /* 728 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function createCheckInEnvelope(arg0, trace, sdk, arg3, url) {
  const obj = { sent_at: new Date().toISOString() };
  sdk = undefined;
  if (sdk != null) {
    sdk = sdk.sdk;
  }
  if (sdk) {
    const obj2 = { name: sdk.sdk.name, version: sdk.sdk.version };
    obj.sdk = obj2;
  }
  let tmp2 = arg3;
  if (arg3) {
    tmp2 = url;
  }
  if (tmp2) {
    obj.dsn = _mod701.dsnToString(url);
  }
  if (trace) {
    obj.trace = trace;
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return forEachEnvelopeItem.createEnvelope(obj, items1);
}