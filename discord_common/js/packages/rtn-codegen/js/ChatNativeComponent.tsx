// discord_common/js/packages/rtn-codegen/js/ChatNativeComponent.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import result2 from "../../../../../_runtime/00026_result.js";
import renderElement from "../../../../../_runtime/00114_renderElement.js";
import weakSet from "../../../../../_runtime/00106_weakSet.js";
import setRuntimeConfigProvider from "../../../../../_runtime/00065_setRuntimeConfigProvider.js";

let obj = { inverted: true, animateEmoji: true, HACK_fixModalInteraction: true, alwaysRespectKeyboard: true, roleStyle: true, adjustContentOffsetWithBounds: true, keyboardBackgroundColor: result2.colorAttribute, channelId: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onChatScrollPosition: true, onTapImage: true, onTapChannel: true, onLongPressChannel: true, onTapAttachmentLink: true, onLongPressAttachmentLink: true, onTapCall: true, onTapMention: true, onTapCommandMention: true, onLongPressCommandMention: true, onTapGameMention: true, onTapLink: true, onLongPressLink: true, onTapReaction: true, onTapMessage: true, onDoubleTapMessage: true, onLongPressReaction: true, onLongPressMessage: true, onInitiateReply: true, onInitiateThread: true, onInitiateEdit: true, onTapSeparator: true, onTapInviteEmbed: true, onTapInviteEmbedAccept: true, onTapJoinActivity: true, onTapJoinRichPresence: true, onPressKey: true, onTapGiftCodeEmbed: true, onTapGiftCodeAccept: true, onTapReferralRedeem: true, onGiftIntentCardViewed: true, onTapGiftIntentPrimaryCta: true, onTapGiftIntentSecondaryCta: true, onTapAvatar: true, onTapSticker: true, onLongPressSticker: true, onLongPressAvatar: true, onTapUsername: true, onLongPressUsername: true, onTapMessageReply: true, onTapSummary: true, onTapSummaryJump: true, onTapEmoji: true, onTapThreadEmbed: true, onTapButtonActionComponent: true, onTapSelectActionComponent: true, onTapWelcomeReply: true, onTapInviteToSpeak: true, onTapTimestamp: true, onTapInlineCode: true, onTapRoleIcon: true, onTapVoiceChannelBadge: true, onTapGameIcon: true, onTapSuppressNotificationsIcon: true, onTapConnectionsRoleTag: true, onTapTimeoutIcon: true, onTapAutoModerationActions: true, onTapAutoModerationFeedback: true, onTapSeeMore: true, onTapTag: true, onTapCancelUploadItem: true, onTapFollowForumPost: true, onTapShareForumPost: true, onTapReactionOverflow: true, onTapCopyText: true, onTapOpTag: true, onMediaAttachmentPlaybackEnded: true, onMediaAttachmentPlaybackStarted: true, onVoiceMessagePlaybackFailed: true, onTapNavBar: true, onTapShowAltText: true, onTapTableView: true, onTapPostPreviewEmbed: true, onTapDismissMediaPostSharePrompt: true, onTapChannelPromptButton: true, onTapObscuredMediaLearnMore: true, onTapObscuredMediaToggle: true, onTapSafetyPolicyNoticeEmbed: true, onTapSafetySystemNotificationCta: true, onTapPollAnswer: true, onTapPollSubmitVote: true, onTapPollAction: true, onLongPressPollImage: true, onTapCtaButton: true, onFirstLayout: true, onMessageVisibilityChanged: true, onCompleteFirstLayout: true, onMessageAccessibilityAction: true, onMediaPlayFinishedAnalytics: true, onTapForwardFooter: true, onTapInlineForward: true, onTapClanTagChiplet: true, onTapContentInventoryEntryEmbed: true, onTapCheckpointCard: true, onTapSoundmoji: true, onTapAppMessageEmbed: true, onTapPreviewSharedClientTheme: true, onSharedClientThemeViewed: true }));
obj[2] = obj;
obj = {
  scrollTo(arg0, arg1, arg2, arg3, arg4) {
    const items = [arg1, arg2, arg3, arg4];
    renderElement.dispatchCommand(arg0, "scrollTo", items);
  },
  scrollToBottom(arg0, arg1) {
    const items = [arg1];
    renderElement.dispatchCommand(arg0, "scrollToBottom", items);
  },
  scrollIntoView(arg0, arg1, arg2, arg3) {
    const items = [arg1, arg2, arg3];
    renderElement.dispatchCommand(arg0, "scrollIntoView", items);
  },
  updateRows(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    const items = [arg1, arg2, arg3, arg4, arg5, arg6, arg7];
    renderElement.dispatchCommand(arg0, "updateRows", items);
  },
  clearRows(arg0, arg1) {
    const items = [arg1];
    renderElement.dispatchCommand(arg0, "clearRows", items);
  },
  fadeIn(arg0) {
    renderElement.dispatchCommand(arg0, "fadeIn", []);
  }
};
const value = setRuntimeConfigProvider.get("DCDChat", () => obj);
const result = obj132.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ChatNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;