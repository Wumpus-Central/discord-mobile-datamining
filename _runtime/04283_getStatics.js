// _runtime/04283_getStatics.js
import num2 from "04281_num2.js";

function getStatics(arg0) {
  obj = num2;
  if (obj.isMemo(arg0)) {
    let tmp2 = obj;
  } else {
    tmp2 = obj[arg0.$$typeof] || closure_2;
  }
  return tmp2;
}
let closure_2 = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true };
let closure_3 = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true };
let obj = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true };
obj = {};
obj[num2.ForwardRef] = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true };
obj[num2.Memo] = obj;
let closure_12 = Object.prototype;
function hoistNonReactStatics(arg0, headers) {
  if (typeof headers !== "string") {
    if (closure_12) {
      const tmp2 = getPrototypeOf(headers);
      let tmp3 = tmp2;
      if (tmp2) {
        tmp3 = tmp2 !== tmp19;
      }
      if (tmp3) {
        hoistNonReactStatics(arg0, tmp2, arg2);
      }
    }
    obj = getOwnPropertyNames(headers);
    let combined = obj;
    if (getOwnPropertySymbols) {
      combined = obj.concat(tmp7(headers));
    }
    let num = 0;
    const tmp9 = getStatics(arg0);
    const tmp10 = getStatics(headers);
    if (0 < combined.length) {
      if (!table[combined[num]]) {
        if (!arg2) {
          if (!tmp10) {
            if (!tmp9) {
              try {
                defineProperty(arg0, tmp11, tmp15);
              } catch (err) {
              }
            }
          }
        }
      }
      num = num + 1;
    }
  }
  return arg0;
}

export default hoistNonReactStatics;