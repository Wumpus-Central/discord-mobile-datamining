// === Module 19299: GuildSettingsRoleSubscriptionsSection ===

// Module 19299 (GuildSettingsRoleSubscriptionsSection)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1125 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5722 */;
import TableRow from "TableRow" /* 6939 */;
import TableRowGroup from "TableRowGroup" /* 7023 */;
import TagsIcon from "TagsIcon" /* 11042 */;
import EmojiMoneyMouthFaceIcon from "EmojiMoneyMouthFaceIcon" /* 17008 */;
import WalletIcon from "WalletIcon" /* 19300 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
const isGuildOwner = fn(4874).isGuildOwner;
const Constants = fn(1084);
({ GuildFeatures: closure_4, GuildSettingsSections: hasOwnProperty } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function HasCreatedListingsSection(guild) {
  const cResult = guild(pushScreen[6]).c(25);
  guild = guild.guild;
  pushScreen = guild.pushScreen;
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
  const obj = guild(pushScreen[6]);
  const stateFromStores = guild(pushScreen[7]).useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[8]).intl;
    const stringResult = intl.string(tmp(tmp2[8]).t["KzCF/6"]);
    cResult[3] = stringResult;
    let tmp8 = stringResult;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(tmp2[8]).intl;
    const stringResult1 = intl2.string(tmp(tmp2[8]).t["/CfKoD"]);
    cResult[4] = stringResult1;
    let tmp10 = stringResult1;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { IconComponent: tmp(tmp2[10]).CircleInformationIcon };
    const tmp14 = closure_6(tmp(tmp2[9]).TableRow.Icon, obj2);
    cResult[5] = tmp14;
    let tmp12 = tmp14;
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
    const tmp17 = closure_6(tmp(tmp2[9]).TableRow, obj3, "guild-role-subscriptions-basic");
    cResult[6] = pushScreen;
    cResult[7] = tmp17;
    let tmp15 = tmp17;
  } else {
    tmp15 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(tmp2[8]).intl;
    const stringResult2 = intl3.string(tmp(tmp2[8]).t.pXbGYc);
    cResult[8] = stringResult2;
    let tmp18 = stringResult2;
  } else {
    tmp18 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { IconComponent: tmp(tmp2[11]).TagsIcon };
    const tmp22 = closure_6(tmp(tmp2[9]).TableRow.Icon, obj4);
    cResult[9] = tmp22;
    let tmp20 = tmp22;
  } else {
    tmp20 = cResult[9];
  }
  if (cResult[10] !== pushScreen) {
    const obj5 = {
      label: tmp18,
      arrow: true,
      icon: tmp20,
      onPress() {
          return pushScreen(constants2.ROLE_SUBSCRIPTIONS_TIERS);
        }
    };
    const tmp25 = closure_6(tmp(tmp2[9]).TableRow, obj5, "guild-role-subscriptions-tiers");
    cResult[10] = pushScreen;
    cResult[11] = tmp25;
    let tmp23 = tmp25;
  } else {
    tmp23 = cResult[11];
  }
  if (cResult[12] === guild) {
    if (cResult[13] === pushScreen) {
      if (cResult[14] === stateFromStores) {
        let tmp26 = cResult[15];
      }
      const _Symbol = Symbol;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        const intl5 = tmp(tmp2[8]).intl;
        const stringResult3 = intl5.string(tmp(tmp2[8]).t.C5Dbwn);
        cResult[16] = stringResult3;
        let tmp29 = stringResult3;
      } else {
        tmp29 = cResult[16];
      }
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { IconComponent: tmp(tmp2[13]).EmojiMoneyMouthFaceIcon };
        const tmp33 = closure_6(tmp(tmp2[9]).TableRow.Icon, obj6);
        cResult[17] = tmp33;
        let tmp31 = tmp33;
      } else {
        tmp31 = cResult[17];
      }
      if (cResult[18] !== pushScreen) {
        const obj7 = {
          label: tmp29,
          arrow: true,
          icon: tmp31,
          onPress() {
                  return pushScreen(constants2.ROLE_SUBSCRIPTIONS_EMOJIS);
                }
        };
        const tmp36 = closure_6(tmp(tmp2[9]).TableRow, obj7, "guild-role-subscriptions-emojis");
        cResult[18] = pushScreen;
        cResult[19] = tmp36;
        let tmp34 = tmp36;
      } else {
        tmp34 = cResult[19];
      }
      if (cResult[20] === tmp26) {
        if (cResult[21] === tmp34) {
          if (cResult[22] === tmp15) {
            if (cResult[23] === tmp23) {
              let tmp37 = cResult[24];
            }
            return tmp37;
          }
        }
      }
      const obj8 = { title: tmp8, hasIcons: true, children: null };
      const items1 = [tmp15, tmp23, tmp26, tmp34];
      obj8.children = items1;
      const tmp39 = closure_7(tmp(tmp2[14]).TableRowGroup, obj8);
      cResult[20] = tmp26;
      cResult[21] = tmp34;
      cResult[22] = tmp15;
      cResult[23] = tmp23;
      cResult[24] = tmp39;
      tmp37 = tmp39;
    }
  }
  let tmp27 = stateFromStores;
  if (stateFromStores) {
    const obj9 = { label: null, arrow: true, icon: null, onPress: null };
    const intl4 = tmp(tmp2[8]).intl;
    obj9.label = intl4.string(tmp(tmp2[8]).t.p2Rsdl);
    const obj10 = { IconComponent: tmp(tmp2[12]).WalletIcon };
    obj9.icon = closure_6(tmp(tmp2[9]).TableRow.Icon, obj10);
    obj9.onPress = function onPress() {
      return pushScreen(constants2.ROLE_SUBSCRIPTIONS_PAYMENTS, { guildId: guild.id });
    };
    tmp27 = closure_6(tmp(tmp2[9]).TableRow, obj9, "guild-role-subscriptions-payments");
  }
  cResult[12] = guild;
  cResult[13] = pushScreen;
  cResult[14] = stateFromStores;
  cResult[15] = tmp27;
  tmp26 = tmp27;
  const tmpResult = guild(pushScreen[7]);
}) : (function HasCreatedListingsSection(arg0) {
  ({ guild: require, pushScreen: dependencyMap } = arg0);
  const items = [UserStore];
  let stateFromStores = initialize.useStateFromStores(items, () => isGuildOwner(id, UserStore.getCurrentUser()));
  const obj2 = { title: null, hasIcons: true, children: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t["KzCF/6"]);
  const obj3 = { label: null, arrow: true, icon: null, onPress: null };
  const intl2 = util.intl;
  obj3.label = intl2.string(util.t["/CfKoD"]);
  obj3.icon = closure_6(TableRow.TableRow.Icon, { IconComponent: CircleInformationIcon.CircleInformationIcon });
  obj3.onPress = function onPress() {
    return dependencyMap(constants2.ROLE_SUBSCRIPTIONS_BASIC);
  };
  const items1 = [closure_6(TableRow.TableRow, obj3, "guild-role-subscriptions-basic"), , , ];
  const obj5 = { label: null, arrow: true, icon: null, onPress: null };
  const intl3 = util.intl;
  obj5.label = intl3.string(util.t.pXbGYc);
  const obj4 = { IconComponent: CircleInformationIcon.CircleInformationIcon };
  obj5.icon = closure_6(TableRow.TableRow.Icon, { IconComponent: TagsIcon.TagsIcon });
  obj5.onPress = function onPress() {
    return dependencyMap(constants2.ROLE_SUBSCRIPTIONS_TIERS);
  };
  items1[1] = closure_6(TableRow.TableRow, obj5, "guild-role-subscriptions-tiers");
  if (stateFromStores) {
    const obj7 = { label: null, arrow: true, icon: null, onPress: null };
    const intl4 = util.intl;
    obj7.label = intl4.string(util.t.p2Rsdl);
    const obj8 = { IconComponent: WalletIcon.WalletIcon };
    obj7.icon = closure_6(TableRow.TableRow.Icon, obj8);
    obj7.onPress = function onPress() {
      return dependencyMap(constants2.ROLE_SUBSCRIPTIONS_PAYMENTS, { guildId: id.id });
    };
    stateFromStores = closure_6(TableRow.TableRow, obj7, "guild-role-subscriptions-payments");
  }
  items1[2] = stateFromStores;
  const obj9 = { label: null, arrow: true, icon: null, onPress: null };
  const intl5 = util.intl;
  obj9.label = intl5.string(util.t.C5Dbwn);
  const obj6 = { IconComponent: TagsIcon.TagsIcon };
  obj9.icon = closure_6(TableRow.TableRow.Icon, { IconComponent: EmojiMoneyMouthFaceIcon.EmojiMoneyMouthFaceIcon });
  obj9.onPress = function onPress() {
    return dependencyMap(constants2.ROLE_SUBSCRIPTIONS_EMOJIS);
  };
  items1[3] = closure_6(TableRow.TableRow, obj9, "guild-role-subscriptions-emojis");
  obj2.children = items1;
  return closure_7(TableRowGroup.TableRowGroup, obj2);
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
      const tmp7 = timestampProducer(closure_8, obj3);
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
      tmp = timestampProducer(closure_8, obj2);
    }
  }
  return tmp;
});