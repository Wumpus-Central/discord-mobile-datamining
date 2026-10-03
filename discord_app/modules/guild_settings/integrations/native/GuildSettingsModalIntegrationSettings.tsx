// === Module 17743: GuildSettingsModalIntegrationSettings ===

// Module 17743 (GuildSettingsModalIntegrationSettings)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useThemeDefault from "useTheme" /* 4791 */;
import Pressables from "Pressables" /* 5909 */;
import TableRow from "TableRow" /* 5993 */;
import TableRadioRow from "TableRadioRow" /* 6071 */;
import TableRowGroup from "TableRowGroup" /* 6074 */;
import TableSwitchRow from "TableSwitchRow" /* 6698 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9247 */;
import _modDef17745 from "module_17745" /* 17745 */;
import noop from "module_19" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9248 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, ActivityIndicator: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { integrationLabel: { fontSize: 24 }, integrationIcon: { width: 48, height: 48, marginRight: 16 }, forceSyncIcon: { marginLeft: 10 }, value: { textAlign: "right" }, stackPadding: { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING } };
let closure_10 = createStyles.createLegacyClassComponentStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((option) => {
  const cResult = c.c(8);
  const onPress = option.onPress;
  if (cResult[0] === onPress) {
    if (cResult[1] === iter.value) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === iter.label) {
      if (cResult[4] === iter.value) {
        if (cResult[5] === tmp5) {
          if (cResult[6] === tmp6) {
            let tmp7 = cResult[7];
          }
          return tmp7;
        }
      }
    }
    const obj3 = { value: null, label: null, legacyCompat_onPress: null, legacyCompat_selected: null };
    ({ value: obj2.value, label: obj2.label } = iter);
    obj3.legacyCompat_onPress = tmp5;
    obj3.legacyCompat_selected = tmp4.expire_grace_period === iter.value;
    const tmp9 = React5(TableRadioRow.TableRadioRow, obj3);
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
  cResult[1] = option.option.value;
  cResult[2] = fn;
  tmp5 = fn;
}) : ((option) => {
  const iter = option.option;
  const onPress = option.onPress;
  return React5(TableRadioRow.TableRadioRow, {
    value: iter.value,
    label: iter.label,
    legacyCompat_onPress() {
      return onPress(iter.value);
    },
    legacyCompat_selected: option.integration.expire_grace_period === iter.value
  });
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  const cResult = c.c(5);
  onPress = onPress.onPress;
  if (onPress.isSyncing) {
    const _Symbol3 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp18 = React5(React4, { animating: true, size: "small" });
      cResult[0] = tmp18;
      let first = tmp18;
    } else {
      first = cResult[0];
    }
  } else {
    const _Symbol = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t["+Josox"]);
      cResult[1] = stringResult;
      let tmp5 = stringResult;
    } else {
      tmp5 = cResult[1];
    }
    const _Symbol2 = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { source: _modDef17745 };
      const tmp10 = React5(TableRow.TableRow.Icon, obj2);
      cResult[2] = tmp10;
      let tmp7 = tmp10;
    } else {
      tmp7 = cResult[2];
    }
    if (cResult[3] !== onPress) {
      const obj3 = { accessibilityRole: "button", accessibilityLabel: tmp5, onPress, children: tmp7 };
      const tmp13 = React5(Pressables.PressableOpacity, obj3);
      cResult[3] = onPress;
      cResult[4] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[4];
    }
    return tmp11;
  }
}) : ((isSyncing) => {
  if (isSyncing.isSyncing) {
    let tmp2Result = React5(React4, { animating: true, size: "small" });
  } else {
    const obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t["+Josox"]);
    obj.onPress = tmp;
    const obj2 = { source: _modDef17745 };
    obj.children = React5(TableRow.TableRow.Icon, obj2);
    tmp2Result = React5(Pressables.PressableOpacity, obj);
  }
  return tmp2Result;
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(6);
  ({ integration, onPress } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["7r4OKg"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.bZBLBs);
    cResult[1] = stringResult1;
    let tmp6 = stringResult1;
  } else {
    tmp6 = cResult[1];
  }
  const BooleanResult = Boolean(integration.enable_emoticons);
  if (cResult[2] === integration.syncing) {
    if (cResult[3] === onPress) {
      if (cResult[4] === BooleanResult) {
        let tmp9 = cResult[5];
      }
      return tmp9;
    }
  }
  const obj2 = { helperText: first, hasIcons: false, children: React5(TableSwitchRow.TableSwitchRow, { label: tmp6, value: BooleanResult, onValueChange: onPress, disabled: integration.syncing }) };
  const tmp10 = React5(TableRowGroup.TableRowGroup, obj2);
  cResult[2] = integration.syncing;
  cResult[3] = onPress;
  cResult[4] = BooleanResult;
  cResult[5] = tmp10;
  tmp9 = tmp10;
  const obj3 = { label: tmp6, value: BooleanResult, onValueChange: onPress, disabled: integration.syncing };
}) : ((integration) => {
  integration = integration.integration;
  const obj = { helperText: null, hasIcons: false, children: null };
  const intl = util.intl;
  obj.helperText = intl.string(util.t["7r4OKg"]);
  const obj2 = { label: null, value: null, onValueChange: null, disabled: null };
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t.bZBLBs);
  obj2.value = Boolean(integration.enable_emoticons);
  obj2.onValueChange = integration.onPress;
  obj2.disabled = integration.syncing;
  obj.children = React5(TableSwitchRow.TableSwitchRow, obj2);
  return React5(TableRowGroup.TableRowGroup, obj);
});
const PureComponent = noop.PureComponent;
class GuildSettingsModalIntegrationSettings extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleExpireBehaviorChange = function handleExpireBehaviorChange(expire_behavior) {
      ({ guildId, integration } = applyArgumentsResult.props);
      GuildSettingsActionCreatorsDefault.updateIntegration(guildId, integration.id, expire_behavior, integration.expire_grace_period, integration.enable_emoticons);
    };
    applyArgumentsResult.handleExpireGracePeriodChange = function handleExpireGracePeriodChange(expire_grace_period) {
      ({ guildId, integration } = applyArgumentsResult.props);
      GuildSettingsActionCreatorsDefault.updateIntegration(guildId, integration.id, integration.expire_behavior, expire_grace_period, integration.enable_emoticons);
    };
    applyArgumentsResult.handleToggleEmotes = function handleToggleEmotes(enable_emoticons) {
      ({ guildId, integration } = applyArgumentsResult.props);
      GuildSettingsActionCreatorsDefault.updateIntegration(guildId, integration.id, integration.expire_behavior, integration.expire_grace_period, enable_emoticons);
    };
    applyArgumentsResult.handleSync = function handleSync() {
      ({ guildId, integration } = applyArgumentsResult.props);
      GuildSettingsActionCreatorsDefault.syncIntegration(guildId, integration.id);
    };
    return applyArgumentsResult;
  }
}
GuildSettingsModalIntegrationSettings.prototype["render"] = function render() {
  const self = this;
  const iter = closure_10(this.context);
  const props = this.props;
  const integration = props.integration;
  const role_id = integration.role_id;
  let tmp = null;
  if (null != role_id) {
    tmp = props.guildRoles[role_id];
  }
  if (null != tmp) {
    let obj = { label: null, trailing: null };
    let intl = integration(1126).intl;
    obj.label = intl.string(integration(1126).t.eBtNBa);
    const obj2 = { style: iter.value, variant: "text-md/medium", color: "text-muted", children: tmp.name };
    obj.trailing = closure_7(integration(4886).Text, obj2);
    const tmp2 = closure_7(integration(5993).TableRow, obj);
  }
  if ("youtube" === integration.type) {
    const account = integration.account;
    let name;
    if (account != null) {
      name = account.name;
    }
    const intl2 = integration(1126).intl;
    let stringResult = intl2.string(integration(1126).t.A5MiqO);
    let RdUTrl = integration(1126).t["7lNtce"];
    let combined = name;
    let tmp12 = integration;
    let tmp15 = integration;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "twitch.tv/" + integration.name;
    const intl9 = integration(1126).intl;
    stringResult = intl9.string(integration(1126).t["S/WCrG"]);
    RdUTrl = integration(1126).t.RdUTrl;
    const obj4 = { integration, onPress: self.handleToggleEmotes };
    tmp12 = integration;
    tmp15 = integration;
    const tmp13 = closure_7(closure_13, obj4);
  }
  value = self(5442).get(integration.type);
  if (null == value) {
    const _Object = Object;
    const values = Object.values(tmp12(17744).IntegrationExpireGracePeriodTypes);
    const found = values.filter((item) => Number.isInteger(item));
    const mapped = found.map((value) => {
      const obj = { value, label: null };
      const intl = integration(1126).intl;
      obj.label = intl.formatToPlainString(integration(1126).t.eGjmy5, { days: value });
      return obj;
    });
    const obj5 = { style: { flex: 1 }, contentContainerStyle: null, children: null };
    const items = [{ paddingTop: 16 }, self.props.contentContainerStyle];
    obj5.contentContainerStyle = items;
    const obj6 = { style: iter.stackPadding, spacing: tmp16(587).space.PX_24, children: null };
    let str1;
    if (integration.user != null) {
      str1 = str.toString();
    }
    const obj7 = { hasIcons: true, children: null };
    const obj8 = { label: str1, subLabel: combined, icon: null };
    obj7.children = closure_7(tmp15(5993).TableRow, obj8);
    const items1 = [closure_7(tmp15(6074).TableRowGroup, obj7), , , , ];
    const obj9 = { title: null, hasIcons: false, children: null };
    const intl3 = tmp15(1126).intl;
    obj9.title = intl3.string(tmp15(1126).t.i17qFc);
    const intl4 = tmp15(1126).intl;
    let str2 = integration.subscriber_count;
    if (str2 == null) {
      str2 = "";
    }
    const obj10 = { label: null, subLabel: null, trailing: null };
    const obj11 = { subscribers: str2 };
    obj10.label = intl4.format(RdUTrl, obj11);
    const intl5 = tmp15(1126).intl;
    const obj12 = { datetime: tmp16(4461)(integration.synced_at).calendar() };
    obj10.subLabel = intl5.formatToPlainString(tmp15(1126).t["+42M+u"], obj12);
    let flag = integration.syncing;
    if (flag == null) {
      flag = false;
    }
    const obj13 = { children: null };
    const obj14 = { isSyncing: flag, onPress: self.handleSync };
    obj10.trailing = closure_7(closure_12, obj14);
    const items2 = [closure_7(tmp15(5993).TableRow, obj10), tmp2];
    obj9.children = items2;
    items1[1] = closure_8(tmp15(6074).TableRowGroup, obj9);
    const obj16 = { title: stringResult, value: integration.expire_behavior, onChange: self.handleExpireBehaviorChange, hasIcons: false, children: null };
    const obj17 = { value: tmp15(17746).IntegrationExpireBehaviorTypes.REMOVE_ROLE, label: null };
    const intl6 = tmp15(1126).intl;
    obj17.label = intl6.string(tmp15(1126).t["6kpw4i"]);
    const items3 = [closure_7(tmp15(6071).TableRadioRow, obj17), ];
    const obj18 = { value: tmp15(17746).IntegrationExpireBehaviorTypes.KICK, label: null };
    const intl7 = tmp15(1126).intl;
    obj18.label = intl7.string(tmp15(1126).t.fQUQIJ);
    items3[1] = closure_7(tmp15(6071).TableRadioRow, obj18);
    obj16.children = items3;
    items1[2] = closure_8(tmp15(6072).TableRadioGroup, obj16);
    const obj19 = { title: null, hasIcons: false, children: null };
    const intl8 = tmp15(1126).intl;
    obj19.title = intl8.string(tmp15(1126).t.uiXMow);
    obj19.children = mapped.map((option, index) => React5(closure_11, { integration, option, onPress: self.handleExpireGracePeriodChange }, index));
    items1[3] = closure_7(tmp15(6074).TableRowGroup, obj19);
    items1[4] = tmp13;
    obj6.children = items1;
    obj5.children = closure_8(tmp15(5593).Stack, obj6);
    const items4 = [closure_7(tmp15(8895).Form, obj5), closure_7(tmp15(6536).NavScrim, {})];
    obj13.children = items4;
    return closure_8(closure_9, obj13);
  } else {
    const tmp15Result = tmp15(1402);
    const tmp15Result2 = tmp15(4729);
    const icon = { source: null, style: null };
    icon.source = tmp15Result.makeSource(tmp15(4729).isThemeDark(props.theme) ? icon.darkPNG : icon.lightPNG);
    icon.style = iter.integrationIcon;
    closure_7(closure_3, icon);
    const tmp20 = tmp15(4729).isThemeDark(props.theme) ? icon.darkPNG : icon.lightPNG;
  }
  const obj3 = self(5442);
};
GuildSettingsModalIntegrationSettings.contextType = fn(4589).ThemeContext;
ReactCompilerGating = fn(558);
let obj3 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrationSettings.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((contentContainerStyle) => {
  const cResult = id(576).c(13);
  contentContainerStyle = contentContainerStyle.contentContainerStyle;
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
  const obj = id(576);
  const stateFromStores = id(504).useStateFromStores(tmp4, tmp5);
  id = stateFromStores.guild;
  const integrations = stateFromStores.integrations;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildRoleStore];
    cResult[2] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== id) {
    const fn2 = function h() {
      let rolesSnapshot;
      if (null != id) {
        rolesSnapshot = GuildRoleStore.getRolesSnapshot(tmp.id);
      }
      return rolesSnapshot;
    };
    cResult[3] = id;
    cResult[4] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
  }
  const tmpResult = id(504);
  const stateFromStores1 = id(504).useStateFromStores(tmp8, tmp10);
  const tmp12 = useThemeDefault();
  if (cResult[5] !== integrations) {
    let found;
    if (integrations != null) {
      found = integrations.filter((type) => {
        const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = id(dependencyMap[31]).SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS;
        return SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS.includes(type.type);
      });
    }
    cResult[5] = integrations;
    cResult[6] = found;
  }
  let tmp17 = null;
  if (null != id) {
    tmp17 = null;
    if (null != tmp16) {
      tmp17 = null;
      if (null != stateFromStores1) {
        if (cResult[7] === contentContainerStyle) {
          if (cResult[8] === id.id) {
            if (cResult[9] === stateFromStores1) {
              if (cResult[10] === tmp16) {
              }
            }
          }
        }
        const obj2 = { guildId: id.id, guildRoles: stateFromStores1, integration: tmp16, theme: tmp12, contentContainerStyle };
        const tmp21 = closure_7(GuildSettingsModalIntegrationSettings, obj2);
        cResult[7] = contentContainerStyle;
        id = id.id;
        cResult[8] = id;
        cResult[9] = stateFromStores1;
        cResult[10] = tmp16;
        cResult[11] = tmp12;
        cResult[12] = tmp21;
      }
    }
  }
  return tmp17;
}) : ((arg0) => {
  guild = undefined;
  ({ integrationId, contentContainerStyle } = arg0);
  const items = [GuildSettingsStore];
  const stateFromStores = guild(504).useStateFromStores(items, () => props.getProps());
  guild = stateFromStores.guild;
  const integrations = stateFromStores.integrations;
  const obj = guild(504);
  const items1 = [GuildRoleStore];
  const stateFromStores1 = guild(504).useStateFromStores(items1, () => {
    let rolesSnapshot;
    if (null != guild) {
      rolesSnapshot = GuildRoleStore.getRolesSnapshot(tmp.id);
    }
    return rolesSnapshot;
  });
  let found;
  const obj2 = guild(504);
  if (integrations != null) {
    found = integrations.filter((type) => {
      const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = guild(dependencyMap[31]).SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS;
      return SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS.includes(type.type);
    });
  }
  let tmp6 = null;
  if (null != guild) {
    tmp6 = null;
    if (null != tmp5) {
      tmp6 = null;
      if (null != stateFromStores1) {
        const obj3 = { guildId: guild.id, guildRoles: stateFromStores1, integration: tmp5, theme: tmp3, contentContainerStyle };
        tmp6 = closure_7(GuildSettingsModalIntegrationSettings, obj3);
      }
    }
  }
  return tmp6;
});