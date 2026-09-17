// discord_app/actions/InstantInviteActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import router_utils from "../modules/routing/router_utils.tsx";
import AnalyticsUtilsDefault from "../utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import FlagUtils from "../../discord_common/js/shared/utils/FlagUtils.tsx";
import errors_V6OrEarlierAPIErrorDefault from "../errors/V6OrEarlierAPIError.tsx";
import InviteCodeUtils from "../modules/instant_invite/InviteCodeUtils.tsx";
import _modDef4963 from "../../_runtime/metro/04963__.js";
import GuildActionCreatorsDefault from "GuildActionCreators.tsx";
import AgeGateModalActionCreators from "../modules/age_gate/AgeGateModalActionCreators.tsx";
import GuildInviteFlags from "../../discord_common/js/shared/shared-constants/GuildInviteFlags.tsx";
import CodedLinkActionCreatorsDefault from "../modules/coded_links/web/CodedLinkActionCreators.tsx";
import generateDynamicLinkDefault from "../../discord_common/js/packages/dynamic-links/generateDynamicLink.tsx";
import ProtocolUtilsDefault from "../utils/web/ProtocolUtils.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import GuildScheduledEventStore from "../modules/guild_scheduled_events/GuildScheduledEventStore.tsx";
import AuthenticationStore from "../stores/AuthenticationStore.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import GuildChannelStore from "../stores/GuildChannelStore.tsx";
import GuildMemberStore from "../stores/GuildMemberStore.tsx";
import GuildStore from "../stores/GuildStore.tsx";
import InstantInviteStore from "../stores/InstantInviteStore.tsx";
import InviteStore from "../stores/InviteStore.tsx";
import PermissionStore from "../stores/PermissionStore.tsx";
import RelationshipStore from "../stores/RelationshipStore.tsx";
import SelectedGuildStore from "../stores/SelectedGuildStore.tsx";
import UserStore from "../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
function generateAcceptInviteOptions(target_type) {
  const obj = {};
  target_type = target_type.target_type;
  if (InviteTargetTypes.STREAM === target_type) {
    ({ target_type: obj.targetType, target_user } = target_type);
    let id;
    if (target_user != null) {
      id = target_user.id;
    }
    obj.targetUserId = id;
  } else if (InviteTargetTypes.EMBEDDED_APPLICATION === target_type) {
    ({ target_type: obj.targetType, target_application } = target_type);
    let id1;
    if (target_application != null) {
      id1 = target_application.id;
    }
    obj.targetApplicationId = id1;
  } else if (InviteTargetTypes.ROLE_SUBSCRIPTIONS_PURCHASE === target_type) {
    obj.targetType = target_type.target_type;
  }
  const guild = target_type.guild;
  let id2;
  if (guild != null) {
    id2 = guild.id;
  }
  const tmp8 = null == GuildStore.getGuild(id2) || target_type.new_member;
  let tmp9 = tmp8;
  if (tmp8) {
    tmp9 = null != target_type.channel;
  }
  if (tmp9) {
    tmp9 = React6(target_type.channel.type);
  }
  if (tmp9) {
    obj.welcomeModalChannelId = target_type.channel.id;
  }
  if (null != target_type.guild_scheduled_event) {
    obj.guildScheduledEvent = target_type.guild_scheduled_event;
  }
  let num = target_type.flags;
  if (num == null) {
    num = 0;
  }
  obj.isGuestInvite = FlagUtils.hasFlag(num, GuildInviteFlags.GuildInviteFlags.IS_GUEST_INVITE);
  let num2 = target_type.flags;
  if (num2 == null) {
    num2 = 0;
  }
  obj.isApplicationBypassInvite = FlagUtils.hasFlag(num2, GuildInviteFlags.GuildInviteFlags.IS_APPLICATION_BYPASS);
  const inviter = target_type.inviter;
  let id3;
  if (inviter != null) {
    id3 = inviter.id;
  }
  obj.inviterUserId = id3;
  if (!tmp8) {
    obj.forceTransition = true;
  }
  if (null != target_type.target_channel_id) {
    obj.targetChannelId = target_type.target_channel_id;
    if (null != target_type.target_message_id) {
      obj.targetMessageId = target_type.target_message_id;
    }
  }
  return obj;
}
function transitionToInviteChannelSync(channel_id, arg1) {
  closure_0 = channel_id;
  const items = [];
  const result = ChannelStore.addConditionalChangeListener(() => {
    transitionTo = channel.getChannel(id);
    currentUser = currentUser.getCurrentUser();
    if (null == transitionTo || null == currentUser) {
      return tmp3;
    } else {
      let guildScheduledEvent2 = transitionTo.nsfw && !currentUser.nsfwAllowed;
      if (!guildScheduledEvent2) {
        let isGuildVocalOrThreadResult = transitionTo.isGuildVocalOrThread();
        if (isGuildVocalOrThreadResult) {
          isGuildVocalOrThreadResult = require("AgeGateUtils").maybeOpenAgeGateForVoiceChannel(tmp);
          let obj3 = require("AgeGateUtils");
        }
        guildScheduledEvent2 = isGuildVocalOrThreadResult;
      }
      if (!guildScheduledEvent2) {
        let isGuildVocalOrThreadResult1 = transitionTo.isGuildVocalOrThread();
        if (isGuildVocalOrThreadResult1) {
          isGuildVocalOrThreadResult1 = require("maybeOpenSpoilerGateForVoiceChannel").maybeOpenSpoilerGateForVoiceChannel(tmp);
          let obj4 = require("maybeOpenSpoilerGateForVoiceChannel");
        }
        guildScheduledEvent2 = isGuildVocalOrThreadResult1;
      }
      let flag = !guildScheduledEvent2;
      if (!guildScheduledEvent2) {
        let guildScheduledEvent1;
        if (obj != null) {
          guildScheduledEvent1 = tmp10.guildScheduledEvent;
        }
        if (null != guildScheduledEvent1) {
          guildScheduledEvent2 = tmp10.guildScheduledEvent;
          guildId = guildScheduledEvent2;
          transitionTo = tmp10.welcomeModalChannelId;
          flag = false;
          if (null != guildScheduledEvent2) {
            addPostConnectionCallback(() => {
              obj = { guildScheduledEventId: guildId.id };
              if (null != transitionTo) {
                obj.welcomeModalChannelId = transitionTo;
              }
              const result = id(paths[38]).transitionToEventDetailsFromInvite(guildId, obj);
              const obj2 = id(paths[38]);
            });
            flag = false;
          }
        } else {
          guildId = transitionTo.getGuildId();
          if (guildId == null) {
            guildId = closure_2_27;
          }
          closure_2 = tmp10;
          if (items === undefined) {
            items = [];
          }
          c4 = undefined;
          targetType = undefined;
          let targetApplicationId;
          let isGuestInvite;
          let GUILD_HOME;
          closure_9 = undefined;
          c10 = undefined;
          guild = guild.getGuild(guildId);
          if (guild != null) {
            const features = guild.features;
            const hasItem = features.has(constants2.MEMBER_VERIFICATION_MANUAL_APPROVAL);
          }
          let obj2 = tmp10;
          if (tmp10 == null) {
            obj2 = {};
          }
          ({ targetUserId: c4, targetType } = obj2);
          targetApplicationId = obj2.targetApplicationId;
          isGuestInvite = obj2.isGuestInvite;
          if (!isGuestInvite) {
            if (!obj2.isApplicationBypassInvite) {
              let forceTransition;
              if (tmp10 != null) {
                forceTransition = tmp10.forceTransition;
              }
              if (!forceTransition) {
                if (hasItem) {
                  let CHANNELResult = guildId;
                  guildScheduledEvent2 = guildId.getGuildId();
                  flag = false;
                }
              }
            }
          }
          const type = transitionTo.type;
          let targetChannelId;
          channel = obj.getChannel(transitionTo.id);
          if (tmp10 != null) {
            targetChannelId = tmp10.targetChannelId;
          }
          if (null != targetChannelId) {
            const channel1 = obj.getChannel(targetChannelId);
            if (null != channel1) {
              GUILD_HOME = targetChannelId;
            }
            closure_9 = type === constants.GUILD_STAGE_VOICE;
            let targetChannelId1;
            if (tmp10 != null) {
              targetChannelId1 = tmp10.targetChannelId;
            }
            let tmp39;
            if (null != targetChannelId1 && GUILD_HOME === tmp10.targetChannelId) {
              let targetMessageId;
              if (tmp10 != null) {
                targetMessageId = tmp10.targetMessageId;
              }
              tmp39 = targetMessageId;
            }
            CHANNELResult = closure_2_26.CHANNEL(guildId, GUILD_HOME, tmp39);
            c10 = CHANNELResult;
            if (GUILD_HOME === transitionTo.id) {
              if (closure_2_9(type)) {
                autoJoin = undefined;
                if (tmp10 != null) {
                  autoJoin = tmp10.autoJoin;
                }
                if (false !== autoJoin) {
                  addPostConnectionCallback(() => {
                    id(paths[27])(paths[26], paths.paths).then((result) => {
                      closure_0 = result.default;
                      function connect() {
                        if (closure_2_9) {
                          if (closure_2_1 instanceof closure_3_11) {
                            let tmp44 = closure_2_1;
                          } else {
                            tmp44 = c10(closure_2_1);
                          }
                          guildId(items[28]).connectAndOpen(tmp44);
                          const obj6 = guildId(items[28]);
                          guildId(items[25]).transitionTo(closure_2_10);
                          const obj7 = guildId(items[25]);
                        } else {
                          let prop;
                          if (closure_2_2 != null) {
                            prop = closure_2_2.muteOnJoinVoiceChannel;
                          }
                          if (prop) {
                            transitionTo(items[29]).setSelfMute(guildId(items[30]).MediaEngineContextTypes.DEFAULT, true);
                            obj = transitionTo(items[29]);
                          }
                          const voiceChannel = closure_0.selectVoiceChannel(GUILD_HOME);
                          let tmp14 = targetType === constants2.STREAM;
                          if (tmp14) {
                            tmp14 = null != ownerId;
                          }
                          if (tmp14) {
                            const obj3 = { streamType: constants.GUILD, ownerId, guildId, channelId: GUILD_HOME };
                            const result = closure_2(items[31]).watchStreamAndTransitionToStream(obj3);
                            const obj2 = closure_2(items[31]);
                          }
                          let tmp22 = targetType === constants2.EMBEDDED_APPLICATION;
                          if (tmp22) {
                            tmp22 = null != applicationId;
                          }
                          if (tmp22) {
                            let tmp27 = guildId;
                            if (guildId == null) {
                              tmp27 = closure_3_27;
                            }
                            guildId(items[25]).transitionTo(closure_3_26.CHANNEL(tmp27, GUILD_HOME));
                            const obj5 = { channelId: GUILD_HOME, applicationId, intent: null, inviterUserId: null, analyticsLocations: null, commandOrigin: null };
                            let intent;
                            const obj4 = guildId(items[25]);
                            if (closure_2_2 != null) {
                              intent = closure_2_2.intent;
                            }
                            obj5.intent = intent;
                            let inviterUserId;
                            if (closure_2_2 != null) {
                              inviterUserId = closure_2_2.inviterUserId;
                            }
                            obj5.inviterUserId = inviterUserId;
                            obj5.analyticsLocations = analyticsLocations;
                            obj5.commandOrigin = guildId(items[33]).CommandOrigin.CHAT;
                            transitionTo(items[32])(obj5);
                            const tmp31 = transitionTo(items[32]);
                          }
                        }
                      }
                      if (!closure_7) {
                        items = [closure_1_17, closure_1_23, closure_1_16];
                        if (obj.shouldShowMembershipVerificationGate(closure_0, items)) {
                          result = guildId(analyticsLocations[35]).openMemberVerificationModal(tmp3, connect);
                          const tmpResult = guildId(analyticsLocations[35]);
                        }
                        obj = guildId(analyticsLocations[34]);
                        tmp3 = closure_0;
                      }
                      connect();
                    });
                  });
                }
                if (tmp38) {
                  if (guildId !== closure_2_27) {
                    transitionTo = function runDeepLinkJump() {
                      obj = closure_2;
                      if (closure_2 == null) {
                        obj = {};
                      }
                      ({ transitionTo, welcomeModalChannelId, guildScheduledEvent } = obj);
                      const obj2 = { source: obj(paths[24]).INVITE_ACCEPT, navigationReplace: true, openChannel: true };
                      if (null != welcomeModalChannelId) {
                        obj2.welcomeModalChannelId = welcomeModalChannelId;
                      }
                      if (transitionTo.type === constants.GUILD_STAGE_VOICE) {
                        const obj3 = { stageInviteKey };
                        obj2.state = obj3;
                      }
                      if (null != guildScheduledEvent) {
                        obj2.guildScheduledEventId = guildScheduledEvent.id;
                      }
                      if (null != transitionTo) {
                        let transitionToResult = transitionTo(c10, obj2);
                      } else {
                        transitionToResult = id(paths[25]).transitionTo(c10, obj2);
                        const obj4 = id(paths[25]);
                      }
                      return transitionToResult;
                    };
                    CHANNELResult = require("asyncRequireImpl")(paths[37], paths.paths);
                    guildScheduledEvent2 = CHANNELResult.then((result) => result.default({ guildId }));
                    guildScheduledEvent2.then(transitionTo, transitionTo);
                    flag = false;
                  }
                  guildScheduledEvent2 = transitionTo(CHANNELResult, guildScheduledEvent2);
                  flag = false;
                }
                let obj5 = tmp10;
                if (tmp10 == null) {
                  obj5 = {};
                }
                ({ transitionTo, welcomeModalChannelId, guildScheduledEvent } = obj5);
                guildScheduledEvent2 = { source: require("RoutingSources").INVITE_ACCEPT, navigationReplace: true };
                if (tmp38) {
                  guildScheduledEvent2.openChannel = true;
                }
                if (null != welcomeModalChannelId) {
                  guildScheduledEvent2.welcomeModalChannelId = welcomeModalChannelId;
                }
                if (transitionTo.type === constants.GUILD_STAGE_VOICE) {
                  const obj9 = { stageInviteKey };
                  guildScheduledEvent2.state = obj9;
                }
                if (null != guildScheduledEvent) {
                  guildScheduledEvent2.guildScheduledEventId = guildScheduledEvent.id;
                }
                if (null == transitionTo) {
                  require("router_utils").transitionTo(CHANNELResult, guildScheduledEvent2);
                  flag = false;
                  const obj13 = require("router_utils");
                }
              }
            }
            let result = require("ActivitiesInTextUtils").isActivityInTextSupportedForChannel(channel);
            if (result) {
              result = targetType === constants5.EMBEDDED_APPLICATION;
            }
            if (result) {
              result = null != targetApplicationId;
            }
            if (result) {
              let tmp47 = guildId;
              if (guildId == null) {
                tmp47 = closure_2_27;
              }
              require("router_utils").transitionTo(closure_2_26.CHANNEL(tmp47, GUILD_HOME));
              const obj10 = { channelId: GUILD_HOME, applicationId: targetApplicationId, intent: null, inviterUserId: null, analyticsLocations: null, commandOrigin: null };
              let intent;
              const tmp43Result = require("router_utils");
              if (tmp10 != null) {
                intent = tmp10.intent;
              }
              obj10.intent = intent;
              let inviterUserId;
              if (tmp10 != null) {
                inviterUserId = tmp10.inviterUserId;
              }
              obj10.inviterUserId = inviterUserId;
              obj10.analyticsLocations = items;
              obj10.commandOrigin = require("ApplicationCommandTypes").CommandOrigin.CHAT;
              require("deferJoinActivityInChannel")(obj10);
              const tmp50 = require("deferJoinActivityInChannel");
            }
            const obj8 = require("ActivitiesInTextUtils");
          }
          let targetType1;
          if (tmp10 != null) {
            targetType1 = tmp10.targetType;
          }
          if (null == targetType1) {
            if (!closure_2_9(transitionTo.type)) {
              if (obj6.canSeeOnboardingHome(guildId)) {
                GUILD_HOME = constants4.GUILD_HOME;
              }
              obj6 = require("OnboardingHomeUtils");
            }
          }
          const channel2 = obj.getChannel(transitionTo.id);
          if (PermissionStore.can(closure_2_12(transitionTo.type), channel2)) {
            id = transitionTo.id;
          } else {
            defaultChannel = defaultChannel.getDefaultChannel(guildId, true, constants3.CREATE_INSTANT_INVITE);
            id = undefined;
            if (defaultChannel != null) {
              id = defaultChannel.id;
            }
            if (id == null) {
              id = transitionTo.id;
            }
          }
        }
      }
    }
  });
}
let closure_43 = async function _transitionToGuildFromEventInvite(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          const channel_id = _require.channel_id;
          if (React5(_require)) {
            if (null != channel_id) {
              transitionToInviteChannelSync(channel_id);
            }
          }
          c2 = 1;
          c1 = 1;
          const obj5 = { value: GuildActionCreatorsDefault.transitionToGuildSync(_require.guild_id), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c1 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp12) {
      c1 = tmp;
      throw tmp12;
    }
  }
};
function trackInviteServerClicked(id5, accept, items2) {
  let tmp = items2;
  const obj2 = { guild_id: id5, action: accept, location_stack: null };
  if (items2 == null) {
    tmp = null;
  }
  obj2.location_stack = tmp;
  AnalyticsUtilsDefault.track(constants3.INVITE_SERVER_CLICKED, obj2);
}
fn(5646).addPostConnectionCallback;
let closure_7 = fn(7640).isGuildScheduledEventActive;
const ChannelRecord = fn(1962);
({ isGuildTextChannelType: closure_8, isGuildVocalChannelOrVocalThreadType: closure_9, createChannelRecord: c10, ChannelRecordBase: closure_11, getAccessPermissions: closure_12 } = ChannelRecord);
const Constants = fn(1074);
({ Endpoints: closure_24, ChannelTypes: closure_25, Routes: closure_26, ME: closure_27, RPCCommands: closure_28, GuildFeatures: closure_29, AnalyticEvents: closure_30, UserFlags: items, Permissions: closure_32, AbortCodes: closure_33 } = Constants);
const AgeGateSource = fn(1099).AgeGateSource;
const StaticChannelRoute = fn(1965).StaticChannelRoute;
const StreamTypes = fn(4682).StreamTypes;
const InviteTargetTypes = fn(7856).InviteTargetTypes;
const STAGE_INVITE_STATE_KEY = fn(5502).STAGE_INVITE_STATE_KEY;
let invite = "invite";
let c40 = null;
const size = fn(2);
let result = size.fileFinishedImporting("actions/InstantInviteActionCreators.tsx");

