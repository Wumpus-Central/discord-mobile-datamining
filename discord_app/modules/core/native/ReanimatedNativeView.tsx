// discord_app/modules/core/native/ReanimatedNativeView.tsx
import isFabric from "isFabric";

if (isFabric.isFabric()) {
  let importDefaultResult = require("View");
} else {
  importDefaultResult = require("module_4145").createAnimatedComponent(require("set"));
  const importDefaultResult1 = require("module_4145");
}
const result = require("module_4145").fileFinishedImporting("modules/core/native/ReanimatedNativeView.tsx");

export default importDefaultResult;