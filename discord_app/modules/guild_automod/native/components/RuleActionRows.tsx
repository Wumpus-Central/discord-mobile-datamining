// discord_app/modules/guild_automod/native/components/RuleActionRows.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01987_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import FormCheckbox from "../../../../design/components/Forms/native/FormCheckbox.native.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import AutomodActionUtils from "../../AutomodActionUtils.tsx";
import getActionInfo from "../getActionInfo.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

require = fn;
function openAlertChannelPicker(rule) {
  rule = rule.rule;
  const onChangeRule = rule.onChangeRule;
  const actions = rule.actions;
  const found = actions.find(rule(17728).isActionFlagToChannel);
  let channelId;
  if (found != null) {
    channelId = found.metadata.channelId;
  }
  let obj = {
    guildId: rule.guildId,
    channelType,
    selectedChannel: null,
    filterFn: null,
    noChannelOptionLabel: null,
    onSelect: null,
  };
  let channel = null;
  if (null != channelId) {
    channel = ChannelStore.getChannel(channelId);
  }
  if (channel == null) {
    channel = null;
  }
  obj.selectedChannel = channel;
  obj.filterFn = function filterFn(channel) {
    channel = channel.channel;
    const isGuildVocalResult = channel.isGuildVocal();
    let tmp2 = !isGuildVocalResult;
    if (!isGuildVocalResult) {
      tmp2 = !channel.isThread();
    }
    if (tmp2) {
      tmp2 = !channel.isForumLikeChannel();
    }
    return tmp2;
  };
  const intl = tmp(1126).intl;
  obj.noChannelOptionLabel = intl.string(rule(1126).t.PoWNfe);
  obj.onSelect = function onSelect(id) {
    if (null != id) {
      const _Set = Set;
      const set = new Set(rule.exemptChannels);
      set.add(id.id);
      const obj2 = {};
      const obj3 = { type: AutomodActionType.FLAG_TO_CHANNEL, metadata: null };
      const obj5 = { channelId: id.id };
      obj3.metadata = obj5;
      const merged = Object.assign(AutomodActionUtils.setRuleAction(rule, AutomodActionType.FLAG_TO_CHANNEL, obj3));
      obj2.exemptChannels = set;
      onChangeRule(obj2);
    } else {
      onChangeRule(AutomodActionUtils.setRuleAction(rule, AutomodActionType.FLAG_TO_CHANNEL, null));
    }
  };
  onChangeRule(12117)(obj);
  const tmp5 = onChangeRule(12117);
}
const channelType = fn(4513).GUILD_SELECTABLE_CHANNELS_KEY;
const AutomodActionType = fn(11487).AutomodActionType;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { subLabel: { marginTop: nativeDefault.space.PX_4 } };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPress) => {
      const cResult = c.c(31);
      ({ rule, actionType } = onPress);
      onPress = onPress.onPress;
      const tmp4 = closure_8();
      if (cResult[0] === actionType) {
        if (cResult[1] === rule.actions) {
          if (cResult[2] === rule.triggerType) {
            if (null == cResult[4]) {
              return null;
            } else {
              const icon = tmp6.icon;
              if (cResult[7] !== icon) {
                const obj2 = { IconComponent: icon };
                const tmp13 = timestampProducer(TableRow.TableRow.Icon, obj2);
                cResult[7] = icon;
                cResult[8] = tmp13;
                let tmp11 = tmp13;
              } else {
                tmp11 = cResult[8];
              }
              if (cResult[9] !== tmp6.helperText) {
                let tmp15 = null != tmp6.helperText;
                if (tmp15) {
                  const obj3 = { variant: "text-xs/medium", color: "text-subtle", children: null };
                  const items = [" ", tmp6.helperText];
                  obj3.children = items;
                  tmp15 = React5(Text_Text.Text, obj3);
                }
                cResult[9] = tmp6.helperText;
                cResult[10] = tmp15;
                let tmp14 = tmp15;
              } else {
                tmp14 = cResult[10];
              }
              if (cResult[11] === tmp6.descriptionText) {
                if (cResult[12] === tmp14) {
                  let tmp17 = cResult[13];
                }
                if (cResult[14] === tmp4.subLabel) {
                  if (cResult[15] === tmp17) {
                    let tmp20 = cResult[16];
                  }
                  if (cResult[17] !== (null != tmp5)) {
                    const obj4 = { checked: tmp24 };
                    const tmp27 = timestampProducer(FormCheckbox.FormCheckbox, obj4);
                    cResult[17] = tmp24;
                    cResult[18] = tmp27;
                    let tmp25 = tmp27;
                  } else {
                    tmp25 = cResult[18];
                  }
                  if (cResult[19] !== tmp5) {
                    const intl = util.intl;
                    if (null != tmp5) {
                      let Yl1D84 = util.t.G00RI5;
                    } else {
                      Yl1D84 = util.t.Yl1D84;
                    }
                    const stringResult = intl.string(Yl1D84);
                    cResult[19] = tmp5;
                    cResult[20] = stringResult;
                  } else {
                    if (cResult[21] !== cResult[20]) {
                      const obj5 = { text: tmp28 };
                      cResult[21] = tmp28;
                      cResult[22] = obj5;
                      let tmp31 = obj5;
                    } else {
                      tmp31 = cResult[22];
                    }
                    if (cResult[23] === tmp6.headerText) {
                      if (cResult[24] === onPress) {
                        if (cResult[25] === tmp31) {
                          if (cResult[26] === tmp32) {
                            if (cResult[27] === tmp11) {
                              if (cResult[28] === tmp20) {
                                if (cResult[29] === tmp25) {
                                  let tmp33 = cResult[30];
                                }
                                return tmp33;
                              }
                            }
                          }
                        }
                      }
                    }
                    const obj6 = {
                      icon: tmp11,
                      label: tmp6.headerText,
                      subLabel: tmp20,
                      trailing: tmp25,
                      accessibilityValue: tmp31,
                      disabled: !tmp6.isEditable,
                      onPress,
                      arrow: true,
                    };
                    const tmp35 = timestampProducer(TableRow.TableRow, obj6);
                    cResult[23] = tmp6.headerText;
                    cResult[24] = onPress;
                    cResult[25] = tmp31;
                    cResult[26] = !tmp6.isEditable;
                    cResult[27] = tmp11;
                    cResult[28] = tmp20;
                    cResult[29] = tmp25;
                    cResult[30] = tmp35;
                    tmp33 = tmp35;
                  }
                }
                const obj7 = { spacing: nativeDefault.space.PX_4, style: tmp4.subLabel, children: tmp17 };
                const tmp23 = timestampProducer(Stack_Stack.Stack, obj7);
                cResult[14] = tmp4.subLabel;
                cResult[15] = tmp17;
                cResult[16] = tmp23;
                tmp20 = tmp23;
              }
              const obj8 = { variant: "text-xs/medium", color: "text-subtle", children: null };
              const items1 = [tmp6.descriptionText, tmp14];
              obj8.children = items1;
              const tmp19 = React5(Text_Text.Text, obj8);
              cResult[11] = tmp6.descriptionText;
              cResult[12] = tmp14;
              cResult[13] = tmp19;
              tmp17 = tmp19;
            }
          }
        }
      }
      if (cResult[5] !== actionType) {
        const fn = function o(type) {
          return type.type === actionType;
        };
        cResult[5] = actionType;
        cResult[6] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[6];
      }
      const actions = rule.actions;
      const found = actions.find(tmp7);
      const actionInfo = getActionInfo.getActionInfo(actionType, found, rule.triggerType);
      cResult[0] = actionType;
      actionType = rule.actions;
      cResult[1] = actionType;
      rule = rule.triggerType;
      cResult[2] = rule;
      cResult[3] = found;
      cResult[4] = actionInfo;
      const tmpResult = getActionInfo;
    }
  : (onPress) => {
      ({ rule, actionType } = onPress);
      const actions = rule.actions;
      const found = actions.find((type) => type.type === actionType);
      const tmp = closure_8();
      const actionInfo = getActionInfo.getActionInfo(actionType, found, rule.triggerType);
      if (null == actionInfo) {
        return null;
      } else {
        const obj2 = {
          icon: null,
          label: null,
          subLabel: null,
          trailing: null,
          accessibilityValue: null,
          disabled: null,
          onPress: null,
          arrow: true,
        };
        const obj3 = { IconComponent: actionInfo.icon };
        obj2.icon = timestampProducer(TableRow.TableRow.Icon, obj3);
        obj2.label = actionInfo.headerText;
        const obj4 = { spacing: nativeDefault.space.PX_4, style: tmp.subLabel, children: null };
        const items = [actionInfo.descriptionText];
        let tmp9Result = null != actionInfo.helperText;
        if (tmp9Result) {
          const obj5 = { variant: "text-xs/medium", color: "text-subtle", children: null };
          const items1 = [" ", actionInfo.helperText];
          obj5.children = items1;
          tmp9Result = React5(Text_Text.Text, obj5);
        }
        const obj6 = { variant: "text-xs/medium", color: "text-subtle", children: null };
        items[1] = tmp9Result;
        obj6.children = items;
        obj4.children = React5(Text_Text.Text, obj6);
        obj2.subLabel = timestampProducer(Stack_Stack.Stack, obj4);
        const obj7 = { checked: null != found };
        obj2.trailing = timestampProducer(FormCheckbox.FormCheckbox, obj7);
        const intl = util.intl;
        if (null != found) {
          let Yl1D84 = util.t.G00RI5;
        } else {
          Yl1D84 = util.t.Yl1D84;
        }
        const obj8 = { text: intl.string(Yl1D84) };
        obj2.accessibilityValue = obj8;
        obj2.disabled = !actionInfo.isEditable;
        obj2.onPress = onPress.onPress;
        return timestampProducer(TableRow.TableRow, obj2);
      }
    };
