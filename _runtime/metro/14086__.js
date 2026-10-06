// _runtime/metro/14086__.js
import module_14087_mod from "14087__.js";

const call = prototype.call;
let module_14087 = module_14087_mod;
if (module_14087) {
  const bind = prototype.bind;
  module_14087 = bind.bind(call, call);
}
if (!module_14087) {
  module_14087 = (arg0) => {
    let closure_0 = arg0;
    return function () {
      return call(...arguments);
    };
  };
}

export default module_14087;
