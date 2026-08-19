// === Module 113: codegenNativeCommands ===

// Module 113 (codegenNativeCommands)
const require = arg1;
const dependencyMap = arg6;
arg5.default = function codegenNativeCommands(supportedCommands) {
  const obj = {};
  supportedCommands = supportedCommands.supportedCommands;
  const item = supportedCommands.forEach((item, index) => {
    closure_0 = item;
    closure_0[item] = (arg0) => {
      const substr = [...arguments].slice();
      item(closure_1_1[0]).dispatchCommand(arg0, item, substr);
    };
  });
  return obj;
};