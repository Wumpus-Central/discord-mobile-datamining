// discord_app/modules/guild_automod/native/components/RuleExemptionRows.tsx
import intl5 from "../../../../intl/index.native.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Constants from "../../Constants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import size from "../../../../../_runtime/metro/00002__.js";

let role;

let c9;
let metroImportAll;
const AutomodTriggerType = Constants.AutomodTriggerType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/RuleExemptionRows.tsx");

export default function RuleExemptionRows(rule) {
  let Icon;
  let Icon2;
  let intl2;
  let intl3;
  let intl4;
  let items4;
  let obj5;
  let obj7;
  let obj8;
  rule = rule.rule;
  const onChangeRule = rule.onChangeRule;
  const exemptRoles = rule.exemptRoles;
  const exemptChannels = rule.exemptChannels;
  let obj = rule(exemptRoles[8]);
  const items = [GuildRoleStore];
  const items1 = [rule.guildId, exemptRoles];
  const stateFromStores = obj.useStateFromStores(
    items,
    () => {
      let guildId;
      let stringResult;
      const arr = Array.from(exemptRoles);
      const mapped = arr.map((item) => {
        role = role.getRole(guildId.guildId, item);
        let name;
        if (role != null) {
          name = role.name;
        }
        return name;
      });
      const found = mapped.filter((item) => null != item);
      if (0 === found.length) {
        const intl = intl5.intl;
        stringResult = intl.string(intl5.t.PoWNfe);
      } else {
        stringResult = found.join(", ");
      }
      return stringResult;
    },
    items1,
  );
  let obj2 = rule(exemptRoles[8]);
  const items2 = [exemptChannels, UserStore, RelationshipStore];
  const items3 = [exemptChannels];
  const stateFromStores1 = obj2.useStateFromStores(
    items2,
    () => {
      let channel;
      let stringResult;
      const arr = Array.from(exemptChannels);
      const mapped = arr.map((item) => channel.getChannel(item));
      const found = mapped.filter((item) => null != item);
      const mapped1 = found.map((item) => {
        const obj = rule(exemptRoles[9]);
        return obj.computeChannelName(item, closure_1_6, closure_1_5, true);
      });
      if (0 === mapped1.length) {
        const intl = intl5.intl;
        stringResult = intl.string(intl5.t.PoWNfe);
      } else {
        stringResult = mapped1.join(", ");
      }
      return stringResult;
    },
    items3,
  );
  const TableRowGroup = rule(exemptRoles[10]).TableRowGroup;
  let intl = rule(exemptRoles[7]).intl;
  const string = intl.string;
  const t = rule(exemptRoles[7]).t;
  const obj3 = {
    title: string(rule.triggerType === AutomodTriggerType.USER_PROFILE ? t.u5xPPW : t.eq3gjh),
    helperText: intl2.string(rule(exemptRoles[7]).t.GKlYaS),
    hasIcons: true,
    children: items4,
  };
  intl2 = tmp2(tmp3[7]).intl;
  const obj4 = {
    icon: closure_8(Icon, obj5),
    label: intl3.string(rule(exemptRoles[7]).t["LPJmL/"]),
    trailing: closure_8(rule(exemptRoles[11]).TableRow.TrailingText, { text: stateFromStores }),
    arrow: true,
    onPress() {
      let obj = ActionSheetActionCreatorsDefault;
      const obj2 = {
        guildId: rule.guildId,
        exemptRoles,
        onSave(exemptRoles) {
          const obj = { exemptRoles };
          const merged = Object.assign(rule);
          return onChangeRule(obj);
        },
      };
      obj.openLazy(asyncRequire(17755, dependencyMap.paths), "AutomodExemptRoles", obj2);
    },
  };
  const TableRow = tmp2(tmp3[11]).TableRow;
  obj5 = { IconComponent: rule(exemptRoles[12]).ShieldUserIcon };
  Icon = tmp2(tmp3[11]).TableRow.Icon;
  intl3 = tmp2(tmp3[7]).intl;
  items4 = [closure_8(TableRow, obj4)];
  let tmp7Result = !tmp;
  if (tmp7Result) {
    const obj6 = {
      icon: closure_8(Icon2, obj7),
      label: intl4.string(rule(exemptRoles[7]).t.OGiMXJ),
      trailing: closure_8(rule(exemptRoles[11]).TableRow.TrailingText, obj8),
      arrow: true,
      onPress() {
        let obj = ActionSheetActionCreatorsDefault;
        const obj2 = {
          guildId: rule.guildId,
          exemptChannels,
          onSave(exemptChannels) {
            const obj = { exemptChannels };
            const merged = Object.assign(rule);
            return onChangeRule(obj);
          },
        };
        obj.openLazy(asyncRequire(17757, dependencyMap.paths), "AutomodExemptChannels", obj2);
      },
    };
    const TableRow2 = tmp2(tmp3[11]).TableRow;
    obj7 = { IconComponent: rule(exemptRoles[16]).ChannelListIcon };
    Icon2 = tmp2(tmp3[11]).TableRow.Icon;
    intl4 = tmp2(tmp3[7]).intl;
    obj8 = { text: stateFromStores1 };
    tmp7Result = closure_8(TableRow2, obj6);
  }
  items4[1] = tmp7Result;
  return closure_9(TableRowGroup, obj3);
}
