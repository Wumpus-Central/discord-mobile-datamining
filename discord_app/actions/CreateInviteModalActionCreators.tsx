// === Module 9826: CreateInviteModalActionCreators ===

// Module 9826 (CreateInviteModalActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8378 */;
import CreateInviteModalStore from "CreateInviteModalStore" /* 9821 */;

const require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("actions/CreateInviteModalActionCreators.tsx");

export default {
  init(guildId, channelId, location) {
    let str = location.location;
    if (str === undefined) {
      str = "";
    }
    ({ targetType, targetUserId, targetApplicationId, skipCreateInvite } = location);
    const obj = { type: "CREATE_INVITE_MODAL_INIT", guildId, channelId, targetType, targetUserId, targetApplicationId };
    obj.dispatch(obj);
    if (!skipCreateInvite) {
      const self = this;
      const invite = this.createInvite(str, true);
    }
  },
  openSettings(guildId, channelId, source, onClose) {
    const inviteSettings = CreateInviteModalStore.getInviteSettings();
    let obj = { type: "CREATE_INVITE_MODAL_OPEN" };
    const merged = Object.assign(inviteSettings);
    obj.guildId = guildId;
    obj.channelId = channelId;
    obj.onClose = onClose;
    obj.dispatch(obj);
    obj = { type: "Instant Invite", source };
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, obj);
  },
  updateSettings(settings) {
    const obj = { type: "CREATE_INVITE_MODAL_UPDATE_SETTINGS", settings };
    obj.dispatch(obj);
  },
  resetSettings() {
    DispatcherDefault.dispatch({ type: "CREATE_INVITE_MODAL_RESET_SETTINGS" });
  },
  createInvite(arg0, arg1) {
    let obj = CreateInviteModalStore;
    const pendingSettings = CreateInviteModalStore.getPendingSettings();
    if (null != pendingSettings) {
      DispatcherDefault.dispatch({ type: "CREATE_INVITE_MODAL_GENERATE_INVITE" });
      const channelId = pendingSettings.channelId;
      ({ maxAge, maxUses, temporary, targetType, targetUserId, targetApplicationId, flags, roleIds } = pendingSettings);
      const invite = obj.getInvite();
      let code = null;
      if (arg1) {
        code = null;
        if (null != invite) {
          code = invite.code;
        }
      }
      obj = { temporary, validate: code, max_age: null, max_uses: null, target_type: null, target_user_id: null, target_application_id: null, flags: null, role_ids: null };
      const _parseInt = parseInt;
      obj.max_age = parseInt(maxAge, 10);
      const _parseInt2 = parseInt;
      obj.max_uses = parseInt(maxUses, 10);
      obj.target_type = targetType;
      obj.target_user_id = targetUserId;
      obj.target_application_id = targetApplicationId;
      obj.flags = flags;
      obj.role_ids = roleIds;
      const invite1 = InstantInviteActionCreatorsDefault.createInvite(channelId, obj, arg0);
      invite1.then(() => {
        const obj = { type: "CREATE_INVITE_MODAL_GENERATE_INVITE_SUCCESS", channelId };
        obj.dispatch(obj);
      }, (message) => {
        const intl = channelId(1114).intl;
        intl.string(channelId(1114).t.WB1ip6);
        message = undefined;
        if (message != null) {
          message = message.message;
        }
        if (null != message) {
          message = message.message;
        }
        DispatcherDefault.dispatch({ type: "CREATE_INVITE_MODAL_GENERATE_INVITE_FAILURE", message });
      });
      const tmp7Result = InstantInviteActionCreatorsDefault;
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