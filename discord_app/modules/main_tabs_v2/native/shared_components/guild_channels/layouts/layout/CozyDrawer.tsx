// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/layouts/layout/CozyDrawer.tsx
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../../../design/void/native.tsx";
import GuildIcon from "../../../../../../guild/native/GuildIcon.tsx";
import GameIcon from "../../../../../../game_detection/native/GameIcon.tsx";
import Compact from "Compact.tsx";
import deepmerge_mod from "../utils/deepmerge.tsx";
import size from "../../../../../../../../_runtime/metro/00002__.js";

let items;
let obj10;
let obj2;
let obj5;
let obj7;
let obj8;
let deepmerge = deepmerge_mod;
const obj = {
  container: obj2,
  channelName: { height: 20, text: { variant: "text-md/semibold" } },
  messagePreview: {
    text: { variant: "text-xs/medium" },
    messageTypeIconSize: native.IconSizes.EXTRA_SMALL,
    messageTypeIconSizeNew: "xs",
    height: 18,
    margin: { marginTop: 0 },
  },
  inviteRow: { text: { variant: "text-md/semibold" } },
  icon: {
    avatarSize: native.AvatarSizes.NORMAL,
    guildIconSize: GuildIcon.GuildIconSizes.NORMAL,
    guildBadgeIconSize: GuildIcon.GuildIconSizes.XXSMALL,
    wrapper: { size: 40 },
    channelIcon: { size: 40 },
    margin: { marginRight: 8 },
    emoji: { size: 24, lineHeight: 32 },
  },
  unreadBadge: { positionThread: { left: -68 } },
  mentionBadge: { position: { top: 34 }, positionThread: { top: 27 } },
  joinVoiceButton: obj5,
  threadSpine: obj7,
  happeningNow: { margin: { marginBottom: 20 } },
  typing: obj8,
  separator: { margin: { marginVertical: 20 } },
};
obj2 = {
  borderRadius: nativeDefault.radii.md,
  padding: { paddingVertical: 4, paddingLeft: 20, paddingRight: 12 },
  paddingPanels: { paddingVertical: 6, paddingLeft: 8, paddingRight: 8 },
  paddingThread: { paddingVertical: 4, paddingLeft: 8, paddingRight: 12 },
};
const CHANNEL_LIST_STYLES_COMPACT = Compact.CHANNEL_LIST_STYLES_COMPACT;
({
  text: { variant: "text-xs/medium" },
  messageTypeIconSize: native.IconSizes.EXTRA_SMALL,
  messageTypeIconSizeNew: "xs",
  height: 18,
  margin: { marginTop: 0 },
});
obj5 = {
  text: { variant: "text-sm/bold" },
  layout: { paddingVertical: 6, paddingRight: 12, paddingLeft: 12, height: 32 },
  icon: { size: native.IconSizes.REFRESH_SMALL_16, gameSize: GameIcon.GameIconSizes.SMALL },
};
({
  avatarSize: native.AvatarSizes.NORMAL,
  guildIconSize: GuildIcon.GuildIconSizes.NORMAL,
  guildBadgeIconSize: GuildIcon.GuildIconSizes.XXSMALL,
  wrapper: { size: 40 },
  channelIcon: { size: 40 },
  margin: { marginRight: 8 },
  emoji: { size: 24, lineHeight: 32 },
});
obj7 = { left: 48, startAndEndHeight: 16, transform: items, topOffset: -6 };
items = [{ translateY: 0 }];
obj8 = {
  position: { top: 12, left: 12 },
  positionThread: { top: 3, left: -17 },
  typingIndicator: { position: { top: 25, left: 11 } },
};
({ size: native.IconSizes.REFRESH_SMALL_16, gameSize: GameIcon.GameIconSizes.SMALL });
const importDefaultResultResult = deepmerge(CHANNEL_LIST_STYLES_COMPACT, obj);
deepmerge = deepmerge_mod;
const obj9 = { container: { paddingPanels: { paddingVertical: 8 } }, icon: obj10 };
obj10 = { avatarSize: native.AvatarSizes.REFRESH_MEDIUM_32 };
const CHANNEL_LIST_STYLES_COMPACT2 = Compact.CHANNEL_LIST_STYLES_COMPACT;
const importDefaultResult1Result = deepmerge(CHANNEL_LIST_STYLES_COMPACT2, obj9);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/guild_channels/layouts/layout/CozyDrawer.tsx",
);

export const CHANNEL_LIST_STYLES_COZY_DRAWER = importDefaultResultResult;
export const CHANNEL_LIST_STYLES_COZY_DRAWER_SMOL = importDefaultResult1Result;
