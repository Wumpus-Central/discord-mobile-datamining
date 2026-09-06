// === Module 9821: CreateInviteModalStore ===

// Module 9821 (CreateInviteModalStore)
import _modDef38 from "module_38" /* 38 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import InstantInviteUtilsDefault from "InstantInviteUtils" /* 9822 */;
import DefaultInviteExpirationExperiments from "DefaultInviteExpirationExperiments" /* 9824 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import InstantInviteStore from "InstantInviteStore" /* 8379 */;

require = fn;
function updateWithLatestInvite(channelId, arg1) {
  ({ targetType, targetUserId, targetApplicationId } = arg1);
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const guild = GuildStore.getGuild(guild_id);
  let obj = DefaultInviteExpirationExperiments;
  let maxAge = obj.getDefaultInviteExpiration({ guild });
  const invite = InstantInviteStore.getInvite(channelId, { targetType, targetUserId, targetApplicationId });
  _null = invite;
  obj = { channelId, maxAge: null, maxUses: null, temporary: null, flags: null, targetType: null, targetUserId: null, targetApplicationId: null, roleIds: null };
  if (null != invite) {
    maxAge = _null.maxAge;
  }
  obj.maxAge = maxAge;
  if (null != _null) {
    let maxUses = _null.maxUses;
  } else {
    maxUses = value;
  }
  obj.maxUses = maxUses;
  let temporary = null != _null;
  if (temporary) {
    temporary = _null.temporary;
  }
  obj.temporary = temporary;
  let num = 0;
  if (null != _null) {
    num = _null.flags;
  }
  obj.flags = num;
  obj.targetType = targetType;
  obj.targetUserId = targetUserId;
  obj.targetApplicationId = targetApplicationId;
  let mapped;
  if (_null != null) {
    const roles = _null.roles;
    if (roles != null) {
      mapped = roles.map((id) => id.id);
    }
  }
  if (mapped == null) {
    mapped = [];
  }
  obj.roleIds = mapped;
  closure_6 = obj;
  closure_7 = obj;
}
const FormStates = fn(1074).FormStates;
InstantInviteUtilsDefault.INVITE_OPTIONS_UNLIMITED.value;
let CLOSED = FormStates.CLOSED;
let c15 = false;
const Store = initializeDefault.Store;
class CreateInviteModalStore extends Store {
}
const prototype = CreateInviteModalStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore, GuildStore, InstantInviteStore);
};
prototype["init"] = function init() {
  this.waitFor(InstantInviteStore);
};
prototype["isOpen"] = function isOpen() {
  return CLOSED !== FormStates.CLOSED;
};
prototype["isSubmitting"] = function isSubmitting() {
  return c15;
};
prototype["getGuildId"] = function getGuildId() {
  return guildId;
};
prototype["getError"] = function getError() {
  return message;
};
prototype["getInvite"] = function getInvite() {
  return c5;
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
    return c8;
  },
  set: undefined
});
CreateInviteModalStore.displayName = "CreateInviteModalStore";
const createInviteModalStore = new CreateInviteModalStore(DispatcherDefault, {
  CREATE_INVITE_MODAL_INIT: function handleInit(guildId) {
    guildId = guildId.guildId;
    message = null;
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
    CLOSED = FormStates.OPEN;
    onClose = onClose.onClose;
    c8 = onClose;
    guildId = onClose.guildId;
    message = null;
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
    if (null != closure_7) {
      const obj = {};
      const merged = Object.assign(closure_7);
      const merged1 = Object.assign(settings);
      closure_7 = obj;
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
    message = null;
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
const size = fn(2);
const result = size.fileFinishedImporting("stores/CreateInviteModalStore.tsx");

export default createInviteModalStore;