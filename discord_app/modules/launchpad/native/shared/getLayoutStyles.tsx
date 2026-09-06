// discord_app/modules/launchpad/native/shared/getLayoutStyles.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import GuildIcon from "../../../guild/native/GuildIcon.tsx";
import GameIcon from "../../../game_detection/native/GameIcon.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let voiceOrStageSummaryRow = {
  layout: { margin: { marginLeft: 8, marginRight: 8, marginVertical: 0 } },
  container: null,
  voiceUsers: null,
  voiceOrStageSummaryRow: null,
  channelName: null,
  messagePreview: null,
  timestamp: null,
  inviteRow: null,
  icon: null,
  unreadBadge: null,
  mentionBadge: null,
  category: null,
  typing: null,
  activeThreadCount: null,
  joinVoiceButton: null,
  threadSpine: null,
  happeningNow: null,
  separator: null,
  searchButton: null,
};
voiceOrStageSummaryRow = {
  borderRadius: nativeDefault.radii.md,
  padding: { paddingVertical: 4, paddingLeft: 8, paddingRight: 8 },
};
voiceOrStageSummaryRow.container = voiceOrStageSummaryRow;
voiceOrStageSummaryRow.voiceUsers = { height: 36, margin: { marginLeft: 60 } };
voiceOrStageSummaryRow = { size: 24, avatarSize: native.AvatarSizes.XSMALL };
voiceOrStageSummaryRow.voiceOrStageSummaryRow = voiceOrStageSummaryRow;
voiceOrStageSummaryRow.channelName = { height: 20, text: { variant: "redesign/channel-title/semibold" } };
voiceOrStageSummaryRow.messagePreview = {
  messageTypeIconSize: native.IconSizes.EXTRA_SMALL,
  messageTypeIconSizeNew: "xxs",
  height: 16,
  text: { variant: "text-xs/medium" },
  margin: { marginTop: 0 },
};
voiceOrStageSummaryRow.timestamp = { text: { variant: "text-xs/medium" } };
voiceOrStageSummaryRow.inviteRow = { text: { variant: "text-sm/semibold" } };
const obj1 = {
  messageTypeIconSize: native.IconSizes.EXTRA_SMALL,
  messageTypeIconSizeNew: "xxs",
  height: 16,
  text: { variant: "text-xs/medium" },
  margin: { marginTop: 0 },
};
voiceOrStageSummaryRow.icon = {
  avatarSize: native.AvatarSizes.REFRESH_MEDIUM_32,
  guildIconSize: GuildIcon.GuildIconSizes.SMALL_32,
  guildBadgeIconSize: GuildIcon.GuildIconSizes.XXSMALL_12,
  wrapper: { size: 32 },
  channelIcon: { size: 16 },
  margin: { marginRight: 8 },
  emoji: { size: 16, lineHeight: 24 },
};
voiceOrStageSummaryRow.unreadBadge = { size: 8, position: { left: -12 } };
voiceOrStageSummaryRow.mentionBadge = { position: { top: 28 } };
voiceOrStageSummaryRow.category = { height: 30, margin: { marginTop: 16 }, text: { size: 14 } };
const obj2 = {
  avatarSize: native.AvatarSizes.REFRESH_MEDIUM_32,
  guildIconSize: GuildIcon.GuildIconSizes.SMALL_32,
  guildBadgeIconSize: GuildIcon.GuildIconSizes.XXSMALL_12,
  wrapper: { size: 32 },
  channelIcon: { size: 16 },
  margin: { marginRight: 8 },
  emoji: { size: 16, lineHeight: 24 },
};
voiceOrStageSummaryRow.typing = {
  position: { top: 3, left: 3 },
  typingIndicator: { position: { top: 20, left: 10 } },
  avatarSize: native.AvatarSizes.REFRESH_MEDIUM_32,
};
voiceOrStageSummaryRow.activeThreadCount = { text: { variant: "text-xs/bold" } };
const obj4 = {
  text: { variant: "text-xs/bold" },
  layout: { paddingVertical: 4, paddingRight: 8, paddingLeft: 8, height: 24 },
  icon: null,
};
const obj3 = {
  position: { top: 3, left: 3 },
  typingIndicator: { position: { top: 20, left: 10 } },
  avatarSize: native.AvatarSizes.REFRESH_MEDIUM_32,
};
obj4.icon = { size: native.IconSizes.EXTRA_SMALL, gameSize: GameIcon.GameIconSizes.SIZE_24 };
voiceOrStageSummaryRow.joinVoiceButton = obj4;
const obj6 = { left: 38, startAndEndHeight: 15, transform: null, topOffset: -2 };
const items = [{ translateY: 10 }];
obj6.transform = items;
voiceOrStageSummaryRow.threadSpine = obj6;
voiceOrStageSummaryRow.happeningNow = { margin: { marginTop: 16, marginBottom: 16 } };
voiceOrStageSummaryRow.separator = { margin: { marginVertical: 12 } };
voiceOrStageSummaryRow.searchButton = { margin: { marginHorizontal: 12 } };
const result = size.fileFinishedImporting("modules/launchpad/native/shared/getLayoutStyles.tsx");

export default function getLayoutStyle() {
  return obj;
}
