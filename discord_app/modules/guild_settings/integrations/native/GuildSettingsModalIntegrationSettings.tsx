// discord_app/modules/guild_settings/integrations/native/GuildSettingsModalIntegrationSettings.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl10 from "../../../../intl/index.native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import TableRow4 from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRadioRow3 from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import TableRowGroup4 from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TableSwitchRow2 from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import GuildSettingsActionCreatorsDefault from "../../GuildSettingsActionCreators.tsx";
import AssetRegistryDefault from "../../../../../_runtime/17769_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";
import GuildSettingsStore from "../../GuildSettingsStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let integrations;

let c3;
let c9;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
({ Image: c3, ActivityIndicator: closure_4 } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let obj = {
  integrationLabel: { fontSize: 24 },
  integrationIcon: { width: 48, height: 48, marginRight: 16 },
  forceSyncIcon: { marginLeft: 10 },
  value: { textAlign: "right" },
  stackPadding: obj2,
};
obj2 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
const authStore = createStyles.createLegacyClassComponentStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (option) => {
      const obj = react2;
      const cResult = obj.c(8);
      const iter = option.option;
      const onPress = option.onPress;
      if (cResult[0] === onPress) {
        let tmp5;
        if (cResult[1] === iter.value) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === iter.label) {
          if (cResult[4] === iter.value) {
            if (cResult[5] === tmp5) {
              let tmp7;
              if ((cResult[6] === tmp4.expire_grace_period) === iter.value) {
                tmp7 = cResult[7];
              }
              return tmp7;
            }
          }
        }
        const obj3 = {
          value: null,
          label: null,
          legacyCompat_onPress: tmp5,
          legacyCompat_selected: tmp4.expire_grace_period === iter.value,
        };
        ({ value: obj2.value, label: obj2.label } = iter);
        const tmp9 = metroImportDefault(TableRadioRow3.TableRadioRow, obj3);
        cResult[3] = iter.label;
        cResult[4] = iter.value;
        cResult[5] = tmp5;
        cResult[6] = tmp4.expire_grace_period === iter.value;
        cResult[7] = tmp9;
        tmp7 = tmp9;
      }
      const fn = function n() {
        return onPress(iter.value);
      };
      cResult[0] = onPress;
      cResult[1] = iter.value;
      cResult[2] = fn;
      tmp5 = fn;
    }
  : (option) => {
      const iter = option.option;
      const onPress = option.onPress;
      const obj = {
        value: iter.value,
        label: iter.label,
        legacyCompat_onPress() {
          return onPress(iter.value);
        },
        legacyCompat_selected: option.integration.expire_grace_period === iter.value,
      };
      return metroImportDefault(TableRadioRow3.TableRadioRow, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPress) => {
      let tmp11;
      const obj = react2;
      const cResult = obj.c(5);
      onPress = onPress.onPress;
      if (onPress.isSyncing) {
        let first;
        const _Symbol3 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp18 = metroImportDefault(React3, { animating: true, size: "small" });
          cResult[0] = tmp18;
          first = tmp18;
        } else {
          first = cResult[0];
        }
        tmp11 = first;
      } else {
        let tmp5;
        let tmp7;
        const _Symbol = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl10.intl;
          const stringResult = intl.string(intl10.t["+Josox"]);
          cResult[1] = stringResult;
          tmp5 = stringResult;
        } else {
          tmp5 = cResult[1];
        }
        const _Symbol2 = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { source: AssetRegistryDefault };
          const Icon = TableRow4.TableRow.Icon;
          const tmp10 = metroImportDefault(Icon, obj2);
          cResult[2] = tmp10;
          tmp7 = tmp10;
        } else {
          tmp7 = cResult[2];
        }
        if (cResult[3] !== onPress) {
          const obj3 = { accessibilityRole: "button", accessibilityLabel: tmp5, onPress, children: tmp7 };
          const tmp13 = metroImportDefault(Pressables.PressableOpacity, obj3);
          cResult[3] = onPress;
          cResult[4] = tmp13;
          tmp11 = tmp13;
        } else {
          tmp11 = cResult[4];
        }
      }
      return tmp11;
    }
  : (isSyncing) => {
      let Icon;
      let intl;
      let obj2;
      let tmp2Result;
      if (isSyncing.isSyncing) {
        tmp2Result = metroImportDefault(React3, { animating: true, size: "small" });
      } else {
        const obj = {
          accessibilityRole: "button",
          accessibilityLabel: intl.string(intl10.t["+Josox"]),
          onPress: tmp,
          children: metroImportDefault(Icon, obj2),
        };
        const PressableOpacity = Pressables.PressableOpacity;
        intl = intl10.intl;
        obj2 = { source: AssetRegistryDefault };
        Icon = TableRow4.TableRow.Icon;
        tmp2Result = metroImportDefault(PressableOpacity, obj);
      }
      return tmp2Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let integration;
      let obj3;
      let onPress;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(6);
      ({ integration, onPress } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl10.intl;
        const stringResult = intl.string(intl10.t["7r4OKg"]);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = intl10.intl;
        const stringResult1 = intl2.string(intl10.t.bZBLBs);
        cResult[1] = stringResult1;
        tmp6 = stringResult1;
      } else {
        tmp6 = cResult[1];
      }
      const BooleanResult = Boolean(integration.enable_emoticons);
      if (cResult[2] === integration.syncing) {
        if (cResult[3] === onPress) {
          let tmp9;
          if (cResult[4] === BooleanResult) {
            tmp9 = cResult[5];
          }
          return tmp9;
        }
      }
      const obj2 = {
        helperText: first,
        hasIcons: false,
        children: metroImportDefault(TableSwitchRow2.TableSwitchRow, obj3),
      };
      const TableRowGroup = TableRowGroup4.TableRowGroup;
      obj3 = { label: tmp6, value: BooleanResult, onValueChange: onPress, disabled: integration.syncing };
      const tmp10 = metroImportDefault(TableRowGroup, obj2);
      cResult[2] = integration.syncing;
      cResult[3] = onPress;
      cResult[4] = BooleanResult;
      cResult[5] = tmp10;
      tmp9 = tmp10;
    }
  : (integration) => {
      let TableSwitchRow;
      let intl;
      let intl2;
      let obj2;
      integration = integration.integration;
      const onPress = integration.onPress;
      const obj = {
        helperText: intl.string(intl10.t["7r4OKg"]),
        hasIcons: false,
        children: metroImportDefault(TableSwitchRow, obj2),
      };
      const TableRowGroup = TableRowGroup4.TableRowGroup;
      intl = intl10.intl;
      obj2 = {
        label: intl2.string(intl10.t.bZBLBs),
        value: Boolean(integration.enable_emoticons),
        onValueChange: onPress,
        disabled: integration.syncing,
      };
      TableSwitchRow = TableSwitchRow2.TableSwitchRow;
      intl2 = intl10.intl;
      return metroImportDefault(TableRowGroup, obj);
    };
