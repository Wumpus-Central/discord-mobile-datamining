// === Module 13617: NetworkTtlCacheStatus ===

// Module 13617 (NetworkTtlCacheStatus)
import set from "set" /* 2 */;

let closure_0 = { IDLE: "idle", LOADING: "loading", SUCCESS: "success", ERROR: "error" };
let obj = { IDLE: "idle", LOADING: "loading", VALID: "valid", STALE: "stale", ERROR: "error" };
const result = set.fileFinishedImporting("lib/NetworkTtlCache.tsx");
class NetworkTtlCache {
  constructor() {
    obj = global;
    if (global === undefined) {
      obj = {};
    }
    obj = Object.create(new.target.prototype);
    obj[1] = closure_0.IDLE;
    ttlMs = obj.ttlMs;
    if (ttlMs == null) {
      ttlMs = null;
    }
    obj.ttlMs = ttlMs;
    return obj;
  }
}
const prototype = NetworkTtlCache.prototype;
prototype["setTtl"] = function setTtl(ttlMs) {
  this.ttlMs = ttlMs;
};
prototype["setLoading"] = function setLoading(arg0) {
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
  } else if (tmp.LOADING === fetchState) {
    return obj.LOADING;
  } else if (tmp.ERROR === fetchState) {
    return obj.ERROR;
  } else if (tmp.SUCCESS === fetchState) {
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
      obj = { value: null, fetchedAt: null };
      ({ value: obj[0], fetchedAt: obj[1] } = self);
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

export const NetworkTtlCacheStatus = obj;
export { NetworkTtlCache };