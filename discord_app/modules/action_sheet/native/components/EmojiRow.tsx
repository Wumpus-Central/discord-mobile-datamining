// discord_app/modules/action_sheet/native/components/EmojiRow.tsx
import "noop";
import { View } from "QUICK_SWITCHER";
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ emojiRowContainer: { flexDirection: "column", justifyContent: "center", alignItems: "center" }, emojiRow: { height: 52, alignSelf: "stretch", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 0, marginBottom: 0 } });
let result = require("ACTION_SHEET_START_HEIGHT_RATIO").fileFinishedImporting("modules/action_sheet/native/components/EmojiRow.tsx");

export default function EmojiRow(arg0) {
  let channel;
  let require;
  ({ message: require, channel } = arg0);
  let dependencyMap;
  let closure_3;
  let closure_4;
  let token;
  let obj = require("../../../../design/tokens/native/useToken.tsx") /* map */;
  dependencyMap = obj.useToken(channel(712).modules.mobile.EMOJI_ROW_EMOJI_SIZE);
  let obj1 = require("../../../../design/tokens/native/useToken.tsx") /* map */;
  closure_3 = obj1.useToken(channel(712).modules.mobile.EMOJI_ROW_EMOJI_FONT_SIZE);
  let obj2 = require("../../../../design/tokens/native/useToken.tsx") /* map */;
  closure_4 = obj2.useToken(channel(712).modules.mobile.EMOJI_ROW_EMOJI_LINE_HEIGHT);
  token = require("../../../../design/tokens/native/useToken.tsx") /* map */.useToken(channel(712).modules.mobile.EMOJI_ROW_EMOJI_CONTAINER_SIZE);
  let obj4 = require("../../../../design/tokens/native/useToken.tsx") /* map */;
  const token1 = require("../../../../design/tokens/native/useToken.tsx") /* map */.useToken(channel(712).modules.mobile.EMOJI_ROW_EMOJI_MIN_SPACING);
  const obj5 = require("../../../../design/tokens/native/useToken.tsx") /* map */;
  const emojisForReactionRow = require("../../../reactions/native/useEmojisForReactionRow.tsx") /* useEmojisForReactionRow */.useEmojisForReactionRow(channel, closure_4, token + token1);
  const tmp3 = callback2();
  obj = { style: tmp3.emojiRowContainer, children: null };
  obj = { style: tmp3.emojiRow, children: null };
  const items = [
    emojisForReactionRow.map((emoji) => {
      let closure_0 = emoji;
      return token(outer1_0(9775).EmojiReactionRowButton, {
        emoji,
        onPress() {
          let channel_id;
          let id;
          let obj = channel(table[5]);
          obj.hideActionSheet();
          if (null != closure_0) {
            const result = outer2_0(tmp4[6]).triggerHapticFeedback(outer2_0(tmp4[6]).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj2 = outer2_0(tmp4[6]);
            ({ channel_id, id } = tmp);
            const obj3 = outer2_0(tmp4[7]);
            obj3.addReaction(channel_id, id, outer2_0(tmp4[8]).toReactionEmoji(tmp2));
            const obj4 = outer2_0(tmp4[8]);
            obj = { channelId: null, messageId: null };
            ({ channel_id: obj6[0], id: obj6[1] } = tmp);
            channel(tmp4[9]).focusMessage(obj);
            const tmp3Result = channel(tmp4[9]);
            const result1 = outer2_0(tmp4[10]).maybeShowDoubleTapReminderToast(tmp2);
            const obj7 = outer2_0(tmp4[10]);
          }
        },
        emojiSize: dependencyMap,
        emojiFontSize: closure_3,
        emojiLineHeight: closure_4,
        emojiContainerSize: token
      }, outer1_0(9775).getEmojiKey(emoji, arg1));
    }),

  ];
  obj1 = {
    emojiContainerSize: token,
    onPress() {
      return outer1_0(8423).handleAddNewReactions(channel, id.id, outer1_0(7143).ReactionLocations.MESSAGE);
    }
  };
  items[1] = token(require("../../../reactions/native/EmojiReactionRowButton.tsx") /* EmojiPickerRowButton */.EmojiPickerRowButton, obj1);
  obj[1] = items;
  const items1 = [callback(closure_3, obj), ];
  obj2 = { location: null };
  obj2[0] = channel(5630).MESSAGE_LONG_PRESS_MENU;
  items1[1] = token(require("../../../double_tap_to_react/native/DoubleTapEmojiEditNudge.tsx") /* DoubleTapEmojiEditNudgeInner */.DoubleTapEmojiEditNudge, obj2);
  obj[1] = items1;
  return callback(closure_3, obj);
};