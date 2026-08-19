// discord_app/modules/guilds_bar/native/GuildsBarConstants.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../../design/tokens/native/useToken.tsx";

const result = obj132.fileFinishedImporting("modules/guilds_bar/native/GuildsBarConstants.tsx");

export const GUILD_ITEM_SIZE = 48;
export const GUILD_LIST_WIDTH = 72;
export const GUILD_ITEM_EMPTY_SRC = { uri: "invalid" };
export const GUILD_ITEM_HIT_SLOP = { top: 4, left: 12, bottom: 4, right: 12 };
export const GUILD_ITEM_BADGE_SIZE = 16;
export const GUILD_ITEM_INSET_LEFT = 12;
export const useGuildWrapperSize = function useGuildWrapperSize() {
  const token = map.useToken(ThemesDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  return token + 2 * map.useToken(ThemesDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN);
};
export const FastListRenderSections = { MESSAGES: 0, [0]: "MESSAGES", FAVORITES: 1, [1]: "FAVORITES", PENDING_JOIN_REQUESTS: 2, [2]: "PENDING_JOIN_REQUESTS", LURKING_GUILDS: 3, [3]: "LURKING_GUILDS", GUEST_GUILDS: 4, [4]: "GUEST_GUILDS", UNREAD_PRIVATE_CHANNELS: 5, [5]: "UNREAD_PRIVATE_CHANNELS", SEPARATOR: 6, [6]: "SEPARATOR", GUILDS: 7, [7]: "GUILDS" };
export const FOLDER_SPRING_PHYSICS = { mass: 0.5, damping: 30, stiffness: 300 };
export const TRANSITION_PHYSICS = { mass: 0.5, damping: 15, stiffness: 120 };