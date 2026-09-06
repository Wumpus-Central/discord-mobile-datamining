// discord_app/actions/InstantInviteActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import router_utils from "../modules/routing/router_utils.tsx";
import AnalyticsUtilsDefault from "../utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import FlagUtils from "../../discord_common/js/shared/utils/FlagUtils.tsx";
import errors_V6OrEarlierAPIErrorDefault from "../errors/V6OrEarlierAPIError.tsx";
import InviteCodeUtils from "../modules/instant_invite/InviteCodeUtils.tsx";
import _modDef4883 from "../../_runtime/metro/04883__.js";
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
    let obj = channel;
    transitionTo = channel.getChannel(id);
    currentUser = currentUser.getCurrentUser();
    if (null == transitionTo || null == currentUser) {
      return tmp3;
    } else {
      let guildScheduledEvent1 = transitionTo.nsfw && !currentUser.nsfwAllowed;
      if (!guildScheduledEvent1) {
        let isGuildVocalOrThreadResult = transitionTo.isGuildVocalOrThread();
        if (isGuildVocalOrThreadResult) {
          let obj2 = require("AgeGateUtils");
          isGuildVocalOrThreadResult = obj2.maybeOpenAgeGateForVoiceChannel(tmp);
        }
        guildScheduledEvent1 = isGuildVocalOrThreadResult;
      }
      if (!guildScheduledEvent1) {
        let isGuildVocalOrThreadResult1 = transitionTo.isGuildVocalOrThread();
        if (isGuildVocalOrThreadResult1) {
          isGuildVocalOrThreadResult1 = require("maybeOpenSpoilerGateForVoiceChannel").maybeOpenSpoilerGateForVoiceChannel(tmp);
          let obj4 = require("maybeOpenSpoilerGateForVoiceChannel");
        }
        guildScheduledEvent1 = isGuildVocalOrThreadResult1;
      }
      let flag = !guildScheduledEvent1;
      if (!guildScheduledEvent1) {
        guildScheduledEvent = undefined;
        if (obj != null) {
          guildScheduledEvent = tmp10.guildScheduledEvent;
        }
        if (null != guildScheduledEvent) {
          guildScheduledEvent1 = tmp10.guildScheduledEvent;
          guildId = guildScheduledEvent1;
          transitionTo = tmp10.welcomeModalChannelId;
          flag = false;
          if (null != guildScheduledEvent1) {
            addPostConnectionCallback(() => {
              const obj = { guildScheduledEventId: guildId.id };
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
          obj = tmp10;
          if (tmp10 == null) {
            obj = {};
          }
          ({ targetUserId: c4, targetType } = obj);
          targetApplicationId = obj.targetApplicationId;
          isGuestInvite = obj.isGuestInvite;
          if (!isGuestInvite) {
            if (!obj.isApplicationBypassInvite) {
              let forceTransition;
              if (tmp10 != null) {
                forceTransition = tmp10.forceTransition;
              }
              if (!forceTransition) {
                if (hasItem) {
                  let CHANNELResult = guildId;
                  guildScheduledEvent1 = guildId.getGuildId();
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
                            let obj = transitionTo(items[29]);
                            obj.setSelfMute(guildId(items[30]).MediaEngineContextTypes.DEFAULT, true);
                          }
                          const voiceChannel = closure_0.selectVoiceChannel(GUILD_HOME);
                          let tmp14 = targetType === constants2.STREAM;
                          if (tmp14) {
                            tmp14 = null != ownerId;
                          }
                          if (tmp14) {
                            obj = { streamType: constants.GUILD, ownerId, guildId, channelId: GUILD_HOME };
                            const result = closure_2(items[31]).watchStreamAndTransitionToStream(obj);
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
                            obj = { channelId: GUILD_HOME, applicationId, intent: null, inviterUserId: null, analyticsLocations: null, commandOrigin: null };
                            let intent;
                            const obj4 = guildId(items[25]);
                            if (closure_2_2 != null) {
                              intent = closure_2_2.intent;
                            }
                            obj.intent = intent;
                            let inviterUserId;
                            if (closure_2_2 != null) {
                              inviterUserId = closure_2_2.inviterUserId;
                            }
                            obj.inviterUserId = inviterUserId;
                            obj.analyticsLocations = analyticsLocations;
                            obj.commandOrigin = guildId(items[33]).CommandOrigin.CHAT;
                            transitionTo(items[32])(obj);
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
                      state = closure_2;
                      if (closure_2 == null) {
                        state = {};
                      }
                      ({ transitionTo, welcomeModalChannelId, guildScheduledEvent } = state);
                      state = { source: state(paths[24]).INVITE_ACCEPT, navigationReplace: true, openChannel: true };
                      if (null != welcomeModalChannelId) {
                        state.welcomeModalChannelId = welcomeModalChannelId;
                      }
                      if (transitionTo.type === constants.GUILD_STAGE_VOICE) {
                        state = { stageInviteKey };
                        state.state = state;
                      }
                      if (null != guildScheduledEvent) {
                        state.guildScheduledEventId = guildScheduledEvent.id;
                      }
                      if (null != transitionTo) {
                        let transitionToResult = transitionTo(c10, state);
                      } else {
                        transitionToResult = id(paths[25]).transitionTo(c10, state);
                        const obj4 = id(paths[25]);
                      }
                      return transitionToResult;
                    };
                    CHANNELResult = require("asyncRequireImpl")(paths[37], paths.paths);
                    guildScheduledEvent1 = CHANNELResult.then((result) => result.default({ guildId }));
                    guildScheduledEvent1.then(transitionTo, transitionTo);
                    flag = false;
                  }
                  guildScheduledEvent1 = transitionTo(CHANNELResult, guildScheduledEvent1);
                  flag = false;
                }
                obj = tmp10;
                if (tmp10 == null) {
                  obj = {};
                }
                ({ transitionTo, welcomeModalChannelId, guildScheduledEvent } = obj);
                guildScheduledEvent1 = { source: require("RoutingSources").INVITE_ACCEPT, navigationReplace: true };
                if (tmp38) {
                  guildScheduledEvent1.openChannel = true;
                }
                if (null != welcomeModalChannelId) {
                  guildScheduledEvent1.welcomeModalChannelId = welcomeModalChannelId;
                }
                if (transitionTo.type === constants.GUILD_STAGE_VOICE) {
                  const obj1 = { stageInviteKey };
                  guildScheduledEvent1.state = obj1;
                }
                if (null != guildScheduledEvent) {
                  guildScheduledEvent1.guildScheduledEventId = guildScheduledEvent.id;
                }
                if (null == transitionTo) {
                  require("router_utils").transitionTo(CHANNELResult, guildScheduledEvent1);
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
              obj2 = { channelId: GUILD_HOME, applicationId: targetApplicationId, intent: null, inviterUserId: null, analyticsLocations: null, commandOrigin: null };
              let intent;
              const tmp43Result = require("router_utils");
              if (tmp10 != null) {
                intent = tmp10.intent;
              }
              obj2.intent = intent;
              let inviterUserId;
              if (tmp10 != null) {
                inviterUserId = tmp10.inviterUserId;
              }
              obj2.inviterUserId = inviterUserId;
              obj2.analyticsLocations = items;
              obj2.commandOrigin = require("ApplicationCommandTypes").CommandOrigin.CHAT;
              require("deferJoinActivityInChannel")(obj2);
              const tmp50 = require("deferJoinActivityInChannel");
            }
            const obj8 = require("ActivitiesInTextUtils");
          }
          targetType = undefined;
          if (tmp10 != null) {
            targetType = tmp10.targetType;
          }
          if (null == targetType) {
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
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          const channel_id = _require.channel_id;
          if (React5(_require)) {
            if (null != channel_id) {
              transitionToInviteChannelSync(channel_id);
            }
          }
          let obj1 = GuildActionCreatorsDefault;
          c2 = 1;
          c1 = 1;
          obj1 = { value: null, done: false };
          obj1.value = obj1.transitionToGuildSync(_require.guild_id);
          return obj1;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        obj = { value, done: true };
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
  const obj = { guild_id: id5, action: accept, location_stack: null };
  if (items2 == null) {
    tmp = null;
  }
  obj.location_stack = tmp;
  obj.track(constants3.INVITE_SERVER_CLICKED, obj);
}
fn(5558).addPostConnectionCallback;
let closure_7 = fn(7526).isGuildScheduledEventActive;
const ChannelRecord = fn(1961);
({ isGuildTextChannelType: closure_8, isGuildVocalChannelOrVocalThreadType: closure_9, createChannelRecord: c10, ChannelRecordBase: closure_11, getAccessPermissions: closure_12 } = ChannelRecord);
const Constants = fn(1074);
({ Endpoints: closure_24, ChannelTypes: closure_25, Routes: closure_26, ME: closure_27, RPCCommands: closure_28, GuildFeatures: closure_29, AnalyticEvents: closure_30, UserFlags: items, Permissions: closure_32, AbortCodes: closure_33 } = Constants);
const AgeGateSource = fn(1098).AgeGateSource;
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const StreamTypes = fn(4602).StreamTypes;
const InviteTargetTypes = fn(7736).InviteTargetTypes;
const STAGE_INVITE_STATE_KEY = fn(5414).STAGE_INVITE_STATE_KEY;
let invite = "invite";
let c40 = null;
const size = fn(2);
let result = size.fileFinishedImporting("actions/InstantInviteActionCreators.tsx");

export default {
  resolveInvite(code, arg1, arg2) {
    closure_0 = code;
    importDefault = arg1;
    closure_2 = arg2;
    let obj = DispatcherDefault;
    if (obj.isDispatching()) {
      const resolved = Promise.resolve();
      let nextPromise = resolved.then(() => {
        closure_0 = closure_1_0;
        closure_1 = closure_1_1;
        closure_2 = closure_1_2;
        let obj = closure_2_1(closure_2_3[39]);
        if (obj.isDispatching()) {
          let resolved = Promise.resolve();
          let nextPromise = resolved.then(() => {
            closure_0 = closure_1_0;
            closure_1 = closure_1_1;
            closure_2 = closure_1_2;
            let obj = closure_2_1(closure_2_3[39]);
            if (obj.isDispatching()) {
              let resolved = Promise.resolve();
              let nextPromise = resolved.then(() => {
                closure_0 = closure_1_0;
                closure_1 = closure_1_1;
                closure_2 = closure_1_2;
                let obj = closure_2_1(closure_2_3[39]);
                if (obj.isDispatching()) {
                  let resolved = Promise.resolve();
                  let nextPromise = resolved.then(() => {
                    closure_0 = closure_1_0;
                    closure_1 = closure_1_1;
                    closure_2 = closure_1_2;
                    let obj = closure_2_1(closure_2_3[39]);
                    if (obj.isDispatching()) {
                      let resolved = Promise.resolve();
                      let nextPromise = resolved.then(() => { ... });
                    } else {
                      obj = { type: "INVITE_RESOLVE", code: closure_1_0 };
                      closure_2_1(closure_2_3[39]).dispatch(obj);
                      let tmp4Result = closure_2_1(closure_2_3[39]);
                      nextPromise = closure_2_1(closure_2_3[40])(closure_1_0, closure_1_1, closure_1_2).then(() => { ... });
                      let promise = closure_2_1(closure_2_3[40])(closure_1_0, closure_1_1, closure_1_2);
                    }
                    return nextPromise;
                  });
                } else {
                  obj = { type: "INVITE_RESOLVE", code: closure_1_0 };
                  closure_2_1(closure_2_3[39]).dispatch(obj);
                  let tmp4Result = closure_2_1(closure_2_3[39]);
                  nextPromise = closure_2_1(closure_2_3[40])(closure_1_0, closure_1_1, closure_1_2).then((result) => {
                    ({ invite, code } = result);
                    if (null != invite) {
                      let obj = { type: "INVITE_RESOLVE_SUCCESS", invite, code };
                      closure_1(dependencyMap[39]).dispatch(obj);
                      const obj3 = closure_1(dependencyMap[39]);
                    } else {
                      closure_1(dependencyMap[39]);
                      obj = { type: "INVITE_RESOLVE_FAILURE", code, banned: tmp };
                      obj.dispatch(obj);
                    }
                    return { invite, code };
                  });
                  let promise = closure_2_1(closure_2_3[40])(closure_1_0, closure_1_1, closure_1_2);
                }
                return nextPromise;
              });
            } else {
              obj = { type: "INVITE_RESOLVE", code: closure_1_0 };
              closure_2_1(closure_2_3[39]).dispatch(obj);
              let tmp4Result = closure_2_1(closure_2_3[39]);
              nextPromise = closure_2_1(closure_2_3[40])(closure_1_0, closure_1_1, closure_1_2).then((result) => {
                ({ invite, code } = result);
                if (null != invite) {
                  let obj = { type: "INVITE_RESOLVE_SUCCESS", invite, code };
                  closure_1(dependencyMap[39]).dispatch(obj);
                  const obj3 = closure_1(dependencyMap[39]);
                } else {
                  closure_1(dependencyMap[39]);
                  obj = { type: "INVITE_RESOLVE_FAILURE", code, banned: tmp };
                  obj.dispatch(obj);
                }
                return { invite, code };
              });
              let promise = closure_2_1(closure_2_3[40])(closure_1_0, closure_1_1, closure_1_2);
            }
            return nextPromise;
          });
        } else {
          obj = { type: "INVITE_RESOLVE", code: closure_1_0 };
          closure_2_1(closure_2_3[39]).dispatch(obj);
          let tmp4Result = closure_2_1(closure_2_3[39]);
          nextPromise = closure_2_1(closure_2_3[40])(closure_1_0, closure_1_1, closure_1_2).then((result) => {
            ({ invite, code } = result);
            if (null != invite) {
              let obj = { type: "INVITE_RESOLVE_SUCCESS", invite, code };
              closure_1(dependencyMap[39]).dispatch(obj);
              const obj3 = closure_1(dependencyMap[39]);
            } else {
              closure_1(dependencyMap[39]);
              obj = { type: "INVITE_RESOLVE_FAILURE", code, banned: tmp };
              obj.dispatch(obj);
            }
            return { invite, code };
          });
          let promise = closure_2_1(closure_2_3[40])(closure_1_0, closure_1_1, closure_1_2);
        }
        return nextPromise;
      });
    } else {
      obj = { type: "INVITE_RESOLVE", code };
      tmp(573).dispatch(obj);
      const tmpResult = tmp(573);
      nextPromise = tmp(8737)(code, arg1, arg2).then((result) => {
        ({ invite, code } = result);
        if (null != invite) {
          let obj = { type: "INVITE_RESOLVE_SUCCESS", invite, code };
          closure_1(dependencyMap[39]).dispatch(obj);
          const obj3 = closure_1(dependencyMap[39]);
        } else {
          closure_1(dependencyMap[39]);
          obj = { type: "INVITE_RESOLVE_FAILURE", code, banned: tmp };
          obj.dispatch(obj);
        }
        return { invite, code };
      });
      const promise = tmp(8737)(code, arg1, arg2);
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
          obj = { value, done: true };
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
              closure_0 = tmp9;
              let body;
              dependencyMap = 1;
              const obj1 = {};
              const merged = Object.assign(obj);
              const role_ids = obj1.role_ids;
              let length;
              if (role_ids != null) {
                length = role_ids.length;
              }
              if (0 === length) {
                delete tmp6[tmp4];
              }
              const HTTP = closure_0(1272).HTTP;
              const request = { url: closure_1_24.INSTANT_INVITES(closure_0), body: obj1, context: null, rejectWithError: true };
              const obj2 = { location: _location };
              request.context = obj2;
              c4 = 2;
              c5 = 1;
              const obj3 = { value: HTTP.post(request), done: false };
              return obj3;
            }
          } else if (1 === tmp9) {
            dependencyMap = 0;
            closure_128_1 = _location;
            let obj4 = tmp3(573);
            obj4 = { type: "INSTANT_INVITE_CREATE_FAILURE", channelId: closure_129_0 };
            obj4.dispatch(obj4);
            const tmp30 = new tmp3(4462)(closure_128_1);
            throw tmp30;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 0;
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            body = value.body;
            obj = tmp3(573);
            const obj6 = { type: "INSTANT_INVITE_CREATE_SUCCESS", channelId: closure_129_0, invite: body };
            obj.dispatch(obj6);
            dependencyMap = 0;
            c5 = 3;
            const obj7 = { value: body, done: true };
            return obj7;
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
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp5;
              let body;
              const promise = new Promise((arg0) => {
                closure_0 = arg0;
                return closure_1_1(dependencyMap[39]).wait(() => closure_0(null));
              });
              c2 = 1;
              dependencyMap = 1;
              const obj1 = { value: promise, done: false };
              return obj1;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj2 = { value, done: true };
              return obj2;
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
              const HTTP = tmp2(1272).HTTP;
              const obj3 = { url: constants.FRIEND_INVITES, context: null, rejectWithError: null };
              let obj4 = { location: closure_129_0 };
              obj3.context = obj4;
              obj4 = tmp2(1272);
              obj3.rejectWithError = obj4.rejectWithMigratedError();
              value = HTTP.get(obj3);
              let obj5 = closure_1(573);
              obj5 = { type: "FRIEND_INVITES_FETCH_REQUEST", requestedAt: null };
              const _Date = Date;
              const date = new Date();
              obj5.requestedAt = date;
              obj5.dispatch(obj5);
              c2 = 2;
              dependencyMap = 1;
              const obj6 = { value, done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            body = value.body;
            value = null;
            const obj8 = { type: "FRIEND_INVITES_FETCH_RESPONSE", receivedAt: null, invites: null };
            const _Date2 = Date;
            const date1 = new Date();
            obj8.receivedAt = date1;
            obj8.invites = body;
            closure_1(573).dispatch(obj8);
            dependencyMap = 3;
            obj = { value: body, done: true };
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
      const obj = { type: "FRIEND_INVITE_CREATE_FAILURE", error };
      obj.dispatch(obj);
      throw error;
    });
  },
  revokeFriendInvites() {
    let obj = DispatcherDefault;
    obj.dispatch({ type: "FRIEND_INVITE_REVOKE_REQUEST" });
    const HTTP = HTTPUtils.HTTP;
    obj = { url: __initData4.FRIEND_INVITES, context: null, rejectWithError: null };
    obj = { location: location };
    obj.context = obj;
    obj.rejectWithError = HTTPUtils.rejectWithMigratedError();
    return HTTP.del(obj).then((invites) => {
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
      await tmp3(4753).get({
        url: closure_1_24.INVITE_FRIEND_MEMBERS(code),
        trackedActionData: {
          event: code(1250).NetworkActionNames.INVITE_FRIEND_MEMBERS_FETCH,
          properties(body) {
            code(c3[50]);
            const obj = { code, friend_count: null };
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
            obj.friend_count = num;
            return obj.exact(obj);
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
    const obj = { type: "INSTANT_INVITE_CLEAR", channelId };
    obj.dispatch(obj);
  },
  revokeInvite(invite) {
    const code = invite.code;
    const channel = invite.channel;
    channel(4753);
    let obj = { url: closure_24.INVITE(code), oldFormErrors: true, trackedActionData: null, rejectWithError: null };
    obj = { event: code(1250).NetworkActionNames.INVITE_REVOKE, properties: { uses: invite.uses, max_uses: invite.maxUses, max_age: invite.maxAge, invite_type: invite.type } };
    obj.trackedActionData = obj;
    obj.rejectWithError = code(1272).rejectWithMigratedError();
    const obj4 = code(1272);
    return obj.delete(obj).then(() => {
      const obj = { type: "INSTANT_INVITE_REVOKE_SUCCESS", code, channelId: channel.id };
      obj.dispatch(obj);
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
    let obj = require("InviteCodeUtils");
    let result = obj.parseInviteCodeFromInviteKey(inviteKey);
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
      let tmpResult = tmp(tmp2[51]);
      const result1 = tmpResult.parseExtraDataFromInviteKey(inviteKey);
      guildScheduledEventId = result1.guildScheduledEventId;
      ({ targetChannelId: target_channel_id, targetMessageId: target_message_id } = result1);
    }
    obj = {};
    let merged = Object.assign(context);
    obj.invite_guild_scheduled_event_id = tmp8;
    const currentUser = UserStore.getCurrentUser();
    let hasFlagResult;
    if (currentUser != null) {
      hasFlagResult = currentUser.hasFlag(constants4.QUARANTINED);
    }
    if (hasFlagResult) {
      require("openQuarantineModeInfoModal")();
      let nextPromise = new Promise((arg0, fn) => {
        const error = new Error();
        return fn(error);
      });
    } else {
      obj = { type: "INVITE_ACCEPT", code: inviteKey };
      require("Dispatcher").dispatch(obj);
      const HTTP = tmp(tmp2[45]).HTTP;
      const request = { url: closure_24.INVITE(result), context: obj, oldFormErrors: true, body: null, rejectWithError: null };
      let obj1 = { session_id: sessionId, invite_instance_id: context.invite_instance_id, received_installation_id: receivedInstallationIdForInviteCode };
      request.body = obj1;
      tmpResult = tmp(tmp2[45]);
      request.rejectWithError = tmpResult.rejectWithMigratedError();
      const tmp13Result = require("Dispatcher");
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
              let obj = { value, done: true };
              return obj;
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
                  obj = { value, done: true };
                  return obj;
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
                  let obj4 = require("Dispatcher");
                  const obj1 = { type: "INVITE_ACCEPT_SUCCESS", invite: code.body, code };
                  obj4.dispatch(obj1);
                  guild_scheduled_event = target_message_id;
                  if (target_message_id == null) {
                    guild_scheduled_event = guildScheduledEventId.getGuildScheduledEvent(closure_6);
                  }
                  const obj2 = {};
                  const merged = Object.assign(code.body);
                  obj2.guild_scheduled_event = guild_scheduled_event;
                  target_channel_id = code.body.target_channel_id;
                  if (target_channel_id == null) {
                    target_channel_id = id;
                  }
                  obj2.target_channel_id = target_channel_id;
                  target_message_id = code.body.target_message_id;
                  if (target_message_id == null) {
                    target_message_id = c5;
                  }
                  obj2.target_message_id = target_message_id;
                  closure_134_1 = obj2;
                  const guild_id = obj2.guild_id;
                  id = guild_id;
                  if (guild_id == null) {
                    const guild = obj2.guild;
                    id = undefined;
                    if (guild != null) {
                      id = guild.id;
                    }
                  }
                  closure_134_2 = id;
                  let obj7 = code(tmp13[21]);
                  const flags = obj2.flags;
                  c5 = flags;
                  if (flags == null) {
                    c5 = 0;
                  }
                  if (!target_channel_id) {
                    if (!obj7.hasFlag(c5, code(tmp13[22]).GuildInviteFlags.IS_GUEST_INVITE)) {
                      if (null != tmp27) {
                        if (obj2.new_member) {
                          if (!obj2.show_verification_form) {
                            c8 = 1;
                            c9 = 1;
                            const obj3 = { value: code(tmp13[27])(tmp13[37], tmp13.paths), done: false };
                            return obj3;
                          }
                        }
                      }
                    }
                  }
                  tmp27 = id;
                }
              } else if (1 === tmp5) {
                if (arg0 === 1) {
                  c9 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c9 = 3;
                  obj4 = { value, done: true };
                  return obj4;
                } else {
                  closure_134_3 = value.default;
                  const obj5 = { guildId: closure_134_2 };
                  c8 = 2;
                  c9 = 1;
                  const obj6 = { value: closure_134_3(obj5), done: false };
                  return obj6;
                }
              } else if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 3;
                obj = { value, done: true };
                return obj;
              }
              if (guild_scheduled_event != null) {
                tmp32(closure_134_1);
              }
              c9 = 3;
              obj7 = { value: closure_134_0.body, done: true };
              return obj7;
            } catch (tmp39) {
              c9 = tmp;
              throw tmp39;
            }
          }
        })();
      });
      nextPromise = HTTP.post(request).then(function() {
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
          let obj = AgeGateModalActionCreators;
          obj.openAgeGateModal(AgeGateSource.JOIN_LARGE_GUILD_UNDERAGE);
        }
        obj = { type: "INVITE_ACCEPT_FAILURE", code, error: null };
        const body2 = body.body;
        let message;
        if (body2 != null) {
          message = body2.message;
        }
        obj = { message, code: null };
        const body3 = body.body;
        let code1;
        if (body3 != null) {
          code1 = body3.code;
        }
        obj.code = code1;
        obj.error = obj;
        DispatcherDefault.dispatch(obj);
        throw new errors_V6OrEarlierAPIErrorDefault(body);
      });
      const postResult = HTTP.post(request);
    }
    return nextPromise;
  },
  acceptInviteAndTransitionToInviteChannel(inviteKey) {
    ({ analyticsLocations: require, callback: importDefault, autoJoin: importAll } = inviteKey);
    return this.acceptInvite({
      inviteKey: inviteKey.inviteKey,
      context: inviteKey.context,
      skipOnboarding: inviteKey.skipOnboarding,
      callback(channel) {
        if (null != channel.channel) {
          let state = {};
          const merged = Object.assign(generateAcceptInviteOptions(channel));
          state.autoJoin = autoJoin;
          let items = _require;
          if (_require == null) {
            items = [];
          }
          let id = channel.channel.id;
          if (items === undefined) {
            items = [];
          }
          let result = ChannelStore.addConditionalChangeListener(() => {
            let obj = channel;
            transitionTo = channel.getChannel(id);
            currentUser = currentUser.getCurrentUser();
            if (null == transitionTo || null == currentUser) {
              return tmp3;
            } else {
              let guildScheduledEvent1 = transitionTo.nsfw && !currentUser.nsfwAllowed;
              if (!guildScheduledEvent1) {
                let isGuildVocalOrThreadResult = transitionTo.isGuildVocalOrThread();
                if (isGuildVocalOrThreadResult) {
                  let obj2 = require("AgeGateUtils");
                  isGuildVocalOrThreadResult = obj2.maybeOpenAgeGateForVoiceChannel(tmp);
                }
                guildScheduledEvent1 = isGuildVocalOrThreadResult;
              }
              if (!guildScheduledEvent1) {
                let isGuildVocalOrThreadResult1 = transitionTo.isGuildVocalOrThread();
                if (isGuildVocalOrThreadResult1) {
                  isGuildVocalOrThreadResult1 = require("maybeOpenSpoilerGateForVoiceChannel").maybeOpenSpoilerGateForVoiceChannel(tmp);
                  let obj4 = require("maybeOpenSpoilerGateForVoiceChannel");
                }
                guildScheduledEvent1 = isGuildVocalOrThreadResult1;
              }
              let flag = !guildScheduledEvent1;
              if (!guildScheduledEvent1) {
                guildScheduledEvent = undefined;
                if (obj != null) {
                  guildScheduledEvent = tmp10.guildScheduledEvent;
                }
                if (null != guildScheduledEvent) {
                  guildScheduledEvent1 = tmp10.guildScheduledEvent;
                  guildId = guildScheduledEvent1;
                  transitionTo = tmp10.welcomeModalChannelId;
                  flag = false;
                  if (null != guildScheduledEvent1) {
                    addPostConnectionCallback(() => {
                      const obj = { guildScheduledEventId: guildId.id };
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
                  obj = tmp10;
                  if (tmp10 == null) {
                    obj = {};
                  }
                  ({ targetUserId: c4, targetType } = obj);
                  targetApplicationId = obj.targetApplicationId;
                  isGuestInvite = obj.isGuestInvite;
                  if (!isGuestInvite) {
                    if (!obj.isApplicationBypassInvite) {
                      let forceTransition;
                      if (tmp10 != null) {
                        forceTransition = tmp10.forceTransition;
                      }
                      if (!forceTransition) {
                        if (hasItem) {
                          let CHANNELResult = guildId;
                          guildScheduledEvent1 = guildId.getGuildId();
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
                              state = closure_2;
                              if (closure_2 == null) {
                                state = {};
                              }
                              ({ transitionTo, welcomeModalChannelId, guildScheduledEvent } = state);
                              state = { source: state(paths[24]).INVITE_ACCEPT, navigationReplace: true, openChannel: true };
                              if (null != welcomeModalChannelId) {
                                state.welcomeModalChannelId = welcomeModalChannelId;
                              }
                              if (transitionTo.type === constants.GUILD_STAGE_VOICE) {
                                state = { stageInviteKey };
                                state.state = state;
                              }
                              if (null != guildScheduledEvent) {
                                state.guildScheduledEventId = guildScheduledEvent.id;
                              }
                              if (null != transitionTo) {
                                let transitionToResult = transitionTo(c10, state);
                              } else {
                                transitionToResult = id(paths[25]).transitionTo(c10, state);
                                const obj4 = id(paths[25]);
                              }
                              return transitionToResult;
                            };
                            CHANNELResult = require("asyncRequireImpl")(paths[37], paths.paths);
                            guildScheduledEvent1 = CHANNELResult.then((result) => result.default({ guildId }));
                            guildScheduledEvent1.then(transitionTo, transitionTo);
                            flag = false;
                          }
                          guildScheduledEvent1 = transitionTo(CHANNELResult, guildScheduledEvent1);
                          flag = false;
                        }
                        obj = tmp10;
                        if (tmp10 == null) {
                          obj = {};
                        }
                        ({ transitionTo, welcomeModalChannelId, guildScheduledEvent } = obj);
                        guildScheduledEvent1 = { source: require("RoutingSources").INVITE_ACCEPT, navigationReplace: true };
                        if (tmp38) {
                          guildScheduledEvent1.openChannel = true;
                        }
                        if (null != welcomeModalChannelId) {
                          guildScheduledEvent1.welcomeModalChannelId = welcomeModalChannelId;
                        }
                        if (transitionTo.type === constants.GUILD_STAGE_VOICE) {
                          const obj1 = { stageInviteKey };
                          guildScheduledEvent1.state = obj1;
                        }
                        if (null != guildScheduledEvent) {
                          guildScheduledEvent1.guildScheduledEventId = guildScheduledEvent.id;
                        }
                        if (null == transitionTo) {
                          require("router_utils").transitionTo(CHANNELResult, guildScheduledEvent1);
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
                      obj2 = { channelId: GUILD_HOME, applicationId: targetApplicationId, intent: null, inviterUserId: null, analyticsLocations: null, commandOrigin: null };
                      let intent;
                      const tmp43Result = require("router_utils");
                      if (tmp10 != null) {
                        intent = tmp10.intent;
                      }
                      obj2.intent = intent;
                      let inviterUserId;
                      if (tmp10 != null) {
                        inviterUserId = tmp10.inviterUserId;
                      }
                      obj2.inviterUserId = inviterUserId;
                      obj2.analyticsLocations = items;
                      obj2.commandOrigin = require("ApplicationCommandTypes").CommandOrigin.CHAT;
                      require("deferJoinActivityInChannel")(obj2);
                      const tmp50 = require("deferJoinActivityInChannel");
                    }
                    const obj8 = require("ActivitiesInTextUtils");
                  }
                  targetType = undefined;
                  if (tmp10 != null) {
                    targetType = tmp10.targetType;
                  }
                  if (null == targetType) {
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
              let obj = channel;
              transitionTo = channel.getChannel(id);
              currentUser = currentUser.getCurrentUser();
              if (null == transitionTo || null == currentUser) {
                return tmp3;
              } else {
                let guildScheduledEvent1 = transitionTo.nsfw && !currentUser.nsfwAllowed;
                if (!guildScheduledEvent1) {
                  let isGuildVocalOrThreadResult = transitionTo.isGuildVocalOrThread();
                  if (isGuildVocalOrThreadResult) {
                    let obj2 = require("AgeGateUtils");
                    isGuildVocalOrThreadResult = obj2.maybeOpenAgeGateForVoiceChannel(tmp);
                  }
                  guildScheduledEvent1 = isGuildVocalOrThreadResult;
                }
                if (!guildScheduledEvent1) {
                  let isGuildVocalOrThreadResult1 = transitionTo.isGuildVocalOrThread();
                  if (isGuildVocalOrThreadResult1) {
                    isGuildVocalOrThreadResult1 = require("maybeOpenSpoilerGateForVoiceChannel").maybeOpenSpoilerGateForVoiceChannel(tmp);
                    let obj4 = require("maybeOpenSpoilerGateForVoiceChannel");
                  }
                  guildScheduledEvent1 = isGuildVocalOrThreadResult1;
                }
                let flag = !guildScheduledEvent1;
                if (!guildScheduledEvent1) {
                  guildScheduledEvent = undefined;
                  if (obj != null) {
                    guildScheduledEvent = tmp10.guildScheduledEvent;
                  }
                  if (null != guildScheduledEvent) {
                    guildScheduledEvent1 = tmp10.guildScheduledEvent;
                    guildId = guildScheduledEvent1;
                    transitionTo = tmp10.welcomeModalChannelId;
                    flag = false;
                    if (null != guildScheduledEvent1) {
                      addPostConnectionCallback(() => {
                        const obj = { guildScheduledEventId: guildId.id };
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
                    obj = tmp10;
                    if (tmp10 == null) {
                      obj = {};
                    }
                    ({ targetUserId: c4, targetType } = obj);
                    targetApplicationId = obj.targetApplicationId;
                    isGuestInvite = obj.isGuestInvite;
                    if (!isGuestInvite) {
                      if (!obj.isApplicationBypassInvite) {
                        let forceTransition;
                        if (tmp10 != null) {
                          forceTransition = tmp10.forceTransition;
                        }
                        if (!forceTransition) {
                          if (hasItem) {
                            let CHANNELResult = guildId;
                            guildScheduledEvent1 = guildId.getGuildId();
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
                                      let obj = transitionTo(items[29]);
                                      obj.setSelfMute(guildId(items[30]).MediaEngineContextTypes.DEFAULT, true);
                                    }
                                    const voiceChannel = closure_0.selectVoiceChannel(GUILD_HOME);
                                    let tmp14 = targetType === constants2.STREAM;
                                    if (tmp14) {
                                      tmp14 = null != ownerId;
                                    }
                                    if (tmp14) {
                                      obj = { streamType: constants.GUILD, ownerId, guildId, channelId: GUILD_HOME };
                                      const result = closure_2(items[31]).watchStreamAndTransitionToStream(obj);
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
                                      obj = { channelId: GUILD_HOME, applicationId, intent: null, inviterUserId: null, analyticsLocations: null, commandOrigin: null };
                                      let intent;
                                      const obj4 = guildId(items[25]);
                                      if (closure_2_2 != null) {
                                        intent = closure_2_2.intent;
                                      }
                                      obj.intent = intent;
                                      let inviterUserId;
                                      if (closure_2_2 != null) {
                                        inviterUserId = closure_2_2.inviterUserId;
                                      }
                                      obj.inviterUserId = inviterUserId;
                                      obj.analyticsLocations = analyticsLocations;
                                      obj.commandOrigin = guildId(items[33]).CommandOrigin.CHAT;
                                      transitionTo(items[32])(obj);
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
                                state = closure_2;
                                if (closure_2 == null) {
                                  state = {};
                                }
                                ({ transitionTo, welcomeModalChannelId, guildScheduledEvent } = state);
                                state = { source: state(paths[24]).INVITE_ACCEPT, navigationReplace: true, openChannel: true };
                                if (null != welcomeModalChannelId) {
                                  state.welcomeModalChannelId = welcomeModalChannelId;
                                }
                                if (transitionTo.type === constants.GUILD_STAGE_VOICE) {
                                  state = { stageInviteKey };
                                  state.state = state;
                                }
                                if (null != guildScheduledEvent) {
                                  state.guildScheduledEventId = guildScheduledEvent.id;
                                }
                                if (null != transitionTo) {
                                  let transitionToResult = transitionTo(c10, state);
                                } else {
                                  transitionToResult = id(paths[25]).transitionTo(c10, state);
                                  const obj4 = id(paths[25]);
                                }
                                return transitionToResult;
                              };
                              CHANNELResult = require("asyncRequireImpl")(paths[37], paths.paths);
                              guildScheduledEvent1 = CHANNELResult.then((result) => result.default({ guildId }));
                              guildScheduledEvent1.then(transitionTo, transitionTo);
                              flag = false;
                            }
                            guildScheduledEvent1 = transitionTo(CHANNELResult, guildScheduledEvent1);
                            flag = false;
                          }
                          obj = tmp10;
                          if (tmp10 == null) {
                            obj = {};
                          }
                          ({ transitionTo, welcomeModalChannelId, guildScheduledEvent } = obj);
                          guildScheduledEvent1 = { source: require("RoutingSources").INVITE_ACCEPT, navigationReplace: true };
                          if (tmp38) {
                            guildScheduledEvent1.openChannel = true;
                          }
                          if (null != welcomeModalChannelId) {
                            guildScheduledEvent1.welcomeModalChannelId = welcomeModalChannelId;
                          }
                          if (transitionTo.type === constants.GUILD_STAGE_VOICE) {
                            const obj1 = { stageInviteKey };
                            guildScheduledEvent1.state = obj1;
                          }
                          if (null != guildScheduledEvent) {
                            guildScheduledEvent1.guildScheduledEventId = guildScheduledEvent.id;
                          }
                          if (null == transitionTo) {
                            require("router_utils").transitionTo(CHANNELResult, guildScheduledEvent1);
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
                        obj2 = { channelId: GUILD_HOME, applicationId: targetApplicationId, intent: null, inviterUserId: null, analyticsLocations: null, commandOrigin: null };
                        let intent;
                        const tmp43Result = require("router_utils");
                        if (tmp10 != null) {
                          intent = tmp10.intent;
                        }
                        obj2.intent = intent;
                        let inviterUserId;
                        if (tmp10 != null) {
                          inviterUserId = tmp10.inviterUserId;
                        }
                        obj2.inviterUserId = inviterUserId;
                        obj2.analyticsLocations = items;
                        obj2.commandOrigin = require("ApplicationCommandTypes").CommandOrigin.CHAT;
                        require("deferJoinActivityInChannel")(obj2);
                        const tmp50 = require("deferJoinActivityInChannel");
                      }
                      const obj8 = require("ActivitiesInTextUtils");
                    }
                    targetType = undefined;
                    if (tmp10 != null) {
                      targetType = tmp10.targetType;
                    }
                    if (null == targetType) {
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
        obj(12934).onOpenHubInvite(flags);
        const obj6 = obj(12934);
      }
    }
    let num = flags.flags;
    if (num == null) {
      num = 0;
    }
    let hasFlagResult = dMFromUserId(1384).hasFlag(num, dMFromUserId(8392).GuildInviteFlags.IS_GUEST_INVITE);
    if (!hasFlagResult) {
      let tmp6Result = tmp6(1384);
      hasFlagResult = tmp6Result.hasFlag(num, tmp6(8392).GuildInviteFlags.IS_APPLICATION_BYPASS);
    }
    if (null != guild) {
      if (!hasFlagResult) {
        if (flags.new_member) {
          tmp6Result = tmp6(12935);
          if (tmp6Result.inviteGuildHasPendingMemberDisabledVerification(guild)) {
            const result1 = tmp6(12935).openVerificationModalOrTransitionToApplication(guild.id);
            const tmp6Result1 = tmp6(12935);
          }
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
        let obj = channel;
        transitionTo = channel.getChannel(id);
        currentUser = currentUser.getCurrentUser();
        if (null == transitionTo || null == currentUser) {
          return tmp3;
        } else {
          let guildScheduledEvent1 = transitionTo.nsfw && !currentUser.nsfwAllowed;
          if (!guildScheduledEvent1) {
            let isGuildVocalOrThreadResult = transitionTo.isGuildVocalOrThread();
            if (isGuildVocalOrThreadResult) {
              let obj2 = require("AgeGateUtils");
              isGuildVocalOrThreadResult = obj2.maybeOpenAgeGateForVoiceChannel(tmp);
            }
            guildScheduledEvent1 = isGuildVocalOrThreadResult;
          }
          if (!guildScheduledEvent1) {
            let isGuildVocalOrThreadResult1 = transitionTo.isGuildVocalOrThread();
            if (isGuildVocalOrThreadResult1) {
              isGuildVocalOrThreadResult1 = require("maybeOpenSpoilerGateForVoiceChannel").maybeOpenSpoilerGateForVoiceChannel(tmp);
              let obj4 = require("maybeOpenSpoilerGateForVoiceChannel");
            }
            guildScheduledEvent1 = isGuildVocalOrThreadResult1;
          }
          let flag = !guildScheduledEvent1;
          if (!guildScheduledEvent1) {
            guildScheduledEvent = undefined;
            if (obj != null) {
              guildScheduledEvent = tmp10.guildScheduledEvent;
            }
            if (null != guildScheduledEvent) {
              guildScheduledEvent1 = tmp10.guildScheduledEvent;
              guildId = guildScheduledEvent1;
              transitionTo = tmp10.welcomeModalChannelId;
              flag = false;
              if (null != guildScheduledEvent1) {
                addPostConnectionCallback(() => {
                  const obj = { guildScheduledEventId: guildId.id };
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
              obj = tmp10;
              if (tmp10 == null) {
                obj = {};
              }
              ({ targetUserId: c4, targetType } = obj);
              targetApplicationId = obj.targetApplicationId;
              isGuestInvite = obj.isGuestInvite;
              if (!isGuestInvite) {
                if (!obj.isApplicationBypassInvite) {
                  let forceTransition;
                  if (tmp10 != null) {
                    forceTransition = tmp10.forceTransition;
                  }
                  if (!forceTransition) {
                    if (hasItem) {
                      let CHANNELResult = guildId;
                      guildScheduledEvent1 = guildId.getGuildId();
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
                                let obj = transitionTo(items[29]);
                                obj.setSelfMute(guildId(items[30]).MediaEngineContextTypes.DEFAULT, true);
                              }
                              const voiceChannel = closure_0.selectVoiceChannel(GUILD_HOME);
                              let tmp14 = targetType === constants2.STREAM;
                              if (tmp14) {
                                tmp14 = null != ownerId;
                              }
                              if (tmp14) {
                                obj = { streamType: constants.GUILD, ownerId, guildId, channelId: GUILD_HOME };
                                const result = closure_2(items[31]).watchStreamAndTransitionToStream(obj);
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
                                obj = { channelId: GUILD_HOME, applicationId, intent: null, inviterUserId: null, analyticsLocations: null, commandOrigin: null };
                                let intent;
                                const obj4 = guildId(items[25]);
                                if (closure_2_2 != null) {
                                  intent = closure_2_2.intent;
                                }
                                obj.intent = intent;
                                let inviterUserId;
                                if (closure_2_2 != null) {
                                  inviterUserId = closure_2_2.inviterUserId;
                                }
                                obj.inviterUserId = inviterUserId;
                                obj.analyticsLocations = analyticsLocations;
                                obj.commandOrigin = guildId(items[33]).CommandOrigin.CHAT;
                                transitionTo(items[32])(obj);
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
                          state = closure_2;
                          if (closure_2 == null) {
                            state = {};
                          }
                          ({ transitionTo, welcomeModalChannelId, guildScheduledEvent } = state);
                          state = { source: state(paths[24]).INVITE_ACCEPT, navigationReplace: true, openChannel: true };
                          if (null != welcomeModalChannelId) {
                            state.welcomeModalChannelId = welcomeModalChannelId;
                          }
                          if (transitionTo.type === constants.GUILD_STAGE_VOICE) {
                            state = { stageInviteKey };
                            state.state = state;
                          }
                          if (null != guildScheduledEvent) {
                            state.guildScheduledEventId = guildScheduledEvent.id;
                          }
                          if (null != transitionTo) {
                            let transitionToResult = transitionTo(c10, state);
                          } else {
                            transitionToResult = id(paths[25]).transitionTo(c10, state);
                            const obj4 = id(paths[25]);
                          }
                          return transitionToResult;
                        };
                        CHANNELResult = require("asyncRequireImpl")(paths[37], paths.paths);
                        guildScheduledEvent1 = CHANNELResult.then((result) => result.default({ guildId }));
                        guildScheduledEvent1.then(transitionTo, transitionTo);
                        flag = false;
                      }
                      guildScheduledEvent1 = transitionTo(CHANNELResult, guildScheduledEvent1);
                      flag = false;
                    }
                    obj = tmp10;
                    if (tmp10 == null) {
                      obj = {};
                    }
                    ({ transitionTo, welcomeModalChannelId, guildScheduledEvent } = obj);
                    guildScheduledEvent1 = { source: require("RoutingSources").INVITE_ACCEPT, navigationReplace: true };
                    if (tmp38) {
                      guildScheduledEvent1.openChannel = true;
                    }
                    if (null != welcomeModalChannelId) {
                      guildScheduledEvent1.welcomeModalChannelId = welcomeModalChannelId;
                    }
                    if (transitionTo.type === constants.GUILD_STAGE_VOICE) {
                      const obj1 = { stageInviteKey };
                      guildScheduledEvent1.state = obj1;
                    }
                    if (null != guildScheduledEvent) {
                      guildScheduledEvent1.guildScheduledEventId = guildScheduledEvent.id;
                    }
                    if (null == transitionTo) {
                      require("router_utils").transitionTo(CHANNELResult, guildScheduledEvent1);
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
                  obj2 = { channelId: GUILD_HOME, applicationId: targetApplicationId, intent: null, inviterUserId: null, analyticsLocations: null, commandOrigin: null };
                  let intent;
                  const tmp43Result = require("router_utils");
                  if (tmp10 != null) {
                    intent = tmp10.intent;
                  }
                  obj2.intent = intent;
                  let inviterUserId;
                  if (tmp10 != null) {
                    inviterUserId = tmp10.inviterUserId;
                  }
                  obj2.inviterUserId = inviterUserId;
                  obj2.analyticsLocations = items;
                  obj2.commandOrigin = require("ApplicationCommandTypes").CommandOrigin.CHAT;
                  require("deferJoinActivityInChannel")(obj2);
                  const tmp50 = require("deferJoinActivityInChannel");
                }
                const obj8 = require("ActivitiesInTextUtils");
              }
              targetType = undefined;
              if (tmp10 != null) {
                targetType = tmp10.targetType;
              }
              if (null == targetType) {
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
    const obj2 = dMFromUserId(1384);
  },
  openNativeAppModal(inviteKey) {
    let obj = InviteCodeUtils;
    const result = obj.parseExtraDataFromInviteKey(inviteKey);
    obj = { installationId: AuthenticationStore.getInstallationForTracking(), targetChannelId: result.targetChannelId, targetMessageId: result.targetMessageId, guildScheduledEventId: result.guildScheduledEventId };
    CodedLinkActionCreatorsDefault.openNativeAppModal(result.baseCode, constants.INVITE_BROWSER, obj);
  },
  transitionToInviteOnboarding(baseCode) {
    let obj = guildScheduledEvent1;
    if (guildScheduledEvent1 === undefined) {
      obj = {};
    }
    let transitionTo = obj.transitionTo;
    if (undefined === transitionTo) {
      transitionTo = router_utils.transitionTo;
    }
    obj = { baseCode: baseCode.code, targetChannelId: null, targetMessageId: null, guildScheduledEventId: null };
    const target_channel_id = baseCode.target_channel_id;
    obj.targetChannelId = target_channel_id;
    const target_message_id = baseCode.target_message_id;
    obj.targetMessageId = target_message_id;
    const guild_scheduled_event = baseCode.guild_scheduled_event;
    let id;
    if (guild_scheduled_event != null) {
      id = guild_scheduled_event.id;
    }
    obj.guildScheduledEventId = id;
    const inviteKeyFromExtraData = InviteCodeUtils.generateInviteKeyFromExtraData(obj);
    obj = { search: null };
    const result = dependencyMap.APP_WITH_INVITE_AND_GUILD_ONBOARDING(baseCode.code);
    obj.search = InviteCodeUtils.getInviteKeySearchSuffix(inviteKeyFromExtraData);
    transitionTo(result, obj);
    const tmp3Result = InviteCodeUtils;
  },
  openApp(code, targetChannelId, fingerprint, username, inviteType) {
    _require = code;
    let result = null;
    if (null != code) {
      let obj = require("InviteCodeUtils");
      result = obj.parseExtraDataFromInviteKey(code);
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
    let obj1 = DispatcherDefault;
    obj = { type: "INVITE_APP_OPENING", code };
    obj1.dispatch(obj);
    if (null != _modDef4883.ua) {
      const formatted = _modDef4883.ua.toLowerCase();
      if (formatted.indexOf("googlebot") > -1) {
        let tmp7Result = DispatcherDefault;
        obj = { type: "INVITE_APP_NOT_OPENED", code };
        tmp7Result.dispatch(obj);
      }
    }
    const os = _modDef4883.os;
    let family;
    if (os != null) {
      family = os.family;
    }
    if ("Android" !== family) {
      const os2 = _modDef4883.os;
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
        tmp7Result = ProtocolUtilsDefault;
        tmp7Result.launch(combined, (arg0) => {
          let obj = DispatcherDefault;
          if (arg0) {
            obj = { type: "INVITE_APP_OPENED", code };
          } else {
            obj = { type: "INVITE_APP_NOT_OPENED", code };
          }
          obj.dispatch(obj);
        });
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
    let tmp18Result = tmp18(12937);
    const attemptId = tmp18Result.generateAttemptId();
    inviteType = undefined;
    if (inviteType != null) {
      inviteType = inviteType.inviteType;
    }
    let str7 = "friend_invite";
    if (2 !== inviteType) {
      str7 = invite;
    }
    obj1 = { utmSource: str7, fingerprint, installationId: AuthenticationStore.getInstallationForTracking(), username, attemptId, event: null, channel: null, message: null, didRegister: null, iosFallbackLink: null };
    let prop;
    if (result != null) {
      prop = result.guildScheduledEventId;
    }
    obj1.event = prop;
    obj1.channel = targetChannelId;
    obj1.message = targetMessageId;
    let didRegister;
    if (inviteType != null) {
      didRegister = inviteType.didRegister;
    }
    let str8;
    if (true === didRegister) {
      str8 = "true";
    }
    obj1.didRegister = str8;
    obj1.iosFallbackLink = "https://discord.com/api/download/mobile?invite_code=" + baseCode;
    combined = generateDynamicLinkDefault(inviteDynamicLinkTemplate, obj1);
    const tmp7Result1 = generateDynamicLinkDefault;
    const obj2 = { fingerprint: null, attempt_id: null, source: null, invite_code: null };
    tmp18Result = tmp18(1255);
    obj2.fingerprint = tmp18Result.maybeExtractId(fingerprint);
    obj2.attempt_id = attemptId;
    obj2.source = invite;
    obj2.invite_code = baseCode;
    AnalyticsUtilsDefault.track(constants3.DEEP_LINK_CLICKED, obj2);
    const tmp7Result2 = AnalyticsUtilsDefault;
  },
  setReceivedInstallationIdForInviteCode(inviteCode, receivedInstallationId) {
    const obj = { type: "INSTANT_INVITE_RECEIVED_INSTALLATION_ID_SET", inviteCode, receivedInstallationId };
    obj.dispatch(obj);
  },
  clearReceivedInstallationIdForInviteCode(c8) {
    const obj = { type: "INSTANT_INVITE_RECEIVED_INSTALLATION_ID_CLEAR", inviteCode };
    obj.dispatch(obj);
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
  const obj = { action: result8.action, invite_code: invite.code, invite_type: null, inviter_id: null, invite_message_id: null, invite_instance_id: null, application_id: null, stream_key: null, number_of_users_in_channel: null, location_stack: null };
  let str;
  if (str != null) {
    str = str.toString();
  }
  obj.invite_type = str;
  if (inviter_id == null) {
    inviter_id = null;
  }
  obj.inviter_id = inviter_id;
  if (invite_message_id == null) {
    invite_message_id = null;
  }
  obj.invite_message_id = invite_message_id;
  if (invite_instance_id == null) {
    invite_instance_id = null;
  }
  obj.invite_instance_id = invite_instance_id;
  if (application_id == null) {
    application_id = null;
  }
  obj.application_id = application_id;
  if (stream_key == null) {
    stream_key = null;
  }
  obj.stream_key = stream_key;
  if (number_of_users_in_channel == null) {
    number_of_users_in_channel = null;
  }
  let tmp2 = items1;
  obj.number_of_users_in_channel = number_of_users_in_channel;
  if (items1 == null) {
    tmp2 = null;
  }
  obj.location_stack = tmp2;
  obj.track(constants3.INVITE_EMBED_ACTIONED, obj);
};
export { trackInviteServerClicked };