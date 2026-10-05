// === Module 12046: ApplicationCommandBar ===

// Module 12046 (ApplicationCommandBar)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4886 */;
import LegacyTokens from "LegacyTokens" /* 5620 */;
import Pressables from "Pressables" /* 5909 */;
import usePreviousDefault from "usePrevious" /* 7946 */;
import application_commands_ApplicationCommandUtils from "application_commands/ApplicationCommandUtils" /* 11860 */;
import DescriptionEllipsisDefault from "DescriptionEllipsis" /* 12047 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let ref, scrollToResult;

let StyleSheet;
let c10;
let closure_12;
let metroImportAll;
let metroImportDefault;
let obj10;
let obj11;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
let unpackModuleId;
let closure_3 = ["option", "optionState"];
let react = react_mod;
({ View: metroImportDefault, ScrollView: metroImportAll, StyleSheet } = react_native);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { applicationCommandBar: obj2, applicationIcon: size, applicationTopWrapperScrollView: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8 }, applicationName: { textAlignVertical: "center", marginRight: 12 }, applicationOptionalOptionsDivider: size1, applicationOptionalOptionsDividerWithNoRequired: { marginLeft: 4 }, applicationOptionalOptionsIndicator: { marginHorizontal: 4, paddingVertical: 8 }, applicationDescriptionContainer: { flexShrink: 1 }, applicationDescriptionDivider: obj3, applicationCommandOption: obj4, applicationCommandOptionText: obj5, activeCommandOption: obj6, activeCommandOptionText: obj7, completeCommandOptionText: { opacity: 0.5 }, errorCommandOptionText: obj8, optionDescriptionContainer: { overflow: "hidden", paddingHorizontal: 16, paddingVertical: 8, flexDirection: "row" }, descriptionEllipsis: obj9, descriptionEllipsisDots: obj10, completeCommandOption: obj11 };
obj2 = { flexDirection: "column", backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, overflow: "hidden" };
createStyles = createStyles.createStyles;
size = { width: 24, height: 24, borderRadius: nativeDefault.radii.md, marginRight: 16 };
size1 = { width: StyleSheet.hairlineWidth, marginVertical: 8, marginHorizontal: 12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, height: "100%" };
obj3 = { marginLeft: 0, backgroundColor: nativeDefault.colors.MOBILE_COMMAND_BAR_DIVIDER };
obj4 = { marginHorizontal: 4, padding: 8, fontSize: 12, alignItems: "center", borderRadius: nativeDefault.radii.xs, backgroundColor: LegacyTokens.DARK_PRIMARY_800_LIGHT_PRIMARY_300 };
obj5 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj7 = { color: nativeDefault.colors.WHITE };
obj8 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj9 = { marginLeft: 10, backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
obj10 = { backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj11 = { backgroundColor: LegacyTokens.DARK_PRIMARY_660_LIGHT_PRIMARY_300 };
let closure_13 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let option;
  let optionState;
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(24);
  if (cResult[0] !== arg0) {
    ({ option, optionState } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = option;
    cResult[2] = optionState;
    cResult[3] = tmp9;
    tmp6 = tmp9;
    tmp5 = optionState;
    tmp4 = option;
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
    const intl = intl2.intl;
    const obj2 = { optionName: tmp4.displayName };
    const formatToPlainStringResult = intl.formatToPlainString(intl2.t.evoEHc, obj2);
    cResult[4] = tmp4.displayName;
    cResult[5] = formatToPlainStringResult;
    tmp11 = formatToPlainStringResult;
  } else {
    tmp11 = cResult[5];
  }
  let completeCommandOption = !flag;
  if (completeCommandOption) {
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
    if (cResult[7] === (flag && tmp10.activeCommandOption)) {
      let tmp15;
      if (cResult[8] === completeCommandOption) {
        tmp15 = cResult[9];
      }
      let completeCommandOptionText = !flag;
      if (completeCommandOptionText) {
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
      if (errorCommandOptionText) {
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
        if (cResult[11] === (flag && tmp10.activeCommandOptionText)) {
          if (cResult[12] === completeCommandOptionText) {
            let tmp19;
            if (cResult[13] === errorCommandOptionText) {
              tmp19 = cResult[14];
            }
            if (cResult[15] === tmp4.displayName) {
              let tmp20;
              if (cResult[16] === tmp19) {
                tmp20 = cResult[17];
              }
              if (cResult[18] === flag) {
                if (cResult[19] === tmp6) {
                  if (cResult[20] === tmp11) {
                    if (cResult[21] === tmp15) {
                      let tmp23;
                      if (cResult[22] === tmp20) {
                        tmp23 = cResult[23];
                      }
                      return tmp23;
                    }
                  }
                }
              }
              const obj3 = { accessibilityLabel: tmp11, accessibilityRole: "button", disabled: flag, style: tmp15, children: tmp20 };
              const PressableOpacity = Pressables.PressableOpacity;
              const merged = Object.assign(tmp6);
              const tmp28 = authStore(PressableOpacity, obj3);
              cResult[18] = flag;
              cResult[19] = tmp6;
              cResult[20] = tmp11;
              cResult[21] = tmp15;
              cResult[22] = tmp20;
              cResult[23] = tmp28;
              tmp23 = tmp28;
            }
            const obj4 = { style: tmp19, numberOfLines: 1, children: tmp4.displayName };
            const tmp22 = authStore(native.LegacyText, obj4);
            cResult[15] = tmp4.displayName;
            cResult[16] = tmp19;
            cResult[17] = tmp22;
            tmp20 = tmp22;
          }
        }
      }
      const items = [tmp10.applicationCommandOptionText, flag && tmp10.activeCommandOptionText, completeCommandOptionText, errorCommandOptionText];
      cResult[10] = tmp10.applicationCommandOptionText;
      cResult[11] = flag && tmp10.activeCommandOptionText;
      cResult[12] = completeCommandOptionText;
      cResult[13] = errorCommandOptionText;
      cResult[14] = items;
      tmp19 = items;
    }
  }
  const items1 = [tmp10.applicationCommandOption, flag && tmp10.activeCommandOption, completeCommandOption];
  cResult[6] = tmp10.applicationCommandOption;
  cResult[7] = flag && tmp10.activeCommandOption;
  cResult[8] = completeCommandOption;
  cResult[9] = items1;
  tmp15 = items1;
}) : ((arg0) => {
  let LegacyText;
  let intl;
  let items;
  let obj2;
  let obj3;
  let option;
  let optionState;
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
  const obj = { accessibilityLabel: intl.formatToPlainString(intl2.t.evoEHc, obj2), accessibilityRole: "button", disabled: flag, style: items, children: authStore(LegacyText, obj3) };
  const PressableOpacity = Pressables.PressableOpacity;
  intl = intl2.intl;
  items = [tmp2.applicationCommandOption, flag && tmp2.activeCommandOption, ];
  let completeCommandOption = !flag;
  obj2 = { optionName: option.displayName };
  if (completeCommandOption) {
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
  const merged1 = Object.assign(merged);
  const items1 = [tmp2.applicationCommandOptionText, , , ];
  let activeCommandOptionText = flag;
  LegacyText = native.LegacyText;
  if (flag) {
    activeCommandOptionText = tmp2.activeCommandOptionText;
  }
  items1[1] = activeCommandOptionText;
  let completeCommandOptionText = !flag;
  if (completeCommandOptionText) {
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
  if (errorCommandOptionText) {
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
  obj3 = { style: items1, numberOfLines: 1, children: option.displayName };
  items1[3] = errorCommandOptionText;
  return authStore(PressableOpacity, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((command) => {
  let closure_10;
  let closure_6;
  let first;
  let guildId;
  let tmp = command;
  let tmp2 = guildId;
  let obj = command(guildId[10]);
  const cResult = obj.c(62);
  command = command.command;
  const section = command.section;
  guildId = command.guildId;
  const currentOption = command.currentOption;
  const optionStates = command.optionStates;
  const onPressOption = command.onPressOption;
  const tmp4 = Z();
  react = tmp4;
  ref = react.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = {};
    cResult[0] = obj3;
    first = obj3;
  } else {
    first = cResult[0];
  }
  ref = obj2.useRef(first);
  [r10038, GuildMemberStore] = optionStates(react.useState(false), 2);
  optionStates(react.useState(false), 2);
  [r10043, closure_10] = optionStates(react.useState(false), 2);
  optionStates(react.useState(false), 2);
  const tmp9 = optionStates(react.useState(), 2);
  const first1 = tmp9[0];
  closure_12 = tmp9[1];
  if (cResult[1] !== command.options) {
    class I {
      constructor() {
        c0 = false;
        c1 = false;
        options = command.options;
        if (options != null) {
          item = options.forEach(() => { /* body not rendered: F142101 */ });
        }
        tmp2 = closure_9(c0);
        tmp3 = closure_10(c1);
        return;
      }
    }
    cResult[1] = command.options;
    cResult[2] = I;
  } else {
    class I {
      constructor() {
        c0 = false;
        c1 = false;
        options = command.options;
        if (options != null) {
          item = options.forEach(() => { /* body not rendered: F142101 */ });
        }
        tmp2 = closure_9(c0);
        tmp3 = closure_10(c1);
        return;
      }
    }
  }
  if (cResult[3] !== command) {
    class I {
      constructor() {
        c0 = false;
        c1 = false;
        options = command.options;
        if (options != null) {
          item = options.forEach(() => { /* body not rendered: F142101 */ });
        }
        tmp2 = closure_9(c0);
        tmp3 = closure_10(c1);
        return;
      }
    }
    tmp13[0] = command;
    cResult[3] = command;
    cResult[4] = tmp13;
  } else {
    class I {
      constructor() {
        c0 = false;
        c1 = false;
        options = command.options;
        if (options != null) {
          item = options.forEach(() => { /* body not rendered: F142101 */ });
        }
        tmp2 = closure_9(c0);
        tmp3 = closure_10(c1);
        return;
      }
    }
  }
  const effect = obj2.useEffect(I, tmp13);
  const tmp15 = cResult[5];
  if (currentOption != null) {
    class I {
      constructor() {
        c0 = false;
        c1 = false;
        options = command.options;
        if (options != null) {
          item = options.forEach(() => { /* body not rendered: F142101 */ });
        }
        tmp2 = closure_9(c0);
        tmp3 = closure_10(c1);
        return;
      }
    }
  }
  if (tmp15 !== undefined) {
    class I {
      constructor() {
        c0 = false;
        c1 = false;
        options = command.options;
        if (options != null) {
          item = options.forEach(() => { /* body not rendered: F142101 */ });
        }
        tmp2 = closure_9(c0);
        tmp3 = closure_10(c1);
        return;
      }
    }
    if (currentOption != null) {
      class I {
        constructor() {
          c0 = false;
          c1 = false;
          options = command.options;
          if (options != null) {
            item = options.forEach(() => { /* body not rendered: F142101 */ });
          }
          tmp2 = closure_9(c0);
          tmp3 = closure_10(c1);
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
    cResult[5] = tmp17;
    cResult[6] = N;
  } else {
    class I {
      constructor() {
        c0 = false;
        c1 = false;
        options = command.options;
        if (options != null) {
          item = options.forEach(() => { /* body not rendered: F142101 */ });
        }
        tmp2 = closure_9(c0);
        tmp3 = closure_10(c1);
        return;
      }
    }
  }
  if (cResult[7] !== currentOption) {
    class I {
      constructor() {
        c0 = false;
        c1 = false;
        options = command.options;
        if (options != null) {
          item = options.forEach(() => { /* body not rendered: F142101 */ });
        }
        tmp2 = closure_9(c0);
        tmp3 = closure_10(c1);
        return;
      }
    }
    tmp19[0] = currentOption;
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
    cResult[8] = tmp19;
  } else {
    class I {
      constructor() {
        c0 = false;
        c1 = false;
        options = command.options;
        if (options != null) {
          item = options.forEach(() => { /* body not rendered: F142101 */ });
        }
        tmp2 = closure_9(c0);
        tmp3 = closure_10(c1);
        return;
      }
    }
  }
  const effect1 = obj2.useEffect(N, tmp19);
  if (cResult[9] === first1) {
    class I {
      constructor() {
        c0 = false;
        c1 = false;
        options = command.options;
        if (options != null) {
          item = options.forEach(() => { /* body not rendered: F142101 */ });
        }
        tmp2 = closure_9(c0);
        tmp3 = closure_10(c1);
        return;
      }
    }
    if (cResult[12] === first1) {
      class I {
        constructor() {
          c0 = false;
          c1 = false;
          options = command.options;
          if (options != null) {
            item = options.forEach(() => { /* body not rendered: F142101 */ });
          }
          tmp2 = closure_9(c0);
          tmp3 = closure_10(c1);
          return;
        }
      }
      const effect2 = obj2.useEffect(V, tmp22);
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
        class I {
          constructor() {
            c0 = false;
            c1 = false;
            options = command.options;
            if (options != null) {
              item = options.forEach(() => { /* body not rendered: F142101 */ });
            }
            tmp2 = closure_9(c0);
            tmp3 = closure_10(c1);
            return;
          }
        }
        const items = [];
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
        cResult[15] = items;
      } else {
        class I {
          constructor() {
            c0 = false;
            c1 = false;
            options = command.options;
            if (options != null) {
              item = options.forEach(() => { /* body not rendered: F142101 */ });
            }
            tmp2 = closure_9(c0);
            tmp3 = closure_10(c1);
            return;
          }
        }
      }
      if (cResult[16] === guildId) {
        class I {
          constructor() {
            c0 = false;
            c1 = false;
            options = command.options;
            if (options != null) {
              item = options.forEach(() => { /* body not rendered: F142101 */ });
            }
            tmp2 = closure_9(c0);
            tmp3 = closure_10(c1);
            return;
          }
        }
        let tmpResult = tmp(tmp2[14]);
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
          let tmp31;
          class I {
            constructor() {
              c0 = false;
              c1 = false;
              options = command.options;
              if (options != null) {
                item = options.forEach(() => { /* body not rendered: F142101 */ });
              }
              tmp2 = closure_9(c0);
              tmp3 = closure_10(c1);
              return;
            }
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
            tmp31 = Z;
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
          Z = tmp31;
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
            const obj4 = { style: null, lineClamp: 1, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: tmp37 };
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
            cResult[26] = tmp4.applicationName;
            cResult[27] = tmp37;
            cResult[28] = closure_10(tmp(tmp2[17]).Text, obj4);
            const tmp40 = closure_10(tmp(tmp2[17]).Text, obj4);
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
        const tmpResult2 = tmp(tmp2[15]);
        const applicationCommandsIconSource = tmpResult2.getApplicationCommandsIconSource(section, tmp27);
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
    tmp22[0] = first1;
    tmp22[1] = tmp4;
    cResult[13] = tmp4;
    cResult[14] = tmp22;
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
}) : ((command) => {
  let _undefined;
  let _undefined2;
  let c10;
  let c9;
  let closure_6;
  let currentOption;
  let intl;
  let items5;
  let items8;
  let tmp4;
  let tmp6;
  command = command.command;
  const section = command.section;
  ({ guildId: dependencyMap, currentOption } = command);
  const optionStates = command.optionStates;
  const onPressOption = command.onPressOption;
  c9 = undefined;
  c10 = undefined;
  let stateFromStores;
  let tmp = stateFromStores();
  react = tmp;
  react.useRef(null);
  ref = react.useRef({});
  [tmp4, c9] = optionStates(react.useState(false), 2);
  const tmp3 = optionStates(react.useState(false), 2);
  [tmp6, c10] = optionStates(react.useState(false), 2);
  optionStates(react.useState(false), 2);
  const tmp7 = optionStates(react.useState(), 2);
  const first = tmp7[0];
  closure_12 = tmp7[1];
  const items = [command];
  const effect = react.useEffect(() => {
    let c0 = false;
    let c1 = false;
    const options = command.options;
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
  const effect1 = react.useEffect(() => {
    let name;
    if (currentOption != null) {
      name = currentOption.name;
    }
    closure_12(name);
  }, items1);
  const items2 = [first, tmp];
  const effect2 = react.useEffect(() => {
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
  let obj = command(504);
  const items3 = [c9];
  stateFromStores = obj.useStateFromStores(items3, () => {
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
  const memo = react.useMemo(() => {
    const obj = application_commands_ApplicationCommandUtils;
    return obj.getApplicationCommandsIconSource(section, stateFromStores);
  }, items4);
  closure_14 = react.useCallback((nativeEvent, name) => {
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
  let tmp22 = null != memo;
  const obj2 = { style: tmp.applicationCommandBar, children: items8 };
  const obj3 = { ref, contentContainerStyle: tmp.applicationTopWrapperScrollView, keyboardShouldPersistTaps: "always", showsHorizontalScrollIndicator: false, horizontal: true, children: items5 };
  const tmp21 = ref;
  if (tmp22) {
    const obj4 = { style: tmp.applicationIcon, source: memo };
    tmp22 = c10(section(5974), obj4);
  }
  items5 = [tmp22, , , ];
  const obj5 = { style: tmp.applicationName, lineClamp: 1, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: `/ ${command.displayName}` };
  items5[1] = c10(command(4886).Text, obj5);
  let options = command.options;
  let mapped;
  if (options != null) {
    mapped = options.map((required) => {
      let closure_0 = required;
      let tmp = null;
      if (required.required) {
        const obj = {
          option: required,
          onPress() {
              let tmpResult;
              if (onPressOption != null) {
                tmpResult = tmp(required);
              }
              return tmpResult;
            },
          optionState: optionStates[required.name],
          onLayout(arg0) {
              return closure_14(arg0, required);
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
    const tmp28 = first;
    if (!tmp6) {
      applicationOptionalOptionsDividerWithNoRequired = tmp.applicationOptionalOptionsDividerWithNoRequired;
    }
    const obj6 = { style: items6 };
    items6[1] = applicationOptionalOptionsDividerWithNoRequired;
    const items7 = [c10(ref, obj6), , ];
    const obj7 = { style: tmp.applicationOptionalOptionsIndicator, lineClamp: 1, variant: "eyebrow", color: "text-muted", children: intl.string(command(1126).t.U19GM3) };
    const Text = tmp12(4886).Text;
    intl = tmp12(1126).intl;
    items7[1] = c10(Text, obj7);
    const options1 = command.options;
    let mapped1;
    if (options1 != null) {
      mapped1 = options1.map((required) => {
        let closure_0 = required;
        let tmp = null;
        if (!required.required) {
          const obj = {
            option: required,
            onPress() {
                return onPressOption(required);
              },
            optionState: optionStates[required.name],
            onLayout(arg0) {
                return closure_14(arg0, required);
              }
          };
          tmp = _undefined2(closure_14, obj, required.name);
        }
        return tmp;
      });
    }
    const obj8 = { children: items7 };
    items7[2] = mapped1;
    tmp19Result = tmp19(tmp28, obj8);
  }
  items5[3] = tmp19Result;
  items8 = [closure_12(tmp21, obj3), , , ];
  const obj9 = { style: tmp.applicationDescriptionDivider };
  items8[1] = c10(command(8895).FormDivider, obj9);
  items8[2] = c10(closure_15, { command, option: currentOption, optionState: tmp17 });
  const obj10 = { style: tmp.applicationDescriptionDivider };
  items8[3] = c10(command(8895).FormDivider, obj10);
  return closure_12(ref, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((optionState) => {
  let closure_129_6;
  let command;
  let first;
  let first1;
  let option;
  let tmp11;
  const obj = react2;
  const cResult = obj.c(34);
  ({ command, option } = optionState);
  optionState = optionState.optionState;
  const tmp4 = closure_13();
  const tmp5 = usePreviousDefault(option);
  let closure_1 = tmp5;
  [first, closure_3] = react.useState(undefined);
  [first1, _objectWithoutProperties] = react.useState(0);
  [tmp11, closure_129_6] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  const tmp12 = usePreviousDefault(first1);
  let closure_7 = tmp12;
  if (cResult[0] === first1) {
    if (cResult[1] === option) {
      if (cResult[2] === tmp12) {
        let tmp13;
        let tmp14;
        let tmp16;
        if (cResult[3] === tmp5) {
          tmp13 = cResult[4];
          tmp14 = cResult[5];
        }
        const effect = react.useEffect(tmp13, tmp14);
        if (cResult[6] !== first) {
          const fn2 = function s() {
            closure_3(1);
          };
          cResult[6] = first;
          class B {
            constructor(nativeEvent) {
              const truncResult = Math.trunc(nativeEvent.nativeEvent.layout.height);
              const tmp2 = undefined === first || truncResult > first1;
              if (tmp2) {
                closure_5(truncResult);
              }
              closure_1_6(truncResult);
            }
          }
          tmp16 = fn2;
        } else {
          tmp16 = cResult[7];
        }
        if (cResult[8] === first1) {
          let tmp17;
          let obj10;
          if (cResult[9] === first) {
            tmp17 = cResult[10];
          }
          class B {
            constructor(nativeEvent) {
              const truncResult = Math.trunc(nativeEvent.nativeEvent.layout.height);
              const tmp2 = undefined === first || truncResult > first1;
              if (tmp2) {
                closure_5(truncResult);
              }
              closure_1_6(truncResult);
            }
          }
          if (cResult[11] === command) {
            if (cResult[12] === first) {
              if (cResult[13] === tmp17) {
                if (cResult[14] === option) {
                  let tmp19;
                  if (cResult[15] === optionState) {
                    tmp19 = cResult[16];
                  }
                  if (cResult[17] === tmp4.applicationDescriptionContainer) {
                    let tmp24;
                    if (cResult[18] === tmp19) {
                      tmp24 = cResult[19];
                    }
                    if (cResult[20] === tmp11) {
                      if (cResult[21] === first1) {
                        if (cResult[22] === tmp4.descriptionEllipsis) {
                          let tmp29;
                          if (cResult[23] === tmp4.descriptionEllipsisDots) {
                            tmp29 = cResult[24];
                          }
                          if (cResult[25] === tmp4.optionDescriptionContainer) {
                            if (cResult[26] === tmp24) {
                              let tmp32;
                              if (cResult[27] === tmp29) {
                                tmp32 = cResult[28];
                              }
                              if (cResult[29] === "button") {
                                if (cResult[30] === tmp16) {
                                  if (cResult[31] === (1 === first && tmp11 === first1)) {
                                    let tmp37;
                                    if (cResult[32] === tmp32) {
                                      tmp37 = cResult[33];
                                    }
                                    return tmp37;
                                  }
                                }
                              }
                              const obj3 = { accessibilityRole: null, disabled: 1 === first && tmp11 === first1, onPress: tmp16, children: tmp32 };
                              class B {
                                constructor(nativeEvent) {
                                  const truncResult = Math.trunc(nativeEvent.nativeEvent.layout.height);
                                  const tmp2 = undefined === first || truncResult > first1;
                                  if (tmp2) {
                                    closure_5(truncResult);
                                  }
                                  closure_1_6(truncResult);
                                }
                              }
                              const tmp39 = authStore(Pressables.PressableOpacity, obj3);
                              cResult[29] = "button";
                              cResult[30] = tmp16;
                              cResult[31] = 1 === first && tmp11 === first1;
                              cResult[32] = tmp32;
                              cResult[33] = tmp39;
                              tmp37 = tmp39;
                            }
                          }
                          class B {
                            constructor(nativeEvent) {
                              const truncResult = Math.trunc(nativeEvent.nativeEvent.layout.height);
                              const tmp2 = undefined === first || truncResult > first1;
                              if (tmp2) {
                                closure_5(truncResult);
                              }
                              closure_1_6(truncResult);
                            }
                          }
                          tmp35[0] = tmp4.optionDescriptionContainer;
                          const items = [tmp24, tmp29];
                          tmp35[1] = items;
                          const tmp36 = closure_12(metroImportDefault, tmp35);
                          cResult[25] = tmp4.optionDescriptionContainer;
                          cResult[26] = tmp24;
                          cResult[27] = tmp29;
                          cResult[28] = tmp36;
                          tmp32 = tmp36;
                        }
                      }
                    }
                    if (tmp11 !== first1) {
                      ({ descriptionEllipsis: obj5.style, descriptionEllipsisDots: obj5.dotStyle } = tmp4);
                      class B {
                        constructor(nativeEvent) {
                          const truncResult = Math.trunc(nativeEvent.nativeEvent.layout.height);
                          const tmp2 = undefined === first || truncResult > first1;
                          if (tmp2) {
                            closure_5(truncResult);
                          }
                          closure_1_6(truncResult);
                        }
                      }
                    }
                    class B {
                      constructor(nativeEvent) {
                        const truncResult = Math.trunc(nativeEvent.nativeEvent.layout.height);
                        const tmp2 = undefined === first || truncResult > first1;
                        if (tmp2) {
                          closure_5(truncResult);
                        }
                        closure_1_6(truncResult);
                      }
                    }
                    cResult[20] = tmp11;
                    cResult[21] = first1;
                    cResult[22] = tmp4.descriptionEllipsis;
                    cResult[23] = tmp4.descriptionEllipsisDots;
                    cResult[24] = null;
                    tmp29 = tmp30;
                  }
                  class B {
                    constructor(nativeEvent) {
                      const truncResult = Math.trunc(nativeEvent.nativeEvent.layout.height);
                      const tmp2 = undefined === first || truncResult > first1;
                      if (tmp2) {
                        closure_5(truncResult);
                      }
                      closure_1_6(truncResult);
                    }
                  }
                  tmp27[0] = tmp4.applicationDescriptionContainer;
                  tmp27[1] = tmp19;
                  const tmp28 = authStore(metroImportDefault, tmp27);
                  cResult[17] = tmp4.applicationDescriptionContainer;
                  cResult[18] = tmp19;
                  cResult[19] = tmp28;
                  tmp24 = tmp28;
                }
              }
            }
          }
          let error;
          const Text = Text_Text.Text;
          if (optionState != null) {
            if (optionState.lastValidationResult != null) {
              error = lastValidationResult.error;
            }
          }
          if (null != error) {
            class B {
              constructor(nativeEvent) {
                const truncResult = Math.trunc(nativeEvent.nativeEvent.layout.height);
                const tmp2 = undefined === first || truncResult > first1;
                if (tmp2) {
                  closure_5(truncResult);
                }
                closure_1_6(truncResult);
              }
            }
          } else {
            obj10 = { lineClamp: first, onLayout: tmp17, variant: "text-sm/medium", color: "mobile-text-heading-primary", children: null != option ? option.displayDescription : command.displayDescription };
          }
          const tmp20Result = authStore(Text, obj10);
          cResult[11] = command;
          cResult[12] = first;
          cResult[13] = tmp17;
          cResult[14] = option;
          cResult[15] = optionState;
          cResult[16] = tmp20Result;
          tmp19 = tmp20Result;
        }
        class B {
          constructor(nativeEvent) {
            const truncResult = Math.trunc(nativeEvent.nativeEvent.layout.height);
            const tmp2 = undefined === first || truncResult > first1;
            if (tmp2) {
              closure_5(truncResult);
            }
            closure_1_6(truncResult);
          }
        }
        cResult[8] = first1;
        cResult[9] = first;
        cResult[10] = B;
        tmp17 = B;
      }
    }
  }
  const fn = function n() {
    if (closure_1 !== option) {
      closure_5(0);
      closure_1_6(0);
      closure_3(undefined);
    } else {
      const tmp2 = first1 > 0 && 0 === closure_7;
      if (tmp2) {
        closure_3(1);
      }
    }
  };
  const items1 = [tmp5, option, first1, tmp12];
  cResult[0] = first1;
  cResult[1] = option;
  cResult[2] = tmp12;
  cResult[3] = tmp5;
  cResult[4] = fn;
  cResult[5] = items1;
  tmp14 = items1;
  tmp13 = fn;
}) : ((option) => {
  let Text;
  let c6;
  let closure_5;
  let first;
  let first1;
  let items2;
  let obj2;
  let obj5;
  let tmp10;
  option = option.option;
  const optionState = option.optionState;
  first = undefined;
  closure_3 = undefined;
  first1 = undefined;
  closure_5 = undefined;
  c6 = undefined;
  const command = option.command;
  const tmp = closure_13();
  const tmp4 = usePreviousDefault(option);
  let closure_1 = tmp4;
  [first, closure_3] = react.useState(undefined);
  [first1, closure_5] = react.useState(0);
  [tmp10, c6] = _slicedToArray(react.useState(0), 2);
  const tmp9 = _slicedToArray(react.useState(0), 2);
  const tmp11 = usePreviousDefault(first1);
  let closure_7 = tmp11;
  const items = [tmp4, option, first1, tmp11];
  const effect = react.useEffect(() => {
    if (closure_1 !== option) {
      closure_5(0);
      _undefined(0);
      closure_3(undefined);
    } else {
      const tmp2 = first1 > 0 && 0 === closure_7;
      if (tmp2) {
        closure_3(1);
      }
    }
  }, items);
  const items1 = [first];
  let tmp14 = 1 === first;
  const callback = react.useCallback(() => {
    closure_3(1);
  }, items1);
  if (tmp14) {
    tmp14 = tmp10 === first1;
  }
  let str = "button";
  if (tmp14) {
    str = "text";
  }
  const obj = { accessibilityRole: str, disabled: tmp14, onPress: callback, children: closure_12(metroImportDefault, obj2) };
  obj2 = { style: tmp.optionDescriptionContainer, children: items2 };
  const obj3 = { style: tmp.applicationDescriptionContainer, children: authStore(Text, obj5) };
  const PressableOpacity = Pressables.PressableOpacity;
  let error;
  Text = Text_Text.Text;
  if (optionState != null) {
    if (optionState.lastValidationResult != null) {
      error = lastValidationResult.error;
    }
  }
  function onDescriptionLayout(nativeEvent) {
    const truncResult = Math.trunc(nativeEvent.nativeEvent.layout.height);
    const tmp2 = undefined === first || truncResult > first1;
    if (tmp2) {
      closure_5(truncResult);
    }
    _undefined(truncResult);
  }
  if (null != error) {
    obj5 = { lineClamp: first, onLayout: onDescriptionLayout, variant: "text-sm/medium", color: "text-feedback-critical", children: optionState.lastValidationResult.error };
    const obj4 = { lineClamp: first, onLayout: onDescriptionLayout, variant: "text-sm/medium", color: "text-feedback-critical", children: optionState.lastValidationResult.error };
  } else {
    obj5 = { lineClamp: first, onLayout: onDescriptionLayout, variant: "text-sm/medium", color: "mobile-text-heading-primary", children: null != option ? option.displayDescription : command.displayDescription };
  }
  items2 = [authStore(metroImportDefault, obj3), ];
  let tmp15Result = null;
  if (tmp10 !== first1) {
    const obj11 = { style: null, dotStyle: null };
    ({ descriptionEllipsis: obj6.style, descriptionEllipsisDots: obj6.dotStyle } = tmp);
    tmp15Result = authStore(DescriptionEllipsisDefault, obj11);
  }
  items2[1] = tmp15Result;
  return authStore(PressableOpacity, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandBar.tsx");

export default tmp5;