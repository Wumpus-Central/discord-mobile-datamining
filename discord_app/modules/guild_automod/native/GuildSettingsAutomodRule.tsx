// === Module 17739: GuildSettingsAutomodRule ===

// Module 17739 (GuildSettingsAutomodRule)
import nativeDefault from "native" /* 587 */;
import ToastUtils from "ToastUtils" /* 4573 */;
import NavigatorHeader2 from "NavigatorHeader" /* 6017 */;
import ClipboardUtils from "ClipboardUtils" /* 6695 */;
import Constants from "Constants" /* 11487 */;
import AutomodStore from "AutomodStore" /* 17721 */;
import AutomodRuleUtils from "AutomodRuleUtils" /* 17724 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildSettingsAutomodRuleStore from "GuildSettingsAutomodRuleStore" /* 17723 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2, c3, c5, c6, closure_3, navigation, ref;

let c10;
let closure_12;
let metroImportAll;
let metroImportDefault;
let obj2;
let unpackModuleId;
const useAutomodRulesList = AutomodStore.useAutomodRulesList;
({ useAutomodEditingRuleActions: metroImportDefault, useAutomodEditingRuleState: metroImportAll } = GuildSettingsAutomodRuleStore);
const MAX_RULE_NAME_LENGTH = Constants.MAX_RULE_NAME_LENGTH;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let c13 = "automod-delete-rule";
let c14 = "automod-unsaved-changes";
let obj = { stack: obj2 };
obj2 = { marginTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_15 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let contentContainerStyle;
  let errorMessage;
  let isLoading;
  let key;
  let rulesByTriggerType;
  let setEditingRule;
  let tmp11;
  let tmp15;
  let tmp18;
  let tmp21;
  let tmp22;
  let tmp23;
  let triggerType;
  let updateRule;
  const tmp = guildId;
  let obj = guildId(updateRule[10]);
  const cResult = obj.c(76);
  guildId = guildId.guildId;
  ({ triggerType, contentContainerStyle } = guildId);
  const tmp4 = closure_15();
  let obj2 = guildId(updateRule[11]);
  navigation = obj2.useNavigation();
  const tmp6 = setEditingRule(guildId);
  ({ rulesByTriggerType, updateRule } = tmp6);
  const removeRule = tmp6.removeRule;
  const tmp7 = errorMessage();
  const editingRule = tmp7.editingRule;
  const hasChanges = tmp7.hasChanges;
  setEditingRule = tmp7.setEditingRule;
  const tmp8 = isLoading();
  isLoading = tmp8.isLoading;
  errorMessage = tmp8.errorMessage;
  const saveEditingRule = tmp8.saveEditingRule;
  const cancelEditingRule = tmp8.cancelEditingRule;
  let obj3 = guildId(updateRule[12]);
  const isUndeletableMentionSpamRule = obj3.useIsUndeletableMentionSpamRule(guildId, triggerType);
  const DeveloperMode = guildId(updateRule[13]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  if (cResult[0] !== rulesByTriggerType) {
    const tmpResult = tmp(updateRule[14]);
    const rulesFromTriggerTypeMap = tmpResult.getRulesFromTriggerTypeMap(rulesByTriggerType);
    cResult[0] = rulesByTriggerType;
    cResult[1] = rulesFromTriggerTypeMap;
    tmp11 = rulesFromTriggerTypeMap;
  } else {
    tmp11 = cResult[1];
  }
  closure_12 = tmp11;
  let obj5 = hasChanges;
  ref = hasChanges.useRef(null);
  if (cResult[2] !== errorMessage) {
    class Y {
      constructor() {
        if (null != errorMessage) {
          const current = ref.current;
          if (current != null) {
            current.scrollTo({ y: 0, animated: true });
          }
        }
      }
    }
    const items = [errorMessage];
    cResult[2] = errorMessage;
    cResult[3] = Y;
    cResult[4] = items;
    tmp15 = items;
  } else {
    class Y {
      constructor() {
        if (null != errorMessage) {
          const current = ref.current;
          if (current != null) {
            current.scrollTo({ y: 0, animated: true });
          }
        }
      }
    }
    tmp15 = cResult[4];
  }
  const effect = obj5.useEffect(Y, tmp15);
  if (cResult[5] !== cancelEditingRule) {
    class G {
      constructor() {
        return cancelEditingRule;
      }
    }
    const items1 = [cancelEditingRule];
    cResult[5] = cancelEditingRule;
    cResult[6] = G;
    cResult[7] = items1;
    tmp18 = items1;
  } else {
    class G {
      constructor() {
        return cancelEditingRule;
      }
    }
    tmp18 = cResult[7];
  }
  const effect1 = obj5.useEffect(G, tmp18);
  [tmp21, c14] = editingRule(obj5.useState(false), 2);
  const tmp20 = editingRule(obj5.useState(false), 2);
  if (cResult[8] !== editingRule) {
    class G {
      constructor() {
        return cancelEditingRule;
      }
    }
    if (tmp23) {
      class G {
        constructor() {
          return cancelEditingRule;
        }
      }
      tmp23 = !obj6.isBackendPersistedRule(editingRule);
    }
    cResult[8] = editingRule;
    cResult[9] = tmp23;
    tmp22 = tmp23;
  } else {
    class G {
      constructor() {
        return cancelEditingRule;
      }
    }
  }
  closure_15 = (hasChanges || tmp22) && !tmp21;
  if (cResult[10] === tmp11) {
    class G {
      constructor() {
        return cancelEditingRule;
      }
    }
  }
  let closure_0 = removeRule(function*() {
    let v1;
    if (c3 === 2) {
      c3 = 3;
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
        let closure_1;
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
            closure_1 = tmp4;
            closure_0 = undefined;
            v1 = 1;
            c3 = 1;
            const obj4 = { value: saveEditingRule(closure_1_12), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_0 = value;
          if (null != closure_0) {
            v1(closure_0);
            if (closure_1.isFocused()) {
              closure_1.pop();
            }
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp19) {
        c3 = 3;
        throw tmp19;
      }
    }
  });
  let fn = function() {
    return closure_0(...arguments);
  };
  cResult[10] = tmp11;
  cResult[11] = navigation;
  cResult[12] = saveEditingRule;
  cResult[13] = updateRule;
  cResult[14] = fn;
}) : ((guildId) => {
  let Stack;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items6;
  let items8;
  let obj5;
  guildId = guildId.guildId;
  const triggerType = guildId.triggerType;
  let rulesByTriggerType;
  let hasChanges;
  let isLoading;
  closure_15 = undefined;
  let closure_16;
  let callback;
  let name;
  let callback1;
  const contentContainerStyle = guildId.contentContainerStyle;
  const tmp3 = rulesByTriggerType;
  const tmp = closure_15();
  let obj = guildId(rulesByTriggerType[11]);
  navigation = obj.useNavigation();
  const tmp5 = hasChanges(guildId);
  rulesByTriggerType = tmp5.rulesByTriggerType;
  const updateRule = tmp5.updateRule;
  const removeRule = tmp5.removeRule;
  const tmp6 = isLoading();
  const editingRule = tmp6.editingRule;
  hasChanges = tmp6.hasChanges;
  const setEditingRule = tmp6.setEditingRule;
  const tmp7 = setEditingRule();
  isLoading = tmp7.isLoading;
  const errorMessage = tmp7.errorMessage;
  const saveEditingRule = tmp7.saveEditingRule;
  const cancelEditingRule = tmp7.cancelEditingRule;
  let obj2 = guildId(rulesByTriggerType[12]);
  closure_12 = obj2.useIsUndeletableMentionSpamRule(guildId, triggerType);
  const DeveloperMode = guildId(rulesByTriggerType[13]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj3 = editingRule;
  const items = [rulesByTriggerType];
  const memo = editingRule.useMemo(() => {
    const obj = AutomodRuleUtils;
    return obj.getRulesFromTriggerTypeMap(rulesByTriggerType);
  }, items);
  ref = editingRule.useRef(null);
  const items1 = [errorMessage];
  const effect = editingRule.useEffect(() => {
    if (null != errorMessage) {
      const current = ref.current;
      if (current != null) {
        current.scrollTo({ y: 0, animated: true });
      }
    }
  }, items1);
  const items2 = [cancelEditingRule];
  const effect1 = editingRule.useEffect(() => cancelEditingRule, items2);
  const tmp13 = removeRule(editingRule.useState(false), 2);
  closure_15 = tmp13[1];
  let tmp15 = null != editingRule;
  const first = tmp13[0];
  if (tmp15) {
    const tmp2Result = guildId(tmp3[14]);
    tmp15 = !tmp2Result.isBackendPersistedRule(editingRule);
  }
  closure_16 = tmp16;
  const items3 = [saveEditingRule, memo, updateRule, navigation];
  callback = obj3.useCallback(updateRule(function*() {
    if (c3 === 2) {
      c3 = 3;
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
        let closure_0;
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
            let closure_1 = tmp4;
            closure_0 = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: saveEditingRule(memo), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_0 = value;
          if (null != closure_0) {
            closure_129_3(closure_0);
            if (closure_129_1.isFocused()) {
              closure_129_1.pop();
            }
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp19) {
        c3 = 3;
        throw tmp19;
      }
    }
  }), items3);
  name = undefined;
  if (editingRule != null) {
    name = editingRule.name;
  }
  const items4 = [hasChanges, name];
  callback1 = obj3.useCallback(function() {
    let _Promise1;
    let ruleName;
    if (hasChanges) {
      const self = this;
      const self2 = this;
      _Promise1 = new _Promise((arg0) => {
        let intl;
        let intl2;
        let intl3;
        let obj2;
        let closure_0 = arg0;
        const obj = {
          key: ref,
          title: intl.string(guildId(rulesByTriggerType[16]).t.kknTmH),
          content: intl2.format(guildId(rulesByTriggerType[16]).t["ff/gx7"], obj2),
          confirmText: intl3.string(guildId(rulesByTriggerType[16]).t["cY+Oob"]),
          onConfirm() {
            return closure_0(true);
          },
          onCloseCallback() {
            return closure_0(false);
          }
        };
        const showConfirmModal = guildId(rulesByTriggerType[15]).showConfirmModal;
        guildId(rulesByTriggerType[15]);
        intl = guildId(rulesByTriggerType[16]).intl;
        intl2 = guildId(rulesByTriggerType[16]).intl;
        obj2 = { ruleName };
        intl3 = guildId(rulesByTriggerType[16]).intl;
        showConfirmModal(obj);
      });
    } else {
      _Promise1 = _Promise.resolve(true);
    }
    return _Promise1;
  }, items4);
  const items5 = [navigation, isLoading, tmp16, callback, callback1, name];
  const effect2 = obj3.useEffect(() => {
    let fn;
    let fn2;
    let onPress;
    const setOptions = navigation.setOptions;
    if (isLoading) {
      fn = () => null;
    } else {
      let obj = NavigatorHeader2;
      fn = obj.getHeaderConditionalBackButton(callback1);
    }
    const obj2 = {
      headerLeft: fn,
      headerRight: fn2,
      headerTitle() {
        let intl;
        let str = name;
        const NavigatorHeader = guildId(rulesByTriggerType[17]).NavigatorHeader;
        if (name == null) {
          str = "";
        }
        const obj = { title: str, subtitle: intl.string(guildId(rulesByTriggerType[16]).t.uRelgx) };
        intl = guildId(rulesByTriggerType[16]).intl;
        return saveEditingRule(NavigatorHeader, obj);
      }
    };
    if (isLoading) {
      fn2 = () => saveEditingRule(guildId(rulesByTriggerType[17]).HeaderSubmittingIndicator, {});
    } else if (closure_16) {
      fn2 = () => {
        let intl;
        const obj = { onPress, text: intl.string(guildId(rulesByTriggerType[16]).t["R3BPH+"]) };
        const HeaderActionButton = guildId(rulesByTriggerType[18]).HeaderActionButton;
        intl = guildId(rulesByTriggerType[16]).intl;
        return saveEditingRule(HeaderActionButton, obj);
      };
    }
    setOptions(obj2);
  }, items5);
  let tmp28Result2 = null;
  if (null != editingRule) {
    tmp28Result2 = null;
    if (editingRule.triggerType === triggerType) {
      let obj4 = { ref, contentContainerStyle, children: cancelEditingRule(Stack, obj5) };
      const Form = tmp2(tmp3[32]).Form;
      obj5 = { style: tmp.stack, spacing: navigation(tmp3[8]).space.PX_24, children: items6 };
      Stack = tmp2(tmp3[31]).Stack;
      let tmp30Result = null != errorMessage;
      const tmp29 = closure_12;
      if (tmp30Result) {
        const obj6 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityLiveRegion: "polite", children: errorMessage };
        tmp30Result = tmp30(tmp2(tmp3[23]).Text, obj6);
      }
      items6 = [tmp30Result, , , , , , ];
      const tmp2Result2 = guildId(tmp3[14]);
      const result = tmp2Result2.isRuleApplicationFilter(editingRule);
      let tmp30Result3 = !result;
      if (tmp30Result3) {
        const obj7 = {
          label: intl.string(guildId(tmp3[16]).t.WVAHxF),
          placeholder: intl2.string(guildId(tmp3[16]).t["5AO43K"]),
          maxLength: errorMessage,
          value: editingRule.name,
          onChange(name) {
                  const obj = { name };
                  const merged = Object.assign(editingRule);
                  if (!isLoading) {
                    setEditingRule(obj, true);
                  }
                }
        };
        const TextInput = tmp2(tmp3[24]).TextInput;
        intl = tmp2(tmp3[16]).intl;
        intl2 = tmp2(tmp3[16]).intl;
        tmp30Result3 = tmp30(TextInput, obj7);
      }
      function handleChangeRule(guildId) {
        if (!isLoading) {
          setEditingRule(guildId, true);
        }
      }
      items6[1] = tmp30Result3;
      const obj8 = {
        label: intl3.string(guildId(tmp3[16]).t.WrleYK),
        value: editingRule.enabled,
        onValueChange(enabled) {
              const obj = { enabled };
              const merged = Object.assign(editingRule);
              if (!isLoading) {
                setEditingRule(obj, true);
              }
            },
        start: true,
        end: true
      };
      const TableSwitchRow = tmp2(tmp3[25]).TableSwitchRow;
      intl3 = tmp2(tmp3[16]).intl;
      items6[2] = saveEditingRule(TableSwitchRow, obj8);
      const obj9 = {
        rule: editingRule,
        onChangeRule: handleChangeRule,
        onValidityChange(react) {
              return closure_15(!react);
            }
      };
      items6[3] = saveEditingRule(navigation(tmp3[26]), obj9);
      const obj10 = { rule: editingRule, onChangeRule: handleChangeRule };
      items6[4] = saveEditingRule(navigation(tmp3[27]), obj10);
      const obj11 = { rule: editingRule, onChangeRule: handleChangeRule };
      items6[5] = saveEditingRule(navigation(tmp3[28]), obj11);
      let tmp28Result = !tmp15;
      if (tmp28Result) {
        const TableRowGroup = tmp2(tmp3[29]).TableRowGroup;
        const obj12 = {
          variant: "danger",
          label: intl4.string(guildId(tmp3[16]).t["92m/01"]),
          onPress() {
                  if (null != editingRule) {
                    const id = editingRule.id;
                    name = editingRule.name;
                    const showConfirmModal = guildId(rulesByTriggerType[15]).showConfirmModal;
                    let obj2 = { key: memo, title: null, content: null, confirmText: null, onConfirm: null };
                    const tmp24 = guildId(rulesByTriggerType[15]);
                    const intl5 = guildId(rulesByTriggerType[16]).intl;
                    const string = intl5.string;
                    const t = guildId(rulesByTriggerType[16]).t;
                    if (closure_12) {
                      obj2.title = string(t.MmpqMC);
                      const intl3 = guildId(rulesByTriggerType[16]).intl;
                      obj2.content = intl3.string(guildId(rulesByTriggerType[16]).t.XMdBLw);
                      const intl4 = guildId(rulesByTriggerType[16]).intl;
                      obj2.confirmText = intl4.string(guildId(rulesByTriggerType[16]).t.BddRzS);
                      obj2.onConfirm = function onConfirm() {

                      };
                      showConfirmModal(obj2);
                    } else {
                      obj2.title = string(t.Hy8XgL);
                      let intl = guildId(rulesByTriggerType[16]).intl;
                      let obj = { ruleName: name };
                      obj2.content = intl.format(guildId(rulesByTriggerType[16]).t.hO7PgW, obj);
                      const intl2 = guildId(rulesByTriggerType[16]).intl;
                      obj2.confirmText = intl2.string(guildId(rulesByTriggerType[16]).t["cY+Oob"]);
                      let closure_0 = updateRule(function*() {
                        let obj3;
                        if (c6 === 2) {
                          c6 = 3;
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
                          let v0;
                          try {
                            let closure_1;
                            c6 = 2;
                            if (0 === c5) {
                              if (arg0 === 1) {
                                c6 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c6 = 3;
                                const obj4 = { value, done: true };
                                return obj4;
                              } else {
                                let closure_2 = tmp;
                                closure_1 = tmp4;
                                v0 = 1;
                                c5 = 2;
                                c6 = 1;
                                const obj5 = { value: obj3.deleteAutomodRule(id, closure_0), done: false };
                                obj3 = closure_0(rulesByTriggerType[19]);
                                return obj5;
                              }
                            } else if (1 === c5) {
                              v0 = 0;
                              closure_0 = closure_3;
                              const presentError = closure_0(rulesByTriggerType[20]).presentError;
                              const self = this;
                              const self2 = this;
                              const tmp18 = closure_0(rulesByTriggerType[20]);
                              const aPIError = new closure_0(rulesByTriggerType[21]).APIError(closure_0);
                              const anyErrorMessage = aPIError.getAnyErrorMessage();
                              closure_0 = anyErrorMessage;
                              if (anyErrorMessage == null) {
                                const intl = closure_0(rulesByTriggerType[16]).intl;
                                closure_0 = intl.string(closure_0(rulesByTriggerType[16]).t.fEptJP);
                              }
                              presentError(closure_0);
                              throw closure_0;
                            } else if (arg0 === 1) {
                              c6 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              v0 = 0;
                              c6 = 3;
                              const obj = { value, done: true };
                              return obj;
                            } else {
                              v0 = 0;
                              v0(closure_130_1, closure_0);
                              closure_1.pop();
                              c6 = 3;
                              return { value: "IconComponent", done: null };
                            }
                          } catch (tmp37) {
                            closure_3 = tmp37;
                            if (0 === v0) {
                              c6 = 3;
                              throw tmp37;
                            } else {
                              c5 = 1;
                            }
                          }
                        }
                      });
                      obj2.onConfirm = function() {
                        return closure_0(...arguments);
                      };
                      showConfirmModal(obj2);
                    }
                  }
                },
          disabled: isLoading
        };
        const TableRow = tmp2(tmp3[30]).TableRow;
        intl4 = tmp2(tmp3[16]).intl;
        const items7 = [tmp30(TableRow, obj12), ];
        let tmp30Result4 = setting;
        if (tmp30Result4) {
          const obj13 = {
            label: intl5.string(guildId(tmp3[16]).t.F64hjn),
            onPress() {
                      if (null != editingRule) {
                        const obj = ClipboardUtils;
                        obj.copy(tmp.id);
                        const obj2 = ToastUtils;
                        obj2.presentIdCopied();
                      }
                    }
          };
          const TableRow2 = tmp2(tmp3[30]).TableRow;
          intl5 = tmp2(tmp3[16]).intl;
          tmp30Result4 = tmp30(TableRow2, obj13);
        }
        const obj14 = { hasIcons: false, children: items7 };
        items7[1] = tmp30Result4;
        tmp28Result = tmp28(TableRowGroup, obj14);
      }
      const obj15 = { children: items8 };
      items6[6] = tmp28Result;
      items8 = [tmp30(Form, obj4), tmp30(tmp2(tmp3[33]).NavScrim, {})];
      tmp28Result2 = tmp28(tmp29, obj15);
    }
  }
  return tmp28Result2;
});
let result = size.fileFinishedImporting("modules/guild_automod/native/GuildSettingsAutomodRule.tsx");

export default tmp4;