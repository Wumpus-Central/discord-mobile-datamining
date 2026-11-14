// _runtime/metro/05366__.js
import AsyncMode from "../05364_AsyncMode.js";

function getStatics(arg0) {
  obj = AsyncMode;
  if (obj.isMemo(arg0)) {
    let tmp2 = obj;
  } else {
    tmp2 = obj2[arg0.$$typeof] || closure_2;
  }
  return tmp2;
}
let closure_2 = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true,
};
let closure_3 = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true };
let obj = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true };
const obj2 = {};
obj2[AsyncMode.ForwardRef] = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true };
obj2[AsyncMode.Memo] = obj;
let closure_12 = Object.prototype;
function hoistNonReactStatics(arg0, exports, arg2) {
  if (typeof exports !== "string") {
    if (closure_12) {
      const tmp2 = getPrototypeOf(exports);
      let tmp3 = tmp2;
      if (tmp2) {
        tmp3 = tmp2 !== tmp19;
      }
      if (tmp3) {
        hoistNonReactStatics(arg0, tmp2, arg2);
      }
    }
    obj = getOwnPropertyNames(exports);
    let combined = obj;
    if (getOwnPropertySymbols) {
      combined = obj.concat(tmp7(exports));
    }
    let num = 0;
    const tmp9 = getStatics(arg0);
    if (0 < combined.length) {
      if (!closure_3[combined[num]]) {
        if (!arg2) {
          if (!tmp10) {
            if (!tmp9) {
              try {
                defineProperty(arg0, tmp11, tmp15);
              } catch (err) {}
            }
          }
        }
      }
      num = num + 1;
    }
    tmp10 = getStatics(exports);
  }
  return arg0;
}

export default hoistNonReactStatics;
