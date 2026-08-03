let value = null;
if (!require("shouldUseTurboAnimatedModule")()) {
  value = require("get").get("NativeAnimatedModule");
  const importAllResult = require("get");
}

export default value;