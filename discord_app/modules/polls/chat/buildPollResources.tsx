// === Module 12151: buildPollResources ===

// Module 12151 (buildPollResources)
import buildPlatformPollResources from "buildPlatformPollResources" /* 12147 */;
import apply from "apply" /* 12 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/chat/buildPollResources.tsx");

export default apply.memoize(function buildPollResources(arg0) {
  ({ theme, layoutType } = arg0);
  return buildPlatformPollResources.buildPlatformPollResources(theme, layoutType);
}, (theme) => "" + theme.theme + ":" + theme.layoutType);