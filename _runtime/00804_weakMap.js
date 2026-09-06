// === Module 804: weakMap ===

// Module 804 (weakMap)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();
arg5.cleanupSessionDataForTransport = function cleanupSessionDataForTransport(arg0) {
  weakMap.delete(arg0);
};
arg5.getClientInfoForTransport = function getClientInfoForTransport(transport) {
  const value = weakMap.get(transport);
  let clientInfo;
  if (value != null) {
    clientInfo = value.clientInfo;
  }
  return clientInfo;
};
arg5.getProtocolVersionForTransport = function getProtocolVersionForTransport(transport) {
  const value = weakMap.get(transport);
  let protocolVersion;
  if (value != null) {
    protocolVersion = value.protocolVersion;
  }
  return protocolVersion;
};
arg5.getSessionDataForTransport = function getSessionDataForTransport(transport) {
  return weakMap.get(transport);
};
arg5.storeSessionDataForTransport = function storeSessionDataForTransport(self, result) {
  if (self.sessionId) {
    result = weakMap.set(self, result);
  }
};
arg5.updateSessionDataForTransport = function updateSessionDataForTransport(closure_4, closure_0) {
  if (closure_4.sessionId) {
    let obj = weakMap;
    const tmp = weakMap.get(closure_4) || {};
    obj = {};
    const merged = Object.assign(tmp);
    const merged1 = Object.assign(closure_0);
    const result = obj.set(closure_4, obj);
  }
};