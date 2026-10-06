// === Module 9495: CreateInviteModalStore ===

// Module 9495 (CreateInviteModalStore)
import _modDef38 from "module_38" /* 38 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import InstantInviteUtilsDefault from "InstantInviteUtils" /* 9496 */;
import DefaultInviteExpirationExperiments from "DefaultInviteExpirationExperiments" /* 9498 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import InstantInviteStore from "InstantInviteStore" /* 8065 */;
import size from "module_2" /* 2 */;

let c8, closure_6, closure_7, invite;

function updateWithLatestInvite(channelId, arg1) {
  let mapped;
  let maxUses;
  let num;
  let targetApplicationId;
  let targetType;
  let targetUserId;
  let temporary;
  ({ targetType, targetUserId, targetApplicationId } = arg1);
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  const getGuild = GuildStore.getGuild;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const guild = getGuild(guild_id);
  const obj = DefaultInviteExpirationExperiments;
  let maxAge = obj.getDefaultInviteExpiration({ guild });
  invite = InstantInviteStore.getInvite(channelId, { targetType, targetUserId, targetApplicationId });
  const obj2 = { channelId, maxAge, maxUses, temporary, flags: num, targetType, targetUserId, targetApplicationId, roleIds: mapped };
  if (null != invite) {
    maxAge = invite.maxAge;
  }
  if (null != invite) {
    maxUses = invite.maxUses;
  } else {
    maxUses = map1;
  }
  temporary = null != invite && invite.temporary;
  num = 0;
  if (null != invite) {
    num = invite.flags;
  }
  mapped = undefined;
  if (invite != null) {
    const roles = invite.roles;
    if (roles != null) {
      mapped = roles.map((id) => id.id);
    }
  }
  if (mapped == null) {
    mapped = [];
  }
  closure_6 = obj2;
  closure_7 = obj2;
}
const FormStates = Constants.FormStates;
const map1 = InstantInviteUtilsDefault.INVITE_OPTIONS_UNLIMITED.value;
let CLOSED = FormStates.CLOSED;
let c15 = false;
const Store = get_initializedDefault.Store;
class CreateInviteModalStore extends Store {
  initialize() {
    this.waitFor(ChannelStore, GuildStore, InstantInviteStore);
  }
  init() {
    this.waitFor(InstantInviteStore);
  }
  isOpen() {
    return CLOSED !== FormStates.CLOSED;
  }
  isSubmitting() {
    return c15;
  }
  getGuildId() {
    return guildId;
  }
  getError() {
    return message;
  }
  getInvite() {
    return invite;
  }
  getInviteSettings() {
    return closure_6;
  }
  getPendingSettings() {
    return closure_7;
  }
  getProps() {
    return {};
  }
}
Object.defineProperty(CreateInviteModalStore.prototype, "onClose", {
  get: function onClose() {
    return c8;
  },
  set: undefined
});
CreateInviteModalStore.displayName = "CreateInviteModalStore";
let obj = {
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
    channelId = channelId.channelId;
    _modDef38(null != closure_6, "No invite settings for generated invite");
    const obj = { targetType: closure_6.targetType, targetUserId: closure_6.targetUserId, targetApplicationId: closure_6.targetApplicationId };
    updateWithLatestInvite(channelId, obj);
  },
  CREATE_INVITE_MODAL_GENERATE_INVITE_FAILURE: function handleGenerateInviteFailure(message) {
    invite = null;
    c15 = false;
    message = message.message;
  },
  CREATE_INVITE_MODAL_CLOSE: function handleModalClose() {
    CLOSED = FormStates.CLOSED;
    c8 = undefined;
  }
};
const createInviteModalStore = new CreateInviteModalStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/CreateInviteModalStore.tsx");

export default createInviteModalStore;