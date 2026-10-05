// _runtime/metro/14068__.js
import module_14069_mod from "14069__.js";

const call = prototype.call;
let module_14069 = module_14069_mod;
if (module_14069) {
  const bind = prototype.bind;
  module_14069 = bind.bind(call, call);
}
if (!module_14069) {
  module_14069 = (arg0) => {
    let closure_0 = arg0;
    return function () {
      return call(...arguments);
    };
  };
}

export default module_14069;
