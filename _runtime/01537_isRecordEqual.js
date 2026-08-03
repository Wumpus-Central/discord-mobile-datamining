arg5.default = function isRecordEqual(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  if (arg0 === arg1) {
    return true;
  } else {
    const _Object = Object;
    const keys = Object.keys(arg0);
    const _Object2 = Object;
    return keys.length === Object.keys(arg1).length && keys.every((arg0) => table[arg0] === table2[arg0]);
  }
};