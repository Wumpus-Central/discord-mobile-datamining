// discord_app/modules/action_sheet/native/components/EmojiRow.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import map from "../../../../design/tokens/native/useToken.tsx";
import checkReactionResponse from "../../../reactions/ReactionActionCreators.tsx";
import handleOutOfSuperReactions from "../../../reactions/native/ReactionUtils.tsx";
import useEmojisForReactionRow from "../../../reactions/native/useEmojisForReactionRow.tsx";
import EmojiPickerRowButton from "../../../reactions/native/EmojiReactionRowButton.tsx";
import DoubleTapEmojiEditNudgeInner from "../../../double_tap_to_react/native/DoubleTapEmojiEditNudge.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { ACTION_SHEET_MAX_WIDTH } from "../ActionSheetConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = fn;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ emojiRowContainer: { flexDirection: "column", justifyContent: "center", alignItems: "center" }, emojiRow: { height: 52, alignSelf: "stretch", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 0, marginBottom: 0 } });
let result = require("obj132").fileFinishedImporting("modules/action_sheet/native/components/EmojiRow.tsx");

export default function EmojiRow(arg0) {
  ({ message: require, channel } = arg0);
  let obj = map;
  dependencyMap = obj.useToken(channel(712).modules.mobile.EMOJI_ROW_EMOJI_SIZE);
  obj1 = map;
  closure_3 = obj1.useToken(channel(712).modules.mobile.EMOJI_ROW_EMOJI_FONT_SIZE);
  let obj2 = map;
  closure_4 = obj2.useToken(channel(712).modules.mobile.EMOJI_ROW_EMOJI_LINE_HEIGHT);
  const token = map.useToken(channel(712).modules.mobile.EMOJI_ROW_EMOJI_CONTAINER_SIZE);
  const token1 = map.useToken(channel(712).modules.mobile.EMOJI_ROW_EMOJI_MIN_SPACING);
  const emojisForReactionRow = useEmojisForReactionRow.useEmojisForReactionRow(channel, closure_4, token + token1);
  const tmp3 = callback2();
  obj = { style: tmp3.emojiRow, children: null };
  const items = [
    emojisForReactionRow.map((item, index) => {
      closure_0 = item;
      return token(EmojiPickerRowButton.EmojiReactionRowButton, {
        emoji: item,
        onPress() {
          let obj = channel(table[5]);
          obj.hideActionSheet();
          if (null != closure_0) {
            const result = require(table[6]).triggerHapticFeedback(require(table[6]).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj2 = require(table[6]);
            ({ channel_id, id } = closure_0);
            const obj3 = require(table[7]);
            obj3.addReaction(channel_id, id, require(table[8]).toReactionEmoji(closure_0));
            const obj4 = require(table[8]);
            obj = { channelId: null, messageId: null };
            ({ channel_id: obj6[0], id: obj6[1] } = closure_0);
            channel(table[9]).focusMessage(obj);
            const tmp3Result = channel(table[9]);
            const result1 = require(table[10]).maybeShowDoubleTapReminderToast(closure_0);
            const obj7 = require(table[10]);
          }
        },
        emojiSize: dependencyMap,
        emojiFontSize: closure_3,
        emojiLineHeight: closure_4,
        emojiContainerSize: token
      }, EmojiPickerRowButton.getEmojiKey(item, index));
    }),

  ];
  obj1 = {
    emojiContainerSize: token,
    onPress() {
      return handleOutOfSuperReactions.handleAddNewReactions(channel, id.id, checkReactionResponse.ReactionLocations.MESSAGE);
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