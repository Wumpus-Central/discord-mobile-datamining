// === Module 17300: RuleActionRows ===

// Module 17300 (RuleActionRows)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4825 */;
import Stack_Stack from "Stack/Stack" /* 5272 */;
import TableRow from "TableRow" /* 5912 */;
import FormCheckbox from "FormCheckbox" /* 5924 */;
import getActionInfo from "getActionInfo" /* 17280 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2044 */;

require = fn;
function RuleActionRow(onPress) {
  ({ rule, actionType } = onPress);
  const actions = rule.actions;
  const found = actions.find((type) => type.type === actionType);
  const tmp = closure_8();
  const actionInfo = getActionInfo.getActionInfo(actionType, found, rule.triggerType);
  if (null == actionInfo) {
    return null;
  } else {
    const obj2 = { icon: null, label: null, subLabel: null, trailing: null, accessibilityValue: null, disabled: null, onPress: null, arrow: true };
    const obj3 = { IconComponent: actionInfo.icon };
    obj2.icon = timestampProducer(TableRow.TableRow.Icon, obj3);
    obj2.label = actionInfo.headerText;
    const obj4 = { spacing: nativeDefault.space.PX_4, style: tmp.subLabel, children: null };
    const items = [actionInfo.descriptionText, ];
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
}
let closure_4 = fn(4464).GUILD_SELECTABLE_CHANNELS_KEY;
const AutomodActionType = fn(11327).AutomodActionType;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { subLabel: { marginTop: nativeDefault.space.PX_4 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/RuleActionRows.tsx");

export default function RuleActionRows(rule) {
  rule = rule.rule;
  const onChangeRule = rule.onChangeRule;
  const availableActionTypes = rule(17276).getAvailableActionTypes(rule.triggerType);
  let tmp3 = null;
  if (0 !== availableActionTypes.length) {
    let obj2 = { title: null, hasIcons: true, children: null };
    let intl = tmp(1115).intl;
    obj2.title = intl.string(tmp(1115).t["18TOiQ"]);
    obj2.children = availableActionTypes.map((actionType) => {
      rule = actionType;
      return closure_1_6(RuleActionRow, {
        rule,
        actionType,
        onChangeRule,
        onPress() {
          if (constants.FLAG_TO_CHANNEL === actionType) {
            actionType = rule;
            closure_1 = onChangeRule;
            const actions1 = rule.actions;
            const found = actions1.find(actionType(closure_1_2[7]).isActionFlagToChannel);
            let channelId;
            if (found != null) {
              channelId = found.metadata.channelId;
            }
            let obj5 = { guildId: rule.guildId, channelType, selectedChannel: null, filterFn: null, noChannelOptionLabel: null, onSelect: null };
            channel = null;
            if (null != channelId) {
              channel = channel.getChannel(channelId);
            }
            if (channel == null) {
              channel = null;
            }
            obj5.selectedChannel = channel;
            obj5.filterFn = function filterFn(channel) {
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
            const intl = tmp19(closure_1_2[9]).intl;
            obj5.noChannelOptionLabel = intl.string(actionType(closure_1_2[9]).t.PoWNfe);
            obj5.onSelect = function onSelect(id) {
              if (null != id) {
                const _Set = Set;
                const set = new Set(closure_0.exemptChannels);
                set.add(id.id);
                const obj2 = {};
                const obj3 = { type: constants.FLAG_TO_CHANNEL, metadata: null };
                const obj5 = { channelId: id.id };
                obj3.metadata = obj5;
                const merged = Object.assign(closure_0(closure_2_2[7]).setRuleAction(closure_0, constants.FLAG_TO_CHANNEL, obj3));
                obj2.exemptChannels = set;
                closure_1(obj2);
                const obj4 = closure_0(closure_2_2[7]);
              } else {
                closure_1(closure_0(closure_2_2[7]).setRuleAction(closure_0, constants.FLAG_TO_CHANNEL, null));
                const obj = closure_0(closure_2_2[7]);
              }
            };
            closure_1_1(closure_1_2[8])(obj5);
            const tmp25 = closure_1_1(closure_1_2[8]);
          } else if (constants.BLOCK_MESSAGE === tmp) {
            actionType = rule;
            closure_1 = onChangeRule;
            const obj8 = { triggerType: null, action: null, onConfirm: null, onRemove: null };
            ({ triggerType: obj4.triggerType, actions: actions2 } = rule);
            let obj3 = closure_1_1(closure_1_2[10]);
            obj8.action = actions2.find(actionType(closure_1_2[7]).isActionBlockMessage);
            obj8.onConfirm = function onConfirm(arg0) {
              const obj2 = { type: constants.BLOCK_MESSAGE, metadata: null };
              let tmp3;
              if ("" !== arg0) {
                tmp3 = arg0;
              }
              obj2.metadata = { customMessage: tmp3 };
              return closure_1(closure_0(closure_2_2[7]).setRuleAction(closure_0, constants.BLOCK_MESSAGE, obj2));
            };
            obj8.onRemove = function onRemove() {
              return closure_1(closure_0(closure_2_2[7]).setRuleAction(closure_0, constants.BLOCK_MESSAGE, null));
            };
            obj3.openLazy(actionType(closure_1_2[12])(closure_1_2[13], closure_1_2.paths), "AutomodBlockMessage", obj8);
            const tmp15 = actionType(closure_1_2[12])(closure_1_2[13], closure_1_2.paths);
          } else if (constants.USER_COMMUNICATION_DISABLED === tmp) {
            actionType = rule;
            closure_1 = onChangeRule;
            const obj9 = { triggerType: null, action: null, onSelectDuration: null, onRemove: null };
            ({ triggerType: obj2.triggerType, actions } = rule);
            let obj = closure_1_1(closure_1_2[10]);
            obj9.action = actions.find(actionType(closure_1_2[7]).isActionUserCommunicationDisabled);
            obj9.onSelectDuration = function onSelectDuration(durationSeconds) {
              const obj2 = { type: constants.USER_COMMUNICATION_DISABLED, metadata: { durationSeconds } };
              return closure_1(closure_0(closure_2_2[7]).setRuleAction(closure_0, constants.USER_COMMUNICATION_DISABLED, obj2));
            };
            obj9.onRemove = function onRemove() {
              return closure_1(closure_0(closure_2_2[7]).setRuleAction(closure_0, constants.USER_COMMUNICATION_DISABLED, null));
            };
            obj.openLazy(actionType(closure_1_2[12])(closure_1_2[11], closure_1_2.paths), "AutomodTimeoutDuration", obj9);
            const tmp8 = actionType(closure_1_2[12])(closure_1_2[11], closure_1_2.paths);
          } else {
            const QUARANTINE_USER = constants.QUARANTINE_USER;
          }
        }
      }, actionType);
    });
    tmp3 = closure_6(tmp(5994).TableRowGroup, obj2);
  }
  return tmp3;
};