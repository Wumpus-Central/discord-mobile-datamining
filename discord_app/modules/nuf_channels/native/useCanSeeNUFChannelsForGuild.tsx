// === Module 15238: useCanSeeNUFChannelsForGuild ===

// Module 15238 (useCanSeeNUFChannelsForGuild)
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import { GuildFeatures } from "ME";
import { GuildMemberFlags } from "GuildMemberFlags";

const require = arg1;
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/nuf_channels/native/useCanSeeNUFChannelsForGuild.tsx");

export const useCanSeeNUFChannelsForGuild = function useCanSeeNUFChannelsForGuild(id) {
  const _require = id;
  const items = [mergeGuildAvatar, createGuildRecordFromRust, trackCommunicationDisabled];
  const items1 = [id];
  return _require(589).useStateFromStores(items, () => {
    const currentUser = outer1_4.getCurrentUser();
    if (null != currentUser) {
      if (obj3.isNewUser(currentUser)) {
        const guild = outer1_3.getGuild(id);
        if (null != guild) {
          const features2 = guild.features;
          if (!features2.has(outer1_5.HUB)) {
            const selfMember = outer1_2.getSelfMember(id);
            const features = guild.features;
            let hasFlagResult = features.has(tmp12.GUILD_ONBOARDING) && null != selfMember;
            if (hasFlagResult) {
              let tmp10Result = tmp10(tmp11[7]);
              let num = selfMember.flags;
              if (num == null) {
                num = 0;
              }
              hasFlagResult = tmp10Result.hasFlag(num, outer1_6.STARTED_ONBOARDING);
            }
            if (hasFlagResult) {
              tmp10Result = tmp10(tmp11[7]);
              let num2 = selfMember.flags;
              if (num2 == null) {
                num2 = 0;
              }
              hasFlagResult = !tmp10Result.hasFlag(num2, outer1_6.COMPLETED_ONBOARDING);
            }
            return !hasFlagResult;
          }
          tmp12 = outer1_5;
        }
        return false;
      }
      obj3 = id(outer1_1[6]);
    }
    return false;
  }, items1);
};