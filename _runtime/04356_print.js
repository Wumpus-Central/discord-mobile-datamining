// === Module 4356: print ===

// Module 4356 (print)
let c0 = false;
const BooleanResult = Boolean(false);
function print() {

}
if (BooleanResult) {
  print = function print(arg0) {
    ({ component, method, params } = arg0);
    if (params) {
      if (typeof params === "object") {
        const _Object = Object;
        const keys = Object.keys(params);
        const mapped = keys.map((arg0) => "" + arg0 + ":" + params[arg0]);
        let joined = mapped.join(" ");
      } else {
        let str = params;
        if (params == null) {
          str = "";
        }
        const _HermesInternal = HermesInternal;
        joined = "" + str;
      }
      const _console = console;
      const items = [component, method];
      const _Boolean = Boolean;
      const found = items.filter(Boolean);
      params = found.join("::");
      const _HermesInternal2 = HermesInternal;
      component = HermesInternal.concat;
      method = "]";
      console.log(component(params, "]"), joined);
    }
  };
}
const frozen = Object.freeze(print);
arg5.print = print;
arg5.enableLogging = () => {
  if (closure_1) {
    c0 = true;
  } else {
    const _console = console;
    console.warn("[Portal] could not enable logging on production!");
  }
};