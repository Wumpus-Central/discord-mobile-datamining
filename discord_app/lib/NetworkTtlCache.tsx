// === Module 13725: NetworkTtlCache ===

// Module 13725 (NetworkTtlCache)
import size from "module_2" /* 2 */;

const React = { IDLE: "idle", LOADING: "loading", SUCCESS: "success", ERROR: "error" };
const NetworkTtlCacheStatus = { IDLE: "idle", LOADING: "loading", VALID: "valid", STALE: "stale", ERROR: "error" };
const result = size.fileFinishedImporting("lib/NetworkTtlCache.tsx");
class NetworkTtlCache {
  constructor() {
    obj = global;
    if (global === undefined) {
      obj = {};
    }
    merged = Object.assign({ value: null, fetchState: null, fetchedAt: null });
    merged[1] = closure_0.IDLE;
    ttlMs = obj.ttlMs;
    if (ttlMs == null) {
      ttlMs = null;
    }
    merged.ttlMs = ttlMs;
    return merged;
  }
}
const prototype = NetworkTtlCache.prototype;
prototype["setTtl"] = function setTtl(c6) {
  this.ttlMs = ttlMs;
};
prototype["setLoading"] = function setLoading() {
  this.fetchState = constants.LOADING;
};
prototype["setValue"] = function setValue(value) {
  this.value = value;
  this.fetchState = constants.SUCCESS;
  this.fetchedAt = Date.now();
};
prototype["setError"] = function setError() {
  this.fetchState = constants.ERROR;
};
prototype["clear"] = function clear() {
  this.value = null;
  this.fetchState = constants.IDLE;
  this.fetchedAt = null;
};
prototype["getValue"] = function getValue() {
  return this.value;
};
prototype["getFetchState"] = function getFetchState() {
  return this.fetchState;
};
prototype["getFetchedAt"] = function getFetchedAt() {
  return this.fetchedAt;
};
prototype["forceExpire"] = function forceExpire() {
  this.fetchedAt = null;
};
prototype["isExpired"] = function isExpired() {
  const self = this;
  let tmp = null != this.ttlMs;
  if (tmp) {
    let tmp2 = null == self.fetchedAt;
    if (!tmp2) {
      const _Date = Date;
      tmp2 = Date.now() - self.fetchedAt >= self.ttlMs;
    }
    tmp = tmp2;
  }
  return tmp;
};
prototype["shouldFetch"] = function shouldFetch() {
  const self = this;
  let tmp2 = this.fetchState !== constants.LOADING;
  if (tmp2) {
    tmp2 = self.fetchState === tmp.IDLE || self.isExpired();
    const tmp3 = self.fetchState === tmp.IDLE || self.isExpired();
  }
  return tmp2;
};
prototype["isLoading"] = function isLoading() {
  return this.fetchState === constants.LOADING;
};
prototype["isValid"] = function isValid() {
  const self = this;
  return this.fetchState === constants.SUCCESS && !self.isExpired();
};
prototype["isError"] = function isError() {
  return this.fetchState === constants.ERROR;
};
prototype["getStatus"] = function getStatus() {
  const self = this;
  const fetchState = this.fetchState;
  if (constants.IDLE === fetchState) {
    return obj.IDLE;
  } else if (constants.LOADING === fetchState) {
    return obj.LOADING;
  } else if (constants.ERROR === fetchState) {
    return obj.ERROR;
  } else if (constants.SUCCESS === fetchState) {
    return self.isExpired() ? obj.STALE : obj.VALID;
  }
};
prototype["getValueWithStatus"] = function getValueWithStatus() {
  return { value: this.value, status: this.getStatus() };
};
prototype["serialize"] = function serialize() {
  const self = this;
  let tmp = null;
  if (null != this.value) {
    tmp = null;
    if (null != self.fetchedAt) {
      const obj = { value: null, fetchedAt: null };
      ({ value: obj.value, fetchedAt: obj.fetchedAt } = self);
      tmp = obj;
    }
  }
  return tmp;
};
prototype["restore"] = function restore(arg0) {
  if (null != arg0) {
    const self = this;
    ({ value: this.value, fetchedAt: this.fetchedAt } = arg0);
    this.fetchState = constants.SUCCESS;
  }
};

export { NetworkTtlCacheStatus };
export { NetworkTtlCache };