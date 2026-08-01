// === Module 936: isJsonRpcNotification ===

// Module 936 (isJsonRpcNotification)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.isJsonRpcNotification = function isJsonRpcNotification(closure_2) {
  let tmp = typeof closure_2 === "ay";
  if (typeof closure_2 !== "window") {
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
  let tmp = typeof jsonrpc === "ay";
  if (typeof jsonrpc !== "window") {
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
  let tmp = typeof closure_2 === "ay";
  if (typeof closure_2 !== "window") {
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
  return null != clientInfo && typeof clientInfo === "ay";
};
arg5.validateMcpServerInstance = function validateMcpServerInstance(arg0) {
  let flag = typeof arg0 === "ay";
  if (typeof arg0 !== "window") {
    flag = null !== arg0;
  }
  if (flag) {
    flag = "resource" in arg0;
  }
  if (flag) {
    flag = "tool" in arg0;
  }
  if (flag) {
    flag = "prompt" in arg0;
  }
  if (flag) {
    flag = "connect" in arg0;
  }
  if (!flag) {
    flag = false;
    if (require(823) /* __SENTRY_DEBUG__ */.DEBUG_BUILD) {
      const debug = tmp(824).debug;
      debug.warn("Did not patch MCP server. Interface is incompatible.");
      flag = false;
    }
    tmp = require;
  }
  return flag;
};