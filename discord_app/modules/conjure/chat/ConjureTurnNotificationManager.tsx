// === Module 18818: ConjureTurnNotificationManager ===

// Module 18818 (ConjureTurnNotificationManager)
import UserSettings from "UserSettings" /* 4800 */;
import ConjureUtils from "ConjureUtils" /* 7347 */;
import conjureProjectMute from "conjureProjectMute" /* 10726 */;
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 10745 */;
import SoundUtils from "SoundUtils" /* 11528 */;
import conjureMentions from "conjureMentions" /* 12346 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7646 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1243 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 13761 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4875 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5003 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6499 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6774 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7216 */;

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
      if (ConjureProjectStore.getGlobalSelectedProjectId() === projectId) {
        if (tmpResult.isWindowFocused()) {
          if (!isSoundDisabledResult) {
            SoundUtils.playSound(bit_message1, volume);
            const tmp8Result = SoundUtils;
          }
        }
        tmpResult = ConjurePlatformUtilsDefault;
      }
      let conjureWorkspaceGuildId = guildId;
      if (guildId == null) {
        conjureWorkspaceGuildId = ConjureUtils.resolveConjureWorkspaceGuildId(ConjureChatStore);
        const tmp8Result3 = ConjureUtils;
      }
      const obj5 = { projectId, guildId: conjureWorkspaceGuildId, title, body: null, route: null, sound: null, volume: null };
      const tmpResult2 = ConjurePlatformUtilsDefault;
      obj5.body = conjureMentions.withConjureMentionNames(body);
      let CHANNELResult = null;
      if (null != conjureWorkspaceGuildId) {
        CHANNELResult = v65535.CHANNEL(conjureWorkspaceGuildId, StaticChannelRoute.CONJURE, projectId);
      }
      obj5.route = CHANNELResult;
      let tmp25;
      if (!isSoundDisabledResult) {
        tmp25 = bit_message1;
      }
      obj5.sound = tmp25;
      obj5.volume = volume;
      const result1 = tmpResult2.presentTurnNotification(obj5);
      const tmp8Result4 = conjureMentions;
    }
    obj3 = conjureProjectMute;
  }
}
const Constants = fn(1084);
({ Routes: c10, StatusTypes: closure_11 } = Constants);
const StaticChannelRoute = fn(4831).StaticChannelRoute;
const prototype = function ConjureTurnNotificationManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { CONJURE_TURN_SETTLED: handleConjureTurnSettled, CONJURE_TURN_NOTIFICATION: handleConjureTurnNotification, LOGOUT: handleLogout };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
const bit_message1 = "bit_message1";
const message1 = "message1";
const ConjureChatStore = "ConjureChatStore";
let c20 = 0.4;
const prototype1 = new prototype();
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/ConjureTurnNotificationManager.tsx");

export default prototype1;