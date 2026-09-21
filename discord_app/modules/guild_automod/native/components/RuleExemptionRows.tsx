// === Module 17971: RuleExemptionRows ===

// Module 17971 (RuleExemptionRows)
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import GuildRoleStore from "GuildRoleStore" /* 2099 */;
import RelationshipStore from "RelationshipStore" /* 4405 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const AutomodTriggerType = fn(12117).AutomodTriggerType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/RuleExemptionRows.tsx");

export default function RuleExemptionRows(rule) {
  rule = rule.rule;
  const onChangeRule = rule.onChangeRule;
  const exemptRoles = rule.exemptRoles;
  const exemptChannels = rule.exemptChannels;
  const items = [GuildRoleStore];
  const items1 = [rule.guildId, exemptRoles];
  const stateFromStores = rule(exemptRoles[8]).useStateFromStores(items, () => {
    const mapped = Array.from(exemptRoles).map((item) => {
      role = role.getRole(guildId.guildId, item);
      let name;
      if (role != null) {
        name = role.name;
      }
      return name;
    });
    const found = mapped.filter((item) => null != item);
    if (0 === found.length) {
      const intl = util.intl;
      let stringResult = intl.string(util.t.PoWNfe);
    } else {
      stringResult = found.join(", ");
    }
    return stringResult;
  }, items1);
  let obj = rule(exemptRoles[8]);
  const items2 = [exemptChannels, UserStore, RelationshipStore];
  const items3 = [exemptChannels];
  const stateFromStores1 = rule(exemptRoles[8]).useStateFromStores(items2, () => {
    const mapped = Array.from(exemptChannels).map((item) => channel.getChannel(item));
    const found = mapped.filter((item) => null != item);
    const mapped1 = found.map((item) => rule(exemptRoles[9]).computeChannelName(item, closure_1_6, closure_1_5, true));
    if (0 === mapped1.length) {
      const intl = util.intl;
      let stringResult = intl.string(util.t.PoWNfe);
    } else {
      stringResult = mapped1.join(", ");
    }
    return stringResult;
  }, items3);
  let intl = rule(exemptRoles[7]).intl;
  const t = rule(exemptRoles[7]).t;
  const obj3 = { title: intl.string(rule.triggerType === AutomodTriggerType.USER_PROFILE ? t.u5xPPW : t.eq3gjh), helperText: null, hasIcons: true, children: null };
  const intl2 = tmp2(tmp3[7]).intl;
  obj3.helperText = intl2.string(rule(exemptRoles[7]).t.GKlYaS);
  const obj4 = { icon: null, label: null, trailing: null, arrow: true, onPress: null };
  const obj2 = rule(exemptRoles[8]);
  obj4.icon = closure_8(rule(exemptRoles[11]).TableRow.Icon, { IconComponent: rule(exemptRoles[12]).ShieldUserIcon });
  const intl3 = tmp2(tmp3[7]).intl;
  obj4.label = intl3.string(rule(exemptRoles[7]).t["LPJmL/"]);
  obj4.trailing = closure_8(rule(exemptRoles[11]).TableRow.TrailingText, { text: stateFromStores });
  obj4.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17972, dependencyMap.paths), "AutomodExemptRoles", {
      guildId: rule.guildId,
      exemptRoles,
      onSave(exemptRoles) {
        const obj = {};
        const merged = Object.assign(rule);
        obj.exemptRoles = exemptRoles;
        return onChangeRule(obj);
      }
    });
  };
  const items4 = [closure_8(rule(exemptRoles[11]).TableRow, obj4), ];
  let tmp7Result = !tmp;
  if (rule.triggerType !== AutomodTriggerType.USER_PROFILE) {
    const obj6 = { icon: null, label: null, trailing: null, arrow: true, onPress: null };
    const obj7 = { IconComponent: tmp2(tmp3[16]).ChannelListIcon };
    obj6.icon = closure_8(tmp2(tmp3[11]).TableRow.Icon, obj7);
    const intl4 = tmp2(tmp3[7]).intl;
    obj6.label = intl4.string(tmp2(tmp3[7]).t.OGiMXJ);
    const obj8 = { text: stateFromStores1 };
    obj6.trailing = closure_8(tmp2(tmp3[11]).TableRow.TrailingText, obj8);
    obj6.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17974, dependencyMap.paths), "AutomodExemptChannels", {
        guildId: rule.guildId,
        exemptChannels,
        onSave(exemptChannels) {
          const obj = {};
          const merged = Object.assign(rule);
          obj.exemptChannels = exemptChannels;
          return onChangeRule(obj);
        }
      });
    };
    tmp7Result = closure_8(tmp2(tmp3[11]).TableRow, obj6);
  }
  items4[1] = tmp7Result;
  obj3.children = items4;
  return closure_9(rule(exemptRoles[10]).TableRowGroup, obj3);
};