// === Module 263: ? ===

// Module 263
import _createClassDefault from "_createClass" /* 42 */;
import _modDef143 from "module_143" /* 143 */;
import registerObserverAll from "registerObserver" /* 264 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import module_126 from "module_126" /* 126 */;

class IntersectionObserver {
  constructor(__handleIntersections, root) {
    function normalizeRootMargin(rootMargin) {
      if (null != rootMargin) {
        if ("" !== rootMargin) {
          if (typeof rootMargin !== "string") {
            const _TypeError = TypeError;
            const self5 = this;
            const self6 = this;
            const typeError = new TypeError("Failed to construct 'IntersectionObserver': Failed to read the 'rootMargin' property from 'IntersectionObserverInit': The provided value is not of type 'string'.");
            throw typeError;
          } else {
            const str8 = rootMargin.trim();
            if ("" === str8) {
              return "0px 0px 0px 0px";
            } else {
              const parts = str8.split(/\s+/);
              if (parts.length > 4) {
                const _SyntaxError2 = SyntaxError;
                const self3 = this;
                const self4 = this;
                const syntaxError = new SyntaxError("Failed to construct 'IntersectionObserver': Failed to parse rootMargin: Too many values (expected 1-4).");
                throw syntaxError;
              } else {
                let obj;
                const obj2 = /^-?\d+(\.\d+)?(px|%)$/;
                for (const item10005 of parts) {
                  if (obj2.test(item10005)) {
                    continue;
                  } else {
                    let tmp3 = globalThis;
                    let _SyntaxError = SyntaxError;
                    let _HermesInternal = HermesInternal;
                    let str = "' is not a valid length. Only 'px' and '%' units are allowed.";
                    let str2 = "Failed to construct 'IntersectionObserver': Failed to parse rootMargin: '";
                    let self = this;
                    let self2 = this;
                    let syntaxError1 = new SyntaxError("Failed to construct 'IntersectionObserver': Failed to parse rootMargin: '" + item10005 + "' is not a valid length. Only 'px' and '%' units are allowed.");
                    throw syntaxError1;
                  }
                }
                if (1 === parts.length) {
                  const items = [parts[0], parts[0], parts[0], parts[0]];
                  obj = items;
                } else if (2 === parts.length) {
                  const items1 = [parts[0], parts[1], , ];
                  [arr2[2], arr2[3]] = parts;
                  obj = items1;
                } else if (3 === parts.length) {
                  const items2 = [parts[0], parts[1], parts[2], parts[1]];
                  obj = items2;
                } else {
                  obj = parts;
                  if (4 !== parts.length) {
                    const _SyntaxError3 = SyntaxError;
                    const self7 = this;
                    const self8 = this;
                    const syntaxError2 = new SyntaxError("Failed to construct 'IntersectionObserver': Failed to parse rootMargin.");
                    throw syntaxError2;
                  }
                }
                return obj.join(" ");
              }
            }
          }
        }
      }
      return "0px 0px 0px 0px";
    }
    let self = this;
    let tmp = _classCallCheck(this, IntersectionObserver);
    this._observationTargets = new Set();
    new Set();
    if (null == __handleIntersections) {
      const _TypeError5 = TypeError;
      const self20 = this;
      const self21 = this;
      let typeError = new TypeError("Failed to construct 'IntersectionObserver': 1 argument required, but only 0 present.");
      throw typeError;
    } else if (typeof __handleIntersections !== "function") {
      const _TypeError4 = TypeError;
      const self18 = this;
      const self19 = this;
      const typeError1 = new TypeError("Failed to construct 'IntersectionObserver': parameter 1 is not of type 'Function'.");
      throw typeError1;
    } else {
      let tmp17;
      let items1;
      root = undefined;
      if (root != null) {
        root = root.root;
      }
      if (null != root) {
        let root1;
        if (root != null) {
          root1 = root.root;
        }
        if (!(root1 instanceof _modDef143)) {
          let _TypeError = TypeError;
          let self2 = this;
          let str = "Failed to construct 'IntersectionObserver': Failed to read the 'root' property from 'IntersectionObserverInit': The provided value is not of type '(null or ReactNativeElement)";
          let self3 = this;
          const typeError2 = new TypeError("Failed to construct 'IntersectionObserver': Failed to read the 'root' property from 'IntersectionObserverInit': The provided value is not of type '(null or ReactNativeElement)");
          throw typeError2;
        }
      }
      if (null != root) {
        let str2 = "delay";
        if ("delay" in root) {
          const _Error3 = Error;
          const self16 = this;
          const self17 = this;
          const error = new Error("Failed to construct 'IntersectionObserver': The 'delay' option is not supported.");
          throw error;
        }
      }
      if (null != root) {
        if ("scrollMargin" in root) {
          const _Error2 = Error;
          const self14 = this;
          const self15 = this;
          const error1 = new Error("Failed to construct 'IntersectionObserver': The 'scrollMargin' option is not supported.");
          throw error1;
        }
      }
      if (null != root) {
        if ("trackVisibility" in root) {
          const _Error = Error;
          const self12 = this;
          const self13 = this;
          const error2 = new Error("Failed to construct 'IntersectionObserver': The 'trackVisibility' option is not supported.");
          throw error2;
        }
      }
      self._callback = __handleIntersections;
      let rnRootThreshold;
      if (root != null) {
        rnRootThreshold = root.rnRootThreshold;
      }
      const _Array = Array;
      if (Array.isArray(rnRootThreshold)) {
        const mapped = rnRootThreshold.map(function(item) {
          let tmp = null;
          if (null != item) {
            const _Number = Number;
            const NumberResult = Number(item);
            const _Number2 = Number;
            if (Number.isFinite(NumberResult)) {
              if (NumberResult >= 0) {
                tmp = NumberResult;
              }
              const _RangeError = RangeError;
              const self3 = this;
              const self4 = this;
              const rangeError = new RangeError("Failed to construct 'IntersectionObserver': Threshold values must be numbers between 0 and 1");
              throw rangeError;
            } else {
              const _TypeError = TypeError;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const typeError = new TypeError("Failed to read the '" + "rnRootThreshold" + "' property from 'IntersectionObserverInit': The provided double value is non-finite.");
              throw typeError;
            }
          }
          return tmp;
        });
        const found = mapped.filter((item) => null != item);
        const sorted = found.sort();
        let tmp18 = null;
        if (0 !== sorted.length) {
          tmp18 = sorted;
        }
        tmp17 = tmp18;
      } else {
        let tmp11 = null;
        if (null != rnRootThreshold) {
          let _Number = Number;
          let NumberResult = Number(rnRootThreshold);
          let _Number2 = Number;
          if (Number.isFinite(NumberResult)) {
            let num = 0;
            if (NumberResult >= 0) {
              tmp11 = NumberResult;
            }
            let _RangeError = RangeError;
            let self6 = this;
            let str8 = "Failed to construct 'IntersectionObserver': Threshold values must be numbers between 0 and 1";
            let self7 = this;
            let rangeError = new RangeError("Failed to construct 'IntersectionObserver': Threshold values must be numbers between 0 and 1");
            throw rangeError;
          } else {
            const _TypeError2 = TypeError;
            let _HermesInternal = HermesInternal;
            let self4 = this;
            let self5 = this;
            const typeError3 = new TypeError("Failed to read the '" + "rnRootThreshold" + "' property from 'IntersectionObserverInit': The provided double value is non-finite.");
            throw typeError3;
          }
        }
        tmp17 = null;
        if (null != tmp11) {
          let items = [tmp11];
          tmp17 = items;
        }
      }
      self._rootThresholds = tmp17;
      let threshold;
      if (root != null) {
        threshold = root.threshold;
      }
      const _Array2 = Array;
      if (Array.isArray(threshold)) {
        let sorted1;
        if (threshold.length > 0) {
          const mapped1 = threshold.map(function(item) {
            let tmp = null;
            if (null != item) {
              const _Number = Number;
              const NumberResult = Number(item);
              const _Number2 = Number;
              if (Number.isFinite(NumberResult)) {
                if (NumberResult >= 0) {
                  tmp = NumberResult;
                }
                const _RangeError = RangeError;
                const self3 = this;
                const self4 = this;
                const rangeError = new RangeError("Failed to construct 'IntersectionObserver': Threshold values must be numbers between 0 and 1");
                throw rangeError;
              } else {
                const _TypeError = TypeError;
                const _HermesInternal = HermesInternal;
                const self = this;
                const self2 = this;
                const typeError = new TypeError("Failed to read the '" + "threshold" + "' property from 'IntersectionObserverInit': The provided double value is non-finite.");
                throw typeError;
              }
            }
            return tmp;
          });
          const mapped2 = mapped1.map((item) => {
            let num = item;
            if (item == null) {
              num = 0;
            }
            return num;
          });
          sorted1 = mapped2.sort();
        } else {
          sorted1 = tmp20 ? [] : [0];
        }
        items1 = sorted1;
      } else {
        let tmp22 = null;
        if (null != threshold) {
          const _Number3 = Number;
          const NumberResult1 = Number(threshold);
          const _Number4 = Number;
          if (Number.isFinite(NumberResult1)) {
            if (NumberResult1 >= 0) {
              tmp22 = NumberResult1;
            }
            const _RangeError2 = RangeError;
            const self10 = this;
            const self11 = this;
            const rangeError1 = new RangeError("Failed to construct 'IntersectionObserver': Threshold values must be numbers between 0 and 1");
            throw rangeError1;
          } else {
            const _TypeError3 = TypeError;
            const _HermesInternal2 = HermesInternal;
            let self8 = this;
            const self9 = this;
            const typeError4 = new TypeError("Failed to read the '" + "threshold" + "' property from 'IntersectionObserverInit': The provided double value is non-finite.");
            throw typeError4;
          }
        }
        if (null == tmp22) {
          items1 = tmp20 ? [] : [0];
        } else {
          items1 = [tmp22];
        }
      }
      self._thresholds = items1;
      let root2;
      if (root != null) {
        root2 = root.root;
      }
      if (root2 == null) {
        root2 = null;
      }
      self._root = root2;
      let rootMargin;
      if (root != null) {
        rootMargin = root.rootMargin;
      }
      self._rootMargin = normalizeRootMargin(rootMargin);
    }
  }
}
let obj = {
  key: "root",
  get() {
    return this._root;
  }
};
let items = [
  obj,
  {
    key: "rootMargin",
    get() {
      return this._rootMargin;
    }
  },
  {
    key: "thresholds",
    get() {
      return this._thresholds;
    }
  },
  {
    key: "rnRootThresholds",
    get() {
      return this._rootThresholds;
    }
  },
  {
    key: "delay",
    get() {
      const error = new Error("Failed to read the 'delay' property from 'IntersectionObserver': This property is not supported.");
      throw error;
    }
  },
  {
    key: "scrollMargin",
    get() {
      const error = new Error("Failed to read the 'scrollMargin' property from 'IntersectionObserver': This property is not supported.");
      throw error;
    }
  },
  {
    key: "trackVisibility",
    get() {
      const error = new Error("Failed to read the 'trackVisibility' property from 'IntersectionObserver': This property is not supported.");
      throw error;
    }
  },
  {
    key: "observe",
    value: function observe(target) {
      if (null == target) {
        const _TypeError2 = TypeError;
        const self4 = this;
        const self5 = this;
        const typeError = new TypeError("Failed to execute 'observe' on 'IntersectionObserver': parameter 1 is null or undefined.");
        throw typeError;
      } else if (target instanceof _modDef143) {
        const self3 = this;
        const _observationTargets = this._observationTargets;
        if (!_observationTargets.has(target)) {
          const obj = { intersectionObserverId: self3._getOrCreateIntersectionObserverId(), root: self3._root, target };
          const observe = registerObserverAll.observe;
          registerObserverAll;
          if (observe(obj)) {
            const _observationTargets2 = self3._observationTargets;
            _observationTargets2.add(target);
          }
        }
      } else {
        const _TypeError = TypeError;
        const self = this;
        const self2 = this;
        const typeError1 = new TypeError("Failed to execute 'observe' on 'IntersectionObserver': parameter 1 is not of type 'ReactNativeElement'.");
        throw typeError1;
      }
    }
  },
  {
    key: "unobserve",
    value: function unobserve(arg0) {
      if (arg0 instanceof _modDef143) {
        const self3 = this;
        const _observationTargets = this._observationTargets;
        if (_observationTargets.has(arg0)) {
          const _intersectionObserverId = self3._intersectionObserverId;
          if (null != _intersectionObserverId) {
            const obj = registerObserverAll;
            obj.unobserve(_intersectionObserverId, arg0);
            const _observationTargets2 = self3._observationTargets;
            _observationTargets2.delete(arg0);
            if (0 === self3._observationTargets.size) {
              const tmp8Result = registerObserverAll;
              tmp8Result.unregisterObserver(_intersectionObserverId);
              self3._intersectionObserverId = null;
            }
          } else {
            const _console = console;
            console.error("Unexpected state in 'IntersectionObserver': could not find observer ID to unobserve target.");
          }
        }
      } else {
        const _TypeError = TypeError;
        const self = this;
        const self2 = this;
        const typeError = new TypeError("Failed to execute 'unobserve' on 'IntersectionObserver': parameter 1 is not of type 'ReactNativeElement'.");
        throw typeError;
      }
    }
  },
  {
    key: "disconnect",
    value: function disconnect() {
      const self = this;
      const _observationTargets = this._observationTargets;
      const keys = _observationTargets.keys();
      for (const item10008 of keys) {
        let unobserveResult = self.unobserve(item10008);
        continue;
      }
    }
  },
  {
    key: "_getOrCreateIntersectionObserverId",
    value: function _getOrCreateIntersectionObserverId() {
      const self = this;
      let _intersectionObserverId = this._intersectionObserverId;
      if (null == _intersectionObserverId) {
        const obj = registerObserverAll;
        const registerObserverResult = obj.registerObserver(self, self._callback);
        self._intersectionObserverId = registerObserverResult;
        _intersectionObserverId = registerObserverResult;
      }
      return _intersectionObserverId;
    }
  },
  {
    key: "__getObserverID",
    value: function __getObserverID() {
      return this._intersectionObserverId;
    }
  }
];
const tmp2 = _createClassDefault(IntersectionObserver, items);
module_126.setPlatformObject(tmp2);

export default tmp2;