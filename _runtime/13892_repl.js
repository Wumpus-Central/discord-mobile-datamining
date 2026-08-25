// === Module 13892: repl ===

// Module 13892 (repl)
arg5.default = function repl() {
  return (arg0) => {
    closure_0 = arg0;
    closure_1 = {};
    obj = {
      onCommand(arg0) {
        ({ type, payload } = arg0);
        if ("repl." === type.substr(0, 5)) {
          const substr = type.substr(5);
          if ("ls" === substr) {
            const _Object = Object;
            payload.send("repl.ls.response", Object.keys(closure_1));
          } else if ("execute" === substr) {
            const fn = () => {
              let _eval = globalThis.eval;
              if (globalThis.eval === /* builtin1  */) {
                // DirectEval (0x78)
              } else {
                _eval = _eval(payload);
              }
              return _eval;
            };
            const call = fn.call;
            if (typeof call === "unknown") {
              let _eval = globalThis.eval;
              if (globalThis.eval === /* builtin1  */) {
                // DirectEval (0x78)
              } else {
                _eval = _eval(payload);
              }
            } else {
              tmp10("repl.execute.response", call(tmp11));
            }
          }
        }
      },
      features: obj
    };
    obj = {
      repl(arg0, arg1) {
        if (arg0) {
          if (table[arg0]) {
            const _Error2 = Error;
            error = new Error("You are already REPLing an item with that name");
            throw error;
          } else {
            tmp6[arg0] = arg1;
          }
        } else {
          const _Error = Error;
          const error1 = new Error("You must provide a name for your REPL");
          throw error1;
        }
      }
    };
    return obj;
  };
};