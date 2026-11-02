// === Module 13142: debugIntegration ===

// Module 13142 (debugIntegration)
import setupIntegration from "module_13110" /* 13110 */;


export const debugIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = { debugger: false, stringify: false };
  const merged = Object.assign(obj);
  return {
    name: "Debug",
    setup(on) {
      on.on("beforeSendEvent", (arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
        obj2(closure_1_1[0]).consoleSandbox(() => {
          const _console = console;
          if (obj2.stringify) {
            const _JSON = JSON;
            log(JSON.stringify(closure_0, null, 2));
            let length2 = closure_1;
            if (closure_1) {
              const _Object2 = Object;
              length2 = Object.keys(closure_1).length;
            }
            if (length2) {
              const _console3 = console;
              const _JSON2 = JSON;
              console.log(JSON.stringify(closure_1, null, 2));
            }
          } else {
            log(closure_0);
            let length = closure_1;
            if (closure_1) {
              const _Object = Object;
              length = Object.keys(closure_1).length;
            }
            if (length) {
              const _console2 = console;
              console.log(closure_1);
            }
          }
        });
      });
    }
  };
});