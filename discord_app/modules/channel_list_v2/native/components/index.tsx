// === Module 12534: renderChannelBadge ===

// Module 12534 (renderChannelBadge)
import components_ChannelBadge from "components/ChannelBadge" /* 12535 */;
import VocalChannelJoinButtonDefault from "VocalChannelJoinButton" /* 12536 */;
import Divider from "Divider" /* 12538 */;
import NewBadgeDefault from "NewBadge" /* 12539 */;
import GuildSearchAndInviteDefault from "GuildSearchAndInvite" /* 12540 */;
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