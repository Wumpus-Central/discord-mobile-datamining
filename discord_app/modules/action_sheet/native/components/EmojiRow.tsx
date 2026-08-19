// === Module 10893: EmojiRow ===

// Module 10893 (EmojiRow)
import noopAll from "noop" /* 19 */;
import map from "map" /* 4097 */;
import useEmojisForReactionRow from "useEmojisForReactionRow" /* 10894 */;
import EmojiPickerRowButton from "EmojiPickerRowButton" /* 10895 */;
import DoubleTapEmojiEditNudgeInner from "DoubleTapEmojiEditNudgeInner" /* 10896 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO" /* 6951 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ emojiRowContainer: { flexDirection: "column", justifyContent: "center", alignItems: "center" }, emojiRow: { height: 52, alignSelf: "stretch", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 0, marginBottom: 0 } });
let result = require("set").fileFinishedImporting("modules/action_sheet/native/components/EmojiRow.tsx");

export default function EmojiRow(arg0) {
  ({ message: require, channel } = arg0);
  dependencyMap = undefined;
  closure_3 = undefined;
  closure_4 = undefined;
  let token;
  let obj = map;
  dependencyMap = obj.useToken(channel(712).modules.mobile.EMOJI_ROW_EMOJI_SIZE);
  obj1 = map;
  closure_3 = obj1.useToken(channel(712).modules.mobile.EMOJI_ROW_EMOJI_FONT_SIZE);
  let obj2 = map;
  closure_4 = obj2.useToken(channel(712).modules.mobile.EMOJI_ROW_EMOJI_LINE_HEIGHT);
  token = map.useToken(channel(712).modules.mobile.EMOJI_ROW_EMOJI_CONTAINER_SIZE);
  let obj4 = map;
  const token1 = map.useToken(channel(712).modules.mobile.EMOJI_ROW_EMOJI_MIN_SPACING);
  const obj5 = map;
  const emojisForReactionRow = useEmojisForReactionRow.useEmojisForReactionRow(channel, closure_4, token + token1);
  const tmp3 = callback2();
  obj = { style: tmp3.emojiRowContainer, children: null };
  obj = { style: tmp3.emojiRow, children: null };
  const items = [
    emojisForReactionRow.map((emoji) => {
      closure_0 = emoji;
      return token(closure_1_0(10895).EmojiReactionRowButton, {
        emoji,
        onPress() {
          let obj = channel(table[5]);
          obj.hideActionSheet();
          if (null != closure_0) {
            const result = closure_2_0(tmp4[6]).triggerHapticFeedback(closure_2_0(tmp4[6]).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj2 = closure_2_0(tmp4[6]);
            ({ channel_id, id } = tmp);
            const obj3 = closure_2_0(tmp4[7]);
            obj3.addReaction(channel_id, id, closure_2_0(tmp4[8]).toReactionEmoji(tmp2));
            const obj4 = closure_2_0(tmp4[8]);
            obj = { channelId: null, messageId: null };
            ({ channel_id: obj6[0], id: obj6[1] } = tmp);
            channel(tmp4[9]).focusMessage(obj);
            const tmp3Result = channel(tmp4[9]);
            const result1 = closure_2_0(tmp4[10]).maybeShowDoubleTapReminderToast(tmp2);
            const obj7 = closure_2_0(tmp4[10]);
          }
        },
        emojiSize: dependencyMap,
        emojiFontSize: closure_3,
        emojiLineHeight: closure_4,
        emojiContainerSize: token
      }, closure_1_0(10895).getEmojiKey(emoji, arg1));
    }),

  ];
  obj1 = {
    emojiContainerSize: token,
    onPress() {
      return closure_1_0(10456).handleAddNewReactions(channel, id.id, closure_1_0(7511).ReactionLocations.MESSAGE);
    }
  };
  items[1] = token(EmojiPickerRowButton.EmojiPickerRowButton, obj1);
  obj[1] = items;
  const items1 = [callback(closure_3, obj), ];
  obj2 = { location: channel(7159).MESSAGE_LONG_PRESS_MENU };
  items1[1] = token(DoubleTapEmojiEditNudgeInner.DoubleTapEmojiEditNudge, obj2);
  obj[1] = items1;
  return callback(closure_3, obj);
};