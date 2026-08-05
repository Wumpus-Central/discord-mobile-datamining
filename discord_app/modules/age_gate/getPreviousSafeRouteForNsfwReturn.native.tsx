// discord_app/modules/age_gate/getPreviousSafeRouteForNsfwReturn.native.tsx
import getIdFromHistoryItem from "getIdFromHistoryItem";
import closure_5 from "getIdFromHistoryItem";
import ensureGuildLoaded from "ensureGuildLoaded";
import comparator from "comparator";
import { ME } from "ME";

let c3;
let c4;
let obj1;
({ CHANNEL_PREFIX: obj1, GUILD_PREFIX: c3, getIdFromHistoryItem: c4 } = getIdFromHistoryItem);
const result = require("comparator").fileFinishedImporting("modules/age_gate/getPreviousSafeRouteForNsfwReturn.native.tsx");

export default function getPreviousSafeRouteForNsfwReturn() {
  let defaultChannel;
  let tmp3;
  const history = state.getState().history;
  let diff = history.length - 2;
  if (0 <= diff) {
    while (true) {
      let obj = history[diff];
      let tmp2 = callback;
      tmp3 = callback(obj);
      let tmp4 = closure_2;
      let tmp5 = diff;
      if (obj.startsWith(closure_2)) {
        let tmp9 = channel;
        channel = channel.getChannel(tmp3);
        if (null != channel) {
          let tmp11 = require;
          let tmp12 = dependencyMap;
          let obj4 = require("AgeGateUtils.tsx") /* shouldShowAgeGateForVoiceChannel */;
          if (!obj4.isChannelContentGated(channel)) {
            let tmp11Result = tmp11(5853);
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
      } else {
        let tmp6 = closure_3;
        if (obj.startsWith(closure_3)) {
          let tmp7 = defaultChannel;
          defaultChannel = defaultChannel.getDefaultChannel(tmp3);
          if (null != defaultChannel) {
            let tmp13 = require;
            let tmp14 = dependencyMap;
            let obj7 = require("AgeGateUtils.tsx") /* shouldShowAgeGateForVoiceChannel */;
            if (!obj7.isChannelContentGated(defaultChannel)) {
              let tmp13Result = tmp13(5853);
              if (!tmp13Result.isChannelSpoilerGated(defaultChannel)) {
                break;
              }
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