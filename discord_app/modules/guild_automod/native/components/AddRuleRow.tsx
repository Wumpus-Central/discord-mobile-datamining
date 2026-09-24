// === Module 18059: AddRuleRow ===

// Module 18059 (AddRuleRow)
import util from "util" /* 1115 */;
import TableRow from "TableRow" /* 5910 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11556 */;
import AutomodTriggerConfigs from "AutomodTriggerConfigs" /* 18048 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/AddRuleRow.tsx");

export default function AddRuleRow(arg0) {
  ({ triggerType, onPress } = arg0);
  const obj = { icon: jsx(TableRow.TableRow.Icon, { IconComponent: CirclePlusIcon.CirclePlusIcon }), label: null, onPress: null };
  const intl = util.intl;
  const obj3 = { ruleName: null };
  const obj2 = { IconComponent: CirclePlusIcon.CirclePlusIcon };
  obj3.ruleName = AutomodTriggerConfigs.triggerConfigs[triggerType].getDefaultRuleName();
  obj.label = intl.format(util.t.dNjRAf, obj3);
  obj.onPress = onPress;
  return jsx(TableRow.TableRow, { icon: jsx(TableRow.TableRow.Icon, { IconComponent: CirclePlusIcon.CirclePlusIcon }), label: null, onPress: null });
};