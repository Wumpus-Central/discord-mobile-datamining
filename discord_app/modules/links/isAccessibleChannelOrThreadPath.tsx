// === Module 6752: isAccessibleChannelOrThreadPath ===

// Module 6752 (isAccessibleChannelOrThreadPath)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GuildOnboardingStore from "GuildOnboardingStore" /* 6591 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import GuildStore from "GuildStore" /* 2074 */;
import Constants from "Constants" /* 1085 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import size from "module_2" /* 2 */;

let c4, c5, id;

let c10;
let c9;
let metroImportAll;
let unpackModuleId;
let obj = function _isAccessibleChannelOrThreadPath() {
  obj = _asyncToGenerator(async (id) => {
    let c0;
    let c1;
    let closure_2;
    let closure_3;
    let obj10;
    let obj15;
    let obj2;
    let obj20;
    let obj22;
    let obj24;
    let obj30;
    let obj5;
    let obj8;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (id === 1) {
        throw value;
      } else if (id === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let tmp;
        let unsafeMutableRoles;
        let channel2;
        c5 = 2;
        if (0 === c4) {
          if (id === 1) {
            c5 = 3;
            throw value;
          } else if (id === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            id = undefined;
            c1 = undefined;
            ({ guildId: c0, channelId: c1 } = closure_0);
            tmp = undefined;
            unsafeMutableRoles = undefined;
            channel2 = undefined;
            c4 = 1;
            c5 = 1;
            return { value: "Set", done: true };
          }
        } else {
          let tmp14;
          if (1 === c4) {
            if (id === 1) {
              c5 = 3;
              throw value;
            } else if (id === 2) {
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              tmp = closure_131_7.getGuild(id);
              unsafeMutableRoles = closure_131_6.getUnsafeMutableRoles(id);
              if (null == tmp) {
                if (id !== closure_131_9) {
                  if (c1 !== closure_131_11.GAME_SHOP) {
                    c5 = 3;
                    return { value: false, done: true };
                  }
                }
              }
              if (null == c1) {
                c5 = 3;
                return { value: true, done: true };
              } else {
                if (closure_131_10(c1)) {
                  if (closure_131_11.CONJURE === c1) {
                    let canAccessConjureResult = null != tmp;
                    if (canAccessConjureResult) {
                      const obj32 = closure_131_0(closure_131_2[7]);
                      canAccessConjureResult = obj32.canAccessConjure(tmp, "isAccessibleChannelOrThreadPath");
                    }
                    c5 = 3;
                    const obj7 = { value: canAccessConjureResult, done: true };
                    return obj7;
                  } else if (closure_131_11.ROLE_SUBSCRIPTIONS === c1) {
                    c5 = 3;
                    const obj9 = { value: obj30.areRoleSubscriptionsVisibleInGuild(id, unsafeMutableRoles), done: true };
                    obj30 = closure_131_0(closure_131_2[8]);
                    return obj9;
                  } else if (closure_131_11.SERVER_MONETIZATION_ONBOARDING === c1) {
                    let result = null != tmp;
                    if (result) {
                      const obj28 = closure_131_0(closure_131_2[9]);
                      result = obj28.canUserSeeMonetizationOnboarding(tmp);
                    }
                    c5 = 3;
                    const obj11 = { value: result, done: true };
                    return obj11;
                  } else if (closure_131_11.GAME_SHOP === c1) {
                    let obj13 = tmp;
                    const hasSocialLayerStorefront = closure_131_0(closure_131_2[10]).hasSocialLayerStorefront;
                    const tmp120 = closure_131_0(closure_131_2[10]);
                    if (tmp == null) {
                      obj13 = { id, type: "id-only" };
                    }
                    c5 = 3;
                    const obj14 = { value: hasSocialLayerStorefront(obj13), done: true };
                    return obj14;
                  } else if (closure_131_11.GUILD_SHOP === c1) {
                    c5 = 3;
                    const obj16 = { value: obj24.isGuildShopVisibleInGuild(tmp, unsafeMutableRoles), done: true };
                    obj24 = closure_131_0(closure_131_2[11]);
                    return obj16;
                  } else if (closure_131_11.MEMBER_APPLICATIONS === c1) {
                    c5 = 3;
                    const obj17 = { value: obj22.canReviewGuildMemberApplications(id), done: true };
                    obj22 = closure_131_0(closure_131_2[12]);
                    return obj17;
                  } else if (closure_131_11.GUILD_HOME === c1) {
                    c5 = 3;
                    const obj18 = { value: obj20.canSeeOnboardingHome(id), done: true };
                    obj20 = closure_131_0(closure_131_2[13]);
                    return obj18;
                  } else if (closure_131_11.CHANNEL_BROWSER === c1) {
                    let hasItem = null != tmp;
                    if (hasItem) {
                      const features3 = tmp.features;
                      hasItem = features3.has(closure_131_8.COMMUNITY);
                    }
                    c5 = 3;
                    const obj19 = { value: hasItem, done: true };
                    return obj19;
                  } else if (closure_131_11.GUILD_ONBOARDING === c1) {
                    c5 = 3;
                    const obj21 = { value: closure_131_4.shouldShowOnboarding(id), done: true };
                    return obj21;
                  } else if (closure_131_11.CUSTOMIZE_COMMUNITY === c1) {
                    let hasItem1 = null != tmp;
                    if (hasItem1) {
                      const features2 = tmp.features;
                      hasItem1 = features2.has(closure_131_8.COMMUNITY);
                    }
                    c5 = 3;
                    const obj23 = { value: hasItem1, done: true };
                    return obj23;
                  } else if (closure_131_11.MEMBER_SAFETY === c1) {
                    c5 = 3;
                    const obj25 = { value: obj15.canAccessMemberSafetyPage(id), done: true };
                    obj15 = closure_131_0(closure_131_2[14]);
                    return obj25;
                  } else if (closure_131_11.GUILD_BOOSTS === c1) {
                    c5 = 3;
                    return { value: true, done: true };
                  } else if (closure_131_11.REPORT_TO_MOD === c1) {
                    const tmp71 = null != tmp && closure_131_1(closure_131_2[15])(tmp);
                    c5 = 3;
                    const obj26 = { value: tmp71, done: true };
                    return obj26;
                  } else if (closure_131_11.GAME_SERVERS === c1) {
                    const obj12 = closure_131_0(closure_131_2[16]);
                    let gameServerEnabled = obj12.getGameServerEnabled(id, "isAccessibleChannelOrThreadPath") && null != tmp;
                    if (gameServerEnabled) {
                      const features = tmp.features;
                      gameServerEnabled = features.has(closure_131_8.GAME_SERVERS);
                    }
                    c5 = 3;
                    const obj27 = { value: gameServerEnabled, done: true };
                    return obj27;
                  } else if (closure_131_11.GUILD_OFFICIAL_MESSAGES === c1) {
                    c5 = 3;
                    const obj29 = { value: obj10.isGuildOfficialMessagesEnabled(tmp, "isAccessibleChannelOrThreadPath"), done: true };
                    obj10 = closure_131_0(closure_131_2[17]);
                    return obj29;
                  } else if (closure_131_11.GUILD_SPACE === c1) {
                    c5 = 3;
                    const obj31 = { value: obj8.canUseGuildSpace(tmp, "isAccessibleChannelOrThreadPath"), done: true };
                    obj8 = closure_131_0(closure_131_2[18]);
                    return obj31;
                  } else {
                    const obj37 = closure_131_0(closure_131_2[19]);
                    obj37.assertNever(c1);
                  }
                }
                channel2 = closure_131_5.getChannel(c1);
                tmp14 = null != channel2;
                if (!tmp14) {
                  c4 = 2;
                  c5 = 1;
                  const obj33 = { value: obj5.loadThread(c1), done: false };
                  obj5 = closure_131_1(closure_131_2[20]);
                  return obj33;
                }
              }
            }
          } else {
            if (2 === c4) {
              if (id === 1) {
                c5 = 3;
                throw value;
              } else if (id === 2) {
                c5 = 3;
                const obj34 = { value, done: true };
                return obj34;
              } else {
                const channel = closure_131_5.getChannel(c1);
                channel2 = channel;
                const tmp10 = null == channel && id === closure_131_9;
                if (tmp10) {
                  c4 = 3;
                  c5 = 1;
                  const obj35 = { value: obj2.openChannel(c1), done: false };
                  obj2 = closure_131_1(closure_131_2[21]);
                  return obj35;
                }
              }
            } else if (id === 1) {
              c5 = 3;
              throw value;
            } else if (id === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              channel2 = value;
            }
            tmp14 = null != channel2;
          }
          if (tmp14) {
            tmp14 = closure_131_1(closure_131_2[22])(channel2);
          }
          c5 = 3;
          const obj36 = { value: tmp14, done: true };
          return obj36;
        }
      } catch (tmp148) {
        c5 = 3;
        throw tmp148;
      }
    }
  });
  return obj(...arguments);
};
({ GuildFeatures: metroImportAll, ME: c9 } = Constants);
({ isStaticChannelRoute: c10, StaticChannelRoute: unpackModuleId } = ChannelConstants);
let result = size.fileFinishedImporting("modules/links/isAccessibleChannelOrThreadPath.tsx");

export default function isAccessibleChannelOrThreadPath() {
  return obj(...arguments);
};