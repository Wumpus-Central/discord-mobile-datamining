// _runtime/14423_repl.js

export default function repl() {
  return (arg0) => {
    closure_0 = arg0;
    closure_1 = {};
    return {
      onCommand(arg0) {
        ({ type, payload } = arg0);
        if ("repl." === type.substr(0, 5)) {
          const substr = type.substr(5);
          if ("ls" === substr) {
            const _Object = Object;
            closure_0.send("repl.ls.response", Object.keys(closure_1));
          } else if ("execute" === substr) {
            const fn = () => {
              if (globalThis.eval === Date.UTC) {
                let evalResult = eval();
              } else {
                evalResult = tmp(payload);
              }
              return evalResult;
            };
            const call = fn.call;
            if (typeof call === "unknown") {
              if (globalThis.eval === Date.UTC) {
                let evalResult = eval();
              } else {
                evalResult = tmp2(payload);
              }
            } else {
              tmp12("repl.execute.response", call(tmp13));
            }
          }
        }
      },
      features: {
        repl(arg0, arg1) {
          if (arg0) {
            if (closure_1[arg0]) {
              const _Error2 = Error;
              const error = new Error("You are already REPLing an item with that name");
              throw error;
            } else {
              tmp6[arg0] = arg1;
            }
          } else {
            const _Error = Error;
            const error1 = new Error("You must provide a name for your REPL");
            throw error1;
          }
        },
      },
    };
  };
}
