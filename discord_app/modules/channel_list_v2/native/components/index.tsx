// === Module 14056: renderChannelBadge ===

// Module 14056 (renderChannelBadge)
import components_ChannelBadge from "components/ChannelBadge" /* 14057 */;
import VocalChannelJoinButtonDefault from "VocalChannelJoinButton" /* 14058 */;
import Divider from "Divider" /* 14060 */;
import NewBadgeDefault from "NewBadge" /* 14061 */;
import GuildSearchAndInviteDefault from "GuildSearchAndInvite" /* 14062 */;
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