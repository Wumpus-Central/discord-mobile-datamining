// === Module 17548: GuildOnboardingManager ===

// Module 17548 (GuildOnboardingManager)
import Constants from "Constants" /* 1085 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4501 */;
import doGuildOnboarding from "doGuildOnboarding" /* 6597 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6620 */;
import size from "module_2" /* 2 */;

const doGuildOnboardingDefault = doGuildOnboarding;
let selfMember;

const GuildFeatures = Constants.GuildFeatures;
const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
let guildId = null;
let channelId = null;
class GuildOnboardingManager extends AutomaticLifecycleManager {
  constructor() {
    let constants2;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.actions = {
      CHANNEL_SELECT(arg0) {
        return require.handleChannelSelect(arg0);
      },
      GUILD_DELETE(arg0) {
        return require.handleGuildDelete(arg0);
      },
      POST_CONNECTION_OPEN() {
        return require.handleConnectionOpen();
      }
    };
    applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
      if (guildId == null) {
        guildId = SelectedGuildStore.getGuildId();
      }
      if (guildId == null) {
        guildId = null;
      }
      if (null != guildId) {
        const result = require._openOnboardingIfIncomplete(guildId);
      }
    };
    applyArgumentsResult.handleChannelSelect = function handleChannelSelect(arg0) {
      ({ guildId, channelId } = arg0);
      const tmp = guildId === guildId && channelId === channelId;
      if (!tmp) {
        if (channelId == null) {
          channelId = null;
        }
        if (guildId == null) {
          guildId = null;
        }
        if (null != guildId) {
          const result = require._openOnboardingIfIncomplete(guildId);
        }
      }
    };
    applyArgumentsResult.handleGuildDelete = function handleGuildDelete(guild) {
      guild = guild.guild;
      const obj = doGuildOnboarding;
      const result = obj.discardOnboardingPromise(guild.id);
    };
    applyArgumentsResult._openOnboardingIfIncomplete = function _openOnboardingIfIncomplete(guildId) {
      guild = guild.getGuild(guildId);
      if (null != guild) {
        const features = guild.features;
        if (features.has(constants.GUILD_ONBOARDING)) {
          selfMember = selfMember.getSelfMember(guildId);
          let hasFlag2Result = null != selfMember;
          if (hasFlag2Result) {
            let num = selfMember.flags;
            const hasFlag = FlagUtils.hasFlag;
            FlagUtils;
            if (num == null) {
              num = 0;
            }
            hasFlag2Result = !hasFlag(num, constants2.COMPLETED_ONBOARDING);
          }
          if (hasFlag2Result) {
            let num2 = selfMember.flags;
            const hasFlag2 = FlagUtils.hasFlag;
            FlagUtils;
            if (num2 == null) {
              num2 = 0;
            }
            hasFlag2Result = hasFlag2(num2, constants2.STARTED_ONBOARDING);
          }
          if (hasFlag2Result) {
            const obj = { guildId };
            doGuildOnboardingDefault(obj);
          }
        }
      }
    };
    return applyArgumentsResult;
  }
}
const guildOnboardingManager = new GuildOnboardingManager();
let result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingManager.tsx");

export default guildOnboardingManager;