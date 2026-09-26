// === Module 11774: renderChannelBadge ===

// Module 11774 (renderChannelBadge)
import components_ChannelBadge from "components/ChannelBadge" /* 11775 */;
import VocalChannelJoinButtonDefault from "VocalChannelJoinButton" /* 11776 */;
import Divider from "Divider" /* 11778 */;
import NewBadgeDefault from "NewBadge" /* 11779 */;
import GuildSearchAndInviteDefault from "GuildSearchAndInvite" /* 11780 */;
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