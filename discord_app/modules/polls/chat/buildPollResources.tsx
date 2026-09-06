// discord_app/modules/polls/chat/buildPollResources.tsx
import buildPlatformPollResources from "buildPlatformPollResources.native.tsx";
import apply from "../../../../_runtime/metro/00012__.js";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/polls/chat/buildPollResources.tsx");

export default apply.memoize(
  function buildPollResources(arg0) {
    ({ theme, layoutType } = arg0);
    return buildPlatformPollResources.buildPlatformPollResources(theme, layoutType);
  },
  (theme) => "" + theme.theme + ":" + theme.layoutType,
);
