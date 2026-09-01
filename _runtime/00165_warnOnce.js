// _runtime/00165_warnOnce.js
let closure_0 = {};
arg5.default = function warnOnce(arg0, arg1) {
  if (!table[arg0]) {
    const _console = console;
    console.warn(arg1);
    tmp[arg0] = true;
  }
};
