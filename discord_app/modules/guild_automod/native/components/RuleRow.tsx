// discord_app/modules/guild_automod/native/components/RuleRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import getActionInfo from "../getActionInfo.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function ActionPill(arg0) {
  ({ actionType, action, triggerType } = arg0);
  const tmp = closure_8();
  const actionInfo = getActionInfo.getActionInfo(actionType, action, triggerType);
  if (null == actionInfo) {
    return null;
  } else {
    const helperText = actionInfo.helperText;
    const obj2 = { style: tmp.actionPill, children: null };
    const obj3 = { size: "xs", color: null };
    ({ headerText, icon } = actionInfo);
    obj3.color = nativeDefault.colors.TEXT_MUTED;
    const items = [hasOwnProperty(icon, obj3)];
    const obj4 = { variant: "text-xs/medium", color: "text-subtle", style: tmp.actionText, children: null };
    const items1 = [headerText, ,];
    let str = null;
    if (null != helperText) {
      str = " ";
    }
    items1[1] = str;
    items1[2] = helperText;
    obj4.children = items1;
    items[1] = timestampProducer(Text_Text.Text, obj4);
    obj2.children = items;
    return timestampProducer(View, obj2);
  }
}
const View = fn(17).View;
const AutomodTriggerType = fn(11327).AutomodTriggerType;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  actions: {
    marginTop: nativeDefault.space.PX_4,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: nativeDefault.space.PX_4,
  },
  actionPill: null,
  actionText: null,
};
let obj3 = {
  marginTop: nativeDefault.space.PX_4,
  flexDirection: "row",
  flexWrap: "wrap",
  gap: nativeDefault.space.PX_4,
};
obj2.actionPill = {
  flexDirection: "row",
  gap: nativeDefault.space.PX_4,
  padding: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.actionText = { textTransform: "lowercase" };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/RuleRow.tsx");

export default function RuleRow(triggerType) {
  triggerType = triggerType.triggerType;
  ({ rule, onPress } = triggerType);
  const tmp = closure_8();
  const token = triggerType(4528).useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  const obj = triggerType(4528);
  const token1 = triggerType(4528).useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_COLOR);
  const obj2 = triggerType(4528);
  const ruleInfo = triggerType(17282).getRuleInfo(triggerType, rule);
  if (null == ruleInfo) {
    return null;
  } else {
    ({ headerText, headerSubtext, icon, descriptionText } = ruleInfo);
    if (null != rule) {
      const ruleActionsInOrder = tmp2(17277).getRuleActionsInOrder(rule);
      let mapped = ruleActionsInOrder.map((actionType) =>
        hasOwnProperty(ActionPill, { actionType: actionType.type, action: actionType, triggerType }, actionType.type),
      );
      const tmp2Result = tmp2(17277);
    } else {
      const availableActionTypes = tmp2(17276).getAvailableActionTypes(triggerType);
      mapped = availableActionTypes.map((actionType) =>
        hasOwnProperty(ActionPill, { actionType, triggerType }, actionType),
      );
      const tmp2Result2 = tmp2(17276);
    }
    let tmp7 = null;
    if (mapped.length > 0) {
      const obj4 = { style: tmp.actions, children: mapped };
      tmp7 = closure_5(View, obj4);
    }
    let tmp10 = tmp7;
    if (null == rule) {
      const obj5 = { children: null };
      const obj6 = {
        variant: "text-xs/medium",
        color: "text-subtle",
        includeFontPadding: true,
        children: descriptionText,
      };
      const items = [closure_5(tmp2(4825).Text, obj6), tmp7];
      obj5.children = items;
      tmp10 = closure_6(closure_7, obj5);
    }
    if (null == rule) {
      const intl2 = tmp2(1115).intl;
      if (triggerType === AutomodTriggerType.KEYWORD) {
        let oRs6mG = tmp2(1115).t.CumH4u;
      } else {
        oRs6mG = tmp2(1115).t.oRs6mG;
      }
      const obj7 = { accessibilityRole: "none", size: "sm", variant: "secondary", text: intl2.string(oRs6mG), onPress };
      closure_5(tmp2(5274).Button, obj7);
    } else {
      let tmp14;
      if (!rule.enabled) {
        const obj8 = { text: null };
        const intl = tmp2(1115).intl;
        obj8.text = intl.string(tmp2(1115).t.Yl1D84);
        tmp14 = closure_5(tmp2(5912).TableRow.TrailingText, obj8);
      }
      let tmp19 = headerText;
      if ("" !== headerSubtext) {
        const obj9 = { variant: token, color: token1, includeFontPadding: true, children: null };
        const items1 = [headerText, " "];
        const obj10 = { variant: "text-sm/normal", color: "interactive-text-default", children: headerSubtext };
        items1[2] = closure_5(tmp2(4825).Text, obj10);
        obj9.children = items1;
        tmp19 = closure_6(tmp2(4825).Text, obj9);
      }
      const obj11 = { label: tmp19, subLabel: tmp10, icon: null, trailing: null, arrow: null, onPress: null };
      const obj12 = {};
      const merged = Object.assign(icon);
      obj11.icon = closure_5(tmp2(5912).TableRow.Icon, obj12);
      obj11.trailing = tmp14;
      obj11.arrow = null != rule;
      obj11.onPress = onPress;
      return closure_5(tmp2(5912).TableRow, obj11);
    }
  }
  const obj3 = triggerType(17282);
}
