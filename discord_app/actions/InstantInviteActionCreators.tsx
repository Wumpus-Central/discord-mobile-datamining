// discord_app/actions/InstantInviteActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import AgeGateConstants from "../modules/age_gate/AgeGateConstants.tsx";
import router_utils from "../modules/routing/router_utils.tsx";
import AnalyticsUtilsDefault from "../utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import FlagUtils from "../../discord_common/js/shared/utils/FlagUtils.tsx";
import ChannelConstants from "../modules/channel/ChannelConstants.tsx";
import errors_V6OrEarlierAPIErrorDefault from "../errors/V6OrEarlierAPIError.tsx";
import InviteCodeUtils from "../modules/instant_invite/InviteCodeUtils.tsx";
import Constants2 from "../modules/go_live/Constants.tsx";
import _modDef5410 from "../../_runtime/metro/05410__.js";
import StageChannelsConstants from "../modules/stage_channels/StageChannelsConstants.tsx";
import GuildActionCreatorsDefault from "GuildActionCreators.tsx";
import PostConnectionCallbackStore from "../modules/gateway/PostConnectionCallbackStore.tsx";
import AgeGateModalActionCreators from "../modules/age_gate/AgeGateModalActionCreators.tsx";
import showNSFWGuildJoinGate2 from "../modules/age_gate/showNSFWGuildJoinGate.native.tsx";
import GuildScheduledEventStore2 from "../modules/guild_scheduled_events/GuildScheduledEventStore.tsx";
import Constants3 from "../modules/instant_invite/Constants.tsx";
import GuildInviteFlags from "../../discord_common/js/shared/shared-constants/GuildInviteFlags.tsx";
import CodedLinkActionCreatorsDefault from "../modules/coded_links/web/CodedLinkActionCreators.tsx";
import generateDynamicLinkDefault from "../../discord_common/js/packages/dynamic-links/generateDynamicLink.tsx";
import ProtocolUtilsDefault from "../utils/web/ProtocolUtils.tsx";
import _asyncToGenerator from "../../_runtime/metro/00005__asyncToGenerator.js";
import ChannelRecord from "../records/ChannelRecord.tsx";
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
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, autoJoin, c1, c5, closure_6, defaultChannel, importDefault;

