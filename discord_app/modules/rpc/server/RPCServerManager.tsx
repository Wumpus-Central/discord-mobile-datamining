// === Module 14298: RPCServerManager ===

// Module 14298 (RPCServerManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import Constants2 from "Constants" /* 2011 */;
import Constants3 from "Constants" /* 4915 */;
import Constants4 from "Constants" /* 5316 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7208 */;
import FramesConstants from "FramesConstants" /* 8704 */;
import useThermalState from "useThermalState" /* 8992 */;
import RPCHelpers from "RPCHelpers" /* 9031 */;
import transformUserDefault from "transformUser" /* 9032 */;
import ConjureVoiceSessionCoordinatorDefault from "ConjureVoiceSessionCoordinator" /* 14299 */;
import activityInstanceConnectedParticipants from "activityInstanceConnectedParticipants" /* 14304 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import FramesStore from "FramesStore" /* 8703 */;
import QuestStore from "QuestStore" /* 7187 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import PresenceStore from "PresenceStore" /* 4930 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import UserStore from "UserStore" /* 1377 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let frameByIframeId, set;

let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
const TransportTypes = Constants4.TransportTypes;
({ ActivityActionTypes: closure_17, RelationshipTypes: closure_18, AnalyticEvents: closure_19, RPCEvents: closure_20, RPCCloseCodes: closure_21 } = Constants);
const ActivityLayoutMode = Constants2.ActivityLayoutMode;
const FrameLayoutModes = FramesConstants.FrameLayoutModes;
const MediaEngineContextTypes = Constants3.MediaEngineContextTypes;
let result = size.fileFinishedImporting("modules/rpc/server/RPCServerManager.tsx");
class RPCServerManager {
  constructor(arg0) {
    let obj = Object.create(new.target.prototype);
    obj.handleMessage = function handleMessage(type) {
      let channelId;
      let message;
      let obj5;
      if (0 !== obj.rpcServer.subscriptions.length) {
        let combined;
        let MESSAGE_UPDATE;
        if ("MESSAGE_CREATE" === type.type) {
          const result = obj.handleActivityMessage(type);
        }
        type = type.type;
        if ("MESSAGE_CREATE" === type) {
          if ("SENDING" !== type.message.state) {
            const MESSAGE_CREATE = constants3.MESSAGE_CREATE;
            ({ channelId, message } = type);
            const _HermesInternal2 = HermesInternal;
            combined = "" + MESSAGE_CREATE + type.message.id;
            MESSAGE_UPDATE = MESSAGE_CREATE;
          }
        } else if ("MESSAGE_UPDATE" === type) {
          MESSAGE_UPDATE = constants3.MESSAGE_UPDATE;
          channelId = type.message.channel_id;
          message = type.message;
          combined = null;
        } else if ("MESSAGE_DELETE" === type) {
          const MESSAGE_DELETE = constants3.MESSAGE_DELETE;
          channelId = type.channelId;
          message = { id: type.id };
          const _HermesInternal = HermesInternal;
          combined = "" + MESSAGE_DELETE + type.id;
          MESSAGE_UPDATE = MESSAGE_DELETE;
        } else {
          const obj2 = GlobalUtils;
          return obj2.assertNever(type);
        }
        if (null != channelId) {
          const rpcServer = obj.rpcServer;
          const obj3 = { channel_id: channelId };
          const dispatchToSubscriptions = rpcServer.dispatchToSubscriptions;
          const obj4 = { channel_id: channelId, message: obj5.transformInternalTextMessage(message) };
          obj5 = RPCHelpers;
          const result1 = dispatchToSubscriptions(MESSAGE_UPDATE, obj3, obj4, combined);
        }
      }
    };
    obj.handleSpeaking = function handleSpeaking(speakingFlags) {
      if (0 !== obj.rpcServer.subscriptions.length) {
        let SPEAKING_STOP;
        if (0 !== speakingFlags.speakingFlags) {
          SPEAKING_STOP = constants3.SPEAKING_START;
        } else {
          SPEAKING_STOP = constants3.SPEAKING_STOP;
        }
        if (speakingFlags.context === MediaEngineContextTypes.DEFAULT) {
          const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
          if (null != voiceChannelId) {
            const channel = ChannelStore.getChannel(voiceChannelId);
            if (null != channel) {
              const voiceState = VoiceStateStore.getVoiceState(channel.getGuildId(), speakingFlags.userId);
              if (null != voiceState) {
                let VOICE_SESSION_SPEAKING_STOP;
                const rpcServer2 = tmp2.rpcServer;
                const obj2 = { channel_id: voiceState.channelId };
                const obj3 = { channel_id: voiceState.channelId, user_id: speakingFlags.userId };
                const result = rpcServer2.dispatchToSubscriptions(SPEAKING_STOP, obj2, obj3);
                if (null != voiceState.channelId) {
                  obj = ConjureVoiceSessionCoordinatorDefault;
                  let activeSessionIdsForChannel = obj.getActiveSessionIdsForChannel(voiceState.channelId);
                } else {
                  activeSessionIdsForChannel = [];
                }
                if (0 !== speakingFlags.speakingFlags) {
                  VOICE_SESSION_SPEAKING_STOP = constants3.VOICE_SESSION_SPEAKING_START;
                } else {
                  VOICE_SESSION_SPEAKING_STOP = constants3.VOICE_SESSION_SPEAKING_STOP;
                }
                for (const item10028 of activeSessionIdsForChannel) {
                  let rpcServer = obj.rpcServer;
                  let obj4 = { session_id: item10028 };
                  let obj5 = { session_id: item10028, user_id: speakingFlags.userId };
                  let result1 = rpcServer.dispatchToSubscriptions(VOICE_SESSION_SPEAKING_STOP, obj4, obj5);
                  continue;
                }
              }
            }
          }
        }
      }
    };
    obj.handleVoiceChannelSelect = function handleVoiceChannelSelect(channelId) {
      channelId = channelId.channelId;
      const guildId = channelId.guildId;
      obj = ConjureVoiceSessionCoordinatorDefault;
      obj.releaseUnlessChannel(channelId);
      if (0 !== obj.rpcServer.subscriptions.length) {
        const rpcServer = obj.rpcServer;
        const obj2 = { channel_id: channelId, guild_id: guildId };
        const result = rpcServer.dispatchToSubscriptions(constants3.VOICE_CHANNEL_SELECT, {}, obj2);
      }
    };
    obj.handleNotificationCreate = function handleNotificationCreate(icon) {
      let obj3;
      let remoteIconURL;
      icon = icon.icon;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const rpcServer = obj.rpcServer;
        obj = { channel_id: tmp, message: obj3.transformInternalTextMessage(tmp2), icon_url: remoteIconURL, title: tmp3, body: tmp4 };
        const dispatchToSubscriptions = rpcServer.dispatchToSubscriptions;
        const NOTIFICATION_CREATE = constants3.NOTIFICATION_CREATE;
        remoteIconURL = null;
        obj3 = RPCHelpers;
        if (null != icon) {
          const tmp8Result = RPCHelpers;
          remoteIconURL = tmp8Result.getRemoteIconURL(icon);
        }
        const result = dispatchToSubscriptions(NOTIFICATION_CREATE, {}, obj);
      }
    };
    obj.handleActivityJoin = function handleActivityJoin(applicationId) {
      let tmp;
      applicationId = applicationId.applicationId;
      const parentApplicationId = applicationId.parentApplicationId;
      const tmp4 = obj;
      if (0 !== obj.rpcServer.subscriptions.length) {
        obj = { application_id: applicationId, secret: tmp };
        if (tmp3) {
          obj.intent = tmp2;
        }
        const rpcServer = tmp4.rpcServer;
        const result = rpcServer.dispatchToSubscriptions(constants3.ACTIVITY_JOIN, (socket) => {
          let tmp = socket.socket.application.id === applicationId;
          if (!tmp) {
            tmp = null != parentApplicationId && socket.socket.application.parentId === tmp2;
          }
          return tmp;
        }, obj);
        const rpcServer2 = tmp4.rpcServer;
        const result1 = rpcServer2.dispatchToSubscriptions(constants3.GAME_JOIN, (socket) => socket.socket.application.id === applicationId, obj);
      }
    };
    obj.handleActivityLayoutModeUpdate = function handleActivityLayoutModeUpdate(arg0) {
      let closure_129_0;
      let layoutMode;
      ({ applicationId: closure_129_0, layoutMode } = arg0);
      if (0 !== obj.rpcServer.subscriptions.length) {
        const rpcServer = tmp.rpcServer;
        obj = { is_pip_mode: layoutMode !== ActivityLayoutMode.FOCUSED };
        const result = rpcServer.dispatchToSubscriptions(constants3.ACTIVITY_PIP_MODE_UPDATE, (socket) => socket.socket.application.id === closure_1_0, obj);
        const obj2 = { layout_mode: layoutMode };
        const rpcServer2 = tmp.rpcServer;
        const result1 = rpcServer2.dispatchToSubscriptions(constants3.ACTIVITY_LAYOUT_MODE_UPDATE, (socket) => socket.socket.application.id === closure_1_0, obj2);
        const rpcServer3 = tmp.rpcServer;
        const result2 = rpcServer3.dispatchToSubscriptions(constants3.FRAME_LAYOUT_MODE_UPDATE, (socket) => socket.socket.application.id === closure_1_0, obj2);
      }
    };
    obj.handleFrameUpdateLayoutMode = function handleFrameUpdateLayoutMode(frameId) {
      let tmp;
      frameId = frameId.frameId;
      if (0 !== obj.rpcServer.subscriptions.length) {
        let FOCUSED;
        let tmp3;
        if (tmp === FrameLayoutModes.PIP) {
          FOCUSED = ActivityLayoutMode.PIP;
          tmp3 = ActivityLayoutMode;
        } else {
          tmp3 = ActivityLayoutMode;
          FOCUSED = ActivityLayoutMode.FOCUSED;
        }
        function targetsFrame(socket) {
          let tmp = socket.socket.source.type === constants.POST_MESSAGE;
          if (tmp) {
            frameByIframeId = frameByIframeId.getFrameByIframeId(socket.socket.source.iframeId);
            let id;
            if (frameByIframeId != null) {
              id = frameByIframeId.id;
            }
            tmp = id === frameId;
          }
          return tmp;
        }
        const rpcServer = tmp2.rpcServer;
        obj = { is_pip_mode: FOCUSED !== tmp3.FOCUSED };
        const result = rpcServer.dispatchToSubscriptions(constants3.ACTIVITY_PIP_MODE_UPDATE, targetsFrame, obj);
        const obj2 = { layout_mode: FOCUSED };
        const rpcServer2 = tmp2.rpcServer;
        const result1 = rpcServer2.dispatchToSubscriptions(constants3.ACTIVITY_LAYOUT_MODE_UPDATE, targetsFrame, obj2);
        const rpcServer3 = tmp2.rpcServer;
        const result2 = rpcServer3.dispatchToSubscriptions(constants3.FRAME_LAYOUT_MODE_UPDATE, targetsFrame, obj2);
      }
    };
    obj.handleThermalStateChange = function handleThermalStateChange(applicationId) {
      let obj2;
      applicationId = applicationId.applicationId;
      if (0 !== obj.rpcServer.subscriptions.length) {
        if (null != applicationId) {
          obj = { thermal_state: obj2.getThermalState() };
          const rpcServer = tmp.rpcServer;
          obj2 = useThermalState;
          const result = rpcServer.dispatchToSubscriptions(constants3.THERMAL_STATE_UPDATE, (socket) => socket.socket.application.id === applicationId, obj);
        }
      }
    };
    obj.handleScreenOrientationUpdate = function handleScreenOrientationUpdate(applicationId) {
      applicationId = applicationId.applicationId;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const rpcServer = obj.rpcServer;
        obj = { screen_orientation: tmp };
        const result = rpcServer.dispatchToSubscriptions(constants3.ORIENTATION_UPDATE, null == applicationId ? {} : ((socket) => socket.socket.application.id === applicationId), obj);
      }
    };
    obj.handleEmbeddedActivityUpdate = function handleEmbeddedActivityUpdate() {
      if (0 !== obj.rpcServer.subscriptions.length) {
        obj = activityInstanceConnectedParticipants;
        const rpcServer = tmp.rpcServer;
        const result = rpcServer.dispatchToSubscriptions(constants3.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, {}, obj.activityInstanceConnectedParticipants());
      }
    };
    obj.handleActivityMessage = function handleActivityMessage(type) {
      let activity;
      let application;
      let channelId;
      let message;
      ({ channelId, message } = type);
      let application_id;
      if (0 !== obj.rpcServer.subscriptions.length) {
        ({ application, activity } = message);
        if (null != application) {
          if (null != activity) {
            if (null != activity.party_id) {
              const author = message.author;
              let id;
              const getUser = UserStore.getUser;
              if (author != null) {
                id = author.id;
              }
              const user = getUser(id);
              if (null != user) {
                const currentUser = UserStore.getCurrentUser();
                if (null != currentUser) {
                  if (user.id !== currentUser.id) {
                    let applicationActivity;
                    if (activity.type === constants.JOIN_REQUEST) {
                      applicationActivity = PresenceStore.getApplicationActivity(currentUser.id, application.id);
                    } else {
                      applicationActivity = PresenceStore.getApplicationActivity(user.id, application.id);
                    }
                    if (null != applicationActivity) {
                      if (null != applicationActivity.party) {
                        if (applicationActivity.party.id === activity.party_id) {
                          application_id = applicationActivity.application_id;
                          type = activity.type;
                          if (constants.JOIN === type) {
                            const rpcServer = tmp.rpcServer;
                            obj = { user: transformUserDefault(user), activity: applicationActivity, type: activity.type, channel_id: channelId, message_id: message.id };
                            const dispatchToSubscriptions = rpcServer.dispatchToSubscriptions;
                            const ACTIVITY_INVITE = constants3.ACTIVITY_INVITE;
                            const result = dispatchToSubscriptions(ACTIVITY_INVITE, (socket) => socket.socket.application.id === application_id, obj);
                          } else if (constants.JOIN_REQUEST === type) {
                            const rpcServer2 = tmp.rpcServer;
                            const dispatchToSubscriptions2 = rpcServer2.dispatchToSubscriptions;
                            const ACTIVITY_JOIN_REQUEST = constants3.ACTIVITY_JOIN_REQUEST;
                            const obj3 = { user: transformUserDefault(user), activity: applicationActivity, type: activity.type, channel_id: channelId, message_id: message.id };
                            const result1 = dispatchToSubscriptions2(ACTIVITY_JOIN_REQUEST, (socket) => socket.socket.application.id === application_id, obj3);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
    obj.handleOAuth2TokenRevoke = function handleOAuth2TokenRevoke(accessToken) {
      accessToken = accessToken.accessToken;
      const sockets = obj.rpcServer.sockets;
      const item = sockets.forEach((authorization) => {
        if (authorization.authorization.accessToken === accessToken) {
          authorization.close(constants.TOKEN_REVOKED, "Token revoked");
        }
      });
    };
    obj.handleGuildCreate = function handleGuildCreate(guild) {
      const id = guild.guild.id;
      guild = GuildStore.getGuild(id);
      let tmp3 = 0 !== obj.rpcServer.subscriptions.length;
      const tmp2 = obj;
      if (tmp3) {
        tmp3 = null != guild;
      }
      if (tmp3) {
        const rpcServer = tmp2.rpcServer;
        obj = { id, name: guild.name };
        const result = rpcServer.dispatchToSubscriptions(constants3.GUILD_CREATE, {}, obj);
      }
    };
    obj.handleChannelCreate = function handleChannelCreate(arg0) {
      if (0 !== obj.rpcServer.subscriptions.length) {
        const rpcServer = obj.rpcServer;
        obj = { id: tmp, name: tmp2, type: tmp3 };
        const result = rpcServer.dispatchToSubscriptions(constants3.CHANNEL_CREATE, {}, obj);
      }
    };
    obj.handleLogout = function handleLogout() {
      obj = ConjureVoiceSessionCoordinatorDefault;
      obj.release();
      const sockets = obj.rpcServer.sockets;
      const item = sockets.forEach((close) => close.close(constants.CLOSE_NORMAL, "User logout"));
    };
    obj.handleRelationshipAdd = function handleRelationshipAdd(arg0) {
      let closure_0;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const user = UserStore.getUser(tmp);
        if (null != user) {
          obj = RPCHelpers;
          closure_0 = obj.transformBaseRelationship(tmp2, user);
          const rpcServer = tmp3.rpcServer;
          const result = rpcServer.dispatchToSubscriptions(constants3.RELATIONSHIP_UPDATE, {}, (socket) => {
            obj = closure_2_0(closure_2_2[24]);
            return obj.transformApplicationRelationship(closure_0, socket.socket.application.id);
          });
        }
      }
    };
    obj.handleRelationshipUpdate = function handleRelationshipUpdate(arg0) {
      let closure_0;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const user = UserStore.getUser(tmp);
        if (null != user) {
          obj = RPCHelpers;
          closure_0 = obj.transformBaseRelationship(tmp2, user);
          const rpcServer = tmp3.rpcServer;
          const result = rpcServer.dispatchToSubscriptions(constants3.RELATIONSHIP_UPDATE, {}, (socket) => {
            obj = closure_2_0(closure_2_2[24]);
            return obj.transformApplicationRelationship(closure_0, socket.socket.application.id);
          });
        }
      }
    };
    obj.handleRelationshipRemove = function handleRelationshipRemove(arg0) {
      let closure_0;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const user = UserStore.getUser(tmp);
        if (null != user) {
          obj = RPCHelpers;
          closure_0 = obj.transformBaseRelationship(constants2.NONE, user);
          const rpcServer = tmp2.rpcServer;
          const result = rpcServer.dispatchToSubscriptions(constants3.RELATIONSHIP_UPDATE, {}, (socket) => {
            obj = closure_2_0(closure_2_2[24]);
            return obj.transformApplicationRelationship(closure_0, socket.socket.application.id);
          });
        }
      }
    };
    obj.handlePresenceUpdates = function handlePresenceUpdates(updates) {
      updates = updates.updates;
      let item10023;
      let closure_0 = obj;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        function _loop() {
          relationshipType = relationshipType.getRelationshipType(item10023);
          if (relationshipType === constants.NONE) {
            return 0;
          } else {
            user = user.getUser(item10023);
            if (null == user) {
              return 0;
            } else {
              obj = closure_2_0(closure_2_2[24]);
              rpcServer = obj.transformBaseRelationship(relationshipType, user);
              rpcServer = rpcServer.rpcServer;
              const result = rpcServer.dispatchToSubscriptions(constants2.RELATIONSHIP_UPDATE, {}, (socket) => {
                obj = rpcServer(closure_2_2[24]);
                return obj.transformApplicationRelationship(closure_0, socket.socket.application.id);
              });
            }
          }
        }
        set = new Set(updates.map((user) => user.user.id));
        const values = set.values();
        for (const item10023 of values) {
          let _loopResult = _loop();
          continue;
        }
      }
    };
    obj.handlePresencesReplace = function handlePresencesReplace() {
      let closure_129_1;
      let closure_129_2;
      let closure_0 = obj;
      if (0 !== obj.rpcServer.subscriptions.length) {
        function _loop2() {
          if (closure_1_2 === constants.NONE) {
            return 0;
          } else {
            user = user.getUser(closure_1_1);
            if (null == user) {
              return 0;
            } else {
              obj = closure_2_0(closure_2_2[24]);
              rpcServer = obj.transformBaseRelationship(tmp, user);
              rpcServer = rpcServer.rpcServer;
              const result = rpcServer.dispatchToSubscriptions(constants2.RELATIONSHIP_UPDATE, {}, (socket) => {
                obj = rpcServer(closure_2_2[24]);
                return obj.transformApplicationRelationship(closure_0, socket.socket.application.id);
              });
            }
          }
        }
        const mutableRelationships = RelationshipStore.getMutableRelationships();
        const entries = mutableRelationships.entries();
        const tmp4 = entries[Symbol.iterator]();
        while (tmp4 !== undefined) {
          let tmp9 = _slicedToArray(tmp6, 2);
          [closure_129_1, closure_129_2] = tmp9;
          let _loop2Result = _loop2();
          continue;
        }
      }
    };
    obj.handleUserUpdate = function handleUserUpdate(user) {
      const id = user.user.id;
      let closure_0;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const relationshipType = RelationshipStore.getRelationshipType(id);
        if (relationshipType !== constants2.NONE) {
          user = UserStore.getUser(id);
          if (null != user) {
            obj = RPCHelpers;
            closure_0 = obj.transformBaseRelationship(relationshipType, user);
            const rpcServer = tmp.rpcServer;
            const result = rpcServer.dispatchToSubscriptions(constants3.RELATIONSHIP_UPDATE, {}, (socket) => {
              obj = closure_2_0(closure_2_2[24]);
              return obj.transformApplicationRelationship(closure_0, socket.socket.application.id);
            });
          }
        }
      }
    };
    obj.handleEntitlementCreate = function handleEntitlementCreate(entitlement) {
      entitlement = entitlement.entitlement;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const rpcServer = obj.rpcServer;
        obj = { entitlement };
        const result = rpcServer.dispatchToSubscriptions(constants3.ENTITLEMENT_CREATE, (socket) => socket.socket.application.id === entitlement.application_id, obj);
      }
    };
    obj.handleEntitlementDelete = function handleEntitlementDelete(entitlement) {
      entitlement = entitlement.entitlement;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const rpcServer = obj.rpcServer;
        obj = { entitlement };
        const result = rpcServer.dispatchToSubscriptions(constants3.ENTITLEMENT_DELETE, (socket) => socket.socket.application.id === entitlement.application_id, obj);
      }
    };
    obj.handleQuestEnrollSuccess = function handleQuestEnrollSuccess(enrolledQuestUserStatus) {
      let tmp;
      enrolledQuestUserStatus = enrolledQuestUserStatus.enrolledQuestUserStatus;
      let questId;
      let activityApplicationId;
      if (0 !== obj.rpcServer.subscriptions.length) {
        questId = enrolledQuestUserStatus.questId;
        const quest = QuestStore.getQuest(questId);
        if (null != quest) {
          obj = QuestTaskUtils;
          activityApplicationId = obj.getActivityApplicationId(quest);
          if (null != activityApplicationId) {
            const rpcServer = tmp.rpcServer;
            const obj2 = { quest_id: questId, is_enrolled: null != enrolledQuestUserStatus.enrolledAt, enrolled_at: enrolledQuestUserStatus.enrolledAt };
            const result = rpcServer.dispatchToSubscriptions(constants3.QUEST_ENROLLMENT_STATUS_UPDATE, (socket) => {
              let tmp = socket.socket.application.id === activityApplicationId;
              if (tmp) {
                const args = socket.args;
                let quest_id;
                if (args != null) {
                  quest_id = args.quest_id;
                }
                tmp = quest_id === questId;
              }
              return tmp;
            }, obj2);
          }
        }
      }
    };
    ({ server: tmp.rpcServer, transports: tmp.transports, commands: tmp.rpcCommandHandlers, events: tmp.rpcEventHandlers, stores: tmp.stores, registerTransportsForEmbeddedPlatform: tmp.registerTransportsForEmbeddedPlatform } = arg0);
    return obj;
  }
  loadServer() {
    const self = this;
    if (PlatformUtils.isPlatformEmbedded) {
      const result = self.registerTransportsForEmbeddedPlatform();
    }
    const transports = self.transports;
    for (const item10013 of transports) {
      let rpcServer = self.rpcServer;
      let registerTransportResult = rpcServer.registerTransport(item10013);
      continue;
    }
    const entries = Object.entries(self.rpcCommandHandlers);
    const tmp4 = entries[Symbol.iterator]();
    while (tmp4 !== undefined) {
      let tmp7 = _slicedToArray(tmp5, 2);
      let rpcServer2 = self.rpcServer;
      let setCommandHandlerResult = rpcServer2.setCommandHandler(tmp7[0], tmp7[1]);
      continue;
    }
    const entries1 = Object.entries(self.rpcEventHandlers);
    for (const item10045 of entries1) {
      let tmp11 = _slicedToArray(item10045, 2);
      let rpcServer3 = self.rpcServer;
      let setEventHandlerResult = rpcServer3.setEventHandler(tmp11[0], tmp11[1]);
      continue;
    }
  }
  init() {
    let currentUser;
    const self = this;
    this.rpcServer.getCurrentUser = () => currentUser.getCurrentUser();
    this.rpcServer.onConnect = (app_id) => {
      const obj = DispatcherDefault;
      const obj2 = { type: "RPC_APP_CONNECTED", socketId: app_id.id, application: app_id.application, source: app_id.source };
      obj.dispatch(obj2);
      const obj3 = AnalyticsUtilsDefault;
      const obj4 = { app_id: app_id.application.id, transport: app_id.transport };
      obj3.track(constants.AUTHORIZED_APP_CONNECTED, obj4);
    };
    this.rpcServer.onDisconnect = (id, reason) => {
      const obj = ConjureVoiceSessionCoordinatorDefault;
      obj.releaseSocket(id.id);
      const obj2 = DispatcherDefault;
      const obj3 = { type: "RPC_APP_DISCONNECTED", socketId: id.id, application: id.application, source: id.source, reason };
      obj2.dispatch(obj3);
    };
    const items = [ChannelStore, GuildMemberStore, PresenceStore, VoiceStateStore, MediaEngineStore, RTCConnectionStore];
    const batchedStoreListener = new self(504).BatchedStoreListener(items.concat(this.stores), () => {
      const obj = ConjureVoiceSessionCoordinatorDefault;
      const result = obj.reconcileParticipants();
      const rpcServer = self.rpcServer;
      rpcServer.updateSubscriptions();
    });
    batchedStoreListener.attach("RPCServerManager");
    let obj2 = DispatcherDefault;
    const subscription = obj2.subscribe("MESSAGE_CREATE", this.handleMessage);
    let obj3 = DispatcherDefault;
    const subscription1 = obj3.subscribe("MESSAGE_UPDATE", this.handleMessage);
    let obj4 = DispatcherDefault;
    const subscription2 = obj4.subscribe("MESSAGE_DELETE", this.handleMessage);
    const obj5 = DispatcherDefault;
    const subscription3 = obj5.subscribe("SPEAKING", this.handleSpeaking);
    const obj6 = DispatcherDefault;
    const subscription4 = obj6.subscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke);
    const obj7 = DispatcherDefault;
    const subscription5 = obj7.subscribe("GUILD_CREATE", this.handleGuildCreate);
    const obj8 = DispatcherDefault;
    const subscription6 = obj8.subscribe("CHANNEL_CREATE", this.handleChannelCreate);
    const obj9 = DispatcherDefault;
    const subscription7 = obj9.subscribe("LOGOUT", this.handleLogout);
    const obj10 = DispatcherDefault;
    const subscription8 = obj10.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
    const obj11 = DispatcherDefault;
    const subscription9 = obj11.subscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate);
    const obj12 = DispatcherDefault;
    const subscription10 = obj12.subscribe("ACTIVITY_JOIN", this.handleActivityJoin);
    const obj13 = DispatcherDefault;
    const subscription11 = obj13.subscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate);
    const obj14 = DispatcherDefault;
    const subscription12 = obj14.subscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode);
    const obj15 = DispatcherDefault;
    const subscription13 = obj15.subscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange);
    const obj16 = DispatcherDefault;
    const subscription14 = obj16.subscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate);
    const obj17 = DispatcherDefault;
    const subscription15 = obj17.subscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate);
    const obj18 = DispatcherDefault;
    const subscription16 = obj18.subscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd);
    const obj19 = DispatcherDefault;
    const subscription17 = obj19.subscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate);
    const obj20 = DispatcherDefault;
    const subscription18 = obj20.subscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove);
    const obj21 = DispatcherDefault;
    const subscription19 = obj21.subscribe("PRESENCE_UPDATES", this.handlePresenceUpdates);
    const obj22 = DispatcherDefault;
    const subscription20 = obj22.subscribe("PRESENCES_REPLACE", this.handlePresencesReplace);
    const obj23 = DispatcherDefault;
    const subscription21 = obj23.subscribe("USER_UPDATE", this.handleUserUpdate);
    const obj24 = DispatcherDefault;
    const subscription22 = obj24.subscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate);
    const obj25 = DispatcherDefault;
    const subscription23 = obj25.subscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete);
    const obj26 = DispatcherDefault;
    const subscription24 = obj26.subscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
  }
  terminate() {
    const obj = DispatcherDefault;
    obj.unsubscribe("MESSAGE_CREATE", this.handleMessage);
    const obj2 = DispatcherDefault;
    obj2.unsubscribe("MESSAGE_UPDATE", this.handleMessage);
    const obj3 = DispatcherDefault;
    obj3.unsubscribe("MESSAGE_DELETE", this.handleMessage);
    const obj4 = DispatcherDefault;
    obj4.unsubscribe("SPEAKING", this.handleSpeaking);
    const obj5 = DispatcherDefault;
    obj5.unsubscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke);
    const obj6 = DispatcherDefault;
    obj6.unsubscribe("GUILD_CREATE", this.handleGuildCreate);
    const obj7 = DispatcherDefault;
    obj7.unsubscribe("CHANNEL_CREATE", this.handleChannelCreate);
    const obj8 = DispatcherDefault;
    obj8.unsubscribe("LOGOUT", this.handleLogout);
    const obj9 = DispatcherDefault;
    obj9.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
    const obj10 = DispatcherDefault;
    obj10.unsubscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate);
    const obj11 = DispatcherDefault;
    obj11.unsubscribe("ACTIVITY_JOIN", this.handleActivityJoin);
    const obj12 = DispatcherDefault;
    obj12.unsubscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate);
    const obj13 = DispatcherDefault;
    obj13.unsubscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode);
    const obj14 = DispatcherDefault;
    obj14.unsubscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange);
    const obj15 = DispatcherDefault;
    obj15.unsubscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate);
    const obj16 = DispatcherDefault;
    obj16.unsubscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate);
    const obj17 = DispatcherDefault;
    obj17.unsubscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd);
    const obj18 = DispatcherDefault;
    obj18.unsubscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate);
    const obj19 = DispatcherDefault;
    obj19.unsubscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove);
    const obj20 = DispatcherDefault;
    obj20.unsubscribe("PRESENCE_UPDATES", this.handlePresenceUpdates);
    const obj21 = DispatcherDefault;
    obj21.unsubscribe("PRESENCES_REPLACE", this.handlePresencesReplace);
    const obj22 = DispatcherDefault;
    obj22.unsubscribe("USER_UPDATE", this.handleUserUpdate);
    const obj23 = DispatcherDefault;
    obj23.unsubscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate);
    const obj24 = DispatcherDefault;
    obj24.unsubscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete);
    const obj25 = DispatcherDefault;
    obj25.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
  }
}
const prototype = RPCServerManager.prototype;

export default RPCServerManager;