// discord_app/modules/guild_mod_dash_member_safety/MemberSafetyConstants.tsx
import Constants from "../../Constants.tsx";
import BigFlagUtils from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyConstants.tsx");

export const MemberSafetyPagePermissions = BigFlagUtils.combine(
  Permissions.ADMINISTRATOR,
  Permissions.MANAGE_GUILD,
  Permissions.BAN_MEMBERS,
  Permissions.KICK_MEMBERS,
  Permissions.MODERATE_MEMBERS,
  Permissions.MANAGE_ROLES,
  Permissions.MANAGE_NICKNAMES,
);
