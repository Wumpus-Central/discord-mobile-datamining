// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsSection.tsx
import "noop";
import { isGuildOwner } from "GuildNSFWContentLevel";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import jsxProd from "jsxProd";

let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function HasCreatedListingsSection(arg0) {
  let importDefault;
  let require;
  ({ guild: require, pushScreen: importDefault } = arg0);
  let obj = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  const items = [mergeGuildAvatar];
  let stateFromStores = obj.useStateFromStores(items, () => outer1_3(closure_0, outer1_4.getCurrentUser()));
  obj = { title: null, hasIcons: true, children: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["KzCF/6"]);
  obj = { label: null, arrow: true, icon: null, onPress: null };
  const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["/CfKoD"]);
  const obj1 = { source: null };
  obj1[0] = require("../../../../../_runtime/16481_registerAsset.js");
  obj[2] = callback(require("../../../../design/components/TableRow/native/TableRow.native.tsx") /* TableRowInner */.TableRow.Icon, obj1);
  obj[3] = function onPress() {
    return callback(outer1_6.ROLE_SUBSCRIPTIONS_BASIC);
  };
  const items1 = [callback(require("../../../../design/components/TableRow/native/TableRow.native.tsx") /* TableRowInner */.TableRow, obj, "guild-role-subscriptions-basic"), , , ];
  const obj2 = { label: null, arrow: true, icon: null, onPress: null };
  const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj2[0] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.pXbGYc);
  const obj3 = { source: null };
  obj3[0] = require("../../../../../_runtime/16482_registerAsset.js");
  obj2[2] = callback(require("../../../../design/components/TableRow/native/TableRow.native.tsx") /* TableRowInner */.TableRow.Icon, obj3);
  obj2[3] = function onPress() {
    return callback(outer1_6.ROLE_SUBSCRIPTIONS_TIERS);
  };
  items1[1] = callback(require("../../../../design/components/TableRow/native/TableRow.native.tsx") /* TableRowInner */.TableRow, obj2, "guild-role-subscriptions-tiers");
  if (stateFromStores) {
    const obj4 = { label: null, arrow: true, icon: null, onPress: null };
    const intl4 = tmp(1236).intl;
    obj4[0] = intl4.string(tmp(1236).t.p2Rsdl);
    const obj5 = { source: null };
    obj5[0] = tmp6(16483);
    obj4[2] = tmp5(tmp(5315).TableRow.Icon, obj5);
    obj4[3] = function onPress() {
      return callback(outer1_6.ROLE_SUBSCRIPTIONS_PAYMENTS, { guildId: id.id });
    };
    stateFromStores = tmp5(tmp(5315).TableRow, obj4, "guild-role-subscriptions-payments");
  }
  items1[2] = stateFromStores;
  const obj6 = { label: null, arrow: true, icon: null, onPress: null };
  const intl5 = tmp(1236).intl;
  obj6[0] = intl5.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.C5Dbwn);
  const obj7 = { source: null };
  obj7[0] = require("../../../../../_runtime/16484_registerAsset.js");
  obj6[2] = callback(require("../../../../design/components/TableRow/native/TableRow.native.tsx") /* TableRowInner */.TableRow.Icon, obj7);
  obj6[3] = function onPress() {
    return callback(outer1_6.ROLE_SUBSCRIPTIONS_EMOJIS);
  };
  items1[3] = callback(require("../../../../design/components/TableRow/native/TableRow.native.tsx") /* TableRowInner */.TableRow, obj6, "guild-role-subscriptions-emojis");
  obj[2] = items1;
  return closure_8(require("../../../../design/components/TableRow/native/TableRowGroup.native.tsx") /* TableRowGroupTitle */.TableRowGroup, obj);
}
({ GuildFeatures: c5, GuildSettingsSections: closure_6 } = ME);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsSection.tsx");

export default function GuildSettingsRoleSubscriptionsSection(guild) {
  guild = guild.guild;
  let obj = require("../../feature_gating/GuildRoleSubscriptionSettingUtils.tsx") /* computeGuildRoleSubscriptionSettingsVisibility */;
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
};