let c10;
let c9;
let closure_12;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let closure_31;
let closure_32;
let closure_33;
let metroImportAll;
let tmp;
let unpackModuleId;
const resolveInviteDefault = tmp(12749);
const f96393 = () => {
  let c4;
  let guildScheduledEvent;
  let intent;
  let inviterUserId;
  let targetType;
  let transitionTo2;
  let welcomeModalChannelId;
  obj = channel;
  const tmp = id;
  channel = channel.getChannel(id);
  currentUser = currentUser.getCurrentUser();
  let tmp3 = null == channel || null == currentUser;
  if (!tmp3) {
    let tmp4 = channel.nsfw && !currentUser.nsfwAllowed;
    if (!tmp4) {
      let isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
      if (isGuildVocalOrThreadResult) {
        let obj3 = closure_2_0(paths[41]);
        isGuildVocalOrThreadResult = obj3.maybeOpenAgeGateForVoiceChannel(tmp);
      }
      tmp4 = isGuildVocalOrThreadResult;
    }
    if (!tmp4) {
      let isGuildVocalOrThreadResult1 = channel.isGuildVocalOrThread();
      if (isGuildVocalOrThreadResult1) {
        let obj4 = closure_2_0(paths[42]);
        isGuildVocalOrThreadResult1 = obj4.maybeOpenSpoilerGateForVoiceChannel(tmp);
      }
      tmp4 = isGuildVocalOrThreadResult1;
    }
    let flag = !tmp4;
    if (flag) {
      let tmp11 = obj;
      let guildScheduledEvent1;
      if (obj != null) {
        guildScheduledEvent1 = tmp11.guildScheduledEvent;
      }
      if (null != guildScheduledEvent1) {
        const guildScheduledEvent2 = tmp11.guildScheduledEvent;
        welcomeModalChannelId = tmp11.welcomeModalChannelId;
        flag = false;
        if (null != guildScheduledEvent2) {
          closure_2_5(() => {
            obj = { guildScheduledEventId: guildScheduledEvent2.id };
            if (null != welcomeModalChannelId) {
              obj.welcomeModalChannelId = welcomeModalChannelId;
            }
            const obj2 = id(closure_2_3[38]);
            const result = obj2.transitionToEventDetailsFromInvite(guildScheduledEvent2, obj);
          });
          flag = false;
        }
      } else {
        let hasItem;
        guildId = channel.getGuildId();
        if (guildId == null) {
          guildId = closure_2_27;
        }
        let closure_2 = tmp11;
        if (items === undefined) {
          items = [];
        }
        c4 = undefined;
        targetType = undefined;
        let targetApplicationId;
        let isGuestInvite;
        let GUILD_HOME;
        let closure_9;
        let c10;
        let tmp14 = guild;
        guild = guild.getGuild(guildId);
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(constants2.MEMBER_VERIFICATION_MANUAL_APPROVAL);
        }
        let obj2 = tmp11;
        if (tmp11 == null) {
          obj2 = {};
        }
        ({ targetUserId: c4, targetType } = obj2);
        targetApplicationId = obj2.targetApplicationId;
        isGuestInvite = obj2.isGuestInvite;
        if (!isGuestInvite) {
          if (!obj2.isApplicationBypassInvite) {
            let forceTransition;
            if (tmp11 != null) {
              forceTransition = tmp11.forceTransition;
            }
            if (!forceTransition) {
              if (hasItem) {
                flag = false;
              }
            }
          }
        }
        let type = channel.type;
        let targetChannelId;
        const channel1 = obj.getChannel(channel.id);
        if (tmp11 != null) {
          targetChannelId = tmp11.targetChannelId;
        }
        if (null != targetChannelId) {
          const channel2 = obj.getChannel(targetChannelId);
          if (null != channel2) {
            GUILD_HOME = targetChannelId;
          }
          closure_9 = type === constants.GUILD_STAGE_VOICE;
          let targetChannelId1;
          if (tmp11 != null) {
            targetChannelId1 = tmp11.targetChannelId;
          }
          let tmp40;
          if (null != targetChannelId1 && GUILD_HOME === tmp11.targetChannelId) {
            let targetMessageId;
            if (tmp11 != null) {
              targetMessageId = tmp11.targetMessageId;
            }
            tmp40 = targetMessageId;
          }
          const CHANNELResult = closure_2_26.CHANNEL(guildId, GUILD_HOME, tmp40);
          c10 = CHANNELResult;
          if (GUILD_HOME === channel.id) {
            if (closure_2_9(type)) {
              autoJoin = undefined;
              if (tmp11 != null) {
                autoJoin = tmp11.autoJoin;
              }
              if (false !== autoJoin) {
                closure_2_5(() => {
                  let analyticsLocations;
                  let applicationId;
                  let ownerId;
                  items = [
                    id(closure_2_3[27])(closure_2_3[26], closure_2_3.paths),
                    id(closure_2_3[27])(closure_2_3[28], closure_2_3.paths),
                  ];
                  const allResult = all(items);
                  allResult.then((result) => {
                    const iter = result[Symbol.iterator]();
                    let nextResult;
                    if (iter !== undefined) {
                      nextResult = iter.next();
                    }
                    let nextResult1;
                    let tmp4 = tmp;
                    if (!tmp4) {
                      tmp4 = tmp6;
                      if (!tmp4) {
                        nextResult1 = iter.next();
                        tmp4 = tmp6;
                      }
                    }
                    nextResult1 = nextResult1.default;
                    if (!tmp4) {
                      iter.return();
                    }
                    function connect() {
                      let intent;
                      let inviterUserId;
                      if (closure_2_9) {
                        let tmp46;
                        const connectAndOpen = guildId(items[29]).connectAndOpen;
                        guildId(items[29]);
                        if (closure_2_1 instanceof closure_3_11) {
                          tmp46 = closure_2_1;
                        } else {
                          tmp46 = c10(closure_2_1);
                        }
                        connectAndOpen(tmp46);
                        const obj4 = guildId(items[25]);
                        obj4.transitionTo(closure_2_10);
                      } else {
                        let prop;
                        if (closure_2_2 != null) {
                          prop = closure_2_2.muteOnJoinVoiceChannel;
                        }
                        if (prop) {
                          nextResult1.setSelfMute(guildId(items[30]).MediaEngineContextTypes.DEFAULT, true);
                        }
                        const voiceChannel = nextResult.selectVoiceChannel(GUILD_HOME);
                        const tmp14 = targetType === constants3.STREAM && null != ownerId;
                        if (tmp14) {
                          const obj2 = { streamType: constants2.GUILD, ownerId, guildId, channelId: GUILD_HOME };
                          obj = closure_2(items[31]);
                          const result = obj.watchStreamAndTransitionToStream(obj2);
                        }
                        const tmp22 = targetType === constants3.EMBEDDED_APPLICATION && null != applicationId;
                        if (tmp22) {
                          let tmp28 = guildId;
                          const transitionTo = guildId(items[25]).transitionTo;
                          const CHANNEL = constants.CHANNEL;
                          guildId(items[25]);
                          if (guildId == null) {
                            tmp28 = closure_3_27;
                          }
                          transitionTo(CHANNEL(tmp28, GUILD_HOME));
                          const obj3 = {
                            channelId: GUILD_HOME,
                            applicationId,
                            intent,
                            inviterUserId,
                            analyticsLocations,
                            commandOrigin: guildId(items[33]).CommandOrigin.CHAT,
                          };
                          intent = undefined;
                          const tmp32 = channel(items[32]);
                          if (closure_2_2 != null) {
                            intent = closure_2_2.intent;
                          }
                          inviterUserId = undefined;
                          if (closure_2_2 != null) {
                            inviterUserId = closure_2_2.inviterUserId;
                          }
                          tmp32(obj3);
                        }
                      }
                    }
                    if (!closure_7) {
                      obj = guildId(analyticsLocations[34]);
                      items = [closure_1_17, closure_1_23, closure_1_16];
                      const tmp11 = nextResult.default;
                      if (obj.shouldShowMembershipVerificationGate(nextResult.default, items)) {
                        const tmp9Result = guildId(analyticsLocations[35]);
                        result = tmp9Result.openMemberVerificationModal(tmp11, connect);
                      }
                    }
                    connect();
                  });
                });
              }
              if (null != targetChannelId1 && GUILD_HOME === tmp11.targetChannelId) {
                if (guildId !== closure_2_27) {
                  function runDeepLinkJump() {
                    let guildScheduledEvent;
                    let transitionTo;
                    let transitionToResult;
                    let welcomeModalChannelId;
                    obj = closure_2;
                    const type = channel.type;
                    if (closure_2 == null) {
                      obj = {};
                    }
                    ({ transitionTo, welcomeModalChannelId, guildScheduledEvent } = obj);
                    const obj2 = {
                      source: closure_2_1(closure_2_3[24]).INVITE_ACCEPT,
                      navigationReplace: true,
                      openChannel: true,
                    };
                    const GUILD_STAGE_VOICE = constants.GUILD_STAGE_VOICE;
                    if (null != welcomeModalChannelId) {
                      obj2.welcomeModalChannelId = welcomeModalChannelId;
                    }
                    if (type === GUILD_STAGE_VOICE) {
                      const obj3 = { stageInviteKey };
                      obj2.state = obj3;
                    }
                    if (null != guildScheduledEvent) {
                      obj2.guildScheduledEventId = guildScheduledEvent.id;
                    }
                    if (null != transitionTo) {
                      transitionToResult = transitionTo(c10, obj2);
                    } else {
                      const obj4 = id(closure_2_3[25]);
                      transitionToResult = obj4.transitionTo(c10, obj2);
                    }
                    return transitionToResult;
                  }
                  const promise = closure_2_0(paths[27])(paths[37], paths.paths);
                  const nextPromise = promise.then((result) => {
                    obj = { guildId };
                    return result.default(obj);
                  });
                  nextPromise.then(runDeepLinkJump, runDeepLinkJump);
                  flag = false;
                }
              }
              let obj5 = tmp11;
              const type2 = channel.type;
              if (tmp11 == null) {
                obj5 = {};
              }
              ({ transitionTo: transitionTo2, welcomeModalChannelId, guildScheduledEvent } = obj5);
              const obj8 = { source: closure_2_1(paths[24]).INVITE_ACCEPT, navigationReplace: true };
              let GUILD_STAGE_VOICE = constants.GUILD_STAGE_VOICE;
              if (null != targetChannelId1 && GUILD_HOME === tmp11.targetChannelId) {
                obj8.openChannel = true;
              }
              if (null != welcomeModalChannelId) {
                obj8.welcomeModalChannelId = welcomeModalChannelId;
              }
              if (type2 === GUILD_STAGE_VOICE) {
                const obj9 = { stageInviteKey };
                obj8.state = obj9;
              }
              if (null != guildScheduledEvent) {
                obj8.guildScheduledEventId = guildScheduledEvent.id;
              }
              if (null != transitionTo2) {
                transitionTo2(CHANNELResult, obj8);
                flag = false;
              } else {
                const obj12 = closure_2_0(paths[25]);
                let transitionToResult = obj12.transitionTo(CHANNELResult, obj8);
                flag = false;
              }
            }
          }
          const obj7 = closure_2_0(paths[36]);
          let result =
            obj7.isActivityInTextSupportedForChannel(channel1) &&
            targetType === constants5.EMBEDDED_APPLICATION &&
            null != targetApplicationId;
          if (result) {
            let tmp51 = guildId;
            let transitionTo = closure_2_0(paths[25]).transitionTo;
            let CHANNEL = closure_2_26.CHANNEL;
            closure_2_0(paths[25]);
            if (guildId == null) {
              tmp51 = closure_2_27;
            }
            transitionTo(CHANNEL(tmp51, GUILD_HOME));
            const obj10 = {
              channelId: GUILD_HOME,
              applicationId: targetApplicationId,
              intent,
              inviterUserId,
              analyticsLocations: items,
              commandOrigin: closure_2_0(paths[33]).CommandOrigin.CHAT,
            };
            intent = undefined;
            const tmp54 = closure_2_1(paths[32]);
            if (tmp11 != null) {
              intent = tmp11.intent;
            }
            inviterUserId = undefined;
            if (tmp11 != null) {
              inviterUserId = tmp11.inviterUserId;
            }
            tmp54(obj10);
          }
        }
        let targetType1;
        if (tmp11 != null) {
          targetType1 = tmp11.targetType;
        }
        if (null == targetType1) {
          if (!closure_2_9(channel.type)) {
            const obj6 = closure_2_0(paths[23]);
            if (obj6.canSeeOnboardingHome(guildId)) {
              GUILD_HOME = constants4.GUILD_HOME;
            }
          }
        }
        const channel3 = obj.getChannel(channel.id);
        if (closure_2_20.can(closure_2_12(channel.type), channel3)) {
          id = channel.id;
        } else {
          defaultChannel = defaultChannel.getDefaultChannel(guildId, true, constants3.CREATE_INSTANT_INVITE);
          id = undefined;
          if (defaultChannel != null) {
            id = defaultChannel.id;
          }
          if (id == null) {
            id = channel.id;
          }
        }
        GUILD_HOME = id;
      }
    }
    tmp3 = flag;
  }
  return tmp3;
};
function generateAcceptInviteOptions(target_type) {
  let hasFlag;
  let hasFlag2;
  let id3;
  let num;
  let num2;
  let target_application;
  let target_user;
  const obj = {
    isGuestInvite: hasFlag(num, GuildInviteFlags.GuildInviteFlags.IS_GUEST_INVITE),
    isApplicationBypassInvite: hasFlag2(num2, GuildInviteFlags.GuildInviteFlags.IS_APPLICATION_BYPASS),
    inviterUserId: id3,
  };
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
  const getGuild = GuildStore.getGuild;
  if (guild != null) {
    id2 = guild.id;
  }
  const tmp8 = null == getGuild(id2) || target_type.new_member;
  const tmp9 = tmp8 && null != target_type.channel && metroImportAll(target_type.channel.type);
  if (tmp9) {
    obj.welcomeModalChannelId = target_type.channel.id;
  }
  if (null != target_type.guild_scheduled_event) {
    obj.guildScheduledEvent = target_type.guild_scheduled_event;
  }
  num = target_type.flags;
  hasFlag = FlagUtils.hasFlag;
  FlagUtils;
  if (num == null) {
    num = 0;
  }
  num2 = target_type.flags;
  hasFlag2 = FlagUtils.hasFlag;
  FlagUtils;
  if (num2 == null) {
    num2 = 0;
  }
  const inviter = target_type.inviter;
  id3 = undefined;
  if (inviter != null) {
    id3 = inviter.id;
  }
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
  let closure_0 = channel_id;
  const items = [];
  const result = ChannelStore.addConditionalChangeListener(f96393);
}
let body = function _transitionToGuildFromEventInvite() {
  let obj = _asyncToGenerator(async (arg0) => {
    let obj2;
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
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
            const channel_id = closure_0.channel_id;
            const guild_id = closure_0.guild_id;
            if (closure_2_7(closure_0)) {
              if (null != channel_id) {
                transitionToInviteChannelSync(channel_id);
              }
            }
            c2 = 1;
            c1 = 1;
            const obj5 = { value: obj2.transitionToGuildSync(guild_id), done: false };
            obj2 = GuildActionCreatorsDefault;
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
        return { value: "IconComponent", done: null };
      } catch (tmp11) {
        c1 = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
function trackInviteServerClicked(id5, accept, items2) {
  let tmp = items2;
  const obj = { guild_id: id5, action: accept, location_stack: tmp };
  const track = AnalyticsUtilsDefault.track;
  const INVITE_SERVER_CLICKED = constants3.INVITE_SERVER_CLICKED;
  AnalyticsUtilsDefault;
  if (items2 == null) {
    tmp = null;
  }
  track(INVITE_SERVER_CLICKED, obj);
}
PostConnectionCallbackStore.addPostConnectionCallback;
let closure_7 = GuildScheduledEventStore2.isGuildScheduledEventActive;
({
  isGuildTextChannelType: metroImportAll,
  isGuildVocalChannelOrVocalThreadType: c9,
  createChannelRecord: c10,
  ChannelRecordBase: unpackModuleId,
  getAccessPermissions: closure_12,
} = ChannelRecord);
({
  Endpoints: closure_24,
  ChannelTypes: closure_25,
  Routes: closure_26,
  ME: closure_27,
  RPCCommands: closure_28,
  GuildFeatures: closure_29,
  AnalyticEvents: closure_30,
  UserFlags: closure_31,
  Permissions: closure_32,
  AbortCodes: closure_33,
} = Constants);
const AgeGateSource = AgeGateConstants.AgeGateSource;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const StreamTypes = Constants2.StreamTypes;
const InviteTargetTypes = Constants3.InviteTargetTypes;
const STAGE_INVITE_STATE_KEY = StageChannelsConstants.STAGE_INVITE_STATE_KEY;
let invite = "invite";
let c40 = null;
body = {
  resolveInvite(code, arg1, arg2) {
    let closure_1;
    let nextPromise;
    const f96395 = () => {
      let nextPromise;
      let obj = DispatcherDefault;
      if (obj.isDispatching()) {
        const resolved = Promise.resolve();
        nextPromise = resolved.then(f96395);
      } else {
        let obj2 = { type: "INVITE_RESOLVE", code };
        const tmp4Result = DispatcherDefault;
        tmp4Result.dispatch(obj2);
        const promise = resolveInviteDefault(code, closure_1, closure_2);
        nextPromise = promise.then(f96396);
      }
      return nextPromise;
    };
    const f96396 = (result) => {
      ({ invite, code } = result);
      if (null != invite) {
        const obj2 = { type: "INVITE_RESOLVE_SUCCESS", invite, code };
        const obj3 = closure_1_1(closure_1_3[39]);
        obj3.dispatch(obj2);
      } else {
        const obj4 = { type: "INVITE_RESOLVE_FAILURE", code, banned: tmp };
        const obj = closure_1_1(closure_1_3[39]);
        obj.dispatch(obj4);
      }
      return { invite, code };
    };
    importDefault = arg1;
    let closure_2 = arg2;
    const tmp = importDefault;
    let obj = DispatcherDefault;
    if (obj.isDispatching()) {
      let resolved = Promise.resolve();
      nextPromise = resolved.then(f96395);
    } else {
      let obj2 = { type: "INVITE_RESOLVE", code };
      const tmpResult = DispatcherDefault;
      const dispatchResult = tmpResult.dispatch(obj2);
      let promise = resolveInviteDefault(code, arg1, arg2);
      nextPromise = promise.then(f96396);
    }
    return nextPromise;
  },
  getInviteContext(location, guild) {
    let id;
    let id1;
    let type;
    guild = undefined;
    const obj = { location, location_guild_id: id, location_channel_id: id1, location_channel_type: type };
    if (guild != null) {
      guild = guild.guild;
    }
    id = undefined;
    if (null != guild) {
      id = guild.guild.id;
    }
    let channel;
    if (guild != null) {
      channel = guild.channel;
    }
    id1 = undefined;
    if (null != channel) {
      id1 = guild.channel.id;
    }
    let channel1;
    if (guild != null) {
      channel1 = guild.channel;
    }
    type = undefined;
    if (null != channel1) {
      type = guild.channel.type;
    }
    return obj;
  },
  createInvite(arg0) {
    let closure_0 = arg0;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    let closure_2 = arg2;
    return (async function () {
      let _location;
      let closure_1;
      let obj6;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
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
              closure_0 = tmp4;
              body = undefined;
              c3 = 1;
              const obj4 = {};
              const merged = Object.assign(obj);
              const role_ids = obj4.role_ids;
              let length;
              if (role_ids != null) {
                length = role_ids.length;
              }
              if (0 === length) {
                delete obj12[tmp37];
              }
              const HTTP = closure_0(c3[45]).HTTP;
              const request = {
                url: closure_1_24.INSTANT_INVITES(closure_0),
                body: obj4,
                context: obj6,
                rejectWithError: true,
              };
              const post = HTTP.post;
              obj6 = { location: _location };
              c4 = 2;
              c5 = 1;
              const obj7 = { value: post(request), done: false };
              return obj7;
            }
          } else if (1 === c4) {
            c3 = 0;
            const obj8 = { type: "INSTANT_INVITE_CREATE_FAILURE", channelId: closure_129_0 };
            const obj5 = _location(c3[39]);
            obj5.dispatch(obj8);
            const self = this;
            const self2 = this;
            const tmp23 = new _location(c3[46])(_location);
            throw tmp23;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            body = value.body;
            obj = tmp(c3[39]);
            const obj10 = { type: "INSTANT_INVITE_CREATE_SUCCESS", channelId: closure_129_0, invite: body };
            obj.dispatch(obj10);
            c3 = 0;
            c5 = 3;
            const obj11 = { value: body, done: true };
            return obj11;
          }
        } catch (tmp31) {
          _location = tmp31;
          if (0 === c3) {
            c5 = 3;
            throw tmp31;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  mobileCreateInvite(c4, GROUP_DM) {
    let closure_0 = c4;
    let closure_1 = GROUP_DM;
    const self = this;
    return (async () => {
      let closure_0;
      let code;
      let tmp;
      invite = invite.getInvite(tmp.id);
      const tmp17 = tmp;
      if (null != invite) {
        if (!invite.isExpired()) {
          let c2 = 3;
          const obj4 = { value: invite.code, done: true };
          return obj4;
        }
      }
      const obj5 = { max_age: v1(dependencyMap[47]).Seconds.DAY };
      const invite1 = self.createInvite(tmp17.id, obj5, GROUP_DM);
      await invite1.catch(() => {
        const obj = v1(closure_1_3[39]);
        return obj.dispatch({ type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED" });
      });
      tmp = value;
      if (tmp != null) {
        code = tmp.code;
      }
      return code;
    })();
  },
  getAllFriendInvites(arg0) {
    let closure_0 = arg0;
    return (async function () {
      let c2;
      let date;
      let date1;
      let obj5;
      let obj9;
      let value;
      let closure_1 = tmp4;
      const self5 = this;
      const self6 = this;
      const promise = new Promise((arg0) => {
        closure_0 = arg0;
        const obj = closure_1_1(closure_1_3[39]);
        return obj.wait(() => closure_0(null));
      });
      await promise;
      if (friendInvitesFetching.getFriendInvitesFetching()) {
        let nextPromise;
        if (null != value) {
          nextPromise = value.then((body) => body.body);
        } else {
          const _Error = Error;
          const self3 = this;
          const self4 = this;
          const error = new Error("Invalid friend invite fetch request");
          nextPromise = reject(error);
        }
        return nextPromise;
      }
      const HTTP = tmp(c3[45]).HTTP;
      const obj8 = { url: constants.FRIEND_INVITES, context: obj9, rejectWithError: obj5.rejectWithMigratedError() };
      obj9 = { location: closure_129_0 };
      const get = HTTP.get;
      obj5 = tmp(c3[45]);
      value = get(obj8);
      const obj10 = { type: "FRIEND_INVITES_FETCH_REQUEST", requestedAt: date };
      const _Date = Date;
      const self = this;
      const self2 = this;
      const dispatch = closure_1(c3[39]).dispatch;
      const tmp12 = closure_1(c3[39]);
      date = new Date();
      dispatch(obj10);
      await value;
      body = value.body;
      value = null;
      const obj13 = { type: "FRIEND_INVITES_FETCH_RESPONSE", receivedAt: date1, invites: body };
      const _Date2 = Date;
      const self7 = this;
      const self8 = this;
      const dispatch2 = closure_1(c3[39]).dispatch;
      const tmp37 = closure_1(c3[39]);
      date1 = new Date();
      dispatch2(obj13);
      return body;
    })();
  },
  createFriendInvite(arg0, location) {
    let tmp3Result;
    body = arg0;
    let obj2 = DispatcherDefault;
    obj2.dispatch({ type: "FRIEND_INVITE_CREATE_REQUEST" });
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: closure_24.FRIEND_INVITES,
      body,
      context: { location },
      rejectWithError: tmp3Result.rejectWithMigratedError(),
    };
    const post = HTTP.post;
    if (arg0 == null) {
      body = {};
    }
    tmp3Result = HTTPUtils;
    const postResult = post(request);
    return postResult.then(
      (body) => {
        body = body.body;
        const obj = DispatcherDefault;
        obj.dispatch({ type: "FRIEND_INVITE_CREATE_SUCCESS", invite: body });
        return body;
      },
      (error) => {
        const obj = DispatcherDefault;
        const obj2 = { type: "FRIEND_INVITE_CREATE_FAILURE", error };
        obj.dispatch(obj2);
        throw error;
      },
    );
  },
  revokeFriendInvites() {
    let obj3;
    let obj4;
    let obj = DispatcherDefault;
    obj.dispatch({ type: "FRIEND_INVITE_REVOKE_REQUEST" });
    const HTTP = HTTPUtils.HTTP;
    const obj2 = { url: closure_24.FRIEND_INVITES, context: obj3, rejectWithError: obj4.rejectWithMigratedError() };
    const del = HTTP.del;
    obj3 = { location: location };
    obj4 = HTTPUtils;
    const delResult = del(obj2);
    return delResult.then((body) => {
      body = body.body;
      const obj = DispatcherDefault;
      obj.dispatch({ type: "FRIEND_INVITE_REVOKE_SUCCESS", invites: body });
    });
  },
  revokeFriendInvite(arg0) {
    let obj2;
    const HTTP = HTTPUtils.HTTP;
    const del = HTTP.del;
    const obj = { url: closure_24.INVITE(arg0), rejectWithError: obj2.rejectWithMigratedError() };
    obj2 = HTTPUtils;
    return del(obj);
  },
  fetchFriendMembers(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let closure_1;
      let obj6;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let num = 2;
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
              const code = tmp4;
              body = undefined;
              c3 = 1;
              const obj5 = {
                url: closure_1_24.INVITE_FRIEND_MEMBERS(code),
                trackedActionData: obj6,
                rejectWithError: true,
              };
              const get = tmp(c3[48]).get;
              const tmp26 = tmp(c3[48]);
              obj6 = {
                event: code(c3[49]).NetworkActionNames.INVITE_FRIEND_MEMBERS_FETCH,
                properties(body) {
                  let num;
                  const obj = { code, friend_count: num };
                  num = undefined;
                  const exact = code(c3[50]).exact;
                  code(c3[50]);
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
                  return exact(obj);
                },
              };
              c4 = 2;
              c5 = 1;
              const obj7 = { value: get(obj5), done: false };
              return obj7;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              const obj8 = { type: "INVITE_FRIEND_MEMBERS_FETCH_FAILURE", code: closure_129_0 };
              const obj4 = tmp(c3[39]);
              obj4.dispatch(obj8);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              body = value.body;
              let obj = tmp(c3[39]);
              const obj10 = {
                type: "INVITE_FRIEND_MEMBERS_FETCH_SUCCESS",
                code: closure_129_0,
                friendMemberIds: body.friend_member_ids,
              };
              obj.dispatch(obj10);
              c3 = 0;
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp18) {
          let closure_2 = tmp18;
          if (0 === c3) {
            c5 = 3;
            throw tmp18;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  clearInviteFromStore(channelId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "INSTANT_INVITE_CLEAR", channelId };
    obj.dispatch(obj2);
  },
  revokeInvite(invite) {
    let obj2;
    let obj3;
    const code = invite.code;
    const channel = invite.channel;
    const tmp = channel(5089);
    let obj = {
      url: closure_24.INVITE(code),
      oldFormErrors: true,
      trackedActionData: obj2,
      rejectWithError: obj3.rejectWithMigratedError(),
    };
    const _delete = tmp.delete;
    obj2 = {
      event: code(1260).NetworkActionNames.INVITE_REVOKE,
      properties: { uses: invite.uses, max_uses: invite.maxUses, max_age: invite.maxAge, invite_type: invite.type },
    };
    obj3 = code(1282);
    const _deleteResult = _delete(obj);
    return _deleteResult.then(() => {
      const obj = DispatcherDefault;
      const obj2 = { type: "INSTANT_INVITE_REVOKE_SUCCESS", code, channelId: channel.id };
      obj.dispatch(obj2);
    });
  },
  acceptInvite(inviteKey) {
    let context;
    let obj4;
    let promise;
    let target_channel_id;
    let target_message_id;
    let tmp8;
    let tmpResult2;
    inviteKey = inviteKey.inviteKey;
    ({ context, callback: importDefault, skipOnboarding: importAll } = inviteKey);
    let guild_scheduled_event;
    target_channel_id = undefined;
    target_message_id = undefined;
    let guildScheduledEventId;
    let self = this;
    const tmp = inviteKey;
    let obj = inviteKey(guild_scheduled_event[51]);
    let result = obj.parseInviteCodeFromInviteKey(inviteKey);
    let c8 = result;
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
      tmp8 = id;
    } else {
      const tmpResult = tmp(guild_scheduled_event[51]);
      const result1 = tmpResult.parseExtraDataFromInviteKey(inviteKey);
      guildScheduledEventId = result1.guildScheduledEventId;
      ({ targetChannelId: target_channel_id, targetMessageId: target_message_id } = result1);
    }
    let obj2 = { invite_guild_scheduled_event_id: tmp8 };
    let merged = Object.assign(context);
    const currentUser = UserStore.getCurrentUser();
    let hasFlagResult;
    if (currentUser != null) {
      hasFlagResult = currentUser.hasFlag(constants4.QUARANTINED);
    }
    if (hasFlagResult) {
      require("openQuarantineModeInfoModal")();
      let tmp19 = globalThis;
      self = this;
      const self2 = this;
      promise = new Promise((arg0, fn) => {
        const error = new Error();
        return fn(error);
      });
    } else {
      let obj3 = { type: "INVITE_ACCEPT", code: inviteKey };
      const tmp13Result = require("Dispatcher");
      tmp13Result.dispatch(obj3);
      const HTTP = tmp(tmp2[45]).HTTP;
      const request = {
        url: closure_24.INVITE(result),
        context: obj2,
        oldFormErrors: true,
        body: obj4,
        rejectWithError: tmpResult2.rejectWithMigratedError(),
      };
      const post = HTTP.post;
      obj4 = {
        session_id: sessionId,
        invite_instance_id: context.invite_instance_id,
        received_installation_id: receivedInstallationIdForInviteCode,
      };
      tmpResult2 = tmp(guild_scheduled_event[45]);
      const then = post(request).then;
      post(request);
      let closure_0 = target_channel_id((code) => {
        let closure_2;
        c8 = 0;
        let c9 = 0;
        return (function* (arg0) {
          if (c9 === 2) {
            c9 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              return { value, done: true };
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let obj6;
              let guildId;
              c9 = 2;
              if (0 === c8) {
                if (arg0 === 1) {
                  c9 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c9 = 3;
                  return { value, done: true };
                } else {
                  closure_7 = tmp4;
                  closure_6 = tmp;
                  obj6 = undefined;
                  guildId = undefined;
                  target_message_id = undefined;
                  if (null != c9) {
                    const result = closure_7.clearReceivedInstallationIdForInviteCode(c8);
                  }
                  const obj4 = { type: "INVITE_ACCEPT_SUCCESS", invite: code.body, code };
                  const obj5 = closure_2_1(paths[39]);
                  obj5.dispatch(obj4);
                  guild_scheduled_event = target_message_id;
                  if (target_message_id == null) {
                    guild_scheduled_event = guildScheduledEvent.getGuildScheduledEvent(closure_6);
                  }
                  obj6 = { guild_scheduled_event, target_channel_id: guildId, target_message_id };
                  const merged = Object.assign(code.body);
                  target_channel_id = code.body.target_channel_id;
                  guildId = target_channel_id;
                  if (target_channel_id == null) {
                    guildId = id;
                  }
                  target_message_id = code.body.target_message_id ?? c5;
                  const guild_id = obj6.guild_id;
                  id = guild_id;
                  if (guild_id == null) {
                    const guild = obj6.guild;
                    id = undefined;
                    if (guild != null) {
                      id = guild.id;
                    }
                  }
                  guildId = id;
                  const flags = obj6.flags;
                  c5 = flags;
                  const hasFlag = code(paths[21]).hasFlag;
                  code(paths[21]);
                  const tmp26 = id;
                  if (flags == null) {
                    c5 = 0;
                  }
                  const tmp30 = guildId;
                  if (!tmp30) {
                    if (!hasFlag(c5, code(paths[22]).GuildInviteFlags.IS_GUEST_INVITE)) {
                      if (null != tmp26) {
                        if (obj6.new_member) {
                          if (!obj6.show_verification_form) {
                            c8 = 1;
                            c9 = 1;
                            const obj7 = { value: code(paths[27])(paths[37], paths.paths), done: false };
                            return obj7;
                          }
                        }
                      }
                    }
                  }
                }
              } else if (1 === c8) {
                if (arg0 === 1) {
                  c9 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c9 = 3;
                  return { value, done: true };
                } else {
                  target_message_id = value.default;
                  c8 = 2;
                  c9 = 1;
                  const obj9 = { guildId };
                  const obj10 = { value: target_message_id(obj9), done: false };
                  return obj10;
                }
              } else if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 3;
                return { value, done: true };
              }
              if (guild_scheduled_event != null) {
                tmp32(obj6);
              }
              c9 = 3;
              return { value: code.body, done: true };
            } catch (tmp39) {
              c9 = 3;
              throw tmp39;
            }
          }
        })();
      });
      promise = then(
        function () {
          return closure_0(...arguments);
        },
        (body) => {
          let code2;
          let obj3;
          body = body.body;
          let code;
          if (body != null) {
            code = body.code;
          }
          if (code === constants.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED) {
            const obj = AgeGateModalActionCreators;
            obj.openAgeGateModal(AgeGateSource.JOIN_LARGE_GUILD_UNDERAGE);
          }
          const body2 = body.body;
          let code1;
          if (body2 != null) {
            code1 = body2.code;
          }
          if (code1 === constants.USER_GUILD_JOIN_AGE_RESTRICTED_IOS_DISALLOWED) {
            let id;
            const showNSFWGuildJoinGate = showNSFWGuildJoinGate2.showNSFWGuildJoinGate;
            showNSFWGuildJoinGate2;
            if (invite != null) {
              const guild = invite.guild;
              if (guild != null) {
                id = guild.id;
              }
            }
            const result = showNSFWGuildJoinGate(id);
          }
          const body3 = body.body;
          let message;
          const obj2 = { type: "INVITE_ACCEPT_FAILURE", code: inviteKey, error: obj3 };
          const dispatch = DispatcherDefault.dispatch;
          DispatcherDefault;
          if (body3 != null) {
            message = body3.message;
          }
          const body4 = body.body;
          obj3 = { message, code: code2 };
          code2 = undefined;
          if (body4 != null) {
            code2 = body4.code;
          }
          dispatch(obj2);
          const tmp19 = new errors_V6OrEarlierAPIErrorDefault(body);
          throw tmp19;
        },
      );
    }
    return promise;
  },
  acceptInviteAndTransitionToInviteChannel(inviteKey) {
    let require;
    ({ analyticsLocations: require, callback: importDefault, autoJoin: importAll } = inviteKey);
    let obj = {
      inviteKey: inviteKey.inviteKey,
      context: inviteKey.context,
      skipOnboarding: inviteKey.skipOnboarding,
      callback(channel) {
        let paths;
        let stageInviteKey;
        if (null != channel.channel) {
          let obj = { autoJoin: importAll };
          const merged = Object.assign(generateAcceptInviteOptions(channel));
          let items = _require;
          let id = channel.channel.id;
          if (_require == null) {
            items = [];
          }
          if (items === undefined) {
            items = [];
          }
          let result = ChannelStore.addConditionalChangeListener(f96393);
        }
        if (null != importDefault) {
          tmp7(channel);
        }
      },
    };
    return this.acceptInvite(obj);
  },
  transitionToInvite(flags, arg1) {
    let channel;
    let dMFromUserId;
    let forceTransition;
    let guild;
    let intent;
    let inviter;
    let muteOnJoinVoiceChannel;
    let transitionTo;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    ({ transitionTo, muteOnJoinVoiceChannel, intent, forceTransition } = obj);
    ({ channel, guild, inviter } = flags);
    if (null == channel) {
      if (null == guild) {
        if (null != inviter) {
          dMFromUserId = null;
          if (RelationshipStore.isFriend(inviter.id)) {
            dMFromUserId = ChannelStore.getDMFromUserId(inviter.id);
          }
          if (null != dMFromUserId) {
            let closure_2 = [];
            const result = ChannelStore.addConditionalChangeListener(f96393);
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
        const obj6 = obj(12752);
        obj6.onOpenHubInvite(flags);
      }
    }
    let num = flags.flags;
    if (num == null) {
      num = 0;
    }
    const obj2 = dMFromUserId(1390);
    let hasFlagResult = obj2.hasFlag(num, dMFromUserId(8078).GuildInviteFlags.IS_GUEST_INVITE);
    if (!hasFlagResult) {
      const tmp6Result = dMFromUserId(1390);
      hasFlagResult = tmp6Result.hasFlag(num, tmp6(8078).GuildInviteFlags.IS_APPLICATION_BYPASS);
    }
    if (null != guild) {
      if (!hasFlagResult) {
        if (flags.new_member) {
          const tmp6Result3 = dMFromUserId(12753);
          if (tmp6Result3.inviteGuildHasPendingMemberDisabledVerification(guild)) {
            const tmp6Result4 = dMFromUserId(12753);
            const result1 = tmp6Result4.openVerificationModalOrTransitionToApplication(guild.id);
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
      let closure_1 = tmp18;
      closure_2 = [];
      const result2 = ChannelStore.addConditionalChangeListener(f96393);
    }
  },
  openNativeAppModal(inviteKey) {
    const obj = InviteCodeUtils;
    const result = obj.parseExtraDataFromInviteKey(inviteKey);
    const obj2 = {
      installationId: AuthenticationStore.getInstallationForTracking(),
      targetChannelId: result.targetChannelId,
      targetMessageId: result.targetMessageId,
      guildScheduledEventId: result.guildScheduledEventId,
    };
    const obj3 = CodedLinkActionCreatorsDefault;
    obj3.openNativeAppModal(result.baseCode, constants.INVITE_BROWSER, obj2);
  },
  transitionToInviteOnboarding(baseCode) {
    let id;
    let target_channel_id;
    let target_message_id;
    let tmp3Result;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    let transitionTo = obj.transitionTo;
    if (undefined === transitionTo) {
      transitionTo = router_utils.transitionTo;
    }
    const obj2 = {
      baseCode: baseCode.code,
      targetChannelId: target_channel_id,
      targetMessageId: target_message_id,
      guildScheduledEventId: id,
    };
    target_channel_id = baseCode.target_channel_id;
    const generateInviteKeyFromExtraData = InviteCodeUtils.generateInviteKeyFromExtraData;
    target_message_id = baseCode.target_message_id;
    const guild_scheduled_event = baseCode.guild_scheduled_event;
    id = undefined;
    InviteCodeUtils;
    if (guild_scheduled_event != null) {
      id = guild_scheduled_event.id;
    }
    const inviteKeyFromExtraData = generateInviteKeyFromExtraData(obj2);
    const obj3 = { search: tmp3Result.getInviteKeySearchSuffix(inviteKeyFromExtraData) };
    const result = prioritySpeakerDucking.APP_WITH_INVITE_AND_GUILD_ONBOARDING(baseCode.code);
    tmp3Result = InviteCodeUtils;
    transitionTo(result, obj3);
  },
  openApp(code, targetChannelId, fingerprint, username, inviteType) {
    let inviteDynamicLinkTemplate;
    let prop;
    let str8;
    let tmp18;
    let tmp18Result2;
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
    let obj2 = DispatcherDefault;
    const obj3 = { type: "INVITE_APP_OPENING", code };
    obj2.dispatch(obj3);
    if (null != _modDef5410.ua) {
      const str = _modDef5410.ua;
      const formatted = str.toLowerCase();
      if (formatted.indexOf("googlebot") > -1) {
        const obj6 = { type: "INVITE_APP_NOT_OPENED", code };
        const tmp7Result = DispatcherDefault;
        tmp7Result.dispatch(obj6);
      }
    }
    const os = _modDef5410.os;
    let family;
    if (os != null) {
      family = os.family;
    }
    if ("Android" !== family) {
      const os2 = _modDef5410.os;
      let family1;
      if (os2 != null) {
        family1 = os2.family;
      }
      if ("iOS" !== family1) {
        let combined;
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
          combined = "discord://" + substr;
        }
        const tmp7Result4 = ProtocolUtilsDefault;
        tmp7Result4.launch(combined, (arg0) => {
          let obj;
          const dispatch = DispatcherDefault.dispatch;
          DispatcherDefault;
          if (arg0) {
            obj = { type: "INVITE_APP_OPENED", code };
            const obj2 = { type: "INVITE_APP_OPENED", code };
          } else {
            obj = { type: "INVITE_APP_NOT_OPENED", code };
          }
          dispatch(obj);
        });
      }
    }
    if (null != baseCode) {
      const obj5 = require("DynamicLinkTemplates");
      inviteDynamicLinkTemplate = obj5.getInviteDynamicLinkTemplate(baseCode);
      tmp18 = _require;
    } else {
      tmp18 = _require;
      const obj4 = require("DynamicLinkTemplates");
      inviteDynamicLinkTemplate = obj4.getDefaultDynamicLinkTemplate();
    }
    const tmp18Result = tmp18(12755);
    const attemptId = tmp18Result.generateAttemptId();
    inviteType = undefined;
    const tmp7Result5 = generateDynamicLinkDefault;
    if (inviteType != null) {
      inviteType = inviteType.inviteType;
    }
    let str7 = "friend_invite";
    if (2 !== inviteType) {
      str7 = invite;
    }
    const obj7 = {
      utmSource: str7,
      fingerprint,
      installationId: AuthenticationStore.getInstallationForTracking(),
      username,
      attemptId,
      event: prop,
      channel: targetChannelId,
      message: targetMessageId,
      didRegister: str8,
      iosFallbackLink: "https://discord.com/api/download/mobile?invite_code=" + baseCode,
    };
    prop = undefined;
    if (result != null) {
      prop = result.guildScheduledEventId;
    }
    let didRegister;
    if (inviteType != null) {
      didRegister = inviteType.didRegister;
    }
    str8 = undefined;
    if (true === didRegister) {
      str8 = "true";
    }
    combined = tmp7Result5(inviteDynamicLinkTemplate, obj7);
    const obj8 = {
      fingerprint: tmp18Result2.maybeExtractId(fingerprint),
      attempt_id: attemptId,
      source: invite,
      invite_code: baseCode,
    };
    const track = AnalyticsUtilsDefault.track;
    const DEEP_LINK_CLICKED = constants3.DEEP_LINK_CLICKED;
    AnalyticsUtilsDefault;
    tmp18Result2 = tmp18(1265);
    track(DEEP_LINK_CLICKED, obj8);
  },
  setReceivedInstallationIdForInviteCode(result1, installationId) {
    const obj = DispatcherDefault;
    const obj2 = {
      type: "INSTANT_INVITE_RECEIVED_INSTALLATION_ID_SET",
      inviteCode: result1,
      receivedInstallationId: installationId,
    };
    obj.dispatch(obj2);
  },
  clearReceivedInstallationIdForInviteCode(c8) {
    const obj = DispatcherDefault;
    const obj2 = { type: "INSTANT_INVITE_RECEIVED_INSTALLATION_ID_CLEAR", inviteCode };
    obj.dispatch(obj2);
  },
  trackInviteServerClicked,
};
let result = size.fileFinishedImporting("actions/InstantInviteActionCreators.tsx");

export default body;
export const transitionToGuildFromEventInvite = function transitionToGuildFromEventInvite() {
  return obj(...arguments);
};
export const trackInviteEmbedActioned = function trackInviteEmbedActioned(action, items1) {
  let application_id;
  let invite_instance_id;
  let invite_message_id;
  let inviter_id;
  let number_of_users_in_channel;
  let str1;
  let stream_key;
  let tmp3;
  ({
    invite,
    inviter_id,
    invite_message_id,
    invite_instance_id,
    application_id,
    stream_key,
    number_of_users_in_channel,
  } = action);
  action = action.action;
  const obj = {
    action,
    invite_code: invite.code,
    invite_type: str1,
    inviter_id,
    invite_message_id,
    invite_instance_id,
    application_id,
    stream_key,
    number_of_users_in_channel,
    location_stack: tmp3,
  };
  str1 = undefined;
  const track = AnalyticsUtilsDefault.track;
  const INVITE_EMBED_ACTIONED = constants3.INVITE_EMBED_ACTIONED;
  AnalyticsUtilsDefault;
  if (invite.type != null) {
    str1 = str.toString();
  }
  if (inviter_id == null) {
    inviter_id = null;
  }
  if (invite_message_id == null) {
    invite_message_id = null;
  }
  if (invite_instance_id == null) {
    invite_instance_id = null;
  }
  if (application_id == null) {
    application_id = null;
  }
  if (stream_key == null) {
    stream_key = null;
  }
  if (number_of_users_in_channel == null) {
    number_of_users_in_channel = null;
  }
  tmp3 = items1;
  if (items1 == null) {
    tmp3 = null;
  }
  track(INVITE_EMBED_ACTIONED, obj);
};
export { trackInviteServerClicked };
