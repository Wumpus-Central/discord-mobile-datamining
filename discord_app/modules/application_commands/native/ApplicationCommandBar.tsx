// === Module 12115: ApplicationCommandBar ===

// Module 12115 (ApplicationCommandBar)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5088 */;
import usePreviousDefault from "usePrevious" /* 5922 */;
import Pressables from "Pressables" /* 6184 */;
import application_commands_ApplicationCommandUtils from "application_commands/ApplicationCommandUtils" /* 11927 */;
import DescriptionEllipsisDefault from "DescriptionEllipsis" /* 12116 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;

require = fn;
let closure_3 = ["option", "optionState"];
get_ActivityIndicator = fn(17);
({ View: closure_7, ScrollView: closure_8, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { applicationCommandBar: { flexDirection: "column", backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, overflow: "hidden" }, applicationIcon: null, applicationTopWrapperScrollView: null, applicationName: null, applicationOptionalOptionsDivider: null, applicationOptionalOptionsDividerWithNoRequired: null, applicationOptionalOptionsIndicator: null, applicationDescriptionContainer: null, applicationDescriptionDivider: null, applicationCommandOption: null, applicationCommandOptionText: null, activeCommandOption: null, activeCommandOptionText: null, completeCommandOptionText: null, errorCommandOptionText: null, optionDescriptionContainer: null, descriptionEllipsis: null, descriptionEllipsisDots: null, completeCommandOption: null };
let size = { width: 24, height: 24, borderRadius: nativeDefault.radii.md, marginRight: 16 };
obj2.applicationIcon = size;
obj2.applicationTopWrapperScrollView = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8 };
obj2.applicationName = { textAlignVertical: "center", marginRight: 12 };
const size1 = { width: StyleSheet.hairlineWidth, marginVertical: 8, marginHorizontal: 12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, height: "100%" };
obj2.applicationOptionalOptionsDivider = size1;
obj2.applicationOptionalOptionsDividerWithNoRequired = { marginLeft: 4 };
obj2.applicationOptionalOptionsIndicator = { marginHorizontal: 4, paddingVertical: 8 };
obj2.applicationDescriptionContainer = { flexShrink: 1 };
let obj3 = { flexDirection: "column", backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, overflow: "hidden" };
obj2.applicationDescriptionDivider = { marginLeft: 0, backgroundColor: nativeDefault.colors.MOBILE_COMMAND_BAR_DIVIDER };
let obj4 = { marginLeft: 0, backgroundColor: nativeDefault.colors.MOBILE_COMMAND_BAR_DIVIDER };
obj2.applicationCommandOption = { marginHorizontal: 4, padding: 8, fontSize: 12, alignItems: "center", borderRadius: nativeDefault.radii.xs, backgroundColor: fn(5969).DARK_PRIMARY_800_LIGHT_PRIMARY_300 };
let obj5 = { marginHorizontal: 4, padding: 8, fontSize: 12, alignItems: "center", borderRadius: nativeDefault.radii.xs, backgroundColor: fn(5969).DARK_PRIMARY_800_LIGHT_PRIMARY_300 };
obj2.applicationCommandOptionText = { color: nativeDefault.colors.TEXT_DEFAULT };
let obj6 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj2.activeCommandOption = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.activeCommandOptionText = { color: nativeDefault.colors.WHITE };
obj2.completeCommandOptionText = { opacity: 0.5 };
let obj8 = { color: nativeDefault.colors.WHITE };
obj2.errorCommandOptionText = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj2.optionDescriptionContainer = { overflow: "hidden", paddingHorizontal: 16, paddingVertical: 8, flexDirection: "row" };
const obj9 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj2.descriptionEllipsis = { marginLeft: 10, backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
const obj10 = { marginLeft: 10, backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
obj2.descriptionEllipsisDots = { backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let obj11 = { backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.completeCommandOption = { backgroundColor: fn(5969).DARK_PRIMARY_660_LIGHT_PRIMARY_300 };
let closure_13 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function ApplicationCommandOptionItem(arg0) {
  const cResult = c.c(24);
  if (cResult[0] !== arg0) {
    ({ option, optionState } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = option;
    cResult[2] = optionState;
    cResult[3] = tmp9;
    let tmp6 = tmp9;
    let tmp5 = optionState;
    let tmp4 = option;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  const tmp10 = closure_13();
  let flag;
  if (tmp5 != null) {
    flag = tmp5.isActive;
  }
  if (flag == null) {
    flag = false;
  }
  if (cResult[4] !== tmp4.displayName) {
    const intl = util.intl;
    const obj2 = { optionName: tmp4.displayName };
    const formatToPlainStringResult = intl.formatToPlainString(util.t.evoEHc, obj2);
    cResult[4] = tmp4.displayName;
    cResult[5] = formatToPlainStringResult;
    let tmp11 = formatToPlainStringResult;
  } else {
    tmp11 = cResult[5];
  }
  let activeCommandOption = flag;
  if (flag) {
    activeCommandOption = tmp10.activeCommandOption;
  }
  let completeCommandOption = !flag;
  if (!flag) {
    let success;
    if (tmp5 != null) {
      if (tmp5.lastValidationResult != null) {
        success = lastValidationResult.success;
      }
    }
    completeCommandOption = success;
  }
  if (completeCommandOption) {
    completeCommandOption = tmp10.completeCommandOption;
  }
  if (cResult[6] === tmp10.applicationCommandOption) {
    if (cResult[7] === activeCommandOption) {
      if (cResult[8] === completeCommandOption) {
        let tmp14 = cResult[9];
      }
      let activeCommandOptionText = flag;
      if (flag) {
        activeCommandOptionText = tmp10.activeCommandOptionText;
      }
      let completeCommandOptionText = !flag;
      if (!flag) {
        let success1;
        if (tmp5 != null) {
          if (tmp5.lastValidationResult != null) {
            success1 = lastValidationResult2.success;
          }
        }
        completeCommandOptionText = success1;
      }
      if (completeCommandOptionText) {
        completeCommandOptionText = tmp10.completeCommandOptionText;
      }
      let errorCommandOptionText = !flag;
      if (!flag) {
        let success2;
        if (tmp5 != null) {
          if (tmp5.lastValidationResult != null) {
            success2 = lastValidationResult3.success;
          }
        }
        errorCommandOptionText = false === success2;
      }
      if (errorCommandOptionText) {
        errorCommandOptionText = tmp10.errorCommandOptionText;
      }
      if (cResult[10] === tmp10.applicationCommandOptionText) {
        if (cResult[11] === activeCommandOptionText) {
          if (cResult[12] === completeCommandOptionText) {
            if (cResult[13] === errorCommandOptionText) {
              let tmp17 = cResult[14];
            }
            if (cResult[15] === tmp4.displayName) {
              if (cResult[16] === tmp17) {
                let tmp18 = cResult[17];
              }
              if (cResult[18] === flag) {
                if (cResult[19] === tmp6) {
                  if (cResult[20] === tmp11) {
                    if (cResult[21] === tmp14) {
                      if (cResult[22] === tmp18) {
                        let tmp21 = cResult[23];
                      }
                      return tmp21;
                    }
                  }
                }
              }
              const obj3 = { accessibilityLabel: tmp11, accessibilityRole: "button", disabled: flag, style: tmp14 };
              const merged = Object.assign(tmp6);
              obj3.children = tmp18;
              const tmp26 = collapsed(Pressables.PressableOpacity, obj3);
              cResult[18] = flag;
              cResult[19] = tmp6;
              cResult[20] = tmp11;
              cResult[21] = tmp14;
              cResult[22] = tmp18;
              cResult[23] = tmp26;
              tmp21 = tmp26;
            }
            const obj4 = { style: tmp17, numberOfLines: 1, children: tmp4.displayName };
            const tmp20 = collapsed(native.LegacyText, obj4);
            cResult[15] = tmp4.displayName;
            cResult[16] = tmp17;
            cResult[17] = tmp20;
            tmp18 = tmp20;
          }
        }
      }
      const items = [tmp10.applicationCommandOptionText, activeCommandOptionText, completeCommandOptionText, errorCommandOptionText];
      cResult[10] = tmp10.applicationCommandOptionText;
      cResult[11] = activeCommandOptionText;
      cResult[12] = completeCommandOptionText;
      cResult[13] = errorCommandOptionText;
      cResult[14] = items;
      tmp17 = items;
    }
  }
  const items1 = [tmp10.applicationCommandOption, activeCommandOption, completeCommandOption];
  cResult[6] = tmp10.applicationCommandOption;
  cResult[7] = activeCommandOption;
  cResult[8] = completeCommandOption;
  cResult[9] = items1;
  tmp14 = items1;
}) : (function ApplicationCommandOptionItem(arg0) {
  ({ option, optionState } = arg0);
  const merged = Object.assign(arg0, Object.assign({ option: 0, optionState: 0 }));
  const tmp2 = closure_13();
  let flag;
  if (optionState != null) {
    flag = optionState.isActive;
  }
  if (flag == null) {
    flag = false;
  }
  const obj = { accessibilityLabel: null, accessibilityRole: "button", disabled: null, style: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.formatToPlainString(util.t.evoEHc, { optionName: option.displayName });
  obj.disabled = flag;
  const items = [tmp2.applicationCommandOption, , ];
  let activeCommandOption = flag;
  if (flag) {
    activeCommandOption = tmp2.activeCommandOption;
  }
  items[1] = activeCommandOption;
  let completeCommandOption = !flag;
  if (!flag) {
    let success;
    if (optionState != null) {
      if (optionState.lastValidationResult != null) {
        success = lastValidationResult.success;
      }
    }
    completeCommandOption = success;
  }
  if (completeCommandOption) {
    completeCommandOption = tmp2.completeCommandOption;
  }
  items[2] = completeCommandOption;
  obj.style = items;
  const merged1 = Object.assign(merged);
  const items1 = [tmp2.applicationCommandOptionText, , , ];
  let activeCommandOptionText = flag;
  if (flag) {
    activeCommandOptionText = tmp2.activeCommandOptionText;
  }
  items1[1] = activeCommandOptionText;
  let completeCommandOptionText = !flag;
  if (!flag) {
    let success1;
    if (optionState != null) {
      if (optionState.lastValidationResult != null) {
        success1 = lastValidationResult2.success;
      }
    }
    completeCommandOptionText = success1;
  }
  if (completeCommandOptionText) {
    completeCommandOptionText = tmp2.completeCommandOptionText;
  }
  items1[2] = completeCommandOptionText;
  let errorCommandOptionText = !flag;
  if (!flag) {
    let success2;
    if (optionState != null) {
      if (optionState.lastValidationResult != null) {
        success2 = lastValidationResult3.success;
      }
    }
    errorCommandOptionText = false === success2;
  }
  if (errorCommandOptionText) {
    errorCommandOptionText = tmp2.errorCommandOptionText;
  }
  items1[3] = errorCommandOptionText;
  obj.children = collapsed(native.LegacyText, { style: items1, numberOfLines: 1, children: option.displayName });
  return collapsed(Pressables.PressableOpacity, obj);
});
fn(558);
const obj12 = { backgroundColor: fn(5969).DARK_PRIMARY_660_LIGHT_PRIMARY_300 };
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((optionState) => {
  const cResult = c.c(34);
  ({ command, option } = optionState);
  optionState = optionState.optionState;
  const tmp4 = closure_13();
  const tmp6 = usePreviousDefault(option);
  closure_1 = tmp6;
  [lineClamp, closure_3] = noop.useState(undefined);
  [first1, closure_5] = noop.useState(0);
  [tmp12, noop] = noop.useState(0);
  const tmp13 = usePreviousDefault(first1);
  closure_7 = tmp13;
  if (cResult[0] === first1) {
    if (cResult[1] === option) {
      if (cResult[2] === tmp13) {
        if (cResult[3] === tmp6) {
          let tmp14 = cResult[4];
          let tmp15 = cResult[5];
        }
        const effect = noop.useEffect(tmp14, tmp15);
        if (cResult[6] !== lineClamp) {
          const fn2 = function s() {
            closure_3(1);
          };
          cResult[6] = lineClamp;
          cResult[7] = fn2;
          let tmp17 = fn2;
        } else {
          tmp17 = cResult[7];
        }
        if (cResult[8] === first1) {
          if (cResult[9] === lineClamp) {
            let tmp18 = cResult[10];
          }
          let str = "button";
          if (1 === lineClamp && tmp12 === first1) {
            str = "text";
          }
          if (cResult[11] === command) {
            if (cResult[12] === lineClamp) {
              if (cResult[13] === tmp18) {
                if (cResult[14] === option) {
                  if (cResult[15] === optionState) {
                    if (cResult[17] === tmp4.applicationDescriptionContainer) {
                      if (cResult[18] === tmp20) {
                        let tmp26 = cResult[19];
                      }
                      if (cResult[20] === tmp12) {
                        if (cResult[21] === first1) {
                          if (cResult[22] === tmp4.descriptionEllipsis) {
                            if (cResult[23] === tmp4.descriptionEllipsisDots) {
                              let tmp30 = cResult[24];
                            }
                            if (cResult[25] === tmp4.optionDescriptionContainer) {
                              if (cResult[26] === tmp26) {
                                if (cResult[27] === tmp30) {
                                  let tmp33 = cResult[28];
                                }
                                if (cResult[29] === str) {
                                  if (cResult[30] === tmp17) {
                                    if (cResult[31] === tmp19) {
                                      if (cResult[32] === tmp33) {
                                        let tmp37 = cResult[33];
                                      }
                                      return tmp37;
                                    }
                                  }
                                }
                                const obj3 = { accessibilityRole: str, disabled: tmp19, onPress: tmp17, children: tmp33 };
                                const tmp39 = collapsed(Pressables.PressableOpacity, obj3);
                                cResult[29] = str;
                                cResult[30] = tmp17;
                                cResult[31] = tmp19;
                                cResult[32] = tmp33;
                                cResult[33] = tmp39;
                                tmp37 = tmp39;
                              }
                            }
                            const obj4 = { style: tmp4.optionDescriptionContainer, children: null };
                            const items = [tmp26, tmp30];
                            obj4.children = items;
                            const tmp36 = __initData(ref, obj4);
                            cResult[25] = tmp4.optionDescriptionContainer;
                            cResult[26] = tmp26;
                            cResult[27] = tmp30;
                            cResult[28] = tmp36;
                            tmp33 = tmp36;
                          }
                        }
                      }
                      let tmp31 = null;
                      if (tmp12 !== first1) {
                        ({ descriptionEllipsis: obj6.style, descriptionEllipsisDots: obj6.dotStyle } = tmp4);
                        tmp31 = collapsed(DescriptionEllipsisDefault, { style: null, dotStyle: null });
                        const obj5 = { style: null, dotStyle: null };
                      }
                      cResult[20] = tmp12;
                      cResult[21] = first1;
                      cResult[22] = tmp4.descriptionEllipsis;
                      cResult[23] = tmp4.descriptionEllipsisDots;
                      cResult[24] = tmp31;
                      tmp30 = tmp31;
                    }
                    const obj7 = { style: tmp4.applicationDescriptionContainer, children: cResult[16] };
                    const tmp29 = collapsed(ref, obj7);
                    cResult[17] = tmp4.applicationDescriptionContainer;
                    cResult[18] = cResult[16];
                    cResult[19] = tmp29;
                    tmp26 = tmp29;
                  }
                }
              }
            }
          }
          let error;
          if (optionState != null) {
            if (optionState.lastValidationResult != null) {
              error = lastValidationResult.error;
            }
          }
          if (null != error) {
            const obj8 = { lineClamp, onLayout: tmp18, variant: "text-sm/medium", color: "text-feedback-critical", children: optionState.lastValidationResult.error };
            let obj14 = obj8;
          } else {
            obj14 = { lineClamp, onLayout: tmp18, variant: "text-sm/medium", color: "mobile-text-heading-primary", children: null != option ? option.displayDescription : command.displayDescription };
          }
          const tmp21Result = collapsed(Text_Text.Text, obj14);
          cResult[11] = command;
          cResult[12] = lineClamp;
          cResult[13] = tmp18;
          cResult[14] = option;
          cResult[15] = optionState;
          cResult[16] = tmp21Result;
        }
        function onDescriptionLayout(nativeEvent) {
          const truncResult = Math.trunc(nativeEvent.nativeEvent.layout.height);
          let tmp2 = undefined === first;
          if (!tmp2) {
            tmp2 = truncResult > first1;
          }
          if (tmp2) {
            closure_5(truncResult);
          }
          noop(truncResult);
        }
        cResult[8] = first1;
        cResult[9] = lineClamp;
        cResult[10] = onDescriptionLayout;
        tmp18 = onDescriptionLayout;
      }
    }
  }
  const fn = function n() {
    if (closure_1 !== option) {
      closure_5(0);
      noop(0);
      closure_3(undefined);
    } else {
      let tmp2 = first1 > 0;
      if (tmp2) {
        tmp2 = 0 === closure_7;
      }
      if (tmp2) {
        closure_3(1);
      }
    }
  };
  const items1 = [tmp6, option, first1, tmp13];
  cResult[0] = first1;
  cResult[1] = option;
  cResult[2] = tmp13;
  cResult[3] = tmp6;
  cResult[4] = fn;
  cResult[5] = items1;
  tmp15 = items1;
  tmp14 = fn;
  const tmp11 = _slicedToArray(noop.useState(0), 2);
}) : ((option) => {
  option = option.option;
  const optionState = option.optionState;
  lineClamp = undefined;
  closure_3 = undefined;
  first1 = undefined;
  closure_5 = undefined;
  c6 = undefined;
  const tmp = closure_13();
  const tmp4 = usePreviousDefault(option);
  closure_1 = tmp4;
  [lineClamp, closure_3] = noop.useState(undefined);
  [first1, closure_5] = noop.useState(0);
  [tmp10, c6] = noop.useState(0);
  const tmp11 = usePreviousDefault(first1);
  closure_7 = tmp11;
  const items = [tmp4, option, first1, tmp11];
  const effect = noop.useEffect(() => {
    if (closure_1 !== option) {
      closure_5(0);
      _undefined(0);
      closure_3(undefined);
    } else {
      let tmp2 = first1 > 0;
      if (tmp2) {
        tmp2 = 0 === closure_7;
      }
      if (tmp2) {
        closure_3(1);
      }
    }
  }, items);
  const items1 = [lineClamp];
  let tmp14 = 1 === lineClamp;
  const callback = noop.useCallback(() => {
    closure_3(1);
  }, items1);
  if (tmp14) {
    tmp14 = tmp10 === first1;
  }
  let str = "button";
  if (tmp14) {
    str = "text";
  }
  const obj = { accessibilityRole: str, disabled: tmp14, onPress: callback, children: null };
  const obj2 = { style: tmp.optionDescriptionContainer, children: null };
  const obj3 = { style: tmp.applicationDescriptionContainer, children: null };
  let error;
  if (optionState != null) {
    if (optionState.lastValidationResult != null) {
      error = lastValidationResult.error;
    }
  }
  function onDescriptionLayout(nativeEvent) {
    const truncResult = Math.trunc(nativeEvent.nativeEvent.layout.height);
    let tmp2 = undefined === first;
    if (!tmp2) {
      tmp2 = truncResult > first1;
    }
    if (tmp2) {
      closure_5(truncResult);
    }
    _undefined(truncResult);
  }
  if (null != error) {
    const obj4 = { lineClamp, onLayout: onDescriptionLayout, variant: "text-sm/medium", color: "text-feedback-critical", children: optionState.lastValidationResult.error };
    let obj5 = obj4;
  } else {
    obj5 = { lineClamp, onLayout: onDescriptionLayout, variant: "text-sm/medium", color: "mobile-text-heading-primary", children: null != option ? option.displayDescription : option.command.displayDescription };
  }
  obj3.children = collapsed(Text_Text.Text, obj5);
  const items2 = [collapsed(ref, obj3), ];
  let tmp15Result = null;
  if (tmp10 !== first1) {
    ({ descriptionEllipsis: obj6.style, descriptionEllipsisDots: obj6.dotStyle } = tmp);
    tmp15Result = collapsed(DescriptionEllipsisDefault, { style: null, dotStyle: null });
    const obj11 = { style: null, dotStyle: null };
  }
  items2[1] = tmp15Result;
  obj2.children = items2;
  obj.children = __initData(ref, obj2);
  return collapsed(Pressables.PressableOpacity, obj);
});
size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandBar.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((command) => {
  const cResult = command(guildId[10]).c(62);
  command = command.command;
  const section = command.section;
  guildId = command.guildId;
  const currentOption = command.currentOption;
  const optionStates = command.optionStates;
  const onPressOption = command.onPressOption;
  const tmp4 = closure_13();
  noop = tmp4;
  noop.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = {};
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  noop.useRef(first);
  let obj = command(guildId[10]);
  [r10038, GuildMemberStore] = optionStates(noop.useState(false), 2);
  const tmp7 = optionStates(noop.useState(false), 2);
  [r10043, closure_10] = optionStates(noop.useState(false), 2);
  const tmp9 = optionStates(noop.useState(), 2);
  const first1 = tmp9[0];
  closure_12 = tmp9[1];
  if (cResult[1] !== command.options) {
    const fn = function _() {
      c0 = false;
      c1 = false;
      options = command.options;
      if (options != null) {
        const item = options.forEach((required) => {
          if (true !== required.required) {
            c0 = true;
          } else {
            c1 = true;
          }
        });
      }
      GuildMemberStore(c0);
      closure_1_10(c1);
    };
    cResult[1] = command.options;
    cResult[2] = fn;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] !== command) {
    const items = [command];
    cResult[3] = command;
    cResult[4] = items;
    let tmp12 = items;
  } else {
    tmp12 = cResult[4];
  }
  const effect = obj2.useEffect(tmp11, tmp12);
  let name;
  if (currentOption != null) {
    name = currentOption.name;
  }
  if (cResult[5] !== name) {
    let name1;
    if (currentOption != null) {
      name1 = currentOption.name;
    }
    class N {
      constructor() {
        name = undefined;
        tmp = closure_12;
        if (currentOption != null) {
          name = currentOption.name;
        }
        tmpResult = tmp(name);
        return;
      }
    }
    cResult[5] = name1;
    cResult[6] = N;
    let tmp15 = N;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] !== currentOption) {
    const items1 = [currentOption];
    class N {
      constructor() {
        name = undefined;
        tmp = closure_12;
        if (currentOption != null) {
          name = currentOption.name;
        }
        tmpResult = tmp(name);
        return;
      }
    }
    cResult[7] = currentOption;
    cResult[8] = items1;
    let tmp17 = items1;
  } else {
    tmp17 = cResult[8];
  }
  const effect1 = obj2.useEffect(tmp15, tmp17);
  if (cResult[9] === first1) {
    if (cResult[10] === tmp4.applicationTopWrapperScrollView) {
      let tmp19 = cResult[11];
    }
    if (cResult[12] === first1) {
      if (cResult[13] === tmp4) {
        let tmp20 = cResult[14];
      }
      const effect2 = obj2.useEffect(tmp19, tmp20);
      class N {
        constructor() {
          name = undefined;
          tmp = closure_12;
          if (currentOption != null) {
            name = currentOption.name;
          }
          tmpResult = tmp(name);
          return;
        }
      }
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [];
        class N {
          constructor() {
            name = undefined;
            tmp = closure_12;
            if (currentOption != null) {
              name = currentOption.name;
            }
            tmpResult = tmp(name);
            return;
          }
        }
        cResult[15] = items2;
      }
      if (cResult[16] === guildId) {
        tmp(tmp2[14]);
        class N {
          constructor() {
            name = undefined;
            tmp = closure_12;
            if (currentOption != null) {
              name = currentOption.name;
            }
            tmpResult = tmp(name);
            return;
          }
        }
        if (cResult[19] === tmp27) {
          if (cResult[20] === section) {
            let tmp28 = cResult[21];
          }
          const _Symbol = Symbol;
          class N {
            constructor() {
              name = undefined;
              tmp = closure_12;
              if (currentOption != null) {
                name = currentOption.name;
              }
              tmpResult = tmp(name);
              return;
            }
          }
          if (tmp30 === Symbol.for("react.memo_cache_sentinel")) {
            class Z {
              constructor(arg0, arg1) {
                nativeEvent = command.nativeEvent;
                current = closure_8.current;
                current[arg1.name] = { x: nativeEvent.layout.x, width: nativeEvent.layout.width };
                closure_8.current = current;
                return;
              }
            }
            class N {
              constructor() {
                name = undefined;
                tmp = closure_12;
                if (currentOption != null) {
                  name = currentOption.name;
                }
                tmpResult = tmp(name);
                return;
              }
            }
          } else {
            class Z {
              constructor(arg0, arg1) {
                nativeEvent = command.nativeEvent;
                current = closure_8.current;
                current[arg1.name] = { x: nativeEvent.layout.x, width: nativeEvent.layout.width };
                closure_8.current = current;
                return;
              }
            }
          }
          closure_13 = Z;
          class B {
            constructor() {
              if (null != guildId) {
                tmp2 = section;
                botId = undefined;
                if (section != null) {
                  botId = tmp2.botId;
                }
                if (null != botId) {
                  tmp4 = closure_9;
                  return closure_9.getMember(tmp, tmp2.botId);
                }
              }
              return;
            }
          }
          if (null != undefined) {
            class Z {
              constructor(arg0, arg1) {
                nativeEvent = command.nativeEvent;
                current = closure_8.current;
                current[arg1.name] = { x: nativeEvent.layout.x, width: nativeEvent.layout.width };
                closure_8.current = current;
                return;
              }
            }
            if (currentOption != null) {
              class Z {
                constructor(arg0, arg1) {
                  nativeEvent = command.nativeEvent;
                  current = closure_8.current;
                  current[arg1.name] = { x: nativeEvent.layout.x, width: nativeEvent.layout.width };
                  closure_8.current = current;
                  return;
                }
              }
            }
            class N {
              constructor() {
                name = undefined;
                tmp = closure_12;
                if (currentOption != null) {
                  name = currentOption.name;
                }
                tmpResult = tmp(name);
                return;
              }
            }
          }
          if (cResult[23] === tmp28) {
            class Z {
              constructor(arg0, arg1) {
                nativeEvent = command.nativeEvent;
                current = closure_8.current;
                current[arg1.name] = { x: nativeEvent.layout.x, width: nativeEvent.layout.width };
                closure_8.current = current;
                return;
              }
            }
            class N {
              constructor() {
                name = undefined;
                tmp = closure_12;
                if (currentOption != null) {
                  name = currentOption.name;
                }
                tmpResult = tmp(name);
                return;
              }
            }
            if (cResult[26] === tmp4.applicationName) {
              class Z {
                constructor(arg0, arg1) {
                  nativeEvent = command.nativeEvent;
                  current = closure_8.current;
                  current[arg1.name] = { x: nativeEvent.layout.x, width: nativeEvent.layout.width };
                  closure_8.current = current;
                  return;
                }
              }
              if (cResult[29] === command.options) {
                class Z {
                  constructor(arg0, arg1) {
                    nativeEvent = command.nativeEvent;
                    current = closure_8.current;
                    current[arg1.name] = { x: nativeEvent.layout.x, width: nativeEvent.layout.width };
                    closure_8.current = current;
                    return;
                  }
                }
              }
              class N {
                constructor() {
                  name = undefined;
                  tmp = closure_12;
                  if (currentOption != null) {
                    name = currentOption.name;
                  }
                  tmpResult = tmp(name);
                  return;
                }
              }
              if (tmp42 != null) {
                class Z {
                  constructor(arg0, arg1) {
                    nativeEvent = command.nativeEvent;
                    current = closure_8.current;
                    current[arg1.name] = { x: nativeEvent.layout.x, width: nativeEvent.layout.width };
                    closure_8.current = current;
                    return;
                  }
                }
              }
              class B {
                constructor() {
                  if (null != guildId) {
                    tmp2 = section;
                    botId = undefined;
                    if (section != null) {
                      botId = tmp2.botId;
                    }
                    if (null != botId) {
                      tmp4 = closure_9;
                      return closure_9.getMember(tmp, tmp2.botId);
                    }
                  }
                  return;
                }
              }
              cResult[30] = onPressOption;
              cResult[31] = optionStates;
              cResult[32] = undefined;
            }
            const obj4 = { style: null, lineClamp: 1, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
            class B {
              constructor() {
                if (null != guildId) {
                  tmp2 = section;
                  botId = undefined;
                  if (section != null) {
                    botId = tmp2.botId;
                  }
                  if (null != botId) {
                    tmp4 = closure_9;
                    return closure_9.getMember(tmp, tmp2.botId);
                  }
                }
                return;
              }
            }
            obj4.children = tmp37;
            const tmp40 = closure_10(tmp(tmp2[17]).Text, obj4);
            cResult[26] = tmp4.applicationName;
            cResult[27] = tmp37;
            cResult[28] = tmp40;
          }
          let tmp34 = null != tmp28;
          if (tmp34) {
            class Z {
              constructor(arg0, arg1) {
                nativeEvent = command.nativeEvent;
                current = closure_8.current;
                current[arg1.name] = { x: nativeEvent.layout.x, width: nativeEvent.layout.width };
                closure_8.current = current;
                return;
              }
            }
            class N {
              constructor() {
                name = undefined;
                tmp = closure_12;
                if (currentOption != null) {
                  name = currentOption.name;
                }
                tmpResult = tmp(name);
                return;
              }
            }
            tmp36[0] = tmp4.applicationIcon;
            tmp36[1] = tmp28;
            tmp34 = closure_10(section(tmp2[16]), tmp36);
          }
          cResult[23] = tmp28;
          cResult[24] = tmp4.applicationIcon;
          cResult[25] = tmp34;
        }
        const applicationCommandsIconSource = tmp(tmp2[15]).getApplicationCommandsIconSource(section, tmp27);
        class B {
          constructor() {
            if (null != guildId) {
              tmp2 = section;
              botId = undefined;
              if (section != null) {
                botId = tmp2.botId;
              }
              if (null != botId) {
                tmp4 = closure_9;
                return closure_9.getMember(tmp, tmp2.botId);
              }
            }
            return;
          }
        }
        cResult[19] = tmp27;
        cResult[20] = section;
        cResult[21] = applicationCommandsIconSource;
        tmp28 = applicationCommandsIconSource;
        const tmpResult2 = tmp(tmp2[15]);
      }
      class B {
        constructor() {
          if (null != guildId) {
            tmp2 = section;
            botId = undefined;
            if (section != null) {
              botId = tmp2.botId;
            }
            if (null != botId) {
              tmp4 = closure_9;
              return closure_9.getMember(tmp, tmp2.botId);
            }
          }
          return;
        }
      }
      cResult[16] = guildId;
      cResult[17] = section;
      cResult[18] = B;
    }
    class N {
      constructor() {
        name = undefined;
        tmp = closure_12;
        if (currentOption != null) {
          name = currentOption.name;
        }
        tmpResult = tmp(name);
        return;
      }
    }
    tmp21[0] = first1;
    tmp21[1] = tmp4;
    cResult[13] = tmp4;
    cResult[14] = tmp21;
    tmp20 = tmp21;
  }
  class V {
    constructor() {
      tmp2 = null;
      if (null != closure_11) {
        tmp3 = closure_8;
        tmp2 = closure_8.current[tmp];
      }
      if (null != tmp2) {
        tmp4 = closure_7;
        current = closure_7.current;
        if (current != null) {
          obj = { x: null, animated: true };
          tmp5 = closure_6;
          obj.x = tmp2.x - closure_6.applicationTopWrapperScrollView.paddingHorizontal;
          scrollToResult = current.scrollTo(obj);
        }
      }
      return;
    }
  }
  cResult[9] = first1;
  cResult[10] = tmp4.applicationTopWrapperScrollView;
  cResult[11] = V;
  tmp19 = V;
  const tmp8 = optionStates(noop.useState(false), 2);
}) : ((command) => {
  command = command.command;
  const section = command.section;
  ({ guildId: dependencyMap, currentOption } = command);
  const optionStates = command.optionStates;
  const onPressOption = command.onPressOption;
  c9 = undefined;
  c10 = undefined;
  let stateFromStores;
  let tmp = stateFromStores();
  noop = tmp;
  noop.useRef(null);
  ref = noop.useRef({});
  [tmp4, c9] = optionStates(noop.useState(false), 2);
  const tmp3 = optionStates(noop.useState(false), 2);
  [tmp6, c10] = optionStates(noop.useState(false), 2);
  const tmp7 = optionStates(noop.useState(), 2);
  const first = tmp7[0];
  closure_12 = tmp7[1];
  const items = [command];
  const effect = noop.useEffect(() => {
    c0 = false;
    c1 = false;
    options = command.options;
    if (options != null) {
      const item = options.forEach((required) => {
        if (true !== required.required) {
          c0 = true;
        } else {
          c1 = true;
        }
      });
    }
    _undefined(c0);
    _undefined2(c1);
  }, items);
  const items1 = [currentOption];
  const effect1 = noop.useEffect(() => {
    let name;
    if (currentOption != null) {
      name = currentOption.name;
    }
    closure_12(name);
  }, items1);
  const items2 = [first, tmp];
  const effect2 = noop.useEffect(() => {
    let tmp2 = null;
    if (null != first) {
      tmp2 = ref.current[tmp];
    }
    if (null != tmp2) {
      const current = ref.current;
      if (current != null) {
        const obj = { x: tmp2.x - closure_6.applicationTopWrapperScrollView.paddingHorizontal, animated: true };
        current.scrollTo(obj);
      }
    }
  }, items2);
  const tmp5 = optionStates(noop.useState(false), 2);
  const items3 = [c9];
  stateFromStores = command(504).useStateFromStores(items3, () => {
    if (null != dependencyMap) {
      let botId;
      if (section != null) {
        botId = section.botId;
      }
      if (null != botId) {
        return GuildMemberStore.getMember(tmp, section.botId);
      }
    }
  });
  const items4 = [section, stateFromStores];
  const memo = noop.useMemo(() => application_commands_ApplicationCommandUtils.getApplicationCommandsIconSource(section, stateFromStores), items4);
  closure_14 = noop.useCallback((nativeEvent, name) => {
    nativeEvent = nativeEvent.nativeEvent;
    const current = ref.current;
    current[name.name] = { x: nativeEvent.layout.x, width: nativeEvent.layout.width };
    ref.current = current;
  }, []);
  let name;
  if (currentOption != null) {
    name = currentOption.name;
  }
  let tmp17;
  if (null != name) {
    let name1;
    if (currentOption != null) {
      name1 = currentOption.name;
    }
    tmp17 = optionStates[name1];
  }
  const obj2 = { style: tmp.applicationCommandBar, children: null };
  const obj3 = { ref, contentContainerStyle: tmp.applicationTopWrapperScrollView, keyboardShouldPersistTaps: "always", showsHorizontalScrollIndicator: false, horizontal: true, children: null };
  let tmp22 = null != memo;
  if (tmp22) {
    const obj4 = { style: tmp.applicationIcon, source: memo };
    tmp22 = c10(section(6156), obj4);
  }
  const items5 = [tmp22, c10(command(5088).Text, { style: tmp.applicationName, lineClamp: 1, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: `/ ${command.displayName}` }), , ];
  options = command.options;
  let mapped;
  if (options != null) {
    mapped = options.map((required) => {
      closure_0 = required;
      let tmp = null;
      if (required.required) {
        const obj = {
          option: required,
          onPress() {
              let tmpResult;
              if (onPressOption != null) {
                tmpResult = tmp(closure_0);
              }
              return tmpResult;
            },
          optionState: optionStates[required.name],
          onLayout(arg0) {
              return closure_14(arg0, closure_0);
            }
        };
        tmp = _undefined2(closure_14, obj, required.name);
      }
      return tmp;
    });
  }
  items5[2] = mapped;
  let tmp19Result = null;
  if (tmp4) {
    const items6 = [tmp.applicationOptionalOptionsDivider, ];
    let applicationOptionalOptionsDividerWithNoRequired = !tmp6;
    if (!tmp6) {
      applicationOptionalOptionsDividerWithNoRequired = tmp.applicationOptionalOptionsDividerWithNoRequired;
    }
    const obj6 = { style: null };
    items6[1] = applicationOptionalOptionsDividerWithNoRequired;
    obj6.style = items6;
    const items7 = [tmp25(tmp20, obj6), , ];
    const obj7 = { style: tmp.applicationOptionalOptionsIndicator, lineClamp: 1, variant: "eyebrow", color: "text-muted", children: null };
    const intl = tmp12(1126).intl;
    obj7.children = intl.string(tmp12(1126).t.U19GM3);
    items7[1] = tmp25(tmp12(5088).Text, obj7);
    const options1 = command.options;
    let mapped1;
    if (options1 != null) {
      mapped1 = options1.map((required) => {
        closure_0 = required;
        let tmp = null;
        if (!required.required) {
          const obj = {
            option: required,
            onPress() {
                return onPressOption(closure_0);
              },
            optionState: optionStates[required.name],
            onLayout(arg0) {
                return closure_14(arg0, closure_0);
              }
          };
          tmp = _undefined2(closure_14, obj, required.name);
        }
        return tmp;
      });
    }
    const obj8 = { children: null };
    items7[2] = mapped1;
    obj8.children = items7;
    tmp19Result = tmp19(first, obj8);
  }
  items5[3] = tmp19Result;
  obj3.children = items5;
  const items8 = [closure_12(ref, obj3), c10(command(8579).FormDivider, { style: tmp.applicationDescriptionDivider }), c10(closure_15, { command, option: currentOption, optionState: tmp17 }), c10(command(8579).FormDivider, { style: tmp.applicationDescriptionDivider })];
  obj2.children = items8;
  return closure_12(ref, obj2);
});