export default {
  resolveInvite(code, arg1, arg2) {
    closure_0 = code;
    importDefault = arg1;
    closure_2 = arg2;
    if (obj.isDispatching()) {
      const resolved = Promise.resolve();
      let nextPromise = resolved.then(() => {
        closure_0 = closure_1_0;
        closure_1 = closure_1_1;
        closure_2 = closure_1_2;
        if (obj.isDispatching()) {
          let resolved = Promise.resolve();
          let nextPromise = resolved.then(() => {
            closure_0 = closure_1_0;
            closure_1 = closure_1_1;
            closure_2 = closure_1_2;
            if (obj.isDispatching()) {
              let resolved = Promise.resolve();
              let nextPromise = resolved.then(() => {
                closure_0 = closure_1_0;
                closure_1 = closure_1_1;
                closure_2 = closure_1_2;
                if (obj.isDispatching()) {
                  let resolved = Promise.resolve();
                  let nextPromise = resolved.then(() => {
                    closure_0 = closure_1_0;
                    closure_1 = closure_1_1;
                    closure_2 = closure_1_2;
                    if (obj.isDispatching()) {
                      let resolved = Promise.resolve();
                      let nextPromise = resolved.then(() => { ... });
                    } else {
                      let obj2 = { type: "INVITE_RESOLVE", code: closure_1_0 };
                      closure_2_1(closure_2_3[39]).dispatch(obj2);
                      let tmp4Result = closure_2_1(closure_2_3[39]);
                      nextPromise = closure_2_1(closure_2_3[40])(closure_1_0, closure_1_1, closure_1_2).then(() => { ... });
                      let promise = closure_2_1(closure_2_3[40])(closure_1_0, closure_1_1, closure_1_2);
                    }
                    return nextPromise;
                  });
                } else {
                  let obj2 = { type: "INVITE_RESOLVE", code: closure_1_0 };
                  closure_2_1(closure_2_3[39]).dispatch(obj2);
                  let tmp4Result = closure_2_1(closure_2_3[39]);
                  nextPromise = closure_2_1(closure_2_3[40])(closure_1_0, closure_1_1, closure_1_2).then((result) => {
                    ({ invite, code } = result);
                    if (null != invite) {
                      const obj2 = { type: "INVITE_RESOLVE_SUCCESS", invite, code };
                      closure_1(dependencyMap[39]).dispatch(obj2);
                      const obj3 = closure_1(dependencyMap[39]);
                    } else {
                      const obj4 = { type: "INVITE_RESOLVE_FAILURE", code, banned: tmp };
                      closure_1(dependencyMap[39]).dispatch(obj4);
                      const obj = closure_1(dependencyMap[39]);
                    }
                    return { invite, code };
                  });
                  let promise = closure_2_1(closure_2_3[40])(closure_1_0, closure_1_1, closure_1_2);
                }
                return nextPromise;
              });
            } else {
              let obj2 = { type: "INVITE_RESOLVE", code: closure_1_0 };
              closure_2_1(closure_2_3[39]).dispatch(obj2);
              let tmp4Result = closure_2_1(closure_2_3[39]);
              nextPromise = closure_2_1(closure_2_3[40])(closure_1_0, closure_1_1, closure_1_2).then((result) => {
                ({ invite, code } = result);
                if (null != invite) {
                  const obj2 = { type: "INVITE_RESOLVE_SUCCESS", invite, code };
                  closure_1(dependencyMap[39]).dispatch(obj2);
                  const obj3 = closure_1(dependencyMap[39]);
                } else {
                  const obj4 = { type: "INVITE_RESOLVE_FAILURE", code, banned: tmp };
                  closure_1(dependencyMap[39]).dispatch(obj4);
                  const obj = closure_1(dependencyMap[39]);
                }
                return { invite, code };
              });
              let promise = closure_2_1(closure_2_3[40])(closure_1_0, closure_1_1, closure_1_2);
            }
            return nextPromise;
          });
        } else {
          let obj2 = { type: "INVITE_RESOLVE", code: closure_1_0 };
          closure_2_1(closure_2_3[39]).dispatch(obj2);
          let tmp4Result = closure_2_1(closure_2_3[39]);
          nextPromise = closure_2_1(closure_2_3[40])(closure_1_0, closure_1_1, closure_1_2).then((result) => {
            ({ invite, code } = result);
            if (null != invite) {
              const obj2 = { type: "INVITE_RESOLVE_SUCCESS", invite, code };
              closure_1(dependencyMap[39]).dispatch(obj2);
              const obj3 = closure_1(dependencyMap[39]);
            } else {
              const obj4 = { type: "INVITE_RESOLVE_FAILURE", code, banned: tmp };
              closure_1(dependencyMap[39]).dispatch(obj4);
              const obj = closure_1(dependencyMap[39]);
            }
            return { invite, code };
          });
          let promise = closure_2_1(closure_2_3[40])(closure_1_0, closure_1_1, closure_1_2);
        }
        return nextPromise;
      });
    } else {
      const obj2 = { type: "INVITE_RESOLVE", code };
      tmp(573).dispatch(obj2);
      const tmpResult = tmp(573);
      nextPromise = tmp(13083)(code, arg1, arg2).then((result) => {
        ({ invite, code } = result);
        if (null != invite) {
          const obj2 = { type: "INVITE_RESOLVE_SUCCESS", invite, code };
          closure_1(dependencyMap[39]).dispatch(obj2);
          const obj3 = closure_1(dependencyMap[39]);
        } else {
          const obj4 = { type: "INVITE_RESOLVE_FAILURE", code, banned: tmp };
          closure_1(dependencyMap[39]).dispatch(obj4);
          const obj = closure_1(dependencyMap[39]);
        }
        return { invite, code };
      });
      const promise = tmp(13083)(code, arg1, arg2);
    }
    return nextPromise;
  },
  getInviteContext(location, guild) {
    const obj = { location, location_guild_id: null, location_channel_id: null, location_channel_type: null };
    guild = undefined;
    if (guild != null) {
      guild = guild.guild;
    }
    let id;
    if (null != guild) {
      id = guild.guild.id;
    }
    obj.location_guild_id = id;
    let channel;
    if (guild != null) {
      channel = guild.channel;
    }
    let id1;
    if (null != channel) {
      id1 = guild.channel.id;
    }
    obj.location_channel_id = id1;
    let channel1;
    if (guild != null) {
      channel1 = guild.channel;
    }
    let type;
    if (null != channel1) {
      type = guild.channel.type;
    }
    obj.location_channel_type = type;
    return obj;
  },
  createInvite(arg0) {
    closure_0 = arg0;
    if (arg1 === undefined) {
      let obj = {};
    }
    closure_2 = arg2;
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp8 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = tmp9;
              let body;
              dependencyMap = 1;
              const obj4 = {};
              const merged = Object.assign(obj);
              const role_ids = obj4.role_ids;
              let length;
              if (role_ids != null) {
                length = role_ids.length;
              }
              if (0 === length) {
                delete tmp6[tmp4];
              }
              const HTTP = closure_0(1271).HTTP;
              const request = { url: closure_1_24.INSTANT_INVITES(closure_0), body: obj4, context: null, rejectWithError: true };
              const obj6 = { location: _location };
              request.context = obj6;
              c4 = 2;
              c5 = 1;
              const obj7 = { value: HTTP.post(request), done: false };
              return obj7;
            }
          } else if (1 === tmp9) {
            dependencyMap = 0;
            closure_128_1 = _location;
            const obj8 = { type: "INSTANT_INVITE_CREATE_FAILURE", channelId: closure_129_0 };
            tmp3(573).dispatch(obj8);
            const tmp30 = new tmp3(4541)(closure_128_1);
            throw tmp30;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 0;
            c5 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            body = value.body;
            obj = tmp3(573);
            const obj10 = { type: "INSTANT_INVITE_CREATE_SUCCESS", channelId: closure_129_0, invite: body };
            obj.dispatch(obj10);
            dependencyMap = 0;
            c5 = 3;
            const obj11 = { value: body, done: true };
            return obj11;
          }
        } catch (tmp38) {
          _location = tmp38;
          if (tmp5 === dependencyMap) {
            c5 = tmp2;
            throw tmp38;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  },
  mobileCreateInvite(c4, GROUP_DM) {
    closure_0 = c4;
    closure_1 = GROUP_DM;
    const self = this;
    return (async () => {
      invite = invite.getInvite(tmp2.id);
      if (null != invite) {
        if (!invite.isExpired()) {
          c2 = 3;
          return { value: invite.code, done: true };
        }
      }
      const invite1 = self.createInvite(tmp2.id, { max_age: v1(dependencyMap[47]).Seconds.DAY }, closure_1);
      await invite1.catch(() => v1(closure_1_3[39]).dispatch({ type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED" }));
      closure_128_0 = value;
      if (closure_128_0 != null) {
        const code = closure_128_0.code;
      }
      return code;
    })();
  },
  getAllFriendInvites(arg0) {
    closure_0 = arg0;
    return (async () => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          dependencyMap = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp5;
              let body;
              const promise = new Promise((arg0) => {
                closure_0 = arg0;
                return closure_1_1(dependencyMap[39]).wait(() => closure_0(null));
              });
              c2 = 1;
              dependencyMap = 1;
              const obj4 = { value: promise, done: false };
              return obj4;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else if (friendInvitesFetching.getFriendInvitesFetching()) {
              if (null != value) {
                value.then((body) => body.body);
              } else {
                const _Error = Error;
                const error = new Error("Invalid friend invite fetch request");
                Promise.reject(error);
              }
              dependencyMap = 3;
            } else {
              const HTTP = tmp2(1271).HTTP;
              const obj8 = { url: constants.FRIEND_INVITES, context: null, rejectWithError: null };
              const obj9 = { location: closure_129_0 };
              obj8.context = obj9;
              obj8.rejectWithError = tmp2(1271).rejectWithMigratedError();
              value = HTTP.get(obj8);
              const obj5 = tmp2(1271);
              const obj10 = { type: "FRIEND_INVITES_FETCH_REQUEST", requestedAt: null };
              const _Date = Date;
              const date = new Date();
              obj10.requestedAt = date;
              closure_1(573).dispatch(obj10);
              c2 = 2;
              dependencyMap = 1;
              const obj11 = { value, done: false };
              return obj11;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            body = value.body;
            value = null;
            const obj14 = { type: "FRIEND_INVITES_FETCH_RESPONSE", receivedAt: null, invites: null };
            const _Date2 = Date;
            const date1 = new Date();
            obj14.receivedAt = date1;
            obj14.invites = body;
            closure_1(573).dispatch(obj14);
            dependencyMap = 3;
            const obj = { value: body, done: true };
            return obj;
          }
        } catch (tmp35) {
          dependencyMap = tmp;
          throw tmp35;
        }
      }
    })();
  },
  createFriendInvite(arg0, location) {
    let obj = arg0;
    DispatcherDefault.dispatch({ type: "FRIEND_INVITE_CREATE_REQUEST" });
    const HTTP = HTTPUtils.HTTP;
    const request = { url: __initData4.FRIEND_INVITES, body: null, context: null, rejectWithError: null };
    if (arg0 == null) {
      obj = {};
    }
    request.body = obj;
    request.context = { location };
    request.rejectWithError = HTTPUtils.rejectWithMigratedError();
    const tmp3Result = HTTPUtils;
    return HTTP.post(request).then((body) => {
      body = body.body;
      DispatcherDefault.dispatch({ type: "FRIEND_INVITE_CREATE_SUCCESS", invite: body });
      return body;
    }, (error) => {
      DispatcherDefault.dispatch({ type: "FRIEND_INVITE_CREATE_FAILURE", error });
      throw error;
    });
  },
  revokeFriendInvites() {
    DispatcherDefault.dispatch({ type: "FRIEND_INVITE_REVOKE_REQUEST" });
    const HTTP = HTTPUtils.HTTP;
    const obj2 = { url: __initData4.FRIEND_INVITES, context: { location: location }, rejectWithError: null };
    const obj3 = { location: location };
    obj2.rejectWithError = HTTPUtils.rejectWithMigratedError();
    return HTTP.del(obj2).then((invites) => {
      DispatcherDefault.dispatch({ type: "FRIEND_INVITE_REVOKE_SUCCESS", invites: invites.body });
    });
  },
  revokeFriendInvite(arg0) {
    const HTTP = HTTPUtils.HTTP;
    const obj = { url: __initData4.INVITE(arg0), rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  fetchFriendMembers(arg0) {
    closure_0 = arg0;
    return (async () => {
      await tmp3(4833).get({
        url: closure_1_24.INVITE_FRIEND_MEMBERS(code),
        trackedActionData: {
          event: code(1249).NetworkActionNames.INVITE_FRIEND_MEMBERS_FETCH,
          properties(body) {
            const obj2 = { code, friend_count: null };
            let num;
            if (body != null) {
              body = body.body;
              if (body != null) {
                const friend_member_ids = body.friend_member_ids;
                if (friend_member_ids != null) {
                  num = friend_member_ids.length;
                }
              }
            }
            if (num == null) {
              num = 0;
            }
            obj2.friend_count = num;
            return code(c3[50]).exact(obj2);
          }
        },
        rejectWithError: true
      });
      if (1 === tmp7) {
        dependencyMap = 0;
        tmp3(573).dispatch({ type: "INVITE_FRIEND_MEMBERS_FETCH_FAILURE", code: closure_129_0 });
        c5 = 3;
        tmp3(573);
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 !== 2) {
        let body = value.body;
        tmp3(573).dispatch({ type: "INVITE_FRIEND_MEMBERS_FETCH_SUCCESS", code: closure_129_0, friendMemberIds: body.friend_member_ids });
        dependencyMap = 0;
        tmp3(573);
      }
      return value;
    })();
  },
  clearInviteFromStore(channelId) {
    DispatcherDefault.dispatch({ type: "INSTANT_INVITE_CLEAR", channelId });
  },
  revokeInvite(invite) {
    const code = invite.code;
    const channel = invite.channel;
    const obj2 = { url: closure_24.INVITE(code), oldFormErrors: true, trackedActionData: null, rejectWithError: null };
    const obj = channel(4833);
    obj2.trackedActionData = { event: code(1249).NetworkActionNames.INVITE_REVOKE, properties: { uses: invite.uses, max_uses: invite.maxUses, max_age: invite.maxAge, invite_type: invite.type } };
    const obj3 = { event: code(1249).NetworkActionNames.INVITE_REVOKE, properties: { uses: invite.uses, max_uses: invite.maxUses, max_age: invite.maxAge, invite_type: invite.type } };
    obj2.rejectWithError = code(1271).rejectWithMigratedError();
    const obj4 = code(1271);
    return obj.delete(obj2).then(() => {
      DispatcherDefault.dispatch({ type: "INSTANT_INVITE_REVOKE_SUCCESS", code, channelId: channel.id });
    });
  },
  acceptInvite(inviteKey) {
    inviteKey = inviteKey.inviteKey;
    _require = inviteKey;
    ({ context, callback: importDefault, skipOnboarding: importAll } = inviteKey);
    let guild_scheduled_event;
    target_channel_id = undefined;
    target_message_id = undefined;
    let guildScheduledEventId;
    let self = this;
    let result = require("InviteCodeUtils").parseInviteCodeFromInviteKey(inviteKey);
    c8 = result;
    const sessionId = AuthenticationStore.getSessionId();
    const receivedInstallationIdForInviteCode = InstantInviteStore.getReceivedInstallationIdForInviteCode(result);
    invite = InviteStore.getInvite(inviteKey);
    if (null != invite) {
      guild_scheduled_event = invite.guild_scheduled_event;
      let id;
      if (guild_scheduled_event != null) {
        id = guild_scheduled_event.id;
      }
      guildScheduledEventId = id;
      target_channel_id = invite.target_channel_id;
      target_message_id = invite.target_message_id;
      const tmp8 = id;
    } else {
      const result1 = tmp(tmp2[51]).parseExtraDataFromInviteKey(inviteKey);
      guildScheduledEventId = result1.guildScheduledEventId;
      ({ targetChannelId: target_channel_id, targetMessageId: target_message_id } = result1);
      const tmpResult = tmp(tmp2[51]);
    }
    let obj2 = {};
    let merged = Object.assign(context);
    obj2.invite_guild_scheduled_event_id = tmp8;
    const currentUser = UserStore.getCurrentUser();
    let hasFlagResult;
    if (currentUser != null) {
      hasFlagResult = currentUser.hasFlag(constants4.QUARANTINED);
    }
    if (hasFlagResult) {
      require("openQuarantineModeInfoModal")();
      let promise = new Promise((arg0, fn) => {
        const error = new Error();
        return fn(error);
      });
    } else {
      let obj3 = { type: "INVITE_ACCEPT", code: inviteKey };
      require("Dispatcher").dispatch(obj3);
      const HTTP = tmp(tmp2[45]).HTTP;
      const request = { url: closure_24.INVITE(result), context: obj2, oldFormErrors: true, body: null, rejectWithError: null };
      let obj4 = { session_id: sessionId, invite_instance_id: context.invite_instance_id, received_installation_id: receivedInstallationIdForInviteCode };
      request.body = obj4;
      const tmp13Result = require("Dispatcher");
      request.rejectWithError = tmp(tmp2[45]).rejectWithMigratedError();
      const tmpResult2 = tmp(tmp2[45]);
      _require = target_channel_id((code) => {
        c8 = 0;
        c9 = 0;
        return (function*(arg0) {
          if (c9 === 2) {
            c9 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              c9 = 2;
              if (0 === c8) {
                if (arg0 === 1) {
                  c9 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c9 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_7 = tmp5;
                  closure_6 = tmp2;
                  closure_134_0 = code;
                  closure_134_1 = undefined;
                  closure_134_2 = undefined;
                  closure_134_3 = undefined;
                  if (null != c9) {
                    const result = closure_7.clearReceivedInstallationIdForInviteCode(c8);
                  }
                  const obj4 = { type: "INVITE_ACCEPT_SUCCESS", invite: code.body, code };
                  require("Dispatcher").dispatch(obj4);
                  guild_scheduled_event = target_message_id;
                  if (target_message_id == null) {
                    guild_scheduled_event = guildScheduledEventId.getGuildScheduledEvent(closure_6);
                  }
                  const obj6 = {};
                  const merged = Object.assign(code.body);
                  obj6.guild_scheduled_event = guild_scheduled_event;
                  target_channel_id = code.body.target_channel_id;
                  if (target_channel_id == null) {
                    target_channel_id = id;
                  }
                  obj6.target_channel_id = target_channel_id;
                  target_message_id = code.body.target_message_id;
                  if (target_message_id == null) {
                    target_message_id = c5;
                  }
                  obj6.target_message_id = target_message_id;
                  closure_134_1 = obj6;
                  const guild_id = obj6.guild_id;
                  id = guild_id;
                  if (guild_id == null) {
                    const guild = obj6.guild;
                    id = undefined;
                    if (guild != null) {
                      id = guild.id;
                    }
                  }
                  closure_134_2 = id;
                  const obj5 = require("Dispatcher");
                  const tmp27 = id;
                  const flags = obj6.flags;
                  c5 = flags;
                  if (flags == null) {
                    c5 = 0;
                  }
                  if (!target_channel_id) {
                    if (!obj8.hasFlag(c5, code(tmp13[22]).GuildInviteFlags.IS_GUEST_INVITE)) {
                      if (null != tmp27) {
                        if (obj6.new_member) {
                          if (!obj6.show_verification_form) {
                            c8 = 1;
                            c9 = 1;
                            const obj7 = { value: code(tmp13[27])(tmp13[37], tmp13.paths), done: false };
                            return obj7;
                          }
                        }
                      }
                    }
                  }
                  obj8 = code(guild_scheduled_event[21]);
                }
              } else if (1 === tmp5) {
                if (arg0 === 1) {
                  c9 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c9 = 3;
                  const obj9 = { value, done: true };
                  return obj9;
                } else {
                  closure_134_3 = value.default;
                  const obj10 = { guildId: closure_134_2 };
                  c8 = 2;
                  c9 = 1;
                  const obj11 = { value: closure_134_3(obj10), done: false };
                  return obj11;
                }
              } else if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 3;
                const obj = { value, done: true };
                return obj;
              }
              if (guild_scheduled_event != null) {
                tmp32(closure_134_1);
              }
              c9 = 3;
              const obj12 = { value: closure_134_0.body, done: true };
              return obj12;
            } catch (tmp39) {
              c9 = tmp;
              throw tmp39;
            }
          }
        })();
      });
      promise = HTTP.post(request).then(function() {
        self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }, (body) => {
        body = body.body;
        code = undefined;
        if (body != null) {
          code = body.code;
        }
        if (code === constants5.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED) {
          AgeGateModalActionCreators.openAgeGateModal(AgeGateSource.JOIN_LARGE_GUILD_UNDERAGE);
        }
        const obj3 = { type: "INVITE_ACCEPT_FAILURE", code, error: null };
        const body2 = body.body;
        let message;
        if (body2 != null) {
          message = body2.message;
        }
        const obj4 = { message, code: null };
        const body3 = body.body;
        let code1;
        if (body3 != null) {
          code1 = body3.code;
        }
        obj4.code = code1;
        obj3.error = obj4;
        DispatcherDefault.dispatch(obj3);
        throw new errors_V6OrEarlierAPIErrorDefault(body);
      });
      const postResult = HTTP.post(request);
    }
    return promise;
  },
  acceptInviteAndTransitionToInviteChannel(inviteKey) {
    ({ analyticsLocations: require, callback: importDefault, autoJoin: importAll } = inviteKey);
    return this.acceptInvite({
      inviteKey: inviteKey.inviteKey,
      context: inviteKey.context,
      skipOnboarding: inviteKey.skipOnboarding,
      callback(channel) {
        if (null != channel.channel) {
          let obj = {};
          const merged = Object.assign(generateAcceptInviteOptions(channel));
          obj.autoJoin = autoJoin;
          let items = _require;
          if (_require == null) {
            items = [];
          }
          let id = channel.channel.id;
          if (items === undefined) {
            items = [];
          }
          let result = ChannelStore.addConditionalChangeListener(() => {
            transitionTo = channel.getChannel(id);
            currentUser = currentUser.getCurrentUser();
            if (null == transitionTo || null == currentUser) {
              return tmp3;
            } else {
              let guildScheduledEvent2 = transitionTo.nsfw && !currentUser.nsfwAllowed;
              if (!guildScheduledEvent2) {
                let isGuildVocalOrThreadResult = transitionTo.isGuildVocalOrThread();
                if (isGuildVocalOrThreadResult) {
                  isGuildVocalOrThreadResult = require("AgeGateUtils").maybeOpenAgeGateForVoiceChannel(tmp);
                  let obj3 = require("AgeGateUtils");
                }
                guildScheduledEvent2 = isGuildVocalOrThreadResult;
              }
              if (!guildScheduledEvent2) {
                let isGuildVocalOrThreadResult1 = transitionTo.isGuildVocalOrThread();
                if (isGuildVocalOrThreadResult1) {
                  isGuildVocalOrThreadResult1 = require("maybeOpenSpoilerGateForVoiceChannel").maybeOpenSpoilerGateForVoiceChannel(tmp);
                  let obj4 = require("maybeOpenSpoilerGateForVoiceChannel");
                }
                guildScheduledEvent2 = isGuildVocalOrThreadResult1;
              }
              let flag = !guildScheduledEvent2;
              if (!guildScheduledEvent2) {
                let guildScheduledEvent1;
                if (obj != null) {
                  guildScheduledEvent1 = tmp10.guildScheduledEvent;
                }
                if (null != guildScheduledEvent1) {
                  guildScheduledEvent2 = tmp10.guildScheduledEvent;
                  guildId = guildScheduledEvent2;
                  transitionTo = tmp10.welcomeModalChannelId;
                  flag = false;
                  if (null != guildScheduledEvent2) {
                    addPostConnectionCallback(() => {
                      obj = { guildScheduledEventId: guildId.id };
                      if (null != transitionTo) {
                        obj.welcomeModalChannelId = transitionTo;
                      }
                      const result = id(paths[38]).transitionToEventDetailsFromInvite(guildId, obj);
                      const obj2 = id(paths[38]);
                    });
                    flag = false;
                  }
                } else {
                  guildId = transitionTo.getGuildId();
                  if (guildId == null) {
                    guildId = closure_2_27;
                  }
                  closure_2 = tmp10;
                  if (items === undefined) {
                    items = [];
                  }
                  c4 = undefined;
                  targetType = undefined;
                  let targetApplicationId;
                  let isGuestInvite;
                  let GUILD_HOME;
                  closure_9 = undefined;
                  c10 = undefined;
                  guild = guild.getGuild(guildId);
                  if (guild != null) {
                    const features = guild.features;
                    const hasItem = features.has(constants2.MEMBER_VERIFICATION_MANUAL_APPROVAL);
                  }
                  let obj2 = tmp10;
                  if (tmp10 == null) {
                    obj2 = {};
                  }
                  ({ targetUserId: c4, targetType } = obj2);
                  targetApplicationId = obj2.targetApplicationId;
                  isGuestInvite = obj2.isGuestInvite;
                  if (!isGuestInvite) {
                    if (!obj2.isApplicationBypassInvite) {
                      let forceTransition;
                      if (tmp10 != null) {
                        forceTransition = tmp10.forceTransition;
                      }
                      if (!forceTransition) {
                        if (hasItem) {
                          let CHANNELResult = guildId;
                          guildScheduledEvent2 = guildId.getGuildId();
                          flag = false;
                        }
                      }
                    }
                  }
                  const type = transitionTo.type;
                  let targetChannelId;
                  channel = obj.getChannel(transitionTo.id);
                  if (tmp10 != null) {
                    targetChannelId = tmp10.targetChannelId;
                  }
                  if (null != targetChannelId) {
                    const channel1 = obj.getChannel(targetChannelId);
                    if (null != channel1) {
                      GUILD_HOME = targetChannelId;
                    }
                    closure_9 = type === constants.GUILD_STAGE_VOICE;
                    let targetChannelId1;
                    if (tmp10 != null) {
                      targetChannelId1 = tmp10.targetChannelId;
                    }
                    let tmp39;
                    if (null != targetChannelId1 && GUILD_HOME === tmp10.targetChannelId) {
                      let targetMessageId;
                      if (tmp10 != null) {
                        targetMessageId = tmp10.targetMessageId;
                      }
                      tmp39 = targetMessageId;
                    }
                    CHANNELResult = closure_2_26.CHANNEL(guildId, GUILD_HOME, tmp39);
                    c10 = CHANNELResult;
                    if (GUILD_HOME === transitionTo.id) {
                      if (closure_2_9(type)) {
                        autoJoin = undefined;
                        if (tmp10 != null) {
                          autoJoin = tmp10.autoJoin;
                        }
                        if (false !== autoJoin) {
                          addPostConnectionCallback(() => {
                            id(paths[27])(paths[26], paths.paths).then((result) => {
                              closure_0 = result.default;
                              function connect() { ... }
                              if (!closure_7) {
                                items = [closure_1_17, closure_1_23, closure_1_16];
                                if (obj.shouldShowMembershipVerificationGate(closure_0, items)) {
                                  result = guildId(analyticsLocations[35]).openMemberVerificationModal(tmp3, connect);
                                  const tmpResult = guildId(analyticsLocations[35]);
                                }
                                obj = guildId(analyticsLocations[34]);
                                tmp3 = closure_0;
                              }
                              connect();
                            });
                          });
                        }
                        if (tmp38) {
                          if (guildId !== closure_2_27) {
                            transitionTo = function runDeepLinkJump() {
                              obj = closure_2;
                              if (closure_2 == null) {
                                obj = {};
                              }
                              ({ transitionTo, welcomeModalChannelId, guildScheduledEvent } = obj);
                              const obj2 = { source: obj(paths[24]).INVITE_ACCEPT, navigationReplace: true, openChannel: true };
                              if (null != welcomeModalChannelId) {
                                obj2.welcomeModalChannelId = welcomeModalChannelId;
                              }
                              if (transitionTo.type === constants.GUILD_STAGE_VOICE) {
                                const obj3 = { stageInviteKey };
                                obj2.state = obj3;
                              }
                              if (null != guildScheduledEvent) {
                                obj2.guildScheduledEventId = guildScheduledEvent.id;
                              }
                              if (null != transitionTo) {
                                let transitionToResult = transitionTo(c10, obj2);
                              } else {
                                transitionToResult = id(paths[25]).transitionTo(c10, obj2);
                                const obj4 = id(paths[25]);
                              }
                              return transitionToResult;
                            };
                            CHANNELResult = require("asyncRequireImpl")(paths[37], paths.paths);
                            guildScheduledEvent2 = CHANNELResult.then((result) => result.default({ guildId }));
                            guildScheduledEvent2.then(transitionTo, transitionTo);
                            flag = false;
                          }
                          guildScheduledEvent2 = transitionTo(CHANNELResult, guildScheduledEvent2);
                          flag = false;
                        }
                        let obj5 = tmp10;
                        if (tmp10 == null) {
                          obj5 = {};
                        }
                        ({ transitionTo, welcomeModalChannelId, guildScheduledEvent } = obj5);
                        guildScheduledEvent2 = { source: require("RoutingSources").INVITE_ACCEPT, navigationReplace: true };
                        if (tmp38) {
                          guildScheduledEvent2.openChannel = true;
                        }
                        if (null != welcomeModalChannelId) {
                          guildScheduledEvent2.welcomeModalChannelId = welcomeModalChannelId;
                        }
                        if (transitionTo.type === constants.GUILD_STAGE_VOICE) {
                          const obj9 = { stageInviteKey };
                          guildScheduledEvent2.state = obj9;
                        }
                        if (null != guildScheduledEvent) {
                          guildScheduledEvent2.guildScheduledEventId = guildScheduledEvent.id;
                        }
                        if (null == transitionTo) {
                          require("router_utils").transitionTo(CHANNELResult, guildScheduledEvent2);
                          flag = false;
                          const obj13 = require("router_utils");
                        }
                      }
                    }
                    let result = require("ActivitiesInTextUtils").isActivityInTextSupportedForChannel(channel);
                    if (result) {
                      result = targetType === constants5.EMBEDDED_APPLICATION;
                    }
                    if (result) {
                      result = null != targetApplicationId;
                    }
                    if (result) {
                      let tmp47 = guildId;
                      if (guildId == null) {
                        tmp47 = closure_2_27;
                      }
                      require("router_utils").transitionTo(closure_2_26.CHANNEL(tmp47, GUILD_HOME));
                      const obj10 = { channelId: GUILD_HOME, applicationId: targetApplicationId, intent: null, inviterUserId: null, analyticsLocations: null, commandOrigin: null };
                      let intent;
                      const tmp43Result = require("router_utils");
                      if (tmp10 != null) {
                        intent = tmp10.intent;
                      }
                      obj10.intent = intent;
                      let inviterUserId;
                      if (tmp10 != null) {
                        inviterUserId = tmp10.inviterUserId;
                      }
                      obj10.inviterUserId = inviterUserId;
                      obj10.analyticsLocations = items;
                      obj10.commandOrigin = require("ApplicationCommandTypes").CommandOrigin.CHAT;
                      require("deferJoinActivityInChannel")(obj10);
                      const tmp50 = require("deferJoinActivityInChannel");
                    }
                    const obj8 = require("ActivitiesInTextUtils");
                  }
                  let targetType1;
                  if (tmp10 != null) {
                    targetType1 = tmp10.targetType;
                  }
                  if (null == targetType1) {
                    if (!closure_2_9(transitionTo.type)) {
                      if (obj6.canSeeOnboardingHome(guildId)) {
                        GUILD_HOME = constants4.GUILD_HOME;
                      }
                      obj6 = require("OnboardingHomeUtils");
                    }
                  }
                  const channel2 = obj.getChannel(transitionTo.id);
                  if (PermissionStore.can(closure_2_12(transitionTo.type), channel2)) {
                    id = transitionTo.id;
                  } else {
                    defaultChannel = defaultChannel.getDefaultChannel(guildId, true, constants3.CREATE_INSTANT_INVITE);
                    id = undefined;
                    if (defaultChannel != null) {
                      id = defaultChannel.id;
                    }
                    if (id == null) {
                      id = transitionTo.id;
                    }
                  }
                }
              }
            }
          });
        }
        if (null != importDefault) {
          tmp7(channel);
        }
      }
    });
  },
  transitionToInvite(flags, arg1) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    ({ transitionTo, muteOnJoinVoiceChannel, intent, forceTransition } = obj);
    ({ channel, guild, inviter } = flags);
    if (null == channel) {
      if (null == guild) {
        if (null != inviter) {
          let dMFromUserId = null;
          if (RelationshipStore.isFriend(inviter.id)) {
            dMFromUserId = ChannelStore.getDMFromUserId(inviter.id);
          }
          if (null != dMFromUserId) {
            closure_2 = [];
            const result = ChannelStore.addConditionalChangeListener(() => {
              transitionTo = channel.getChannel(id);
              currentUser = currentUser.getCurrentUser();
              if (null == transitionTo || null == currentUser) {
                return tmp3;
              } else {
                let guildScheduledEvent2 = transitionTo.nsfw && !currentUser.nsfwAllowed;
                if (!guildScheduledEvent2) {
                  let isGuildVocalOrThreadResult = transitionTo.isGuildVocalOrThread();
                  if (isGuildVocalOrThreadResult) {
                    isGuildVocalOrThreadResult = require("AgeGateUtils").maybeOpenAgeGateForVoiceChannel(tmp);
                    let obj3 = require("AgeGateUtils");
                  }
                  guildScheduledEvent2 = isGuildVocalOrThreadResult;
                }
                if (!guildScheduledEvent2) {
                  let isGuildVocalOrThreadResult1 = transitionTo.isGuildVocalOrThread();
                  if (isGuildVocalOrThreadResult1) {
                    isGuildVocalOrThreadResult1 = require("maybeOpenSpoilerGateForVoiceChannel").maybeOpenSpoilerGateForVoiceChannel(tmp);
                    let obj4 = require("maybeOpenSpoilerGateForVoiceChannel");
                  }
                  guildScheduledEvent2 = isGuildVocalOrThreadResult1;
                }
                let flag = !guildScheduledEvent2;
                if (!guildScheduledEvent2) {
                  let guildScheduledEvent1;
                  if (obj != null) {
                    guildScheduledEvent1 = tmp10.guildScheduledEvent;
                  }
                  if (null != guildScheduledEvent1) {
                    guildScheduledEvent2 = tmp10.guildScheduledEvent;
                    guildId = guildScheduledEvent2;
                    transitionTo = tmp10.welcomeModalChannelId;
                    flag = false;
                    if (null != guildScheduledEvent2) {
                      addPostConnectionCallback(() => {
                        obj = { guildScheduledEventId: guildId.id };
                        if (null != transitionTo) {
                          obj.welcomeModalChannelId = transitionTo;
                        }
                        const result = id(paths[38]).transitionToEventDetailsFromInvite(guildId, obj);
                        const obj2 = id(paths[38]);
                      });
                      flag = false;
                    }
                  } else {
                    guildId = transitionTo.getGuildId();
                    if (guildId == null) {
                      guildId = closure_2_27;
                    }
                    closure_2 = tmp10;
                    if (items === undefined) {
                      items = [];
                    }
                    c4 = undefined;
                    targetType = undefined;
                    let targetApplicationId;
                    let isGuestInvite;
                    let GUILD_HOME;
                    closure_9 = undefined;
                    c10 = undefined;
                    guild = guild.getGuild(guildId);
                    if (guild != null) {
                      const features = guild.features;
                      const hasItem = features.has(constants2.MEMBER_VERIFICATION_MANUAL_APPROVAL);
                    }
                    let obj2 = tmp10;
                    if (tmp10 == null) {
                      obj2 = {};
                    }
                    ({ targetUserId: c4, targetType } = obj2);
                    targetApplicationId = obj2.targetApplicationId;
                    isGuestInvite = obj2.isGuestInvite;
                    if (!isGuestInvite) {
                      if (!obj2.isApplicationBypassInvite) {
                        let forceTransition;
                        if (tmp10 != null) {
                          forceTransition = tmp10.forceTransition;
                        }
                        if (!forceTransition) {
                          if (hasItem) {
                            let CHANNELResult = guildId;
                            guildScheduledEvent2 = guildId.getGuildId();
                            flag = false;
                          }
                        }
                      }
                    }
                    const type = transitionTo.type;
                    let targetChannelId;
                    channel = obj.getChannel(transitionTo.id);
                    if (tmp10 != null) {
                      targetChannelId = tmp10.targetChannelId;
                    }
                    if (null != targetChannelId) {
                      const channel1 = obj.getChannel(targetChannelId);
                      if (null != channel1) {
                        GUILD_HOME = targetChannelId;
                      }
                      closure_9 = type === constants.GUILD_STAGE_VOICE;
                      let targetChannelId1;
                      if (tmp10 != null) {
                        targetChannelId1 = tmp10.targetChannelId;
                      }
                      let tmp39;
                      if (null != targetChannelId1 && GUILD_HOME === tmp10.targetChannelId) {
                        let targetMessageId;
                        if (tmp10 != null) {
                          targetMessageId = tmp10.targetMessageId;
                        }
                        tmp39 = targetMessageId;
                      }
                      CHANNELResult = closure_2_26.CHANNEL(guildId, GUILD_HOME, tmp39);
                      c10 = CHANNELResult;
                      if (GUILD_HOME === transitionTo.id) {
                        if (closure_2_9(type)) {
                          autoJoin = undefined;
                          if (tmp10 != null) {
                            autoJoin = tmp10.autoJoin;
                          }
                          if (false !== autoJoin) {
                            addPostConnectionCallback(() => {
                              id(paths[27])(paths[26], paths.paths).then((result) => {
                                closure_0 = result.default;
                                function connect() {
                                  if (closure_2_9) {
                                    if (closure_2_1 instanceof closure_3_11) {
                                      let tmp44 = closure_2_1;
                                    } else {
                                      tmp44 = c10(closure_2_1);
                                    }
                                    guildId(items[28]).connectAndOpen(tmp44);
                                    const obj6 = guildId(items[28]);
                                    guildId(items[25]).transitionTo(closure_2_10);
                                    const obj7 = guildId(items[25]);
                                  } else {
                                    let prop;
                                    if (closure_2_2 != null) {
                                      prop = closure_2_2.muteOnJoinVoiceChannel;
                                    }
                                    if (prop) {
                                      transitionTo(items[29]).setSelfMute(guildId(items[30]).MediaEngineContextTypes.DEFAULT, true);
                                      obj = transitionTo(items[29]);
                                    }
                                    const voiceChannel = closure_0.selectVoiceChannel(GUILD_HOME);
                                    let tmp14 = targetType === constants2.STREAM;
                                    if (tmp14) {
                                      tmp14 = null != ownerId;
                                    }
                                    if (tmp14) {
                                      const obj3 = { streamType: constants.GUILD, ownerId, guildId, channelId: GUILD_HOME };
                                      const result = closure_2(items[31]).watchStreamAndTransitionToStream(obj3);
                                      const obj2 = closure_2(items[31]);
                                    }
                                    let tmp22 = targetType === constants2.EMBEDDED_APPLICATION;
                                    if (tmp22) {
                                      tmp22 = null != applicationId;
                                    }
                                    if (tmp22) {
                                      let tmp27 = guildId;
                                      if (guildId == null) {
                                        tmp27 = closure_3_27;
                                      }
                                      guildId(items[25]).transitionTo(closure_3_26.CHANNEL(tmp27, GUILD_HOME));
                                      const obj5 = { channelId: GUILD_HOME, applicationId, intent: null, inviterUserId: null, analyticsLocations: null, commandOrigin: null };
                                      let intent;
                                      const obj4 = guildId(items[25]);
                                      if (closure_2_2 != null) {
                                        intent = closure_2_2.intent;
                                      }
                                      obj5.intent = intent;
                                      let inviterUserId;
                                      if (closure_2_2 != null) {
                                        inviterUserId = closure_2_2.inviterUserId;
                                      }
                                      obj5.inviterUserId = inviterUserId;
                                      obj5.analyticsLocations = analyticsLocations;
                                      obj5.commandOrigin = guildId(items[33]).CommandOrigin.CHAT;
                                      transitionTo(items[32])(obj5);
                                      const tmp31 = transitionTo(items[32]);
                                    }
                                  }
                                }
                                if (!closure_7) {
                                  items = [closure_1_17, closure_1_23, closure_1_16];
                                  if (obj.shouldShowMembershipVerificationGate(closure_0, items)) {
                                    result = guildId(analyticsLocations[35]).openMemberVerificationModal(tmp3, connect);
                                    const tmpResult = guildId(analyticsLocations[35]);
                                  }
                                  obj = guildId(analyticsLocations[34]);
                                  tmp3 = closure_0;
                                }
                                connect();
                              });
                            });
                          }
                          if (tmp38) {
                            if (guildId !== closure_2_27) {
                              transitionTo = function runDeepLinkJump() {
                                obj = closure_2;
                                if (closure_2 == null) {
                                  obj = {};
                                }
                                ({ transitionTo, welcomeModalChannelId, guildScheduledEvent } = obj);
                                const obj2 = { source: obj(paths[24]).INVITE_ACCEPT, navigationReplace: true, openChannel: true };
                                if (null != welcomeModalChannelId) {
                                  obj2.welcomeModalChannelId = welcomeModalChannelId;
                                }
                                if (transitionTo.type === constants.GUILD_STAGE_VOICE) {
                                  const obj3 = { stageInviteKey };
                                  obj2.state = obj3;
                                }
                                if (null != guildScheduledEvent) {
                                  obj2.guildScheduledEventId = guildScheduledEvent.id;
                                }
                                if (null != transitionTo) {
                                  let transitionToResult = transitionTo(c10, obj2);
                                } else {
                                  transitionToResult = id(paths[25]).transitionTo(c10, obj2);
                                  const obj4 = id(paths[25]);
                                }
                                return transitionToResult;
                              };
                              CHANNELResult = require("asyncRequireImpl")(paths[37], paths.paths);
                              guildScheduledEvent2 = CHANNELResult.then((result) => result.default({ guildId }));
                              guildScheduledEvent2.then(transitionTo, transitionTo);
                              flag = false;
                            }
                            guildScheduledEvent2 = transitionTo(CHANNELResult, guildScheduledEvent2);
                            flag = false;
                          }
                          let obj5 = tmp10;
                          if (tmp10 == null) {
                            obj5 = {};
                          }
                          ({ transitionTo, welcomeModalChannelId, guildScheduledEvent } = obj5);
                          guildScheduledEvent2 = { source: require("RoutingSources").INVITE_ACCEPT, navigationReplace: true };
                          if (tmp38) {
                            guildScheduledEvent2.openChannel = true;
                          }
                          if (null != welcomeModalChannelId) {
                            guildScheduledEvent2.welcomeModalChannelId = welcomeModalChannelId;
                          }
                          if (transitionTo.type === constants.GUILD_STAGE_VOICE) {
                            const obj9 = { stageInviteKey };
                            guildScheduledEvent2.state = obj9;
                          }
                          if (null != guildScheduledEvent) {
                            guildScheduledEvent2.guildScheduledEventId = guildScheduledEvent.id;
                          }
                          if (null == transitionTo) {
                            require("router_utils").transitionTo(CHANNELResult, guildScheduledEvent2);
                            flag = false;
                            const obj13 = require("router_utils");
                          }
                        }
                      }
                      let result = require("ActivitiesInTextUtils").isActivityInTextSupportedForChannel(channel);
                      if (result) {
                        result = targetType === constants5.EMBEDDED_APPLICATION;
                      }
                      if (result) {
                        result = null != targetApplicationId;
                      }
                      if (result) {
                        let tmp47 = guildId;
                        if (guildId == null) {
                          tmp47 = closure_2_27;
                        }
                        require("router_utils").transitionTo(closure_2_26.CHANNEL(tmp47, GUILD_HOME));
                        const obj10 = { channelId: GUILD_HOME, applicationId: targetApplicationId, intent: null, inviterUserId: null, analyticsLocations: null, commandOrigin: null };
                        let intent;
                        const tmp43Result = require("router_utils");
                        if (tmp10 != null) {
                          intent = tmp10.intent;
                        }
                        obj10.intent = intent;
                        let inviterUserId;
                        if (tmp10 != null) {
                          inviterUserId = tmp10.inviterUserId;
                        }
                        obj10.inviterUserId = inviterUserId;
                        obj10.analyticsLocations = items;
                        obj10.commandOrigin = require("ApplicationCommandTypes").CommandOrigin.CHAT;
                        require("deferJoinActivityInChannel")(obj10);
                        const tmp50 = require("deferJoinActivityInChannel");
                      }
                      const obj8 = require("ActivitiesInTextUtils");
                    }
                    let targetType1;
                    if (tmp10 != null) {
                      targetType1 = tmp10.targetType;
                    }
                    if (null == targetType1) {
                      if (!closure_2_9(transitionTo.type)) {
                        if (obj6.canSeeOnboardingHome(guildId)) {
                          GUILD_HOME = constants4.GUILD_HOME;
                        }
                        obj6 = require("OnboardingHomeUtils");
                      }
                    }
                    const channel2 = obj.getChannel(transitionTo.id);
                    if (PermissionStore.can(closure_2_12(transitionTo.type), channel2)) {
                      id = transitionTo.id;
                    } else {
                      defaultChannel = defaultChannel.getDefaultChannel(guildId, true, constants3.CREATE_INSTANT_INVITE);
                      id = undefined;
                      if (defaultChannel != null) {
                        id = defaultChannel.id;
                      }
                      if (id == null) {
                        id = transitionTo.id;
                      }
                    }
                  }
                }
              }
            });
          }
        }
      }
    }
    if (null != guild) {
      const features = guild.features;
      let hasItem;
      if (features != null) {
        hasItem = features.includes(constants2.HUB);
      }
      if (hasItem) {
        obj(13086).onOpenHubInvite(flags);
        const obj6 = obj(13086);
      }
    }
    let num = flags.flags;
    if (num == null) {
      num = 0;
    }
    let hasFlagResult = dMFromUserId(1385).hasFlag(num, dMFromUserId(8541).GuildInviteFlags.IS_GUEST_INVITE);
    if (!hasFlagResult) {
      hasFlagResult = tmp6(1385).hasFlag(num, tmp6(8541).GuildInviteFlags.IS_APPLICATION_BYPASS);
      const tmp6Result = tmp6(1385);
    }
    if (null != guild) {
      if (!hasFlagResult) {
        if (flags.new_member) {
          if (tmp6Result3.inviteGuildHasPendingMemberDisabledVerification(guild)) {
            const result1 = tmp6(13087).openVerificationModalOrTransitionToApplication(guild.id);
            const tmp6Result4 = tmp6(13087);
          }
          tmp6Result3 = tmp6(13087);
        }
      }
    }
    if (null != channel) {
      const tmp18 = generateAcceptInviteOptions(flags);
      if (null != transitionTo) {
        tmp18.transitionTo = transitionTo;
      }
      if (null != intent) {
        tmp18.intent = intent;
      }
      if (null != muteOnJoinVoiceChannel) {
        tmp18.muteOnJoinVoiceChannel = muteOnJoinVoiceChannel;
      }
      if (null != forceTransition) {
        tmp18.forceTransition = forceTransition;
      }
      const id = channel.id;
      closure_129_1 = tmp18;
      closure_129_2 = [];
      const result2 = ChannelStore.addConditionalChangeListener(() => {
        transitionTo = channel.getChannel(id);
        currentUser = currentUser.getCurrentUser();
        if (null == transitionTo || null == currentUser) {
          return tmp3;
        } else {
          let guildScheduledEvent2 = transitionTo.nsfw && !currentUser.nsfwAllowed;
          if (!guildScheduledEvent2) {
            let isGuildVocalOrThreadResult = transitionTo.isGuildVocalOrThread();
            if (isGuildVocalOrThreadResult) {
              isGuildVocalOrThreadResult = require("AgeGateUtils").maybeOpenAgeGateForVoiceChannel(tmp);
              let obj3 = require("AgeGateUtils");
            }
            guildScheduledEvent2 = isGuildVocalOrThreadResult;
          }
          if (!guildScheduledEvent2) {
            let isGuildVocalOrThreadResult1 = transitionTo.isGuildVocalOrThread();
            if (isGuildVocalOrThreadResult1) {
              isGuildVocalOrThreadResult1 = require("maybeOpenSpoilerGateForVoiceChannel").maybeOpenSpoilerGateForVoiceChannel(tmp);
              let obj4 = require("maybeOpenSpoilerGateForVoiceChannel");
            }
            guildScheduledEvent2 = isGuildVocalOrThreadResult1;
          }
          let flag = !guildScheduledEvent2;
          if (!guildScheduledEvent2) {
            let guildScheduledEvent1;
            if (obj != null) {
              guildScheduledEvent1 = tmp10.guildScheduledEvent;
            }
            if (null != guildScheduledEvent1) {
              guildScheduledEvent2 = tmp10.guildScheduledEvent;
              guildId = guildScheduledEvent2;
              transitionTo = tmp10.welcomeModalChannelId;
              flag = false;
              if (null != guildScheduledEvent2) {
                addPostConnectionCallback(() => {
                  obj = { guildScheduledEventId: guildId.id };
                  if (null != transitionTo) {
                    obj.welcomeModalChannelId = transitionTo;
                  }
                  const result = id(paths[38]).transitionToEventDetailsFromInvite(guildId, obj);
                  const obj2 = id(paths[38]);
                });
                flag = false;
              }
            } else {
              guildId = transitionTo.getGuildId();
              if (guildId == null) {
                guildId = closure_2_27;
              }
              closure_2 = tmp10;
              if (items === undefined) {
                items = [];
              }
              c4 = undefined;
              targetType = undefined;
              let targetApplicationId;
              let isGuestInvite;
              let GUILD_HOME;
              closure_9 = undefined;
              c10 = undefined;
              guild = guild.getGuild(guildId);
              if (guild != null) {
                const features = guild.features;
                const hasItem = features.has(constants2.MEMBER_VERIFICATION_MANUAL_APPROVAL);
              }
              let obj2 = tmp10;
              if (tmp10 == null) {
                obj2 = {};
              }
              ({ targetUserId: c4, targetType } = obj2);
              targetApplicationId = obj2.targetApplicationId;
              isGuestInvite = obj2.isGuestInvite;
              if (!isGuestInvite) {
                if (!obj2.isApplicationBypassInvite) {
                  let forceTransition;
                  if (tmp10 != null) {
                    forceTransition = tmp10.forceTransition;
                  }
                  if (!forceTransition) {
                    if (hasItem) {
                      let CHANNELResult = guildId;
                      guildScheduledEvent2 = guildId.getGuildId();
                      flag = false;
                    }
                  }
                }
              }
              const type = transitionTo.type;
              let targetChannelId;
              channel = obj.getChannel(transitionTo.id);
              if (tmp10 != null) {
                targetChannelId = tmp10.targetChannelId;
              }
              if (null != targetChannelId) {
                const channel1 = obj.getChannel(targetChannelId);
                if (null != channel1) {
                  GUILD_HOME = targetChannelId;
                }
                closure_9 = type === constants.GUILD_STAGE_VOICE;
                let targetChannelId1;
                if (tmp10 != null) {
                  targetChannelId1 = tmp10.targetChannelId;
                }
                let tmp39;
                if (null != targetChannelId1 && GUILD_HOME === tmp10.targetChannelId) {
                  let targetMessageId;
                  if (tmp10 != null) {
                    targetMessageId = tmp10.targetMessageId;
                  }
                  tmp39 = targetMessageId;
                }
                CHANNELResult = closure_2_26.CHANNEL(guildId, GUILD_HOME, tmp39);
                c10 = CHANNELResult;
                if (GUILD_HOME === transitionTo.id) {
                  if (closure_2_9(type)) {
                    autoJoin = undefined;
                    if (tmp10 != null) {
                      autoJoin = tmp10.autoJoin;
                    }
                    if (false !== autoJoin) {
                      addPostConnectionCallback(() => {
                        id(paths[27])(paths[26], paths.paths).then((result) => {
                          closure_0 = result.default;
                          function connect() {
                            if (closure_2_9) {
                              if (closure_2_1 instanceof closure_3_11) {
                                let tmp44 = closure_2_1;
                              } else {
                                tmp44 = c10(closure_2_1);
                              }
                              guildId(items[28]).connectAndOpen(tmp44);
                              const obj6 = guildId(items[28]);
                              guildId(items[25]).transitionTo(closure_2_10);
                              const obj7 = guildId(items[25]);
                            } else {
                              let prop;
                              if (closure_2_2 != null) {
                                prop = closure_2_2.muteOnJoinVoiceChannel;
                              }
                              if (prop) {
                                transitionTo(items[29]).setSelfMute(guildId(items[30]).MediaEngineContextTypes.DEFAULT, true);
                                obj = transitionTo(items[29]);
                              }
                              const voiceChannel = closure_0.selectVoiceChannel(GUILD_HOME);
                              let tmp14 = targetType === constants2.STREAM;
                              if (tmp14) {
                                tmp14 = null != ownerId;
                              }
                              if (tmp14) {
                                const obj3 = { streamType: constants.GUILD, ownerId, guildId, channelId: GUILD_HOME };
                                const result = closure_2(items[31]).watchStreamAndTransitionToStream(obj3);
                                const obj2 = closure_2(items[31]);
                              }
                              let tmp22 = targetType === constants2.EMBEDDED_APPLICATION;
                              if (tmp22) {
                                tmp22 = null != applicationId;
                              }
                              if (tmp22) {
                                let tmp27 = guildId;
                                if (guildId == null) {
                                  tmp27 = closure_3_27;
                                }
                                guildId(items[25]).transitionTo(closure_3_26.CHANNEL(tmp27, GUILD_HOME));
                                const obj5 = { channelId: GUILD_HOME, applicationId, intent: null, inviterUserId: null, analyticsLocations: null, commandOrigin: null };
                                let intent;
                                const obj4 = guildId(items[25]);
                                if (closure_2_2 != null) {
                                  intent = closure_2_2.intent;
                                }
                                obj5.intent = intent;
                                let inviterUserId;
                                if (closure_2_2 != null) {
                                  inviterUserId = closure_2_2.inviterUserId;
                                }
                                obj5.inviterUserId = inviterUserId;
                                obj5.analyticsLocations = analyticsLocations;
                                obj5.commandOrigin = guildId(items[33]).CommandOrigin.CHAT;
                                transitionTo(items[32])(obj5);
                                const tmp31 = transitionTo(items[32]);
                              }
                            }
                          }
                          if (!closure_7) {
                            items = [closure_1_17, closure_1_23, closure_1_16];
                            if (obj.shouldShowMembershipVerificationGate(closure_0, items)) {
                              result = guildId(analyticsLocations[35]).openMemberVerificationModal(tmp3, connect);
                              const tmpResult = guildId(analyticsLocations[35]);
                            }
                            obj = guildId(analyticsLocations[34]);
                            tmp3 = closure_0;
                          }
                          connect();
                        });
                      });
                    }
                    if (tmp38) {
                      if (guildId !== closure_2_27) {
                        transitionTo = function runDeepLinkJump() {
                          obj = closure_2;
                          if (closure_2 == null) {
                            obj = {};
                          }
                          ({ transitionTo, welcomeModalChannelId, guildScheduledEvent } = obj);
                          const obj2 = { source: obj(paths[24]).INVITE_ACCEPT, navigationReplace: true, openChannel: true };
                          if (null != welcomeModalChannelId) {
                            obj2.welcomeModalChannelId = welcomeModalChannelId;
                          }
                          if (transitionTo.type === constants.GUILD_STAGE_VOICE) {
                            const obj3 = { stageInviteKey };
                            obj2.state = obj3;
                          }
                          if (null != guildScheduledEvent) {
                            obj2.guildScheduledEventId = guildScheduledEvent.id;
                          }
                          if (null != transitionTo) {
                            let transitionToResult = transitionTo(c10, obj2);
                          } else {
                            transitionToResult = id(paths[25]).transitionTo(c10, obj2);
                            const obj4 = id(paths[25]);
                          }
                          return transitionToResult;
                        };
                        CHANNELResult = require("asyncRequireImpl")(paths[37], paths.paths);
                        guildScheduledEvent2 = CHANNELResult.then((result) => result.default({ guildId }));
                        guildScheduledEvent2.then(transitionTo, transitionTo);
                        flag = false;
                      }
                      guildScheduledEvent2 = transitionTo(CHANNELResult, guildScheduledEvent2);
                      flag = false;
                    }
                    let obj5 = tmp10;
                    if (tmp10 == null) {
                      obj5 = {};
                    }
                    ({ transitionTo, welcomeModalChannelId, guildScheduledEvent } = obj5);
                    guildScheduledEvent2 = { source: require("RoutingSources").INVITE_ACCEPT, navigationReplace: true };
                    if (tmp38) {
                      guildScheduledEvent2.openChannel = true;
                    }
                    if (null != welcomeModalChannelId) {
                      guildScheduledEvent2.welcomeModalChannelId = welcomeModalChannelId;
                    }
                    if (transitionTo.type === constants.GUILD_STAGE_VOICE) {
                      const obj9 = { stageInviteKey };
                      guildScheduledEvent2.state = obj9;
                    }
                    if (null != guildScheduledEvent) {
                      guildScheduledEvent2.guildScheduledEventId = guildScheduledEvent.id;
                    }
                    if (null == transitionTo) {
                      require("router_utils").transitionTo(CHANNELResult, guildScheduledEvent2);
                      flag = false;
                      const obj13 = require("router_utils");
                    }
                  }
                }
                let result = require("ActivitiesInTextUtils").isActivityInTextSupportedForChannel(channel);
                if (result) {
                  result = targetType === constants5.EMBEDDED_APPLICATION;
                }
                if (result) {
                  result = null != targetApplicationId;
                }
                if (result) {
                  let tmp47 = guildId;
                  if (guildId == null) {
                    tmp47 = closure_2_27;
                  }
                  require("router_utils").transitionTo(closure_2_26.CHANNEL(tmp47, GUILD_HOME));
                  const obj10 = { channelId: GUILD_HOME, applicationId: targetApplicationId, intent: null, inviterUserId: null, analyticsLocations: null, commandOrigin: null };
                  let intent;
                  const tmp43Result = require("router_utils");
                  if (tmp10 != null) {
                    intent = tmp10.intent;
                  }
                  obj10.intent = intent;
                  let inviterUserId;
                  if (tmp10 != null) {
                    inviterUserId = tmp10.inviterUserId;
                  }
                  obj10.inviterUserId = inviterUserId;
                  obj10.analyticsLocations = items;
                  obj10.commandOrigin = require("ApplicationCommandTypes").CommandOrigin.CHAT;
                  require("deferJoinActivityInChannel")(obj10);
                  const tmp50 = require("deferJoinActivityInChannel");
                }
                const obj8 = require("ActivitiesInTextUtils");
              }
              let targetType1;
              if (tmp10 != null) {
                targetType1 = tmp10.targetType;
              }
              if (null == targetType1) {
                if (!closure_2_9(transitionTo.type)) {
                  if (obj6.canSeeOnboardingHome(guildId)) {
                    GUILD_HOME = constants4.GUILD_HOME;
                  }
                  obj6 = require("OnboardingHomeUtils");
                }
              }
              const channel2 = obj.getChannel(transitionTo.id);
              if (PermissionStore.can(closure_2_12(transitionTo.type), channel2)) {
                id = transitionTo.id;
              } else {
                defaultChannel = defaultChannel.getDefaultChannel(guildId, true, constants3.CREATE_INSTANT_INVITE);
                id = undefined;
                if (defaultChannel != null) {
                  id = defaultChannel.id;
                }
                if (id == null) {
                  id = transitionTo.id;
                }
              }
            }
          }
        }
      });
    }
    const obj2 = dMFromUserId(1385);
  },
  openNativeAppModal(inviteKey) {
    const result = InviteCodeUtils.parseExtraDataFromInviteKey(inviteKey);
    const obj2 = { installationId: AuthenticationStore.getInstallationForTracking(), targetChannelId: result.targetChannelId, targetMessageId: result.targetMessageId, guildScheduledEventId: result.guildScheduledEventId };
    CodedLinkActionCreatorsDefault.openNativeAppModal(result.baseCode, constants.INVITE_BROWSER, obj2);
  },
  transitionToInviteOnboarding(baseCode) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    let transitionTo = obj.transitionTo;
    if (undefined === transitionTo) {
      transitionTo = router_utils.transitionTo;
    }
    const obj3 = { baseCode: baseCode.code, targetChannelId: null, targetMessageId: null, guildScheduledEventId: null };
    const target_channel_id = baseCode.target_channel_id;
    obj3.targetChannelId = target_channel_id;
    const target_message_id = baseCode.target_message_id;
    obj3.targetMessageId = target_message_id;
    const guild_scheduled_event = baseCode.guild_scheduled_event;
    let id;
    if (guild_scheduled_event != null) {
      id = guild_scheduled_event.id;
    }
    obj3.guildScheduledEventId = id;
    const inviteKeyFromExtraData = InviteCodeUtils.generateInviteKeyFromExtraData(obj3);
    const obj4 = { search: null };
    const result = dependencyMap.APP_WITH_INVITE_AND_GUILD_ONBOARDING(baseCode.code);
    obj4.search = InviteCodeUtils.getInviteKeySearchSuffix(inviteKeyFromExtraData);
    transitionTo(result, obj4);
    const tmp3Result = InviteCodeUtils;
  },
  openApp(code, targetChannelId, fingerprint, username, inviteType) {
    _require = code;
    let result = null;
    if (null != code) {
      result = require("InviteCodeUtils").parseExtraDataFromInviteKey(code);
      let obj = require("InviteCodeUtils");
    }
    let baseCode;
    if (result != null) {
      baseCode = result.baseCode;
    }
    let targetMessageId;
    if (result != null) {
      targetMessageId = result.targetMessageId;
    }
    targetChannelId = undefined;
    if (result != null) {
      targetChannelId = result.targetChannelId;
    }
    DispatcherDefault.dispatch({ type: "INVITE_APP_OPENING", code });
    if (null != _modDef4963.ua) {
      const formatted = _modDef4963.ua.toLowerCase();
      if (formatted.indexOf("googlebot") > -1) {
        const obj6 = { type: "INVITE_APP_NOT_OPENED", code };
        DispatcherDefault.dispatch(obj6);
        const tmp7Result = DispatcherDefault;
      }
    }
    const os = _modDef4963.os;
    let family;
    if (os != null) {
      family = os.family;
    }
    if ("Android" !== family) {
      const os2 = _modDef4963.os;
      let family1;
      if (os2 != null) {
        family1 = os2.family;
      }
      if ("iOS" !== family1) {
        if (!require("shared/PlatformUtils").isTablet) {
          let tmp13 = targetChannelId;
          if (targetChannelId == null) {
            tmp13 = targetChannelId;
          }
          let str4 = "";
          if (null != tmp13) {
            str4 = closure_26.INVITE_PROXY(tmp13, targetMessageId);
          }
          let substr = str4;
          if ("#" === str4[0]) {
            substr = str4.slice(1);
          }
          const _HermesInternal = HermesInternal;
          let combined = "discord://" + substr;
        }
        ProtocolUtilsDefault.launch(combined, (arg0) => {
          if (arg0) {
            const obj2 = { type: "INVITE_APP_OPENED", code };
            let obj3 = obj2;
          } else {
            obj3 = { type: "INVITE_APP_NOT_OPENED", code };
          }
          DispatcherDefault.dispatch(obj3);
        });
        const tmp7Result4 = ProtocolUtilsDefault;
      }
    }
    if (null != baseCode) {
      let inviteDynamicLinkTemplate = require("DynamicLinkTemplates").getInviteDynamicLinkTemplate(baseCode);
      let tmp18 = _require;
      const obj5 = require("DynamicLinkTemplates");
    } else {
      tmp18 = _require;
      inviteDynamicLinkTemplate = require("DynamicLinkTemplates").getDefaultDynamicLinkTemplate();
      const obj4 = require("DynamicLinkTemplates");
    }
    let obj3 = { type: "INVITE_APP_OPENING", code };
    const attemptId = tmp18(13089).generateAttemptId();
    inviteType = undefined;
    const tmp18Result = tmp18(13089);
    if (inviteType != null) {
      inviteType = inviteType.inviteType;
    }
    let str7 = "friend_invite";
    if (2 !== inviteType) {
      str7 = invite;
    }
    const obj7 = { utmSource: str7, fingerprint, installationId: AuthenticationStore.getInstallationForTracking(), username, attemptId, event: null, channel: null, message: null, didRegister: null, iosFallbackLink: null };
    let prop;
    if (result != null) {
      prop = result.guildScheduledEventId;
    }
    obj7.event = prop;
    obj7.channel = targetChannelId;
    obj7.message = targetMessageId;
    let didRegister;
    if (inviteType != null) {
      didRegister = inviteType.didRegister;
    }
    let str8;
    if (true === didRegister) {
      str8 = "true";
    }
    obj7.didRegister = str8;
    obj7.iosFallbackLink = "https://discord.com/api/download/mobile?invite_code=" + baseCode;
    combined = generateDynamicLinkDefault(inviteDynamicLinkTemplate, obj7);
    const tmp7Result5 = generateDynamicLinkDefault;
    const obj8 = { fingerprint: null, attempt_id: null, source: null, invite_code: null };
    const tmp7Result6 = AnalyticsUtilsDefault;
    obj8.fingerprint = tmp18(1254).maybeExtractId(fingerprint);
    obj8.attempt_id = attemptId;
    obj8.source = invite;
    obj8.invite_code = baseCode;
    tmp7Result6.track(constants3.DEEP_LINK_CLICKED, obj8);
    const tmp18Result2 = tmp18(1254);
  },
  setReceivedInstallationIdForInviteCode(inviteCode, receivedInstallationId) {
    DispatcherDefault.dispatch({ type: "INSTANT_INVITE_RECEIVED_INSTALLATION_ID_SET", inviteCode, receivedInstallationId });
  },
  clearReceivedInstallationIdForInviteCode(c8) {
    DispatcherDefault.dispatch({ type: "INSTANT_INVITE_RECEIVED_INSTALLATION_ID_CLEAR", inviteCode });
  },
  trackInviteServerClicked
};
export const transitionToGuildFromEventInvite = function transitionToGuildFromEventInvite() {
  const self = this;
  const apply = closure_43.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const trackInviteEmbedActioned = function trackInviteEmbedActioned(result8, items1) {
  ({ invite, inviter_id, invite_message_id, invite_instance_id, application_id, stream_key, number_of_users_in_channel } = result8);
  const obj2 = { action: result8.action, invite_code: invite.code, invite_type: null, inviter_id: null, invite_message_id: null, invite_instance_id: null, application_id: null, stream_key: null, number_of_users_in_channel: null, location_stack: null };
  let str1;
  if (invite.type != null) {
    str1 = str.toString();
  }
  obj2.invite_type = str1;
  if (inviter_id == null) {
    inviter_id = null;
  }
  obj2.inviter_id = inviter_id;
  if (invite_message_id == null) {
    invite_message_id = null;
  }
  obj2.invite_message_id = invite_message_id;
  if (invite_instance_id == null) {
    invite_instance_id = null;
  }
  obj2.invite_instance_id = invite_instance_id;
  if (application_id == null) {
    application_id = null;
  }
  obj2.application_id = application_id;
  if (stream_key == null) {
    stream_key = null;
  }
  obj2.stream_key = stream_key;
  if (number_of_users_in_channel == null) {
    number_of_users_in_channel = null;
  }
  let tmp2 = items1;
  obj2.number_of_users_in_channel = number_of_users_in_channel;
  if (items1 == null) {
    tmp2 = null;
  }
  obj2.location_stack = tmp2;
  AnalyticsUtilsDefault.track(constants3.INVITE_EMBED_ACTIONED, obj2);
};
export { trackInviteServerClicked };