// discord_app/modules/reactions/canReactToMessage.tsx
import hasFlag from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import isCommunicationDisabled from "../guild_communication_disabled/CommunicationDisabledUtils.tsx";
import _modDef7889 from "canAddNewReactions.tsx";
import closure_3 from "../../stores/GuildMemberStore.tsx";
import closure_4 from "../../stores/GuildVerificationStore.tsx";
import closure_5 from "../../stores/PermissionStore.tsx";
import closure_6 from "../../stores/UserStore.tsx";
import ME from "../../Constants.tsx";

require = arg1;
function canReactToMessageInternal(state, getGuildId, items) {
  [obj, obj2] = items;
  const guildId = getGuildId.getGuildId();
  const currentUser = obj.getCurrentUser();
  let member = null;
  if (null != guildId) {
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    member = null;
    if (null != id) {
      member = obj2.getMember(guildId, currentUser.id);
    }
  }
  let tmp6 = _modDef7889(getGuildId) && !getGuildId.isArchivedLockedThread();
  if (tmp6) {
    tmp6 = state.state !== constants.SEND_FAILED;
  }
  if (tmp6) {
    tmp6 = state.type !== constants2.THREAD_STARTER_MESSAGE;
  }
  if (tmp6) {
    tmp6 = !hasFlag.hasFlag(state.flags, constants3.EPHEMERAL);
    const obj3 = hasFlag;
  }
  if (tmp6) {
    tmp6 = !isCommunicationDisabled.isMemberCommunicationDisabled(member);
    const obj4 = isCommunicationDisabled;
  }
  return tmp6;
}
({ MessageStates: error, MessageTypes: closure_8, MessageFlags: c9 } = ME);
const result = require("set").fileFinishedImporting("modules/reactions/canReactToMessage.tsx");

export const canReactToMessage = function canReactToMessage(message, channel) {
  const items = [closure_6, closure_3, closure_4, closure_5];
  return canReactToMessageInternal(message, channel, items);
};
export const useCanReactToMessage = function useCanReactToMessage(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  let items = [closure_6, closure_3, closure_4, closure_5];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const items = [closure_1_6, closure_1_3, closure_1_4, closure_1_5];
    return closure_1_10(closure_0, closure_1, items);
  });
};
