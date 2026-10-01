// discord_app/modules/links/isAccessibleChannelOrThreadPath.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import GuildOnboardingStore from "../guild_onboarding/GuildOnboardingStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";

const require = fn;
let closure_12 = async function _isAccessibleChannelOrThreadPath(arg0) {
  closure_2 = tmp2;
  ({ guildId: closure_130_0, channelId: closure_130_1 } = closure_0);
  await "flex";
  if (1 === tmp5) {
    if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 3;
      return { value, done: true };
    } else {
      const guild = closure_131_7.getGuild(closure_130_0);
      const unsafeMutableRoles = closure_131_6.getUnsafeMutableRoles(closure_130_0);
      if (null == guild) {
        if (closure_130_0 !== closure_131_9) {
          if (closure_130_1 !== closure_131_11.GAME_SHOP) {
            c5 = 3;
            return { value: false, done: true };
          }
        }
      }
      if (null == closure_130_1) {
        c5 = 3;
        return { value: true, done: true };
      } else {
        if (closure_131_10(closure_130_1)) {
          if (closure_131_11.VIBEGRATIONS === closure_130_1) {
            let result = null != guild;
            if (result) {
              result = closure_131_0(closure_131_2[7]).canAccessVibegrations(guild, "isAccessibleChannelOrThreadPath");
              closure_131_0(closure_131_2[7]);
            }
            c5 = 3;
            return { value: result, done: true };
          } else if (closure_131_11.ROLE_SUBSCRIPTIONS === tmp31) {
            c5 = 3;
            return {
              value: closure_131_0(closure_131_2[8]).areRoleSubscriptionsVisibleInGuild(
                closure_130_0,
                unsafeMutableRoles,
              ),
              done: true,
            };
          } else if (closure_131_11.SERVER_MONETIZATION_ONBOARDING === tmp31) {
            let result1 = null != guild;
            if (result1) {
              result1 = closure_131_0(closure_131_2[9]).canUserSeeMonetizationOnboarding(guild);
              closure_131_0(closure_131_2[9]);
            }
            c5 = 3;
            return { value: result1, done: true };
          } else if (closure_131_11.GAME_SHOP === tmp31) {
            let obj13 = guild;
            if (guild == null) {
              obj13 = { id: closure_130_0, type: "id-only" };
            }
            c5 = 3;
            return { value: closure_131_0(closure_131_2[10]).hasSocialLayerStorefront(obj13), done: true };
          } else if (closure_131_11.GUILD_SHOP === tmp31) {
            c5 = 3;
            return {
              value: closure_131_0(closure_131_2[11]).isGuildShopVisibleInGuild(guild, unsafeMutableRoles),
              done: true,
            };
          } else if (closure_131_11.MEMBER_APPLICATIONS === tmp31) {
            c5 = 3;
            return {
              value: closure_131_0(closure_131_2[12]).canReviewGuildMemberApplications(closure_130_0),
              done: true,
            };
          } else if (closure_131_11.GUILD_HOME === tmp31) {
            c5 = 3;
            return { value: closure_131_0(closure_131_2[13]).canSeeOnboardingHome(closure_130_0), done: true };
          } else if (closure_131_11.CHANNEL_BROWSER === tmp31) {
            let hasItem = null != guild;
            if (hasItem) {
              const features3 = guild.features;
              hasItem = features3.has(closure_131_8.COMMUNITY);
            }
            c5 = 3;
            return { value: hasItem, done: true };
          } else if (closure_131_11.GUILD_ONBOARDING === tmp31) {
            c5 = 3;
            return { value: closure_131_4.shouldShowOnboarding(closure_130_0), done: true };
          } else if (closure_131_11.CUSTOMIZE_COMMUNITY === tmp31) {
            let hasItem1 = null != guild;
            if (hasItem1) {
              const features2 = guild.features;
              hasItem1 = features2.has(closure_131_8.COMMUNITY);
            }
            c5 = 3;
            return { value: hasItem1, done: true };
          } else if (closure_131_11.MEMBER_SAFETY === tmp31) {
            c5 = 3;
            return { value: closure_131_0(closure_131_2[14]).canAccessMemberSafetyPage(closure_130_0), done: true };
          } else if (closure_131_11.GUILD_BOOSTS === tmp31) {
            c5 = 3;
            return { value: true, done: true };
          } else if (closure_131_11.REPORT_TO_MOD === tmp31) {
            let tmp72 = null != guild;
            if (tmp72) {
              tmp72 = closure_131_1(closure_131_2[15])(guild);
            }
            c5 = 3;
            return { value: tmp72, done: true };
          } else if (closure_131_11.GAME_SERVERS === tmp31) {
            let gameServerEnabled = closure_131_0(closure_131_2[16]).getGameServerEnabled(
              closure_130_0,
              "isAccessibleChannelOrThreadPath",
            );
            if (gameServerEnabled) {
              gameServerEnabled = null != guild;
            }
            if (gameServerEnabled) {
              const features = guild.features;
              gameServerEnabled = features.has(closure_131_8.GAME_SERVERS);
            }
            c5 = 3;
            return { value: gameServerEnabled, done: true };
          } else if (closure_131_11.GUILD_OFFICIAL_MESSAGES === tmp31) {
            c5 = 3;
            return {
              value: closure_131_0(closure_131_2[17]).isGuildOfficialMessagesEnabled(
                guild,
                "isAccessibleChannelOrThreadPath",
              ),
              done: true,
            };
          } else if (closure_131_11.GUILD_SPACE === tmp31) {
            c5 = 3;
            return {
              value: closure_131_0(closure_131_2[18]).canUseGuildSpace(guild, "isAccessibleChannelOrThreadPath"),
              done: true,
            };
          } else {
            closure_131_0(closure_131_2[19]).assertNever(closure_130_1);
            closure_131_0(closure_131_2[19]);
          }
        }
        let channel2 = closure_131_5.getChannel(closure_130_1);
        let tmp15 = null != channel2;
        if (!tmp15) {
          c4 = 2;
          c5 = 1;
          return { value: closure_131_1(closure_131_2[20]).loadThread(closure_130_1), done: false };
        }
      }
    }
  } else {
    if (2 === tmp5) {
      if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        return { value, done: true };
      } else {
        const channel = closure_131_5.getChannel(closure_130_1);
        channel2 = channel;
        let tmp11 = null == channel;
        if (tmp11) {
          tmp11 = closure_130_0 === closure_131_9;
        }
        if (tmp11) {
          c4 = 3;
          c5 = 1;
          return { value: closure_131_1(closure_131_2[21]).openChannel(closure_130_1), done: false };
        }
      }
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 3;
      return { value, done: true };
    } else {
      channel2 = value;
    }
    tmp15 = null != channel2;
  }
  if (tmp15) {
    tmp15 = closure_131_1(closure_131_2[22])(channel2);
  }
  return tmp15;
};
const Constants = fn(1074);
({ GuildFeatures: closure_8, ME: closure_9 } = Constants);
const ChannelConstants = fn(2051);
({ isStaticChannelRoute: c10, StaticChannelRoute: closure_11 } = ChannelConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/links/isAccessibleChannelOrThreadPath.tsx");

export default function isAccessibleChannelOrThreadPath() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
