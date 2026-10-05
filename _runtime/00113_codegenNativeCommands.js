// _runtime/00113_codegenNativeCommands.js

export default function codegenNativeCommands(supportedCommands) {
  let obj = {};
  supportedCommands = supportedCommands.supportedCommands;
  const item = supportedCommands.forEach((item) => {
    let closure_0 = item;
    obj[item] = (nodeFromPublicInstance) => {
      const substr = [...arguments].slice();
      obj = closure_2_0(closure_2_1[0]);
      obj.dispatchCommand(nodeFromPublicInstance, closure_0, substr);
    };
  });
  return obj;
}
