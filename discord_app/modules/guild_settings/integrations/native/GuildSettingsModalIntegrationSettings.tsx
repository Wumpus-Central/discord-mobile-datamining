// === Module 17595: GuildSettingsModalIntegrationSettings ===

// Module 17595 (GuildSettingsModalIntegrationSettings)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Pressables from "Pressables" /* 5123 */;
import TableRow from "TableRow" /* 5605 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import TableRadioRow from "TableRadioRow" /* 5688 */;
import TableSwitchRow from "TableSwitchRow" /* 7201 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9063 */;
import _modDef17597 from "module_17597" /* 17597 */;
import noop from "module_19" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9064 */;

require = fn;
function GraceOption(option) {
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
}
function ForceSyncIcon(isSyncing) {
  if (isSyncing.isSyncing) {
    let tmp2Result = React5(React4, { animating: true, size: "small" });
  } else {
    let obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t["+Josox"]);
    obj.onPress = tmp;
    obj = { source: _modDef17597 };
    obj.children = React5(TableRow.TableRow.Icon, obj);
    tmp2Result = React5(Pressables.PressableOpacity, obj);
  }
  return tmp2Result;
}
function TwitchEmoticonsRow(integration) {
  integration = integration.integration;
  let obj = { helperText: null, hasIcons: false, children: null };
  const intl = util.intl;
  obj.helperText = intl.string(util.t["7r4OKg"]);
  obj = { label: null, value: null, onValueChange: null, disabled: null };
  const intl2 = util.intl;
  obj.label = intl2.string(util.t.bZBLBs);
  obj.value = Boolean(integration.enable_emoticons);
  obj.onValueChange = integration.onPress;
  obj.disabled = integration.syncing;
  obj.children = React5(TableSwitchRow.TableSwitchRow, obj);
  return React5(TableRowGroup.TableRowGroup, obj);
}
get_ActivityIndicator = fn(17);
({ Image: c3, ActivityIndicator: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
fn(4560);
let createStyles = { integrationLabel: { fontSize: 24 }, integrationIcon: { width: 48, height: 48, marginRight: 16 }, forceSyncIcon: { marginLeft: 10 }, value: { textAlign: "right" }, stackPadding: null };
createStyles = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
createStyles.stackPadding = createStyles;
let closure_10 = createStyles.createLegacyClassComponentStyles(createStyles);
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
    let intl = integration(1114).intl;
    obj.label = intl.string(integration(1114).t.eBtNBa);
    obj = { style: iter.value, variant: "text-md/medium", color: "text-muted", children: tmp.name };
    obj.trailing = closure_7(integration(4556).Text, obj);
    const tmp2 = closure_7(integration(5605).TableRow, obj);
  }
  if ("youtube" === integration.type) {
    const account = integration.account;
    let name;
    if (account != null) {
      name = account.name;
    }
    const intl2 = integration(1114).intl;
    let stringResult = intl2.string(integration(1114).t.A5MiqO);
    let RdUTrl = integration(1114).t["7lNtce"];
    let combined = name;
    let tmp12 = integration;
    let tmp15 = integration;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "twitch.tv/" + integration.name;
    const intl9 = integration(1114).intl;
    stringResult = intl9.string(integration(1114).t["S/WCrG"]);
    RdUTrl = integration(1114).t.RdUTrl;
    obj = { integration, onPress: self.handleToggleEmotes };
    tmp12 = integration;
    tmp15 = integration;
    const tmp13 = closure_7(TwitchEmoticonsRow, obj);
  }
  let obj2 = self(5283);
  value = obj2.get(integration.type);
  if (null == value) {
    const _Object = Object;
    const values = Object.values(tmp12(17596).IntegrationExpireGracePeriodTypes);
    const found = values.filter((item) => Number.isInteger(item));
    const mapped = found.map((value) => {
      let obj = { value, label: null };
      const intl = integration(1114).intl;
      obj = { days: value };
      obj.label = intl.formatToPlainString(integration(1114).t.eGjmy5, obj);
      return obj;
    });
    const obj1 = { style: { flex: 1 }, contentContainerStyle: null, children: null };
    const items = [{ paddingTop: 16 }, self.props.contentContainerStyle];
    obj1.contentContainerStyle = items;
    obj2 = { style: iter.stackPadding, spacing: tmp16(576).space.PX_24, children: null };
    let str;
    if (str != null) {
      str = str.toString();
    }
    const obj3 = { hasIcons: true, children: null };
    const obj4 = { label: str, subLabel: combined, icon: null };
    obj3.children = closure_7(tmp15(5605).TableRow, obj4);
    const items1 = [closure_7(tmp15(5687).TableRowGroup, obj3), , , , ];
    const obj5 = { title: null, hasIcons: false, children: null };
    const intl3 = tmp15(1114).intl;
    obj5.title = intl3.string(tmp15(1114).t.i17qFc);
    const intl4 = tmp15(1114).intl;
    let str2 = integration.subscriber_count;
    if (str2 == null) {
      str2 = "";
    }
    const obj6 = { label: null, subLabel: null, trailing: null };
    const obj7 = { subscribers: str2 };
    obj6.label = intl4.format(RdUTrl, obj7);
    const intl5 = tmp15(1114).intl;
    const obj8 = { datetime: null };
    let obj14 = tmp16(4153)(integration.synced_at);
    obj8.datetime = obj14.calendar();
    obj6.subLabel = intl5.formatToPlainString(tmp15(1114).t["+42M+u"], obj8);
    let flag = integration.syncing;
    if (flag == null) {
      flag = false;
    }
    const obj9 = { children: null };
    const obj10 = { isSyncing: flag, onPress: self.handleSync };
    obj6.trailing = closure_7(ForceSyncIcon, obj10);
    const items2 = [closure_7(tmp15(5605).TableRow, obj6), tmp2];
    obj5.children = items2;
    items1[1] = closure_8(tmp15(5687).TableRowGroup, obj5);
    const obj11 = { title: stringResult, value: integration.expire_behavior, onChange: self.handleExpireBehaviorChange, hasIcons: false, children: null };
    const obj12 = { value: tmp15(17598).IntegrationExpireBehaviorTypes.REMOVE_ROLE, label: null };
    const intl6 = tmp15(1114).intl;
    obj12.label = intl6.string(tmp15(1114).t["6kpw4i"]);
    const items3 = [closure_7(tmp15(5688).TableRadioRow, obj12), ];
    const obj13 = { value: tmp15(17598).IntegrationExpireBehaviorTypes.KICK, label: null };
    const intl7 = tmp15(1114).intl;
    obj13.label = intl7.string(tmp15(1114).t.fQUQIJ);
    items3[1] = closure_7(tmp15(5688).TableRadioRow, obj13);
    obj11.children = items3;
    items1[2] = closure_8(tmp15(5685).TableRadioGroup, obj11);
    obj14 = { title: null, hasIcons: false, children: null };
    const intl8 = tmp15(1114).intl;
    obj14.title = intl8.string(tmp15(1114).t.uiXMow);
    obj14.children = mapped.map((option, index) => React5(GraceOption, { integration, option, onPress: self.handleExpireGracePeriodChange }, index));
    items1[3] = closure_7(tmp15(5687).TableRowGroup, obj14);
    items1[4] = tmp13;
    obj2.children = items1;
    obj1.children = closure_8(tmp15(4973).Stack, obj2);
    const items4 = [closure_7(tmp15(8593).Form, obj1), closure_7(tmp15(7040).NavScrim, {})];
    obj9.children = items4;
    return closure_8(closure_9, obj9);
  } else {
    tmp15(1396);
    const tmp15Result = tmp15(4411);
    const icon = { source: null, style: null };
    icon.source = tmp15Result.makeSource(tmp15Result.isThemeDark(props.theme) ? icon.darkPNG : icon.lightPNG);
    icon.style = iter.integrationIcon;
    closure_7(closure_3, icon);
    const tmp20 = tmp15Result.isThemeDark(props.theme) ? icon.darkPNG : icon.lightPNG;
  }
};
GuildSettingsModalIntegrationSettings.contextType = fn(4271).ThemeContext;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrationSettings.tsx");

export default function ConnectedGuildSettingsModalIntegrationSettings(arg0) {
  let guild;
  ({ integrationId, contentContainerStyle } = arg0);
  let obj = guild(504);
  const items = [GuildSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => props.getProps());
  guild = stateFromStores.guild;
  const integrations = stateFromStores.integrations;
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
      const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = guild(dependencyMap[29]).SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS;
      return SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS.includes(type.type);
    });
  }
  let tmp6 = null;
  if (null != guild) {
    tmp6 = null;
    if (null != tmp5) {
      tmp6 = null;
      if (null != stateFromStores1) {
        obj = { guildId: guild.id, guildRoles: stateFromStores1, integration: tmp5, theme: tmp3, contentContainerStyle };
        tmp6 = closure_7(GuildSettingsModalIntegrationSettings, obj);
      }
    }
  }
  return tmp6;
};