// === Module 12291: renderChannelBadge ===

// Module 12291 (renderChannelBadge)
import components_ChannelBadge from "components/ChannelBadge" /* 12292 */;
import VocalChannelJoinButtonDefault from "VocalChannelJoinButton" /* 12293 */;
import Divider from "Divider" /* 12295 */;
import NewBadgeDefault from "NewBadge" /* 12296 */;
import GuildSearchAndInviteDefault from "GuildSearchAndInvite" /* 12297 */;
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