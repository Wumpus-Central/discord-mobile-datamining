// === Module 11383: restartState ===

// Module 11383 (restartState)
import _modDef38 from "module_38" /* 38 */;
import noop from "noop" /* 19 */;

let closure_3 = function FocusHelperState() {
  const obj = Object.create(new.target.prototype);
  obj[0] = {};
  obj[1] = [];
  return obj;
}.prototype;
class FocusHelperImpl {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    tmp2 = closure_3;
    if (typeof closure_3 !== "function") {
      str = "Trying to call a non-function";
      throwTypeErrorResult = HermesBuiltin.throwTypeError();
    }
    obj1 = Object.create(tmp2.prototype);
    obj1[0] = {};
    obj1[1] = [];
    obj.validState = obj1;
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
  }
}
const prototype = FocusHelperImpl.prototype;
prototype["restartState"] = function restartState() {
  if (typeof ctor !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(ctor.prototype);
  obj[0] = {};
  obj[1] = [];
  this.pendingState = obj;
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
    const ref = React.createRef();
    pendingState.refsByKey[question] = ref;
    return ref;
  }
};
const result = require("obj132").fileFinishedImporting("modules/polls/native/useFocusHelper.tsx");

export default function useFocusHelper() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let onAddAnswer = obj.onAddAnswer;
  let obj2;
  obj2 = onAddAnswer(obj2[2])(() => {
    if (typeof ctor2 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let obj = Object.create(ctor2.prototype);
    if (typeof ctor !== "function") {
      HermesBuiltin.throwTypeError();
    }
    obj = Object.create(ctor.prototype);
    obj[0] = {};
    obj[1] = [];
    obj.validState = obj;
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
  });
  obj2.restartState();
  const effect = React.useEffect(() => {
    obj2.onAddAnswer = onAddAnswer;
    obj2.commitState();
  });
  return obj2;
};