const PureComponent = react.PureComponent;
class GuildSettingsModalIntegrationSettings extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.handleExpireBehaviorChange = function handleExpireBehaviorChange(expire_behavior) {
      let guildId;
      let integration;
      ({ guildId, integration } = require.props);
      const obj = GuildSettingsActionCreatorsDefault;
      obj.updateIntegration(
        guildId,
        integration.id,
        expire_behavior,
        integration.expire_grace_period,
        integration.enable_emoticons,
      );
    };
    applyArgumentsResult.handleExpireGracePeriodChange = function handleExpireGracePeriodChange(expire_grace_period) {
      let guildId;
      let integration;
      ({ guildId, integration } = require.props);
      const obj = GuildSettingsActionCreatorsDefault;
      obj.updateIntegration(
        guildId,
        integration.id,
        integration.expire_behavior,
        expire_grace_period,
        integration.enable_emoticons,
      );
    };
    applyArgumentsResult.handleToggleEmotes = function handleToggleEmotes(enable_emoticons) {
      let guildId;
      let integration;
      ({ guildId, integration } = require.props);
      const obj = GuildSettingsActionCreatorsDefault;
      obj.updateIntegration(
        guildId,
        integration.id,
        integration.expire_behavior,
        integration.expire_grace_period,
        enable_emoticons,
      );
    };
    applyArgumentsResult.handleSync = function handleSync() {
      let guildId;
      let integration;
      ({ guildId, integration } = require.props);
      const obj = GuildSettingsActionCreatorsDefault;
      obj.syncIntegration(guildId, integration.id);
    };
    return applyArgumentsResult;
  }
  render() {
    let RdUTrl;
    let Stack;
    let combined;
    let formatToPlainString;
    let intl;
    let intl3;
    let intl6;
    let intl7;
    let intl8;
    let items;
    let items1;
    let items2;
    let items3;
    let items4;
    let obj11;
    let obj12;
    let obj14;
    let obj2;
    let obj7;
    let prop;
    let stringResult;
    let tmp12;
    let tmp13;
    let tmp15;
    let tmp15Result2;
    const self = this;
    const iter = closure_10(this.context);
    const props = this.props;
    const integration = props.integration;
    const role_id = integration.role_id;
    let tmp = null;
    const theme = props.theme;
    if (null != role_id) {
      tmp = props.guildRoles[role_id];
    }
    let tmp2;
    if (null != tmp) {
      let obj = { label: intl.string(integration(1126).t.eBtNBa), trailing: closure_7(integration(4886).Text, obj2) };
      const TableRow = integration(5993).TableRow;
      intl = integration(1126).intl;
      obj2 = { style: iter.value, variant: "text-md/medium", color: "text-muted", children: tmp.name };
      tmp2 = closure_7(TableRow, obj);
    }
    if ("youtube" === integration.type) {
      const account = integration.account;
      let name;
      if (account != null) {
        name = account.name;
      }
      const intl2 = integration(1126).intl;
      stringResult = intl2.string(integration(1126).t.A5MiqO);
      RdUTrl = integration(1126).t["7lNtce"];
      combined = name;
      tmp12 = integration;
      tmp15 = integration;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "twitch.tv/" + integration.name;
      const intl9 = integration(1126).intl;
      stringResult = intl9.string(integration(1126).t["S/WCrG"]);
      RdUTrl = integration(1126).t.RdUTrl;
      tmp12 = integration;
      tmp15 = integration;
      const obj4 = { integration, onPress: self.handleToggleEmotes };
      tmp13 = closure_7(closure_13, obj4);
    }
    const obj3 = self(5442);
    const value = obj3.get(integration.type);
    let tmp19Result = null;
    if (null != value) {
      const makeSource = tmp15(1402).makeSource;
      tmp15(1402);
      const icon = value.icon;
      const obj5 = {
        source: makeSource(tmp15Result2.isThemeDark(theme) ? icon.darkPNG : icon.lightPNG),
        style: iter.integrationIcon,
      };
      tmp15Result2 = tmp15(4729);
      tmp19Result = closure_7(closure_3, obj5);
    }
    const values = Object.values(tmp12(17768).IntegrationExpireGracePeriodTypes);
    const found = values.filter((item) => Number.isInteger(item));
    const mapped = found.map((value) => {
      let intl;
      const obj = { value, label: intl.formatToPlainString(integration(dependencyMap[6]).t.eGjmy5, obj2) };
      intl = integration(dependencyMap[6]).intl;
      return obj;
    });
    const obj6 = { style: { flex: 1 }, contentContainerStyle: items, children: closure_8(Stack, obj7) };
    items = [{ paddingTop: 16 }, self.props.contentContainerStyle];
    const Form = tmp15(8895).Form;
    obj7 = { style: iter.stackPadding, spacing: self(587).space.PX_24, children: items1 };
    Stack = tmp15(5593).Stack;
    const TableRowGroup = tmp15(6074).TableRowGroup;
    let str1;
    const TableRow2 = tmp15(5993).TableRow;
    if (integration.user != null) {
      str1 = str.toString();
    }
    items1 = [, , , ,];
    const obj8 = {
      hasIcons: true,
      children: closure_7(TableRow2, { label: str1, subLabel: combined, icon: tmp19Result }),
    };
    items1[0] = closure_7(TableRowGroup, obj8);
    const obj9 = { title: intl3.string(tmp15(1126).t.i17qFc), hasIcons: false, children: items2 };
    const TableRowGroup2 = tmp15(6074).TableRowGroup;
    intl3 = tmp15(1126).intl;
    const TableRow3 = tmp15(5993).TableRow;
    const intl4 = tmp15(1126).intl;
    let str2 = integration.subscriber_count;
    const format = intl4.format;
    if (str2 == null) {
      str2 = "";
    }
    const obj10 = {
      label: format(RdUTrl, { subscribers: str2 }),
      subLabel: formatToPlainString(prop, obj11),
      trailing: closure_7(closure_12, obj14),
    };
    const intl5 = tmp15(1126).intl;
    formatToPlainString = intl5.formatToPlainString;
    obj11 = { datetime: obj12.calendar() };
    prop = tmp15(1126).t["+42M+u"];
    let flag = integration.syncing;
    obj12 = self(4461)(integration.synced_at);
    if (flag == null) {
      flag = false;
    }
    const obj13 = { children: items4 };
    obj14 = { isSyncing: flag, onPress: self.handleSync };
    items2 = [closure_7(TableRow3, obj10), tmp2];
    items1[1] = closure_8(TableRowGroup2, obj9);
    const obj15 = {
      title: stringResult,
      value: integration.expire_behavior,
      onChange: self.handleExpireBehaviorChange,
      hasIcons: false,
      children: items3,
    };
    const TableRadioGroup = tmp15(6072).TableRadioGroup;
    const obj16 = {
      value: tmp15(17770).IntegrationExpireBehaviorTypes.REMOVE_ROLE,
      label: intl6.string(tmp15(1126).t["6kpw4i"]),
    };
    const TableRadioRow = tmp15(6071).TableRadioRow;
    intl6 = tmp15(1126).intl;
    items3 = [closure_7(TableRadioRow, obj16)];
    const obj17 = {
      value: tmp15(17770).IntegrationExpireBehaviorTypes.KICK,
      label: intl7.string(tmp15(1126).t.fQUQIJ),
    };
    const TableRadioRow2 = tmp15(6071).TableRadioRow;
    intl7 = tmp15(1126).intl;
    items3[1] = closure_7(TableRadioRow2, obj17);
    items1[2] = closure_8(TableRadioGroup, obj15);
    const obj18 = {
      title: intl8.string(tmp15(1126).t.uiXMow),
      hasIcons: false,
      children: mapped.map((option, index) => {
        const obj = { integration, option, onPress: self.handleExpireGracePeriodChange };
        return metroImportDefault(closure_11, obj, index);
      }),
    };
    const TableRowGroup3 = tmp15(6074).TableRowGroup;
    intl8 = tmp15(1126).intl;
    items1[3] = closure_7(TableRowGroup3, obj18);
    items1[4] = tmp13;
    items4 = [closure_7(Form, obj6), closure_7(tmp15(6536).NavScrim, {})];
    return closure_8(closure_9, obj13);
  }
}
const prototype = GuildSettingsModalIntegrationSettings.prototype;
GuildSettingsModalIntegrationSettings.contextType = native.ThemeContext;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (contentContainerStyle) => {
      let guild;
      let props;
      let tmp10;
      let tmp4;
      let tmp5;
      let tmp8;
      const tmp = guild;
      const obj = guild(576);
      const cResult = obj.c(13);
      contentContainerStyle = contentContainerStyle.contentContainerStyle;
      const integrationId = contentContainerStyle.integrationId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildSettingsStore];
        const fn = function i() {
          return props.getProps();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      guild = stateFromStores.guild;
      integrations = stateFromStores.integrations;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildRoleStore];
        cResult[2] = items1;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== guild) {
        const fn2 = function h() {
          let rolesSnapshot;
          if (null != guild) {
            rolesSnapshot = GuildRoleStore.getRolesSnapshot(tmp.id);
          }
          return rolesSnapshot;
        };
        cResult[3] = guild;
        cResult[4] = fn2;
        tmp10 = fn2;
      } else {
        tmp10 = cResult[4];
      }
      const tmpResult2 = tmp(504);
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp10);
      const tmp12 = useThemeDefault();
      if (cResult[5] !== integrations) {
        let found;
        if (integrations != null) {
          found = integrations.filter((type) => {
            const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = guild(
              dependencyMap[31],
            ).SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS;
            return SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS.includes(type.type);
          });
        }
        cResult[5] = integrations;
        cResult[6] = found;
      }
      let tmp17 = null;
      if (null != guild) {
        tmp17 = null;
        if (null != tmp16) {
          tmp17 = null;
          if (null != stateFromStores1) {
            if (cResult[7] === contentContainerStyle) {
              if (cResult[8] === guild.id) {
                if (cResult[9] === stateFromStores1) {
                  if (cResult[10] === tmp16) {
                    let tmp18;
                    if (cResult[11] === tmp12) {
                      tmp18 = cResult[12];
                    }
                    tmp17 = tmp18;
                  }
                }
              }
            }
            const obj2 = {
              guildId: guild.id,
              guildRoles: stateFromStores1,
              integration: tmp16,
              theme: tmp12,
              contentContainerStyle,
            };
            const tmp21 = closure_7(GuildSettingsModalIntegrationSettings, obj2);
            cResult[7] = contentContainerStyle;
            cResult[8] = guild.id;
            cResult[9] = stateFromStores1;
            cResult[10] = tmp16;
            cResult[11] = tmp12;
            cResult[12] = tmp21;
            tmp18 = tmp21;
          }
        }
      }
      return tmp17;
    }
  : (arg0) => {
      let contentContainerStyle;
      let integrationId;
      let props;
      let guild;
      ({ integrationId, contentContainerStyle } = arg0);
      const items = [GuildSettingsStore];
      const obj = guild(504);
      const stateFromStores = obj.useStateFromStores(items, () => props.getProps());
      guild = stateFromStores.guild;
      integrations = stateFromStores.integrations;
      const items1 = [GuildRoleStore];
      const obj2 = guild(504);
      const stateFromStores1 = obj2.useStateFromStores(items1, () => {
        let rolesSnapshot;
        if (null != guild) {
          rolesSnapshot = GuildRoleStore.getRolesSnapshot(tmp.id);
        }
        return rolesSnapshot;
      });
      let found;
      const tmp3 = useThemeDefault();
      if (integrations != null) {
        found = integrations.filter((type) => {
          const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = guild(
            dependencyMap[31],
          ).SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS;
          return SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS.includes(type.type);
        });
      }
      let tmp6 = null;
      if (null != guild) {
        tmp6 = null;
        if (null != tmp5) {
          tmp6 = null;
          if (null != stateFromStores1) {
            const obj3 = {
              guildId: guild.id,
              guildRoles: stateFromStores1,
              integration: tmp5,
              theme: tmp3,
              contentContainerStyle,
            };
            tmp6 = closure_7(GuildSettingsModalIntegrationSettings, obj3);
          }
        }
      }
      return tmp6;
    };
const result = size.fileFinishedImporting(
  "modules/guild_settings/integrations/native/GuildSettingsModalIntegrationSettings.tsx",
);

export default tmp5;
