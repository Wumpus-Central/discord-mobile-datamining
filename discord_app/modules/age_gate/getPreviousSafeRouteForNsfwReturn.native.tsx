// discord_app/modules/age_gate/getPreviousSafeRouteForNsfwReturn.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ME2 from "../../Constants.tsx";
import shouldShowAgeGateForVoiceChannel from "AgeGateUtils.tsx";
import isChannelSpoilerGated from "../spoiler_channels/SpoilerChannelUtils.tsx";
import getIdFromHistoryItem from "../main_tabs_v2/native/NavigationHistoryStore.tsx";
import getIdFromHistoryItem2 from "../main_tabs_v2/native/NavigationHistoryStore.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import comparator from "../../stores/GuildChannelStore.tsx";

({ CHANNEL_PREFIX: obj1, GUILD_PREFIX: c3, getIdFromHistoryItem: c4 } = getIdFromHistoryItem);
const ME = ME2.ME;
const result = obj132.fileFinishedImporting("modules/age_gate/getPreviousSafeRouteForNsfwReturn.native.tsx");

export default function getPreviousSafeRouteForNsfwReturn() {
  let defaultChannel;
  let tmp3;
  const history = state.getState().history;
  let diff = history.length - 2;
  if (0 <= diff) {
    while (true) {
      let obj = history[diff];
      tmp3 = callback(obj);
      if (obj.startsWith(closure_2)) {
        channel = channel.getChannel(tmp3);
        if (null != channel) {
          let obj4 = shouldShowAgeGateForVoiceChannel;
          if (!obj4.isChannelContentGated(channel)) {
            let tmp11Result = isChannelSpoilerGated;
            if (!tmp11Result.isChannelSpoilerGated(channel)) {
              let guild_id = channel.guild_id;
              if (guild_id == null) {
                guild_id = ME;
              }
              obj = { guildId: null, channelId: null };
              obj[0] = guild_id;
              obj[1] = tmp3;
              return obj;
            }
          }
        }
      } else if (obj.startsWith(closure_3)) {
        defaultChannel = defaultChannel.getDefaultChannel(tmp3);
        if (null != defaultChannel) {
          let obj7 = shouldShowAgeGateForVoiceChannel;
          if (!obj7.isChannelContentGated(defaultChannel)) {
            let tmp13Result = isChannelSpoilerGated;
            if (!tmp13Result.isChannelSpoilerGated(defaultChannel)) {
              break;
            }
          }
        }
      }
      diff = diff - 1;
    }
    obj = { guildId: null, channelId: null };
    obj[0] = tmp3;
    obj[1] = defaultChannel.id;
    return obj;
  }
  return null;
};