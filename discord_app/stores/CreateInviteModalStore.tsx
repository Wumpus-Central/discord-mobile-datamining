// === Module 9932: updateWithLatestInvite ===

// Module 9932 (updateWithLatestInvite)
import _modDef38 from "module_38" /* 38 */;
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import isGuildMemberDefault from "isGuildMember" /* 9933 */;
import getDefaultInviteExpiration from "getDefaultInviteExpiration" /* 9935 */;
import closure_9 from "ensureGuildLoaded" /* 1386 */;
import closure_10 from "createGuildRecordFromRust" /* 1908 */;
import closure_11 from "map" /* 8665 */;
import { FormStates } from "ME" /* 673 */;

require = arg1;
function updateWithLatestInvite(channelId, arg1) {
  ({ targetType, targetUserId, targetApplicationId } = arg1);
  channel = channel.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  guild = guild.getGuild(guild_id);
  let obj = getDefaultInviteExpiration;
  let maxAge = obj.getDefaultInviteExpiration({ guild });
  invite = invite.getInvite(channelId, { targetType, targetUserId, targetApplicationId });
  obj = { channelId, maxAge: null, maxUses: null, temporary: null, flags: null, targetType: null, targetUserId: null, targetApplicationId: null, roleIds: null };
  if (null != invite) {
    maxAge = invite.maxAge;
  }
  obj[1] = maxAge;
  if (null != invite) {
    let maxUses = invite.maxUses;
  } else {
    maxUses = closure_13;
  }
  obj[2] = maxUses;
  let temporary = null != invite;
  if (temporary) {
    temporary = invite.temporary;
  }
  obj[3] = temporary;
  let num = 0;
  if (null != invite) {
    num = invite.flags;
  }
  obj[4] = num;
  obj[5] = targetType;
  obj[6] = targetUserId;
  obj[7] = targetApplicationId;
  let mapped;
  if (invite != null) {
    const roles = invite.roles;
    if (roles != null) {
      mapped = roles.map((id) => id.id);
    }
  }
  if (mapped == null) {
    mapped = [];
  }
  obj[8] = mapped;
}
isGuildMemberDefault.INVITE_OPTIONS_UNLIMITED.value;
let CLOSED = FormStates.CLOSED;
let c15 = false;
const Store = initializeDefault.Store;
class CreateInviteModalStore extends Store {
}
const prototype = CreateInviteModalStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_9, closure_10, closure_11);
};
prototype["init"] = function init() {
  this.waitFor(closure_11);
};
prototype["isOpen"] = function isOpen() {
  return CLOSED !== FormStates.CLOSED;
};
prototype["isSubmitting"] = function isSubmitting() {
  return c15;
};
prototype["getGuildId"] = function getGuildId() {
  return closure_3;
};
prototype["getError"] = function getError() {
  return closure_4;
};
prototype["getInvite"] = function getInvite() {
  return closure_5;
};
prototype["getInviteSettings"] = function getInviteSettings() {
  return closure_6;
};
prototype["getPendingSettings"] = function getPendingSettings() {
  return closure_7;
};
prototype["getProps"] = function getProps() {
  return {};
};
Object.defineProperty(prototype, "onClose", {
  get: function onClose() {
    return closure_8;
  },
  set: undefined
});
CreateInviteModalStore.displayName = "CreateInviteModalStore";
const createInviteModalStore = new CreateInviteModalStore(dispatcherDefault, {
  CREATE_INVITE_MODAL_INIT: function handleInit(guildId) {
    guildId = guildId.guildId;
    c4 = null;
    let targetType = guildId.targetType;
    if (targetType == null) {
      targetType = null;
    }
    let targetUserId = guildId.targetUserId;
    if (targetUserId == null) {
      targetUserId = null;
    }
    let targetApplicationId = guildId.targetApplicationId;
    if (targetApplicationId == null) {
      targetApplicationId = null;
    }
    updateWithLatestInvite(guildId.channelId, { targetType, targetUserId, targetApplicationId });
  },
  CREATE_INVITE_MODAL_OPEN: function handleModalOpen(onClose) {
    const OPEN = FormStates.OPEN;
    onClose = onClose.onClose;
    const guildId = onClose.guildId;
    c4 = null;
    let targetType = onClose.targetType;
    if (targetType == null) {
      targetType = null;
    }
    let targetUserId = onClose.targetUserId;
    if (targetUserId == null) {
      targetUserId = null;
    }
    let targetApplicationId = onClose.targetApplicationId;
    if (targetApplicationId == null) {
      targetApplicationId = null;
    }
    updateWithLatestInvite(onClose.channelId, { targetType, targetUserId, targetApplicationId });
  },
  CREATE_INVITE_MODAL_UPDATE_SETTINGS: function handleUpdateSettings(settings) {
    settings = settings.settings;
    if (null != obj) {
      obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(settings);
    }
  },
  CREATE_INVITE_MODAL_RESET_SETTINGS: function handleResetSettings() {
    closure_7 = closure_6;
  },
  CREATE_INVITE_MODAL_GENERATE_INVITE: function handleGenerateInvite() {
    closure_6 = closure_7;
    c15 = true;
  },
  CREATE_INVITE_MODAL_GENERATE_INVITE_SUCCESS: function handleGenerateInviteSuccess(channelId) {
    c4 = null;
    c15 = false;
    _modDef38(null != closure_6, "No invite settings for generated invite");
    updateWithLatestInvite(channelId.channelId, { targetType: closure_6.targetType, targetUserId: closure_6.targetUserId, targetApplicationId: closure_6.targetApplicationId });
  },
  CREATE_INVITE_MODAL_GENERATE_INVITE_FAILURE: function handleGenerateInviteFailure(message) {
    c5 = null;
    c15 = false;
    message = message.message;
  },
  CREATE_INVITE_MODAL_CLOSE: function handleModalClose() {
    CLOSED = FormStates.CLOSED;
    c8 = undefined;
  }
});
const result = require("set").fileFinishedImporting("stores/CreateInviteModalStore.tsx");

export default createInviteModalStore;