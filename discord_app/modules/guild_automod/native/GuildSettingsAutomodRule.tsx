// === Module 18037: GuildSettingsAutomodRule ===

// Module 18037 (GuildSettingsAutomodRule)
import nativeDefault from "native" /* 576 */;
import ToastUtils from "ToastUtils" /* 4520 */;
import NavigatorHeader from "NavigatorHeader" /* 5927 */;
import ClipboardUtils from "ClipboardUtils" /* 7520 */;
import AutomodRuleUtils from "AutomodRuleUtils" /* 18024 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
const useAutomodRulesList = fn(18021).useAutomodRulesList;
const GuildSettingsAutomodRuleStore = fn(18023);
({ useAutomodEditingRuleActions: metroRequire, useAutomodEditingRuleState: closure_7 } = GuildSettingsAutomodRuleStore);
const MAX_RULE_NAME_LENGTH = fn(12198).MAX_RULE_NAME_LENGTH;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
let c12 = "automod-delete-rule";
const createStyles = fn(4827);
let obj2 = { stack: { marginTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING } };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_automod/native/GuildSettingsAutomodRule.tsx");

export default function GuildSettingsAutomodRule(guildId) {
  guildId = guildId.guildId;
  const triggerType = guildId.triggerType;
  let rulesByTriggerType;
  let editingRule;
  let setEditingRule;
  let memo;
  closure_15 = undefined;
  let callback;
  let name;
  let callback1;
  const tmp = memo();
  const navigation = guildId(rulesByTriggerType[8]).useNavigation();
  const tmp5 = editingRule(guildId);
  rulesByTriggerType = tmp5.rulesByTriggerType;
  const updateRule = tmp5.updateRule;
  const removeRule = tmp5.removeRule;
  const tmp6 = setEditingRule();
  editingRule = tmp6.editingRule;
  const hasChanges = tmp6.hasChanges;
  setEditingRule = tmp6.setEditingRule;
  const tmp7 = hasChanges();
  const isLoading = tmp7.isLoading;
  const errorMessage = tmp7.errorMessage;
  const saveEditingRule = tmp7.saveEditingRule;
  const cancelEditingRule = tmp7.cancelEditingRule;
  let obj = guildId(rulesByTriggerType[8]);
  guildId(rulesByTriggerType[9]).useIsUndeletableMentionSpamRule(guildId, triggerType);
  const DeveloperMode = guildId(rulesByTriggerType[10]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  const items = [rulesByTriggerType];
  memo = removeRule.useMemo(() => AutomodRuleUtils.getRulesFromTriggerTypeMap(rulesByTriggerType), items);
  const ref = removeRule.useRef(null);
  const items1 = [errorMessage];
  const effect = removeRule.useEffect(() => {
    if (null != errorMessage) {
      const current = ref.current;
      if (current != null) {
        current.scrollTo({ y: 0, animated: true });
      }
    }
  }, items1);
  const items2 = [cancelEditingRule];
  const effect1 = removeRule.useEffect(() => cancelEditingRule, items2);
  let tmp13 = null != editingRule;
  if (tmp13) {
    tmp13 = !tmp2(tmp3[11]).isBackendPersistedRule(editingRule);
    const tmp2Result = tmp2(tmp3[11]);
  }
  let tmp14 = hasChanges;
  if (!hasChanges) {
    tmp14 = tmp13;
  }
  closure_15 = tmp14;
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
        return { value: "HermesInternal", done: null };
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
          return { value: "HermesInternal", done: null };
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
        c1 = false;
        const obj2 = { key: "automod-unsaved-changes", title: null, content: null, confirmText: null, onConfirm: null, onCancel: null, onCloseCallback: null };
        const intl = guildId(rulesByTriggerType[13]).intl;
        obj2.title = intl.string(guildId(rulesByTriggerType[13]).t.kknTmH);
        const intl2 = guildId(rulesByTriggerType[13]).intl;
        obj2.content = intl2.format(guildId(rulesByTriggerType[13]).t["ff/gx7"], { ruleName });
        const intl3 = guildId(rulesByTriggerType[13]).intl;
        obj2.confirmText = intl3.string(guildId(rulesByTriggerType[13]).t["cY+Oob"]);
        obj2.onConfirm = function onConfirm() {
          if (!c1) {
            c1 = true;
            closure_0(true);
          }
        };
        obj2.onCancel = function onCancel() {
          if (!c1) {
            c1 = true;
            closure_0(false);
          }
        };
        obj2.onCloseCallback = function onCloseCallback() {
          if (!c1) {
            c1 = true;
            closure_0(false);
          }
        };
        guildId(rulesByTriggerType[12]).showConfirmModal(obj2);
      });
    } else {
      _Promise1 = _Promise.resolve(true);
    }
    return _Promise1;
  }, items4);
  const items5 = [navigation, isLoading, tmp14, callback, callback1, name];
  const effect2 = obj3.useEffect(() => {
    if (isLoading) {
      let fn = () => null;
    } else {
      fn = NavigatorHeader.getHeaderConditionalBackButton(callback1);
    }
    const obj2 = { headerLeft: fn, headerRight: null, headerTitle: null };
    if (isLoading) {
      let fn2 = () => errorMessage(guildId(rulesByTriggerType[14]).HeaderSubmittingIndicator, {});
    } else if (closure_15) {
      fn2 = () => {
        const obj = { onPress, text: null };
        const intl = guildId(rulesByTriggerType[13]).intl;
        obj.text = intl.string(guildId(rulesByTriggerType[13]).t["R3BPH+"]);
        return errorMessage(guildId(rulesByTriggerType[15]).HeaderActionButton, obj);
      };
    }
    obj2.headerRight = fn2;
    obj2.headerTitle = function headerTitle() {
      let str = name;
      if (name == null) {
        str = "";
      }
      const obj = { title: str, subtitle: null };
      const intl = guildId(rulesByTriggerType[13]).intl;
      obj.subtitle = intl.string(guildId(rulesByTriggerType[13]).t.uRelgx);
      return errorMessage(guildId(rulesByTriggerType[14]).NavigatorHeader, obj);
    };
    navigation.setOptions(obj2);
  }, items5);
  let tmp26Result2 = null;
  if (null != editingRule) {
    tmp26Result2 = null;
    if (editingRule.triggerType === triggerType) {
      let obj4 = { ref, contentContainerStyle: guildId.contentContainerStyle, children: null };
      let obj5 = { style: tmp.stack, spacing: navigation(tmp3[7]).space.PX_24, children: null };
      let tmp28Result = null != errorMessage;
      if (tmp28Result) {
        let obj6 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityLiveRegion: "polite", children: errorMessage };
        tmp28Result = tmp28(tmp2(tmp3[18]).Text, obj6);
      }
      const items6 = [tmp28Result, , , , , , ];
      const result = tmp2(tmp3[11]).isRuleApplicationFilter(editingRule);
      let tmp28Result3 = !result;
      if (!result) {
        const obj7 = { label: null, placeholder: null, maxLength: null, value: null, onChange: null };
        let intl = tmp2(tmp3[13]).intl;
        obj7.label = intl.string(tmp2(tmp3[13]).t.WVAHxF);
        let intl2 = tmp2(tmp3[13]).intl;
        obj7.placeholder = intl2.string(tmp2(tmp3[13]).t["5AO43K"]);
        obj7.maxLength = isLoading;
        obj7.value = editingRule.name;
        obj7.onChange = function onChange(name) {
          const obj = {};
          const merged = Object.assign(editingRule);
          obj.name = name;
          if (!isLoading) {
            setEditingRule(obj, true);
          }
        };
        tmp28Result3 = tmp28(tmp2(tmp3[19]).TextInput, obj7);
      }
      function handleChangeRule(id) {
        if (!isLoading) {
          setEditingRule(id, true);
        }
      }
      items6[1] = tmp28Result3;
      const obj8 = { label: null, value: null, onValueChange: null, start: true, end: true };
      let intl3 = tmp2(tmp3[13]).intl;
      obj8.label = intl3.string(tmp2(tmp3[13]).t.WrleYK);
      obj8.value = editingRule.enabled;
      obj8.onValueChange = function onValueChange(enabled) {
        const obj = {};
        const merged = Object.assign(editingRule);
        obj.enabled = enabled;
        if (!isLoading) {
          setEditingRule(obj, true);
        }
      };
      items6[2] = errorMessage(tmp2(tmp3[20]).TableSwitchRow, obj8);
      const obj9 = { rule: editingRule, onChangeRule: handleChangeRule };
      items6[3] = errorMessage(navigation(tmp3[21]), obj9);
      const obj10 = { rule: editingRule, onChangeRule: handleChangeRule };
      items6[4] = errorMessage(navigation(tmp3[22]), obj10);
      const obj11 = { rule: editingRule, onChangeRule: handleChangeRule };
      items6[5] = errorMessage(navigation(tmp3[23]), obj11);
      let tmp26Result = !tmp13;
      if (!tmp13) {
        const obj12 = { variant: "danger", label: null, onPress: null, disabled: null };
        let intl4 = tmp2(tmp3[13]).intl;
        obj12.label = intl4.string(tmp2(tmp3[13]).t["92m/01"]);
        obj12.onPress = function onPress() {
          if (null != editingRule) {
            const id = editingRule.id;
            const showConfirmModal = guildId(rulesByTriggerType[12]).showConfirmModal;
            const obj2 = { key, title: null, content: null, confirmText: null, onConfirm: null };
            const intl5 = guildId(rulesByTriggerType[13]).intl;
            const string = intl5.string;
            const t = guildId(rulesByTriggerType[13]).t;
            if (key) {
              obj2.title = string(t.MmpqMC);
              const intl3 = guildId(rulesByTriggerType[13]).intl;
              obj2.content = intl3.string(guildId(rulesByTriggerType[13]).t.XMdBLw);
              const intl4 = guildId(rulesByTriggerType[13]).intl;
              obj2.confirmText = intl4.string(guildId(rulesByTriggerType[13]).t.BddRzS);
              obj2.onConfirm = function onConfirm() {

              };
              showConfirmModal(obj2);
            } else {
              obj2.title = string(t.Hy8XgL);
              let intl = guildId(rulesByTriggerType[13]).intl;
              let obj = { ruleName: editingRule.name };
              obj2.content = intl.format(guildId(rulesByTriggerType[13]).t.hO7PgW, obj);
              const intl2 = guildId(rulesByTriggerType[13]).intl;
              obj2.confirmText = intl2.string(guildId(rulesByTriggerType[13]).t["cY+Oob"]);
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
                    return { value: "HermesInternal", done: null };
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
                        const obj6 = { value: closure_0(12203).deleteAutomodRule(id, closure_0), done: false };
                        return obj6;
                      }
                    } else if (1 === tmp7) {
                      v0 = 0;
                      closure_129_0 = closure_3;
                      const aPIError = new closure_0(4727).APIError(closure_129_0);
                      const anyErrorMessage = aPIError.getAnyErrorMessage();
                      closure_0 = anyErrorMessage;
                      if (anyErrorMessage == null) {
                        const intl = closure_0(1115).intl;
                        closure_0 = intl.string(closure_0(1115).t.fEptJP);
                      }
                      closure_0(4520).presentError(closure_0);
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
                      return { value: "HermesInternal", done: null };
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
            const tmp24 = guildId(rulesByTriggerType[12]);
          }
        };
        obj12.disabled = isLoading;
        const items7 = [tmp28(tmp2(tmp3[25]).TableRow, obj12), ];
        let tmp28Result4 = setting;
        if (setting) {
          const obj13 = { label: null, onPress: null };
          let intl5 = tmp2(tmp3[13]).intl;
          obj13.label = intl5.string(tmp2(tmp3[13]).t.F64hjn);
          obj13.onPress = function onPress() {
            if (null != editingRule) {
              ClipboardUtils.copy(tmp.id);
              ToastUtils.presentIdCopied();
            }
          };
          tmp28Result4 = tmp28(tmp2(tmp3[25]).TableRow, obj13);
        }
        const obj14 = { hasIcons: false, children: null };
        items7[1] = tmp28Result4;
        obj14.children = items7;
        tmp26Result = tmp26(tmp2(tmp3[24]).TableRowGroup, obj14);
      }
      const obj15 = { children: null };
      items6[6] = tmp26Result;
      obj5.children = items6;
      obj4.children = saveEditingRule(tmp2(tmp3[17]).Stack, obj5);
      const items8 = [errorMessage(tmp2(tmp3[16]).Form, obj4), errorMessage(tmp2(tmp3[30]).NavScrim, {})];
      obj15.children = items8;
      tmp26Result2 = tmp26(cancelEditingRule, obj15);
      const tmp2Result2 = tmp2(tmp3[11]);
    }
  }
  return tmp26Result2;
};