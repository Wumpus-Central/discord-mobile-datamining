// === Module 113: codegenNativeCommands ===

// Module 113 (codegenNativeCommands)
const require = arg1;
const dependencyMap = arg6;
arg5.default = function codegenNativeCommands(supportedCommands) {
  const obj = {};
  supportedCommands = supportedCommands.supportedCommands;
  const item = supportedCommands.forEach((arg0) => {
    closure_0 = arg0;
    closure_0[arg0] = (arg0) => {
      const substr = [...arguments].slice();
      callback(closure_1_1[0]).dispatchCommand(arg0, callback, substr);
    };
  });
  return obj;
};