// discord_app/modules/messages/useReactionPermissions.tsx
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import LurkingStore from "../lurker_mode/LurkingStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildVerificationStore from "../../stores/GuildVerificationStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = fn;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/useReactionPermissions.tsx");

export default function useReactionPermissions(guild_id) {
  _require = guild_id;
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  let obj = require("initialize");
  const items = [GuildVerificationStore];
  const items1 = [guild_id];
  stateFromStores = obj.useStateFromStores(
    items,
    () => {
      let canChatInGuildResult = null == guild_id;
      if (!canChatInGuildResult) {
        canChatInGuildResult = GuildVerificationStore.canChatInGuild(tmp);
      }
      return canChatInGuildResult;
    },
    items1,
  );
  const items2 = [LurkingStore];
  const items3 = [guild_id];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items2,
    () => {
      let isLurkingResult = null != guild_id;
      if (isLurkingResult) {
        isLurkingResult = LurkingStore.isLurking(tmp);
      }
      return isLurkingResult;
    },
    items3,
  );
  const obj2 = require("initialize");
  const tmp2 = stateFromStores;
  const items4 = [GuildMemberStore];
  const items5 = [guild_id];
  const stateFromStores2 = require("initialize").useStateFromStores(
    items4,
    () => {
      let isCurrentUserGuestResult = null != guild_id;
      if (isCurrentUserGuestResult) {
        isCurrentUserGuestResult = GuildMemberStore.isCurrentUserGuest(tmp);
      }
      return isCurrentUserGuestResult;
    },
    items5,
  );
  const obj3 = require("initialize");
  const items6 = [PermissionStore];
  const items7 = [stateFromStores, guild_id];
  const stateFromStores3 = require("initialize").useStateFromStores(
    items6,
    () => {
      let canResult = stateFromStores;
      if (stateFromStores) {
        canResult = PermissionStore.can(Permissions.ADD_REACTIONS, closure_0);
      }
      return canResult;
    },
    items7,
  );
  const obj4 = require("initialize");
  const currentUserAutomodQuaratinedProfile =
    require("AutomodPermissionUtils").useCurrentUserAutomodQuaratinedProfile(guild_id);
  const obj5 = require("AutomodPermissionUtils");
  require("ThreadHooks");
  if (null == guild_id) {
    obj = {
      disableReactionReads: true,
      disableReactionCreates: true,
      disableReactionUpdates: true,
      isLurking: false,
      isGuest: false,
      isPendingMember: false,
    };
  } else {
    obj = {};
    obj = {
      channel: guild_id,
      canChat: stateFromStores,
      renderReactions: true,
      canAddNewReactions: stateFromStores3,
      isLurking: stateFromStores1,
      communicationDisabled: _slicedToArray(obj6.useCurrentUserCommunicationDisabled(guild_id), 2)[1],
      isActiveChannelOrUnarchivableThread: tmp9,
      isAutomodQuarantined: currentUserAutomodQuaratinedProfile,
    };
    const merged = Object.assign(guild_id(tmp2[10])(obj));
    obj.isLurking = stateFromStores1;
    obj.isGuest = stateFromStores2;
    obj.isPendingMember = false;
  }
  return obj;
}
