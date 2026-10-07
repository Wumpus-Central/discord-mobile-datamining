// discord_app/modules/guild_role_subscriptions/edit_state/Contants.tsx
import Constants from "../../../Constants.tsx";
import GuildRoleRecordUtils from "../../../utils/GuildRoleRecordUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = GuildRoleRecordUtils.constructGuildRoleInPlace({
  id: "0",
  guildId: "0",
  name: "",
  mentionable: false,
  managed: false,
  position: 0,
  hoist: false,
  permissions: Constants.Permissions.SEND_MESSAGES,
  color: 0,
  colors: { primary_color: 0, secondary_color: null, tertiary_color: null },
  colorString: "0",
  colorStrings: { primaryColor: "0", secondaryColor: null, tertiaryColor: null },
  icon: null,
  unicodeEmoji: null,
  flags: 0,
  description: null,
  tags: {},
  version: 0,
});
const result1 = size.fileFinishedImporting("modules/guild_role_subscriptions/edit_state/Contants.tsx");

export const DEFAULT_PREVIEW_ROLE = result;
