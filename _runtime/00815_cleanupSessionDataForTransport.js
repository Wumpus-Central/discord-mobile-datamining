// === Module 815: cleanupSessionDataForTransport ===

// Module 815 (cleanupSessionDataForTransport)
let set;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();

export const cleanupSessionDataForTransport = function cleanupSessionDataForTransport(arg0) {
  weakMap.delete(arg0);
};
export const getClientInfoForTransport = function getClientInfoForTransport(transport) {
  const value = weakMap.get(transport);
  let clientInfo;
  if (value != null) {
    clientInfo = value.clientInfo;
  }
  return clientInfo;
};
export const getProtocolVersionForTransport = function getProtocolVersionForTransport(transport) {
  const value = weakMap.get(transport);
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
export const updateSessionDataForTransport = function updateSessionDataForTransport(sessionId, _self) {
  if (sessionId.sessionId) {
    const obj = {};
    set = weakMap.set;
    const tmp2 = weakMap.get(sessionId) || {};
    const merged = Object.assign(tmp2);
    const merged1 = Object.assign(_self);
    const result = set(sessionId, obj);
  }
};