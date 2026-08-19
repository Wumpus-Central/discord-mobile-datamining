// _runtime/00944_set.js
import _mod940 from "metro/00940__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const items = [_mod940.CLIENT_ADDRESS_ATTRIBUTE, _mod940.CLIENT_PORT_ATTRIBUTE, _mod940.MCP_RESOURCE_URI_ATTRIBUTE];
const set = new Set(items);

export const filterMcpPiiFromSpanData = function filterMcpPiiFromSpanData(arg0, BooleanResult) {
  let reduced = arg0;
  if (!BooleanResult) {
    const _Object = Object;
    const entries = Object.entries(arg0);
    reduced = entries.reduce((acc, item, index) => {
      [tmp, tmp2] = item;
      if (!set.has(tmp)) {
        acc[tmp] = tmp2;
      }
      return acc;
    }, {});
  }
  return reduced;
};