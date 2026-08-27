// === Module 15753: useCanSeeNUFChannelsForGuild ===

// Module 15753 (useCanSeeNUFChannelsForGuild)
import closure_2 from "trackCommunicationDisabled" /* 1992 */;
import closure_3 from "createGuildRecordFromRust" /* 1910 */;
import closure_4 from "mergeGuildAvatar" /* 1922 */;
import { GuildFeatures } from "ME" /* 676 */;
import { GuildMemberFlags } from "GuildMemberFlags" /* 4077 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/nuf_channels/native/useCanSeeNUFChannelsForGuild.tsx");

export const useCanSeeNUFChannelsForGuild = function useCanSeeNUFChannelsForGuild(id) {
  const _require = id;
  const items = [closure_4, closure_3, closure_2];
  const items1 = [id];
  return _require(589).useStateFromStores(items, () => {
    const currentUser = closure_1_4.getCurrentUser();
    if (null != currentUser) {
      if (obj3.isNewUser(currentUser)) {
        const guild = closure_1_3.getGuild(id);
        if (null != guild) {
          const features2 = guild.features;
          if (!features2.has(closure_1_5.HUB)) {
            const selfMember = closure_1_2.getSelfMember(id);
            const features = guild.features;
            let hasFlagResult = features.has(tmp12.GUILD_ONBOARDING) && null != selfMember;
            if (hasFlagResult) {
              let tmp10Result = tmp10(tmp11[7]);
              let num = selfMember.flags;
              if (num == null) {
                num = 0;
              }
              hasFlagResult = tmp10Result.hasFlag(num, closure_1_6.STARTED_ONBOARDING);
            }
            if (hasFlagResult) {
              tmp10Result = tmp10(tmp11[7]);
              let num2 = selfMember.flags;
              if (num2 == null) {
                num2 = 0;
              }
              hasFlagResult = !tmp10Result.hasFlag(num2, closure_1_6.COMPLETED_ONBOARDING);
            }
            return !hasFlagResult;
          }
          tmp12 = closure_1_5;
        }
        return false;
      }
      obj3 = id(closure_1_1[6]);
    }
    return false;
  }, items1);
};