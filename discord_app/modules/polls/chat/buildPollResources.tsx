// === Module 8436: ? ===

// Module 8436
import obj132 from "obj132" /* 2 */;
import buildPlatformPollResources from "buildPlatformPollResources" /* 8432 */;
import apply from "apply" /* 12 */;

const memoizeResult = apply.memoize(function buildPollResources(arg0) {
  ({ theme, layoutType } = arg0);
  return buildPlatformPollResources.buildPlatformPollResources(theme, layoutType);
}, (theme) => "" + theme.theme + ":" + theme.layoutType);
const result = obj132.fileFinishedImporting("modules/polls/chat/buildPollResources.tsx");

export default memoizeResult;