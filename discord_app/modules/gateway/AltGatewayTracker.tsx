// === Module 13249: shouldUseAltGateway ===

// Module 13249 (shouldUseAltGateway)
import getCachedUseAltGatewayDefault from "getCachedUseAltGateway" /* 13250 */;

let closure_1 = getCachedUseAltGatewayDefault();
const result = require("set").fileFinishedImporting("modules/gateway/AltGatewayTracker.tsx");
class AltGatewayTracker {
}
const prototype = AltGatewayTracker.prototype;
prototype["shouldUseAltGateway"] = function shouldUseAltGateway(arg0) {
  const fallbackTripped = this.fallbackTripped;
  let tmp = !fallbackTripped;
  if (!fallbackTripped) {
    tmp = null != GATEWAY_ALT_ENDPOINT;
  }
  if (tmp) {
    tmp = closure_1;
  }
  return tmp;
};
prototype["isAssignedToAltGateway"] = function isAssignedToAltGateway() {
  return null != GATEWAY_ALT_ENDPOINT && closure_1;
};
prototype["getDidFallBack"] = function getDidFallBack() {
  return this.fallbackTripped;
};
prototype["getAltGatewayUrl"] = function getAltGatewayUrl() {
  let tmp = null;
  if (this.shouldUseAltGateway()) {
    tmp = GATEWAY_ALT_ENDPOINT;
  }
  return tmp;
};
prototype["recordSuccess"] = function recordSuccess() {
  this.failures = 0;
};
prototype["recordFailure"] = function recordFailure() {
  const self = this;
  if (this.shouldUseAltGateway()) {
    self.failures = self.failures + 1;
    if (self.failures >= 3) {
      self.fallbackTripped = true;
    }
  }
};
prototype["reset"] = function reset() {
  this.failures = 0;
  this.fallbackTripped = false;
};

export default AltGatewayTracker;