import module_13452 from "module_13452";

const call = prototype.call;
if (module_13452) {
  const bind = prototype.bind;
  module_13452 = bind.bind(call, call);
}
if (!require("module_13452")) {
  module_13452 = (arg0) => {
    let closure_0 = arg0;
    return () => {
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(tmp2);
      } else {
        applyArgumentsResult = apply(tmp2, arguments);
      }
      return applyArgumentsResult;
    };
  };
}

export default module_13452;