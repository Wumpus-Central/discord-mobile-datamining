// === Module 11809: AppLauncherAutocompleteActionSheet ===

// Module 11809 (AppLauncherAutocompleteActionSheet)
import react_native from "react-native" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import merged5 from "merged5" /* 5081 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5795 */;
import TableRow from "TableRow" /* 6000 */;
import executeCommandDefault from "executeCommand" /* 8963 */;
import AssetRegistryDefault from "AssetRegistry" /* 11804 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ApplicationCommandAutocompleteStore from "ApplicationCommandAutocompleteStore" /* 7418 */;
import GuildStore from "GuildStore" /* 2074 */;
import Fragment from "Fragment" /* 21 */;
import module_12 from "module_12" /* 12 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let choices, option, query;

let c10;
let c9;
let obj2;
let react = react_mod;
const View = react_native.View;
const AutoCompleteResultTypes = Constants.AutoCompleteResultTypes;
const AUTOCOMPLETE_OPTION_DEBOUNCE_TIME = ApplicationCommandConstants.AUTOCOMPLETE_OPTION_DEBOUNCE_TIME;
({ jsx: c9, jsxs: c10 } = Fragment);
const executeCommand = module_12.debounce(executeCommandDefault, AUTOCOMPLETE_OPTION_DEBOUNCE_TIME, { leading: true, trailing: true });
let obj = { commandChoiceLoadingContainer: { flex: 1, justifyContent: "center" }, commandChoiceLoadingItem: obj2, emptyState: { backgroundColor: "transparent" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: 16, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
let closure_12 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((option) => {
  let autocompleteResults;
  let channel;
  let first1;
  let initChoice;
  let items1;
  let lastErrored;
  let onChoiceSelect;
  let onDismissAutocompleteSheet;
  const tmp2 = option;
  let obj = option(channel[13]);
  const cResult = obj.c(47);
  option = option.option;
  ({ initChoice, onChoiceSelect } = option);
  ({ onDismissAutocompleteSheet, channel } = option);
  const activeCommand = option.activeCommand;
  const optionValues = option.optionValues;
  let obj2 = optionValues;
  let str;
  const useState = optionValues.useState;
  if (initChoice != null) {
    str = initChoice.name;
  }
  if (str == null) {
    str = "";
  }
  const tmp5 = activeCommand(useState(str), 2);
  query = tmp5[0];
  const tmp7 = tmp5[1];
  const ref = obj2.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ref];
    cResult[0] = items;
    first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] === channel.id) {
    if (cResult[2] === option.name) {
      let tmp11;
      let tmp12;
      let arr3;
      if (cResult[3] === query) {
        tmp11 = cResult[4];
        tmp12 = cResult[5];
      }
      const tmp2Result = tmp2(channel[14]);
      const stateFromStoresObject = tmp2Result.useStateFromStoresObject(first1, tmp11, tmp12);
      ({ autocompleteResults, lastErrored } = stateFromStoresObject);
      if (cResult[6] === autocompleteResults) {
        if (cResult[7] === lastErrored) {
          if (cResult[8] === query) {
            arr3 = cResult[9];
          }
          if (cResult[16] === activeCommand) {
            if (cResult[17] === channel) {
              if (cResult[18] === option.name) {
                if (cResult[19] === optionValues) {
                  let tmp25;
                  let tmp26;
                  if (cResult[20] === query) {
                    tmp25 = cResult[21];
                    tmp26 = cResult[22];
                  }
                  const effect = obj2.useEffect(tmp25, tmp26);
                  if (cResult[23] === arr3) {
                    let tmp28;
                    if (cResult[24] === onChoiceSelect) {
                      tmp28 = cResult[25];
                    }
                    if (cResult[26] === onChoiceSelect) {
                      let tmp29;
                      let tmp33;
                      if (cResult[27] === query) {
                        tmp29 = cResult[28];
                      }
                      const _Symbol = Symbol;
                      class W {
                        constructor() {
                          if ("" !== first) {
                            if (onChoiceSelect != null) {
                              const obj = { name: first, value: first, displayName: first };
                              tmp2(obj);
                            }
                            const obj2 = ActionSheetActionCreatorsDefault;
                            obj2.hideActionSheet();
                          }
                        }
                      }
                      if (tmp30 === Symbol.for("react.memo_cache_sentinel")) {
                        const string = tmp2(channel[16]).intl.string;
                        class W {
                          constructor() {
                            if ("" !== first) {
                              if (onChoiceSelect != null) {
                                const obj = { name: first, value: first, displayName: first };
                                tmp2(obj);
                              }
                              const obj2 = ActionSheetActionCreatorsDefault;
                              obj2.hideActionSheet();
                            }
                          }
                        }
                        cResult[29] = tmp32;
                        class V {
                          constructor() {
                            let obj2;
                            let obj3;
                            const obj = { command: activeCommand, optionValues, context: obj2 };
                            obj2 = { channel, guild: GuildStore.getGuild(channel.guild_id), autocomplete: obj3 };
                            obj3 = { name: option.name, query };
                            executeCommand(obj);
                            const current = ref.current;
                            if (current != null) {
                              current.scrollToOffset({ offset: 0, animated: false });
                            }
                          }
                        }
                      }
                      if (cResult[30] !== tmp29) {
                        let obj3 = { placeholder: null, onChange: tmp7, autoFocus: true, returnKeyType: "done", onSubmitEditing: tmp29 };
                        class W {
                          constructor() {
                            if ("" !== first) {
                              if (onChoiceSelect != null) {
                                const obj = { name: first, value: first, displayName: first };
                                tmp2(obj);
                              }
                              const obj2 = ActionSheetActionCreatorsDefault;
                              obj2.hideActionSheet();
                            }
                          }
                        }
                        class V {
                          constructor() {
                            let obj2;
                            let obj3;
                            const obj = { command: activeCommand, optionValues, context: obj2 };
                            obj2 = { channel, guild: GuildStore.getGuild(channel.guild_id), autocomplete: obj3 };
                            obj3 = { name: option.name, query };
                            executeCommand(obj);
                            const current = ref.current;
                            if (current != null) {
                              current.scrollToOffset({ offset: 0, animated: false });
                            }
                          }
                        }
                        cResult[30] = tmp29;
                        cResult[31] = tmp35;
                        tmp33 = tmp35;
                      } else {
                        tmp33 = cResult[31];
                      }
                      class V {
                        constructor() {
                          let obj2;
                          let obj3;
                          const obj = { command: activeCommand, optionValues, context: obj2 };
                          obj2 = { channel, guild: GuildStore.getGuild(channel.guild_id), autocomplete: obj3 };
                          obj3 = { name: option.name, query };
                          executeCommand(obj);
                          const current = ref.current;
                          if (current != null) {
                            current.scrollToOffset({ offset: 0, animated: false });
                          }
                        }
                      }
                      const _Symbol2 = Symbol;
                      if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                        class Y {
                          constructor(type, arg1) {
                            let str = "placeholder";
                            if (type.type === constants.CHOICE) {
                              str = type.choice.name;
                            }
                            return "" + str + "_" + arg1;
                          }
                        }
                        class W {
                          constructor() {
                            if ("" !== first) {
                              if (onChoiceSelect != null) {
                                const obj = { name: first, value: first, displayName: first };
                                tmp2(obj);
                              }
                              const obj2 = ActionSheetActionCreatorsDefault;
                              obj2.hideActionSheet();
                            }
                          }
                        }
                      } else {
                        class Y {
                          constructor(type, arg1) {
                            let str = "placeholder";
                            if (type.type === constants.CHOICE) {
                              str = type.choice.name;
                            }
                            return "" + str + "_" + arg1;
                          }
                        }
                      }
                      if (cResult[35] === arr3) {
                        class Y {
                          constructor(type, arg1) {
                            let str = "placeholder";
                            if (type.type === constants.CHOICE) {
                              str = type.choice.name;
                            }
                            return "" + str + "_" + arg1;
                          }
                        }
                        if (cResult[38] !== lastErrored) {
                          class Y {
                            constructor(type, arg1) {
                              let str = "placeholder";
                              if (type.type === constants.CHOICE) {
                                str = type.choice.name;
                              }
                              return "" + str + "_" + arg1;
                            }
                          }
                          if (tmp42) {
                            class Y {
                              constructor(type, arg1) {
                                let str = "placeholder";
                                if (type.type === constants.CHOICE) {
                                  str = type.choice.name;
                                }
                                return "" + str + "_" + arg1;
                              }
                            }
                            class W {
                              constructor() {
                                if ("" !== first) {
                                  if (onChoiceSelect != null) {
                                    const obj = { name: first, value: first, displayName: first };
                                    tmp2(obj);
                                  }
                                  const obj2 = ActionSheetActionCreatorsDefault;
                                  obj2.hideActionSheet();
                                }
                              }
                            }
                          }
                          class W {
                            constructor() {
                              if ("" !== first) {
                                if (onChoiceSelect != null) {
                                  const obj = { name: first, value: first, displayName: first };
                                  tmp2(obj);
                                }
                                const obj2 = ActionSheetActionCreatorsDefault;
                                obj2.hideActionSheet();
                              }
                            }
                          }
                          cResult[38] = lastErrored;
                          class V {
                            constructor() {
                              let obj2;
                              let obj3;
                              const obj = { command: activeCommand, optionValues, context: obj2 };
                              obj2 = { channel, guild: GuildStore.getGuild(channel.guild_id), autocomplete: obj3 };
                              obj3 = { name: option.name, query };
                              executeCommand(obj);
                              const current = ref.current;
                              if (current != null) {
                                current.scrollToOffset({ offset: 0, animated: false });
                              }
                            }
                          }
                        } else {
                          class Y {
                            constructor(type, arg1) {
                              let str = "placeholder";
                              if (type.type === constants.CHOICE) {
                                str = type.choice.name;
                              }
                              return "" + str + "_" + arg1;
                            }
                          }
                        }
                        class W {
                          constructor() {
                            if ("" !== first) {
                              if (onChoiceSelect != null) {
                                const obj = { name: first, value: first, displayName: first };
                                tmp2(obj);
                              }
                              const obj2 = ActionSheetActionCreatorsDefault;
                              obj2.hideActionSheet();
                            }
                          }
                        }
                        const obj4 = { option: null, onDismiss: onDismissAutocompleteSheet, children: items1 };
                        class V {
                          constructor() {
                            let obj2;
                            let obj3;
                            const obj = { command: activeCommand, optionValues, context: obj2 };
                            obj2 = { channel, guild: GuildStore.getGuild(channel.guild_id), autocomplete: obj3 };
                            obj3 = { name: option.name, query };
                            executeCommand(obj);
                            const current = ref.current;
                            if (current != null) {
                              current.scrollToOffset({ offset: 0, animated: false });
                            }
                          }
                        }
                        items1 = [tmp33, tmp36, tmp38, tmp42];
                        cResult[40] = onDismissAutocompleteSheet;
                        cResult[41] = option;
                        cResult[42] = tmp36;
                        cResult[43] = tmp38;
                        cResult[44] = tmp42;
                        cResult[45] = tmp33;
                        cResult[46] = closure_10(tmp2(channel[18]).AppLauncherCommandOptionActionSheet, obj4);
                        const tmp46 = closure_10(tmp2(channel[18]).AppLauncherCommandOptionActionSheet, obj4);
                      }
                      const obj5 = { ref, keyExtractor: Y, data: arr3, renderItem: tmp28, scrollEnabled: true };
                      cResult[35] = arr3;
                      cResult[36] = tmp28;
                      cResult[37] = closure_9(tmp2(channel[17]).AppLauncherList, obj5);
                      const tmp40 = closure_9(tmp2(channel[17]).AppLauncherList, obj5);
                    }
                    class W {
                      constructor() {
                        if ("" !== first) {
                          if (onChoiceSelect != null) {
                            const obj = { name: first, value: first, displayName: first };
                            tmp2(obj);
                          }
                          const obj2 = ActionSheetActionCreatorsDefault;
                          obj2.hideActionSheet();
                        }
                      }
                    }
                    cResult[26] = onChoiceSelect;
                    class V {
                      constructor() {
                        let obj2;
                        let obj3;
                        const obj = { command: activeCommand, optionValues, context: obj2 };
                        obj2 = { channel, guild: GuildStore.getGuild(channel.guild_id), autocomplete: obj3 };
                        obj3 = { name: option.name, query };
                        executeCommand(obj);
                        const current = ref.current;
                        if (current != null) {
                          current.scrollToOffset({ offset: 0, animated: false });
                        }
                      }
                    }
                    cResult[27] = query;
                    cResult[28] = W;
                    tmp29 = W;
                  }
                  const fn2 = function $(item) {
                    const obj = { item: item.item, index: item.index, onChoiceSelect, choices: arr3 };
                    return React4(closure_13, obj);
                  };
                  class V {
                    constructor() {
                      let obj2;
                      let obj3;
                      const obj = { command: activeCommand, optionValues, context: obj2 };
                      obj2 = { channel, guild: GuildStore.getGuild(channel.guild_id), autocomplete: obj3 };
                      obj3 = { name: option.name, query };
                      executeCommand(obj);
                      const current = ref.current;
                      if (current != null) {
                        current.scrollToOffset({ offset: 0, animated: false });
                      }
                    }
                  }
                  cResult[24] = onChoiceSelect;
                  cResult[25] = fn2;
                  tmp28 = fn2;
                }
              }
            }
          }
          class V {
            constructor() {
              let obj2;
              let obj3;
              const obj = { command: activeCommand, optionValues, context: obj2 };
              obj2 = { channel, guild: GuildStore.getGuild(channel.guild_id), autocomplete: obj3 };
              obj3 = { name: option.name, query };
              executeCommand(obj);
              const current = ref.current;
              if (current != null) {
                current.scrollToOffset({ offset: 0, animated: false });
              }
            }
          }
          const items2 = [channel, option.name, activeCommand, optionValues, query];
          cResult[16] = activeCommand;
          cResult[17] = channel;
          cResult[18] = option.name;
          cResult[19] = optionValues;
          cResult[20] = query;
          cResult[21] = V;
          cResult[22] = items2;
          tmp26 = items2;
          tmp25 = V;
        }
      }
      const items3 = [];
      if ("" !== query) {
        class Y {
          constructor(type, arg1) {
            let str = "placeholder";
            if (type.type === constants.CHOICE) {
              str = type.choice.name;
            }
            return "" + str + "_" + arg1;
          }
        }
        items3.push(tmp14);
      }
      if (null == autocompleteResults) {
        class Y {
          constructor(type, arg1) {
            let str = "placeholder";
            if (type.type === constants.CHOICE) {
              str = type.choice.name;
            }
            return "" + str + "_" + arg1;
          }
        }
        class W {
          constructor() {
            if ("" !== first) {
              if (onChoiceSelect != null) {
                const obj = { name: first, value: first, displayName: first };
                tmp2(obj);
              }
              const obj2 = ActionSheetActionCreatorsDefault;
              obj2.hideActionSheet();
            }
          }
        }
        cResult[7] = lastErrored;
        class V {
          constructor() {
            let obj2;
            let obj3;
            const obj = { command: activeCommand, optionValues, context: obj2 };
            obj2 = { channel, guild: GuildStore.getGuild(channel.guild_id), autocomplete: obj3 };
            obj3 = { name: option.name, query };
            executeCommand(obj);
            const current = ref.current;
            if (current != null) {
              current.scrollToOffset({ offset: 0, animated: false });
            }
          }
        }
        cResult[8] = query;
        cResult[9] = items3;
        arr3 = items3;
      }
      if (null != autocompleteResults) {
        class Y {
          constructor(type, arg1) {
            let str = "placeholder";
            if (type.type === constants.CHOICE) {
              str = type.choice.name;
            }
            return "" + str + "_" + arg1;
          }
        }
        const push = items3.push;
        class W {
          constructor() {
            if ("" !== first) {
              if (onChoiceSelect != null) {
                const obj = { name: first, value: first, displayName: first };
                tmp2(obj);
              }
              const obj2 = ActionSheetActionCreatorsDefault;
              obj2.hideActionSheet();
            }
          }
        }
        class V {
          constructor() {
            let obj2;
            let obj3;
            const obj = { command: activeCommand, optionValues, context: obj2 };
            obj2 = { channel, guild: GuildStore.getGuild(channel.guild_id), autocomplete: obj3 };
            obj3 = { name: option.name, query };
            executeCommand(obj);
            const current = ref.current;
            if (current != null) {
              current.scrollToOffset({ offset: 0, animated: false });
            }
          }
        }
        HermesBuiltin.arraySpread(tmp17, tmp16, 0);
        HermesBuiltin.apply(push, tmp17, items3);
      }
    }
  }
  const fn = function h() {
    const obj = { autocompleteResults: ApplicationCommandAutocompleteStore.getAutocompleteChoices(channel.id, option.name, first), lastErrored: ApplicationCommandAutocompleteStore.getLastErrored(channel.id) };
    return obj;
  };
  const items4 = [channel.id, option.name, query];
  cResult[1] = channel.id;
  cResult[2] = option.name;
  cResult[3] = query;
  cResult[4] = fn;
  cResult[5] = items4;
  tmp12 = items4;
  tmp11 = fn;
}) : ((option) => {
  let initChoice;
  let intl;
  let items6;
  let onChoiceSelect;
  option = option.option;
  ({ initChoice, onChoiceSelect } = option);
  const channel = option.channel;
  const activeCommand = option.activeCommand;
  const optionValues = option.optionValues;
  query = undefined;
  let ref;
  let autocompleteResults;
  let lastErrored;
  let memo;
  let obj = optionValues;
  let str;
  const onDismissAutocompleteSheet = option.onDismissAutocompleteSheet;
  const useState = optionValues.useState;
  if (initChoice != null) {
    str = initChoice.name;
  }
  if (str == null) {
    str = "";
  }
  const tmp = activeCommand(useState(str), 2);
  query = tmp[0];
  const tmp3 = tmp[1];
  ref = obj.useRef(null);
  let obj2 = option(channel[14]);
  let items = [ref];
  let items1 = [channel.id, option.name, query];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { autocompleteResults: ApplicationCommandAutocompleteStore.getAutocompleteChoices(channel.id, option.name, first), lastErrored: ApplicationCommandAutocompleteStore.getLastErrored(channel.id) };
    return obj;
  }, items1);
  autocompleteResults = stateFromStoresObject.autocompleteResults;
  lastErrored = stateFromStoresObject.lastErrored;
  let items2 = [query, autocompleteResults, lastErrored];
  memo = obj.useMemo(function() {
    const items = [];
    if ("" !== first) {
      const obj = { type: AutoCompleteResultTypes.LABEL, label: tmp2 };
      items.push(obj);
    }
    if (null == autocompleteResults) {
      if (!lastErrored) {
        const push = items.push;
        const _Array = Array;
        const self = this;
        const self2 = this;
        const array = new Array(4);
        const items1 = [];
        const obj2 = { type: AutoCompleteResultTypes.CHOICE_LOADING };
        HermesBuiltin.arraySpread(items1, array.fill(obj2), 0);
        HermesBuiltin.apply(push, items1, items);
      }
      return items;
    }
    if (null != autocompleteResults) {
      const push2 = items.push;
      const items2 = [];
      HermesBuiltin.arraySpread(items2, autocompleteResults.map((choice) => ({ type: constants.CHOICE, choice })), 0);
      HermesBuiltin.apply(push2, items2, items);
    }
  }, items2);
  let tmp13Result = 0 === memo.length && !lastErrored;
  const items3 = [channel, option.name, activeCommand, optionValues, query];
  const effect = obj.useEffect(() => {
    let obj2;
    let obj3;
    const obj = { command: activeCommand, optionValues, context: obj2 };
    obj2 = { channel, guild: GuildStore.getGuild(channel.guild_id), autocomplete: obj3 };
    obj3 = { name: option.name, query };
    executeCommand(obj);
    const current = ref.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  }, items3);
  const items4 = [onChoiceSelect, memo];
  const items5 = [onChoiceSelect, query];
  const callback = obj.useCallback((item) => {
    const obj = { item: item.item, index: item.index, onChoiceSelect, choices: memo };
    return React4(closure_13, obj);
  }, items4);
  const callback1 = obj.useCallback(() => {
    if ("" !== first) {
      if (onChoiceSelect != null) {
        const obj = { name: first, value: first, displayName: first };
        tmp2(obj);
      }
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    }
  }, items5);
  let obj3 = { option, onDismiss: onDismissAutocompleteSheet, children: items6 };
  const AppLauncherCommandOptionActionSheet = tmp5(tmp6[18]).AppLauncherCommandOptionActionSheet;
  const obj4 = { placeholder: intl.string(option(channel[16]).t.Wuie9L), onChange: tmp3, autoFocus: true, returnKeyType: "done", onSubmitEditing: callback1 };
  const AppLauncherListSearchBar = tmp5(tmp6[17]).AppLauncherListSearchBar;
  intl = tmp5(tmp6[16]).intl;
  items6 = [memo(AppLauncherListSearchBar, obj4), , , ];
  if (tmp13Result) {
    tmp13Result = tmp13(tmp5(tmp6[17]).AppLauncherListEmptyState, {});
  }
  items6[1] = tmp13Result;
  const obj5 = {
    ref,
    keyExtractor(type, arg1) {
      let str = "placeholder";
      if (type.type === lastErrored.CHOICE) {
        str = type.choice.name;
      }
      return "" + str + "_" + arg1;
    },
    data: memo,
    renderItem: callback,
    scrollEnabled: true
  };
  items6[2] = memo(option(channel[17]).AppLauncherList, obj5);
  if (lastErrored) {
    lastErrored = tmp13(closure_14, {});
  }
  items6[3] = lastErrored;
  return closure_10(AppLauncherCommandOptionActionSheet, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((choices) => {
  let index;
  let item;
  let obj2;
  let onChoiceSelect;
  let obj = index(onChoiceSelect[13]);
  const cResult = obj.c(17);
  ({ item, index } = choices);
  choices = choices.choices;
  const tmp2 = onChoiceSelect;
  onChoiceSelect = choices.onChoiceSelect;
  let tmp6 = item.type === AutoCompleteResultTypes.CHOICE;
  const tmp4 = choices(onChoiceSelect[19]);
  if (!tmp6) {
    tmp6 = item.type === AutoCompleteResultTypes.CHOICE_LOADING;
  }
  if (!tmp6) {
    tmp6 = item.type === AutoCompleteResultTypes.LABEL;
  }
  tmp4(tmp6, "Invalid autocomplete result type");
  const tmp8 = closure_12();
  let closure_3 = tmp8;
  const width = 100 * Math.random() + 50;
  if (cResult[0] === choices) {
    let tmp9;
    let tmp10;
    if (cResult[1] === index) {
      tmp9 = cResult[2];
    }
    let closure_5 = tmp9;
    if (cResult[3] === tmp9) {
      if (cResult[4] === item) {
        if (cResult[5] === onChoiceSelect) {
          if (cResult[6] === tmp8) {
            tmp10 = cResult[7];
          }
          return tmp10;
        }
      }
    }
    if (cResult[8] === tmp9) {
      let tmp11;
      if (cResult[9] === onChoiceSelect) {
        tmp11 = cResult[10];
      }
      if (cResult[11] === tmp9) {
        let tmp12;
        if (cResult[12] === onChoiceSelect) {
          tmp12 = cResult[13];
        }
        if (cResult[14] === tmp9) {
          let tmp13;
          if (cResult[15] === tmp8) {
            tmp13 = cResult[16];
          }
          index(tmp2[22]);
          class A {
            constructor(label) {
              let items;
              let obj2;
              let closure_0 = label;
              let obj = {
                label: closure_1_10(index(onChoiceSelect[21]).Text, obj2),
                onPress() {
                  if (onChoiceSelect != null) {
                    const obj = { name: null, value: null, displayName: null };
                    ({ label: obj.name, label: obj.value, label: obj.displayName } = label);
                    tmp(obj);
                  }
                  const obj2 = ActionSheetActionCreatorsDefault;
                  obj2.hideActionSheet();
                }
              };
              obj2 = { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary", children: items };
              items = ["\"", label.label, "\""];
              return closure_1_9(closure_5, obj);
            }
          }
          let obj3 = { type: AutoCompleteResultTypes.CHOICE };
          let obj4 = { type: AutoCompleteResultTypes.LABEL };
          const obj5 = { type: AutoCompleteResultTypes.CHOICE_LOADING };
          const withResult = obj2.with(obj3, tmp11);
          const withResult1 = withResult.with(obj4, tmp12);
          const withResult2 = withResult1.with(obj5, tmp13);
          const exhaustiveResult = withResult2.exhaustive();
          cResult[3] = tmp9;
          cResult[4] = item;
          cResult[5] = onChoiceSelect;
          cResult[6] = tmp8;
          cResult[7] = exhaustiveResult;
          tmp10 = exhaustiveResult;
        }
        class A {
          constructor(label) {
            let items;
            let obj2;
            let closure_0 = label;
            let obj = {
              label: closure_1_10(index(onChoiceSelect[21]).Text, obj2),
              onPress() {
                if (onChoiceSelect != null) {
                  const obj = { name: null, value: null, displayName: null };
                  ({ label: obj.name, label: obj.value, label: obj.displayName } = label);
                  tmp(obj);
                }
                const obj2 = ActionSheetActionCreatorsDefault;
                obj2.hideActionSheet();
              }
            };
            obj2 = { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary", children: items };
            items = ["\"", label.label, "\""];
            return closure_1_9(closure_5, obj);
          }
        }
        cResult[14] = tmp9;
        cResult[15] = tmp8;
        cResult[16] = tmp14;
        tmp13 = tmp14;
      }
      class A {
        constructor(label) {
          let items;
          let obj2;
          let closure_0 = label;
          let obj = {
            label: closure_1_10(index(onChoiceSelect[21]).Text, obj2),
            onPress() {
              if (onChoiceSelect != null) {
                const obj = { name: null, value: null, displayName: null };
                ({ label: obj.name, label: obj.value, label: obj.displayName } = label);
                tmp(obj);
              }
              const obj2 = ActionSheetActionCreatorsDefault;
              obj2.hideActionSheet();
            }
          };
          obj2 = { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary", children: items };
          items = ["\"", label.label, "\""];
          return closure_1_9(closure_5, obj);
        }
      }
      cResult[11] = tmp9;
      cResult[12] = onChoiceSelect;
      cResult[13] = A;
      tmp12 = A;
    }
    const fn2 = function f(children) {
      let obj2;
      let obj = {
        label: closure_1_9(index(onChoiceSelect[21]).Text, obj2),
        onPress() {
          if (onChoiceSelect != null) {
            tmp(children.choice);
          }
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        }
      };
      obj2 = { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary", children: children.choice.displayName };
      return closure_1_9(closure_5, obj);
    };
    cResult[8] = tmp9;
    cResult[9] = onChoiceSelect;
    cResult[10] = fn2;
    tmp11 = fn2;
  }
  const fn = function y(arg0) {
    let label;
    let onPress;
    ({ label, onPress } = arg0);
    const obj = { label, onPress, start: 0 === index, end: index === choices.length - 1 };
    return React4(TableRow.TableRow, obj);
  };
  cResult[0] = choices;
  cResult[1] = index;
  cResult[2] = fn;
  tmp9 = fn;
}) : ((arg0) => {
  let item;
  let length;
  let width;
  ({ item, index: require, choices: importDefault, onChoiceSelect: dependencyMap } = arg0);
  let closure_3;
  react = undefined;
  function ListItem(arg0) {
    let label;
    let onPress;
    ({ label, onPress } = arg0);
    const obj = { label, onPress, start: 0 === require, end: require === importDefault.length - 1 };
    return React4(TableRow.TableRow, obj);
  }
  let tmp4 = item.type === AutoCompleteResultTypes.CHOICE;
  const tmp2 = _modDef38;
  if (!tmp4) {
    tmp4 = item.type === AutoCompleteResultTypes.CHOICE_LOADING;
  }
  if (!tmp4) {
    tmp4 = item.type === AutoCompleteResultTypes.LABEL;
  }
  tmp2(tmp4, "Invalid autocomplete result type");
  closure_3 = closure_12();
  react = react.useMemo(() => 100 * Math.random() + 50, []);
  const str = merged5;
  const match = str.match(item);
  let obj = { type: AutoCompleteResultTypes.CHOICE };
  let obj2 = { type: AutoCompleteResultTypes.LABEL };
  let obj3 = { type: AutoCompleteResultTypes.CHOICE_LOADING };
  const withResult = match.with(obj, (children) => {
    let obj2;
    let obj = {
      label: closure_1_9(Text_Text.Text, obj2),
      onPress() {
        if (dependencyMap != null) {
          tmp(children.choice);
        }
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
      }
    };
    obj2 = { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary", children: children.choice.displayName };
    return closure_1_9(ListItem, obj);
  });
  const withResult1 = withResult.with(obj2, (label) => {
    let items;
    let obj2;
    require = label;
    let obj = {
      label: closure_1_10(Text_Text.Text, obj2),
      onPress() {
        if (dependencyMap != null) {
          const obj = { name: null, value: null, displayName: null };
          ({ label: obj.name, label: obj.value, label: obj.displayName } = label);
          tmp(obj);
        }
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.hideActionSheet();
      }
    };
    obj2 = { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary", children: items };
    items = ["\"", label.label, "\""];
    return closure_1_9(ListItem, obj);
  });
  const withResult2 = withResult1.with(obj3, () => {
    let items;
    let obj2;
    let obj3;
    const obj = { label: React4(View, obj2) };
    obj2 = { style: closure_3.commandChoiceLoadingContainer, children: React4(View, obj3) };
    obj3 = { style: items };
    items = [closure_3.commandChoiceLoadingItem, ];
    const obj4 = { width };
    items[1] = obj4;
    return React4(ListItem, obj);
  });
  return withResult2.exhaustive();
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(3);
  const tmp4 = closure_12();
  const emptyState = tmp4.emptyState;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(intl2.t.rTAbPn);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.emptyState) {
    const obj2 = { style: emptyState, lightSource: AssetRegistryDefault, darkSource: AssetRegistryDefault, title: first };
    const EmptyState = native.EmptyState;
    const tmp10 = React4(EmptyState, obj2);
    cResult[1] = tmp4.emptyState;
    cResult[2] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[2];
  }
  return tmp7;
}) : (() => {
  let intl;
  const obj = { style: closure_12().emptyState, lightSource: AssetRegistryDefault, darkSource: AssetRegistryDefault, title: intl.string(intl2.t.rTAbPn) };
  const EmptyState = native.EmptyState;
  intl = intl2.intl;
  return React4(EmptyState, obj);
});
const result = size.fileFinishedImporting("modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteActionSheet.tsx");

export default tmp3;