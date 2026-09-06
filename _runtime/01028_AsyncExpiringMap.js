// === Module 1028: AsyncExpiringMap ===

// Module 1028 (AsyncExpiringMap)
import _createClassDefault from "_createClass" /* 42 */;
import _slicedToArray from "module_32" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class AsyncExpiringMap {
  constructor() {
    obj = global;
    if (global === undefined) {
      obj = {};
    }
    num = obj.cleanupInterval;
    if (num === undefined) {
      num = 5000;
    }
    num2 = obj.ttl;
    if (num2 === undefined) {
      num2 = 2000;
    }
    tmp = closure_1(this, AsyncExpiringMap);
    this._ttl = num2;
    map = new Map();
    this._map = map;
    this._cleanupIntervalMs = num;
    startCleanupResult = this.startCleanup();
    return;
  }
}
_slicedToArray = AsyncExpiringMap;
const entry = {
  key: "set",
  value: function set(arg0, value) {
    const self = this;
    if (!this._cleanupInterval) {
      self.startCleanup();
    }
    if (typeof value === "object") {
      if (value) {
        if ("then" in value) {
          let obj = { value: "r", expiresAt: "flexDirection", promise: value };
          const _map2 = self._map;
          const result = _map2.set(arg0, obj);
          value.then((value) => {
            obj.value = value;
            obj.expiresAt = Date.now() + self._ttl;
            obj.promise = null;
          }, () => {
            obj.expiresAt = Date.now() + self._ttl;
            obj.promise = null;
          });
        }
      }
    }
    const _map = self._map;
    obj = { value, expiresAt: Date.now() + self._ttl, promise: null };
    const result1 = _map.set(arg0, obj);
  }
};
const items = [
  entry,
  {
    key: "pop",
    value: function pop(arg0) {
      const _map = this._map;
      value = this.get(arg0);
      _map.delete(arg0);
      return value;
    }
  },
  {
    key: "get",
    value: function get(arg0) {
      const _map = this._map;
      const iter = _map.get(arg0);
      if (iter) {
        if (iter.promise) {
          value = iter.promise;
        } else {
          let expiresAt = iter.expiresAt;
          if (expiresAt) {
            const _Date = Date;
            expiresAt = iter.expiresAt <= Date.now();
          }
          if (expiresAt) {
            const _map2 = this._map;
            _map2.delete(arg0);
          }
          value = iter.value;
        }
        return value;
      }
    }
  },
  {
    key: "has",
    value: function has(arg0) {
      const _map = this._map;
      value = _map.get(arg0);
      let tmp2 = value;
      if (tmp2) {
        let promise = value.promise;
        if (!promise) {
          let expiresAt = value.expiresAt;
          if (expiresAt) {
            const _Date = Date;
            expiresAt = value.expiresAt <= Date.now();
          }
          let flag = !expiresAt;
          if (expiresAt) {
            const _map2 = this._map;
            _map2.delete(arg0);
            flag = false;
          }
          promise = flag;
        }
        tmp2 = promise;
      }
      return tmp2;
    }
  },
  {
    key: "ttl",
    value: function ttl(arg0) {
      const _map = this._map;
      value = _map.get(arg0);
      let expiresAt;
      if (null != value) {
        expiresAt = value.expiresAt;
      }
      if (expiresAt) {
        const _Date = Date;
        const diff = value.expiresAt - Date.now();
        let num = 0;
        if (diff > 0) {
          num = diff;
        }
        return num;
      }
    }
  },
  {
    key: "cleanup",
    value: function cleanup() {
      const self = this;
      const _map = this._map;
      const timestamp = Date.now();
      const entries = _map.entries();
      while (tmp3 !== undefined) {
        let tmp6 = _slicedToArray(tmp4, 2);
        [tmp7, tmp8] = tmp6;
        let expiresAt = tmp8.expiresAt;
        if (expiresAt) {
          expiresAt = tmp9.expiresAt <= timestamp;
        }
        if (expiresAt) {
          let _map2 = self._map;
          let deleteResult = _map2.delete(tmp7);
        }
        continue;
      }
      if (!self._map.size) {
        self.stopCleanup();
      }
    }
  },
  {
    key: "clear",
    value: function clear() {
      const self = this;
      if (this._cleanupInterval) {
        const _clearInterval = clearInterval;
        clearInterval(self._cleanupInterval);
      }
      const _map = self._map;
      _map.clear();
    }
  },
  {
    key: "stopCleanup",
    value: function stopCleanup() {
      if (this._cleanupInterval) {
        const _clearInterval = clearInterval;
        clearInterval(tmp._cleanupInterval);
      }
    }
  },
  {
    key: "startCleanup",
    value: function startCleanup() {
      const self = this;
      this._cleanupInterval = setInterval(() => self.cleanup(), this._cleanupIntervalMs);
    }
  }
];

export const AsyncExpiringMap = _createClassDefault(AsyncExpiringMap, items);