// === Module 7655: getPreviousSafeRouteForNsfwReturn ===

// Module 7655 (getPreviousSafeRouteForNsfwReturn)
import Constants from "Constants" /* 1074 */;
import AgeGateUtils from "AgeGateUtils" /* 5037 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 7657 */;
import NavigationHistoryStore_mod from "NavigationHistoryStore" /* 7656 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import GuildChannelStore from "GuildChannelStore" /* 4460 */;
import size from "module_2" /* 2 */;

let NavigationHistoryStore = NavigationHistoryStore_mod;
({ CHANNEL_PREFIX: c2, GUILD_PREFIX: c3, getIdFromHistoryItem: closure_4 } = NavigationHistoryStore);
let NavigationHistoryStore = NavigationHistoryStore_mod;
const ME = Constants.ME;
const result = size.fileFinishedImporting("modules/age_gate/getPreviousSafeRouteForNsfwReturn.native.tsx");

export default function getPreviousSafeRouteForNsfwReturn() {
  let defaultChannel;
  let tmp3;
  const history = NavigationHistoryStore.getState().history;
  let diff = history.length - 2;
  if (0 <= diff) {
    while (true) {
      let obj = history[diff];
      tmp3 = React4(obj);
      if (obj.startsWith(React2)) {
        let channel = ChannelStore.getChannel(tmp3);
        if (null != channel) {
          let obj4 = AgeGateUtils;
          if (!obj4.isChannelContentGated(channel)) {
            let tmp11Result = SpoilerChannelUtils;
            if (!tmp11Result.isChannelSpoilerGated(channel)) {
              let guild_id = channel.guild_id;
              if (guild_id == null) {
                guild_id = ME;
              }
              let obj2 = { guildId: guild_id, channelId: tmp3 };
              return obj2;
            }
          }
        }
      } else if (obj.startsWith(React3)) {
        defaultChannel = GuildChannelStore.getDefaultChannel(tmp3);
        if (null != defaultChannel) {
          let obj7 = AgeGateUtils;
          if (!obj7.isChannelContentGated(defaultChannel)) {
            let tmp13Result = SpoilerChannelUtils;
            if (!tmp13Result.isChannelSpoilerGated(defaultChannel)) {
              break;
            }
          }
        }
      }
      diff = diff - 1;
    }
    const obj3 = { guildId: tmp3, channelId: defaultChannel.id };
    return obj3;
  }
  return null;
};