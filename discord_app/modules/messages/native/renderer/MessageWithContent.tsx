// discord_app/modules/messages/native/renderer/MessageWithContent.tsx
import intl6 from "../../../../intl/index.native.tsx";
import RowGeneratorConstants from "RowGeneratorConstants.tsx";
import createMessageContentDefault from "createMessageContent.tsx";
import RowGeneratorUtilsDefault from "RowGeneratorUtils.tsx";
import GuildAutomodMessageStore from "../../../guild_automod/GuildAutomodMessageStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const RowType = RowGeneratorConstants.RowType;
const result = size.fileFinishedImporting("modules/messages/native/renderer/MessageWithContent.tsx");

export const generateMessageRowData = function generateMessageRowData(canShowImages, options, theme) {
  let alwaysShowAddReaction;
  let canAddNewReactions;
  let canReply;
  let changeType;
  let createSwipeActions;
  let forcedTheme;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let isEditing;
  let isFirst;
  let isSystemDM;
  let message;
  let obj2;
  let pushFeedbackType;
  let reactionsTheme;
  let renderContentOnly;
  let roleStyle;
  let separatorBefore;
  let tmp11;
  let truncation;
  ({ message, isEditing, isSystemDM } = canShowImages);
  let tmp = undefined !== isSystemDM;
  ({ changeType, roleStyle, isFirst, separatorBefore, canAddNewReactions, reactionsTheme } = canShowImages);
  if (tmp) {
    tmp = isSystemDM;
  }
  canShowImages = canShowImages.canShowImages;
  const tmp2 = undefined === canShowImages || canShowImages;
  ({ renderContentOnly, alwaysShowAddReaction } = canShowImages);
  let tmp3 = undefined !== alwaysShowAddReaction;
  ({ truncation, pushFeedbackType } = canShowImages);
  if (tmp3) {
    tmp3 = alwaysShowAddReaction;
  }
  let overrideBackgroundHighlight = canShowImages.overrideBackgroundHighlight;
  const obj = {
    type: RowType.MESSAGE,
    message: createMessageContentDefault(obj2),
    canAddNewReactions,
    addNewReactionAccessibilityLabel: intl.string(intl6.t.lfIHs4),
    reactionsTheme,
    highlightLabel: intl2.string(intl6.t["IOS/dU"]),
    renderContentOnly,
    separatorBefore,
    changeType,
    truncation,
    alwaysShowAddReaction: tmp3,
    backgroundHighlight: overrideBackgroundHighlight,
    swipeActions: createSwipeActions(canReply, tmp11),
    replyAccessibilityLabel: intl3.string(intl6.t["5IEsGx"]),
    forwardAccessibilityLabel: intl4.string(intl6.t.I3ltXO),
    threadAccessibilityLabel: intl5.string(intl6.t.rBIGBL),
    forcedTheme,
  };
  obj2 = {
    options,
    message,
    roleStyle,
    isFirst,
    isEditing,
    canShowImages: tmp2,
    isSystemDM: tmp,
    isInlineReplyPreview: false,
    pushFeedbackType,
    renderContentOnly,
    showContentInventoryEntryFallbackEmbed: canShowImages.showContentInventoryEntryFallbackEmbed,
  };
  intl = intl6.intl;
  intl2 = intl6.intl;
  if (overrideBackgroundHighlight == null) {
    const obj3 = {
      message,
      theme,
      isEditing,
      isAutomodBlockedMessage: null != GuildAutomodMessageStore.getMessage(message.id),
    };
    const createBackgroundHighlight = RowGeneratorUtilsDefault.createBackgroundHighlight;
    RowGeneratorUtilsDefault;
    overrideBackgroundHighlight = createBackgroundHighlight(obj3);
  }
  canReply = options.enableSwipeActions;
  createSwipeActions = RowGeneratorUtilsDefault.createSwipeActions;
  RowGeneratorUtilsDefault;
  if (canReply) {
    canReply = canShowImages.canReply;
  }
  tmp11 = options.enableSwipeActions && canShowImages.canEdit;
  intl3 = intl6.intl;
  intl4 = intl6.intl;
  intl5 = intl6.intl;
  forcedTheme = options.forcedTheme;
  return obj;
};
