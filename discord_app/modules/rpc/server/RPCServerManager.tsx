// discord_app/modules/rpc/server/RPCServerManager.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import QuestTaskUtils from "../../quests/utils/QuestTaskUtils.tsx";
import RPCHelpers from "../RPCHelpers.tsx";
import transformUserDefault from "../helpers/transformUser.tsx";
import useThermalState from "../../device/useThermalState.tsx";
import VibegrationsVoiceSessionCoordinatorDefault from "../../vibegrations/voice/VibegrationsVoiceSessionCoordinator.tsx";
import activityInstanceConnectedParticipants from "../helpers/activityInstanceConnectedParticipants.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import FramesStore from "../../frames/FramesStore.tsx";
import QuestStore from "../../quests/QuestStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import PresenceStore from "../../../stores/PresenceStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";

require = fn;
const TransportTypes = fn(4465).TransportTypes;
const Constants = fn(1074);
({
  ActivityActionTypes: closure_17,
  RelationshipTypes: closure_18,
  AnalyticEvents: closure_19,
  RPCEvents: closure_20,
  RPCCloseCodes: closure_21,
} = Constants);
const ActivityLayoutMode = fn(1920).ActivityLayoutMode;
const FrameLayoutModes = fn(9511).FrameLayoutModes;
const MediaEngineContextTypes = fn(4585).MediaEngineContextTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/RPCServerManager.tsx");
class RPCServerManager {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.handleMessage = function handleMessage(type) {
      if (0 !== obj.rpcServer.subscriptions.length) {
        if ("MESSAGE_CREATE" === type.type) {
          const result = obj.handleActivityMessage(type);
        }
        type = type.type;
        if ("MESSAGE_CREATE" === type) {
          if ("SENDING" !== type.message.state) {
            const MESSAGE_CREATE = constants3.MESSAGE_CREATE;
            ({ channelId, message } = type);
            const _HermesInternal2 = HermesInternal;
            let combined = "" + MESSAGE_CREATE + type.message.id;
            let MESSAGE_UPDATE = MESSAGE_CREATE;
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
          return GlobalUtils.assertNever(type);
        }
        if (null != channelId) {
          const rpcServer = obj.rpcServer;
          obj = { channel_id: channelId };
          obj = { channel_id: channelId, message: RPCHelpers.transformInternalTextMessage(message) };
          const result1 = rpcServer.dispatchToSubscriptions(MESSAGE_UPDATE, obj, obj, combined);
        }
      }
    };
    obj.handleSpeaking = function handleSpeaking(speakingFlags) {
      if (0 !== obj.rpcServer.subscriptions.length) {
        if (0 !== speakingFlags.speakingFlags) {
          let SPEAKING_STOP = constants3.SPEAKING_START;
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
                const rpcServer = tmp2.rpcServer;
                obj = { channel_id: voiceState.channelId };
                obj = { channel_id: voiceState.channelId, user_id: speakingFlags.userId };
                const result = rpcServer.dispatchToSubscriptions(SPEAKING_STOP, obj, obj);
                if (null != voiceState.channelId) {
                  obj = VibegrationsVoiceSessionCoordinatorDefault;
                  let activeSessionIdsForChannel = obj.getActiveSessionIdsForChannel(voiceState.channelId);
                } else {
                  activeSessionIdsForChannel = [];
                }
                if (0 !== speakingFlags.speakingFlags) {
                  const VOICE_SESSION_SPEAKING_START = constants3.VOICE_SESSION_SPEAKING_START;
                } else {
                  const VOICE_SESSION_SPEAKING_STOP = constants3.VOICE_SESSION_SPEAKING_STOP;
                }
                activeSessionIdsForChannel[Symbol.iterator]();
              }
            }
          }
        }
      }
    };
    obj.handleVoiceChannelSelect = function handleVoiceChannelSelect(channelId) {
      channelId = channelId.channelId;
      obj = VibegrationsVoiceSessionCoordinatorDefault;
      obj.releaseUnlessChannel(channelId);
      if (0 !== obj.rpcServer.subscriptions.length) {
        const rpcServer = obj.rpcServer;
        obj = { channel_id: channelId, guild_id: channelId.guildId };
        const result = rpcServer.dispatchToSubscriptions(constants3.VOICE_CHANNEL_SELECT, {}, obj);
      }
    };
    obj.handleNotificationCreate = function handleNotificationCreate(icon) {
      icon = icon.icon;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const rpcServer = obj.rpcServer;
        obj = {
          channel_id: tmp,
          message: RPCHelpers.transformInternalTextMessage(tmp2),
          icon_url: null,
          title: null,
          body: null,
        };
        let remoteIconURL = null;
        if (null != icon) {
          remoteIconURL = tmp8(9559).getRemoteIconURL(icon);
          const tmp8Result = tmp8(9559);
        }
        obj.icon_url = remoteIconURL;
        obj.title = tmp3;
        obj.body = tmp4;
        const result = rpcServer.dispatchToSubscriptions(constants3.NOTIFICATION_CREATE, {}, obj);
        tmp8 = require;
      }
    };
    obj.handleActivityJoin = function handleActivityJoin(applicationId) {
      applicationId = applicationId.applicationId;
      const parentApplicationId = applicationId.parentApplicationId;
      if (0 !== obj.rpcServer.subscriptions.length) {
        obj = { application_id: applicationId, secret: tmp };
        if (tmp3) {
          obj.intent = tmp2;
        }
        const rpcServer = tmp4.rpcServer;
        const result = rpcServer.dispatchToSubscriptions(
          constants3.ACTIVITY_JOIN,
          (socket) => {
            let tmp = socket.socket.application.id === applicationId;
            if (!tmp) {
              tmp = null != parentApplicationId && socket.socket.application.parentId === tmp2;
              const tmp4 = null != parentApplicationId && socket.socket.application.parentId === tmp2;
            }
            return tmp;
          },
          obj,
        );
        const rpcServer2 = tmp4.rpcServer;
        const result1 = rpcServer2.dispatchToSubscriptions(
          constants3.GAME_JOIN,
          (socket) => socket.socket.application.id === applicationId,
          obj,
        );
      }
    };
    obj.handleActivityLayoutModeUpdate = function handleActivityLayoutModeUpdate(arg0) {
      ({ applicationId: obj, layoutMode } = arg0);
      if (0 !== obj.rpcServer.subscriptions.length) {
        const rpcServer = tmp.rpcServer;
        obj = { is_pip_mode: layoutMode !== ActivityLayoutMode.FOCUSED };
        const result = rpcServer.dispatchToSubscriptions(
          constants3.ACTIVITY_PIP_MODE_UPDATE,
          (socket) => socket.socket.application.id === obj,
          obj,
        );
        obj = { layout_mode: layoutMode };
        const rpcServer2 = tmp.rpcServer;
        const result1 = rpcServer2.dispatchToSubscriptions(
          constants3.ACTIVITY_LAYOUT_MODE_UPDATE,
          (socket) => socket.socket.application.id === obj,
          obj,
        );
        const rpcServer3 = tmp.rpcServer;
        const result2 = rpcServer3.dispatchToSubscriptions(
          constants3.FRAME_LAYOUT_MODE_UPDATE,
          (socket) => socket.socket.application.id === obj,
          obj,
        );
      }
    };
    obj.handleFrameUpdateLayoutMode = function handleFrameUpdateLayoutMode(frameId) {
      frameId = frameId.frameId;
      let dispatchToSubscriptions = obj;
      if (0 !== obj.rpcServer.subscriptions.length) {
        if (tmp === FrameLayoutModes.PIP) {
          let FOCUSED = ActivityLayoutMode.PIP;
          let tmp2 = ActivityLayoutMode;
        } else {
          tmp2 = ActivityLayoutMode;
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
        const rpcServer = dispatchToSubscriptions.rpcServer;
        obj = { is_pip_mode: FOCUSED !== tmp2.FOCUSED };
        const result = rpcServer.dispatchToSubscriptions(constants3.ACTIVITY_PIP_MODE_UPDATE, targetsFrame, obj);
        obj = { layout_mode: FOCUSED };
        const rpcServer2 = dispatchToSubscriptions.rpcServer;
        const result1 = rpcServer2.dispatchToSubscriptions(constants3.ACTIVITY_LAYOUT_MODE_UPDATE, targetsFrame, obj);
        const rpcServer3 = dispatchToSubscriptions.rpcServer;
        dispatchToSubscriptions = rpcServer3.dispatchToSubscriptions;
        const result2 = dispatchToSubscriptions(constants3.FRAME_LAYOUT_MODE_UPDATE, targetsFrame, obj);
      }
    };
    obj.handleThermalStateChange = function handleThermalStateChange(applicationId) {
      applicationId = applicationId.applicationId;
      if (0 !== obj.rpcServer.subscriptions.length) {
        if (null != applicationId) {
          obj = { thermal_state: useThermalState.getThermalState() };
          const rpcServer = tmp.rpcServer;
          const result = rpcServer.dispatchToSubscriptions(
            constants3.THERMAL_STATE_UPDATE,
            (socket) => socket.socket.application.id === applicationId,
            obj,
          );
        }
      }
    };
    obj.handleScreenOrientationUpdate = function handleScreenOrientationUpdate(arg0) {
      if (0 !== obj.rpcServer.subscriptions.length) {
        const rpcServer = obj.rpcServer;
        obj = { screen_orientation: tmp };
        const result = rpcServer.dispatchToSubscriptions(constants3.ORIENTATION_UPDATE, {}, obj);
      }
    };
    obj.handleEmbeddedActivityUpdate = function handleEmbeddedActivityUpdate() {
      if (0 !== obj.rpcServer.subscriptions.length) {
        obj = activityInstanceConnectedParticipants;
        const rpcServer = tmp.rpcServer;
        const result = rpcServer.dispatchToSubscriptions(
          constants3.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE,
          {},
          obj.activityInstanceConnectedParticipants(),
        );
      }
    };
    obj.handleActivityMessage = function handleActivityMessage(type) {
      ({ channelId, message } = type);
      let application_id;
      if (0 !== obj.rpcServer.subscriptions.length) {
        ({ application, activity } = message);
        if (null != application) {
          if (null != activity) {
            if (null != activity.party_id) {
              const author = message.author;
              let id;
              if (author != null) {
                id = author.id;
              }
              const user = UserStore.getUser(id);
              if (null != user) {
                const currentUser = obj2.getCurrentUser();
                if (null != currentUser) {
                  if (user.id !== currentUser.id) {
                    if (activity.type === constants.JOIN_REQUEST) {
                      let applicationActivity = PresenceStore.getApplicationActivity(currentUser.id, application.id);
                    } else {
                      applicationActivity = PresenceStore.getApplicationActivity(user.id, application.id);
                    }
                    if (null != applicationActivity) {
                      if (null != applicationActivity.party) {
                        if (applicationActivity.party.id === activity.party_id) {
                          application_id = applicationActivity.application_id;
                          type = activity.type;
                          if (tmp13.JOIN === type) {
                            const rpcServer = tmp.rpcServer;
                            obj = {
                              user: transformUserDefault(user),
                              activity: applicationActivity,
                              type: activity.type,
                              channel_id: channelId,
                              message_id: message.id,
                            };
                            const result = rpcServer.dispatchToSubscriptions(
                              constants3.ACTIVITY_INVITE,
                              (socket) => socket.socket.application.id === application_id,
                              obj,
                            );
                          } else if (tmp13.JOIN_REQUEST === type) {
                            const rpcServer2 = tmp.rpcServer;
                            obj = {
                              user: transformUserDefault(user),
                              activity: applicationActivity,
                              type: activity.type,
                              channel_id: channelId,
                              message_id: message.id,
                            };
                            const result1 = rpcServer2.dispatchToSubscriptions(
                              constants3.ACTIVITY_JOIN_REQUEST,
                              (socket) => socket.socket.application.id === application_id,
                              obj,
                            );
                          }
                        }
                      }
                    }
                  }
                }
              }
              obj2 = UserStore;
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
          authorization.close(constants4.TOKEN_REVOKED, "Token revoked");
        }
      });
    };
    obj.handleGuildCreate = function handleGuildCreate(guild) {
      const id = guild.guild.id;
      guild = GuildStore.getGuild(id);
      let tmp3 = 0 !== obj.rpcServer.subscriptions.length;
      if (tmp3) {
        tmp3 = null != guild;
      }
      if (tmp3) {
        const rpcServer = obj.rpcServer;
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
      obj = VibegrationsVoiceSessionCoordinatorDefault;
      obj.release();
      const sockets = obj.rpcServer.sockets;
      const item = sockets.forEach((close) => close.close(constants.CLOSE_NORMAL, "User logout"));
    };
    obj.handleRelationshipAdd = function handleRelationshipAdd(arg0) {
      closure_0 = undefined;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const user = UserStore.getUser(tmp);
        if (null != user) {
          obj = RPCHelpers;
          closure_0 = obj.transformBaseRelationship(tmp2, user);
          const rpcServer = tmp3.rpcServer;
          const result = rpcServer.dispatchToSubscriptions(constants3.RELATIONSHIP_UPDATE, {}, (socket) => {
            obj = obj(9559);
            return obj.transformApplicationRelationship(closure_0, socket.socket.application.id);
          });
        }
      }
    };
    obj.handleRelationshipUpdate = function handleRelationshipUpdate(arg0) {
      closure_0 = undefined;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const user = UserStore.getUser(tmp);
        if (null != user) {
          obj = RPCHelpers;
          closure_0 = obj.transformBaseRelationship(tmp2, user);
          const rpcServer = tmp3.rpcServer;
          const result = rpcServer.dispatchToSubscriptions(constants3.RELATIONSHIP_UPDATE, {}, (socket) => {
            obj = obj(9559);
            return obj.transformApplicationRelationship(closure_0, socket.socket.application.id);
          });
        }
      }
    };
    obj.handleRelationshipRemove = function handleRelationshipRemove(arg0) {
      closure_0 = undefined;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const user = UserStore.getUser(tmp);
        if (null != user) {
          obj = RPCHelpers;
          closure_0 = obj.transformBaseRelationship(constants2.NONE, user);
          const rpcServer = tmp2.rpcServer;
          const result = rpcServer.dispatchToSubscriptions(constants3.RELATIONSHIP_UPDATE, {}, (socket) => {
            obj = obj(9559);
            return obj.transformApplicationRelationship(closure_0, socket.socket.application.id);
          });
        }
      }
    };
    obj.handlePresenceUpdates = function handlePresenceUpdates(updates) {
      updates = updates.updates;
      let item10023;
      let rpcServer = obj;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const _Set = Set;
        const set = new Set(updates.map((user) => user.user.id));
        function _loop() {
          relationshipType = relationshipType.getRelationshipType(item10023);
          if (relationshipType === constants2.NONE) {
            return 0;
          } else {
            const user = authStore.getUser(tmp);
            if (null == user) {
              return 0;
            } else {
              obj = obj(9559);
              rpcServer = obj.transformBaseRelationship(relationshipType, user);
              rpcServer = rpcServer.rpcServer;
              const result = rpcServer.dispatchToSubscriptions(constants3.RELATIONSHIP_UPDATE, {}, (socket) =>
                closure_0(dependencyMap[24]).transformApplicationRelationship(closure_0, socket.socket.application.id),
              );
            }
          }
          tmp = item10023;
        }
        const values = set.values();
        for (const item10023 of values) {
          let _loopResult = _loop();
          continue;
        }
      }
    };
    obj.handlePresencesReplace = function handlePresencesReplace() {
      let rpcServer = obj;
      if (0 !== obj.rpcServer.subscriptions.length) {
        function _loop2() {
          if (dependencyMap === constants2.NONE) {
            return 0;
          } else {
            const user = authStore.getUser(closure_1_1);
            if (null == user) {
              return 0;
            } else {
              obj = obj(9559);
              rpcServer = obj.transformBaseRelationship(tmp, user);
              rpcServer = rpcServer.rpcServer;
              const result = rpcServer.dispatchToSubscriptions(constants3.RELATIONSHIP_UPDATE, {}, (socket) =>
                closure_0(dependencyMap[24]).transformApplicationRelationship(closure_0, socket.socket.application.id),
              );
            }
          }
        }
        const mutableRelationships = RelationshipStore.getMutableRelationships();
        const entries = mutableRelationships.entries();
        const tmp4 = entries[Symbol.iterator]();
        while (tmp4 !== undefined) {
          let tmp9 = _slicedToArray(tmp6, 2);
          [closure_1, closure_2] = tmp9;
          let _loop2Result = _loop2();
          continue;
        }
      }
    };
    obj.handleUserUpdate = function handleUserUpdate(user) {
      const id = user.user.id;
      closure_0 = undefined;
      if (0 !== obj.rpcServer.subscriptions.length) {
        relationshipType = RelationshipStore.getRelationshipType(id);
        if (relationshipType !== constants2.NONE) {
          user = UserStore.getUser(id);
          if (null != user) {
            obj = RPCHelpers;
            closure_0 = obj.transformBaseRelationship(relationshipType, user);
            const rpcServer = tmp.rpcServer;
            const result = rpcServer.dispatchToSubscriptions(constants3.RELATIONSHIP_UPDATE, {}, (socket) => {
              obj = obj(9559);
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
        const result = rpcServer.dispatchToSubscriptions(
          constants3.ENTITLEMENT_CREATE,
          (socket) => socket.socket.application.id === entitlement.application_id,
          obj,
        );
      }
    };
    obj.handleEntitlementDelete = function handleEntitlementDelete(entitlement) {
      entitlement = entitlement.entitlement;
      if (0 !== obj.rpcServer.subscriptions.length) {
        const rpcServer = obj.rpcServer;
        obj = { entitlement };
        const result = rpcServer.dispatchToSubscriptions(
          constants3.ENTITLEMENT_DELETE,
          (socket) => socket.socket.application.id === entitlement.application_id,
          obj,
        );
      }
    };
    obj.handleQuestEnrollSuccess = function handleQuestEnrollSuccess(enrolledQuestUserStatus) {
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
            obj = {
              quest_id: questId,
              is_enrolled: null != enrolledQuestUserStatus.enrolledAt,
              enrolled_at: enrolledQuestUserStatus.enrolledAt,
            };
            const result = rpcServer.dispatchToSubscriptions(
              constants3.QUEST_ENROLLMENT_STATUS_UPDATE,
              (socket) => {
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
              },
              obj,
            );
          }
        }
      }
    };
    ({
      server: tmp.rpcServer,
      transports: tmp.transports,
      commands: tmp.rpcCommandHandlers,
      events: tmp.rpcEventHandlers,
      stores: tmp.stores,
      registerTransportsForEmbeddedPlatform: tmp.registerTransportsForEmbeddedPlatform,
    } = global);
    return obj;
  }
}
const prototype = RPCServerManager.prototype;
prototype["loadServer"] = function loadServer() {
  const self = this;
  if (PlatformUtils.isPlatformEmbedded) {
    const result = self.registerTransportsForEmbeddedPlatform();
  }
  for (const item10013 of tmp2) {
    let rpcServer = self.rpcServer;
    let registerTransportResult = rpcServer.registerTransport(item10013);
    continue;
  }
  const entries = Object.entries(self.rpcCommandHandlers);
  while (tmp5 !== undefined) {
    let tmp8 = _slicedToArray(tmp6, 2);
    let rpcServer2 = self.rpcServer;
    let setCommandHandlerResult = rpcServer2.setCommandHandler(tmp8[0], tmp8[1]);
    continue;
  }
  const entries1 = Object.entries(self.rpcEventHandlers);
  for (const item10045 of entries1) {
    let tmp12 = _slicedToArray(item10045, 2);
    let rpcServer3 = self.rpcServer;
    let setEventHandlerResult = rpcServer3.setEventHandler(tmp12[0], tmp12[1]);
    continue;
  }
};
prototype["init"] = function init() {
  const self = this;
  this.rpcServer.getCurrentUser = () => currentUser.getCurrentUser();
  this.rpcServer.onConnect = (app_id) => {
    let obj = {
      type: "RPC_APP_CONNECTED",
      socketId: app_id.id,
      application: app_id.application,
      source: app_id.source,
    };
    obj.dispatch(obj);
    obj = { app_id: app_id.application.id, transport: app_id.transport };
    AnalyticsUtilsDefault.track(constants.AUTHORIZED_APP_CONNECTED, obj);
  };
  this.rpcServer.onDisconnect = (id, reason) => {
    let obj = VibegrationsVoiceSessionCoordinatorDefault;
    obj.releaseSocket(id.id);
    obj = { type: "RPC_APP_DISCONNECTED", socketId: id.id, application: id.application, source: id.source, reason };
    DispatcherDefault.dispatch(obj);
  };
  const items = [ChannelStore, GuildMemberStore, PresenceStore, VoiceStateStore, MediaEngineStore, RTCConnectionStore];
  const batchedStoreListener = new self(504).BatchedStoreListener(items.concat(this.stores), () => {
    const result = VibegrationsVoiceSessionCoordinatorDefault.reconcileParticipants();
    const rpcServer = self.rpcServer;
    rpcServer.updateSubscriptions();
  });
  batchedStoreListener.attach("RPCServerManager");
  const subscription = DispatcherDefault.subscribe("MESSAGE_CREATE", this.handleMessage);
  const subscription1 = DispatcherDefault.subscribe("MESSAGE_UPDATE", this.handleMessage);
  const subscription2 = DispatcherDefault.subscribe("MESSAGE_DELETE", this.handleMessage);
  const subscription3 = DispatcherDefault.subscribe("SPEAKING", this.handleSpeaking);
  const subscription4 = DispatcherDefault.subscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke);
  const subscription5 = DispatcherDefault.subscribe("GUILD_CREATE", this.handleGuildCreate);
  const subscription6 = DispatcherDefault.subscribe("CHANNEL_CREATE", this.handleChannelCreate);
  const subscription7 = DispatcherDefault.subscribe("LOGOUT", this.handleLogout);
  const subscription8 = DispatcherDefault.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
  const subscription9 = DispatcherDefault.subscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate);
  const subscription10 = DispatcherDefault.subscribe("ACTIVITY_JOIN", this.handleActivityJoin);
  const subscription11 = DispatcherDefault.subscribe(
    "ACTIVITY_LAYOUT_MODE_UPDATE",
    this.handleActivityLayoutModeUpdate,
  );
  const subscription12 = DispatcherDefault.subscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode);
  const subscription13 = DispatcherDefault.subscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange);
  const subscription14 = DispatcherDefault.subscribe(
    "ACTIVITY_SCREEN_ORIENTATION_UPDATE",
    this.handleScreenOrientationUpdate,
  );
  const subscription15 = DispatcherDefault.subscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate);
  const subscription16 = DispatcherDefault.subscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd);
  const subscription17 = DispatcherDefault.subscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate);
  const subscription18 = DispatcherDefault.subscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove);
  const subscription19 = DispatcherDefault.subscribe("PRESENCE_UPDATES", this.handlePresenceUpdates);
  const subscription20 = DispatcherDefault.subscribe("PRESENCES_REPLACE", this.handlePresencesReplace);
  const subscription21 = DispatcherDefault.subscribe("USER_UPDATE", this.handleUserUpdate);
  const subscription22 = DispatcherDefault.subscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate);
  const subscription23 = DispatcherDefault.subscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete);
  const subscription24 = DispatcherDefault.subscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
};
prototype["terminate"] = function terminate() {
  DispatcherDefault.unsubscribe("MESSAGE_CREATE", this.handleMessage);
  DispatcherDefault.unsubscribe("MESSAGE_UPDATE", this.handleMessage);
  DispatcherDefault.unsubscribe("MESSAGE_DELETE", this.handleMessage);
  DispatcherDefault.unsubscribe("SPEAKING", this.handleSpeaking);
  DispatcherDefault.unsubscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke);
  DispatcherDefault.unsubscribe("GUILD_CREATE", this.handleGuildCreate);
  DispatcherDefault.unsubscribe("CHANNEL_CREATE", this.handleChannelCreate);
  DispatcherDefault.unsubscribe("LOGOUT", this.handleLogout);
  DispatcherDefault.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
  DispatcherDefault.unsubscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate);
  DispatcherDefault.unsubscribe("ACTIVITY_JOIN", this.handleActivityJoin);
  DispatcherDefault.unsubscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate);
  DispatcherDefault.unsubscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode);
  DispatcherDefault.unsubscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange);
  DispatcherDefault.unsubscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate);
  DispatcherDefault.unsubscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate);
  DispatcherDefault.unsubscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd);
  DispatcherDefault.unsubscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate);
  DispatcherDefault.unsubscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove);
  DispatcherDefault.unsubscribe("PRESENCE_UPDATES", this.handlePresenceUpdates);
  DispatcherDefault.unsubscribe("PRESENCES_REPLACE", this.handlePresencesReplace);
  DispatcherDefault.unsubscribe("USER_UPDATE", this.handleUserUpdate);
  DispatcherDefault.unsubscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate);
  DispatcherDefault.unsubscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete);
  DispatcherDefault.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
};

export default RPCServerManager;
