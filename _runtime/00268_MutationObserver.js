// _runtime/00268_MutationObserver.js
import _createClassDefault from "_createClass" /* 42 */;
import notifyMutationObserversAll from "notifyMutationObservers" /* 269 */;
import closure_3 from "_classCallCheck" /* 41 */;
import setPlatformObject from "setPlatformObject" /* 126 */;

const MutationObserver = importDefault;
class MutationObserver {
  constructor(arg0) {
    tmp = closure_3(this, MutationObserver);
    set = new Set();
    this._observationTargets = set;
    if (null == global) {
      _TypeError2 = TypeError;
      tmp7 = new.target;
      str2 = "Failed to construct 'MutationObserver': 1 argument required, but only 0 present.";
      tmp8 = new.target;
      typeError = new TypeError("Failed to construct 'MutationObserver': 1 argument required, but only 0 present.");
      tmp10 = typeError;
      throw typeError;
    } else if (typeof global !== "function") {
      _TypeError = TypeError;
      tmp3 = new.target;
      str = "Failed to construct 'MutationObserver': parameter 1 is not of type 'Function'.";
      tmp4 = new.target;
      typeError1 = new TypeError("Failed to construct 'MutationObserver': parameter 1 is not of type 'Function'.");
      tmp6 = typeError1;
      throw typeError1;
    } else {
      this._callback = global;
      return;
    }
  }
}
const items = [
  {
    key: "observe",
    value: function observe(arg0, childList) {
      if (arg0 instanceof MutationObserver(143)) {
        childList = undefined;
        if (childList != null) {
          childList = childList.childList;
        }
        if (true !== Boolean(childList)) {
          const _TypeError2 = TypeError;
          const typeError = new TypeError("Failed to execute 'observe' on 'MutationObserver': The options object must set 'childList' to true.");
          throw typeError;
        } else {
          let attributes;
          if (childList != null) {
            attributes = childList.attributes;
          }
          if (null != attributes) {
            const _Error5 = Error;
            error = new Error("Failed to execute 'observe' on 'MutationObserver': attributes is not supported");
            throw error;
          } else {
            let attributeFilter;
            if (childList != null) {
              attributeFilter = childList.attributeFilter;
            }
            if (null != attributeFilter) {
              const _Error4 = Error;
              const error1 = new Error("Failed to execute 'observe' on 'MutationObserver': attributeFilter is not supported");
              throw error1;
            } else {
              let attributeOldValue;
              if (childList != null) {
                attributeOldValue = childList.attributeOldValue;
              }
              if (null != attributeOldValue) {
                const _Error3 = Error;
                const error2 = new Error("Failed to execute 'observe' on 'MutationObserver': attributeOldValue is not supported");
                throw error2;
              } else {
                let characterData;
                if (childList != null) {
                  characterData = childList.characterData;
                }
                if (null != characterData) {
                  const _Error2 = Error;
                  const error3 = new Error("Failed to execute 'observe' on 'MutationObserver': characterData is not supported");
                  throw error3;
                } else {
                  let prop;
                  if (childList != null) {
                    prop = childList.characterDataOldValue;
                  }
                  if (null != prop) {
                    const _Error = Error;
                    const error4 = new Error("Failed to execute 'observe' on 'MutationObserver': characterDataOldValue is not supported");
                    throw error4;
                  } else {
                    const self = this;
                    const result = this._getOrCreateMutationObserverId();
                    let obj = notifyMutationObserversAll;
                    obj = { mutationObserverId: null, target: null, subtree: null };
                    obj[0] = result;
                    obj[1] = arg0;
                    let subtree;
                    if (childList != null) {
                      subtree = childList.subtree;
                    }
                    obj[2] = Boolean(subtree);
                    obj.observe(obj);
                  }
                }
              }
            }
          }
        }
      } else {
        const _TypeError = TypeError;
        const typeError1 = new TypeError("Failed to execute 'observe' on 'MutationObserver': parameter 1 is not of type 'ReactNativeElement'.");
        throw typeError1;
      }
    }
  },
  {
    key: "disconnect",
    value: function disconnect() {
      const _mutationObserverId = this._mutationObserverId;
      if (null != _mutationObserverId) {
        notifyMutationObserversAll.unobserveAll(_mutationObserverId);
        const obj = notifyMutationObserversAll;
        notifyMutationObserversAll.unregisterObserver(_mutationObserverId);
        tmp._mutationObserverId = null;
        const obj2 = notifyMutationObserversAll;
      }
    }
  },
  {
    key: "_getOrCreateMutationObserverId",
    value: function _getOrCreateMutationObserverId() {
      const self = this;
      let _mutationObserverId = this._mutationObserverId;
      if (null == _mutationObserverId) {
        const registerObserverResult = notifyMutationObserversAll.registerObserver(self, self._callback);
        self._mutationObserverId = registerObserverResult;
        _mutationObserverId = registerObserverResult;
        const obj = notifyMutationObserversAll;
      }
      return _mutationObserverId;
    }
  },
  {
    key: "__getObserverID",
    value: function __getObserverID() {
      return this._mutationObserverId;
    }
  }
];
const tmp2 = _createClassDefault(MutationObserver, items);
setPlatformObject.setPlatformObject(tmp2);

export default tmp2;