// === Module 8689: CreateInviteModalActionCreators ===

// Module 8689 (CreateInviteModalActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8496 */;
import CreateInviteModalStore from "CreateInviteModalStore" /* 8683 */;

const require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("actions/CreateInviteModalActionCreators.tsx");

export default {
  init(guildId, channelId, location) {
    let str = location.location;
    if (str === undefined) {
      str = "";
    }
    ({ targetType, targetUserId, targetApplicationId, skipCreateInvite } = location);
    DispatcherDefault.dispatch({ type: "CREATE_INVITE_MODAL_INIT", guildId, channelId, targetType, targetUserId, targetApplicationId });
    if (!skipCreateInvite) {
      const self = this;
      const invite = this.createInvite(str, true);
    }
  },
  openSettings(guildId, channelId, source, onClose) {
    const inviteSettings = CreateInviteModalStore.getInviteSettings();
    const obj2 = { type: "CREATE_INVITE_MODAL_OPEN" };
    const merged = Object.assign(inviteSettings);
    obj2.guildId = guildId;
    obj2.channelId = channelId;
    obj2.onClose = onClose;
    DispatcherDefault.dispatch(obj2);
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, { type: "Instant Invite", source });
  },
  updateSettings(settings) {
    DispatcherDefault.dispatch({ type: "CREATE_INVITE_MODAL_UPDATE_SETTINGS", settings });
  },
  resetSettings() {
    DispatcherDefault.dispatch({ type: "CREATE_INVITE_MODAL_RESET_SETTINGS" });
  },
  createInvite(arg0, arg1) {
    const pendingSettings = CreateInviteModalStore.getPendingSettings();
    if (null != pendingSettings) {
      DispatcherDefault.dispatch({ type: "CREATE_INVITE_MODAL_GENERATE_INVITE" });
      const channelId = pendingSettings.channelId;
      ({ maxAge, maxUses, temporary, targetType, targetUserId, targetApplicationId, flags, roleIds } = pendingSettings);
      const invite = CreateInviteModalStore.getInvite();
      let code = null;
      if (arg1) {
        code = null;
        if (null != invite) {
          code = invite.code;
        }
      }
      const obj2 = { temporary, validate: code, max_age: maxAge, max_uses: maxUses, target_type: targetType, target_user_id: targetUserId, target_application_id: targetApplicationId, flags, role_ids: roleIds };
      const invite1 = InstantInviteActionCreatorsDefault.createInvite(channelId, obj2, arg0);
      invite1.then(() => {
        DispatcherDefault.dispatch({ type: "CREATE_INVITE_MODAL_GENERATE_INVITE_SUCCESS", channelId });
      }, (message) => {
        const intl = channelId(1126).intl;
        message = intl.string(channelId(1126).t.WB1ip6);
        let message1;
        if (message != null) {
          message1 = message.message;
        }
        if (null != message1) {
          message = message.message;
        }
        DispatcherDefault.dispatch({ type: "CREATE_INVITE_MODAL_GENERATE_INVITE_FAILURE", message });
      });
      const tmp6Result = InstantInviteActionCreatorsDefault;
    }
  },
  close() {
    const onClose = CreateInviteModalStore.onClose;
    DispatcherDefault.dispatch({ type: "CREATE_INVITE_MODAL_CLOSE" });
    if (onClose != null) {
      onClose();
    }
  }
};