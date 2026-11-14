// discord_app/modules/user_profile/resolveUserProfileCodedLink.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ChannelStore from "../../stores/ChannelStore.tsx";

const require = fn;
const MessageCodedLinkManager = "MessageCodedLinkManager";
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/resolveUserProfileCodedLink.tsx");

export default function resolveUserProfileCodedLink(arg0, arg1) {
  closure_0 = arg0;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  let guild_id;
  if (flag) {
    let isUserProfileEmbedRenderingMobileEnabled =
      tmp(15583).getIsUserProfileEmbedRenderingMobileEnabled(MessageCodedLinkManager);
    let tmp6 = tmp;
    const tmpResult = tmp(15583);
  } else {
    isUserProfileEmbedRenderingMobileEnabled =
      tmp(20306).getIsUserProfileEmbedRenderingEnabled(MessageCodedLinkManager);
    tmp6 = tmp;
    const tmpResult2 = tmp(20306);
  }
  if (isUserProfileEmbedRenderingMobileEnabled) {
    let tmp10;
    if (null != arg1) {
      const channel = ChannelStore.getChannel(arg1);
      guild_id = undefined;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      tmp10 = guild_id;
    }
    guild_id = tmp10;
    const result = tmp6(20298).queueMessageLinkFetch(
      asyncGeneratorStep(async () => {
        c2 = 1;
        await v2(c2[5])(closure_0, undefined, { guildId: guild_id, withMutualGuilds: true, withMutualFriends: true });
        if (1 === tmp6) {
          c2 = 0;
          c0 = 3;
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c2 = 0;
        }
        c2 = 0;
        return value;
      }),
    );
    const tmp6Result = tmp6(20298);
  }
}
