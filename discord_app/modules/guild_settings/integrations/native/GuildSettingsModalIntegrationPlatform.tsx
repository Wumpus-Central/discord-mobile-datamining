// === Module 17599: GuildSettingsModalIntegrationPlatform ===

// Module 17599 (GuildSettingsModalIntegrationPlatform)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AvatarUtils from "AvatarUtils" /* 1396 */;
import shared from "shared" /* 4411 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import common_AlertDefault from "common/Alert" /* 4994 */;
import PlatformsDefault from "Platforms" /* 5283 */;
import TableRow from "TableRow" /* 5605 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import TableSwitchRow from "TableSwitchRow" /* 7201 */;
import HeaderActionButton from "HeaderActionButton" /* 7377 */;
import openUserSettings from "openUserSettings" /* 7382 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9063 */;
import GuildSettingsModalIntegrations from "GuildSettingsModalIntegrations" /* 17560 */;
import IntegrationTypes from "IntegrationTypes" /* 17600 */;
import noop from "module_19" /* 19 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9064 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: c3, Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1074);
({ GuildSettingsSections: closure_7, HelpdeskArticles: closure_8, PlatformTypes: closure_9, UserSettingsSections: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
fn(4560);
let createStyles = { form: null, trailingWrapper: null, platformIcon: null };
createStyles = { paddingTop: nativeDefault.space.PX_16 };
createStyles.form = createStyles;
createStyles.trailingWrapper = { flexDirection: "row", alignItems: "center" };
createStyles.platformIcon = { width: 24, height: 24 };
let closure_14 = createStyles.createStyles(createStyles);
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
          let showResult = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null, confirmColor: null };
          const intl = applyArgumentsResult(1114).intl;
          showResult.title = intl.string(applyArgumentsResult(1114).t.emx3lN);
          if ("youtube" === integration.type) {
            const intl3 = applyArgumentsResult(1114).intl;
            let stringResult = intl3.string(applyArgumentsResult(1114).t.anKQWU);
          } else {
            const intl2 = applyArgumentsResult(1114).intl;
            stringResult = intl2.string(applyArgumentsResult(1114).t["BW/xtn"]);
          }
          showResult.body = stringResult;
          const intl4 = applyArgumentsResult(1114).intl;
          showResult.confirmText = intl4.string(applyArgumentsResult(1114).t.R9GHya);
          const intl5 = applyArgumentsResult(1114).intl;
          showResult.cancelText = intl5.string(applyArgumentsResult(1114).t["ETE/oC"]);
          showResult.onConfirm = function onConfirm() {
            return GuildSettingsActionCreatorsDefault.disableIntegration(guild.id, integration.id);
          };
          showResult.onCancel = function onCancel() {
            return guild.setState({ enabled: true });
          };
          showResult.confirmColor = common_AlertDefault.Colors.RED;
          showResult = actions_AlertActionCreatorsDefault.show(showResult);
        } else {
          setState({ enabled: true });
          showResult = GuildSettingsActionCreatorsDefault;
          showResult.enableIntegration(guild.id, integration.type, integration.id);
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
      let str = "twitch.tv/";
      combined = "twitch.tv/" + integration.name;
    }
    let obj = PlatformsDefault;
    value = obj.get(integration.type);
    if (null == value) {
      str = undefined;
      if (integration.user != null) {
        str = str2.toString();
      }
      obj = { label: str, subLabel: combined, trailing: null, arrow: null, icon: null, disabled: null, onPress: null };
      obj = { style: styles.trailingWrapper, children: null };
      let syncing = integration.syncing;
      if (syncing) {
        syncing = closure_1_11(React3, { animating: true, size: "small" });
      }
      obj.children = syncing;
      obj.trailing = closure_1_11(hasOwnProperty, obj);
      obj.arrow = integration.enabled && !integration.syncing;
      obj.icon = null;
      let enabled = integration.enabled;
      let syncing2 = !enabled;
      if (enabled) {
        syncing2 = integration.syncing;
      }
      const obj1 = { hasIcons: true, children: null };
      obj.disabled = syncing2;
      obj.onPress = function onPress() {
        let enabled = integration.enabled;
        if (enabled) {
          enabled = importDefault(tmp);
        }
        return enabled;
      };
      const items = [closure_1_11(TableRow.TableRow, obj), ];
      const obj2 = { value: null, disabled: null, onValueChange: null, label: null };
      const _Boolean = Boolean;
      obj2.value = Boolean(self.state.enabled);
      obj2.disabled = true === integration.syncing;
      obj2.onValueChange = self.handleToggleEnabled;
      const intl = util.intl;
      obj2.label = intl.string(util.t.vQC6vR);
      items[1] = closure_1_11(TableSwitchRow.TableSwitchRow, obj2);
      obj1.children = items;
      return closure_1_12(TableRowGroup.TableRowGroup, obj1);
    } else {
      const tmpResult = shared;
      const icon = { source: null, style: null };
      icon.source = tmpResult.makeSource(tmpResult.isThemeDark(props.theme) ? icon.darkPNG : icon.lightPNG);
      icon.style = styles.platformIcon;
      closure_1_11(React4, icon);
      const tmp14 = tmpResult.isThemeDark(props.theme) ? icon.darkPNG : icon.lightPNG;
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
      const obj = { features: guild.features };
      obj.saveGuild(guild.id, obj);
    }
  }
  let obj = platformType(4262);
  const token = obj.useToken(closeGuildSettings(576).modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_14();
  dependencyMap = tmp5;
  let obj1 = platformType(1483);
  const navigation = obj1.useNavigation();
  let obj3 = platformType(504);
  const items = [guild];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => ({ guild: guild.getGuild(), submitting: guild.isSubmitting(), hasChanges: guild.hasChanges() }));
  const submitting = stateFromStoresObject.submitting;
  ({ hasChanges: c5, guild } = stateFromStoresObject);
  const theme = closeGuildSettings(4495)();
  let obj4 = platformType(504);
  const items1 = [guild];
  const stateFromStores = obj4.useStateFromStores(items1, () => guild.getProps().integrations);
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
    obj = { headerLeft: fn, title: null, headerRight: null };
    let tmp3Result = tmp3(5283);
    value = tmp3Result.get(platformType);
    let name;
    if (value != null) {
      name = value.name;
    }
    function onConectTap() {
      closeGuildSettings();
      const obj = { screen: constants3.CONNECTIONS, isRootScreen: true };
      obj.openUserSettings(obj);
    }
    obj.title = name;
    obj.headerRight = function headerRight() {
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
    navigation.setOptions(obj);
    if (constants2.YOUTUBE === platformType) {
      let intl = tmp(1114).intl;
      obj = { connectAction: onConectTap, helpdeskArticle: null };
      tmp3Result = tmp3(2024);
      obj.helpdeskArticle = tmp3Result.getArticleURL(onSave.YOUTUBE_INTEGRATION);
      let formatResult = intl.format(tmp(1114).t["4OSAQ9"], obj);
    } else if (tmp10.TWITCH === platformType) {
      const intl2 = tmp(1114).intl;
      obj1 = { connectAction: onConectTap, helpdeskArticle: tmp3(2024).getArticleURL(onSave.TWITCH_INTEGRATION) };
      formatResult = intl2.format(tmp(1114).t.ro1jEN, obj1);
      const tmp3Result1 = tmp3(2024);
    }
    const obj2 = { style: tmp5.form, contentContainerStyle: platformType.contentContainerStyle, children: null };
    obj3 = { style: null, spacing: null, children: null };
    obj4 = { paddingHorizontal: token };
    obj3.style = obj4;
    obj3.spacing = tmp3(576).space.PX_24;
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
    const obj5 = { children: null };
    const items2 = [mapped, ];
    const obj6 = { variant: "text-sm/medium", color: "text-muted", children: formatResult };
    items2[1] = closure_11(tmp(4556).Text, obj6);
    obj3.children = items2;
    obj2.children = closure_12(tmp(4973).Stack, obj3);
    const items3 = [closure_11(tmp(8593).Form, obj2), closure_11(tmp(7040).NavScrim, {})];
    obj5.children = items3;
    return closure_12(closure_13, obj5);
  }
};