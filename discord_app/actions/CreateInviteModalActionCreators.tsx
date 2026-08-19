// === Module 8925: ? ===

// Module 8925
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import generateAcceptInviteOptionsDefault from "generateAcceptInviteOptions" /* 8042 */;
import updateWithLatestInvite from "updateWithLatestInvite" /* 8919 */;
import { AnalyticEvents } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("actions/CreateInviteModalActionCreators.tsx");

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
    const inviteSettings = store.getInviteSettings();
    let obj = { type: "CREATE_INVITE_MODAL_OPEN" };
    const merged = Object.assign(inviteSettings);
    obj.guildId = guildId;
    obj.channelId = channelId;
    obj.onClose = onClose;
    obj.dispatch(obj);
    obj = { type: "Instant Invite", source };
    expandEventPropertiesDefault.track(AnalyticEvents.OPEN_MODAL, obj);
  },
  updateSettings(settings) {
    const obj = { type: "CREATE_INVITE_MODAL_UPDATE_SETTINGS", settings };
    obj.dispatch(obj);
  },
  resetSettings() {
    dispatcherDefault.dispatch({ type: "CREATE_INVITE_MODAL_RESET_SETTINGS" });
  },
  createInvite(arg0, arg1) {
    let obj = store;
    const pendingSettings = store.getPendingSettings();
    if (null != pendingSettings) {
      dispatcherDefault.dispatch({ type: "CREATE_INVITE_MODAL_GENERATE_INVITE" });
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
      const invite1 = generateAcceptInviteOptionsDefault.createInvite(channelId, obj, arg0);
      invite1.then((result) => {
        const obj = { type: "CREATE_INVITE_MODAL_GENERATE_INVITE_SUCCESS", channelId };
        obj.dispatch(obj);
      }, (message) => {
        const intl = channelId(1236).intl;
        intl.string(channelId(1236).t.WB1ip6);
        message = undefined;
        if (message != null) {
          message = message.message;
        }
        if (null != message) {
          message = message.message;
        }
        callback(709).dispatch({ type: "CREATE_INVITE_MODAL_GENERATE_INVITE_FAILURE", message });
        const obj = callback(709);
      });
      const tmp7Result = generateAcceptInviteOptionsDefault;
    }
  },
  close() {
    const onClose = store.onClose;
    dispatcherDefault.dispatch({ type: "CREATE_INVITE_MODAL_CLOSE" });
    if (onClose != null) {
      onClose();
    }
  }
};