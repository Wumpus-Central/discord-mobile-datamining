// === Module 6802: GuildOnboardingPrompt ===

// Module 6802 (GuildOnboardingPrompt)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import Text_Text from "Text/Text" /* 5086 */;
import MemberVerificationActionCreatorsDefault from "MemberVerificationActionCreators" /* 6127 */;
import TermsFieldListDefault from "TermsFieldList" /* 6178 */;
import GuildOnboardingUtils from "GuildOnboardingUtils" /* 6784 */;
import EmojiDefault from "Emoji" /* 6809 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 5992 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 6153 */;
import GuildStore from "GuildStore" /* 2086 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 6778 */;

require = fn;
function formattedNameHighlight(children, arg1) {
  return closure_1_15(Text_Text.Text, { variant: "text-xs/medium", color: "mobile-text-heading-primary", children }, arg1);
}
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire, ScrollView: closure_7, FlatList: closure_8 } = get_ActivityIndicator);
let closure_13 = fn(6775).GuildOnboardingModalStates;
const EMOJI_URL_BASE_SIZE = fn(1392).EMOJI_URL_BASE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
let c18 = 48;
const createStyles = fn(5090);
let obj2 = { flex: { flex: 1 }, container: { display: "flex", flex: 1, flexGrow: 1, marginTop: fn(6261).NAV_BAR_HEIGHT, marginBottom: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, scrollContainer: null, scrollContainerGradient: null, promptHeader: null, requiredSeparator: null, countText: null, title: null, helpText: null, footer: null, footerText: null, footerContent: null, optionTextEmoji: null, optionImageEmoji: null, emojiContainer: null, dropdownContainer: null, emptyDropdownText: null, dropdownPill: null, dropdownIconContainer: null, dropdownIcon: null };
let obj3 = { display: "flex", flex: 1, flexGrow: 1, marginTop: fn(6261).NAV_BAR_HEIGHT, marginBottom: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.scrollContainer = { display: "flex", flexGrow: 1, justifyContent: "center", paddingHorizontal: 16, paddingTop: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.scrollContainerGradient = { position: "absolute", height: 48, width: "100%", left: 0, top: -48 };
obj2.promptHeader = { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 };
let size = { flexShrink: 0, marginHorizontal: 8, color: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, width: 4, height: 4, borderRadius: nativeDefault.radii.xs };
obj2.requiredSeparator = size;
obj2.countText = {};
obj2.title = { marginBottom: 32 };
obj2.helpText = { marginTop: 8, marginBottom: 8, textAlign: "center" };
let obj4 = { display: "flex", flexGrow: 1, justifyContent: "center", paddingHorizontal: 16, paddingTop: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.footer = { display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", bottom: 0, paddingBottom: 8, position: "absolute", width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.footerText = { paddingHorizontal: 16, paddingBottom: 8, paddingTop: 8 };
obj2.footerContent = { width: "100%", paddingHorizontal: 16 };
obj2.optionTextEmoji = { fontSize: 18, lineHeight: 22, marginRight: 6 };
obj2.optionImageEmoji = { height: 22, width: 22, marginRight: 6 };
obj2.emojiContainer = { display: "flex", alignItems: "center" };
let obj5 = { display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", bottom: 0, paddingBottom: 8, position: "absolute", width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.dropdownContainer = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, padding: 8, paddingRight: 32, minHeight: 48, display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", position: "relative" };
obj2.emptyDropdownText = { marginTop: 16 };
let obj6 = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, padding: 8, paddingRight: 32, minHeight: 48, display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", position: "relative" };
obj2.dropdownPill = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 6, marginRight: 8, marginTop: 8, display: "flex", flexDirection: "row", alignItems: "center" };
obj2.dropdownIconContainer = { position: "absolute", right: 4, top: 8 };
obj2.dropdownIcon = { height: 32, width: 32 };
let closure_19 = createStyles.createStyles(obj2);
fn(558);
let obj7 = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 6, marginRight: 8, marginTop: 8, display: "flex", flexDirection: "row", alignItems: "center" };
let ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function PromptHeader(arg0) {
  const cResult = c.c(19);
  ({ currentPrompt, numberOfPrompts, currentPromptIndex } = arg0);
  const tmp4 = closure_19();
  if (cResult[0] === currentPromptIndex) {
    if (cResult[1] === numberOfPrompts) {
      let tmp7 = cResult[2];
    }
    if (cResult[3] === tmp4.countText) {
      if (cResult[4] === tmp7) {
        let tmp9 = cResult[5];
      }
      if (cResult[6] === currentPrompt.required) {
        if (cResult[7] === tmp4.requiredSeparator) {
          let tmp12 = cResult[8];
        }
        if (cResult[9] === tmp4.promptHeader) {
          if (cResult[10] === tmp9) {
            if (cResult[11] === tmp12) {
              let tmp20 = cResult[12];
            }
            if (cResult[13] === currentPrompt.title) {
              if (cResult[14] === tmp4.title) {
                let tmp24 = cResult[15];
              }
              if (cResult[16] === tmp20) {
                if (cResult[17] === tmp24) {
                  let tmp27 = cResult[18];
                }
                return tmp27;
              }
              const obj2 = { children: null };
              const items = [tmp20, tmp24];
              obj2.children = items;
              const tmp30 = value2(constants, obj2);
              cResult[16] = tmp20;
              cResult[17] = tmp24;
              cResult[18] = tmp30;
              tmp27 = tmp30;
            }
            const obj3 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: currentPrompt.title };
            const tmp26 = closure_1_15(Text_Text.Text, obj3);
            cResult[13] = currentPrompt.title;
            cResult[14] = tmp4.title;
            cResult[15] = tmp26;
            tmp24 = tmp26;
          }
        }
        const obj4 = { style: tmp5, children: null };
        const items1 = [tmp9, tmp12];
        obj4.children = items1;
        const tmp23 = value2(timestampProducer, obj4);
        cResult[9] = tmp4.promptHeader;
        cResult[10] = tmp9;
        cResult[11] = tmp12;
        cResult[12] = tmp23;
        tmp20 = tmp23;
      }
      let required;
      if (currentPrompt != null) {
        required = currentPrompt.required;
      }
      let tmp15 = null;
      if (required) {
        const obj5 = { children: null };
        const obj6 = { style: tmp4.requiredSeparator };
        const items2 = [closure_1_15(timestampProducer, obj6), ];
        const obj7 = { variant: "text-sm/medium", color: "text-brand", children: null };
        const intl2 = util.intl;
        obj7.children = intl2.string(util.t.Ur8Vrt);
        items2[1] = closure_1_15(Text_Text.Text, obj7);
        obj5.children = items2;
        tmp15 = value2(constants, obj5);
      }
      cResult[6] = currentPrompt.required;
      cResult[7] = tmp4.requiredSeparator;
      cResult[8] = tmp15;
      tmp12 = tmp15;
    }
    const obj8 = { style: tmp6, variant: "text-sm/medium", color: "text-muted", children: tmp7 };
    const tmp11 = closure_1_15(Text_Text.Text, obj8);
    cResult[3] = tmp4.countText;
    cResult[4] = tmp7;
    cResult[5] = tmp11;
    tmp9 = tmp11;
  }
  const intl = util.intl;
  const formatResult = intl.format(util.t.isV0NW, { currentQuestion: currentPromptIndex + 1, questionCount: numberOfPrompts });
  cResult[0] = currentPromptIndex;
  cResult[1] = numberOfPrompts;
  cResult[2] = formatResult;
  tmp7 = formatResult;
  const obj9 = { currentQuestion: currentPromptIndex + 1, questionCount: numberOfPrompts };
}) : (function PromptHeader(currentPrompt) {
  currentPrompt = currentPrompt.currentPrompt;
  ({ numberOfPrompts, currentPromptIndex } = currentPrompt);
  const tmp = closure_19();
  const obj = { style: tmp.promptHeader, children: null };
  const obj2 = { style: tmp.countText, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj2.children = intl.format(util.t.isV0NW, { currentQuestion: currentPromptIndex + 1, questionCount: numberOfPrompts });
  const items = [closure_1_15(Text_Text.Text, obj2), ];
  let required;
  if (currentPrompt != null) {
    required = currentPrompt.required;
  }
  let tmp2Result = null;
  if (required) {
    const obj4 = { children: null };
    const obj5 = { style: tmp.requiredSeparator };
    const items1 = [closure_1_15(timestampProducer, obj5), ];
    const obj6 = { variant: "text-sm/medium", color: "text-brand", children: null };
    const intl2 = util.intl;
    obj6.children = intl2.string(util.t.Ur8Vrt);
    items1[1] = closure_1_15(Text_Text.Text, obj6);
    obj4.children = items1;
    tmp2Result = value2(constants, obj4);
  }
  const obj7 = { children: null };
  items[1] = tmp2Result;
  obj.children = items;
  const items2 = [value2(timestampProducer, obj), closure_1_15(Text_Text.Text, { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: currentPrompt.title })];
  obj7.children = items2;
  return value2(constants, obj7);
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function PromptFooter(guildId) {
  const cResult = guildId(576).c(49);
  guildId = guildId.guildId;
  ({ currentPrompt, selectedOptionIds } = guildId);
  ({ handleOnPress, lastPrompt } = guildId);
  const tmp4 = closure_19();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function n() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = guildId(576);
  const stateFromStores = guildId(504).useStateFromStores(first, tmp7);
  let tmp9 = 0 === selectedOptionIds.length;
  if (tmp9) {
    let required;
    if (currentPrompt != null) {
      required = currentPrompt.required;
    }
    tmp9 = !required;
  }
  if (cResult[3] === tmp9) {
    if (cResult[4] === lastPrompt) {
      let tmp15 = 0 === selectedOptionIds.length;
      if (tmp15) {
        let required1;
        if (currentPrompt != null) {
          required1 = currentPrompt.required;
        }
        tmp15 = required1;
      }
      options = undefined;
      if (currentPrompt != null) {
        options = currentPrompt.options;
      }
      if (cResult[6] === options) {
        if (cResult[7] === selectedOptionIds) {
          let tmp20 = cResult[8];
        }
        if (cResult[9] !== tmp20) {
          if (null != tmp20) {
            let selectedRoleIds = tmp(6784).getSelectedRoleIds(tmp20);
            const tmpResult4 = tmp(6784);
          } else {
            const _Set = Set;
            selectedRoleIds = new Set();
          }
          cResult[9] = tmp20;
          cResult[10] = selectedRoleIds;
        } else if (cResult[11] !== tmp20) {
          if (null != tmp20) {
            let selectedChannelIds = tmp(6784).getSelectedChannelIds(tmp20);
            const tmpResult5 = tmp(6784);
          } else {
            const _Set2 = Set;
            selectedChannelIds = new Set();
          }
          cResult[11] = tmp20;
          cResult[12] = selectedChannelIds;
        } else {
          if (cResult[13] === currentPrompt) {
            if (cResult[14] === stateFromStores) {
              if (cResult[15] === tmp28) {
                if (cResult[16] === tmp23) {
                  let tmp33 = cResult[17];
                }
                ({ helpText, helpTextAdditional } = selectedOptionIds(6804)(tmp33));
                const tmp36 = selectedOptionIds(6804)(tmp33);
                const token = tmp(4778).useToken(selectedOptionIds(587).colors.BACKGROUND_BASE_LOWER);
                if (cResult[18] !== token) {
                  const obj7 = selectedOptionIds(683)(token);
                  const hexResult = selectedOptionIds(683)(token).alpha(0).hex();
                  cResult[18] = token;
                  cResult[19] = hexResult;
                  let tmp38 = hexResult;
                  const alphaResult = selectedOptionIds(683)(token).alpha(0);
                } else {
                  tmp38 = cResult[19];
                }
                if (cResult[20] !== token) {
                  const obj9 = selectedOptionIds(683)(token);
                  const hexResult1 = selectedOptionIds(683)(token).alpha(1).hex();
                  cResult[20] = token;
                  cResult[21] = hexResult1;
                  let tmp40 = hexResult1;
                  const alphaResult1 = selectedOptionIds(683)(token).alpha(1);
                } else {
                  tmp40 = cResult[21];
                }
                if (cResult[22] === tmp38) {
                  if (cResult[23] === tmp40) {
                    let tmp42 = cResult[24];
                  }
                  if (cResult[25] === tmp42) {
                    if (cResult[26] === tmp4.scrollContainerGradient) {
                      let tmp43 = cResult[27];
                    }
                    if (cResult[28] === tmp15) {
                      if (cResult[29] === tmp4.helpText) {
                        let tmp47 = cResult[30];
                      }
                      if (cResult[31] === helpText) {
                        if (cResult[32] === helpTextAdditional) {
                          if (cResult[33] === tmp4.helpText) {
                            let tmp50 = cResult[34];
                          }
                          let str6 = "primary";
                          if (tmp9) {
                            str6 = "primary";
                            if (!lastPrompt) {
                              str6 = "secondary";
                            }
                          }
                          if (cResult[35] === tmp12) {
                            if (cResult[36] === tmp15) {
                              if (cResult[37] === handleOnPress) {
                                if (cResult[38] === str6) {
                                  let tmp53 = cResult[39];
                                }
                                if (cResult[40] === tmp4.footerContent) {
                                  if (cResult[41] === tmp47) {
                                    if (cResult[42] === tmp50) {
                                      if (cResult[43] === tmp53) {
                                        let tmp56 = cResult[44];
                                      }
                                      if (cResult[45] === tmp4.footer) {
                                        if (cResult[46] === tmp43) {
                                          if (cResult[47] === tmp56) {
                                            let tmp60 = cResult[48];
                                          }
                                          return tmp60;
                                        }
                                      }
                                      const obj2 = { style: tmp4.footer, children: null };
                                      const items1 = [tmp43, tmp56];
                                      obj2.children = items1;
                                      const tmp63 = closure_16(closure_6, obj2);
                                      cResult[45] = tmp4.footer;
                                      cResult[46] = tmp43;
                                      cResult[47] = tmp56;
                                      cResult[48] = tmp63;
                                      tmp60 = tmp63;
                                    }
                                  }
                                }
                                const obj3 = { style: tmp4.footerContent, children: null };
                                const items2 = [tmp47, tmp50, tmp53];
                                obj3.children = items2;
                                const tmp59 = closure_16(closure_6, obj3);
                                cResult[40] = tmp4.footerContent;
                                cResult[41] = tmp47;
                                cResult[42] = tmp50;
                                cResult[43] = tmp53;
                                cResult[44] = tmp59;
                                tmp56 = tmp59;
                              }
                            }
                          }
                          const obj4 = { variant: str6, size: "md", grow: true, text: tmp12, onPress: handleOnPress, disabled: tmp15 };
                          const tmp55 = closure_15(tmp(5375).Button, obj4);
                          cResult[35] = tmp12;
                          cResult[36] = tmp15;
                          cResult[37] = handleOnPress;
                          cResult[38] = str6;
                          cResult[39] = tmp55;
                          tmp53 = tmp55;
                        }
                      }
                      if ("" !== helpText) {
                        const obj5 = { style: tmp4.helpText, variant: "text-xs/medium", color: "text-default", children: null };
                        const items3 = [helpText, " ", helpTextAdditional];
                        obj5.children = items3;
                        let tmp51 = closure_16(tmp(5086).Text, obj5);
                      } else {
                        tmp51 = null;
                      }
                      cResult[31] = helpText;
                      cResult[32] = helpTextAdditional;
                      cResult[33] = tmp4.helpText;
                      cResult[34] = tmp51;
                      tmp50 = tmp51;
                    }
                    let tmp48 = null;
                    if (tmp15) {
                      const obj6 = { style: tmp4.helpText, variant: "text-xs/medium", color: "text-default", children: null };
                      const intl = tmp(1126).intl;
                      obj6.children = intl.string(tmp(1126).t.dA1dSf);
                      tmp48 = closure_15(tmp(5086).Text, obj6);
                    }
                    cResult[28] = tmp15;
                    cResult[29] = tmp4.helpText;
                    cResult[30] = tmp48;
                    tmp47 = tmp48;
                  }
                  const obj8 = { style: tmp4.scrollContainerGradient, start: tmp(1105).VerticalGradient.START, end: tmp(1105).VerticalGradient.END, colors: tmp42, pointerEvents: "none" };
                  const tmp46 = closure_15(selectedOptionIds(5387), obj8);
                  cResult[25] = tmp42;
                  cResult[26] = tmp4.scrollContainerGradient;
                  cResult[27] = tmp46;
                  tmp43 = tmp46;
                  const tmp35Result = selectedOptionIds(5387);
                }
                const items4 = [tmp38, tmp40];
                cResult[22] = tmp38;
                cResult[23] = tmp40;
                cResult[24] = items4;
                tmp42 = items4;
                const tmpResult6 = tmp(4778);
              }
            }
          }
          const obj10 = { guild: stateFromStores, prompt: currentPrompt, selectedRoleIds: tmp23, selectedChannelIds: cResult[12], itemHook: formattedNameHighlight };
          cResult[13] = currentPrompt;
          cResult[14] = stateFromStores;
          cResult[15] = cResult[12];
          cResult[16] = tmp23;
          cResult[17] = obj10;
          tmp33 = obj10;
        }
      }
      let found;
      if (currentPrompt != null) {
        const options1 = currentPrompt.options;
        if (options1 != null) {
          found = options1.filter((id) => selectedOptionIds.includes(id.id));
        }
      }
      let options2;
      if (currentPrompt != null) {
        options2 = currentPrompt.options;
      }
      cResult[6] = options2;
      cResult[7] = selectedOptionIds;
      cResult[8] = found;
      tmp20 = found;
    }
  }
  let concat = tmp(1126).intl;
  let str = concat.string;
  let str2 = tmp(1126).t;
  if (lastPrompt) {
    const _HermesInternal = HermesInternal;
    concat = HermesInternal.concat;
    str = " \u{1F389}";
    str2 = "";
    let combined = concat(str(str2["8SuVoE"]), " \u{1F389}");
    const strResult = str(str2["8SuVoE"]);
  } else if (tmp9) {
    combined = ` 🎉`(``["5Wxrcd"]);
  } else {
    combined = ` 🎉`(``.PDTjLN);
  }
  cResult[3] = tmp9;
  cResult[4] = lastPrompt;
  cResult[5] = combined;
  const tmpResult = guildId(504);
}) : (function PromptFooter(onPress) {
  ({ guildId: require, currentPrompt, selectedOptionIds } = onPress);
  const lastPrompt = onPress.lastPrompt;
  let found;
  const tmp = closure_19();
  const items = [GuildStore];
  let tmp5 = 0 === selectedOptionIds.length;
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(_require));
  if (tmp5) {
    let required;
    if (currentPrompt != null) {
      required = currentPrompt.required;
    }
    tmp5 = !required;
  }
  const intl = require("util").intl;
  const string = intl.string;
  const t = require("util").t;
  if (lastPrompt) {
    const _HermesInternal = HermesInternal;
    let combined = "" + string(t["8SuVoE"]) + " \u{1F389}";
  } else if (tmp5) {
    combined = string(t["5Wxrcd"]);
  } else {
    combined = string(t.PDTjLN);
  }
  let tmp10 = 0 === selectedOptionIds.length;
  if (tmp10) {
    let required1;
    if (currentPrompt != null) {
      required1 = currentPrompt.required;
    }
    tmp10 = required1;
  }
  found = undefined;
  if (currentPrompt != null) {
    options = currentPrompt.options;
    if (options != null) {
      found = options.filter((id) => selectedOptionIds.includes(id.id));
    }
  }
  const items1 = [found];
  const items2 = [found];
  const memo = noop.useMemo(() => {
    if (null != found) {
      let selectedRoleIds = GuildOnboardingUtils.getSelectedRoleIds(tmp);
    } else {
      const _Set = Set;
      selectedRoleIds = new Set();
    }
    return selectedRoleIds;
  }, items1);
  const memo1 = noop.useMemo(() => {
    if (null != found) {
      let selectedChannelIds = GuildOnboardingUtils.getSelectedChannelIds(tmp);
    } else {
      const _Set = Set;
      selectedChannelIds = new Set();
    }
    return selectedChannelIds;
  }, items2);
  let obj = require("initialize");
  const obj2 = { guild: stateFromStores, prompt: currentPrompt, selectedRoleIds: memo, selectedChannelIds: memo1, itemHook: formattedNameHighlight };
  ({ helpText, helpTextAdditional } = selectedOptionIds(found[29])({ guild: stateFromStores, prompt: currentPrompt, selectedRoleIds: memo, selectedChannelIds: memo1, itemHook: formattedNameHighlight }));
  const tmp16 = selectedOptionIds(found[29])({ guild: stateFromStores, prompt: currentPrompt, selectedRoleIds: memo, selectedChannelIds: memo1, itemHook: formattedNameHighlight });
  const token = require("useToken").useToken(selectedOptionIds(tmp3[12]).colors.BACKGROUND_BASE_LOWER);
  const tmp2Result = require("useToken");
  const obj4 = selectedOptionIds(found[19])(token);
  const items3 = [selectedOptionIds(found[19])(token).alpha(0).hex(), ];
  const alphaResult = selectedOptionIds(found[19])(token).alpha(0);
  const obj6 = selectedOptionIds(found[19])(token);
  items3[1] = selectedOptionIds(found[19])(token).alpha(1).hex();
  const obj3 = { style: tmp.footer, children: null };
  const obj5 = { style: tmp.scrollContainerGradient, start: null, end: null, colors: null, pointerEvents: "none" };
  const alphaResult1 = selectedOptionIds(found[19])(token).alpha(1);
  obj5.start = require("ConstantsIOS").VerticalGradient.START;
  obj5.end = require("ConstantsIOS").VerticalGradient.END;
  obj5.colors = items3;
  const items4 = [closure_15(selectedOptionIds(found[25]), obj5), ];
  const obj7 = { style: tmp.footerContent, children: null };
  let tmp20Result = null;
  if (tmp10) {
    const obj8 = { style: tmp.helpText, variant: "text-xs/medium", color: "text-default", children: null };
    const intl2 = require("util").intl;
    obj8.children = intl2.string(require("util").t.dA1dSf);
    tmp20Result = closure_15(require("Text/Text").Text, obj8);
  }
  const items5 = [tmp20Result, , ];
  if ("" !== helpText) {
    const obj9 = { style: tmp.helpText, variant: "text-xs/medium", color: "text-default", children: null };
    const items6 = [helpText, " ", helpTextAdditional];
    obj9.children = items6;
    let tmp18Result = closure_16(require("Text/Text").Text, obj9);
  } else {
    tmp18Result = null;
  }
  items5[1] = tmp18Result;
  let str4 = "primary";
  if (tmp5) {
    str4 = "primary";
    if (!lastPrompt) {
      str4 = "secondary";
    }
  }
  items5[2] = closure_15(require("components/Button/Button").Button, { variant: str4, size: "md", grow: true, text: combined, onPress: onPress.handleOnPress, disabled: tmp10 });
  obj7.children = items5;
  items4[1] = closure_16(closure_6, obj7);
  obj3.children = items4;
  return closure_16(closure_6, obj3);
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function RulesPrompt(guildId) {
  const cResult = guildId(stateFromStores[14]).c(72);
  guildId = guildId.guildId;
  closure_19();
  let obj = guildId(stateFromStores[14]);
  const navigation = guildId(stateFromStores[15]).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [MemberVerificationFormStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function c() {
      return MemberVerificationFormStore.getRulesPrompt(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  let obj2 = guildId(stateFromStores[15]);
  stateFromStores = guildId(stateFromStores[16]).useStateFromStores(first, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore];
    cResult[3] = items1;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== guildId) {
    const fn2 = function v() {
      guild = GuildStore.getGuild(guildId);
      let rulesChannelId;
      if (guild != null) {
        rulesChannelId = guild.rulesChannelId;
      }
      return rulesChannelId;
    };
    cResult[4] = guildId;
    cResult[5] = fn2;
    let tmp12 = fn2;
  } else {
    tmp12 = cResult[5];
  }
  const tmpResult = guildId(stateFromStores[16]);
  const stateFromStores1 = guildId(stateFromStores[16]).useStateFromStores(tmp10, tmp12);
  const bottom = navigation(tmp2[17])().bottom;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [MemberVerificationFormStore];
    cResult[6] = items2;
    let tmp15 = items2;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] !== guildId) {
    class R {
      constructor() {
        return closure_10.get(guildId);
      }
    }
    cResult[7] = guildId;
    cResult[8] = R;
  } else {
    class R {
      constructor() {
        return closure_10.get(guildId);
      }
    }
  }
  const tmp14 = navigation;
  const tmpResult4 = guildId(stateFromStores[16]);
  const stateFromStores2 = guildId(stateFromStores[16]).useStateFromStores(tmp15, R);
  const tmpResult5 = guildId(stateFromStores[16]);
  [r10083, closure_5] = stateFromStores1(stateFromStores2.useState(false), 2);
  const tmp19 = stateFromStores1(stateFromStores2.useState(false), 2);
  const token = guildId(stateFromStores[18]).useToken(tmp14(tmp2[12]).colors.BACKGROUND_BASE_LOWER);
  if (cResult[9] !== token) {
    class R {
      constructor() {
        return closure_10.get(guildId);
      }
    }
    const hexResult = obj7.alpha(0).hex();
    cResult[9] = token;
    cResult[10] = hexResult;
    const alphaResult = obj7.alpha(0);
  } else {
    class R {
      constructor() {
        return closure_10.get(guildId);
      }
    }
  }
  if (cResult[11] !== token) {
    class R {
      constructor() {
        return closure_10.get(guildId);
      }
    }
    const hexResult1 = obj9.alpha(1).hex();
    cResult[11] = token;
    cResult[12] = hexResult1;
    const alphaResult1 = obj9.alpha(1);
  } else {
    class R {
      constructor() {
        return closure_10.get(guildId);
      }
    }
  }
  if (cResult[13] === tmp21) {
    class R {
      constructor() {
        return closure_10.get(guildId);
      }
    }
    if (null == stateFromStores) {
      class R {
        constructor() {
          return closure_10.get(guildId);
        }
      }
    } else {
      class R {
        constructor() {
          return closure_10.get(guildId);
        }
      }
      function handleOnPress() {
        let tmp2 = null != stateFromStores;
        if (tmp2) {
          tmp2 = null != stateFromStores2;
        }
        if (tmp2) {
          const obj2 = {};
          const merged = Object.assign(stateFromStores2);
          const obj3 = {};
          const merged1 = Object.assign(stateFromStores);
          obj3.response = true;
          const items = [obj3];
          obj2.formFields = items;
          const result = MemberVerificationActionCreatorsDefault.submitVerificationForm(guildId, obj2);
          navigation.push(constants.COMPLETED);
        }
      }
      cResult[16] = stateFromStores;
      cResult[17] = stateFromStores2;
      cResult[18] = guildId;
      cResult[19] = navigation;
      cResult[20] = handleOnPress;
    }
  }
  const items3 = [tmp21, tmp23];
  cResult[13] = tmp21;
  cResult[14] = tmp23;
  cResult[15] = items3;
  const tmpResult6 = guildId(stateFromStores[18]);
}) : (function RulesPrompt(guildId) {
  guildId = guildId.guildId;
  let stateFromStores;
  c5 = undefined;
  let START = closure_19();
  let END = stateFromStores;
  importDefault = guildId(stateFromStores[15]).useNavigation();
  let obj = guildId(stateFromStores[15]);
  let items = [MemberVerificationFormStore];
  stateFromStores = guildId(stateFromStores[16]).useStateFromStores(items, () => MemberVerificationFormStore.getRulesPrompt(guildId));
  let obj2 = guildId(stateFromStores[16]);
  const items1 = [GuildStore];
  _slicedToArray = guildId(stateFromStores[16]).useStateFromStores(items1, () => {
    guild = GuildStore.getGuild(guildId);
    rulesChannelId = undefined;
    if (guild != null) {
      rulesChannelId = guild.rulesChannelId;
    }
    return rulesChannelId;
  });
  let tmp3 = importDefault;
  const bottom = require("useSafeAreaInsets")().bottom;
  const sum = 64 + bottom;
  let obj3 = guildId(stateFromStores[16]);
  const items2 = [MemberVerificationFormStore];
  noop = guildId(stateFromStores[16]).useStateFromStores(items2, () => MemberVerificationFormStore.get(guildId));
  const obj4 = guildId(stateFromStores[16]);
  [tmp6, c5] = noop.useState(false);
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  const token = guildId(stateFromStores[18]).useToken(require("native").colors.BACKGROUND_BASE_LOWER);
  const obj5 = guildId(stateFromStores[18]);
  const obj6 = require("module_683")(token);
  const items3 = [require("module_683")(token).alpha(0).hex(), ];
  const alphaResult = require("module_683")(token).alpha(0);
  const obj8 = require("module_683")(token);
  items3[1] = require("module_683")(token).alpha(1).hex();
  if (null == stateFromStores) {
    return null;
  } else {
    const sum1 = sum + 8;
    const obj7 = { top: true, style: null, children: null };
    const items4 = [, ];
    ({ flex: arr5[0], container: arr5[1] } = START);
    obj7.style = items4;
    let tmp11Result2 = closure_6;
    let obj9 = { style: START.flex, children: null };
    const obj10 = { contentContainerStyle: null, data: null, renderItem: null, onEndReached: null };
    const items5 = [START.scrollContainer, ];
    const obj11 = { paddingBottom: sum1 };
    items5[1] = obj11;
    obj10.contentContainerStyle = items5;
    obj10.data = [0];
    obj10.renderItem = function renderItem() {
      return closure_2_15(TermsFieldListDefault, { rules: stateFromStores.values, rulesChannelId });
    };
    obj10.onEndReached = function onEndReached() {
      return _undefined(true);
    };
    let items6 = [closure_15(closure_8, obj10), ];
    let obj12 = { style: null, children: null };
    const items7 = [, , ];
    ({ footer: arr8[0], footerContent: arr8[1] } = START);
    const obj13 = { paddingBottom: bottom };
    items7[2] = obj13;
    obj12.style = items7;
    let Text = tmp(END[23]).Text;
    let obj14 = { style: START.footerText, variant: "text-xs/medium", children: null };
    const intl = tmp(END[22]).intl;
    let intl2 = intl.string;
    let string = tmp(END[22]).t;
    if (stringResult) {
      let intl2Result = intl2(string.arAe3I);
    } else {
      intl2Result = intl2(string.D0CVAc);
    }
    obj14.children = intl2Result;
    obj14 = [, ];
    obj14[0] = closure_15(Text, obj14);
    const obj15 = { variant: "primary", size: "md", grow: true, disabled: !stringResult, text: null, onPress: null };
    intl2 = tmp(END[22]).intl;
    string = intl2.string;
    stringResult = string(tmp(END[22]).t["0KL0ot"]);
    obj15.text = stringResult;
    obj15.onPress = function handleOnPress() {
      let tmp2 = null != stateFromStores;
      if (tmp2) {
        tmp2 = null != closure_4;
      }
      if (tmp2) {
        const obj2 = {};
        const merged = Object.assign(closure_4);
        const obj3 = {};
        const merged1 = Object.assign(stateFromStores);
        obj3.response = true;
        const items = [obj3];
        obj2.formFields = items;
        const result = MemberVerificationActionCreatorsDefault.submitVerificationForm(guildId, obj2);
        closure_1.push(constants.COMPLETED);
      }
    };
    Text = closure_15(tmp(END[24]).Button, obj15);
    obj14[1] = Text;
    obj12.children = obj14;
    obj12 = closure_16(tmp11Result2, obj12);
    items6[1] = obj12;
    obj9.children = items6;
    const tmp11Result = closure_15(Text, obj14);
    obj9 = [, ];
    obj9[0] = closure_16(tmp11Result2, obj9);
    tmp3 = tmp3(END[25]);
    const obj16 = { style: null, start: null, end: null, colors: null, pointerEvents: "none" };
    const items8 = [START.scrollContainerGradient, ];
    items6 = { bottom: sum1 };
    items8[1] = items6;
    obj16.style = items8;
    START = tmp(END[26]).VerticalGradient.START;
    obj16.start = START;
    END = tmp(END[26]).VerticalGradient.END;
    obj16.end = END;
    obj16.colors = items3;
    tmp11Result2 = closure_15(tmp3, obj16);
    obj9[1] = tmp11Result2;
    obj7.children = obj9;
    closure_16(tmp(END[27]).SafeAreaPaddingView, obj7);
    const tmp9Result = closure_16(tmp11Result2, obj9);
  }
  const alphaResult1 = require("module_683")(token).alpha(1);
});
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function DropdownOption(option) {
  const cResult = option(576).c(19);
  option = option.option;
  const tmp4 = closure_19();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmojiStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  let emoji = option.emoji;
  let id;
  if (emoji != null) {
    id = emoji.id;
  }
  if (cResult[1] !== id) {
    let emoji2 = option.emoji;
    let id1;
    if (emoji2 != null) {
      id1 = emoji2.id;
    }
    const fn = function n() {
      const emoji = option.emoji;
      let id;
      if (emoji != null) {
        id = emoji.id;
      }
      let usableCustomEmojiById = null;
      if (null != id) {
        const emoji2 = option.emoji;
        let id1;
        if (emoji2 != null) {
          id1 = emoji2.id;
        }
        usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(id1);
      }
      return usableCustomEmojiById;
    };
    cResult[1] = id1;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const obj = option(576);
  const stateFromStores = option(504).useStateFromStores(first, tmp8);
  if (cResult[3] !== stateFromStores) {
    let emojiURL;
    if (null != stateFromStores) {
      const obj2 = { id: null, animated: null, size: null };
      ({ id: obj4.id, animated: obj4.animated } = stateFromStores);
      obj2.size = EMOJI_URL_BASE_SIZE;
      emojiURL = AvatarUtilsDefault.getEmojiURL(obj2);
    }
    cResult[3] = stateFromStores;
    cResult[4] = emojiURL;
    let tmp11 = emojiURL;
  } else {
    tmp11 = cResult[4];
  }
  const emoji3 = option.emoji;
  let str;
  if (emoji3 != null) {
    str = emoji3.name;
  }
  if (str == null) {
    str = "";
  }
  if (cResult[5] === tmp4.optionImageEmoji) {
    if (cResult[6] === tmp4.optionTextEmoji) {
      if (cResult[7] === tmp11) {
        if (cResult[8] === str) {
          let tmp15 = cResult[9];
        }
        if (cResult[10] === tmp4.emojiContainer) {
          if (cResult[11] === tmp15) {
            let tmp17 = cResult[12];
          }
          if (cResult[13] !== option.title) {
            const obj5 = { variant: "text-md/semibold", children: option.title };
            const tmp23 = closure_15(tmp(5086).Text, obj5);
            cResult[13] = option.title;
            cResult[14] = tmp23;
            let tmp21 = tmp23;
          } else {
            tmp21 = cResult[14];
          }
          if (cResult[15] === tmp4.dropdownPill) {
            if (cResult[16] === tmp17) {
              if (cResult[17] === tmp21) {
                let tmp24 = cResult[18];
              }
              return tmp24;
            }
          }
          const obj6 = { style: tmp4.dropdownPill, children: null };
          const items1 = [tmp17, tmp21];
          obj6.children = items1;
          const tmp27 = closure_16(closure_6, obj6);
          cResult[15] = tmp4.dropdownPill;
          cResult[16] = tmp17;
          cResult[17] = tmp21;
          cResult[18] = tmp27;
          tmp24 = tmp27;
        }
        const obj7 = { style: tmp4.emojiContainer, children: tmp15 };
        const tmp20 = closure_15(closure_6, obj7);
        cResult[10] = tmp4.emojiContainer;
        cResult[11] = tmp15;
        cResult[12] = tmp20;
        tmp17 = tmp20;
      }
    }
  }
  const tmp16 = closure_15(EmojiDefault, { textEmojiStyle: tmp4.optionTextEmoji, fastImageStyle: tmp4.optionImageEmoji, src: tmp11, name: str });
  cResult[5] = tmp4.optionImageEmoji;
  cResult[6] = tmp4.optionTextEmoji;
  cResult[7] = tmp11;
  cResult[8] = str;
  cResult[9] = tmp16;
  tmp15 = tmp16;
  const obj8 = { textEmojiStyle: tmp4.optionTextEmoji, fastImageStyle: tmp4.optionImageEmoji, src: tmp11, name: str };
  const tmpResult = option(504);
}) : (function DropdownOption(option) {
  option = option.option;
  const tmp = closure_19();
  const items = [EmojiStore];
  const stateFromStores = option(504).useStateFromStores(items, () => {
    const emoji = option.emoji;
    let id;
    if (emoji != null) {
      id = emoji.id;
    }
    let usableCustomEmojiById = null;
    if (null != id) {
      const emoji2 = option.emoji;
      let id1;
      if (emoji2 != null) {
        id1 = emoji2.id;
      }
      usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(id1);
    }
    return usableCustomEmojiById;
  });
  const obj2 = { style: tmp.dropdownPill, children: null };
  const obj3 = { style: tmp.emojiContainer, children: null };
  const obj4 = { textEmojiStyle: tmp.optionTextEmoji, fastImageStyle: tmp.optionImageEmoji, src: null, name: null };
  let emojiURL;
  const obj = option(504);
  const tmp2 = option;
  if (null != stateFromStores) {
    const obj5 = { id: null, animated: null, size: null };
    ({ id: obj6.id, animated: obj6.animated } = stateFromStores);
    obj5.size = EMOJI_URL_BASE_SIZE;
    emojiURL = AvatarUtilsDefault.getEmojiURL(obj5);
    const tmp8Result = AvatarUtilsDefault;
  }
  obj4.src = emojiURL;
  let emoji = option.emoji;
  let str;
  if (emoji != null) {
    str = emoji.name;
  }
  if (str == null) {
    str = "";
  }
  obj4.name = str;
  obj3.children = closure_15(EmojiDefault, obj4);
  const items1 = [closure_15(closure_6, obj3), closure_15(tmp2(5086).Text, { variant: "text-md/semibold", children: option.title })];
  obj2.children = items1;
  return closure_16(closure_6, obj2);
});
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingPrompt.tsx");

export const RulesPrompt = tmp4;
export const MultipleChoicePrompt = ReactCompilerGating.isReactCompilerEnabled() ? (function MultipleChoicePrompt(guildId) {
  const cResult = guildId(selectOption[14]).c(40);
  guildId = guildId.guildId;
  const currentPrompt = guildId.currentPrompt;
  ({ lastPrompt, currentPromptIndex, numberOfPrompts, selectOption } = guildId);
  const handleOnPress = guildId.handleOnPress;
  const tmp4 = closure_19();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildOnboardingPromptsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === currentPrompt) {
    if (cResult[2] === guildId) {
      let tmp7 = cResult[3];
      let tmp8 = cResult[4];
    }
    const stateFromStoresArray = tmp(selectOption[16]).useStateFromStoresArray(first, tmp7, tmp8);
    const sum = 64 + currentPrompt(selectOption[17])().bottom + c18 + c18;
    if (cResult[5] !== sum) {
      const obj2 = { paddingBottom: sum, position: "relative" };
      cResult[5] = sum;
      cResult[6] = obj2;
      let tmp12 = obj2;
    } else {
      tmp12 = cResult[6];
    }
    if (cResult[7] === tmp4.scrollContainer) {
      if (cResult[8] === tmp12) {
        let tmp13 = cResult[9];
      }
      if (cResult[10] === currentPrompt) {
        if (cResult[11] === currentPromptIndex) {
          if (cResult[12] === numberOfPrompts) {
            let tmp14 = cResult[13];
          }
          if (cResult[14] === currentPrompt.id) {
            if (cResult[15] === currentPrompt.options) {
              if (cResult[16] === guildId) {
                if (cResult[17] === selectOption) {
                  if (cResult[18] === stateFromStoresArray) {
                    if (cResult[25] !== cResult[19]) {
                      class D {
                        constructor(arg0) {
                          closure_0 = guildId;
                          tmp = closure_1_15;
                          obj = {
                            option: guildId,
                            guildId: closure_0,
                            onSelect(arg0) {
                                                      let flag = arg0;
                                                      if (arg0 == null) {
                                                        flag = false;
                                                      }
                                                      return selectOption(currentPrompt.id, option.id, flag);
                                                    },
                            selected: null
                          };
                          tmp2 = currentPrompt(selectOption[30]);
                          flag = closure_3.includes(guildId.id);
                          if (flag == null) {
                            flag = false;
                          }
                          obj.selected = flag;
                          return tmp(tmp2, obj, guildId.id);
                        }
                      }
                      const tmp24 = closure_15(closure_6, { children: null });
                      cResult[25] = tmp17;
                      cResult[26] = tmp24;
                      let tmp21 = tmp24;
                      const obj3 = { children: null };
                    } else {
                      tmp21 = cResult[26];
                    }
                    if (cResult[27] === tmp13) {
                      if (cResult[28] === tmp14) {
                        if (cResult[29] === tmp21) {
                          let tmp25 = cResult[30];
                        }
                        if (cResult[31] === currentPrompt) {
                          if (cResult[32] === guildId) {
                            if (cResult[33] === handleOnPress) {
                              if (cResult[34] === lastPrompt) {
                                if (cResult[35] === stateFromStoresArray) {
                                  let tmp28 = cResult[36];
                                }
                                if (cResult[37] === tmp25) {
                                  if (cResult[38] === tmp28) {
                                    let tmp31 = cResult[39];
                                  }
                                  return tmp31;
                                }
                                class D {
                                  constructor(arg0) {
                                    closure_0 = guildId;
                                    tmp = closure_1_15;
                                    obj = {
                                      option: guildId,
                                      guildId: closure_0,
                                      onSelect(arg0) {
                                                                          let flag = arg0;
                                                                          if (arg0 == null) {
                                                                            flag = false;
                                                                          }
                                                                          return selectOption(currentPrompt.id, option.id, flag);
                                                                        },
                                      selected: null
                                    };
                                    tmp2 = currentPrompt(selectOption[30]);
                                    flag = closure_3.includes(guildId.id);
                                    if (flag == null) {
                                      flag = false;
                                    }
                                    obj.selected = flag;
                                    return tmp(tmp2, obj, guildId.id);
                                  }
                                }
                                const obj4 = { children: null };
                                const items1 = [tmp25, tmp28];
                                obj4.children = items1;
                                const tmp33 = closure_16(closure_17, obj4);
                                cResult[37] = tmp25;
                                cResult[38] = tmp28;
                                cResult[39] = tmp33;
                                tmp31 = tmp33;
                              }
                            }
                          }
                        }
                        class D {
                          constructor(arg0) {
                            closure_0 = guildId;
                            tmp = closure_1_15;
                            obj = {
                              option: guildId,
                              guildId: closure_0,
                              onSelect(arg0) {
                                                          let flag = arg0;
                                                          if (arg0 == null) {
                                                            flag = false;
                                                          }
                                                          return selectOption(currentPrompt.id, option.id, flag);
                                                        },
                              selected: null
                            };
                            tmp2 = currentPrompt(selectOption[30]);
                            flag = closure_3.includes(guildId.id);
                            if (flag == null) {
                              flag = false;
                            }
                            obj.selected = flag;
                            return tmp(tmp2, obj, guildId.id);
                          }
                        }
                        const obj5 = { guildId, currentPrompt, selectedOptionIds: stateFromStoresArray, handleOnPress, lastPrompt };
                        const tmp30 = closure_15(closure_21, obj5);
                        cResult[31] = currentPrompt;
                        cResult[32] = guildId;
                        cResult[33] = handleOnPress;
                        cResult[34] = lastPrompt;
                        cResult[35] = stateFromStoresArray;
                        cResult[36] = tmp30;
                        tmp28 = tmp30;
                      }
                    }
                    class D {
                      constructor(arg0) {
                        closure_0 = guildId;
                        tmp = closure_1_15;
                        obj = {
                          option: guildId,
                          guildId: closure_0,
                          onSelect(arg0) {
                                                  let flag = arg0;
                                                  if (arg0 == null) {
                                                    flag = false;
                                                  }
                                                  return selectOption(currentPrompt.id, option.id, flag);
                                                },
                          selected: null
                        };
                        tmp2 = currentPrompt(selectOption[30]);
                        flag = closure_3.includes(guildId.id);
                        if (flag == null) {
                          flag = false;
                        }
                        obj.selected = flag;
                        return tmp(tmp2, obj, guildId.id);
                      }
                    }
                    const obj6 = { contentContainerStyle: tmp13, children: null };
                    const items2 = [tmp14, tmp21];
                    obj6.children = items2;
                    const tmp27 = closure_16(closure_7, obj6);
                    cResult[27] = tmp13;
                    cResult[28] = tmp14;
                    cResult[29] = tmp21;
                    cResult[30] = tmp27;
                    tmp25 = tmp27;
                  }
                }
              }
            }
          }
          if (cResult[20] === currentPrompt.id) {
            if (cResult[21] === guildId) {
              if (cResult[22] === selectOption) {
                if (cResult[23] === stateFromStoresArray) {
                  let tmp18 = cResult[24];
                }
                options = currentPrompt.options;
                const mapped = options.map(tmp18);
                class D {
                  constructor(arg0) {
                    closure_0 = guildId;
                    tmp = closure_1_15;
                    obj = {
                      option: guildId,
                      guildId: closure_0,
                      onSelect(arg0) {
                                          let flag = arg0;
                                          if (arg0 == null) {
                                            flag = false;
                                          }
                                          return selectOption(currentPrompt.id, option.id, flag);
                                        },
                      selected: null
                    };
                    tmp2 = currentPrompt(selectOption[30]);
                    flag = closure_3.includes(guildId.id);
                    if (flag == null) {
                      flag = false;
                    }
                    obj.selected = flag;
                    return tmp(tmp2, obj, guildId.id);
                  }
                }
                cResult[14] = currentPrompt.id;
                cResult[15] = currentPrompt.options;
                cResult[16] = guildId;
                cResult[17] = selectOption;
                cResult[18] = stateFromStoresArray;
                cResult[19] = mapped;
              }
            }
          }
          class D {
            constructor(arg0) {
              closure_0 = guildId;
              tmp = closure_1_15;
              obj = {
                option: guildId,
                guildId: closure_0,
                onSelect(arg0) {
                              let flag = arg0;
                              if (arg0 == null) {
                                flag = false;
                              }
                              return selectOption(currentPrompt.id, option.id, flag);
                            },
                selected: null
              };
              tmp2 = currentPrompt(selectOption[30]);
              flag = closure_3.includes(guildId.id);
              if (flag == null) {
                flag = false;
              }
              obj.selected = flag;
              return tmp(tmp2, obj, guildId.id);
            }
          }
          cResult[20] = currentPrompt.id;
          cResult[21] = guildId;
          cResult[22] = selectOption;
          cResult[23] = stateFromStoresArray;
          cResult[24] = D;
          tmp18 = D;
        }
      }
      const obj7 = { currentPrompt, numberOfPrompts, currentPromptIndex };
      const tmp16 = closure_15(closure_20, obj7);
      cResult[10] = currentPrompt;
      cResult[11] = currentPromptIndex;
      cResult[12] = numberOfPrompts;
      cResult[13] = tmp16;
      tmp14 = tmp16;
    }
    const items3 = [tmp4.scrollContainer, tmp12];
    cResult[7] = tmp4.scrollContainer;
    cResult[8] = tmp12;
    cResult[9] = items3;
    tmp13 = items3;
    const tmpResult = tmp(selectOption[16]);
  }
  const fn = function n() {
    if (null != currentPrompt) {
      let onboardingResponsesForPrompt = GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, tmp.id);
    } else {
      onboardingResponsesForPrompt = [];
    }
    return onboardingResponsesForPrompt;
  };
  const items4 = [guildId, currentPrompt];
  cResult[1] = currentPrompt;
  cResult[2] = guildId;
  cResult[3] = fn;
  cResult[4] = items4;
  tmp8 = items4;
  tmp7 = fn;
  let obj = guildId(selectOption[14]);
  tmp = guildId;
}) : (function MultipleChoicePrompt(guildId) {
  guildId = guildId.guildId;
  const currentPrompt = guildId.currentPrompt;
  const selectOption = guildId.selectOption;
  ({ lastPrompt, currentPromptIndex, numberOfPrompts, handleOnPress } = guildId);
  const tmp = closure_19();
  const items = [GuildOnboardingPromptsStore];
  const items1 = [guildId, currentPrompt];
  const stateFromStoresArray = guildId(selectOption[16]).useStateFromStoresArray(items, () => {
    if (null != currentPrompt) {
      let onboardingResponsesForPrompt = GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, tmp.id);
    } else {
      onboardingResponsesForPrompt = [];
    }
    return onboardingResponsesForPrompt;
  }, items1);
  const obj2 = { children: null };
  const obj3 = { contentContainerStyle: null, children: null };
  const items2 = [tmp.scrollContainer, ];
  let obj = guildId(selectOption[16]);
  items2[1] = { paddingBottom: 64 + currentPrompt(selectOption[17])().bottom + c18 + c18, position: "relative" };
  obj3.contentContainerStyle = items2;
  const items3 = [closure_15(closure_20, { currentPrompt, numberOfPrompts, currentPromptIndex }), ];
  const obj5 = { children: null };
  options = currentPrompt.options;
  obj5.children = options.map((option) => {
    guildId = option;
    const obj = {
      option,
      guildId,
      onSelect(arg0) {
        let flag = arg0;
        if (arg0 == null) {
          flag = false;
        }
        return selectOption(currentPrompt.id, option.id, flag);
      },
      selected: null
    };
    let flag = stateFromStoresArray.includes(option.id);
    if (flag == null) {
      flag = false;
    }
    obj.selected = flag;
    return closure_1_15(currentPrompt(selectOption[30]), obj, option.id);
  });
  items3[1] = closure_15(closure_6, obj5);
  obj3.children = items3;
  const items4 = [closure_16(closure_7, obj3), closure_15(closure_21, { guildId, currentPrompt, selectedOptionIds: stateFromStoresArray, handleOnPress, lastPrompt })];
  obj2.children = items4;
  return closure_16(closure_17, obj2);
});
export const DropdownPrompt = function DropdownPrompt(guildId) {
  guildId = guildId.guildId;
  const currentPrompt = guildId.currentPrompt;
  const selectOption = guildId.selectOption;
  ({ lastPrompt, currentPromptIndex, numberOfPrompts, handleOnPress } = guildId);
  const tmp = closure_19();
  const items = [GuildOnboardingPromptsStore];
  const items1 = [guildId, currentPrompt];
  const stateFromStoresArray = guildId(selectOption[16]).useStateFromStoresArray(items, () => {
    if (null != currentPrompt) {
      let onboardingResponsesForPrompt = GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, tmp.id);
    } else {
      onboardingResponsesForPrompt = [];
    }
    return onboardingResponsesForPrompt;
  }, items1);
  let found;
  if (currentPrompt != null) {
    options = currentPrompt.options;
    if (options != null) {
      found = options.filter((id) => stateFromStoresArray.includes(id.id));
    }
  }
  const items2 = [guildId, currentPrompt.id, selectOption];
  const obj2 = { contentContainerStyle: null, children: null };
  const items3 = [tmp.scrollContainer, ];
  const obj = guildId(selectOption[16]);
  const tmp2 = currentPrompt;
  items3[1] = { paddingBottom: 64 + currentPrompt(selectOption[17])().bottom + c18 + c18, position: "relative" };
  obj2.contentContainerStyle = items3;
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(6814, dependencyMap.paths), "DropdownOptions", {
      guildId,
      promptId: currentPrompt.id,
      onSelect(id, arg1) {
        let flag = arg1;
        if (arg1 == null) {
          flag = false;
        }
        return selectOption(id.id, id.id, flag);
      }
    });
  }, items2);
  const items4 = [closure_15(closure_20, { currentPrompt, numberOfPrompts, currentPromptIndex }), ];
  const obj4 = { style: tmp.dropdownContainer, onPress: callback, children: null };
  let tmp11Result = 0 === found.length;
  if (tmp11Result) {
    const obj5 = { style: tmp.emptyDropdownText, variant: "text-sm/normal", color: "text-muted", children: "No answers selected." };
    tmp11Result = closure_15(tmp4(tmp3[23]).Text, obj5);
  }
  const obj6 = { children: null };
  const obj7 = { children: null };
  const items5 = [tmp11Result, found.map((option) => closure_1_15(closure_1_23, { option }, option.id)), ];
  const obj8 = { style: tmp.dropdownIconContainer, children: null };
  const obj3 = { paddingBottom: 64 + currentPrompt(selectOption[17])().bottom + c18 + c18, position: "relative" };
  obj8.children = closure_15(closure_5, { style: tmp.dropdownIcon, source: tmp2(selectOption[37]) });
  items5[2] = closure_15(closure_6, obj8);
  obj4.children = items5;
  obj7.children = closure_16(guildId(selectOption[36]).PressableHighlight, obj4);
  items4[1] = closure_15(closure_6, obj7);
  obj2.children = items4;
  const items6 = [closure_16(closure_7, obj2), closure_15(closure_21, { guildId, currentPrompt, selectedOptionIds: stateFromStoresArray, handleOnPress, lastPrompt })];
  obj6.children = items6;
  return closure_16(closure_17, obj6);
};