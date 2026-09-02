// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsSection.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import TableRowInner from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroupTitle from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import computeGuildRoleSubscriptionSettingsVisibility from "../../feature_gating/GuildRoleSubscriptionSettingUtils.tsx";
import registerAssetDefault from "../../../../../_runtime/17346_registerAsset.js";
import registerAssetDefault2 from "../../../../../_runtime/17347_registerAsset.js";
import registerAssetDefault3 from "../../../../../_runtime/17349_registerAsset.js";
import { isGuildOwner } from "../../../../records/GuildRecord.tsx";
import closure_4 from "../../../../stores/UserStore.tsx";
import ME from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
function HasCreatedListingsSection(arg0) {
  ({ guild: require, pushScreen: importDefault } = arg0);
  let obj = initialize;
  const items = [closure_4];
  let stateFromStores = obj.useStateFromStores(items, () => closure_1_3(closure_0, closure_1_4.getCurrentUser()));
  obj = { title: null, hasIcons: true, children: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["KzCF/6"]);
  obj = { label: null, arrow: true, icon: null, onPress: null };
  const intl2 = getSystemLocale.intl;
  obj[0] = intl2.string(getSystemLocale.t["/CfKoD"]);
  obj[2] = callback(TableRowInner.TableRow.Icon, { source: registerAssetDefault });
  obj[3] = function onPress() {
    return callback(closure_1_6.ROLE_SUBSCRIPTIONS_BASIC);
  };
  const items1 = [callback(TableRowInner.TableRow, obj, "guild-role-subscriptions-basic"), , ,];
  const obj2 = { label: null, arrow: true, icon: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj2[0] = intl3.string(getSystemLocale.t.pXbGYc);
  obj1 = { source: registerAssetDefault };
  const tmp4 = closure_8;
  obj2[2] = callback(TableRowInner.TableRow.Icon, { source: registerAssetDefault2 });
  obj2[3] = function onPress() {
    return callback(closure_1_6.ROLE_SUBSCRIPTIONS_TIERS);
  };
  items1[1] = callback(TableRowInner.TableRow, obj2, "guild-role-subscriptions-tiers");
  if (stateFromStores) {
    const obj4 = { label: null, arrow: true, icon: null, onPress: null };
    const intl4 = tmp(1233).intl;
    obj4[0] = intl4.string(tmp(1233).t.p2Rsdl);
    const obj5 = { source: null };
    obj5[0] = tmp6(17348);
    obj4[2] = tmp5(tmp(5607).TableRow.Icon, obj5);
    obj4[3] = function onPress() {
      return callback(closure_1_6.ROLE_SUBSCRIPTIONS_PAYMENTS, { guildId: id.id });
    };
    stateFromStores = tmp5(tmp(5607).TableRow, obj4, "guild-role-subscriptions-payments");
  }
  items1[2] = stateFromStores;
  const obj6 = { label: null, arrow: true, icon: null, onPress: null };
  const intl5 = tmp(1233).intl;
  obj6[0] = intl5.string(getSystemLocale.t.C5Dbwn);
  const obj3 = { source: registerAssetDefault2 };
  obj6[2] = callback(TableRowInner.TableRow.Icon, { source: registerAssetDefault3 });
  obj6[3] = function onPress() {
    return callback(closure_1_6.ROLE_SUBSCRIPTIONS_EMOJIS);
  };
  items1[3] = callback(TableRowInner.TableRow, obj6, "guild-role-subscriptions-emojis");
  obj[2] = items1;
  return tmp4(TableRowGroupTitle.TableRowGroup, obj);
}
noopAll;
({ GuildFeatures: c5, GuildSettingsSections: closure_6 } = ME);
({ jsx: error, jsxs: closure_8 } = jsxProd);
const result = require("set").fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsSection.tsx",
);

export default function GuildSettingsRoleSubscriptionsSection(guild) {
  guild = guild.guild;
  let obj = computeGuildRoleSubscriptionSettingsVisibility;
  let tmp = null;
  if (obj.useCanSeeGuildRoleSubscriptionSettings(guild)) {
    const features = guild.features;
    tmp = null;
    if (features.has(constants.ROLE_SUBSCRIPTIONS_ENABLED)) {
      obj = { pushScreen: null, guild: null };
      obj[0] = guild.pushScreen;
      obj[1] = guild;
      tmp = callback(HasCreatedListingsSection, obj);
    }
  }
  return tmp;
}
