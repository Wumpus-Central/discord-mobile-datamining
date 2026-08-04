import get_ActivityIndicator from "getPlatformUserUrl";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import handleFormInit from "handleFormInit";
import jsxProd from "Stack";
import createCacheKey from "createCacheKey";
import { PureComponent } from "AccessibilityAnnouncer";
import importAllResult from "AccessibilityAnnouncer";

let c3;
let c4;
let c9;
let error;
let metroImportAll;
let require = arg1;
function GraceOption(option) {
  const iter = option.option;
  const onPress = option.onPress;
  return callback(iter(7794).TableRadioRow, {
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
    let tmp2Result = tmp2(closure_4, { animating: true, size: "small" });
  } else {
    let obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl.string(require(1236) /* getSystemLocale */.t["+Josox"]);
    obj[2] = tmp;
    obj = { source: null };
    obj[0] = importDefault(16553);
    obj[3] = tmp2(require(5315) /* TableRowInner */.TableRow.Icon, obj);
    tmp2Result = tmp2(require(4812) /* PressableBase */.PressableOpacity, obj);
  }
  return tmp2Result;
}
function TwitchEmoticonsRow(integration) {
  integration = integration.integration;
  let obj = { helperText: null, hasIcons: false, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t["7r4OKg"]);
  obj = { label: null, value: null, onValueChange: null, disabled: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl2.string(require(1236) /* getSystemLocale */.t.bZBLBs);
  obj[1] = Boolean(integration.enable_emoticons);
  obj[2] = integration.onPress;
  obj[3] = integration.syncing;
  obj[2] = callback(require(5650) /* TableSwitchRow */.TableSwitchRow, obj);
  return callback(require(5649) /* TableRowGroupTitle */.TableRowGroup, obj);
}
({ Image: c3, ActivityIndicator: c4 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll, Fragment: c9 } = jsxProd);
createCacheKey = { integrationLabel: { fontSize: 24 }, integrationIcon: { width: 48, height: 48, marginRight: 16 }, forceSyncIcon: { marginLeft: 10 }, value: { textAlign: "right" }, stackPadding: null };
createCacheKey = { paddingHorizontal: require("Themes").modules.mobile.TABLE_ROW_PADDING };
createCacheKey[4] = createCacheKey;
createCacheKey = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
class GuildSettingsModalIntegrationSettings extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleExpireBehaviorChange = function handleExpireBehaviorChange(expire_behavior) {
      let guildId;
      let integration;
      ({ guildId, integration } = applyArgumentsResult.props);
      outer1_1(outer1_2[26]).updateIntegration(guildId, integration.id, expire_behavior, integration.expire_grace_period, integration.enable_emoticons);
    };
    applyArgumentsResult.handleExpireGracePeriodChange = function handleExpireGracePeriodChange(expire_grace_period) {
      let guildId;
      let integration;
      ({ guildId, integration } = applyArgumentsResult.props);
      outer1_1(outer1_2[26]).updateIntegration(guildId, integration.id, integration.expire_behavior, expire_grace_period, integration.enable_emoticons);
    };
    applyArgumentsResult.handleToggleEmotes = function handleToggleEmotes(enable_emoticons) {
      let guildId;
      let integration;
      ({ guildId, integration } = applyArgumentsResult.props);
      outer1_1(outer1_2[26]).updateIntegration(guildId, integration.id, integration.expire_behavior, integration.expire_grace_period, enable_emoticons);
    };
    applyArgumentsResult.handleSync = function handleSync() {
      let guildId;
      let integration;
      ({ guildId, integration } = applyArgumentsResult.props);
      outer1_1(outer1_2[26]).syncIntegration(guildId, integration.id);
    };
    return applyArgumentsResult;
  }
}
GuildSettingsModalIntegrationSettings.prototype["render"] = function render() {
  let self = this;
  self = this;
  const iter = createCacheKey(this.context);
  const props = this.props;
  const integration = props.integration;
  const role_id = integration.role_id;
  let tmp = null;
  if (null != role_id) {
    tmp = props.guildRoles[role_id];
  }
  if (null != tmp) {
    let obj = { label: null, trailing: null };
    let intl = integration(1236).intl;
    obj[0] = intl.string(integration(1236).t.eBtNBa);
    obj = { style: null, variant: "text-md/medium", color: "text-muted", children: null };
    obj[0] = iter.value;
    obj[3] = tmp.name;
    obj[1] = callback(integration(4281).Text, obj);
    const tmp2 = callback(integration(5315).TableRow, obj);
  }
  if ("youtube" === integration.type) {
    const account = integration.account;
    let name;
    if (account != null) {
      name = account.name;
    }
    const intl2 = integration(1236).intl;
    let stringResult = intl2.string(integration(1236).t.A5MiqO);
    let RdUTrl = integration(1236).t["7lNtce"];
    let combined = name;
    let tmp12 = integration;
    let tmp15 = integration;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "twitch.tv/" + integration.name;
    const intl9 = integration(1236).intl;
    stringResult = intl9.string(integration(1236).t["S/WCrG"]);
    RdUTrl = integration(1236).t.RdUTrl;
    obj = { integration: null, onPress: null };
    obj[0] = integration;
    obj[1] = self.handleToggleEmotes;
    tmp12 = integration;
    tmp15 = integration;
    const tmp13 = callback(TwitchEmoticonsRow, obj);
  }
  let obj2 = self(4966);
  const value = obj2.get(integration.type);
  if (null == value) {
    const _Object = Object;
    const values = Object.values(tmp12(16552).IntegrationExpireGracePeriodTypes);
    const found = values.filter((arg0) => Number.isInteger(arg0));
    const mapped = found.map((days) => {
      let obj = { value: days, label: null };
      const intl = integration(1236).intl;
      obj = { days };
      obj[1] = intl.formatToPlainString(integration(1236).t.eGjmy5, obj);
      return obj;
    });
    const obj1 = { style: null, contentContainerStyle: null, children: null };
    obj1[0] = { flex: 1 };
    const items = [{ paddingTop: 16 }, self.props.contentContainerStyle];
    obj1[1] = items;
    obj2 = { style: null, spacing: null, children: null };
    obj2[0] = iter.stackPadding;
    obj2[1] = tmp16(712).space.PX_24;
    let str = integration.user;
    str = undefined;
    if (str != null) {
      str = str.toString();
    }
    const obj3 = { hasIcons: true, children: null };
    const obj4 = { label: null, subLabel: null, icon: null };
    obj4[0] = str;
    obj4[1] = combined;
    obj4[2] = null;
    obj3[1] = callback(tmp15(5315).TableRow, obj4);
    const items1 = [callback(tmp15(5649).TableRowGroup, obj3), , , , ];
    const obj5 = { title: null, hasIcons: false, children: null };
    const intl3 = tmp15(1236).intl;
    obj5[0] = intl3.string(tmp15(1236).t.i17qFc);
    const intl4 = tmp15(1236).intl;
    let str2 = integration.subscriber_count;
    if (str2 == null) {
      str2 = "";
    }
    const obj6 = { label: null, subLabel: null, trailing: null };
    const obj7 = { subscribers: null };
    obj7[0] = str2;
    obj6[0] = intl4.format(RdUTrl, obj7);
    const intl5 = tmp15(1236).intl;
    const obj8 = { datetime: null };
    let obj14 = tmp16(3867)(integration.synced_at);
    obj8[0] = obj14.calendar();
    obj6[1] = intl5.formatToPlainString(tmp15(1236).t["+42M+u"], obj8);
    let flag = integration.syncing;
    if (flag == null) {
      flag = false;
    }
    const obj9 = { children: null };
    const obj10 = { isSyncing: null, onPress: null };
    obj10[0] = flag;
    obj10[1] = self.handleSync;
    obj6[2] = callback(ForceSyncIcon, obj10);
    const items2 = [callback(tmp15(5315).TableRow, obj6), tmp2];
    obj5[2] = items2;
    items1[1] = closure_8(tmp15(5649).TableRowGroup, obj5);
    const obj11 = { title: null, value: null, onChange: null, hasIcons: false, children: null };
    obj11[0] = stringResult;
    obj11[1] = integration.expire_behavior;
    obj11[2] = self.handleExpireBehaviorChange;
    const obj12 = { value: null, label: null };
    obj12[0] = tmp15(16554).IntegrationExpireBehaviorTypes.REMOVE_ROLE;
    const intl6 = tmp15(1236).intl;
    obj12[1] = intl6.string(tmp15(1236).t["6kpw4i"]);
    const items3 = [callback(tmp15(7794).TableRadioRow, obj12), ];
    const obj13 = { value: null, label: null };
    obj13[0] = tmp15(16554).IntegrationExpireBehaviorTypes.KICK;
    const intl7 = tmp15(1236).intl;
    obj13[1] = intl7.string(tmp15(1236).t.fQUQIJ);
    items3[1] = callback(tmp15(7794).TableRadioRow, obj13);
    obj11[4] = items3;
    items1[2] = closure_8(tmp15(7795).TableRadioGroup, obj11);
    obj14 = { title: null, hasIcons: false, children: null };
    const intl8 = tmp15(1236).intl;
    obj14[0] = intl8.string(tmp15(1236).t.uiXMow);
    obj14[2] = mapped.map((option) => outer1_7(outer1_11, { integration, option, onPress: self.handleExpireGracePeriodChange }, arg1));
    items1[3] = callback(tmp15(5649).TableRowGroup, obj14);
    items1[4] = tmp13;
    obj2[2] = items1;
    obj1[2] = closure_8(tmp15(4693).Stack, obj2);
    const items4 = [callback(tmp15(7777).Form, obj1), callback(tmp15(5596).NavScrim, {})];
    obj9[0] = items4;
    return closure_8(closure_9, obj9);
  } else {
    let tmp15Result = tmp15(1416);
    tmp15Result = tmp15(4131);
    let icon = value.icon;
    icon = { source: null, style: null };
    icon[0] = tmp15Result.makeSource(tmp15Result.isThemeDark(props.theme) ? icon.darkPNG : icon.lightPNG);
    icon[1] = iter.integrationIcon;
    callback(closure_3, icon);
    const tmp18 = callback;
    const tmp19 = closure_3;
    const tmp20 = tmp15Result.isThemeDark(props.theme) ? icon.darkPNG : icon.lightPNG;
  }
};
GuildSettingsModalIntegrationSettings.contextType = require("ManaContext").ThemeContext;
const result = require("createGuildRoleRecordFromRust").fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrationSettings.tsx");

