// === Module 17929: GuildSettingsRoleSubscriptionsSection ===

// Module 17929 (GuildSettingsRoleSubscriptionsSection)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import TableRow from "TableRow" /* 5822 */;
import TableRowGroup from "TableRowGroup" /* 5904 */;
import _modDef17930 from "module_17930" /* 17930 */;
import _modDef17931 from "module_17931" /* 17931 */;
import _modDef17932 from "module_17932" /* 17932 */;
import _modDef17933 from "module_17933" /* 17933 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function HasCreatedListingsSection(arg0) {
  ({ guild: require, pushScreen: importDefault } = arg0);
  const items = [UserStore];
  let stateFromStores = initialize.useStateFromStores(items, () => isGuildOwner(id, UserStore.getCurrentUser()));
  const obj2 = { title: null, hasIcons: true, children: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t["KzCF/6"]);
  const obj3 = { label: null, arrow: true, icon: null, onPress: null };
  const intl2 = util.intl;
  obj3.label = intl2.string(util.t["/CfKoD"]);
  obj3.icon = closure_7(TableRow.TableRow.Icon, { source: _modDef17930 });
  obj3.onPress = function onPress() {
    return importDefault(constants2.ROLE_SUBSCRIPTIONS_BASIC);
  };
  const items1 = [closure_7(TableRow.TableRow, obj3, "guild-role-subscriptions-basic"), , , ];
  const obj5 = { label: null, arrow: true, icon: null, onPress: null };
  const intl3 = util.intl;
  obj5.label = intl3.string(util.t.pXbGYc);
  const obj4 = { source: _modDef17930 };
  obj5.icon = closure_7(TableRow.TableRow.Icon, { source: _modDef17931 });
  obj5.onPress = function onPress() {
    return importDefault(constants2.ROLE_SUBSCRIPTIONS_TIERS);
  };
  items1[1] = closure_7(TableRow.TableRow, obj5, "guild-role-subscriptions-tiers");
  if (stateFromStores) {
    const obj7 = { label: null, arrow: true, icon: null, onPress: null };
    const intl4 = util.intl;
    obj7.label = intl4.string(util.t.p2Rsdl);
    const obj8 = { source: _modDef17932 };
    obj7.icon = closure_7(TableRow.TableRow.Icon, obj8);
    obj7.onPress = function onPress() {
      return importDefault(constants2.ROLE_SUBSCRIPTIONS_PAYMENTS, { guildId: id.id });
    };
    stateFromStores = closure_7(TableRow.TableRow, obj7, "guild-role-subscriptions-payments");
  }
  items1[2] = stateFromStores;
  const obj9 = { label: null, arrow: true, icon: null, onPress: null };
  const intl5 = util.intl;
  obj9.label = intl5.string(util.t.C5Dbwn);
  const obj6 = { source: _modDef17931 };
  obj9.icon = closure_7(TableRow.TableRow.Icon, { source: _modDef17933 });
  obj9.onPress = function onPress() {
    return importDefault(constants2.ROLE_SUBSCRIPTIONS_EMOJIS);
  };
  items1[3] = closure_7(TableRow.TableRow, obj9, "guild-role-subscriptions-emojis");
  obj2.children = items1;
  return closure_8(TableRowGroup.TableRowGroup, obj2);
}
const isGuildOwner = fn(2059).isGuildOwner;
const Constants = fn(1074);
({ GuildFeatures: hasOwnProperty, GuildSettingsSections: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsSection.tsx");

export default function GuildSettingsRoleSubscriptionsSection(guild) {
  guild = guild.guild;
  let tmp = null;
  if (obj.useCanSeeGuildRoleSubscriptionSettings(guild)) {
    const features = guild.features;
    tmp = null;
    if (features.has(constants.ROLE_SUBSCRIPTIONS_ENABLED)) {
      const obj2 = { pushScreen: guild.pushScreen, guild };
      tmp = React5(HasCreatedListingsSection, obj2);
    }
  }
  return tmp;
};