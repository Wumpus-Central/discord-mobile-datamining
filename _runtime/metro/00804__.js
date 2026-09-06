// === Module 804: ? ===

// Module 804
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();

export const cleanupSessionDataForTransport = function cleanupSessionDataForTransport(arg0) {
  weakMap.delete(arg0);
};
export const getClientInfoForTransport = function getClientInfoForTransport(transport) {
  value = weakMap.get(transport);
  let clientInfo;
  if (value != null) {
    clientInfo = value.clientInfo;
  }
  return clientInfo;
};
export const getProtocolVersionForTransport = function getProtocolVersionForTransport(transport) {
  value = weakMap.get(transport);
  let protocolVersion;
  if (value != null) {
    protocolVersion = value.protocolVersion;
  }
  return protocolVersion;
};
export const getSessionDataForTransport = function getSessionDataForTransport(transport) {
  return weakMap.get(transport);
};
export const storeSessionDataForTransport = function storeSessionDataForTransport(self, result) {
  if (self.sessionId) {
    result = weakMap.set(self, result);
  }
};
export const updateSessionDataForTransport = function updateSessionDataForTransport(sessionId, arg1) {
  if (sessionId.sessionId) {
    const tmp = weakMap.get(sessionId) || {};
    const obj = {};
    const merged = Object.assign(tmp);
    const merged1 = Object.assign(arg1);
    const result = obj.set(sessionId, obj);
  }
};