ReactCompilerGating = fn(558);
let obj3 = { marginTop: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/RuleActionRows.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (rule) => {
      let map = dependencyMap;
      const cResult = rule(576).c(17);
      rule = rule.rule;
      const onChangeRule = rule.onChangeRule;
      if (cResult[0] === onChangeRule) {
        if (cResult[1] === rule) {
          let tmp3 = cResult[2];
        }
        dependencyMap = tmp3;
        if (cResult[3] === tmp3) {
          if (cResult[4] === onChangeRule) {
            if (cResult[5] === rule) {
              let tmp8 = cResult[10];
            }
            const _Symbol2 = Symbol;
            if (tmp8 !== Symbol.for("react.early_return_sentinel")) {
              return tmp8;
            } else {
              if (cResult[12] === tmp4) {
                if (cResult[13] === tmp5) {
                  if (cResult[14] === tmp6) {
                  }
                }
              }
              const obj2 = { title: tmp5, hasIcons: tmp6, children: tmp7 };
              const tmp20 = closure_6(tmp4, obj2);
              cResult[12] = tmp4;
              cResult[13] = tmp5;
              cResult[14] = tmp6;
              cResult[15] = tmp7;
              cResult[16] = tmp20;
            }
          }
        }
        const _Symbol = Symbol;
        const forResult = Symbol.for("react.early_return_sentinel");
        const availableActionTypes = tmp(17725).getAvailableActionTypes(rule.triggerType);
        if (0 === availableActionTypes.length) {
          cResult[3] = tmp3;
          cResult[4] = onChangeRule;
          cResult[5] = rule;
          cResult[6] = undefined;
          cResult[7] = undefined;
          cResult[8] = undefined;
          cResult[9] = undefined;
          cResult[10] = null;
          tmp8 = null;
        } else {
          const _Symbol3 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(tmp(1126).t["18TOiQ"]);
            cResult[11] = stringResult;
          }
          map = availableActionTypes.map;
          const mapped = map((actionType) => {
            rule = actionType;
            return closure_1_6(
              closure_1_10,
              {
                rule,
                actionType,
                onChangeRule,
                onPress() {
                  return closure_2(closure_0);
                },
              },
              actionType,
            );
          });
          const TableRowGroup = tmp(6081).TableRowGroup;
        }
        const tmpResult = tmp(17725);
      }
      const fn = function t(arg0) {
        if (AutomodActionType.FLAG_TO_CHANNEL === arg0) {
          const obj5 = { rule, onChangeRule };
          openAlertChannelPicker(obj5);
        } else if (AutomodActionType.BLOCK_MESSAGE === arg0) {
          closure_0 = rule;
          closure_1 = onChangeRule;
          const obj8 = { triggerType: null, action: null, onConfirm: null, onRemove: null };
          ({ triggerType: obj4.triggerType, actions: actions2 } = rule);
          const obj3 = ActionSheetActionCreatorsDefault;
          obj8.action = actions2.find(AutomodActionUtils.isActionBlockMessage);
          obj8.onConfirm = function onConfirm(arg0) {
            const obj2 = { type: constants.BLOCK_MESSAGE, metadata: null };
            let tmp3;
            if ("" !== arg0) {
              tmp3 = arg0;
            }
            obj2.metadata = { customMessage: tmp3 };
            return closure_1(closure_0(17728).setRuleAction(closure_0, constants.BLOCK_MESSAGE, obj2));
          };
          obj8.onRemove = function onRemove() {
            return closure_1(closure_0(17728).setRuleAction(closure_0, constants.BLOCK_MESSAGE, null));
          };
          obj3.openLazy(asyncRequireImpl(17753, dependencyMap.paths), "AutomodBlockMessage", obj8);
          const tmp14 = asyncRequireImpl(17753, dependencyMap.paths);
        } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === arg0) {
          closure_0 = rule;
          closure_1 = onChangeRule;
          const obj9 = { triggerType: null, action: null, onSelectDuration: null, onRemove: null };
          ({ triggerType: obj2.triggerType, actions } = rule);
          const obj = ActionSheetActionCreatorsDefault;
          obj9.action = actions.find(AutomodActionUtils.isActionUserCommunicationDisabled);
          obj9.onSelectDuration = function onSelectDuration(dependencyMap) {
            const obj2 = { type: constants.USER_COMMUNICATION_DISABLED, metadata: { durationSeconds: dependencyMap } };
            return closure_1(closure_0(17728).setRuleAction(closure_0, constants.USER_COMMUNICATION_DISABLED, obj2));
          };
          obj9.onRemove = function onRemove() {
            return closure_1(closure_0(17728).setRuleAction(closure_0, constants.USER_COMMUNICATION_DISABLED, null));
          };
          obj.openLazy(asyncRequireImpl(17752, dependencyMap.paths), "AutomodTimeoutDuration", obj9);
          const tmp7 = asyncRequireImpl(17752, dependencyMap.paths);
        } else {
          const QUARANTINE_USER = AutomodActionType.QUARANTINE_USER;
        }
      };
      cResult[0] = onChangeRule;
      cResult[1] = rule;
      cResult[2] = fn;
      tmp3 = fn;
      let obj = rule(576);
    }
  : (rule) => {
      rule = rule.rule;
      const onChangeRule = rule.onChangeRule;
      const availableActionTypes = rule(17725).getAvailableActionTypes(rule.triggerType);
      let tmp3 = null;
      if (0 !== availableActionTypes.length) {
        let obj2 = { title: null, hasIcons: true, children: null };
        const intl = tmp(1126).intl;
        obj2.title = intl.string(tmp(1126).t["18TOiQ"]);
        obj2.children = availableActionTypes.map((actionType) => {
          rule = actionType;
          return closure_1_6(
            closure_1_10,
            {
              rule,
              actionType,
              onChangeRule,
              onPress() {
                if (AutomodActionType.FLAG_TO_CHANNEL === closure_0) {
                  const obj5 = { rule, onChangeRule };
                  openAlertChannelPicker(obj5);
                } else if (AutomodActionType.BLOCK_MESSAGE === tmp) {
                  closure_0 = rule;
                  closure_1 = onChangeRule;
                  const obj8 = { triggerType: null, action: null, onConfirm: null, onRemove: null };
                  ({ triggerType: obj4.triggerType, actions: actions2 } = rule);
                  const obj3 = ActionSheetActionCreatorsDefault;
                  obj8.action = actions2.find(AutomodActionUtils.isActionBlockMessage);
                  obj8.onConfirm = function onConfirm(arg0) {
                    const obj2 = { type: constants.BLOCK_MESSAGE, metadata: null };
                    let tmp3;
                    if ("" !== arg0) {
                      tmp3 = arg0;
                    }
                    obj2.metadata = { customMessage: tmp3 };
                    return closure_1(closure_0(17728).setRuleAction(closure_0, constants.BLOCK_MESSAGE, obj2));
                  };
                  obj8.onRemove = function onRemove() {
                    return closure_1(closure_0(17728).setRuleAction(closure_0, constants.BLOCK_MESSAGE, null));
                  };
                  obj3.openLazy(asyncRequireImpl(17753, dependencyMap.paths), "AutomodBlockMessage", obj8);
                  const tmp15 = asyncRequireImpl(17753, dependencyMap.paths);
                } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === tmp) {
                  closure_0 = rule;
                  closure_1 = onChangeRule;
                  const obj9 = { triggerType: null, action: null, onSelectDuration: null, onRemove: null };
                  ({ triggerType: obj2.triggerType, actions } = rule);
                  const obj = ActionSheetActionCreatorsDefault;
                  obj9.action = actions.find(AutomodActionUtils.isActionUserCommunicationDisabled);
                  obj9.onSelectDuration = function onSelectDuration(dependencyMap) {
                    const obj2 = {
                      type: constants.USER_COMMUNICATION_DISABLED,
                      metadata: { durationSeconds: dependencyMap },
                    };
                    return closure_1(
                      closure_0(17728).setRuleAction(closure_0, constants.USER_COMMUNICATION_DISABLED, obj2),
                    );
                  };
                  obj9.onRemove = function onRemove() {
                    return closure_1(
                      closure_0(17728).setRuleAction(closure_0, constants.USER_COMMUNICATION_DISABLED, null),
                    );
                  };
                  obj.openLazy(asyncRequireImpl(17752, dependencyMap.paths), "AutomodTimeoutDuration", obj9);
                  const tmp8 = asyncRequireImpl(17752, dependencyMap.paths);
                } else {
                  const QUARANTINE_USER = AutomodActionType.QUARANTINE_USER;
                }
              },
            },
            actionType,
          );
        });
        tmp3 = closure_6(tmp(6081).TableRowGroup, obj2);
      }
      return tmp3;
    };
