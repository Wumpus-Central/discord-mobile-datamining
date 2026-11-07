// discord_app/modules/conjure/share/conjureSharedProjectCoverTarget.tsx
import conjureSharedProjectHome from "conjureSharedProjectHome.tsx";
import findLoadedAppChannelDefault from "findLoadedAppChannel.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/share/conjureSharedProjectCoverTarget.tsx");

export default function readConjureSharedProjectCoverTarget(arg0, install_scope, arg2) {
  ({ guildId, channelId } = arg2);
  if (null != guildId) {
    if (null != channelId) {
      if (obj3.isSharedProjectHomeServer(install_scope, guildId)) {
        if (tmp6Result.canLaunchSharedProject(install_scope, guildId)) {
          return { type: "launch" };
        } else {
          const tmp3 = findLoadedAppChannelDefault(guildId, arg0, channelId);
          let tmp4 = null;
          if (null != tmp3) {
            const obj = { type: "open", appChannel: tmp3 };
            tmp4 = obj;
          }
          return tmp4;
        }
        tmp6Result = conjureSharedProjectHome;
      }
      obj3 = conjureSharedProjectHome;
    }
  }
  return null;
}
