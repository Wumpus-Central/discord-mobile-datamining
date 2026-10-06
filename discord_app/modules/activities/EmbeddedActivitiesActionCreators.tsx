// discord_app/modules/activities/EmbeddedActivitiesActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ApplicationConstants from "../applications/ApplicationConstants.tsx";
import Constants2 from "Constants.tsx";
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUtils from "../dismissible_content/DismissibleContentUtils.tsx";
import DismissibleContentConstants from "../dismissible_content/DismissibleContentConstants.tsx";
import embeddedActivityLocationUtils from "utils/embeddedActivityLocationUtils.tsx";
import ChannelRTCActionCreatorsDefault from "../../actions/ChannelRTCActionCreators.tsx";
import Constants3 from "../instant_invite/Constants.tsx";
import ApplicationCommandIndexStore from "../application_commands/ApplicationCommandIndexStore.tsx";
import ActivityPanelConstants from "panel/ActivityPanelConstants.tsx";
import ChannelRTCParticipants from "../calls/ChannelRTCParticipants.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
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
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c16, c17, closure_12, closure_5;

let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let obj = function _runPrimaryAppCommandOrJoinEmbeddedActivity() {
  obj = _asyncToGenerator(async function (channelId) {
    let PRIVATE_CHANNEL2;
    let analyticsLocations;
    let c0;
    let c1;
    let c10;
    let c11;
    let c12;
    let c13;
    let c14;
    let c15;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    let c8;
    let c9;
    let closure_8;
    let obj8;
    function isSupportedChannelType(c1, type) {
      type = undefined;
      if (type != null) {
        type = type.type;
      }
      let tmp2 = type === constants.GUILD_VOICE;
      application = application.getApplication(c1);
      obj = channelId(_null[30]);
      const result = obj.supportsEmbeddedSurface(application, channelId(_null[31]).EmbeddedSurfaceType.MAIN);
      const obj2 = channelId(_null[32]);
      const result1 = obj2.isActivityInTextSupportedForChannel(type);
      if (tmp2) {
        tmp2 = result;
      }
      if (!tmp2) {
        tmp2 = result1;
      }
      return tmp2;
    }
    function maybeSendPrimaryAppCommand() {
      return closure_1_28(...arguments);
    }
    function joinEmbeddedActivity() {
      return closure_1_30(...arguments);
    }
    if (c17 === 2) {
      c17 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (channelId === 1) {
        throw value;
      } else if (channelId === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let onConfirmActivityLaunchChecksAlertOpen;
      try {
        let applicationId;
        let _null;
        let _null2;
        let _null3;
        let embeddedActivitiesManager;
        let _null4;
        let _null5;
        let sectionName;
        let _null6;
        let _null7;
        let _null8;
        let customId;
        let inviterUserId;
        let renderInFramePool;
        let type;
        let guildId;
        let application;
        let c19;
        let nonce;
        let proxyTicket;
        let id;
        let closure_23;
        let closure_24;
        let PRIVATE_CHANNEL;
        c17 = 2;
        if (0 === c16) {
          if (channelId === 1) {
            c17 = 3;
            throw value;
          } else if (channelId === 2) {
            c17 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_13 = tmp;
            closure_12 = tmp4;
            channelId = undefined;
            applicationId = undefined;
            _null = undefined;
            _null2 = undefined;
            _null3 = undefined;
            embeddedActivitiesManager = undefined;
            _null4 = undefined;
            _null5 = undefined;
            sectionName = undefined;
            _null6 = undefined;
            _null7 = undefined;
            _null8 = undefined;
            customId = undefined;
            inviterUserId = undefined;
            renderInFramePool = undefined;
            onConfirmActivityLaunchChecksAlertOpen = undefined;
            ({
              channelId: c0,
              applicationId: c1,
              isStart: c2,
              analyticsLocations: c3,
              locationObject: c4,
              embeddedActivitiesManager: c5,
              componentId: c6,
              commandOrigin: c7,
              sectionName: c8,
              source: c9,
              onExecutedCallback: c10,
              referrerId: c11,
              customId: c12,
              inviterUserId: c13,
              renderInFramePool: c14,
              onConfirmActivityLaunchChecksAlertOpen: c15,
            } = closure_0);
            type = undefined;
            guildId = undefined;
            application = undefined;
            c19 = undefined;
            nonce = undefined;
            proxyTicket = undefined;
            id = undefined;
            closure_23 = undefined;
            closure_24 = undefined;
            PRIVATE_CHANNEL = undefined;
            c16 = 1;
            c17 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c16) {
          if (channelId === 1) {
            c17 = 3;
            throw value;
          } else if (channelId === 2) {
            c17 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            type = closure_141_10.getChannel(channelId);
            guildId = undefined;
            const obj26 = type;
            if (type != null) {
              guildId = obj26.getGuildId();
            }
            applicationId = guildId;
            if (guildId == null) {
              applicationId = undefined;
            }
            guildId = applicationId;
            if (null == guildId) {
              let isPrivateResult;
              const obj12 = type;
              if (type != null) {
                isPrivateResult = obj12.isPrivate();
              }
              if (!isPrivateResult) {
                c17 = 3;
                return { value: false, done: true };
              }
            }
            application = closure_141_5.getApplication(applicationId);
            let result = null != application;
            if (result) {
              const obj13 = closure_141_0(closure_141_2[19]);
              result = obj13.canLaunchContextlessFrame(application);
            }
            c19 = result;
            const obj14 = closure_141_0(closure_141_2[20]);
            nonce = obj14.createNonce();
            onConfirmActivityLaunchChecksAlertOpen = 1;
            const windowOpen = closure_141_7.getWindowOpen(closure_141_22.ACTIVITY_POPOUT);
            if (true !== renderInFramePool) {
              const obj15 = closure_141_1(closure_141_2[21]);
              obj15.clearMainFrameSlot();
            }
            const obj5 = { applicationId, customId, referrerId: _null8 };
            const obj16 = closure_141_0(closure_141_2[22]);
            if (obj16.tryLaunchAsFrame(obj5)) {
              const obj6 = {
                isStart: _null,
                inviterUserId,
                channelId: _null,
                guildId: _null3,
                locationKind: PRIVATE_CHANNEL2,
              };
              _null = channelId;
              const stashPendingFrameLaunch = closure_141_0(closure_141_2[23]).stashPendingFrameLaunch;
              const tmp209 = closure_141_0(closure_141_2[23]);
              const tmp210 = applicationId;
              if (channelId == null) {
                _null = null;
              }
              _null3 = guildId;
              if (guildId == null) {
                _null3 = null;
              }
              if (null != guildId) {
                PRIVATE_CHANNEL2 = closure_141_0(closure_141_2[24]).EmbeddedActivityLocationKind.GUILD_CHANNEL;
              } else {
                PRIVATE_CHANNEL2 = closure_141_0(closure_141_2[24]).EmbeddedActivityLocationKind.PRIVATE_CHANNEL;
              }
              let result1 = stashPendingFrameLaunch(tmp210, obj6);
              onConfirmActivityLaunchChecksAlertOpen = 0;
              c17 = 3;
              return { value: true, done: true };
            } else {
              const obj7 = {
                type: "EMBEDDED_ACTIVITY_LAUNCH_START",
                nonce,
                applicationId,
                channelId: _null2,
                componentId: _null4,
                analyticsLocations: _null2,
                source: _null6,
                commandOrigin: _null5,
                inviterUserId,
                launchParams: obj8,
              };
              _null2 = channelId;
              const dispatch4 = closure_141_1(closure_141_2[25]).dispatch;
              const tmp187 = closure_141_1(closure_141_2[25]);
              if (channelId == null) {
                _null2 = null;
              }
              obj8 = { customId, referrerId: _null8, renderInFramePool };
              dispatch4(obj7);
              embeddedActivitiesManager = channelId;
              const tmp204 = applicationId;
              if (channelId == null) {
                embeddedActivitiesManager = undefined;
              }
              c16 = 3;
              c17 = 1;
              const obj9 = { value: closure_141_39(tmp204, embeddedActivitiesManager), done: false };
              return obj9;
            }
          }
        } else if (2 === c16) {
          onConfirmActivityLaunchChecksAlertOpen = 0;
          let closure_26 = closure_14;
          const tmp99 = c19;
          if (tmp99) {
            c17 = 3;
            return { value: false, done: true };
          } else {
            if (null != guildId) {
              PRIVATE_CHANNEL = closure_141_0(closure_141_2[24]).EmbeddedActivityLocationKind.GUILD_CHANNEL;
            } else {
              PRIVATE_CHANNEL = closure_141_0(closure_141_2[24]).EmbeddedActivityLocationKind.PRIVATE_CHANNEL;
            }
            const obj10 = {
              type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
              nonce,
              applicationId,
              channelId: _null7,
              guildId: _null8,
              isStart: _null,
              error: null,
              locationKind: null,
            };
            _null7 = channelId;
            const dispatch3 = closure_141_1(closure_141_2[25]).dispatch;
            const tmp111 = closure_141_1(closure_141_2[25]);
            if (channelId == null) {
              _null7 = null;
            }
            _null8 = guildId;
            if (guildId == null) {
              _null8 = null;
            }
            if (!(closure_26 instanceof closure_141_1(closure_141_2[27]))) {
              if (!(closure_26 instanceof closure_141_1(closure_141_2[28]))) {
                let tmp140;
                if (!(closure_26 instanceof closure_141_1(closure_141_2[29]))) {
                  const self7 = this;
                  const self8 = this;
                  tmp140 = new closure_141_1(closure_141_2[28])(closure_26);
                }
                obj10.error = tmp140;
                obj10.locationKind = PRIVATE_CHANNEL;
                dispatch3(obj10);
                c17 = 3;
                return { value: false, done: true };
              }
            }
            tmp140 = closure_26;
          }
        } else if (3 === c16) {
          if (channelId === 1) {
            c17 = 3;
            throw value;
          } else if (channelId === 2) {
            onConfirmActivityLaunchChecksAlertOpen = 0;
            c17 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            proxyTicket = value;
            const obj17 = {
              type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
              applicationId,
              channelId: _null4,
              proxyTicket,
            };
            _null4 = channelId;
            const dispatch5 = closure_141_1(closure_141_2[25]).dispatch;
            const tmp245 = closure_141_1(closure_141_2[25]);
            if (channelId == null) {
              _null4 = null;
            }
            dispatch5(obj17);
            id = closure_141_13.getCurrentUser();
            if (null != id) {
              let JOIN;
              const tmp252 = closure_141_1(closure_141_2[26]);
              if (_null) {
                JOIN = closure_141_19.LAUNCH;
              } else {
                JOIN = closure_141_19.JOIN;
              }
              const obj18 = {
                type: JOIN,
                userId: id,
                guildId,
                channelId,
                channelType: type,
                applicationId,
                locationObject: _null3,
                analyticsLocations,
                source: _null6,
                referrerId: _null8,
                inviterUserId,
              };
              id = undefined;
              if (id != null) {
                id = id.id;
              }
              type = undefined;
              if (type != null) {
                type = type.type;
              }
              analyticsLocations = _null2;
              if (_null2 == null) {
                analyticsLocations = [];
              }
              tmp252(obj18);
            }
            const tmp70 = _null;
            if (tmp70) {
              if (null != channelId) {
                if (isSupportedChannelType(applicationId, type)) {
                  const obj19 = {
                    applicationId,
                    nonce,
                    channelId,
                    guildId,
                    commandOrigin: _null5,
                    sectionName,
                    source: _null6,
                    onExecutedCallback: _null7,
                    onConfirmActivityLaunchChecksAlertOpen,
                    embeddedActivitiesManager,
                  };
                  c16 = 5;
                  c17 = 1;
                  const obj20 = { value: maybeSendPrimaryAppCommand(obj19), done: false };
                  return obj20;
                }
              }
              const self5 = this;
              const self6 = this;
              const tmp91 = closure_141_1(closure_141_2[27]);
              const tmp912 = new tmp91(closure_141_1(closure_141_2[27]).Reasons.INVALID_CHANNEL);
              throw tmp912;
            } else {
              const obj21 = { applicationId, channelId, embeddedActivitiesManager, isStart: _null, guildId };
              c16 = 4;
              c17 = 1;
              const obj22 = { value: joinEmbeddedActivity(obj21), done: false };
              return obj22;
            }
          }
        } else {
          if (4 === c16) {
            if (channelId === 1) {
              c17 = 3;
              throw value;
            } else if (channelId === 2) {
              onConfirmActivityLaunchChecksAlertOpen = 0;
              c17 = 3;
              const obj23 = { value, done: true };
              return obj23;
            } else {
              closure_24 = value;
              if (_null7 != null) {
                _null7();
              }
              if ("failure" === closure_24.result) {
                const self3 = this;
                const self4 = this;
                const tmp40 = closure_141_1(closure_141_2[27]);
                const tmp402 = new tmp40(
                  closure_141_1(closure_141_2[27]).Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED,
                  closure_24.reason,
                );
                throw tmp402;
              }
            }
          } else if (channelId === 1) {
            c17 = 3;
            throw value;
          } else if (channelId === 2) {
            onConfirmActivityLaunchChecksAlertOpen = 0;
            c17 = 3;
            const obj24 = { value, done: true };
            return obj24;
          } else {
            closure_23 = value;
            if ("failure" === closure_23.result) {
              if (closure_23.reason === closure_141_27.FAILED_ACTIVITY_LAUNCH_CHECKS) {
                obj = { type: "EMBEDDED_ACTIVITY_LAUNCH_CANCEL", nonce, applicationId, channelId: _null6 };
                _null6 = channelId;
                const dispatch = closure_141_1(closure_141_2[25]).dispatch;
                const tmp17 = closure_141_1(closure_141_2[25]);
                if (channelId == null) {
                  _null6 = null;
                }
                dispatch(obj);
                onConfirmActivityLaunchChecksAlertOpen = 0;
                c17 = 3;
                return { value: false, done: true };
              } else {
                const self = this;
                const self2 = this;
                const tmp8 = closure_141_1(closure_141_2[27]);
                const tmp811 = new tmp8(closure_141_1(closure_141_2[27]).Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
                throw tmp811;
              }
            }
          }
          const obj25 = { type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", nonce, applicationId, channelId: _null5 };
          _null5 = channelId;
          const dispatch2 = closure_141_1(closure_141_2[25]).dispatch;
          const tmp30 = closure_141_1(closure_141_2[25]);
          if (channelId == null) {
            _null5 = null;
          }
          dispatch2(obj25);
          onConfirmActivityLaunchChecksAlertOpen = 0;
          c17 = 3;
          return { value: true, done: true };
        }
      } catch (tmp227) {
        closure_14 = tmp227;
        if (0 === onConfirmActivityLaunchChecksAlertOpen) {
          c17 = 3;
          throw tmp227;
        } else {
          c16 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _maybeSendPrimaryAppCommand() {
  obj = _asyncToGenerator(async function (applicationId) {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    let c8;
    let c9;
    let obj16;
    let obj28;
    let tmp;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (applicationId === 1) {
        throw value;
      } else if (applicationId === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_2;
        let nonce;
        let channelId;
        let onConfirmActivityLaunchChecksAlertOpen;
        let embeddedActivitiesManager;
        let command;
        let closure_11;
        let channel;
        let channel2;
        let application;
        let currentEmbeddedActivity;
        let currentEmbeddedApplication;
        let user;
        c6 = 2;
        if (0 === c5) {
          if (applicationId === 1) {
            c6 = 3;
            throw value;
          } else if (applicationId === 2) {
            c6 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp;
            nonce = tmp4;
            applicationId = undefined;
            c1 = undefined;
            channelId = undefined;
            c3 = undefined;
            c4 = undefined;
            c7 = undefined;
            onConfirmActivityLaunchChecksAlertOpen = undefined;
            embeddedActivitiesManager = undefined;
            ({
              applicationId: c0,
              nonce: c1,
              channelId: c2,
              guildId: c3,
              commandOrigin: c4,
              sectionName: c5,
              source: c6,
              onExecutedCallback: c7,
              onConfirmActivityLaunchChecksAlertOpen: c8,
              embeddedActivitiesManager: c9,
            } = closure_0);
            command = undefined;
            closure_11 = undefined;
            channel = undefined;
            channel2 = undefined;
            let guild;
            application = undefined;
            currentEmbeddedActivity = undefined;
            currentEmbeddedApplication = undefined;
            user = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c5) {
          if (applicationId === 1) {
            c6 = 3;
            throw value;
          } else if (applicationId === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            command = null;
            c4 = 1;
            c5 = 3;
            c6 = 1;
            const obj5 = { value: closure_130_1(closure_130_2[33])(channelId, applicationId), done: false };
            return obj5;
          }
        } else if (2 === c5) {
          c4 = 0;
          const message = closure_3;
          if (message.message === closure_130_0(closure_130_2[33]).NO_PRIMARY_APP_COMMAND_ERROR) {
            const obj6 = { result: "failure", reason: closure_130_27.NO_PRIMARY_APP_COMMAND };
            c6 = 3;
            const obj7 = { value: obj6, done: true };
            return obj7;
          } else {
            throw message;
          }
        } else {
          if (3 === c5) {
            if (applicationId === 1) {
              c6 = 3;
              throw value;
            } else if (applicationId === 2) {
              c4 = 0;
              c6 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              command = value;
              c4 = 0;
              closure_11 = command.handler !== closure_130_0(closure_130_2[34]).ApplicationCommandHandler.APP_HANDLER;
              const tmp102 = closure_11;
              if (!tmp102) {
                if (!closure_130_23.includes(applicationId)) {
                  let tmp13 = nonce;
                  if (null != channelId) {
                    let tmp18 = closure_2;
                    const obj9 = { type: "channel", channelId };
                    c5 = 4;
                    c6 = 1;
                    const obj10 = { value: closure_130_4(obj9), done: false };
                    return obj10;
                  }
                }
              }
              channel2 = closure_130_10.getChannel(channelId);
              guild = null;
              if (null != c3) {
                guild = closure_130_11.getGuild(c3);
              }
              if (null == channel2) {
                const obj11 = { result: "failure", reason: closure_130_27.NO_CHANNEL };
                c6 = 3;
                const obj12 = { value: obj11, done: true };
                return obj12;
              } else {
                const tmp104 = closure_11;
                if (tmp104) {
                  application = closure_130_5.getApplication(applicationId);
                  currentEmbeddedActivity = closure_130_15.getCurrentEmbeddedActivity();
                  currentEmbeddedApplication = undefined;
                  applicationId = undefined;
                  if (currentEmbeddedActivity != null) {
                    applicationId = currentEmbeddedActivity.applicationId;
                  }
                  if (null != applicationId) {
                    let applicationId1;
                    const getApplication = closure_130_5.getApplication;
                    if (currentEmbeddedActivity != null) {
                      applicationId1 = currentEmbeddedActivity.applicationId;
                    }
                    currentEmbeddedApplication = getApplication(applicationId1);
                  }
                  user = closure_130_13.getCurrentUser();
                  if (null != user) {
                    const obj13 = {
                      applicationId,
                      application,
                      channel: channel2,
                      currentEmbeddedApplication,
                      embeddedActivitiesManager,
                      user,
                      onConfirmActivityLaunchChecksAlertOpen,
                      shouldClosePopoutOnLeaveCurrentEmbeddedApplication: false,
                    };
                    c5 = 8;
                    c6 = 1;
                    const obj14 = { value: obj16.confirmActivityLaunchChecks(obj13), done: false };
                    obj16 = closure_130_0(closure_130_2[36]);
                    return obj14;
                  }
                }
                let self = this;
                let self2 = this;
                const promise = new Promise((arg0, arg1) => {
                  let channel_id;
                  let guild_id;
                  let obj2;
                  let closure_0 = arg0;
                  closure_1 = arg1;
                  obj = {
                    command,
                    optionValues: {},
                    context: obj2,
                    commandOrigin,
                    sectionName,
                    source,
                    interactionLifecycleOptionsFactory() {
                      let application_id;
                      obj = {
                        nonce,
                        onSuccess() {
                          if (closure_2_7 != null) {
                            tmp();
                          }
                          application_id();
                        },
                        onFailure(error_code, error_message, error_status, error_reason_code) {
                          let obj3;
                          if (closure_2_7 != null) {
                            tmp();
                          }
                          obj = {
                            channel_id,
                            guild_id,
                            application_id,
                            channel_type: type,
                            error_code,
                            error_message,
                            error_status,
                            error_reason_code,
                            source,
                          };
                          type = undefined;
                          const track = nonce(channelId[38]).track;
                          const ACTIVITY_INTERACTION_CALLBACK_ERROR = constants.ACTIVITY_INTERACTION_CALLBACK_ERROR;
                          nonce(channelId[38]);
                          if (type != null) {
                            type = type.type;
                          }
                          track(ACTIVITY_INTERACTION_CALLBACK_ERROR, obj);
                          if (null != error_code) {
                            if (null != error_message) {
                              if (null != error_status) {
                                const obj2 = { status: error_status, body: obj3 };
                                const self3 = this;
                                const self4 = this;
                                obj3 = { message: error_message, code: error_code };
                                const tmp18 = new nonce(channelId[28])(obj2);
                                closure_1_1(tmp18);
                              }
                            }
                          }
                          if (null != error_reason_code) {
                            if (error_reason_code in nonce(channelId[29]).ReasonCodes) {
                              const self = this;
                              const self2 = this;
                              const tmp13 = new nonce(channelId[29])(error_reason_code);
                              closure_1_1(tmp13);
                            }
                          }
                          const tmp3Result = nonce(channelId[29]);
                          const tmp3Result1 = new tmp3Result(nonce(channelId[29]).ReasonCodes.UNKNOWN);
                          closure_1_1(tmp3Result1);
                        },
                      };
                      return obj;
                    },
                  };
                  obj2 = { channel, guild };
                  const tmp = nonce(channelId[37])(obj);
                });
                c5 = 7;
                c6 = 1;
                const obj15 = { value: promise, done: false };
                return obj15;
              }
            }
          } else if (4 === c5) {
            if (applicationId === 1) {
              c6 = 3;
              throw value;
            } else if (applicationId === 2) {
              c6 = 3;
              const obj17 = { value, done: true };
              return obj17;
            }
          } else if (5 === c5) {
            if (applicationId === 1) {
              c6 = 3;
              throw value;
            } else if (applicationId === 2) {
              c6 = 3;
              const obj18 = { value, done: true };
              return obj18;
            } else {
              channel = closure_130_10.getChannel(channelId);
              const obj19 = { applicationId, channel, commandIntegrationTypes: command.integration_types };
              c5 = 6;
              c6 = 1;
              const obj20 = { value: obj28.installApplicationOnDemandIfNeeded(obj19), done: false };
              obj28 = closure_130_0(closure_130_2[35]);
              return obj20;
            }
          } else if (6 === c5) {
            if (applicationId === 1) {
              c6 = 3;
              throw value;
            } else if (applicationId === 2) {
              c6 = 3;
              const obj21 = { value, done: true };
              return obj21;
            } else if (!value.isAuthorized) {
              const obj22 = { result: "failure", reason: closure_130_27.UNAUTHORIZED };
              c6 = 3;
              const obj23 = { value: obj22, done: true };
              return obj23;
            }
          } else if (7 === c5) {
            if (applicationId === 1) {
              c6 = 3;
              throw value;
            } else if (applicationId === 2) {
              c6 = 3;
              const obj24 = { value, done: true };
              return obj24;
            } else {
              c6 = 3;
              const obj25 = { value: { result: "success" }, done: true };
              return obj25;
            }
          } else if (applicationId === 1) {
            c6 = 3;
            throw value;
          } else if (applicationId === 2) {
            c6 = 3;
            const obj26 = { value, done: true };
            return obj26;
          } else if (!value) {
            obj = { result: "failure", reason: closure_130_27.FAILED_ACTIVITY_LAUNCH_CHECKS };
            c6 = 3;
            const obj27 = { value: obj, done: true };
            return obj27;
          }
          c5 = 5;
          c6 = 1;
          const obj29 = { value: closure_130_4({ type: "user" }), done: false };
          return obj29;
        }
      } catch (tmp80) {
        closure_3 = tmp80;
        if (0 === c4) {
          c6 = 3;
          throw tmp80;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _joinEmbeddedActivity() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let guild_id;
    let intl;
    let intl2;
    let obj22;
    let obj33;
    let obj34;
    let obj35;
    let closure_0 = arg0;
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
      try {
        let application_id;
        let _undefined;
        let embeddedActivitiesManager;
        let session_id;
        let user;
        let closure_7;
        let application;
        let channel;
        let embeddedActivityLaunchability;
        let reason;
        let currentEmbeddedActivity;
        let currentEmbeddedApplication;
        let closure_14;
        let obj32;
        c5 = 2;
        if (0 === guild_id) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            let closure_2 = tmp4;
            application_id = undefined;
            _undefined = undefined;
            embeddedActivitiesManager = undefined;
            c3 = undefined;
            ({ applicationId: c0, channelId: c1, embeddedActivitiesManager: c2, isStart: c3, guildId: c4 } = closure_0);
            session_id = undefined;
            user = undefined;
            closure_7 = undefined;
            application = undefined;
            channel = undefined;
            embeddedActivityLaunchability = undefined;
            reason = undefined;
            currentEmbeddedActivity = undefined;
            currentEmbeddedApplication = undefined;
            closure_14 = undefined;
            let closure_15;
            obj32 = undefined;
            guild_id = 1;
            c5 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === guild_id) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            session_id = closure_131_9.getSessionId();
            user = closure_131_13.getCurrentUser();
            closure_7 = application_id;
            if (null == closure_7) {
              const obj5 = { result: "failure", reason: closure_131_29.NO_APPLICATION_ID };
              c5 = 3;
              const obj6 = { value: obj5, done: true };
              return obj6;
            } else {
              guild_id = 2;
              c5 = 1;
              const obj7 = { value: closure_131_1(closure_131_2[39])(closure_7, _undefined), done: false };
              return obj7;
            }
          }
        } else {
          if (2 === guild_id) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              application = value;
              if (null != user) {
                if (null != application) {
                  if (null == _undefined) {
                    const obj10 = { result: "failure", reason: closure_131_29.INVALID_CHANNEL };
                    c5 = 3;
                    const obj11 = { value: obj10, done: true };
                    return obj11;
                  } else {
                    channel = closure_131_10.getChannel(_undefined);
                    if (null == channel) {
                      const obj12 = { result: "failure", reason: closure_131_29.INVALID_CHANNEL };
                      c5 = 3;
                      const obj13 = { value: obj12, done: true };
                      return obj13;
                    } else {
                      const obj14 = {
                        channelId: _undefined,
                        ChannelStore: closure_131_10,
                        GuildStore: closure_131_11,
                        PermissionStore: closure_131_12,
                        VoiceStateStore: closure_131_14,
                      };
                      const obj41 = closure_131_0(closure_131_2[40]);
                      embeddedActivityLaunchability = obj41.getEmbeddedActivityLaunchability(obj14);
                      if (
                        embeddedActivityLaunchability !==
                        closure_131_0(closure_131_2[40]).EmbeddedActivityLaunchability.CAN_LAUNCH
                      ) {
                        reason = closure_131_29.LAUNCHABILITY_CHECK_FAILED_OTHER;
                        if (
                          embeddedActivityLaunchability ===
                          closure_131_0(closure_131_2[40]).EmbeddedActivityLaunchability
                            .NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                        ) {
                          reason = closure_131_29.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                          const obj25 = closure_131_0(closure_131_2[41]);
                          const result = obj25.showActivitiesInvalidPermissionsAlert();
                        } else if (
                          embeddedActivityLaunchability ===
                          closure_131_0(closure_131_2[40]).EmbeddedActivityLaunchability
                            .ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS
                        ) {
                          reason = closure_131_29.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
                          const obj15 = {
                            title: intl.string(closure_131_0(closure_131_2[43]).t["IOy+I5"]),
                            body: intl2.string(closure_131_0(closure_131_2[43]).t.UXoQTp),
                            hideActionSheet: false,
                          };
                          const show = closure_131_1(closure_131_2[42]).show;
                          const tmp146 = closure_131_1(closure_131_2[42]);
                          intl = closure_131_0(closure_131_2[43]).intl;
                          intl2 = closure_131_0(closure_131_2[43]).intl;
                          show(obj15);
                        }
                        const obj16 = { result: "failure", reason };
                        c5 = 3;
                        const obj17 = { value: obj16, done: true };
                        return obj17;
                      } else {
                        currentEmbeddedActivity = closure_131_15.getCurrentEmbeddedActivity();
                        currentEmbeddedApplication = undefined;
                        let applicationId;
                        if (currentEmbeddedActivity != null) {
                          applicationId = currentEmbeddedActivity.applicationId;
                        }
                        if (null != applicationId) {
                          let applicationId1;
                          const getApplication = closure_131_5.getApplication;
                          if (currentEmbeddedActivity != null) {
                            applicationId1 = currentEmbeddedActivity.applicationId;
                          }
                          currentEmbeddedApplication = getApplication(applicationId1);
                        }
                        const tmp16 = c3;
                        if (tmp16) {
                          const obj18 = {
                            applicationId: application_id,
                            application,
                            channel,
                            currentEmbeddedApplication,
                            embeddedActivitiesManager,
                            user,
                          };
                          guild_id = 3;
                          c5 = 1;
                          const obj19 = { value: obj22.confirmActivityLaunchChecks(obj18), done: false };
                          obj22 = closure_131_0(closure_131_2[36]);
                          return obj19;
                        }
                      }
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
            if (3 === guild_id) {
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
            } else {
              if (4 === guild_id) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj27 = { value, done: true };
                  return obj27;
                } else if (!value) {
                  const obj28 = { result: "failure", reason: closure_131_29.NOT_CONNECTED_TO_VOICE_CHANNEL };
                  c5 = 3;
                  const obj29 = { value: obj28, done: true };
                  return obj29;
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj30 = { value, done: true };
                return obj30;
              } else {
                obj = { result: "success" };
              }
              c5 = 3;
              const obj31 = { value: obj, done: true };
              return obj31;
            }
            obj32 = { trackedActionData: obj33, retries: 3, oldFormErrors: true, rejectWithError: true };
            obj33 = {
              event: closure_131_0(closure_131_2[46]).NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
              properties: obj34,
            };
            obj34 = { guild_id, channel_id: _undefined, application_id, session_id };
            if (null != _undefined) {
              const request = { url: closure_131_21.ACTIVITY_CHANNEL_LAUNCH(_undefined, application_id), body: obj35 };
              const post = closure_131_1(closure_131_2[47]).post;
              const tmp43 = closure_131_1(closure_131_2[47]);
              obj35 = { session_id, guild_id: _undefined };
              _undefined = guild_id;
              if (guild_id == null) {
                _undefined = undefined;
              }
              const merged = Object.assign(obj32);
              guild_id = 5;
              c5 = 1;
              const obj36 = { value: post(request), done: false };
              return obj36;
            } else {
              const obj37 = { result: "failure", reason: closure_131_29.OTHER };
              obj = obj37;
            }
          }
          if (null != channel) {
            closure_14 = closure_131_1(closure_131_2[44])(channel.id);
            closure_15 = closure_131_16.includes(channel.type);
            if (closure_14) {
              const obj38 = { channelId: channel.id, bypassChangeModal: null != currentEmbeddedApplication };
              guild_id = 4;
              c5 = 1;
              const obj39 = { value: closure_131_1(closure_131_2[45])(obj38), done: false };
              return obj39;
            } else {
              const obj9 = closure_131_0(closure_131_2[32]);
              const obj40 = { result: "failure", reason: closure_131_29.AIT_NOT_ENABLED_FOR_USER };
              c5 = 3;
              const obj42 = { value: obj40, done: true };
              return obj42;
            }
          }
        }
      } catch (tmp95) {
        c5 = 3;
        throw tmp95;
      }
    }
  });
  return obj(...arguments);
};
function stopEmbeddedActivity(showFeedback) {
  let _location;
  let applicationId;
  let compositeInstanceId;
  let launchId;
  ({ location: _location, applicationId } = showFeedback);
  let flag = showFeedback.showFeedback;
  if (flag === undefined) {
    flag = true;
  }
  const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(_location);
  const obj2 = {
    type: "EMBEDDED_ACTIVITY_CLOSE",
    applicationId,
    location: _location,
    instanceId: launchId,
    showFeedback: flag,
  };
  launchId = undefined;
  const dispatch = DispatcherDefault.dispatch;
  DispatcherDefault;
  if (selfEmbeddedActivityForLocation != null) {
    launchId = selfEmbeddedActivityForLocation.launchId;
  }
  dispatch(obj2);
  const obj3 = embeddedActivityLocationUtils;
  const embeddedActivityLocationChannelId = obj3.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    let id;
    const selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(embeddedActivityLocationChannelId);
    const currentUser = UserStore.getCurrentUser();
    if (currentUser != null) {
      id = currentUser.id;
    }
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(
      embeddedActivityLocationChannelId,
    );
    const found = embeddedActivitiesForChannel.find((applicationId) => applicationId.applicationId === applicationId);
    if (null != found) {
      if (null != id) {
        if ("" !== id) {
          const obj4 = { applicationId, instanceId: compositeInstanceId };
          compositeInstanceId = undefined;
          const getEmbeddedActivityParticipantId = ChannelRTCParticipants.getEmbeddedActivityParticipantId;
          ChannelRTCParticipants;
          if (found != null) {
            compositeInstanceId = found.compositeInstanceId;
          }
          if (selectedParticipantId === getEmbeddedActivityParticipantId(obj4)) {
            const tmp2Result = ChannelRTCActionCreatorsDefault;
            const participant = tmp2Result.selectParticipant(embeddedActivityLocationChannelId, null);
          }
        }
      }
    }
  }
}
obj = function _fetchDeveloperApplications() {
  obj = _asyncToGenerator(async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      let applications;
      try {
        let closure_0;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp;
            closure_0 = undefined;
            applications = undefined;
            c3 = 1;
            const obj10 = DispatcherDefault;
            obj10.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START" });
            const HTTP = HTTPUtils.HTTP;
            const request = {
              url: constants.APPLICATIONS_WITH_ASSETS,
              query: { with_team_applications: true },
              oldFormErrors: true,
              rejectWithError: true,
            };
            c4 = 2;
            c5 = 1;
            const obj5 = { value: HTTP.get(request), done: false };
            return obj5;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            const obj2 = closure_129_1(closure_129_2[25]);
            obj2.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL" });
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = value;
            applications = closure_0.body.applications;
            applications = applications.map((item) => closure_1_8.createFromServer(item));
            const obj7 = {
              type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS",
              applications,
              assets: closure_0.body.assets,
            };
            const obj6 = closure_129_1(closure_129_2[25]);
            obj6.dispatch(obj7);
            const obj9 = { type: "APPLICATIONS_FETCH_SUCCESS", applications };
            const obj8 = closure_129_1(closure_129_2[25]);
            obj8.dispatch(obj9);
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp10) {
        applications = tmp10;
        if (0 === c3) {
          c5 = 3;
          throw tmp10;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _uploadImageAttachment() {
  obj = _asyncToGenerator(async (arg0, arg1, file) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async function (arg0, value, arg2) {
      let items;
      if (c8 === 2) {
        c8 = 3;
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              closure_3 = tmp4;
              closure_0 = undefined;
              c6 = 1;
              const obj13 = DispatcherDefault;
              obj13.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START" });
              let tmp24;
              const tmp35 = closure_0;
              const tmp36 = closure_1;
              if (null != closure_1) {
                tmp24 = { channel_id: tmp36 };
                const obj4 = { channel_id: tmp36 };
              }
              const HTTP = HTTPUtils.HTTP;
              const request = {
                url: closure_2_21.APPLICATION_UPLOAD_ATTACHMENT(tmp35),
                query: tmp24,
                attachments: items,
                rejectWithError: true,
              };
              const post = HTTP.post;
              items = [{ name: "file", file }];
              c7 = 2;
              c8 = 1;
              const obj6 = { name: "file", file };
              const obj7 = { value: post(request), done: false };
              return obj7;
            }
          } else if (1 === c7) {
            c6 = 0;
            closure_1 = closure_5;
            const obj5 = closure_132_1(closure_132_2[25]);
            obj5.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL" });
            const self = this;
            const self2 = this;
            c8 = 3;
            const obj8 = { value: new closure_132_1(closure_132_2[28])(closure_1), done: true };
            return obj8;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            closure_0 = value;
            const obj10 = { type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS", attachment: closure_0.body.attachment };
            obj = closure_132_1(closure_132_2[25]);
            obj.dispatch(obj10);
            c6 = 0;
            c8 = 3;
            return { value: closure_0.body.attachment, done: true };
          }
        } catch (tmp28) {
          closure_5 = tmp28;
          if (0 === c6) {
            c8 = 3;
            throw tmp28;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function handleFetchDone(arg0, fn, guildId) {
  guildId = guildId.guildId;
  let tmp = guildId === arg0;
  if (!tmp) {
    tmp = null == guildId && null == arg0;
  }
  if (tmp) {
    fn();
  }
}
obj = function _fetchShelf() {
  obj = _asyncToGenerator(async function (arg0) {
    let c0;
    let force;
    let obj11;
    let obj12;
    let closure_0 = arg0;
    if (c9 === 2) {
      c9 = 3;
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
      let c7;
      try {
        let guildId;
        let applications;
        let c4;
        let c5;
        let promise;
        let promise2;
        let obj9;
        let closure_9;
        let activityConfigs;
        let applications2;
        let assets;
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
            const application = tmp;
            closure_4 = tmp4;
            guildId = undefined;
            force = undefined;
            ({ guildId: c0, force } = closure_0);
            if (force === undefined) {
              force = false;
            }
            applications = undefined;
            c4 = undefined;
            c5 = undefined;
            promise = undefined;
            promise2 = undefined;
            obj9 = undefined;
            closure_9 = undefined;
            activityConfigs = undefined;
            applications2 = undefined;
            assets = undefined;
            c8 = 1;
            c9 = 1;
            return { value: "Reflect", done: true };
          }
        } else {
          if (1 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              activityConfigs = closure_133_15.getShelfActivities(guildId);
              const mapped = activityConfigs.map((application_id) =>
                application.getApplication(application_id.application_id),
              );
              applications = mapped.filter(closure_133_0(closure_133_2[52]).isNotNullish);
              const tmp115 = force;
              if (!tmp115) {
                if (!closure_133_15.shouldFetchShelf(guildId)) {
                  const shelfFetchStatus = closure_133_15.getShelfFetchStatus(guildId);
                  let isFetching;
                  if (shelfFetchStatus != null) {
                    isFetching = shelfFetchStatus.isFetching;
                  }
                  if (isFetching) {
                    const self = this;
                    const self2 = this;
                    promise = new Promise((cache) => {
                      closure_4 = closure_2_34.bind(null, closure_1_0, cache);
                      obj = closure_1(activityConfigs[25]);
                      const subscription = obj.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", closure_4);
                    });
                    const self3 = this;
                    const self4 = this;
                    promise2 = new Promise((cache) => {
                      closure_5 = closure_2_34.bind(null, closure_1_0, cache);
                      obj = closure_1(activityConfigs[25]);
                      const subscription = obj.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", closure_5);
                    });
                    const items = [promise, promise2];
                    c8 = 3;
                    c9 = 1;
                    const obj6 = { value: Promise.race(items), done: false };
                    return obj6;
                  }
                }
              }
              c7 = 1;
              const obj7 = { type: "EMBEDDED_ACTIVITY_FETCH_SHELF", guildId };
              const obj17 = closure_133_1(closure_133_2[25]);
              obj17.dispatch(obj7);
              let tmp75;
              if (undefined !== guildId) {
                if ("" !== guildId) {
                  obj9 = { guild_id: guildId };
                  tmp75 = obj9;
                }
              }
              obj9 = tmp75;
              const request = {
                url: closure_133_21.ACTIVITY_SHELF,
                query: obj9,
                trackedActionData: obj11,
                retries: 0,
                oldFormErrors: true,
                rejectWithError: true,
              };
              obj11 = {
                event: closure_133_0(closure_133_2[46]).NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
                properties: obj12,
              };
              const get = closure_133_1(closure_133_2[47]).get;
              const tmp83 = closure_133_1(closure_133_2[47]);
              obj12 = { guild_id: guildId };
              c8 = 4;
              c9 = 1;
              const obj13 = { value: get(request), done: false };
              return obj13;
            }
          } else if (2 === c8) {
            c7 = 0;
            const obj14 = { type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", guildId };
            const obj10 = closure_133_1(closure_133_2[25]);
            obj10.dispatch(obj14);
            const obj15 = { activityConfigs, applications };
            c9 = 3;
            const obj16 = { value: obj15, done: true };
            return obj16;
          } else if (3 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              const obj18 = { value, done: true };
              return obj18;
            } else {
              if (null != c4) {
                const obj8 = closure_133_1(closure_133_2[25]);
                obj8.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", c4);
                c4 = undefined;
              }
              if (null != c5) {
                const obj27 = closure_133_1(closure_133_2[25]);
                obj27.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", c5);
                c5 = undefined;
              }
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            const obj19 = { value, done: true };
            return obj19;
          } else {
            closure_9 = value;
            const activities = closure_9.body.activities;
            let closure_1 = activities;
            if (activities == null) {
              closure_1 = [];
            }
            applications = closure_9.body.applications;
            activityConfigs = applications;
            if (applications == null) {
              activityConfigs = [];
            }
            applications2 = activityConfigs;
            assets = closure_9.body.assets;
            applications = assets;
            if (assets == null) {
              applications = {};
            }
            assets = applications;
            obj = closure_133_1(closure_133_2[25]);
            const obj20 = {
              type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
              guildId,
              activities: activityConfigs,
              applications: applications2,
              assets,
            };
            obj.dispatch(obj20);
            if (applications2.length > 0) {
              const obj21 = { type: "APPLICATIONS_FETCH_SUCCESS", applications: applications2 };
              const obj3 = closure_133_1(closure_133_2[25]);
              obj3.dispatch(obj21);
            }
            const obj22 = {
              activityConfigs,
              applications: applications2.map((item) => closure_1_8.createFromServer(item)),
            };
            c7 = 0;
            c9 = 3;
            const obj23 = { value: obj22, done: true };
            return obj23;
          }
          const obj24 = { activityConfigs, applications };
          c9 = 3;
          const obj25 = { value: obj24, done: true };
          return obj25;
        }
      } catch (tmp90) {
        let closure_6 = tmp90;
        if (0 === c7) {
          c9 = 3;
          throw tmp90;
        } else {
          c8 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _sendEmbeddedActivityInvite() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let obj3;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
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
      try {
        let target_application_id;
        let code;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            c0 = undefined;
            c1 = undefined;
            target_application_id = undefined;
            ({
              activityChannelId: c0,
              invitedChannelId: c1,
              applicationId: c2,
              location: c3,
              inviteAnalyticsMetadata: c4,
            } = closure_0);
            code = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const obj6 = { target_type: closure_130_25.EMBEDDED_APPLICATION, target_application_id };
            c3 = 2;
            c4 = 1;
            const obj7 = { value: obj3.createInvite(c0, obj6, c3), done: false };
            obj3 = closure_130_1(closure_130_2[53]);
            return obj7;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          code = value;
          if (null != closure_130_10.getChannel(c1)) {
            obj = closure_130_1(closure_130_2[54]);
            obj.sendInvite(c1, code.code, c3, c4);
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp29) {
        c4 = 3;
        throw tmp29;
      }
    }
  });
  return obj(...arguments);
};
obj = function _sendEmbeddedActivityInviteUser() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let ensurePrivateChannelResult;
    let obj5;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let target_application_id;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            c0 = undefined;
            target_application_id = undefined;
            c2 = undefined;
            c5 = undefined;
            ({
              channelId: c0,
              applicationId: c1,
              userId: c2,
              location: c3,
              inviteAnalyticsMetadata: c4,
              prefixedContent: c5,
            } = closure_0);
            let code;
            c3 = 1;
            c4 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            const obj7 = { target_type: closure_130_25.EMBEDDED_APPLICATION, target_application_id };
            c3 = 2;
            c4 = 1;
            const obj8 = { value: obj5.createInvite(c0, obj7, c3), done: false };
            obj5 = closure_130_1(closure_130_2[53]);
            return obj8;
          }
        } else if (2 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            code = value;
            let obj2 = closure_130_1(closure_130_2[55]);
            c3 = 3;
            c4 = 1;
            const obj10 = {
              value: ensurePrivateChannelResult.then(function (result) {
                channel = channel.getChannel(result);
                if (null == channel) {
                  const _Error = Error;
                  const self = this;
                  const self2 = this;
                  const error = new Error("Private channel not found");
                  throw error;
                } else {
                  let content;
                  if (null != closure_1_5) {
                    obj = target_application_id(closure_2[56]);
                    content = obj.parse(channel, tmp2).content;
                  }
                  const obj2 = target_application_id(closure_2[54]);
                  obj2.sendInvite(result, code.code, closure_1_3, closure_1_4, content);
                }
              }),
              done: false,
            };
            ensurePrivateChannelResult = obj2.ensurePrivateChannel(c2);
            return obj10;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp18) {
        c4 = 3;
        throw tmp18;
      }
    }
  });
  return obj(...arguments);
};
obj = function _validateTestMode() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
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
            const ACTIVITY_TEST_MODEResult = closure_2_21.ACTIVITY_TEST_MODE(closure_0);
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: ACTIVITY_TEST_MODEResult, oldFormErrors: true, rejectWithError: true };
            c2 = 2;
            c1 = 1;
            const obj5 = { value: HTTP.get(obj4), done: false };
            return obj5;
          }
        } else if (1 === tmp3) {
          c4 = 0;
          c1 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c4 = 0;
          c1 = 3;
          return { value: true, done: true };
        }
      } catch (tmp10) {
        let closure_3 = tmp10;
        if (0 === c4) {
          c1 = 3;
          throw tmp10;
        } else {
          c2 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function createProxyTicket() {
  return obj(...arguments);
}
obj = function _createProxyTicket() {
  obj = _asyncToGenerator(async (arg0, channel_id, surface) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c3 = 0;
    return (async (arg0, value, arg2) => {
      const obj4 = { use_stateless_ticket: true };
      if (null != channel_id) {
        obj4.channel_id = channel_id;
      }
      if (null != surface) {
        obj4.surface = surface;
      }
      const HTTP = HTTPUtils.HTTP;
      const request = { url: closure_2_21.APPLICATION_PROXY_TICKET(closure_0), body: obj4, rejectWithError: true };
      const post = HTTP.post;
      await post(request);
      return value.body.ticket;
    })();
  });
  return obj(...arguments);
};
obj = function _refreshProxyTicket() {
  obj = _asyncToGenerator(async (applicationId, channelId) => {
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async function (arg0, value) {
      let obj5;
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
          let channel;
          let PRIVATE_CHANNEL;
          let dispatch;
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              proxyTicket = undefined;
              channel = undefined;
              guildId = undefined;
              PRIVATE_CHANNEL = undefined;
              const obj4 = { type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId, refreshing: true };
              const obj18 = DispatcherDefault;
              obj18.dispatch(obj4);
              c7 = 2;
              dispatch = createProxyTicket;
              c3 = channelId;
              if (channelId == null) {
                c3 = undefined;
              }
              dispatch = dispatch(applicationId, c3);
              c8 = 3;
              c9 = 1;
              return { value: dispatch, done: false };
            }
          } else if (1 === c8) {
            c7 = 0;
            const obj8 = { type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId, refreshing: false };
            const obj7 = closure_133_1(closure_133_2[25]);
            dispatch = obj7.dispatch(obj8);
            throw closure_6;
          } else if (2 === c8) {
            c7 = 1;
            channel = closure_133_10.getChannel(channelId);
            dispatch = channel;
            let guild_id;
            if (channel != null) {
              guild_id = dispatch.guild_id;
            }
            let c2 = guild_id;
            if (guild_id == null) {
              c2 = null;
            }
            dispatch = c2;
            guildId = c2;
            if (null != guildId) {
              PRIVATE_CHANNEL = closure_133_0(closure_133_2[24]).EmbeddedActivityLocationKind.GUILD_CHANNEL;
            } else {
              dispatch = closure_133_0;
              PRIVATE_CHANNEL = closure_133_0(closure_133_2[24]).EmbeddedActivityLocationKind.PRIVATE_CHANNEL;
            }
            dispatch = closure_133_1(closure_133_2[25]).dispatch;
            const obj9 = {
              type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
              nonce: obj5.createNonce(),
              applicationId,
              channelId,
              guildId,
              locationKind: PRIVATE_CHANNEL,
              error: null,
            };
            closure_133_1(closure_133_2[25]);
            obj5 = closure_133_0(closure_133_2[20]);
            if (!(closure_6 instanceof closure_133_1(closure_133_2[27]))) {
              if (!(closure_6 instanceof closure_133_1(closure_133_2[28]))) {
                let tmp54;
                if (!(closure_6 instanceof closure_133_1(closure_133_2[29]))) {
                  const self = this;
                  const self2 = this;
                  tmp54 = new closure_133_1(closure_133_2[28])(closure_6);
                }
                obj9.error = tmp54;
                dispatch(obj9);
                c7 = 0;
                dispatch = closure_133_1(closure_133_2[25]).dispatch;
                const obj10 = {
                  type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING",
                  applicationId,
                  refreshing: false,
                };
                closure_133_1(closure_133_2[25]);
                dispatch(obj10);
                c9 = 3;
                return { value: false, done: true };
              }
            }
            tmp54 = closure_6;
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            const obj11 = { type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId, refreshing: false };
            obj = closure_133_1(closure_133_2[25]);
            obj.dispatch(obj11);
            c9 = 3;
            return { value, done: true };
          } else {
            proxyTicket = value;
            const obj15 = { type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET", applicationId, channelId, proxyTicket };
            const obj12 = closure_133_1(closure_133_2[25]);
            obj12.dispatch(obj15);
            const obj17 = { type: "EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET", applicationId, proxyTicket };
            const obj14 = closure_133_1(closure_133_2[25]);
            obj14.dispatch(obj17);
            c7 = 0;
            const obj19 = { type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId, refreshing: false };
            const obj16 = closure_133_1(closure_133_2[25]);
            obj16.dispatch(obj19);
            c9 = 3;
            return { value: true, done: true };
          }
        } catch (tmp72) {
          closure_6 = tmp72;
          if (0 === c7) {
            c9 = 3;
            throw tmp72;
          } else if (1 === tmp74) {
            c8 = 1;
          } else {
            c8 = 2;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
let closure_4 = ApplicationCommandIndexStore.getOrFetchApplicationCommandIndexForTarget;
let closure_16 = Constants2.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
({
  AnalyticEvents: closure_18,
  AnalyticsGameOpenTypes: closure_19,
  ChannelTypes: closure_20,
  Endpoints: closure_21,
  PopoutWindowKeys: closure_22,
} = Constants);
const INSTALL_LESS_APP_IDS = ApplicationConstants.INSTALL_LESS_APP_IDS;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const InviteTargetTypes = Constants3.InviteTargetTypes;
let closure_27 = {
  NO_PRIMARY_APP_COMMAND: 1,
  [1]: "NO_PRIMARY_APP_COMMAND",
  UNAUTHORIZED: 2,
  [2]: "UNAUTHORIZED",
  NO_CHANNEL: 3,
  [3]: "NO_CHANNEL",
  FAILED_ACTIVITY_LAUNCH_CHECKS: 4,
  [4]: "FAILED_ACTIVITY_LAUNCH_CHECKS",
};
let closure_29 = {
  OTHER: 0,
  [0]: "OTHER",
  NO_APPLICATION_ID: 1,
  [1]: "NO_APPLICATION_ID",
  UNKNOWN_USER_OR_APPLICATION: 2,
  [2]: "UNKNOWN_USER_OR_APPLICATION",
  INVALID_CHANNEL: 3,
  [3]: "INVALID_CHANNEL",
  LAUNCHABILITY_CHECK_FAILED_OTHER: 4,
  [4]: "LAUNCHABILITY_CHECK_FAILED_OTHER",
  NO_USE_EMBEDDED_ACTIVITIES_PERMISSION: 5,
  [5]: "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION",
  ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS: 6,
  [6]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS",
  FAILED_ACTIVITY_LAUNCH_CHECKS: 7,
  [7]: "FAILED_ACTIVITY_LAUNCH_CHECKS",
  NOT_CONNECTED_TO_VOICE_CHANNEL: 8,
  [8]: "NOT_CONNECTED_TO_VOICE_CHANNEL",
  AIT_NOT_ENABLED_FOR_USER: 9,
  [9]: "AIT_NOT_ENABLED_FOR_USER",
};
let result = size.fileFinishedImporting("modules/activities/EmbeddedActivitiesActionCreators.tsx");

export const maybeDisconnectFromCurrentActivity = function maybeDisconnectFromCurrentActivity(location) {
  const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(location);
  if (null != selfEmbeddedActivityForLocation) {
    obj = { location: null, applicationId: null, showFeedback: false };
    ({ location: obj.location, applicationId: obj.applicationId } = selfEmbeddedActivityForLocation);
    stopEmbeddedActivity(obj);
  }
};
export const runPrimaryAppCommandOrJoinEmbeddedActivity = function runPrimaryAppCommandOrJoinEmbeddedActivity() {
  return obj(...arguments);
};
export { stopEmbeddedActivity };
export const requestRespondToSeriousThermalState = function requestRespondToSeriousThermalState() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "EMBEDDED_ACTIVITY_REQUEST_RESPOND_TO_SERIOUS_THERMAL_STATE" });
};
export const consumeRequestToReactToSeriousThermalState = function consumeRequestToReactToSeriousThermalState() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "EMBEDDED_ACTIVITY_CONSUME_RESPOND_TO_SERIOUS_THERMAL_STATE_REQUEST" });
};
export const disregardSeriousThermalState = function disregardSeriousThermalState() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "EMBEDDED_ACTIVITY_DISREGARD_SERIOUS_THERMAL_STATE" });
};
export const fetchDeveloperApplications = function fetchDeveloperApplications() {
  return obj(...arguments);
};
export const uploadImageAttachment = function uploadImageAttachment() {
  return obj(...arguments);
};
export const fetchShelf = function fetchShelf() {
  return obj(...arguments);
};
export const sendEmbeddedActivityInvite = function sendEmbeddedActivityInvite() {
  return obj(...arguments);
};
export const sendEmbeddedActivityInviteUser = function sendEmbeddedActivityInviteUser() {
  return obj(...arguments);
};
export const dismissNewActivityIndicator = function dismissNewActivityIndicator() {
  let INDIRECT_ACTION = arg0;
  if (arg0 === undefined) {
    INDIRECT_ACTION = ContentDismissActionType.INDIRECT_ACTION;
  }
  const markVersionedDismissibleContentAsDismissed = DismissibleContentUtils.markVersionedDismissibleContentAsDismissed;
  DismissibleContentUtils;
  const ACTIVITIES_VOICE_LAUNCHER_BADGE = dismissible_content.DismissibleContent.ACTIVITIES_VOICE_LAUNCHER_BADGE;
  const date = new Date();
  const result = markVersionedDismissibleContentAsDismissed(
    ACTIVITIES_VOICE_LAUNCHER_BADGE,
    floor(date.getTime() / 1000),
    { dismissAction: INDIRECT_ACTION },
  );
};
export const validateTestMode = function validateTestMode() {
  return obj(...arguments);
};
export const updateActivityPanelMode = function updateActivityPanelMode(PANEL) {
  obj = DispatcherDefault;
  const obj2 = { type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE", activityPanelMode: PANEL };
  obj.dispatch(obj2);
};
export const updateFocusedActivityLayout = function updateFocusedActivityLayout(focusedActivityLayout) {
  obj = DispatcherDefault;
  const obj2 = { type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT", focusedActivityLayout };
  obj.dispatch(obj2);
};
export const openActivityPopoutWindow = function openActivityPopoutWindow() {
  const ACTIVITY_POPOUT_WINDOW = ActivityPanelModes.ACTIVITY_POPOUT_WINDOW;
  obj = DispatcherDefault;
  obj.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE", activityPanelMode: ACTIVITY_POPOUT_WINDOW });
  const obj2 = DispatcherDefault;
  obj2.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
};
export const updateActivityPopoutWindowLayout = function updateActivityPopoutWindowLayout(layout) {
  obj = DispatcherDefault;
  const obj2 = { type: "EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT", layout };
  obj.dispatch(obj2);
};
export { createProxyTicket };
export const refreshProxyTicket = function refreshProxyTicket() {
  return obj(...arguments);
};
