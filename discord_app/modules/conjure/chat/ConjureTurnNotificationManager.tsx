// discord_app/modules/conjure/chat/ConjureTurnNotificationManager.tsx
import UserSettings from "../../user_settings/UserSettings.tsx";
import ConjureUtils from "../shared/ConjureUtils.tsx";
import conjureProjectMute from "../projects/conjureProjectMute.tsx";
import ConjurePlatformUtilsDefault from "../shared/ConjurePlatformUtils.native.tsx";
import SoundUtils from "../../sound_playback/SoundUtils.tsx";
import conjureMentions from "conjureMentions.tsx";
import FamilyCenterStore from "../../parent_tools/FamilyCenterStore.tsx";
import UserSettingsProtoStore from "../../user_settings/UserSettingsProtoStore.tsx";
import NotificationSettingsStore from "../../../stores/NotificationSettingsStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import SelfPresenceStore from "../../../stores/SelfPresenceStore.tsx";
import ConjurePagesStore from "../pages/ConjurePagesStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

require = fn;
function handleConjureTurnSettled(projectId) {
  notifyTurn(projectId.projectId, projectId.guildId, projectId.title, projectId.body, projectId.nonce);
}
function handleConjureTurnNotification(arg0) {
  ({ projectId, body, nonce } = arg0);
  const project = ConjureProjectStore.getProject(projectId);
  if (null != project) {
    let guild_id = project.guild_id;
    if (guild_id == null) {
      guild_id = project.preview_guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    notifyTurn(projectId, guild_id, project.name, body, nonce);
  }
}
function handleLogout() {
  map.clear();
}
function notifyTurn(projectId, guildId, title, body, nonce) {
  if (null != nonce) {
    let num = map.get(projectId);
    if (num == null) {
      num = 0;
    }
    if (nonce > num) {
      const result = map.set(projectId, nonce);
    }
  }
  let result2 = ConjurePlatformUtilsDefault.areTurnNotificationsDisabled();
  if (!result2) {
    result2 = SelfPresenceStore.getStatus() === constants.DND;
  }
  if (!result2) {
    const FocusMode = UserSettings.FocusMode;
    result2 = FocusMode.getSetting();
  }
  if (!result2) {
    result2 = FamilyCenterStore.isCurrentUserInRestrictedHours();
  }
  if (!result2) {
    if (!obj3.isConjureProjectMuted(UserSettingsProtoStore.settings, projectId)) {
      const isSoundDisabledResult = NotificationSettingsStore.isSoundDisabled(message1);
      guildId = SelectedGuildStore.getGuildId();
      if (ConjurePagesStore.getShownProjectId() !== projectId) {
        let conjureWorkspaceGuildId = guildId;
        if (guildId == null) {
          conjureWorkspaceGuildId = ConjureUtils.resolveConjureWorkspaceGuildId(ConjureChatStore);
          const tmp8Result = ConjureUtils;
        }
        const obj5 = {
          projectId,
          guildId: conjureWorkspaceGuildId,
          title,
          body: null,
          route: null,
          sound: null,
          volume: null,
        };
        const tmpResult = ConjurePlatformUtilsDefault;
        obj5.body = conjureMentions.withConjureMentionNames(body);
        let CHANNELResult = null;
        if (null != conjureWorkspaceGuildId) {
          CHANNELResult = closure_1_11.CHANNEL(conjureWorkspaceGuildId, StaticChannelRoute.CONJURE, projectId);
        }
        obj5.route = CHANNELResult;
        let tmp26;
        if (!isSoundDisabledResult) {
          tmp26 = bit_message1;
        }
        obj5.sound = tmp26;
        obj5.volume = volume;
        const result1 = tmpResult.presentTurnNotification(obj5);
        const tmp8Result3 = conjureMentions;
      }
      if (tmpResult2.isWindowFocused()) {
        if (!isSoundDisabledResult) {
          SoundUtils.playSound(bit_message1, volume);
          const tmp8Result4 = SoundUtils;
        }
      }
      tmpResult2 = ConjurePlatformUtilsDefault;
    }
    obj3 = conjureProjectMute;
  }
}
const Constants = fn(1084);
({ Routes: closure_11, StatusTypes: closure_12 } = Constants);
const StaticChannelRoute = fn(4863).StaticChannelRoute;
const prototype = function ConjureTurnNotificationManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = {
    CONJURE_TURN_SETTLED: handleConjureTurnSettled,
    CONJURE_TURN_NOTIFICATION: handleConjureTurnNotification,
    LOGOUT: handleLogout,
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {}
const bit_message1 = "bit_message1";
const message1 = "message1";
const ConjureChatStore = "ConjureChatStore";
let c21 = 0.4;
const prototype1 = new prototype();
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/ConjureTurnNotificationManager.tsx");

export default prototype1;
