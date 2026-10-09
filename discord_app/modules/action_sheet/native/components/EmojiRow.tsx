// === Module 12780: EmojiRow ===

// Module 12780 (EmojiRow)
import ReactionUtils from "ReactionUtils" /* 4721 */;
import useToken from "useToken" /* 4779 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import HapticUtils from "HapticUtils" /* 5056 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7172 */;
import ReactionActionCreators from "ReactionActionCreators" /* 7881 */;
import reactions_ReactionUtils from "reactions/ReactionUtils" /* 9357 */;
import DoubleTapReminderToast from "DoubleTapReminderToast" /* 9409 */;
import useEmojisForReactionRow from "useEmojisForReactionRow" /* 12781 */;
import EmojiReactionRowButton from "EmojiReactionRowButton" /* 12782 */;
import DoubleTapEmojiEditNudge from "DoubleTapEmojiEditNudge" /* 12783 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const ACTION_SHEET_MAX_WIDTH = fn(6837).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let closure_7 = createStyles.createStyles({ emojiRowContainer: { flexDirection: "column", justifyContent: "center", alignItems: "center" }, emojiRow: { height: 52, alignSelf: "stretch", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 0, marginBottom: 0 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/action_sheet/native/components/EmojiRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiRow(message) {
  const cResult = message(token[12]).c(27);
  message = message.message;
  const channel = message.channel;
  let obj = message(token[12]);
  const tmp = message;
  token = message(token[13]).useToken(channel(token[14]).modules.mobile.EMOJI_ROW_EMOJI_SIZE);
  let obj2 = message(token[13]);
  const tmp4 = channel;
  const token1 = message(token[13]).useToken(channel(token[14]).modules.mobile.EMOJI_ROW_EMOJI_FONT_SIZE);
  let obj3 = message(token[13]);
  const token2 = message(token[13]).useToken(channel(token[14]).modules.mobile.EMOJI_ROW_EMOJI_LINE_HEIGHT);
  let obj4 = message(token[13]);
  const token3 = message(token[13]).useToken(channel(token[14]).modules.mobile.EMOJI_ROW_EMOJI_CONTAINER_SIZE);
  let obj5 = message(token[13]);
  const token4 = message(token[13]).useToken(channel(token[14]).modules.mobile.EMOJI_ROW_EMOJI_MIN_SPACING);
  const obj6 = message(token[13]);
  const emojisForReactionRow = message(token[15]).useEmojisForReactionRow(channel, token2, token3 + token4);
  const tmp10 = closure_7();
  if (cResult[0] === token3) {
    if (cResult[1] === token1) {
      if (cResult[2] === token2) {
        if (cResult[3] === token) {
          if (cResult[4] === emojisForReactionRow) {
            if (cResult[5] === message) {
              if (cResult[13] === channel) {
                if (cResult[14] === message.id) {
                  let tmp17 = cResult[15];
                }
                if (cResult[16] === token3) {
                  if (cResult[17] === tmp17) {
                    let tmp18 = cResult[18];
                  }
                  if (cResult[19] === tmp10.emojiRow) {
                    if (cResult[20] === tmp13) {
                      if (cResult[21] === tmp18) {
                        let tmp20 = cResult[22];
                      }
                      class R {
                        constructor() {
                          obj = closure_0(closure_2[17]);
                          return obj.handleAddNewReactions(channel, message.id, closure_0(closure_2[7]).ReactionLocations.MESSAGE);
                        }
                      }
                      if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                        const obj8 = { location: null };
                        class R {
                          constructor() {
                            obj = closure_0(closure_2[17]);
                            return obj.handleAddNewReactions(channel, message.id, closure_0(closure_2[7]).ReactionLocations.MESSAGE);
                          }
                        }
                        obj8.location = tmp4(tmp2[19]).MESSAGE_LONG_PRESS_MENU;
                        const tmp27 = token3(tmp26, obj8);
                        cResult[23] = tmp27;
                        let tmp24 = tmp27;
                      } else {
                        tmp24 = cResult[23];
                      }
                      if (cResult[24] === tmp10.emojiRowContainer) {
                        if (cResult[25] === tmp20) {
                          let tmp28 = cResult[26];
                        }
                        return tmp28;
                      }
                      const obj9 = { style: tmp11, children: null };
                      const items = [tmp20, tmp24];
                      obj9.children = items;
                      const tmp31 = closure_6(token1, obj9);
                      cResult[24] = tmp10.emojiRowContainer;
                      cResult[25] = tmp20;
                      cResult[26] = tmp31;
                      tmp28 = tmp31;
                    }
                  }
                  class R {
                    constructor() {
                      obj = closure_0(closure_2[17]);
                      return obj.handleAddNewReactions(channel, message.id, closure_0(closure_2[7]).ReactionLocations.MESSAGE);
                    }
                  }
                  const obj10 = { style: tmp12, children: null };
                  const items1 = [tmp13, tmp18];
                  obj10.children = items1;
                  const tmp22 = closure_6(token1, obj10);
                  cResult[19] = tmp10.emojiRow;
                  cResult[20] = tmp13;
                  cResult[21] = tmp18;
                  cResult[22] = tmp22;
                  tmp20 = tmp22;
                }
                class R {
                  constructor() {
                    obj = closure_0(closure_2[17]);
                    return obj.handleAddNewReactions(channel, message.id, closure_0(closure_2[7]).ReactionLocations.MESSAGE);
                  }
                }
                const obj11 = { emojiContainerSize: token3, onPress: tmp17 };
                const tmp19 = token3(tmp(tmp2[16]).EmojiPickerRowButton, obj11);
                cResult[16] = token3;
                cResult[17] = tmp17;
                cResult[18] = tmp19;
                tmp18 = tmp19;
              }
              class R {
                constructor() {
                  obj = closure_0(closure_2[17]);
                  return obj.handleAddNewReactions(channel, message.id, closure_0(closure_2[7]).ReactionLocations.MESSAGE);
                }
              }
              cResult[13] = channel;
              cResult[14] = message.id;
              cResult[15] = R;
              tmp17 = R;
            }
          }
        }
      }
    }
  }
  if (cResult[7] === token3) {
    if (cResult[8] === token1) {
      if (cResult[9] === token2) {
        if (cResult[10] === token) {
          if (cResult[11] === message) {
            let tmp14 = cResult[12];
          }
          const mapped = emojisForReactionRow.map(tmp14);
          class R {
            constructor() {
              obj = closure_0(closure_2[17]);
              return obj.handleAddNewReactions(channel, message.id, closure_0(closure_2[7]).ReactionLocations.MESSAGE);
            }
          }
          cResult[0] = token3;
          cResult[1] = token1;
          cResult[2] = token2;
          cResult[3] = token;
          cResult[4] = emojisForReactionRow;
          cResult[5] = message;
          cResult[6] = mapped;
        }
      }
    }
  }
  const fn = function c(emoji, index) {
    closure_0 = emoji;
    return token3(message(token[16]).EmojiReactionRowButton, {
      emoji,
      onPress() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        if (null != closure_0) {
          const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
          ({ channel_id, id } = message);
          const obj3 = ReactionActionCreators;
          obj3.addReaction(channel_id, id, ReactionUtils.toReactionEmoji(closure_0));
          ({ channel_id: obj6.channelId, id: obj6.messageId } = message);
          MessageActionCreatorsDefault.focusMessage({ channelId: null, messageId: null });
          const obj5 = { channelId: null, messageId: null };
          const tmp3Result = MessageActionCreatorsDefault;
          const result1 = DoubleTapReminderToast.maybeShowDoubleTapReminderToast(closure_0);
        }
      },
      emojiSize: token,
      emojiFontSize: token1,
      emojiLineHeight: token2,
      emojiContainerSize: token3
    }, message(token[16]).getEmojiKey(emoji, index));
  };
  cResult[7] = token3;
  cResult[8] = token1;
  cResult[9] = token2;
  cResult[10] = token;
  cResult[11] = message;
  cResult[12] = fn;
  tmp14 = fn;
  let obj7 = message(token[15]);
}) : (function EmojiRow(arg0) {
  ({ message: require, channel } = arg0);
  dependencyMap = useToken.useToken(channel(587).modules.mobile.EMOJI_ROW_EMOJI_SIZE);
  const emojiFontSize = useToken.useToken(channel(587).modules.mobile.EMOJI_ROW_EMOJI_FONT_SIZE);
  const emojiLineHeight = useToken.useToken(channel(587).modules.mobile.EMOJI_ROW_EMOJI_LINE_HEIGHT);
  const token = useToken.useToken(channel(587).modules.mobile.EMOJI_ROW_EMOJI_CONTAINER_SIZE);
  const token1 = useToken.useToken(channel(587).modules.mobile.EMOJI_ROW_EMOJI_MIN_SPACING);
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
            ({ channel_id, id } = _require);
            const obj3 = ReactionActionCreators;
            obj3.addReaction(channel_id, id, ReactionUtils.toReactionEmoji(closure_0));
            ({ channel_id: obj6.channelId, id: obj6.messageId } = _require);
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
        return reactions_ReactionUtils.handleAddNewReactions(channel, _require.id, ReactionActionCreators.ReactionLocations.MESSAGE);
      }
    })
  ];
  obj8.children = items;
  const items1 = [closure_6(emojiFontSize, obj8), ];
  const obj9 = {
    emojiContainerSize: token,
    onPress() {
      return reactions_ReactionUtils.handleAddNewReactions(channel, _require.id, ReactionActionCreators.ReactionLocations.MESSAGE);
    }
  };
  items1[1] = token(DoubleTapEmojiEditNudge.DoubleTapEmojiEditNudge, { location: channel(6872).MESSAGE_LONG_PRESS_MENU });
  obj7.children = items1;
  return closure_6(emojiFontSize, obj7);
});