// === Module 17714: GuildSettingsModalIntegrationPlatform ===

// Module 17714 (GuildSettingsModalIntegrationPlatform)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AvatarUtils from "AvatarUtils" /* 1396 */;
import shared from "shared" /* 4488 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4981 */;
import common_AlertDefault from "common/Alert" /* 5075 */;
import PlatformsDefault from "Platforms" /* 5364 */;
import TableRow from "TableRow" /* 5686 */;
import NavigatorHeader from "NavigatorHeader" /* 5705 */;
import TableRowGroup from "TableRowGroup" /* 5768 */;
import TableSwitchRow from "TableSwitchRow" /* 7303 */;
import HeaderActionButton from "HeaderActionButton" /* 7480 */;
import openUserSettings from "openUserSettings" /* 7485 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9192 */;
import GuildSettingsModalIntegrations from "GuildSettingsModalIntegrations" /* 17675 */;
import IntegrationTypes from "IntegrationTypes" /* 17715 */;
import noop from "module_19" /* 19 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9193 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: c3, Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1074);
({ GuildSettingsSections: closure_7, HelpdeskArticles: closure_8, PlatformTypes: closure_9, UserSettingsSections: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(4636);
let obj2 = { form: { paddingTop: nativeDefault.space.PX_16 }, trailingWrapper: { flexDirection: "row", alignItems: "center" }, platformIcon: { width: 24, height: 24 } };
let closure_14 = createStyles.createStyles(obj2);
const Component = noop.Component;
class IntegrationItem extends Component {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.state = { enabled: applyArgumentsResult.props.integration.enabled };
    applyArgumentsResult.handleToggleEnabled = function handleToggleEnabled() {
      const props = guild.props;
      guild = props.guild;
      const integration = props.integration;
      if (!integration.syncing) {
        const setState = tmp.setState;
        if (integration.enabled) {
          setState({ enabled: false });
          let obj3 = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null, confirmColor: null };
          const intl = applyArgumentsResult(1114).intl;
          obj3.title = intl.string(applyArgumentsResult(1114).t.emx3lN);
          if ("youtube" === integration.type) {
            const intl3 = applyArgumentsResult(1114).intl;
            let stringResult = intl3.string(applyArgumentsResult(1114).t.anKQWU);
          } else {
            const intl2 = applyArgumentsResult(1114).intl;
            stringResult = intl2.string(applyArgumentsResult(1114).t["BW/xtn"]);
          }
          obj3.body = stringResult;
          const intl4 = applyArgumentsResult(1114).intl;
          obj3.confirmText = intl4.string(applyArgumentsResult(1114).t.R9GHya);
          const intl5 = applyArgumentsResult(1114).intl;
          obj3.cancelText = intl5.string(applyArgumentsResult(1114).t["ETE/oC"]);
          obj3.onConfirm = function onConfirm() {
            return GuildSettingsActionCreatorsDefault.disableIntegration(guild.id, integration.id);
          };
          obj3.onCancel = function onCancel() {
            return guild.setState({ enabled: true });
          };
          obj3.confirmColor = common_AlertDefault.Colors.RED;
          obj3 = actions_AlertActionCreatorsDefault.show(obj3);
        } else {
          setState({ enabled: true });
          GuildSettingsActionCreatorsDefault.enableIntegration(guild.id, integration.type, integration.id);
        }
      }
      tmp = guild;
    };
    return applyArgumentsResult;
  }
}
IntegrationItem["getDerivedStateFromProps"] = function getDerivedStateFromProps(integration, enabled) {
  integration = integration.integration;
  enabled = enabled.enabled;
  let tmp = null;
  if (enabled) {
    tmp = null;
    if (false === integration.syncing) {
      tmp = null;
      if (integration.enabled !== enabled) {
        const obj = { enabled: integration.enabled };
        tmp = obj;
      }
    }
  }
  return tmp;
};
IntegrationItem.prototype["render"] = function render() {
  const self = this;
  const props = this.props;
  const integration = props.integration;
  ({ onPress: importDefault, styles } = props);
  const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = GuildSettingsModalIntegrations.SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS;
  if (SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS.includes(integration.type)) {
    const type = integration.type;
    if (IntegrationTypes.IntegrationTypes.YOUTUBE === type) {
      const account = integration.account;
      let name;
      if (account != null) {
        name = account.name;
      }
      let combined = name;
    } else if (IntegrationTypes.IntegrationTypes.TWITCH === type) {
      const _HermesInternal = HermesInternal;
      combined = "twitch.tv/" + integration.name;
    }
    value = PlatformsDefault.get(integration.type);
    if (null == value) {
      let str1;
      if (integration.user != null) {
        str1 = str2.toString();
      }
      const obj2 = { label: str1, subLabel: combined, trailing: null, arrow: null, icon: null, disabled: null, onPress: null };
      const obj3 = { style: styles.trailingWrapper, children: null };
      let syncing = integration.syncing;
      if (syncing) {
        syncing = closure_1_11(React3, { animating: true, size: "small" });
      }
      obj3.children = syncing;
      obj2.trailing = closure_1_11(hasOwnProperty, obj3);
      obj2.arrow = integration.enabled && !integration.syncing;
      obj2.icon = null;
      let enabled = integration.enabled;
      let syncing2 = !enabled;
      if (enabled) {
        syncing2 = integration.syncing;
      }
      const obj4 = { hasIcons: true, children: null };
      obj2.disabled = syncing2;
      obj2.onPress = function onPress() {
        let enabled = integration.enabled;
        if (enabled) {
          enabled = importDefault(tmp);
        }
        return enabled;
      };
      const items = [closure_1_11(TableRow.TableRow, obj2), ];
      const obj5 = { value: null, disabled: null, onValueChange: null, label: null };
      const _Boolean = Boolean;
      obj5.value = Boolean(self.state.enabled);
      obj5.disabled = true === integration.syncing;
      obj5.onValueChange = self.handleToggleEnabled;
      const intl = util.intl;
      obj5.label = intl.string(util.t.vQC6vR);
      items[1] = closure_1_11(TableSwitchRow.TableSwitchRow, obj5);
      obj4.children = items;
      return closure_1_12(TableRowGroup.TableRowGroup, obj4);
    } else {
      const tmpResult = AvatarUtils;
      const tmpResult2 = shared;
      const icon = { source: null, style: null };
      icon.source = tmpResult.makeSource(shared.isThemeDark(props.theme) ? icon.darkPNG : icon.lightPNG);
      icon.style = styles.platformIcon;
      closure_1_11(React4, icon);
      const tmp14 = shared.isThemeDark(props.theme) ? icon.darkPNG : icon.lightPNG;
    }
  } else {
    return null;
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrationPlatform.tsx");

export default function GuildSettingsModalIntegrationPlatform(platformType) {
  platformType = platformType.platformType;
  const closeGuildSettings = platformType.closeGuildSettings;
  c5 = undefined;
  guild = undefined;
  function onSave() {
    if (null != guild) {
      const obj2 = { features: guild.features };
      GuildSettingsActionCreatorsDefault.saveGuild(guild.id, obj2);
    }
  }
  const token = platformType(4338).useToken(closeGuildSettings(576).modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_14();
  dependencyMap = tmp5;
  let obj = platformType(4338);
  const navigation = platformType(1483).useNavigation();
  let obj2 = platformType(1483);
  const items = [guild];
  const stateFromStoresObject = platformType(504).useStateFromStoresObject(items, () => ({ guild: guild.getGuild(), submitting: guild.isSubmitting(), hasChanges: guild.hasChanges() }));
  const submitting = stateFromStoresObject.submitting;
  ({ hasChanges: c5, guild } = stateFromStoresObject);
  const theme = closeGuildSettings(4571)();
  const obj4 = platformType(504);
  const items1 = [guild];
  const stateFromStores = platformType(504).useStateFromStores(items1, () => guild.getProps().integrations);
  if (stateFromStores != null) {
    const found = stateFromStores.filter((type) => type.type === platformType);
  }
  if (null == guild) {
    return null;
  } else {
    let fn;
    if (submitting) {
      fn = () => null;
    }
    const obj3 = { headerLeft: fn, title: null, headerRight: null };
    value = tmp3(5364).get(platformType);
    let name;
    if (value != null) {
      name = value.name;
    }
    function onConectTap() {
      closeGuildSettings();
      openUserSettings.openUserSettings({ screen: constants3.CONNECTIONS, isRootScreen: true });
    }
    obj3.title = name;
    obj3.headerRight = function headerRight() {
      if (submitting) {
        let tmp2 = closure_2_11(NavigatorHeader.HeaderSubmittingIndicator, {});
      } else {
        tmp2 = null;
        if (c5) {
          const obj = { text: null, onPress: null };
          const intl = util.intl;
          obj.text = intl.string(util.t["R3BPH+"]);
          obj.onPress = onSave;
          tmp2 = closure_2_11(HeaderActionButton.HeaderActionButton, obj);
        }
      }
      return tmp2;
    };
    navigation.setOptions(obj3);
    if (constants2.YOUTUBE === platformType) {
      let intl = tmp(1114).intl;
      const obj6 = { connectAction: onConectTap, helpdeskArticle: tmp3(2024).getArticleURL(onSave.YOUTUBE_INTEGRATION) };
      let formatResult = intl.format(tmp(1114).t["4OSAQ9"], obj6);
      const tmp3Result3 = tmp3(2024);
    } else if (tmp10.TWITCH === platformType) {
      const intl2 = tmp(1114).intl;
      const obj7 = { connectAction: onConectTap, helpdeskArticle: tmp3(2024).getArticleURL(onSave.TWITCH_INTEGRATION) };
      formatResult = intl2.format(tmp(1114).t.ro1jEN, obj7);
      const tmp3Result4 = tmp3(2024);
    }
    const obj8 = { style: tmp5.form, contentContainerStyle: platformType.contentContainerStyle, children: null };
    const obj9 = { style: null, spacing: null, children: null };
    const obj10 = { paddingHorizontal: token };
    obj9.style = obj10;
    obj9.spacing = tmp3(576).space.PX_24;
    let mapped;
    if (found != null) {
      mapped = found.map((integration, index) => {
        const integrationId = index;
        return closure_1_11(IntegrationItem, {
          guild,
          theme,
          integration,
          styles,
          onPress() {
            navigation.push(constants.INTEGRATION_SETTINGS, { integrationId });
          }
        }, integration.id);
      });
    }
    const obj11 = { children: null };
    const items2 = [mapped, ];
    const obj12 = { variant: "text-sm/medium", color: "text-muted", children: formatResult };
    items2[1] = closure_11(tmp(4632).Text, obj12);
    obj9.children = items2;
    obj8.children = closure_12(tmp(5054).Stack, obj9);
    const items3 = [closure_11(tmp(8716).Form, obj8), closure_11(tmp(7143).NavScrim, {})];
    obj11.children = items3;
    return closure_12(closure_13, obj11);
  }
  const obj5 = platformType(504);
};