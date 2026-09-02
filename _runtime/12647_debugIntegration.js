// _runtime/12647_debugIntegration.js
import setupIntegration from "12615_setupIntegration.js";

export const debugIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  obj = undefined;
  obj = { debugger: false, stringify: false };
  const merged = Object.assign(obj);
  obj = {
    name: "Debug",
    setup(on) {
      on.on("beforeSendEvent", (arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
        closure_1_0(closure_1_1[0]).consoleSandbox(() => {
          const _console = console;
          if (stringify.stringify) {
            const _JSON = JSON;
            log(JSON.stringify(stringify, null, 2));
            let length2 = closure_1;
            if (closure_1) {
              const _Object2 = Object;
              length2 = Object.keys(tmp8).length;
            }
            if (length2) {
              const _console3 = console;
              const _JSON2 = JSON;
              console.log(JSON.stringify(tmp8, null, 2));
            }
          } else {
            log(stringify);
            let length = closure_1;
            if (closure_1) {
              const _Object = Object;
              length = Object.keys(tmp3).length;
            }
            if (length) {
              const _console2 = console;
              console.log(tmp3);
            }
          }
        });
      });
    },
  };
  return obj;
});
