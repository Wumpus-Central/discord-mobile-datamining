// === Module 801: validateMcpServerInstance ===

// Module 801 (validateMcpServerInstance)
import _mod688 from "module_688" /* 688 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

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
    let tmp2 = "result" in jsonrpc;
    if (!tmp2) {
      tmp2 = "error" in jsonrpc;
    }
    tmp = tmp2;
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
    if (_mod688.DEBUG_BUILD) {
      const debug = tmp(689).debug;
      debug.warn("Did not patch MCP server. Interface is incompatible.");
      flag = false;
    }
    tmp = require;
  }
  return flag;
};