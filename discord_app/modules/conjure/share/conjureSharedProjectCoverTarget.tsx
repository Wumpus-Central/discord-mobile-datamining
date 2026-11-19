// discord_app/modules/conjure/share/conjureSharedProjectCoverTarget.tsx
import conjureSharedProjectHome from "conjureSharedProjectHome.tsx";
import findLoadedAppChannelDefault from "../shared/findLoadedAppChannel.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/share/conjureSharedProjectCoverTarget.tsx");

export default function readConjureSharedProjectCoverTarget(arg0, guild_id, channelId) {
  channelId = channelId.channelId;
  const sharedProjectHomeGuildId = conjureSharedProjectHome.getSharedProjectHomeGuildId(guild_id);
  if (null != sharedProjectHomeGuildId) {
    if (null != channelId) {
      if (tmpResult.canLaunchSharedProject(guild_id)) {
        return { type: "launch" };
      } else {
        const tmp6 = findLoadedAppChannelDefault(sharedProjectHomeGuildId, arg0, channelId);
        let tmp7 = null;
        if (null != tmp6) {
          const obj2 = { type: "open", appChannel: tmp6 };
          tmp7 = obj2;
        }
        return tmp7;
      }
      tmpResult = conjureSharedProjectHome;
    }
  }
  return null;
}
