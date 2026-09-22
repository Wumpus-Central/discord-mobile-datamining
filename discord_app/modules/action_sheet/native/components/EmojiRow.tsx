// === Module 11987: EmojiRow ===

// Module 11987 (EmojiRow)
import ReactionUtils from "ReactionUtils" /* 4408 */;
import useToken from "useToken" /* 4458 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import HapticUtils from "HapticUtils" /* 4725 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7701 */;
import ReactionActionCreators from "ReactionActionCreators" /* 8009 */;
import DoubleTapReminderToast from "DoubleTapReminderToast" /* 11394 */;
import reactions_ReactionUtils from "reactions/ReactionUtils" /* 11524 */;
import useEmojisForReactionRow from "useEmojisForReactionRow" /* 11988 */;
import EmojiReactionRowButton from "EmojiReactionRowButton" /* 11989 */;
import DoubleTapEmojiEditNudge from "DoubleTapEmojiEditNudge" /* 11990 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const ACTION_SHEET_MAX_WIDTH = fn(7398).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4757);
let closure_7 = createStyles.createStyles({ emojiRowContainer: { flexDirection: "column", justifyContent: "center", alignItems: "center" }, emojiRow: { height: 52, alignSelf: "stretch", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 0, marginBottom: 0 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/action_sheet/native/components/EmojiRow.tsx");

export default function EmojiRow(arg0) {
  ({ message: require, channel } = arg0);
  dependencyMap = useToken.useToken(channel(576).modules.mobile.EMOJI_ROW_EMOJI_SIZE);
  const emojiFontSize = useToken.useToken(channel(576).modules.mobile.EMOJI_ROW_EMOJI_FONT_SIZE);
  const emojiLineHeight = useToken.useToken(channel(576).modules.mobile.EMOJI_ROW_EMOJI_LINE_HEIGHT);
  const token = useToken.useToken(channel(576).modules.mobile.EMOJI_ROW_EMOJI_CONTAINER_SIZE);
  const token1 = useToken.useToken(channel(576).modules.mobile.EMOJI_ROW_EMOJI_MIN_SPACING);
  const emojisForReactionRow = useEmojisForReactionRow.useEmojisForReactionRow(channel, emojiLineHeight, token + token1);
  const tmp3 = closure_7();
  let obj7 = { style: tmp3.emojiRowContainer, children: null };
  const obj8 = { style: tmp3.emojiRow, children: null };
  const items = [
    emojisForReactionRow.map((emoji, index) => {
      closure_0 = emoji;
      return token(require("EmojiReactionRowButton").EmojiReactionRowButton, {
        emoji,
        onPress() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          if (null != closure_0) {
            const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
            ({ channel_id, id } = closure_2_0);
            const obj3 = ReactionActionCreators;
            obj3.addReaction(channel_id, id, ReactionUtils.toReactionEmoji(closure_0));
            ({ channel_id: obj6.channelId, id: obj6.messageId } = closure_2_0);
            MessageActionCreatorsDefault.focusMessage({ channelId: null, messageId: null });
            const obj5 = { channelId: null, messageId: null };
            const tmp3Result = MessageActionCreatorsDefault;
            const result1 = DoubleTapReminderToast.maybeShowDoubleTapReminderToast(closure_0);
          }
        },
        emojiSize,
        emojiFontSize,
        emojiLineHeight,
        emojiContainerSize: token
      }, require("EmojiReactionRowButton").getEmojiKey(emoji, index));
    }),
    token(EmojiReactionRowButton.EmojiPickerRowButton, {
      emojiContainerSize: token,
      onPress() {
        return reactions_ReactionUtils.handleAddNewReactions(channel, id.id, ReactionActionCreators.ReactionLocations.MESSAGE);
      }
    })
  ];
  obj8.children = items;
  const items1 = [closure_6(emojiFontSize, obj8), ];
  const obj9 = {
    emojiContainerSize: token,
    onPress() {
      return reactions_ReactionUtils.handleAddNewReactions(channel, id.id, ReactionActionCreators.ReactionLocations.MESSAGE);
    }
  };
  items1[1] = token(DoubleTapEmojiEditNudge.DoubleTapEmojiEditNudge, { location: channel(7429).MESSAGE_LONG_PRESS_MENU });
  obj7.children = items1;
  return closure_6(emojiFontSize, obj7);
};