export default function ConnectedGuildSettingsModalIntegrationSettings(arg0) {
  let contentContainerStyle;
  let integrationId;
  let guild;
  ({ integrationId, contentContainerStyle } = arg0);
  let obj = guild(589);
  const items = [handleFormInit];
  const stateFromStores = obj.useStateFromStores(items, () => props.getProps());
  guild = stateFromStores.guild;
  const integrations = stateFromStores.integrations;
  const items1 = [createGuildRoleRecordFromRust];
  const stateFromStores1 = guild(589).useStateFromStores(items1, () => {
    let rolesSnapshot;
    if (null != guild) {
      rolesSnapshot = outer1_5.getRolesSnapshot(tmp.id);
    }
    return rolesSnapshot;
  });
  let found;
  const obj2 = guild(589);
  if (integrations != null) {
    found = integrations.filter((type) => {
      const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = guild(table[29]).SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS;
      return SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS.includes(type.type);
    });
  }
  let tmp6 = null;
  if (null != guild) {
    tmp6 = null;
    if (null != tmp5) {
      tmp6 = null;
      if (null != stateFromStores1) {
        obj = { guildId: null, guildRoles: null, integration: null, theme: null, contentContainerStyle: null };
        obj[0] = guild.id;
        obj[1] = stateFromStores1;
        obj[2] = tmp5;
        obj[3] = tmp3;
        obj[4] = contentContainerStyle;
        tmp6 = callback(GuildSettingsModalIntegrationSettings, obj);
      }
    }
  }
  return tmp6;
};