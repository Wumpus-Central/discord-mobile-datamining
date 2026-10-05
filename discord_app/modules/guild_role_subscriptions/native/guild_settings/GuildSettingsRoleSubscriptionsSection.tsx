// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsSection.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import intl6 from "../../../../intl/index.native.tsx";
import GuildRecord from "../../../../records/GuildRecord.tsx";
import TableRow5 from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup2 from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import GuildRoleSubscriptionSettingUtils from "../../feature_gating/GuildRoleSubscriptionSettingUtils.tsx";
import AssetRegistryDefault from "../../../../../_runtime/17664_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../_runtime/17665_AssetRegistry.js";
import AssetRegistryDefault3 from "../../../../../_runtime/17666_AssetRegistry.js";
import AssetRegistryDefault4 from "../../../../../_runtime/17667_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import UserStore from "../../../../stores/UserStore.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const isGuildOwner = GuildRecord.isGuildOwner;
({ GuildFeatures: hasOwnProperty, GuildSettingsSections: metroRequire } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let Icon3;
      let first;
      let intl4;
      let items1;
      let obj10;
      let tmp10;
      let tmp12;
      let tmp16;
      let tmp19;
      let tmp21;
      let tmp25;
      let tmp6;
      let tmp8;
      let obj = guild(576);
      const cResult = obj.c(25);
      guild = guild.guild;
      const pushScreen = guild.pushScreen;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guild) {
        const fn = function c() {
          return isGuildOwner(guild, UserStore.getCurrentUser());
        };
        cResult[1] = guild;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = guild(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(guild(1126).t["KzCF/6"]);
        cResult[3] = stringResult;
        tmp8 = stringResult;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(guild(1126).t["/CfKoD"]);
        cResult[4] = stringResult1;
        tmp10 = stringResult1;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { source: pushScreen(17664) };
        const Icon = tmp(5993).TableRow.Icon;
        const tmp15 = closure_7(Icon, obj2);
        cResult[5] = tmp15;
        tmp12 = tmp15;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] !== pushScreen) {
        const obj3 = {
          label: tmp10,
          arrow: true,
          icon: tmp12,
          onPress() {
            return pushScreen(metroRequire.ROLE_SUBSCRIPTIONS_BASIC);
          },
        };
        const tmp18 = closure_7(guild(5993).TableRow, obj3, "guild-role-subscriptions-basic");
        cResult[6] = pushScreen;
        cResult[7] = tmp18;
        tmp16 = tmp18;
      } else {
        tmp16 = cResult[7];
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1126).intl;
        const stringResult2 = intl3.string(guild(1126).t.pXbGYc);
        cResult[8] = stringResult2;
        tmp19 = stringResult2;
      } else {
        tmp19 = cResult[8];
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { source: pushScreen(17665) };
        const Icon2 = tmp(5993).TableRow.Icon;
        const tmp24 = closure_7(Icon2, obj4);
        cResult[9] = tmp24;
        tmp21 = tmp24;
      } else {
        tmp21 = cResult[9];
      }
      if (cResult[10] !== pushScreen) {
        const obj5 = {
          label: tmp19,
          arrow: true,
          icon: tmp21,
          onPress() {
            return pushScreen(metroRequire.ROLE_SUBSCRIPTIONS_TIERS);
          },
        };
        const tmp27 = closure_7(guild(5993).TableRow, obj5, "guild-role-subscriptions-tiers");
        cResult[10] = pushScreen;
        cResult[11] = tmp27;
        tmp25 = tmp27;
      } else {
        tmp25 = cResult[11];
      }
      if (cResult[12] === guild) {
        if (cResult[13] === pushScreen) {
          let tmp28;
          let tmp32;
          let tmp34;
          let tmp38;
          if (cResult[14] === stateFromStores) {
            tmp28 = cResult[15];
          }
          const _Symbol = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const intl5 = tmp(1126).intl;
            const stringResult3 = intl5.string(guild(1126).t.C5Dbwn);
            cResult[16] = stringResult3;
            tmp32 = stringResult3;
          } else {
            tmp32 = cResult[16];
          }
          const _Symbol2 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            const obj6 = { source: pushScreen(17667) };
            const Icon4 = tmp(5993).TableRow.Icon;
            const tmp37 = closure_7(Icon4, obj6);
            cResult[17] = tmp37;
            tmp34 = tmp37;
          } else {
            tmp34 = cResult[17];
          }
          if (cResult[18] !== pushScreen) {
            const obj7 = {
              label: tmp32,
              arrow: true,
              icon: tmp34,
              onPress() {
                return pushScreen(metroRequire.ROLE_SUBSCRIPTIONS_EMOJIS);
              },
            };
            const tmp40 = closure_7(guild(5993).TableRow, obj7, "guild-role-subscriptions-emojis");
            cResult[18] = pushScreen;
            cResult[19] = tmp40;
            tmp38 = tmp40;
          } else {
            tmp38 = cResult[19];
          }
          if (cResult[20] === tmp28) {
            if (cResult[21] === tmp38) {
              if (cResult[22] === tmp16) {
                let tmp41;
                if (cResult[23] === tmp25) {
                  tmp41 = cResult[24];
                }
                return tmp41;
              }
            }
          }
          const obj8 = { title: tmp8, hasIcons: true, children: items1 };
          items1 = [tmp16, tmp25, tmp28, tmp38];
          const tmp43 = closure_8(guild(6074).TableRowGroup, obj8);
          cResult[20] = tmp28;
          cResult[21] = tmp38;
          cResult[22] = tmp16;
          cResult[23] = tmp25;
          cResult[24] = tmp43;
          tmp41 = tmp43;
        }
      }
      let tmp29 = stateFromStores;
      if (tmp29) {
        const obj9 = {
          label: intl4.string(guild(1126).t.p2Rsdl),
          arrow: true,
          icon: closure_7(Icon3, obj10),
          onPress() {
            const obj = { guildId: guild.id };
            return pushScreen(metroRequire.ROLE_SUBSCRIPTIONS_PAYMENTS, obj);
          },
        };
        const TableRow = tmp(5993).TableRow;
        intl4 = tmp(1126).intl;
        obj10 = { source: pushScreen(17666) };
        Icon3 = tmp(5993).TableRow.Icon;
        tmp29 = closure_7(TableRow, obj9, "guild-role-subscriptions-payments");
      }
      cResult[12] = guild;
      cResult[13] = pushScreen;
      cResult[14] = stateFromStores;
      cResult[15] = tmp29;
      tmp28 = tmp29;
    }
  : (arg0) => {
      let Icon;
      let Icon2;
      let Icon3;
      let Icon4;
      let id;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let items1;
      let obj10;
      let obj4;
      let obj6;
      let obj8;
      ({ guild: require, pushScreen: importDefault } = arg0);
      let obj = get_initialized;
      const items = [UserStore];
      let stateFromStores = obj.useStateFromStores(items, () => isGuildOwner(require, UserStore.getCurrentUser()));
      const obj2 = { title: intl.string(intl6.t["KzCF/6"]), hasIcons: true, children: items1 };
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      intl = intl6.intl;
      const obj3 = {
        label: intl2.string(intl6.t["/CfKoD"]),
        arrow: true,
        icon: closure_7(Icon, obj4),
        onPress() {
          return importDefault(metroRequire.ROLE_SUBSCRIPTIONS_BASIC);
        },
      };
      const TableRow = TableRow5.TableRow;
      intl2 = intl6.intl;
      obj4 = { source: AssetRegistryDefault };
      Icon = TableRow5.TableRow.Icon;
      items1 = [closure_7(TableRow, obj3, "guild-role-subscriptions-basic"), , ,];
      const obj5 = {
        label: intl3.string(intl6.t.pXbGYc),
        arrow: true,
        icon: closure_7(Icon2, obj6),
        onPress() {
          return importDefault(metroRequire.ROLE_SUBSCRIPTIONS_TIERS);
        },
      };
      const TableRow2 = TableRow5.TableRow;
      intl3 = intl6.intl;
      obj6 = { source: AssetRegistryDefault2 };
      Icon2 = TableRow5.TableRow.Icon;
      items1[1] = closure_7(TableRow2, obj5, "guild-role-subscriptions-tiers");
      if (stateFromStores) {
        const obj7 = {
          label: intl4.string(intl6.t.p2Rsdl),
          arrow: true,
          icon: closure_7(Icon3, obj8),
          onPress() {
            const obj = { guildId: require.id };
            return importDefault(metroRequire.ROLE_SUBSCRIPTIONS_PAYMENTS, obj);
          },
        };
        const TableRow3 = TableRow5.TableRow;
        intl4 = intl6.intl;
        obj8 = { source: AssetRegistryDefault3 };
        Icon3 = TableRow5.TableRow.Icon;
        stateFromStores = closure_7(TableRow3, obj7, "guild-role-subscriptions-payments");
      }
      items1[2] = stateFromStores;
      const obj9 = {
        label: intl5.string(intl6.t.C5Dbwn),
        arrow: true,
        icon: closure_7(Icon4, obj10),
        onPress() {
          return importDefault(metroRequire.ROLE_SUBSCRIPTIONS_EMOJIS);
        },
      };
      const TableRow4 = TableRow5.TableRow;
      intl5 = intl6.intl;
      obj10 = { source: AssetRegistryDefault4 };
      Icon4 = TableRow5.TableRow.Icon;
      items1[3] = closure_7(TableRow4, obj9, "guild-role-subscriptions-emojis");
      return closure_8(TableRowGroup, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let guild;
      let pushScreen;
      const obj = react2;
      const cResult = obj.c(3);
      ({ guild, pushScreen } = arg0);
      let tmp2 = null;
      const obj2 = GuildRoleSubscriptionSettingUtils;
      if (obj2.useCanSeeGuildRoleSubscriptionSettings(guild)) {
        const features = guild.features;
        tmp2 = null;
        if (features.has(hasOwnProperty.ROLE_SUBSCRIPTIONS_ENABLED)) {
          if (cResult[0] === guild) {
            let tmp4;
            if (cResult[1] === pushScreen) {
              tmp4 = cResult[2];
            }
            tmp2 = tmp4;
          }
          const obj3 = { pushScreen, guild };
          const tmp7 = metroImportDefault(closure_9, obj3);
          cResult[0] = guild;
          cResult[1] = pushScreen;
          cResult[2] = tmp7;
          tmp4 = tmp7;
        }
      }
      return tmp2;
    }
  : (guild) => {
      guild = guild.guild;
      const pushScreen = guild.pushScreen;
      let tmp = null;
      const obj = GuildRoleSubscriptionSettingUtils;
      if (obj.useCanSeeGuildRoleSubscriptionSettings(guild)) {
        const features = guild.features;
        tmp = null;
        if (features.has(hasOwnProperty.ROLE_SUBSCRIPTIONS_ENABLED)) {
          const obj2 = { pushScreen, guild };
          tmp = metroImportDefault(closure_9, obj2);
        }
      }
      return tmp;
    };
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsSection.tsx",
);

export default tmp5;
