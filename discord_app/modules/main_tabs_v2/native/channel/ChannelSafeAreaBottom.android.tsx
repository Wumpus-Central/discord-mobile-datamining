// discord_app/modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx
import apexExperiment from "apexExperiment";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = require("module_12000");
} else {
  importDefaultResult = require("module_12001");
}
const result = require("module_12001").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;