// === Module 11730: EmojiRow ===

// Module 11730 (EmojiRow)
import ReactionUtils from "ReactionUtils" /* 4211 */;
import useToken from "useToken" /* 4262 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7456 */;
import ReactionActionCreators from "ReactionActionCreators" /* 7764 */;
import DoubleTapReminderToast from "DoubleTapReminderToast" /* 11123 */;
import reactions_ReactionUtils from "reactions/ReactionUtils" /* 11254 */;
import useEmojisForReactionRow from "useEmojisForReactionRow" /* 11731 */;
import EmojiReactionRowButton from "EmojiReactionRowButton" /* 11732 */;
import DoubleTapEmojiEditNudge from "DoubleTapEmojiEditNudge" /* 11733 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const ACTION_SHEET_MAX_WIDTH = fn(7151).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ emojiRowContainer: { flexDirection: "column", justifyContent: "center", alignItems: "center" }, emojiRow: { height: 52, alignSelf: "stretch", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 0, marginBottom: 0 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/action_sheet/native/components/EmojiRow.tsx");

export default function EmojiRow(arg0) {
  ({ message: require, channel } = arg0);
  let obj = useToken;
  dependencyMap = obj.useToken(channel(576).modules.mobile.EMOJI_ROW_EMOJI_SIZE);
  let obj1 = useToken;
  const emojiFontSize = obj1.useToken(channel(576).modules.mobile.EMOJI_ROW_EMOJI_FONT_SIZE);
  let obj2 = useToken;
  const emojiLineHeight = obj2.useToken(channel(576).modules.mobile.EMOJI_ROW_EMOJI_LINE_HEIGHT);
  const token = useToken.useToken(channel(576).modules.mobile.EMOJI_ROW_EMOJI_CONTAINER_SIZE);
  const token1 = useToken.useToken(channel(576).modules.mobile.EMOJI_ROW_EMOJI_MIN_SPACING);
  const emojisForReactionRow = useEmojisForReactionRow.useEmojisForReactionRow(channel, emojiLineHeight, token + token1);
  const tmp3 = closure_7();
  obj = { style: tmp3.emojiRowContainer, children: null };
  obj = { style: tmp3.emojiRow, children: null };
  const items = [
    emojisForReactionRow.map((emoji, index) => {
      closure_0 = emoji;
      return token(require("EmojiReactionRowButton").EmojiReactionRowButton, {
        emoji,
        onPress() {
          let obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          if (null != closure_0) {
            const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
            ({ channel_id, id } = tmp);
            const obj3 = ReactionActionCreators;
            obj3.addReaction(channel_id, id, ReactionUtils.toReactionEmoji(tmp2));
            obj = { channelId: null, messageId: null };
            ({ channel_id: obj6.channelId, id: obj6.messageId } = tmp);
            MessageActionCreatorsDefault.focusMessage(obj);
            const tmp3Result = MessageActionCreatorsDefault;
            const result1 = DoubleTapReminderToast.maybeShowDoubleTapReminderToast(tmp2);
          }
        },
        emojiSize,
        emojiFontSize,
        emojiLineHeight,
        emojiContainerSize: token
      }, require("EmojiReactionRowButton").getEmojiKey(emoji, index));
    }),

  ];
  obj1 = {
    emojiContainerSize: token,
    onPress() {
      return reactions_ReactionUtils.handleAddNewReactions(channel, id.id, ReactionActionCreators.ReactionLocations.MESSAGE);
    }
  };
  items[1] = token(EmojiReactionRowButton.EmojiPickerRowButton, obj1);
  obj.children = items;
  const items1 = [closure_6(emojiFontSize, obj), ];
  obj2 = { location: channel(7182).MESSAGE_LONG_PRESS_MENU };
  items1[1] = token(DoubleTapEmojiEditNudge.DoubleTapEmojiEditNudge, obj2);
  obj.children = items1;
  return closure_6(emojiFontSize, obj);
};