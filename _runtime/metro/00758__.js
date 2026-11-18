// _runtime/metro/00758__.js
import _mod701 from "00701__.js";
import forEachEnvelopeItem from "../00728_forEachEnvelopeItem.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function createCheckInEnvelope(arg0, trace, sdkMetadata, tunnel, dsn) {
  const obj = { sent_at: new Date().toISOString() };
  let sdk;
  if (sdkMetadata != null) {
    sdk = sdkMetadata.sdk;
  }
  if (sdk) {
    const obj2 = { name: sdkMetadata.sdk.name, version: sdkMetadata.sdk.version };
    obj.sdk = obj2;
  }
  let tmp2 = tunnel;
  if (tunnel) {
    tmp2 = dsn;
  }
  if (tmp2) {
    obj.dsn = _mod701.dsnToString(dsn);
  }
  if (trace) {
    obj.trace = trace;
  }
  items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return forEachEnvelopeItem.createEnvelope(obj, items1);
}
