// === Module 19568: useVoicePanelDockContextMenuItems ===

// Module 19568 (useVoicePanelDockContextMenuItems)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import util from "util" /* 1113 */;
import _modDef3184 from "module_3184" /* 3184 */;
import UserPlusIcon from "UserPlusIcon" /* 5845 */;
import SettingsIcon from "SettingsIcon" /* 7633 */;
import ChatIcon from "ChatIcon" /* 8714 */;
import VideoIcon2 from "VideoIcon" /* 11172 */;
import ActivitiesIcon from "ActivitiesIcon" /* 12270 */;
import VideoSlashIcon from "VideoSlashIcon" /* 15136 */;
import trackVoicePanelTabOpened from "trackVoicePanelTabOpened" /* 19573 */;
import MobilePhoneXIcon from "MobilePhoneXIcon" /* 19574 */;
import MobilePhoneShareIcon2 from "MobilePhoneShareIcon" /* 19576 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ComponentActions = fn(1072).ComponentActions;
const VoicePanelDockContextMenu = "VoicePanelDockContextMenu";
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/useVoicePanelDockContextMenuItems.tsx");

export default function useVoicePanelDockContextMenuItems(id, arg1) {
  _require = arg1;
  guildId = canInviteMembers.useContext(guildId(id[2])).guildId;
  id = id.id;
  canInviteMembers = require("useCanInviteMembers").useCanInviteMembers(id);
  const tmp2 = guildId(id[4])(id);
  closure_4 = tmp2;
  let obj = require("useCanInviteMembers");
  const inviteMembersCallback = require("useInviteMembersCallback").useInviteMembersCallback(id);
  const tmp4 = guildId(id[6])(id, inviteMembersCallback, "dock context menu");
  closure_6 = tmp4;
  const tmp5 = guildId(id[7])(id, inviteMembersCallback);
  closure_7 = tmp5;
  const isGuildStageVoiceResult = id.isGuildStageVoice();
  const tmp7 = guildId(id[8])(id);
  closure_9 = tmp7;
  let obj2 = require("useInviteMembersCallback");
  const isStageVideoEnabled = require("StageMediaHooks").useIsStageVideoEnabled(id.guild_id);
  items = [arg1];
  const callback = canInviteMembers.useCallback((arg0) => {
    closure_0();
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.dispatch(arg0, { source: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources.DOCK_CONTEXT_MENU });
  }, items);
  let items1 = [canInviteMembers, tmp2, inviteMembersCallback, , , , , , , , , , , , , , , ];
  ({ isFeatureEnabled: arr2[3], videoBlocked: arr2[4], text: arr2[5], isActive: arr2[6], onPress: arr2[7] } = tmp4);
  ({ videoSupported: arr2[8], videoBlocked: arr2[9], isVideoEnabled: arr2[10], onPress: arr2[11] } = tmp5);
  items1[12] = isGuildStageVoiceResult;
  items1[13] = tmp7;
  items1[14] = isStageVideoEnabled;
  items1[15] = callback;
  items1[16] = guildId;
  items1[17] = id;
  return canInviteMembers.useMemo(() => {
    let tmp = canInviteMembers;
    if (canInviteMembers) {
      tmp = !constants;
    }
    items = [];
    if (tmp) {
      const obj = { label: null, IconComponent: null, action: null };
      const intl = util.intl;
      obj.label = intl.string(util.t["EE+P0H"]);
      obj.IconComponent = UserPlusIcon.UserPlusIcon;
      obj.action = inviteMembersCallback;
      items.push(obj);
    }
    let tmp12 = isGuildStageVoiceResult;
    if (!isGuildStageVoiceResult) {
      const isFeatureEnabled = closure_6.isFeatureEnabled;
      let tmp13 = !isFeatureEnabled;
      if (!isFeatureEnabled) {
        tmp13 = !closure_6.videoBlocked;
      }
      tmp12 = tmp13;
    }
    const items1 = [];
    if (tmp12) {
      let tmp16 = !isGuildStageVoiceResult;
      if (isGuildStageVoiceResult) {
        let tmp17 = closure_9;
        if (closure_9) {
          tmp17 = isStageVideoEnabled;
        }
        tmp16 = tmp17;
      }
      if (tmp16) {
        tmp16 = closure_7.videoSupported || closure_7.videoBlocked;
        const tmp18 = closure_7.videoSupported || closure_7.videoBlocked;
      }
      if (!tmp16) {
        if (!isGuildStageVoiceResult) {
          const obj2 = { label: null, IconComponent: null, action: null };
          const intl3 = util.intl;
          obj2.label = intl3.string(util.t.aeuOoh);
          obj2.IconComponent = ActivitiesIcon.ActivitiesIcon;
          obj2.action = function action() {
            return callback(constants.VOICE_PANEL_OPEN_APP_LAUNCHER_TAB);
          };
          items1.push(obj2);
        }
        const obj3 = { label: null, IconComponent: null, action: null };
        const intl4 = util.intl;
        obj3.label = intl4.string(util.t["5KxXrK"]);
        obj3.IconComponent = ChatIcon.ChatIcon;
        obj3.action = function action() {
          return callback(constants.VOICE_PANEL_OPEN_CHAT_TAB);
        };
        items1.push(obj3);
        const items2 = [items, items1, ];
        const obj4 = { label: null, IconComponent: null, action: null };
        const intl5 = util.intl;
        obj4.label = intl5.string(util.t.NiTd0e);
        obj4.IconComponent = SettingsIcon.SettingsIcon;
        obj4.action = function action() {
          return closure_0(id[22]).openVoicePanelSettingsActionSheet(guildId, closure_1_2);
        };
        const items3 = [obj4];
        items2[2] = items3;
        return items2.filter((item) => item.length > 0);
      } else {
        let onPress2 = closure_7;
        const intl2 = util.intl;
        const string = intl2.string;
        const tmp23 = _modDef3184;
        if (closure_7.isVideoEnabled) {
          let stringResult = string(tmp23.q0eP6a);
        } else {
          stringResult = string(tmp23.aySLZX);
        }
        let obj5 = { label: stringResult, IconComponent: null, action: null };
        let tmp25Result = dependencyMap;
        if (onPress2.isVideoEnabled) {
          tmp25Result = VideoSlashIcon;
          let VideoIcon = tmp25Result.VideoSlashIcon;
        } else {
          VideoIcon = VideoIcon2.VideoIcon;
        }
        obj5.IconComponent = VideoIcon;
        onPress2 = onPress2.onPress;
        obj5.action = onPress2;
        obj5 = items1.push(obj5);
      }
    } else {
      let obj6 = { label: null, IconComponent: null, action: null };
      let onPress = closure_6;
      obj6.label = closure_6.text;
      let tmp14Result = dependencyMap;
      if (closure_6.isActive) {
        tmp14Result = MobilePhoneXIcon;
        let MobilePhoneShareIcon = tmp14Result.MobilePhoneXIcon;
      } else {
        MobilePhoneShareIcon = MobilePhoneShareIcon2.MobilePhoneShareIcon;
      }
      obj6.IconComponent = MobilePhoneShareIcon;
      onPress = onPress.onPress;
      obj6.action = onPress;
      obj6 = items1.push(obj6);
    }
  }, items1);
};