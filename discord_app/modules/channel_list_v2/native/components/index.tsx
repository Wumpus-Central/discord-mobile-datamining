// === Module 13147: renderChannelBadge ===

// Module 13147 (renderChannelBadge)
import components_ChannelBadge from "components/ChannelBadge" /* 13148 */;
import VocalChannelJoinButtonDefault from "VocalChannelJoinButton" /* 13149 */;
import Divider from "Divider" /* 13151 */;
import NewBadgeDefault from "NewBadge" /* 13152 */;
import GuildSearchAndInviteDefault from "GuildSearchAndInvite" /* 13153 */;
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