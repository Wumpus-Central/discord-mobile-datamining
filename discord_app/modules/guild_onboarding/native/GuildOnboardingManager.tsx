// discord_app/modules/guild_onboarding/native/GuildOnboardingManager.tsx
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleConnectionOpen from "handleConnectionOpen";
import { GuildFeatures } from "ME";
import { GuildMemberFlags } from "GuildMemberFlags";
import "initialize";

let require = arg1;
let c8 = null;
let c9 = null;
let prototype = function GuildOnboardingManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    CHANNEL_SELECT(arg0) {
      return applyArgumentsResult.handleChannelSelect(arg0);
    },
    GUILD_DELETE(arg0) {
      return applyArgumentsResult.handleGuildDelete(arg0);
    },
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handleConnectionOpen();
    }
  };
  applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
    let guildId = outer1_8;
    if (outer1_8 == null) {
      guildId = outer1_5.getGuildId();
    }
    if (guildId == null) {
      guildId = null;
    }
    outer1_8 = guildId;
    if (null != guildId) {
      const result = applyArgumentsResult._openOnboardingIfIncomplete(outer1_8);
    }
  };
  applyArgumentsResult.handleChannelSelect = function handleChannelSelect(arg0) {
    let channelId;
    let guildId;
    ({ guildId, channelId } = arg0);
    let tmp = outer1_8 === guildId;
    if (tmp) {
      tmp = outer1_9 === channelId;
    }
    if (!tmp) {
      if (channelId == null) {
        channelId = null;
      }
      outer1_9 = channelId;
      if (guildId == null) {
        guildId = null;
      }
      outer1_8 = guildId;
      if (null != guildId) {
        const result = applyArgumentsResult._openOnboardingIfIncomplete(outer1_8);
      }
    }
  };
  applyArgumentsResult.handleGuildDelete = function handleGuildDelete(guild) {
    const result = applyArgumentsResult(5114).discardOnboardingPromise(guild.guild.id);
  };
  applyArgumentsResult._openOnboardingIfIncomplete = function _openOnboardingIfIncomplete(outer1_8) {
    guild = guild.getGuild(outer1_8);
    if (null != guild) {
      const features = guild.features;
      if (features.has(constants.GUILD_ONBOARDING)) {
        selfMember = selfMember.getSelfMember(outer1_8);
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
          obj = { guildId: null };
          obj[0] = outer1_8;
          callback(5114)(obj);
        }
      }
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = require("handleConnectionOpen").fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingManager.tsx");

export default prototype;