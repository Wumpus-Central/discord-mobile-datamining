// _runtime/00944_set.js
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const items = [require("module_940").CLIENT_ADDRESS_ATTRIBUTE, require("module_940").CLIENT_PORT_ATTRIBUTE, require("module_940").MCP_RESOURCE_URI_ATTRIBUTE];
const set = new Set(items);

export const filterMcpPiiFromSpanData = function filterMcpPiiFromSpanData(arg0, BooleanResult) {
  let reduced = arg0;
  if (!BooleanResult) {
    const _Object = Object;
    const entries = Object.entries(arg0);
    reduced = entries.reduce((arg0, arg1) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg1;
      if (!set.has(tmp)) {
        arg0[tmp] = tmp2;
      }
      return arg0;
    }, {});
  }
  return reduced;
};