// === Module 15952: getPreviousSafeRouteForNsfwReturn ===

// Module 15952 (getPreviousSafeRouteForNsfwReturn)
import AgeGateUtils from "AgeGateUtils" /* 6775 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6795 */;
import NavigationHistoryStore_mod from "NavigationHistoryStore" /* 6986 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import GuildChannelStore from "GuildChannelStore" /* 5173 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let NavigationHistoryStore = NavigationHistoryStore_mod;
({ CHANNEL_PREFIX: c2, GUILD_PREFIX: c3, getIdFromHistoryItem: closure_4 } = NavigationHistoryStore);
let NavigationHistoryStore = NavigationHistoryStore_mod;
({ ME: closure_8, Routes: closure_9 } = Constants);
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
          let obj3 = AgeGateUtils;
          if (!obj3.isChannelContentGated(channel)) {
            let tmp12Result = SpoilerChannelUtils;
            if (!tmp12Result.isChannelSpoilerGated(channel)) {
              let guild_id = channel.guild_id;
              if (guild_id == null) {
                guild_id = React5;
              }
              return React6.CHANNEL(guild_id, tmp3);
            }
          }
        }
      } else if (obj.startsWith(React3)) {
        defaultChannel = GuildChannelStore.getDefaultChannel(tmp3);
        if (null != defaultChannel) {
          let obj5 = AgeGateUtils;
          if (!obj5.isChannelContentGated(defaultChannel)) {
            let tmp15Result = SpoilerChannelUtils;
            if (!tmp15Result.isChannelSpoilerGated(defaultChannel)) {
              break;
            }
          }
        }
      }
      diff = diff - 1;
    }
    return React6.CHANNEL(tmp3, defaultChannel.id);
  }
  return null;
};