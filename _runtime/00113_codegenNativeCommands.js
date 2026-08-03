const require = arg1;
const dependencyMap = arg6;
arg5.default = function codegenNativeCommands(supportedCommands) {
  const obj = {};
  supportedCommands = supportedCommands.supportedCommands;
  const item = supportedCommands.forEach((arg0) => {
    let closure_0 = arg0;
    closure_0[arg0] = (arg0) => {
      const substr = [...arguments].slice();
      callback(outer1_1[0]).dispatchCommand(arg0, callback, substr);
    };
  });
  return obj;
};