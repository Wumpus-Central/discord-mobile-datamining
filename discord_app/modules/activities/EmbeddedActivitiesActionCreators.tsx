// discord_app/modules/activities/EmbeddedActivitiesActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUtils from "../dismissible_content/DismissibleContentUtils.tsx";
import embeddedActivityLocationUtils from "utils/embeddedActivityLocationUtils.tsx";
import ChannelRTCActionCreatorsDefault from "../../actions/ChannelRTCActionCreators.tsx";
import ChannelRTCParticipants from "../calls/ChannelRTCParticipants.tsx";
import createProxyTicket from "createProxyTicket.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationStore from "../applications/ApplicationStore.tsx";
import ChannelRTCStore from "../calls/ChannelRTCStore.tsx";
import PopoutWindowStore from "../popout-window/PopoutWindowStore.native.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore.tsx";

require = fn;
let closure_26 = async function _runPrimaryAppCommandOrJoinEmbeddedActivity(arg0) {
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
      return { value: "IconComponent", done: null };
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
          ({ channelId: closure_140_0, applicationId: closure_140_1, isStart: closure_140_2, analyticsLocations: closure_140_3, locationObject: closure_140_4, componentId: closure_140_5, commandOrigin: closure_140_6, sectionName: closure_140_7, source: closure_140_8, onExecutedCallback: closure_140_9, referrerId: closure_140_10, customId: closure_140_11, inviterUserId: closure_140_12, renderInFramePool: closure_140_13, onConfirmActivityLaunchChecksAlertOpen: closure_140_14 } = closure_0);
          let channel;
          closure_140_16 = undefined;
          let application;
          closure_140_18 = undefined;
          closure_140_19 = undefined;
          closure_140_20 = undefined;
          closure_140_21 = undefined;
          let currentUser;
          closure_140_23 = undefined;
          closure_140_24 = undefined;
          closure_140_25 = undefined;
          c16 = 1;
          c17 = 1;
          return { value: "Reflect", done: true };
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
            guildId = obj35.getGuildId();
          }
          c1 = guildId;
          if (guildId == null) {
            c1 = undefined;
          }
          closure_140_16 = c1;
          if (null == closure_140_16) {
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
          application = closure_141_6.getApplication(closure_140_1);
          let result = null != application;
          if (result) {
            result = closure_141_0(closure_141_2[19]).canLaunchContextlessFrame(application);
            const obj16 = closure_141_0(closure_141_2[19]);
          }
          closure_140_18 = result;
          closure_140_19 = closure_141_0(closure_141_2[20]).createNonce();
          c15 = 1;
          const windowOpen = closure_141_8.getWindowOpen(closure_141_22.ACTIVITY_POPOUT);
          if (true !== closure_140_13) {
            closure_141_1(closure_141_2[21]).clearMainFrameSlot();
            const obj18 = closure_141_1(closure_141_2[21]);
          }
          if (closure_140_18) {
            closure_141_1(closure_141_2[22])(closure_140_0);
          }
          const obj17 = closure_141_0(closure_141_2[20]);
          obj35 = channel;
          const obj6 = { applicationId: closure_140_1, launch: null };
          const obj7 = { customId: closure_140_11, referrerId: closure_140_10 };
          obj6.launch = obj7;
          if (obj19.tryLaunchAsFrame(obj6)) {
            if (!closure_140_18) {
              c15 = 0;
              c17 = 3;
              const obj8 = { value: tmp225, done: true };
              return obj8;
            } else {
              let obj9 = { isStart: closure_140_2, inviterUserId: closure_140_12, channelId: null, guildId: null, locationKind: null };
              let channelId2 = closure_140_0;
              if (closure_140_0 == null) {
                channelId2 = null;
              }
              obj9.channelId = channelId2;
              guildId = closure_140_16;
              if (closure_140_16 == null) {
                guildId = null;
              }
              obj9.guildId = guildId;
              if (null != closure_140_16) {
                let PRIVATE_CHANNEL2 = closure_141_0(closure_141_2[25]).EmbeddedActivityLocationKind.GUILD_CHANNEL;
              } else {
                PRIVATE_CHANNEL2 = closure_141_0(closure_141_2[25]).EmbeddedActivityLocationKind.PRIVATE_CHANNEL;
              }
              obj9.locationKind = PRIVATE_CHANNEL2;
              obj9 = closure_141_0(closure_141_2[24]).stashPendingFrameLaunch(closure_140_1, obj9);
              const obj27 = closure_141_0(closure_141_2[24]);
            }
          } else {
            const obj10 = { type: "EMBEDDED_ACTIVITY_LAUNCH_START", nonce: closure_140_19, applicationId: closure_140_1, channelId: null, componentId: null, analyticsLocations: null, source: null, commandOrigin: null, inviterUserId: null, launchParams: null };
            let channelId = closure_140_0;
            if (closure_140_0 == null) {
              channelId = null;
            }
            obj10.channelId = channelId;
            obj10.componentId = closure_140_5;
            obj10.analyticsLocations = closure_140_3;
            obj10.source = closure_140_8;
            obj10.commandOrigin = closure_140_6;
            obj10.inviterUserId = closure_140_12;
            const obj11 = { customId: closure_140_11, referrerId: closure_140_10, renderInFramePool: closure_140_13 };
            obj10.launchParams = obj11;
            closure_141_1(closure_141_2[26]).dispatch(obj10);
            const obj22 = closure_141_1(closure_141_2[26]);
            c5 = closure_140_0;
            if (closure_140_0 == null) {
              c5 = undefined;
            }
            const items = [closure_141_0(closure_141_2[27]).createProxyTicket(closure_140_1, c5), closure_141_1(closure_141_2[28])(closure_140_1)];
            c16 = 3;
            c17 = 1;
            const obj12 = { value: Promise.all(items), done: false };
            return obj12;
          }
          obj19 = closure_141_0(closure_141_2[23]);
        }
      } else if (2 === tmp7) {
        c15 = 0;
        closure_140_26 = closure_14;
        if (closure_140_18) {
          c17 = 3;
          return { value: false, done: true };
        } else {
          if (null != closure_140_16) {
            let PRIVATE_CHANNEL = closure_141_0(closure_141_2[25]).EmbeddedActivityLocationKind.GUILD_CHANNEL;
          } else {
            PRIVATE_CHANNEL = closure_141_0(closure_141_2[25]).EmbeddedActivityLocationKind.PRIVATE_CHANNEL;
          }
          closure_140_25 = PRIVATE_CHANNEL;
          let obj14 = { type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL", nonce: closure_140_19, applicationId: closure_140_1, channelId: null, guildId: null, isStart: null, error: null, locationKind: null };
          let channelId6 = closure_140_0;
          if (closure_140_0 == null) {
            channelId6 = null;
          }
          obj14.channelId = channelId6;
          let guildId2 = closure_140_16;
          if (closure_140_16 == null) {
            guildId2 = null;
          }
          obj14.guildId = guildId2;
          obj14.isStart = closure_140_2;
          if (!(closure_140_26 instanceof closure_141_1(closure_141_2[30]))) {
            if (!(closure_140_26 instanceof closure_141_1(closure_141_2[31]))) {
              if (!(closure_140_26 instanceof closure_141_1(closure_141_2[32]))) {
                let tmp146 = new closure_141_1(closure_141_2[31])(closure_140_26);
              }
              obj14.error = tmp146;
              obj14.locationKind = closure_140_25;
              obj14 = obj13.dispatch(obj14);
              c17 = 3;
            }
          }
          tmp146 = closure_140_26;
          obj13 = closure_141_1(closure_141_2[26]);
        }
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c17 = 3;
          throw value;
        } else if (arg0 === 2) {
          c15 = 0;
          c17 = 3;
          const obj20 = { value, done: true };
          return obj20;
        } else {
          closure_140_20 = value;
          closure_140_21 = closure_141_3(closure_140_20, 1)[0];
          const obj21 = { type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET", applicationId: closure_140_1, channelId: null, proxyTicket: null };
          let channelId3 = closure_140_0;
          if (closure_140_0 == null) {
            channelId3 = null;
          }
          obj21.channelId = channelId3;
          obj21.proxyTicket = closure_140_21;
          closure_141_1(closure_141_2[26]).dispatch(obj21);
          currentUser = closure_141_13.getCurrentUser();
          if (null != currentUser) {
            if (closure_140_2) {
              let JOIN = closure_141_19.LAUNCH;
            } else {
              JOIN = closure_141_19.JOIN;
            }
            const obj23 = { type: JOIN, userId: null, guildId: null, channelId: null, channelType: null, applicationId: null, locationObject: null, analyticsLocations: null, source: null, referrerId: null, inviterUserId: null };
            let id;
            if (currentUser != null) {
              id = currentUser.id;
            }
            obj23.userId = id;
            obj23.guildId = closure_140_16;
            obj23.channelId = closure_140_0;
            let type;
            if (channel != null) {
              type = channel.type;
            }
            obj23.channelType = type;
            obj23.applicationId = closure_140_1;
            obj23.locationObject = closure_140_4;
            let analyticsLocations = closure_140_3;
            if (closure_140_3 == null) {
              analyticsLocations = [];
            }
            obj23.analyticsLocations = analyticsLocations;
            obj23.source = closure_140_8;
            obj23.referrerId = closure_140_10;
            obj23.inviterUserId = closure_140_12;
            closure_141_1(closure_141_2[29])(obj23);
            const tmp274 = closure_141_1(closure_141_2[29]);
          }
          if (closure_140_2) {
            if (null != closure_140_0) {
              if ((function isSupportedChannelType(arg0, type) {
                type = undefined;
                if (type != null) {
                  type = type.type;
                }
                let tmp2 = type === constants.GUILD_VOICE;
                application = application.getApplication(arg0);
                const result = closure_1_0(2031).supportsEmbeddedSurface(application, closure_1_0(5626).EmbeddedSurfaceType.MAIN);
                const obj = closure_1_0(2031);
                const result1 = closure_1_0(8882).isActivityInTextSupportedForChannel(type);
                if (tmp2) {
                  tmp2 = result;
                }
                if (!tmp2) {
                  tmp2 = result1;
                }
                return tmp2;
              })(closure_140_1, channel)) {
                const obj24 = { applicationId: closure_140_1, nonce: closure_140_19, channelId: closure_140_0, guildId: closure_140_16, commandOrigin: closure_140_6, sectionName: closure_140_7, source: closure_140_8, onExecutedCallback: closure_140_9, onConfirmActivityLaunchChecksAlertOpen: closure_140_14 };
                c16 = 5;
                c17 = 1;
                const obj26 = {
                  value: (function maybeSendPrimaryAppCommand() {
                                  const self = this;
                                  const apply = closure_1_28.apply;
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
            }
            const tmp942 = new closure_141_1(closure_141_2[30])(closure_141_1(closure_141_2[30]).Reasons.INVALID_CHANNEL);
            throw tmp942;
          } else {
            const obj28 = { applicationId: closure_140_1, channelId: closure_140_0, isStart: closure_140_2, guildId: closure_140_16 };
            c16 = 4;
            c17 = 1;
            const obj29 = {
              value: (function joinEmbeddedActivity() {
                          const self = this;
                          const apply = closure_1_30.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        })(obj28),
              done: false
            };
            return obj29;
          }
          const obj33 = closure_141_1(closure_141_2[26]);
        }
      } else {
        if (4 === tmp7) {
          if (arg0 === 1) {
            c17 = 3;
            throw value;
          } else if (arg0 === 2) {
            c15 = 0;
            c17 = 3;
            const obj30 = { value, done: true };
            return obj30;
          } else {
            closure_140_24 = value;
            if (closure_140_9 != null) {
              closure_140_9();
            }
            if ("failure" === closure_140_24.result) {
              const tmp432 = new closure_141_1(closure_141_2[30])(closure_141_1(closure_141_2[30]).Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, closure_140_24.reason);
              throw tmp432;
            }
          }
        } else if (arg0 === 1) {
          c17 = 3;
          throw value;
        } else if (arg0 === 2) {
          c15 = 0;
          c17 = 3;
          const obj31 = { value, done: true };
          return obj31;
        } else {
          closure_140_23 = value;
          if ("failure" === closure_140_23.result) {
            if (closure_140_23.reason === closure_141_27.FAILED_ACTIVITY_LAUNCH_CHECKS) {
              const obj32 = { type: "EMBEDDED_ACTIVITY_LAUNCH_CANCEL", nonce: closure_140_19, applicationId: closure_140_1, channelId: null };
              let channelId5 = closure_140_0;
              if (closure_140_0 == null) {
                channelId5 = null;
              }
              obj32.channelId = channelId5;
              closure_141_1(closure_141_2[26]).dispatch(obj32);
              c15 = 0;
              c17 = 3;
              return { value: false, done: true };
            } else {
              const tmp1111 = new closure_141_1(closure_141_2[30])(closure_141_1(closure_141_2[30]).Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
              throw tmp1111;
            }
          }
        }
        const obj34 = { type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", nonce: closure_140_19, applicationId: closure_140_1, channelId: null };
        let channelId4 = closure_140_0;
        if (closure_140_0 == null) {
          channelId4 = null;
        }
        obj34.channelId = channelId4;
        closure_141_1(closure_141_2[26]).dispatch(obj34);
        c15 = 0;
        c17 = 3;
        return { value: true, done: true };
      }
    } catch (tmp246) {
      closure_14 = tmp246;
      if (tmp4 === c15) {
        c17 = tmp2;
        throw tmp246;
      } else {
        c16 = tmp;
      }
    }
  }
};
let closure_28 = async function _maybeSendPrimaryAppCommand(arg0) {
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
      return { value: "IconComponent", done: null };
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
          ({ applicationId: closure_129_0, nonce: closure_129_1, channelId: closure_129_2, guildId: closure_129_3, commandOrigin: closure_129_4, sectionName: closure_129_5, source: closure_129_6, onExecutedCallback: closure_129_7, onConfirmActivityLaunchChecksAlertOpen: closure_129_8 } = closure_0);
          closure_129_9 = undefined;
          closure_129_10 = undefined;
          let channel2;
          let channel;
          closure_129_13 = undefined;
          let application;
          let currentEmbeddedActivity;
          let application2;
          let currentUser;
          c5 = 1;
          c6 = 1;
          return { value: "Reflect", done: true };
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
          closure_129_9 = null;
          c4 = 1;
          c5 = 3;
          c6 = 1;
          const obj5 = { value: closure_130_1(closure_130_2[36])(closure_129_2, closure_129_0), done: false };
          return obj5;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_18 = closure_3;
        if (closure_129_18.message === closure_130_0(closure_130_2[36]).NO_PRIMARY_APP_COMMAND_ERROR) {
          const obj6 = { result: "failure", reason: closure_130_27.NO_PRIMARY_APP_COMMAND };
          c6 = 3;
          const obj7 = { value: obj6, done: true };
          return obj7;
        } else {
          throw closure_129_18;
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
            closure_129_9 = value;
            c4 = 0;
            closure_129_10 = closure_129_9.handler !== closure_130_0(closure_130_2[37]).ApplicationCommandHandler.APP_HANDLER;
            if (!closure_129_10) {
              if (!closure_130_23.includes(closure_129_0)) {
                if (null != closure_129_2) {
                  const obj9 = { type: "channel", channelId: closure_129_2 };
                  c5 = 4;
                  c6 = 1;
                  const obj10 = { value: closure_130_5(obj9), done: false };
                  return obj10;
                }
              }
            }
            channel = closure_130_10.getChannel(closure_129_2);
            guild = null;
            if (null != closure_129_3) {
              guild = closure_130_11.getGuild(closure_129_3);
            }
            closure_129_13 = guild;
            if (null == channel) {
              const obj11 = { result: "failure", reason: closure_130_27.NO_CHANNEL };
              c6 = 3;
              const obj12 = { value: obj11, done: true };
              return obj12;
            } else {
              if (closure_129_10) {
                application = closure_130_6.getApplication(closure_129_0);
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
                  application2 = closure_130_6.getApplication(applicationId1);
                }
                currentUser = closure_130_13.getCurrentUser();
                if (null != currentUser) {
                  const obj13 = { applicationId: closure_129_0, application, channel, currentEmbeddedApplication: application2, user: currentUser, onConfirmActivityLaunchChecksAlertOpen: closure_129_8, shouldClosePopoutOnLeaveCurrentEmbeddedApplication: false };
                  c5 = 8;
                  c6 = 1;
                  const obj14 = { value: closure_130_0(closure_130_2[39]).confirmActivityLaunchChecks(obj13), done: false };
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
                        nonce(1267).track(constants.ACTIVITY_INTERACTION_CALLBACK_ERROR, obj2);
                        if (null != error_code) {
                          if (null != error_message) {
                            if (null != error_status) {
                              const obj3 = { status: error_status, body: null };
                              const obj4 = { message: error_message, code: error_code };
                              obj3.body = obj4;
                              const tmp21 = new nonce(6375)(obj3);
                              closure_1_1(tmp21);
                            }
                          }
                        }
                        if (null != error_reason_code) {
                          if (error_reason_code in nonce(6018).ReasonCodes) {
                            const tmp14 = new nonce(6018)(error_reason_code);
                            closure_1_1(tmp14);
                          }
                        }
                        const obj = nonce(1267);
                        const tmp3Result = nonce(6018);
                        closure_1_1(new nonce(6018)(nonce(6018).ReasonCodes.UNKNOWN));
                        const tmp3Result1 = new nonce(6018)(nonce(6018).ReasonCodes.UNKNOWN);
                      }
                    };
                  }
                };
                nonce(10198)(obj);
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
            const obj19 = { applicationId: closure_129_0, channel: channel2, commandIntegrationTypes: closure_129_9.integration_types };
            c5 = 6;
            c6 = 1;
            const obj20 = { value: closure_130_0(closure_130_2[38]).installApplicationOnDemandIfNeeded(obj19), done: false };
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
            const obj22 = { result: "failure", reason: closure_130_27.UNAUTHORIZED };
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
          let obj = { result: "failure", reason: closure_130_27.FAILED_ACTIVITY_LAUNCH_CHECKS };
          c6 = 3;
          const obj27 = { value: obj, done: true };
          return obj27;
        }
        c5 = 5;
        c6 = 1;
        const obj29 = { value: closure_130_5({ type: "user" }), done: false };
        return obj29;
      }
    } catch (tmp84) {
      closure_3 = tmp84;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp84;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_30 = async function _joinEmbeddedActivity(arg0) {
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
      return { value: "IconComponent", done: null };
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
          ({ applicationId: closure_130_0, channelId: closure_130_1, isStart: closure_130_2, guildId: closure_130_3 } = closure_0);
          let sessionId;
          let currentUser;
          closure_130_6 = undefined;
          closure_130_7 = undefined;
          let channel;
          let embeddedActivityLaunchability;
          closure_130_10 = undefined;
          let currentEmbeddedActivity;
          let application;
          closure_130_13 = undefined;
          closure_130_14 = undefined;
          closure_130_15 = undefined;
          c4 = 1;
          c5 = 1;
          return { value: "Reflect", done: true };
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
          closure_130_6 = closure_130_0;
          if (null == closure_130_6) {
            const obj5 = { result: "failure", reason: closure_131_29.NO_APPLICATION_ID };
            c5 = 3;
            const obj6 = { value: obj5, done: true };
            return obj6;
          } else {
            c4 = 2;
            c5 = 1;
            const obj7 = { value: closure_131_1(closure_131_2[42])(closure_130_6, closure_130_1), done: false };
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
            closure_130_7 = value;
            if (null != currentUser) {
              if (null != closure_130_7) {
                if (null == closure_130_1) {
                  const obj10 = { result: "failure", reason: closure_131_29.INVALID_CHANNEL };
                  c5 = 3;
                  const obj11 = { value: obj10, done: true };
                  return obj11;
                } else {
                  channel = closure_131_10.getChannel(closure_130_1);
                  if (null == channel) {
                    const obj12 = { result: "failure", reason: closure_131_29.INVALID_CHANNEL };
                    c5 = 3;
                    const obj13 = { value: obj12, done: true };
                    return obj13;
                  } else {
                    const obj14 = { channelId: closure_130_1, isContentGated: null, ChannelStore: null, GuildStore: null, PermissionStore: null, VoiceStateStore: null };
                    const obj41 = closure_131_0(closure_131_2[43]);
                    obj14.isContentGated = closure_131_0(closure_131_2[44]).isChannelContentGated(channel);
                    obj14.ChannelStore = closure_131_10;
                    obj14.GuildStore = closure_131_11;
                    obj14.PermissionStore = closure_131_12;
                    obj14.VoiceStateStore = closure_131_14;
                    embeddedActivityLaunchability = obj41.getEmbeddedActivityLaunchability(obj14);
                    if (embeddedActivityLaunchability !== closure_131_0(closure_131_2[43]).EmbeddedActivityLaunchability.CAN_LAUNCH) {
                      closure_130_10 = closure_131_29.LAUNCHABILITY_CHECK_FAILED_OTHER;
                      if (embeddedActivityLaunchability === closure_131_0(closure_131_2[43]).EmbeddedActivityLaunchability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION) {
                        closure_130_10 = closure_131_29.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                        const result = closure_131_0(closure_131_2[45]).showActivitiesInvalidPermissionsAlert();
                        { result: "failure", reason: null }[1] = closure_130_10;
                        c5 = 3;
                        const obj27 = closure_131_0(closure_131_2[45]);
                      } else if (embeddedActivityLaunchability !== closure_131_0(closure_131_2[43]).EmbeddedActivityLaunchability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS) {
                        if (embeddedActivityLaunchability === closure_131_0(closure_131_2[43]).EmbeddedActivityLaunchability.CHANNEL_CONTENT_GATED) {
                          closure_130_10 = closure_131_29.CHANNEL_CONTENT_GATED;
                          const obj15 = { title: null, body: null, hideActionSheet: false };
                          const intl3 = closure_131_0(closure_131_2[47]).intl;
                          obj15.title = intl3.string(closure_131_0(closure_131_2[47]).t["IOy+I5"]);
                          const intl4 = closure_131_0(closure_131_2[47]).intl;
                          obj15.body = intl4.string(closure_131_0(closure_131_2[47]).t.pKLV22);
                          closure_131_1(closure_131_2[46]).show(obj15);
                          const obj44 = closure_131_1(closure_131_2[46]);
                        }
                      }
                      closure_130_10 = closure_131_29.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
                      const obj17 = { title: null, body: null, hideActionSheet: false };
                      const intl = closure_131_0(closure_131_2[47]).intl;
                      obj17.title = intl.string(closure_131_0(closure_131_2[47]).t["IOy+I5"]);
                      const intl2 = closure_131_0(closure_131_2[47]).intl;
                      obj17.body = intl2.string(closure_131_0(closure_131_2[47]).t.UXoQTp);
                      closure_131_1(closure_131_2[46]).show(obj17);
                      const obj25 = closure_131_1(closure_131_2[46]);
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
                        application = closure_131_6.getApplication(applicationId1);
                      }
                      if (closure_130_2) {
                        const obj18 = { applicationId: closure_130_0, application: closure_130_7, channel, currentEmbeddedApplication: application, user: currentUser };
                        c4 = 3;
                        c5 = 1;
                        const obj19 = { value: closure_131_0(closure_131_2[39]).confirmActivityLaunchChecks(obj18), done: false };
                        return obj19;
                      }
                    }
                    const obj43 = closure_131_0(closure_131_2[44]);
                  }
                }
              }
            }
            const obj20 = { result: "failure", reason: closure_131_29.UNKNOWN_USER_OR_APPLICATION };
            c5 = 3;
            const obj21 = { value: obj20, done: true };
            return obj21;
          }
        } else {
          if (3 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj23 = { value, done: true };
              return obj23;
            } else if (!value) {
              const obj24 = { result: "failure", reason: closure_131_29.FAILED_ACTIVITY_LAUNCH_CHECKS };
              c5 = 3;
              const obj26 = { value: obj24, done: true };
              return obj26;
            }
          } else if (4 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj28 = { value, done: true };
              return obj28;
            } else if (value) {
              const obj29 = { trackedActionData: null, retries: 3, oldFormErrors: true, rejectWithError: true };
              const obj30 = { event: closure_131_0(closure_131_2[50]).NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH, properties: null };
              const obj31 = { guild_id: closure_130_3, channel_id: closure_130_1, application_id: closure_130_0, session_id: sessionId };
              obj30.properties = obj31;
              obj29.trackedActionData = obj30;
              closure_130_15 = obj29;
              if (null != closure_130_1) {
                const request = { url: closure_131_21.ACTIVITY_CHANNEL_LAUNCH(closure_130_1, closure_130_0), body: null };
                const obj32 = { session_id: sessionId, guild_id: null };
                let guild_id = closure_130_3;
                if (closure_130_3 == null) {
                  guild_id = undefined;
                }
                obj32.guild_id = guild_id;
                request.body = obj32;
                const merged = Object.assign(closure_130_15);
                c4 = 5;
                c5 = 1;
                const obj33 = { value: closure_131_1(closure_131_2[51]).post(request), done: false };
                return obj33;
              } else {
                const obj34 = { result: "failure", reason: closure_131_29.OTHER };
                c5 = 3;
              }
            } else {
              const obj35 = { result: "failure", reason: closure_131_29.NOT_CONNECTED_TO_VOICE_CHANNEL };
              c5 = 3;
              const obj36 = { value: obj35, done: true };
              return obj36;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          }
          c5 = 3;
          const obj37 = { value, done: true };
          return obj37;
        }
        if (null != channel) {
          closure_130_13 = closure_131_1(closure_131_2[48])(channel.id);
          closure_130_14 = closure_131_16.includes(channel.type);
          if (closure_130_13) {
            const obj38 = { channelId: channel.id, bypassChangeModal: null != application };
            c4 = 4;
            c5 = 1;
            const obj39 = { value: closure_131_1(closure_131_2[49])(obj38), done: false };
            return obj39;
          } else {
            const obj40 = { result: "failure", reason: closure_131_29.AIT_NOT_ENABLED_FOR_USER };
            c5 = 3;
            const obj42 = { value: obj40, done: true };
            return obj42;
          }
        }
      }
    } catch (tmp109) {
      c5 = tmp;
      throw tmp109;
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
let closure_32 = async function _uploadImageAttachment(arg0) {
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
        return { value: "IconComponent", done: null };
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
            const request = { url: closure_2_21.APPLICATION_UPLOAD_ATTACHMENT(closure_0), query: tmp29, attachments: null, rejectWithError: true };
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
          closure_132_1(closure_132_2[26]).dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL" });
          const tmp27 = new closure_132_1(closure_132_2[31])(closure_131_1);
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
          closure_132_1(closure_132_2[26]).dispatch(obj10);
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
let closure_33 = async function _sendEmbeddedActivityInvite() {
  await closure_130_1(closure_130_2[56]).createInvite(closure_129_0, { target_type: closure_130_25.EMBEDDED_APPLICATION, target_application_id: closure_129_2 }, closure_129_3);
  closure_129_5 = value;
  if (null != closure_130_10.getChannel(closure_129_1)) {
    closure_130_1(closure_130_2[57]).sendInvite(closure_129_1, closure_129_5.code, closure_129_3, closure_129_4);
    closure_130_1(closure_130_2[57]);
  }
  await "IconComponent";
  closure_1 = tmp2;
  ({ activityChannelId: closure_129_0, invitedChannelId: closure_129_1, applicationId: closure_129_2, location: closure_129_3, inviteAnalyticsMetadata: closure_129_4 } = closure_0);
  return "Reflect";
};
let closure_34 = async function _sendEmbeddedActivityInviteUser() {
  await closure_130_1(closure_130_2[56]).createInvite(closure_129_0, { target_type: closure_130_25.EMBEDDED_APPLICATION, target_application_id: closure_129_1 }, closure_129_3);
  closure_129_6 = value;
  await closure_130_1(closure_130_2[58]).ensurePrivateChannel(closure_129_2);
  closure_129_7 = value;
  const channel = closure_130_10.getChannel(closure_129_7);
  if (null == channel) {
    const _Error = Error;
    const error = new Error("Private channel not found");
    throw error;
  }
  if (null != closure_129_5) {
    const content = closure_130_1(closure_130_2[59]).parse(channel, closure_129_5).content;
    closure_130_1(closure_130_2[59]);
  }
  closure_130_1(closure_130_2[57]).sendInvite(closure_129_7, closure_129_6.code, closure_129_3, closure_129_4, content);
  await "IconComponent";
  closure_1 = tmp2;
  ({ channelId: closure_129_0, applicationId: closure_129_1, userId: closure_129_2, location: closure_129_3, inviteAnalyticsMetadata: closure_129_4, prefixedContent: closure_129_5 } = closure_0);
  return "Reflect";
};
let closure_35 = async function _validateTestMode(arg0) {
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c4 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj4 = { url: guild.ACTIVITY_TEST_MODE(closure_0), oldFormErrors: true, rejectWithError: true };
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
let closure_36 = async function _refreshProxyTicket() {
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
        return { value: "IconComponent", done: null };
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
            const obj6 = { value: createProxyTicket.createProxyTicket(applicationId, c3), done: false };
            return obj6;
          }
        } else if (1 === tmp9) {
          c7 = 0;
          const obj8 = { type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: closure_132_0, refreshing: false };
          closure_133_1(closure_133_2[26]).dispatch(obj8);
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
            let PRIVATE_CHANNEL = closure_133_0(closure_133_2[25]).EmbeddedActivityLocationKind.GUILD_CHANNEL;
          } else {
            PRIVATE_CHANNEL = closure_133_0(closure_133_2[25]).EmbeddedActivityLocationKind.PRIVATE_CHANNEL;
          }
          closure_132_5 = PRIVATE_CHANNEL;
          let tmp36 = closure_133_1(closure_133_2[26]);
          let dispatch = tmp36.dispatch;
          let obj9 = { type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL", nonce: closure_133_0(closure_133_2[20]).createNonce(), applicationId: closure_132_0, channelId: closure_132_1, guildId: closure_132_4, locationKind: closure_132_5, error: null };
          if (!(closure_132_6 instanceof closure_133_1(closure_133_2[30]))) {
            if (!(closure_132_6 instanceof closure_133_1(closure_133_2[31]))) {
              if (!(closure_132_6 instanceof closure_133_1(closure_133_2[32]))) {
                let tmp63 = new closure_133_1(closure_133_2[31])(closure_132_6);
              }
              obj9.error = tmp63;
              dispatch(obj9);
              c7 = 0;
              tmp36 = closure_133_1(closure_133_2[26]);
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
          closure_133_1(closure_133_2[26]).dispatch(obj11);
          c9 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          closure_132_2 = value;
          const obj15 = { type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET", applicationId: closure_132_0, channelId: closure_132_1, proxyTicket: closure_132_2 };
          closure_133_1(closure_133_2[26]).dispatch(obj15);
          const obj12 = closure_133_1(closure_133_2[26]);
          const obj17 = { type: "EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET", applicationId: closure_132_0, proxyTicket: closure_132_2 };
          closure_133_1(closure_133_2[26]).dispatch(obj17);
          c7 = 0;
          const obj14 = closure_133_1(closure_133_2[26]);
          const obj19 = { type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: closure_132_0, refreshing: false };
          closure_133_1(closure_133_2[26]).dispatch(obj19);
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
let closure_5 = fn(9650).getOrFetchApplicationCommandIndexForTarget;
let closure_16 = fn(2026).SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES;
const ActivityPanelModes = fn(5609).ActivityPanelModes;
const Constants = fn(1087);
({ AnalyticEvents: closure_18, AnalyticsGameOpenTypes: closure_19, ChannelTypes: closure_20, Endpoints: closure_21, PopoutWindowKeys: closure_22 } = Constants);
const INSTALL_LESS_APP_IDS = fn(1375).INSTALL_LESS_APP_IDS;
const ContentDismissActionType = fn(4820).ContentDismissActionType;
const InviteTargetTypes = fn(7809).InviteTargetTypes;
let closure_27 = { NO_PRIMARY_APP_COMMAND: 1, [1]: "NO_PRIMARY_APP_COMMAND", UNAUTHORIZED: 2, [2]: "UNAUTHORIZED", NO_CHANNEL: 3, [3]: "NO_CHANNEL", FAILED_ACTIVITY_LAUNCH_CHECKS: 4, [4]: "FAILED_ACTIVITY_LAUNCH_CHECKS" };
let closure_29 = { OTHER: 0, [0]: "OTHER", NO_APPLICATION_ID: 1, [1]: "NO_APPLICATION_ID", UNKNOWN_USER_OR_APPLICATION: 2, [2]: "UNKNOWN_USER_OR_APPLICATION", INVALID_CHANNEL: 3, [3]: "INVALID_CHANNEL", LAUNCHABILITY_CHECK_FAILED_OTHER: 4, [4]: "LAUNCHABILITY_CHECK_FAILED_OTHER", NO_USE_EMBEDDED_ACTIVITIES_PERMISSION: 5, [5]: "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS: 6, [6]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", FAILED_ACTIVITY_LAUNCH_CHECKS: 7, [7]: "FAILED_ACTIVITY_LAUNCH_CHECKS", NOT_CONNECTED_TO_VOICE_CHANNEL: 8, [8]: "NOT_CONNECTED_TO_VOICE_CHANNEL", AIT_NOT_ENABLED_FOR_USER: 9, [9]: "AIT_NOT_ENABLED_FOR_USER", CHANNEL_CONTENT_GATED: 10, [10]: "CHANNEL_CONTENT_GATED" };
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
  const apply = closure_26.apply;
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
export const uploadImageAttachment = function uploadImageAttachment() {
  const self = this;
  const apply = closure_32.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const sendEmbeddedActivityInvite = function sendEmbeddedActivityInvite() {
  const self = this;
  const apply = closure_33.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const sendEmbeddedActivityInviteUser = function sendEmbeddedActivityInviteUser() {
  const self = this;
  const apply = closure_34.apply;
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
  const apply = closure_35.apply;
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
export const refreshProxyTicket = function refreshProxyTicket() {
  const self = this;
  const apply = closure_36.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};