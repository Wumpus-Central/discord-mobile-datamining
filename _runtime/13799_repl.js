// === Module 13799: repl ===

// Module 13799 (repl)
arg5.default = function repl() {
  return (arg0) => {
    closure_0 = arg0;
    closure_1 = {};
    const obj = {
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