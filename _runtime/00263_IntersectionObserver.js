// === Module 263: IntersectionObserver ===

// Module 263 (IntersectionObserver)
import _createClassDefault from "_createClass" /* 42 */;
import getTargetFromInstanceHandleAll from "getTargetFromInstanceHandle" /* 264 */;
import closure_3 from "_classCallCheck" /* 41 */;
import setPlatformObject from "setPlatformObject" /* 126 */;

const IntersectionObserver = importDefault;
class IntersectionObserver {
  constructor(arg0, arg1) {
    self = this;
    tmp = closure_3(this, IntersectionObserver);
    set = new Set();
    this._observationTargets = set;
    if (null == global) {
      _TypeError5 = TypeError;
      tmp57 = new.target;
      str17 = "Failed to construct 'IntersectionObserver': 1 argument required, but only 0 present.";
      tmp58 = new.target;
      typeError = new TypeError("Failed to construct 'IntersectionObserver': 1 argument required, but only 0 present.");
      tmp60 = typeError;
      throw typeError;
    } else if (typeof global !== "function") {
      _TypeError4 = TypeError;
      tmp53 = new.target;
      str16 = "Failed to construct 'IntersectionObserver': parameter 1 is not of type 'Function'.";
      tmp54 = new.target;
      typeError1 = new TypeError("Failed to construct 'IntersectionObserver': parameter 1 is not of type 'Function'.");
      tmp56 = typeError1;
      throw typeError1;
    } else {
      tmp61 = arg1;
      root = undefined;
      if (arg1 != null) {
        root = arg1.root;
      }
      if (null != root) {
        root1 = undefined;
        if (arg1 != null) {
          root1 = arg1.root;
        }
        tmp5 = IntersectionObserver;
        tmp6 = closure_2;
        if (!(root1 instanceof require("_isNativeReflectConstruct"))) {
          _TypeError = TypeError;
          tmp7 = new.target;
          str = "Failed to construct 'IntersectionObserver': Failed to read the 'root' property from 'IntersectionObserverInit': The provided value is not of type '(null or ReactNativeElement)";
          tmp8 = new.target;
          typeError2 = new TypeError("Failed to construct 'IntersectionObserver': Failed to read the 'root' property from 'IntersectionObserverInit': The provided value is not of type '(null or ReactNativeElement)");
          tmp10 = typeError2;
          throw typeError2;
        }
      }
      if (null != arg1) {
        str2 = "delay";
        if ("delay" in arg1) {
          _Error3 = Error;
          tmp49 = new.target;
          str15 = "Failed to construct 'IntersectionObserver': The 'delay' option is not supported.";
          tmp50 = new.target;
          error = new Error("Failed to construct 'IntersectionObserver': The 'delay' option is not supported.");
          tmp52 = error;
          throw error;
        }
      }
      if (null != arg1) {
        str3 = "scrollMargin";
        if ("scrollMargin" in arg1) {
          _Error2 = Error;
          tmp45 = new.target;
          str14 = "Failed to construct 'IntersectionObserver': The 'scrollMargin' option is not supported.";
          tmp46 = new.target;
          error1 = new Error("Failed to construct 'IntersectionObserver': The 'scrollMargin' option is not supported.");
          tmp48 = error1;
          throw error1;
        }
      }
      if (null != arg1) {
        str4 = "trackVisibility";
        if ("trackVisibility" in arg1) {
          _Error = Error;
          tmp41 = new.target;
          str13 = "Failed to construct 'IntersectionObserver': The 'trackVisibility' option is not supported.";
          tmp42 = new.target;
          error2 = new Error("Failed to construct 'IntersectionObserver': The 'trackVisibility' option is not supported.");
          tmp44 = error2;
          throw error2;
        }
      }
      self._callback = global;
      rnRootThreshold = undefined;
      if (arg1 != null) {
        rnRootThreshold = arg1.rnRootThreshold;
      }
      _Array = Array;
      tmp12 = rnRootThreshold;
      if (Array.isArray(rnRootThreshold)) {
        mapped = rnRootThreshold.map((arg0) => {
          let tmp = null;
          if (null != arg0) {
            const _Number = Number;
            const NumberResult = Number(arg0);
            const _Number2 = Number;
            if (Number.isFinite(NumberResult)) {
              if (NumberResult >= 0) {
                tmp = NumberResult;
              }
              const _RangeError = RangeError;
              const rangeError = new RangeError("Failed to construct 'IntersectionObserver': Threshold values must be numbers between 0 and 1");
              throw rangeError;
            } else {
              const _TypeError = TypeError;
              const _HermesInternal = HermesInternal;
              const typeError = new TypeError("Failed to read the '" + "rnRootThreshold" + "' property from 'IntersectionObserverInit': The provided double value is non-finite.");
              throw typeError;
            }
          }
          return tmp;
        });
        found = mapped.filter((arg0) => null != arg0);
        sorted = found.sort();
        num3 = 0;
        tmp24 = null;
        if (0 !== sorted.length) {
          tmp24 = sorted;
        }
        tmp23 = tmp24;
      } else {
        tmp13 = null;
        if (null != rnRootThreshold) {
          _Number = Number;
          NumberResult = Number(rnRootThreshold);
          _Number2 = Number;
          if (Number.isFinite(NumberResult)) {
            num = 0;
            if (NumberResult >= 0) {
              num2 = 1;
              tmp13 = NumberResult;
            }
            _RangeError = RangeError;
            tmp19 = new.target;
            str8 = "Failed to construct 'IntersectionObserver': Threshold values must be numbers between 0 and 1";
            tmp20 = new.target;
            rangeError = new RangeError("Failed to construct 'IntersectionObserver': Threshold values must be numbers between 0 and 1");
            tmp22 = rangeError;
            throw rangeError;
          } else {
            _TypeError2 = TypeError;
            _HermesInternal = HermesInternal;
            str5 = "' property from 'IntersectionObserverInit': The provided double value is non-finite.";
            str6 = "rnRootThreshold";
            str7 = "Failed to read the '";
            tmp15 = new.target;
            tmp16 = new.target;
            typeError3 = new TypeError("Failed to read the '" + "rnRootThreshold" + "' property from 'IntersectionObserverInit': The provided double value is non-finite.");
            tmp18 = typeError3;
            throw typeError3;
          }
        }
        tmp23 = null;
        if (null != tmp13) {
          items = [];
          items[0] = tmp13;
          tmp23 = items;
        }
      }
      self._rootThresholds = tmp23;
      threshold = undefined;
      if (arg1 != null) {
        threshold = arg1.threshold;
      }
      tmp26 = null != self._rootThresholds;
      _Array2 = Array;
      mapped1 = threshold;
      if (Array.isArray(threshold)) {
        num6 = 0;
        if (mapped1.length > 0) {
          mapped1 = mapped1.map((arg0) => {
            let tmp = null;
            if (null != arg0) {
              const _Number = Number;
              const NumberResult = Number(arg0);
              const _Number2 = Number;
              if (Number.isFinite(NumberResult)) {
                if (NumberResult >= 0) {
                  tmp = NumberResult;
                }
                const _RangeError = RangeError;
                const rangeError = new RangeError("Failed to construct 'IntersectionObserver': Threshold values must be numbers between 0 and 1");
                throw rangeError;
              } else {
                const _TypeError = TypeError;
                const _HermesInternal = HermesInternal;
                const typeError = new TypeError("Failed to read the '" + "threshold" + "' property from 'IntersectionObserverInit': The provided double value is non-finite.");
                throw typeError;
              }
            }
            return tmp;
          });
          mapped2 = mapped1.map((arg0) => {
            let num = arg0;
            if (arg0 == null) {
              num = 0;
            }
            return num;
          });
          sorted1 = mapped2.sort();
        } else {
          sorted1 = tmp26 ? [] : [0];
        }
        tmp38 = sorted1;
      } else {
        tmp27 = null;
        if (null != mapped1) {
          _Number3 = Number;
          NumberResult1 = Number(mapped1);
          _Number4 = Number;
          if (Number.isFinite(NumberResult1)) {
            num4 = 0;
            if (NumberResult1 >= 0) {
              num5 = 1;
              tmp27 = NumberResult1;
            }
            _RangeError2 = RangeError;
            tmp33 = new.target;
            str12 = "Failed to construct 'IntersectionObserver': Threshold values must be numbers between 0 and 1";
            tmp34 = new.target;
            rangeError1 = new RangeError("Failed to construct 'IntersectionObserver': Threshold values must be numbers between 0 and 1");
            tmp36 = rangeError1;
            throw rangeError1;
          } else {
            _TypeError3 = TypeError;
            _HermesInternal2 = HermesInternal;
            str9 = "' property from 'IntersectionObserverInit': The provided double value is non-finite.";
            str10 = "threshold";
            str11 = "Failed to read the '";
            tmp29 = new.target;
            tmp30 = new.target;
            typeError4 = new TypeError("Failed to read the '" + "threshold" + "' property from 'IntersectionObserverInit': The provided double value is non-finite.");
            tmp32 = typeError4;
            throw typeError4;
          }
        }
        if (null == tmp27) {
          items1 = tmp26 ? [] : [0];
        } else {
          items1 = [];
          items1[0] = tmp27;
        }
        self._thresholds = items1;
        root2 = undefined;
        if (arg1 != null) {
          root2 = arg1.root;
        }
        if (root2 == null) {
          root2 = null;
        }
        self._root = root2;
        rootMargin = undefined;
        if (arg1 != null) {
          rootMargin = arg1.rootMargin;
        }
        num7 = 0;
        self._rootMargin = (function normalizeRootMargin(rootMargin) {
          if (null != rootMargin) {
            if ("" !== rootMargin) {
              if (typeof rootMargin !== "string") {
                const _TypeError = TypeError;
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
                    const syntaxError = new SyntaxError("Failed to construct 'IntersectionObserver': Failed to parse rootMargin: Too many values (expected 1-4).");
                    throw syntaxError;
                  } else {
                    for (const item10005 of parts) {
                      let tmp2 = item10005;
                      if (obj2.test(item10005)) {
                        continue;
                      } else {
                        let tmp3 = globalThis;
                        let _SyntaxError = SyntaxError;
                        let tmp4 = item10005;
                        let _HermesInternal = HermesInternal;
                        let str = "' is not a valid length. Only 'px' and '%' units are allowed.";
                        let str2 = "Failed to construct 'IntersectionObserver': Failed to parse rootMargin: '";
                        let tmp5 = new.target;
                        let tmp6 = new.target;
                        let syntaxError1 = new SyntaxError("Failed to construct 'IntersectionObserver': Failed to parse rootMargin: '" + tmp2 + "' is not a valid length. Only 'px' and '%' units are allowed.");
                        let tmp8 = syntaxError1;
                        throw syntaxError1;
                      }
                    }
                    if (1 === parts.length) {
                      const items = [parts[0], parts[0], parts[0], parts[0]];
                      let obj = items;
                    } else if (2 === length) {
                      const items1 = [parts[0], parts[1], , ];
                      [arr2[2], arr2[3]] = parts;
                      obj = items1;
                    } else if (3 === length) {
                      const items2 = [parts[0], parts[1], parts[2], parts[1]];
                      obj = items2;
                    } else {
                      obj = parts;
                      if (4 !== length) {
                        const _SyntaxError3 = SyntaxError;
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
        })(rootMargin);
        return;
      }
    }
    return;
  }
}
let items = [
  {
    key: "root",
    get() {
      return this._root;
    }
  },
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
      error = new Error("Failed to read the 'delay' property from 'IntersectionObserver': This property is not supported.");
      throw error;
    }
  },
  {
    key: "scrollMargin",
    get() {
      error = new Error("Failed to read the 'scrollMargin' property from 'IntersectionObserver': This property is not supported.");
      throw error;
    }
  },
  {
    key: "trackVisibility",
    get() {
      error = new Error("Failed to read the 'trackVisibility' property from 'IntersectionObserver': This property is not supported.");
      throw error;
    }
  },
  {
    key: "observe",
    value: function observe(arg0) {
      if (null == arg0) {
        const _TypeError2 = TypeError;
        const typeError = new TypeError("Failed to execute 'observe' on 'IntersectionObserver': parameter 1 is null or undefined.");
        throw typeError;
      } else if (arg0 instanceof IntersectionObserver(143)) {
        const self = this;
        const _observationTargets = this._observationTargets;
        if (!_observationTargets.has(arg0)) {
          let obj = getTargetFromInstanceHandleAll;
          obj = { intersectionObserverId: null, root: null, target: null };
          obj[0] = self._getOrCreateIntersectionObserverId();
          obj[1] = self._root;
          obj[2] = arg0;
          if (obj.observe(obj)) {
            const _observationTargets2 = self._observationTargets;
            _observationTargets2.add(arg0);
          }
        }
      } else {
        const _TypeError = TypeError;
        const typeError1 = new TypeError("Failed to execute 'observe' on 'IntersectionObserver': parameter 1 is not of type 'ReactNativeElement'.");
        throw typeError1;
      }
    }
  },
  {
    key: "unobserve",
    value: function unobserve(arg0) {
      if (arg0 instanceof IntersectionObserver(143)) {
        const self = this;
        const _observationTargets = this._observationTargets;
        if (_observationTargets.has(arg0)) {
          const _intersectionObserverId = self._intersectionObserverId;
          if (null != _intersectionObserverId) {
            getTargetFromInstanceHandleAll.unobserve(_intersectionObserverId, arg0);
            const _observationTargets2 = self._observationTargets;
            _observationTargets2.delete(arg0);
            if (0 === self._observationTargets.size) {
              tmp10(264).unregisterObserver(_intersectionObserverId);
              self._intersectionObserverId = null;
              const tmp10Result = tmp10(264);
            }
            const obj = getTargetFromInstanceHandleAll;
            tmp10 = importAll;
          } else {
            const _console = console;
            console.error("Unexpected state in 'IntersectionObserver': could not find observer ID to unobserve target.");
          }
        }
      } else {
        const _TypeError = TypeError;
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
        const registerObserverResult = getTargetFromInstanceHandleAll.registerObserver(self, self._callback);
        self._intersectionObserverId = registerObserverResult;
        _intersectionObserverId = registerObserverResult;
        const obj = getTargetFromInstanceHandleAll;
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
let tmp2 = _createClassDefault(IntersectionObserver, items);
setPlatformObject.setPlatformObject(tmp2);

export default tmp2;