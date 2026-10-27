// === Module 13192: renderChannelBadge ===

// Module 13192 (renderChannelBadge)
import components_ChannelBadge from "components/ChannelBadge" /* 13193 */;
import VocalChannelJoinButtonDefault from "VocalChannelJoinButton" /* 13194 */;
import Divider from "Divider" /* 13196 */;
import NewBadgeDefault from "NewBadge" /* 13197 */;
import GuildSearchAndInviteDefault from "GuildSearchAndInvite" /* 13198 */;
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