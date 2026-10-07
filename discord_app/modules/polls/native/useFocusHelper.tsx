// discord_app/modules/polls/native/useFocusHelper.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import noop from "../../../../_runtime/metro/00019__.js";

let closure_3 = function FocusHelperState() {
  const merged = Object.assign({ refsByKey: null, keyOrder: null });
  merged[0] = {};
  merged[1] = [];
  return merged;
}.prototype;
class FocusHelperImpl {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    if (typeof closure_3 === "function") {
      merged = Object.assign({ refsByKey: null, keyOrder: null });
      merged[0] = {};
      merged[1] = [];
      obj.validState = merged;
      obj.focusNext = function focusNext() {
        ({ refsByKey, keyOrder } = obj.validState);
        let tmp2;
        const keys = Object.keys();
        if (keys !== undefined) {
          while (keys[tmp] !== undefined) {
            let tmp12 = refsByKey[tmp4];
            let isFocusedResult;
            if (tmp12 != null) {
              let current = tmp12.current;
              if (current != null) {
                isFocusedResult = current.isFocused();
              }
            }
            tmp2 = tmp4;
            if (true === isFocusedResult) {
              break;
            }
          }
        }
        if (null != tmp2) {
          const index = keyOrder.indexOf(tmp2);
          if (-1 !== index) {
            if (index < keyOrder.length - 1) {
              if (refsByKey[obj.validState.keyOrder[index + 1]] != null) {
                const current2 = tmp8.current;
                if (current2 != null) {
                  current2.focus();
                }
              }
            }
          }
          onAddAnswer = obj.onAddAnswer;
          if (onAddAnswer != null) {
            onAddAnswer();
          }
        }
      };
      obj.focus = function focus(arg0) {
        if (obj.validState.refsByKey[arg0] != null) {
          const current = tmp.current;
          if (current != null) {
            current.focus();
          }
        }
      };
      return obj;
    } else {
      str = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const prototype = FocusHelperImpl.prototype;
prototype["restartState"] = function restartState() {
  if (typeof closure_3 === "function") {
    const self = this;
    const merged = Object.assign({ refsByKey: null, keyOrder: null });
    merged[0] = {};
    merged[1] = [];
    this.pendingState = merged;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
prototype["commitState"] = function commitState() {
  const self = this;
  const pendingState = this.pendingState;
  if (null != pendingState) {
    self.validState = pendingState;
  }
  self.pendingState = undefined;
};
prototype["refWithKey"] = function refWithKey(question) {
  const pendingState = this.pendingState;
  _modDef38(null != pendingState, "Called refWithKey without a valid state");
  const keyOrder = pendingState.keyOrder;
  keyOrder.push(question);
  if (null != pendingState.refsByKey[question]) {
    return tmp3;
  } else {
    const ref = noop.createRef();
    pendingState.refsByKey[question] = ref;
    return ref;
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/polls/native/useFocusHelper.tsx");

export default function useFocusHelper() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let onAddAnswer = obj.onAddAnswer;
  let obj2;
  obj2 = onAddAnswer(obj2[2])(() => {
    if (typeof FocusHelperImpl === "function") {
      const obj = Object.create(FocusHelperImpl.prototype);
      if (typeof closure_1_3 === "function") {
        const merged = Object.assign({ refsByKey: null, keyOrder: null });
        merged[0] = {};
        merged[1] = [];
        obj.validState = merged;
        obj.focusNext = function focusNext() {
          ({ refsByKey, keyOrder } = obj.validState);
          let tmp2;
          const keys = Object.keys();
          if (keys !== undefined) {
            while (keys[tmp] !== undefined) {
              let tmp12 = refsByKey[tmp4];
              let isFocusedResult;
              if (tmp12 != null) {
                let current = tmp12.current;
                if (current != null) {
                  isFocusedResult = current.isFocused();
                }
              }
              tmp2 = tmp4;
              if (true === isFocusedResult) {
                break;
              }
            }
          }
          if (null != tmp2) {
            const index = keyOrder.indexOf(tmp2);
            if (-1 !== index) {
              if (index < keyOrder.length - 1) {
                if (refsByKey[obj.validState.keyOrder[index + 1]] != null) {
                  const current2 = tmp8.current;
                  if (current2 != null) {
                    current2.focus();
                  }
                }
              }
            }
            onAddAnswer = obj.onAddAnswer;
            if (onAddAnswer != null) {
              onAddAnswer();
            }
          }
        };
        obj.focus = function focus(arg0) {
          if (obj.validState.refsByKey[arg0] != null) {
            const current = tmp.current;
            if (current != null) {
              current.focus();
            }
          }
        };
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
  obj2.restartState();
  const effect = noop.useEffect(() => {
    obj2.onAddAnswer = onAddAnswer;
    obj2.commitState();
  });
  return obj2;
}
