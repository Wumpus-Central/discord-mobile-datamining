// _runtime/00165_warnOnce.js
let closure_0 = {};

export default function warnOnce(arg0, arg1) {
  if (!closure_0[arg0]) {
    const _console = console;
    console.warn(arg1);
    tmp[arg0] = true;
  }
}
