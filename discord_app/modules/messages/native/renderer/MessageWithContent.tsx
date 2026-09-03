// === Module 7858: generateMessageRowData ===

// Module 7858 (generateMessageRowData)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import createThreadEmbedDefault from "createThreadEmbed" /* 7861 */;
import closure_3 from "handleMessageSendFailedAutomod" /* 7859 */;
import { RowType } from "Changeset" /* 7854 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/MessageWithContent.tsx");

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
  obj = { type: RowType.MESSAGE, message: createThreadEmbedDefault(obj), canAddNewReactions, addNewReactionAccessibilityLabel: null, reactionsTheme: null, highlightLabel: null, renderContentOnly: null, separatorBefore: null, changeType: null, truncation: null, alwaysShowAddReaction: null, backgroundHighlight: null, swipeActions: null, replyAccessibilityLabel: null, forwardAccessibilityLabel: null, threadAccessibilityLabel: null, forcedTheme: null };
  obj = { options, message, roleStyle, isFirst, isEditing, canShowImages: undefined === canShowImages || canShowImages, isSystemDM: tmp, isInlineReplyPreview: false, pushFeedbackType, renderContentOnly, showContentInventoryEntryFallbackEmbed: canShowImages.showContentInventoryEntryFallbackEmbed };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.lfIHs4);
  obj[4] = reactionsTheme;
  const intl2 = getSystemLocale.intl;
  obj[5] = intl2.string(getSystemLocale.t["IOS/dU"]);
  obj[6] = renderContentOnly;
  obj[7] = separatorBefore;
  obj[8] = changeType;
  obj[9] = truncation;
  obj[10] = tmp3;
  if (overrideBackgroundHighlight == null) {
    let tmp4Result = tmp4(8029);
    obj = { message: null, theme: null, isEditing: null, isAutomodBlockedMessage: null };
    obj[0] = message;
    obj[1] = theme;
    obj[2] = isEditing;
    obj[3] = null != message.getMessage(message.id);
    overrideBackgroundHighlight = tmp4Result.createBackgroundHighlight(obj);
  }
  obj[11] = overrideBackgroundHighlight;
  tmp4Result = tmp4(8029);
  let canReply = options.enableSwipeActions;
  if (canReply) {
    canReply = canShowImages.canReply;
  }
  obj[12] = tmp4Result.createSwipeActions(canReply, options.enableSwipeActions && canShowImages.canEdit);
  const intl3 = tmp6(1233).intl;
  obj[13] = intl3.string(getSystemLocale.t["5IEsGx"]);
  const intl4 = tmp6(1233).intl;
  obj[14] = intl4.string(getSystemLocale.t.I3ltXO);
  const intl5 = tmp6(1233).intl;
  obj[15] = intl5.string(getSystemLocale.t.rBIGBL);
  const forcedTheme = options.forcedTheme;
  obj[16] = forcedTheme;
  return obj;
};