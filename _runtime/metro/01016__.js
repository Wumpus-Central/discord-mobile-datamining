// === Module 1016: ? ===

// Module 1016
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
    return $$typeof && obj2[$$typeof] || closure_0;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_0 = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true };
let closure_1 = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true };
let obj = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true };
const forResult = Symbol.for("react.forward_ref");
const forResult1 = Symbol.for("react.memo");
const obj2 = {};
obj2[forResult] = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true };
obj2[forResult1] = obj;
let closure_6 = defineProperty.bind(Object);
let closure_7 = getOwnPropertyNames.bind(Object);
let bindResult;
if (getOwnPropertySymbols != null) {
  const _Object = Object;
  bindResult = getOwnPropertySymbols.bind(Object);
}
const metroImportAll = bindResult;
let closure_9 = getOwnPropertyDescriptor.bind(Object);
let closure_10 = getPrototypeOf.bind(Object);
let closure_11 = Object.prototype;
function hoistNonReactStatics(arg0, str, arg2) {
  if (typeof str !== "string") {
    if (closure_11) {
      const tmp2 = closure_10(str);
      const tmp3 = tmp2 && tmp2 !== tmp35;
      if (tmp3) {
        hoistNonReactStatics(arg0, tmp2);
      }
    }
    obj = closure_7(str);
    let combined = obj;
    if (metroImportAll) {
      combined = obj.concat(tmp7(str));
    }
    const tmp10 = getStatics(arg0);
    const tmp11 = getStatics(str);
    const iter = combined[Symbol.iterator]();
    const nextResult = iter.next();
    if (iter !== undefined) {
      const _String = String;
      const StringResult = String(nextResult);
      if (!closure_1[StringResult]) {
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
            if (!closure_9(arg0, nextResult)) {
              const tmp26Result = closure_9(str, nextResult);
              if (tmp26Result) {
                try {
                  closure_6(arg0, nextResult, tmp30);
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

export { hoistNonReactStatics };