// discord_app/modules/action_sheet/native/components/EmojiRow.tsx
import ReactionUtils from "../../../reactions/ReactionUtils.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import ActionSheetActionCreatorsDefault from "../ActionSheetActionCreators.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import MessageActionCreatorsDefault from "../../../../actions/MessageActionCreators.tsx";
import ReactionActionCreators from "../../../reactions/ReactionActionCreators.tsx";
import reactions_ReactionUtils from "../../../reactions/native/ReactionUtils.tsx";
import DoubleTapReminderToast from "../../../double_tap_to_react/native/DoubleTapReminderToast.tsx";
import useEmojisForReactionRow from "../../../reactions/native/useEmojisForReactionRow.tsx";
import EmojiReactionRowButton from "../../../reactions/native/EmojiReactionRowButton.tsx";
import DoubleTapEmojiEditNudge from "../../../double_tap_to_react/native/DoubleTapEmojiEditNudge.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const ACTION_SHEET_MAX_WIDTH = fn(6646).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let closure_7 = createStyles.createStyles({
  emojiRowContainer: { flexDirection: "column", justifyContent: "center", alignItems: "center" },
  emojiRow: {
    height: 52,
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 0,
    marginBottom: 0,
  },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/action_sheet/native/components/EmojiRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (message) => {
      const cResult = message(token[12]).c(27);
      message = message.message;
      const channel = message.channel;
      let obj = message(token[12]);
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
                            let tmp21 = cResult[22];
                          }
                          const _Symbol = Symbol;
                          if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                            const obj8 = { location: tmp4(tmp2[19]).MESSAGE_LONG_PRESS_MENU };
                            const tmp28 = token3(tmp(tmp2[18]).DoubleTapEmojiEditNudge, obj8);
                            cResult[23] = tmp28;
                            let tmp26 = tmp28;
                          } else {
                            tmp26 = cResult[23];
                          }
                          if (cResult[24] === tmp10.emojiRowContainer) {
                            if (cResult[25] === tmp21) {
                              let tmp29 = cResult[26];
                            }
                            return tmp29;
                          }
                          const obj9 = { style: tmp11, children: null };
                          const items = [tmp21, tmp26];
                          obj9.children = items;
                          const tmp32 = closure_6(token1, obj9);
                          cResult[24] = tmp10.emojiRowContainer;
                          cResult[25] = tmp21;
                          cResult[26] = tmp32;
                          tmp29 = tmp32;
                        }
                      }
                      const obj10 = { style: tmp12, children: null };
                      const items1 = [tmp13, tmp18];
                      obj10.children = items1;
                      const tmp24 = closure_6(token1, obj10);
                      cResult[19] = tmp10.emojiRow;
                      cResult[20] = tmp13;
                      cResult[21] = tmp18;
                      cResult[22] = tmp24;
                      tmp21 = tmp24;
                    }
                    const obj11 = { emojiContainerSize: token3, onPress: tmp17 };
                    const tmp20 = token3(tmp(tmp2[16]).EmojiPickerRowButton, obj11);
                    cResult[16] = token3;
                    cResult[17] = tmp17;
                    cResult[18] = tmp20;
                    tmp18 = tmp20;
                  }
                  const fn2 = function u() {
                    return reactions_ReactionUtils.handleAddNewReactions(
                      channel,
                      message.id,
                      ReactionActionCreators.ReactionLocations.MESSAGE,
                    );
                  };
                  cResult[13] = channel;
                  cResult[14] = message.id;
                  cResult[15] = fn2;
                  tmp17 = fn2;
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
        return token3(
          message(token[16]).EmojiReactionRowButton,
          {
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
            emojiContainerSize: token3,
          },
          message(token[16]).getEmojiKey(emoji, index),
        );
      };
      cResult[7] = token3;
      cResult[8] = token1;
      cResult[9] = token2;
      cResult[10] = token;
      cResult[11] = message;
      cResult[12] = fn;
      tmp14 = fn;
      let obj7 = message(token[15]);
    }
  : (arg0) => {
      ({ message: require, channel } = arg0);
      dependencyMap = useToken.useToken(channel(587).modules.mobile.EMOJI_ROW_EMOJI_SIZE);
      const emojiFontSize = useToken.useToken(channel(587).modules.mobile.EMOJI_ROW_EMOJI_FONT_SIZE);
      const emojiLineHeight = useToken.useToken(channel(587).modules.mobile.EMOJI_ROW_EMOJI_LINE_HEIGHT);
      const token = useToken.useToken(channel(587).modules.mobile.EMOJI_ROW_EMOJI_CONTAINER_SIZE);
      const token1 = useToken.useToken(channel(587).modules.mobile.EMOJI_ROW_EMOJI_MIN_SPACING);
      const emojisForReactionRow = useEmojisForReactionRow.useEmojisForReactionRow(
        channel,
        emojiLineHeight,
        token + token1,
      );
      const tmp3 = closure_7();
      let obj7 = { style: tmp3.emojiRowContainer, children: null };
      const obj8 = { style: tmp3.emojiRow, children: null };
      const items = [
        emojisForReactionRow.map((emoji, index) => {
          closure_0 = emoji;
          return token(
            require("EmojiReactionRowButton").EmojiReactionRowButton,
            {
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
              emojiContainerSize: token,
            },
            require("EmojiReactionRowButton").getEmojiKey(emoji, index),
          );
        }),
        token(EmojiReactionRowButton.EmojiPickerRowButton, {
          emojiContainerSize: token,
          onPress() {
            return reactions_ReactionUtils.handleAddNewReactions(
              channel,
              id.id,
              ReactionActionCreators.ReactionLocations.MESSAGE,
            );
          },
        }),
      ];
      obj8.children = items;
      const items1 = [closure_6(emojiFontSize, obj8)];
      const obj9 = {
        emojiContainerSize: token,
        onPress() {
          return reactions_ReactionUtils.handleAddNewReactions(
            channel,
            id.id,
            ReactionActionCreators.ReactionLocations.MESSAGE,
          );
        },
      };
      items1[1] = token(DoubleTapEmojiEditNudge.DoubleTapEmojiEditNudge, {
        location: channel(6681).MESSAGE_LONG_PRESS_MENU,
      });
      obj7.children = items1;
      return closure_6(emojiFontSize, obj7);
    };
