// === Module 17739: GuildSettingsAutomodRule ===

// Module 17739 (GuildSettingsAutomodRule)
import nativeDefault from "native" /* 587 */;
import ToastUtils from "ToastUtils" /* 4573 */;
import NavigatorHeader from "NavigatorHeader" /* 6017 */;
import ClipboardUtils from "ClipboardUtils" /* 6695 */;
import AutomodRuleUtils from "AutomodRuleUtils" /* 17724 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const useAutomodRulesList = fn(17721).useAutomodRulesList;
const GuildSettingsAutomodRuleStore = fn(17723);
({ useAutomodEditingRuleActions: closure_7, useAutomodEditingRuleState: closure_8 } = GuildSettingsAutomodRuleStore);
const MAX_RULE_NAME_LENGTH = fn(11487).MAX_RULE_NAME_LENGTH;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let c13 = "automod-delete-rule";
let c14 = "automod-unsaved-changes";
const createStyles = fn(4896);
let obj2 = { stack: { marginTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING } };
let closure_15 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_automod/native/GuildSettingsAutomodRule.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = require("c").c(76);
  guildId = guildId.guildId;
  _require = guildId;
  ({ triggerType, contentContainerStyle } = guildId);
  hasChanges();
  let obj = require("c");
  const tmp = _require;
  const navigation = require("useNavigation").useNavigation();
  const tmp6 = setEditingRule(guildId);
  ({ rulesByTriggerType, updateRule } = tmp6);
  const removeRule = tmp6.removeRule;
  const tmp7 = errorMessage();
  const editingRule = tmp7.editingRule;
  hasChanges = tmp7.hasChanges;
  setEditingRule = tmp7.setEditingRule;
  const tmp8 = isLoading();
  isLoading = tmp8.isLoading;
  errorMessage = tmp8.errorMessage;
  const saveEditingRule = tmp8.saveEditingRule;
  const cancelEditingRule = tmp8.cancelEditingRule;
  let obj2 = require("useNavigation");
  const isUndeletableMentionSpamRule = require("guild_automod/PermissionUtils").useIsUndeletableMentionSpamRule(guildId, triggerType);
  const DeveloperMode = require("UserSettings").DeveloperMode;
  const setting = DeveloperMode.useSetting();
  if (cResult[0] !== rulesByTriggerType) {
    const rulesFromTriggerTypeMap = tmp(updateRule[14]).getRulesFromTriggerTypeMap(rulesByTriggerType);
    cResult[0] = rulesByTriggerType;
    cResult[1] = rulesFromTriggerTypeMap;
    let tmp11 = rulesFromTriggerTypeMap;
    const tmpResult = tmp(updateRule[14]);
  } else {
    tmp11 = cResult[1];
  }
  closure_12 = tmp11;
  hasChanges.useRef(null);
  if (cResult[2] !== errorMessage) {
    class Y {
      constructor() {
        if (null != errorMessage) {
          tmp = closure_13;
          current = closure_13.current;
          if (current != null) {
            scrollToResult = current.scrollTo({ y: 0, animated: true });
          }
        }
        return;
      }
    }
    const items = [errorMessage];
    cResult[2] = errorMessage;
    cResult[3] = Y;
    cResult[4] = items;
    let tmp15 = items;
  } else {
    class Y {
      constructor() {
        if (null != errorMessage) {
          tmp = closure_13;
          current = closure_13.current;
          if (current != null) {
            scrollToResult = current.scrollTo({ y: 0, animated: true });
          }
        }
        return;
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
    let tmp18 = items1;
  } else {
    class G {
      constructor() {
        return cancelEditingRule;
      }
    }
    tmp18 = cResult[7];
  }
  const effect1 = obj5.useEffect(G, tmp18);
  let obj3 = require("guild_automod/PermissionUtils");
  [r10081, c14] = editingRule(hasChanges.useState(false), 2);
  if (cResult[8] !== editingRule) {
    class G {
      constructor() {
        return cancelEditingRule;
      }
    }
    if (tmp22) {
      class G {
        constructor() {
          return cancelEditingRule;
        }
      }
      tmp22 = !obj6.isBackendPersistedRule(editingRule);
    }
    cResult[8] = editingRule;
    cResult[9] = tmp22;
  } else {
    class G {
      constructor() {
        return cancelEditingRule;
      }
    }
  }
  if (!hasChanges) {
    class G {
      constructor() {
        return cancelEditingRule;
      }
    }
  }
  if (hasChanges) {
    class G {
      constructor() {
        return cancelEditingRule;
      }
    }
  }
  hasChanges = tmp23;
  if (cResult[10] === tmp11) {
    class G {
      constructor() {
        return cancelEditingRule;
      }
    }
  }
  _require = removeRule(function*() {
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
            closure_0 = tmp2;
            closure_128_0 = undefined;
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
          closure_128_0 = value;
          if (null != closure_128_0) {
            v1(closure_128_0);
            if (tmp5.isFocused()) {
              tmp5.pop();
            }
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp20) {
        c3 = tmp;
        throw tmp20;
      }
    }
  });
  let fn = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  cResult[10] = tmp11;
  cResult[11] = navigation;
  cResult[12] = saveEditingRule;
  cResult[13] = updateRule;
  cResult[14] = fn;
  const tmp20 = editingRule(hasChanges.useState(false), 2);
}) : ((guildId) => {
  guildId = guildId.guildId;
  const triggerType = guildId.triggerType;
  let rulesByTriggerType;
  let hasChanges;
  let isLoading;
  closure_15 = undefined;
  closure_16 = undefined;
  let callback;
  let name;
  let callback1;
  const tmp = closure_15();
  const navigation = guildId(rulesByTriggerType[11]).useNavigation();
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
  let obj = guildId(rulesByTriggerType[11]);
  closure_12 = guildId(rulesByTriggerType[12]).useIsUndeletableMentionSpamRule(guildId, triggerType);
  const DeveloperMode = guildId(rulesByTriggerType[13]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  const items = [rulesByTriggerType];
  const memo = editingRule.useMemo(() => AutomodRuleUtils.getRulesFromTriggerTypeMap(rulesByTriggerType), items);
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
  let tmp14 = null != editingRule;
  if (tmp14) {
    tmp14 = !tmp2(tmp3[14]).isBackendPersistedRule(editingRule);
    const tmp2Result = tmp2(tmp3[14]);
  }
  let tmp15 = hasChanges;
  if (!hasChanges) {
    tmp15 = tmp14;
  }
  if (tmp15) {
    tmp15 = !tmp13[0];
  }
  closure_16 = tmp15;
  const items3 = [saveEditingRule, memo, updateRule, navigation];
  callback = obj3.useCallback(updateRule(function*() {
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
            closure_1 = tmp5;
            closure_0 = tmp2;
            closure_128_0 = undefined;
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
          closure_128_0 = value;
          if (null != closure_128_0) {
            closure_129_3(closure_128_0);
            if (closure_129_1.isFocused()) {
              closure_129_1.pop();
            }
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp20) {
        c3 = tmp;
        throw tmp20;
      }
    }
  }), items3);
  name = undefined;
  if (editingRule != null) {
    name = editingRule.name;
  }
  const items4 = [hasChanges, name];
  callback1 = obj3.useCallback(() => {
    if (hasChanges) {
      let _Promise1 = new _Promise((arg0) => {
        closure_0 = arg0;
        const obj2 = { key: ref, title: null, content: null, confirmText: null, onConfirm: null, onCloseCallback: null };
        const intl = guildId(rulesByTriggerType[16]).intl;
        obj2.title = intl.string(guildId(rulesByTriggerType[16]).t.kknTmH);
        const intl2 = guildId(rulesByTriggerType[16]).intl;
        obj2.content = intl2.format(guildId(rulesByTriggerType[16]).t["ff/gx7"], { ruleName });
        const intl3 = guildId(rulesByTriggerType[16]).intl;
        obj2.confirmText = intl3.string(guildId(rulesByTriggerType[16]).t["cY+Oob"]);
        obj2.onConfirm = function onConfirm() {
          return closure_0(true);
        };
        obj2.onCloseCallback = function onCloseCallback() {
          return closure_0(false);
        };
        guildId(rulesByTriggerType[15]).showConfirmModal(obj2);
      });
    } else {
      _Promise1 = _Promise.resolve(true);
    }
    return _Promise1;
  }, items4);
  const items5 = [navigation, isLoading, tmp15, callback, callback1, name];
  const effect2 = obj3.useEffect(() => {
    if (isLoading) {
      let fn = () => null;
    } else {
      fn = NavigatorHeader.getHeaderConditionalBackButton(callback1);
    }
    const obj2 = { headerLeft: fn, headerRight: null, headerTitle: null };
    if (isLoading) {
      let fn2 = () => saveEditingRule(guildId(rulesByTriggerType[17]).HeaderSubmittingIndicator, {});
    } else if (closure_16) {
      fn2 = () => {
        const obj = { onPress, text: null };
        const intl = guildId(rulesByTriggerType[16]).intl;
        obj.text = intl.string(guildId(rulesByTriggerType[16]).t["R3BPH+"]);
        return saveEditingRule(guildId(rulesByTriggerType[18]).HeaderActionButton, obj);
      };
    }
    obj2.headerRight = fn2;
    obj2.headerTitle = function headerTitle() {
      let str = name;
      if (name == null) {
        str = "";
      }
      const obj = { title: str, subtitle: null };
      const intl = guildId(rulesByTriggerType[16]).intl;
      obj.subtitle = intl.string(guildId(rulesByTriggerType[16]).t.uRelgx);
      return saveEditingRule(guildId(rulesByTriggerType[17]).NavigatorHeader, obj);
    };
    navigation.setOptions(obj2);
  }, items5);
  let tmp27Result2 = null;
  if (null != editingRule) {
    tmp27Result2 = null;
    if (editingRule.triggerType === triggerType) {
      let obj4 = { ref, contentContainerStyle: guildId.contentContainerStyle, children: null };
      let obj5 = { style: tmp.stack, spacing: navigation(tmp3[8]).space.PX_24, children: null };
      let tmp29Result = null != errorMessage;
      if (tmp29Result) {
        let obj6 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityLiveRegion: "polite", children: errorMessage };
        tmp29Result = tmp29(tmp2(tmp3[23]).Text, obj6);
      }
      const items6 = [tmp29Result, , , , , , ];
      const result = tmp2(tmp3[14]).isRuleApplicationFilter(editingRule);
      let tmp29Result3 = !result;
      if (!result) {
        const obj7 = { label: null, placeholder: null, maxLength: null, value: null, onChange: null };
        let intl = tmp2(tmp3[16]).intl;
        obj7.label = intl.string(tmp2(tmp3[16]).t.WVAHxF);
        let intl2 = tmp2(tmp3[16]).intl;
        obj7.placeholder = intl2.string(tmp2(tmp3[16]).t["5AO43K"]);
        obj7.maxLength = errorMessage;
        obj7.value = editingRule.name;
        obj7.onChange = function onChange(name) {
          const obj = {};
          const merged = Object.assign(editingRule);
          obj.name = name;
          if (!isLoading) {
            setEditingRule(obj, true);
          }
        };
        tmp29Result3 = tmp29(tmp2(tmp3[24]).TextInput, obj7);
      }
      function handleChangeRule(guildId) {
        if (!isLoading) {
          setEditingRule(guildId, true);
        }
      }
      items6[1] = tmp29Result3;
      const obj8 = { label: null, value: null, onValueChange: null, start: true, end: true };
      let intl3 = tmp2(tmp3[16]).intl;
      obj8.label = intl3.string(tmp2(tmp3[16]).t.WrleYK);
      obj8.value = editingRule.enabled;
      obj8.onValueChange = function onValueChange(enabled) {
        const obj = {};
        const merged = Object.assign(editingRule);
        obj.enabled = enabled;
        if (!isLoading) {
          setEditingRule(obj, true);
        }
      };
      items6[2] = saveEditingRule(tmp2(tmp3[25]).TableSwitchRow, obj8);
      const obj9 = {
        rule: editingRule,
        onChangeRule: handleChangeRule,
        onValidityChange(noop) {
              return closure_15(!noop);
            }
      };
      items6[3] = saveEditingRule(navigation(tmp3[26]), obj9);
      const obj10 = { rule: editingRule, onChangeRule: handleChangeRule };
      items6[4] = saveEditingRule(navigation(tmp3[27]), obj10);
      const obj11 = { rule: editingRule, onChangeRule: handleChangeRule };
      items6[5] = saveEditingRule(navigation(tmp3[28]), obj11);
      let tmp27Result = !tmp14;
      if (!tmp14) {
        const obj12 = { variant: "danger", label: null, onPress: null, disabled: null };
        let intl4 = tmp2(tmp3[16]).intl;
        obj12.label = intl4.string(tmp2(tmp3[16]).t["92m/01"]);
        obj12.onPress = function onPress() {
          if (null != editingRule) {
            const id = editingRule.id;
            const showConfirmModal = guildId(rulesByTriggerType[15]).showConfirmModal;
            const obj2 = { key: memo, title: null, content: null, confirmText: null, onConfirm: null };
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
              let obj = { ruleName: editingRule.name };
              obj2.content = intl.format(guildId(rulesByTriggerType[16]).t.hO7PgW, obj);
              const intl2 = guildId(rulesByTriggerType[16]).intl;
              obj2.confirmText = intl2.string(guildId(rulesByTriggerType[16]).t["cY+Oob"]);
              closure_0 = updateRule(function*() {
                if (c6 === 2) {
                  c6 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp6 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    return { value: "IconComponent", done: null };
                  }
                } else {
                  try {
                    c6 = 2;
                    if (0 === c5) {
                      if (arg0 === 1) {
                        c6 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c6 = 3;
                        const obj5 = { value, done: true };
                        return obj5;
                      } else {
                        closure_2 = tmp3;
                        closure_1 = tmp7;
                        let v0 = 1;
                        c5 = 2;
                        c6 = 1;
                        const obj6 = { value: closure_0(11492).deleteAutomodRule(id, closure_0), done: false };
                        return obj6;
                      }
                    } else if (1 === tmp7) {
                      v0 = 0;
                      closure_129_0 = closure_3;
                      const aPIError = new closure_0(5319).APIError(closure_129_0);
                      const anyErrorMessage = aPIError.getAnyErrorMessage();
                      closure_0 = anyErrorMessage;
                      if (anyErrorMessage == null) {
                        const intl = closure_0(1126).intl;
                        closure_0 = intl.string(closure_0(1126).t.fEptJP);
                      }
                      closure_0(4573).presentError(closure_0);
                      throw closure_129_0;
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
                  } catch (tmp41) {
                    closure_3 = tmp41;
                    if (tmp4 === v0) {
                      c6 = tmp2;
                      throw tmp41;
                    } else {
                      c5 = tmp;
                    }
                  }
                }
              });
              obj2.onConfirm = function() {
                const self = this;
                const apply = closure_0.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              };
              showConfirmModal(obj2);
            }
            const tmp24 = guildId(rulesByTriggerType[15]);
          }
        };
        obj12.disabled = isLoading;
        const items7 = [tmp29(tmp2(tmp3[30]).TableRow, obj12), ];
        let tmp29Result4 = setting;
        if (setting) {
          const obj13 = { label: null, onPress: null };
          let intl5 = tmp2(tmp3[16]).intl;
          obj13.label = intl5.string(tmp2(tmp3[16]).t.F64hjn);
          obj13.onPress = function onPress() {
            if (null != editingRule) {
              ClipboardUtils.copy(tmp.id);
              ToastUtils.presentIdCopied();
            }
          };
          tmp29Result4 = tmp29(tmp2(tmp3[30]).TableRow, obj13);
        }
        const obj14 = { hasIcons: false, children: null };
        items7[1] = tmp29Result4;
        obj14.children = items7;
        tmp27Result = tmp27(tmp2(tmp3[29]).TableRowGroup, obj14);
      }
      const obj15 = { children: null };
      items6[6] = tmp27Result;
      obj5.children = items6;
      obj4.children = cancelEditingRule(tmp2(tmp3[31]).Stack, obj5);
      const items8 = [saveEditingRule(tmp2(tmp3[32]).Form, obj4), saveEditingRule(tmp2(tmp3[33]).NavScrim, {})];
      obj15.children = items8;
      tmp27Result2 = tmp27(closure_12, obj15);
      const tmp2Result2 = tmp2(tmp3[14]);
    }
  }
  return tmp27Result2;
});