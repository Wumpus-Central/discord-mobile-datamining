// === Module 18156: GuildSettingsRoleSubscriptionsSection ===

// Module 18156 (GuildSettingsRoleSubscriptionsSection)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import TableRow from "TableRow" /* 6186 */;
import TableRowGroup from "TableRowGroup" /* 6269 */;
import _modDef18157 from "module_18157" /* 18157 */;
import _modDef18158 from "module_18158" /* 18158 */;
import _modDef18159 from "module_18159" /* 18159 */;
import _modDef18160 from "module_18160" /* 18160 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const isGuildOwner = fn(2082).isGuildOwner;
const Constants = fn(1085);
({ GuildFeatures: hasOwnProperty, GuildSettingsSections: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function HasCreatedListingsSection(guild) {
  const cResult = guild(576).c(25);
  guild = guild.guild;
  const pushScreen = guild.pushScreen;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild) {
    const fn = function c() {
      return isGuildOwner(guild, UserStore.getCurrentUser());
    };
    cResult[1] = guild;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = guild(576);
  const stateFromStores = guild(504).useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["KzCF/6"]);
    cResult[3] = stringResult;
    let tmp8 = stringResult;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t["/CfKoD"]);
    cResult[4] = stringResult1;
    let tmp10 = stringResult1;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { source: pushScreen(18157) };
    const tmp15 = closure_7(tmp(6186).TableRow.Icon, obj2);
    cResult[5] = tmp15;
    let tmp12 = tmp15;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] !== pushScreen) {
    const obj3 = {
      label: tmp10,
      arrow: true,
      icon: tmp12,
      onPress() {
          return pushScreen(constants2.ROLE_SUBSCRIPTIONS_BASIC);
        }
    };
    const tmp18 = closure_7(tmp(6186).TableRow, obj3, "guild-role-subscriptions-basic");
    cResult[6] = pushScreen;
    cResult[7] = tmp18;
    let tmp16 = tmp18;
  } else {
    tmp16 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult2 = intl3.string(tmp(1126).t.pXbGYc);
    cResult[8] = stringResult2;
    let tmp19 = stringResult2;
  } else {
    tmp19 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { source: pushScreen(18158) };
    const tmp24 = closure_7(tmp(6186).TableRow.Icon, obj4);
    cResult[9] = tmp24;
    let tmp21 = tmp24;
  } else {
    tmp21 = cResult[9];
  }
  if (cResult[10] !== pushScreen) {
    const obj5 = {
      label: tmp19,
      arrow: true,
      icon: tmp21,
      onPress() {
          return pushScreen(constants2.ROLE_SUBSCRIPTIONS_TIERS);
        }
    };
    const tmp27 = closure_7(tmp(6186).TableRow, obj5, "guild-role-subscriptions-tiers");
    cResult[10] = pushScreen;
    cResult[11] = tmp27;
    let tmp25 = tmp27;
  } else {
    tmp25 = cResult[11];
  }
  if (cResult[12] === guild) {
    if (cResult[13] === pushScreen) {
      if (cResult[14] === stateFromStores) {
        let tmp28 = cResult[15];
      }
      const _Symbol = Symbol;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        const intl5 = tmp(1126).intl;
        const stringResult3 = intl5.string(tmp(1126).t.C5Dbwn);
        cResult[16] = stringResult3;
        let tmp32 = stringResult3;
      } else {
        tmp32 = cResult[16];
      }
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { source: pushScreen(18160) };
        const tmp37 = closure_7(tmp(6186).TableRow.Icon, obj6);
        cResult[17] = tmp37;
        let tmp34 = tmp37;
      } else {
        tmp34 = cResult[17];
      }
      if (cResult[18] !== pushScreen) {
        const obj7 = {
          label: tmp32,
          arrow: true,
          icon: tmp34,
          onPress() {
                  return pushScreen(constants2.ROLE_SUBSCRIPTIONS_EMOJIS);
                }
        };
        const tmp40 = closure_7(tmp(6186).TableRow, obj7, "guild-role-subscriptions-emojis");
        cResult[18] = pushScreen;
        cResult[19] = tmp40;
        let tmp38 = tmp40;
      } else {
        tmp38 = cResult[19];
      }
      if (cResult[20] === tmp28) {
        if (cResult[21] === tmp38) {
          if (cResult[22] === tmp16) {
            if (cResult[23] === tmp25) {
              let tmp41 = cResult[24];
            }
            return tmp41;
          }
        }
      }
      const obj8 = { title: tmp8, hasIcons: true, children: null };
      const items1 = [tmp16, tmp25, tmp28, tmp38];
      obj8.children = items1;
      const tmp43 = closure_8(tmp(6269).TableRowGroup, obj8);
      cResult[20] = tmp28;
      cResult[21] = tmp38;
      cResult[22] = tmp16;
      cResult[23] = tmp25;
      cResult[24] = tmp43;
      tmp41 = tmp43;
    }
  }
  let tmp29 = stateFromStores;
  if (stateFromStores) {
    const obj9 = { label: null, arrow: true, icon: null, onPress: null };
    const intl4 = tmp(1126).intl;
    obj9.label = intl4.string(tmp(1126).t.p2Rsdl);
    const obj10 = { source: pushScreen(18159) };
    obj9.icon = closure_7(tmp(6186).TableRow.Icon, obj10);
    obj9.onPress = function onPress() {
      return pushScreen(constants2.ROLE_SUBSCRIPTIONS_PAYMENTS, { guildId: guild.id });
    };
    tmp29 = closure_7(tmp(6186).TableRow, obj9, "guild-role-subscriptions-payments");
  }
  cResult[12] = guild;
  cResult[13] = pushScreen;
  cResult[14] = stateFromStores;
  cResult[15] = tmp29;
  tmp28 = tmp29;
  const tmpResult = guild(504);
}) : (function HasCreatedListingsSection(arg0) {
  ({ guild: require, pushScreen: importDefault } = arg0);
  const items = [UserStore];
  let stateFromStores = initialize.useStateFromStores(items, () => isGuildOwner(id, UserStore.getCurrentUser()));
  const obj2 = { title: null, hasIcons: true, children: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t["KzCF/6"]);
  const obj3 = { label: null, arrow: true, icon: null, onPress: null };
  const intl2 = util.intl;
  obj3.label = intl2.string(util.t["/CfKoD"]);
  obj3.icon = closure_7(TableRow.TableRow.Icon, { source: _modDef18157 });
  obj3.onPress = function onPress() {
    return importDefault(constants2.ROLE_SUBSCRIPTIONS_BASIC);
  };
  const items1 = [closure_7(TableRow.TableRow, obj3, "guild-role-subscriptions-basic"), , , ];
  const obj5 = { label: null, arrow: true, icon: null, onPress: null };
  const intl3 = util.intl;
  obj5.label = intl3.string(util.t.pXbGYc);
  const obj4 = { source: _modDef18157 };
  obj5.icon = closure_7(TableRow.TableRow.Icon, { source: _modDef18158 });
  obj5.onPress = function onPress() {
    return importDefault(constants2.ROLE_SUBSCRIPTIONS_TIERS);
  };
  items1[1] = closure_7(TableRow.TableRow, obj5, "guild-role-subscriptions-tiers");
  if (stateFromStores) {
    const obj7 = { label: null, arrow: true, icon: null, onPress: null };
    const intl4 = util.intl;
    obj7.label = intl4.string(util.t.p2Rsdl);
    const obj8 = { source: _modDef18159 };
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
  const obj6 = { source: _modDef18158 };
  obj9.icon = closure_7(TableRow.TableRow.Icon, { source: _modDef18160 });
  obj9.onPress = function onPress() {
    return importDefault(constants2.ROLE_SUBSCRIPTIONS_EMOJIS);
  };
  items1[3] = closure_7(TableRow.TableRow, obj9, "guild-role-subscriptions-emojis");
  obj2.children = items1;
  return closure_8(TableRowGroup.TableRowGroup, obj2);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsRoleSubscriptionsSection(arg0) {
  const cResult = c.c(3);
  ({ guild, pushScreen } = arg0);
  let tmp2 = null;
  if (obj2.useCanSeeGuildRoleSubscriptionSettings(guild)) {
    const features = guild.features;
    tmp2 = null;
    if (features.has(constants.ROLE_SUBSCRIPTIONS_ENABLED)) {
      if (cResult[0] === guild) {
      }
      const obj3 = { pushScreen, guild };
      const tmp7 = React5(closure_9, obj3);
      cResult[0] = guild;
      cResult[1] = pushScreen;
      cResult[2] = tmp7;
    }
  }
  return tmp2;
}) : (function GuildSettingsRoleSubscriptionsSection(guild) {
  guild = guild.guild;
  let tmp = null;
  if (obj.useCanSeeGuildRoleSubscriptionSettings(guild)) {
    const features = guild.features;
    tmp = null;
    if (features.has(constants.ROLE_SUBSCRIPTIONS_ENABLED)) {
      const obj2 = { pushScreen: guild.pushScreen, guild };
      tmp = React5(closure_9, obj2);
    }
  }
  return tmp;
});