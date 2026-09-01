// discord_app/modules/polls/chat/buildPollResources.tsx
import set from "../../../../_runtime/00002_set.js";
import buildPlatformPollResources from "buildPlatformPollResources.native.tsx";
import apply from "../../../../_runtime/00012_apply.js";

const memoizeResult = apply.memoize(
  function buildPollResources(arg0) {
    ({ theme, layoutType } = arg0);
    return buildPlatformPollResources.buildPlatformPollResources(theme, layoutType);
  },
  (theme) => "" + theme.theme + ":" + theme.layoutType,
);
const result = set.fileFinishedImporting("modules/polls/chat/buildPollResources.tsx");

export default memoizeResult;
