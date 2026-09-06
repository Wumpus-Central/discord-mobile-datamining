// discord_app/modules/guild_onboarding/native/GuildOnboardingManager.tsx
import doGuildOnboardingDefault from "../doGuildOnboarding.native.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

let require = fn;
const GuildFeatures = fn(1074).GuildFeatures;
const GuildMemberFlags = fn(4187).GuildMemberFlags;
let guildId = null;
const channelId = null;
let prototype = function GuildOnboardingManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    CHANNEL_SELECT(arg0) {
      return applyArgumentsResult.handleChannelSelect(arg0);
    },
    GUILD_DELETE(arg0) {
      return applyArgumentsResult.handleGuildDelete(arg0);
    },
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handleConnectionOpen();
    },
  };
  applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
    if (guildId == null) {
      guildId = SelectedGuildStore.getGuildId();
    }
    if (guildId == null) {
      guildId = null;
    }
    if (null != guildId) {
      const result = applyArgumentsResult._openOnboardingIfIncomplete(guildId);
    }
  };
  applyArgumentsResult.handleChannelSelect = function handleChannelSelect(arg0) {
    ({ guildId, channelId } = arg0);
    let tmp = guildId === guildId;
    if (tmp) {
      tmp = channelId === channelId;
    }
    if (!tmp) {
      if (channelId == null) {
        channelId = null;
      }
      if (guildId == null) {
        guildId = null;
      }
      if (null != guildId) {
        const result = applyArgumentsResult._openOnboardingIfIncomplete(guildId);
      }
    }
  };
  applyArgumentsResult.handleGuildDelete = function handleGuildDelete(guild) {
    const result = applyArgumentsResult(7095).discardOnboardingPromise(guild.guild.id);
  };
  applyArgumentsResult._openOnboardingIfIncomplete = function _openOnboardingIfIncomplete(guildId) {
    guild = guild.getGuild(guildId);
    if (null != guild) {
      const features = guild.features;
      if (features.has(constants.GUILD_ONBOARDING)) {
        selfMember = selfMember.getSelfMember(guildId);
        let hasFlagResult = null != selfMember;
        if (hasFlagResult) {
          let obj = applyArgumentsResult(1384);
          let num = selfMember.flags;
          if (num == null) {
            num = 0;
          }
          hasFlagResult = !obj.hasFlag(num, constants2.COMPLETED_ONBOARDING);
        }
        if (hasFlagResult) {
          let num2 = selfMember.flags;
          if (num2 == null) {
            num2 = 0;
          }
          hasFlagResult = applyArgumentsResult(1384).hasFlag(num2, constants2.STARTED_ONBOARDING);
          const obj2 = applyArgumentsResult(1384);
        }
        if (hasFlagResult) {
          obj = { guildId };
          doGuildOnboardingDefault(obj);
        }
      }
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
prototype = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingManager.tsx");

export default prototype;
