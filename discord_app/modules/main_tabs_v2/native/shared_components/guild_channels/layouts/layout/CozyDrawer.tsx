// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/layouts/layout/CozyDrawer.tsx
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import "deepmerge";
import deepmerge from "../utils/deepmerge.tsx";

let obj = {
  container: null,
  channelName: null,
  messagePreview: null,
  inviteRow: null,
  icon: null,
  unreadBadge: null,
  mentionBadge: null,
  joinVoiceButton: null,
  threadSpine: null,
  happeningNow: null,
  typing: null,
  separator: null,
};
obj = {
  borderRadius: nativeDefault.radii.md,
  padding: { paddingVertical: 4, paddingLeft: 20, paddingRight: 12 },
  paddingPanels: { paddingVertical: 6, paddingLeft: 8, paddingRight: 8 },
  paddingThread: { paddingVertical: 4, paddingLeft: 8, paddingRight: 12 },
};
obj.container = obj;
obj.channelName = { height: 20, text: { variant: "text-md/semibold" } };
obj = {
  text: { variant: "text-xs/medium" },
  messageTypeIconSize: fn(1178).IconSizes.EXTRA_SMALL,
  messageTypeIconSizeNew: "xs",
  height: 18,
  margin: { marginTop: 0 },
};
obj.messagePreview = obj;
obj.inviteRow = { text: { variant: "text-md/semibold" } };
obj.icon = {
  avatarSize: fn(1178).AvatarSizes.NORMAL,
  guildIconSize: fn(5584).GuildIconSizes.NORMAL,
  guildBadgeIconSize: fn(5584).GuildIconSizes.XXSMALL,
  wrapper: { size: 40 },
  channelIcon: { size: 40 },
  margin: { marginRight: 8 },
  emoji: { size: 24, lineHeight: 32 },
};
obj.unreadBadge = { positionThread: { left: -68 } };
obj.mentionBadge = { position: { top: 34 }, positionThread: { top: 27 } };
const obj2 = {
  text: { variant: "text-sm/bold" },
  layout: { paddingVertical: 6, paddingRight: 12, paddingLeft: 12, height: 32 },
  icon: null,
};
const obj1 = {
  avatarSize: fn(1178).AvatarSizes.NORMAL,
  guildIconSize: fn(5584).GuildIconSizes.NORMAL,
  guildBadgeIconSize: fn(5584).GuildIconSizes.XXSMALL,
  wrapper: { size: 40 },
  channelIcon: { size: 40 },
  margin: { marginRight: 8 },
  emoji: { size: 24, lineHeight: 32 },
};
obj2.icon = { size: fn(1178).IconSizes.REFRESH_SMALL_16, gameSize: fn(7172).GameIconSizes.SMALL };
obj.joinVoiceButton = obj2;
const obj4 = { left: 48, startAndEndHeight: 16, transform: null, topOffset: -6 };
const items = [{ translateY: 0 }];
obj4.transform = items;
obj.threadSpine = obj4;
obj.happeningNow = { margin: { marginBottom: 20 } };
obj.typing = {
  position: { top: 12, left: 12 },
  positionThread: { top: 3, left: -17 },
  typingIndicator: { position: { top: 25, left: 11 } },
};
obj.separator = { margin: { marginVertical: 20 } };
const obj3 = { size: fn(1178).IconSizes.REFRESH_SMALL_16, gameSize: fn(7172).GameIconSizes.SMALL };
const obj5 = {
  position: { top: 12, left: 12 },
  positionThread: { top: 3, left: -17 },
  typingIndicator: { position: { top: 25, left: 11 } },
};
const obj6 = { container: { paddingPanels: { paddingVertical: 8 } }, icon: null };
const importDefaultResultResult = deepmerge(fn(10124).CHANNEL_LIST_STYLES_COMPACT, obj);
obj6.icon = { avatarSize: fn(1178).AvatarSizes.REFRESH_MEDIUM_32 };
const obj7 = { avatarSize: fn(1178).AvatarSizes.REFRESH_MEDIUM_32 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/guild_channels/layouts/layout/CozyDrawer.tsx",
);

export const CHANNEL_LIST_STYLES_COZY_DRAWER = importDefaultResultResult;
export const CHANNEL_LIST_STYLES_COZY_DRAWER_SMOL = deepmerge(fn(10124).CHANNEL_LIST_STYLES_COMPACT, obj6);
