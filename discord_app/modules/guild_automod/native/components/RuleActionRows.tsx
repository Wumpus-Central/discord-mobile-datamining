// discord_app/modules/guild_automod/native/components/RuleActionRows.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import GuildChannelStore from "../../../../stores/GuildChannelStore.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import FormCheckbox from "../../../../design/components/Forms/native/FormCheckbox.native.tsx";
import TableRow2 from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import Constants from "../../Constants.tsx";
import AutomodActionUtils from "../../AutomodActionUtils.tsx";
import getActionInfo from "../getActionInfo.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let onPress, set;

let metroImportDefault;
let metroRequire;
let obj2;
function openAlertChannelPicker(rule) {
  let channel;
  let intl;
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
    selectedChannel: channel,
    filterFn(channel) {
      channel = channel.channel;
      const isGuildVocalResult = channel.isGuildVocal();
      const tmp2 = !isGuildVocalResult && !channel.isThread() && !channel.isForumLikeChannel();
      return tmp2;
    },
    noChannelOptionLabel: intl.string(rule(1126).t.PoWNfe),
    onSelect(id) {
      let obj5;
      if (null != id) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set(rule.exemptChannels);
        set.add(id.id);
        const obj3 = { type: AutomodActionType.FLAG_TO_CHANNEL, metadata: obj5 };
        const obj2 = { exemptChannels: set };
        obj5 = { channelId: id.id };
        const obj4 = AutomodActionUtils;
        const merged = Object.assign(obj4.setRuleAction(rule, AutomodActionType.FLAG_TO_CHANNEL, obj3));
        onChangeRule(obj2);
      } else {
        const obj = AutomodActionUtils;
        onChangeRule(obj.setRuleAction(rule, AutomodActionType.FLAG_TO_CHANNEL, null));
      }
    },
  };
  channel = null;
  const tmp5 = onChangeRule(12117);
  if (null != channelId) {
    channel = ChannelStore.getChannel(channelId);
  }
  if (channel == null) {
    channel = null;
  }
  intl = tmp(1126).intl;
  tmp5(obj);
}
const channelType = GuildChannelStore.GUILD_SELECTABLE_CHANNELS_KEY;
const AutomodActionType = Constants.AutomodActionType;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { subLabel: obj2 };
obj2 = { marginTop: nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPress) => {
      let actionType;
      let items;
      let items1;
      let rule;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(31);
      ({ rule, actionType } = onPress);
      onPress = onPress.onPress;
      const tmp4 = closure_8();
      if (cResult[0] === actionType) {
        if (cResult[1] === rule.actions) {
          let tmp5;
          let tmp6;
          if (cResult[2] === rule.triggerType) {
            tmp5 = cResult[3];
            tmp6 = cResult[4];
          }
          if (null == tmp6) {
            return null;
          } else {
            let tmp11;
            let tmp14;
            const icon = tmp6.icon;
            if (cResult[7] !== icon) {
              const obj2 = { IconComponent: icon };
              const tmp13 = metroRequire(TableRow2.TableRow.Icon, obj2);
              cResult[7] = icon;
              cResult[8] = tmp13;
              tmp11 = tmp13;
            } else {
              tmp11 = cResult[8];
            }
            const headerText = tmp6.headerText;
            if (cResult[9] !== tmp6.helperText) {
              let tmp15 = null != tmp6.helperText;
              if (tmp15) {
                const obj3 = { variant: "text-xs/medium", color: "text-subtle", children: items };
                items = [" ", tmp6.helperText];
                tmp15 = metroImportDefault(Text_Text.Text, obj3);
              }
              cResult[9] = tmp6.helperText;
              cResult[10] = tmp15;
              tmp14 = tmp15;
            } else {
              tmp14 = cResult[10];
            }
            if (cResult[11] === tmp6.descriptionText) {
              let tmp17;
              if (cResult[12] === tmp14) {
                tmp17 = cResult[13];
              }
              if (cResult[14] === tmp4.subLabel) {
                let tmp20;
                let tmp25;
                let tmp28;
                let tmp30;
                if (cResult[15] === tmp17) {
                  tmp20 = cResult[16];
                }
                if (cResult[17] !== (null != tmp5)) {
                  const obj4 = { checked: null != tmp5 };
                  const tmp27 = metroRequire(FormCheckbox.FormCheckbox, obj4);
                  cResult[17] = null != tmp5;
                  cResult[18] = tmp27;
                  tmp25 = tmp27;
                } else {
                  tmp25 = cResult[18];
                }
                if (cResult[19] !== tmp5) {
                  let Yl1D84;
                  const intl = intl2.intl;
                  const string = intl.string;
                  if (null != tmp5) {
                    Yl1D84 = intl2.t.G00RI5;
                  } else {
                    Yl1D84 = intl2.t.Yl1D84;
                  }
                  const stringResult = string(Yl1D84);
                  cResult[19] = tmp5;
                  cResult[20] = stringResult;
                  tmp28 = stringResult;
                } else {
                  tmp28 = cResult[20];
                }
                if (cResult[21] !== tmp28) {
                  const obj5 = { text: tmp28 };
                  cResult[21] = tmp28;
                  cResult[22] = obj5;
                  tmp30 = obj5;
                } else {
                  tmp30 = cResult[22];
                }
                if (cResult[23] === tmp6.headerText) {
                  if (cResult[24] === onPress) {
                    if (cResult[25] === tmp30) {
                      if (cResult[26] === !tmp6.isEditable) {
                        if (cResult[27] === tmp11) {
                          if (cResult[28] === tmp20) {
                            let tmp32;
                            if (cResult[29] === tmp25) {
                              tmp32 = cResult[30];
                            }
                            return tmp32;
                          }
                        }
                      }
                    }
                  }
                }
                const obj6 = {
                  icon: tmp11,
                  label: headerText,
                  subLabel: tmp20,
                  trailing: tmp25,
                  accessibilityValue: tmp30,
                  disabled: !tmp6.isEditable,
                  onPress,
                  arrow: true,
                };
                const tmp34 = metroRequire(TableRow2.TableRow, obj6);
                cResult[23] = tmp6.headerText;
                cResult[24] = onPress;
                cResult[25] = tmp30;
                cResult[26] = !tmp6.isEditable;
                cResult[27] = tmp11;
                cResult[28] = tmp20;
                cResult[29] = tmp25;
                cResult[30] = tmp34;
                tmp32 = tmp34;
              }
              const obj7 = { spacing: nativeDefault.space.PX_4, style: tmp4.subLabel, children: tmp17 };
              const Stack = Stack_Stack.Stack;
              const tmp23 = metroRequire(Stack, obj7);
              cResult[14] = tmp4.subLabel;
              cResult[15] = tmp17;
              cResult[16] = tmp23;
              tmp20 = tmp23;
            }
            const obj8 = { variant: "text-xs/medium", color: "text-subtle", children: items1 };
            items1 = [tmp6.descriptionText, tmp14];
            const tmp19 = metroImportDefault(Text_Text.Text, obj8);
            cResult[11] = tmp6.descriptionText;
            cResult[12] = tmp14;
            cResult[13] = tmp19;
            tmp17 = tmp19;
          }
        }
      }
      if (cResult[5] !== actionType) {
        const fn = function o(type) {
          return type.type === actionType;
        };
        cResult[5] = actionType;
        cResult[6] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[6];
      }
      const actions = rule.actions;
      const found = actions.find(tmp7);
      const tmpResult = getActionInfo;
      const actionInfo = tmpResult.getActionInfo(actionType, found, rule.triggerType);
      cResult[0] = actionType;
      cResult[1] = rule.actions;
      cResult[2] = rule.triggerType;
      cResult[3] = found;
      cResult[4] = actionInfo;
      tmp6 = actionInfo;
      tmp5 = found;
    }
  : (onPress) => {
      let Stack;
      let Text;
      let actionType;
      let items1;
      let obj3;
      let obj4;
      let obj6;
      let obj7;
      let obj8;
      let rule;
      ({ rule, actionType } = onPress);
      onPress = onPress.onPress;
      const actions = rule.actions;
      const tmp = closure_8();
      const found = actions.find((type) => type.type === actionType);
      const obj = getActionInfo;
      const actionInfo = obj.getActionInfo(actionType, found, rule.triggerType);
      if (null == actionInfo) {
        return null;
      } else {
        let Yl1D84;
        const icon = actionInfo.icon;
        const obj2 = {
          icon: metroRequire(TableRow2.TableRow.Icon, obj3),
          label: actionInfo.headerText,
          subLabel: metroRequire(Stack, obj4),
          trailing: metroRequire(FormCheckbox.FormCheckbox, obj7),
          accessibilityValue: obj8,
          disabled: !actionInfo.isEditable,
          onPress,
          arrow: true,
        };
        const TableRow = TableRow2.TableRow;
        obj3 = { IconComponent: icon };
        obj4 = { spacing: nativeDefault.space.PX_4, style: tmp.subLabel, children: metroImportDefault(Text, obj6) };
        Stack = Stack_Stack.Stack;
        const items = [actionInfo.descriptionText];
        let tmp9Result = null != actionInfo.helperText;
        Text = Text_Text.Text;
        if (tmp9Result) {
          const obj5 = { variant: "text-xs/medium", color: "text-subtle", children: items1 };
          items1 = [" ", actionInfo.helperText];
          tmp9Result = metroImportDefault(Text_Text.Text, obj5);
        }
        obj6 = { variant: "text-xs/medium", color: "text-subtle", children: items };
        items[1] = tmp9Result;
        obj7 = { checked: null != found };
        const intl = intl2.intl;
        const string = intl.string;
        if (null != found) {
          Yl1D84 = intl2.t.G00RI5;
        } else {
          Yl1D84 = intl2.t.Yl1D84;
        }
        obj8 = { text: string(Yl1D84) };
        return metroRequire(TableRow, obj2);
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (rule) => {
      let closure_2;
      let obj = rule(576);
      const cResult = obj.c(17);
      rule = rule.rule;
      const onChangeRule = rule.onChangeRule;
      if (cResult[0] === onChangeRule) {
        let tmp4;
        if (cResult[1] === rule) {
          tmp4 = cResult[2];
        }
        dependencyMap = tmp4;
        if (cResult[3] === tmp4) {
          if (cResult[4] === onChangeRule) {
            let tmp5;
            let tmp6;
            let tmp7;
            let tmp8;
            let tmp9;
            if (cResult[5] === rule) {
              tmp5 = cResult[6];
              tmp6 = cResult[7];
              tmp7 = cResult[8];
              tmp8 = cResult[9];
              tmp9 = cResult[10];
            }
            const _Symbol2 = Symbol;
            if (tmp9 === Symbol.for("react.early_return_sentinel")) {
              if (cResult[12] === tmp5) {
                if (cResult[13] === tmp6) {
                  if (cResult[14] === tmp7) {
                    let tmp19;
                    if (cResult[15] === tmp8) {
                      tmp19 = cResult[16];
                    }
                    tmp9 = tmp19;
                  }
                }
              }
              const obj2 = { title: tmp6, hasIcons: tmp7, children: tmp8 };
              const tmp21 = closure_6(tmp5, obj2);
              cResult[12] = tmp5;
              cResult[13] = tmp6;
              cResult[14] = tmp7;
              cResult[15] = tmp8;
              cResult[16] = tmp21;
              tmp19 = tmp21;
            }
            return tmp9;
          }
        }
        const _Symbol = Symbol;
        const forResult = Symbol.for("react.early_return_sentinel");
        const tmpResult = rule(17725);
        const availableActionTypes = tmpResult.getAvailableActionTypes(rule.triggerType);
        let tmp12 = null;
        let mapped;
        let flag;
        let tmp14;
        let tmp15;
        if (0 !== availableActionTypes.length) {
          let tmp16;
          const _Symbol3 = Symbol;
          const TableRowGroup = tmp(6081).TableRowGroup;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(rule(1126).t["18TOiQ"]);
            cResult[11] = stringResult;
            tmp16 = stringResult;
          } else {
            tmp16 = cResult[11];
          }
          mapped = availableActionTypes.map((actionType) => {
            rule = actionType;
            const obj = {
              rule,
              actionType,
              onChangeRule,
              onPress() {
                return closure_2(actionType);
              },
            };
            return closure_1_6(closure_1_10, obj, actionType);
          });
          flag = true;
          tmp14 = tmp16;
          tmp12 = forResult;
          tmp15 = TableRowGroup;
        }
        cResult[3] = tmp4;
        cResult[4] = onChangeRule;
        cResult[5] = rule;
        cResult[6] = tmp15;
        cResult[7] = tmp14;
        cResult[8] = flag;
        cResult[9] = mapped;
        cResult[10] = tmp12;
        tmp9 = tmp12;
        tmp8 = mapped;
        tmp7 = flag;
        tmp6 = tmp14;
        tmp5 = tmp15;
      }
      const fn = function t(arg0) {
        let actions;
        let actions2;
        if (AutomodActionType.FLAG_TO_CHANNEL === arg0) {
          const obj3 = { rule, onChangeRule };
          openAlertChannelPicker(obj3);
        } else if (AutomodActionType.BLOCK_MESSAGE === arg0) {
          let closure_0 = rule;
          let closure_1 = onChangeRule;
          const openLazy2 = ActionSheetActionCreatorsDefault.openLazy;
          const obj5 = {
            triggerType: null,
            action: actions2.find(AutomodActionUtils.isActionBlockMessage),
            onConfirm(arg0) {
              let tmp4;
              const obj = { type: constants.BLOCK_MESSAGE, metadata: { customMessage: tmp4 } };
              tmp4 = undefined;
              const setRuleAction = actionType(closure_2_2[7]).setRuleAction;
              const BLOCK_MESSAGE = constants.BLOCK_MESSAGE;
              actionType(closure_2_2[7]);
              if ("" !== arg0) {
                tmp4 = arg0;
              }
              return closure_1(setRuleAction(closure_0, BLOCK_MESSAGE, obj));
            },
            onRemove() {
              const obj = actionType(closure_2_2[7]);
              return closure_1(obj.setRuleAction(closure_0, constants.BLOCK_MESSAGE, null));
            },
          };
          ({ triggerType: obj2.triggerType, actions: actions2 } = rule);
          ActionSheetActionCreatorsDefault;
          const tmp16 = asyncRequire(17753, dependencyMap.paths);
          openLazy2(tmp16, "AutomodBlockMessage", obj5);
        } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === arg0) {
          closure_0 = rule;
          closure_1 = onChangeRule;
          const openLazy = ActionSheetActionCreatorsDefault.openLazy;
          const obj = {
            triggerType: null,
            action: actions.find(AutomodActionUtils.isActionUserCommunicationDisabled),
            onSelectDuration(dependencyMap) {
              let obj3;
              const obj2 = { type: constants.USER_COMMUNICATION_DISABLED, metadata: obj3 };
              obj3 = { durationSeconds: dependencyMap };
              const obj = actionType(closure_2_2[7]);
              return closure_1(obj.setRuleAction(closure_0, constants.USER_COMMUNICATION_DISABLED, obj2));
            },
            onRemove() {
              const obj = actionType(closure_2_2[7]);
              return closure_1(obj.setRuleAction(closure_0, constants.USER_COMMUNICATION_DISABLED, null));
            },
          };
          ({ triggerType: obj.triggerType, actions } = rule);
          ActionSheetActionCreatorsDefault;
          const tmp8 = asyncRequire(17752, dependencyMap.paths);
          openLazy(tmp8, "AutomodTimeoutDuration", obj);
        } else {
          const QUARANTINE_USER = AutomodActionType.QUARANTINE_USER;
        }
      };
      cResult[0] = onChangeRule;
      cResult[1] = rule;
      cResult[2] = fn;
      tmp4 = fn;
    }
  : (rule) => {
      let intl;
      rule = rule.rule;
      const onChangeRule = rule.onChangeRule;
      let obj = rule(17725);
      const availableActionTypes = obj.getAvailableActionTypes(rule.triggerType);
      let tmp3 = null;
      if (0 !== availableActionTypes.length) {
        let obj2 = {
          title: intl.string(tmp(1126).t["18TOiQ"]),
          hasIcons: true,
          children: availableActionTypes.map((actionType) => {
            rule = actionType;
            let obj = {
              rule,
              actionType,
              onChangeRule,
              onPress() {
                let actions;
                let actions2;
                if (AutomodActionType.FLAG_TO_CHANNEL === closure_0) {
                  let obj3 = { rule, onChangeRule };
                  openAlertChannelPicker(obj3);
                } else if (AutomodActionType.BLOCK_MESSAGE === closure_0) {
                  closure_0 = rule;
                  let closure_1 = onChangeRule;
                  const openLazy2 = ActionSheetActionCreatorsDefault.openLazy;
                  const obj5 = {
                    triggerType: null,
                    action: actions2.find(AutomodActionUtils.isActionBlockMessage),
                    onConfirm(arg0) {
                      let tmp4;
                      const obj = { type: constants.BLOCK_MESSAGE, metadata: { customMessage: tmp4 } };
                      tmp4 = undefined;
                      const setRuleAction = actionType(closure_2_2[7]).setRuleAction;
                      const BLOCK_MESSAGE = constants.BLOCK_MESSAGE;
                      actionType(closure_2_2[7]);
                      if ("" !== arg0) {
                        tmp4 = arg0;
                      }
                      return closure_1(setRuleAction(closure_0, BLOCK_MESSAGE, obj));
                    },
                    onRemove() {
                      const obj = actionType(closure_2_2[7]);
                      return closure_1(obj.setRuleAction(closure_0, constants.BLOCK_MESSAGE, null));
                    },
                  };
                  ({ triggerType: obj2.triggerType, actions: actions2 } = rule);
                  ActionSheetActionCreatorsDefault;
                  const tmp17 = asyncRequire(17753, dependencyMap.paths);
                  openLazy2(tmp17, "AutomodBlockMessage", obj5);
                } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === closure_0) {
                  closure_0 = rule;
                  closure_1 = onChangeRule;
                  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
                  let obj = {
                    triggerType: null,
                    action: actions.find(AutomodActionUtils.isActionUserCommunicationDisabled),
                    onSelectDuration(dependencyMap) {
                      let obj3;
                      const obj2 = { type: constants.USER_COMMUNICATION_DISABLED, metadata: obj3 };
                      obj3 = { durationSeconds: dependencyMap };
                      const obj = actionType(closure_2_2[7]);
                      return closure_1(obj.setRuleAction(closure_0, constants.USER_COMMUNICATION_DISABLED, obj2));
                    },
                    onRemove() {
                      const obj = actionType(closure_2_2[7]);
                      return closure_1(obj.setRuleAction(closure_0, constants.USER_COMMUNICATION_DISABLED, null));
                    },
                  };
                  ({ triggerType: obj.triggerType, actions } = rule);
                  ActionSheetActionCreatorsDefault;
                  const tmp9 = asyncRequire(17752, dependencyMap.paths);
                  openLazy(tmp9, "AutomodTimeoutDuration", obj);
                } else {
                  const QUARANTINE_USER = AutomodActionType.QUARANTINE_USER;
                }
              },
            };
            return closure_1_6(closure_1_10, obj, actionType);
          }),
        };
        const TableRowGroup = tmp(6081).TableRowGroup;
        intl = tmp(1126).intl;
        tmp3 = closure_6(TableRowGroup, obj2);
      }
      return tmp3;
    };
const result = size.fileFinishedImporting("modules/guild_automod/native/components/RuleActionRows.tsx");

export default tmp4;
