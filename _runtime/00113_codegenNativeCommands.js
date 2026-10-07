// === Module 113: codegenNativeCommands ===

// Module 113 (codegenNativeCommands)
const require = arg1;
const dependencyMap = arg6;

export default function codegenNativeCommands(supportedCommands) {
  let obj = {};
  supportedCommands = supportedCommands.supportedCommands;
  const item = supportedCommands.forEach((item) => {
    closure_0 = item;
    obj[item] = (arg0) => {
      const substr = [...arguments].slice();
      obj = obj(dependencyMap[0]);
      obj.dispatchCommand(arg0, closure_0, substr);
    };
  });
  return obj;
};