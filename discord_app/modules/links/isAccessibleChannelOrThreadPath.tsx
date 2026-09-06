// discord_app/modules/links/isAccessibleChannelOrThreadPath.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import GatedChannelStore from "../channel/GatedChannelStore.tsx";
import GuildOnboardingStore from "../guild_onboarding/GuildOnboardingStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";

const require = fn;
let closure_13 = async function _isAccessibleChannelOrThreadPath(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          ({ guildId: closure_130_0, channelId: closure_130_1 } = closure_0);
          let guild;
          let unsafeMutableRoles;
          let channel2;
          c4 = 1;
          c5 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            let obj1 = { value, done: true };
            return obj1;
          } else {
            guild = closure_131_8.getGuild(closure_130_0);
            unsafeMutableRoles = closure_131_7.getUnsafeMutableRoles(closure_130_0);
            if (null == guild) {
              if (closure_130_0 !== closure_131_10) {
                if (closure_130_1 !== closure_131_12.GAME_SHOP) {
                  c5 = 3;
                  return { value: false, done: true };
                }
              }
            }
            if (null == closure_130_1) {
              c5 = 3;
              return { value: true, done: true };
            } else {
              if (closure_131_11(closure_130_1)) {
                if (closure_131_12.VIBEGRATIONS === closure_130_1) {
                  let result = null != guild;
                  if (result) {
                    result = closure_131_0(closure_131_2[8]).canAccessVibegrations(
                      guild,
                      "isAccessibleChannelOrThreadPath",
                    );
                    const obj34 = closure_131_0(closure_131_2[8]);
                  }
                  c5 = 3;
                  const obj2 = { value: result, done: true };
                  return obj2;
                } else if (closure_131_12.ROLE_SUBSCRIPTIONS === tmp31) {
                  c5 = 3;
                  const obj3 = {
                    value: closure_131_0(closure_131_2[9]).areRoleSubscriptionsVisibleInGuild(
                      closure_130_0,
                      unsafeMutableRoles,
                    ),
                    done: true,
                  };
                  return obj3;
                } else if (closure_131_12.SERVER_MONETIZATION_ONBOARDING === tmp31) {
                  let result1 = null != guild;
                  if (result1) {
                    result1 = closure_131_0(closure_131_2[10]).canUserSeeMonetizationOnboarding(guild);
                    const obj30 = closure_131_0(closure_131_2[10]);
                  }
                  c5 = 3;
                  let obj4 = { value: result1, done: true };
                  return obj4;
                } else if (closure_131_12.GAME_SHOP === tmp31) {
                  let obj5 = guild;
                  if (guild == null) {
                    obj5 = { id: closure_130_0, type: "id-only" };
                  }
                  c5 = 3;
                  let obj6 = { value: closure_131_0(closure_131_2[11]).hasSocialLayerStorefront(obj5), done: true };
                  return obj6;
                } else if (closure_131_12.GUILD_SHOP === tmp31) {
                  c5 = 3;
                  const obj7 = {
                    value: closure_131_0(closure_131_2[12]).isGuildShopVisibleInGuild(guild, unsafeMutableRoles),
                    done: true,
                  };
                  return obj7;
                } else if (closure_131_12.MEMBER_APPLICATIONS === tmp31) {
                  c5 = 3;
                  let obj8 = {
                    value: closure_131_0(closure_131_2[13]).canReviewGuildMemberApplications(closure_130_0),
                    done: true,
                  };
                  return obj8;
                } else if (closure_131_12.GUILD_HOME === tmp31) {
                  let obj20 = closure_131_0(closure_131_2[14]);
                  c5 = 3;
                  const obj9 = { value: obj20.canSeeOnboardingHome(closure_130_0), done: true };
                  return obj9;
                } else if (closure_131_12.CHANNEL_BROWSER === tmp31) {
                  let hasItem = null != guild;
                  if (hasItem) {
                    const features3 = guild.features;
                    hasItem = features3.has(closure_131_9.COMMUNITY);
                  }
                  c5 = 3;
                  let obj10 = { value: hasItem, done: true };
                  return obj10;
                } else if (closure_131_12.GUILD_ONBOARDING === tmp31) {
                  c5 = 3;
                  const obj11 = { value: closure_131_5.shouldShowOnboarding(closure_130_0), done: true };
                  return obj11;
                } else if (closure_131_12.CUSTOMIZE_COMMUNITY === tmp31) {
                  let hasItem1 = null != guild;
                  if (hasItem1) {
                    const features2 = guild.features;
                    hasItem1 = features2.has(closure_131_9.COMMUNITY);
                  }
                  c5 = 3;
                  let obj12 = { value: hasItem1, done: true };
                  return obj12;
                } else if (closure_131_12.MEMBER_SAFETY === tmp31) {
                  let obj15 = closure_131_0(closure_131_2[15]);
                  c5 = 3;
                  const obj13 = { value: obj15.canAccessMemberSafetyPage(closure_130_0), done: true };
                  return obj13;
                } else if (closure_131_12.GUILD_BOOSTS === tmp31) {
                  c5 = 3;
                  return { value: true, done: true };
                } else if (closure_131_12.REPORT_TO_MOD === tmp31) {
                  let tmp78 = null != guild;
                  if (tmp78) {
                    tmp78 = closure_131_1(closure_131_2[16])(guild);
                  }
                  c5 = 3;
                  const obj14 = { value: tmp78, done: true };
                  return obj14;
                } else if (closure_131_12.GAME_SERVERS === tmp31) {
                  obj12 = closure_131_0(closure_131_2[17]);
                  let gameServerEnabled = obj12.getGameServerEnabled(closure_130_0, "isAccessibleChannelOrThreadPath");
                  if (gameServerEnabled) {
                    gameServerEnabled = null != guild;
                  }
                  if (gameServerEnabled) {
                    const features = guild.features;
                    gameServerEnabled = features.has(closure_131_9.GAME_SERVERS);
                  }
                  c5 = 3;
                  obj15 = { value: gameServerEnabled, done: true };
                  return obj15;
                } else if (closure_131_12.GUILD_OFFICIAL_MESSAGES === tmp31) {
                  obj10 = closure_131_0(closure_131_2[18]);
                  c5 = 3;
                  const obj16 = {
                    value: obj10.isGuildOfficialMessagesEnabled(guild, "isAccessibleChannelOrThreadPath"),
                    done: true,
                  };
                  return obj16;
                } else if (closure_131_12.GUILD_SPACE === tmp31) {
                  obj8 = closure_131_0(closure_131_2[19]);
                  c5 = 3;
                  const obj17 = { value: obj8.canUseGuildSpace(guild, "isAccessibleChannelOrThreadPath"), done: true };
                  return obj17;
                } else {
                  closure_131_0(closure_131_2[20]).assertNever(closure_130_1);
                  const obj39 = closure_131_0(closure_131_2[20]);
                }
              }
              channel2 = closure_131_6.getChannel(closure_130_1);
              let tmp15 = null != channel2;
              if (!tmp15) {
                obj4 = closure_131_1(closure_131_2[21]);
                c4 = 2;
                c5 = 1;
                const obj18 = { value: obj4.loadThread(closure_130_1), done: false };
                return obj18;
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
              const obj19 = { value, done: true };
              return obj19;
            } else {
              const channel = closure_131_6.getChannel(closure_130_1);
              channel2 = channel;
              let tmp11 = null == channel;
              if (tmp11) {
                tmp11 = closure_130_0 === closure_131_10;
              }
              if (tmp11) {
                obj1 = closure_131_1(closure_131_2[22]);
                c4 = 3;
                c5 = 1;
                obj20 = { value: obj1.openChannel(closure_130_1), done: false };
                return obj20;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            channel2 = value;
          }
          tmp15 = null != channel2;
        }
        if (tmp15) {
          obj6 = closure_131_0(closure_131_2[23]);
          let canViewChannelResult = obj6.canViewChannel(channel2);
          if (!canViewChannelResult) {
            canViewChannelResult = closure_131_4.isChannelGatedAndVisible(closure_130_0, closure_130_1);
          }
          tmp15 = canViewChannelResult;
        }
        c5 = 3;
        const obj21 = { value: tmp15, done: true };
        return obj21;
      }
    } catch (tmp154) {
      c5 = tmp;
      throw tmp154;
    }
  }
};
const Constants = fn(1074);
({ GuildFeatures: closure_9, ME: c10 } = Constants);
const ChannelConstants = fn(1964);
({ isStaticChannelRoute: closure_11, StaticChannelRoute: closure_12 } = ChannelConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/links/isAccessibleChannelOrThreadPath.tsx");

export default function isAccessibleChannelOrThreadPath() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
