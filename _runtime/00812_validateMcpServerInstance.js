// === Module 812: validateMcpServerInstance ===

// Module 812 (validateMcpServerInstance)
import _mod699 from "module_699" /* 699 */;
import CONSOLE_LEVELS from "CONSOLE_LEVELS" /* 700 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const isJsonRpcNotification = function isJsonRpcNotification(jsonrpc) {
  let tmp = typeof jsonrpc === "object";
  if (typeof jsonrpc === "object") {
    tmp = null !== jsonrpc;
  }
  if (tmp) {
    tmp = "jsonrpc" in jsonrpc;
  }
  if (tmp) {
    tmp = "2.0" === jsonrpc.jsonrpc;
  }
  if (tmp) {
    tmp = "method" in jsonrpc;
  }
  if (tmp) {
    tmp = !("id" in jsonrpc);
  }
  return tmp;
};
export const isJsonRpcRequest = function isJsonRpcRequest(jsonrpc) {
  let tmp = typeof jsonrpc === "object";
  if (typeof jsonrpc === "object") {
    tmp = null !== jsonrpc;
  }
  if (tmp) {
    tmp = "jsonrpc" in jsonrpc;
  }
  if (tmp) {
    tmp = "2.0" === jsonrpc.jsonrpc;
  }
  if (tmp) {
    tmp = "method" in jsonrpc;
  }
  if (tmp) {
    tmp = "id" in jsonrpc;
  }
  return tmp;
};
export const isJsonRpcResponse = function isJsonRpcResponse(jsonrpc) {
  let tmp = typeof jsonrpc === "object";
  if (typeof jsonrpc === "object") {
    tmp = null !== jsonrpc;
  }
  if (tmp) {
    tmp = "jsonrpc" in jsonrpc;
  }
  if (tmp) {
    tmp = "2.0" === jsonrpc.jsonrpc;
  }
  if (tmp) {
    tmp = "id" in jsonrpc;
  }
  if (tmp) {
    tmp = "result" in jsonrpc || "error" in jsonrpc;
    const tmp2 = "result" in jsonrpc || "error" in jsonrpc;
  }
  return tmp;
};
export const isValidContentItem = function isValidContentItem(clientInfo) {
  return null != clientInfo && typeof clientInfo === "object";
};
export const validateMcpServerInstance = function validateMcpServerInstance(obj) {
  let flag = typeof obj === "object";
  if (typeof obj === "object") {
    flag = null !== obj;
  }
  if (flag) {
    flag = "resource" in obj;
  }
  if (flag) {
    flag = "tool" in obj;
  }
  if (flag) {
    flag = "prompt" in obj;
  }
  if (flag) {
    flag = "connect" in obj;
  }
  if (!flag) {
    flag = false;
    if (_mod699.DEBUG_BUILD) {
      const debug = CONSOLE_LEVELS.debug;
      debug.warn("Did not patch MCP server. Interface is incompatible.");
      flag = false;
    }
  }
  return flag;
};