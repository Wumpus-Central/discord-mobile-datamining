// _runtime/00820_filterMcpPiiFromSpanData.js
import CLIENT_ADDRESS_ATTRIBUTE from "00816_CLIENT_ADDRESS_ATTRIBUTE.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const items = [
  CLIENT_ADDRESS_ATTRIBUTE.CLIENT_ADDRESS_ATTRIBUTE,
  CLIENT_ADDRESS_ATTRIBUTE.CLIENT_PORT_ATTRIBUTE,
  CLIENT_ADDRESS_ATTRIBUTE.MCP_RESOURCE_URI_ATTRIBUTE,
];
const set = new Set(items);

export const filterMcpPiiFromSpanData = function filterMcpPiiFromSpanData(arg0, _BooleanResult) {
  let reduced = arg0;
  if (!_BooleanResult) {
    const tmp2 = globalThis;
    const _Object = Object;
    const entries = Object.entries(arg0);
    reduced = entries.reduce((acc, item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      if (!set.has(tmp)) {
        acc[tmp] = tmp2;
      }
      return acc;
    }, {});
  }
  return reduced;
};
