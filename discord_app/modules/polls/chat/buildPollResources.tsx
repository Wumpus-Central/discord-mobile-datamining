// discord_app/modules/polls/chat/buildPollResources.tsx
import apply from "apply";

const memoizeResult = apply.memoize(function buildPollResources(arg0) {
  let layoutType;
  let theme;
  ({ theme, layoutType } = arg0);
  return require(8004) /* buildPlatformPollResources */.buildPlatformPollResources(theme, layoutType);
}, (theme) => "" + theme.theme + ":" + theme.layoutType);
const result = require("set").fileFinishedImporting("modules/polls/chat/buildPollResources.tsx");

export default memoizeResult;