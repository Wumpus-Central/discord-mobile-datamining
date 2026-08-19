// === Module 1140: getStatics ===

// Module 1140 (getStatics)
function getStatics($$typeof) {
  let tmp = typeof $$typeof === "object";
  if (typeof $$typeof === "object") {
    tmp = null !== $$typeof;
  }
  if (tmp) {
    tmp = $$typeof.$$typeof === forResult1;
  }
  if (tmp) {
    return obj;
  } else {
    $$typeof = $$typeof.$$typeof;
    let tmp3 = $$typeof;
    if ($$typeof) {
      tmp3 = obj[$$typeof];
    }
    if (!tmp3) {
      tmp3 = closure_0;
    }
    return tmp3;
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let closure_0 = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true };
let closure_1 = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true };
const forResult1 = Symbol.for("react.memo");
let obj = {};
obj[Symbol.for("react.forward_ref")] = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true };
obj[forResult1] = obj;
let closure_6 = defineProperty.bind(Object);
let closure_7 = getOwnPropertyNames.bind(Object);
let bindResult;
if (getOwnPropertySymbols != null) {
  const _Object = Object;
  bindResult = getOwnPropertySymbols.bind(Object);
}
let closure_9 = getOwnPropertyDescriptor.bind(Object);
let closure_10 = getPrototypeOf.bind(Object);
let closure_11 = Object.prototype;
function hoistNonReactStatics(arg0, str) {
  if (typeof str !== "string") {
    if (closure_11) {
      const tmp2 = callback4(str);
      let tmp3 = tmp2;
      if (tmp2) {
        tmp3 = tmp2 !== tmp35;
      }
      if (tmp3) {
        hoistNonReactStatics(arg0, tmp2);
      }
    }
    obj = callback2(str);
    let combined = obj;
    if (closure_8) {
      combined = obj.concat(tmp7(str));
    }
    const tmp10 = getStatics(arg0);
    const tmp11 = getStatics(str);
    const iter = combined[Symbol.iterator]();
    const nextResult = iter.next();
    if (iter !== undefined) {
      const _String = String;
      const StringResult = String(nextResult);
      if (!table[StringResult]) {
        let tmp22;
        if (tmp11 != null) {
          tmp22 = tmp11[tmp20];
        }
        if (!tmp22) {
          let tmp24;
          if (tmp10 != null) {
            tmp24 = tmp10[tmp20];
          }
          if (!tmp24) {
            if (!callback3(arg0, tmp18)) {
              const tmp26Result = callback3(str, tmp18);
              if (tmp26Result) {
                try {
                  callback(arg0, tmp18, tmp30);
                } catch (err) {
                }
              }
            }
          }
        }
      }
    }
  }
  return arg0;
}
arg5.hoistNonReactStatics = hoistNonReactStatics;