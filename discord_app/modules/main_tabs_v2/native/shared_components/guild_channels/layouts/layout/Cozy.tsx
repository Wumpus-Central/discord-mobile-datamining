// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/layouts/layout/Cozy.tsx
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import deepmerge from "../utils/deepmerge.tsx";

let obj = {
  layout: {
    margin: { marginVertical: 2 },
    marginPanels: { marginVertical: 2 },
    marginThread: { marginVertical: 2, marginLeft: 76 },
  },
  container: null,
  category: null,
  voiceUsers: null,
  voiceOrStageSummaryRow: null,
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
  borderRadius: nativeDefault.radii.lg,
  padding: { paddingVertical: 8 },
  paddingPanels: { paddingVertical: 8 },
  paddingThread: { paddingVertical: 6, paddingLeft: 8 },
};
obj.container = obj;
obj.category = { margin: { marginTop: 24 } };
obj.voiceUsers = { height: 40, margin: { marginTop: -4, marginLeft: 80 } };
obj = { size: 32, avatarSize: fn(1178).AvatarSizes.REFRESH_MEDIUM_32 };
obj.voiceOrStageSummaryRow = obj;
obj.messagePreview = {
  text: { variant: "redesign/message-preview/medium" },
  messageTypeIconSize: fn(1178).IconSizes.REFRESH_SMALL_16,
  messageTypeIconSizeNew: "xs",
  height: 18,
  margin: { marginTop: 2 },
};
obj.inviteRow = { text: { variant: "text-md/semibold" } };
const obj1 = {
  text: { variant: "redesign/message-preview/medium" },
  messageTypeIconSize: fn(1178).IconSizes.REFRESH_SMALL_16,
  messageTypeIconSizeNew: "xs",
  height: 18,
  margin: { marginTop: 2 },
};
obj.icon = {
  avatarSize: fn(1178).AvatarSizes.LARGE_48,
  guildIconSize: fn(5584).GuildIconSizes.LARGE,
  guildBadgeIconSize: fn(5584).GuildIconSizes.XSMALL_20,
  wrapper: { size: 48 },
  channelIcon: { size: 24 },
  margin: { marginRight: 12 },
  emoji: { size: 24, lineHeight: 32 },
};
obj.unreadBadge = { positionThread: { left: -68 } };
obj.mentionBadge = { position: { top: 34 }, positionThread: { top: 27 } };
const obj3 = {
  text: { variant: "text-sm/bold" },
  layout: { paddingVertical: 6, paddingRight: 12, paddingLeft: 12, height: 32 },
  icon: null,
};
const obj2 = {
  avatarSize: fn(1178).AvatarSizes.LARGE_48,
  guildIconSize: fn(5584).GuildIconSizes.LARGE,
  guildBadgeIconSize: fn(5584).GuildIconSizes.XSMALL_20,
  wrapper: { size: 48 },
  channelIcon: { size: 24 },
  margin: { marginRight: 12 },
  emoji: { size: 24, lineHeight: 32 },
};
obj3.icon = { size: fn(1178).IconSizes.REFRESH_SMALL_16, gameSize: fn(7172).GameIconSizes.SMALL };
obj.joinVoiceButton = obj3;
const obj5 = { left: 48, startAndEndHeight: 16, transform: null, topOffset: -6 };
const items = [{ translateY: 0 }];
obj5.transform = items;
obj.threadSpine = obj5;
obj.happeningNow = { margin: { marginBottom: 20 } };
obj.typing = {
  position: { top: 12, left: 12 },
  positionThread: { top: 3, left: -17 },
  typingIndicator: { position: { top: 25, left: 11 } },
};
obj.separator = { margin: { marginVertical: 20 } };
const importDefaultResultResult = deepmerge(fn(10124).CHANNEL_LIST_STYLES_COMPACT, obj);
const obj4 = { size: fn(1178).IconSizes.REFRESH_SMALL_16, gameSize: fn(7172).GameIconSizes.SMALL };
const obj6 = {
  position: { top: 12, left: 12 },
  positionThread: { top: 3, left: -17 },
  typingIndicator: { position: { top: 25, left: 11 } },
};
const obj7 = {
  layout: { marginThread: { marginLeft: 0 } },
  container: { paddingThread: { paddingLeft: 20 } },
  unreadBadge: { positionThread: { left: 4 } },
  mentionBadge: { positionThread: { top: 34 } },
};
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/guild_channels/layouts/layout/Cozy.tsx",
);

export const CHANNEL_LIST_STYLES_COZY = importDefaultResultResult;
export const CHANNEL_LIST_STYLES_COZY_LAUNCHPAD = deepmerge(importDefaultResultResult, {
  layout: { marginThread: { marginLeft: 0 } },
  container: { paddingThread: { paddingLeft: 20 } },
  unreadBadge: { positionThread: { left: 4 } },
  mentionBadge: { positionThread: { top: 34 } },
});
