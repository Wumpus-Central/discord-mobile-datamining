// === Module 11760: renderChannelBadge ===

// Module 11760 (renderChannelBadge)
import components_ChannelBadge from "components/ChannelBadge" /* 11761 */;
import VocalChannelJoinButtonDefault from "VocalChannelJoinButton" /* 11762 */;
import Divider from "Divider" /* 11764 */;
import NewBadgeDefault from "NewBadge" /* 11765 */;
import GuildSearchAndInviteDefault from "GuildSearchAndInvite" /* 11766 */;
import size from "module_2" /* 2 */;

const DividerDefault = Divider;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/index.tsx");

export const renderChannelBadge = components_ChannelBadge.renderChannelBadge;
export const VocalChannelJoinButton = VocalChannelJoinButtonDefault;
export const Divider = DividerDefault;
export const DIVIDER_MARGIN_BOTTOM = Divider.DIVIDER_MARGIN_BOTTOM;
export const DIVIDER_MARGIN_TOP = Divider.DIVIDER_MARGIN_TOP;
export const NewBadge = NewBadgeDefault;
export const GuildSearchAndInvite = GuildSearchAndInviteDefault;