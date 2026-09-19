// === Module 16583: useCanSeeNUFChannelsForGuild ===

// Module 16583 (useCanSeeNUFChannelsForGuild)
import FlagUtils from "FlagUtils" /* 1385 */;
import UserUtils from "UserUtils" /* 4600 */;
import GuildMemberStore from "GuildMemberStore" /* 2105 */;
import GuildStore from "GuildStore" /* 2063 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

require = fn;
const GuildFeatures = fn(1074).GuildFeatures;
const GuildMemberFlags = fn(4382).GuildMemberFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf_channels/native/useCanSeeNUFChannelsForGuild.tsx");

export const useCanSeeNUFChannelsForGuild = function useCanSeeNUFChannelsForGuild(id) {
  _require = id;
  const items = [UserStore, GuildStore, GuildMemberStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(items, () => {
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      if (obj3.isNewUser(currentUser)) {
        const guild = GuildStore.getGuild(closure_0);
        if (null != guild) {
          const features2 = guild.features;
          if (!features2.has(GuildFeatures.HUB)) {
            const selfMember = GuildMemberStore.getSelfMember(closure_0);
            const features = guild.features;
            let hasFlagResult = features.has(GuildFeatures.GUILD_ONBOARDING) && null != selfMember;
            if (hasFlagResult) {
              let num = selfMember.flags;
              if (num == null) {
                num = 0;
              }
              hasFlagResult = FlagUtils.hasFlag(num, GuildMemberFlags.STARTED_ONBOARDING);
              const tmp10Result = FlagUtils;
            }
            if (hasFlagResult) {
              let num2 = selfMember.flags;
              if (num2 == null) {
                num2 = 0;
              }
              hasFlagResult = !FlagUtils.hasFlag(num2, GuildMemberFlags.COMPLETED_ONBOARDING);
              const tmp10Result2 = FlagUtils;
            }
            return !hasFlagResult;
          }
        }
        return false;
      }
      obj3 = UserUtils;
    }
    return false;
  }, items1);
};