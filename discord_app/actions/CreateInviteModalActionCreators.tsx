// === Module 8664: ? ===

// Module 8664
import updateWithLatestInvite from "updateWithLatestInvite";
import { AnalyticEvents } from "ME";

const require = arg1;
const result = require("dispatcher").fileFinishedImporting("actions/CreateInviteModalActionCreators.tsx");

export default {
  init(guildId, channelId, location) {
    let skipCreateInvite;
    let targetApplicationId;
    let targetType;
    let targetUserId;
    let str = location.location;
    if (str === undefined) {
      str = "";
    }
    ({ targetType, targetUserId, targetApplicationId, skipCreateInvite } = location);
    let obj = importDefault(709);
    obj = { type: "CREATE_INVITE_MODAL_INIT", guildId, channelId, targetType, targetUserId, targetApplicationId };
    obj.dispatch(obj);
    if (!skipCreateInvite) {
      const self = this;
      const invite = this.createInvite(str, true);
    }
  },
  openSettings(guildId, channelId, source, onClose) {
    const inviteSettings = store.getInviteSettings();
    let obj = importDefault(709);
    obj = { type: "CREATE_INVITE_MODAL_OPEN" };
    const merged = Object.assign(inviteSettings);
    obj.guildId = guildId;
    obj.channelId = channelId;
    obj.onClose = onClose;
    obj.dispatch(obj);
    obj = { type: "Instant Invite", source };
    importDefault(698).track(AnalyticEvents.OPEN_MODAL, obj);
  },
  updateSettings(settings) {
    let obj = importDefault(709);
    obj = { type: "CREATE_INVITE_MODAL_UPDATE_SETTINGS", settings };
    obj.dispatch(obj);
  },
  resetSettings() {
    importDefault(709).dispatch({ type: "CREATE_INVITE_MODAL_RESET_SETTINGS" });
  },
  createInvite(arg0, arg1) {
    let flags;
    let maxAge;
    let maxUses;
    let roleIds;
    let targetApplicationId;
    let targetType;
    let targetUserId;
    let temporary;
    let obj = store;
    const pendingSettings = store.getPendingSettings();
    if (null != pendingSettings) {
      importDefault(709).dispatch({ type: "CREATE_INVITE_MODAL_GENERATE_INVITE" });
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
      const obj4 = importDefault(709);
      const tmp7 = importDefault;
      obj = { temporary: null, validate: null, max_age: null, max_uses: null, target_type: null, target_user_id: null, target_application_id: null, flags: null, role_ids: null };
      obj[0] = temporary;
      obj[1] = code;
      const _parseInt = parseInt;
      obj[2] = parseInt(maxAge, 10);
      const _parseInt2 = parseInt;
      obj[3] = parseInt(maxUses, 10);
      obj[4] = targetType;
      obj[5] = targetUserId;
      obj[6] = targetApplicationId;
      obj[7] = flags;
      obj[8] = roleIds;
      const invite1 = importDefault(7667).createInvite(channelId, obj, arg0);
      invite1.then(() => {
        let obj = outer1_1(outer1_2[2]);
        obj = { type: "CREATE_INVITE_MODAL_GENERATE_INVITE_SUCCESS", channelId };
        obj.dispatch(obj);
      }, (message) => {
        const intl = channelId(1236).intl;
        message = intl.string(channelId(1236).t.WB1ip6);
        message = undefined;
        if (message != null) {
          message = message.message;
        }
        if (null != message) {
          message = message.message;
        }
        callback(709).dispatch({ type: "CREATE_INVITE_MODAL_GENERATE_INVITE_FAILURE", message });
      });
      const tmp7Result = importDefault(7667);
    }
  },
  close() {
    const onClose = store.onClose;
    importDefault(709).dispatch({ type: "CREATE_INVITE_MODAL_CLOSE" });
    if (onClose != null) {
      onClose();
    }
  }
};