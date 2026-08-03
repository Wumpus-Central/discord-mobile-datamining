let value = null;
if (require("shouldUseTurboAnimatedModule")()) {
  value = require("get").get("NativeAnimatedTurboModule");
  const importAllResult = require("get");
}

export default value;