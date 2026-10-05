// discord_app/modules/icymi/native/content_inventory/ReactActionSheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl6 from "../../../../intl/index.native.tsx";
import EmojiConstants from "../../../emojis/EmojiConstants.tsx";
import ActionSheetConstants from "../../../action_sheet/native/ActionSheetConstants.tsx";
import MessageReactionsTypes from "../../../messages/MessageReactionsTypes.tsx";
import ICYMIActionCreatorsDefault from "../../ICYMIActionCreators.tsx";
import openEmojiPickerActionSheet from "../../../emoji_picker/native/openEmojiPickerActionSheet.tsx";
import ICYMIContext from "../ICYMIContext.tsx";
import _objectDestructuringEmpty from "../../../../../_runtime/11870__objectDestructuringEmpty.js";
import _asyncToGenerator_mod from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, content;

let c10;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const EmojiIntention = EmojiConstants.EmojiIntention;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  header: { width: "100%", display: "flex", alignItems: "center", padding: 8 },
  container: { gap: 12 },
  preview: obj2,
  base: { position: "relative" },
  contentContainer: obj3,
  inputRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  input: obj4,
  emojis: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  submitting: { opacity: 0.6 },
  emoji: obj5,
  defaultEmoji: { width: 24, height: 24 },
  emojiImage: { resizeMode: "contain", width: 24, height: 24 },
  emojiText: { lineHeight: 24, fontSize: 20, textAlign: "center", paddingTop: 2 },
};
obj2 = {
  borderRadius: nativeDefault.radii.md,
  overflow: "hidden",
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_STRONG,
};
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj4 = { flex: 1, borderRadius: nativeDefault.radii.round };
obj5 = {
  padding: 8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND,
};
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let onPressEmoji;
      let obj = channel(onPressEmoji[12]);
      const cResult = obj.c(12);
      channel = channel.channel;
      const onOpenPicker = channel.onOpenPicker;
      onPressEmoji = channel.onPressEmoji;
      const disabled = channel.disabled;
      const tmp4 = closure_12();
      if (cResult[0] === channel) {
        if (cResult[1] === onOpenPicker) {
          let tmp5;
          let tmp6;
          let tmp8;
          let tmp10;
          if (cResult[2] === onPressEmoji) {
            tmp5 = cResult[3];
          }
          if (cResult[4] !== tmp4.emoji) {
            const items = [tmp4.emoji];
            cResult[4] = tmp4.emoji;
            cResult[5] = items;
            tmp6 = items;
          } else {
            tmp6 = cResult[5];
          }
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[8]).intl;
            const stringResult = intl.string(channel(onPressEmoji[8]).t.lfIHs4);
            cResult[6] = stringResult;
            tmp8 = stringResult;
          } else {
            tmp8 = cResult[6];
          }
          const _Symbol2 = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp12 = closure_10(channel(onPressEmoji[15]).ReactionIcon, { size: "md" });
            cResult[7] = tmp12;
            tmp10 = tmp12;
          } else {
            tmp10 = cResult[7];
          }
          if (cResult[8] === disabled) {
            if (cResult[9] === tmp5) {
              let tmp13;
              if (cResult[10] === tmp6) {
                tmp13 = cResult[11];
              }
              return tmp13;
            }
          }
          let obj2 = {
            onPress: tmp5,
            style: tmp6,
            accessible: true,
            accessibilityLabel: tmp8,
            disabled,
            children: tmp10,
          };
          const tmp15 = closure_10(channel(onPressEmoji[16]).PressableHighlight, obj2);
          cResult[8] = disabled;
          cResult[9] = tmp5;
          cResult[10] = tmp6;
          cResult[11] = tmp15;
          tmp13 = tmp15;
        }
      }
      const fn = function n() {
        onOpenPicker();
        const obj = openEmojiPickerActionSheet;
        const obj2 = {
          pickerIntention: EmojiIntention.REACTION,
          autoFocus: false,
          startExpanded: false,
          onPressEmoji,
          channel,
          reactionType: MessageReactionsTypes.ReactionTypes.NORMAL,
        };
        const result = obj.openEmojiPickerActionSheet(obj2);
      };
      cResult[0] = channel;
      cResult[1] = onOpenPicker;
      cResult[2] = onPressEmoji;
      cResult[3] = fn;
      tmp5 = fn;
    }
  : (channel) => {
      let intl;
      let items1;
      channel = channel.channel;
      const onOpenPicker = channel.onOpenPicker;
      const onPressEmoji = channel.onPressEmoji;
      const disabled = channel.disabled;
      const items = [channel, onPressEmoji, onOpenPicker];
      const tmp = closure_12();
      const callback = react.useCallback(() => {
        onOpenPicker();
        const obj = openEmojiPickerActionSheet;
        const obj2 = {
          pickerIntention: EmojiIntention.REACTION,
          autoFocus: false,
          startExpanded: false,
          onPressEmoji,
          channel,
          reactionType: MessageReactionsTypes.ReactionTypes.NORMAL,
        };
        const result = obj.openEmojiPickerActionSheet(obj2);
      }, items);
      let obj = {
        onPress: callback,
        style: items1,
        accessible: true,
        accessibilityLabel: intl.string(channel(onPressEmoji[8]).t.lfIHs4),
        disabled,
        children: closure_10(channel(onPressEmoji[15]).ReactionIcon, { size: "md" }),
      };
      items1 = [tmp.emoji];
      const PressableHighlight = channel(onPressEmoji[16]).PressableHighlight;
      intl = channel(onPressEmoji[8]).intl;
      return closure_10(PressableHighlight, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (content) => {
      let author;
      let channel;
      let closure_4;
      let closure_6;
      let disabled;
      let first;
      let input;
      let inputRow;
      let items;
      let items1;
      let items2;
      let items4;
      let obj5;
      let onPressEmoji;
      let tmp8;
      let tmp9;
      let tmpResult4;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(94);
      content = content.content;
      ({ author, channel, onPressEmoji } = content);
      const sendMessage = content.sendMessage;
      const tmp4 = closure_12();
      _asyncToGenerator = tmp4;
      let obj2 = react;
      const tmp6 = disabled(react.useState(false), 2);
      const tmp5 = disabled;
      disabled = tmp6[0];
      react = tmp6[1];
      if (cResult[0] !== content.content_type) {
        let tmp11;
        let tmp15;
        let str = "unknown";
        _require = "unknown";
        const tmp10 = globalThis;
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(onPressEmoji[8]).intl;
          const stringResult = intl.string(tmp(onPressEmoji[8]).t["5IEsGx"]);
          cResult[3] = stringResult;
          tmp11 = stringResult;
        } else {
          tmp11 = cResult[3];
        }
        const content_type = content.content_type;
        if (tmp(onPressEmoji[17]).ContentInventoryEntryType.TOP_GAME !== content_type) {
          if (tmp(onPressEmoji[17]).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
            if (tmp(onPressEmoji[17]).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
              let tmp13;
              _require = "hotwheels_custom_status";
              const _Symbol5 = Symbol;
              if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
                const intl2 = tmp(onPressEmoji[8]).intl;
                const stringResult1 = intl2.string(tmp(onPressEmoji[8]).t.umDRYM);
                cResult[5] = stringResult1;
                tmp13 = stringResult1;
              } else {
                tmp13 = cResult[5];
              }
              tmp11 = tmp13;
              str = "hotwheels_custom_status";
            }
          }
          cResult[0] = content.content_type;
          cResult[1] = str;
          cResult[2] = tmp11;
          tmp9 = tmp11;
          tmp8 = str;
        }
        _require = "hotwheels_gaming_activity";
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(onPressEmoji[8]).intl;
          const stringResult2 = intl3.string(tmp(onPressEmoji[8]).t.XC5YE5);
          cResult[4] = stringResult2;
          tmp15 = stringResult2;
        } else {
          tmp15 = cResult[4];
        }
        tmp11 = tmp15;
        str = "hotwheels_gaming_activity";
      } else {
        _require = cResult[1];
        tmp9 = cResult[2];
      }
      const tmp5Result = tmp5(obj2.useState(""), 2);
      const first1 = tmp5Result[0];
      let closure_8 = tmp18;
      if (cResult[6] === content.id) {
        if (cResult[7] === tmp8) {
          if (cResult[8] === first1) {
            let tmp19;
            if (cResult[9] === sendMessage) {
              tmp19 = cResult[10];
            }
            if (cResult[11] === content.id) {
              if (cResult[12] === tmp8) {
                let tmp20;
                let tmp29;
                if (cResult[13] === onPressEmoji) {
                  tmp20 = cResult[14];
                }
                let closure_9 = tmp20;
                const tmpResult = tmp(onPressEmoji[19]);
                const frequentlyUsedReactionEmojis = tmpResult.useFrequentlyUsedReactionEmojis(null);
                const tmp24 = content(onPressEmoji[20])();
                const tmpResult3 = tmp(onPressEmoji[21]);
                const clientThemesOverride = tmpResult3.useClientThemesOverride();
                const _Math = Math;
                const _Math2 = Math;
                const rounded = Math.floor(Math.min(content(onPressEmoji[22])().width, closure_8) / 52);
                if (cResult[15] !== tmp9) {
                  let obj3 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: tmp9 };
                  const tmp31 = closure_10(tmp(onPressEmoji[23]).Text, obj3);
                  cResult[15] = tmp9;
                  cResult[16] = tmp31;
                  tmp29 = tmp31;
                } else {
                  tmp29 = cResult[16];
                }
                if (cResult[17] === tmp4.header) {
                  let tmp32;
                  let tmp36;
                  if (cResult[18] === tmp29) {
                    tmp32 = cResult[19];
                  }
                  const _Symbol3 = Symbol;
                  const container = tmp4.container;
                  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                    let obj4 = { absolute: true, wide: true, tall: true, mix: true, mixAmount: obj5 };
                    obj5 = {
                      dark: tmp(onPressEmoji[25]).OverlayOpacity.LEVEL_7,
                      light: tmp(onPressEmoji[25]).OverlayOpacity.LEVEL_8,
                    };
                    const tmp23Result = content(onPressEmoji[24]);
                    const tmp39 = closure_10(tmp23Result, obj4);
                    cResult[20] = tmp39;
                    tmp36 = tmp39;
                  } else {
                    tmp36 = cResult[20];
                  }
                  if (cResult[21] === tmp4.contentContainer) {
                    let tmp40;
                    let tmp41;
                    if (cResult[22] === clientThemesOverride) {
                      tmp40 = cResult[23];
                    }
                    if (cResult[24] !== content) {
                      let obj6 = { content, renderForScreenshot: true };
                      const tmp43 = closure_10(content(onPressEmoji[26]), obj6);
                      cResult[24] = content;
                      cResult[25] = tmp43;
                      tmp41 = tmp43;
                    } else {
                      tmp41 = cResult[25];
                    }
                    if (cResult[26] === tmp40) {
                      let tmp44;
                      if (cResult[27] === tmp41) {
                        tmp44 = cResult[28];
                      }
                      if (cResult[29] === tmp24) {
                        let tmp48;
                        if (cResult[30] === tmp44) {
                          tmp48 = cResult[31];
                        }
                        if (cResult[32] === tmp4.base) {
                          let tmp51;
                          if (cResult[33] === tmp48) {
                            tmp51 = cResult[34];
                          }
                          if (cResult[35] === tmp4.preview) {
                            let tmp55;
                            if (cResult[36] === tmp51) {
                              tmp55 = cResult[37];
                            }
                            let submitting = null;
                            if (disabled) {
                              submitting = tmp4.submitting;
                            }
                            if (cResult[38] === tmp4.emojis) {
                              let tmp60;
                              let tmp61;
                              if (cResult[39] === submitting) {
                                tmp60 = cResult[40];
                              }
                              if (cResult[41] === frequentlyUsedReactionEmojis) {
                                if (cResult[42] === rounded) {
                                  if (cResult[43] === tmp20) {
                                    if (cResult[44] === tmp4.defaultEmoji) {
                                      if (cResult[45] === tmp4.emoji) {
                                        if (cResult[46] === tmp4.emojiImage) {
                                          if (cResult[47] === tmp4.emojiText) {
                                            if (cResult[48] === disabled) {
                                              tmp61 = cResult[49];
                                            }
                                            if (cResult[57] === content.id) {
                                              let tmp64;
                                              if (cResult[58] === tmp8) {
                                                tmp64 = cResult[59];
                                              }
                                              if (cResult[60] === channel) {
                                                if (cResult[61] === tmp20) {
                                                  if (cResult[62] === disabled) {
                                                    let tmp65;
                                                    if (cResult[63] === tmp64) {
                                                      tmp65 = cResult[64];
                                                    }
                                                    if (cResult[65] === tmp60) {
                                                      if (cResult[66] === tmp61) {
                                                        let tmp69;
                                                        let tmp73;
                                                        if (cResult[67] === tmp65) {
                                                          tmp69 = cResult[68];
                                                        }
                                                        ({ inputRow, input } = tmp4);
                                                        if (cResult[69] !== author) {
                                                          const intl4 = tmp(onPressEmoji[8]).intl;
                                                          const formatToPlainString = intl4.formatToPlainString;
                                                          let obj7 = { username: tmpResult4.getName(author) };
                                                          const m3dK5W = tmp(onPressEmoji[8]).t.m3dK5W;
                                                          tmpResult4 = tmp(onPressEmoji[30]);
                                                          const formatToPlainStringResult = formatToPlainString(
                                                            m3dK5W,
                                                            obj7,
                                                          );
                                                          cResult[69] = author;
                                                          cResult[70] = formatToPlainStringResult;
                                                          tmp73 = formatToPlainStringResult;
                                                        } else {
                                                          tmp73 = cResult[70];
                                                        }
                                                        if (cResult[71] === first1) {
                                                          if (cResult[72] === tmp4.input) {
                                                            if (cResult[73] === disabled) {
                                                              let tmp75;
                                                              let tmp79;
                                                              let tmp78;
                                                              if (cResult[74] === tmp73) {
                                                                tmp75 = cResult[75];
                                                              }
                                                              const _Symbol4 = Symbol;
                                                              if (
                                                                cResult[76] === Symbol.for("react.memo_cache_sentinel")
                                                              ) {
                                                                const intl5 = tmp(onPressEmoji[8]).intl;
                                                                const stringResult3 = intl5.string(
                                                                  tmp(onPressEmoji[8]).t.oeb1vg,
                                                                );
                                                                const obj8 = {
                                                                  size: "md",
                                                                  color: content(onPressEmoji[10]).unsafe_rawColors
                                                                    .WHITE,
                                                                };
                                                                const SendMessageIcon = tmp(
                                                                  onPressEmoji[32],
                                                                ).SendMessageIcon;
                                                                const tmp82 = closure_10(SendMessageIcon, obj8);
                                                                cResult[76] = stringResult3;
                                                                cResult[77] = tmp82;
                                                                tmp79 = tmp82;
                                                                tmp78 = stringResult3;
                                                              } else {
                                                                tmp78 = cResult[76];
                                                                tmp79 = cResult[77];
                                                              }
                                                              if (cResult[78] === tmp19) {
                                                                if (cResult[79] === disabled) {
                                                                  let tmp84;
                                                                  if ((cResult[80] === 0) === first1.length) {
                                                                    tmp84 = cResult[81];
                                                                  }
                                                                  if (cResult[82] === tmp4.inputRow) {
                                                                    if (cResult[83] === tmp75) {
                                                                      let tmp87;
                                                                      if (cResult[84] === tmp84) {
                                                                        tmp87 = cResult[85];
                                                                      }
                                                                      if (cResult[86] === tmp4.container) {
                                                                        if (cResult[87] === tmp55) {
                                                                          if (cResult[88] === tmp69) {
                                                                            let tmp91;
                                                                            if (cResult[89] === tmp87) {
                                                                              tmp91 = cResult[90];
                                                                            }
                                                                            if (cResult[91] === tmp91) {
                                                                              let tmp95;
                                                                              if (cResult[92] === tmp32) {
                                                                                tmp95 = cResult[93];
                                                                              }
                                                                              return tmp95;
                                                                            }
                                                                            const obj9 = {
                                                                              header: tmp32,
                                                                              children: tmp91,
                                                                            };
                                                                            const tmp97 = closure_10(
                                                                              tmp(onPressEmoji[34]).ActionSheet,
                                                                              obj9,
                                                                            );
                                                                            cResult[91] = tmp91;
                                                                            cResult[92] = tmp32;
                                                                            cResult[93] = tmp97;
                                                                            tmp95 = tmp97;
                                                                          }
                                                                        }
                                                                      }
                                                                      const obj10 = {
                                                                        style: container,
                                                                        children: items,
                                                                      };
                                                                      items = [tmp55, tmp69, tmp87];
                                                                      const tmp94 = closure_11(first1, obj10);
                                                                      cResult[86] = tmp4.container;
                                                                      cResult[87] = tmp55;
                                                                      cResult[88] = tmp69;
                                                                      cResult[89] = tmp87;
                                                                      cResult[90] = tmp94;
                                                                      tmp91 = tmp94;
                                                                    }
                                                                  }
                                                                  const obj11 = { style: inputRow, children: items1 };
                                                                  items1 = [tmp75, tmp84];
                                                                  const tmp90 = closure_11(first1, obj11);
                                                                  cResult[82] = tmp4.inputRow;
                                                                  cResult[83] = tmp75;
                                                                  cResult[84] = tmp84;
                                                                  cResult[85] = tmp90;
                                                                  tmp87 = tmp90;
                                                                }
                                                              }
                                                              let obj12 = {
                                                                accessibilityLabel: tmp78,
                                                                icon: tmp79,
                                                                size: "md",
                                                                onPress: tmp19,
                                                                disabled: 0 === first1.length,
                                                                loading: disabled,
                                                              };
                                                              const tmp86 = closure_10(
                                                                tmp(onPressEmoji[33]).IconButton,
                                                                obj12,
                                                              );
                                                              cResult[78] = tmp19;
                                                              cResult[79] = disabled;
                                                              cResult[80] = 0 === first1.length;
                                                              cResult[81] = tmp86;
                                                              tmp84 = tmp86;
                                                            }
                                                          }
                                                        }
                                                        const obj13 = {
                                                          containerStyle: input,
                                                          grow: true,
                                                          round: true,
                                                          placeholder: tmp73,
                                                          value: first1,
                                                          onChange: tmp5Result[1],
                                                          disabled,
                                                        };
                                                        const tmp77 = closure_10(
                                                          tmp(onPressEmoji[31]).TextInput,
                                                          obj13,
                                                        );
                                                        cResult[71] = first1;
                                                        cResult[72] = tmp4.input;
                                                        cResult[73] = disabled;
                                                        cResult[74] = tmp73;
                                                        cResult[75] = tmp77;
                                                        tmp75 = tmp77;
                                                      }
                                                    }
                                                    const obj14 = { style: tmp60, children: items2 };
                                                    items2 = [tmp61, tmp65];
                                                    const tmp72 = closure_11(first1, obj14);
                                                    cResult[65] = tmp60;
                                                    cResult[66] = tmp61;
                                                    cResult[67] = tmp65;
                                                    cResult[68] = tmp72;
                                                    tmp69 = tmp72;
                                                  }
                                                }
                                              }
                                              const obj15 = {
                                                onOpenPicker: tmp64,
                                                channel,
                                                onPressEmoji: tmp20,
                                                disabled,
                                              };
                                              const tmp68 = closure_10(closure_13, obj15);
                                              cResult[60] = channel;
                                              cResult[61] = tmp20;
                                              cResult[62] = disabled;
                                              cResult[63] = tmp64;
                                              cResult[64] = tmp68;
                                              tmp65 = tmp68;
                                            }
                                            function ae() {
                                              const obj = ICYMIActionCreatorsDefault;
                                              obj.itemInteracted(content.id, itemType, "press_reply_reaction_picker");
                                              const obj2 = ICYMIActionCreatorsDefault;
                                              const obj3 = {
                                                itemId: content.id,
                                                itemType,
                                                actionParameters: {
                                                  actionGestureType: "press",
                                                  actionTargetElement: "reaction_picker_button",
                                                  actionIntentType: "open",
                                                  actionDestinationType: null,
                                                },
                                              };
                                              obj2.feedItemActioned(obj3);
                                            }
                                            cResult[57] = content.id;
                                            cResult[58] = tmp8;
                                            cResult[59] = ae;
                                            tmp64 = ae;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              if (cResult[50] === tmp20) {
                                if (cResult[51] === tmp4.defaultEmoji) {
                                  if (cResult[52] === tmp4.emoji) {
                                    if (cResult[53] === tmp4.emojiImage) {
                                      if (cResult[54] === tmp4.emojiText) {
                                        let tmp62;
                                        if (cResult[55] === disabled) {
                                          tmp62 = cResult[56];
                                        }
                                        const substr = frequentlyUsedReactionEmojis.slice(0, rounded - 1);
                                        const mapped = substr.map(tmp62);
                                        cResult[41] = frequentlyUsedReactionEmojis;
                                        cResult[42] = rounded;
                                        cResult[43] = tmp20;
                                        cResult[44] = tmp4.defaultEmoji;
                                        cResult[45] = tmp4.emoji;
                                        cResult[46] = tmp4.emojiImage;
                                        cResult[47] = tmp4.emojiText;
                                        cResult[48] = disabled;
                                        cResult[49] = mapped;
                                        tmp61 = mapped;
                                      }
                                    }
                                  }
                                }
                              }
                              function re(id) {
                                let items;
                                let items1;
                                let obj12;
                                let obj2;
                                let obj3;
                                let obj4;
                                let obj6;
                                let tmp11;
                                let tmp9;
                                itemType = id;
                                if (null != id.id) {
                                  const obj = {
                                    onPress() {
                                      return closure_9(id);
                                    },
                                    style: closure_4.emoji,
                                    disabled,
                                    children: closure_1_10(tmp9, obj2),
                                  };
                                  const PressableHighlight = itemType(onPressEmoji[16]).PressableHighlight;
                                  obj2 = { style: items, source: obj3 };
                                  items = [,];
                                  ({ defaultEmoji: arr[0], emojiImage: arr[1] } = closure_4);
                                  obj3 = { uri: obj4.getEmojiURL(obj6) };
                                  obj6 = { id: null, animated: null, size: 48 };
                                  ({ id: obj5.id, animated: obj5.animated } = id);
                                  tmp9 = content(onPressEmoji[28]);
                                  obj4 = content(onPressEmoji[29]);
                                  tmp11 = closure_1_10(PressableHighlight, obj, id.id);
                                } else {
                                  const obj7 = {
                                    onPress() {
                                      return closure_9(id);
                                    },
                                    style: closure_4.emoji,
                                    disabled,
                                    children: closure_1_10(itemType(onPressEmoji[23]).Text, obj12),
                                  };
                                  const PressableHighlight2 = itemType(onPressEmoji[16]).PressableHighlight;
                                  obj12 = {
                                    variant: "text-md/medium",
                                    color: "interactive-text-default",
                                    style: items1,
                                    allowFontScaling: false,
                                    children: id.surrogates,
                                  };
                                  items1 = [,];
                                  ({ defaultEmoji: arr2[0], emojiText: arr2[1] } = closure_4);
                                  tmp11 = closure_1_10(PressableHighlight2, obj7, id.surrogates);
                                }
                                return tmp11;
                              }
                              cResult[50] = tmp20;
                              ({ defaultEmoji: tmp3[51], emoji: tmp3[52] } = tmp4);
                              cResult[53] = tmp4.emojiImage;
                              cResult[54] = tmp4.emojiText;
                              cResult[55] = disabled;
                              cResult[56] = re;
                              tmp62 = re;
                            }
                            const items3 = [tmp4.emojis, submitting];
                            cResult[38] = tmp4.emojis;
                            cResult[39] = submitting;
                            cResult[40] = items3;
                            tmp60 = items3;
                          }
                          const obj16 = { style: tmp4.preview, children: tmp51 };
                          const tmp58 = closure_10(first1, obj16);
                          cResult[35] = tmp4.preview;
                          cResult[36] = tmp51;
                          cResult[37] = tmp58;
                          tmp55 = tmp58;
                        }
                        const obj17 = { style: tmp4.base, children: items4 };
                        items4 = [tmp36, tmp48];
                        const tmp54 = closure_11(first1, obj17);
                        cResult[32] = tmp4.base;
                        cResult[33] = tmp48;
                        cResult[34] = tmp54;
                        tmp51 = tmp54;
                      }
                      const obj18 = { gradient: tmp24, children: tmp44 };
                      const tmp50 = closure_10(tmp(onPressEmoji[27]).ThemeContextProvider, obj18);
                      cResult[29] = tmp24;
                      cResult[30] = tmp44;
                      cResult[31] = tmp50;
                      tmp48 = tmp50;
                    }
                    const obj19 = { style: tmp40, children: tmp41 };
                    const tmp47 = closure_10(first1, obj19);
                    cResult[26] = tmp40;
                    cResult[27] = tmp41;
                    cResult[28] = tmp47;
                    tmp44 = tmp47;
                  }
                  const items5 = [tmp4.contentContainer, clientThemesOverride];
                  cResult[21] = tmp4.contentContainer;
                  cResult[22] = clientThemesOverride;
                  cResult[23] = items5;
                  tmp40 = items5;
                }
                const obj20 = { style: tmp4.header, children: tmp29 };
                const tmp35 = closure_10(first1, obj20);
                cResult[17] = tmp4.header;
                cResult[18] = tmp29;
                cResult[19] = tmp35;
                tmp32 = tmp35;
              }
            }
            _require = _asyncToGenerator(async (itemType) => {
              let c2 = 0;
              let c3 = 0;
              return (async (arg0) => {
                if (c3 === 2) {
                  c3 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp3 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    return { value, done: true };
                  } else {
                    return { value: "IconComponent", done: null };
                  }
                } else {
                  try {
                    c3 = 2;
                    if (0 === v1) {
                      if (arg0 === 1) {
                        c3 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 3;
                        return { value, done: true };
                      } else {
                        user = tmp;
                        closure_1_6(true);
                        const obj5 = content(onPressEmoji[18]);
                        obj5.itemInteracted(user.id, itemType, "press_emoji_send");
                        const obj4 = {
                          itemId: user.id,
                          itemType,
                          actionParameters: {
                            actionGestureType: "press",
                            actionTargetElement: "reaction_picker_button",
                            actionIntentType: "open",
                            actionDestinationType: null,
                          },
                        };
                        const obj6 = content(onPressEmoji[18]);
                        obj6.feedItemActioned(obj4);
                        v1 = 1;
                        c3 = 1;
                        const obj7 = { value: v1(itemType), done: false };
                        return obj7;
                      }
                    } else if (arg0 === 1) {
                      c3 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 3;
                      return { value, done: true };
                    } else {
                      closure_1_6(false);
                      c3 = 3;
                      return { value: "IconComponent", done: null };
                    }
                  } catch (tmp8) {
                    c3 = 3;
                    throw tmp8;
                  }
                }
              })();
            });
            const fn2 = function () {
              return closure_0(...arguments);
            };
            cResult[11] = content.id;
            cResult[12] = tmp8;
            cResult[13] = onPressEmoji;
            cResult[14] = fn2;
            tmp20 = fn2;
          }
        }
      }
      _require = _asyncToGenerator(async () => {
        let user;
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c2 = 2;
            if (0 === user) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                itemType = tmp;
                closure_1_6(true);
                const obj5 = content(onPressEmoji[18]);
                obj5.itemInteracted(user.id, itemType, "press_reply_send");
                const obj4 = {
                  itemId: user.id,
                  itemType,
                  actionParameters: {
                    actionGestureType: "press",
                    actionTargetElement: "reply_button",
                    actionIntentType: "reply",
                    actionDestinationType: null,
                  },
                };
                const obj6 = content(onPressEmoji[18]);
                obj6.feedItemActioned(obj4);
                user = 1;
                c2 = 1;
                const obj7 = { value: sendMessage(first1), done: false };
                return obj7;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_1_6(false);
              closure_1_8("");
              c2 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp10) {
            c2 = 3;
            throw tmp10;
          }
        }
      });
      const fn = function () {
        return closure_0(...arguments);
      };
      cResult[6] = content.id;
      cResult[7] = tmp8;
      cResult[8] = first1;
      cResult[9] = sendMessage;
      cResult[10] = fn;
      tmp19 = fn;
    }
  : (content) => {
      let SendMessageIcon;
      let author;
      let channel;
      let closure_5;
      let first;
      let formatToPlainString;
      let intl5;
      let items3;
      let items4;
      let items5;
      let items7;
      let items8;
      let loading;
      let m3dK5W;
      let obj11;
      let obj12;
      let obj17;
      let obj19;
      let obj3;
      let obj4;
      let obj5;
      let obj7;
      let obj9;
      let tmp5Result4;
      content = content.content;
      const onPressEmoji = content.onPressEmoji;
      let sendMessage = content.sendMessage;
      loading = undefined;
      _slicedToArray = undefined;
      let hotwheels_gaming_activity;
      let first1;
      let closure_8;
      let callback1;
      let width;
      ({ author, channel } = content);
      const tmp = closure_12();
      let closure_3 = tmp;
      let obj = hotwheels_gaming_activity;
      const tmp2 = _slicedToArray;
      [loading, _slicedToArray] = hotwheels_gaming_activity.useState(false);
      let str = "unknown";
      hotwheels_gaming_activity = "unknown";
      const intl = content(sendMessage[8]).intl;
      const content_type = content.content_type;
      const stringResult = intl.string(content(sendMessage[8]).t["5IEsGx"]);
      if (content(sendMessage[17]).ContentInventoryEntryType.TOP_GAME !== content_type) {
        let stringResult1;
        if (content(sendMessage[17]).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
          stringResult1 = stringResult;
          if (content(sendMessage[17]).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
            hotwheels_gaming_activity = "hotwheels_custom_status";
            const intl2 = tmp5(tmp6[8]).intl;
            stringResult1 = intl2.string(tmp5(tmp6[8]).t.umDRYM);
            str = "hotwheels_custom_status";
          }
        }
        const tmp2Result = tmp2(obj.useState(""), 2);
        first1 = tmp2Result[0];
        closure_8 = tmp10;
        let tmp11 = loading;
        let items = [content.id, str, first1, sendMessage];
        const callback = obj.useCallback(
          loading(function* () {
            let c2;
            let v1;
            if (sendMessage === 2) {
              sendMessage = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                sendMessage = 2;
                if (0 === v1) {
                  if (arg0 === 1) {
                    sendMessage = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    sendMessage = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    let closure_0 = tmp3;
                    closure_5(true);
                    const obj5 = v1(sendMessage[18]);
                    obj5.itemInteracted(content.id, hotwheels_gaming_activity, "press_reply_send");
                    const obj4 = {
                      itemId: content.id,
                      itemType: hotwheels_gaming_activity,
                      actionParameters: {
                        actionGestureType: "press",
                        actionTargetElement: "reply_button",
                        actionIntentType: "reply",
                        actionDestinationType: null,
                      },
                    };
                    const obj6 = v1(sendMessage[18]);
                    obj6.feedItemActioned(obj4);
                    v1 = 1;
                    sendMessage = 1;
                    const obj7 = { value: sendMessage(first1), done: false };
                    return obj7;
                  }
                } else if (arg0 === 1) {
                  sendMessage = 3;
                  throw value;
                } else if (arg0 === 2) {
                  sendMessage = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  closure_128_5(false);
                  closure_128_8("");
                  sendMessage = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp9) {
                sendMessage = 3;
                throw tmp9;
              }
            }
          }),
          items,
        );
        const useCallback = obj.useCallback;
        let closure_0 = loading((arg0) => {
          let closure_1;
          let itemType;
          const user = arg0;
          let c2 = 0;
          let c3 = 0;
          return (function* (arg0) {
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                return { value, done: true };
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                c3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    return { value, done: true };
                  } else {
                    closure_1_5(true);
                    const obj5 = onPressEmoji(sendMessage[18]);
                    obj5.itemInteracted(user.id, itemType, "press_emoji_send");
                    const obj4 = {
                      itemId: user.id,
                      itemType,
                      actionParameters: {
                        actionGestureType: "press",
                        actionTargetElement: "reaction_picker_button",
                        actionIntentType: "open",
                        actionDestinationType: null,
                      },
                    };
                    const obj6 = onPressEmoji(sendMessage[18]);
                    obj6.feedItemActioned(obj4);
                    c2 = 1;
                    c3 = 1;
                    const obj7 = { value: tmp(user), done: false };
                    return obj7;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  return { value, done: true };
                } else {
                  closure_1_5(false);
                  c3 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp8) {
                c3 = 3;
                throw tmp8;
              }
            }
          })();
        });
        let items1 = [content.id, str, onPressEmoji];
        callback1 = useCallback(function () {
          return closure_0(...arguments);
        }, items1);
        const tmp5Result = content(sendMessage[19]);
        const frequentlyUsedReactionEmojis = tmp5Result.useFrequentlyUsedReactionEmojis(null);
        const tmp16 = onPressEmoji(sendMessage[20])();
        const tmp5Result3 = content(sendMessage[21]);
        const clientThemesOverride = tmp5Result3.useClientThemesOverride();
        width = onPressEmoji(tmp6[22])().width;
        const items2 = [width];
        const memo = obj.useMemo(() => Math.floor(Math.min(width, ACTION_SHEET_MAX_WIDTH) / 52), items2);
        let obj2 = { header: width(first1, obj3), children: closure_11(first1, obj5) };
        obj3 = { style: tmp.header, children: width(content(tmp6[23]).Text, obj4) };
        const ActionSheet = tmp5(tmp6[34]).ActionSheet;
        obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: stringResult1 };
        obj5 = { style: tmp.container, children: items5 };
        let obj6 = { style: tmp.preview, children: closure_11(first1, obj7) };
        obj7 = { style: tmp.base, children: items3 };
        const obj8 = { absolute: true, wide: true, tall: true, mix: true, mixAmount: obj9 };
        obj9 = {
          dark: content(sendMessage[25]).OverlayOpacity.LEVEL_7,
          light: content(sendMessage[25]).OverlayOpacity.LEVEL_8,
        };
        const tmp22 = onPressEmoji(sendMessage[24]);
        items3 = [width(tmp22, obj8)];
        const obj10 = { gradient: tmp16, children: width(first1, obj11) };
        obj11 = { style: items4, children: width(onPressEmoji(sendMessage[26]), obj12) };
        items4 = [tmp.contentContainer, clientThemesOverride];
        const ThemeContextProvider = tmp5(tmp6[27]).ThemeContextProvider;
        obj12 = { content, renderForScreenshot: true };
        items3[1] = width(ThemeContextProvider, obj10);
        items5 = [width(first1, obj6), ,];
        const items6 = [tmp.emojis];
        let submitting = null;
        const tmp15 = onPressEmoji;
        if (loading) {
          submitting = tmp.submitting;
        }
        const obj13 = { style: items6, children: items7 };
        items6[1] = submitting;
        const substr = frequentlyUsedReactionEmojis.slice(0, memo - 1);
        items7 = [
          substr.map((id) => {
            let items;
            let items1;
            let obj12;
            let obj2;
            let obj3;
            let obj4;
            let obj6;
            let tmp11;
            let tmp9;
            let closure_0 = id;
            if (null != id.id) {
              const obj = {
                onPress() {
                  return callback1(id);
                },
                style: closure_3.emoji,
                disabled,
                children: width(tmp9, obj2),
              };
              const PressableHighlight = content(sendMessage[16]).PressableHighlight;
              obj2 = { style: items, source: obj3 };
              items = [,];
              ({ defaultEmoji: arr[0], emojiImage: arr[1] } = closure_3);
              obj3 = { uri: obj4.getEmojiURL(obj6) };
              obj6 = { id: null, animated: null, size: 48 };
              ({ id: obj5.id, animated: obj5.animated } = id);
              tmp9 = onPressEmoji(sendMessage[28]);
              obj4 = onPressEmoji(sendMessage[29]);
              tmp11 = width(PressableHighlight, obj, id.id);
            } else {
              const obj7 = {
                onPress() {
                  return callback1(id);
                },
                style: closure_3.emoji,
                disabled,
                children: width(content(sendMessage[23]).Text, obj12),
              };
              const PressableHighlight2 = content(sendMessage[16]).PressableHighlight;
              obj12 = {
                variant: "text-md/medium",
                color: "interactive-text-default",
                style: items1,
                allowFontScaling: false,
                children: id.surrogates,
              };
              items1 = [,];
              ({ defaultEmoji: arr2[0], emojiText: arr2[1] } = closure_3);
              tmp11 = width(PressableHighlight2, obj7, id.surrogates);
            }
            return tmp11;
          }),
        ];
        const obj14 = {
          onOpenPicker() {
            const obj = ICYMIActionCreatorsDefault;
            obj.itemInteracted(content.id, hotwheels_gaming_activity, "press_reply_reaction_picker");
            const obj2 = ICYMIActionCreatorsDefault;
            const obj3 = {
              itemId: content.id,
              itemType: hotwheels_gaming_activity,
              actionParameters: {
                actionGestureType: "press",
                actionTargetElement: "reaction_picker_button",
                actionIntentType: "open",
                actionDestinationType: null,
              },
            };
            obj2.feedItemActioned(obj3);
          },
          channel,
          onPressEmoji: callback1,
          disabled: loading,
        };
        items7[1] = width(closure_13, obj14);
        items5[1] = closure_11(first1, obj13);
        const obj15 = { style: tmp.inputRow, children: items8 };
        const obj16 = {
          containerStyle: tmp.input,
          grow: true,
          round: true,
          placeholder: formatToPlainString(m3dK5W, obj17),
          value: first1,
          onChange: tmp2Result[1],
          disabled: loading,
        };
        const TextInput = tmp5(tmp6[31]).TextInput;
        const intl4 = tmp5(tmp6[8]).intl;
        formatToPlainString = intl4.formatToPlainString;
        obj17 = { username: tmp5Result4.getName(author) };
        m3dK5W = tmp5(tmp6[8]).t.m3dK5W;
        tmp5Result4 = content(sendMessage[30]);
        items8 = [width(TextInput, obj16)];
        const obj18 = {
          accessibilityLabel: intl5.string(content(sendMessage[8]).t.oeb1vg),
          icon: width(SendMessageIcon, obj19),
          size: "md",
          onPress: callback,
          disabled: 0 === first1.length,
          loading,
        };
        const IconButton = tmp5(tmp6[33]).IconButton;
        intl5 = tmp5(tmp6[8]).intl;
        obj19 = { size: "md", color: tmp15(sendMessage[10]).unsafe_rawColors.WHITE };
        SendMessageIcon = tmp5(tmp6[32]).SendMessageIcon;
        items8[1] = width(IconButton, obj18);
        items5[2] = closure_11(first1, obj15);
        return width(ActionSheet, obj2);
      }
      hotwheels_gaming_activity = "hotwheels_gaming_activity";
      const intl3 = tmp5(tmp6[8]).intl;
      stringResult1 = intl3.string(tmp5(tmp6[8]).t.XC5YE5);
      str = "hotwheels_gaming_activity";
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let obj6;
      let tmp4;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(4);
      if (cResult[0] !== arg0) {
        const _Object = Object;
        _objectDestructuringEmpty(arg0);
        const obj2 = assign({}, arg0);
        cResult[0] = arg0;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== tmp4) {
        const obj3 = { children: authStore(closure_14, obj6) };
        obj6 = {};
        const ICYMIContextProvider = ICYMIContext.ICYMIContextProvider;
        const merged = Object.assign(tmp4);
        const tmp15 = authStore(ICYMIContextProvider, obj3);
        cResult[2] = tmp4;
        cResult[3] = tmp15;
        tmp9 = tmp15;
      } else {
        tmp9 = cResult[3];
      }
      return tmp9;
    }
  : (arg0) => {
      let obj2;
      if (arg0 == null) {
        throw new TypeError("Cannot destructure 'undefined' or 'null'.");
      } else {
        const merged = Object.assign(arg0, undefined);
        const obj = { children: authStore(closure_14, obj2) };
        obj2 = {};
        const ICYMIContextProvider = ICYMIContext.ICYMIContextProvider;
        const merged1 = Object.assign(merged);
        return authStore(ICYMIContextProvider, obj);
      }
    };
