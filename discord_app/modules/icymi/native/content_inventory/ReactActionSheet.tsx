// === Module 16489: ReactActionSheet ===

// Module 16489 (ReactActionSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 7272 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8039 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 9879 */;
import ICYMIContext from "ICYMIContext" /* 16435 */;
import _objectDestructuringEmpty from "_objectDestructuringEmpty" /* 11884 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const ACTION_SHEET_MAX_WIDTH = fn(6653).ACTION_SHEET_MAX_WIDTH;
const EmojiIntention = fn(1380).EmojiIntention;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { header: { width: "100%", display: "flex", alignItems: "center", padding: 8 }, container: { gap: 12 }, preview: { borderRadius: nativeDefault.radii.md, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG }, base: { position: "relative" }, contentContainer: null, inputRow: null, input: null, emojis: null, submitting: null, emoji: null, defaultEmoji: null, emojiImage: null, emojiText: null };
let obj3 = { borderRadius: nativeDefault.radii.md, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG };
obj2.contentContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.inputRow = { flexDirection: "row", alignItems: "center", gap: 8 };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.input = { flex: 1, borderRadius: nativeDefault.radii.round };
obj2.emojis = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj2.submitting = { opacity: 0.6 };
let obj5 = { flex: 1, borderRadius: nativeDefault.radii.round };
obj2.emoji = { padding: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
obj2.defaultEmoji = { width: 24, height: 24 };
obj2.emojiImage = { resizeMode: "contain", width: 24, height: 24 };
obj2.emojiText = { lineHeight: 24, fontSize: 20, textAlign: "center", paddingTop: 2 };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(onPressEmoji[12]).c(12);
  channel = channel.channel;
  const onOpenPicker = channel.onOpenPicker;
  onPressEmoji = channel.onPressEmoji;
  const disabled = channel.disabled;
  const tmp4 = closure_12();
  if (cResult[0] === channel) {
    if (cResult[1] === onOpenPicker) {
      if (cResult[2] === onPressEmoji) {
        let tmp5 = cResult[3];
      }
      if (cResult[4] !== tmp4.emoji) {
        const items = [tmp4.emoji];
        cResult[4] = tmp4.emoji;
        cResult[5] = items;
        let tmp6 = items;
      } else {
        tmp6 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[8]).intl;
        const stringResult = intl.string(tmp(tmp2[8]).t.lfIHs4);
        cResult[6] = stringResult;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[6];
      }
      const _Symbol2 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp12 = closure_10(tmp(tmp2[15]).ReactionIcon, { size: "md" });
        cResult[7] = tmp12;
        let tmp10 = tmp12;
      } else {
        tmp10 = cResult[7];
      }
      if (cResult[8] === disabled) {
        if (cResult[9] === tmp5) {
          if (cResult[10] === tmp6) {
            let tmp13 = cResult[11];
          }
          return tmp13;
        }
      }
      const obj2 = { onPress: tmp5, style: tmp6, accessible: true, accessibilityLabel: tmp8, disabled, children: tmp10 };
      const tmp15 = closure_10(tmp(tmp2[16]).PressableHighlight, obj2);
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
    const result = obj.openEmojiPickerActionSheet({ pickerIntention: EmojiIntention.REACTION, autoFocus: false, startExpanded: false, onPressEmoji, channel, reactionType: MessageReactionsTypes.ReactionTypes.NORMAL });
  };
  cResult[0] = channel;
  cResult[1] = onOpenPicker;
  cResult[2] = onPressEmoji;
  cResult[3] = fn;
  tmp5 = fn;
  let obj = channel(onPressEmoji[12]);
}) : ((channel) => {
  channel = channel.channel;
  const onOpenPicker = channel.onOpenPicker;
  const onPressEmoji = channel.onPressEmoji;
  const items = [channel, onPressEmoji, onOpenPicker];
  const callback = noop.useCallback(() => {
    onOpenPicker();
    const obj = openEmojiPickerActionSheet;
    const result = obj.openEmojiPickerActionSheet({ pickerIntention: EmojiIntention.REACTION, autoFocus: false, startExpanded: false, onPressEmoji, channel, reactionType: MessageReactionsTypes.ReactionTypes.NORMAL });
  }, items);
  let obj = { onPress: callback, style: null, accessible: true, accessibilityLabel: null, disabled: null, children: null };
  const items1 = [closure_12().emoji];
  obj.style = items1;
  const intl = channel(onPressEmoji[8]).intl;
  obj.accessibilityLabel = intl.string(channel(onPressEmoji[8]).t.lfIHs4);
  obj.disabled = channel.disabled;
  obj.children = closure_10(channel(onPressEmoji[15]).ReactionIcon, { size: "md" });
  return closure_10(channel(onPressEmoji[16]).PressableHighlight, obj);
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((content) => {
  const cResult = require("c").c(94);
  content = content.content;
  ({ author, channel, onPressEmoji } = content);
  const sendMessage = content.sendMessage;
  const tmp4 = closure_12();
  asyncGeneratorStep = tmp4;
  const tmp6 = disabled(noop.useState(false), 2);
  disabled = tmp6[0];
  noop = tmp6[1];
  if (cResult[0] !== content.content_type) {
    let str = "unknown";
    _require = "unknown";
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(onPressEmoji[8]).intl;
      const stringResult = intl.string(tmp(onPressEmoji[8]).t["5IEsGx"]);
      cResult[3] = stringResult;
      let tmp11 = stringResult;
    } else {
      tmp11 = cResult[3];
    }
    const content_type = content.content_type;
    if (tmp(onPressEmoji[17]).ContentInventoryEntryType.TOP_GAME !== content_type) {
      if (tmp(onPressEmoji[17]).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
        if (tmp(onPressEmoji[17]).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
          _require = "hotwheels_custom_status";
          const _Symbol5 = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(onPressEmoji[8]).intl;
            const stringResult1 = intl2.string(tmp(onPressEmoji[8]).t.umDRYM);
            cResult[5] = stringResult1;
            let tmp13 = stringResult1;
          } else {
            tmp13 = cResult[5];
          }
          tmp11 = tmp13;
          str = "hotwheels_custom_status";
        }
        cResult[0] = content.content_type;
        cResult[1] = str;
        cResult[2] = tmp11;
      }
    }
    _require = "hotwheels_gaming_activity";
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(onPressEmoji[8]).intl;
      const stringResult2 = intl3.string(tmp(onPressEmoji[8]).t.XC5YE5);
      cResult[4] = stringResult2;
    }
  } else {
    _require = tmp8;
    const tmp5Result = tmp5(obj2.useState(""), 2);
    const first1 = tmp5Result[0];
    closure_8 = tmp21;
    if (cResult[6] === content.id) {
      if (cResult[7] === tmp8) {
        if (cResult[8] === first1) {
          if (cResult[9] === sendMessage) {
            let tmp22 = cResult[10];
          }
          if (cResult[11] === content.id) {
            if (cResult[12] === tmp8) {
              if (cResult[13] === onPressEmoji) {
                let tmp24 = cResult[14];
              }
              closure_9 = tmp24;
              const frequentlyUsedReactionEmojis = tmp(onPressEmoji[19]).useFrequentlyUsedReactionEmojis(null);
              const tmp28 = content(onPressEmoji[20])();
              const tmpResult = tmp(onPressEmoji[19]);
              const clientThemesOverride = tmp(onPressEmoji[21]).useClientThemesOverride();
              const _Math = Math;
              const _Math2 = Math;
              let num15 = 52;
              emojiText = Math.floor(Math.min(content(onPressEmoji[22])().width, closure_8) / 52);
              if (cResult[15] !== tmp9) {
                let obj3 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: tmp9 };
                const tmp34 = closure_10(tmp(onPressEmoji[23]).Text, obj3);
                cResult[15] = tmp9;
                cResult[16] = tmp34;
                let tmp32 = tmp34;
              } else {
                tmp32 = cResult[16];
              }
              if (cResult[17] === tmp4.header) {
                if (cResult[18] === tmp32) {
                  let tmp35 = cResult[19];
                }
                const _Symbol3 = Symbol;
                if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                  let obj4 = { absolute: true, wide: true, tall: true, mix: true, mixAmount: null };
                  let obj5 = { dark: tmp(onPressEmoji[25]).OverlayOpacity.LEVEL_7, light: tmp(onPressEmoji[25]).OverlayOpacity.LEVEL_8 };
                  obj4.mixAmount = obj5;
                  const tmp42 = closure_10(tmp27(onPressEmoji[24]), obj4);
                  cResult[20] = tmp42;
                  let tmp39 = tmp42;
                  const tmp27Result = tmp27(onPressEmoji[24]);
                } else {
                  tmp39 = cResult[20];
                }
                if (cResult[21] === tmp4.contentContainer) {
                  if (cResult[22] === clientThemesOverride) {
                    let tmp43 = cResult[23];
                  }
                  if (cResult[24] !== content) {
                    let obj6 = { content, renderForScreenshot: true };
                    const tmp46 = closure_10(tmp27(onPressEmoji[26]), obj6);
                    cResult[24] = content;
                    cResult[25] = tmp46;
                    let tmp44 = tmp46;
                  } else {
                    tmp44 = cResult[25];
                  }
                  if (cResult[26] === tmp43) {
                    if (cResult[27] === tmp44) {
                      let tmp47 = cResult[28];
                    }
                    if (cResult[29] === tmp28) {
                      if (cResult[30] === tmp47) {
                        let tmp51 = cResult[31];
                      }
                      if (cResult[32] === tmp4.base) {
                        if (cResult[33] === tmp51) {
                          let tmp54 = cResult[34];
                        }
                        if (cResult[35] === tmp4.preview) {
                          if (cResult[36] === tmp54) {
                            let tmp58 = cResult[37];
                          }
                          let submitting = null;
                          if (disabled) {
                            submitting = tmp4.submitting;
                          }
                          if (cResult[38] === tmp4.emojis) {
                            if (cResult[39] === submitting) {
                              let tmp63 = cResult[40];
                            }
                            if (cResult[41] === frequentlyUsedReactionEmojis) {
                              if (cResult[42] === emojiText) {
                                if (cResult[43] === tmp24) {
                                  if (cResult[44] === tmp4.defaultEmoji) {
                                    if (cResult[45] === tmp4.emoji) {
                                      if (cResult[46] === tmp4.emojiImage) {
                                        if (cResult[47] === tmp4.emojiText) {
                                          if (cResult[48] === disabled) {
                                            if (cResult[57] === content.id) {
                                              if (cResult[58] === tmp8) {
                                                let tmp68 = cResult[59];
                                              }
                                              if (cResult[60] === channel) {
                                                if (cResult[61] === tmp24) {
                                                  if (cResult[62] === disabled) {
                                                    if (cResult[63] === tmp68) {
                                                      let tmp69 = cResult[64];
                                                    }
                                                    if (cResult[65] === tmp63) {
                                                      if (cResult[66] === tmp64) {
                                                        if (cResult[67] === tmp69) {
                                                          let tmp73 = cResult[68];
                                                        }
                                                        ({ inputRow, input } = tmp4);
                                                        if (cResult[69] !== author) {
                                                          const intl4 = tmp(onPressEmoji[8]).intl;
                                                          let obj7 = { username: tmp(onPressEmoji[30]).getName(author) };
                                                          const formatToPlainStringResult = intl4.formatToPlainString(tmp(onPressEmoji[8]).t.m3dK5W, obj7);
                                                          cResult[69] = author;
                                                          cResult[70] = formatToPlainStringResult;
                                                          let tmp77 = formatToPlainStringResult;
                                                          const tmpResult4 = tmp(onPressEmoji[30]);
                                                        } else {
                                                          tmp77 = cResult[70];
                                                        }
                                                        if (cResult[71] === first1) {
                                                          if (cResult[72] === tmp4.input) {
                                                            if (cResult[73] === disabled) {
                                                              if (cResult[74] === tmp77) {
                                                                let tmp79 = cResult[75];
                                                              }
                                                              const _Symbol4 = Symbol;
                                                              if (cResult[76] === Symbol.for("react.memo_cache_sentinel")) {
                                                                const intl5 = tmp(onPressEmoji[8]).intl;
                                                                const stringResult3 = intl5.string(tmp(onPressEmoji[8]).t.oeb1vg);
                                                                const obj8 = { size: "md", color: tmp27(onPressEmoji[10]).unsafe_rawColors.WHITE };
                                                                const tmp86 = closure_10(tmp(onPressEmoji[32]).SendMessageIcon, obj8);
                                                                cResult[76] = stringResult3;
                                                                cResult[77] = tmp86;
                                                                let tmp83 = tmp86;
                                                                let tmp82 = stringResult3;
                                                              } else {
                                                                tmp82 = cResult[76];
                                                                tmp83 = cResult[77];
                                                              }
                                                              if (cResult[78] === tmp22) {
                                                                if (cResult[79] === disabled) {
                                                                  if (cResult[80] === tmp87) {
                                                                    let tmp88 = cResult[81];
                                                                  }
                                                                  if (cResult[82] === tmp4.inputRow) {
                                                                    if (cResult[83] === tmp79) {
                                                                      if (cResult[84] === tmp88) {
                                                                        let tmp91 = cResult[85];
                                                                      }
                                                                      if (cResult[86] === tmp4.container) {
                                                                        if (cResult[87] === tmp58) {
                                                                          if (cResult[88] === tmp73) {
                                                                            if (cResult[89] === tmp91) {
                                                                              let tmp95 = cResult[90];
                                                                            }
                                                                            if (cResult[91] === tmp95) {
                                                                              if (cResult[92] === tmp35) {
                                                                                let tmp99 = cResult[93];
                                                                              }
                                                                              return tmp99;
                                                                            }
                                                                            const obj9 = { header: tmp35, children: tmp95 };
                                                                            const tmp101 = closure_10(tmp(onPressEmoji[34]).ActionSheet, obj9);
                                                                            cResult[91] = tmp95;
                                                                            cResult[92] = tmp35;
                                                                            cResult[93] = tmp101;
                                                                            tmp99 = tmp101;
                                                                          }
                                                                        }
                                                                      }
                                                                      const obj10 = { style: tmp4.container, children: null };
                                                                      let items = [tmp58, tmp73, tmp91];
                                                                      obj10.children = items;
                                                                      const tmp98 = closure_11(first1, obj10);
                                                                      cResult[86] = tmp4.container;
                                                                      cResult[87] = tmp58;
                                                                      cResult[88] = tmp73;
                                                                      cResult[89] = tmp91;
                                                                      cResult[90] = tmp98;
                                                                      tmp95 = tmp98;
                                                                    }
                                                                  }
                                                                  const obj11 = { style: inputRow, children: null };
                                                                  let items1 = [tmp79, tmp88];
                                                                  obj11.children = items1;
                                                                  const tmp94 = closure_11(first1, obj11);
                                                                  cResult[82] = tmp4.inputRow;
                                                                  cResult[83] = tmp79;
                                                                  cResult[84] = tmp88;
                                                                  cResult[85] = tmp94;
                                                                  tmp91 = tmp94;
                                                                }
                                                              }
                                                              let obj12 = { accessibilityLabel: tmp82, icon: tmp83, size: "md", onPress: tmp22, disabled: 0 === first1.length, loading: disabled };
                                                              const tmp90 = closure_10(tmp(onPressEmoji[33]).IconButton, obj12);
                                                              cResult[78] = tmp22;
                                                              cResult[79] = disabled;
                                                              cResult[80] = 0 === first1.length;
                                                              cResult[81] = tmp90;
                                                              tmp88 = tmp90;
                                                            }
                                                          }
                                                        }
                                                        const obj13 = { containerStyle: input, grow: true, round: true, placeholder: tmp77, value: first1, onChange: tmp21, disabled };
                                                        const tmp81 = closure_10(tmp(onPressEmoji[31]).TextInput, obj13);
                                                        cResult[71] = first1;
                                                        cResult[72] = tmp4.input;
                                                        cResult[73] = disabled;
                                                        cResult[74] = tmp77;
                                                        cResult[75] = tmp81;
                                                        tmp79 = tmp81;
                                                      }
                                                    }
                                                    const obj14 = { style: tmp63, children: null };
                                                    const items2 = [tmp64, tmp69];
                                                    obj14.children = items2;
                                                    const tmp76 = closure_11(first1, obj14);
                                                    cResult[65] = tmp63;
                                                    cResult[66] = tmp64;
                                                    cResult[67] = tmp69;
                                                    cResult[68] = tmp76;
                                                    tmp73 = tmp76;
                                                  }
                                                }
                                              }
                                              const obj15 = { onOpenPicker: tmp68, channel, onPressEmoji: tmp24, disabled };
                                              const tmp72 = closure_10(closure_13, obj15);
                                              cResult[60] = channel;
                                              cResult[61] = tmp24;
                                              cResult[62] = disabled;
                                              cResult[63] = tmp68;
                                              cResult[64] = tmp72;
                                              tmp69 = tmp72;
                                            }
                                            function ae() {
                                              ICYMIActionCreatorsDefault.itemInteracted(content.id, itemType, "press_reply_reaction_picker");
                                              ICYMIActionCreatorsDefault.feedItemActioned({ itemId: content.id, itemType, actionParameters: { actionGestureType: "press", actionTargetElement: "reaction_picker_button", actionIntentType: "open", actionDestinationType: null } });
                                            }
                                            cResult[57] = content.id;
                                            cResult[58] = tmp8;
                                            cResult[59] = ae;
                                            tmp68 = ae;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            if (cResult[50] === tmp24) {
                              if (cResult[51] === tmp4.defaultEmoji) {
                                if (cResult[52] === tmp4.emoji) {
                                  if (cResult[53] === tmp4.emojiImage) {
                                    if (cResult[54] === tmp4.emojiText) {
                                      if (cResult[55] === disabled) {
                                        let tmp65 = cResult[56];
                                      }
                                      const substr = frequentlyUsedReactionEmojis.slice(0, emojiText - 1);
                                      const mapped = substr.map(tmp65);
                                      cResult[41] = frequentlyUsedReactionEmojis;
                                      cResult[42] = emojiText;
                                      cResult[43] = tmp24;
                                      cResult[44] = tmp4.defaultEmoji;
                                      cResult[45] = tmp4.emoji;
                                      ({ emojiImage: tmp3[46], emojiText } = tmp4);
                                      cResult[47] = emojiText;
                                      cResult[48] = disabled;
                                      num15 = 49;
                                      cResult[49] = mapped;
                                    }
                                  }
                                }
                              }
                            }
                            function re(id) {
                              itemType = id;
                              if (null != id.id) {
                                const obj = {
                                  onPress() {
                                      return closure_9(closure_0);
                                    },
                                  style: closure_4.emoji,
                                  disabled,
                                  children: null
                                };
                                const obj2 = { style: null, source: null };
                                const items = [, ];
                                ({ defaultEmoji: arr[0], emojiImage: arr[1] } = closure_4);
                                obj2.style = items;
                                const obj3 = { uri: null };
                                const tmp9 = content(onPressEmoji[28]);
                                ({ id: obj5.id, animated: obj5.animated } = id);
                                obj3.uri = content(onPressEmoji[29]).getEmojiURL({ id: null, animated: null, size: 48 });
                                obj2.source = obj3;
                                obj.children = closure_1_10(tmp9, obj2);
                                let tmp11 = closure_1_10(itemType(onPressEmoji[16]).PressableHighlight, obj, id.id);
                                const obj4 = content(onPressEmoji[29]);
                                const obj6 = { id: null, animated: null, size: 48 };
                              } else {
                                const obj7 = {
                                  onPress() {
                                      return closure_9(closure_0);
                                    },
                                  style: closure_4.emoji,
                                  disabled,
                                  children: null
                                };
                                const obj12 = { variant: "text-md/medium", color: "interactive-text-default", style: null, allowFontScaling: false, children: null };
                                const items1 = [, ];
                                ({ defaultEmoji: arr2[0], emojiText: arr2[1] } = closure_4);
                                obj12.style = items1;
                                obj12.children = id.surrogates;
                                obj7.children = closure_1_10(itemType(onPressEmoji[23]).Text, obj12);
                                tmp11 = closure_1_10(itemType(onPressEmoji[16]).PressableHighlight, obj7, id.surrogates);
                              }
                              return tmp11;
                            }
                            cResult[50] = tmp24;
                            ({ defaultEmoji: tmp3[51], emoji: tmp3[num15] } = tmp4);
                            cResult[53] = tmp4.emojiImage;
                            cResult[54] = tmp4.emojiText;
                            cResult[55] = disabled;
                            cResult[56] = re;
                            tmp65 = re;
                          }
                          const items3 = [tmp4.emojis, submitting];
                          cResult[38] = tmp4.emojis;
                          cResult[39] = submitting;
                          cResult[40] = items3;
                          tmp63 = items3;
                        }
                        const obj16 = { style: tmp4.preview, children: tmp54 };
                        const tmp61 = closure_10(first1, obj16);
                        cResult[35] = tmp4.preview;
                        cResult[36] = tmp54;
                        cResult[37] = tmp61;
                        tmp58 = tmp61;
                      }
                      const obj17 = { style: tmp4.base, children: null };
                      const items4 = [tmp39, tmp51];
                      obj17.children = items4;
                      const tmp57 = closure_11(first1, obj17);
                      cResult[32] = tmp4.base;
                      cResult[33] = tmp51;
                      cResult[34] = tmp57;
                      tmp54 = tmp57;
                    }
                    const obj18 = { gradient: tmp28, children: tmp47 };
                    const tmp53 = closure_10(tmp(onPressEmoji[27]).ThemeContextProvider, obj18);
                    cResult[29] = tmp28;
                    cResult[30] = tmp47;
                    cResult[31] = tmp53;
                    tmp51 = tmp53;
                  }
                  const obj19 = { style: tmp43, children: tmp44 };
                  const tmp50 = closure_10(first1, obj19);
                  cResult[26] = tmp43;
                  cResult[27] = tmp44;
                  cResult[28] = tmp50;
                  tmp47 = tmp50;
                }
                const items5 = [tmp4.contentContainer, clientThemesOverride];
                cResult[21] = tmp4.contentContainer;
                cResult[22] = clientThemesOverride;
                cResult[23] = items5;
                tmp43 = items5;
              }
              const obj20 = { style: tmp4.header, children: tmp32 };
              const tmp38 = closure_10(first1, obj20);
              cResult[17] = tmp4.header;
              cResult[18] = tmp32;
              cResult[19] = tmp38;
              tmp35 = tmp38;
              const tmpResult3 = tmp(onPressEmoji[21]);
            }
          }
          _require = asyncGeneratorStep(async (itemType) => {
            c2 = 0;
            c3 = 0;
            return (async (arg0) => {
              if (c3 === 2) {
                c3 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp4 === 3) {
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
                  c3 = 2;
                  if (0 === v1) {
                    if (arg0 === 1) {
                      c3 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 3;
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      closure_1_6(true);
                      content(onPressEmoji[18]).itemInteracted(tmp2.id, itemType, "press_emoji_send");
                      const obj5 = content(onPressEmoji[18]);
                      const obj4 = { itemId: tmp2.id, itemType, actionParameters: { actionGestureType: "press", actionTargetElement: "reaction_picker_button", actionIntentType: "open", actionDestinationType: null } };
                      content(onPressEmoji[18]).feedItemActioned(obj4);
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
                    const obj = { value, done: true };
                    return obj;
                  } else {
                    closure_1_6(false);
                    c3 = 3;
                    return { value: "IconComponent", done: null };
                  }
                } catch (tmp9) {
                  c3 = tmp;
                  throw tmp9;
                }
              }
            })();
          });
          const fn2 = function() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          cResult[11] = content.id;
          cResult[12] = tmp8;
          cResult[13] = onPressEmoji;
          cResult[14] = fn2;
          tmp24 = fn2;
        }
      }
    }
    _require = asyncGeneratorStep(async () => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
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
              itemType = tmp2;
              closure_1_6(true);
              content(onPressEmoji[18]).itemInteracted(user.id, itemType, "press_reply_send");
              const obj5 = content(onPressEmoji[18]);
              const obj4 = { itemId: user.id, itemType, actionParameters: { actionGestureType: "press", actionTargetElement: "reply_button", actionIntentType: "reply", actionDestinationType: null } };
              content(onPressEmoji[18]).feedItemActioned(obj4);
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
        } catch (tmp11) {
          c2 = tmp;
          throw tmp11;
        }
      }
    });
    const fn = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    cResult[6] = content.id;
    cResult[7] = cResult[1];
    cResult[8] = first1;
    cResult[9] = sendMessage;
    cResult[10] = fn;
    tmp22 = fn;
  }
  let obj = require("c");
  obj2 = noop;
  tmp5 = disabled;
}) : ((content) => {
  content = content.content;
  _require = content;
  const onPressEmoji = content.onPressEmoji;
  const sendMessage = content.sendMessage;
  loading = undefined;
  _slicedToArray = undefined;
  let hotwheels_gaming_activity;
  let first1;
  closure_8 = undefined;
  let callback1;
  let width;
  ({ author, channel } = content);
  const tmp = closure_12();
  closure_3 = tmp;
  [loading, _slicedToArray] = hotwheels_gaming_activity.useState(false);
  let str = "unknown";
  hotwheels_gaming_activity = "unknown";
  const intl = require("util").intl;
  const content_type = content.content_type;
  if (require("ContentInventoryEntryType").ContentInventoryEntryType.TOP_GAME !== content_type) {
    if (tmp5(tmp6[17]).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
      let stringResult1 = stringResult;
      if (tmp5(tmp6[17]).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
        hotwheels_gaming_activity = "hotwheels_custom_status";
        const intl2 = tmp5(tmp6[8]).intl;
        stringResult1 = intl2.string(tmp5(tmp6[8]).t.umDRYM);
        str = "hotwheels_custom_status";
      }
    }
    const tmp2Result = tmp2(obj.useState(""), 2);
    first1 = tmp2Result[0];
    closure_8 = tmp10;
    let items = [content.id, str, first1, sendMessage];
    const callback = obj.useCallback(loading(function*() {
      if (dependencyMap === 2) {
        dependencyMap = 3;
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
          dependencyMap = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_5(true);
              v1(8039).itemInteracted(tmp4.id, hotwheels_gaming_activity, "press_reply_send");
              const obj5 = v1(8039);
              const obj4 = { itemId: tmp4.id, itemType: hotwheels_gaming_activity, actionParameters: { actionGestureType: "press", actionTargetElement: "reply_button", actionIntentType: "reply", actionDestinationType: null } };
              v1(8039).feedItemActioned(obj4);
              v1 = 1;
              dependencyMap = 1;
              const obj7 = { value: sendMessage(first1), done: false };
              return obj7;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_5(false);
            closure_128_8("");
            dependencyMap = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp10) {
          dependencyMap = tmp;
          throw tmp10;
        }
      }
    }), items);
    _require = loading((arg0) => {
      const user = arg0;
      c2 = 0;
      c3 = 0;
      return (function*(arg0) {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
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
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_1_5(true);
                onPressEmoji(sendMessage[18]).itemInteracted(user.id, itemType, "press_emoji_send");
                const obj5 = onPressEmoji(sendMessage[18]);
                const obj4 = { itemId: user.id, itemType, actionParameters: { actionGestureType: "press", actionTargetElement: "reaction_picker_button", actionIntentType: "open", actionDestinationType: null } };
                onPressEmoji(sendMessage[18]).feedItemActioned(obj4);
                c2 = 1;
                c3 = 1;
                const obj7 = { value: tmp2(user), done: false };
                return obj7;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_1_5(false);
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp9) {
            c3 = tmp;
            throw tmp9;
          }
        }
      })();
    });
    let items1 = [content.id, str, onPressEmoji];
    callback1 = obj.useCallback(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items1);
    const frequentlyUsedReactionEmojis = tmp5(tmp6[19]).useFrequentlyUsedReactionEmojis(null);
    const tmp15 = onPressEmoji;
    const tmp5Result = tmp5(tmp6[19]);
    const tmp16 = onPressEmoji(tmp6[20])();
    const clientThemesOverride = tmp5(tmp6[21]).useClientThemesOverride();
    width = onPressEmoji(tmp6[22])().width;
    const items2 = [width];
    const memo = obj.useMemo(() => Math.floor(Math.min(width, ACTION_SHEET_MAX_WIDTH) / 52), items2);
    let obj2 = { header: null, children: null };
    let obj3 = { style: tmp.header, children: null };
    let obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: stringResult1 };
    obj3.children = width(tmp5(tmp6[23]).Text, obj4);
    obj2.header = width(first1, obj3);
    let obj5 = { style: tmp.container, children: null };
    let obj6 = { style: tmp.preview, children: null };
    let obj7 = { style: tmp.base, children: null };
    const obj8 = { absolute: true, wide: true, tall: true, mix: true, mixAmount: null };
    const obj9 = { dark: null, light: null };
    const tmp5Result3 = tmp5(tmp6[21]);
    obj9.dark = tmp5(tmp6[25]).OverlayOpacity.LEVEL_7;
    obj9.light = tmp5(tmp6[25]).OverlayOpacity.LEVEL_8;
    obj8.mixAmount = obj9;
    const items3 = [width(onPressEmoji(tmp6[24]), obj8), ];
    const obj10 = { gradient: tmp16, children: null };
    const obj11 = { style: null, children: null };
    const items4 = [tmp.contentContainer, clientThemesOverride];
    obj11.style = items4;
    let obj12 = { content, renderForScreenshot: true };
    obj11.children = width(onPressEmoji(tmp6[26]), obj12);
    obj10.children = width(first1, obj11);
    items3[1] = width(tmp5(tmp6[27]).ThemeContextProvider, obj10);
    obj7.children = items3;
    obj6.children = closure_11(first1, obj7);
    const items5 = [width(first1, obj6), , ];
    const items6 = [tmp.emojis, ];
    let submitting = null;
    if (loading) {
      submitting = tmp.submitting;
    }
    const obj13 = { style: null, children: null };
    items6[1] = submitting;
    obj13.style = items6;
    const substr = frequentlyUsedReactionEmojis.slice(0, memo - 1);
    const items7 = [
      substr.map((id) => {
          closure_0 = id;
          if (null != id.id) {
            const obj = {
              onPress() {
                  return callback1(closure_0);
                },
              style: closure_3.emoji,
              disabled,
              children: null
            };
            const obj2 = { style: null, source: null };
            const items = [, ];
            ({ defaultEmoji: arr[0], emojiImage: arr[1] } = closure_3);
            obj2.style = items;
            const obj3 = { uri: null };
            const tmp9 = onPressEmoji(sendMessage[28]);
            ({ id: obj5.id, animated: obj5.animated } = id);
            obj3.uri = onPressEmoji(sendMessage[29]).getEmojiURL({ id: null, animated: null, size: 48 });
            obj2.source = obj3;
            obj.children = width(tmp9, obj2);
            let tmp11 = width(closure_0(sendMessage[16]).PressableHighlight, obj, id.id);
            const obj4 = onPressEmoji(sendMessage[29]);
            const obj6 = { id: null, animated: null, size: 48 };
          } else {
            const obj7 = {
              onPress() {
                  return callback1(closure_0);
                },
              style: closure_3.emoji,
              disabled,
              children: null
            };
            const obj12 = { variant: "text-md/medium", color: "interactive-text-default", style: null, allowFontScaling: false, children: null };
            const items1 = [, ];
            ({ defaultEmoji: arr2[0], emojiText: arr2[1] } = closure_3);
            obj12.style = items1;
            obj12.children = id.surrogates;
            obj7.children = width(closure_0(sendMessage[23]).Text, obj12);
            tmp11 = width(closure_0(sendMessage[16]).PressableHighlight, obj7, id.surrogates);
          }
          return tmp11;
        }),

    ];
    const obj14 = {
      onOpenPicker() {
          ICYMIActionCreatorsDefault.itemInteracted(closure_0.id, hotwheels_gaming_activity, "press_reply_reaction_picker");
          ICYMIActionCreatorsDefault.feedItemActioned({ itemId: closure_0.id, itemType: hotwheels_gaming_activity, actionParameters: { actionGestureType: "press", actionTargetElement: "reaction_picker_button", actionIntentType: "open", actionDestinationType: null } });
        },
      channel,
      onPressEmoji: callback1,
      disabled: loading
    };
    items7[1] = width(closure_13, obj14);
    obj13.children = items7;
    items5[1] = closure_11(first1, obj13);
    const obj15 = { style: tmp.inputRow, children: null };
    const obj16 = { containerStyle: tmp.input, grow: true, round: true, placeholder: null, value: null, onChange: null, disabled: null };
    const intl4 = tmp5(tmp6[8]).intl;
    const obj17 = { username: null };
    const tmp22 = onPressEmoji(tmp6[24]);
    obj17.username = tmp5(tmp6[30]).getName(author);
    obj16.placeholder = intl4.formatToPlainString(tmp5(tmp6[8]).t.m3dK5W, obj17);
    obj16.value = first1;
    obj16.onChange = tmp2Result[1];
    obj16.disabled = loading;
    const items8 = [width(tmp5(tmp6[31]).TextInput, obj16), ];
    const obj18 = { accessibilityLabel: null, icon: null, size: "md", onPress: null, disabled: null, loading: null };
    const intl5 = tmp5(tmp6[8]).intl;
    obj18.accessibilityLabel = intl5.string(tmp5(tmp6[8]).t.oeb1vg);
    const obj19 = { size: "md", color: tmp15(tmp6[10]).unsafe_rawColors.WHITE };
    obj18.icon = width(tmp5(tmp6[32]).SendMessageIcon, obj19);
    obj18.onPress = callback;
    obj18.disabled = 0 === first1.length;
    obj18.loading = loading;
    items8[1] = width(tmp5(tmp6[33]).IconButton, obj18);
    obj15.children = items8;
    items5[2] = closure_11(first1, obj15);
    obj5.children = items5;
    obj2.children = closure_11(first1, obj5);
    return width(tmp5(tmp6[34]).ActionSheet, obj2);
  }
  hotwheels_gaming_activity = "hotwheels_gaming_activity";
  const intl3 = tmp5(tmp6[8]).intl;
  stringResult1 = intl3.string(tmp5(tmp6[8]).t.XC5YE5);
  str = "hotwheels_gaming_activity";
  stringResult = intl.string(require("util").t["5IEsGx"]);
  tmp2 = _slicedToArray;
});
ReactCompilerGating = fn(558);
let obj6 = { padding: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/content_inventory/ReactActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(4);
  if (cResult[0] !== arg0) {
    const _Object = Object;
    _objectDestructuringEmpty(arg0);
    const merged = Object.assign({}, arg0);
    cResult[0] = arg0;
    cResult[1] = merged;
    let tmp4 = merged;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== tmp4) {
    const obj2 = { children: null };
    const obj3 = {};
    const merged1 = Object.assign(tmp4);
    obj2.children = v65535(closure_14, obj3);
    const tmp15 = v65535(ICYMIContext.ICYMIContextProvider, obj2);
    cResult[2] = tmp4;
    cResult[3] = tmp15;
    let tmp9 = tmp15;
  } else {
    tmp9 = cResult[3];
  }
  return tmp9;
}) : ((arg0) => {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const merged = Object.assign(arg0, undefined);
    const obj = { children: null };
    const obj2 = {};
    const merged1 = Object.assign(merged);
    obj.children = v65535(closure_14, obj2);
    return v65535(ICYMIContext.ICYMIContextProvider, obj);
  }
});
export const getStatusReplyContent = function getStatusReplyContent(reply) {
  ({ username, status, emojiStr, attachments, isForward } = reply);
  if (isForward === undefined) {
    isForward = false;
  }
  const intl = util.intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = util.t;
  if (isForward) {
    const obj2 = { username };
    let formatToPlainStringResult = formatToPlainString(t.S5JNyW, obj2);
    let tmp5 = require;
  } else {
    const obj = { username };
    formatToPlainStringResult = formatToPlainString(t.XPQgL2, obj);
    tmp5 = require;
  }
  const items = [];
  items.push("> -# *" + formatToPlainStringResult + "*");
  if (tmp7) {
    const _HermesInternal = HermesInternal;
    items.push("> " + emojiStr + " " + status);
  }
  if (null != attachments) {
    if (attachments.length > 0) {
      const intl2 = tmp5(1126).intl;
      const obj3 = { attachmentsCount: attachments.length };
      const _HermesInternal2 = HermesInternal;
      items.push("> -# *" + intl2.formatToPlainString(tmp5(1126).t["JiNPo+"], obj3) + "*");
    }
  }
  items.push(reply.reply);
  return items.join("\n");
};