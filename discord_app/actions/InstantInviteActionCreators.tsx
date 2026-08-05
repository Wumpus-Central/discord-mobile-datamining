import { format } from "../../_runtime/04603_format.js";
import { getInviteDynamicLinkTemplate } from "../../discord_common/js/packages/dynamic-links/DynamicLinkTemplates.tsx";
import { generateDynamicLink } from "../../discord_common/js/packages/dynamic-links/generateDynamicLink.tsx";
import { sendRequest } from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { isTablet } from "../../discord_common/js/shared/lib/PlatformUtils.tsx";
import { set } from "../../discord_common/js/shared/shared-constants/GuildInviteFlags.tsx";
import { hasFlag } from "../../discord_common/js/shared/utils/FlagUtils.tsx";
import { dispatcher } from "../Dispatcher.tsx";
import { CodedLinkActionCreators } from "../modules/coded_links/web/CodedLinkActionCreators.tsx";
import { readSnowflake } from "../modules/instant_invite/InviteCodeUtils.tsx";
import { transitionTo } from "../modules/routing/router_utils.tsx";
import { expandEventProperties } from "../utils/AnalyticsUtils.tsx";
// discord_app/actions/InstantInviteActionCreators.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import scheduledEventSort from "scheduledEventSort";
import { isGuildScheduledEventActive as closure_7 } from "scheduledEventSort";
import createChannelRecord from "createChannelRecord";
import fetchFingerprint from "fetchFingerprint";
import closure_14 from "ensureGuildLoaded";
import comparator from "comparator";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import map from "map";
import updateInvite from "updateInvite";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import upsertRelationship from "upsertRelationship";
import handleConnectionOpen from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { AgeGateSource } from "result";
import { StaticChannelRoute } from "set";
import { StreamTypes } from "StreamIssueReportReasons";
import { InviteTargetTypes } from "InviteSendStates";
import { STAGE_INVITE_STATE_KEY } from "MAX_STAGE_TOPIC_LENGTH";

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
let unpackModuleId;
const require = arg1;
function generateAcceptInviteOptions(target_type) {
  let target_application;
  let target_user;
  const obj = {};
  target_type = target_type.target_type;
  if (InviteTargetTypes.STREAM === target_type) {
    ({ target_type: obj.targetType, target_user } = target_type);
    let id;
    if (target_user != null) {
      id = target_user.id;
    }
    obj.targetUserId = id;
  } else if (tmp.EMBEDDED_APPLICATION === target_type) {
    ({ target_type: obj.targetType, target_application } = target_type);
    let id1;
    if (target_application != null) {
      id1 = target_application.id;
    }
    obj.targetApplicationId = id1;
  } else if (tmp.ROLE_SUBSCRIPTIONS_PURCHASE === target_type) {
    obj.targetType = target_type.target_type;
  }
  const guild = target_type.guild;
  let id2;
  if (guild != null) {
    id2 = guild.id;
  }
  const tmp8 = null == guild.getGuild(id2) || target_type.new_member;
  let tmp9 = tmp8;
  if (tmp8) {
    tmp9 = null != target_type.channel;
  }
  if (tmp9) {
    tmp9 = callback2(target_type.channel.type);
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
  obj.isGuestInvite = hasFlag /* hasFlag */.hasFlag(num, set /* set */.GuildInviteFlags.IS_GUEST_INVITE);
  const obj2 = hasFlag /* hasFlag */;
  let num2 = target_type.flags;
  if (num2 == null) {
    num2 = 0;
  }
  obj.isApplicationBypassInvite = hasFlag /* hasFlag */.hasFlag(num2, set /* set */.GuildInviteFlags.IS_APPLICATION_BYPASS);
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
function transitionToInviteChannelSync(arg0, arg1) {
  let closure_0 = arg0;
  let items;
  items = [];
  const result = closure_14.addConditionalChangeListener(() => {
    let c4;
    let guildScheduledEvent;
    let targetType;
    let transitionTo;
    let welcomeModalChannelId;
    let obj = outer1_14;
    transitionTo = outer1_14.getChannel(guildId);
    const currentUser = outer1_23.getCurrentUser();
    if (null == transitionTo || null == currentUser) {
      return tmp3;
    } else {
      let guildScheduledEvent1 = transitionTo.nsfw && !currentUser.nsfwAllowed;
      if (!guildScheduledEvent1) {
        let isGuildVocalOrThreadResult = transitionTo.isGuildVocalOrThread();
        if (isGuildVocalOrThreadResult) {
          let obj2 = id(outer1_3[41]);
          isGuildVocalOrThreadResult = obj2.maybeOpenAgeGateForVoiceChannel(tmp);
        }
        guildScheduledEvent1 = isGuildVocalOrThreadResult;
      }
      if (!guildScheduledEvent1) {
        let isGuildVocalOrThreadResult1 = transitionTo.isGuildVocalOrThread();
        if (isGuildVocalOrThreadResult1) {
          isGuildVocalOrThreadResult1 = id(outer1_3[42]).maybeOpenSpoilerGateForVoiceChannel(tmp);
          let obj4 = id(outer1_3[42]);
        }
        guildScheduledEvent1 = isGuildVocalOrThreadResult1;
      }
      let flag = !guildScheduledEvent1;
      if (!guildScheduledEvent1) {
        guildScheduledEvent = undefined;
        if (transitionTo != null) {
          guildScheduledEvent = tmp10.guildScheduledEvent;
        }
        if (null != guildScheduledEvent) {
          guildScheduledEvent1 = tmp10.guildScheduledEvent;
          guildId = guildScheduledEvent1;
          transitionTo = tmp10.welcomeModalChannelId;
          flag = false;
          if (null != guildScheduledEvent1) {
            outer1_5(() => {
              const obj = { guildScheduledEventId: guildId.id };
              if (null != transitionTo) {
                obj.welcomeModalChannelId = transitionTo;
              }
              const result = guildId(items[38]).transitionToEventDetailsFromInvite(guildId, obj);
            });
            flag = false;
          }
        } else {
          guildId = transitionTo.getGuildId();
          if (guildId == null) {
            guildId = outer1_27;
          }
          let items = tmp10;
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
          const guild = outer1_17.getGuild(guildId);
          if (guild != null) {
            const features = guild.features;
            const hasItem = features.has(outer1_29.MEMBER_VERIFICATION_MANUAL_APPROVAL);
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
                  let CHANNELResult = outer1_22;
                  guildScheduledEvent1 = outer1_22.getGuildId();
                  flag = false;
                }
              }
            }
          }
          const type = transitionTo.type;
          let targetChannelId;
          const channel = obj.getChannel(transitionTo.id);
          if (tmp10 != null) {
            targetChannelId = tmp10.targetChannelId;
          }
          if (null != targetChannelId) {
            const channel1 = obj.getChannel(targetChannelId);
            if (null != channel1) {
              GUILD_HOME = targetChannelId;
            }
            closure_9 = type === outer1_25.GUILD_STAGE_VOICE;
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
            CHANNELResult = outer1_26.CHANNEL(guildId, GUILD_HOME, tmp39);
            c10 = CHANNELResult;
            if (GUILD_HOME === transitionTo.id) {
              if (outer1_9(type)) {
                let autoJoin;
                if (tmp10 != null) {
                  autoJoin = tmp10.autoJoin;
                }
                if (false !== autoJoin) {
                  outer1_5(() => {
                    guildId(items[27])(items[26], items.paths).then((guildId) => {
                      let closure_0 = guildId.default;
                      function connect() {
                        if (outer1_9) {
                          if (outer1_1 instanceof outer2_11) {
                            let tmp44 = tmp41;
                          } else {
                            tmp44 = outer2_10(tmp41);
                          }
                          outer2_0(outer2_3[28]).connectAndOpen(tmp44);
                          const obj6 = outer2_0(outer2_3[28]);
                          outer2_0(outer2_3[25]).transitionTo(outer1_10);
                        } else {
                          let prop;
                          if (outer1_2 != null) {
                            prop = tmp.muteOnJoinVoiceChannel;
                          }
                          if (prop) {
                            let obj = outer2_1(outer2_3[29]);
                            obj.setSelfMute(outer2_0(outer2_3[30]).MediaEngineContextTypes.DEFAULT, true);
                          }
                          const voiceChannel = closure_0.selectVoiceChannel(outer1_8);
                          let tmp14 = outer1_5 === outer2_37.STREAM;
                          if (tmp14) {
                            tmp14 = null != outer1_4;
                          }
                          if (tmp14) {
                            obj = { streamType: null, ownerId: null, guildId: null, channelId: null };
                            obj[0] = outer2_36.GUILD;
                            obj[1] = outer1_4;
                            obj[2] = closure_0;
                            obj[3] = tmp10;
                            const result = outer2_2(outer2_3[31]).watchStreamAndTransitionToStream(obj);
                            const obj2 = outer2_2(outer2_3[31]);
                          }
                          let tmp22 = outer1_5 === outer2_37.EMBEDDED_APPLICATION;
                          if (tmp22) {
                            tmp22 = null != outer1_6;
                          }
                          if (tmp22) {
                            let tmp27 = closure_0;
                            if (closure_0 == null) {
                              tmp27 = outer2_27;
                            }
                            outer2_0(outer2_3[25]).transitionTo(outer2_26.CHANNEL(tmp27, tmp10));
                            obj = { channelId: null, applicationId: null, intent: null, inviterUserId: null, analyticsLocations: null, commandOrigin: null };
                            obj[0] = tmp10;
                            obj[1] = outer1_6;
                            let intent;
                            const obj4 = outer2_0(outer2_3[25]);
                            if (tmp != null) {
                              intent = tmp.intent;
                            }
                            obj[2] = intent;
                            let inviterUserId;
                            if (tmp != null) {
                              inviterUserId = tmp.inviterUserId;
                            }
                            obj[3] = inviterUserId;
                            obj[4] = outer1_3;
                            obj[5] = outer2_0(outer2_3[33]).CommandOrigin.CHAT;
                            outer2_1(outer2_3[32])(obj);
                            const tmp31 = outer2_1(outer2_3[32]);
                          }
                        }
                      }
                      if (!closure_7) {
                        const items = [outer1_17, outer1_23, outer1_16];
                        if (obj.shouldShowMembershipVerificationGate(closure_0, items)) {
                          let result = outer1_0(outer1_3[35]).openMemberVerificationModal(closure_0, connect);
                          const tmpResult = outer1_0(outer1_3[35]);
                        }
                      }
                      connect();
                    });
                  });
                }
                if (tmp38) {
                  if (guildId !== outer1_27) {
                    transitionTo = function runDeepLinkJump(CHANNELResult, guildScheduledEvent1) {
                      let guildScheduledEvent;
                      let transitionTo;
                      let welcomeModalChannelId;
                      let obj = closure_2;
                      if (closure_2 == null) {
                        obj = {};
                      }
                      ({ transitionTo, welcomeModalChannelId, guildScheduledEvent } = obj);
                      obj = { source: transitionTo(items[24]).INVITE_ACCEPT, navigationReplace: true, openChannel: true };
                      if (null != welcomeModalChannelId) {
                        obj.welcomeModalChannelId = welcomeModalChannelId;
                      }
                      if (transitionTo.type === outer1_25.GUILD_STAGE_VOICE) {
                        obj = { stageInviteKey: null };
                        obj[0] = outer1_38;
                        obj.state = obj;
                      }
                      if (null != guildScheduledEvent) {
                        obj.guildScheduledEventId = guildScheduledEvent.id;
                      }
                      if (null != transitionTo) {
                        let transitionToResult = transitionTo(tmp3, obj);
                      } else {
                        transitionToResult = guildId(items[25]).transitionTo(tmp3, obj);
                        const obj4 = guildId(items[25]);
                      }
                      return transitionToResult;
                    };
                    CHANNELResult = id(outer1_3[27])(outer1_3[37], outer1_3.paths);
                    guildScheduledEvent1 = CHANNELResult.then((arg0) => arg0.default({ guildId }));
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
                guildScheduledEvent1 = { source: null, navigationReplace: true };
                guildScheduledEvent1[0] = obj(outer1_3[24]).INVITE_ACCEPT;
                if (tmp38) {
                  guildScheduledEvent1.openChannel = true;
                }
                if (null != welcomeModalChannelId) {
                  guildScheduledEvent1.welcomeModalChannelId = welcomeModalChannelId;
                }
                if (transitionTo.type === tmp36.GUILD_STAGE_VOICE) {
                  const obj1 = { stageInviteKey: null };
                  obj1[0] = outer1_38;
                  guildScheduledEvent1.state = obj1;
                }
                if (null != guildScheduledEvent) {
                  guildScheduledEvent1.guildScheduledEventId = guildScheduledEvent.id;
                }
                if (null == transitionTo) {
                  id(tmp58[25]).transitionTo(CHANNELResult, guildScheduledEvent1);
                  flag = false;
                  const obj13 = id(tmp58[25]);
                }
                tmp58 = outer1_3;
              }
            }
            let result = id(outer1_3[36]).isActivityInTextSupportedForChannel(channel);
            if (result) {
              result = targetType === outer1_37.EMBEDDED_APPLICATION;
            }
            if (result) {
              result = null != targetApplicationId;
            }
            if (result) {
              let tmp47 = guildId;
              if (guildId == null) {
                tmp47 = outer1_27;
              }
              tmp43(tmp44[25]).transitionTo(obj7.CHANNEL(tmp47, GUILD_HOME));
              obj2 = { channelId: null, applicationId: null, intent: null, inviterUserId: null, analyticsLocations: null, commandOrigin: null };
              obj2[0] = GUILD_HOME;
              obj2[1] = targetApplicationId;
              let intent;
              const tmp43Result = tmp43(tmp44[25]);
              if (tmp10 != null) {
                intent = tmp10.intent;
              }
              obj2[2] = intent;
              let inviterUserId;
              if (tmp10 != null) {
                inviterUserId = tmp10.inviterUserId;
              }
              obj2[3] = inviterUserId;
              obj2[4] = items;
              obj2[5] = tmp43(tmp44[33]).CommandOrigin.CHAT;
              obj(tmp44[32])(obj2);
              const tmp50 = obj(tmp44[32]);
            }
            obj7 = outer1_26;
            const obj8 = id(outer1_3[36]);
            tmp36 = outer1_25;
          }
          targetType = undefined;
          if (tmp10 != null) {
            targetType = tmp10.targetType;
          }
          if (null == targetType) {
            if (!outer1_9(transitionTo.type)) {
              if (obj6.canSeeOnboardingHome(guildId)) {
                GUILD_HOME = outer1_35.GUILD_HOME;
              }
              obj6 = id(outer1_3[23]);
            }
          }
          const channel2 = obj.getChannel(transitionTo.id);
          if (outer1_20.can(outer1_12(transitionTo.type), channel2)) {
            id = transitionTo.id;
          } else {
            const defaultChannel = outer1_15.getDefaultChannel(guildId, true, outer1_32.CREATE_INSTANT_INVITE);
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
function _transitionToGuildFromEventInvite() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    return (function*(arg0) {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v0 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const channel_id = closure_0.channel_id;
              if (outer1_7(closure_0)) {
                if (null != channel_id) {
                  outer1_42(channel_id);
                }
              }
              let obj1 = v0(outer1_3[43]);
              c2 = 1;
              v0 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.transitionToGuildSync(closure_0.guild_id);
              return obj1;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          v0 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp12) {
          v0 = tmp;
          throw tmp12;
        }
      }
    })();
  });
  const _transitionToGuildFromEventInvite = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function trackInviteServerClicked(id5, action, items2) {
  let tmp = items2;
  let obj = expandEventProperties;
  obj = { guild_id: id5, action, location_stack: null };
  if (items2 == null) {
    tmp = null;
  }
  obj[2] = tmp;
  obj.track(constants3.INVITE_SERVER_CLICKED, obj);
}
require("processCallbacks").addPostConnectionCallback;
({ isGuildTextChannelType: metroImportAll, isGuildVocalChannelOrVocalThreadType: c9, createChannelRecord: c10, ChannelRecordBase: unpackModuleId, getAccessPermissions: closure_12 } = createChannelRecord);
({ Endpoints: closure_24, ChannelTypes: closure_25, Routes: closure_26, ME: closure_27, RPCCommands: closure_28, GuildFeatures: closure_29, AnalyticEvents: closure_30, UserFlags: closure_31, Permissions: closure_32, AbortCodes: closure_33 } = ME);
let invite = "invite";
let c40 = null;
let result = require("scheduledEventSort").fileFinishedImporting("actions/InstantInviteActionCreators.tsx");

export default {
  resolveInvite(arg0, arg1, arg2) {
    let closure_0 = arg0;
    const importDefault = arg1;
    let closure_2 = arg2;
    let obj = dispatcher;
    if (obj.isDispatching()) {
      const resolved = Promise.resolve();
      let nextPromise = resolved.then(() => {
        let obj = outer1_1(outer1_3[39]);
        if (obj.isDispatching()) {
          let resolved = Promise.resolve();
          let nextPromise = resolved.then(() => {
            let obj = outer1_1(outer1_3[39]);
            if (obj.isDispatching()) {
              let resolved = Promise.resolve();
              let nextPromise = resolved.then(() => {
                let obj = outer1_1(outer1_3[39]);
                if (obj.isDispatching()) {
                  let resolved = Promise.resolve();
                  let nextPromise = resolved.then(() => {
                    let obj = outer1_1(outer1_3[39]);
                    if (obj.isDispatching()) {
                      let resolved = Promise.resolve();
                      let nextPromise = resolved.then(() => { ... });
                    } else {
                      obj = { type: "INVITE_RESOLVE", code: null };
                      obj[1] = tmp;
                      tmp4(tmp5[39]).dispatch(obj);
                      let tmp4Result = tmp4(tmp5[39]);
                      nextPromise = tmp4(tmp5[40])(tmp, closure_1, closure_2).then(() => { ... });
                      let promise = tmp4(tmp5[40])(tmp, closure_1, closure_2);
                    }
                    return nextPromise;
                  });
                } else {
                  obj = { type: "INVITE_RESOLVE", code: null };
                  obj[1] = tmp;
                  tmp4(tmp5[39]).dispatch(obj);
                  let tmp4Result = tmp4(tmp5[39]);
                  nextPromise = tmp4(tmp5[40])(tmp, closure_1, closure_2).then((arg0) => {
                    let code;
                    let invite;
                    ({ invite, code } = arg0);
                    if (null != invite) {
                      let obj = { type: "INVITE_RESOLVE_SUCCESS", invite: null, code: null };
                      obj[1] = invite;
                      obj[2] = code;
                      callback(dependencyMap[39]).dispatch(obj);
                      const obj3 = callback(dependencyMap[39]);
                    } else {
                      obj = callback(dependencyMap[39]);
                      obj = { type: "INVITE_RESOLVE_FAILURE", code: null, banned: null };
                      obj[1] = code;
                      obj[2] = tmp;
                      obj.dispatch(obj);
                    }
                    return { invite, code };
                  });
                  let promise = tmp4(tmp5[40])(tmp, closure_1, closure_2);
                }
                return nextPromise;
              });
            } else {
              obj = { type: "INVITE_RESOLVE", code: null };
              obj[1] = tmp;
              tmp4(tmp5[39]).dispatch(obj);
              let tmp4Result = tmp4(tmp5[39]);
              nextPromise = tmp4(tmp5[40])(tmp, closure_1, closure_2).then((arg0) => {
                let code;
                let invite;
                ({ invite, code } = arg0);
                if (null != invite) {
                  let obj = { type: "INVITE_RESOLVE_SUCCESS", invite: null, code: null };
                  obj[1] = invite;
                  obj[2] = code;
                  callback(dependencyMap[39]).dispatch(obj);
                  const obj3 = callback(dependencyMap[39]);
                } else {
                  obj = callback(dependencyMap[39]);
                  obj = { type: "INVITE_RESOLVE_FAILURE", code: null, banned: null };
                  obj[1] = code;
                  obj[2] = tmp;
                  obj.dispatch(obj);
                }
                return { invite, code };
              });
              let promise = tmp4(tmp5[40])(tmp, closure_1, closure_2);
            }
            return nextPromise;
          });
        } else {
          obj = { type: "INVITE_RESOLVE", code: null };
          obj[1] = tmp;
          tmp4(tmp5[39]).dispatch(obj);
          let tmp4Result = tmp4(tmp5[39]);
          nextPromise = tmp4(tmp5[40])(tmp, closure_1, closure_2).then((arg0) => {
            let code;
            let invite;
            ({ invite, code } = arg0);
            if (null != invite) {
              let obj = { type: "INVITE_RESOLVE_SUCCESS", invite: null, code: null };
              obj[1] = invite;
              obj[2] = code;
              callback(dependencyMap[39]).dispatch(obj);
              const obj3 = callback(dependencyMap[39]);
            } else {
              obj = callback(dependencyMap[39]);
              obj = { type: "INVITE_RESOLVE_FAILURE", code: null, banned: null };
              obj[1] = code;
              obj[2] = tmp;
              obj.dispatch(obj);
            }
            return { invite, code };
          });
          let promise = tmp4(tmp5[40])(tmp, closure_1, closure_2);
        }
        return nextPromise;
      });
    } else {
      obj = { type: "INVITE_RESOLVE", code: null };
      obj[1] = arg0;
      tmp(709).dispatch(obj);
      const tmpResult = tmp(709);
      nextPromise = tmp(9250)(arg0, arg1, arg2).then((arg0) => {
        let code;
        let invite;
        ({ invite, code } = arg0);
        if (null != invite) {
          let obj = { type: "INVITE_RESOLVE_SUCCESS", invite: null, code: null };
          obj[1] = invite;
          obj[2] = code;
          callback(dependencyMap[39]).dispatch(obj);
          const obj3 = callback(dependencyMap[39]);
        } else {
          obj = callback(dependencyMap[39]);
          obj = { type: "INVITE_RESOLVE_FAILURE", code: null, banned: null };
          obj[1] = code;
          obj[2] = tmp;
          obj.dispatch(obj);
        }
        return { invite, code };
      });
      const promise = tmp(9250)(arg0, arg1, arg2);
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
    obj[1] = id;
    let channel;
    if (guild != null) {
      channel = guild.channel;
    }
    let id1;
    if (null != channel) {
      id1 = guild.channel.id;
    }
    obj[2] = id1;
    let channel1;
    if (guild != null) {
      channel1 = guild.channel;
    }
    let type;
    if (null != channel1) {
      type = guild.channel.type;
    }
    obj[3] = type;
    return obj;
  },
  createInvite(arg0) {
    let closure_0 = arg0;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    let closure_2 = arg2;
    return callback(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp8 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp3;
              let body = tmp9;
              body = undefined;
              let dependencyMap = 1;
              const obj1 = {};
              const merged = Object.assign(outer1_1);
              const role_ids = obj1.role_ids;
              let length;
              if (role_ids != null) {
                length = role_ids.length;
              }
              if (0 === length) {
                delete tmp6[tmp4];
              }
              const HTTP = outer1_0(530).HTTP;
              const obj2 = { url: null, body: null, context: null, rejectWithError: true };
              obj2[0] = outer1_24.INSTANT_INVITES(outer1_0);
              obj2[1] = obj1;
              const obj3 = { location: null };
              obj3[0] = outer1_2;
              obj2[2] = obj3;
              c4 = 2;
              c5 = 1;
              let obj4 = { value: null, done: false };
              obj4[0] = HTTP.post(obj2);
              return obj4;
            }
          } else if (1 === tmp9) {
            dependencyMap = 0;
            closure_1 = closure_2;
            obj4 = outer1_1(709);
            const obj5 = { type: "INSTANT_INVITE_CREATE_FAILURE", channelId: null };
            obj5[1] = body;
            obj4.dispatch(obj5);
            const tmp30 = new outer1_1(4185)(closure_1);
            throw tmp30;
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 0;
            c5 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            body = arg1.body;
            obj = outer1_1(709);
            const obj7 = { type: "INSTANT_INVITE_CREATE_SUCCESS", channelId: null, invite: null };
            obj7[1] = body;
            obj7[2] = body;
            obj.dispatch(obj7);
            dependencyMap = 0;
            c5 = 3;
            const obj8 = { value: null, done: true };
            obj8[0] = body;
            return obj8;
          }
        } catch (tmp38) {
          closure_2 = tmp38;
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
    let closure_0 = c4;
    let closure_1 = GROUP_DM;
    const self = this;
    return callback(function*() {
      let code = tmp2;
      const invite = outer1_18.getInvite(outer1_0.id);
      if (null != invite) {
        if (!invite.isExpired()) {
          let c2 = 3;
          const obj1 = { value: null, done: true };
          obj1[0] = invite.code;
          return obj1;
        }
      }
      const obj2 = { max_age: null };
      obj2[0] = v0(outer1_3[47]).Seconds.DAY;
      const invite1 = c2.createInvite(outer1_0.id, obj2, v0);
      code = yield invite1.catch(() => v1(table[39]).dispatch({ type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED" }));
      if (code != null) {
        code = code.code;
      }
      return code;
    })();
  },
  getAllFriendInvites(arg0) {
    let closure_0 = arg0;
    return callback(function*() {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp5;
              let body = tmp2;
              body = undefined;
              const promise = new Promise((arg0) => {
                let closure_0 = arg0;
                return tmp5(table[39]).wait(() => callback(null));
              });
              c2 = 1;
              dependencyMap = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = promise;
              return obj1;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else if (outer1_18.getFriendInvitesFetching()) {
              if (null != outer1_40) {
                outer1_40.then((body) => body.body);
              } else {
                const _Error = Error;
                const error = new Error("Invalid friend invite fetch request");
                Promise.reject(error);
              }
              dependencyMap = 3;
            } else {
              const HTTP = outer1_0(530).HTTP;
              const obj3 = { url: null, context: null, rejectWithError: null };
              obj3[0] = outer1_24.FRIEND_INVITES;
              let obj4 = { location: null };
              obj4[0] = body;
              obj3[1] = obj4;
              obj4 = outer1_0(530);
              obj3[2] = obj4.rejectWithMigratedError();
              outer1_40 = HTTP.get(obj3);
              let obj5 = outer1_1(709);
              obj5 = { type: "FRIEND_INVITES_FETCH_REQUEST", requestedAt: null };
              const _Date = Date;
              const date = new Date();
              obj5[1] = date;
              obj5.dispatch(obj5);
              c2 = 2;
              dependencyMap = 1;
              const obj6 = { value: null, done: false };
              obj6[0] = outer1_40;
              return obj6;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          } else {
            body = arg1.body;
            outer1_40 = null;
            const obj8 = { type: "FRIEND_INVITES_FETCH_RESPONSE", receivedAt: null, invites: null };
            const _Date2 = Date;
            const date1 = new Date();
            obj8[1] = date1;
            obj8[2] = body;
            outer1_1(709).dispatch(obj8);
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = body;
            return obj;
          }
        } catch (tmp35) {
          dependencyMap = tmp;
          throw tmp35;
        }
      }
    })();
  },
  createFriendInvite(trackedActionData, location) {
    let obj = trackedActionData;
    dispatcher.dispatch({ type: "FRIEND_INVITE_CREATE_REQUEST" });
    const HTTP = sendRequest /* sendRequest */.HTTP;
    obj = { url: closure_24.FRIEND_INVITES, body: null, context: null, rejectWithError: null };
    if (trackedActionData == null) {
      obj = {};
    }
    obj[1] = obj;
    obj[2] = { location };
    const obj2 = dispatcher;
    const tmp3 = require;
    obj[3] = sendRequest /* sendRequest */.rejectWithMigratedError();
    const tmp3Result = sendRequest /* sendRequest */;
    return HTTP.post(obj).then((body) => {
      body = body.body;
      callback(709).dispatch({ type: "FRIEND_INVITE_CREATE_SUCCESS", invite: body });
      return body;
    }, (error) => {
      let obj = callback(709);
      obj = { type: "FRIEND_INVITE_CREATE_FAILURE", error };
      obj.dispatch(obj);
      throw error;
    });
  },
  revokeFriendInvites() {
    let obj = dispatcher;
    obj.dispatch({ type: "FRIEND_INVITE_REVOKE_REQUEST" });
    const HTTP = sendRequest /* sendRequest */.HTTP;
    obj = { url: closure_24.FRIEND_INVITES, context: obj, rejectWithError: null };
    obj = { location: location };
    obj[2] = sendRequest /* sendRequest */.rejectWithMigratedError();
    const obj4 = sendRequest /* sendRequest */;
    return HTTP.del(obj).then((invites) => {
      callback(table[39]).dispatch({ type: "FRIEND_INVITE_REVOKE_SUCCESS", invites: invites.body });
    });
  },
  revokeFriendInvite(arg0) {
    const HTTP = sendRequest /* sendRequest */.HTTP;
    const obj = { url: closure_24.INVITE(arg0), rejectWithError: null };
    obj[1] = sendRequest /* sendRequest */.rejectWithMigratedError();
    return HTTP.del(obj);
  },
  fetchFriendMembers(arg0) {
    let closure_0 = arg0;
    return callback(function*() {
      let closure_1 = tmp3;
      let dependencyMap = 1;
      const obj1 = { url: null, trackedActionData: null, rejectWithError: true };
      obj1[0] = outer1_24.INVITE_FRIEND_MEMBERS(outer1_0);
      const obj2 = { event: null, properties: null };
      obj2[0] = outer1_0(503).NetworkActionNames.INVITE_FRIEND_MEMBERS_FETCH;
      obj2[1] = function properties(body) {
        let obj = body(table[50]);
        obj = { code: body, friend_count: null };
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
        obj[1] = num;
        return obj.exact(obj);
      };
      obj1[1] = obj2;
      yield outer1_1(5094).get(obj1);
      if (1 === tmp7) {
        dependencyMap = 0;
        const obj3 = outer1_1(709);
        const obj4 = { type: "INVITE_FRIEND_MEMBERS_FETCH_FAILURE", code: null };
        obj4[1] = body;
        obj3.dispatch(obj4);
        let c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        body = arg1.body;
        let obj = outer1_1(709);
        const obj5 = { type: "INVITE_FRIEND_MEMBERS_FETCH_SUCCESS", code: null, friendMemberIds: null };
        obj5[1] = body;
        obj5[2] = body.friend_member_ids;
        obj.dispatch(obj5);
        dependencyMap = 0;
      }
      dependencyMap = 0;
      return arg1;
    })();
  },
  clearInviteFromStore(channelId) {
    let obj = dispatcher;
    obj = { type: "INSTANT_INVITE_CLEAR", channelId };
    obj.dispatch(obj);
  },
  revokeInvite(outer1_0) {
    const code = outer1_0.code;
    const channel = outer1_0.channel;
    let obj = channel(5094);
    obj = { url: closure_24.INVITE(code), oldFormErrors: true, trackedActionData: null, rejectWithError: null };
    obj = { event: code(503).NetworkActionNames.INVITE_REVOKE, properties: obj1 };
    obj[2] = obj;
    obj[3] = code(530).rejectWithMigratedError();
    obj1 = { uses: outer1_0.uses, max_uses: outer1_0.maxUses, max_age: outer1_0.maxAge, invite_type: outer1_0.type };
    const obj5 = code(530);
    return obj.delete(obj).then(() => {
      let obj = channel(outer1_3[39]);
      obj = { type: "INSTANT_INVITE_REVOKE_SUCCESS", code, channelId: channel.id };
      obj.dispatch(obj);
    });
  },
  acceptInvite(inviteKey) {
    let context;
    let importAll;
    let importDefault;
    let target_channel_id;
    let target_message_id;
    inviteKey = inviteKey.inviteKey;
    let _require = inviteKey;
    ({ context, callback: importDefault, skipOnboarding: importAll } = inviteKey);
    let guild_scheduled_event;
    target_channel_id = undefined;
    target_message_id = undefined;
    let guildScheduledEventId;
    let c8;
    let receivedInstallationIdForInviteCode;
    let self = this;
    let obj = _require(guild_scheduled_event[51]);
    let result = obj.parseInviteCodeFromInviteKey(inviteKey);
    c8 = result;
    const sessionId = store.getSessionId();
    receivedInstallationIdForInviteCode = receivedInstallationIdForInviteCode.getReceivedInstallationIdForInviteCode(result);
    invite = invite.getInvite(inviteKey);
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
    currentUser = currentUser.getCurrentUser();
    let hasFlagResult;
    if (currentUser != null) {
      hasFlagResult = currentUser.hasFlag(constants4.QUARANTINED);
    }
    if (hasFlagResult) {
      tmp13(tmp2[52])();
      let nextPromise = new Promise((arg0, arg1) => {
        const error = new Error();
        return arg1(error);
      });
    } else {
      obj = { type: "INVITE_ACCEPT", code: null };
      obj[1] = inviteKey;
      tmp13(tmp2[39]).dispatch(obj);
      const HTTP = tmp(tmp2[45]).HTTP;
      let obj1 = { url: null, context: null, oldFormErrors: true, body: null, rejectWithError: null };
      obj1[0] = closure_24.INVITE(result);
      obj1[1] = obj;
      let obj2 = { session_id: null, invite_instance_id: null, received_installation_id: null };
      obj2[0] = sessionId;
      obj2[1] = context.invite_instance_id;
      obj2[2] = receivedInstallationIdForInviteCode;
      obj1[3] = obj2;
      tmpResult = tmp(tmp2[45]);
      obj1[4] = tmpResult.rejectWithMigratedError();
      const tmp13Result = tmp13(tmp2[39]);
      _require = undefined;
      _require = target_channel_id((arg0) => {
        let closure_0 = arg0;
        let c8 = 0;
        let c9 = 0;
        return (function*(arg0) {
          if (c9 === 2) {
            c9 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
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
                  throw arg1;
                } else if (arg0 === 2) {
                  c9 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  let closure_7 = tmp5;
                  let scheduledEventSort = tmp2;
                  let obj2;
                  let closure_2;
                  let callback;
                  if (null != c9) {
                    const result = outer1_7.clearReceivedInstallationIdForInviteCode(c8);
                  }
                  let obj4 = outer2_1(guild_scheduled_event[39]);
                  const obj1 = { type: "INVITE_ACCEPT_SUCCESS", invite: null, code: null };
                  obj1[1] = lib.body;
                  obj1[2] = lib;
                  obj4.dispatch(obj1);
                  obj2 = outer1_3;
                  if (outer1_3 == null) {
                    obj2 = guildScheduledEventId.getGuildScheduledEvent(outer1_6);
                  }
                  obj2 = {};
                  const merged = Object.assign(tmp45.body);
                  obj2.guild_scheduled_event = obj2;
                  const target_channel_id = tmp45.body.target_channel_id;
                  closure_2 = target_channel_id;
                  if (target_channel_id == null) {
                    closure_2 = outer1_4;
                  }
                  obj2.target_channel_id = closure_2;
                  const target_message_id = tmp45.body.target_message_id;
                  callback = target_message_id;
                  if (target_message_id == null) {
                    callback = outer1_5;
                  }
                  obj2.target_message_id = callback;
                  const guild_id = obj2.guild_id;
                  let id = guild_id;
                  if (guild_id == null) {
                    const guild = obj2.guild;
                    id = undefined;
                    if (guild != null) {
                      id = guild.id;
                    }
                  }
                  closure_2 = id;
                  let obj7 = lib(tmp13[21]);
                  const flags = obj2.flags;
                  let c5 = flags;
                  if (flags == null) {
                    c5 = 0;
                  }
                  if (!outer1_2) {
                    if (!obj7.hasFlag(c5, tmp28(tmp13[22]).GuildInviteFlags.IS_GUEST_INVITE)) {
                      if (null != tmp27) {
                        if (obj2.new_member) {
                          if (!obj2.show_verification_form) {
                            c8 = 1;
                            c9 = 1;
                            const obj3 = { value: null, done: false };
                            obj3[0] = tmp28(tmp13[27])(tmp13[37], tmp13.paths);
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
                  throw arg1;
                } else if (arg0 === 2) {
                  c9 = 3;
                  obj4 = { value: null, done: true };
                  obj4[0] = arg1;
                  return obj4;
                } else {
                  callback = arg1.default;
                  const obj5 = { guildId: null };
                  obj5[0] = closure_2;
                  c8 = 2;
                  c9 = 1;
                  const obj6 = { value: null, done: false };
                  obj6[0] = callback(obj5);
                  return obj6;
                }
              } else if (arg0 === 1) {
                c9 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c9 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              if (outer1_1 != null) {
                tmp32(outer1_1);
              }
              c9 = 3;
              obj7 = { value: null, done: true };
              obj7[0] = lib.body;
              return obj7;
            } catch (tmp39) {
              c9 = tmp;
              throw tmp39;
            }
          }
        })();
      });
      nextPromise = HTTP.post(obj1).then(function() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }, (body) => {
        body = body.body;
        let code;
        if (body != null) {
          code = body.code;
        }
        if (code === outer1_33.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED) {
          let obj = callback(guild_scheduled_event[53]);
          obj.openAgeGateModal(outer1_34.JOIN_LARGE_GUILD_UNDERAGE);
        }
        obj = { type: "INVITE_ACCEPT_FAILURE", code: callback, error: null };
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
        obj[1] = code1;
        obj[2] = obj;
        outer1_1(guild_scheduled_event[39]).dispatch(obj);
        const obj2 = outer1_1(guild_scheduled_event[39]);
        const tmp6 = outer1_1;
        const tmp7 = guild_scheduled_event;
        throw new outer1_1(guild_scheduled_event[54])(body);
      });
      const postResult = HTTP.post(obj1);
    }
    return nextPromise;
  },
  acceptInviteAndTransitionToInviteChannel(inviteKey) {
    let importAll;
    let importDefault;
    let require;
    ({ analyticsLocations: require, callback: importDefault, autoJoin: importAll } = inviteKey);
    return this.acceptInvite({
      inviteKey: inviteKey.inviteKey,
      context: inviteKey.context,
      skipOnboarding: inviteKey.skipOnboarding,
      callback(channel) {
        if (null != channel.channel) {
          let obj = {};
          const merged = Object.assign(outer1_41(channel));
          obj.autoJoin = items;
          items = id;
          if (id == null) {
            items = [];
          }
          id = channel.channel.id;
          if (items === undefined) {
            items = [];
          }
          let result = outer1_14.addConditionalChangeListener(() => {
            let c4;
            let guildScheduledEvent;
            let targetType;
            let transitionTo;
            let welcomeModalChannelId;
            let obj = outer1_14;
            transitionTo = outer1_14.getChannel(guildId);
            const currentUser = outer1_23.getCurrentUser();
            if (null == transitionTo || null == currentUser) {
              return tmp3;
            } else {
              let guildScheduledEvent1 = transitionTo.nsfw && !currentUser.nsfwAllowed;
              if (!guildScheduledEvent1) {
                let isGuildVocalOrThreadResult = transitionTo.isGuildVocalOrThread();
                if (isGuildVocalOrThreadResult) {
                  let obj2 = id(outer1_3[41]);
                  isGuildVocalOrThreadResult = obj2.maybeOpenAgeGateForVoiceChannel(tmp);
                }
                guildScheduledEvent1 = isGuildVocalOrThreadResult;
              }
              if (!guildScheduledEvent1) {
                let isGuildVocalOrThreadResult1 = transitionTo.isGuildVocalOrThread();
                if (isGuildVocalOrThreadResult1) {
                  isGuildVocalOrThreadResult1 = id(outer1_3[42]).maybeOpenSpoilerGateForVoiceChannel(tmp);
                  let obj4 = id(outer1_3[42]);
                }
                guildScheduledEvent1 = isGuildVocalOrThreadResult1;
              }
              let flag = !guildScheduledEvent1;
              if (!guildScheduledEvent1) {
                guildScheduledEvent = undefined;
                if (transitionTo != null) {
                  guildScheduledEvent = tmp10.guildScheduledEvent;
                }
                if (null != guildScheduledEvent) {
                  guildScheduledEvent1 = tmp10.guildScheduledEvent;
                  guildId = guildScheduledEvent1;
                  transitionTo = tmp10.welcomeModalChannelId;
                  flag = false;
                  if (null != guildScheduledEvent1) {
                    outer1_5(() => {
                      const obj = { guildScheduledEventId: guildId.id };
                      if (null != transitionTo) {
                        obj.welcomeModalChannelId = transitionTo;
                      }
                      const result = guildId(items[38]).transitionToEventDetailsFromInvite(guildId, obj);
                    });
                    flag = false;
                  }
                } else {
                  guildId = transitionTo.getGuildId();
                  if (guildId == null) {
                    guildId = outer1_27;
                  }
                  let items = tmp10;
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
                  const guild = outer1_17.getGuild(guildId);
                  if (guild != null) {
                    const features = guild.features;
                    const hasItem = features.has(outer1_29.MEMBER_VERIFICATION_MANUAL_APPROVAL);
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
                          let CHANNELResult = outer1_22;
                          guildScheduledEvent1 = outer1_22.getGuildId();
                          flag = false;
                        }
                      }
                    }
                  }
                  const type = transitionTo.type;
                  let targetChannelId;
                  const channel = obj.getChannel(transitionTo.id);
                  if (tmp10 != null) {
                    targetChannelId = tmp10.targetChannelId;
                  }
                  if (null != targetChannelId) {
                    const channel1 = obj.getChannel(targetChannelId);
                    if (null != channel1) {
                      GUILD_HOME = targetChannelId;
                    }
                    closure_9 = type === outer1_25.GUILD_STAGE_VOICE;
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
                    CHANNELResult = outer1_26.CHANNEL(guildId, GUILD_HOME, tmp39);
                    c10 = CHANNELResult;
                    if (GUILD_HOME === transitionTo.id) {
                      if (outer1_9(type)) {
                        let autoJoin;
                        if (tmp10 != null) {
                          autoJoin = tmp10.autoJoin;
                        }
                        if (false !== autoJoin) {
                          outer1_5(() => {
                            guildId(items[27])(items[26], items.paths).then((guildId) => {
                              let closure_0 = guildId.default;
                              function connect() { ... }
                              if (!closure_7) {
                                const items = [outer1_17, outer1_23, outer1_16];
                                if (obj.shouldShowMembershipVerificationGate(closure_0, items)) {
                                  let result = outer1_0(outer1_3[35]).openMemberVerificationModal(closure_0, connect);
                                  const tmpResult = outer1_0(outer1_3[35]);
                                }
                              }
                              connect();
                            });
                          });
                        }
                        if (tmp38) {
                          if (guildId !== outer1_27) {
                            transitionTo = function runDeepLinkJump(CHANNELResult, guildScheduledEvent1) {
                              let guildScheduledEvent;
                              let transitionTo;
                              let welcomeModalChannelId;
                              let obj = closure_2;
                              if (closure_2 == null) {
                                obj = {};
                              }
                              ({ transitionTo, welcomeModalChannelId, guildScheduledEvent } = obj);
                              obj = { source: transitionTo(items[24]).INVITE_ACCEPT, navigationReplace: true, openChannel: true };
                              if (null != welcomeModalChannelId) {
                                obj.welcomeModalChannelId = welcomeModalChannelId;
                              }
                              if (transitionTo.type === outer1_25.GUILD_STAGE_VOICE) {
                                obj = { stageInviteKey: null };
                                obj[0] = outer1_38;
                                obj.state = obj;
                              }
                              if (null != guildScheduledEvent) {
                                obj.guildScheduledEventId = guildScheduledEvent.id;
                              }
                              if (null != transitionTo) {
                                let transitionToResult = transitionTo(tmp3, obj);
                              } else {
                                transitionToResult = guildId(items[25]).transitionTo(tmp3, obj);
                                const obj4 = guildId(items[25]);
                              }
                              return transitionToResult;
                            };
                            CHANNELResult = id(outer1_3[27])(outer1_3[37], outer1_3.paths);
                            guildScheduledEvent1 = CHANNELResult.then((arg0) => arg0.default({ guildId }));
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
                        guildScheduledEvent1 = { source: null, navigationReplace: true };
                        guildScheduledEvent1[0] = obj(outer1_3[24]).INVITE_ACCEPT;
                        if (tmp38) {
                          guildScheduledEvent1.openChannel = true;
                        }
                        if (null != welcomeModalChannelId) {
                          guildScheduledEvent1.welcomeModalChannelId = welcomeModalChannelId;
                        }
                        if (transitionTo.type === tmp36.GUILD_STAGE_VOICE) {
                          const obj1 = { stageInviteKey: null };
                          obj1[0] = outer1_38;
                          guildScheduledEvent1.state = obj1;
                        }
                        if (null != guildScheduledEvent) {
                          guildScheduledEvent1.guildScheduledEventId = guildScheduledEvent.id;
                        }
                        if (null == transitionTo) {
                          id(tmp58[25]).transitionTo(CHANNELResult, guildScheduledEvent1);
                          flag = false;
                          const obj13 = id(tmp58[25]);
                        }
                        tmp58 = outer1_3;
                      }
                    }
                    let result = id(outer1_3[36]).isActivityInTextSupportedForChannel(channel);
                    if (result) {
                      result = targetType === outer1_37.EMBEDDED_APPLICATION;
                    }
                    if (result) {
                      result = null != targetApplicationId;
                    }
                    if (result) {
                      let tmp47 = guildId;
                      if (guildId == null) {
                        tmp47 = outer1_27;
                      }
                      tmp43(tmp44[25]).transitionTo(obj7.CHANNEL(tmp47, GUILD_HOME));
                      obj2 = { channelId: null, applicationId: null, intent: null, inviterUserId: null, analyticsLocations: null, commandOrigin: null };
                      obj2[0] = GUILD_HOME;
                      obj2[1] = targetApplicationId;
                      let intent;
                      const tmp43Result = tmp43(tmp44[25]);
                      if (tmp10 != null) {
                        intent = tmp10.intent;
                      }
                      obj2[2] = intent;
                      let inviterUserId;
                      if (tmp10 != null) {
                        inviterUserId = tmp10.inviterUserId;
                      }
                      obj2[3] = inviterUserId;
                      obj2[4] = items;
                      obj2[5] = tmp43(tmp44[33]).CommandOrigin.CHAT;
                      obj(tmp44[32])(obj2);
                      const tmp50 = obj(tmp44[32]);
                    }
                    obj7 = outer1_26;
                    const obj8 = id(outer1_3[36]);
                    tmp36 = outer1_25;
                  }
                  targetType = undefined;
                  if (tmp10 != null) {
                    targetType = tmp10.targetType;
                  }
                  if (null == targetType) {
                    if (!outer1_9(transitionTo.type)) {
                      if (obj6.canSeeOnboardingHome(guildId)) {
                        GUILD_HOME = outer1_35.GUILD_HOME;
                      }
                      obj6 = id(outer1_3[23]);
                    }
                  }
                  const channel2 = obj.getChannel(transitionTo.id);
                  if (outer1_20.can(outer1_12(transitionTo.type), channel2)) {
                    id = transitionTo.id;
                  } else {
                    const defaultChannel = outer1_15.getDefaultChannel(guildId, true, outer1_32.CREATE_INSTANT_INVITE);
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
        if (null != obj) {
          tmp7(channel);
        }
      }
    });
  },
  transitionToInvite(closure_0, arg1) {
    let channel;
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
    ({ channel, guild, inviter } = closure_0);
    if (null == channel) {
      if (null == guild) {
        if (null != inviter) {
          let dMFromUserId = null;
          if (friend.isFriend(inviter.id)) {
            dMFromUserId = closure_14.getDMFromUserId(inviter.id);
          }
          if (null != dMFromUserId) {
            let id = dMFromUserId;
            let closure_2 = [];
            const result = closure_14.addConditionalChangeListener(() => {
              let c4;
              let guildScheduledEvent;
              let targetType;
              let transitionTo;
              let welcomeModalChannelId;
              let obj = outer1_14;
              transitionTo = outer1_14.getChannel(guildId);
              const currentUser = outer1_23.getCurrentUser();
              if (null == transitionTo || null == currentUser) {
                return tmp3;
              } else {
                let guildScheduledEvent1 = transitionTo.nsfw && !currentUser.nsfwAllowed;
                if (!guildScheduledEvent1) {
                  let isGuildVocalOrThreadResult = transitionTo.isGuildVocalOrThread();
                  if (isGuildVocalOrThreadResult) {
                    let obj2 = id(outer1_3[41]);
                    isGuildVocalOrThreadResult = obj2.maybeOpenAgeGateForVoiceChannel(tmp);
                  }
                  guildScheduledEvent1 = isGuildVocalOrThreadResult;
                }
                if (!guildScheduledEvent1) {
                  let isGuildVocalOrThreadResult1 = transitionTo.isGuildVocalOrThread();
                  if (isGuildVocalOrThreadResult1) {
                    isGuildVocalOrThreadResult1 = id(outer1_3[42]).maybeOpenSpoilerGateForVoiceChannel(tmp);
                    let obj4 = id(outer1_3[42]);
                  }
                  guildScheduledEvent1 = isGuildVocalOrThreadResult1;
                }
                let flag = !guildScheduledEvent1;
                if (!guildScheduledEvent1) {
                  guildScheduledEvent = undefined;
                  if (transitionTo != null) {
                    guildScheduledEvent = tmp10.guildScheduledEvent;
                  }
                  if (null != guildScheduledEvent) {
                    guildScheduledEvent1 = tmp10.guildScheduledEvent;
                    guildId = guildScheduledEvent1;
                    transitionTo = tmp10.welcomeModalChannelId;
                    flag = false;
                    if (null != guildScheduledEvent1) {
                      outer1_5(() => {
                        const obj = { guildScheduledEventId: guildId.id };
                        if (null != transitionTo) {
                          obj.welcomeModalChannelId = transitionTo;
                        }
                        const result = guildId(items[38]).transitionToEventDetailsFromInvite(guildId, obj);
                      });
                      flag = false;
                    }
                  } else {
                    guildId = transitionTo.getGuildId();
                    if (guildId == null) {
                      guildId = outer1_27;
                    }
                    let items = tmp10;
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
                    const guild = outer1_17.getGuild(guildId);
                    if (guild != null) {
                      const features = guild.features;
                      const hasItem = features.has(outer1_29.MEMBER_VERIFICATION_MANUAL_APPROVAL);
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
                            let CHANNELResult = outer1_22;
                            guildScheduledEvent1 = outer1_22.getGuildId();
                            flag = false;
                          }
                        }
                      }
                    }
                    const type = transitionTo.type;
                    let targetChannelId;
                    const channel = obj.getChannel(transitionTo.id);
                    if (tmp10 != null) {
                      targetChannelId = tmp10.targetChannelId;
                    }
                    if (null != targetChannelId) {
                      const channel1 = obj.getChannel(targetChannelId);
                      if (null != channel1) {
                        GUILD_HOME = targetChannelId;
                      }
                      closure_9 = type === outer1_25.GUILD_STAGE_VOICE;
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
                      CHANNELResult = outer1_26.CHANNEL(guildId, GUILD_HOME, tmp39);
                      c10 = CHANNELResult;
                      if (GUILD_HOME === transitionTo.id) {
                        if (outer1_9(type)) {
                          let autoJoin;
                          if (tmp10 != null) {
                            autoJoin = tmp10.autoJoin;
                          }
                          if (false !== autoJoin) {
                            outer1_5(() => {
                              guildId(items[27])(items[26], items.paths).then((guildId) => {
                                let closure_0 = guildId.default;
                                function connect() {
                                  if (outer1_9) {
                                    if (outer1_1 instanceof outer2_11) {
                                      let tmp44 = tmp41;
                                    } else {
                                      tmp44 = outer2_10(tmp41);
                                    }
                                    outer2_0(outer2_3[28]).connectAndOpen(tmp44);
                                    const obj6 = outer2_0(outer2_3[28]);
                                    outer2_0(outer2_3[25]).transitionTo(outer1_10);
                                  } else {
                                    let prop;
                                    if (outer1_2 != null) {
                                      prop = tmp.muteOnJoinVoiceChannel;
                                    }
                                    if (prop) {
                                      let obj = outer2_1(outer2_3[29]);
                                      obj.setSelfMute(outer2_0(outer2_3[30]).MediaEngineContextTypes.DEFAULT, true);
                                    }
                                    const voiceChannel = closure_0.selectVoiceChannel(outer1_8);
                                    let tmp14 = outer1_5 === outer2_37.STREAM;
                                    if (tmp14) {
                                      tmp14 = null != outer1_4;
                                    }
                                    if (tmp14) {
                                      obj = { streamType: null, ownerId: null, guildId: null, channelId: null };
                                      obj[0] = outer2_36.GUILD;
                                      obj[1] = outer1_4;
                                      obj[2] = closure_0;
                                      obj[3] = tmp10;
                                      const result = outer2_2(outer2_3[31]).watchStreamAndTransitionToStream(obj);
                                      const obj2 = outer2_2(outer2_3[31]);
                                    }
                                    let tmp22 = outer1_5 === outer2_37.EMBEDDED_APPLICATION;
                                    if (tmp22) {
                                      tmp22 = null != outer1_6;
                                    }
                                    if (tmp22) {
                                      let tmp27 = closure_0;
                                      if (closure_0 == null) {
                                        tmp27 = outer2_27;
                                      }
                                      outer2_0(outer2_3[25]).transitionTo(outer2_26.CHANNEL(tmp27, tmp10));
                                      obj = { channelId: null, applicationId: null, intent: null, inviterUserId: null, analyticsLocations: null, commandOrigin: null };
                                      obj[0] = tmp10;
                                      obj[1] = outer1_6;
                                      let intent;
                                      const obj4 = outer2_0(outer2_3[25]);
                                      if (tmp != null) {
                                        intent = tmp.intent;
                                      }
                                      obj[2] = intent;
                                      let inviterUserId;
                                      if (tmp != null) {
                                        inviterUserId = tmp.inviterUserId;
                                      }
                                      obj[3] = inviterUserId;
                                      obj[4] = outer1_3;
                                      obj[5] = outer2_0(outer2_3[33]).CommandOrigin.CHAT;
                                      outer2_1(outer2_3[32])(obj);
                                      const tmp31 = outer2_1(outer2_3[32]);
                                    }
                                  }
                                }
                                if (!closure_7) {
                                  const items = [outer1_17, outer1_23, outer1_16];
                                  if (obj.shouldShowMembershipVerificationGate(closure_0, items)) {
                                    let result = outer1_0(outer1_3[35]).openMemberVerificationModal(closure_0, connect);
                                    const tmpResult = outer1_0(outer1_3[35]);
                                  }
                                }
                                connect();
                              });
                            });
                          }
                          if (tmp38) {
                            if (guildId !== outer1_27) {
                              transitionTo = function runDeepLinkJump(CHANNELResult, guildScheduledEvent1) {
                                let guildScheduledEvent;
                                let transitionTo;
                                let welcomeModalChannelId;
                                let obj = closure_2;
                                if (closure_2 == null) {
                                  obj = {};
                                }
                                ({ transitionTo, welcomeModalChannelId, guildScheduledEvent } = obj);
                                obj = { source: transitionTo(items[24]).INVITE_ACCEPT, navigationReplace: true, openChannel: true };
                                if (null != welcomeModalChannelId) {
                                  obj.welcomeModalChannelId = welcomeModalChannelId;
                                }
                                if (transitionTo.type === outer1_25.GUILD_STAGE_VOICE) {
                                  obj = { stageInviteKey: null };
                                  obj[0] = outer1_38;
                                  obj.state = obj;
                                }
                                if (null != guildScheduledEvent) {
                                  obj.guildScheduledEventId = guildScheduledEvent.id;
                                }
                                if (null != transitionTo) {
                                  let transitionToResult = transitionTo(tmp3, obj);
                                } else {
                                  transitionToResult = guildId(items[25]).transitionTo(tmp3, obj);
                                  const obj4 = guildId(items[25]);
                                }
                                return transitionToResult;
                              };
                              CHANNELResult = id(outer1_3[27])(outer1_3[37], outer1_3.paths);
                              guildScheduledEvent1 = CHANNELResult.then((arg0) => arg0.default({ guildId }));
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
                          guildScheduledEvent1 = { source: null, navigationReplace: true };
                          guildScheduledEvent1[0] = obj(outer1_3[24]).INVITE_ACCEPT;
                          if (tmp38) {
                            guildScheduledEvent1.openChannel = true;
                          }
                          if (null != welcomeModalChannelId) {
                            guildScheduledEvent1.welcomeModalChannelId = welcomeModalChannelId;
                          }
                          if (transitionTo.type === tmp36.GUILD_STAGE_VOICE) {
                            const obj1 = { stageInviteKey: null };
                            obj1[0] = outer1_38;
                            guildScheduledEvent1.state = obj1;
                          }
                          if (null != guildScheduledEvent) {
                            guildScheduledEvent1.guildScheduledEventId = guildScheduledEvent.id;
                          }
                          if (null == transitionTo) {
                            id(tmp58[25]).transitionTo(CHANNELResult, guildScheduledEvent1);
                            flag = false;
                            const obj13 = id(tmp58[25]);
                          }
                          tmp58 = outer1_3;
                        }
                      }
                      let result = id(outer1_3[36]).isActivityInTextSupportedForChannel(channel);
                      if (result) {
                        result = targetType === outer1_37.EMBEDDED_APPLICATION;
                      }
                      if (result) {
                        result = null != targetApplicationId;
                      }
                      if (result) {
                        let tmp47 = guildId;
                        if (guildId == null) {
                          tmp47 = outer1_27;
                        }
                        tmp43(tmp44[25]).transitionTo(obj7.CHANNEL(tmp47, GUILD_HOME));
                        obj2 = { channelId: null, applicationId: null, intent: null, inviterUserId: null, analyticsLocations: null, commandOrigin: null };
                        obj2[0] = GUILD_HOME;
                        obj2[1] = targetApplicationId;
                        let intent;
                        const tmp43Result = tmp43(tmp44[25]);
                        if (tmp10 != null) {
                          intent = tmp10.intent;
                        }
                        obj2[2] = intent;
                        let inviterUserId;
                        if (tmp10 != null) {
                          inviterUserId = tmp10.inviterUserId;
                        }
                        obj2[3] = inviterUserId;
                        obj2[4] = items;
                        obj2[5] = tmp43(tmp44[33]).CommandOrigin.CHAT;
                        obj(tmp44[32])(obj2);
                        const tmp50 = obj(tmp44[32]);
                      }
                      obj7 = outer1_26;
                      const obj8 = id(outer1_3[36]);
                      tmp36 = outer1_25;
                    }
                    targetType = undefined;
                    if (tmp10 != null) {
                      targetType = tmp10.targetType;
                    }
                    if (null == targetType) {
                      if (!outer1_9(transitionTo.type)) {
                        if (obj6.canSeeOnboardingHome(guildId)) {
                          GUILD_HOME = outer1_35.GUILD_HOME;
                        }
                        obj6 = id(outer1_3[23]);
                      }
                    }
                    const channel2 = obj.getChannel(transitionTo.id);
                    if (outer1_20.can(outer1_12(transitionTo.type), channel2)) {
                      id = transitionTo.id;
                    } else {
                      const defaultChannel = outer1_15.getDefaultChannel(guildId, true, outer1_32.CREATE_INSTANT_INVITE);
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
        obj(12575).onOpenHubInvite(closure_0);
        const obj6 = obj(12575);
      }
    }
    let num = closure_0.flags;
    if (num == null) {
      num = 0;
    }
    let hasFlagResult = id(1384).hasFlag(num, id(7695).GuildInviteFlags.IS_GUEST_INVITE);
    if (!hasFlagResult) {
      let tmp6Result = tmp6(1384);
      hasFlagResult = tmp6Result.hasFlag(num, tmp6(7695).GuildInviteFlags.IS_APPLICATION_BYPASS);
    }
    if (null != guild) {
      if (!hasFlagResult) {
        if (closure_0.new_member) {
          tmp6Result = tmp6(12576);
          if (tmp6Result.inviteGuildHasPendingMemberDisabledVerification(guild)) {
            const result1 = tmp6(12576).openVerificationModalOrTransitionToApplication(guild.id);
            const tmp6Result1 = tmp6(12576);
          }
        }
      }
    }
    if (null != channel) {
      const tmp18 = generateAcceptInviteOptions(closure_0);
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
      id = channel.id;
      obj = tmp18;
      closure_2 = [];
      const result2 = closure_14.addConditionalChangeListener(() => {
        let c4;
        let guildScheduledEvent;
        let targetType;
        let transitionTo;
        let welcomeModalChannelId;
        let obj = outer1_14;
        transitionTo = outer1_14.getChannel(guildId);
        const currentUser = outer1_23.getCurrentUser();
        if (null == transitionTo || null == currentUser) {
          return tmp3;
        } else {
          let guildScheduledEvent1 = transitionTo.nsfw && !currentUser.nsfwAllowed;
          if (!guildScheduledEvent1) {
            let isGuildVocalOrThreadResult = transitionTo.isGuildVocalOrThread();
            if (isGuildVocalOrThreadResult) {
              let obj2 = id(outer1_3[41]);
              isGuildVocalOrThreadResult = obj2.maybeOpenAgeGateForVoiceChannel(tmp);
            }
            guildScheduledEvent1 = isGuildVocalOrThreadResult;
          }
          if (!guildScheduledEvent1) {
            let isGuildVocalOrThreadResult1 = transitionTo.isGuildVocalOrThread();
            if (isGuildVocalOrThreadResult1) {
              isGuildVocalOrThreadResult1 = id(outer1_3[42]).maybeOpenSpoilerGateForVoiceChannel(tmp);
              let obj4 = id(outer1_3[42]);
            }
            guildScheduledEvent1 = isGuildVocalOrThreadResult1;
          }
          let flag = !guildScheduledEvent1;
          if (!guildScheduledEvent1) {
            guildScheduledEvent = undefined;
            if (transitionTo != null) {
              guildScheduledEvent = tmp10.guildScheduledEvent;
            }
            if (null != guildScheduledEvent) {
              guildScheduledEvent1 = tmp10.guildScheduledEvent;
              guildId = guildScheduledEvent1;
              transitionTo = tmp10.welcomeModalChannelId;
              flag = false;
              if (null != guildScheduledEvent1) {
                outer1_5(() => {
                  const obj = { guildScheduledEventId: guildId.id };
                  if (null != transitionTo) {
                    obj.welcomeModalChannelId = transitionTo;
                  }
                  const result = guildId(items[38]).transitionToEventDetailsFromInvite(guildId, obj);
                });
                flag = false;
              }
            } else {
              guildId = transitionTo.getGuildId();
              if (guildId == null) {
                guildId = outer1_27;
              }
              let items = tmp10;
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
              const guild = outer1_17.getGuild(guildId);
              if (guild != null) {
                const features = guild.features;
                const hasItem = features.has(outer1_29.MEMBER_VERIFICATION_MANUAL_APPROVAL);
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
                      let CHANNELResult = outer1_22;
                      guildScheduledEvent1 = outer1_22.getGuildId();
                      flag = false;
                    }
                  }
                }
              }
              const type = transitionTo.type;
              let targetChannelId;
              const channel = obj.getChannel(transitionTo.id);
              if (tmp10 != null) {
                targetChannelId = tmp10.targetChannelId;
              }
              if (null != targetChannelId) {
                const channel1 = obj.getChannel(targetChannelId);
                if (null != channel1) {
                  GUILD_HOME = targetChannelId;
                }
                closure_9 = type === outer1_25.GUILD_STAGE_VOICE;
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
                CHANNELResult = outer1_26.CHANNEL(guildId, GUILD_HOME, tmp39);
                c10 = CHANNELResult;
                if (GUILD_HOME === transitionTo.id) {
                  if (outer1_9(type)) {
                    let autoJoin;
                    if (tmp10 != null) {
                      autoJoin = tmp10.autoJoin;
                    }
                    if (false !== autoJoin) {
                      outer1_5(() => {
                        guildId(items[27])(items[26], items.paths).then((guildId) => {
                          let closure_0 = guildId.default;
                          function connect() {
                            if (outer1_9) {
                              if (outer1_1 instanceof outer2_11) {
                                let tmp44 = tmp41;
                              } else {
                                tmp44 = outer2_10(tmp41);
                              }
                              outer2_0(outer2_3[28]).connectAndOpen(tmp44);
                              const obj6 = outer2_0(outer2_3[28]);
                              outer2_0(outer2_3[25]).transitionTo(outer1_10);
                            } else {
                              let prop;
                              if (outer1_2 != null) {
                                prop = tmp.muteOnJoinVoiceChannel;
                              }
                              if (prop) {
                                let obj = outer2_1(outer2_3[29]);
                                obj.setSelfMute(outer2_0(outer2_3[30]).MediaEngineContextTypes.DEFAULT, true);
                              }
                              const voiceChannel = closure_0.selectVoiceChannel(outer1_8);
                              let tmp14 = outer1_5 === outer2_37.STREAM;
                              if (tmp14) {
                                tmp14 = null != outer1_4;
                              }
                              if (tmp14) {
                                obj = { streamType: null, ownerId: null, guildId: null, channelId: null };
                                obj[0] = outer2_36.GUILD;
                                obj[1] = outer1_4;
                                obj[2] = closure_0;
                                obj[3] = tmp10;
                                const result = outer2_2(outer2_3[31]).watchStreamAndTransitionToStream(obj);
                                const obj2 = outer2_2(outer2_3[31]);
                              }
                              let tmp22 = outer1_5 === outer2_37.EMBEDDED_APPLICATION;
                              if (tmp22) {
                                tmp22 = null != outer1_6;
                              }
                              if (tmp22) {
                                let tmp27 = closure_0;
                                if (closure_0 == null) {
                                  tmp27 = outer2_27;
                                }
                                outer2_0(outer2_3[25]).transitionTo(outer2_26.CHANNEL(tmp27, tmp10));
                                obj = { channelId: null, applicationId: null, intent: null, inviterUserId: null, analyticsLocations: null, commandOrigin: null };
                                obj[0] = tmp10;
                                obj[1] = outer1_6;
                                let intent;
                                const obj4 = outer2_0(outer2_3[25]);
                                if (tmp != null) {
                                  intent = tmp.intent;
                                }
                                obj[2] = intent;
                                let inviterUserId;
                                if (tmp != null) {
                                  inviterUserId = tmp.inviterUserId;
                                }
                                obj[3] = inviterUserId;
                                obj[4] = outer1_3;
                                obj[5] = outer2_0(outer2_3[33]).CommandOrigin.CHAT;
                                outer2_1(outer2_3[32])(obj);
                                const tmp31 = outer2_1(outer2_3[32]);
                              }
                            }
                          }
                          if (!closure_7) {
                            const items = [outer1_17, outer1_23, outer1_16];
                            if (obj.shouldShowMembershipVerificationGate(closure_0, items)) {
                              let result = outer1_0(outer1_3[35]).openMemberVerificationModal(closure_0, connect);
                              const tmpResult = outer1_0(outer1_3[35]);
                            }
                          }
                          connect();
                        });
                      });
                    }
                    if (tmp38) {
                      if (guildId !== outer1_27) {
                        transitionTo = function runDeepLinkJump(CHANNELResult, guildScheduledEvent1) {
                          let guildScheduledEvent;
                          let transitionTo;
                          let welcomeModalChannelId;
                          let obj = closure_2;
                          if (closure_2 == null) {
                            obj = {};
                          }
                          ({ transitionTo, welcomeModalChannelId, guildScheduledEvent } = obj);
                          obj = { source: transitionTo(items[24]).INVITE_ACCEPT, navigationReplace: true, openChannel: true };
                          if (null != welcomeModalChannelId) {
                            obj.welcomeModalChannelId = welcomeModalChannelId;
                          }
                          if (transitionTo.type === outer1_25.GUILD_STAGE_VOICE) {
                            obj = { stageInviteKey: null };
                            obj[0] = outer1_38;
                            obj.state = obj;
                          }
                          if (null != guildScheduledEvent) {
                            obj.guildScheduledEventId = guildScheduledEvent.id;
                          }
                          if (null != transitionTo) {
                            let transitionToResult = transitionTo(tmp3, obj);
                          } else {
                            transitionToResult = guildId(items[25]).transitionTo(tmp3, obj);
                            const obj4 = guildId(items[25]);
                          }
                          return transitionToResult;
                        };
                        CHANNELResult = id(outer1_3[27])(outer1_3[37], outer1_3.paths);
                        guildScheduledEvent1 = CHANNELResult.then((arg0) => arg0.default({ guildId }));
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
                    guildScheduledEvent1 = { source: null, navigationReplace: true };
                    guildScheduledEvent1[0] = obj(outer1_3[24]).INVITE_ACCEPT;
                    if (tmp38) {
                      guildScheduledEvent1.openChannel = true;
                    }
                    if (null != welcomeModalChannelId) {
                      guildScheduledEvent1.welcomeModalChannelId = welcomeModalChannelId;
                    }
                    if (transitionTo.type === tmp36.GUILD_STAGE_VOICE) {
                      const obj1 = { stageInviteKey: null };
                      obj1[0] = outer1_38;
                      guildScheduledEvent1.state = obj1;
                    }
                    if (null != guildScheduledEvent) {
                      guildScheduledEvent1.guildScheduledEventId = guildScheduledEvent.id;
                    }
                    if (null == transitionTo) {
                      id(tmp58[25]).transitionTo(CHANNELResult, guildScheduledEvent1);
                      flag = false;
                      const obj13 = id(tmp58[25]);
                    }
                    tmp58 = outer1_3;
                  }
                }
                let result = id(outer1_3[36]).isActivityInTextSupportedForChannel(channel);
                if (result) {
                  result = targetType === outer1_37.EMBEDDED_APPLICATION;
                }
                if (result) {
                  result = null != targetApplicationId;
                }
                if (result) {
                  let tmp47 = guildId;
                  if (guildId == null) {
                    tmp47 = outer1_27;
                  }
                  tmp43(tmp44[25]).transitionTo(obj7.CHANNEL(tmp47, GUILD_HOME));
                  obj2 = { channelId: null, applicationId: null, intent: null, inviterUserId: null, analyticsLocations: null, commandOrigin: null };
                  obj2[0] = GUILD_HOME;
                  obj2[1] = targetApplicationId;
                  let intent;
                  const tmp43Result = tmp43(tmp44[25]);
                  if (tmp10 != null) {
                    intent = tmp10.intent;
                  }
                  obj2[2] = intent;
                  let inviterUserId;
                  if (tmp10 != null) {
                    inviterUserId = tmp10.inviterUserId;
                  }
                  obj2[3] = inviterUserId;
                  obj2[4] = items;
                  obj2[5] = tmp43(tmp44[33]).CommandOrigin.CHAT;
                  obj(tmp44[32])(obj2);
                  const tmp50 = obj(tmp44[32]);
                }
                obj7 = outer1_26;
                const obj8 = id(outer1_3[36]);
                tmp36 = outer1_25;
              }
              targetType = undefined;
              if (tmp10 != null) {
                targetType = tmp10.targetType;
              }
              if (null == targetType) {
                if (!outer1_9(transitionTo.type)) {
                  if (obj6.canSeeOnboardingHome(guildId)) {
                    GUILD_HOME = outer1_35.GUILD_HOME;
                  }
                  obj6 = id(outer1_3[23]);
                }
              }
              const channel2 = obj.getChannel(transitionTo.id);
              if (outer1_20.can(outer1_12(transitionTo.type), channel2)) {
                id = transitionTo.id;
              } else {
                const defaultChannel = outer1_15.getDefaultChannel(guildId, true, outer1_32.CREATE_INSTANT_INVITE);
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
  },
  openNativeAppModal(inviteKey) {
    let obj = readSnowflake /* readSnowflake */;
    const result = obj.parseExtraDataFromInviteKey(inviteKey);
    obj = { installationId: store.getInstallationForTracking(), targetChannelId: result.targetChannelId, targetMessageId: result.targetMessageId, guildScheduledEventId: result.guildScheduledEventId };
    CodedLinkActionCreators.openNativeAppModal(result.baseCode, constants.INVITE_BROWSER, obj);
  },
  transitionToInviteOnboarding(baseCode, closure_1) {
    let obj = closure_1;
    if (closure_1 === undefined) {
      obj = {};
    }
    let transitionTo = obj.transitionTo;
    if (undefined === transitionTo) {
      transitionTo = transitionTo /* transitionTo */.transitionTo;
    }
    obj = { baseCode: baseCode.code, targetChannelId: null, targetMessageId: null, guildScheduledEventId: null };
    const target_channel_id = baseCode.target_channel_id;
    obj[1] = target_channel_id;
    const target_message_id = baseCode.target_message_id;
    obj[2] = target_message_id;
    const guild_scheduled_event = baseCode.guild_scheduled_event;
    let id;
    if (guild_scheduled_event != null) {
      id = guild_scheduled_event.id;
    }
    obj[3] = id;
    const inviteKeyFromExtraData = readSnowflake /* readSnowflake */.generateInviteKeyFromExtraData(obj);
    obj = { search: null };
    const result = closure_26.APP_WITH_INVITE_AND_GUILD_ONBOARDING(baseCode.code);
    const obj2 = readSnowflake /* readSnowflake */;
    const tmp3 = require;
    obj[0] = readSnowflake /* readSnowflake */.getInviteKeySearchSuffix(inviteKeyFromExtraData);
    transitionTo(result, obj);
  },
  openApp(code, arg1, fingerprint, username) {
    const _require = code;
    let result = null;
    if (null != code) {
      let obj = _readSnowflake;
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
    let targetChannelId;
    if (result != null) {
      targetChannelId = result.targetChannelId;
    }
    let obj1 = dispatcher;
    obj = { type: "INVITE_APP_OPENING", code };
    obj1.dispatch(obj);
    if (null != format.ua) {
      const formatted = tmp7(4603).ua.toLowerCase();
      if (formatted.indexOf("googlebot") > -1) {
        let tmp7Result = tmp7(709);
        obj = { type: "INVITE_APP_NOT_OPENED", code: null };
        obj[1] = code;
        tmp7Result.dispatch(obj);
      }
    }
    const os = tmp7(4603).os;
    let family;
    if (os != null) {
      family = os.family;
    }
    if ("Android" !== family) {
      const os2 = tmp7(4603).os;
      let family1;
      if (os2 != null) {
        family1 = os2.family;
      }
      if ("iOS" !== family1) {
        if (!_isTablet.isTablet) {
          let tmp13 = arg1;
          if (arg1 == null) {
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
        tmp7Result = tmp7(12580);
        tmp7Result.launch(combined, (arg0) => {
          let obj = outer1_1(outer1_3[39]);
          if (arg0) {
            obj = { type: "INVITE_APP_OPENED", code: null };
            obj[1] = closure_0;
          } else {
            obj = { type: "INVITE_APP_NOT_OPENED", code: null };
            obj[1] = closure_0;
          }
          obj.dispatch(obj);
        });
      }
    }
    if (null != baseCode) {
      let inviteDynamicLinkTemplate = _getInviteDynamicLinkTemplate.getInviteDynamicLinkTemplate(baseCode);
      let tmp20 = _require;
      const obj5 = _getInviteDynamicLinkTemplate;
    } else {
      inviteDynamicLinkTemplate = _getInviteDynamicLinkTemplate.getDefaultDynamicLinkTemplate();
      tmp20 = _require;
      const obj4 = _getInviteDynamicLinkTemplate;
    }
    let tmp20Result = tmp20(12578);
    const attemptId = tmp20Result.generateAttemptId();
    let str7 = "friend_invite";
    if (2 !== arg4) {
      str7 = invite;
    }
    obj1 = { utmSource: str7, fingerprint, installationId: store.getInstallationForTracking(), username, attemptId, event: null, channel: null, message: null, iosFallbackLink: null };
    let prop;
    if (result != null) {
      prop = result.guildScheduledEventId;
    }
    obj1[5] = prop;
    obj1[6] = targetChannelId;
    obj1[7] = targetMessageId;
    obj1[8] = "https://discord.com/api/download/mobile?invite_code=" + baseCode;
    combined = generateDynamicLink(inviteDynamicLinkTemplate, obj1);
    const tmp7Result1 = generateDynamicLink;
    const obj2 = { fingerprint: null, attempt_id: null, source: null, invite_code: null };
    tmp20Result = tmp20(513);
    obj2[0] = tmp20Result.maybeExtractId(fingerprint);
    obj2[1] = attemptId;
    obj2[2] = invite;
    obj2[3] = baseCode;
    expandEventProperties.track(constants3.DEEP_LINK_CLICKED, obj2);
  },
  setReceivedInstallationIdForInviteCode(c15, installationId) {
    let obj = dispatcher;
    obj = { type: "INSTANT_INVITE_RECEIVED_INSTALLATION_ID_SET", inviteCode: c15, receivedInstallationId: installationId };
    obj.dispatch(obj);
  },
  clearReceivedInstallationIdForInviteCode(c8) {
    let obj = dispatcher;
    obj = { type: "INSTANT_INVITE_RECEIVED_INSTALLATION_ID_CLEAR", inviteCode: c8 };
    obj.dispatch(obj);
  },
  trackInviteServerClicked
};
export const transitionToGuildFromEventInvite = function transitionToGuildFromEventInvite(closure_0) {
  const self = this;
  const apply = _transitionToGuildFromEventInvite.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const trackInviteEmbedActioned = function trackInviteEmbedActioned(action, items1) {
  let application_id;
  let invite;
  let invite_instance_id;
  let invite_message_id;
  let inviter_id;
  let number_of_users_in_channel;
  let stream_key;
  ({ invite, inviter_id, invite_message_id, invite_instance_id, application_id, stream_key, number_of_users_in_channel } = action);
  let obj = expandEventProperties;
  obj = { action: action.action, invite_code: invite.code, invite_type: null, inviter_id: null, invite_message_id: null, invite_instance_id: null, application_id: null, stream_key: null, number_of_users_in_channel: null, location_stack: null };
  let str = invite.type;
  str = undefined;
  if (str != null) {
    str = str.toString();
  }
  obj[2] = str;
  if (inviter_id == null) {
    inviter_id = null;
  }
  obj[3] = inviter_id;
  if (invite_message_id == null) {
    invite_message_id = null;
  }
  obj[4] = invite_message_id;
  if (invite_instance_id == null) {
    invite_instance_id = null;
  }
  obj[5] = invite_instance_id;
  if (application_id == null) {
    application_id = null;
  }
  obj[6] = application_id;
  if (stream_key == null) {
    stream_key = null;
  }
  obj[7] = stream_key;
  if (number_of_users_in_channel == null) {
    number_of_users_in_channel = null;
  }
  let tmp2 = items1;
  obj[8] = number_of_users_in_channel;
  if (items1 == null) {
    tmp2 = null;
  }
  obj[9] = tmp2;
  obj.track(constants3.INVITE_EMBED_ACTIONED, obj);
};
export { trackInviteServerClicked };