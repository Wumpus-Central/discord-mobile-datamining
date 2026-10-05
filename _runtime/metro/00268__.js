// === Module 268: ? ===

// Module 268
import _createClassDefault from "_createClass" /* 42 */;
import _modDef143 from "module_143" /* 143 */;
import _modAll269 from "module_269" /* 269 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import module_126 from "module_126" /* 126 */;

class MutationObserver {
  constructor(_callback) {
    _classCallCheck(this, MutationObserver);
    this._observationTargets = new Set();
    new Set();
    if (null == _callback) {
      const _TypeError2 = TypeError;
      const self3 = this;
      const self4 = this;
      const typeError = new TypeError("Failed to construct 'MutationObserver': 1 argument required, but only 0 present.");
      throw typeError;
    } else if (typeof _callback !== "function") {
      const _TypeError = TypeError;
      const self = this;
      const self2 = this;
      const typeError1 = new TypeError("Failed to construct 'MutationObserver': parameter 1 is not of type 'Function'.");
      throw typeError1;
    } else {
      this._callback = _callback;
    }
  }
}
const entry = {
  key: "observe",
  value: function observe(target, childList) {
    let _Boolean2;
    let subtree;
    if (target instanceof _modDef143) {
      childList = undefined;
      const _Boolean = Boolean;
      if (childList != null) {
        childList = childList.childList;
      }
      if (true !== _Boolean(childList)) {
        const _TypeError2 = TypeError;
        const self14 = this;
        const self15 = this;
        const typeError = new TypeError("Failed to execute 'observe' on 'MutationObserver': The options object must set 'childList' to true.");
        throw typeError;
      } else {
        let attributes;
        if (childList != null) {
          attributes = childList.attributes;
        }
        if (null != attributes) {
          const _Error5 = Error;
          const self12 = this;
          const self13 = this;
          const error = new Error("Failed to execute 'observe' on 'MutationObserver': attributes is not supported");
          throw error;
        } else {
          let attributeFilter;
          if (childList != null) {
            attributeFilter = childList.attributeFilter;
          }
          if (null != attributeFilter) {
            const _Error4 = Error;
            const self10 = this;
            const self11 = this;
            const error1 = new Error("Failed to execute 'observe' on 'MutationObserver': attributeFilter is not supported");
            throw error1;
          } else {
            let attributeOldValue;
            if (childList != null) {
              attributeOldValue = childList.attributeOldValue;
            }
            if (null != attributeOldValue) {
              const _Error3 = Error;
              const self8 = this;
              const self9 = this;
              const error2 = new Error("Failed to execute 'observe' on 'MutationObserver': attributeOldValue is not supported");
              throw error2;
            } else {
              let characterData;
              if (childList != null) {
                characterData = childList.characterData;
              }
              if (null != characterData) {
                const _Error2 = Error;
                const self6 = this;
                const self7 = this;
                const error3 = new Error("Failed to execute 'observe' on 'MutationObserver': characterData is not supported");
                throw error3;
              } else {
                let prop;
                if (childList != null) {
                  prop = childList.characterDataOldValue;
                }
                if (null != prop) {
                  const _Error = Error;
                  const self4 = this;
                  const self5 = this;
                  const error4 = new Error("Failed to execute 'observe' on 'MutationObserver': characterDataOldValue is not supported");
                  throw error4;
                } else {
                  const self3 = this;
                  const result = this._getOrCreateMutationObserverId();
                  const obj = { mutationObserverId: result, target, subtree: _Boolean2(subtree) };
                  subtree = undefined;
                  const observe = _modAll269.observe;
                  _Boolean2 = Boolean;
                  _modAll269;
                  if (childList != null) {
                    subtree = childList.subtree;
                  }
                  observe(obj);
                }
              }
            }
          }
        }
      }
    } else {
      const _TypeError = TypeError;
      const self = this;
      const self2 = this;
      const typeError1 = new TypeError("Failed to execute 'observe' on 'MutationObserver': parameter 1 is not of type 'ReactNativeElement'.");
      throw typeError1;
    }
  }
};
const items = [
  entry,
  {
    key: "disconnect",
    value: function disconnect() {
      const _mutationObserverId = this._mutationObserverId;
      if (null != _mutationObserverId) {
        const obj = _modAll269;
        obj.unobserveAll(_mutationObserverId);
        const obj2 = _modAll269;
        obj2.unregisterObserver(_mutationObserverId);
        tmp._mutationObserverId = null;
      }
    }
  },
  {
    key: "_getOrCreateMutationObserverId",
    value: function _getOrCreateMutationObserverId() {
      const self = this;
      let _mutationObserverId = this._mutationObserverId;
      if (null == _mutationObserverId) {
        const obj = _modAll269;
        const registerObserverResult = obj.registerObserver(self, self._callback);
        self._mutationObserverId = registerObserverResult;
        _mutationObserverId = registerObserverResult;
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
module_126.setPlatformObject(tmp2);

export default tmp2;