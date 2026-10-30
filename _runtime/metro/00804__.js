// _runtime/metro/00804__.js
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();

export function cleanupSessionDataForTransport(arg0) {
  weakMap.delete(arg0);
}
export function getClientInfoForTransport(transport) {
  value = weakMap.get(transport);
  let clientInfo;
  if (value != null) {
    clientInfo = value.clientInfo;
  }
  return clientInfo;
}
export function getProtocolVersionForTransport(transport) {
  value = weakMap.get(transport);
  let protocolVersion;
  if (value != null) {
    protocolVersion = value.protocolVersion;
  }
  return protocolVersion;
}
export function getSessionDataForTransport(transport) {
  return weakMap.get(transport);
}
export function storeSessionDataForTransport(self, result) {
  if (self.sessionId) {
    result = weakMap.set(self, result);
  }
}
export function updateSessionDataForTransport(sessionId, arg1) {
  if (sessionId.sessionId) {
    const tmp = weakMap.get(sessionId) || {};
    const obj2 = {};
    const merged = Object.assign(tmp);
    const merged1 = Object.assign(arg1);
    const result = weakMap.set(sessionId, obj2);
  }
}
