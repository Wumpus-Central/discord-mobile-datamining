// _runtime/00936_isJsonRpcNotification.js
import __SENTRY_DEBUG__ from "metro/00823___SENTRY_DEBUG__.js";
import consoleSandbox from "00824_consoleSandbox.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.isJsonRpcNotification = function isJsonRpcNotification(closure_2) {
  let tmp = typeof closure_2 === "object";
  if (typeof closure_2 === "object") {
    tmp = null !== closure_2;
  }
  if (tmp) {
    tmp = "jsonrpc" in closure_2;
  }
  if (tmp) {
    tmp = "2.0" === closure_2.jsonrpc;
  }
  if (tmp) {
    tmp = "method" in closure_2;
  }
  if (tmp) {
    tmp = !("id" in closure_2);
  }
  return tmp;
};
arg5.isJsonRpcRequest = function isJsonRpcRequest(jsonrpc) {
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
arg5.isJsonRpcResponse = function isJsonRpcResponse(closure_2) {
  let tmp = typeof closure_2 === "object";
  if (typeof closure_2 === "object") {
    tmp = null !== closure_2;
  }
  if (tmp) {
    tmp = "jsonrpc" in closure_2;
  }
  if (tmp) {
    tmp = "2.0" === closure_2.jsonrpc;
  }
  if (tmp) {
    tmp = "id" in closure_2;
  }
  if (tmp) {
    let tmp2 = "result" in closure_2;
    if (!tmp2) {
      tmp2 = "error" in closure_2;
    }
    tmp = tmp2;
  }
  return tmp;
};
arg5.isValidContentItem = function isValidContentItem(clientInfo) {
  return null != clientInfo && typeof clientInfo === "object";
};
arg5.validateMcpServerInstance = function validateMcpServerInstance(obj) {
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
    if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const debug = consoleSandbox.debug;
      debug.warn("Did not patch MCP server. Interface is incompatible.");
      flag = false;
    }
  }
  return flag;
};