// === Module 11795: AppLauncherAutocompleteActionSheet ===

// Module 11795 (AppLauncherAutocompleteActionSheet)
import _modDef38 from "module_38" /* 38 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import _mod5075 from "module_5075" /* 5075 */;
import TableRow from "TableRow" /* 5993 */;
import executeCommandDefault from "executeCommand" /* 8934 */;
import _modDef11790 from "module_11790" /* 11790 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationCommandAutocompleteStore from "ApplicationCommandAutocompleteStore" /* 7407 */;
import GuildStore from "GuildStore" /* 2074 */;
import apply from "module_12" /* 12 */;

require = fn;
const View = fn(17).View;
fn(1085).AutoCompleteResultTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const executeCommand = apply.debounce(executeCommandDefault, fn(5788).AUTOCOMPLETE_OPTION_DEBOUNCE_TIME, { leading: true, trailing: true });
const createStyles = fn(4890);
let obj = { commandChoiceLoadingContainer: { flex: 1, justifyContent: "center" }, commandChoiceLoadingItem: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: 16, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" }, emptyState: { backgroundColor: "transparent" } };
let closure_12 = createStyles.createStyles(obj);
fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: 16, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((choices) => {
  let withResult2 = index;
  let exhaustiveResult = onChoiceSelect;
  const cResult = index(onChoiceSelect[13]).c(17);
  ({ item, index } = choices);
  choices = choices.choices;
  onChoiceSelect = choices.onChoiceSelect;
  let CHOICE_LOADING = AutoCompleteResultTypes;
  let tmp4 = item.type === AutoCompleteResultTypes.CHOICE;
  let obj2 = index(onChoiceSelect[13]);
  if (!tmp4) {
    tmp4 = item.type === CHOICE_LOADING.CHOICE_LOADING;
  }
  if (!tmp4) {
    tmp4 = item.type === CHOICE_LOADING.LABEL;
  }
  choices(onChoiceSelect[19])(tmp4, "Invalid autocomplete result type");
  const tmp6 = closure_12();
  closure_3 = tmp6;
  const width = 100 * Math.random() + 50;
  if (cResult[0] === choices) {
    if (cResult[1] === index) {
      let tmp7 = cResult[2];
    }
    closure_5 = tmp7;
    if (cResult[3] === tmp7) {
      if (cResult[4] === item) {
        if (cResult[5] === onChoiceSelect) {
          if (cResult[6] === tmp6) {
            return cResult[7];
          }
        }
      }
    }
    if (cResult[8] === tmp7) {
      if (cResult[9] === onChoiceSelect) {
        let LABEL = cResult[10];
      }
      if (cResult[11] === tmp7) {
        if (cResult[12] === onChoiceSelect) {
          let tmp8 = cResult[13];
        }
        if (cResult[14] === tmp7) {
          if (cResult[15] === tmp6) {
            let tmp9 = cResult[16];
          }
          withResult2(exhaustiveResult[22]);
          class A {
            constructor(arg0) {
              closure_0 = choices;
              obj = {
                label: null,
                onPress() {
                              if (onChoiceSelect != null) {
                                const obj = { name: null, value: null, displayName: null };
                                ({ label: obj.name, label: obj.value, label: obj.displayName } = closure_0);
                                tmp(obj);
                              }
                              ActionSheetActionCreatorsDefault.hideActionSheet();
                            }
              };
              obj1 = { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary", children: null };
              items = ["\""];
              items[1] = choices.label;
              items[2] = "\"";
              obj1.children = items;
              obj.label = closure_1_10(index(onChoiceSelect[21]).Text, obj1);
              return closure_1_9(closure_5, obj);
            }
          }
          let obj = { type: CHOICE_LOADING.CHOICE };
          const obj4 = { type: null };
          LABEL = CHOICE_LOADING.LABEL;
          obj4.type = LABEL;
          const withResult = obj3.with(obj, LABEL);
          const obj5 = { type: null };
          CHOICE_LOADING = CHOICE_LOADING.CHOICE_LOADING;
          obj5.type = CHOICE_LOADING;
          withResult2 = obj3.with(obj, LABEL).with(obj4, tmp8).with(obj5, tmp9);
          exhaustiveResult = withResult2.exhaustive();
          cResult[3] = tmp7;
          cResult[4] = item;
          cResult[5] = onChoiceSelect;
          cResult[6] = tmp6;
          cResult[7] = exhaustiveResult;
          const withResult1 = obj3.with(obj, LABEL).with(obj4, tmp8);
        }
        class A {
          constructor(arg0) {
            closure_0 = choices;
            obj = {
              label: null,
              onPress() {
                          if (onChoiceSelect != null) {
                            const obj = { name: null, value: null, displayName: null };
                            ({ label: obj.name, label: obj.value, label: obj.displayName } = closure_0);
                            tmp(obj);
                          }
                          ActionSheetActionCreatorsDefault.hideActionSheet();
                        }
            };
            obj1 = { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary", children: null };
            items = ["\""];
            items[1] = choices.label;
            items[2] = "\"";
            obj1.children = items;
            obj.label = closure_1_10(index(onChoiceSelect[21]).Text, obj1);
            return closure_1_9(closure_5, obj);
          }
        }
        cResult[14] = tmp7;
        cResult[15] = tmp6;
        cResult[16] = tmp10;
        tmp9 = tmp10;
      }
      class A {
        constructor(arg0) {
          closure_0 = choices;
          obj = {
            label: null,
            onPress() {
                      if (onChoiceSelect != null) {
                        const obj = { name: null, value: null, displayName: null };
                        ({ label: obj.name, label: obj.value, label: obj.displayName } = closure_0);
                        tmp(obj);
                      }
                      ActionSheetActionCreatorsDefault.hideActionSheet();
                    }
          };
          obj1 = { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary", children: null };
          items = ["\""];
          items[1] = choices.label;
          items[2] = "\"";
          obj1.children = items;
          obj.label = closure_1_10(index(onChoiceSelect[21]).Text, obj1);
          return closure_1_9(closure_5, obj);
        }
      }
      cResult[11] = tmp7;
      cResult[12] = onChoiceSelect;
      cResult[13] = A;
      tmp8 = A;
    }
    const fn2 = function f(children) {
      const choice = children;
      let obj = {
        label: closure_1_9(index(onChoiceSelect[21]).Text, { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary", children: children.choice.displayName }),
        onPress() {
          if (onChoiceSelect != null) {
            tmp(choice.choice);
          }
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
      };
      return closure_1_9(closure_5, obj);
    };
    cResult[8] = tmp7;
    cResult[9] = onChoiceSelect;
    cResult[10] = fn2;
    LABEL = fn2;
  }
  const fn = function y(arg0) {
    ({ label, onPress } = arg0);
    return options(TableRow.TableRow, { label, onPress, start: 0 === index, end: index === choices.length - 1 });
  };
  cResult[0] = choices;
  cResult[1] = index;
  cResult[2] = fn;
  tmp7 = fn;
}) : ((arg0) => {
  ({ item, index: require, choices: importDefault, onChoiceSelect: dependencyMap } = arg0);
  closure_3 = undefined;
  noop = undefined;
  function ListItem(arg0) {
    ({ label, onPress } = arg0);
    return options(TableRow.TableRow, { label, onPress, start: 0 === closure_1_0, end: closure_1_0 === length.length - 1 });
  }
  let tmp4 = item.type === AutoCompleteResultTypes.CHOICE;
  if (!tmp4) {
    tmp4 = item.type === AutoCompleteResultTypes.CHOICE_LOADING;
  }
  if (!tmp4) {
    tmp4 = item.type === AutoCompleteResultTypes.LABEL;
  }
  _modDef38(tmp4, "Invalid autocomplete result type");
  closure_3 = closure_12();
  noop = noop.useMemo(() => 100 * Math.random() + 50, []);
  const match = _mod5075.match(item);
  let obj = { type: AutoCompleteResultTypes.CHOICE };
  let obj2 = { type: AutoCompleteResultTypes.LABEL };
  const withResult = match.with({ type: AutoCompleteResultTypes.CHOICE }, (children) => {
    const choice = children;
    let obj = {
      label: closure_1_9(Text_Text.Text, { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary", children: children.choice.displayName }),
      onPress() {
        if (dependencyMap != null) {
          tmp(choice.choice);
        }
        ActionSheetActionCreatorsDefault.hideActionSheet();
      }
    };
    return closure_1_9(ListItem, obj);
  });
  let obj3 = { type: AutoCompleteResultTypes.CHOICE_LOADING };
  const withResult1 = match.with({ type: AutoCompleteResultTypes.CHOICE }, (children) => {
    const choice = children;
    let obj = {
      label: closure_1_9(Text_Text.Text, { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary", children: children.choice.displayName }),
      onPress() {
        if (dependencyMap != null) {
          tmp(choice.choice);
        }
        ActionSheetActionCreatorsDefault.hideActionSheet();
      }
    };
    return closure_1_9(ListItem, obj);
  }).with({ type: AutoCompleteResultTypes.LABEL }, (label) => {
    closure_0 = label;
    let obj = {
      label: null,
      onPress() {
        if (dependencyMap != null) {
          const obj = { name: null, value: null, displayName: null };
          ({ label: obj.name, label: obj.value, label: obj.displayName } = closure_0);
          tmp(obj);
        }
        ActionSheetActionCreatorsDefault.hideActionSheet();
      }
    };
    let obj2 = { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary", children: null };
    const items = ["\"", label.label, "\""];
    obj2.children = items;
    obj.label = closure_1_10(Text_Text.Text, obj2);
    return closure_1_9(ListItem, obj);
  });
  return match.with({ type: AutoCompleteResultTypes.CHOICE }, (children) => {
    const choice = children;
    let obj = {
      label: closure_1_9(Text_Text.Text, { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary", children: children.choice.displayName }),
      onPress() {
        if (dependencyMap != null) {
          tmp(choice.choice);
        }
        ActionSheetActionCreatorsDefault.hideActionSheet();
      }
    };
    return closure_1_9(ListItem, obj);
  }).with({ type: AutoCompleteResultTypes.LABEL }, (label) => {
    closure_0 = label;
    let obj = {
      label: null,
      onPress() {
        if (dependencyMap != null) {
          const obj = { name: null, value: null, displayName: null };
          ({ label: obj.name, label: obj.value, label: obj.displayName } = closure_0);
          tmp(obj);
        }
        ActionSheetActionCreatorsDefault.hideActionSheet();
      }
    };
    let obj2 = { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary", children: null };
    const items = ["\"", label.label, "\""];
    obj2.children = items;
    obj.label = closure_1_10(Text_Text.Text, obj2);
    return closure_1_9(ListItem, obj);
  }).with({ type: AutoCompleteResultTypes.CHOICE_LOADING }, () => {
    const obj = { label: null };
    const obj2 = { style: closure_3.commandChoiceLoadingContainer, children: null };
    const obj3 = { style: null };
    const items = [closure_3.commandChoiceLoadingItem, { width }];
    obj3.style = items;
    obj2.children = options(View, obj3);
    obj.label = options(View, obj2);
    return options(ListItem, obj);
  }).exhaustive();
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.rTAbPn);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.emptyState) {
    const obj2 = { style: tmp4.emptyState, lightSource: _modDef11790, darkSource: _modDef11790, title: first };
    const tmp10 = options(native.EmptyState, obj2);
    cResult[1] = tmp4.emptyState;
    cResult[2] = tmp10;
    let tmp7 = tmp10;
  } else {
    tmp7 = cResult[2];
  }
  return tmp7;
}) : (() => {
  const obj = { style: closure_12().emptyState, lightSource: _modDef11790, darkSource: _modDef11790, title: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.rTAbPn);
  return options(native.EmptyState, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((option) => {
  const cResult = option(channel[13]).c(47);
  option = option.option;
  ({ initChoice, onChoiceSelect } = option);
  ({ onDismissAutocompleteSheet, channel } = option);
  const activeCommand = option.activeCommand;
  const optionValues = option.optionValues;
  let str;
  if (initChoice != null) {
    str = initChoice.name;
  }
  if (str == null) {
    str = "";
  }
  const tmp4 = activeCommand(optionValues.useState(str), 2);
  query = tmp4[0];
  const ref = optionValues.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ref];
    cResult[0] = items;
    let first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] === channel.id) {
    if (cResult[2] === option.name) {
      if (cResult[3] === query) {
        let tmp9 = cResult[4];
        let tmp10 = cResult[5];
      }
      const stateFromStoresObject = tmp(channel[14]).useStateFromStoresObject(first1, tmp9, tmp10);
      ({ autocompleteResults, lastErrored } = stateFromStoresObject);
      if (cResult[6] === autocompleteResults) {
        if (cResult[7] === lastErrored) {
          if (cResult[8] === query) {
            if (cResult[16] === activeCommand) {
              if (cResult[17] === channel) {
                if (cResult[18] === option.name) {
                  if (cResult[19] === optionValues) {
                    if (cResult[20] === query) {
                      let tmp19 = cResult[21];
                      let tmp20 = cResult[22];
                    }
                    const effect = obj2.useEffect(tmp19, tmp20);
                    if (cResult[23] === arr3) {
                      if (cResult[24] === onChoiceSelect) {
                        let tmp22 = cResult[25];
                      }
                      if (cResult[26] === onChoiceSelect) {
                        if (cResult[27] === query) {
                          let tmp23 = cResult[28];
                        }
                        const _Symbol2 = Symbol;
                        class W {
                          constructor() {
                            tmp = closure_5;
                            if ("" !== closure_5) {
                              tmp3 = null;
                              if (onChoiceSelect != null) {
                                obj = { name: null, value: null, displayName: null };
                                obj.name = tmp;
                                obj.value = tmp;
                                obj.displayName = tmp;
                                tmp2Result = tmp2(obj);
                              }
                              tmp5 = closure_1;
                              tmp6 = closure_2;
                              obj2 = closure_1(closure_2[15]);
                              hideActionSheetResult = obj2.hideActionSheet();
                            }
                            return;
                          }
                        }
                        if (tmp24 === Symbol.for("react.memo_cache_sentinel")) {
                          const string = tmp(channel[16]).intl.string;
                          class W {
                            constructor() {
                              tmp = closure_5;
                              if ("" !== closure_5) {
                                tmp3 = null;
                                if (onChoiceSelect != null) {
                                  obj = { name: null, value: null, displayName: null };
                                  obj.name = tmp;
                                  obj.value = tmp;
                                  obj.displayName = tmp;
                                  tmp2Result = tmp2(obj);
                                }
                                tmp5 = closure_1;
                                tmp6 = closure_2;
                                obj2 = closure_1(closure_2[15]);
                                hideActionSheetResult = obj2.hideActionSheet();
                              }
                              return;
                            }
                          }
                          cResult[29] = tmp26;
                          class V {
                            constructor() {
                              obj = { command: activeCommand, optionValues, context: null };
                              obj1 = { channel, guild: closure_7.getGuild(channel.guild_id), autocomplete: null };
                              obj4 = { name: option.name, query: closure_5 };
                              obj1.autocomplete = obj4;
                              obj.context = obj1;
                              tmp = closure_11(obj);
                              current = closure_6.current;
                              if (current != null) {
                                scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                              }
                              return;
                            }
                          }
                        }
                        if (cResult[30] !== tmp23) {
                          const obj3 = { placeholder: null, onChange: null, autoFocus: true, returnKeyType: "done", onSubmitEditing: null };
                          class W {
                            constructor() {
                              tmp = closure_5;
                              if ("" !== closure_5) {
                                tmp3 = null;
                                if (onChoiceSelect != null) {
                                  obj = { name: null, value: null, displayName: null };
                                  obj.name = tmp;
                                  obj.value = tmp;
                                  obj.displayName = tmp;
                                  tmp2Result = tmp2(obj);
                                }
                                tmp5 = closure_1;
                                tmp6 = closure_2;
                                obj2 = closure_1(closure_2[15]);
                                hideActionSheetResult = obj2.hideActionSheet();
                              }
                              return;
                            }
                          }
                          obj3.onChange = tmp4[1];
                          obj3.onSubmitEditing = tmp23;
                          class V {
                            constructor() {
                              obj = { command: activeCommand, optionValues, context: null };
                              obj1 = { channel, guild: closure_7.getGuild(channel.guild_id), autocomplete: null };
                              obj4 = { name: option.name, query: closure_5 };
                              obj1.autocomplete = obj4;
                              obj.context = obj1;
                              tmp = closure_11(obj);
                              current = closure_6.current;
                              if (current != null) {
                                scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                              }
                              return;
                            }
                          }
                          cResult[30] = tmp23;
                          cResult[31] = tmp29;
                          let tmp27 = tmp29;
                        } else {
                          tmp27 = cResult[31];
                        }
                        class V {
                          constructor() {
                            obj = { command: activeCommand, optionValues, context: null };
                            obj1 = { channel, guild: closure_7.getGuild(channel.guild_id), autocomplete: null };
                            obj4 = { name: option.name, query: closure_5 };
                            obj1.autocomplete = obj4;
                            obj.context = obj1;
                            tmp = closure_11(obj);
                            current = closure_6.current;
                            if (current != null) {
                              scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                            }
                            return;
                          }
                        }
                        const _Symbol3 = Symbol;
                        if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                          class Y {
                            constructor(arg0, arg1) {
                              str = "placeholder";
                              if (option.type === closure_1_8.CHOICE) {
                                str = option.choice.name;
                              }
                              return "" + str + "_" + arg1;
                            }
                          }
                          class W {
                            constructor() {
                              tmp = closure_5;
                              if ("" !== closure_5) {
                                tmp3 = null;
                                if (onChoiceSelect != null) {
                                  obj = { name: null, value: null, displayName: null };
                                  obj.name = tmp;
                                  obj.value = tmp;
                                  obj.displayName = tmp;
                                  tmp2Result = tmp2(obj);
                                }
                                tmp5 = closure_1;
                                tmp6 = closure_2;
                                obj2 = closure_1(closure_2[15]);
                                hideActionSheetResult = obj2.hideActionSheet();
                              }
                              return;
                            }
                          }
                        } else {
                          class Y {
                            constructor(arg0, arg1) {
                              str = "placeholder";
                              if (option.type === closure_1_8.CHOICE) {
                                str = option.choice.name;
                              }
                              return "" + str + "_" + arg1;
                            }
                          }
                        }
                        if (cResult[35] === arr3) {
                          class Y {
                            constructor(arg0, arg1) {
                              str = "placeholder";
                              if (option.type === closure_1_8.CHOICE) {
                                str = option.choice.name;
                              }
                              return "" + str + "_" + arg1;
                            }
                          }
                          if (cResult[38] !== lastErrored) {
                            class Y {
                              constructor(arg0, arg1) {
                                str = "placeholder";
                                if (option.type === closure_1_8.CHOICE) {
                                  str = option.choice.name;
                                }
                                return "" + str + "_" + arg1;
                              }
                            }
                            if (lastErrored) {
                              class Y {
                                constructor(arg0, arg1) {
                                  str = "placeholder";
                                  if (option.type === closure_1_8.CHOICE) {
                                    str = option.choice.name;
                                  }
                                  return "" + str + "_" + arg1;
                                }
                              }
                              class W {
                                constructor() {
                                  tmp = closure_5;
                                  if ("" !== closure_5) {
                                    tmp3 = null;
                                    if (onChoiceSelect != null) {
                                      obj = { name: null, value: null, displayName: null };
                                      obj.name = tmp;
                                      obj.value = tmp;
                                      obj.displayName = tmp;
                                      tmp2Result = tmp2(obj);
                                    }
                                    tmp5 = closure_1;
                                    tmp6 = closure_2;
                                    obj2 = closure_1(closure_2[15]);
                                    hideActionSheetResult = obj2.hideActionSheet();
                                  }
                                  return;
                                }
                              }
                            }
                            class W {
                              constructor() {
                                tmp = closure_5;
                                if ("" !== closure_5) {
                                  tmp3 = null;
                                  if (onChoiceSelect != null) {
                                    obj = { name: null, value: null, displayName: null };
                                    obj.name = tmp;
                                    obj.value = tmp;
                                    obj.displayName = tmp;
                                    tmp2Result = tmp2(obj);
                                  }
                                  tmp5 = closure_1;
                                  tmp6 = closure_2;
                                  obj2 = closure_1(closure_2[15]);
                                  hideActionSheetResult = obj2.hideActionSheet();
                                }
                                return;
                              }
                            }
                            cResult[38] = lastErrored;
                            class V {
                              constructor() {
                                obj = { command: activeCommand, optionValues, context: null };
                                obj1 = { channel, guild: closure_7.getGuild(channel.guild_id), autocomplete: null };
                                obj4 = { name: option.name, query: closure_5 };
                                obj1.autocomplete = obj4;
                                obj.context = obj1;
                                tmp = closure_11(obj);
                                current = closure_6.current;
                                if (current != null) {
                                  scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                                }
                                return;
                              }
                            }
                          } else {
                            class Y {
                              constructor(arg0, arg1) {
                                str = "placeholder";
                                if (option.type === closure_1_8.CHOICE) {
                                  str = option.choice.name;
                                }
                                return "" + str + "_" + arg1;
                              }
                            }
                          }
                          class W {
                            constructor() {
                              tmp = closure_5;
                              if ("" !== closure_5) {
                                tmp3 = null;
                                if (onChoiceSelect != null) {
                                  obj = { name: null, value: null, displayName: null };
                                  obj.name = tmp;
                                  obj.value = tmp;
                                  obj.displayName = tmp;
                                  tmp2Result = tmp2(obj);
                                }
                                tmp5 = closure_1;
                                tmp6 = closure_2;
                                obj2 = closure_1(closure_2[15]);
                                hideActionSheetResult = obj2.hideActionSheet();
                              }
                              return;
                            }
                          }
                          const obj4 = { option: null, onDismiss: null, children: null };
                          class V {
                            constructor() {
                              obj = { command: activeCommand, optionValues, context: null };
                              obj1 = { channel, guild: closure_7.getGuild(channel.guild_id), autocomplete: null };
                              obj4 = { name: option.name, query: closure_5 };
                              obj1.autocomplete = obj4;
                              obj.context = obj1;
                              tmp = closure_11(obj);
                              current = closure_6.current;
                              if (current != null) {
                                scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                              }
                              return;
                            }
                          }
                          obj4.onDismiss = onDismissAutocompleteSheet;
                          const items1 = [tmp27, tmp30, tmp32, tmp36];
                          obj4.children = items1;
                          const tmp40 = closure_10(tmp(channel[18]).AppLauncherCommandOptionActionSheet, obj4);
                          cResult[40] = onDismissAutocompleteSheet;
                          cResult[41] = option;
                          cResult[42] = tmp30;
                          cResult[43] = tmp32;
                          cResult[44] = tmp36;
                          cResult[45] = tmp27;
                          cResult[46] = tmp40;
                        }
                        const obj5 = { ref, keyExtractor: Y, data: arr3, renderItem: tmp22, scrollEnabled: true };
                        const tmp34 = closure_9(tmp(channel[17]).AppLauncherList, obj5);
                        cResult[35] = arr3;
                        cResult[36] = tmp22;
                        cResult[37] = tmp34;
                      }
                      class W {
                        constructor() {
                          tmp = closure_5;
                          if ("" !== closure_5) {
                            tmp3 = null;
                            if (onChoiceSelect != null) {
                              obj = { name: null, value: null, displayName: null };
                              obj.name = tmp;
                              obj.value = tmp;
                              obj.displayName = tmp;
                              tmp2Result = tmp2(obj);
                            }
                            tmp5 = closure_1;
                            tmp6 = closure_2;
                            obj2 = closure_1(closure_2[15]);
                            hideActionSheetResult = obj2.hideActionSheet();
                          }
                          return;
                        }
                      }
                      cResult[26] = onChoiceSelect;
                      class V {
                        constructor() {
                          obj = { command: activeCommand, optionValues, context: null };
                          obj1 = { channel, guild: closure_7.getGuild(channel.guild_id), autocomplete: null };
                          obj4 = { name: option.name, query: closure_5 };
                          obj1.autocomplete = obj4;
                          obj.context = obj1;
                          tmp = closure_11(obj);
                          current = closure_6.current;
                          if (current != null) {
                            scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                          }
                          return;
                        }
                      }
                      cResult[27] = query;
                      cResult[28] = W;
                      tmp23 = W;
                    }
                    const fn2 = function $(item) {
                      return options(closure_13, { item: item.item, index: item.index, onChoiceSelect, choices: arr3 });
                    };
                    class V {
                      constructor() {
                        obj = { command: activeCommand, optionValues, context: null };
                        obj1 = { channel, guild: closure_7.getGuild(channel.guild_id), autocomplete: null };
                        obj4 = { name: option.name, query: closure_5 };
                        obj1.autocomplete = obj4;
                        obj.context = obj1;
                        tmp = closure_11(obj);
                        current = closure_6.current;
                        if (current != null) {
                          scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                        }
                        return;
                      }
                    }
                    cResult[24] = onChoiceSelect;
                    cResult[25] = fn2;
                    tmp22 = fn2;
                  }
                }
              }
            }
            class V {
              constructor() {
                obj = { command: activeCommand, optionValues, context: null };
                obj1 = { channel, guild: closure_7.getGuild(channel.guild_id), autocomplete: null };
                obj4 = { name: option.name, query: closure_5 };
                obj1.autocomplete = obj4;
                obj.context = obj1;
                tmp = closure_11(obj);
                current = closure_6.current;
                if (current != null) {
                  scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                }
                return;
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
            tmp20 = items2;
            tmp19 = V;
          }
        }
      }
      const items3 = [];
      if ("" === query) {
        class Y {
          constructor(arg0, arg1) {
            str = "placeholder";
            if (option.type === closure_1_8.CHOICE) {
              str = option.choice.name;
            }
            return "" + str + "_" + arg1;
          }
        }
        if (null != autocompleteResults) {
          class Y {
            constructor(arg0, arg1) {
              str = "placeholder";
              if (option.type === closure_1_8.CHOICE) {
                str = option.choice.name;
              }
              return "" + str + "_" + arg1;
            }
          }
          const _Symbol = Symbol;
          class W {
            constructor() {
              tmp = closure_5;
              if ("" !== closure_5) {
                tmp3 = null;
                if (onChoiceSelect != null) {
                  obj = { name: null, value: null, displayName: null };
                  obj.name = tmp;
                  obj.value = tmp;
                  obj.displayName = tmp;
                  tmp2Result = tmp2(obj);
                }
                tmp5 = closure_1;
                tmp6 = closure_2;
                obj2 = closure_1(closure_2[15]);
                hideActionSheetResult = obj2.hideActionSheet();
              }
              return;
            }
          }
          if (tmp14 === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor(arg0, arg1) {
                str = "placeholder";
                if (option.type === closure_1_8.CHOICE) {
                  str = option.choice.name;
                }
                return "" + str + "_" + arg1;
              }
            }
            class W {
              constructor() {
                tmp = closure_5;
                if ("" !== closure_5) {
                  tmp3 = null;
                  if (onChoiceSelect != null) {
                    obj = { name: null, value: null, displayName: null };
                    obj.name = tmp;
                    obj.value = tmp;
                    obj.displayName = tmp;
                    tmp2Result = tmp2(obj);
                  }
                  tmp5 = closure_1;
                  tmp6 = closure_2;
                  obj2 = closure_1(closure_2[15]);
                  hideActionSheetResult = obj2.hideActionSheet();
                }
                return;
              }
            }
          } else {
            class Y {
              constructor(arg0, arg1) {
                str = "placeholder";
                if (option.type === closure_1_8.CHOICE) {
                  str = option.choice.name;
                }
                return "" + str + "_" + arg1;
              }
            }
          }
          const mapped = autocompleteResults.map(F);
          class V {
            constructor() {
              obj = { command: activeCommand, optionValues, context: null };
              obj1 = { channel, guild: closure_7.getGuild(channel.guild_id), autocomplete: null };
              obj4 = { name: option.name, query: closure_5 };
              obj1.autocomplete = obj4;
              obj.context = obj1;
              tmp = closure_11(obj);
              current = closure_6.current;
              if (current != null) {
                scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
              }
              return;
            }
          }
          cResult[13] = autocompleteResults;
          cResult[14] = mapped;
        }
      } else {
        class Y {
          constructor(arg0, arg1) {
            str = "placeholder";
            if (option.type === closure_1_8.CHOICE) {
              str = option.choice.name;
            }
            return "" + str + "_" + arg1;
          }
        }
        items3.push(tmp12);
      }
      const tmpResult = tmp(channel[14]);
    }
  }
  const fn = function h() {
    return { autocompleteResults: ApplicationCommandAutocompleteStore.getAutocompleteChoices(channel.id, option.name, first), lastErrored: ApplicationCommandAutocompleteStore.getLastErrored(channel.id) };
  };
  const items4 = [channel.id, option.name, query];
  cResult[1] = channel.id;
  cResult[2] = option.name;
  cResult[3] = query;
  cResult[4] = fn;
  cResult[5] = items4;
  tmp10 = items4;
  tmp9 = fn;
  let obj = option(channel[13]);
}) : ((onDismiss) => {
  const option = onDismiss.option;
  ({ initChoice, onChoiceSelect } = onDismiss);
  const channel = onDismiss.channel;
  const activeCommand = onDismiss.activeCommand;
  const optionValues = onDismiss.optionValues;
  query = undefined;
  let ref;
  let autocompleteResults;
  let lastErrored;
  let memo;
  let str;
  if (initChoice != null) {
    str = initChoice.name;
  }
  if (str == null) {
    str = "";
  }
  const tmp = activeCommand(optionValues.useState(str), 2);
  query = tmp[0];
  ref = obj.useRef(null);
  let items = [ref];
  let items1 = [channel.id, option.name, query];
  const stateFromStoresObject = option(channel[14]).useStateFromStoresObject(items, () => ({ autocompleteResults: ApplicationCommandAutocompleteStore.getAutocompleteChoices(channel.id, option.name, first), lastErrored: ApplicationCommandAutocompleteStore.getLastErrored(channel.id) }), items1);
  autocompleteResults = stateFromStoresObject.autocompleteResults;
  lastErrored = stateFromStoresObject.lastErrored;
  let items2 = [query, autocompleteResults, lastErrored];
  memo = obj.useMemo(() => {
    const items = [];
    if ("" !== first) {
      const obj = { type: AutoCompleteResultTypes.LABEL, label: tmp };
      items.push(obj);
    }
    if (null == autocompleteResults) {
      if (!lastErrored) {
        const push = items.push;
        const _Array = Array;
        const array = new Array(4);
        const obj2 = { type: AutoCompleteResultTypes.CHOICE_LOADING };
        const items1 = [];
        HermesBuiltin.arraySpread(array.fill(obj2), 0);
        HermesBuiltin.apply(items1, items);
      }
      return items;
    }
    if (null != autocompleteResults) {
      const push2 = items.push;
      const items2 = [];
      HermesBuiltin.arraySpread(autocompleteResults.map((choice) => ({ type: constants.CHOICE, choice })), 0);
      HermesBuiltin.apply(items2, items);
    }
  }, items2);
  let tmp12Result = 0 === memo.length && !lastErrored;
  const items3 = [channel, option.name, activeCommand, optionValues, query];
  const effect = obj.useEffect(() => {
    const obj = { command: activeCommand, optionValues, context: null };
    const obj2 = { channel, guild: GuildStore.getGuild(channel.guild_id), autocomplete: { name: option.name, query } };
    obj.context = obj2;
    executeCommand(obj);
    const current = ref.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  }, items3);
  const items4 = [onChoiceSelect, memo];
  const items5 = [onChoiceSelect, query];
  const callback = obj.useCallback((item) => options(closure_13, { item: item.item, index: item.index, onChoiceSelect, choices: memo }), items4);
  const callback1 = obj.useCallback(() => {
    if ("" !== first) {
      if (onChoiceSelect != null) {
        const obj = { name: first, value: first, displayName: first };
        tmp2(obj);
      }
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
  }, items5);
  const obj3 = { option, onDismiss: onDismiss.onDismissAutocompleteSheet, children: null };
  const obj4 = { placeholder: null, onChange: null, autoFocus: true, returnKeyType: "done", onSubmitEditing: null };
  const intl = tmp4(tmp5[16]).intl;
  obj4.placeholder = intl.string(option(channel[16]).t.Wuie9L);
  obj4.onChange = tmp[1];
  obj4.onSubmitEditing = callback1;
  const items6 = [memo(option(channel[17]).AppLauncherListSearchBar, obj4), , , ];
  if (tmp12Result) {
    tmp12Result = tmp12(tmp4(tmp5[17]).AppLauncherListEmptyState, {});
  }
  items6[1] = tmp12Result;
  items6[2] = memo(option(channel[17]).AppLauncherList, {
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
  });
  if (lastErrored) {
    lastErrored = tmp12(closure_14, {});
  }
  items6[3] = lastErrored;
  obj3.children = items6;
  return closure_10(option(channel[18]).AppLauncherCommandOptionActionSheet, obj3);
});