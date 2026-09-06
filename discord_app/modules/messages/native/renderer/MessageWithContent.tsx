// discord_app/modules/messages/native/renderer/MessageWithContent.tsx
import util from "../../../../intl/index.native.tsx";
import createMessageContentDefault from "createMessageContent.tsx";
import GuildAutomodMessageStore from "../../../guild_automod/GuildAutomodMessageStore.tsx";

require = fn;
const RowType = fn(7933).RowType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/MessageWithContent.tsx");

export const generateMessageRowData = function generateMessageRowData(canShowImages, options, theme) {
  ({ message, isEditing, isSystemDM } = canShowImages);
  let tmp = undefined !== isSystemDM;
  ({ changeType, roleStyle, isFirst, separatorBefore, canAddNewReactions, reactionsTheme } = canShowImages);
  if (tmp) {
    tmp = isSystemDM;
  }
  canShowImages = canShowImages.canShowImages;
  ({ renderContentOnly, alwaysShowAddReaction } = canShowImages);
  let tmp3 = undefined !== alwaysShowAddReaction;
  ({ truncation, pushFeedbackType } = canShowImages);
  if (tmp3) {
    tmp3 = alwaysShowAddReaction;
  }
  let overrideBackgroundHighlight = canShowImages.overrideBackgroundHighlight;
  let obj = {
    type: RowType.MESSAGE,
    message: null,
    canAddNewReactions,
    addNewReactionAccessibilityLabel: null,
    reactionsTheme: null,
    highlightLabel: null,
    renderContentOnly: null,
    separatorBefore: null,
    changeType: null,
    truncation: null,
    alwaysShowAddReaction: null,
    backgroundHighlight: null,
    swipeActions: null,
    replyAccessibilityLabel: null,
    forwardAccessibilityLabel: null,
    threadAccessibilityLabel: null,
    forcedTheme: null,
  };
  obj = {
    options,
    message,
    roleStyle,
    isFirst,
    isEditing,
    canShowImages: undefined === canShowImages || canShowImages,
    isSystemDM: tmp,
    isInlineReplyPreview: false,
    pushFeedbackType,
    renderContentOnly,
    showContentInventoryEntryFallbackEmbed: canShowImages.showContentInventoryEntryFallbackEmbed,
  };
  obj.message = createMessageContentDefault(obj);
  const intl = util.intl;
  obj.addNewReactionAccessibilityLabel = intl.string(util.t.lfIHs4);
  obj.reactionsTheme = reactionsTheme;
  const intl2 = util.intl;
  obj.highlightLabel = intl2.string(util.t["IOS/dU"]);
  obj.renderContentOnly = renderContentOnly;
  obj.separatorBefore = separatorBefore;
  obj.changeType = changeType;
  obj.truncation = truncation;
  obj.alwaysShowAddReaction = tmp3;
  if (overrideBackgroundHighlight == null) {
    let tmp4Result = tmp4(8108);
    obj = {
      message,
      theme,
      isEditing,
      isAutomodBlockedMessage: null != GuildAutomodMessageStore.getMessage(message.id),
    };
    overrideBackgroundHighlight = tmp4Result.createBackgroundHighlight(obj);
  }
  obj.backgroundHighlight = overrideBackgroundHighlight;
  tmp4Result = tmp4(8108);
  let canReply = options.enableSwipeActions;
  if (canReply) {
    canReply = canShowImages.canReply;
  }
  obj.swipeActions = tmp4Result.createSwipeActions(canReply, options.enableSwipeActions && canShowImages.canEdit);
  const intl3 = tmp6(1114).intl;
  obj.replyAccessibilityLabel = intl3.string(util.t["5IEsGx"]);
  const intl4 = tmp6(1114).intl;
  obj.forwardAccessibilityLabel = intl4.string(util.t.I3ltXO);
  const intl5 = tmp6(1114).intl;
  obj.threadAccessibilityLabel = intl5.string(util.t.rBIGBL);
  const forcedTheme = options.forcedTheme;
  obj.forcedTheme = forcedTheme;
  return obj;
};
