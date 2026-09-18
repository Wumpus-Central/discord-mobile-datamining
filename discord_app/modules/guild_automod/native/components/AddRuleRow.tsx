// discord_app/modules/guild_automod/native/components/AddRuleRow.tsx
import util from "../../../../intl/index.native.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import CirclePlusIcon from "../../../../design/components/Icon/native/redesign/generated/CirclePlusIcon.tsx";
import AutomodTriggerConfigs from "../../AutomodTriggerConfigs.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/AddRuleRow.tsx");

export default function AddRuleRow(arg0) {
  ({ triggerType, onPress } = arg0);
  const obj = {
    icon: jsx(TableRow.TableRow.Icon, { IconComponent: CirclePlusIcon.CirclePlusIcon }),
    label: null,
    onPress: null,
  };
  const intl = util.intl;
  const obj3 = { ruleName: null };
  const obj2 = { IconComponent: CirclePlusIcon.CirclePlusIcon };
  obj3.ruleName = AutomodTriggerConfigs.triggerConfigs[triggerType].getDefaultRuleName();
  obj.label = intl.format(util.t.dNjRAf, obj3);
  obj.onPress = onPress;
  return jsx(TableRow.TableRow, {
    icon: jsx(TableRow.TableRow.Icon, { IconComponent: CirclePlusIcon.CirclePlusIcon }),
    label: null,
    onPress: null,
  });
}
