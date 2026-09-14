// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsSection.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import _modDef17641 from "../../../../../_runtime/metro/17641__.js";
import _modDef17642 from "../../../../../_runtime/metro/17642__.js";
import _modDef17643 from "../../../../../_runtime/metro/17643__.js";
import _modDef17644 from "../../../../../_runtime/metro/17644__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

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
  obj3.icon = closure_7(TableRow.TableRow.Icon, { source: _modDef17641 });
  obj3.onPress = function onPress() {
    return importDefault(constants2.ROLE_SUBSCRIPTIONS_BASIC);
  };
  const items1 = [closure_7(TableRow.TableRow, obj3, "guild-role-subscriptions-basic"), , ,];
  const obj5 = { label: null, arrow: true, icon: null, onPress: null };
  const intl3 = util.intl;
  obj5.label = intl3.string(util.t.pXbGYc);
  const obj4 = { source: _modDef17641 };
  obj5.icon = closure_7(TableRow.TableRow.Icon, { source: _modDef17642 });
  obj5.onPress = function onPress() {
    return importDefault(constants2.ROLE_SUBSCRIPTIONS_TIERS);
  };
  items1[1] = closure_7(TableRow.TableRow, obj5, "guild-role-subscriptions-tiers");
  if (stateFromStores) {
    const obj7 = { label: null, arrow: true, icon: null, onPress: null };
    const intl4 = util.intl;
    obj7.label = intl4.string(util.t.p2Rsdl);
    const obj8 = { source: _modDef17643 };
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
  const obj6 = { source: _modDef17642 };
  obj9.icon = closure_7(TableRow.TableRow.Icon, { source: _modDef17644 });
  obj9.onPress = function onPress() {
    return importDefault(constants2.ROLE_SUBSCRIPTIONS_EMOJIS);
  };
  items1[3] = closure_7(TableRow.TableRow, obj9, "guild-role-subscriptions-emojis");
  obj2.children = items1;
  return closure_8(TableRowGroup.TableRowGroup, obj2);
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
}
