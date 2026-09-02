// === Module 941: set ===

// Module 941 (set)
import _mod937 from "module_937" /* 937 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const items = [_mod937.CLIENT_ADDRESS_ATTRIBUTE, _mod937.CLIENT_PORT_ATTRIBUTE, _mod937.MCP_RESOURCE_URI_ATTRIBUTE];
const set = new Set(items);

export const filterMcpPiiFromSpanData = function filterMcpPiiFromSpanData(arg0, BooleanResult) {
  let reduced = arg0;
  if (!BooleanResult) {
    const _Object = Object;
    const entries = Object.entries(arg0);
    reduced = entries.reduce((arg0, arg1) => {
      [tmp, tmp2] = arg1;
      if (!set.has(tmp)) {
        arg0[tmp] = tmp2;
      }
      return arg0;
    }, {});
  }
  return reduced;
};