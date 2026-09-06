// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsSection.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import GuildRoleSubscriptionSettingUtils from "../../feature_gating/GuildRoleSubscriptionSettingUtils.tsx";
import _modDef17526 from "../../../../../_runtime/metro/17526__.js";
import _modDef17527 from "../../../../../_runtime/metro/17527__.js";
import _modDef17529 from "../../../../../_runtime/metro/17529__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
function HasCreatedListingsSection(arg0) {
  ({ guild: require, pushScreen: importDefault } = arg0);
  let obj = initialize;
  const items = [UserStore];
  let stateFromStores = obj.useStateFromStores(items, () => isGuildOwner(id, UserStore.getCurrentUser()));
  obj = { title: null, hasIcons: true, children: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["KzCF/6"]);
  obj = { label: null, arrow: true, icon: null, onPress: null };
  const intl2 = util.intl;
  obj.label = intl2.string(util.t["/CfKoD"]);
  obj.icon = closure_7(TableRow.TableRow.Icon, { source: _modDef17526 });
  obj.onPress = function onPress() {
    return importDefault(constants2.ROLE_SUBSCRIPTIONS_BASIC);
  };
  const items1 = [closure_7(TableRow.TableRow, obj, "guild-role-subscriptions-basic"), , ,];
  const obj2 = { label: null, arrow: true, icon: null, onPress: null };
  const intl3 = util.intl;
  obj2.label = intl3.string(util.t.pXbGYc);
  const obj1 = { source: _modDef17526 };
  const tmp4 = closure_8;
  obj2.icon = closure_7(TableRow.TableRow.Icon, { source: _modDef17527 });
  obj2.onPress = function onPress() {
    return importDefault(constants2.ROLE_SUBSCRIPTIONS_TIERS);
  };
  items1[1] = closure_7(TableRow.TableRow, obj2, "guild-role-subscriptions-tiers");
  if (stateFromStores) {
    const obj4 = { label: null, arrow: true, icon: null, onPress: null };
    const intl4 = tmp(1114).intl;
    obj4.label = intl4.string(tmp(1114).t.p2Rsdl);
    const obj5 = { source: tmp6(17528) };
    obj4.icon = tmp5(tmp(5605).TableRow.Icon, obj5);
    obj4.onPress = function onPress() {
      return importDefault(constants2.ROLE_SUBSCRIPTIONS_PAYMENTS, { guildId: id.id });
    };
    stateFromStores = tmp5(tmp(5605).TableRow, obj4, "guild-role-subscriptions-payments");
  }
  items1[2] = stateFromStores;
  const obj6 = { label: null, arrow: true, icon: null, onPress: null };
  const intl5 = tmp(1114).intl;
  obj6.label = intl5.string(util.t.C5Dbwn);
  const obj3 = { source: _modDef17527 };
  obj6.icon = closure_7(TableRow.TableRow.Icon, { source: _modDef17529 });
  obj6.onPress = function onPress() {
    return importDefault(constants2.ROLE_SUBSCRIPTIONS_EMOJIS);
  };
  items1[3] = closure_7(TableRow.TableRow, obj6, "guild-role-subscriptions-emojis");
  obj.children = items1;
  return tmp4(TableRowGroup.TableRowGroup, obj);
}
const isGuildOwner = fn(1975).isGuildOwner;
const Constants = fn(1074);
({ GuildFeatures: hasOwnProperty, GuildSettingsSections: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsSection.tsx",
);

export default function GuildSettingsRoleSubscriptionsSection(guild) {
  guild = guild.guild;
  let obj = GuildRoleSubscriptionSettingUtils;
  let tmp = null;
  if (obj.useCanSeeGuildRoleSubscriptionSettings(guild)) {
    const features = guild.features;
    tmp = null;
    if (features.has(constants.ROLE_SUBSCRIPTIONS_ENABLED)) {
      obj = { pushScreen: guild.pushScreen, guild };
      tmp = React5(HasCreatedListingsSection, obj);
    }
  }
  return tmp;
}