let result = size.fileFinishedImporting("modules/icymi/native/content_inventory/ReactActionSheet.tsx");

export default tmp4;
export const getStatusReplyContent = function getStatusReplyContent(reply) {
  let attachments;
  let emojiStr;
  let formatToPlainStringResult;
  let isForward;
  let status;
  let tmp5;
  let username;
  ({ username, status, emojiStr, attachments, isForward } = reply);
  reply = reply.reply;
  if (isForward === undefined) {
    isForward = false;
  }
  const intl = intl6.intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = intl6.t;
  if (isForward) {
    const obj2 = { username };
    formatToPlainStringResult = formatToPlainString(t.S5JNyW, obj2);
    tmp5 = require;
  } else {
    const obj = { username };
    formatToPlainStringResult = formatToPlainString(t.XPQgL2, obj);
    tmp5 = require;
  }
  const items = [];
  items.push("> -# *" + formatToPlainStringResult + "*");
  const tmp7 = status.length > 0 || emojiStr.length > 0;
  if (tmp7) {
    const _HermesInternal = HermesInternal;
    items.push("> " + emojiStr + " " + status);
  }
  if (null != attachments) {
    if (attachments.length > 0) {
      const intl2 = tmp5(1126).intl;
      const _HermesInternal2 = HermesInternal;
      const obj3 = { attachmentsCount: attachments.length };
      items.push("> -# *" + intl2.formatToPlainString(tmp5(1126).t["JiNPo+"], obj3) + "*");
    }
  }
  items.push(reply);
  return items.join("\n");
};
