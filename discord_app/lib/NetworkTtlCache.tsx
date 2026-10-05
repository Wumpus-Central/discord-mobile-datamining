// === Module 13536: NetworkTtlCache ===

// Module 13536 (NetworkTtlCache)
import size from "module_2" /* 2 */;

let ttlMs;

const React = { IDLE: "idle", LOADING: "loading", SUCCESS: "success", ERROR: "error" };
const NetworkTtlCacheStatus = { IDLE: "idle", LOADING: "loading", VALID: "valid", STALE: "stale", ERROR: "error" };
const result = size.fileFinishedImporting("lib/NetworkTtlCache.tsx");
class NetworkTtlCache {
  constructor(arg0) {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    const merged = Object.assign({ value: null, fetchState: null, fetchedAt: null });
    merged[1] = constants.IDLE;
    ttlMs = obj.ttlMs;
    if (ttlMs == null) {
      ttlMs = null;
    }
    merged.ttlMs = ttlMs;
    return merged;
  }
  setTtl(c6) {
    this.ttlMs = ttlMs;
  }
  setLoading() {
    this.fetchState = constants.LOADING;
  }
  setValue(value) {
    this.value = value;
    this.fetchState = constants.SUCCESS;
    this.fetchedAt = Date.now();
  }
  setError() {
    this.fetchState = constants.ERROR;
  }
  clear() {
    this.value = null;
    this.fetchState = constants.IDLE;
    this.fetchedAt = null;
  }
  getValue() {
    return this.value;
  }
  getFetchState() {
    return this.fetchState;
  }
  getFetchedAt() {
    return this.fetchedAt;
  }
  forceExpire() {
    this.fetchedAt = null;
  }
  isExpired() {
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
  }
  shouldFetch() {
    const self = this;
    let tmp2 = this.fetchState !== constants.LOADING;
    if (tmp2) {
      tmp2 = self.fetchState === tmp.IDLE || self.isExpired();
      self.fetchState === tmp.IDLE || self.isExpired();
    }
    return tmp2;
  }
  isLoading() {
    return this.fetchState === constants.LOADING;
  }
  isValid() {
    const self = this;
    const tmp = this.fetchState === constants.SUCCESS && !self.isExpired();
    return tmp;
  }
  isError() {
    return this.fetchState === constants.ERROR;
  }
  getStatus() {
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
  }
  getValueWithStatus() {
    const obj = { value: this.value, status: this.getStatus() };
    return obj;
  }
  serialize() {
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
  }
  restore(arg0) {
    if (null != arg0) {
      const self = this;
      ({ value: this.value, fetchedAt: this.fetchedAt } = arg0);
      this.fetchState = constants.SUCCESS;
    }
  }
}
const prototype = NetworkTtlCache.prototype;

export { NetworkTtlCacheStatus };
export { NetworkTtlCache };