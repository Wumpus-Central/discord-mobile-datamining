// discord_app/modules/conjure/chat/ConjureTurnNotificationManager.tsx
import UserSettings from "../../user_settings/UserSettings.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import ConjureUtils from "../shared/ConjureUtils.tsx";
import SoundUtils from "../../sound_playback/SoundUtils.tsx";
import conjureProjectMute from "../projects/conjureProjectMute.tsx";
import ConjurePlatformUtilsDefault from "../shared/ConjurePlatformUtils.native.tsx";
import FamilyCenterStore from "../../parent_tools/FamilyCenterStore.tsx";
import UserSettingsProtoStore from "../../user_settings/UserSettingsProtoStore.tsx";
import NotificationSettingsStore from "../../../stores/NotificationSettingsStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import SelfPresenceStore from "../../../stores/SelfPresenceStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
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
      if (null != guildId) {
        if (ConjureProjectStore.getSelectedProjectId(guildId) === projectId) {
          if (SelectedChannelStore.getChannelId() === StaticChannelRoute.CONJURE) {
            if (tmpResult.isWindowFocused()) {
              if (!isSoundDisabledResult) {
                SoundUtils.playSound(bit_message1, volume);
                const tmp8Result = SoundUtils;
              }
            }
            tmpResult = ConjurePlatformUtilsDefault;
          }
        }
      }
      let conjureWorkspaceGuildId = guildId;
      if (guildId == null) {
        conjureWorkspaceGuildId = ConjureUtils.resolveConjureWorkspaceGuildId(VibegrationsChatStore);
        const tmp8Result2 = ConjureUtils;
      }
      const obj4 = {
        projectId,
        guildId: conjureWorkspaceGuildId,
        title,
        body: body.replace(re22, (arg0, arg1) => {
          let combined = arg0;
          user = user.getUser(arg1);
          if (null != user) {
            const _HermesInternal = HermesInternal;
            combined = "@" + UserUtilsDefault.getName(user);
          }
          return combined;
        }),
        route: null,
        sound: null,
        volume: null,
      };
      let CHANNELResult = null;
      if (null != conjureWorkspaceGuildId) {
        CHANNELResult = closure_1_11.CHANNEL(conjureWorkspaceGuildId, StaticChannelRoute.CONJURE, projectId);
      }
      obj4.route = CHANNELResult;
      let tmp27;
      if (!isSoundDisabledResult) {
        tmp27 = bit_message1;
      }
      obj4.sound = tmp27;
      obj4.volume = volume;
      const result1 = ConjurePlatformUtilsDefault.presentTurnNotification(obj4);
      const tmpResult2 = ConjurePlatformUtilsDefault;
    }
    obj3 = conjureProjectMute;
  }
}
const Constants = fn(1085);
({ Routes: closure_11, StatusTypes: closure_12 } = Constants);
const StaticChannelRoute = fn(2072).StaticChannelRoute;
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
const VibegrationsChatStore = "VibegrationsChatStore";
let c21 = 0.4;
const re22 = /<@!?(\d+)>/g;
const prototype1 = new prototype();
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/ConjureTurnNotificationManager.tsx");

export default prototype1;
