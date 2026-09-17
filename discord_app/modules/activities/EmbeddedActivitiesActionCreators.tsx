// discord_app/modules/activities/EmbeddedActivitiesActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUtils from "../dismissible_content/DismissibleContentUtils.tsx";
import embeddedActivityLocationUtils from "utils/embeddedActivityLocationUtils.tsx";
import ChannelRTCActionCreatorsDefault from "../../actions/ChannelRTCActionCreators.tsx";
import ChannelRTCParticipants from "../calls/ChannelRTCParticipants.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationStore from "../applications/ApplicationStore.tsx";
import ChannelRTCStore from "../calls/ChannelRTCStore.tsx";
import PopoutWindowStore from "../popout-window/PopoutWindowStore.native.tsx";
import ApplicationRecord from "../../records/ApplicationRecord.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore.tsx";

require = fn;
let closure_27 = async function _runPrimaryAppCommandOrJoinEmbeddedActivity(arg0) {
  if (c17 === 2) {
    c17 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c17 = 2;
      if (0 === c16) {
        if (arg0 === 1) {
          c17 = 3;
          throw value;
        } else if (arg0 === 2) {
          c17 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_13 = tmp3;
          closure_12 = tmp7;
          closure_140_0 = undefined;
          closure_140_1 = undefined;
          closure_140_2 = undefined;
          closure_140_3 = undefined;
          closure_140_4 = undefined;
          closure_140_5 = undefined;
          closure_140_6 = undefined;
          closure_140_7 = undefined;
          closure_140_8 = undefined;
          closure_140_9 = undefined;
          closure_140_10 = undefined;
          closure_140_11 = undefined;
          closure_140_12 = undefined;
          closure_140_13 = undefined;
          closure_140_14 = undefined;
          closure_140_15 = undefined;
          ({ channelId: closure_140_0, applicationId: closure_140_1, isStart: closure_140_2, analyticsLocations: closure_140_3, locationObject: closure_140_4, embeddedActivitiesManager: closure_140_5, componentId: closure_140_6, commandOrigin: closure_140_7, sectionName: closure_140_8, source: closure_140_9, onExecutedCallback: closure_140_10, referrerId: closure_140_11, customId: closure_140_12, inviterUserId: closure_140_13, renderInFramePool: closure_140_14, onConfirmActivityLaunchChecksAlertOpen: closure_140_15 } = closure_0);
          let channel;
          closure_140_17 = undefined;
          let application;
          closure_140_19 = undefined;
          closure_140_20 = undefined;
          closure_140_21 = undefined;
          let currentUser;
          closure_140_23 = undefined;
          closure_140_24 = undefined;
          closure_140_25 = undefined;
          c16 = 1;
          c17 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c17 = 3;
          throw value;
        } else if (arg0 === 2) {
          c17 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          channel = closure_141_10.getChannel(closure_140_0);
          let guildId;
          if (channel != null) {
            guildId = obj32.getGuildId();
          }
          c1 = guildId;
          if (guildId == null) {
            c1 = undefined;
          }
          closure_140_17 = c1;
          if (null == closure_140_17) {
            let isPrivateResult;
            if (channel != null) {
              isPrivateResult = obj15.isPrivate();
            }
            if (!isPrivateResult) {
              c17 = 3;
              return { value: false, done: true };
            }
            obj15 = channel;
          }
          application = closure_141_5.getApplication(closure_140_1);
          let canLaunchFrameResult = null != application;
          if (canLaunchFrameResult) {
            canLaunchFrameResult = closure_141_0(closure_141_2[19]).canLaunchFrame(application);
            const obj16 = closure_141_0(closure_141_2[19]);
          }
          closure_140_19 = canLaunchFrameResult;
          closure_140_20 = closure_141_0(closure_141_2[20]).createNonce();
          c15 = 1;
          const windowOpen = closure_141_7.getWindowOpen(closure_141_23.ACTIVITY_POPOUT);
          if (true !== closure_140_14) {
            closure_141_1(closure_141_2[21]).clearMainFrameSlot();
            const obj18 = closure_141_1(closure_141_2[21]);
          }
          const obj17 = closure_141_0(closure_141_2[20]);
          obj32 = channel;
          const obj6 = { applicationId: closure_140_1, customId: closure_140_12, referrerId: closure_140_11 };
          if (obj19.tryLaunchAsFrame(obj6)) {
            let obj7 = { isStart: closure_140_2, inviterUserId: closure_140_13, channelId: null, guildId: null, locationKind: null };
            let channelId = closure_140_0;
            if (closure_140_0 == null) {
              channelId = null;
            }
            obj7.channelId = channelId;
            guildId = closure_140_17;
            if (closure_140_17 == null) {
              guildId = null;
            }
            obj7.guildId = guildId;
            if (null != closure_140_17) {
              let PRIVATE_CHANNEL2 = closure_141_0(closure_141_2[24]).EmbeddedActivityLocationKind.GUILD_CHANNEL;
            } else {
              PRIVATE_CHANNEL2 = closure_141_0(closure_141_2[24]).EmbeddedActivityLocationKind.PRIVATE_CHANNEL;
            }
            obj7.locationKind = PRIVATE_CHANNEL2;
            obj7 = closure_141_0(closure_141_2[23]).stashPendingFrameLaunch(closure_140_1, obj7);
            c15 = 0;
            c17 = 3;
            const obj25 = closure_141_0(closure_141_2[23]);
          } else {
            const obj8 = { type: "EMBEDDED_ACTIVITY_LAUNCH_START", nonce: closure_140_20, applicationId: closure_140_1, channelId: null, componentId: null, analyticsLocations: null, source: null, commandOrigin: null, inviterUserId: null, launchParams: null };
            let channelId2 = closure_140_0;
            if (closure_140_0 == null) {
              channelId2 = null;
            }
            obj8.channelId = channelId2;
            obj8.componentId = closure_140_6;
            obj8.analyticsLocations = closure_140_3;
            obj8.source = closure_140_9;
            obj8.commandOrigin = closure_140_7;
            obj8.inviterUserId = closure_140_13;
            const obj9 = { customId: closure_140_12, referrerId: closure_140_11, renderInFramePool: closure_140_14 };
            obj8.launchParams = obj9;
            closure_141_1(closure_141_2[25]).dispatch(obj8);
            c5 = closure_140_0;
            if (closure_140_0 == null) {
              c5 = undefined;
            }
            c16 = 3;
            c17 = 1;
            const obj10 = { value: closure_141_40(closure_140_1, c5), done: false };
            return obj10;
          }
          obj19 = closure_141_0(closure_141_2[22]);
        }
      } else if (2 === tmp7) {
        c15 = 0;
        closure_140_26 = closure_14;
        if (closure_140_19) {
          c17 = 3;
          return { value: false, done: true };
        } else {
          if (null != closure_140_17) {
            let PRIVATE_CHANNEL = closure_141_0(closure_141_2[24]).EmbeddedActivityLocationKind.GUILD_CHANNEL;
          } else {
            PRIVATE_CHANNEL = closure_141_0(closure_141_2[24]).EmbeddedActivityLocationKind.PRIVATE_CHANNEL;
          }
          closure_140_25 = PRIVATE_CHANNEL;
          let obj11 = { type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL", nonce: closure_140_20, applicationId: closure_140_1, channelId: null, guildId: null, isStart: null, error: null, locationKind: null };
          let channelId6 = closure_140_0;
          if (closure_140_0 == null) {
            channelId6 = null;
          }
          obj11.channelId = channelId6;
          let guildId2 = closure_140_17;
          if (closure_140_17 == null) {
            guildId2 = null;
          }
          obj11.guildId = guildId2;
          obj11.isStart = closure_140_2;
          if (!(closure_140_26 instanceof closure_141_1(closure_141_2[27]))) {
            if (!(closure_140_26 instanceof closure_141_1(closure_141_2[28]))) {
              if (!(closure_140_26 instanceof closure_141_1(closure_141_2[29]))) {
                let tmp148 = new closure_141_1(closure_141_2[28])(closure_140_26);
              }
              obj11.error = tmp148;
              obj11.locationKind = closure_140_25;
              obj11 = obj13.dispatch(obj11);
              c17 = 3;
            }
          }
          tmp148 = closure_140_26;
          obj13 = closure_141_1(closure_141_2[25]);
        }
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c17 = 3;
          throw value;
        } else if (arg0 === 2) {
          c15 = 0;
          c17 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          closure_140_21 = value;
          const obj14 = { type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET", applicationId: closure_140_1, channelId: null, proxyTicket: null };
          let channelId3 = closure_140_0;
          if (closure_140_0 == null) {
            channelId3 = null;
          }
          obj14.channelId = channelId3;
          obj14.proxyTicket = closure_140_21;
          closure_141_1(closure_141_2[25]).dispatch(obj14);
          currentUser = closure_141_13.getCurrentUser();
          if (null != currentUser) {
            if (closure_140_2) {
              let JOIN = closure_141_19.LAUNCH;
            } else {
              JOIN = closure_141_19.JOIN;
            }
            const obj20 = { type: JOIN, userId: null, guildId: null, channelId: null, channelType: null, applicationId: null, locationObject: null, analyticsLocations: null, source: null, referrerId: null, inviterUserId: null };
            let id;
            if (currentUser != null) {
              id = currentUser.id;
            }
            obj20.userId = id;
            obj20.guildId = closure_140_17;
            obj20.channelId = closure_140_0;
            let type;
            if (channel != null) {
              type = channel.type;
            }
            obj20.channelType = type;
            obj20.applicationId = closure_140_1;
            obj20.locationObject = closure_140_4;
            let analyticsLocations = closure_140_3;
            if (closure_140_3 == null) {
              analyticsLocations = [];
            }
            obj20.analyticsLocations = analyticsLocations;
            obj20.source = closure_140_9;
            obj20.referrerId = closure_140_11;
            obj20.inviterUserId = closure_140_13;
            closure_141_1(closure_141_2[26])(obj20);
            const tmp256 = closure_141_1(closure_141_2[26]);
          }
          if (closure_140_2) {
            if (null != closure_140_0) {
              if ((function isSupportedChannelType(arg0, type) {
                type = undefined;
                if (type != null) {
                  type = type.type;
                }
                let tmp2 = type === constants2.GUILD_VOICE;
                application = application.getApplication(arg0);
                const obj = closure_1_0(9011);
                const hasApplicationFlagResult = closure_1_0(9011).hasApplicationFlag(application, constants.EMBEDDED);
                const result = closure_1_0(9700).isActivityInTextSupportedForChannel(type);
                if (tmp2) {
                  tmp2 = hasApplicationFlagResult;
                }
                if (!tmp2) {
                  tmp2 = result;
                }
                return tmp2;
              })(closure_140_1, channel)) {
                const obj22 = { applicationId: closure_140_1, nonce: closure_140_20, channelId: closure_140_0, guildId: closure_140_17, commandOrigin: closure_140_7, sectionName: closure_140_8, source: closure_140_9, onExecutedCallback: closure_140_10, onConfirmActivityLaunchChecksAlertOpen: closure_140_15, embeddedActivitiesManager: closure_140_5 };
                c16 = 5;
                c17 = 1;
                const obj23 = {
                  value: (function maybeSendPrimaryAppCommand() {
                                  const self = this;
                                  const apply = closure_1_29.apply;
                                  if (typeof apply === "unknown") {
                                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                  } else {
                                    applyArgumentsResult = apply(self, arguments);
                                  }
                                  return applyArgumentsResult;
                                })(obj22),
                  done: false
                };
                return obj23;
              }
            }
            const tmp962 = new closure_141_1(closure_141_2[27])(closure_141_1(closure_141_2[27]).Reasons.INVALID_CHANNEL);
            throw tmp962;
          } else {
            const obj24 = { applicationId: closure_140_1, channelId: closure_140_0, embeddedActivitiesManager: closure_140_5, isStart: closure_140_2, guildId: closure_140_17 };
            c16 = 4;
            c17 = 1;
            const obj26 = {
              value: (function joinEmbeddedActivity() {
                          const self = this;
                          const apply = closure_1_31.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        })(obj24),
              done: false
            };
            return obj26;
          }
          const obj30 = closure_141_1(closure_141_2[25]);
        }
      } else {
        if (4 === tmp7) {
          if (arg0 === 1) {
            c17 = 3;
            throw value;
          } else if (arg0 === 2) {
            c15 = 0;
            c17 = 3;
            const obj27 = { value, done: true };
            return obj27;
          } else {
            closure_140_24 = value;
            if (closure_140_10 != null) {
              closure_140_10();
            }
            if ("failure" === closure_140_24.result) {
              const tmp432 = new closure_141_1(closure_141_2[27])(closure_141_1(closure_141_2[27]).Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, closure_140_24.reason);
              throw tmp432;
            }
          }
        } else if (arg0 === 1) {
          c17 = 3;
          throw value;
        } else if (arg0 === 2) {
          c15 = 0;
          c17 = 3;
          const obj28 = { value, done: true };
          return obj28;
        } else {
          closure_140_23 = value;
          if ("failure" === closure_140_23.result) {
            if (closure_140_23.reason === closure_141_28.FAILED_ACTIVITY_LAUNCH_CHECKS) {
              const obj29 = { type: "EMBEDDED_ACTIVITY_LAUNCH_CANCEL", nonce: closure_140_20, applicationId: closure_140_1, channelId: null };
              let channelId5 = closure_140_0;
              if (closure_140_0 == null) {
                channelId5 = null;
              }
              obj29.channelId = channelId5;
              closure_141_1(closure_141_2[25]).dispatch(obj29);
              c15 = 0;
              c17 = 3;
              return { value: false, done: true };
            } else {
              const tmp1111 = new closure_141_1(closure_141_2[27])(closure_141_1(closure_141_2[27]).Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
              throw tmp1111;
            }
          }
        }
        const obj31 = { type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", nonce: closure_140_20, applicationId: closure_140_1, channelId: null };
        let channelId4 = closure_140_0;
        if (closure_140_0 == null) {
          channelId4 = null;
        }
        obj31.channelId = channelId4;
        closure_141_1(closure_141_2[25]).dispatch(obj31);
        c15 = 0;
        c17 = 3;
        return { value: true, done: true };
      }
    } catch (tmp231) {
      closure_14 = tmp231;
      if (tmp4 === c15) {
        c17 = tmp2;
        throw tmp231;
      } else {
        c16 = tmp;
      }
    }
  }
};
let closure_29 = async function _maybeSendPrimaryAppCommand(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          let obj3 = { value, done: true };
          return obj3;
        } else {
          dependencyMap = tmp3;
          const nonce = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          closure_129_7 = undefined;
          closure_129_8 = undefined;
          closure_129_9 = undefined;
          ({ applicationId: closure_129_0, nonce: closure_129_1, channelId: closure_129_2, guildId: closure_129_3, commandOrigin: closure_129_4, sectionName: closure_129_5, source: closure_129_6, onExecutedCallback: closure_129_7, onConfirmActivityLaunchChecksAlertOpen: closure_129_8, embeddedActivitiesManager: closure_129_9 } = closure_0);
          closure_129_10 = undefined;
          closure_129_11 = undefined;
          let channel2;
          let channel;
          closure_129_14 = undefined;
          let application;
          let currentEmbeddedActivity;
          let application2;
          let currentUser;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          let obj4 = { value, done: true };
          return obj4;
        } else {
          closure_129_10 = null;
          c4 = 1;
          c5 = 3;
          c6 = 1;
          const obj5 = { value: closure_130_1(closure_130_2[32])(closure_129_2, closure_129_0), done: false };
          return obj5;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_19 = closure_3;
        if (closure_129_19.message === closure_130_0(closure_130_2[32]).NO_PRIMARY_APP_COMMAND_ERROR) {
          const obj6 = { result: "failure", reason: closure_130_28.NO_PRIMARY_APP_COMMAND };
          c6 = 3;
          const obj7 = { value: obj6, done: true };
          return obj7;
        } else {
          throw closure_129_19;
        }
      } else {
        if (3 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_129_10 = value;
            c4 = 0;
            closure_129_11 = closure_129_10.handler !== closure_130_0(closure_130_2[33]).ApplicationCommandHandler.APP_HANDLER;
            if (!closure_129_11) {
              if (!closure_130_24.includes(closure_129_0)) {
                if (null != closure_129_2) {
                  const obj9 = { type: "channel", channelId: closure_129_2 };
                  c5 = 4;
                  c6 = 1;
                  const obj10 = { value: closure_130_4(obj9), done: false };
                  return obj10;
                }
              }
            }
            channel = closure_130_10.getChannel(closure_129_2);
            let guild = null;
            if (null != closure_129_3) {
              guild = closure_130_11.getGuild(closure_129_3);
            }
            closure_129_14 = guild;
            if (null == channel) {
              const obj11 = { result: "failure", reason: closure_130_28.NO_CHANNEL };
              c6 = 3;
              const obj12 = { value: obj11, done: true };
              return obj12;
            } else {
              if (closure_129_11) {
                application = closure_130_5.getApplication(closure_129_0);
                currentEmbeddedActivity = closure_130_15.getCurrentEmbeddedActivity();
                application2 = undefined;
                let applicationId;
                if (currentEmbeddedActivity != null) {
                  applicationId = currentEmbeddedActivity.applicationId;
                }
                if (null != applicationId) {
                  let applicationId1;
                  if (currentEmbeddedActivity != null) {
                    applicationId1 = currentEmbeddedActivity.applicationId;
                  }
                  application2 = closure_130_5.getApplication(applicationId1);
                }
                currentUser = closure_130_13.getCurrentUser();
                if (null != currentUser) {
                  const obj13 = { applicationId: closure_129_0, application, channel, currentEmbeddedApplication: application2, embeddedActivitiesManager: closure_129_9, user: currentUser, onConfirmActivityLaunchChecksAlertOpen: closure_129_8, shouldClosePopoutOnLeaveCurrentEmbeddedApplication: false };
                  c5 = 8;
                  c6 = 1;
                  const obj14 = { value: closure_130_0(closure_130_2[35]).confirmActivityLaunchChecks(obj13), done: false };
                  return obj14;
                }
              }
              const promise = new Promise((arg0, arg1) => {
                closure_0 = arg0;
                closure_1 = arg1;
                let obj = {
                  command,
                  optionValues: {},
                  context: { channel, guild },
                  commandOrigin,
                  sectionName,
                  source,
                  interactionLifecycleOptionsFactory() {
                    return {
                      nonce,
                      onSuccess() {
                        if (closure_2_7 != null) {
                          tmp();
                        }
                        application_id();
                      },
                      onFailure(error_code, error_message, error_status, error_reason_code) {
                        if (closure_2_7 != null) {
                          tmp();
                        }
                        const obj2 = { channel_id, guild_id, application_id, channel_type: null, error_code: null, error_message: null, error_status: null, error_reason_code: null, source: null };
                        type = undefined;
                        if (type != null) {
                          type = type.type;
                        }
                        obj2.channel_type = type;
                        obj2.error_code = error_code;
                        obj2.error_message = error_message;
                        obj2.error_status = error_status;
                        obj2.error_reason_code = error_reason_code;
                        obj2.source = source;
                        nonce(1241).track(constants.ACTIVITY_INTERACTION_CALLBACK_ERROR, obj2);
                        if (null != error_code) {
                          if (null != error_message) {
                            if (null != error_status) {
                              const obj3 = { status: error_status, body: null };
                              const obj4 = { message: error_message, code: error_code };
                              obj3.body = obj4;
                              const tmp21 = new nonce(4541)(obj3);
                              closure_1_1(tmp21);
                            }
                          }
                        }
                        if (null != error_reason_code) {
                          if (error_reason_code in nonce(4869).ReasonCodes) {
                            const tmp14 = new nonce(4869)(error_reason_code);
                            closure_1_1(tmp14);
                          }
                        }
                        const obj = nonce(1241);
                        const tmp3Result = nonce(4869);
                        closure_1_1(new nonce(4869)(nonce(4869).ReasonCodes.UNKNOWN));
                        const tmp3Result1 = new nonce(4869)(nonce(4869).ReasonCodes.UNKNOWN);
                      }
                    };
                  }
                };
                nonce(9565)(obj);
              });
              c5 = 7;
              c6 = 1;
              const obj15 = { value: promise, done: false };
              return obj15;
            }
          }
        } else if (4 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj17 = { value, done: true };
            return obj17;
          }
        } else if (5 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj18 = { value, done: true };
            return obj18;
          } else {
            channel2 = closure_130_10.getChannel(closure_129_2);
            const obj19 = { applicationId: closure_129_0, channel: channel2, commandIntegrationTypes: closure_129_10.integration_types };
            c5 = 6;
            c6 = 1;
            const obj20 = { value: closure_130_0(closure_130_2[34]).installApplicationOnDemandIfNeeded(obj19), done: false };
            return obj20;
          }
        } else if (6 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj21 = { value, done: true };
            return obj21;
          } else if (!value.isAuthorized) {
            const obj22 = { result: "failure", reason: closure_130_28.UNAUTHORIZED };
            c6 = 3;
            const obj23 = { value: obj22, done: true };
            return obj23;
          }
        } else if (7 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj24 = { value, done: true };
            return obj24;
          } else {
            c6 = 3;
            const obj25 = { value: { result: "success" }, done: true };
            return obj25;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj26 = { value, done: true };
          return obj26;
        } else if (!value) {
          let obj = { result: "failure", reason: closure_130_28.FAILED_ACTIVITY_LAUNCH_CHECKS };
          c6 = 3;
          const obj27 = { value: obj, done: true };
          return obj27;
        }
        c5 = 5;
        c6 = 1;
        const obj29 = { value: closure_130_4({ type: "user" }), done: false };
        return obj29;
      }
    } catch (tmp85) {
      closure_3 = tmp85;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp85;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_31 = async function _joinEmbeddedActivity(arg0) {
  if (c5 === 2) {
    c5 = 3;
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
          closure_3 = tmp2;
          closure_2 = tmp5;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          ({ applicationId: closure_130_0, channelId: closure_130_1, embeddedActivitiesManager: closure_130_2, isStart: closure_130_3, guildId: closure_130_4 } = closure_0);
          let sessionId;
          let currentUser;
          closure_130_7 = undefined;
          closure_130_8 = undefined;
          let channel;
          let embeddedActivityLaunchability;
          closure_130_11 = undefined;
          let currentEmbeddedActivity;
          let application;
          closure_130_14 = undefined;
          closure_130_15 = undefined;
          closure_130_16 = undefined;
          c4 = 1;
          c5 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          sessionId = closure_131_9.getSessionId();
          currentUser = closure_131_13.getCurrentUser();
          closure_130_7 = closure_130_0;
          if (null == closure_130_7) {
            const obj5 = { result: "failure", reason: closure_131_30.NO_APPLICATION_ID };
            c5 = 3;
            const obj6 = { value: obj5, done: true };
            return obj6;
          } else {
            c4 = 2;
            c5 = 1;
            const obj7 = { value: closure_131_1(closure_131_2[38])(closure_130_7, closure_130_1), done: false };
            return obj7;
          }
        }
      } else {
        if (2 === tmp5) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_130_8 = value;
            if (null != currentUser) {
              if (null != closure_130_8) {
                if (null == closure_130_1) {
                  const obj10 = { result: "failure", reason: closure_131_30.INVALID_CHANNEL };
                  c5 = 3;
                  const obj11 = { value: obj10, done: true };
                  return obj11;
                } else {
                  channel = closure_131_10.getChannel(closure_130_1);
                  if (null == channel) {
                    const obj12 = { result: "failure", reason: closure_131_30.INVALID_CHANNEL };
                    c5 = 3;
                    const obj13 = { value: obj12, done: true };
                    return obj13;
                  } else {
                    const obj14 = { channelId: closure_130_1, ChannelStore: closure_131_10, GuildStore: closure_131_11, PermissionStore: closure_131_12, VoiceStateStore: closure_131_14 };
                    embeddedActivityLaunchability = closure_131_0(closure_131_2[39]).getEmbeddedActivityLaunchability(obj14);
                    if (embeddedActivityLaunchability !== closure_131_0(closure_131_2[39]).EmbeddedActivityLaunchability.CAN_LAUNCH) {
                      closure_130_11 = closure_131_30.LAUNCHABILITY_CHECK_FAILED_OTHER;
                      if (embeddedActivityLaunchability === closure_131_0(closure_131_2[39]).EmbeddedActivityLaunchability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION) {
                        closure_130_11 = closure_131_30.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                        const result = closure_131_0(closure_131_2[40]).showActivitiesInvalidPermissionsAlert();
                        const obj25 = closure_131_0(closure_131_2[40]);
                      } else if (embeddedActivityLaunchability === closure_131_0(closure_131_2[39]).EmbeddedActivityLaunchability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS) {
                        closure_130_11 = closure_131_30.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
                        const obj15 = { title: null, body: null, hideActionSheet: false };
                        const intl = closure_131_0(closure_131_2[42]).intl;
                        obj15.title = intl.string(closure_131_0(closure_131_2[42]).t["IOy+I5"]);
                        const intl2 = closure_131_0(closure_131_2[42]).intl;
                        obj15.body = intl2.string(closure_131_0(closure_131_2[42]).t.UXoQTp);
                        closure_131_1(closure_131_2[41]).show(obj15);
                        const obj41 = closure_131_1(closure_131_2[41]);
                      }
                      { result: "failure", reason: null }[1] = closure_130_11;
                      c5 = 3;
                    } else {
                      currentEmbeddedActivity = closure_131_15.getCurrentEmbeddedActivity();
                      application = undefined;
                      let applicationId;
                      if (currentEmbeddedActivity != null) {
                        applicationId = currentEmbeddedActivity.applicationId;
                      }
                      if (null != applicationId) {
                        let applicationId1;
                        if (currentEmbeddedActivity != null) {
                          applicationId1 = currentEmbeddedActivity.applicationId;
                        }
                        application = closure_131_5.getApplication(applicationId1);
                      }
                      if (closure_130_3) {
                        const obj17 = { applicationId: closure_130_0, application: closure_130_8, channel, currentEmbeddedApplication: application, embeddedActivitiesManager: closure_130_2, user: currentUser };
                        c4 = 3;
                        c5 = 1;
                        const obj18 = { value: closure_131_0(closure_131_2[35]).confirmActivityLaunchChecks(obj17), done: false };
                        return obj18;
                      }
                    }
                    const obj39 = closure_131_0(closure_131_2[39]);
                  }
                }
              }
            }
            const obj19 = { result: "failure", reason: closure_131_30.UNKNOWN_USER_OR_APPLICATION };
            c5 = 3;
            const obj20 = { value: obj19, done: true };
            return obj20;
          }
        } else {
          if (3 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj21 = { value, done: true };
              return obj21;
            } else if (!value) {
              const obj23 = { result: "failure", reason: closure_131_30.FAILED_ACTIVITY_LAUNCH_CHECKS };
              c5 = 3;
              const obj24 = { value: obj23, done: true };
              return obj24;
            }
          } else if (4 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj26 = { value, done: true };
              return obj26;
            } else if (value) {
              const obj27 = { trackedActionData: null, retries: 3, oldFormErrors: true, rejectWithError: true };
              const obj28 = { event: closure_131_0(closure_131_2[45]).NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH, properties: null };
              const obj29 = { guild_id: closure_130_4, channel_id: closure_130_1, application_id: closure_130_0, session_id: sessionId };
              obj28.properties = obj29;
              obj27.trackedActionData = obj28;
              closure_130_16 = obj27;
              if (null != closure_130_1) {
                const request = { url: closure_131_22.ACTIVITY_CHANNEL_LAUNCH(closure_130_1, closure_130_0), body: null };
                const obj30 = { session_id: sessionId, guild_id: null };
                let guild_id = closure_130_4;
                if (closure_130_4 == null) {
                  guild_id = undefined;
                }
                obj30.guild_id = guild_id;
                request.body = obj30;
                const merged = Object.assign(closure_130_16);
                c4 = 5;
                c5 = 1;
                const obj31 = { value: closure_131_1(closure_131_2[46]).post(request), done: false };
                return obj31;
              } else {
                const obj32 = { result: "failure", reason: closure_131_30.OTHER };
                c5 = 3;
              }
            } else {
              const obj33 = { result: "failure", reason: closure_131_30.NOT_CONNECTED_TO_VOICE_CHANNEL };
              c5 = 3;
              const obj34 = { value: obj33, done: true };
              return obj34;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          }
          c5 = 3;
          const obj35 = { value, done: true };
          return obj35;
        }
        if (null != channel) {
          closure_130_14 = closure_131_1(closure_131_2[43])(channel.id);
          closure_130_15 = closure_131_16.includes(channel.type);
          if (closure_130_14) {
            const obj36 = { channelId: channel.id, bypassChangeModal: null != application };
            c4 = 4;
            c5 = 1;
            const obj37 = { value: closure_131_1(closure_131_2[44])(obj36), done: false };
            return obj37;
          } else {
            const obj38 = { result: "failure", reason: closure_131_30.AIT_NOT_ENABLED_FOR_USER };
            c5 = 3;
            const obj40 = { value: obj38, done: true };
            return obj40;
          }
        }
      }
    } catch (tmp96) {
      c5 = tmp;
      throw tmp96;
    }
  }
};
function stopEmbeddedActivity(showFeedback) {
  ({ location: _location, applicationId } = showFeedback);
  let flag = showFeedback.showFeedback;
  if (flag === undefined) {
    flag = true;
  }
  const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(_location);
  const obj3 = { type: "EMBEDDED_ACTIVITY_CLOSE", applicationId, location: _location, instanceId: null, showFeedback: null };
  let launchId;
  if (selfEmbeddedActivityForLocation != null) {
    launchId = selfEmbeddedActivityForLocation.launchId;
  }
  obj3.instanceId = launchId;
  obj3.showFeedback = flag;
  DispatcherDefault.dispatch(obj3);
  const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    const selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(embeddedActivityLocationChannelId);
    const currentUser = UserStore.getCurrentUser();
    if (currentUser != null) {
      const id = currentUser.id;
    }
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(embeddedActivityLocationChannelId);
    const found = embeddedActivitiesForChannel.find((applicationId) => applicationId.applicationId === applicationId);
    if (null != found) {
      if (null != id) {
        if ("" !== id) {
          const obj5 = { applicationId, instanceId: null };
          let compositeInstanceId;
          if (found != null) {
            compositeInstanceId = found.compositeInstanceId;
          }
          obj5.instanceId = compositeInstanceId;
          if (selectedParticipantId === tmp6Result.getEmbeddedActivityParticipantId(obj5)) {
            const participant = ChannelRTCActionCreatorsDefault.selectParticipant(embeddedActivityLocationChannelId, null);
            const tmp2Result = ChannelRTCActionCreatorsDefault;
          }
          tmp6Result = ChannelRTCParticipants;
        }
      }
    }
  }
}
let closure_33 = async function _fetchDeveloperApplications() {
  closure_1 = tmp3;
  DispatcherDefault.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START" });
  const HTTP = HTTPUtils.HTTP;
  const request = { url: constants.APPLICATIONS_WITH_ASSETS, query: { with_team_applications: true }, oldFormErrors: true, rejectWithError: true };
  await HTTP.get(request);
  if (1 === tmp7) {
    c3 = 0;
    closure_129_1(closure_129_2[25]).dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL" });
    c5 = 3;
    closure_129_1(closure_129_2[25]);
  } else if (arg0 === 1) {
    c5 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_128_0 = value;
    const applications = closure_128_0.body.applications;
    closure_128_2 = applications.map((item) => closure_1_8.createFromServer(item));
    closure_129_1(closure_129_2[25]).dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS", applications: closure_128_2, assets: closure_128_0.body.assets });
    closure_129_1(closure_129_2[25]);
    closure_129_1(closure_129_2[25]).dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications });
    c3 = 0;
    closure_129_1(closure_129_2[25]);
  }
  return value;
};
let closure_34 = async function _uploadImageAttachment(arg0) {
  closure_0 = arg0;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp7;
            closure_131_0 = undefined;
            c6 = 1;
            DispatcherDefault.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START" });
            let tmp29;
            if (null != channel_id) {
              const obj4 = { channel_id };
              tmp29 = obj4;
            }
            const HTTP = HTTPUtils.HTTP;
            const request = { url: closure_2_22.APPLICATION_UPLOAD_ATTACHMENT(closure_0), query: tmp29, attachments: null, rejectWithError: true };
            const obj6 = { name: "file", file };
            const items = [obj6];
            request.attachments = items;
            c7 = 2;
            c8 = 1;
            const obj7 = { value: HTTP.post(request), done: false };
            return obj7;
          }
        } else if (1 === tmp7) {
          c6 = 0;
          closure_131_1 = closure_5;
          closure_132_1(closure_132_2[25]).dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL" });
          const tmp27 = new closure_132_1(closure_132_2[28])(closure_131_1);
          c8 = 3;
          const obj8 = { value: tmp27, done: true };
          return obj8;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_131_0 = value;
          const obj10 = { type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS", attachment: closure_131_0.body.attachment };
          closure_132_1(closure_132_2[25]).dispatch(obj10);
          c6 = 0;
          c8 = 3;
          const obj11 = { value: closure_131_0.body.attachment, done: true };
          return obj11;
        }
      } catch (tmp33) {
        closure_5 = tmp33;
        if (tmp4 === c6) {
          c8 = tmp2;
          throw tmp33;
        } else {
          c7 = tmp;
        }
      }
    }
  })();
};
function handleFetchDone(arg0, fn, guildId) {
  guildId = guildId.guildId;
  let tmp = guildId === arg0;
  if (!tmp) {
    tmp = null == guildId && null == arg0;
    const tmp3 = null == guildId && null == arg0;
  }
  if (tmp) {
    fn();
  }
}
let closure_36 = async function _fetchShelf(arg0) {
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          const application = tmp3;
          closure_4 = tmp7;
          closure_132_0 = undefined;
          closure_132_1 = undefined;
          ({ guildId: closure_132_0, force } = closure_0);
          if (force === undefined) {
            force = false;
          }
          closure_132_1 = force;
          let shelfActivities;
          closure_132_3 = undefined;
          closure_132_4 = undefined;
          closure_132_5 = undefined;
          closure_132_6 = undefined;
          closure_132_7 = undefined;
          closure_132_8 = undefined;
          closure_132_9 = undefined;
          closure_132_10 = undefined;
          closure_132_11 = undefined;
          closure_132_12 = undefined;
          c8 = 1;
          c9 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            shelfActivities = closure_133_15.getShelfActivities(closure_132_0);
            const mapped = shelfActivities.map((application_id) => application.getApplication(application_id.application_id));
            closure_132_3 = mapped.filter(closure_133_0(closure_133_2[51]).isNotNullish);
            if (!closure_132_1) {
              if (!closure_133_15.shouldFetchShelf(closure_132_0)) {
                const shelfFetchStatus = closure_133_15.getShelfFetchStatus(closure_132_0);
                let isFetching;
                if (shelfFetchStatus != null) {
                  isFetching = shelfFetchStatus.isFetching;
                }
                if (isFetching) {
                  const promise = new Promise((cache) => {
                    closure_4 = closure_2_35.bind(null, closure_1_0, cache);
                    const subscription = closure_1(573).subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", closure_4);
                  });
                  closure_132_6 = promise;
                  const promise2 = new Promise((cache) => {
                    closure_5 = closure_2_35.bind(null, closure_1_0, cache);
                    const subscription = closure_1(573).subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", closure_5);
                  });
                  closure_132_7 = promise2;
                  const items = [closure_132_6, closure_132_7];
                  c8 = 3;
                  c9 = 1;
                  const obj6 = { value: Promise.race(items), done: false };
                  return obj6;
                } else {
                  const obj7 = { activityConfigs: shelfActivities, applications: closure_132_3 };
                  c9 = 3;
                }
              }
            }
            c7 = 1;
            const obj9 = { type: "EMBEDDED_ACTIVITY_FETCH_SHELF", guildId: closure_132_0 };
            closure_133_1(closure_133_2[25]).dispatch(obj9);
            let tmp82;
            if (undefined !== closure_132_0) {
              if ("" !== closure_132_0) {
                const obj11 = { guild_id: closure_132_0 };
                tmp82 = obj11;
              }
            }
            closure_132_8 = tmp82;
            const obj16 = closure_133_1(closure_133_2[25]);
            const request = { url: closure_133_22.ACTIVITY_SHELF, query: closure_132_8, trackedActionData: null, retries: 0, oldFormErrors: true, rejectWithError: true };
            const obj12 = { event: closure_133_0(closure_133_2[45]).NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF, properties: null };
            const obj13 = { guild_id: closure_132_0 };
            obj12.properties = obj13;
            request.trackedActionData = obj12;
            c8 = 4;
            c9 = 1;
            const obj14 = { value: closure_133_1(closure_133_2[46]).get(request), done: false };
            return obj14;
          }
        } else if (2 === tmp7) {
          c7 = 0;
          const obj15 = { type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", guildId: closure_132_0 };
          closure_133_1(closure_133_2[25]).dispatch(obj15);
          const obj17 = { activityConfigs: shelfActivities, applications: closure_132_3 };
          c9 = 3;
          const obj18 = { value: obj17, done: true };
          return obj18;
        } else if (3 === tmp7) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 !== 2) {
            if (null != closure_132_4) {
              closure_133_1(closure_133_2[25]).unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", closure_132_4);
              closure_132_4 = undefined;
              const obj8 = closure_133_1(closure_133_2[25]);
            }
            if (null != closure_132_5) {
              closure_133_1(closure_133_2[25]).unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", closure_132_5);
              closure_132_5 = undefined;
              const obj27 = closure_133_1(closure_133_2[25]);
            }
          }
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          c9 = 3;
          const obj20 = { value, done: true };
          return obj20;
        } else {
          closure_132_9 = value;
          const activities = closure_132_9.body.activities;
          closure_1 = activities;
          if (activities == null) {
            closure_1 = [];
          }
          closure_132_10 = closure_1;
          const applications = closure_132_9.body.applications;
          dependencyMap = applications;
          if (applications == null) {
            dependencyMap = [];
          }
          closure_132_11 = dependencyMap;
          const assets = closure_132_9.body.assets;
          closure_3 = assets;
          if (assets == null) {
            closure_3 = {};
          }
          closure_132_12 = closure_3;
          const obj21 = { type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", guildId: closure_132_0, activities: closure_132_10, applications: closure_132_11, assets: closure_132_12 };
          closure_133_1(closure_133_2[25]).dispatch(obj21);
          if (closure_132_11.length > 0) {
            const obj22 = { type: "APPLICATIONS_FETCH_SUCCESS", applications: closure_132_11 };
            closure_133_1(closure_133_2[25]).dispatch(obj22);
            const obj3 = closure_133_1(closure_133_2[25]);
          }
          const obj23 = { activityConfigs: closure_132_10, applications: closure_132_11.map((item) => closure_1_8.createFromServer(item)) };
          c7 = 0;
          c9 = 3;
          const obj24 = { value: obj23, done: true };
          return obj24;
        }
        c9 = 3;
        const obj25 = { value, done: true };
        return obj25;
      }
    } catch (tmp96) {
      closure_6 = tmp96;
      if (tmp4 === c7) {
        c9 = tmp2;
        throw tmp96;
      } else {
        c8 = tmp;
      }
    }
  }
};
let closure_37 = async function _sendEmbeddedActivityInvite() {
  await closure_130_1(closure_130_2[52]).createInvite(closure_129_0, { target_type: closure_130_26.EMBEDDED_APPLICATION, target_application_id: closure_129_2 }, closure_129_3);
  closure_129_5 = value;
  if (null != closure_130_10.getChannel(closure_129_1)) {
    closure_130_1(closure_130_2[53]).sendInvite(closure_129_1, closure_129_5.code, closure_129_3, closure_129_4);
    closure_130_1(closure_130_2[53]);
  }
  await "HermesInternal";
  closure_1 = tmp2;
  ({ activityChannelId: closure_129_0, invitedChannelId: closure_129_1, applicationId: closure_129_2, location: closure_129_3, inviteAnalyticsMetadata: closure_129_4 } = closure_0);
  return "PX_16";
};
let closure_38 = async function _sendEmbeddedActivityInviteUser() {
  await closure_130_1(closure_130_2[52]).createInvite(closure_129_0, { target_type: closure_130_26.EMBEDDED_APPLICATION, target_application_id: closure_129_1 }, closure_129_3);
  closure_129_6 = value;
  closure_130_1(closure_130_2[54]);
  await closure_130_1(closure_130_2[54]).ensurePrivateChannel(closure_129_2).then((result) => {
    channel = channel.getChannel(result);
    if (null == channel) {
      const _Error = Error;
      const error = new Error("Private channel not found");
      throw error;
    } else {
      let content;
      if (null != closure_1_5) {
        content = closure_1(7796).parse(channel, tmp2).content;
        const obj = closure_1(7796);
      }
      const obj2 = closure_1(7570);
      obj2.sendInvite(result, code.code, closure_1_3, closure_1_4, content);
    }
  });
  await "HermesInternal";
  closure_1 = tmp2;
  ({ channelId: closure_129_0, applicationId: closure_129_1, userId: closure_129_2, location: closure_129_3, inviteAnalyticsMetadata: closure_129_4, prefixedContent: closure_129_5 } = closure_0);
  return "PX_16";
};
let closure_39 = async function _validateTestMode(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c4 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj4 = { url: __initData3.ACTIVITY_TEST_MODE(closure_0), oldFormErrors: true, rejectWithError: true };
          c2 = 2;
          c1 = 1;
          const obj5 = { value: HTTP.get(obj4), done: false };
          return obj5;
        }
      } else if (1 === tmp6) {
        c4 = 0;
        c1 = 3;
        return { value: false, done: true };
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c4 = 0;
        c1 = 3;
        return { value: true, done: true };
      }
    } catch (tmp13) {
      closure_3 = tmp13;
      if (tmp3 === c4) {
        c1 = tmp2;
        throw tmp13;
      } else {
        c2 = tmp;
      }
    }
  }
};
function createProxyTicket() {
  const self = this;
  const apply = closure_41.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_41 = async function _createProxyTicket(arg0) {
  closure_0 = arg0;
  c3 = 0;
  c2 = 0;
  return (async (arg0, value) => {
    const obj4 = {};
    if (null != channel_id) {
      obj4.channel_id = channel_id;
    }
    const HTTP = HTTPUtils.HTTP;
    const request = { url: closure_2_22.APPLICATION_PROXY_TICKET(closure_0), body: obj4, rejectWithError: true };
    await HTTP.post(request);
    return value.body.ticket;
  })();
};
let closure_42 = async function _refreshProxyTicket() {
  closure_1 = arg1;
  c8 = 0;
  c9 = 0;
  c7 = 0;
  return (async (arg0, value) => {
    if (c9 === 2) {
      c9 = 3;
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
            closure_5 = tmp4;
            closure_4 = tmp6;
            closure_132_0 = applicationId;
            closure_132_1 = closure_1;
            closure_132_2 = undefined;
            let channel;
            closure_132_4 = undefined;
            closure_132_5 = undefined;
            const obj4 = { type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId, refreshing: true };
            DispatcherDefault.dispatch(obj4);
            c7 = 2;
            c3 = closure_1;
            if (closure_1 == null) {
              c3 = undefined;
            }
            c8 = 3;
            c9 = 1;
            const obj6 = { value: createProxyTicket(applicationId, c3), done: false };
            return obj6;
          }
        } else if (1 === tmp9) {
          c7 = 0;
          const obj8 = { type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: closure_132_0, refreshing: false };
          closure_133_1(closure_133_2[25]).dispatch(obj8);
          throw closure_6;
        } else if (2 === tmp9) {
          c7 = 1;
          closure_132_6 = closure_6;
          channel = closure_133_10.getChannel(closure_132_1);
          let guild_id;
          if (channel != null) {
            guild_id = channel.guild_id;
          }
          c2 = guild_id;
          if (guild_id == null) {
            c2 = null;
          }
          closure_132_4 = c2;
          if (null != closure_132_4) {
            let PRIVATE_CHANNEL = closure_133_0(closure_133_2[24]).EmbeddedActivityLocationKind.GUILD_CHANNEL;
          } else {
            PRIVATE_CHANNEL = closure_133_0(closure_133_2[24]).EmbeddedActivityLocationKind.PRIVATE_CHANNEL;
          }
          closure_132_5 = PRIVATE_CHANNEL;
          let tmp36 = closure_133_1(closure_133_2[25]);
          let dispatch = tmp36.dispatch;
          let obj9 = { type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL", nonce: closure_133_0(closure_133_2[20]).createNonce(), applicationId: closure_132_0, channelId: closure_132_1, guildId: closure_132_4, locationKind: closure_132_5, error: null };
          if (!(closure_132_6 instanceof closure_133_1(closure_133_2[27]))) {
            if (!(closure_132_6 instanceof closure_133_1(closure_133_2[28]))) {
              if (!(closure_132_6 instanceof closure_133_1(closure_133_2[29]))) {
                let tmp63 = new closure_133_1(closure_133_2[28])(closure_132_6);
              }
              obj9.error = tmp63;
              dispatch(obj9);
              c7 = 0;
              tmp36 = closure_133_1(closure_133_2[25]);
              dispatch = tmp36.dispatch;
              const obj10 = { type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: closure_132_0, refreshing: false };
              obj9 = dispatch(obj10);
              c9 = 3;
            }
          }
          tmp63 = closure_132_6;
          const obj5 = closure_133_0(closure_133_2[20]);
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          const obj11 = { type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: closure_132_0, refreshing: false };
          closure_133_1(closure_133_2[25]).dispatch(obj11);
          c9 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          closure_132_2 = value;
          const obj15 = { type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET", applicationId: closure_132_0, channelId: closure_132_1, proxyTicket: closure_132_2 };
          closure_133_1(closure_133_2[25]).dispatch(obj15);
          const obj12 = closure_133_1(closure_133_2[25]);
          const obj17 = { type: "EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET", applicationId: closure_132_0, proxyTicket: closure_132_2 };
          closure_133_1(closure_133_2[25]).dispatch(obj17);
          c7 = 0;
          const obj14 = closure_133_1(closure_133_2[25]);
          const obj19 = { type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: closure_132_0, refreshing: false };
          closure_133_1(closure_133_2[25]).dispatch(obj19);
          c9 = 3;
          return { value: true, done: true };
        }
      } catch (tmp80) {
        closure_6 = tmp80;
        if (tmp5 === c7) {
          c9 = tmp3;
          throw tmp80;
        } else if (tmp2 === tmp82) {
          c8 = tmp2;
        } else {
          c8 = tmp;
        }
      }
    }
  })();
};
let closure_4 = fn(9444).getOrFetchApplicationCommandIndexForTarget;
let closure_16 = fn(1921).SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES;
const ActivityPanelModes = fn(9659).ActivityPanelModes;
const Constants = fn(1074);
({ AnalyticEvents: closure_18, AnalyticsGameOpenTypes: closure_19, ApplicationFlags: closure_20, ChannelTypes: closure_21, Endpoints: closure_22, PopoutWindowKeys: closure_23 } = Constants);
const INSTALL_LESS_APP_IDS = fn(1349).INSTALL_LESS_APP_IDS;
const ContentDismissActionType = fn(1955).ContentDismissActionType;
const InviteTargetTypes = fn(7856).InviteTargetTypes;
let closure_28 = { NO_PRIMARY_APP_COMMAND: 1, [1]: "NO_PRIMARY_APP_COMMAND", UNAUTHORIZED: 2, [2]: "UNAUTHORIZED", NO_CHANNEL: 3, [3]: "NO_CHANNEL", FAILED_ACTIVITY_LAUNCH_CHECKS: 4, [4]: "FAILED_ACTIVITY_LAUNCH_CHECKS" };
let closure_30 = { OTHER: 0, [0]: "OTHER", NO_APPLICATION_ID: 1, [1]: "NO_APPLICATION_ID", UNKNOWN_USER_OR_APPLICATION: 2, [2]: "UNKNOWN_USER_OR_APPLICATION", INVALID_CHANNEL: 3, [3]: "INVALID_CHANNEL", LAUNCHABILITY_CHECK_FAILED_OTHER: 4, [4]: "LAUNCHABILITY_CHECK_FAILED_OTHER", NO_USE_EMBEDDED_ACTIVITIES_PERMISSION: 5, [5]: "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS: 6, [6]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", FAILED_ACTIVITY_LAUNCH_CHECKS: 7, [7]: "FAILED_ACTIVITY_LAUNCH_CHECKS", NOT_CONNECTED_TO_VOICE_CHANNEL: 8, [8]: "NOT_CONNECTED_TO_VOICE_CHANNEL", AIT_NOT_ENABLED_FOR_USER: 9, [9]: "AIT_NOT_ENABLED_FOR_USER" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/EmbeddedActivitiesActionCreators.tsx");

export const maybeDisconnectFromCurrentActivity = function maybeDisconnectFromCurrentActivity(location) {
  const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(location);
  if (null != selfEmbeddedActivityForLocation) {
    const obj = { location: null, applicationId: null, showFeedback: false };
    ({ location: obj.location, applicationId: obj.applicationId } = selfEmbeddedActivityForLocation);
    stopEmbeddedActivity(obj);
  }
};
export const runPrimaryAppCommandOrJoinEmbeddedActivity = function runPrimaryAppCommandOrJoinEmbeddedActivity() {
  const self = this;
  const apply = closure_27.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { stopEmbeddedActivity };
export const requestRespondToSeriousThermalState = function requestRespondToSeriousThermalState() {
  DispatcherDefault.dispatch({ type: "EMBEDDED_ACTIVITY_REQUEST_RESPOND_TO_SERIOUS_THERMAL_STATE" });
};
export const consumeRequestToReactToSeriousThermalState = function consumeRequestToReactToSeriousThermalState() {
  DispatcherDefault.dispatch({ type: "EMBEDDED_ACTIVITY_CONSUME_RESPOND_TO_SERIOUS_THERMAL_STATE_REQUEST" });
};
export const disregardSeriousThermalState = function disregardSeriousThermalState() {
  DispatcherDefault.dispatch({ type: "EMBEDDED_ACTIVITY_DISREGARD_SERIOUS_THERMAL_STATE" });
};
export const fetchDeveloperApplications = function fetchDeveloperApplications() {
  const self = this;
  const apply = closure_33.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const uploadImageAttachment = function uploadImageAttachment() {
  const self = this;
  const apply = closure_34.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchShelf = function fetchShelf() {
  const self = this;
  const apply = closure_36.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const sendEmbeddedActivityInvite = function sendEmbeddedActivityInvite() {
  const self = this;
  const apply = closure_37.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const sendEmbeddedActivityInviteUser = function sendEmbeddedActivityInviteUser() {
  const self = this;
  const apply = closure_38.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const dismissNewActivityIndicator = function dismissNewActivityIndicator() {
  let INDIRECT_ACTION = arg0;
  if (arg0 === undefined) {
    INDIRECT_ACTION = ContentDismissActionType.INDIRECT_ACTION;
  }
  const obj = DismissibleContentUtils;
  const result = obj.markVersionedDismissibleContentAsDismissed(dismissible_content.DismissibleContent.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1000), { dismissAction: INDIRECT_ACTION });
  const date = new Date();
};
export const validateTestMode = function validateTestMode() {
  const self = this;
  const apply = closure_39.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateActivityPanelMode = function updateActivityPanelMode(PANEL) {
  DispatcherDefault.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE", activityPanelMode: PANEL });
};
export const updateFocusedActivityLayout = function updateFocusedActivityLayout(focusedActivityLayout) {
  DispatcherDefault.dispatch({ type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT", focusedActivityLayout });
};
export const openActivityPopoutWindow = function openActivityPopoutWindow() {
  DispatcherDefault.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE", activityPanelMode: ActivityPanelModes.ACTIVITY_POPOUT_WINDOW });
  DispatcherDefault.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
};
export const updateActivityPopoutWindowLayout = function updateActivityPopoutWindowLayout(layout) {
  DispatcherDefault.dispatch({ type: "EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT", layout });
};
export { createProxyTicket };
export const refreshProxyTicket = function refreshProxyTicket() {
  const self = this;
  const apply = closure_42.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};